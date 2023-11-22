/*
 *  **************************************************************************
 *  Licensed Materials - Property of HCL
 *  (c) Copyright HCL Technologies Ltd.  2020. All Rights Reserved.
 *  US Government Users Restricted Rights - Use, duplication or disclosure
 *  restricted by GSA ADP Schedule Contract with HCL Technologies.
 *  **************************************************************************
 */


TestCase("core", {

    setUp: function () {
        DCX.ModuleContext = function() {
            return {};
        };
    },

    tearDown: function () {
        DCX.destroy();
        DCX.removeModule("test");
        DCX.removeModule("test2");
        DCX.removeService("test");
        DCX.removeService("test2");
        DCX.removeService("config");
        DCX.removeService("browser");
        DCX.removeService("browserBase");
        DCX.removeService("queue");
        delete DCX.ModuleContext;
    },

    fakeSerializerService: function () {
        DCX.addService("serializer", function (context) {
            return {
                serialize: function () {
                    return "not implemented";
                }
            };
        });
    },

    fakeQueueService: function () {
        DCX.addService("queue", function(context){
            return {
                flushAll: function (sync) {},
                resetFlushTimer: function () {}
            };
        });
    },

    fakeBrowserService: function (conf) {
        DCX.addService("browser", function (context) {
            return DCX.utils.mixin({
                subscribe: stubFn(),
                unsubscribe: stubFn()
            }, conf || {});
        });
    },

    fakeBrowserBaseService: function () {
        var ElementData = function(){};
        ElementData.prototype.examineID = stubFn("null");

        DCX.addService("browserBase", function (context) {
            return {
                WebEvent: function (e) {
                    this.nativeEvent = e;
                    this.target = e.target;
                    this.type = e.type;
                },
                ElementData: ElementData
            };
        });
    },

    //-------------------------------------------------------------------------
    // Module Starting
    //-------------------------------------------------------------------------

    testStartModule: function() {
        expectAsserts(3);

        DCX.addModule("test", function (context) {
            return {
                init: function () {
                    assertTrue(true);   //make sure it's called
                }
            };
        });

        this.fakeQueueService();

        assertFalse(DCX.isStarted("test"));
        DCX.start("test");
        assertTrue(DCX.isStarted("test"));
    },

    testStartAllModules: function() {
        expectAsserts(4);

        DCX.addModule("test", function (context) {
            return {
                init: function () {
                    assertTrue(true);   //make sure it's called
                }
            };
        });

        DCX.addModule("test2", function (context) {
            return {
                init: function () {
                    assertTrue(true);   //make sure it's called
                }
            };
        });

        this.fakeQueueService();

        DCX.startAll();
        assertTrue(DCX.isStarted("test"));
        assertTrue(DCX.isStarted("test2"));
    },

    //-------------------------------------------------------------------------
    // Module Stopping
    //-------------------------------------------------------------------------

    testStopModule: function() {
        expectAsserts(2);

        DCX.addModule("test", function (context) {
            return {
                destroy: function () {
                    assertTrue(true);   //make sure it's called
                }
            };
        });

        this.fakeQueueService();

        DCX.start("test");
        DCX.stop("test");
        assertFalse(DCX.isStarted("test"));
    },

    testStopAllModules: function() {
        expectAsserts(4);

        DCX.addModule("test", function (context) {
            return {
                destroy: function () {
                    assertTrue(true);   //make sure it's called
                }
            };
        });

        DCX.addModule("test2", function (context) {
            return {
                destroy: function () {
                    assertTrue(true);   //make sure it's called
                }
            };
        });

        this.fakeQueueService();

        DCX.startAll();
        DCX.stopAll();

        assertFalse(DCX.isStarted("test"));
        assertFalse(DCX.isStarted("test2"));
    },

    //-------------------------------------------------------------------------
    // Module Context
    //-------------------------------------------------------------------------

    testOneModuleContext: function() {
        expectAsserts(3);

        var obj = {};

        DCX.ModuleContext = function (moduleName, core) {
            assertEquals("test", moduleName);
            assertSame(DCX, core);
            return obj;
        };

        DCX.addModule("test", function (context) {

            assertSame(obj, context);

            return {
            };
        });

        this.fakeQueueService();

        DCX.start("test");
        DCX.stop("test");
    },

    //-------------------------------------------------------------------------
    // Module Instances
    //-------------------------------------------------------------------------

    testGetModule: function() {
        expectAsserts(1);

        var obj = {};

        DCX.addModule("test", function (context) {
            return obj;
        });

        this.fakeQueueService();

        DCX.start("test");
        var result = DCX.getModule("test");
        assertSame(obj, result);
    },

    testGetUnstartedModule: function() {
        expectAsserts(1);

        var obj = {};

        DCX.addModule("test", function (context) {
            return obj;
        });

        this.fakeQueueService();

        var result = DCX.getModule("test");
        assertNull(result);
    },

    //-------------------------------------------------------------------------
    // Service Instances
    //-------------------------------------------------------------------------

    testGetService: function() {
        expectAsserts(4);

        var obj = {};

        DCX.addService("test", function (context) {
            return obj;
        });

        this.fakeQueueService();

        var result = DCX.getService("test");
        assertSame(obj, result);

        // should return the same object each time
        result = DCX.getService("test");
        assertSame(obj, result);

        assertEquals(typeof result.getServiceName, "function");
        assertEquals(result.getServiceName(), "test");
    },

    testGetNonexistentService: function() {
        expectAsserts(1);
        this.fakeQueueService();
        var result = DCX.getService("test");
        assertNull(result);
    },

    //-------------------------------------------------------------------------
    // Service Passthrough
    //-------------------------------------------------------------------------

    testQueue: function() {
        expectAsserts(3);

        var module = "test",
            obj = {},
            queue = "abc";

        DCX.addService("queue", function (context) {
            return {
                post: function (moduleName, event, queueId) {
                    assertEquals(module, moduleName);
                    assertSame(obj, event);
                    assertEquals(queue, queueId);
                },
                flushAll: function (sync) {}
            };
        });

        this.fakeBrowserBaseService();

        DCX.post(module, obj, queue);
    },

    testConfigGetConfig: function() {
        expectAsserts(2);

        var obj = {};

        DCX.addService("config", function (context) {
            return {
                getConfig: function () {
                    assertTrue(true);   //make sure it's called
                    return obj;
                }
            };
        });

        this.fakeQueueService();
        this.fakeBrowserBaseService();

        var result = DCX.getConfig();
        assertSame(obj, result);
    },

    testConfigUpdateConfig: function() {
        expectAsserts(1);

        var obj = {};

        DCX.addService("config", function (context) {
            return {
                updateConfig: function (config) {
                    assertSame(obj, config);
                }
            };
        });

        this.fakeQueueService();
        this.fakeBrowserBaseService();

       DCX.updateConfig(obj);
    },

    testConfigGetCoreConfig: function() {
        expectAsserts(2);

        var obj = {};

        DCX.addService("config", function (context) {
            return {
                getCoreConfig: function () {
                    assertTrue(true);   //make sure it's called
                    return obj;
                }
            };
        });

        this.fakeQueueService();
        this.fakeBrowserBaseService();

        var result = DCX.getCoreConfig();
        assertSame(obj, result);
    },

    testConfigUpdateCoreConfig: function() {
        expectAsserts(1);

        var obj = {};

        DCX.addService("config", function (context) {
            return {
                updateCoreConfig: function (config) {
                    assertSame(obj, config);
                }
            };
        });

        this.fakeQueueService();
        this.fakeBrowserBaseService();

       DCX.updateCoreConfig(obj);
    },

    testConfigGetModuleConfig: function() {
        expectAsserts(2);

        var module = "test",
            obj = {};

        DCX.addService("config", function (context) {
            return {
                getModuleConfig: function (moduleName) {
                    assertEquals(module, moduleName);
                    return obj;
                }
            };
        });

        this.fakeQueueService();
        this.fakeBrowserBaseService();

        var result = DCX.getModuleConfig(module);
        assertSame(obj, result);
    },

    testConfigUpdateModuleConfig: function() {
        expectAsserts(2);

        var module = "test",
            obj = {};

        DCX.addService("config", function (context) {
            return {
                updateModuleConfig: function (moduleName, config) {
                    assertEquals(module, moduleName);
                    assertSame(obj, config);
                }
            };
        });

        this.fakeQueueService();
        this.fakeBrowserBaseService();

       DCX.updateModuleConfig(module, obj);
    },

    testConfigGetServiceConfig: function() {
        expectAsserts(2);

        var service = "test",
            obj = {};

        DCX.addService("config", function (context) {
            return {
                getServiceConfig: function (serviceName) {
                    assertEquals(service, serviceName);
                    return obj;
                }
            };
        });

        this.fakeQueueService();
        this.fakeBrowserBaseService();

        var result = DCX.getServiceConfig(service);
        assertSame(obj, result);
    },

    testConfigUpdateServiceConfig: function() {
        expectAsserts(2);

        var service = "test",
            obj = {};

        DCX.addService("config", function (context) {
            return {
                updateServiceConfig: function (serviceName, config) {
                    assertEquals(service, serviceName);
                    assertSame(obj, config);
                }
            };
        });

        this.fakeQueueService();
        this.fakeBrowserBaseService();

       DCX.updateServiceConfig(service, obj);
    },

    testRegisterBridgeCallbacks: function () {
        expectAsserts(5);

        var callbacks = [
            {
                enabled: true,
                cbType: "messageRedirect",
                cbFunction: function () {}
            },
            {
                enabled: true,
                cbType: "screenCapture",
                cbFunction: function () {}
            }
        ];

        DCX._loadGlobalsForUnitTesting(DCX);

        assertFunction("registerBridgeCallbacks function not found.", DCX.registerBridgeCallbacks);
        assertEquals("registerBridgeCallbacks() failed.", false, DCX.registerBridgeCallbacks());
        assertEquals("registerBridgeCallbacks(null) failed.", false, DCX.registerBridgeCallbacks(null));
        assertEquals("registerBridgeCallbacks(callbacks) failed.", true, DCX.registerBridgeCallbacks(callbacks));
        assertEquals("registerBridgeCallbacks([]) failed.", false, DCX.registerBridgeCallbacks([]));
    },

    testRedirectQueue: function () {
        expectAsserts(7+5+5);
        var queue = [ { value: 1}, { value: 2}, { value: 3}, { value: 4}, { value: 5} ],
            expectedQueue = [ { value: 1}, { value: 2}, { value: 3}, { value: 4}, { value: 5} ],
            returnedQueue = [ { value: 1}, { value: 2}, { value: 3}, { value: 4}, { value: 5} ],
            removeEven = false,
            oddQueue = [ { value: 1}, { value: 3}, { value: 5} ],
            i = 0,
            registered = false,
            callbacks = [
                {
                    enabled: true,
                    cbType: "messageRedirect",
                    cbFunction: function (s, q) {
                        // Shouldn't be called until callback is registered.
                        if (!registered) {
                            assertFail("Unexpected callback!");
                        }
                        assertEquals("redirectQueue failed.", expectedQueue[i++], q);
                        if (removeEven && q.value % 2 === 0) {
                            return;
                        }
                        return q;
                    }
                }
            ];

        this.fakeSerializerService();
        DCX._loadGlobalsForUnitTesting(DCX);

        assertFunction("redirectQueue function not found.", DCX.redirectQueue);
        assertEquals("redirectQueue(null)", null, DCX.redirectQueue(null));
        assertEquals("redirectQueue([])", [], DCX.redirectQueue([]));
        assertEquals("redirectQueue(queue) - registered = false", queue, DCX.redirectQueue(queue));

        registered = true;
        assertEquals("redirectQueue: registerBridgeCallbacks(callbacks) failed.", true, DCX.registerBridgeCallbacks(callbacks));
        assertEquals("redirectQueue(queue) - removeEven = false", returnedQueue, DCX.redirectQueue(queue));

        removeEven = true;
        i = 0;
        assertEquals("redirectQueue(queue) - removeEven = true", oddQueue, DCX.redirectQueue(queue));
    },

    testProvideRequestHeaders: function () {
        expectAsserts(5);
        var hdrs = [
                [],
                [ { name: "one", value: "1", recurring: true}, { name: "two", value: "2"} ],
                [ { name: "three", value: "3"}, { name: "four", value: "4"}, { name : "five", value: "5"} ],
                [ { name: "six", value: "6"}, { name: "seven", value: "7"} ]
            ],
            i = 0,
            registered = false,
            callbacks = [
                {
                    enabled: true,
                    cbType: "addRequestHeaders",
                    cbFunction: function () {
                        // Shouldn't be called until callback is registered.
                        if (!registered) {
                            assertFail("Unexpected callback!");
                        }
                        return hdrs[i];
                    }
                }
            ];

        registered = true;
        assertEquals("Test 1: registerBridgeCallbacks(callbacks) failed.", true, DCX.registerBridgeCallbacks(callbacks));
        for ( i = 0; i < hdrs.length; i += 1) {
            assertEquals("Test " + (2+i) + ": provideRequestHeaders", hdrs[i], DCX.provideRequestHeaders());
        }
    },

    testHasExcludedProtocol: function () {
        var element = document.createElement("a");

        if (!DCX.hasExcludedProtocol) {
            jstestdriver.console.log("Private method 'hasExcludedProtocol' not found. Skipping test.");
            return;
        }
        expectAsserts(9);

        element.setAttribute("href", "intent://#Intent;package=kr.or.kfb.bankey;end;");
        assertTrue(DCX.hasExcludedProtocol(element));

        element.setAttribute("href", "mailto:mail@example.com");
        assertTrue(DCX.hasExcludedProtocol(element));

        element.setAttribute("href", "sms://+14035550185");
        assertTrue(DCX.hasExcludedProtocol(element));

        element.setAttribute("href", "tel:+34666123456");
        assertTrue(DCX.hasExcludedProtocol(element));

        element.setAttribute("href", "#");
        assertFalse(DCX.hasExcludedProtocol(element));

        assertFalse(DCX.hasExcludedProtocol(null));

        assertFalse(DCX.hasExcludedProtocol(undefined));

        assertFalse(DCX.hasExcludedProtocol({}));

        assertFalse(DCX.hasExcludedProtocol(document.createElement("button")));
    },

    "test addGeolocationMsg": function () {
        var undef,
            positionTestObj = {
                coords: {
                    bar: 3245456,
                    latitude: 12.4566,
                    longitude: 242.23532532,
                    accuracy: 22.00456176,
                    foo: "xyz"
                }
            };

        if (!DCX.addGeolocationMsg) {
            jstestdriver.console.log("Private method 'addGeolocationMsg' not found. Skipping test.");
            return;
        }

        expectAsserts(6);
        DCX.addService("queue", function (context) {
            return {
                post: function (moduleName, event, queueId) {
                    var expectedEvent = {
                            type: 13,
                            geolocation: {
                                "lat": 12.4566,
                                "long": 242.23532532,
                                // Accuracy is rounded up to the lowest integer
                                "accuracy": 23
                            }
                        };
                    assertEquals("Invalid module name.", "", moduleName);
                    assertUndefined("Invalid queueId.", queueId);
                    assertEquals("Invalid event posted to queue", expectedEvent, event);
                },
                flushAll: function (sync) {}
            };
        });

        DCX._loadGlobalsForUnitTesting(DCX);

        DCX.addGeolocationMsg(positionTestObj);

        DCX.addGeolocationMsg();
        DCX.addGeolocationMsg(null);
        DCX.addGeolocationMsg(undef);
        DCX.addGeolocationMsg({});
        DCX.addGeolocationMsg([]);
        DCX.addGeolocationMsg("abcd");
        DCX.addGeolocationMsg(123);
        DCX.addGeolocationMsg(positionTestObj.coords);

        DCX.addGeolocationMsg(positionTestObj);
    },

    "test core._registerModuleEvents": function () {
        /*:DOC elem1 = <input id="datafield1" type="input" value="0"/> */
        /*:DOC elem2 = <input id="datafield2" type="input" value="0"/> */

        var data = [this.elem1, this.elem2];
        this.fakeBrowserService({
            queryAll: stubFn(data)
        });

        var ElementData = function () { },
            edCalls = 0;
        ElementData.prototype.examineID = function (elem) {
            ++edCalls;
            if (elem === document) { return "null" }
            return { id: elem.id };
        };

        DCX.addService("browserBase", function (context) {
            return {
                WebEvent: function (e) {
                    this.nativeEvent = e;
                    this.target = e.target;
                    this.type = e.type;
                },
                ElementData: ElementData
            };
        });

        DCX.addService("config", function (context) {
            return {
                getCoreConfig: function () {
                    return {};
                }
            };
        });

        DCX._loadGlobalsForUnitTesting(DCX);

        DCX._registerModuleEvents("test", [
            { name: "click" },
            { name: "change" },
            { name: "focus", target: "input" },
            { name: "blur", target: "input" }
        ], document);

        var browserService = DCX.getService("browser");

        expectAsserts(3);
        assertFunction(DCX._registerModuleEvents);
        assertEquals("browserService.subscribe should be called 6 times for test configuration", 6, browserService.subscribe.callCount);
        assertEquals("checking is caching inside _registerModuleEventsOnScope works (without cache 4 calls of ElementData.prototype.examineID would take place)", 2, edCalls);
    },

    "test core._registerModuleEvents with iframes": function () {
        /*:DOC += <iframe id="if1"> </iframe>*/
        /*:DOC += <iframe id="if2"> </iframe>*/
        /*:DOC += <iframe id="if3"> </iframe>*/

        var data = [
                document.getElementById("if1"),
                document.getElementById("if2"),
                document.getElementById("if3")
            ],
            doc = data[1].contentWindow.document,
            iframecontent = '<html><body><input id="datafield1" type="input" value="0"/></body></html>';

        doc.open();
        doc.write(iframecontent);
        doc.close();

        // in try/catch for FF3.6 where readyState is a getter only
        try {
            doc.readyState = "complete";
        } catch(ex){ /* nothing to do */ }

        this.fakeBrowserService({
            queryAll: stubFn(data),
            query: function(query, scope) {
                var el = scope.getElementById("datafield1")
                stubFn(el || [])
            }
        });

        var ElementData = function () { },
            edCalls = 0;
        ElementData.prototype.examineID = function (elem) {
            ++edCalls;
            if (elem === document) { return "null" }
            return { id: elem.id };
        };

        DCX.addService("browserBase", function (context) {
            return {
                WebEvent: function (e) {
                    this.nativeEvent = e;
                    this.target = e.target;
                    this.type = e.type;
                },
                ElementData: ElementData
            };
        });

        DCX.addService("config", function (context) {
            return {
                getCoreConfig: function () {
                    return {
                        framesBlacklist: "#if1"
                    };
                }
            };
        });

        DCX._loadGlobalsForUnitTesting(DCX);

        DCX._registerModuleEvents("test", [
            { name: "click" },
            { name: "change" },
            { name: "focus", target: "input" },
            { name: "blur", target: "input" }
        ], document);

        doc = data[2].contentWindow.document;
        doc.open();
        doc.write(iframecontent);
        doc.close();

        // in try/catch for FF3.6 where readyState is a getter only
        try {
            doc.readyState = "complete";
        } catch(ex) { /* nothing to do */ }

        var browserService = DCX.getService("browser");

        expectAsserts(2);
        assertFunction(DCX._registerModuleEvents);
        assertEquals("browserService.subscribe should be called 4 times for test configuration", 6, browserService.subscribe.callCount);
    }

});

