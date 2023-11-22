/*
 *  **************************************************************************
 *  Licensed Materials - Property of HCL
 *  (c) Copyright HCL Technologies Ltd.  2020. All Rights Reserved.
 *  US Government Users Restricted Rights - Use, duplication or disclosure
 *  restricted by GSA ADP Schedule Contract with HCL Technologies.
 *  **************************************************************************
 */


/**
 * Testing interface modules and services. This object mimics part of the Core
 * to enable easier unit testing.
 * @name TestDCX
 */
var DCX = (function () {
    'use strict';

    // Cache the creators
    var serviceCreators = {},
        moduleCreators = {};

    // Public interface
    return /** @lends TestDCX */ {

        /**
         * Registers a module creator.
         * @param {String} name The name of the module creator.
         * @param {Function} creator The function to create a module.
         * @returns {void}
         */
        addModule: function (name, creator) {
            moduleCreators[name] = creator;
        },

        /**
         * Registers a service creator.
         * @param {String} name The name of the service creator.
         * @param {Function} creator The function to create a service.
         * @returns {void}
         */
        addService: function (name, creator) {
            serviceCreators[name] = creator;
        },

        /**
         * Creates and retrieves a module object created by the creator
         * with the given name.
         * @param {String} name The name of the module to create.
         * @param {Object} context The object representing the module context.
         * @returns {Object} A new module instance
         */
        getModule: function (name, context) {
            return ((name && moduleCreators[name]) ? moduleCreators[name](context) : null);
        },

        /**
         * Creates and retrieves a service object created by the creator
         * with the given name.
         * @param {String} name The name of the service to create.
         * @param {Object} context The object representing the service context.
         * @returns {Object} A new service instance
         */
        getService: function (name, context) {
            var service = null;

            if((name && serviceCreators[name])) {
                service = serviceCreators[name](context);
                if (typeof service.init === "function") {
                    service.init();
                }
            }
            
            return service;
        },

        /**
         * Unregisters a module creator. This should always be called as a
         * teardown in a module unit test.
         * @param {String} name The name of the module to unregister.
         * @returns {void}
         */
        removeModule: function (name) {
            delete moduleCreators[name];
        },

        /**
         * Unregisters a service creator. This should always be called as a
         * teardown in a service unit test.
         * @param {String} name The name of the service to unregister.
         * @returns {void}
         */
        removeService: function (name) {
            delete serviceCreators[name];
        },

        /**
         * Public API Stubs
         */
        logScreenviewLoad: function (name, referrerName, root) {
            // Do nothing
        },

        logScreenviewUnload: function (name) {
            // Do nothing
        },

        init: function (config) {
            // Do nothing
        }
    };
}());