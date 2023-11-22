/*
 *  **************************************************************************
 *  Licensed Materials - Property of HCL
 *  (c) Copyright HCL Technologies Ltd.  2020. All Rights Reserved.
 *  US Government Users Restricted Rights - Use, duplication or disclosure
 *  restricted by GSA ADP Schedule Contract with HCL Technologies.
 *  **************************************************************************
 */


/**
 * @fileOverview JSTestDriver unit tests for the Performance Module
 */
TestCase('performance', {

    // Helper function to return the default stub Module context for testing.
    getDefaultContext: function () {
        return {
            getConfig: function () {
                var perfConfig = {};
                // TODO: Add the default configuration
                return perfConfig;
            },

            broadcast: function (message) {
                // This API is NOT used by performance module
                fail("Unexpected use of Module Context's broadcast() API");
            },

            listen: function (eventName) {
                // This API is NOT used by performance module
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

        this.performance = DCX.getModule("performance", this.getDefaultContext());
        module = this.performance;

        // Sanity check
        if (!module || typeof module !== "object") {
            fail("Performance module NOT FOUND!");
        }

        if (typeof module.init === "function") {
            module.init();
        } else {
            jstestdriver.console.log("WARNING: Performance module - init() method NOT FOUND!");
        }
    },

    tearDown: function () {
        var module = this.performance;

        // Sanity check
        if (!module || typeof module !== "object") {
            fail("Performance module NOT FOUND!");
        }

        // Cleanup
        if (typeof module.destroy === "function") {
            module.destroy();
        } else {
            jstestdriver.console.log("WARNING: Performance module - destroy() method NOT FOUND!");
        }
    },

    // Test Cases
    testModuleInterface: function () {
        var module = this.performance;

        expectAsserts(2);
        assertFunction("onevent", module.onevent);
        assertFunction("onmessage", module.onmessage);
    },

    // Optionally test private functions (if exposed in DEBUG builds)
    testIsFiltered: function () {
        var module = this.performance;

        if (typeof module.isFiltered === "function") {
            assertEquals("isFiltered(/*no args*/) failed", false, module.isFiltered());
            assertEquals("isFiltered(1) failed", false, module.isFiltered(1));
            assertEquals('isFiltered("a") failed', false, module.isFiltered("a"));
            assertEquals('isFiltered("a", null) failed', false, module.isFiltered("a", null));
            assertEquals('isFiltered("a", {}) failed', false, module.isFiltered("a", {}));
            assertEquals('isFiltered("a", { "b": true }) failed', false, module.isFiltered("a", { "b": true }));
            assertEquals('isFiltered("a", { "a": true }) failed', false, module.isFiltered("a", { "a": false }));
            assertEquals('isFiltered("a", { "a": true }) failed', false, module.isFiltered("a", { "a": null }));
            assertEquals('isFiltered("a", { "a": true }) failed', false, module.isFiltered("a", { "a": 1 }));
            assertEquals('isFiltered("a", { "a": true }) failed', true, module.isFiltered("a", { "a": true }));
            assertEquals('isFiltered("averylongpropertyname", { "averylongpropertyname": true }) failed',
                    true, module.isFiltered("averylongpropertyname", { "averylongpropertyname": true }));
        }
    },

    testParseTiming: function () {
        var module = this.performance,
            testTiming = {
                navigationStart: 100,
                a: 0,
                b: -1,
                c: 1,

                i: null,
                j: "STRING",
                k: [],

                x: 100,
                y: 99,
                z: 101
            },
            expectedTiming = {
                navigationStart: 100,
                a: 0,
                b: -101,
                c: -99,

                i: null,
                j: "STRING",
                k: [],

                x: 0,
                y: -1,
                z: 1
            },
            testFilter = {
                navigationStart: false,
                a: true,
                b: 0,
                c: 1,

                i: true,
                j: "BLAH",
                k: [],

                x: true,
                y: null,
                z: 1
            },
            expectedTimingFiltered = {
                navigationStart: 100,

                b: -101,
                c: -99,

                j: "STRING",
                k: [],

                y: -1,
                z: 1
            };

        if (typeof module.parseTiming === "function") {
            assertEquals("module.parseTiming(/* no args */) failed", {}, module.parseTiming());
            assertEquals("module.parseTiming({}) failed", {}, module.parseTiming({}));
            assertEquals("module.parseTiming({a: 100}) failed", {}, module.parseTiming({ a: 100 }));
            assertEquals(expectedTiming, module.parseTiming(testTiming));
            assertEquals(expectedTimingFiltered, module.parseTiming(testTiming, testFilter));
        }
    },

    testGetRenderTime: function () {
        var moduleContext = this.getDefaultContext(),
            module = this.performance,
            timingStub1 = {
                responseEnd: 500,
                domLoading: 501,
                loadEventStart: 1000
            },
            timingStub2 = {
                responseEnd: 0,
                domLoading: 500,
                loadEventStart: 1000
            },
            timingStubWrong1 = {
                responseEnd: 1000,
                domLoading: 500,
                loadEventStart: 500
            },
            timingStubWrong2 = {
                loadEventStart: 1000
            },
            timingStubWrong3 = {
                responseEnd: 500    
            },
            timingStubWrong4 = {
                responseEnd: -1,
                domLoading: 500,
                loadEventStart: 1000
            },
            testTimingObj = window.performance ? window.performance.timing : timingStub1;

        if (typeof module.getRenderTime === "function") {
            expectAsserts(11);
            assertEquals("module.getRenderTime(/* no args */) failed", 0, module.getRenderTime());
            assertEquals("module.getRenderTime({}) failed", 0, module.getRenderTime());
            assertEquals("module.getRenderTime({responseEnd: 100}) failed", 0, module.getRenderTime({ responseEnd: 100 }));
            assertEquals("module.getRenderTime({loadEventStart: 100}) failed", 0, module.getRenderTime({ loadEventStart: 100 }));
            assertEquals("module.getRenderTime(timingStub1) failed", 500, module.getRenderTime(timingStub1));
            assertEquals("module.getRenderTime(timingStub2) failed", 500, module.getRenderTime(timingStub2));
            assertEquals("module.getRenderTime(timingStubWrong1) failed", 0, module.getRenderTime(timingStubWrong1));
            assertEquals("module.getRenderTime(timingStubWrong2) failed", 0, module.getRenderTime(timingStubWrong2));
            assertEquals("module.getRenderTime(timingStubWrong3) failed", 0, module.getRenderTime(timingStubWrong3));
            assertEquals("module.getRenderTime(timingStubWrong4) failed", 500, module.getRenderTime(timingStubWrong4));
            assertNumber("module.getRenderTime(testTimingObj) failed", module.getRenderTime(testTimingObj));
        }
    },

    testPostPerformanceEvent: function () {
        var moduleContext = this.getDefaultContext(),
            module = this.performance,
            testWindow = {
                performance: {
                    timing: {
                        navigationStart: 100,
                        loadEventStart: 200,
                        ten: 110,
                        twenty: 120,
                        thirty: 130,
                        x: "ignored",
                        y: 200,
                        z: 100
                    },
                    navigation: {
                        type: 0,
                        redirectCount: 0
                    }
                },
                location: {
                    href: "TEST HREF"
                },
                document: {
                    referrer: "TEST REFERRER"
                }
            },
            testFilter = {
                x: true,
                y: true,
                z: true
            },
            expectedEvent = {
                type: 7,
                performance: {
                    navigation: {
                        type: "NAVIGATE",
                        redirectCount: 0
                    },
                    timing: {
                        navigationStart: 100,
                        ten: 10,
                        twenty: 20,
                        thirty: 30
                    }
                }
            },
            expectedPerf = expectedEvent.performance,
            eventPerf = null,
            expectedQid;

        if (typeof module.postPerformanceEvent === "function") {
            // Setup the first batch of assertions where we do expect the post() API to be invoked.
            expectAsserts(12);
            moduleContext.post = function (event, qid) {
                assertObject("moduleContext.post(): Invalid argument 'event'", event);
                assertEquals("event.type", expectedEvent.type, event.type);
                assertObject("event.performance", event.performance);
                eventPerf = event.performance;
                assertObject("event.performance.timing", eventPerf.timing);
                assertObject("event.performance.navigation", eventPerf.navigation);

                assertEquals("event.performance.timing.navigationStart", expectedPerf.timing.navigationStart, eventPerf.timing.navigationStart);
                assertEquals("event.performance.timing.ten", expectedPerf.timing.ten, eventPerf.timing.ten);
                assertEquals("event.performance.timing.twenty", expectedPerf.timing.twenty, eventPerf.timing.twenty);
                assertEquals("event.performance.timing.thirty", expectedPerf.timing.thirty, eventPerf.timing.thirty);

                assertEquals("event.performance.navigation.type", expectedPerf.navigation.type, eventPerf.navigation.type);
                assertEquals("event.performance.navigation.redirectCount", expectedPerf.navigation.redirectCount, eventPerf.navigation.redirectCount);

                assertEquals("qid", expectedQid, qid);
            };

            moduleContext.getConfig = function () {
                return {
                    filter: testFilter
                }
            };

            module = DCX.getModule("performance", moduleContext);
            module.init();
            module.postPerformanceEvent(testWindow);

            // Setup the second batch of assertions where we do not expect the post() API to be invoked.
            moduleContext.post = function () {
                fail("Performance event should not be sent more than one time.");
            };
            module.postPerformanceEvent(testWindow);
        }
    }

});