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

/*global DCX, XPathResult, document */
/*global console: false */

/**
 * @name browserService
 * @namespace
 */
DCX.addService("browser", function (core) {
    "use strict";

    var utils = core.utils,
        configService = core.getService("config"),
        browserBaseService = core.getService('browserBase'),
        ajaxService = core.getService('ajax'),
        addEventListener = null,
        removeEventListener = null,
        // Need to test for configService in unit testing scenario
        serviceConfig = configService ? configService.getServiceConfig("browser") : {},
        useCapture = utils.getValue(serviceConfig, "useCapture", true),
        isInitialized = false,
        errorCodes = {
            NO_QUERY_SELECTOR: "NOQUERYSELECTOR"
        },

        /**
         * Returns a new function which will be used in the subscribe method and which calls the
         * handler function with the normalized WebEvent.
         * @private
         * @function
         * @name browserService-wrapWebEvent
         * @param  {Function} handler The handler which was passed to the browserService's subscribe method.
         * @return {Function}         Returns a new function which, when called, passes a WebEvent to the handler.
         */
        wrapWebEvent = function (handler) {
            return function (event) {
                /* IE8 only allows access to event attributes in the context of an Event.
                 * We need to instantiate our event in a local variable here before passing it 
                 * into the setTimeout handler.
                 */
                var webEvent = new browserBaseService.WebEvent(event);
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
        },

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
                var self = this,
                    message = null,
                    bodyEl = document.getElementsByTagName("body")[0],
                    jQuery = serviceConfig.jQueryObject ? utils.access(serviceConfig.jQueryObject) : window.jQuery,
                    sizzle = serviceConfig.sizzleObject ? utils.access(serviceConfig.sizzleObject) : window.Sizzle;

                if (typeof document.querySelectorAll === "undefined") {
                    // redefine self.css to use self.Sizzle as selector engine.
                    self.css = function (query, scope) {
                        scope = scope || document;
                        return self.Sizzle(query, scope);
                    };
                    if (typeof self.Sizzle === "undefined") {
                        // define self.Sizzle function to use either Sizzle library or jQuery.
                        try {
                            if (bodyEl === sizzle("html > body", document)[0]) {
                                // if Sizzle is defined and behaves as expected, use it as self.Sizzle.
                                self.Sizzle = sizzle;
                            }
                        } catch (e1) {
                            try {
                                if (bodyEl === jQuery(document).find("html > body").get()[0]) {
                                    // if jQuery is defined on window and behaves correctly define
                                    // self.Sizzle to use jQuery.
                                    self.Sizzle = function (query, scope) {
                                        return jQuery(scope).find(query).get();
                                    };
                                }
                            } catch (e2) {
                                core.fail("Neither querySelectorAll nor Sizzle was found.", errorCodes.NO_QUERY_SELECTOR);
                            }
                        }
                    }
                } else {
                    // otherwise, if document.querySelectorAll is available, use it.
                    self.css = function (query, scope) {
                        scope = scope || document;
                        return scope.querySelectorAll(query);
                    };
                }
                return self.css(query, scope);
            }
        },
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
     * Check if required browser APIs are available.
     */
    function verifyPrerequisites() {
        var jQuery = serviceConfig.jQueryObject ? utils.access(serviceConfig.jQueryObject) : window.jQuery,
            sizzle = serviceConfig.sizzleObject ? utils.access(serviceConfig.sizzleObject) : window.Sizzle;

        if (!document.querySelectorAll && !jQuery && !sizzle) {
            // Neither native querySelectorAll nor jQuery nor Sizzle is available. Abort!
            core.fail("querySelectorAll does not exist!", errorCodes.NO_QUERY_SELECTOR);
        }
    }

    /**
     * Initialization function
     * @function
     */
    function initBrowserServiceW3C() {
        queryDom.xpath = browserBaseService.queryDom.xpath;

        // Check if dependencies exist.
        verifyPrerequisites();

        if (typeof document.addEventListener === 'function') {
            addEventListener = function (target, eventName, handler) {
                target.addEventListener(eventName, handler, useCapture);
            };
            removeEventListener = function (target, eventName, handler) {
                target.removeEventListener(eventName, handler, useCapture);
            };
        } else if (typeof document.attachEvent !== 'undefined') {
            addEventListener = function (target, eventName, handler) {
                target.attachEvent('on' + eventName, handler);
            };
            removeEventListener = function (target, eventName, handler) {
                target.detachEvent('on' + eventName, handler);
            };
        } else {
            throw new Error("Unsupported browser");
        }

        isInitialized = true;
    }


    /**
     * @scope browserService
     */
    return {
#ifdef DEBUG
        queryDom: queryDom,
#endif

        init: function () {
            if (!isInitialized) {
                initBrowserServiceW3C();
            } else {
#ifdef DEBUG
                utils.clog("Attempt to initialize service (browserService.w3c) which has been already initialized.");
#endif 
            }
        },

        destroy: function () {
            isInitialized = false;
        },

        getServiceName: function () {
            return "W3C";
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
         */
        subscribe: function (eventName, target, handler) {
            var wrappedHandler = handlerMappings.add(handler);
            addEventListener(target, eventName, wrappedHandler);
        },

        /**
         * Unsubscribes an event handler from a particular event.
         * @param  {String} eventName The name of the event for which the handler was subscribed.
         * @param  {Object} target    The object on which the event fires.
         * @param  {Function} handler   The function to remove as an event handler.
         */
        unsubscribe: function (eventName, target, handler) {
            var wrappedHandler = handlerMappings.find(handler);
            if (wrappedHandler) {
                try {
                    removeEventListener(target, eventName,  wrappedHandler);
                } catch (e) {
#ifdef DEBUG
                    utils.clog("Unsubscribe failed for event: " + eventName + "\n" + e.message);
#endif
                }
                handlerMappings.remove(handler);
            }
        }
    };
});