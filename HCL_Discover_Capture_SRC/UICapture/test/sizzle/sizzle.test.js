/*
 *  **************************************************************************
 *  Licensed Materials - Property of HCL
 *  (c) Copyright HCL Technologies Ltd.  2020. All Rights Reserved.
 *  US Government Users Restricted Rights - Use, duplication or disclosure
 *  restricted by GSA ADP Schedule Contract with HCL Technologies.
 *  **************************************************************************
 */


TestCase("DCX integrationtests", {

    xhrSizzle: null,

    getXHRObject: (function () {
        if (typeof window.XMLHttpRequest !== 'undefined') {
            return function () {
                return new XMLHttpRequest();

            };
        } else {
            return function () {
                return new ActiveXObject("Microsoft.XMLHTTP");
            };
        }
    }()),

    setUp: function () {
        /*:DOC testDOM =    <div id="target">
                                <div id="testInput">
                                    <input name="input1" id="input1">
                                    <input type="radio" name="input2" id="input2">
                                </div>
                                <div id="testSelect">
                                    <select id="select1" name="select1">
                                        <option>test</option>
                                        <option>test</option>
                                    </select>
                                    <select id="select2" name="select2">
                                        <option>test</option>
                                        <option>test</option>
                                    </select>
                                </div>
                                <div id="testTextarea">
                                    <textarea id="textarea1" name="textarea1"></textarea>
                                </div>
                                <div id="testContenteditable">
                                    <div id="contenteditable1" contenteditable></div>
                                </div>
                            </div>*/
    },

    tearDown: function () {},


    "test verify Sizzle API": function () {
        expectAsserts(1);
        assertFunction(window.Sizzle);
    },

    "test verify that Sizzle uses AMD pattern when loaded via xhr": function () {
        var xhr = this.getXHRObject(),
            self = this;

        expectAsserts(2);

        (function () {
            function define(definition) {
                assertFunction(definition);
                self.xhrSizzle = definition();
                assertFunction(self.xhrSizzle);
            }
            define.amd = true;
            xhr.open("GET", "/test/test/services/fixtures/sizzle.js", false);
            xhr.send(null);
            eval(xhr.responseText);
        }());
    },


    "test that Sizzle works with our selectors": function () {
        var result = null;
        result = window.Sizzle("input, select, textarea, [contenteditable]", this.testDOM);

        assertSame(6, result.length);
    }

});