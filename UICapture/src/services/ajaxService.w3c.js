/*
 *  **************************************************************************
 *  Licensed Materials - Property of HCL
 *  (c) Copyright HCL Technologies Ltd.  2020. All Rights Reserved.
 *  US Government Users Restricted Rights - Use, duplication or disclosure
 *  restricted by GSA ADP Schedule Contract with HCL Technologies.
 *  **************************************************************************
 */

/*global DCX:true, window:true, ActiveXObject, Uint8Array */

/**
 * @name ajaxService
 * @namespace
 */
DCX.addService("ajax", function (core) {
    "use strict";

    var utils = core.utils,
        getXHRObject,
        useBeacon = false,
        useFetch = false,
        isInitialized = false;

    /**
     * Builds an array of HTTP headers from the given object.
     * @private
     * @function
     * @name ajaxService-convertHeadersToArray
     * @param {Object} headersObj Object containing name: value pairs.
     * @returns {Array} Array containing [name, value] pairs.
     */
    function convertHeadersToArray(headersObj) {
        var header = "",
            headers = [];

        for (header in headersObj) {
            if (headersObj.hasOwnProperty(header)) {
                headers.push([header, headersObj[header]]);
            }
        }
        return headers;
    }

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
     * @private
     * @function
     * @name ajaxService-makeFetchRequest
     * @see browserService.sendRequest
     */
    function makeFetchRequest(message) {
        var headers = message.headers || {},
            msgId = message.id || 0,
            oncomplete = message.oncomplete || function () {};

        headers["X-Requested-With"] = "fetch";

        window.fetch(message.url, {
            method: message.type,
            headers: headers,
            body: message.data,
            mode: "cors",
            credentials: "omit",
            keepalive: message.isUnloading,
            cache: "no-store"
        }).then(function (response) {
            var result = {
                success: response.ok,
                statusCode: response.status,
                statusText: response.statusText,
                id: msgId
            };

            if (result.success) {
                response.json().then(function (responseData) {
                    result.data = responseData;
                    oncomplete(result);
                })["catch"](function (e) {
                    // NOTE: YUICompressor incompatibility with .catch resolved by using ["catch"]
                    result.statusCode = 1;
                    result.statusText = e.message;
                    oncomplete(result);
                });
                oncomplete(result);
            }
        })["catch"](function (e) {
            // NOTE: YUICompressor incompatibility with .catch resolved by using ["catch"]
            var result = {
                success: false,
                statusCode: 2,
                statusText: e.message,
                id: msgId
            };
            oncomplete(result);
            message.headers["X-Requested-With"] = "";
            makeAjaxCall(message);
        });
    }

    /**
     * This function returns a function which can be passed to the XHR object
     * as a callback handler. It will call the callback with the correct
     * ajaxResponse interface.
     * @private
     * @function
     * @name ajaxService.w3c-wrapAjaxResponse
     * @param {Function} origCallback The original callback function which
     *        should be invoked when the request finishes with a normalized
     *        result object.
     * @return {Function} A function which could be passed as a callback
     *         handler to the XHR object.
     */
    function wrapAjaxResponse(origCallback) {

        // Sanity check
        if (typeof origCallback !== "function") {
            return;
        }

        /**
         * Calls the ajax callback function and provides the ajaxResponse in the correct format.
         * This Function gets called by the XHR callback method.
         * @private
         * @function
         * @name ajaxService.w3c-wrapAjaxResponse-ajaxResponseHandler
         * @param {Object} event The DOM event object or the Ajax response object in case of a
         *        direct call to the callback function.
         */
        return function ajaxResponseHandler(event) {
            var xhr,
                status,
                success = false;

            // Sanity check
            if (!event) {
                return;
            }

            xhr = event.target;
            if (!xhr) {
                // Synthetic call to the callback function
                return origCallback(event);
            }

            status = xhr.status;
            if (status >= 200 && status < 300) {
                success = true;
            }

            // Invoke original callback method with normalized response object
            origCallback({
                headers: utils.extractResponseHeaders(xhr.getAllResponseHeaders()),
                responseText: xhr.responseText,
                statusCode: status,
                statusText: xhr.statusText,
                id: xhr.id,
                success: success
            });
        };
    }

    /**
     * @private
     * @function
     * @name ajaxService-makeAjaxCall
     * @see browserService.sendRequest
     */
    function makeAjaxCall(message) {
        var xhr = getXHRObject(),
            headers = [["X-Requested-With", "XMLHttpRequest"]],
            timeout = 0,
            async = typeof message.async !== "boolean" ? true : message.async,
            header = "",
            callbackFn = null,
            i,
            length;

        if (message.headers) {
            headers = headers.concat(convertHeadersToArray(message.headers));
        }
        if (message.contentType) {
            headers.push(["Content-Type", message.contentType]);
        }
        xhr.open(message.type.toUpperCase(), message.url, async);

        for (i = 0, length = headers.length; i < length; i += 1) {
            header = headers[i];
            if (header[0] && header[1]) {
                xhr.setRequestHeader(header[0], header[1]);
            }
        }

        if (message.error) {
            message.error = wrapAjaxResponse(message.error);
            xhr.addEventListener("error", message.error);
        }

        xhr.onreadystatechange = callbackFn = function () {
            if (xhr.readyState === 4) {
                xhr.onreadystatechange = callbackFn = function () {};
                if (message.timeout) {
                    window.clearTimeout(timeout);
                }
                message.oncomplete({
                    id: message.id,
                    headers: utils.extractResponseHeaders(xhr.getAllResponseHeaders()),
                    responseText: (xhr.responseText || null),
                    statusCode: xhr.status,
                    statusText: xhr.statusText,
                    success: (xhr.status >= 200 && xhr.status < 300)
                });
                xhr = null;
            }
        };

        xhr.send(message.data || null);
        callbackFn();

        if (message.timeout) {
            timeout = window.setTimeout(function () {
                if (!xhr) {
                    return;
                }

                xhr.onreadystatechange = function () {};
                if (xhr.readyState !== 4) {
                    xhr.abort();
                    if (typeof message.error === "function") {
                        message.error({
                            id: message.id,
                            statusCode: xhr.status,
                            statusText: "timeout",
                            success: false
                        });
                    }
                }
                // oncomplete is called after success and error callbacks
                message.oncomplete({
                    id: message.id,
                    headers: utils.extractResponseHeaders(xhr.getAllResponseHeaders()),
                    responseText: (xhr.responseText || null),
                    statusCode: xhr.status,
                    statusText: "timeout",
                    success: false
                });

                xhr = null;
            }, message.timeout);
        }
    }

    function initAjaxService() {
        var queueServiceConfig = core.getServiceConfig("queue");

        if (typeof window.XMLHttpRequest !== 'undefined') {
            getXHRObject = function () {
                return new XMLHttpRequest();
            };
        } else {
            getXHRObject = function () {
                return new ActiveXObject("Microsoft.XMLHTTP");
            };
        }

        // queueServiceConfig can be null for discoverui.frame.js
        if (queueServiceConfig) {
            // Enable Beacon use if configured
            useBeacon = utils.getValue(queueServiceConfig, "useBeacon", true) && (typeof navigator.sendBeacon === "function");

            // Enable Fetch use if supported
            useFetch = utils.getValue(queueServiceConfig, "useFetch", true) && (typeof window.fetch === "function");
        }

        isInitialized = true;
    }

    return {
        init: function () {
            if (!isInitialized) {
                initAjaxService();
            }
        },

        /**
         * Destroys service state
         */
        destroy: function () {
            isInitialized = false;
        },

        /**
         * Makes a HTTP network request to the server.
         * @param {Object} message A request object containing all the information
         *     neccessary for making the request.
         * @param {String} [message.contentType] Set to a string to override the default
         *     content type of the request.
         * @param {String} [message.data] A string containing data to POST to the server.
         * @param {Object} [message.headers] An object whose properties represent HTTP headers.
         * @param {Function} message.oncomplete A callback function to call when the
         *     request has completed.
         * @param {Integer} [message.timeout] The number of milliseconds to wait
         *     for a response before closing the Ajax request.
         * @param {String} [message.type="POST"] Either 'GET' or 'POST',
         *     indicating the type of the request to make.
         * @param {String} message.url The URL to send the request to.
         *     This should contain any required query string parameters.
         */
        sendRequest: function (message) {
            var makeXHRRequest = true,
                retVal;

            message.type = message.type || "POST";

            // If enabled, use Beacon API instead of XHR on page unload or when sending synchronous request
            if ((message.isUnloading || !message.async) && useBeacon) {
                makeXHRRequest = false;
                retVal = makeBeaconCall(message);
                if (!retVal) {
                    // If Beacon fails, fallback to XHR
                    makeXHRRequest = true;
                }
            } 

            if (makeXHRRequest) {
                if (message.isUnloading && useFetch) {
                    // Use fetch instead of async XHR
                    makeFetchRequest(message);
                } else {
                    makeAjaxCall(message);
                }
            }
        }
    };
});