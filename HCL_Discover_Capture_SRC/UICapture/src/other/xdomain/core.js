/*
 *  **************************************************************************
 *  Licensed Materials - Property of HCL
 *  (c) Copyright HCL Technologies Ltd.  2020. All Rights Reserved.
 *  US Government Users Restricted Rights - Use, duplication or disclosure
 *  restricted by GSA ADP Schedule Contract with HCL Technologies.
 *  **************************************************************************
 */

var DCX = (function () {
    'use strict';

    var serviceCreators = {},
        services = {},
        isInitialized = false;

    function _init() {
        isInitialized = true;
    }

    function destroy() {
        var serviceName,
            service;

        for (serviceName in services) {
            if (services.hasOwnProperty(serviceName)) {
                service = services[serviceName];

                if (service && typeof service.destroy === "function") {
                    service.destroy();
                }

                delete services[serviceName];
            }
        }
    }

    return {
        browserApi: (function () {
            if (typeof document.addEventListener === 'function') {
                return {
                    addEventListener: function (target, eventName, handler) {
                        target.addEventListener(eventName, handler, false);
                    },
                    removeEventListener: function (target, eventName, handler) {
                        target.removeEventListener(eventName, handler, false);
                    }
                };
            }

            if (document.attachEvent) {
                return {
                    addEventListener: function (target, eventName, handler) {
                        target.attachEvent('on' + eventName, handler);
                    },
                    removeEventListener: function (target, eventName, handler) {
                        target.detachEvent('on' + eventName, handler);
                    }
                };
            }

            throw new Error("Unsupported browser");
        }()),

        addService: function (name, creator) {
            serviceCreators[name] = creator;
        },

        getService: function (name) {
            var service = null;

            if (name && serviceCreators[name]) {
                service = serviceCreators[name](this);
                services[name] = service;
                if (typeof service.init === "function") {
                    service.init();
                }
            }

            return service;
        },

        init: function () {
            if (!isInitialized) {
                this.getService("xdomain");
                _init();
            }
        },

        destroy: function () {
            if (isInitialized) {
                destroy();
            }
        }
    };
}());

(function () {
    'use strict';

    if (typeof document.addEventListener === 'function') {
        window.addEventListener("load", function () {
            DCX.init();
        }, false);
    } else if (typeof document.attachEvent !== 'undefined') {
        window.attachEvent("onload", function () {
            DCX.init();
        });
    } else {
        throw new Error("Unsupported browser");
    }
}());