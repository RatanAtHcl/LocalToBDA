/*
 *  **************************************************************************
 *  Licensed Materials - Property of HCL
 *  (c) Copyright HCL Technologies Ltd.  2020. All Rights Reserved.
 *  US Government Users Restricted Rights - Use, duplication or disclosure
 *  restricted by GSA ADP Schedule Contract with HCL Technologies.
 *  **************************************************************************
 */

/*global DCX:true, window:true, Uint8Array */

/**
 * @name ajaxService
 * @namespace
 */
DCX.addService("ajax", function (core) {
    "use strict";

    var utils = core.utils,
        makeAjaxCall,
        configService = core.getService("config"),
        browser = core.getService('browser'),
        jQuery,
        useBeacon = false,
        isInitialized = false;

    /**
     * Builds a query string from the given object
     * @private
     * @function
     * @name ajaxService-convertHeadersToQuery
     * @param {Object} headersObj Object containing name: value pairs.
     * @returns {String} Query string containing name=value pairs.
     */
    function convertHeadersToQuery(headersObj) {
        var header = "",
            headers = "?";

        for (header in headersObj) {
            if (headersObj.hasOwnProperty(header)) {
                headers += encodeURIComponent(header) +
                           "=" +
                           encodeURIComponent(headersObj[header]) +
                           "&";
            }
        }

        // Return the query string after removing the last character (which would be the extra '&' from the loop)
        return headers.slice(0, -1);
    }

    /**
     * @private
     * @function
     * @name ajaxService-makeBeaconCall
     * @see browserService.sendRequest
     */
    function makeBeaconCall(message) {
        var data,
            retVal = false,
            query = convertHeadersToQuery(message.headers);

        if (typeof message.data === "string") {
            data = message.data;
        } else {
            data = message.data ? new Uint8Array(message.data) : "";
        }

        retVal = navigator.sendBeacon(message.url + query, data);

        return retVal;
    }

    /**
     * This function returns a function which can be passed to the jQuery ajax call
     * as callback handler.
     * It will call the sendRequest callback with the correct ajaxResponse interface.
     * @private
     * @function
     * @name browserService-wrapAjaxResponse
     * @param  {Function} complete The original callback function which should be when
     *      the request finishes.
     * @return {Function}          A function which could be passed as a callback handler to
     *      the jquery ajax handler.
     */
    function wrapAjaxResponse(complete) {
        // Sanity check
        if (typeof complete !== "function") {
            return;
        }

        /**
         * Calls the ajax callback function and provides the ajaxResponse in the correct format.
         * This Function gets called by the jQuery ajax callback method.
         * @private
         * @function
         * @name browserService-wrapAjaxResponse-ajaxResponseHandler
         * @param  {Object} jqXhrError   In case of an error this object would become the jqXhr object
         *      otherwise it's the parsed data.
         * @param  {String} status       The status of the ajax call as textstring.
         * @param  {Object} jqXhrSuccess In case of a successfull ajax request this object would
         *      become the jqXhr object.
         */
        return function ajaxResponseHandler(jqXhrError, status, jqXhrSuccess) {
            var jqXhr = jqXhrError,
                success = false;
            if (status === "success") {
                jqXhr = jqXhrSuccess || jqXhrError;
                success = true;
            } else if (jqXhr.status >= 200 && jqXhr.status < 300) {
                // A successful HTTP response is treated as a success even if subsequent data parsing fails.
                success = true;
            }
            complete({
                headers: utils.extractResponseHeaders(jqXhr.getAllResponseHeaders()),
                responseText: jqXhr.responseText,
                statusCode: jqXhr.status,
                statusText: jqXhr.statusText,
                id: jqXhr.id,
                success: success
            });
        };
    }

    /**
     * @private
     * @function
     * @name browserService-makeAjaxCall
     * @see browserService.sendRequest
     */
    makeAjaxCall = {
        /**
         * @see browserService.sendRequest
         */
        init: function (message) {
            var parsedVersion = utils.parseVersion(jQuery.fn.jquery);

            if (parsedVersion[0] === 1 && parsedVersion[1] <= 7) {
                this.init = makeAjaxCall["jQuery<=1.7"];
            } else {
                this.init = makeAjaxCall["jQuery>=1.8"];
            }

            return this.init(message);
        },

        /**
         * @see browserService.sendRequest
         */
        "jQuery<=1.7": function (message) {
            message.complete = wrapAjaxResponse(message.oncomplete);
            delete message.oncomplete;
            message.error = wrapAjaxResponse(message.error);
            // AppScan: IGNORE (false flag)
            return jQuery.ajax(message);
        },

        /**
         * @see browserService.sendRequest
         */
        "jQuery>=1.8": function (message) {
            var oncomplete = wrapAjaxResponse(message.oncomplete),
                jqXhr;
            delete message.oncomplete;
            message.error = wrapAjaxResponse(message.error);
            // AppScan: IGNORE (false flag)
            jqXhr = jQuery.ajax(message.url, message);
            jqXhr.always(oncomplete);
            return jqXhr;
        }
    };

    function initAjaxService(config) {
        var queueServiceConfig = core.getServiceConfig("queue");

        // find jQuery object
        if (config.hasOwnProperty("jQueryObject")) {
            jQuery = utils.access(config.jQueryObject);
        } else {
            jQuery = window.jQuery;
        }

        // Enable Beacon use if configured
        useBeacon = !!queueServiceConfig.useBeacon && (typeof navigator.sendBeacon === "function");

        isInitialized = true;
    }

    return {
        init: function () {
            if (!isInitialized) {
                initAjaxService(configService.getServiceConfig("browser") || {});
            } else {
            }
        },

        /**
         * Destroys service state
         */
        destroy: function () {
            isInitialized = false;
        },

        /**
         * Makes an Ajax request to the server.
         * @param {Object} message An AjaxRequest object containing all the information
         *     neccessary for making the request.
         * @param {String} [message.contentType] Set to a string to override the default
         *     content type of the request.
         * @param {String} [message.data] A string containing data to POST to the server.
         * @param {Object} [message.headers] An object whose properties represent HTTP headers.
         * @param {Function} message.oncomplete A callback function to call when the
         *     request has completed.
         * @param {Number} [message.timeout] The number of milliseconds to wait
         *     for a response before closing the Ajax request.
         * @param {String} [message.type="POST"] Either 'GET' or 'POST',
         *     indicating the type of the request to make.
         * @param {String} message.url The URL to send the request to.
         *     This should contain any required query string parameters.
         */
        sendRequest: function (message) {
            var jqXhr = {},
                unloading = core.getState() === "unloading",
                retVal;

            message.type = message.type || "POST";
            message.processData = message.processData || false;

            // If enabled, use Beacon API instead of XHR on page unload
            if ((unloading || !message.async) && useBeacon) {
                retVal = makeBeaconCall(message);
                if (!retVal) {
                    // If Beacon fails, fallback to XHR
                    jqXhr = makeAjaxCall.init(message);
                }
            } else {
                jqXhr = makeAjaxCall.init(message);
            }

            // Set the id on the jqXhr object
            jqXhr.id = message.id;
        }
    };
});