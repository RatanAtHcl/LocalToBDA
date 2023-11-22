/*
 *  **************************************************************************
 *  Licensed Materials - Property of HCL
 *  (c) Copyright HCL Technologies Ltd.  2020. All Rights Reserved.
 *  US Government Users Restricted Rights - Use, duplication or disclosure
 *  restricted by GSA ADP Schedule Contract with HCL Technologies.
 *  **************************************************************************
 */


/**
 * @fileOverview JSTestDriver unit tests for the DCCookie Module
 */
 TestCase('DCCookie', {

    postedMessages: [],

    // Helper function to return the default stub Module context for testing.
    getDefaultContext: function () {
        var testObject = this;

        return {
            post: function (event) {
                testObject.postedMessages.push(event);
            },

            utils: DCX.utils,

            getConfig: function() {
                return {
                    appCookieWhitelist: [
                        "cookieTest123",
                        { regex: "^foo.*" }
                    ],
                    dcAppKey: "",
                    sessionizationCookieName: "TLTSID"
                };
            }
        };
    },

    setUp: function() {
        var module = null;

        // Sanity check
        if (typeof DCX !== "object") {
            fail("DCX object NOT FOUND!");
        }

        // Sanity check
        if (typeof DCX.getModule !== "function") {
            fail("DCX.getModule API NOT FOUND!");
        }

        this.postedMessages = [];
        DCX.getCoreConfig = function()  {
            return {
                modules: {
                    DCCookie: {
                        enabled: true
                    }
                }
            };
        };

        DCX.registerBridgeCallbacks = function() {
            return false;
        };

        this.DCCookie = DCX.getModule("DCCookie", this.getDefaultContext());
        module = this.DCCookie;

        // Sanity check
        if (!module || typeof module !== "object") {
            fail("DCCookie module NOT FOUND!");
        }

        if (typeof module.init === "function") {
            module.init();
        } else {
            jstestdriver.console.log("WARNING: DCCookie module - init() method NOT FOUND!");
        }
    },

    tearDown: function() {
        var module = this.DCCookie;
        // Sanity check
        if (!module || typeof module !== "object") {
            fail("DCCookie module NOT FOUND!");
        }
        this.postedMessages.splice(0, this.postedMessages.length);
    },

    testModuleInterface: function () {
        var module = this.DCCookie;
        expectAsserts(3);
        assertFunction("init", module.init);
        assertFunction("destroy", module.destroy);
        assertFunction("onevent", module.onevent);
    },

    // Test private function (only exposed in debug builds)
    testProcessConfig: function () {
        var module = this.DCCookie;
        if (!module.processConfig) {
            jstestdriver.console.log("Private function processConfig() not found. Skipping test.");
            return;
        }
        expectAsserts(1);
        assertFunction("processConfig is not a function", module.processConfig);
    },

    testIsCookieWhitelisted: function () {
        var module = this.DCCookie;
        if (!module.isCookieWhitelisted) {
            jstestdriver.console.log("Private function isCookieWhitelisted() not found. Skipping test.");
            return;
        }
        expectAsserts(8);
        assertFunction("isCookieWhitelisted is not a function", module.isCookieWhitelisted);
        assertTrue("cookieTest123", module.isCookieWhitelisted("cookieTest123"));
        assertFalse("cookietest123", module.isCookieWhitelisted("cookietest123"));
        assertTrue("foobar", module.isCookieWhitelisted("foobar"));
        assertTrue("foo123", module.isCookieWhitelisted("foo123"));
        assertTrue("foo", module.isCookieWhitelisted("foo"));
        assertFalse("123foo", module.isCookieWhitelisted("123foo"));
        assertFalse("fobar", module.isCookieWhitelisted("fobar"));
    },

    testPostAppCookies: function () {
        var len,
            module = this.DCCookie,
            postedMessages = this.postedMessages;

        if (!module.postAppCookies) {
            jstestdriver.console.log("Private function postAppCookies() not found. Skipping test.");
            return;
        }
        expectAsserts(9);
        assertFunction("postAppCookies is not a function.", module.postAppCookies);

        document.cookie = "foo=bar";
        len = postedMessages.length;
        module.postAppCookies();
        assertEquals("Message 1 posted to queue", len + 1, postedMessages.length);
        assertEquals("1. foo=bar", "bar", postedMessages[len].cookies.foo);

        document.cookie = "123foo=bar";
        len = postedMessages.length;
        module.postAppCookies();
        assertEquals("Message 2 posted to queue", len + 1, postedMessages.length);
        assertEquals("2. foo=bar", "bar", postedMessages[len].cookies.foo);
        assertUndefined("123foo=bar", postedMessages[len].cookies["123foo"]);

        document.cookie = "foo=C1%3d5%3a%3bC37%5fEXP%3d%2d1";
        len = postedMessages.length;
        module.postAppCookies();
        assertEquals("Message 3 posted to queue", len + 1, postedMessages.length);
        assertEquals("foo=C1%3d5%3a%3bC37%5fEXP%3d%2d1", "C1=5:;C37_EXP=-1", postedMessages[len].cookies.foo);
        assertUndefined("2. 123foo=bar", postedMessages[len].cookies["123foo"]);
    },

    // Test private function (only exposed in debug builds)
    testCreateDCXSID: function () {
        var module = this.DCCookie,
            dcxsid;
        if (!module.createDCXSIDCookie) {
            jstestdriver.console.log("Private function createDCXSIDCookie() not found. Skipping test.");
            return;
        }
        expectAsserts(2);
        assertFunction("createDCXSIDCookie is not a function", module.createDCXSIDCookie);
        dcxsid = module.createDCXSIDCookie();
        assertTrue("DCXSID (" + dcxsid + ") satisfies format criteria", /^[A-Z0-9]{32}$/.test(dcxsid));
    }

 });