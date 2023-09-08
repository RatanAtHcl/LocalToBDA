/*
 *  **************************************************************************
 *  Licensed Materials - Property of HCL
 *  (c) Copyright HCL Technologies Ltd.  2020. All Rights Reserved.
 *  US Government Users Restricted Rights - Use, duplication or disclosure
 *  restricted by GSA ADP Schedule Contract with HCL Technologies.
 *  **************************************************************************
 */

/**
 * @fileOverview The browserService implements some low-level methods for
 * modifying / accessing the DOM.
 * @exports browserService
 */

/*global DCX:true, XPathResult:true, document: true */
/*global console: false */

/**
 * @name browserService
 * @namespace
 */
DCX.addService("browser", function (core) {
    "use strict";

    var utils = core.utils,
        jQuery,
        queryDom,
        handlerMappings,
        errorCodes = {
            JQUERY_NOT_SUPPORTED: "JQUERYNOTSUPPORTED",
            JQUERY_NOT_FOUND: "JQUERYNOTFOUND"
        },
        configService = core.getService("config"),
        base = core.getService('browserBase'),
        // from w3c
        addEventListener = null,
        removeEventListener = null,
        isInitialized = false;


    /**
     * Returns a new function which will be used in the subscribe method and
     *     which calls the handler function with the normalized WebEvent.
     * @private
     * @function
     * @name browserService-wrapWebEvent
     * @param  {Function} handler The handler which was passed to the
     *     browserService's subscribe method.
     * @return {Function}         Returns a new function which, when called,
     *     passes a WebEvent to the handler.
     */
    function wrapWebEvent(handler) {
        return function (event) {
            /* IE8 only allows access to event attributes in the context of an Event.
             * We need to instantiate our event in a local variable here before passing it 
             * into the setTimeout handler.
             */
            var webEvent = new base.WebEvent(event);
            if (event.type === "resize" || event.type === "hashchange") {
                /* Certain events like resize & hashchange need to be processed after their triggering events
                 * e.g. orientationchange could trigger a resize or a click handler could trigger a hashchange etc.
                 * To account for these cases, process these events after giving a chance for the triggering event
                 * to be processed first.
                 */
                setTimeout(function () {
                    handler(webEvent);
                }, 5);
            } else {
                handler(webEvent);
            }
        };
    }


    /**
     * Check wether a certain method exists on the jQuery object. If not an exception is thrown.
     * @function
     * @private
     * @name browserService-jQueryFnExists
     * @param  {Objcet} object   The jQuery object.
     * @param  {String} property The methodname te test for.
     */
    function jQueryFnExists(object, property) {
        if (typeof object[property] !== "function") {
            core.fail("jQuery Object does not support " + property, errorCodes.JQUERY_NOT_SUPPORTED);
        }
    }


    /**
     * Check for correct jQuery version and methods.
     * Throws an exception if jQuery is not supported by the library.
     * @function
     * @private
     * @name browserService-verifyJQuery
     */
    function verifyJQuery() {
        var wrapperFunctions = ["on", "off"],
            jQFunctions = ["ajax", "find", "getScript"],
            jQVersion,
            jQVersionMajor,
            jQVersionMinor,
            parsedJQVersion,
            i,
            len = 0,
            dummyWrapper = null;
        if (typeof jQuery !== "function") {
            core.fail("jQuery not found.", errorCodes.JQUERY_NOT_FOUND);
        }

        for (i = 0, len = jQFunctions.length; i < len; i += 1) {
            jQueryFnExists(jQuery, jQFunctions[i]);
        }

        for (i = 0, len = wrapperFunctions.length, dummyWrapper = jQuery({}); i < len; i += 1) {
            jQueryFnExists(dummyWrapper, wrapperFunctions[i]);
        }

        // jQuery version check. jQuery < 1.7 is not supported.
        jQVersion = jQuery.fn.jquery;
        parsedJQVersion = utils.parseVersion(jQVersion);
        jQVersionMajor = parsedJQVersion[0];
        jQVersionMinor = parsedJQVersion[1];

        if (jQVersionMajor < 1 || (jQVersionMajor === 1 && jQVersionMinor < 7)) {
            core.fail("jQuery version (" + jQVersion + ") is not supported. Require jQuery 1.7+", errorCodes.JQUERY_NOT_SUPPORTED);
        }
    }


    /**
     * @private
     * @namespace
     * @name browserService-queryDom
     */
    queryDom = {
        /**
         * Helper function to transform a nodelist into an array.
         * @function
         * @name browserService-queryDom.list2Array
         * @param  {List} nodeList Pass in a DOM NodeList
         * @return {Array}          Returns an array.
         */
        list2Array: function (nodeList) {
            var len = nodeList.length,
                result = [],
                i;

            // Sanity check
            if (!nodeList) {
                return result;
            }

            if (typeof nodeList.length === "undefined") {
                return [nodeList];
            }

            for (i = 0; i < len; i += 1) {
                result[i] = nodeList[i];
            }
            return result;
        },

        /**
         * Finds one or more elements in the DOM using a CSS or XPath selector
         * and returns an array instead of a NodeList.
         * @function
         * @name browserService-queryDom.find
         * @param  {String} query Pass in a CSS or XPath selector query.
         * @param  {Object} [scope="document"]  The DOM subtree to run the query in.
         *      If not provided, document is used.
         * @param  {String} [type="css"]  The type of query. Either "css' (default)
         *      or 'xpath' to allow XPath queries.
         * @return {Array}       Returns an array of nodes that matches the particular query.
         */
        find: function (query, scope, type) {
            type = type || "css";
            return this.list2Array(this[type](query, scope));
        },

        /**
         * Find one or more elements using a CSS selector.
         * @function
         * @name browserService-queryDom.css
         * @param  {String} query The CSS selector query.
         * @param  {Object} [scope="document"] The DOM subtree to run the query in.
         * @return {Array}       Returns an array of nodes that matches the particular query.
         */
        css: function (query, scope) {
            scope = scope || document;
            return jQuery(scope).find(query).get();
        }
    };

    // store handler functions which got passed to subscribe/unsubscribe.
    handlerMappings = (function () {
        var data = new utils.WeakMap();

        return {
            add: function (originalHandler) {
                var handlers = data.get(originalHandler) || [wrapWebEvent(originalHandler), 0];

                handlers[1] += 1;
                data.set(originalHandler, handlers);
                return handlers[0];
            },

            find: function (originalHandler) {
                var handlers = data.get(originalHandler);
                return handlers ? handlers[0] : null;
            },

            remove: function (originalHandler) {
                var handlers = data.get(originalHandler);
                if (handlers) {
                    handlers[1] -= 1;
                    if (handlers[1] <= 0) {
                        data.remove(originalHandler);
                    }
                }
            }
        };
    }());

    /**
     * Initialization function
     * @function
     */
    function initBrowserServiceJQuery(config) {
        var useCapture = utils.getValue(config, "useCapture", true);

        queryDom.xpath = base.queryDom.xpath;

        // find jQuery object
        if (config.hasOwnProperty("jQueryObject")) {
            jQuery = utils.access(config.jQueryObject);
        } else {
            jQuery = window.jQuery;
        }

        // verify jQuery
        verifyJQuery();

        // register event functions
        if (useCapture && typeof document.addEventListener === 'function') {
            addEventListener = function (target, eventName, handler) {
                var _handler = function (e) { handler(jQuery.event.fix(e)); };
                target.addEventListener(eventName, _handler, useCapture);
            };
            removeEventListener = function (target, eventName, handler) {
                var _handler = function (e) { handler(jQuery.event.fix(e)); };
                target.removeEventListener(eventName, _handler, useCapture);
            };
        } else {
#ifdef DEBUG
            jQueryFnExists(jQuery({}), "on");
#endif 
            addEventListener = function (target, eventName, handler) {
                jQuery(target).on(eventName, handler);
            };
#ifdef DEBUG
            jQueryFnExists(jQuery({}), "off");
#endif
            removeEventListener = function (target, eventName, handler) {
                jQuery(target).off(eventName, handler);
            };
        }

        isInitialized = true;
    }


    /**
     * @scope browserService
     */
    return {
#ifdef DEBUG
        jQueryFnExists: jQueryFnExists,
        verifyJQuery: verifyJQuery,
        handlerMappings: handlerMappings,
#endif

        /**
         * Initializes the service
         */
        init: function () {
            if (!isInitialized) {
                initBrowserServiceJQuery(configService.getServiceConfig("browser"));
            } else {
#ifdef DEBUG
                utils.clog("Attempt to initialize service (browserService.jQuery) which has been already initialized.");
#endif 
            }
        },

        /**
         * Destroys service state
         */
        destroy: function () {
            isInitialized = false;
        },

        /**
         * Returns service name
         */
        getServiceName: function () {
            return "jQuery";
        },

        /**
         * Find a single element in the DOM mathing a particular query.
         * @param  {String} query Either a CSS or XPath query.
         * @param {Object} [scope="document"] The DOM subtree to run the query in.
         *     If not provided document is used.
         * @param  {String} [type="css"]  The type of the query. Either 'css' (default)
         *     or 'xpath' to allow XPath queries.
         * @return {Object|null}       The first matching HTML element or null if not found.
         */
        query: function (query, scope, type) {
#ifdef DEBUG
            jQueryFnExists(jQuery, "find");
#endif
            try {
				return queryDom.find(query, scope, type)[0] || null;
			} catch (err) {
#ifdef DEBUG
				console.log(err.message);
#endif
				return [];
			}
        },

        /**
         * Find all elements in the DOM mathing a particular query.
         * @param  {String} query Either a CSS or XPath query.
         * @param {Object} [scope="document"] The DOM subtree to run the query in.
         *     If not provided document is used.
         * @param  {String} [type="css"]  The type of the query. Either 'css' (default)
         *     or 'xpath' to allow XPath queries.
         * @return {Object[]|Array}       An array of HTML elements matching the query
         *     or and empty array if no elements are matching.
         */
        queryAll: function (query, scope, type) {
#ifdef DEBUG
            jQueryFnExists(jQuery, "find");
#endif
            try {
				return queryDom.find(query, scope, type);
			} catch (err) {
#ifdef DEBUG
				console.log(err.message);
#endif
				return [];
			}
        },

        /**
         * Subscribes an event handler to be called when a particular event occurs.
         * @param  {String} eventName The name of the event to listen for.
         * @param  {Object} target    The object on which the event will fire.
         * @param  {Function} handler   The function to call when the event occurs.
         *     The browserServices passes a WebEvent object to this handler
         * @param  {Object} [delegateTarget] The delegated target on which the event will fire.
         * @param  {String} [data] The token data which will be returned as event.data when the event triggers.
         */
        subscribe: function (eventName, target, handler, delegateTarget, data) {
            var wrappedHandler = handlerMappings.add(handler);

#ifdef DEBUG
            jQueryFnExists(jQuery({}), "on");
#endif

            if (!delegateTarget) {
                addEventListener(target, eventName, wrappedHandler);
            } else {
                jQuery(delegateTarget).on(eventName, target, data, wrappedHandler);
            }
        },

        /**
         * Unsubscribes an event handler from a particular event.
         * @param  {String} eventName The name of the event for which the handler was subscribed.
         * @param  {Object} target    The object on which the event fires.
         * @param  {Function} handler   The function to remove as an event handler.
         * @param  {Object} delegateTarget The delegated target on which the event fires.
         */
        unsubscribe: function (eventName, target, handler, delegateTarget) {
#ifdef DEBUG
            jQueryFnExists(jQuery({}), "off");
#endif
            var wrappedHandler = handlerMappings.find(handler);
            if (wrappedHandler) {
                try {
                    if (!delegateTarget) {
                        removeEventListener(target, eventName, wrappedHandler);
                    } else {
                        jQuery(delegateTarget).off(eventName, target, wrappedHandler);
                    }
                } catch (e) {
#ifdef DEBUG
                    utils.clog("Unsubscribe failed for event: " + eventName + "\n" + e.message);
#endif                    
                }
                handlerMappings.remove(handler);
            }
        },

        /**
         * Returns a reference to jQuery object used by the service
         * @return {Object} reference to jQuery used by the service
         */
        getJQuery: function () {
            return jQuery;
        }
    };

});