/*
 *  **************************************************************************
 *  Licensed Materials - Property of HCL
 *  (c) Copyright HCL Technologies Ltd.  2020. All Rights Reserved.
 *  US Government Users Restricted Rights - Use, duplication or disclosure
 *  restricted by GSA ADP Schedule Contract with HCL Technologies.
 *  **************************************************************************
 */


TestCase("messageService", {
    getStubContext: function () {
        var browserServiceMockup = {
                queryAll: function(query) {
                    return document.getElementsByTagName(query); 
                }
            },
            browserBaseServiceMockup = {
                ElementData: {
                    prototype: {
                        examineID: function() {
                            return {
                                id: "test",
                                idType: -1,
                                xPath: "",
                                name: ""
                            };
                        }
                    }
                },
                getNormalizedOrientation: function () {
                    return 0;
                },
                getNodeFromID: function () {
                  return document;
                }
            };

        DCX.utils.browserBaseService = browserBaseServiceMockup;
        DCX.utils.browserService = browserServiceMockup;

        return {
            getService: function (which) {
                switch (which) {
                case "config":
                    return {
                        getServiceConfig: function () {
                            return {
                                privacy: [
                                    {
                                        targets: [
                                            { id: "myid", idType: "-1" },
                                            { id: "cust=myid", idType: "-3" },
                                            { id: "[[\"HTML\",0],[\"BODY\",0],[\"SELECT\",0]]", idType: -2 }
                                        ],
                                        maskType: 1
                                    },
                                    {
                                        targets: [
                                            // Previously used targets being reused. Their previous maskType's should apply.
                                            { id: "myid", idType: "-1" },
                                            { id: "[[\"HTML\",0],[\"BODY\",0],[\"SELECT\",0]]", idType: -2 },
                                            // Unique targets for this maskType
                                            { id: "myid1", idType: "-1" },
                                            { id: "cust=myid1", idType: -3 },
                                            { id: "[[\"HTML\",0],[\"BODY\",0],[\"INPUT\",0]]", idType: "-2" }
                                        ],
                                        maskType: 2
                                    },
                                    {
                                        targets: [
                                            // Previously used targets being reused. Their previous maskType's should apply.
                                            { id: "myid", idType: -1 },
                                            { id: "myid1", idType: -1 },
                                            { id: "[[\"HTML\",0],[\"BODY\",0],[\"SELECT\",0]]", idType: "-2" },
                                            { id: "[[\"HTML\",0],[\"BODY\",0],[\"INPUT\",0]]", idType: -2 },
                                            // Unique targets for this maskType
                                            { id: "myid2", idType: -1 },
                                            { id: "cust=myid2", idType: -3 },
                                            { id: "[[\"HTML\",0],[\"BODY\",0],[\"TEXTAREA\",0]]", idType: "-2" }
                                        ],
                                        maskType: 3
                                    }
                                ],
                                privacyPatterns: [
                                    {
                                        pattern: { regex: "\\d{3}-\\d{2}-\\d{4}(\\s|\\.|<|$)", flags: "" },
                                        replacement: function (result) {
                                            var x = result.split("-");
                                            return "XXX-XX-" + x[2];
                                        }
                                    },
                                    {
                                        pattern: { regex: "Hello" },
                                        replacement: "FOO"
                                    },
                                    {
                                        pattern: { regex: "World" },
                                        replacement: "BAR"
                                    }
                                ]
                            };
                        },
                        subscribe: function() {},
                        unsubscribe: function() {}
                    };
                    break;
                case "browser":
                    return browserServiceMockup;
                    break;
                case "browserBase":
                    return browserBaseServiceMockup;
                    break;
                default:
                    fail("Illegal service request: " + which);
                }
            },
            utils: DCX.utils,
            getPageId: function () {
                return "dummy page id";
            },
            normalizeUrl: function(url) {
               return url;
            }
        };
    },


    setUp: function () {
        this.service = DCX.getService("message", this.getStubContext());

        this.fakeEvent = {
            type: 0
        };
    },

    tearDown: function() {
        this.service.destroy();
    },


    "test second init": function() {
        this.service.init();
    },


    "test updateConfig": function() {
        if(typeof this.service.updateConfig === "undefined") {
            jstestdriver.console.log("serializerService", "No access to private method updateConfig");
            expectAsserts(0);
            return;
        }

        this.service.updateConfig();
    },


    "test verify service interface": function () {
        expectAsserts(6);
        assertFunction(this.service.createMessage);
        assertFunction(this.service.wrapMessages);
        assertFunction(this.service.applyPrivacyToMessage);
        assertFunction(this.service.applyPrivacyToNode);
        assertFunction(this.service.applyPrivacyToTarget);
        assertFunction(this.service.applyPrivacyPatterns);
    },


    "test private method maskStr()": function () {
        var service = this.service,
            mask1 = {
                maskType: 1
            },
            mask2 = {
                maskType: 2
            },
            mask3 = {
                maskType: 3
            },
            mask4 = {
                maskType: 4,
                maskFunction: function (x) {
                    return ("FOO" + x);
                }
            };

        if (!service.maskStr) {
            // NON DEBUG build
            jstestdriver.console.log("Skipping test of private method maskStr() in non-debug build.");
            return;
        }

        expectAsserts(13);
        assertFunction("maskStr()", service.maskStr);
        assertSame('maskStr(undefined, "")', "", service.maskStr(undefined, ""));
        assertSame('maskStr({}, "")', "", service.maskStr({}, ""));

        assertSame('maskStr(mask1, "")', "", service.maskStr(mask1, ""));
        assertSame('maskStr(mask2, "")', "", service.maskStr(mask2, ""));
        assertSame('maskStr(mask3, "")', "", service.maskStr(mask3, ""));
        assertSame('maskStr(mask4, "")', "FOO", service.maskStr(mask4, ""));

        assertSame('maskStr(undefined, "HelloWorld123$%#")', "XXXXX", service.maskStr(undefined, "HelloWorld123$%#"));
        assertSame('maskStr({}, "HelloWorld123$%#")', "XXXXX", service.maskStr({}, "HelloWorld123$%#"));

        assertSame('maskStr(mask1, "HelloWorld123$%#")', "", service.maskStr(mask1, "HelloWorld123$%#"));
        assertSame('maskStr(mask2, "HelloWorld123$%#")', "XXXXX", service.maskStr(mask2, "HelloWorld123$%#"));
        assertSame('maskStr(mask3, "HelloWorld123$%#")', "XxxxxXxxxx999@@@", service.maskStr(mask3, "HelloWorld123$%#"));
        assertSame('maskStr(mask4, "HelloWorld123$%#")', "FOOHelloWorld123$%#", service.maskStr(mask4, "HelloWorld123$%#"));
    },

    "test internal method applyMask": function () {
        var service = this.service,
            maskEmpty = { maskType: 1 },
            maskBasic = { maskType: 2 },
            maskType = { maskType: 3 },
            maskCustom1 = {
                maskType: 4,
                maskFunction: function (value) {
                    return "masked1";
                }
            },
            maskCustom2 = {
                maskType: 4,
                maskFunction: "testHelper.privacyMask"
            },
            maskCustomInvalid = {
                maskType: 4,
                maskFunction: 123
            },
            maskInvalid = { maskType: 9 },
            maskUnspecified = {},
            message;

            function createMessage() {
                return {
                    target: {
                        prevState: {
                            value: "prevValue12."
                        },
                        currState: {
                            value: "|currValue?1.2"
                        }
                    }
                };
            }
        if (typeof service.applyMask === "function") {
            expectAsserts(16);

            // apply empty mask
            message = createMessage();
            service.applyMask(maskEmpty, message.target.prevState);
            assertEquals("Empty mask prevState", "", message.target.prevState.value);
            service.applyMask(maskEmpty, message.target.currState);
            assertEquals("Empty mask currState", "", message.target.currState.value);

            // apply basic mask
            message = createMessage();
            service.applyMask(maskBasic, message.target.prevState);
            assertEquals("Basic mask prevState", "XXXXX", message.target.prevState.value);
            service.applyMask(maskBasic, message.target.currState);
            assertEquals("Basic mask currState", "XXXXX", message.target.currState.value);

            // invalid mask
            message = createMessage();
            service.applyMask(maskInvalid, message.target.prevState);
            assertEquals("Invalid mask prevState", "XXXXX", message.target.prevState.value);
            service.applyMask(maskInvalid, message.target.currState);
            assertEquals("Invalid mask currState", "XXXXX", message.target.currState.value);

            message = createMessage();
            service.applyMask(maskCustomInvalid, message.target.prevState);
            assertEquals("Invalid custom mask prevState", "XXXXX", message.target.prevState.value);
            service.applyMask(maskCustomInvalid, message.target.currState);
            assertEquals("Invalid custom mask currState", "XXXXX", message.target.currState.value);

            // unspecified mask
            message = createMessage();
            service.applyMask(maskUnspecified, message.target.prevState);
            assertEquals("Unspecified mask prevState", "XXXXX", message.target.prevState.value);
            service.applyMask(maskUnspecified, message.target.currState);
            assertEquals("Unspecified mask currState", "XXXXX", message.target.currState.value);

            // apply type specific mask
            message = createMessage();
            service.applyMask(maskType, message.target.prevState);
            assertEquals("Type mask prevState", "xxxxXxxxx99@", message.target.prevState.value);
            service.applyMask(maskType, message.target.currState);
            assertEquals("Type mask currState", "@xxxxXxxxx@9@9", message.target.currState.value);

            // apply custom mask
            message = createMessage();
            service.applyMask(maskCustom1, message.target.prevState);
            assertEquals("Custom1 mask prevState", "masked1", message.target.prevState.value);
            service.applyMask(maskCustom1, message.target.currState);
            assertEquals("Custom1 mask currState", "masked1", message.target.currState.value);

            message = createMessage();
            service.applyMask(maskCustom2, message.target.prevState);
            assertEquals("Custom2 mask prevState", "X---X", message.target.prevState.value);
            service.applyMask(maskCustom2, message.target.currState);
            assertEquals("Custom2 mask currState", "X---X", message.target.currState.value);
        }
    },

    "test applyPrivacyToMessage": function () {
        var service = this. service,
            message1 = {
                irrelevant: "value",
                unrelated: {
                    test: 1
                }
            },
            message2 = {
                irrelevant: "value",
                unrelated: {
                    test: 1
                },
                target: {
                    id: "myid",
                    idType: -1,
                    prevState: {
                        value: "?val1$"
                    },
                    currState: {
                        value: "!!$1234"
                    }
                }
            },
            message3 = {
                irrelevant: "value",
                unrelated: {
                    test: 1
                },
                target: {
                    id: "myid2",
                    idType: -1,
                    prevState: {
                        value: "?val1$"
                    },
                    currState: {
                        value: "!!$1234"
                    }
                }
            },
            message4 = {
                irrelevant: "value",
                unrelated: {
                    test: 1
                },
                target: {
                    id: "cust=myid",
                    idType: -3,
                    prevState: {
                        value: "?val1$"
                    },
                    currState: {
                        value: "!!$1234"
                    }
                }
            },
            message5 = {
                irrelevant: "value",
                unrelated: {
                    test: 1
                },
                target: {
                    id: "[[\"HTML\",0],[\"BODY\",0],[\"INPUT\",0]]",
                    idType: -2,
                    prevState: {
                        value: "?val1$"
                    },
                    currState: {
                        value: "!!$1234"
                    }
                }
            };

        expectAsserts(9);
        assertSame("1", message1, service.applyPrivacyToMessage(message1));
        assertSame("2", "", service.applyPrivacyToMessage(message2).target.prevState.value);
        assertSame("3", "@xxx9@", service.applyPrivacyToMessage(message3).target.prevState.value);
        assertSame("4", "", service.applyPrivacyToMessage(message4).target.prevState.value);
        assertSame("5", "XXXXX", service.applyPrivacyToMessage(message5).target.prevState.value);

        assertSame("6", "", service.applyPrivacyToMessage(message2).target.currState.value);
        assertSame("7", "@@@9999", service.applyPrivacyToMessage(message3).target.currState.value);
        assertSame("8", "", service.applyPrivacyToMessage(message4).target.currState.value);
        assertSame("9", "XXXXX", service.applyPrivacyToMessage(message5).target.currState.value);
    },

    "test applyPrivacyPatterns": function () {
        var service = this.service;

        expectAsserts(6);
        assertSame("1", "", service.applyPrivacyPatterns());
        assertSame("2", "", service.applyPrivacyPatterns(""));
        assertSame("3", "Abracadabara", service.applyPrivacyPatterns("Abracadabara"));
        assertSame("4", "XXX-XX-1234", service.applyPrivacyPatterns("987-65-1234"));
        assertSame("5", "ABC-55-1234", service.applyPrivacyPatterns("ABC-55-1234"));
        assertSame("6", "FOOBAR!", service.applyPrivacyPatterns("HelloWorld!"));
    },

    "test maskElement": function () {
        /*:DOC += <input id="i1" type="text" value="123HelloWorld#$%"> */
        /*:DOC += <input id="i2" type="password" value="123HelloWorld#$%"> */
        /*:DOC += <input id="i3" type="checkbox" value="123HelloWorld#$%" checked> */
        /*:DOC += <select id="i4"><option>One</option><option selected>Two</option></select> */
        /*:DOC += <textarea id="i5">123HelloWorld#$%</textarea> */

        var service = this.service,
            i1 = document.getElementById("i1"),
            i2 = document.getElementById("i2"),
            i3 = document.getElementById("i3"),
            i4 = document.getElementById("i4"),
            i5 = document.getElementById("i5"),
            mask1 = {
                maskType: 1
            },
            mask2 = {
                maskType: 2
            },
            mask3 = {
                maskType: 3
            },
            mask4 = {
                maskType: 4,
                maskFunction: function (s) {
                    return ("FOO" + s);
                }
            };

        if (!service.maskElement) {
            return;
        }
        expectAsserts(60);
        assertFunction(service.maskElement);
        assertUndefined("maskElement()", service.maskElement());

        // Text input
        assertSame("i1.value", "123HelloWorld#$%", i1.value);
        service.maskElement(i1, mask4);
        assertSame("i1,mask4", "FOO123HelloWorld#$%", i1.value);
        service.maskElement(i1, mask3);
        assertSame("i1,mask3", "XXX999XxxxxXxxxx@@@", i1.value);
        service.maskElement(i1, mask2);
        assertSame("i1,mask3", "XXXXX", i1.value);
        service.maskElement(i1, mask1);
        assertSame("i1,mask1", "", i1.value);
        assertSame("i1.id", "i1", i1.id);
        assertSame("i1.type", "text", i1.type);

        // Password input
        assertSame("i2.value", "123HelloWorld#$%", i2.value);
        service.maskElement(i2, mask4);
        assertSame("i2,mask4", "FOO123HelloWorld#$%", i2.value);
        service.maskElement(i2, mask3);
        assertSame("i2,mask3", "XXX999XxxxxXxxxx@@@", i2.value);
        service.maskElement(i2, mask2);
        assertSame("i2,mask3", "XXXXX", i2.value);
        service.maskElement(i2, mask1);
        assertSame("i2,mask1", "", i2.value);
        assertSame("i2.id", "i2", i2.id);
        assertSame("i2.type", "password", i2.type);

        // Checkbox input
        assertSame("i3.value", "123HelloWorld#$%", i3.value);
        service.maskElement(i3, mask4);
        assertSame("i3,mask4", "FOO123HelloWorld#$%", i3.value);
        assertFalse("i3.checked,mask4", i3.hasAttribute("checked"));
        i3.setAttribute("checked", "");
        service.maskElement(i3, mask3);
        assertSame("i3,mask3", "XXX999XxxxxXxxxx@@@", i3.value);
        assertFalse("i3.checked,mask3", i3.hasAttribute("checked"));
        i3.setAttribute("checked", "");
        service.maskElement(i3, mask2);
        assertSame("i3,mask3", "XXXXX", i3.value);
        assertFalse("i3.checked,mask3", i3.hasAttribute("checked"));
        i3.setAttribute("checked", "");
        service.maskElement(i3, mask1);
        assertSame("i3,mask1", "", i3.value);
        assertFalse("i3.checked,mask1", i3.hasAttribute("checked"));
        assertSame("i3.id", "i3", i3.id);
        assertSame("i3.type", "checkbox", i3.type);

        // Select list input
        assertSame("i4.value", "Two", i4.value);
        assertSame("i4.selectedIndex", 1, i4.selectedIndex);
        assertTrue("i4.Two selected", i4.options[1].selected);
        service.maskElement(i4, mask4);
        assertSame("i4,mask4", "", i4.value);
        assertSame("i4.selectedIndex,mask4", -1, i4.selectedIndex);
        assertFalse("i4.Two not selected,mask4", i4.options[1].selected);
        i4.selectedIndex = 1;
        assertSame("i4.value", "Two", i4.value);
        assertTrue("i4.Two selected", i4.options[1].selected);
        service.maskElement(i4, mask3);
        assertSame("i4,mask3", "", i4.value);
        assertSame("i4.selectedIndex,mask3", -1, i4.selectedIndex);
        assertFalse("i4.Two not selected,mask3", i4.options[1].selected);
        i4.selectedIndex = 1;
        assertSame("i4.value", "Two", i4.value);
        assertTrue("i4.Two selected", i4.options[1].selected);
        service.maskElement(i4, mask2);
        assertSame("i4,mask2", "", i4.value);
        assertSame("i4.selectedIndex,mask2", -1, i4.selectedIndex);
        assertFalse("i4.Two not selected,mask2", i4.options[1].selected);
        i4.selectedIndex = 1;
        assertSame("i4.value", "Two", i4.value);
        assertTrue("i4.Two selected", i4.options[1].selected);
        service.maskElement(i4, mask1);
        assertSame("i4,mask1", "", i4.value);
        assertSame("i4.selectedIndex,mask1", -1, i4.selectedIndex);
        assertFalse("i4.Two not selected,mask1", i4.options[1].selected);
        assertSame("i4.id", "i4", i4.id);

        // Textarea input
        assertSame("i5.value", "123HelloWorld#$%", i5.value);
        assertSame("i5.textContent", "123HelloWorld#$%", i5.textContent);
        service.maskElement(i5, mask4);
        assertSame("i5,mask4", "FOO123HelloWorld#$%", i5.value);
        assertSame("i5 textContent,mask4", "FOO123HelloWorld#$%", i5.textContent);
        service.maskElement(i5, mask3);
        assertSame("i5,mask3", "XXX999XxxxxXxxxx@@@", i5.value);
        assertSame("i5 textContent,mask3", "XXX999XxxxxXxxxx@@@", i5.textContent);
        service.maskElement(i5, mask2);
        assertSame("i5,mask3", "XXXXX", i5.value);
        assertSame("i5 textContent,mask3", "XXXXX", i5.textContent);
        service.maskElement(i5, mask1);
        assertSame("i5,mask1", "", i5.value);
        assertSame("i5 textContent,mask1", "", i5.textContent);
        assertSame("i5.id", "i5", i5.id);
    },

    "test verify privacyMasks and masking functions": function () {
        var service = this.service;

        if (typeof service.privacyMasks === "object") {
            expectAsserts(7);
            assertFunction(service.privacyMasks.PVC_MASK_EMPTY);
            assertFunction(service.privacyMasks.PVC_MASK_BASIC);
            assertFunction(service.privacyMasks.PVC_MASK_TYPE);

            assertSame("", service.privacyMasks.PVC_MASK_EMPTY("testVal1"));
            assertSame("XXXXX", service.privacyMasks.PVC_MASK_BASIC("testVal1"));
            assertSame("@xxx@@", service.privacyMasks.PVC_MASK_TYPE("@val?%"));
            assertSame("xxxxXxx9", service.privacyMasks.PVC_MASK_TYPE("testVal1"));
        }
    },

    "test pass empty object should throw TypeError": function () {
        var service = this.service;

        expectAsserts(1);
        assertException(function () {
            service.createMessage({});
        }, "TypeError");
    },


    "test pass queueEvent should create message": function () {
        var message = null;

        message = this.service.createMessage(this.fakeEvent);

        expectAsserts(4);
        assertObject(message);
        assertSame("type", 0, message.type);
        assertNumber("offset", message.offset);
        assertUndefined("count should be undefined", message.count);
    },


    "test message.count should keep track of no. of events created": function () {
        expectAsserts(2);
        this.fakeEvent.type = 99;
        assertSame(1, this.service.createMessage(this.fakeEvent).count);
        assertSame(2, this.service.createMessage(this.fakeEvent).count);
    },


    "test wrapMessages": function() {
        var messages = ["message1", "message2"],
            wrappedMessages;

        expectAsserts(1);

        wrappedMessages = this.service.wrapMessages(messages);

        assertEquals(messages, wrappedMessages.sessions[0].messages);
    },


    "test optimize full dom capture messsage": function () {
        var message = null;
        var dcEvent1 = {
            type: 12,
            domCapture: {
                dcid: "123456",
                fullDOM: true,
                shadows: [ {
                    xpath: "path1",
                    root: "<html>content</html>"
                }]
            }
        };

        message = this.service.createMessage(dcEvent1);
        assertSame("shadow.root.value", "<html>content</html>", message.domCapture.shadows[0].root);

        var dcEvent2 = {
            type: 12,
            domCapture: {
                dcid: "234567",
                fullDOM: true,
                shadows: [ {
                    xpath: "path1",
                    root: "<html>content</html>"
                }, {
                    xpath: "path2",
                    root: "<html>other Content</html>"
                }]
            }
        }

        message = this.service.createMessage(dcEvent2);
        assertSame("shadow.root.cacheDCID", "123456", message.domCapture.shadows[0].cacheDCID);
        assertUndefined("shadow.root should be undefined", message.domCapture.shadows[0].root)
        assertSame("shadow.root.value", "<html>other Content</html>", message.domCapture.shadows[1].root);

    }

});
