/*
 *  **************************************************************************
 *  Licensed Materials - Property of HCL
 *  (c) Copyright HCL Technologies Ltd.  2020. All Rights Reserved.
 *  US Government Users Restricted Rights - Use, duplication or disclosure
 *  restricted by GSA ADP Schedule Contract with HCL Technologies.
 *  **************************************************************************
 */

/*global DCX:true, window: true */

/**
 * @name xdomainService
 * @namespace
 */
DCX.addService("xdomain", function (core) {
    "use strict";

    var isInitialized = false,
        addEventListener = null,
        removeEventListener = null,
        ajaxService = core.getService("ajax");

    function receiveMessage(event) {
        var request;

        if (typeof event !== "undefined" && typeof event.data !== "undefined" && typeof event.data.request !== "undefined") {
            request = event.data.request;

            if (typeof request.url !== "undefined" && typeof request.async !== "undefined" && typeof request.headers !== "undefined" && typeof request.data !== "undefined") {
                ajaxService.sendRequest({
                    oncomplete: function () {},
                    url: request.url,
                    async: request.async,
                    headers: request.headers,
                    data: request.data
                });
            }
        }
    }

    function initXDomainService() {
        var isIE = false;
        /*@cc_on
            isIE = true;
        @*/

        if (!isIE && typeof window.postMessage === "function") {
            core.browserApi.addEventListener(window, "message", receiveMessage);
        } else {
            window.sendMessage = function (event) {
                if (event) {
                    receiveMessage({
                        data: event
                    });
                }
            };
        }
    }

    function destroy() {
        core.browserApi.removeEventListener(window, "message", receiveMessage);
    }

    return {
        init: function () {
            if (!isInitialized) {
                initXDomainService();
            }
        },

        /**
         * Destroys service state
         */
        destroy: function () {
            destroy();
            isInitialized = false;
        }
    };
});