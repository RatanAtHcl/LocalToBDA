/*
 *  **************************************************************************
 *  Licensed Materials - Property of HCL
 *  (c) Copyright HCL Technologies Ltd.  2020. All Rights Reserved.
 *  US Government Users Restricted Rights - Use, duplication or disclosure
 *  restricted by GSA ADP Schedule Contract with HCL Technologies.
 *  **************************************************************************
 */


(function(){

    if (typeof sinon !== "object" || typeof sinon.spy !== "function") {
        jstestdriver.console.warn("SinonJS is not present. Test will be ignored.");
        return;
    }

    // Setup filters to allow jstestdriver communication
    sinon.FakeXMLHttpRequest.useFilters = true;
    var fakeXHRFilter = function (method, url) {
        if (url && url.match(/foo|test\.php|DiscoverUIPost/)) {
            // Fake this request
            if (console) {
                console.log("sinon faking: " + url);
            }
            return false;
        }
        // Do not fake request
        console.log("sinon NOT faking: " + url);
        return true;
    };
    sinon.FakeXMLHttpRequest.addFilter(fakeXHRFilter);

    /* Setup debug log function for sinon debugging
    sinon.log = function (message) {
        jstestdriver.console.log(message);
    };*/

    function createTestConfig() {
        return {
            core: {
                moduleBase: 'intermediate/modules/',
                modules: {
                    replay: {
                        events: [
                            { name: "change", recurseFrames: true },
                            { name: "click", recurseFrames: true },
                            { name: "mouseover", recurseFrames: true },
                            { name: "mouseout", recurseFrames: true },
                            { name: "hashchange", target: window },
                            { name: "focus", target: "input, select, textarea, [contenteditable], button", recurseFrames: true },
                            { name: "blur", target: "input, select, textarea, [contenteditable], button", recurseFrames: true },
                            { name: "load", target: window},
                            { name: "unload", target: window},
                            { name: "resize", target: window},
                            { name: "scroll", target: window},
                            { name: "orientationchange", target: window},
                            { name: "touchend" }
                        ]
                    }
                }
            },
            services: {
                browser: {
                    useCapture: false
                },
                queue: {
                    queues: [
                        {
                            qid: "DEFAULT",
                            endpoint: "/DiscoverUIPost.php",
                            maxEvents: 5,
                            serializer: "json"
                        }
                    ]
                }
            }
        };
    }


    AsyncTestCase("DCX delegateTarget", {

        setUp: function() {
            /*:DOC += <div><input id="btn" type="button" value="test"/></div> */
            /*:DOC += <div><span id="spanId"><p>&nbsp;</p></span></div> */
            /*:DOC += <div><button type="button" id="button">BUTTON</button></div> */

            this.btn = document.getElementById("btn");
            this.span = document.getElementById("spanId");
            this.button = document.getElementById("button");

            this.config = function(modules) {
                return {
                    core: {
                        moduleBase: 'intermediate/modules/',
                        modules: modules
                    },
                    services: {
                        browser: {
                            useCapture: false
                        },
                        queue: {
                            queues: [
                                {
                                    qid: "DEFAULT",
                                    endpoint: "/DiscoverUIPost.php",
                                    maxEvents: 5,
                                    serializer: "json"
                                }
                            ]
                        }
                    }
                };
            };
        },

        tearDown: function() {
            DCX.destroy();
        },

        "test two modules registered": function(queue) {
            var that = this,
                replay,
                replaySpy,
                testSpy = sinon.spy(function (event) {}),
                testSpy2 = sinon.spy(function (event) {});

            if(DCX.getFlavor() !== "jQuery") {
                expectAsserts(0);
                return;
            }

            expectAsserts(2);

            queue.call(function(callbacks) {
                DCX.addModule("test", function (context) {
                    return {
                        onevent: testSpy
                    };
                });
                 DCX.addModule("test2", function (context) {
                    return {
                        onevent: testSpy2
                    };
                });

                DCX.init(that.config({
                    test: {
                        events: [
                            { name: "click", target: "span", delegateTarget: "div" }
                        ]  
                    },
                    test2: {
                        events: [
                            { name: "click", target: "span", delegateTarget: "div" }
                        ]
                    }
                }), callbacks.noop());
            });

            queue.call(function(callbacks) {
                testHelper.createMouseEvent("click", that.span);
            });

            queue.call(function(callbacks) {
                assertEquals("one event should be called", 1, testSpy.callCount);
                assertEquals("one event should be called", 1, testSpy2.callCount);
            });
        },


        "test delegateTarget": function(queue) {
            var that = this,
                delegateTargetData,
                normalData;

            if(DCX.getFlavor() !== "jQuery") {
                expectAsserts(0);
                return;
            }

            expectAsserts(3);

            queue.call(function(callbacks) {
                DCX.init(that.config({
                    replay: {
                        events: [
                            { name: "click", target: "span" },
                            { name: "click", target: "button" },
                            { name: "focus", target: "select" },
                            { name: "focus", target: "input" },
                            { name: "blur", target: "input" }
                        ]
                    }
                }), callbacks.noop());
            });

            queue.call(function(callbacks) {
                $(that.span).click();
                $(that.btn).focus();
                $(that.btn).blur();
                $(that.button).click();
                $(that.btn).focus();

                normalData = DCX.utils.clone(DCX.getService('queue')._getQueue("DEFAULT"));
            });

            queue.call(function(callbacks) {
                DCX.destroy();
            });

            queue.call(function(callbacks) {
                DCX.init(that.config({
                    replay: {
                        events: [
                            { name: "click", target: "span", delegateTarget: "div" },
                            { name: "click", target: "button", delegateTarget: "div" },
                            { name: "focus", target: "select", delegateTarget: "div" },
                            { name: "focus", target: "input", delegateTarget: "div" },
                            { name: "blur", target: "input", delegateTarget: "div" }
                        ]
                    }
                }), callbacks.noop());
            });

            queue.call(function(callbacks) {
                $(that.span).click();
                $(that.btn).focus();
                $(that.btn).blur();
                $(that.button).click();
                $(that.btn).focus();
                
                delegateTargetData = DCX.utils.clone(DCX.getService('queue')._getQueue("DEFAULT"));
            });

            queue.call(function(callbacks) {
                DCX.destroy();
            });

            queue.call(function(callbacks) {
                assertEquals("normalData length should be 3", 3, normalData.length);
                assertEquals("normalData and delegateTargetData have different sizes", normalData.length, delegateTargetData.length);
            });

            queue.call(function(callbacks) {
                var i;

                // set the same values for variables which are time values
                for(i = 0; i<normalData.length; i++) {
                    normalData[i].target.dwell = delegateTargetData[i].target.dwell = 10;
                    normalData[i].offset = delegateTargetData[i].offset = 1;
                    normalData[i].screenviewOffset = delegateTargetData[i].screenviewOffset = 1;
                }

                assertEquals("Diffrent results", normalData, delegateTargetData);
            });
        }
    });


    AsyncTestCase("DCX integrationtests ajax request", {
        setUp: function () {
            this.server = sinon.fakeServer.create();
            this.server.respondWith("/foo", [200, {}, "OK"]);
        },
        tearDown: function () {
            this.server.restore();
            DCX.destroy();
        },
        "test ajaxService.sendRequest": function(queue) {
            expectAsserts(2);

            queue.call(function(callbacks) {
                DCX.init(createTestConfig(), callbacks.noop());
            });
            queue.call(function(callbacks) {
                var ajaxService = DCX.getService("ajax");
                ajaxService.sendRequest({
                    oncomplete: callbacks.add(function(response) {
                        assertEquals("OK", response.responseText);
                        assertEquals(200, response.statusCode);
                    }),
                    type: "GET",
                    url: "/foo",
                    async: true,
                    data: ""
                });
                this.server.respond();
            });
        }
    });

    var cleanupXHRRequests = function (requests) {
        var i,
            xhr;

        // Sanity check
        if (!requests) {
            return;
        }

        for (i = requests.length; i >= 0; i -= 1) {
            xhr = requests[i];
            if (!xhr || fakeXHRFilter(xhr.method, xhr.url)) {
                // Delete xhr
                requests.splice(i, 1);
            }
        }

        return requests;
    };

    AsyncTestCase("DCX integrationtests", {

        setUp: function () {
            /*:DOC += <input id="btn" type="button" value="test"/> */
            this.fakeXHR = sinon.useFakeXMLHttpRequest();
            var requests = this.requests = [];
            this.fakeXHR.onCreate = function (xhr) {
                requests.push(xhr);
            };

            this.html = {
                btn: document.getElementById("btn")
            };
        },


        tearDown: function () {
            DCX.destroy();
            this.fakeXHR.restore();
            for (var key in this.html) {
                if (this.html.hasOwnProperty(key)) {
                    this.html[key].parentNode.removeChild(this.html[key]);
                    delete this.html[key];
                }
            }
        },

        /**
         * Tests request default values of ajaxService.sendRequest.
         * SinonJS' FakeXMLHttpRequest is used to avoid real connectivity.
         */
        "test ajaxService.sendRequest (default values)": function(queue) {
            var ajaxService, request;
            expectAsserts(6);

            queue.call(function(callbacks) {
                DCX.init(createTestConfig(), callbacks.noop());
            });

            queue.call(function(callbacks) {
                cleanupXHRRequests(this.requests);
                assertEquals("request queue should be empty", 0, this.requests.length);
                ajaxService = DCX.getService("ajax");
                ajaxService.sendRequest({
                    url: "/test.php"
                });

                request = this.requests[0] || {};
                assertEquals("only one request should be sent", 1, this.requests.length);
                assertEquals("default xhr method must be POST", "POST", request.method);
                assertEquals("sendRequest method must not modify the url", "/test.php", request.url);
                assertEquals("by default AJAX call must be async", true, request.async);
                assertEquals("by default the request must have 'X-Requested-With' position in header set to 'XMLHttpRequest'", "XMLHttpRequest", request.requestHeaders["X-Requested-With"]);
            });
        },


        /**
         * Tests request customized values of ajaxService.sendRequest.
         * SinonJS' FakeXMLHttpRequest is used to avoid real connectivity.
         */
        "test ajaxService.sendRequest (customized values)": function(queue) {
            var ajaxService, request;
            expectAsserts(5);

            queue.call(function(callbacks){
                DCX.init(createTestConfig(), callbacks.noop());
            });

            queue.call(function(callbacks){
                cleanupXHRRequests(this.requests);
                ajaxService = DCX.getService("ajax");
                ajaxService.sendRequest({
                    url: "/test.php",
                    type: "GET",
                    async: false,
                    contentType: "application/json",
                    headers: {
                        "X-Discover-Page-Dwell": 1000
                    }

                });

                request = this.requests[0];
                assertEquals("only one request should be sent", 1, this.requests.length);
                assertEquals("message.type can be used to specify request method", "GET", request.method);
                assertEquals("message.async can be used to enforce synchronous call", false, request.async);
                assertEquals("message.contentType can be used to set header value", "application/json", request.requestHeaders["Content-Type"]);
                assertEquals("message.contentType can be used to provide custom header values", 1000, request.requestHeaders["X-Discover-Page-Dwell"]);
            });

            // Add a few seconds delay to account for client state and other delayed messages to be posted.
            queue.call(function(callbacks) {
                setTimeout(callbacks.noop(), 1200);
            });
        },


        "test browserService.subscribe/unsubscribe": function(queue) {
            var browserService,
                firstHandler,
                secondHandler,
                firstSpy,
                secondSpy;

            expectAsserts(6);

            queue.call(function(callbacks) {
                DCX.init(createTestConfig(), callbacks.noop());
            });

            queue.call(function(){
                firstHandler = function() {};
                secondHandler = function() {};

                firstSpy = sinon.spy(firstHandler);
                secondSpy = sinon.spy(secondHandler);

                browserService = DCX.getService("browser");
                browserService.subscribe("click", this.html.btn, firstSpy);
                browserService.subscribe("click", this.html.btn, secondSpy);

                assertEquals("none click should be called", 0, firstSpy.callCount);
                assertEquals("none click should be called", 0, secondSpy.callCount);

                testHelper.createMouseEvent("click", this.html.btn);

                assertEquals("one click should be called", 1, firstSpy.callCount);
                assertEquals("one click should be called", 1, secondSpy.callCount);

                browserService.unsubscribe("click", this.html.btn, firstSpy);
                testHelper.createMouseEvent("click", this.html.btn);

                assertEquals("one click should be called after event unsubscribed", 1, firstSpy.callCount);
                assertEquals("two clicks should be called", 2, secondSpy.callCount);
            });

            // Add a few seconds delay to account for client state and other delayed messages to be posted.
            queue.call(function(callbacks) {
                setTimeout(callbacks.noop(), 1200);
            });
        },


        "test DCX.destroy vs DCX.init": function(queue) {
            var browserService,
                replay,
                eventSpy;

            expectAsserts(2);

            queue.call(function(callbacks) {
                DCX.init(createTestConfig(), callbacks.noop());
            });

            // Introduce a slight delay after initialization to let startup processing finish
            queue.call(function(callbacks) {
                setTimeout(callbacks.noop(), 1200);
            });

            queue.call(function(callbacks) {
                browserService = DCX.getService("browser");
                replay = DCX.getModule("replay");

                eventSpy = sinon.spy(replay, "onevent");

                testHelper.createMouseEvent("click", this.html.btn);
                assertEquals("one click should be called", 1, eventSpy.callCount);

                DCX.destroy(false);

                testHelper.createMouseEvent("click", this.html.btn);
                assertEquals("still one click should be called", 1, eventSpy.callCount);
            });

            // Add a few seconds delay to account for client state and other delayed messages to be posted.
            queue.call(function(callbacks) {
                setTimeout(callbacks.noop(), 1200);
            });
        },


        "test DCX.destroy vs subscribe": function(queue) {
            var browserService,
                firstHandler,
                secondHandler,
                firstSpy,
                secondSpy;

            expectAsserts(2);

            queue.call(function(callbacks) {
                DCX.init(createTestConfig(), callbacks.noop());
            });

            queue.call(function(){
                firstHandler = function() {};
                secondHandler = function() {};

                firstSpy = sinon.spy(firstHandler);
                secondSpy = sinon.spy(secondHandler);

                browserService = DCX.getService("browser");
                browserService.subscribe("click", this.html.btn, firstSpy);
                browserService.subscribe("click", this.html.btn, secondSpy);

                testHelper.createMouseEvent("click", this.html.btn);

                assertTrue(firstSpy.called);
                assertTrue(secondSpy.called);
            });

            // Add a few seconds delay to account for client state and other delayed messages to be posted.
            queue.call(function(callbacks) {
                setTimeout(callbacks.noop(), 1200);
            });
        },


        "test core.rebind": function(queue) {
            /*:DOC secondButton = <input id="secondbutton" type="button" value="secondbutton"/> */

            var browserService,
                replay,
                eventSpy;

            expectAsserts(3);

            queue.call(function(callbacks) {
                DCX.init({
                    core: {
                        modules: {
                            replay: {
                                events: [
                                    { name: "click", target: "input" }
                                ]
                            }
                        }
                    },
                    services: {
                        browser: {
                            useCapture: false
                        },
                        queue: {
                            queues: [
                                {
                                    qid: "DEFAULT",
                                    endpoint: "/DiscoverUIPost.php",
                                    maxEvents: 5,
                                    serializer: "json"
                                }
                            ]
                        }
                    }
                }, callbacks.noop());
            });

            queue.call(function(callbacks) {
                browserService = DCX.getService("browser");
                replay = DCX.getModule("replay");
                eventSpy = sinon.spy(replay, "onevent");

                testHelper.createMouseEvent("click", this.html.btn);
                assertEquals("one click should be called", 1, eventSpy.callCount);

                document.body.appendChild(this.secondButton);

                testHelper.createMouseEvent("click", this.secondButton);
                assertEquals("still only one click should be called", 1, eventSpy.callCount);
                DCX.rebind();
                
                testHelper.createMouseEvent("click", this.secondButton);
                assertEquals("two clicks should be called", 2, eventSpy.callCount);
            });

            // Add a few seconds delay to account for client state and other delayed messages to be posted.
            queue.call(function(callbacks) {
                setTimeout(callbacks.noop(), 1200);
            });
        },

        "test core.fail for successfull init": function(queue) {
            var hasMethod = typeof DCX._getServices === "function";
            expectAsserts(hasMethod ? 5 : 3);

            queue.call(function(callbacks) {
                DCX.init({
                    core: {
                        modules: {
                            replay: {
                                events: [
                                    { name: "click", target: "input" }
                                ]
                            }
                        }
                    },
                    services: {
                        serializer: {
                            json: {
                                defaultToBuiltin: true,
                                parsers: ["JSON.parse"],
                                stringifiers: ["JSON.stringify"]
                            }
                        },
                        queue: {
                            queues: [
                                {
                                    qid: "DEFAULT",
                                    endpoint: "/DiscoverUIPost.php",
                                    maxEvents: 5,
                                    serializer: "json"
                                }
                            ]
                        }
                    }
                }, callbacks.noop());
            });

            queue.call(function(callbacks) {
                if (hasMethod) {
                    assertNotNull(DCX._getServices()["serializer"].instance);
                }
                assertTrue(DCX.isInitialized());
                assertException(DCX.fail, "UICError");
                if (hasMethod) {
                    assertNull(DCX._getServices()["serializer"].instance);
                }
                assertFalse(DCX.isInitialized());
            });

            // Add a few seconds delay to account for client state and other delayed messages to be posted.
            queue.call(function(callbacks) {
                setTimeout(callbacks.noop(), 1200);
            });
        }

    });

})();
