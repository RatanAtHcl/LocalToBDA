/*
 *  **************************************************************************
 *  Licensed Materials - Property of HCL
 *  (c) Copyright HCL Technologies Ltd.  2020. All Rights Reserved.
 *  US Government Users Restricted Rights - Use, duplication or disclosure
 *  restricted by GSA ADP Schedule Contract with HCL Technologies.
 *  **************************************************************************
 */


/**
 * @fileOverview JSTestDriver unit tests for the Gestures Module
 */
var Hammer = function Hammer() {
        Hammer.VERSION = "1";
        Hammer.defaults = {"behavior" : {}};
    },
    DCX;
Hammer();

DCX.getCoreConfig = function() {
    return {modules: {gestures: {events: "tap"}}};
}

TestCase('gestures', {
    // stores messages posted by context.post
    postedMessages: [],

    // Helper function to return the default stub Module context for testing.
    getDefaultContext: function () {
        var testObject = this;

        return {
            post: function (event) {
                testObject.postedMessages.push(event);
            },

            utils: DCX.utils,

            getConfig: function() { return false },

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
        this.gestures = DCX.getModule("gestures", this.getDefaultContext());
        module = this.gestures;

        // Sanity check
        if (!module || typeof module !== "object") {
            fail("Gestures module NOT FOUND!");
        }
    },

    tearDown: function() {
        var module = this.gestures;
        // Sanity check
        if (!module || typeof module !== "object") {
            fail("Gestures module NOT FOUND!");
        }
        this.postedMessages.splice(0, this.postedMessages.length);

    },

    testModuleInterface: function () {
        var module = this.gestures;
        expectAsserts(3);
        assertFunction("init", module.init);
        assertFunction("destroy", module.destroy);
        assertFunction("onevent", module.onevent);
    },

    testCreateGestureQueueEvent: function(){

        var module = this.gestures,
            controlObject = null,
            options = {
                id: "tl",
                webEvent: {
                    type: "tap",
                    target: {
                        subtype: "tap",
                        element: {
                            tagName: "div"
                        },
                        idType: "-1"
                    },
                    gesture: {
                        touches: [
                            {
                                clientX: 100,
                                clientY: 200,
                                target : {
                                    offsetWidth: 50,
                                    offsetHeight: 150,
                                    id: "tl",
                                    name: "discover"
                                }
                            }
                        ]
                    }
                }
            };

        if (typeof module.createQueueEvent === "function") {
            controlObject = module.createQueueEvent(options);
            expectAsserts(13);
            assertNotNull("controlObject is not null", controlObject);
            assertEquals("type not 11", 11, controlObject.type);
            assertEquals("tl event is not correct", "tap", controlObject.event.dcEvent);
            assertNull("more than one touch for for tap", controlObject.touches[1]);
            assertNull("start and end positions for tap", controlObject.touches[0][1]);
            assertEquals("x position incorrect", 100, controlObject.touches[0][0].position.x);
            assertEquals("y position incorrect", 200, controlObject.touches[0][0].position.y);
            assertEquals("control width incorrect", 50, controlObject.touches[0][0].control.position.width);
            assertEquals("control height incorrect", 150, controlObject.touches[0][0].control.position.height);
            assertEquals("control id incorrect", "tl", controlObject.touches[0][0].control.id);
            assertEquals("control name incorrect", "discover", controlObject.touches[0][0].control.name);
            assertEquals("control id type incorrect", "-1", controlObject.touches[0][0].control.idType);
            assertEquals("control type incorrect", "div", controlObject.touches[0][0].control.type);
        }
    },

    testPostGestureEvent: function() {
        var module = this.gestures;
        if (typeof module.createPostGestureEvent === "function") {
            expectAsserts(1);
            module.postGestureEvent("myEvent");
            assertEquals("event not posted properly", "myEvent" , postedMessages[0]);
        }
    },

    testCleanGestureQueueEvent: function() {
        var module = this.gestures,
            touch = {"control" :
                        {"position" :
                            {"relXY" : ".1,.2"}
                        },
                        "name":"",
                        "subType":null
                    };
        if (typeof module.cleanGestureQueueEvent === "function") {
            expectAsserts(3);
            module.cleanGestureQueueEvent(touch, "radioButton");
            assertEquals("relxy not deleted from radio button", "undefined", typeof touch.control.position.relXY);
            assertEquals("name not deleted", "undefined", typeof touch.control.name);
            assertEquals("subType not deleted", "undefined", typeof touch.control.subType);
        }
    },

    testGetDcEvent: function() {
        var module = this.gestures,
            webEvent;
        if (typeof module.getDCEvent === "function") {
          expectAsserts(3);
          webEvent = {"type" : "hold"};
          assertEquals("hold tl event not tapHold", "taphold", module.getDCEvent(webEvent));
          webEvent = {"type" : "drag"};
          assertEquals("drag tl event not swipe", "swipe", module.getDCEvent(webEvent));
          webEvent = {"type" : "pinch"};
          assertEquals("pinch tl event not pinch", "pinch", module.getDCEvent(webEvent));
        }
    },

    testHandleGesture: function() {
        var module = this.gestures;
        if (typeof module.handleGesture === "function" &&
            typeof module.handleTap === "function" &&
            typeof module.handlePinchAndSwipe === "function") {
          expectAsserts(3);
          assertFunction("handle gesture is not a function" , module.handleGesture);
          assertFunction("handle tap is not a function", module.handleTap);
          assertFunction("handle pinch and swipe is not a function", module.handlePinchAndSwipe);
        }
    },

    testGetElementTopLeft: function() {
        /*:DOC testElement = <div><p>testElement</p></div>*/
        var module = this.gestures,
            webEvent = {gesture: {srcEvent: {target: this.testElement}}};
        if (typeof module.getElementTopLeft === "function") {
          expectAsserts(2);
          assertNotNaN("topLeftX is not a number", module.getElementTopLeft(webEvent).topLeftX);
          assertNotNaN("topLeftY is not a number", module.getElementTopLeft(webEvent).topLeftY);
        }
    },

    testGetRelativeXY: function() {
        /*:DOC testElement = <button type="button">testElement</button>*/
        var module = this.gestures,
            webEvent = {gesture: {srcEvent: {target: this.testElement }}};
        if (typeof module.getRelativeXY === "function") {
          expectAsserts(1);
          assertEquals("relative x y is not correct", "NaN,NaN", module.getRelativeXY(webEvent, 0, 0));
        }
    },

    testGestureWebEvent: function() {
        /*:DOC testElement = <button type="button">testElement</button>*/
        var module = this.gestures,
            hammerVersion = 1,
            id = "tl",
            webEvent = {
                    type: "tap",
                    target: {
                        element: {
                            tagName: "div"
                        },
                        idType: "-1",
                    },
                    gesture: {
                        srcEvent: {target: this.testElement },
                        touches: [
                            {
                                clientX: 100,
                                clientY: 200,
                                target : {
                                    offsetWidth: 50,
                                    offsetHeight: 150,
                                    id: "tl",
                                    name: "discover"
                                }
                            }
                        ]
                    }
                };
        if (typeof module.handlePinchAndSwipe === "function") {        
            webEvent.target.dispatchEvent = function() {};
            try {
                module.init();

                module.handlePinchAndSwipe(id, webEvent);

                module.callDiscoverEvent(webEvent);

                module.handleGesture("tl", webEvent);

                webEvent.type = "press"
                module.callDiscoverEvent(webEvent);

                webEvent.type = "panstart"
                module.callDiscoverEvent(webEvent);

                webEvent.type = "panend"
                module.callDiscoverEvent(webEvent);

                webEvent.type = "pinchstart"

                webEvent.type = "pinchend"
                module.callDiscoverEvent(webEvent);

                webEvent.type = "drag"
                module.handleGesture("tl", webEvent);
            } catch (e) {
                fail(e);
            }
        }
    }
});