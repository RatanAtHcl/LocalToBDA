/*
 *  **************************************************************************
 *  Licensed Materials - Property of HCL
 *  (c) Copyright HCL Technologies Ltd.  2020. All Rights Reserved.
 *  US Government Users Restricted Rights - Use, duplication or disclosure
 *  restricted by GSA ADP Schedule Contract with HCL Technologies.
 *  **************************************************************************
 */

(function () {

    var configService = {
            subscribe: stubFn(),
            unsubscribe: stubFn(),
            getServiceConfig: function (serviceName) {
                if (serviceName === "queue") {
                    return  {
                        queues: [
                            {
                                qid: 'DEFAULT',
                                endpoint: '/',
                                maxEvents: 5,
                                serializer: 'json',
                                timerInterval: 0
                            },
                            {
                                qid: "q1",
                                modules: ["usability"],
                                endpoint: "/DiscoverUIPost.jsp",
                                maxEvents: 10,
                                serializer: "json",
                                timerInterval: 10000
                            },
                            {
                                qid: "q2",
                                modules: ["usability"],
                                endpoint: "/DiscoverUIPost.jsp",
                                maxEvents: 10,
                                serializer: "json",
                                timerInterval: 1000
                            }
                        ]
                    };
                } else {
                    fail("queueService requested config for: " + serviceName + "!");
                }
            }
        },
        ajaxService = {
            sendRequest: function() {}
        },
        browserService = {
            subscribe: stubFn(),
            subscribe: function() {},
            unsubscribe: function() {}
        },
        serializerService = {
            serialize: function (data, type) {
                return data;
            }
        },
        messageService = {
            createMessage: function (message) {
                return message;
            },
            wrapMessages: function (messages) {
                return messages;
            }
        },
        encoderService = {
            encode: function (data, type) {
                return data;
            }
        },
        fakeEvent = { type: "fakeEvent", fooVal: "bar" },
        fakeUnload = { type: "unload", fooVal: "bar" },
        state = "loaded",
        getStubContext = function () {
            return {
                getService: function (serviceName) {
                    if (serviceName === "config") {
                        return configService;
                    } else if (serviceName === "ajax") {
                        return ajaxService;
                    } else if (serviceName === "browser") {
                        return browserService;
                    } else if (serviceName === "serializer") {
                        return serializerService;
                    } else if (serviceName === "message") {
                        return messageService;
                    } else if (serviceName === "encoder") {
                        return encoderService;
                    }else {
                        fail("Illegal service (" + serviceName + ") requested!");
                    }
                },
                getCoreConfig: function () {
                    return {};
                },
                getState: function () {
                    return state;
                },
                redirectQueue: function (queue) {
                    return queue;
                },
                provideRequestHeaders: function () {
                    return null;
                },
                isInitialized: function () {
                    return true;
                },
                utils: DCX.utils,
                getPageId: function () {
                    return "dummy page id";
                }
            };
        };



    TestCase("queueService", {


        setUp: function () {
            this.service = DCX.getService("queue", getStubContext());
        },


        tearDown: function () {
            ajaxService.sendRequest = function () {};
            // this.service.destroy();
        },


        "test second init": function() {
            this.service.init();
        },


        "test verify service interface": function () {
            expectAsserts(4);
            assertFunction(this.service.flush);
            assertFunction(this.service.flushAll);
            assertFunction(this.service.post);
            assertFunction(this.service.setAutoFlush);
        },


        "test queueService should subscribe configupdated event on configService": function () {
            expectAsserts(3);
            assert(configService.subscribe.called);
            assertEquals("configupdated", configService.subscribe.args[0]);
            assertFunction(configService.subscribe.args[1]);
        },

        "test post event to default queue": function () {
            if (typeof this.service._getQueue === "function") {
                this.service.post("performance", fakeEvent);

                expectAsserts(1);
                assertSame(fakeEvent, this.service._getQueue("DEFAULT")[0]);
            }
        },

        "test post event to the modules default queue": function () {
            if (typeof this.service._getQueue === "function") {
                this.service.post("usability", fakeEvent);

                expectAsserts(1);
                assertSame(fakeEvent, this.service._getQueue("q1")[0]);
            }
        },

        "test post event to a different queue": function () {
            if (typeof this.service._getQueue === "function") {
                this.service.post("performance", fakeEvent, "q1");

                expectAsserts(1);
                assertSame(fakeEvent, this.service._getQueue("q1")[0]);
            }
        },

        "test isMsgLimitReached" : function () {
            var i,
                service = this.service;

            if (typeof service.isMsgLimitReached === "function") {
                expectAsserts(3011);
                assertTrue("isMsgLimitReached()", service.isMsgLimitReached());
                assertTrue("isMsgLimitReached(null)", service.isMsgLimitReached(null));
                assertTrue("isMsgLimitReached({})", service.isMsgLimitReached({}));
                assertFalse("isMsgLimitReached({ type: 1 })", service.isMsgLimitReached({ type: 1 }));
                assertFalse("isMsgLimitReached({ type: 2 })", service.isMsgLimitReached({ type: 2 }));

                for (i = 0; i < 1000; i += 1) {
                    assertFalse(i + " - isMsgLimitReached({type: 99})", service.isMsgLimitReached({type: 99}));
                }

                for (i = 0; i < 1000; i += 1) {
                    if (i >= 300) {
                        assertTrue(i + " - isMsgLimitReached({type: 5})", service.isMsgLimitReached({type: 5}));
                    } else {
                        assertFalse(i + " - isMsgLimitReached({type: 5})", service.isMsgLimitReached({type: 5}));
                    }
                }
                assertSame("type: 16", 16, this.service._getQueue("DEFAULT")[0].type);
                assertSame("dataLimit.messageType: 5", 5, this.service._getQueue("DEFAULT")[0].dataLimit.messageType);
                assertSame("dataLimit.maxCount: 300", 300, this.service._getQueue("DEFAULT")[0].dataLimit.maxCount);

                for (i = 0; i < 1000; i += 1) {
                    if (i >= 400) {
                        assertTrue(i + " - isMsgLimitReached({type: 6})", service.isMsgLimitReached({type: 6}));
                    } else {
                        assertFalse(i + " - isMsgLimitReached({type: 6})", service.isMsgLimitReached({type: 6}));
                    }
                }
                assertSame("type: 16", 16, this.service._getQueue("DEFAULT")[1].type);
                assertSame("dataLimit.messageType: 6", 6, this.service._getQueue("DEFAULT")[1].dataLimit.messageType);
                assertSame("dataLimit.maxCount: 400", 400, this.service._getQueue("DEFAULT")[1].dataLimit.maxCount);
            }
        },

        "test flush queue should call ajaxService.sendRequest": function () {
            ajaxService.sendRequest = stubFn();

            this.service.post("performance", fakeEvent);
            this.service.flush("DEFAULT");

            expectAsserts(4);
            assert(ajaxService.sendRequest.called);
            assertEquals("/", ajaxService.sendRequest.args[0].url);
            assertFunction(ajaxService.sendRequest.args[0].oncomplete);
            assertEquals([fakeEvent], ajaxService.sendRequest.args[0].data);
        },


        "test flush nonexistant queue should throw Error": function () {
            var service = this.service;

            expectAsserts(1);
            assertException(function () {
                service.flush("qDoesNotExists");
            }, "Error");
        },


        "test post events until queue reaches threshold should flush queue": function () {
            ajaxService.sendRequest = stubFn();

            this.service.post("performance", fakeEvent);
            this.service.post("performance", fakeEvent);
            this.service.post("performance", fakeEvent);
            this.service.post("performance", fakeEvent);
            this.service.post("performance", fakeEvent);
            this.service.post("performance", fakeEvent);

            expectAsserts(1);
            assertEquals([fakeEvent, fakeEvent, fakeEvent, fakeEvent, fakeEvent], ajaxService.sendRequest.args[0].data);
        },

        "test should not flush queue if core is in unloading state": function () {
            if (typeof this.service._getQueue === "function") {
                ajaxService.sendRequest = stubFn();
                state = "unloading";

                this.service.post("performance", fakeEvent);
                this.service.post("performance", fakeUnload);

                expectAsserts(3);
                assertFalse(ajaxService.sendRequest.called);
                assertEquals(fakeEvent, this.service._getQueue("DEFAULT")[0]);
                assertEquals(fakeUnload, this.service._getQueue("DEFAULT")[1]);
            }
        },

        "test should flush sync on destroy if core is in unloading state": function () {
            ajaxService.sendRequest = stubFn();
            state = "unloading";

            this.service.post("performance", fakeEvent);
            this.service.post("performance", fakeUnload);
            this.service.destroy();

            expectAsserts(2);
            assertEquals([fakeEvent, fakeUnload], ajaxService.sendRequest.args[0].data);
            assertFalse(ajaxService.sendRequest.args[0].async);
        },

        "test queue should be empty after flushing": function () {
            if (typeof this.service._getQueue === "function") {
                this.service.post("performance", fakeEvent);
                this.service.flush("DEFAULT");

                expectAsserts(1);
                assertEquals(0, this.service._getQueue("DEFAULT").length);
            }
        },

        "test queueManager removeQueue": function () {
            var queueManager;

            if (typeof this.service.getQueueManager === "function") {
                queueManager = this.service.getQueueManager();
                queueManager.remove("q1");
                
                expectAsserts(1);
                assertNull(queueManager.get("q1"));
            }
        },

        "test flushAll should flush all queues": function () {
            ajaxService.sendRequest = function (message) {
                ajaxService.sendRequest.called += 1;
                ajaxService.sendRequest.calledWithArgs.push(message);
            };
            ajaxService.sendRequest.called = 0;
            ajaxService.sendRequest.calledWithArgs = [];

            this.service.post("performance", fakeEvent);
            this.service.post("usability", fakeEvent);

            this.service.flushAll();

            expectAsserts(3);
            assertEquals(2, ajaxService.sendRequest.called);
            assertEquals("/", ajaxService.sendRequest.calledWithArgs[0].url);
            assertEquals("/DiscoverUIPost.jsp", ajaxService.sendRequest.calledWithArgs[1].url);
        },

        "test setAutoFlush with false should disable flushing": function () {
            if (typeof this.service.getAutoFlushing === "function") {
                this.service.setAutoFlush(false);

                expectAsserts(1);
                assertEquals(false, this.service.getAutoFlushing());
            }
        },

        "test setAutoFlush with true should enable flushing": function () {
            if (typeof this.service.getAutoFlushing === "function") {
                this.service.setAutoFlush(true);

                expectAsserts(1);
                assertEquals(true, this.service.getAutoFlushing());
            }
        },

        "test getMessageTypes": function () {
            if (typeof this.service.getMessageTypes === "function") {
                expectAsserts(6);
                assertEquals("getMessageTypes()", "", this.service.getMessageTypes());
                assertEquals("getMessageTypes(null)", "", this.service.getMessageTypes(null));
                assertEquals("getMessageTypes([])", "", this.service.getMessageTypes([]));
                assertEquals("getMessageTypes([{}, {}])", "", this.service.getMessageTypes([{}, {}]));
                assertEquals("getMessageTypes([{type: 1}, {type: 12}, {type: 4}])", "1,4,12", this.service.getMessageTypes([{type: 1}, {type: 12}, {type: 4}]));
                assertEquals("getMessageTypes([{}, {type: 2}, {}, {type: 7}, {type: 1}])", "1,2,7", this.service.getMessageTypes([{}, {type: 2}, {}, {type: 7}, {type: 1}]));
            }
        },

        "test getExternalRequestHeaders": function () {
            if (typeof this.service.getExternalRequestHeaders !== "function") {
                return;
            }
            var context = getStubContext(),
                externalHeaders = [
                    {
                        name: "one",
                        value: "1",
                        recurring: true
                    },
                    {
                        name: "two",
                        value: "2"
                    }
                ],
                queueManager = this.service.getQueueManager(),
                queue = null;

            context.provideRequestHeaders = function () {
                return externalHeaders;
            };

            expectAsserts(8);
            assertEquals("Test 1", 0, this.service.getExternalRequestHeaders());
            queue = queueManager.get("DEFAULT");
            assertEquals("Test 1 - queue headers.once.length", 0, queue.headers ? queue.headers.once.length : 0);
            assertEquals("Test 1 - queue headers.always.length", 0, queue.headers ? queue.headers.always.length : 0);

            // New service with modified context to provide external request headers
            this.service = DCX.getService("queue", context);
            assertEquals("Test 2", 2, this.service.getExternalRequestHeaders());
            queueManager = this.service.getQueueManager();
            queue = queueManager.get("DEFAULT");
            assertEquals("Test 2 - queue headers.once.length", 1, queue.headers.once.length);
            assertEquals("Test 2 - queue headers.once[0]", { name: "two", value: "2" }, queue.headers.once[0]);
            assertEquals("Test 2 - queue headers always", 1, queue.headers.always.length);
            assertEquals("Test 2 - queue headers.always[0]", { name: "one", value: "1" }, queue.headers.always[0]);
        },

        "test addHeaderToQueue": function () {
            if (typeof this.service.addHeaderToQueue !== "function") {
                return;
            }
            var queueManager = this.service.getQueueManager(),
                queue = null;

            expectAsserts(7);
            queue = queueManager.get("DEFAULT");
            assertEquals("DEFAULT queue headers.once.length", 0, queue.headers ? queue.headers.once.length : 0);
            assertEquals("DEFAULT queue headers.always.length", 0, queue.headers ? queue.headers.always.length : 0);
            
            this.service.addHeaderToQueue("DEFAULT");
            this.service.addHeaderToQueue("DEFAULT", "one");
            this.service.addHeaderToQueue("DEFAULT", "one", "1");
            this.service.addHeaderToQueue("DEFAULT", "two", "2", false);
            this.service.addHeaderToQueue("DEFAULT", "three", "3", true);

            assertEquals("queue headers.once.length", 2, queue.headers.once.length);
            assertEquals("queue headers.once[0]", { name: "one", value: "1" }, queue.headers.once[0]);
            assertEquals("queue headers.once[1]", { name: "two", value: "2" }, queue.headers.once[1]);
            assertEquals("queue headers.always.length", 1, queue.headers.always.length);
            assertEquals("queue headers.always[0]", { name: "three", value: "3" }, queue.headers.always[0]);
        },

        "test copyHeaders": function () {
            if (typeof this.service.copyHeaders !== "function") {
                return;
            }
            var hdrs = {
                    foo: "bar",
                    test: "123",
                    one: "0"
                },
                hdrs1 = {
                    foo: "bar",    
                    test: "123",
                    one: "1"
                },
                hdrs2 = {
                    foo: "bar",
                    test: "123",
                    one: "1",
                    two: "2"
                };

            expectAsserts(6);
            assertEquals('Test 1: copyHeaders("DEFAULT")', {}, this.service.copyHeaders("DEFAULT"));
            assertEquals('Test 1: copyHeaders("DEFAULT", hdrs)', hdrs, this.service.copyHeaders("DEFAULT", hdrs));

            this.service.addHeaderToQueue("DEFAULT", "one", "1");
            assertEquals('Test 2: copyHeaders("DEFAULT")', { one: "1"}, this.service.copyHeaders("DEFAULT"));
            assertEquals('Test 2: copyHeaders("DEFAULT", hdrs)', hdrs1, this.service.copyHeaders("DEFAULT", hdrs));

            this.service.addHeaderToQueue("DEFAULT", "two", "2", true);
            assertEquals('Test 3: copyHeaders("DEFAULT")', { one: "1", two: "2"}, this.service.copyHeaders("DEFAULT"));
            assertEquals('Test 3: copyHeaders("DEFAULT", hdrs)', hdrs2, this.service.copyHeaders("DEFAULT", hdrs));
        },

        "test clearHeaders": function () {
            if (typeof this.service.clearHeaders !== "function") {
                return;
            }
            var queueManager = this.service.getQueueManager(),
                queue = queueManager.get("DEFAULT");

            expectAsserts(6);
            this.service.clearHeaders("DEFAULT");
            assertEquals("Test 1: queue.headers.once", 0, queue.headers ? queue.headers.once.length : 0);
            assertEquals("Test 1: queue.headers.always", 0, queue.headers ? queue.headers.always.length : 0);

            this.service.addHeaderToQueue("DEFAULT", "one", "1");
            this.service.addHeaderToQueue("DEFAULT", "two", "2", true);
            assertEquals("Test 2: queue.headers.once", 1, queue.headers.once.length);
            assertEquals("Test 2: queue.headers.always", 1, queue.headers.always.length);

            this.service.clearHeaders("DEFAULT");
            assertEquals("Test 3: queue.headers.once", 0, queue.headers.once.length);
            assertEquals("Test 3: queue.headers.always", 1, queue.headers.always.length);
        }
    });


    AsyncTestCase("queueService AsyncTests", {


        setUp: function () {
            this.service = DCX.getService("queue", getStubContext());
        },


        tearDown: function () {
            ajaxService.sendRequest = function () {};
            this.service.destroy();
        },


        "test setTimer": function(queue) {
            expectAsserts(1);

            queue.call(function (callbacks) { 
                setTimeout(callbacks.add(function () { // wait for timer from queue q2
                    assert(true);
                }), 1500);
            });
        },

        "test android": function(queue) {
            var queueManager,
                oldTlBridge;

            if (typeof this.service.getQueueManager === "function") {
                expectAsserts(1);

                queue.call(function (callbacks) {
                    if(typeof window.dcBridge !== "undefined") {
                        oldTlBridge = window.dcBridge;
                    }
                    window.dcBridge = {
                        addMessage: callbacks.add(function () {
                            assert(true);
                        })
                    };
                    
                    queueManager = this.service.getQueueManager();
                    queueManager.push("test", {});

                    window.dcBridge = undefined;

                    if(typeof oldTlBridge !== "undefined") {
                        window.dcBridge = oldTlBridge;
                        delete oldTlBridge;
                    }
                });
            }
        },


        "test iOS": function(queue) {
            var queueManager,
                oldiOSJSONShuttle;

            if (typeof this.service.getQueueManager === "function") {
                expectAsserts(1);

                queue.call(function (callbacks) {
                    if(typeof window.iOSJSONShuttle !== "undefined") {
                        oldiOSJSONShuttle = window.iOSJSONShuttle;
                    }
                    window.iOSJSONShuttle = callbacks.add(function () {
                        assert(true);
                    });
                    
                    queueManager = this.service.getQueueManager();
                    queueManager.push("test", {});

                    window.iOSJSONShuttle = undefined;

                    if(typeof oldiOSJSONShuttle !== "undefined") {
                        window.iOSJSONShuttle = oldiOSJSONShuttle;
                        delete oldiOSJSONShuttle;
                    }
                });
            }
        }
    });

}());