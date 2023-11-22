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

    function getStubContext(config) {
        return {
                getService: function (service) {
                    if (service === "config") {
                        return {
                            getServiceConfig: function (service) {
                                if (service === "browser") {
                                    return config || {};
                                }
                            }
                        };
                    } else if (service === "ajax") {
                        return {
                            sendRequest: function () {}
                        };
                    } else if (service === "browserBase") {
                        return {
                            queryDom: {
                                xpath: function () { }
                            },
                            WebEvent: function() { }
                        };
                    } else if (service === "serializer") {
                        return DCX.getService("serializer", {});
                    } else {
                        fail("Illegal service requested: " + service);
                    }
                },
                fail: function (msg, code) {
                    var err = new Error(msg);
                    err.code = code;
                    throw err;
                },
                utils: DCX.utils
        };
    }

    TestCase("browserService w3c", {

        setUp: function () {
            oldJquery = window.jQuery;
            oldQuerySelector = document.querySelectorAll;
            oldSizzle = window.Sizzle;
            this.service = DCX.getService("browser", getStubContext());
        },

        tearDown: function () {
            window.jQuery = oldJquery;
            document.querySelectorAll = oldQuerySelector;
            window.Sizzle = oldSizzle;
            this.service.destroy();
        },


        "test second init": function() {
            this.service.init();
        },


        "test list2Array nodeList.length === undefined": function() {
            this.service.queryAll(1, undefined, "list2Array");
        },


        "test browserService.queryAll should use querySelectorAll if available": function () {
            var stubElements = [document.body],
                result = null;
            document.querySelectorAll = stubFn(stubElements);

            result = this.service.queryAll("html > body");

            expectAsserts(3);
            assert(document.querySelectorAll.called);
            assertEquals("html > body", document.querySelectorAll.args[0]);
            assertEquals(stubElements, result);
        },


        "test browserService.queryAll should use jQuery if available": function () {
            var stubElements = [document.body],
                result = null,
                get = stubFn(stubElements),
                find = stubFn({ get: get });
            document.querySelectorAll = undefined;
            window.Sizzle = undefined;
            window.jQuery = stubFn({ find: find });

            result = this.service.queryAll("html > body");

            expectAsserts(5);
            assert(window.jQuery.called);
            assert(find.called);
            assertEquals("html > body", find.args[0]);
            assertEquals(stubElements, result);

            this.service.queryAll(".foo");
            assertEquals(".foo", find.args[0]);
        },


        "test browserService.queryAll should use Sizzle if available": function () {
            var stubElements = [document.body],
                result = null;
            document.querySelectorAll = undefined;
            window.Sizzle = stubFn(stubElements);

            result = this.service.queryAll("html > body");

            expectAsserts(4);
            assert(window.Sizzle.called);
            assertEquals("html > body", window.Sizzle.args[0]);
            assertEquals(stubElements, result);

            this.service.queryAll(".foo");
            assertEquals(".foo", window.Sizzle.args[0]);
        },


        "test browserService.queryAll should use querySelectorAll or sizzle": function () {
            /*:DOC += <div class='test' id='test'><div class='sub'></div><div class='sub'></div></div>*/

            var elements = document.getElementById('test').childNodes,
                result = this.service.queryAll(".test > .sub");

            assertEquals(2, result.length);
            assertEquals(elements[0], result[0]);
            assertEquals(elements[1], result[1]);
        },

        "test browserService.query should use querySelectorAll or sizzle": function () {
            /*:DOC += <div class='test' id='test'><div class='sub'></div><div class='sub'></div></div>*/

            var elements = document.getElementById('test').childNodes,
                result = this.service.query(".test > .sub");

            assertEquals(elements[0], result);
        },


        "test browserService.css should throw an error if there is no selector engine present": function () {
            document.querySelectorAll = undefined;
            window.jQuery = undefined;
            window.Sizzle = undefined;

            // private method test not exposed
            if (typeof this.service.queryDom === "undefined") {
                jstestdriver.console.log("browserBaseService", "No access to private object queryDom");
                return;
            }

            expectAsserts(1);

            try {
                this.service.queryDom.css(".test");
            } catch (e) {
                assertEquals("NOQUERYSELECTOR", e.code);
            }
        },


        "test browserService.getServiceName": function () {
            expectAsserts(2);
            assertEquals(typeof this.service.getServiceName, "function");
            assertEquals(this.service.getServiceName(), "W3C");
        }
    });


    AsyncTestCase("browserService w3c sizzleObject", {
        setUp: function () {
            oldJquery = window.jQuery;
            oldQuerySelector = document.querySelectorAll;
            oldSizzle = window.Sizzle;

            this.service = DCX.getService("browser", getStubContext({
                sizzleObject: "newSizzle"
            }));
        },

        tearDown: function () {
            window.jQuery = oldJquery;
            document.querySelectorAll = oldQuerySelector;
            window.Sizzle = oldSizzle;
        },

        "test for Sizzle initialized under different variable than window.Sizzle": function(queue) {
            window.newSizzle = window.Sizzle;
            window.Sizzle = undefined;
            document.querySelectorAll = undefined;
            window.jQuery = undefined;

            expectAsserts(1);

            assertEquals("body", this.service.queryAll("html > body")[0].tagName.toLowerCase());
        }
    });

    AsyncTestCase("browserService w3c events", {
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

                browserService = DCX.getService("browser", getStubContext());
                browserService.subscribe("click", document.body, handler);

                testHelper.createMouseEvent("click", document.body);

                browserService.unsubscribe("click", document.body, handler);
            });
        }
    });


    AsyncTestCase("browserService w3c unsupportedBrowser", {
        setUp: function () {
            if (typeof document.addEventListener === 'function') {
                document.oldAddEventListener = document.addEventListener;
                document.addEventListener = undefined;
            }
            if (typeof document.attachEvent !== 'undefined') {
                document.oldAttachEvent = document.attachEvent;
                document.attachEvent = undefined;
            }
        },

        tearDown: function () {
            if (typeof document.oldAddEventListener === 'function') {
                document.addEventListener = document.oldAddEventListener;
            }
            if (typeof document.oldAttachEvent !== 'undefined') {
                document.attachEvent = document.oldAttachEvent;
            }
        },

        "test browserService.sendRequest": function(queue) {
            expectAsserts(1);

            queue.call(function(callbacks) {
                assertException(function() {
                    DCX.getService("browser", getStubContext());
                });
            });
        }
    });

} ());