AsyncTestCase("core_AsyncTests", {

    setUp: function () {
        DCX.ModuleContext = function() {
            return {};
        };
    },

    tearDown: function () {
        DCX.destroy();
        DCX.removeModule("test");
        DCX.removeModule("test2");
        DCX.removeService("test");
        DCX.removeService("test2");
        DCX.removeService("config");
        DCX.removeService("browser");
        DCX.removeService("browserBase");
        DCX.removeService("queue");
        delete DCX.ModuleContext;
    },

    fakeSerializerService: function () {
        DCX.addService("serializer", function(context) {
            return {
                serialize: function () {
                    return "not implemented";
                }
            };
        });
    },

    fakeQueueService: function () {
        DCX.addService("queue", function(context){
            return {
                flushAll: function (sync) {},
                resetFlushTimer: function () {}
            };
        });
    },

    fakeBrowserService: function (conf) {
        DCX.addService("browser", function (context) {
            return DCX.utils.mixin({
                subscribe: stubFn(),
                unsubscribe: stubFn()
            }, conf || {});
        });
    },

    fakeBrowserBaseService: function () {
        var ElementData = function(){};
        ElementData.prototype.examineID = stubFn("null");

        DCX.addService("browserBase", function (context) {
            return {
                WebEvent: function (e) {
                    this.nativeEvent = e;
                    this.target = e.target;
                    this.type = e.type;
                },
                ElementData: ElementData
            };
        });
    },

    //-------------------------------------------------------------------------
    // Core Lifecycle
    //-------------------------------------------------------------------------

    testInit: function(queue) {
        expectAsserts(9);

        queue.call(function(callbacks) {

            DCX.addModule("test", function (context) {
                return {
                    init: function () {
                        assertTrue(true);   //make sure it's called
                    }
                };
            });

            DCX.addModule("test2", function (context) {
                return {
                    init: function () {
                        assertTrue(true);   //make sure it's called
                    }
                };
            });

            DCX.addService("config", function (context) {

                var globalConfig = null;

                return {
                    getServiceConfig: function () {
                        return {"queues":{}}
                    },
                    updateConfig: function (config) {
                        globalConfig = config;
                    },

                    getCoreConfig: function () {
                        return globalConfig.core;
                    },
                    getModuleConfig: function (module) {
                        return globalConfig.modules ? globalConfig.modules[module] : null;
                    },
                    subscribe: function (eventName, handler) {
                        assertEquals("configupdated", eventName);
                    }
                };
            });

            this.fakeQueueService();
            this.fakeBrowserBaseService();
            this.fakeBrowserService();

            assertFalse("DCX.isInitialized()", DCX.isInitialized());
            DCX.init({
                core: {
                    modules: {
                        test: {},
                        test2: {}
                    }
                }
            }, callbacks.add(function(state){
                assertEquals(state, "initialized");
            }));

        });

        queue.call(function(){
            assertTrue(DCX.isInitialized());
            assertEquals("DCX.getState() should return 'loaded' after init", DCX.getState(), "loaded");
            assertTrue("Module 'test' should be started after init", DCX.isStarted("test"));
            assertTrue("Module 'test2' should be started after init", DCX.isStarted("test2"));
            // Warning produced instead throwing an error
            /*assertException("2nd init invocation should throw an error", function(){
                DCX.init({});
            });*/
        });
    },

    testEnableDiscoverFramework: function (queue) {
        expectAsserts(3);

        DCX.addModule("test", function (context) {
            return {
                init: function () {
                    // Do nothing!
                }
            };
        });

        DCX.addService("config", function (context) {
            var globalConfig;

            return {
                getServiceConfig: function () {
                    return {"queues":{}}
                },
                updateConfig: function (config) {
                    globalConfig = config;
                },

                getCoreConfig: function () {
                    return globalConfig.core;
                },
                getModuleConfig: function (module) {
                    return globalConfig.modules ? globalConfig.modules[module] : null;
                },
                subscribe: function (eventName, handler) {
                }
            };
        });

        this.fakeQueueService();
        this.fakeBrowserBaseService();
        this.fakeBrowserService();

        queue.call(function (callbacks) {
            assertFalse("DCX.isInitialized()", DCX.isInitialized());

            DCX.init({
                core: {
                    modules: {
                        test: {}
                    }
                }
            }, callbacks.add(function (state) {
                // Core should be initialized
            }));
        });

        queue.call(function () {
            registered = false,
            callbacks = [
                {
                    enabled: true,
                    cbType: "enableDiscoverFramework",
                    cbFunction: function () {
                        // Shouldn't be called until callback is registered.
                        if (!registered) {
                            assertFail("Unexpected callback!");
                        }
                        assertTrue("enableDiscoverFramework callback triggered.", true);
                    }
                }
            ];

            registered = true;
            assertEquals("registerBridgeCallbacks(callbacks) failed.", true, DCX.registerBridgeCallbacks(callbacks));
            DCX.enableDiscoverFramework();
        });
    },

    testCurrentSessionId: function (queue) {
        expectAsserts(3);

        DCX.addModule("test", function (context) {
            return {
                init: function () {
                    // Do nothing!
                }
            };
        });

        DCX.addService("config", function (context) {
            var globalConfig;

            return {
                getServiceConfig: function () {
                    return {"queues":{}}
                },
                updateConfig: function (config) {
                    globalConfig = config;
                },

                getCoreConfig: function () {
                    return globalConfig.core;
                },
                getModuleConfig: function (module) {
                    return globalConfig.modules ? globalConfig.modules[module] : null;
                },
                subscribe: function (eventName, handler) {
                }
            };
        });

        this.fakeQueueService();
        this.fakeBrowserBaseService();
        this.fakeBrowserService();

        queue.call(function (callbacks) {
            assertFalse("DCX.isInitialized()", DCX.isInitialized());

            DCX.init({
                core: {
                    modules: {
                        test: {}
                    }
                }
            }, callbacks.add(function (state) {
                // Core should be initialized
            }));
        });

        queue.call(function () {
            registered = false,
            sessionId = "",
            callbacks = [
                {
                    enabled: true,
                    cbType: "currentSessionId",
                    cbFunction: function () {
                        // Shouldn't be called until callback is registered.
                        if (!registered) {
                            assertFail("Unexpected callback!");
                        }
                        return sessionId;
                    }
                }
            ];

            registered = true;
            sessionId = "aSessionId";
            assertEquals("registerBridgeCallbacks(callbacks) failed.", true, DCX.registerBridgeCallbacks(callbacks));
            assertEquals("currentSessionId", sessionId, DCX.currentSessionId());
        });
    },

    testDefaultValueForConfigurableItem: function (queue) {
        expectAsserts(3);

        DCX.addModule("test", function (context) {
            return {
                init: function () {
                    // Do nothing!
                }
            };
        });

        DCX.addService("config", function (context) {
            var globalConfig;

            return {
                getServiceConfig: function () {
                    return {"queues":{}}
                },
                updateConfig: function (config) {
                    globalConfig = config;
                },

                getCoreConfig: function () {
                    return globalConfig.core;
                },
                getModuleConfig: function (module) {
                    return globalConfig.modules ? globalConfig.modules[module] : null;
                },
                subscribe: function (eventName, handler) {
                }
            };
        });

        this.fakeQueueService();
        this.fakeBrowserBaseService();
        this.fakeBrowserService();

        queue.call(function (callbacks) {
            assertFalse("DCX.isInitialized()", DCX.isInitialized());

            DCX.init({
                core: {
                    modules: {
                        test: {}
                    }
                }
            }, callbacks.add(function (state) {
                // Core should be initialized
            }));
        });

        queue.call(function () {
            registered = false,
            configItem = "",
            callbacks = [
                {
                    enabled: true,
                    cbType: "defaultValueForConfigurableItem",
                    cbFunction: function () {
                        // Shouldn't be called until callback is registered.
                        if (!registered) {
                            assertFail("Unexpected callback!");
                        }
                        return sessionId;
                    }
                }
            ];

            registered = true;
            configItem = "PostMessageUrl";
            assertEquals("registerBridgeCallbacks(callbacks) failed.", true, DCX.registerBridgeCallbacks(callbacks));
            assertEquals("defaultValueForConfigurableItem", sessionId, DCX.defaultValueForConfigurableItem(configItem));
        });
    },

   testSetConfigurableItem: function (queue) {
        expectAsserts(3);

        DCX.addModule("test", function (context) {
            return {
                init: function () {
                    // Do nothing!
                }
            };
        });

        DCX.addService("config", function (context) {
            var globalConfig;

            return {
                getServiceConfig: function () {
                    return {"queues":{}}
                },
                updateConfig: function (config) {
                    globalConfig = config;
                },

                getCoreConfig: function () {
                    return globalConfig.core;
                },
                getModuleConfig: function (module) {
                    return globalConfig.modules ? globalConfig.modules[module] : null;
                },
                subscribe: function (eventName, handler) {
                }
            };
        });

        this.fakeQueueService();
        this.fakeBrowserBaseService();
        this.fakeBrowserService();

        queue.call(function (callbacks) {
            assertFalse("DCX.isInitialized()", DCX.isInitialized());

            DCX.init({
                core: {
                    modules: {
                        test: {}
                    }
                }
            }, callbacks.add(function (state) {
                // Core should be initialized
            }));
        });

        queue.call(function () {
            registered = false,
            configItem = "",
            value = "",
            callbacks = [
                {
                    enabled: true,
                    cbType: "setConfigurableItem",
                    cbFunction: function () {
                        // Shouldn't be called until callback is registered.
                        if (!registered) {
                            assertFail("Unexpected callback!");
                        }
                        return registered;
                    }
                }
            ];

            registered = true;
            configItem = "PostMessageUrl";
            value = "http://9.19.145.126/store/js/discover/DiscoverUIPost.php";
            assertEquals("registerBridgeCallbacks(callbacks) failed.", true, DCX.registerBridgeCallbacks(callbacks));
            assertEquals("setConfigurableItem failed", true, DCX.setConfigurableItem(configItem, value));
        });
    },

    testLogCustomEventBridge: function (queue) {
        expectAsserts(3);

        DCX.addModule("test", function (context) {
            return {
                init: function () {
                    // Do nothing!
                }
            };
        });

        DCX.addService("config", function (context) {
            var globalConfig;

            return {
                getServiceConfig: function () {
                    return {"queues":{}}
                },
                updateConfig: function (config) {
                    globalConfig = config;
                },
                getModuleConfig: function (module) {
                    return globalConfig.modules ? globalConfig.modules[module] : null;
                },
                getCoreConfig: function () {
                    return globalConfig.core;
                },
                subscribe: function (eventName, handler) {
                }
            };
        });

        this.fakeQueueService();
        this.fakeBrowserBaseService();
        this.fakeBrowserService();

        queue.call(function (callbacks) {
            assertFalse("DCX.isInitialized()", DCX.isInitialized());

            DCX.init({
                core: {
                    modules: {
                        test: {}
                    }
                }
            }, callbacks.add(function (state) {
                // Core should be initialized
            }));
        });

        queue.call(function () {
            registered = false,
            eventName = "",
            jsonData = null,
            logLevel = 0,
            callbacks = [
                {
                    enabled: true,
                    cbType: "logCustomEventBridge",
                    cbFunction: function () {
                        // Shouldn't be called until callback is registered.
                        if (!registered) {
                            assertFail("Unexpected callback!");
                        }
                        return registered;
                    }
                }
            ];

            registered = true;
            eventName = "eventName";
            jsonData = [{ name: "value1"}, { name: "value2"}];
            logLevel = 3;
            assertEquals("registerBridgeCallbacks(callbacks) failed.", true, DCX.registerBridgeCallbacks(callbacks));
            assertEquals("logCustomEventBridge", true, DCX.logCustomEventBridge(eventName, jsonData, logLevel));
        });
    },

    testInitWithDisabledModule: function(queue) {
        expectAsserts(5);

        queue.call(function(callbacks){
            DCX.addModule("test", function (context) {
                return {
                    init: function () {
                        assertTrue(true);   //make sure it's called
                    }
                };
            });

            DCX.addModule("test2", function (context) {
                return {
                };
            });

            DCX.addService("config", function (context) {

                var globalConfig = null;

                return {
                    getServiceConfig: function () {
                        return {"queues":{}}
                    },
                    updateConfig: function (config) {
                        globalConfig = config;
                    },
                    getModuleConfig: function (module) {
                        return globalConfig.modules ? globalConfig.modules[module] : null;
                    },
                    getCoreConfig: function () {
                        return globalConfig.core;
                    }
                };
            });

            this.fakeQueueService();
            this.fakeBrowserBaseService();
            this.fakeBrowserService();

            assertFalse("DCX.isInitialized()", DCX.isInitialized());
            DCX.init({
                core: {
                    modules: {
                        test: {},
                        test2: {
                            enabled: false
                        }
                    }
                }
            }, callbacks.add(function(){}));
        });

        queue.call(function(callbacks){
            assertTrue(DCX.isInitialized());
            assertTrue(DCX.isStarted("test"));
            assertFalse(DCX.isStarted("test2"));
        });
    },

    testDestroy: function(queue) {
        expectAsserts(6);

        queue.call(function(callbacks){
            DCX.addModule("test", function (context) {
                return {
                    destroy: function () {
                        assertTrue(true);   //make sure it's called
                    }
                };
            });

            DCX.addModule("test2", function (context) {
                return {
                };
            });

            DCX.addService("config", function (context) {

                var globalConfig = null;

                return {
                    getServiceConfig: function () {
                        return {"queues":{}}
                    },
                    updateConfig: function (config) {
                        globalConfig = config;
                    },
                    getCoreConfig: function () {
                        return globalConfig.core;
                    },
                    getModuleConfig: function (module) {
                        return globalConfig.modules ? globalConfig.modules[module] : null;
                    },
                    destroy: function () {
                        assertTrue(true);
                    }
                };
            });

            this.fakeQueueService();
            this.fakeBrowserBaseService();
            this.fakeBrowserService();

            assertFalse("DCX.isInitialized()", DCX.isInitialized());
            DCX.init({
                core: {
                    modules: {
                        test: {},
                        test2: {}
                    }
                }
            }, callbacks.add(function(){}));
        });

        queue.call(function() {
            DCX.destroy();
            assertFalse(DCX.isInitialized());
            assertFalse(DCX.isStarted("test"));
            assertFalse(DCX.isStarted("test2"));
        });

    },

    //-------------------------------------------------------------------------
    // Web Events
    //-------------------------------------------------------------------------

    testEventRegistration: function(queue) {
        expectAsserts(5);

        var customEvent = { type: "click", target: { id: 'testid', idType: -1}, nativeEvent: {} };
        customEvent.nativeEvent.target = customEvent.target;

        queue.call(function(callbacks){

            DCX.addModule("test", function (context) {
                return {
                    onevent: function (event) {

                        assertEquals(customEvent, event); //verify event object is correct

                    }
                };
            });

            DCX.addService("config", function (context) {

                var globalConfig = null;

                return {
                     getServiceConfig: function () {
                        return {"queues":{}}
                    },
                    updateConfig: function (config) {
                        globalConfig = config;
                    },
                    getModuleConfig: function (module) {
                        return globalConfig.modules ? globalConfig.modules[module] : null;
                    },
                    getCoreConfig: function () {
                        return globalConfig.core;
                    }
                };
            });

            DCX.addService("browser", function (context) {
                return {
                    subscribe: function (eventName, target, handler) {
                        assertEquals("click", eventName);
                        assertSame(document, target);
                        assertSame(DCX._publishEvent, handler);
                    },
                    unsubscribe: function () {},
                    queryAll: function () { return []; }
                };
            });

            this.fakeQueueService();
            this.fakeBrowserBaseService();

            assertFalse("DCX.isInitialized()", DCX.isInitialized());
            DCX.init({
                core: {
                    modules: {
                        test: {
                            events: [ { name: "click" } ]
                        }
                    }
                }
            }, callbacks.add(function(){}));
        });

        queue.call(function() {
            DCX._publishEvent(customEvent);
        });
    },

    testEventRegistrationMultiple: function(queue) {
        expectAsserts(6);

        var customEvent = { type: "click", target: { id: 'testid', idType: -1 }, nativeEvent: {} };
        customEvent.nativeEvent.target = customEvent.target;

        queue.call(function(callbacks){
            DCX.addModule("test", function (context) {
                return {
                    onevent: function (event) {
                        assertEquals(customEvent, event); //verify event object is correct
                    }
                };
            });

            DCX.addModule("test2", function (context) {
                return {
                    onevent: function (event) {
                        assertEquals(customEvent, event); //verify event object is correct
                    }
                };
            });

            DCX.addService("config", function (context) {

                var globalConfig = null;

                return {
                    getServiceConfig: function () {
                        return {"queues":{}}
                    },
                    updateConfig: function (config) {
                        globalConfig = config;
                    },
                    getModuleConfig: function (module) {
                        return globalConfig.modules ? globalConfig.modules[module] : null;
                    },
                    getCoreConfig: function () {
                        return globalConfig.core;
                    }
                };
            });

            DCX.addService("browser", function (context) {
                return {
                    subscribe: function (eventName, target, handler) {
                        assertEquals("click", eventName);
                        assertSame(document, target);
                        assertSame(DCX._publishEvent, handler);
                    },
                    unsubscribe: function () {},
                    queryAll: function () { return []; }
                };
            });

            this.fakeQueueService();
            this.fakeBrowserBaseService();

            assertFalse("DCX.isInitialized()", DCX.isInitialized());
            DCX.init({
                core: {
                    modules: {
                        test: {
                            events: [ { name: "click" } ]
                        },
                        test2: {
                            events: [ { name: "click" } ]
                        }
                    }
                }
            }, callbacks.add(function(){}));
        });

        queue.call(function() {
            DCX._publishEvent(customEvent);
        });

    },

    testUnregisterEvents: function(queue) {
        expectAsserts(4);

        queue.call(function(callbacks){
            DCX.addModule("test", function (context) {
                return {
                };
            });

            DCX.addModule("test2", function (context) {
                return {
                };
            });

            DCX.addService("config", function (context) {

                var globalConfig = null;

                return {
                    getServiceConfig: function () {
                        return {"queues":{}}
                    },
                    updateConfig: function (config) {
                        globalConfig = config;
                    },
                    getModuleConfig: function (module) {
                        return globalConfig.modules ? globalConfig.modules[module] : null;
                    },
                    getCoreConfig: function () {
                        return globalConfig.core;
                    }
                };
            });

            DCX.addService("browser", function (context) {
                return {
                    subscribe: function (eventName, target, handler) {
                    },

                    unsubscribe: function (eventName, target, handler) {
                        assertEquals("click", eventName);
                        assertSame(document, target);
                        assertSame(DCX._publishEvent, handler);
                    },

                    queryAll: function () { return []; }
                };
            });

            this.fakeQueueService();
            this.fakeBrowserBaseService();

            assertFalse("DCX.isInitialized()", DCX.isInitialized());
            DCX.init({
                core: {
                    modules: {
                        test: {
                            events: [ { name: "click" } ]
                        },
                        test2: {
                            events: [ { name: "click" } ]
                        }
                    }
                }
            }, callbacks.add(function(){}));
        });

        queue.call(function() {
            DCX.destroy();
        });

    },

    //-------------------------------------------------------------------------
    // Public API
    //-------------------------------------------------------------------------
    testEventRebinding: function (queue) {

        queue.call(function(callbacks){
            DCX.addService("config", function (context) {

                var globalConfig = null;

                return {
                    getServiceConfig: function () {
                        return {"queues":{}}
                    },
                    updateConfig: function (config) {
                        globalConfig = config;
                    },
                    getModuleConfig: function (module) {
                        return globalConfig.modules ? globalConfig.modules[module] : null;
                    },
                    getCoreConfig: function () {
                        return globalConfig.core;
                    }
                };
            });

            DCX.addService("browser", function (context) {
                return {
                    queryAll: function () { return []; },
                    subscribe: function () {},
                    unsubscribe: function () {}
                };
            });

            this.fakeQueueService();
            this.fakeBrowserBaseService();

            DCX.addModule("test", function (context) {
                return {
                };
            });

            assertFalse("DCX.isInitialized()", DCX.isInitialized());
            DCX.init({
                core: {
                    modules: {
                        test: {
                            events: [ { name: "click" } ]
                        }
                    }
                }
            }, callbacks.add(function(){}));
        });

        queue.call(function() {
            DCX.addModule("test2", function (context) {
                return {
                };
            });

            DCX.updateConfig({
                core: {
                    modules: {
                        test: {
                            events: [ { name: "click" } ]
                        },
                        test2: {
                            events: [ { name: "click" } ]
                        }
                    }
                }
            });

            DCX._loadGlobalsForUnitTesting(DCX);

            var old_registerModuleEvents = DCX._registerModuleEvents;

            DCX._registerModuleEvents = stubFn();
            DCX._registerModuleEvents.clearCache = stubFn();

            DCX.rebind("scope");

            assert(DCX._registerModuleEvents.called);
            assertEquals("test2", DCX._registerModuleEvents.args[0]);
            assertEquals("scope", DCX._registerModuleEvents.args[2]);

            DCX._registerModuleEvents = old_registerModuleEvents;
        });


    },

    testInitLoad: function(queue) {
        expectAsserts(2);

        var customEvent = {type: 'load', target: window, nativeEvent: {type: 'load', target: window, currentTarget: window}};

        queue.call(function(callbacks){
            DCX.addModule("test", function (context) {
                return {
                    onevent: function (event) {
                            assertEquals("load", event.type);
                    }
                };
            });

            DCX.addService("config", function (context) {

                var globalConfig = null;

                return {
                    getServiceConfig: function () {
                        return {"queues":{}}
                    },
                    updateConfig: function (config) {
                        globalConfig = config;
                    },
                    getModuleConfig: function (module) {
                        return globalConfig.modules ? globalConfig.modules[module] : null;
                    },
                    getCoreConfig: function () {
                        return globalConfig.core;
                    }
                };
            });

            DCX.addService("browser", function (context) {
                return {
                    queryAll: function () { return []; },
                    subscribe: function () {},
                    unsubscribe: function () {}
                };
            });

            this.fakeBrowserBaseService();
            this.fakeQueueService();

            assertFalse("DCX.isInitialized()", DCX.isInitialized());
            DCX.init({
                core: {
                    modules: {
                        test: {
                            events: [ { name: "load", target: window} ]
                        }
                    }
                }
            }, callbacks.add(function(){}));
        });

        queue.call(function() {
            DCX._publishEvent(customEvent);
        });


    },

    //-------------------------------------------------------------------------
    // Intermodule Communication
    //-------------------------------------------------------------------------

    testBroadcast: function(queue) {
        expectAsserts(3);

        var data = {};

        queue.call(function(callbacks){
            DCX.addModule("test", function (context) {
                return {
                    onmessage: function (message) {
                        assertEquals("testmessage", message.type);
                        assertSame(data, message.data);
                    }
                };
            });


            DCX.addService("config", function (context) {

                var globalConfig = null;

                return {
                    getServiceConfig: function () {
                        return {"queues":{}}
                    },
                    updateConfig: function (config) {
                        globalConfig = config;
                    },
                    getModuleConfig: function (module) {
                        return globalConfig.modules ? globalConfig.modules[module] : null;
                    },
                    getCoreConfig: function () {
                        return globalConfig.core;
                    }
                };
            });

            this.fakeQueueService();
            this.fakeBrowserBaseService();
            this.fakeBrowserService();

            assertFalse("DCX.isInitialized()", DCX.isInitialized());
            DCX.init({
                core: {
                    modules: {
                        test: {
                        }
                    }
                }
            }, callbacks.add(function(){}));
        });

        queue.call(function() {
            DCX.listen("test", "testmessage");

            DCX.broadcast({
                type: "testmessage",
                data: data
            });
        });
    },

    testBroadcastMultipleListeners: function(queue) {
        expectAsserts(5);

        var data = {};

        queue.call(function(callbacks){
            DCX.addModule("test", function (context) {
                return {
                    onmessage: function (message) {
                        assertEquals("testmessage", message.type);
                        assertSame(data, message.data);
                    }
                };
            });

            DCX.addModule("test2", function (context) {
                return {
                    onmessage: function (message) {
                        assertEquals("testmessage", message.type);
                        assertSame(data, message.data);
                    }
                };
            });

            DCX.addService("config", function (context) {

                var globalConfig = null;

                return {
                    getServiceConfig: function () {
                        return {"queues":{}}
                    },
                    updateConfig: function (config) {
                        globalConfig = config;
                    },
                    getModuleConfig: function (module) {
                        return globalConfig.modules ? globalConfig.modules[module] : null;
                    },
                    getCoreConfig: function () {
                        return globalConfig.core;
                    }
                };
            });

            this.fakeQueueService();
            this.fakeBrowserBaseService();
            this.fakeBrowserService();

            assertFalse("DCX.isInitialized()", DCX.isInitialized());
            DCX.init({
                core: {
                    modules: {
                        test: {},
                        test2: {}
                    }
                }
            }, callbacks.add(function(){}));
        });

        queue.call(function() {
            DCX.listen("test", "testmessage");
            DCX.listen("test2", "testmessage");

            DCX.broadcast({
                type: "testmessage",
                data: data
            });
        });
    },

    testBroadcastMutlipleMessages: function(queue) {
        expectAsserts(5);

        var data = {},
            data2 = {},
            messageNum = 0;

        queue.call(function(callbacks){
            DCX.addModule("test", function (context) {
                return {
                    onmessage: function (message) {
                        messageNum++;

                        if (messageNum == 1) {
                            assertEquals("testmessage", message.type);
                            assertSame(data, message.data);
                        } else {
                            assertEquals("testmessage2", message.type);
                            assertSame(data2, message.data);
                        }
                    }
                };
            });


            DCX.addService("config", function (context) {

                var globalConfig = null;

                return {
                    getServiceConfig: function () {
                        return {"queues":{}}
                    },
                    updateConfig: function (config) {
                        globalConfig = config;
                    },
                    getModuleConfig: function (module) {
                        return globalConfig.modules ? globalConfig.modules[module] : null;
                    },
                    getCoreConfig: function () {
                        return globalConfig.core;
                    }
                };
            });

            this.fakeQueueService();
            this.fakeBrowserBaseService();
            this.fakeBrowserService();

            assertFalse("DCX.isInitialized()", DCX.isInitialized());
            DCX.init({
                core: {
                    modules: {
                        test: {}
                    }
                }
            }, callbacks.add(function(){}));
        });

        queue.call(function() {
            DCX.listen("test", "testmessage");
            DCX.listen("test", "testmessage2");

            DCX.broadcast({
                type: "testmessage",
                data: data
            });

            DCX.broadcast({
                type: "testmessage2",
                data: data2
            });
        });
    },

    //-------------------------------------------------------------------------
    // Config Updates
    //-------------------------------------------------------------------------

    testEventRegistrationUpdates: function(queue) {
        expectAsserts(5);

        var customEvent = { type: "click", target: { id: 'testid', idType: -1 }, nativeEvent: {} },
            customEvent2 = { type: "mousedown", target: { id: '[[\"HTML\",0],[\"BODY\",0],[\"SELECT\",0]]', idType: -2 }, nativeEvent: {} },
            eventNum = 1;


        customEvent.nativeEvent.target = customEvent.target;
        customEvent2.nativeEvent.target = customEvent2.target;

        queue.call(function(callbacks){

            DCX.addModule("test", function (context) {
                return {
                    onevent: function (event) {
                        if (eventNum == 1) {
                            assertEquals(customEvent, event); //verify event object is correct
                        } else {
                            assertEquals(customEvent2, event);
                        }
                    }
                };
            });

            DCX.addService("config", function (context) {

                var globalConfig = null;

                return {
                    getServiceConfig: function () {
                        return {"queues":{}}
                    },
                    updateConfig: function (config) {
                        if (globalConfig === null) {
                            globalConfig = config;
                        } else {
                            globalConfig.core.modules.test = config.core.modules.test;
                        }
                    },
                    getModuleConfig: function (module) {
                        return globalConfig.modules ? globalConfig.modules[module] : null;
                    },
                    getCoreConfig: function () {
                        return globalConfig.core;
                    }
                };
            });

            DCX.addService("browser", function (context) {
                return {
                    subscribe: function (eventName, target, handler) {
                        if (eventNum == 1) {
                            assertEquals("click", eventName);
                        } else {
                            assertEquals("mousedown", eventName);
                        }
                    },

                    unsubscribe: function() {},
                    queryAll: function () { return []; }
                };
            });

            this.fakeQueueService();
            this.fakeBrowserBaseService();

            assertFalse("DCX.isInitialized()", DCX.isInitialized());
            DCX.init({
                core: {
                    modules: {
                        test: {
                            events: [ { name: "click" } ]
                        }
                    }
                }
            }, callbacks.add(function(){}));
        });

        queue.call(function() {
            DCX._publishEvent(customEvent);
            eventNum++;

            // add mousedown
            DCX.updateConfig({
                core: {
                    modules: {
                        test: {
                            events: [
                                { name: "click" },
                                { name: "mousedown" }
                            ]
                        }
                    }
                }
            });

            // Simulate configupdated
            DCX._reinitConfig();

            DCX._publishEvent(customEvent2);
        });
    },

    testEnabledUpdates: function(queue) {
        expectAsserts(9);

        queue.call(function(callbacks){
            DCX.addModule("test", function (context) {
                return {
                    init: function () {
                        assertTrue(true);   //make sure it's called
                    },

                    destroy: function () {
                        assertTrue(true);
                    }
                };
            });

            DCX.addModule("test2", function (context) {
                return {
                    init: function () {
                        assertTrue(true);   //make sure it's called
                    }
                };
            });

            DCX.addService("config", function (context) {

                var globalConfig = null;

                return {
                    getServiceConfig: function () {
                        return {"queues":{}}
                    },
                    updateConfig: function (config) {
                        if (globalConfig === null) {
                            globalConfig = config;
                        } else {
                            globalConfig.core.modules.test = config.core.modules.test;
                        }
                    },
                    getModuleConfig: function (module) {
                        return globalConfig.modules ? globalConfig.modules[module] : null;
                    },
                    getCoreConfig: function () {
                        return globalConfig.core;
                    },

                    subscribe: function (eventName, handler) {
                        assertEquals("configupdated", eventName);
                    }
                };
            });

            this.fakeQueueService();
            this.fakeBrowserBaseService();
            this.fakeBrowserService();

            assertFalse("DCX.isInitialized()", DCX.isInitialized());
            DCX.init({
                core: {
                    modules: {
                        test: {},
                        test2: {}
                    }
                }
            }, callbacks.add(function(){}));
        });

        queue.call(function() {
            assertTrue(DCX.isInitialized());
            assertTrue(DCX.isStarted("test"));
            assertTrue(DCX.isStarted("test2"));

            // add mousedown
            DCX.updateConfig({
                core: {
                    modules: {
                        test: {
                            enabled: false
                        }
                    }
                }
            });

            // Simulate configupdated
            DCX._reinitConfig();

            assertFalse(DCX.isStarted("test"));
        });
    },

    //-------------------------------------------------------------------------
    // Dynamic Module Loading
    //-------------------------------------------------------------------------

    "test Module Added After Initialization": function(queue) {
        expectAsserts(4);

        queue.call(function(callbacks){
            DCX.addModule("test", function (context) {
                return {
                    init: function () {
                        assertTrue(true);   //make sure it's called
                    }
                };
            });

            DCX.addService("config", function (context) {

                var globalConfig = null;

                return {
                    getServiceConfig: function () {
                        return {"queues":{}}
                    },
                    updateConfig: function (config) {
                        if (globalConfig === null) {
                            globalConfig = config;
                        } else {
                            globalConfig.core.modules.test2 = config.core.modules.test2;
                        }
                    },
                    getModuleConfig: function (module) {
                        return globalConfig.modules ? globalConfig.modules[module] : null;
                    },
                    getCoreConfig: function () {
                        return globalConfig.core;
                    }
                };
            });

            DCX.addService("browser", function (context) {
                return {
                    loadScript: function (url) {
                        fail("Dynamic loading of scripts is a security vulnerability.");
                    }
                };
            });

            this.fakeQueueService();
            this.fakeBrowserBaseService();

            assertFalse("DCX.isInitialized()", DCX.isInitialized());
            DCX.init({
                core: {
                    modules: {
                        test: {}
                    }
                }
            }, callbacks.add(function(){}));
        });

        queue.call(function() {
            DCX.updateConfig({
                core: {
                    modules: {
                        test2: {}
                    }
                }
            });

            // Simulate configupdated
            DCX._reinitConfig();

            // add new module
            DCX.addModule("test2", function (context) {
                return {
                    init: function () {
                        assertTrue(true);   //make sure it's called
                    }
                };
            });

            assertTrue(DCX.isStarted("test2"));
        });
    },

    "test_hasSameOrigin": function(queue) {
        expectAsserts(2);
        var externalIframe = document.createElement("iframe"),
            localIframe = document.createElement("iframe");

        // iframes creation
        queue.call(function(callbacks){
            var localIframeCallback = callbacks.add(function(){});
            localIframe.onload = localIframeCallback;
            localIframe.onreadystatechange = function(){
                if (this.readyState === 'complete') {
                    localIframeCallback();
                }
            };
            localIframe.src = "/test/test/resources/frametest.html";
            document.body.appendChild(localIframe);

            var externalIframeCallback = callbacks.add(function(){});
            externalIframe.onload = externalIframeCallback;
            externalIframe.onreadystatechange = function(){
                if (this.readyState === 'complete') {
                    externalIframeCallback();
                }
            };
            externalIframe.src = "http://www.google.com";
            document.body.appendChild(externalIframe);
        });

        // assertions
        queue.call(function() {
            assertTrue(DCX._hasSameOrigin(localIframe.contentWindow));
            assertFalse(DCX._hasSameOrigin(externalIframe.contentWindow));
        });
    },

    //-------------------------------------------------------------------------
    // Public API
    //-------------------------------------------------------------------------
    "test getSessionData session data disabled": function(queue) {
        var oldgetQueryStringValue = DCX.utils.getQueryStringValue,
            oldgetCookieValue = DCX.utils.getCookieValue,
            rv;

        expectAsserts(3);
        DCX.addModule("test", function (context) {
            return {
                init: function () {
                    // Do nothing!
                }
            };
        });

        DCX.addService("config", function (context) {
            var globalConfig;

            return {
                getServiceConfig: function () {
                    return {"queues":{}}
                },
                updateConfig: function (config) {
                    globalConfig = config;
                },

                getCoreConfig: function () {
                    return globalConfig.core;
                },
                getModuleConfig: function (module) {
                    return globalConfig.modules ? globalConfig.modules[module] : null;
                },
                subscribe: function (eventName, handler) {
                }
            };
        });

        this.fakeQueueService();
        this.fakeBrowserBaseService();
        this.fakeBrowserService();

        queue.call(function (callbacks) {
            assertFalse("DCX.isInitialized()", DCX.isInitialized());

            DCX.init({
                core: {
                    modules: {
                        test: {}
                    },
                    sessionDataEnabled: false
                }
            }, callbacks.add(function (state) {
                assertEquals(state, "initialized");
            }));
        });

        queue.call(function () {
            rv = DCX.getSessionData();
            assertNull(rv);
        });
    },

    "test getSessionData with sessionQueryName": function(queue) {
        var oldgetQueryStringValue = DCX.utils.getQueryStringValue,
            rv;

        expectAsserts(5);
        DCX.addModule("test", function (context) {
            return {
                init: function () {
                    // Do nothing!
                }
            };
        });

        DCX.addService("config", function (context) {
            var globalConfig;

            return {
                getServiceConfig: function () {
                    return {"queues":{}}
                },
                updateConfig: function (config) {
                    globalConfig = config;
                },

                getCoreConfig: function () {
                    return globalConfig.core;
                },
                getModuleConfig: function (module) {
                    return globalConfig.modules ? globalConfig.modules[module] : null;
                },
                subscribe: function (eventName, handler) {
                }
            };
        });

        this.fakeQueueService();
        this.fakeBrowserBaseService();
        this.fakeBrowserService();

        queue.call(function (callbacks) {
            assertFalse("DCX.isInitialized()", DCX.isInitialized());

            DCX.init({
                core: {
                    modules: {
                        test: {}
                    },
                    sessionDataEnabled: true,
                    sessionData: {
                        sessionValueNeedsHashing: true,
                        sessionQueryName: "sessionID",
                        sessionQueryDelim: ";"
                    }
                }
            }, callbacks.add(function (state) {
                assertEquals(state, "initialized");
            }));
        });

        DCX.utils.getQueryStringValue = stubFn("123");

        queue.call(function () {
            rv = DCX.getSessionData();
            DCX.utils.getQueryStringValue = oldgetQueryStringValue;
            assertEquals(rv.dcxSCN, "sessionID");
            assertEquals(rv.dcxSCV, "123");
            assertTrue(rv.dcxSCVNeedsHashing);
        });
    },

    "test getSessionData without sessionQueryName": function(queue) {
        var oldgetCookieValue = DCX.utils.getCookieValue,
            rv;

        expectAsserts(5);
        DCX.addModule("test", function (context) {
            return {
                init: function () {
                    // Do nothing!
                }
            };
        });

        DCX.addService("config", function (context) {
            var globalConfig;

            return {
                getServiceConfig: function () {
                    return {"queues":{}}
                },
                updateConfig: function (config) {
                    globalConfig = config;
                },

                getCoreConfig: function () {
                    return globalConfig.core;
                },
                getModuleConfig: function (module) {
                    return globalConfig.modules ? globalConfig.modules[module] : null;
                },
                subscribe: function (eventName, handler) {
                }
            };
        });

        this.fakeQueueService();
        this.fakeBrowserBaseService();
        this.fakeBrowserService();

        queue.call(function (callbacks) {
            assertFalse("DCX.isInitialized()", DCX.isInitialized());

            DCX.init({
                core: {
                    modules: {
                        test: {}
                    },
                    sessionDataEnabled: true,
                    sessionData: {
                        sessionValueNeedsHashing: true,
                        sessionQueryDelim: ";"
                    }
                }
            }, callbacks.add(function (state) {
                assertEquals(state, "initialized");
            }));
        });

        DCX.utils.getCookieValue = stubFn("456");

        queue.call(function () {
            rv= DCX.getSessionData();

            DCX.utils.getCookieValue = oldgetCookieValue;

            assertEquals(rv.dcxSCN, "TLTSID");
            assertEquals(rv.dcxSCV, "456");
            assertTrue(rv.dcxSCVNeedsHashing);
        });
    },

    testLogScreenviewLoad: function(queue) {
        var screenviewName = "my_screen",
            referrerName = "your_screen";

        expectAsserts(14);
        DCX.addModule("test", function (context) {
            return {
                init: function () {
                    // Do nothing!
                }
            };
        });

        DCX.addService("config", function (context) {
            var globalConfig;

            return {
                getServiceConfig: function () {
                    return {"queues":{}}
                },
                updateConfig: function (config) {
                    globalConfig = config;
                },

                getCoreConfig: function () {
                    return globalConfig.core;
                },
                getModuleConfig: function (module) {
                    return globalConfig.modules ? globalConfig.modules[module] : null;
                },
                subscribe: function (eventName, handler) {
                }
            };
        });

        // Setup the stub queue service
        DCX.addService("queue", function (context) {
            return {
                post: function (moduleName, msg, queueId) {
                    // Module name for screenview events should be empty
                    assertEquals("", moduleName);
                    // Queue ID for screenview events should be default
                    assertUndefined("Invalid queueId.", queueId);
                    // Message type should be 2
                    assertEquals(2, msg.type);
                    // Screenview type should be "LOAD"
                    assertEquals("LOAD", msg.screenview.type);
                    // Verify screenview name and referrerName are correctly reflected in the message
                    assertEquals(screenviewName, msg.screenview.name);
                    assertEquals(referrerName, msg.screenview.referrer);
                },
                flushAll: function (sync) {}
            };
        });

        this.fakeBrowserBaseService();
        this.fakeBrowserService();

        queue.call(function (callbacks) {
            assertFalse("DCX.isInitialized()", DCX.isInitialized());

            DCX.init({
                core: {
                    modules: {
                        test: {}
                    }
                }
            }, callbacks.add(function (state) {
                assertEquals(state, "initialized");
            }));
        });

        queue.call(function () {
            DCX.logScreenviewLoad(screenviewName, referrerName);
            referrerName = "";
            DCX.logScreenviewLoad(screenviewName);
            DCX.logScreenviewLoad();
            DCX.logScreenviewLoad(null);
        });
    },

    testLogScreenviewUnload: function(queue) {
        var screenviewName = "my_screen";

        expectAsserts(7);
        DCX.addModule("test", function (context) {
            return {
                init: function () {
                    // Do nothing!
                }
            };
        });

        DCX.addService("config", function (context) {
            var globalConfig;

            return {
                getServiceConfig: function () {
                    return {"queues":{}}
                },
                updateConfig: function (config) {
                    globalConfig = config;
                },

                getCoreConfig: function () {
                    return globalConfig.core;
                },
                getModuleConfig: function (module) {
                    return globalConfig.modules ? globalConfig.modules[module] : null;
                },
                subscribe: function (eventName, handler) {
                }
            };
        });

        // Setup the stub queue service
        DCX.addService("queue", function (context) {
            return {
                post: function (moduleName, msg, queueId) {
                    // Module name for screenview events should be empty
                    assertEquals("", moduleName);
                    // Queue ID for screenview events should be default
                    assertUndefined("Invalid queueId.", queueId);
                    // Message type should be 2
                    assertEquals(2, msg.type);
                    // Screenview type should be "UNLOAD"
                    assertEquals("UNLOAD", msg.screenview.type);
                    // Verify screenview name and referrerName are correctly reflected in the message
                    assertEquals(screenviewName, msg.screenview.name);
                },
                flushAll: function (sync) {}
            };
        });

        this.fakeBrowserBaseService();
        this.fakeBrowserService();

        queue.call(function (callbacks) {
            assertFalse("DCX.isInitialized()", DCX.isInitialized());

            DCX.init({
                core: {
                    modules: {
                        test: {}
                    }
                }
            }, callbacks.add(function (state) {
                assertEquals(state, "initialized");
            }));
        });

        queue.call(function () {
            DCX.logScreenviewUnload(screenviewName);
            DCX.logScreenviewUnload();
            DCX.logScreenviewUnload(null);
        });
    },

    testLogCustomEvent: function(queue) {
        var eventName = "CUSTOM",
            customObj = {};

        expectAsserts(32);
        DCX.addModule("test", function (context) {
            return {
                init: function () {
                    // Do nothing!
                }
            };
        });

        DCX.addService("config", function (context) {
            var globalConfig;

            return {
                getServiceConfig: function () {
                    return {"queues":{}}
                },
                updateConfig: function (config) {
                    globalConfig = config;
                },

                getCoreConfig: function () {
                    return globalConfig.core;
                },
                getModuleConfig: function (module) {
                    return globalConfig.modules ? globalConfig.modules[module] : null;
                },
                subscribe: function (eventName, handler) {
                }
            };
        });

        // Setup the stub queue service
        DCX.addService("queue", function (context) {
            return {
                post: function (moduleName, msg, queueId) {
                    // Module name for custom events should be empty
                    assertEquals("", moduleName);
                    // Queue ID for custom events should be default
                    assertUndefined("Invalid queueId.", queueId);
                    // Message type should be 5
                    assertEquals(5, msg.type);
                    // Verify eventName and customObj are correctly reflected in the message
                    assertEquals(eventName, msg.customEvent.name);
                    assertEquals(customObj, msg.customEvent.data);
                },
                flushAll: function (sync) {}
            };
        });

        this.fakeBrowserBaseService();
        this.fakeBrowserService();

        queue.call(function (callbacks) {
            assertFalse("DCX.isInitialized()", DCX.isInitialized());

            DCX.init({
                core: {
                    modules: {
                        test: {}
                    }
                }
            }, callbacks.add(function (state) {
                assertEquals(state, "initialized");
            }));
        });

        queue.call(function () {
            // Test the custom event API
            DCX.logCustomEvent();
            DCX.logCustomEvent(customObj);
            DCX.logCustomEvent("");

            eventName = "foo";
            DCX.logCustomEvent(eventName, customObj);

            customObj = "bar";
            DCX.logCustomEvent(eventName, customObj);

            customObj = {
                a: "x",
                b: "y",
                c: {
                    p: 1,
                    q: false,
                    r: {}
                },
                d: "z"
            }
            DCX.logCustomEvent(eventName, customObj);
        });
    },

    testLogExceptionEvent: function(queue) {
        var errorMsg = "Oops!",
            url = "",
            line = "";

        expectAsserts(20);
        DCX.addModule("test", function (context) {
            return {
                init: function () {
                    // Do nothing!
                }
            };
        });

        DCX.addService("config", function (context) {
            var globalConfig;

            return {
                getServiceConfig: function () {
                    return {"queues":{}}
                },
                updateConfig: function (config) {
                    globalConfig = config;
                },

                getCoreConfig: function () {
                    return globalConfig.core;
                },
                getModuleConfig: function (module) {
                    return globalConfig.modules ? globalConfig.modules[module] : null;
                },
                subscribe: function (eventName, handler) {
                }
            };
        });

        // Setup the stub queue service
        DCX.addService("queue", function (context) {
            return {
                post: function (moduleName, msg, queueId) {
                    // Module name for exception events should be empty
                    assertEquals("", moduleName);
                    // Queue ID for exception events should be default or undefined
                    assertEquals("DEFAULT", (typeof queueId === "undefined" ? "DEFAULT" : queueId));
                    // Message type should be 6
                    assertEquals(6, msg.type);
                    // Verify msg, url and line are correctly reflected in the message
                    assertEquals(errorMsg, msg.exception.description);
                    assertEquals(url, msg.exception.url);
                    assertEquals(line, msg.exception.line);
                },
                flushAll: function (sync) {}
            };
        });

        this.fakeBrowserBaseService();
        this.fakeBrowserService();

        queue.call(function (callbacks) {
            assertFalse("DCX.isInitialized()", DCX.isInitialized());

            DCX.init({
                core: {
                    modules: {
                        test: {}
                    }
                }
            }, callbacks.add(function (state) {
                assertEquals(state, "initialized");
            }));
        });

        queue.call(function () {
            DCX.logExceptionEvent(errorMsg);

            url = "bad url";
            DCX.logExceptionEvent(errorMsg, url);

            line = 99;
            DCX.logExceptionEvent(errorMsg, url, line);

            // The following should not result in any exception message being posted.
            DCX.logExceptionEvent();
            DCX.logExceptionEvent(null);
            DCX.logExceptionEvent(45);
        });
    },

    "test fail": function (queue) {
        var message = "testErrorMsg",
            failCode = 100,
            uicerror = new DCX.UICError("UIC FAILED. " + message, failCode)

        expectAsserts(3);
        try {
            DCX.fail(message, failCode);
        } catch(e) {
            assertEquals(e.message, "UIC FAILED. " + message);
            assertEquals(e.code, failCode);
            assertEquals(e.name, "UICError");
        };
    },

    testNormalizeUrl: function() {
        var url = "ibm.com?a=1&b=2&c=3",
            obj = {};

        expectAsserts(2);

        DCX.addService("config", function (context) {
            return {
                getCoreConfig: function () {
                    return obj;
                },
		updateCoreConfig: function (config) {
                    obj = config;
                }
            };
        });

        // if normalization function is not defined, url should be same as before
        assertEquals(DCX.normalizeUrl(url), url);

        // define normalization function
        obj = {
            normalization: {
                urlFunction: function (url) {
                    return url.replace("&b=2","");
                }
            }
        }
        DCX.updateCoreConfig(obj);
        assertEquals(DCX.normalizeUrl(url), "ibm.com?a=1&c=3");
    }

});