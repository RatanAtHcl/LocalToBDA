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

function sleep(ms)
{
    parent.resizeTo(320, 640);
    var date = new Date();
    date.setTime(date.getTime() + ms);
    while (new Date().getTime() < date.getTime());
}

TestCase('replay', {

    // stores messages posted by context.post
    postedMessages: [],

    webEventTemplate: {
        "type": "",
        "subType": "",
        "timestamp": 1111111111,
        // "offset": 11418658,
        // "count": 18,
        "target": {
            "id": "[[\"HTML\",0],[\"BODY\",0],[\"FORM\",0],[\"DIV\",3],[\"INPUT\",2]]",
            "idType": -2,
            "name": "rbGroup",
            "dcType": "radioButton",
            "type": "INPUT",
            "subType": "radio",
            "element": {
                "tagName": "INPUT",
                "offsetWidth": 10,
                "offsetHeight": 20
            },
            "position": {
                "x": 78.10000610351562,
                "y": 55,
                "width": 13,
                "height": 13,
                "relXY": "0.5,0.5"
            },
            "currState": {
                "value": "c",
                "checked": true
            },
            "size": {
                "width": 600,
                "height": 400
            },
            "visitedCount": 2,
            "dwell": 7143,
            "focusInOffset": "11411509",
            "xPath": "[[\"HTML\",0],[\"BODY\",0],[\"FORM\",0],[\"DIV\",3],[\"INPUT\",2]]",
            "isParentLink": false
        },
        "nativeEvent": {
            "type": ""
        },
        // "focusInOffset": "11411509",
        "position": {
            "x": 78.10000610351562,
            "y": 55               
        }
    },

    // Helper function to return the default stub Module context for testing.
    getDefaultContext: function () {
        var testObject = this;

        return {
            getConfig: function () {
                var replayConfig = {};

                return replayConfig;
            },

            broadcast: function (message) {
                // This API is NOT used by replay module
                fail("Unexpected use of Module Context's broadcast() API");
            },

            listen: function (eventName) {
                // This API is NOT used by replay module
                fail("Unexpected use of Module Context's listen() API");
            },

            post: function (event, qid) {
                testObject.postedMessages.push(event);
            },

            addHeader: function (headerName, headerValue, qid) {
                // Do nothing.
            },

            utils: DCX.utils
        };
    },

    setUp: function () {
        parent.resizeTo(320, 640);

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
        this.replay = DCX.getModule("replay", this.getDefaultContext());
        module = this.replay;

        // Sanity check
        if (!module || typeof module !== "object") {
            fail("Replay module NOT FOUND!");
        }

        if (typeof module.init === "function") {
            module.init();
        } else {
            jstestdriver.console.log("WARNING: Replay module - init() method NOT FOUND!");
        }
    },

    tearDown: function () {
        var module = this.replay;

        // Sanity check
        if (!module || typeof module !== "object") {
            fail("Replay module NOT FOUND!");
        }

        // Cleanup
        if (typeof module.destroy === "function") {
            module.destroy();
            this.postedMessages.splice(0, this.postedMessages.length);
        } else {
            jstestdriver.console.log("WARNING: Replay module - destroy() method NOT FOUND!");
        }
    },


    // Test Cases
    testModuleInterface: function () {
        var module = this.replay;
        expectAsserts(4);
        assertFunction("init", module.init);
        assertFunction("destroy", module.destroy);
        assertFunction("onevent", module.onevent);
        assertFunction("onmessage", module.onmessage);
    },

    testCreateQueueEvent:function(){
        /*:DOC elem1=<a href="https://test.com">abc</a>*/

        var module = this.replay,
            controlObject = null,
            options = {
                webEvent: {
                    type: "change",
                    target: {
                        element: {
                            offsetHeight: 19,
                            offsetWidth: 125,
                            tagName: "INPUT",
                            type: "text",
                            parentNode: this.elem1
                        },
                        id: "ti",
                        idType: -1,
                        name: "textInput",
                        position: {
                            x: 0,
                            y: 0.1532,
                            xRel: 0,
                            yRel: 0.4065,
                            relXY: "0.4,0.2"
                        },
                        size: {
                            width: 125,
                            height: 19
                        },
                        subType: "text",
                        type: "INPUT"
                    }
                },
                currState: {
                    value: "abc"
                },
                prevState: {
                    value: "abcdef"
                },
                dwell: 1122,
                visitedCount: 3
            };

        if (typeof module.createQueueEvent === "function") {
            controlObject = module.createQueueEvent(options);
            expectAsserts(17);
            assertNotNull("controlObject is not null", controlObject);
            assertEquals("type", 4, controlObject.type);
            assertEquals("target.id", "ti", controlObject.target.id);
            assertEquals("target.idType", -1, controlObject.target.idType);
            assertEquals("target.name", "textInput", controlObject.target.name);
            assertEquals("target.dcType", "textBox", controlObject.target.dcType);
            assertEquals("target.type", "INPUT", controlObject.target.type);
            assertEquals("target.subType", "text", controlObject.target.subType);
            assertEquals("target.position.width", 125, controlObject.target.position.width);
            assertEquals("target.position.height", 19, controlObject.target.position.height);
            assertEquals("event.dcEvent", "textChange", controlObject.event.dcEvent);
            assertEquals("event.type", "change", controlObject.event.type);

            assertEquals("target.position.relXY", "0.4,0.2", controlObject.target.position.relXY);
            assertEquals("target.dwell", 1122, controlObject.target.dwell);
            assertEquals("target.visitedCount", 3, controlObject.target.visitedCount);
            assertEquals("prevState", options.prevState, controlObject.prevState);
            assertTrue("target.isParentLink", controlObject.target.isParentLink)
        }
    },

/*
    // TODO: Figure out a better way to automate these tests OR limit them to specific browsers:

    testHandleClientState:function(){
        //setTimeout("parent.resizeTo(320, 640);",4000);
        var webEvent = {
            type: "attention"
        };

        var clientStateObj = this.replay.handleClientState(webEvent);
        assertNotNull("ClientStateObj is not null", clientStateObj);
        assertTrue("pageWidth: 320 || 296 || 312 || 400 || 310 === " + clientStateObj.clientState.pageWidth, 296 === clientStateObj.clientState.pageWidth || 320 === clientStateObj.clientState.pageWidth || 312 === clientStateObj.clientState.pageWidth || 400 === clientStateObj.clientState.pageWidth || 310 === clientStateObj.clientState.pageWidth);
        assertTrue("pageHeight: 447 || 487 || 579 || 394 || 469 || 477 === " + clientStateObj.clientState.pageHeight, 447 === clientStateObj.clientState.pageHeight || 487 === clientStateObj.clientState.pageHeight || 579 === clientStateObj.clientState.pageHeight || 394 === clientStateObj.clientState.pageHeight || 469 === clientStateObj.clientState.pageHeight || 477 === clientStateObj.clientState.pageHeight);
        assertTrue("viewPortWidth: 320 || 312 || 400 || 310 === " + clientStateObj.clientState.viewPortWidth, 320 === clientStateObj.clientState.viewPortWidth || 312 === clientStateObj.clientState.viewPortWidth || 400 === clientStateObj.clientState.viewPortWidth || 310 === clientStateObj.clientState.viewPortWidth);
        assertTrue("viewPortHeight: 447 || 487 || 579 || 394 || 469 || 477 === " + clientStateObj.clientState.pageHeight, 447 === clientStateObj.clientState.viewPortHeight || 487 === clientStateObj.clientState.viewPortHeight || 579 === clientStateObj.clientState.viewPortHeight || 394 === clientStateObj.clientState.viewPortHeight || 469 === clientStateObj.clientState.viewPortHeight || 477 === clientStateObj.clientState.viewPortHeight);
        assertEquals("viewPortX", 0, clientStateObj.clientState.viewPortX);
        assertEquals("viewPortY", 0, clientStateObj.clientState.viewPortY);
        assertEquals("event", "attention", clientStateObj.clientState.event);
        //Need to finilize scale assertEquals("scale", 100, clientStateObj.clientState.scale);
    },

    testCheckViewClientState:function(){
        this.replay.setViewEventStart(new Date());
        assertNotNull("getViewEventStart is not null", this.replay.getViewEventStart());

        var webEvent = {
            type: "scroll"
        };

        var clientStateObj = this.replay.handleClientState(webEvent);
        assertNotNull("ClientStateObj is not null", clientStateObj);
        assertTrue("pageWidth: 320 || 296 || 312 || 400 || 310 === " + clientStateObj.clientState.pageWidth, 296 === clientStateObj.clientState.pageWidth || 320 === clientStateObj.clientState.pageWidth || 312 === clientStateObj.clientState.pageWidth || 400 === clientStateObj.clientState.pageWidth || 310 === clientStateObj.clientState.pageWidth);
        assertTrue("pageHeight: 447 || 487 || 579 || 394 || 469 || 477 === " + clientStateObj.clientState.pageHeight, 447 === clientStateObj.clientState.pageHeight || 487 === clientStateObj.clientState.pageHeight || 579 === clientStateObj.clientState.pageHeight || 394 === clientStateObj.clientState.pageHeight || 469 === clientStateObj.clientState.pageHeight || 477 === clientStateObj.clientState.pageHeight);
        assertTrue("viewPortWidth: 320 || 312 || 400 || 310 === " + clientStateObj.clientState.viewPortWidth, 320 === clientStateObj.clientState.viewPortWidth || 312 === clientStateObj.clientState.viewPortWidth || 400 === clientStateObj.clientState.viewPortWidth || 310 === clientStateObj.clientState.viewPortWidth);
        assertTrue("viewPortHeight: 447 || 487 || 579 || 394 || 469 || 477 === " + clientStateObj.clientState.pageHeight, 447 === clientStateObj.clientState.viewPortHeight || 487 === clientStateObj.clientState.viewPortHeight || 579 === clientStateObj.clientState.viewPortHeight || 394 === clientStateObj.clientState.viewPortHeight || 469 === clientStateObj.clientState.viewPortHeight || 477 === clientStateObj.clientState.viewPortHeight);
        assertEquals("viewPortX", 0, clientStateObj.clientState.viewPortX);
        assertEquals("viewPortY", 0, clientStateObj.clientState.viewPortY);
        assertEquals("event", "scroll", clientStateObj.clientState.event);
        //Need to finilize scale assertEquals("scale", 100, clientStateObj.clientState.scale);

        assertTrue("test checkViewClientState", this.replay.checkViewClientState());
    },

    testCheckViewClientStateFalse:function(){
        var webEvent = {
            type: "load"
        };

        var clientStateObj = this.replay.handleClientState(webEvent);
        assertNotNull("ClientStateObj is not null", clientStateObj);
        assertTrue("pageWidth: 320 || 296 || 312 || 400 || 310 === " + clientStateObj.clientState.pageWidth, 296 === clientStateObj.clientState.pageWidth || 320 === clientStateObj.clientState.pageWidth || 312 === clientStateObj.clientState.pageWidth || 400 === clientStateObj.clientState.pageWidth || 310 === clientStateObj.clientState.pageWidth);
        assertTrue("pageHeight: 447 || 487 || 579 || 394 || 469 || 477 === " + clientStateObj.clientState.pageHeight, 447 === clientStateObj.clientState.pageHeight || 487 === clientStateObj.clientState.pageHeight || 579 === clientStateObj.clientState.pageHeight || 394 === clientStateObj.clientState.pageHeight || 469 === clientStateObj.clientState.pageHeight || 477 === clientStateObj.clientState.pageHeight);
        assertTrue("viewPortWidth: 320 || 312 || 400 || 310 === " + clientStateObj.clientState.viewPortWidth, 320 === clientStateObj.clientState.viewPortWidth || 312 === clientStateObj.clientState.viewPortWidth || 400 === clientStateObj.clientState.viewPortWidth || 310 === clientStateObj.clientState.viewPortWidth);
        assertTrue("viewPortHeight: 447 || 487 || 579 || 394 || 469 || 477 === " + clientStateObj.clientState.pageHeight, 447 === clientStateObj.clientState.viewPortHeight || 487 === clientStateObj.clientState.viewPortHeight || 579 === clientStateObj.clientState.viewPortHeight || 394 === clientStateObj.clientState.viewPortHeight || 469 === clientStateObj.clientState.viewPortHeight || 477 === clientStateObj.clientState.viewPortHeight);
        assertEquals("viewPortX", 0, clientStateObj.clientState.viewPortX);
        assertEquals("viewPortY", 0, clientStateObj.clientState.viewPortY);
        assertEquals("event", "load", clientStateObj.clientState.event);
        //Need to finilize scale assertEquals("scale", 100, clientStateObj.clientState.scale);

        assertFalse("test checkViewClientState", this.replay.checkViewClientState());
    },

    testCheckClientState:function(){
        var webEventScroll = {
            type: "scroll"
        };

        var clientStateObj = this.replay.handleClientState(webEventScroll);
        assertNotNull("ClientStateObj is not null", clientStateObj);
        assertTrue("pageWidth: 320 || 296 || 312 || 400 || 310 === " + clientStateObj.clientState.pageWidth, 296 === clientStateObj.clientState.pageWidth || 320 === clientStateObj.clientState.pageWidth || 312 === clientStateObj.clientState.pageWidth || 400 === clientStateObj.clientState.pageWidth || 310 === clientStateObj.clientState.pageWidth);
        assertTrue("pageHeight: 447 || 487 || 579 || 394 || 469 || 477 === " + clientStateObj.clientState.pageHeight, 447 === clientStateObj.clientState.pageHeight || 487 === clientStateObj.clientState.pageHeight || 579 === clientStateObj.clientState.pageHeight || 394 === clientStateObj.clientState.pageHeight || 469 === clientStateObj.clientState.pageHeight || 477 === clientStateObj.clientState.pageHeight);
        assertTrue("viewPortWidth: 320 || 312 || 400 || 310 === " + clientStateObj.clientState.viewPortWidth, 320 === clientStateObj.clientState.viewPortWidth || 312 === clientStateObj.clientState.viewPortWidth || 400 === clientStateObj.clientState.viewPortWidth || 310 === clientStateObj.clientState.viewPortWidth);
        assertTrue("viewPortHeight: 447 || 487 || 579 || 394 || 469 || 477 === " + clientStateObj.clientState.pageHeight, 447 === clientStateObj.clientState.viewPortHeight || 487 === clientStateObj.clientState.viewPortHeight || 579 === clientStateObj.clientState.viewPortHeight || 394 === clientStateObj.clientState.viewPortHeight || 469 === clientStateObj.clientState.viewPortHeight || 477 === clientStateObj.clientState.viewPortHeight);
        assertEquals("viewPortX", 0, clientStateObj.clientState.viewPortX);
        assertEquals("viewPortY", 0, clientStateObj.clientState.viewPortY);
        assertEquals("event", "scroll", clientStateObj.clientState.event);
        //Need to finilize scale assertEquals("scale", 100, clientStateObj.clientState.scale);

        var webEventResize = {
            type: "resize"
        };
        assertTrue("test checkClientState", this.replay.checkClientState(webEventResize));
    },

    testCheckClientStateFalse:function(){
        var webEvent = {
            type: "click"
        };

        var clientStateObj = this.replay.handleClientState(webEvent);
        assertNotNull("ClientStateObj is not null", clientStateObj);
        assertTrue("pageWidth: 320 || 296 || 312 || 400 || 310 === " + clientStateObj.clientState.pageWidth, 296 === clientStateObj.clientState.pageWidth || 320 === clientStateObj.clientState.pageWidth || 312 === clientStateObj.clientState.pageWidth || 400 === clientStateObj.clientState.pageWidth || 310 === clientStateObj.clientState.pageWidth);
        assertTrue("pageHeight: 447 || 487 || 579 || 394 || 469 || 477 === " + clientStateObj.clientState.pageHeight, 447 === clientStateObj.clientState.pageHeight || 487 === clientStateObj.clientState.pageHeight || 579 === clientStateObj.clientState.pageHeight || 394 === clientStateObj.clientState.pageHeight || 469 === clientStateObj.clientState.pageHeight || 477 === clientStateObj.clientState.pageHeight);
        assertTrue("viewPortWidth: 320 || 312 || 400 || 310 === " + clientStateObj.clientState.viewPortWidth, 320 === clientStateObj.clientState.viewPortWidth || 312 === clientStateObj.clientState.viewPortWidth || 400 === clientStateObj.clientState.viewPortWidth || 310 === clientStateObj.clientState.viewPortWidth);
        assertTrue("viewPortHeight: 447 || 487 || 579 || 394 || 469 || 477 === " + clientStateObj.clientState.pageHeight, 447 === clientStateObj.clientState.viewPortHeight || 487 === clientStateObj.clientState.viewPortHeight || 579 === clientStateObj.clientState.viewPortHeight || 394 === clientStateObj.clientState.viewPortHeight || 469 === clientStateObj.clientState.viewPortHeight || 477 === clientStateObj.clientState.viewPortHeight);
        assertEquals("viewPortX", 0, clientStateObj.clientState.viewPortX);
        assertEquals("viewPortY", 0, clientStateObj.clientState.viewPortY);
        assertEquals("event", "click", clientStateObj.clientState.event);
        //Need to finilize scale assertEquals("scale", 100, clientStateObj.clientState.scale);

        assertFalse("test checkClientState", this.replay.checkClientState(webEvent));
    },

    testOneventLoad:function(){
        var webEvent = {
            type: "load"
        };

        var handleObj = this.replay.onevent(webEvent);
        assertNotNull("HandleObj is not null", handleObj);
        assertTrue("pageWidth: 320 || 296 || 312 || 400 || 310 === " + handleObj.clientState.pageWidth, 296 === handleObj.clientState.pageWidth || 320 === handleObj.clientState.pageWidth || 312 === handleObj.clientState.pageWidth || 400 === handleObj.clientState.pageWidth || 310 === handleObj.clientState.pageWidth);
        assertTrue("pageHeight: 447 || 487 || 579 || 394 || 469 || 477 === " + handleObj.clientState.pageHeight, 447 === handleObj.clientState.pageHeight || 487 === handleObj.clientState.pageHeight || 579 === handleObj.clientState.pageHeight || 394 === handleObj.clientState.pageHeight || 469 === handleObj.clientState.pageHeight || 477 === handleObj.clientState.pageHeight);
        assertTrue("viewPortWidth: 320 || 312 || 400 || 310 === " + handleObj.clientState.viewPortWidth, 320 === handleObj.clientState.viewPortWidth || 312 === handleObj.clientState.viewPortWidth || 400 === handleObj.clientState.viewPortWidth || 310 === handleObj.clientState.viewPortWidth);
        assertTrue("viewPortHeight: 447 || 487 || 579 || 394 || 469 || 477 === " + handleObj.clientState.pageHeight, 447 === handleObj.clientState.viewPortHeight || 487 === handleObj.clientState.viewPortHeight || 579 === handleObj.clientState.viewPortHeight || 394 === handleObj.clientState.viewPortHeight || 469 === handleObj.clientState.viewPortHeight || 477 === handleObj.clientState.viewPortHeight);
        assertEquals("viewPortX", 0, handleObj.clientState.viewPortX);
        assertEquals("viewPortY", 0, handleObj.clientState.viewPortY);
        assertEquals("event", "load", handleObj.clientState.event);
        //Need to finilize scale assertEquals("scale", 100, handleObj.clientState.scale);
    },

    testOneventScroll:function(){
        var webEvent = {
            type: "scroll"
        };

        var handleObj = this.replay.onevent(webEvent);
        assertNotNull("HandleObj is not null", handleObj);
        assertTrue("pageWidth: 320 || 296 || 312 || 400 || 310 === " + handleObj.clientState.pageWidth, 296 === handleObj.clientState.pageWidth || 320 === handleObj.clientState.pageWidth || 312 === handleObj.clientState.pageWidth || 400 === handleObj.clientState.pageWidth || 310 === handleObj.clientState.pageWidth);
        assertTrue("pageHeight: 447 || 487 || 579 || 394 || 469 || 477 === " + handleObj.clientState.pageHeight, 447 === handleObj.clientState.pageHeight || 487 === handleObj.clientState.pageHeight || 579 === handleObj.clientState.pageHeight || 394 === handleObj.clientState.pageHeight || 469 === handleObj.clientState.pageHeight || 477 === handleObj.clientState.pageHeight);
        assertTrue("viewPortWidth: 320 || 312 || 400 || 310 === " + handleObj.clientState.viewPortWidth, 320 === handleObj.clientState.viewPortWidth || 312 === handleObj.clientState.viewPortWidth || 400 === handleObj.clientState.viewPortWidth || 310 === handleObj.clientState.viewPortWidth);
        assertTrue("viewPortHeight: 447 || 487 || 579 || 394 || 469 || 477 === " + handleObj.clientState.pageHeight, 447 === handleObj.clientState.viewPortHeight || 487 === handleObj.clientState.viewPortHeight || 579 === handleObj.clientState.viewPortHeight || 394 === handleObj.clientState.viewPortHeight || 469 === handleObj.clientState.viewPortHeight || 477 === handleObj.clientState.viewPortHeight);
        assertEquals("viewPortX", 0, handleObj.clientState.viewPortX);
        assertEquals("viewPortY", 0, handleObj.clientState.viewPortY);
        assertEquals("event", "scroll", handleObj.clientState.event);
        //Need to finilize scale assertEquals("scale", 100, handleObj.clientState.scale);
    },

    testOneventResize:function(){
        var webEvent = {
            type: "resize"
        };

        var handleObj = this.replay.onevent(webEvent);
        assertNotNull("HandleObj is not null", handleObj);
        assertTrue("pageWidth: 320 || 296 || 312 || 400 || 310 === " + handleObj.clientState.pageWidth, 296 === handleObj.clientState.pageWidth || 320 === handleObj.clientState.pageWidth || 312 === handleObj.clientState.pageWidth || 400 === handleObj.clientState.pageWidth || 310 === handleObj.clientState.pageWidth);
        assertTrue("pageHeight: 447 || 487 || 579 || 394 || 469 || 477 === " + handleObj.clientState.pageHeight, 447 === handleObj.clientState.pageHeight || 487 === handleObj.clientState.pageHeight || 579 === handleObj.clientState.pageHeight || 394 === handleObj.clientState.pageHeight || 469 === handleObj.clientState.pageHeight || 477 === handleObj.clientState.pageHeight);
        assertTrue("viewPortWidth: 320 || 312 || 400 || 310 === " + handleObj.clientState.viewPortWidth, 320 === handleObj.clientState.viewPortWidth || 312 === handleObj.clientState.viewPortWidth || 400 === handleObj.clientState.viewPortWidth || 310 === handleObj.clientState.viewPortWidth);
        assertTrue("viewPortHeight: 447 || 487 || 579 || 394 || 469 || 477 === " + handleObj.clientState.pageHeight, 447 === handleObj.clientState.viewPortHeight || 487 === handleObj.clientState.viewPortHeight || 579 === handleObj.clientState.viewPortHeight || 394 === handleObj.clientState.viewPortHeight || 469 === handleObj.clientState.viewPortHeight || 477 === handleObj.clientState.viewPortHeight);
        assertEquals("viewPortX", 0, handleObj.clientState.viewPortX);
        assertEquals("viewPortY", 0, handleObj.clientState.viewPortY);
        assertEquals("event", "resize", handleObj.clientState.event);
        //Need to finilize scale assertEquals("scale", 100, handleObj.clientState.scale);
    },
 
*/
    // Test private function (exposed in DEBUG builds)
    testGetNormalizedOrientation: function () {
        var module = this.replay,
            orientation = 0;

        if (typeof module.getNormalizedOrientation === "function") {
            orientation = module.getNormalizedOrientation();
            if (orientation !== 0 &&
                orientation !== 90 &&
                orientation !== 180 &&
                orientation !== -90)
            {
                fail("Invalid orientation (" + orientation + ")");
            }
        }
    },


    // Test private function (exposed in DEBUG builds)
    testIsDuplicateTouch: function () {
        var module = this.replay,
            fakeTouch1 = {
                scale: 2.69,
                rotation: -3.78
            },
            fakeTouch2 = {
                scale: 0.34,
                rotation: 0
            };

        if (typeof module.isDuplicateTouch === "function" &&
            typeof module.saveTouchState === "function")
        {
            expectAsserts(7);
            assertEquals("isDuplicateTouch()", false, module.isDuplicateTouch());
            assertEquals("isDuplicateTouch(null)", false, module.isDuplicateTouch(null));
            assertEquals("isDuplicateTouch(1)", false, module.isDuplicateTouch(1));

            module.saveTouchState(fakeTouch1);
            assertEquals("isDuplicateTouch(fakeTouch1)", true, module.isDuplicateTouch(fakeTouch1));
            assertEquals("isDuplicateTouch(fakeTouch2)", false, module.isDuplicateTouch(fakeTouch2));

            module.saveTouchState(fakeTouch2);
            assertEquals("isDuplicateTouch(fakeTouch1)", false, module.isDuplicateTouch(fakeTouch1));
            assertEquals("isDuplicateTouch(fakeTouch2)", true, module.isDuplicateTouch(fakeTouch2));
        }
    },

    // Test private function postEventQueue (if exposed in DEBUG build)
    "test postEventQueue": function() {
        
        if (typeof this.replay.postEventQueue === "undefined") {
            jstestdriver.console.log("replay.test.js", "No access to private method postEventQueue");
            expectAsserts(0);
            return;
        }

        var change = {
                "type": 4,
                "offset": 45139,
                "screenviewOffset": 45133,
                "count": 12,
                "fromWeb": true,
                "target": {
                    "id": "[[\"HTML\",0],[\"BODY\",0],[\"FORM\",0],[\"DIV\",3],[\"INPUT\",2]]",
                    "idType": -2,
                    "name": "cbGroup",
                    "dcType": "checkBox",
                    "type": "INPUT",
                    "subType": "checkbox",
                    "prevState": {
                        "value": "z",
                        "checked": true
                    },
                    "currState": {
                        "value": "z",
                        "checked": true
                    },
                    "visitedCount": 1,
                    "dwell": 1269,
                    "xPath": "[[\"HTML\",0],[\"BODY\",0],[\"FORM\",0],[\"DIV\",3],[\"INPUT\",2]]",
                    "isParentLink": false
                },
                "event": {
                    "type": "change"
                },
                "focusInOffset": "43864"
            },
            click = {
                "type": 4,
                "offset": 46000,
                "screenviewOffset": 45200,
                "count": 13,
                "fromWeb": true,
                "target": {
                    "id": "[[\"HTML\",0],[\"BODY\",0],[\"FORM\",0],[\"DIV\",3],[\"INPUT\",2]]",
                    "idType": -2,
                    "name": "cbGroup",
                    "dcType": "checkBox",
                    "type": "INPUT",
                    "subType": "checkbox",
                    "position": {
                        "x": 5,
                        "y": 9,
                        "width": 13,
                        "height": 13,
                        "relXY": "0.4,0.7"
                    },
                    "xPath": "[[\"HTML\",0],[\"BODY\",0],[\"FORM\",0],[\"DIV\",3],[\"INPUT\",2]]",
                    "isParentLink": false
                },
                "event": {
                    "type": "click"
                }
            },
            mouseover = {
                "type": 4,
                "offset": 46000,
                "screenviewOffset": 45200,
                "count": 13,
                "fromWeb": true,
                "target": {
                    "id": "[[\"HTML\",0],[\"BODY\",0],[\"FORM\",0],[\"DIV\",3],[\"INPUT\",2]]",
                    "idType": -2,
                    "name": "cbGroup",
                    "dcType": "checkBox",
                    "type": "INPUT",
                    "subType": "checkbox",
                    "position": {
                        "x": 5,
                        "y": 9,
                        "width": 13,
                        "height": 13,
                        "relXY": "0.4,0.7"
                    },
                    "xPath": "[[\"HTML\",0],[\"BODY\",0],[\"FORM\",0],[\"DIV\",3],[\"INPUT\",2]]",
                    "isParentLink": false
                },
                "event": {
                    "type": "mouseover"
                }
            },            
            blur = {
                "type": 4,
                "offset": 11418658,
                "screenviewOffset": 11418652,
                "count": 18,
                "fromWeb": true,
                "target": {
                    "id": "[[\"HTML\",0],[\"BODY\",0],[\"FORM\",0],[\"DIV\",3],[\"INPUT\",2]]",
                    "idType": -2,
                    "name": "rbGroup",
                    "dcType": "radioButton",
                    "type": "INPUT",
                    "subType": "radio",
                    "position": {
                        "x": 78.10000610351562,
                        "y": 55,
                        "width": 13,
                        "height": 13,
                        "relXY": "0.5,0.5"
                    },
                    "currState": {
                        "value": "c",
                        "checked": true
                    },
                    "visitedCount": 2,
                    "dwell": 7143,
                    "focusInOffset": "11411509",
                    "xPath": "[[\"HTML\",0],[\"BODY\",0],[\"FORM\",0],[\"DIV\",3],[\"INPUT\",2]]",
                    "isParentLink": false
                },
                "event": {
                    "type": "blur"
                },
                "focusInOffset": "11411509"
            },
            events = [change, click],
            msg;

        expectAsserts(17);

        assertFunction("postEventQueue is a function", this.replay.postEventQueue);

        this.replay.postEventQueue(events);
        msg = this.postedMessages[0];

        assertSame("Input array must be cleared after posting", 0, events.length);
        assertSame("Change and click messages should be merged into 1", 1, this.postedMessages.length);
        assertSame("Type of combined click and change events should be change", "change", msg.event.type);
        assertSame("Position of combined click and change messages should be taken from click", click.target.position, msg.target.position);

        this.postedMessages.splice(0,  this.postedMessages.length);
        events = [change, blur];
        this.replay.postEventQueue(events);
        msg = this.postedMessages[0];
        assertSame("Input array must be cleared after posting", 0, events.length);
        assertSame("Change and blur messages should be merged into 1", 1, this.postedMessages.length);     
        assertSame("Type of combined change and blur events should be change", "change", msg.event.type);
        assertSame("Combined change and blur events should contain dwell time", typeof msg.target.dwell, "number");
        assertSame("Combined change and blur events should contain visitedCount", typeof msg.target.visitedCount, "number");
        assertTrue("Combined change and blur events should contain focusInOffset", msg.hasOwnProperty("focusInOffset"));

        this.postedMessages.splice(0,  this.postedMessages.length);
        events = [change, mouseover, blur];
        this.replay.postEventQueue(events);
        msg = this.postedMessages[0];
        assertSame("Input array must be cleared after posting", 0, events.length);
        assertSame("Change and blur messages should be merged into 1", 1, this.postedMessages.length);     
        assertSame("Type of combined change and blur events should be change", "change", msg.event.type);
        assertSame("Combined change and blur events should contain dwell time", typeof msg.target.dwell, "number");
        assertSame("Combined change and blur events should contain visitedCount", typeof msg.target.visitedCount, "number");
        assertTrue("Combined change and blur events should contain focusInOffset", msg.hasOwnProperty("focusInOffset"));

        this.postedMessages.splice(0,  this.postedMessages.length);  
    },

    testGetDcEvent:function(){
        var module = this.replay,
            dcEvent = null,
            webEvent = {
                type: "change",
                target: {
                    subType: "text",
                    type: "INPUT"
                }
            };

        if (typeof module.getDCEvent === "function") {
            dcEvent = module.getDCEvent(webEvent);
            expectAsserts(2);
            assertNotNull("controlObject is not null", dcEvent);
            assertEquals("dcEvent", "textChange", dcEvent);
        }
    },

    testGetDcEventBlur: function () {
        var module = this.replay,
            dcEvent = null,
            webEvent = {
                type: "blur",
                target: {
                    type: "blur"
                }
            };

        if (typeof module.getDCEvent === "function") {
            dcEvent = module.getDCEvent(webEvent);
            expectAsserts(2);
            assertNotNull("controlObject is not null", dcEvent);
            assertEquals("dcEvent", "focusout", dcEvent);
        }
    },

    // Test private function (exposed in DEBUG builds)
    testIsDuplicateEvent: function () {
        var module = this.replay,
            fakeWebEvent1 = {
                type: "focus",
                target: {
                    id: "some_element_id"
                },
                timestamp: 1234567890
            },
            fakeWebEvent2 = {
                type: "screenview_load"
            };

        if (typeof module.isDuplicateEvent === "function") {
            expectAsserts(10);
            assertEquals("isDuplicateEvent()", false, module.isDuplicateEvent());
            assertEquals("isDuplicateEvent(null)", false, module.isDuplicateEvent(null));
            assertEquals("isDuplicateEvent(1)", false, module.isDuplicateEvent(1));

            assertEquals("isDuplicateEvent - test1", true, module.isDuplicateEvent(fakeWebEvent1, fakeWebEvent1));
            assertEquals("isDuplicateEvent - test2", true, module.isDuplicateEvent(fakeWebEvent2, fakeWebEvent2));
            assertEquals("isDuplicateEvent - test3", false, module.isDuplicateEvent(fakeWebEvent1, fakeWebEvent2));

            fakeWebEvent2.type = fakeWebEvent1.type;
            assertEquals("isDuplicateEvent - test4", false, module.isDuplicateEvent(fakeWebEvent1, fakeWebEvent2));

            fakeWebEvent2.target = {
                id: fakeWebEvent1.target.id
            };
            assertEquals("isDuplicateEvent - test5", false, module.isDuplicateEvent(fakeWebEvent1, fakeWebEvent2));

            fakeWebEvent2.timestamp = fakeWebEvent1.timestamp + 20;
            assertEquals("isDuplicateEvent - test6", false, module.isDuplicateEvent(fakeWebEvent1, fakeWebEvent2));

            fakeWebEvent2.timestamp = fakeWebEvent1.timestamp + 5;
            assertEquals("isDuplicateEvent - test7", true, module.isDuplicateEvent(fakeWebEvent1, fakeWebEvent2));
        }        
    },

    // Test private function (exposed in DEBUG builds)
    testAddGeolocationMsg: function () {
        var module,
            moduleConfig = {
                geolocation: {
                    enabled: true,
                    triggers: [
                        {
                            event: "load"
                        }
                    ]
                }
            },
            context = this.getDefaultContext();

        context.getConfig = function () {
            return moduleConfig;
        };
        module = DCX.getModule("replay", context);
        if (typeof module.addGeolocationMsg === "function") {
            expectAsserts(1);
            DCX.logGeolocation = function () {
                assertEquals("Invalid number of arguments passed to logGeolocation", 0, arguments.length);
            }
            module.addGeolocationMsg();
            module.addGeolocationMsg([]);
            module.addGeolocationMsg("foo");
            module.addGeolocationMsg({});
            module.addGeolocationMsg(null);
            module.addGeolocationMsg(123);
            module.addGeolocationMsg("unload");

            module.addGeolocationMsg("load");
        }
    },

    // Test private function (exposed in DEBUG builds)
    testScheduleDOMCapture: function () {
        /*:DOC elem = <input type="text" id="testInput" value="0" /> */
        var module,
            context = this.getDefaultContext(),
            firstEventOn = true,
            node = this.elem;

        module = DCX.getModule("replay", context);
        if (typeof module.scheduleDOMCapture === "function") {
            context.performDOMCapture = function (root, config) {
                assertFail("performDOMCapture called with root = " + root + " config = " + config);
            }
            assertNull("scheduleDOMCapture()", module.scheduleDOMCapture());

            context.performDOMCapture = function (root, config) {
                assertSame("1. Unexpected root element.", node, root);
                assertEquals("1. Unexpected config.", {eventOn: firstEventOn}, config);
                // Replay module sets the eventOn flag to true for the 1st DOM Capture and false subsequently
                firstEventOn = false;
                return "pqrs123";
            }
            assertEquals("scheduleDOMCapture(node)", "pqrs123", module.scheduleDOMCapture(node));
            assertEquals("scheduleDOMCapture(node, {})", "pqrs123", module.scheduleDOMCapture(node, {}));
            assertEquals("scheduleDOMCapture(node)", "pqrs123", module.scheduleDOMCapture(node, {}, 0));

            context.performDOMCapture = function (root, config, delay) {
                assertSame("2. Unexpected root element.", node, root);
                assertEquals("2. Unexpected config.", true, config.xyz);
                return "abcd";
            }
            assertNotEquals("scheduleDOMCapture(node)", "abcd", module.scheduleDOMCapture(node, { xyz: true }, 5));
        }
        else {
            jstestdriver.console.log("Test skipped because cannot access private function: scheduleDOMCapture");
        }
    },

    testAddDOMCapture: function () {
        var module,
            context = this.getDefaultContext(),
            dcid,
            moduleConfig = {
                domCapture: {
                    enabled: false,
                    triggers: [
                        {
                            event: "click",
                            // Screenviews not valid for regular events, should be ignored
                            screenviews: [
                                "scv1",
                                "scv2"
                            ]
                        },
                        {
                            event: "unload",
                            screenviews: [
                                "scv1",
                                "scv2",
                                { regex: "^foo.*" }
                            ]
                        }
                    ]
                }
            },
            node = this.elem;

        module = DCX.getModule("replay", context);
        if (typeof module.addDOMCapture === "function") {
            context.performDOMCapture = function () {
                assertFail("Unexpected call!");
            };
            assertNull("addDOMCapture()", module.addDOMCapture());
            assertNull("addDOMCapture(null)", module.addDOMCapture(null));
            assertNull('addDOMCapture(null, window.document)', module.addDOMCapture(null, window.document));
            assertNull('addDOMCapture("")', module.addDOMCapture(""));
            assertNull('addDOMCapture("click")', module.addDOMCapture("click"));
            assertNull('1. addDOMCapture("click", window.document)', module.addDOMCapture("click", window.document));
            assertNull('addDOMCapture("load", null, "root")', module.addDOMCapture("load", null, "root"));
            assertNull('addDOMCapture(null, null, "root")', module.addDOMCapture(null, null, "root"));

            context.getConfig = function () {
                return moduleConfig;
            };
            context.performDOMCapture = function () {
                if (DCX.utils.isLegacyIE) {
                    fail("performDOMCapture called in legacy IE!");
                }
                return dcid;
            };
            dcid = "abcd123";
            assertNull('addDOMCapture("unload", null, "scv1")', module.addDOMCapture("unload", null, "scv1"));
            assertNull('addDOMCapture("click", null, "scv1")', module.addDOMCapture("click", null, "scv1"));
            assertNull('addDOMCapture("load", null, "scv1")', module.addDOMCapture("load", null, "scv1"));
            assertNull('2. addDOMCapture("click", window.document)', module.addDOMCapture("click", window.document));

            moduleConfig.domCapture.enabled = true;

            // DOM Capture is only enabled on IE 9 and greater
            if (DCX.utils.isLegacyIE) {
                assertNull('3. addDOMCapture("click", window.document)', module.addDOMCapture("click", window.document));
            } else {
                assertEquals('3. addDOMCapture("click", window.document)', dcid, module.addDOMCapture("click", window.document));
            }

            dcid = "pqrs123";
            assertNull('addDOMCapture("unload", null, "scv0")', module.addDOMCapture("unload", null, "scv0"));
            // DOM Capture is only enabled on IE 9 and greater
            if (DCX.utils.isLegacyIE) {
                assertNull('2. addDOMCapture("unload", null, "scv1")', module.addDOMCapture("unload", null, "scv1"));
            } else {
                assertEquals('2. addDOMCapture("unload", null, "scv1")', dcid, module.addDOMCapture("unload", null, "scv1"));
            }
            assertNull('2. addDOMCapture("click", null, "scv1")', module.addDOMCapture("click", null, "scv1"));
            assertNull('2. addDOMCapture("load", null, "scv1")', module.addDOMCapture("load", null, "scv1"));

            // DOM Capture is only enabled on IE 9 and greater
            if (DCX.utils.isLegacyIE) {
                assertNull('addDOMCapture("unload", document, "scv2")', module.addDOMCapture("unload", window.document, "scv2"));
            } else {
                assertEquals('addDOMCapture("unload", document, "scv2")', dcid, module.addDOMCapture("unload", window.document, "scv2"));
                assertEquals('addDOMCapture("unload", document, "foo")', dcid, module.addDOMCapture("unload", window.document, "foo"));
                assertEquals('addDOMCapture("unload", document, "foobar")', dcid, module.addDOMCapture("unload", window.document, "foobar"));
                assertNull('addDOMCapture("unload", document, "ifoobar")', module.addDOMCapture("unload", window.document, "ifoobar"));
            }
            assertNull('addDOMCapture("unload", document, "scv3")', module.addDOMCapture("unload", window.document, "scv3"));            
        }
    },

    // Test private function (exposed in DEBUG builds)
    testIsTargetClickable: function () {
        var module = this.replay,
            clickableTargets = [
                {
                    type: "SPAN"
                },
                {
                    type: "BUTTON"
                },
                {
                    type: "A"
                },
                {
                    type: "INPUT",
                    subType: "button"
                },
                {
                    type: "INPUT",
                    subType: "image"
                },
                {
                    type: "INPUT",
                    subType: "submit"
                },
                {
                    type: "INPUT",
                    subType: "reset"
                }
            ],
            nonClickableTargets = [
                {
                    type: "TEXTAREA"
                },
                {
                    type: "INPUT",
                    subType: "text"
                },
                {
                    type: "INPUT",
                    subType: "password"
                },
                {
                    type: "INPUT",
                    subType: "file"
                },
                {
                    type: "INPUT"
                }
            ],
            i = 0;

        if (typeof module.isTargetClickable === "function") {
            expectAsserts(clickableTargets.length + nonClickableTargets.length);
            for (i = 0; i < clickableTargets.length; i++) {
                assertTrue(clickableTargets[i].type + (clickableTargets[i].subType ? "/" + clickableTargets[i].subType : "") + " should be clickable!", module.isTargetClickable(clickableTargets[i]));
            }
            for (i = 0; i < nonClickableTargets.length; i++) {
                assertFalse(nonClickableTargets[i].type + nonClickableTargets[i].subType ? "/" + nonClickableTargets[i].subType : "" + " should not be clickable!", module.isTargetClickable(nonClickableTargets[i]));
            }
        }
    },

    // Test private function (exposed in DEBUG builds)
    testGetParentLink: function () {
        /*:DOC elem1 = <input type="hidden" value="0"/> */
        /*:DOC elem2 = <a href="https://test.com">abc</a> */
        /*:DOC elem3 = <button type="submit" formaction="http://test.php"/>def</button> */

        if (typeof this.replay.getParentLink === "undefined") {
            jstestdriver.console.log("No access to private method getParentLink. Test skipped");
            expectAsserts(0);
            return;
        }        

        var module = this.replay,
            nodes = [this.elem1, this.elem2, this.elem3],
            ret;

        ret = module.getParentLink(nodes);

        expectAsserts(1);
        assertEquals(this.elem2, ret);
    },

    testOneventBlur: function () {
        var module = this.replay,
            webEvent = DCX.utils.extend(true, {}, this.webEventTemplate),
            oldId = webEvent.target.id,
            lastPostedMessage,
            tmpQueue,
            handleObj;

        if (typeof module.createQueueEvent !== "function" || typeof module.getTmpQueue !== "function") {
            jstestdriver.console.log("No access to private function createQueueEvent or getTmpQueue.");
            return;
        }

        expectAsserts(7);

        webEvent.type = webEvent.nativeEvent.type = "focus";
        tmpQueue = module.getTmpQueue();
        assertArray(tmpQueue);
        assertEquals(0, tmpQueue.length);
        module.onevent(webEvent);

        assertEquals(1, tmpQueue.length);

        webEvent = DCX.utils.extend(true, {}, this.webEventTemplate),
        webEvent.type = webEvent.nativeEvent.type = "blur";
        webEvent.target.dwell = 9999;
        handleObject = module.onevent(webEvent);

        assertEquals(0, tmpQueue.length);
        assertEquals(1, this.postedMessages.length);
        lastPostedMessage = this.postedMessages[0];
        assertEquals(oldId, lastPostedMessage.target.id);
        assertEquals("focusout", lastPostedMessage.event.dcEvent);
    },

    testOneventFocus: function () {
        var module = this.replay,
            webEvent = DCX.utils.extend(true, {}, this.webEventTemplate),
            oldId = webEvent.target.id,
            handleObj,
            tmpQueue;

        if (typeof module.createQueueEvent !== "function" || typeof module.getTmpQueue !== "function") {
            jstestdriver.console.log("No access to private function createQueueEvent or getTmpQueue.");
            return;
        }

        expectAsserts(9);

        webEvent.type = webEvent.nativeEvent.type = "click";
        tmpQueue = module.getTmpQueue();
        assertArray(tmpQueue);
        assertEquals(0, tmpQueue.length);
        module.onevent(webEvent);
        assertEquals(1, tmpQueue.length);
        assertEquals("click", tmpQueue[0].event.type);

        webEvent = DCX.utils.extend(true, {}, this.webEventTemplate);
        webEvent.type = webEvent.nativeEvent.type = "focus";
        webEvent.target.id = webEvent.target.xPath = "[[\"HTML\",0],[\"BODY\",0],[\"FORM\",0],[\"DIV\",3],[\"INPUT\",1]]";
        webEvent.target.dwell = 9999;

        handleObject = module.onevent(webEvent);
        assertEquals(1, tmpQueue.length);
        assertEquals("focus", tmpQueue[0].event.type);

        assertEquals(1, this.postedMessages.length);
        assertEquals(oldId, this.postedMessages[this.postedMessages.length-1].target.id);
        assertEquals("focusout", this.postedMessages[this.postedMessages.length-1].event.dcEvent);
    },

    testOneventClick: function () {
        var module = this.replay,
            webEvent = DCX.utils.extend(true, {}, this.webEventTemplate),
            handleObj,
            tmpQueue;

        if (typeof module.createQueueEvent !== "function" || typeof module.getTmpQueue !== "function") {
            jstestdriver.console.log("No access to private function createQueueEvent or getTmpQueue.");
            return;
        }

        expectAsserts(7);

        webEvent.type = webEvent.nativeEvent.type = "focus";
        tmpQueue = module.getTmpQueue();
        assertArray(tmpQueue);
        assertEquals(0, tmpQueue.length);
        tmpQueue.push(module.createQueueEvent({
            webEvent: webEvent,
            id: webEvent.target.id,
            currState: DCX.utils.getValue(webEvent, "target.state")
        }));

        assertEquals(1, tmpQueue.length);

        webEvent.type = webEvent.nativeEvent.type = "click";
        webEvent.target.id = webEvent.target.xpath = "[[\"HTML\",0],[\"BODY\",0],[\"FORM\",0],[\"DIV\",3],[\"INPUT\",1]]"
        webEvent.target.dwell = 9999;
        handleObject = module.onevent(webEvent);
 
        assertEquals(1, tmpQueue.length);
        assertEquals(1, this.postedMessages.length);
        assertEquals(webEvent.target.id, tmpQueue[tmpQueue.length-1].target.id);
        assertEquals("click", tmpQueue[tmpQueue.length-1].event.dcEvent);
    }
});

