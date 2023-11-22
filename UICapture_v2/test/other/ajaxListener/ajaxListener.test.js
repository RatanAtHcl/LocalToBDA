/*
 *  **************************************************************************
 *  Licensed Materials - Property of HCL
 *  (c) Copyright HCL Technologies Ltd.  2020. All Rights Reserved.
 *  US Government Users Restricted Rights - Use, duplication or disclosure
 *  restricted by GSA ADP Schedule Contract with HCL Technologies.
 *  **************************************************************************
 */


/**
 * @fileOverview JSTestDriver unit tests for the ajaxListener module.
 */
TestCase('ajaxListener', {

    // Helper function to return the default stub Module context for testing.
    getDefaultContext: function () {
        return {
            getConfig: function () {
                var moduleConfig = {};
                return moduleConfig;
            },

            broadcast: function (message) {
                // This API is NOT used by the ajaxListener module
                fail("Unexpected use of Module Context's broadcast() API");
            },

            listen: function (eventName) {
                // This API is NOT used by the ajaxListener module
                fail("Unexpected use of Module Context's listen() API");
            },

            post: function (event, qid) {
                // Do nothing.
                //jstestdriver.console.log("post", event);
            },

            addHeader: function (headerName, headerValue, qid) {
                // Do nothing.
            },

            getStartTime: (function () {
                var startTime = (new Date()).getTime();

                return function () {
                    return startTime;
                };
            } ()),

            utils: DCX.utils
        };
    },

    setUp: function () {
        var module = null;

        // Sanity check
        if (typeof DCX !== "object") {
            fail("DCX object NOT FOUND!");
        }

        // Sanity check
        if (typeof DCX.getModule !== "function") {
            fail("DCX.getModule API NOT FOUND!");
        }

        this.ajaxListener = DCX.getModule("ajaxListener", this.getDefaultContext());
        module = this.ajaxListener;

        // Sanity check
        if (!module || typeof module !== "object") {
            fail("ajaxListener module NOT FOUND!");
        }

        if (typeof module.init === "function") {
            module.init();
        } else {
            jstestdriver.console.log("WARNING: ajaxListener module - init() method NOT FOUND!");
        }
    },

    tearDown: function () {
        var module = this.ajaxListener;

        // Sanity check
        if (!module || typeof module !== "object") {
            fail("ajaxListener module NOT FOUND!");
        }

        // Cleanup
        if (typeof module.destroy === "function") {
            module.destroy();
        } else {
            jstestdriver.console.log("WARNING: ajaxListener module - destroy() method NOT FOUND!");
        }
    },

    // Test Cases
    testModuleInterface: function () {
        var module = this.ajaxListener;

        expectAsserts(3);
        assertFunction("init", module.init);
        assertFunction("onevent", module.onevent);
        assertFunction("destroy", module.destroy);
    },

    // Optionally test private functions (if exposed in DEBUG builds)
    testProcessConfig: function () {
        var module = this.ajaxListener;

        if (typeof module.processConfig === "function") {
            module.processConfig();
        }
    }

});