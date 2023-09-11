/*
 *  **************************************************************************
 *  Licensed Materials - Property of HCL
 *  (c) Copyright HCL Technologies Ltd.  2020. All Rights Reserved.
 *  US Government Users Restricted Rights - Use, duplication or disclosure
 *  restricted by GSA ADP Schedule Contract with HCL Technologies.
 *  **************************************************************************
 */


(function () {
    var oldJquery = null,
        oldQuerySelector = null,
        oldSizzle = null;

    function getStubContext(conf) {
        return {
            getService: function (service) {
                if (service === "config") {
                    return {
                        getServiceConfig: function (service) {
                            if (service === "browser") {
                                return conf || {};
                            }
                        }
                    };
                } else if (service === "ajax") {
                    return {
                        sendRequest: function() {}
                    };
                } else if (service === "browserBase") {
                    return {
                        queryDom: {
                            xpath: function () {}
                        },
                        WebEvent: function() { }
                    };
                }
            },
            utils: DCX.utils,
            fail: function(msg, code) {
                var err = new Error(msg);
                err.code = code;
                throw err;
            }
        };
    }

    function getFakeJQuery(conf) {
        var fn = function(){},
            fakeJQuery = {};

        DCX.utils.forEach(["on", "off"], function(m){ fakeJQuery[m] = fn; });
        for(var key in (conf || {})) {
            fakeJQuery[key] = conf[key];
        }

        fakeJQuery = stubFn(fakeJQuery); 
        DCX.utils.forEach(["ajax", "find", "getScript"], function(m){ fakeJQuery[m] = fn; });

        fakeJQuery.fn = { jquery: "1.7.1" };
        return fakeJQuery;   
    }


    TestCase("browserServicejQuery CSS", {
        setUp: function () {
            this.oldjQuery  = window.jQuery;
            this.jQueryGet  = stubFn(["el1", "el2", "el3"]);
            this.jQueryFind = stubFn({ get: this.jQueryGet });
            window.jQuery   = getFakeJQuery({ find: this.jQueryFind });
            this.service    = DCX.getService("browser", getStubContext());
        },


        tearDown: function () {
            window.jQuery = this.oldjQuery;
            this.service.destroy();
        },


        "test list2Array nodeList.length === undefined": function() {
            this.service.queryAll(1, undefined, "list2Array");
        },


        "test list2Array Sanity check": function() {
            this.service.queryAll(0, undefined, "list2Array");
        },


        "test browserService.query should call jQuery": function () {
            window.jQuery.find = function () {};
            var element = this.service.query(".foo > .bar");

            assert(window.jQuery.called);
            assert(this.jQueryFind.called);
            assert(this.jQueryGet.called);

            assertEquals(document, window.jQuery.args[0]);
            assertEquals(".foo > .bar", this.jQueryFind.args[0]);
            assertEquals("el1", element);
        },


        "test browserService.queryAll should call jQuery": function () {
            window.jQuery.find = function () {};
            var elements = this.service.queryAll(".foo > .bar");

            assertEquals(["el1", "el2", "el3"], elements);
        }


    });


    TestCase("browserServicejQuery", {
        setUp: function () {
            this.oldjQuery = window.jQuery;
            this.originalFunctions = {}; 
            DCX.utils.forEach(["getScript", "fn", "ajax", "always"], function(fn){
                this.originalFunctions[fn] = window.jQuery[fn];
            }, this);
            this.service   = DCX.getService("browser", getStubContext());
        },


        tearDown: function () {
            window.jQuery = this.oldjQuery;
            DCX.utils.forEach(["getScript", "fn", "ajax", "always"], function(fn){
                window.jQuery[fn] = this.originalFunctions[fn];
            }, this);  

            this.service.destroy();          
        },


        "test second init": function() {
            this.service.init();
        },        


        "test browserService.subscribe should call jQuery.on": function () {
            var jQueryOn  = stubFn();
            window.jQuery = getFakeJQuery({ on: jQueryOn });
            this.service = DCX.getService("browser", getStubContext());

            this.service.subscribe("eventName", document, function () {});

            if (typeof document.addEventListener !== 'function') {
                assert(window.jQuery.called);
                assertEquals(document, window.jQuery.args[0]);
                assert(jQueryOn.called);
                assertEquals("eventName", jQueryOn.args[0]);
                assertFunction(jQueryOn.args[1]);
            } 
        },


        "test browserService.unsubscribe should call jQuery.off": function () {
            var jQueryOff = stubFn();
            window.jQuery = getFakeJQuery({ off: jQueryOff });
            this.service = DCX.getService("browser", getStubContext());

            function handler() {}

            this.service.subscribe("eventName", document, handler);
            this.service.unsubscribe("eventName", document, handler);

            if (typeof document.addEventListener !== 'function') {
                assert(jQueryOff.called);
                assertEquals("eventName", jQueryOff.args[0]);
                assertFunction(jQueryOff.args[1]);
            }
        },

        "test browserService.getServiceName": function() {
            expectAsserts(2);
            assertEquals(typeof this.service.getServiceName, "function");
            assertEquals(this.service.getServiceName(), "jQuery");
        },

        "test private function handlerMappings": function() {
            if (typeof this.service.handlerMappings === "undefined") {
                jstestdriver.console.log("No access to private method handlerMappings. Test skipped");
                expectAsserts(0);
                return;
            }

            var fn1 = function(){},
                fn2 = function(){},
                res1, res2, arr;

            expectAsserts(14);

            assertObject(this.service.handlerMappings);
            assertFunction(this.service.handlerMappings.add);
            assertFunction(this.service.handlerMappings.find);
            assertFunction(this.service.handlerMappings.remove);

            assertNull(this.service.handlerMappings.find(fn1));
            res1 = this.service.handlerMappings.add(fn1);
            assertFunction(res1);
            assertSame(res1, this.service.handlerMappings.find(fn1));

            res2 = this.service.handlerMappings.add(fn2);
            assertNotSame(res1, res2);
            assertSame(res2, this.service.handlerMappings.add(fn2));
            assertSame(res2, this.service.handlerMappings.find(fn2));

            this.service.handlerMappings.remove(fn2);
            assertSame(res2, this.service.handlerMappings.find(fn2));
            this.service.handlerMappings.remove(fn2);
            assertNull(this.service.handlerMappings.find(fn2));

            assertFunction(this.service.handlerMappings.find(fn1));
            this.service.handlerMappings.remove(fn1);
            assertNull(this.service.handlerMappings.find(fn1));
        }

    });


    TestCase("browserServicejQuery Debug", {
        setUp: function () {
            this.oldjQuery = window.jQuery;
        },


        tearDown: function () {
            window.jQuery = this.oldjQuery;
        },


        "test jQueryFnExists should throw an error if jQuery.on dos not exists or is not a function": function () {
            expectAsserts(2);
            window.jQuery = getFakeJQuery({on: undefined});
            
            try {
                this.service = DCX.getService("browser", getStubContext());
                // The service's init method should call internally: jQueryFnExists(window.jQuery, "on");
            } catch (e) {
                //assertEquals({ message: "jQuery Object does not support on!", code: "JQUERYNOTSUPPORTED" }, e);
                assertEquals("jQuery Object does not support on", e.message);
                assertEquals("JQUERYNOTSUPPORTED", e.code);
            }
        },


        "test jQueryFnExists should throw an error if jQuery.off dos not exists or is not a function": function () {
            expectAsserts(2);
            window.jQuery = getFakeJQuery({off: undefined});

            try {
                this.service = DCX.getService("browser", getStubContext());
                // The service's init method should call internally: jQueryFnExists(window.jQuery, "off");
            } catch (e) {
                assertEquals("jQuery Object does not support off", e.message);
                assertEquals("JQUERYNOTSUPPORTED", e.code);
            }
        },


        "test jQueryFnExists should throw an error if jQuery.find dos not exists or is not a function": function () {
            expectAsserts(2);
            window.jQuery = getFakeJQuery();
            delete window.jQuery.find;
            
            try {
                this.service = DCX.getService("browser", getStubContext());
                // The service's init method should call internally: jQueryFnExists(window.jQuery, "find");
            } catch (e) {
                assertEquals("jQuery Object does not support find", e.message);
                assertEquals("JQUERYNOTSUPPORTED", e.code);
            }
        },


        "test jQueryFnExists should throw an error if jQuery.ajax dos not exists or is not a function": function () {
            expectAsserts(2);
            window.jQuery = getFakeJQuery();
            delete window.jQuery.ajax;
            try {
                this.service = DCX.getService("browser", getStubContext());
                // The service's init method should call internally: jQueryFnExists(window.jQuery, "ajax");
            } catch (e) {
                assertEquals("jQuery Object does not support ajax", e.message);
                assertEquals("JQUERYNOTSUPPORTED", e.code);
            }
        },


        "test jQueryFnExists should throw an error if jQuery.getScript dos not exists or is not a function": function () {
            expectAsserts(2);
            window.jQuery = getFakeJQuery();
            delete window.jQuery.getScript;
            try {
                this.service = DCX.getService("browser", getStubContext());
                // The service's init method should call internally: jQueryFnExists(window.jQuery, "getScript");
            } catch (e) {
                assertEquals("jQuery Object does not support getScript", e.message);
                assertEquals("JQUERYNOTSUPPORTED", e.code);
            }
        },

        "test verifyJQuery throws an error if the jQuery version is below 1.7": function () {
            expectAsserts(2);
            window.jQuery = getFakeJQuery();
            window.jQuery.fn = { jquery: "1.5" };

            try {
                this.service = DCX.getService("browser", getStubContext());
                // The service's init method should call internally:  this.service.verifyJQuery();
            } catch (e) {
                assertEquals("jQuery version (1.5) is not supported. Require jQuery 1.7+", e.message);
                assertEquals("JQUERYNOTSUPPORTED", e.code);
            }
        }

    });


    TestCase("browserServicejQuery with non-global jQuery", {

        "test existing local jQuery": function() {
            expectAsserts(1);

            window.localjQuery = getFakeJQuery();
            var service = DCX.getService("browser", getStubContext({ jQueryObject: "localjQuery" }));

            assertSame(localjQuery, service.getJQuery());
        },

        "test non-existing local jQuery": function() {
            expectAsserts(2);
            try {
                var service = DCX.getService("browser", getStubContext({ jQueryObject: "" }));
            } catch(e) {
                assertEquals("jQuery not found.", e.message);
                assertEquals("JQUERYNOTFOUND", e.code);
            }
        }

    });
    AsyncTestCase("browserServicejQuery events", {
        setUp: function () { },

        tearDown: function () { },

        "test subscribe/unsubscribe": function(queue) {
            var browserService,
                handler;

            expectAsserts(1);

            queue.call(function(callbacks){
                handler = callbacks.add(function() {
                    assert(true);
                });

                browserService = DCX.getService("browser", getStubContext({
                    useCapture: true
                }));
                browserService.subscribe("click", document.body, handler);

                testHelper.createMouseEvent("click", document.body);

                browserService.unsubscribe("click", document.body, handler);
            });
        }
    });


}());