//Test localStorage related functions
TestCase('replay_localStorage', {

    // stores messages posted by context.post
    postedMessages: [],

    // Helper function to return the default stub Module context for testing.
    getDefaultContext: function () {
        var testObject = this;

        return {
            getConfig: function () {
                var replayConfig = {
                    storageKeys: ["someKeyName0", "someKeyName1", "test-key"]            
                };

                return replayConfig;
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
                testObject.postedMessages.push(event);
            },

            addHeader: function (headerName, headerValue, qid) {
                // Do nothing.
            },

            utils: DCX.utils
        };
    },

    setUp: function () {
        parent.resizeTo(320, 640);

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
        this.replay = DCX.getModule("replay", this.getDefaultContext());
        module = this.replay;

        // Sanity check
        if (!module || typeof module !== "object") {
            fail("Replay module NOT FOUND!");
        }

        if (typeof module.init === "function") {
            module.init();
        } else {
            jstestdriver.console.log("WARNING: Replay module - init() method NOT FOUND!");
        }
    },

    tearDown: function () {
        var module = this.replay;

        // Sanity check
        if (!module || typeof module !== "object") {
            fail("Replay module NOT FOUND!");
        }

        // Cleanup
        if (typeof module.destroy === "function") {
            this.postedMessages.splice(0, this.postedMessages.length);
            module.destroy();
        } else {
            jstestdriver.console.log("WARNING: Replay module - destroy() method NOT FOUND!");
        }
    },
        // Test private function (exposed in DEBUG builds)
    testExtendGetItem: function () {
        var module = this.replay,
        storage_data, value;

        if (typeof module.extendGetItem === "function"){
            expectAsserts(7);
            assertFunction("extendGetItem()  is a function", module.extendGetItem)
            assertEquals("extendGetItem() init", true, module.extendGetItem());
            //assertEquals("extendGetItem() 2nd call", false, module.extendGetItem());
      
            //set storage, get should capture the storage data, i.e it should be posted
            localStorage.setItem("test-key", "test-value");
            value = localStorage.getItem("test-key") || null;
            storage_data = this.postedMessages[this.postedMessages.length-1];

            assertNotNull("storage value not null", value);
            assertNotNull("storage posted", storage_data);
            assertEquals("storage key test", "test-key", storage_data.webStorage.key);
            assertEquals("storage value test", "test-value", storage_data.webStorage.value);
            assertEquals("storage value test 2", value, storage_data.webStorage.value);   
        }
        else {
            jstestdriver.console.log("WARNING: Replay module - extendGetItem method NOT FOUND!");
        }        

    }, 

    testIsStorage: function () {
        var module = this.replay;

        if (typeof module.isStorageKeyCaptured === "function"){
            expectAsserts(6);
            assertFunction("isStorageKeyCaptured() is a function", module.isStorageKeyCaptured)
            assertEquals("isStorageKeyCaptured()", false, module.isStorageKeyCaptured());
            assertEquals("isStorageKeyCaptured()", false, module.isStorageKeyCaptured(new Number(1)));
            assertEquals("isStorageKeyCaptured()", true, module.isStorageKeyCaptured("someKeyName0"));
            assertEquals("isStorageKeyCaptured()", true, module.isStorageKeyCaptured("someKeyName1"));
            assertEquals("isStorageKeyCaptured()", false, module.isStorageKeyCaptured("notToBeCaptured"));
        }
        else {
            jstestdriver.console.log("WARNING: Replay module - isStorageKeyCaptured method NOT FOUND!");
        }
        
    },

    testHandleStorage: function () {
        var module = this.replay,

        webEvent0 = {
            key: "notToBeCaptured",
            value: "foobar0"
        }, 
        webEvent1 = {
            key: "someKeyName0",
            value: "foobar1"
        },
         webEvent2 = {
            key: "someKeyName1",
            value: "foobar2"
        };
          
          if (typeof module.handleStorage === "function"){
            expectAsserts(11);

            assertFunction("handleStorage() is a function", module.handleStorage);
            //this key should not be captured
            assertEquals("handleStorage()", null, module.handleStorage(webEvent0));
            assertEquals("handleStorage()", null, module.handleStorage());
            
            //this key should be captured
            var test = module.handleStorage(webEvent1);
            assertNotNull("handleStorage() return not null", test);
            assertEquals("handleStorage()", "8", test.type);
            assertEquals("handleStorage()", "someKeyName0", test.webStorage.key);
            assertEquals("handleStorage()", "foobar1", test.webStorage.value);

            //this key should not be captured
            var test2 = module.handleStorage(webEvent2);
            assertNotNull("handleStorage() return not null", test2);
            assertEquals("handleStorage()", "8", test2.type);
            assertEquals("handleStorage()", "someKeyName1", test2.webStorage.key);
            assertEquals("handleStorage()", "foobar2", test2.webStorage.value);
        }
        else {
            jstestdriver.console.log("WARNING: Replay module - handleStorage method NOT FOUND!");
        }
        
    }
});

