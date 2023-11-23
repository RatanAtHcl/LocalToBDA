/*
 *  **************************************************************************
 *  Licensed Materials - Property of HCL
 *  (c) Copyright HCL Technologies Ltd.  2020. All Rights Reserved.
 *  US Government Users Restricted Rights - Use, duplication or disclosure
 *  restricted by GSA ADP Schedule Contract with HCL Technologies.
 *  **************************************************************************
 */


AsyncTestCase("DCX integrationtests", {

    setUp: function () {
        window.oldJQuery = window.jQuery;
        window.oldSizzle = window.Sizzle;
        document.oldQuerySelectorAll = document.querySelectorAll;
    },

    tearDown: function () {
        DCX.removeModule("testClickDefault");
        DCX.removeModule("testClickDocument");
        DCX.removeModule("testClickDiv");
        DCX.removeModule("testWinEvents");
        DCX.destroy();

        window.jQuery = window.oldJQuery;
        window.Sizzle = window.oldSizzle;
        document.querySelectorAll = document.oldQuerySelectorAll;
    },


    "test correct event flow": function (queue) {
        /*:DOC +=   <div id="target">
                        <div id="test1"></div>
                        <div id="test2"></div>
                        <div id="test3"></div>
                        <input id="test4" name"test4" value="test">
                    </div>*/


        expectAsserts(18);
        assertFalse(DCX.isInitialized());
        DCX.addModule("testClickDefault", function (context) {
            return {
                onevent: function (event) {
                    assertObject(event);
                    assertSame("click", event.type);
                }
            };
        });

        DCX.addModule("testClickDocument", function (context) {
            return {
                onevent: function (event) {
                    assertObject(event);
                    assertSame("click", event.type);
                }
            };
        });

        DCX.addModule("testClickDiv", function (context) {
            return {
                onevent: function (event) {
                    assertObject(event);
                    assertSame("click", event.type);
                    assertSame("DIV", event.target.element.tagName);
                }
            };
        });

        DCX.addModule("testWinEvents", function (context) {
            return {
                onevent: function (event) {
                    if (event.type == "unload") {
                        return;
                    }
                    assertObject(event);
                    assertSame("load", event.type);
                }
            };
        });

        queue.call(function (callbacks) {
            var cb = callbacks.add(function () {
                // Should trigger on testClickDefault and testClickDocument
                testHelper.createMouseEvent("click", document.getElementsByTagName("body")[0], 0, 0);
                // Should trigger on testClickDefault and testClickDocument and testClickDiv
                testHelper.createMouseEvent("click", document.getElementById("test1"), 0, 0);
            });

            DCX.init({
                core: {
                    moduleBase: "intermediate/modules/",
                    modules: {
                        testClickDefault: {
                            events: [ { name: "click" } ]
                        },
                        testClickDocument: {
                            events: [ { name: "click", target: document } ]
                        },
                        testClickDiv: {
                            events: [ { name: "click", target: "div" } ]
                        },
                        testWinEvents: {
                            events: [
                                { name: "load", target: window },
                                { name: "unload", target: window }
                            ]
                        }
                    }
                },
                services: {
                    queue: {
                        queues: [
                            {
                                qid: "DEFAULT",
                                endpoint: "DiscoverUIPost.php",
                                maxEvents: 5,
                                serializer: "json",
                                timerInterval: 0
                            }
                        ]
                    }
                }
            }, cb);
        });

        queue.call("assertions", function () {
            assertTrue(DCX.isInitialized());
        });

    },

    "test library should shut down itself if jQuery is not present or has the wrong version": function (queue) {
        window.jQuery = undefined;

        expectAsserts(2);
        assertFalse(DCX.isInitialized());
        queue.call(function(callbacks){
            var cb = callbacks.add(function (state) {
                if (DCX.getFlavor() === "jQuery") {
                    assertFalse(DCX.isInitialized());
                } else {
                    if (state === "initialized") {
                        assertTrue(DCX.isInitialized());
                    }
                }
            });

            DCX.init({
                core: {
                    moduleBase: "intermediate/modules/",
                    modules: {}
                },
                services: {
                    queue: {
                        queues: [
                            {
                                qid: "DEFAULT",
                                endpoint: "DiscoverUIPost.php",
                                maxEvents: 5,
                                serializer: "json",
                                timerInterval: 0
                            }
                        ]
                    },
                    browser: {
                        globalSizzle: true
                    }
                }
            }, cb);
        });
    },

    "test library should shut down itself if sizzle and document.querySelector is not available": function (queue) {
        window.jQuery = undefined;
        window.Sizzle = undefined;
        document.querySelectorAll = undefined;

        expectAsserts(2);
        debugger;
        assertFalse(DCX.isInitialized());
        queue.call(function(callbacks){
            var cb = callbacks.add(function (state) {
                assertFalse(DCX.isInitialized());
            });

            DCX.init({
                core: {
                    moduleBase: "intermediate/modules/",
                    modules: {}
                },
                services: {
                    queue: {
                        queues: [
                            {
                                qid: "DEFAULT",
                                endpoint: "DiscoverUIPost.php",
                                maxEvents: 5,
                                serializer: "json",
                                timerInterval: 0
                            }
                        ]
                    },
                    browser: {
                        globalSizzle: true
                    }
                }
            }, cb);
        });
    }
});