/*
 *  **************************************************************************
 *  Licensed Materials - Property of HCL
 *  (c) Copyright HCL Technologies Ltd.  2020. All Rights Reserved.
 *  US Government Users Restricted Rights - Use, duplication or disclosure
 *  restricted by GSA ADP Schedule Contract with HCL Technologies.
 *  **************************************************************************
 */


(function () {

    var _publishEvent = stubFn();

    function getStubContext(isFromIframe) {
        var context =  {
            getCoreConfig: function () {
                return {
                    modules: {
                        "stub1": {
                            events: [
                                { name: "stubEvent1" }
                            ]
                        },
                        "stub2": {
                            events: [
                                { name: "stubEvent1" },
                                { name: "stubEvent2" }
                            ]
                        }
                    }
                }
            },
            getService: function (service) {
                if (service === "config") {
                    return {
                        getServiceConfig: function (name) {
                            if (name === "browser") {
                                return {
                                    blacklist: ["blacklistednode1", "blacklistednode2", { regex: "blacklistednode[4-8]", flags: "gi" }],
                                    customid: ["customid"]
                                };
                            } else if (name === "serializer") {
                                return {};
                            } else {
                                fail("Illegal config requested: " + name);
                            }
                        },
                        subscribe: function (eventName, eventHandler) {

                        },
                        unsubscribe: function(eventName, eventHandler) {
                            
                        }
                    };
                } else if (service === "ajax") {
                    return {
                        sendRequest: function() {}
                    }
                } else if (service === "browserBase") {
                    return {
                        WebEvent: function (event) {
                            return {};
                        },
                        queryDom: {
                            xpath: function () {}
                        }
                    };
                } else if (service === "serializer") {
                    return DCX.getService("serializer", context);
                } else {
                    fail("Illegal service requested: " + service);
                }
            },
            _publishEvent: _publishEvent,
            isInitialized: function () {
                return true;
            },
            _getLocalTop: function () {
                return top.window.window;
            },
            utils: DCX.utils
        };
        // to let tests 'think' the run in a main window
        if(!isFromIframe) {
            context.utils.isIFrameDescendant = function() { return false; };
        } else {
            context.utils.isIFrameDescendant = function() { return true; };
        }
        return context;
    }


    TestCase("browserService", {

        setUp: function () {
            this.service = DCX.getService("browser", getStubContext());
            this.base = DCX.getService('browserBase', getStubContext());
        },


        tearDown: function() {
            this.service.destroy();
            this.base.destroy();
        },


        "test second init": function() {
            this.base.init();
        },


        "test verify service interface": function () {
            expectAsserts(11);
            // Browser base service API
            assertFunction("WebEvent", this.base.WebEvent);
            assertFunction("ElementData", this.base.ElementData);
            assertFunction("processDOMEvent", this.base.processDOMEvent);
            assertFunction("getXPathFromNode", this.base.getXPathFromNode);
            assertFunction("getNodeFromID", this.base.getNodeFromID);
            assertObject("queryDom", this.base.queryDom);
            
            // Browser service API
            assertFunction("getServiceName", this.service.getServiceName);
            assertFunction("query", this.service.query);
            assertFunction("queryAll", this.service.queryAll);
            assertFunction("subscribe", this.service.subscribe);
            assertFunction("unsubscribe", this.service.unsubscribe);
        },


        "test browserService.query with XPath selector": function () {
            expectAsserts(5);

            var test = top.document.createElement("div");
            test.innerHTML = "<dl><dt>test</dt><dd><div><input></div></dd></dl>";
            var target = test.getElementsByTagName("input")[0];

            assertEquals(target, this.base.queryDom.xpath("[[\"DL\",0],[\"DD\",0],[\"DIV\",0],[\"INPUT\",0]]", test));
            assertEquals(target, this.base.queryDom.xpath("[[\"dl\",0],[\"dd\",0],[\"div\",0],[\"input\",0]]", test));

            test.innerHTML = "<dl>TEXT_NODE</dl>";
            assertNull(this.base.queryDom.xpath("[[\"DL\",0],[\"DD\",0],[\"DIV\",0],[\"INPUT\",0]]", test));
            assertNull(this.base.queryDom.xpath("[[\"dl\",0],[\"dd\",0],[\"div\",0],[\"input\",0]]", test));
            assertNull(this.base.queryDom.xpath("0"));
        },

        "test browserService.query with XPath selector(with ids)": function () {
            /*:DOC += <div></div> */
            expectAsserts(2);

            var test = document.getElementsByTagName("div")[0];

            test.innerHTML = "<dl><dt>test</dt><dd id='ddId'><div></div><p></p><div><input id='inputId'></div></dd></dl>";
            target = test.getElementsByTagName("input")[0];
            assertEquals(target, this.base.queryDom.xpath("[[\"inputId\"]]"));

            test.innerHTML = "<dl><dt>test</dt><dd id='ddId'><div></div><p></p><div><input></div></dd></dl>";
            target = test.getElementsByTagName("input")[0];
            assertEquals(target, this.base.queryDom.xpath("[[\"ddId\"],[\"DIV\",1],[\"INPUT\",0]]"));
        },

        "test browserService XPath selector(iframe)": function () {
            /*:DOC += <iframe></iframe> */

            var iframe = document.getElementsByTagName("iframe")[0],
                doc = iframe.contentWindow.document,
                iframecontent = '<html><body><dl><dt>test</dt><dd id="ddId"><div></div><p></p><div><input></div></dd></dl></body></html>',
                input;

            doc.open();
            doc.write(iframecontent);
            doc.close();
            
            input = doc.getElementsByTagName("input")[0];
            
            assertEquals(input, this.base.queryDom.xpath("[[\"ddId\"],[\"DIV\",1],[\"INPUT\",0]]", doc));
            // assertEquals([["HTML",0],["BODY",0],["IFRAME",0],["ddId"],["DIV",1],["INPUT",0]], this.base.ElementData.prototype.examineID(input).xPath);
        },

        // BrowserBaseService - private methods

        "test browserBaseService.getEventPosition": function () {
            /*:DOC += <input id="btn" type="button" value="0" style="position: absolute; left: 100px; top: 100px;" /> */

            // private method test not exposed
            if(typeof this.base.getEventPosition === "undefined") {
                jstestdriver.console.log("browserBaseService", "No access to private method getEventPosition");
                expectAsserts(0);
                return;
            }

            expectAsserts(20);
            assertFunction("this.base.getEventPosition must be a function", this.base.getEventPosition);

            var pos = this.base.getEventPosition();
            assertObject("Result of getEventPosition must be an object", pos);
            assertNumber("Result object of getEventPosition has numeric property 'x'", pos.x);
            assertNumber("Result object of getEventPosition has numeric property 'y'", pos.y);
            assertTrue("x property of getEventPosition result is >= 0", pos.x >= 0);
            assertTrue("y property of getEventPosition result is >= 0", pos.y >= 0);

            var fakeEvent = { pageX: 128, pageY: 64 };
            pos = this.base.getEventPosition(fakeEvent);
            assertEquals("Position x for click expected to be same as event.pageX", 128, pos.x);
            assertEquals("Position y for click expected to be same as event.pageY", 64, pos.y);

            fakeEvent = {
                type: "touchstart",
                touches: [
                    { pageX: 20, pageY: 40 },
                    { pageX: 21, pageY: 41 }
                ],
                changedTouches: [
                    { pageX: 30, pageY: 50 },
                    { pageX: 31, pageY: 51 }
                ]
            };

            pos = this.base.getEventPosition(fakeEvent);
            assertEquals("Position x for touchstart must be same as event.touches[<lastElem>].pageX (multitouch case)", 21, pos.x);
            assertEquals("Position x for touchstart must be same as event.touches[<lastElem>].pageX (multitouch case)", 41, pos.y);

            fakeEvent.touches.pop();
            pos = this.base.getEventPosition(fakeEvent);
            assertEquals("Position x for touchstart must be same as event.touches[0].pageX (single touch case)", 20, pos.x);
            assertEquals("Position x for touchstart must be same as event.touches[0].pageX (single touch case)", 40, pos.y);

            fakeEvent.type = "touchend";
            pos = this.base.getEventPosition(fakeEvent);
            assertEquals("Position x for touchend must be same as event.touches[0].pageX (multitouch case)", 30, pos.x);
            assertEquals("Position y for touchend must be same as event.touches[0].pageY (multitouch case)", 50, pos.y);

            fakeEvent.changedTouches.shift();
            pos = this.base.getEventPosition(fakeEvent);
            assertEquals("Position x for touchend must be same as event.touches[0].pageX (single touch case)", 31, pos.x);
            assertEquals("Position y for touchend must be same as event.touches[0].pageY (single touch case)", 51, pos.y);

            //real browser click event (default position: 0, 0)
            fakeEvent = testHelper.createMouseEvent("click", document.getElementById("btn"), 101, 202);
            pos = this.base.getEventPosition(fakeEvent);
            assertEquals("Position x for click expected to be same as event.pageX (real event test)", 101, pos.x);
            assertEquals("Position y for click expected to be same as event.pageY (real event test)", 202, pos.y);


            fakeEvent = {
                clientX: 10,
                clientY: 20
            };
            pos = this.base.getEventPosition(fakeEvent);
            assertEquals("Position x for click expected to be same as event.clientX", 10, pos.x);
            assertEquals("Position y for click expected to be same as event.clientY", 20, pos.y);
        },


        "test browserBaseService.normalizeTarget": function () {

            /*:DOC += <input id="cb1" type="checkbox" value="1" /> */
            /*:DOC += <input id="cb2" type="checkbox" value="2" /> */
            /*:DOC += <input id="cb3" type="checkbox" value="3" /> */
            /*:DOC += <input id="cb4" type="checkbox" value="4" /> */
            /*:DOC += <input id="cb5" type="checkbox" value="5" /> */
            /*:DOC += <input id="cb6" type="checkbox" value="6" /> */
            /*:DOC += <input id="cb7" type="checkbox" value="7" /> */
            /*:DOC += <input id="cb8" type="checkbox" value="8" /> */
            /*:DOC += <input id="btn" type="button" value="0" /> */


             // private method test not exposed
            if(!this.base || typeof this.base.normalizeTarget === "undefined") {
                jstestdriver.console.log("browserBaseService", "No access to private method normalizeTarget");
                expectAsserts(0);
                return;
            }

            expectAsserts(8);
            assertFunction(this.base.normalizeTarget);

            var target = this.base.normalizeTarget(null);
            assertNull(null, target);

            //event.srcElement
            var fakeEvent = {
                type: "click",
                srcElement: document.getElementById("cb1")
            };

            target = this.base.normalizeTarget(fakeEvent);
            assertEquals(1, target.value);

            //event.target
            delete fakeEvent.srcElement;
            fakeEvent.target = document.getElementById("cb2");

            target = this.base.normalizeTarget(fakeEvent);
            assertEquals(2, target.value);

            //touchstart
            delete fakeEvent.originalTarget;
            fakeEvent.type = "touchstart";
            fakeEvent.touches = [
                    { target: document.getElementById("cb5") },
                    { target: document.getElementById("cb6") }
            ];
            fakeEvent.changedTouches = [
                    { target: document.getElementById("cb7") },
                    { target: document.getElementById("cb8") }
            ];

            target = this.base.normalizeTarget(fakeEvent);
            assertEquals(6, target.value);

            //touchend
            fakeEvent.type = "touchend";

            target = this.base.normalizeTarget(fakeEvent);
            assertEquals(7, target.value);

            //real browser click event
            fakeEvent = testHelper.createMouseEvent("click", document.getElementById("btn"));

            target = this.base.normalizeTarget(fakeEvent);
            assertEquals(0, target.value);

            var option = document.createElement("option");

            fakeEvent = {
                target: option,
                srcElement: null
            };

            assertEquals(null, this.base.normalizeTarget(fakeEvent));
        },


        "test browserBaseService.getEventDetails": function () {
            // private method test not exposed
            if(typeof this.base.getEventDetails === "undefined") {
                jstestdriver.console.log("browserBaseService", "No access to private method getEventDetails");
                expectAsserts(0);
                return;
            }

            expectAsserts(6);
            assertFunction(this.base.getEventDetails);

            var e = this.base.getEventDetails(null);
            assertNull(null, e);

            //touchstart
            var fakeEvent = {
                type: "touchstart",
                touches: [
                    { identifier: 0 },
                    { identifier: 1 },
                    { identifier: 2 }
                ],
                changedTouches: [
                    { identifier: 10 },
                    { identifier: 11 },
                    { identifier: 12 }            ]
            };

            e = this.base.getEventDetails(fakeEvent);
            assertObject(e);
            assertEquals(2, e.identifier);

            //touchend
            fakeEvent.type = "touchend";

            e = this.base.getEventDetails(fakeEvent);
            assertObject(e);
            assertEquals(10, e.identifier);
        },

        "test browserBaseService.WebEvent.examinePosition": function () {
            var target = window.document.activeElement;
            var evt = testHelper.createMouseEvent("click", document.body, 10, 30);
            var position = this.base.ElementData.prototype.examinePosition(evt, target);
            expectAsserts(2);
            assertTrue("x position clicked on test element: " + position.x, position.x >= 0);
            assertTrue("y position clicked on test element: " + position.y, position.y >= 0);
        },

        "test browserBaseService.ElementData.examineID": function () {
            /*:DOC += <div></div><div><p><input /></p></div> */
            /*:DOC += <div><p><input id="myid" name="testname" /></p></div> */
            /*:DOC += <div id="testXPathID"><p><input customid="myid" name="testname1" /></p></div> */
            /*:DOC += <iframe></iframe> */

            var base = this.base,
                resultID,
                resultAttr,
                resultXPath,
                div,
                inputPath,
                btnPath;

            this.elemID = document.getElementById('myid');
            this.attrID = (document.getElementsByName('testname1'))[0];

            div = document.getElementById("testXPathID");

            this.xpathID = document.createElement('input');
            this.xpathID.setAttribute("name", "testname2");

            div.appendChild(this.xpathID);

            resultID = base.ElementData.prototype.examineID(this.elemID);
            resultAttr = base.ElementData.prototype.examineID(this.attrID);
            resultXPath = base.ElementData.prototype.examineID(this.xpathID);

            assertObject(resultID);
            assertSame("myid", resultID.id);
            assertSame("testname", resultID.name);
            assertSame(-1, resultID.idType);
            assertSame('[["myid"]]', resultID.xPath);

            assertObject(resultAttr);
            assertSame("customid=myid", resultAttr.id);
            assertSame(-3, resultAttr.idType);

            assertObject(resultXPath);
            assertSame("[[\"testXPathID\"],[\"input\",0]]", resultXPath.id);
            assertSame(-2, resultXPath.idType);

            inputPath = base.ElementData.prototype.examineID(document.getElementsByTagName("p")[0]);
            assertSame("[[\"html\",0],[\"body\",0],[\"div\",1]]", inputPath.id);
        },


        "test ElementData.prototype.examineState": function() {
            /*:DOC div = <div>This is div</div> */
            /*:DOC link = <a id="testlink" href="#">Link</a> */
            /*:DOC select = <select><option value="1">option1</option><option value="2" selected="true">option2</option></select> */
            /*:DOC input = <input type="text" name="inputname" value="inputvalue" /> */
            /*:DOC inputrange = <input type="range" name="points" min="1" max="10" value="5"> */
            /*:DOC textarea = <textarea name="textareaname">This is textarea</textarea> */

            var values,
                ElementData = this.base.ElementData;

            assertFunction("ElementData.prototype.examineState is a function", ElementData.prototype.examineState);

            values = ElementData.prototype.examineState(this.div);
            assertNull("result of examineState for div element shuld be null", values);

            values = ElementData.prototype.examineState(this.link);
            assertObject("examineState for 'a' tag should return an object", values);
            assertSame("result of examineState for 'a' tag should contain href", this.link.href, values.href);
            assertSame("result of examineState for 'a' tag should contain innerText", "Link", values.innerText);

            values = ElementData.prototype.examineState(this.select);
            assertSame("2", values.value);
            assertSame("option2", values.text);
            assertSame(1, values.index);

            values = ElementData.prototype.examineState(this.input);
            assertSame("inputvalue", values.value);

            values = ElementData.prototype.examineState(this.inputrange);
            assertSame("5", values.value);
            if(typeof values.maxValue !== "undefined") {
                assertSame("10", values.maxValue);
            }

            values = ElementData.prototype.examineState(this.textarea);
            assertSame("This is textarea", values.value);

            //TODO complete for input, textarea and button
        },


        "testGetElementType": function () {
            /*:DOC textarea = <textarea>This is textarea</textarea> */
            /*:DOC input = <input type="text" name="" /> */
            /*:DOC select = <select><option value="1">option</option></select> */

            var value;

            // Check if private method exposed
            if (typeof this.base.getElementType === "undefined") {
                jstestdriver.console.log("browserBaseService", "No access to private method getElementType");
                return;
            }

            assertFunction(this.base.getElementType);

            value = this.base.getElementType(this.textarea);
            assertEquals("subType for textarea element", "textarea", value.subType);
            assertEquals("type for textarea element", "textarea", value.type);

            value = this.base.getElementType(this.input);
            assertEquals("subType for text input element", "text", value.subType);
            assertEquals("type for textarea element", "input", value.type);

            value = this.base.getElementType(this.select);
            assertEquals("subType for select element", "select-one", value.subType);
            assertEquals("type for select element", "select", value.type);
        },
        
        "testGetEventType": function () {
            /*:DOC textarea = <textarea>This is textarea</textarea> */
            /*:DOC input = <input type="text" name="" /> */
            /*:DOC select = <select><option value="1">option</option></select> */

            var value;

            // Check if private method exposed
            if (typeof this.base.getEventType === "undefined") {
                jstestdriver.console.log("browserBaseService", "No access to private method getEventType");
                return;
            }

            assertFunction(this.base.getEventType);

            // UIC events don't have a subType and should be always null.
            value = this.base.getEventType({ type: "change" }, this.textarea);
            assertEquals("subType for change on textarea element", null, value.subType);
            assertEquals("type for change on textarea element", "change", value.type);
            
            value = this.base.getEventType({ type: "click" }, this.textarea);
            assertEquals("subType for click on textarea element", null, value.subType);
            assertEquals("type for click on textarea element", "click", value.type);

            value = this.base.getEventType({ type: "focusin" }, this.textarea);
            assertEquals("subType for focusin on textarea element", null, value.subType);
            assertEquals("type for focusin on textarea element", "focus", value.type);

            value = this.base.getEventType({ type: "focusout" }, this.textarea);
            assertEquals("subType for focusout on textarea element", null, value.subType);
            assertEquals("type for focusout on textarea element", "blur", value.type);
            
            value = this.base.getEventType({ type: "change" }, this.input);
            assertEquals("subType for change on text input element", null, value.subType);
            assertEquals("type for change on input element", "change", value.type);

            value = this.base.getEventType({ type: "change" }, this.select);
            assertEquals("subType for change on select element", null, value.subType);
            assertEquals("type for change on select element", "change", value.type);
        },

        "test initCustomEventList": function () {
            var list,
                stubContext;

            // Check if private method exposed
            if (typeof this.base.initCustomEventList === "undefined") {
                jstestdriver.console.log("browserBaseService", "No access to private method initCustomEventList");
                return;
            }

            expectAsserts(5);
            assertEquals("initCustomEventList()", {}, this.base.initCustomEventList());
            assertEquals("initCustomEventList()", {}, this.base.initCustomEventList(null));
            assertEquals('initCustomEventList({foo: "bar"})', {foo: "bar"}, this.base.initCustomEventList({foo: "bar"}));

            stubContext = getStubContext();
            stubContext.getCoreConfig = function () {
                return {
                    modules: {
                        usability: {
                            enabled: false,
                            events: [
                                { name: "click", recurseFrames: true },
                                { name: "mousemove", recurseFrames: true },
                                { name: "mouseout", recurseFrames: true }
                            ]
                        },
                        performance: {
                            events: [
                                { name: "load", target: window },
                                { name: "unload", target: window }
                            ]
                        },
                        replay: {
                            events: [
                                { name: "change", recurseFrames: true },
                                { name: "click", recurseFrames: true },
                                { name: "hashchange", target: window },
                                { name: "focus", target: "input, select, textarea, button", recurseFrames: true },
                                { name: "blur", target: "input, select, textarea, button", recurseFrames: true },
                                { name: "load", target: window},
                                { name: "unload", target: window},
                                { name: "resize", target: window},
                                { name: "scroll", target: window},
                                // Processed
                                { name: "Login", state: "detail" },
                                // Ignored
                                { name: "Logout", states: "details" },
                                { name: "orientationchange", target: window},
                                { name: "touchend" },
                                { name: "touchstart" }
                            ]
                        }
                    }
                };
            };
            this.base = DCX.getService('browserBase', stubContext);
            list = this.base.initCustomEventList(list);
            assertEquals('initCustomEventList(list) with custom event Login - 1st call', {Login: "detail"}, list);
            list = this.base.initCustomEventList(list);
            assertEquals('initCustomEventList(list) with custom event Login - 2nd call', {Login: "detail"}, list);
        },

        "test getCustomState": function () {
            var event,
                stubContext;

            // Check if private method exposed
            if (typeof this.base.getCustomState !== "function") {
                jstestdriver.console.log("browserBaseService", "No access to private method getCustomState");
                return;
            }

            expectAsserts(4);
            stubContext = getStubContext();
            stubContext.getCoreConfig = function () {
                return {
                    modules: {
                        usability: {
                            enabled: false,
                            events: [
                                { name: "click", recurseFrames: true },
                                { name: "mousemove", recurseFrames: true },
                                { name: "mouseout", recurseFrames: true }
                            ]
                        },
                        performance: {
                            events: [
                                { name: "load", target: window },
                                { name: "unload", target: window }
                            ]
                        },
                        replay: {
                            events: [
                                { name: "change", recurseFrames: true },
                                { name: "click", recurseFrames: true },
                                { name: "hashchange", target: window },
                                { name: "focus", target: "input, select, textarea, button", recurseFrames: true },
                                { name: "blur", target: "input, select, textarea, button", recurseFrames: true },
                                { name: "load", target: window},
                                { name: "unload", target: window},
                                { name: "resize", target: window},
                                { name: "scroll", target: window},
                                // Custom event
                                { name: "Login", state: "detail" },
                                { name: "Logout", state: "details" },
                                // Normal (non-custom) event
                                { name: "orientationchange", target: window},
                                { name: "touchend" },
                                { name: "touchstart" }
                            ]
                        }
                    }
                };
            };
            this.base = DCX.getService('browserBase', stubContext);
            // Test 1: Custom event "Login" with state configured as "detail"
            event = {
                type: "Login",
                detail: {
                    foo: "bar"
                }
            };
            assertEquals('1. getCustomState(event) with custom event', event.detail, this.base.getCustomState(event));
            // Test 2: Custom event "Logout" with state configured as "details"
            event = {
                type: "Logout",
                details: {
                    xyz: "abc"
                }
            };
            assertEquals('2. getCustomState(event) with custom event', event.details, this.base.getCustomState(event));
            // Test 3: Custom event "Login" with state configured as "detail"
            event = {
                type: "Login",
                details: {
                    xyz: "abc"
                }
            };
            assertEquals('3. getCustomState(event) with custom event', null, this.base.getCustomState(event));
            // Test 4: Normal event "change" with no state configuration
            event = {
                type: "change",
                details: {
                    xyz: "abc"
                }
            };
            assertEquals('4. getCustomState(event) with normal event "change"', null, this.base.getCustomState(event));
        },
        
        "test DCX.processDOMEvent should call core._publishEvent": function() {
            var event = {};
            this.base.processDOMEvent(event);

            expectAsserts(3);
            assert(_publishEvent.called);
            assertTrue(_publishEvent.args[0] instanceof this.base.WebEvent);
            assertSame(event, _publishEvent.args[0].nativeEvent);
        },

        "test blacklist with strings and objects": function () {
            // private method test not exposed
            if(typeof this.base.checkId === "undefined") {
                jstestdriver.console.log("browserBaseService", "No access to private method checkId");
                expectAsserts(0);
                return;
            }
            assertTrue(this.base.checkId({ id: "nonblacklisted" }));
            assertFalse(this.base.checkId({ id: "blacklistednode1" }));
            assertFalse(this.base.checkId({ id: "blacklistednode2" }));
            assertTrue(this.base.checkId({ id: "blacklistednode3" }));
            assertFalse(this.base.checkId({ id: "blacklistednode4" }));
            assertFalse(this.base.checkId({ id: "blacklistednode5" }));
            assertFalse(this.base.checkId({ id: "blacklistednode6" }));
            assertFalse(this.base.checkId({ id: "blacklistednode7" }));
            assertFalse(this.base.checkId({ id: "blacklistednode8" }));
        },

        "test getBoundingClientRectNormalized": function() {
            /*:DOC += <div id="testdiv" style="position:absolute; left:20px; top: 20px; width: 20px; height: 15px;"> </div> */

            // private method test not exposed
            if(typeof this.base.getBoundingClientRectNormalized === "undefined") {
                jstestdriver.console.log("browserBaseService", "No access to private method getBoundingClientRectNormalized");
                expectAsserts(0);
                return;
            }

            expectAsserts(3);
            assertFunction(this.base.getBoundingClientRectNormalized);
            assertObject(this.base.getBoundingClientRectNormalized({}));
            assertEquals({ x: 0, y: 0, width: 0, height: 0 }, this.base.getBoundingClientRectNormalized(window));
            // TODO: Fix this test
            //assertEquals(this.base.getBoundingClientRectNormalized(document.getElementById("testdiv")), { x: 20, y: 20, width: 20, height: 15 });
        },


        "test normalizeEvent": function() {
            var e;

            // private method test not exposed
            if(typeof this.base.normalizeEvent === "undefined") {
                jstestdriver.console.log("browserBaseService", "No access to private method normalizeEvent");
                expectAsserts(0);
                return;
            }

            e = this.base.normalizeEvent({
                originalEvent: {},
                isDefaultPrevented: true
            });

            e.preventDefault();
            e.stopPropagation();
        },

        "test getEventDetails": function() {
            // private method test not exposed
            if(typeof this.base.getEventDetails === "undefined") {
                jstestdriver.console.log("browserBaseService", "No access to private method getEventDetails");
                expectAsserts(0);
                return;
            }

            /* TODO: Needs better implementation and assertions. */
            this.base.getEventDetails({
                type: "touchstart",
                originalEvent: {},
                isDefaultPrevented: true
            });
        },

        "test getDocScrollPosition": function () {
            /*:DOC += <div><input type="button" value="Search" style="height:5000px; width:5000px" /></div> */
            
            if (typeof this.base.getDocScrollPosition !== "function") {
                return;
            }

            var scrollPos;
            expectAsserts(5);

            function fixScrollPos(left, top) {
                if (Math.abs(scrollPos.left - left) <= 1) {  scrollPos.left = left; }
                if (Math.abs(scrollPos.top - top) <= 1) {  scrollPos.top = top; }
            }
            window.scroll(0, 0);
            scrollPos = this.base.getDocScrollPosition();
            fixScrollPos(0, 0);
            assertEquals("Test 1 - Scroll to: (0, 0)", {left: 0, top: 0}, scrollPos);

            scrollPos = this.base.getDocScrollPosition(null);
            fixScrollPos(0, 0);
            assertEquals("Test 2 - Scroll to: (0, 0)", {left: 0, top: 0}, scrollPos);

            window.scroll(99, 99);
            scrollPos = this.base.getDocScrollPosition();
            fixScrollPos(99, 99);
            assertEquals("Test 3 - Scroll to: (50, 50)", {left: 99, top: 99}, scrollPos);

            window.scroll(175, 75);
            scrollPos = this.base.getDocScrollPosition();
            fixScrollPos(175, 75);
            assertEquals("Test 4 - Scroll to: (175, 75)", {left: 175, top: 75}, scrollPos);

            window.scroll(0, 0);
            scrollPos = this.base.getDocScrollPosition();
            fixScrollPos(0, 0);
            assertEquals("Test 5 - Scroll to: (0, 0)", {left: 0, top: 0}, scrollPos);
        }


        /*
        @TODO:
        - test correct ajaxResponse when calling ajax.oncomplete handler (responseHeaders, object structure)
        - test correct WebEvent interface when event handlers are triggered
        - complete integration with real DOM elements
        */

    });


    TestCase("browserService iframe", {  
        setUp: function () {
            this.service = DCX.getService("browser", getStubContext(true));
            this.base = DCX.getService('browserBase', getStubContext(true));
        },


        tearDown: function() {
            this.service.destroy();
            this.base.destroy();
        },


        "test browserBaseService.ElementData.examineID": function () {
            /*:DOC += <iframe></iframe> */

            var base = this.base,
                btnPath,
                iframe = document.getElementsByTagName("iframe")[0],
                doc = iframe.contentWindow.document,
                iframecontent = '<html><body><div><input id="input" type="button" value="test"/></div></body></html>',
                btn;

            doc.open();
            doc.write(iframecontent);
            doc.close();

            btn = doc.getElementById("btn");
            btnPath = base.ElementData.prototype.examineID(doc.getElementsByTagName("input")[0]);

            assertSame("[[\"html\",0],[\"body\",0],[\"iframe\",0],[\"input\"]]", btnPath.xPath);
        }
    });
    

    TestCase("browserService getBoundingClientRectNormalized", {     

        setUp: function () {
            if(document.body.getBoundingClientRect) {
                document.body.oldGetBoundingClientRect = document.body.getBoundingClientRect;
            }

            this.service = DCX.getService("browser", getStubContext());
            this.base = DCX.getService('browserBase', getStubContext());
        },


        tearDown: function() {
            this.service.destroy();
            this.base.destroy();
            if(document.body.oldGetBoundingClientRect) {
                document.body.getBoundingClientRect = document.body.oldGetBoundingClientRect;
            }
        },

        "test getBoundingClientRectNormalized exception": function() {
            // private method test not exposed
            if(typeof this.base.getBoundingClientRectNormalized === "undefined") {
                jstestdriver.console.log("browserBaseService", "No access to private method getBoundingClientRectNormalized");
                expectAsserts(0);
                return;
            }

            document.body.getBoundingClientRect = function() {  
                throw "Exception";            
            };

            this.base.getBoundingClientRectNormalized(document.body);
        },

        "test IE exception": function() {
            // private method test not exposed
            if(typeof this.base.getZoomValue === "undefined") {
                jstestdriver.console.log("browserBaseService", "No access to private method getBoundingClientRectNormalized");
                expectAsserts(0);
                return;
            }

            document.body.getBoundingClientRect = function() { 
                throw "Exception";
            };

            this.base.getZoomValue();
        }
    });

} ());