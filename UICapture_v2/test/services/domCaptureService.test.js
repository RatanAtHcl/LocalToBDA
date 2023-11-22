/*
 *  **************************************************************************
 *  Licensed Materials - Property of HCL
 *  (c) Copyright HCL Technologies Ltd.  2020. All Rights Reserved.
 *  US Government Users Restricted Rights - Use, duplication or disclosure
 *  restricted by GSA ADP Schedule Contract with HCL Technologies.
 *  **************************************************************************
 */



(function () {

    function getStubContext(config) {
        config = config || {};
        config.services = config.services || {};
        return {
            getService: function(name) {
                switch(name) {
                    case "config":
                        return {
                            getServiceConfig: function (name) {
                                return config.services[name] || {}; 
                            },
                            getCoreConfig: function () {
                                return config.core || {};
                            },
                            subscribe: function() {},
                            unsubscribe: function() {}
                        };
                        break;
                    case "message":
                        return {
                            applyPrivacyToDocument: function (doc) {
                                return doc;
                            }
                        };
                        break;
                    case "browserBase":
                        return {};
                        break;
                    case "browser":
                        return {};
                        break;
                    default:
                        throw new Error("Unexpected service: "+name);
                        break;
                }
            },
            utils: DCX.utils,
            fail: function() {
                failCalled = true
            }
        };
    }

    var failCalled = false;

    TestCase("domCaptureService", {
        setUp: function () {
            this.service = DCX.getService("domCapture", getStubContext());
        },

        tearDown: function() {
            this.service.destroy();
        },

        "test second init": function() {
            this.service.init();
        },

        "test updateConfig": function() {
            if(typeof this.service.updateConfig === "undefined") {
                jstestdriver.console.log("domCaptureService", "TEST SKIPPED: No access to private method updateConfig");
                expectAsserts(0);
                return;
            }

            this.service.updateConfig();
        },

        "test verify service interface": function () {
            expectAsserts(3);
            assertFunction("init not defined", this.service.init);
            assertFunction("destroy not defined", this.service.destroy);
            assertFunction("captureDOM API not defined", this.service.captureDOM);
        },

        "test getUniqueID": function () {
            var i, j,
                idList,
                len;

            if (typeof this.service.getUniqueID !== "function") {
                jstestdriver.console.log("domCaptureService", "TEST SKIPPED: No access to private method getUniqueID");
                return;
            }
            expectAsserts((100*99)/2);
            for (i = 0, idList = []; i < 100; i += 1) {
                id = this.service.getUniqueID();
                for (j = i - 1; j >= 0; j -= 1) {
                    assert("id is not unique!", idList[j] !== id);
                }
                idList[i] = id;
            }
        },

        "test removeTags": function () {
            var i, x, y,
                testDiv;

            if (typeof this.service.removeTags !== "function") {
                jstestdriver.console.log("domCaptureService", "TEST SKIPPED: No access to private method removeTags");
                return;
            }
            
            // Build a test div fragment
            testDiv = document.createElement("div");
            assert("Couldn't create test div element.", !!testDiv);
            // Add three child script each inside a separate div element
            for (i = 0; i < 3; i++) {
                x = document.createElement("script");
                assert("Couldn't create test script element. Count=" + i, !!x);
                y = document.createElement("div");
                assert("Couldn't create test div element. Count=" + i, !!y);
                y.appendChild(x);
                testDiv.appendChild(y);
            }

            assertEquals("1. Test div doesn't contain correct number of script elements.", 3, testDiv.getElementsByTagName("script").length);
            assertEquals("1. Test div doesn't contain correct number of div elements.", 3, testDiv.getElementsByTagName("div").length);

            this.service.removeTags(testDiv);
            assertEquals("2. Test div doesn't contain correct number of script elements.", 3, testDiv.getElementsByTagName("script").length);
            assertEquals("2. Test div doesn't contain correct number of div elements.", 3, testDiv.getElementsByTagName("div").length);

            this.service.removeTags(testDiv, "input");
            assertEquals("3. Test div doesn't contain correct number of script elements.", 3, testDiv.getElementsByTagName("script").length);
            assertEquals("3. Test div doesn't contain correct number of div elements.", 3, testDiv.getElementsByTagName("div").length);

            this.service.removeTags(testDiv, "script");
            assertEquals("4. Test div doesn't contain correct number of script elements.", 0, testDiv.getElementsByTagName("script").length);
            assertEquals("4. Test div doesn't contain correct number of div elements.", 3, testDiv.getElementsByTagName("div").length);
        },

        "test getDoctypeAsString": function () {
            /*:DOC button = <input type="button" name="testButton" value="Press Me" /> */
            if (typeof this.service.getDoctypeAsString !== "function") {
                jstestdriver.console.log("domCaptureService", "No access to private method getDoctypeAsString.");
                return;
            }
            var dummyDocument = {
                    nodeType: 9
                };

            assertNull("getDoctypeAsString()", this.service.getDoctypeAsString());
            assertNull("getDoctypeAsString( {} )", this.service.getDoctypeAsString({}));
            assertNull("getDoctypeAsString(buttonElement)", this.service.getDoctypeAsString(this.button));
            
            if (typeof document.implementation === "object" && typeof document.implementation.createDocumentType === "function") {
                // Additional tests
                dummyDocument.doctype = document.implementation.createDocumentType("html", "foo", "bar");
                assertEquals("1. getDoctypeAsString(dummyDocument)", '<!DOCTYPE html PUBLIC "foo" "bar">', this.service.getDoctypeAsString(dummyDocument));

                dummyDocument.doctype = document.implementation.createDocumentType("html", "foobar", "");
                assertEquals("2. getDoctypeAsString(dummyDocument)", '<!DOCTYPE html PUBLIC "foobar">', this.service.getDoctypeAsString(dummyDocument));

                dummyDocument.doctype = document.implementation.createDocumentType("html", "", "foobar");
                assertEquals("3. getDoctypeAsString(dummyDocument)", '<!DOCTYPE html SYSTEM "foobar">', this.service.getDoctypeAsString(dummyDocument));
            } else {
                jstestdriver.console.log("domCaptureService", "Additional tests for getDoctypeAsString skipped since browser does not support DOMImplementation interface.");
            }
        },

        "test fixInputs": function () {
            var i,
                input,
                inputList,
                len,
                testDiv;

            if (typeof this.service.fixInputs !== "function") {
                jstestdriver.console.log("domCaptureService", "TEST SKIPPED: No access to private method fixInputs");
                return;
            }

            // Build a test div fragment
            testDiv = document.createElement("div");
            assert("Couldn't create test div element.", !!testDiv);
            if (!testDiv.hasAttribute) {
                jstestdriver.console.log("domCaptureService", "TEST SKIPPED: Element.hasAttribute not supported by browser.");
                return;
            }

            testDiv.innerHTML = '<input type="checkbox" name="c1" checked value="checked box" />' +
                                '<input type="checkbox" name="c2" value="unchecked box" />' +
                                '<input type="radio"    name="c3" checked value="red" />' +
                                '<input type="radio"    name="c3" value="blue" />' +
                                '<input type="text"     name="c4" value="abcd1234" />';

            assertEquals("1. Test div does not have the right number of input elements!", 5, testDiv.getElementsByTagName("input").length);
            this.service.fixInputs(testDiv);
            assertEquals("2. Test div does not have the right number of input elements!", 5, testDiv.getElementsByTagName("input").length);

            inputList = testDiv.getElementsByTagName("input");
            for (i = 0, len = inputList.length; i < len; i += 1) {
                input = inputList[i];
                switch (input.name) {
                case "c1":
                    assertTrue("checked attribute not set on checkbox c1.", input.hasAttribute("checked"));
                    break;
                case "c2":
                    assertFalse("checked attribute set on checkbox c2.", input.hasAttribute("checked"));
                    break;
                case "c3":
                    if (input.value === "red") {
                        assertTrue("checked attribute not set on radio c3 (red)", input.hasAttribute("checked"));
                    } else if (input.value === "blue") {
                        assertFalse("checked attribute set on radio c3 (blue)", input.hasAttribute("checked"));
                    } else {
                        fail("unexpected element named 'c3' in test!");
                    }
                    break;
                case "c4":
                    assertEquals("Text input value does not match", "abcd1234", input.getAttribute("value"));
                    break;
                default:
                    fail("unexpected element named: " + input.name);
                    break;
                }
            }
        },

        "test fixSelectLists": function () {
            /*:DOC += <div id="d1"><select><option value="1">o1</option><option value="2" selected>o2</option><option value="3">o3</option></select></div> */
            var sourceDiv,
                targetDiv,
                selectList;
            
            if (typeof this.service.fixSelectLists !== "function") {
                jstestdriver.console.log("domCaptureService", "TEST SKIPPED: No access to private method fixSelectLists");
                return;
            }
            
            this.service.fixSelectLists();
            this.service.fixSelectLists("dummy", "invalid");

            sourceDiv = document.getElementById("d1");
            assertTrue("Source div not found.", !!sourceDiv);
            targetDiv = sourceDiv.cloneNode(true);
            assertTrue("1. Target div could not be cloned from sourceDiv", !!targetDiv);

            this.service.fixSelectLists(sourceDiv, targetDiv);
            selectList = targetDiv.getElementsByTagName("select")[0];
            assertTrue("1. Select list missing in target div.", !!selectList);
            assertEquals("2. Incorrect selected index", 1, selectList.selectedIndex);
            
            selectList = sourceDiv.getElementsByTagName("select")[0];
            selectList.selectedIndex = 2;
            targetDiv = sourceDiv.cloneNode(true);
            assertTrue("2. Target div could not be cloned from sourceDiv", !!targetDiv);

            this.service.fixSelectLists(sourceDiv, targetDiv);
            selectList = targetDiv.getElementsByTagName("select")[0];
            assertTrue("2. Select list missing in target div.", !!selectList);
            assertEquals("2. Incorrect selected index", 2, selectList.selectedIndex);
        },
        
        "test getHTMLText": function () {
            /*:DOC += <div id="d1"><select><option value="1">o1</option><option value="2">o2</option><option selected="selected" value="3">o3</option></select></div> */
            var node,
                match = false,
                result = null;
            if (typeof this.service.getHTMLText !== "function") {
                jstestdriver.console.log("domCaptureService", "TEST SKIPPED: No access to private method getHTMLText");
                return;
            }

            expectAsserts(6);
            assertNull("getHTMLText()", this.service.getHTMLText());

            node = document.createComment("Test comment.");
            assertNotNull("Unable to create a comment node.", node);
            assertNull("getHTMLText(commentNode)", this.service.getHTMLText(node));

            node = document.getElementById("d1");
            assertNotNull("Could not get test div element.", node);
            
            result = DCX.utils.trim(this.service.getHTMLText(node).toLowerCase());
            if (DCX.utils.isLegacyIE) {
                match = (result === '<div id=d1><select><option value=1>o1</option><option value=2>o2</option><option selected value=3>o3</option></select></div>') ||
                    (result === '<div id=d1><select><option value=1>o1</option><option value=2>o2</option><option value=3 selected>o3</option></select></div>');
                // Legacy IE returns attribute values without quotes
                assertTrue("getHTMLText(divNode) - result: " + result, match);
            } else {
                assertEquals("getHTMLText(divNode)", '<div id="d1"><select><option value="1">o1</option><option value="2">o2</option><option selected="selected" value="3">o3</option></select></div>', result);
            }

            assertString("getHTMLText(documentNode)", this.service.getHTMLText(document));
        },
        
        "test isNodeValidForCapture": function () {
            /*:DOC += <div id="d1"><select><option value="1">o1</option><option value="2">o2</option><option value="3">o3</option></select></div> */
            var node;

            if (typeof this.service.isNodeValidForCapture !== "function") {
                jstestdriver.console.log("domCaptureService", "TEST SKIPPED: No access to private method isNodeValidForCapture");
                return;
            }

            assertFalse("isNodeValidForCapture()", this.service.isNodeValidForCapture());
            assertFalse("isNodeValidForCapture(null)", this.service.isNodeValidForCapture(null));
            assertFalse('isNodeValidForCapture("dummy")', this.service.isNodeValidForCapture("dummy"));

            node = document.createComment("Test comment.");
            assertNotNull("Unable to create a comment node.", node);
            assertFalse("isNodeValidForCapture(commentNode)", this.service.isNodeValidForCapture(node));

            node = document.getElementById("d1");
            assertNotNull("Could not get test div element.", node);
            assertTrue("isNodeValidForCapture(divNode)", this.service.isNodeValidForCapture(node));

            assertTrue("isNodeValidForCapture(documentNode)", this.service.isNodeValidForCapture(document));
        },

        "test getCapturedLength": function () {
            var captureObj1 = {
                    root: "",
                    frames: [
                        {
                            root: ""
                        },
                        {
                            root: ""
                        }
                    ]
                },
                captureObj2 = {
                    root: "0123456789"
                },
                captureObj3 = {
                    root: "0123456789",
                    frames: []
                },                
                testStr = "0123456789";
            
            if (typeof this.service.getCapturedLength !== "function") {
                jstestdriver.console.log("domCaptureService", "TEST SKIPPED: No access to private method getCapturedLength");
                return;
            }
            
            expectAsserts(7);
            assertEquals("getCapturedLength()", 0, this.service.getCapturedLength());
            assertEquals("getCapturedLength(null)", 0, this.service.getCapturedLength(null));
            assertEquals("getCapturedLength({})", 0, this.service.getCapturedLength({}));
            assertEquals("1. getCapturedLength(captureObj1)", 0, this.service.getCapturedLength(captureObj1));
            
            captureObj1.root = testStr;
            captureObj1.frames[1].root = testStr;
            assertEquals("2. getCapturedLength(captureObj1)", 20, this.service.getCapturedLength(captureObj1));
            
            assertEquals("getCapturedLength(captureObj2)", 10, this.service.getCapturedLength(captureObj2));
            assertEquals("getCapturedLength(captureObj3)", 10, this.service.getCapturedLength(captureObj3));
        },

        "test dupNode": function () {
            /*:DOC += <div id="d1"><select><option value="1">o1</option><option value="2">o2</option><option value="3">o3</option></select></div> */
            var node,
                dupNode;

            if (typeof this.service.dupNode !== "function") {
                jstestdriver.console.log("domCaptureService", "TEST SKIPPED: No access to private method dupNode");
                return;
            }            

            assertNull("dupNode()", this.service.dupNode());
            assertNull("dupNode(null)", this.service.dupNode());
            assertNull('dupNode("dummy")', this.service.dupNode("dummy"));

            node = document.createComment("Test comment.");
            assertNotNull("Unable to create a comment node.", node);
            assertNull("dupNode(commentNode)", this.service.dupNode(node));

            node = document.getElementById("d1");
            assertNotNull("Could not get test div element.", node);
            dupNode = this.service.dupNode(node);
            assertNotNull("dupNode(div)", dupNode);
            assertEquals("dupNode.id", node.id, dupNode.id);
        }
    });
}());