/*
 *  **************************************************************************
 *  Licensed Materials - Property of HCL
 *  (c) Copyright HCL Technologies Ltd.  2020. All Rights Reserved.
 *  US Government Users Restricted Rights - Use, duplication or disclosure
 *  restricted by GSA ADP Schedule Contract with HCL Technologies.
 *  **************************************************************************
 */


TestCase("utils", {
    setUp: function () {
        DCX._getLocalTop = function() { return window.window; };
    },

    tearDown: function () {
    },

    "test core.utils.getSerialNumber": function () {
        var i;
        for (i = 1; i <= 9999; i++) {
            assertEquals("getSerialNumber", i, DCX.utils.getSerialNumber());
        }
    },

    "test core.utils.getRandomString": function () {
        var i,
            dataSet1 = "AAAAAAAAAA";
            dataSet2 = "5";

        assertEquals("getRandomString()", "", DCX.utils.getRandomString());
        assertEquals("getRandomString(0)", "", DCX.utils.getRandomString(0));
        assertEquals("getRandomString(-1)", "", DCX.utils.getRandomString(-1));
        assertEquals('getRandomString("foo")', "", DCX.utils.getRandomString("foo"));
        
        assertEquals('getRandomString(1, "AAAAAAAAAA")', "A", DCX.utils.getRandomString(1, dataSet1));
        assertEquals('getRandomString(10, "AAAAAAAAAA")', "AAAAAAAAAA", DCX.utils.getRandomString(10, dataSet1));
        assertEquals('getRandomString(3, "AAAAAAAAAA")', "AAA", DCX.utils.getRandomString(3, dataSet1));
        assertEquals('getRandomString(32, "AAAAAAAAAA")', "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA", DCX.utils.getRandomString(32, dataSet1));

        assertEquals('getRandomString(1, "5")', "5", DCX.utils.getRandomString(1, dataSet2));
        assertEquals('getRandomString(10, "5")', "5555555555", DCX.utils.getRandomString(10, dataSet2));
        assertEquals('getRandomString(3, "5")', "555", DCX.utils.getRandomString(3, dataSet2));
        assertEquals('getRandomString(32, "5")', "55555555555555555555555555555555", DCX.utils.getRandomString(32, dataSet2));
    },

    "test core.utils.getValue": function () {
        var testObj = {
                xyz: {
                    x: {
                        y: {
                            z: 99
                        }
                    }
                },
                a: null,
                b: 0,
                c: false,
                d: ""
            },
            utils = DCX.utils;
        
        assertEquals("getValue()", null, utils.getValue());
        assertEquals("getValue(null)", null, utils.getValue(null));
        assertEquals("getValue(testObj)", null, utils.getValue(testObj));

        assertEquals('getValue(testObj, "p")', null, utils.getValue(testObj, "p"));
        assertEquals('getValue(testObj, "q")', 121, utils.getValue(testObj, "q", 121));
        assertEquals('getValue(testObj, "r")', {}, utils.getValue(testObj, "r", {}));
        assertEquals('getValue(testObj, "s")', "default", utils.getValue(testObj, "s", "default"));
        assertEquals('getValue(testObj, "t")', "", utils.getValue(testObj, "t", ""));
        
        assertEquals('getValue(testObj, "xyz")', testObj.xyz, utils.getValue(testObj, "xyz", 1));
        assertEquals('getValue(testObj, "xyz.x.y.z")', 99, utils.getValue(testObj, "xyz.x.y.z", "default"));
        assertEquals('getValue(testObj, "xyz.x.y.b.c")', "default", utils.getValue(testObj, "xyz.x.y.b.c", "default"));
        assertEquals('getValue(testObj, "a")', null, utils.getValue(testObj, "a", "default"));
        assertEquals('getValue(testObj, "a.b.c")', "default", utils.getValue(testObj, "a.b.c", "default"));
        assertEquals('getValue(testObj, "b")', 0, utils.getValue(testObj, "b", "default"));
        assertEquals('getValue(testObj, "b.c")', "default", utils.getValue(testObj, "b.c", "default"));
        assertEquals('getValue(testObj, "c")', false, utils.getValue(testObj, "c", "default"));
        assertEquals('getValue(testObj, "d")', "", utils.getValue(testObj, "d", "default"));
    },

    "test core.utils.indexOf": function() {
        assertSame(typeof DCX.utils.indexOf, "function");
        assertSame(DCX.utils.indexOf([], 1), -1);
        assertSame(DCX.utils.indexOf([1,2,3], 1), 0);
        assertSame(DCX.utils.indexOf([1,2,3], "1"), -1);
    },

    "test core.utils.forEach": function() {
        var testArr = [1,2,3,4]
            i = 0;
        assertSame(typeof DCX.utils.forEach, "function");

        DCX.utils.forEach(testArr, function(elem, idx, arr){
            assertSame(elem, testArr[i]);
            assertSame(idx, i);
            assertSame(testArr, arr);
            i += 1;
        });
    },

    "test core.utils.some": function() {
        assertSame(typeof DCX.utils.some, "function");
        assertTrue(DCX.utils.some([null,"a",1,{}], function(elem){
            return typeof elem === 'number';
        }));
        assertFalse(DCX.utils.some([null,"a","1",{}], function(elem){
            return typeof elem === 'number';
        }));
        assertFalse(DCX.utils.some([], function(){}));
    },

    "test code.utils.convertToArray": function() {
        expectAsserts(9);
        assertSame(typeof DCX.utils.convertToArray, "function");

        (function() {
            var arr = DCX.utils.convertToArray(arguments);

            assertSame(Object.prototype.toString.call(arr), '[object Array]');
            assertSame(arr.length, arguments.length);
            assertSame(arr[0], arguments[0]);
            assertSame(arr[1], arguments[1]);
            assertSame(arr[2], arguments[2]);
            assertSame(arr[3], arguments[3]);
            assertSame(arr[4], arguments[4]);
            assertSame(arr[5], arguments[5]);
        }("a", null, 1, undefined, {x: "y"}, false));
    },

    "test core.utils.isUndefOrNull": function() {
        assertSame(typeof DCX.utils.isUndefOrNull, "function");
        assertTrue(DCX.utils.isUndefOrNull(undefined));
        assertTrue(DCX.utils.isUndefOrNull(null));
        assertFalse(DCX.utils.isUndefOrNull(0));
        assertFalse(DCX.utils.isUndefOrNull({}));
        assertFalse(DCX.utils.isUndefOrNull(""));
        assertFalse(DCX.utils.isUndefOrNull("non empty string"));
        assertFalse(DCX.utils.isUndefOrNull({x:"y"}));
    },

    "test core.utils.isArray": function() {
        expectAsserts(10);
        assertSame(typeof DCX.utils.isArray, "function");
        assertFalse("1", DCX.utils.isArray());
        assertFalse("2", DCX.utils.isArray(null));
        assertFalse("3", DCX.utils.isArray(0));
        assertFalse("4", DCX.utils.isArray({}));
        assertFalse("5", DCX.utils.isArray(""));
        assertFalse("6", DCX.utils.isArray("non empty string"));
        assertFalse("7", DCX.utils.isArray({x:"y"}));
        assertTrue("8", DCX.utils.isArray([]));
        assertTrue("9", DCX.utils.isArray([1, 2, 3]));
    },

    "test core.utils.mixin": function() {
        assertSame(typeof DCX.utils.mixin, "function");

        var test = {};
        var out = DCX.utils.mixin( test, { a:1, b: "test"} );
        assertSame(test, out);
        assertSame(typeof test.a, 'number');

        test = { a: 5, b: 5 };
        out = { b: 10, c: 10 };
        DCX.utils.mixin( test, out, { c:15, d: 15} );
        assertSame(test.a, 5);
        assertSame(test.b, 10);
        assertSame(test.c, 15);
        assertSame(test.d, 15);

        out = DCX.utils.mixin( test );
        assertSame(test, out);
        assertSame(DCX.utils.mixin(), void 0);
    },

    "test code.utils.extend(deep: false)": function() {
        expectAsserts(5);

        assertSame(typeof DCX.utils.extend, "function");

        var target = {
            a: {
                c: 1,
                d: 2
            }
        },
        source = {
            a: {
                c: 3,
                e: 4
            },
            b: true
        };

        DCX.utils.extend(false, target, source);

        assertSame(3, target.a.c);
        assertSame(4, target.a.e);
        assertUndefined(target.a.d);
        assertTrue(target.b);
    },

    "test code.utils.extend(deep: true)": function() {
        assertSame(typeof DCX.utils.extend, "function");

        var target = {
            a: {
                c: 1,
                d: 2
            }
        },
        source = {
            a: {
                c: 3,
                e: 4
            },
            b: true
        };

        DCX.utils.extend(true, target, source);

        assertSame(3, target.a.c);
        assertSame(2, target.a.d);
        assertSame(4, target.a.e);
        assertTrue(target.b);
    },

    "test core.utils.clone": function() {
        expectAsserts(9);
        assertSame(typeof DCX.utils.clone, "function");

        var clonedTest, 
            test = {
                name: "John",
                inner: {
                    undef: void 0,
                    arr: [1,2,3],
                    fn: function(){
                        return this.undef;
                    }
                }
            };

        clonedTest = DCX.utils.clone(test);

        assertSame('[object Array]', Object.prototype.toString.call(clonedTest.inner.arr));

        test.inner.arr.push(4);
        assertEquals(3, clonedTest.inner.arr.length);

        test.inner.undef = "defined";
        assertSame(void 0, clonedTest.inner.undef);

        test.name = "David";
        assertSame("John", clonedTest.name);

        test.additional = "additional";
        assertUndefined(clonedTest.additional);

        assertSame('defined', test.inner.fn());
        assertUndefined(clonedTest.inner.fn());

        assertEquals(null, DCX.utils.clone(null));
    },

    "test core.utils.objectCreate": function () {
        expectAsserts(3);

        assertException(function() {
            DCX.utils.createObject("undefined");
        }, "TypeError");
        assertObject(DCX.utils.createObject({}));
        assertObject(DCX.utils.createObject(function() {}));
    },

    "test core.utils.parseVersion": function () {
        expectAsserts(18);
        assertFunction(DCX.utils.parseVersion);

        assertEquals('1.parseVersion()', [], DCX.utils.parseVersion());
        assertEquals('2.parseVersion("")', [], DCX.utils.parseVersion(""));
        assertEquals('3.parseVersion("abc")', ["abc"], DCX.utils.parseVersion("abc"));
        assertEquals('4.parseVersion("123")', [123], DCX.utils.parseVersion("123"));
        assertEquals('5.parseVersion("a2c")', ["a2c"], DCX.utils.parseVersion("a2c"));
        assertEquals('6.parseVersion("1b3")', ["1b3"], DCX.utils.parseVersion("1b3"));

        assertEquals('7.parseVersion("a.b.c")', ["a", "b", "c"], DCX.utils.parseVersion("a.b.c"));
        assertEquals('8.parseVersion("1.2.3")', [1, 2, 3], DCX.utils.parseVersion("1.2.3"));
        assertEquals('9.parseVersion("a.2.c")', ["a", 2, "c"], DCX.utils.parseVersion("a.2.c"));
        assertEquals('10.parseVersion("1.b.3")', [1, "b", 3], DCX.utils.parseVersion("1.b.3"));

        assertEquals('11.parseVersion("ab.c")', ["ab", "c"], DCX.utils.parseVersion("ab.c"));
        assertEquals('12.parseVersion("1.23")', [1, 23], DCX.utils.parseVersion("1.23"));
        assertEquals('13.parseVersion("12.3")', [12, 3], DCX.utils.parseVersion("12.3"));
        assertEquals('14.parseVersion("a2.c")', ["a2", "c"], DCX.utils.parseVersion("a2.c"));
        assertEquals('15.parseVersion("a.2c")', ["a", "2c"], DCX.utils.parseVersion("a.2c"));
        assertEquals('16.parseVersion("1.b3")', [1, "b3"], DCX.utils.parseVersion("1.b3"));
        assertEquals('17.parseVersion("1b.3")', ["1b", 3], DCX.utils.parseVersion("1b.3"));
    },

    "test core.utils.access": function () {
        expectAsserts(16);
        assertSame(typeof DCX.utils.access, "function");

        assertSame(Array, DCX.utils.access("Array"));
        assertSame(Array, DCX.utils.access("window.Array"));
        assertSame(Array, DCX.utils.access("Array", window));

        assertUndefined(DCX.utils.access());
        assertUndefined(DCX.utils.access(123));
        assertUndefined(DCX.utils.access("a", 123));
        assertUndefined(DCX.utils.access("a", null));

        var test = {
            name: "John",
            inner: {
                undef: void 0,
                arr: [1,2,3],
                fn: function(){}
            }
        };
        test.inner.fn.fnattr = 1;

        assertSame("John", DCX.utils.access("name", test));
        assertSame(test.inner, DCX.utils.access("inner", test));
        assertSame(test.inner.arr, DCX.utils.access("inner.arr", test));
        assertSame(2, DCX.utils.access("inner.arr.1", test));
        assertSame(1, DCX.utils.access("inner.fn.fnattr", test));
        assertUndefined(DCX.utils.access("inner.arr.nonexisting", test));
        assertUndefined(DCX.utils.access("inner.arr.shift", test));
        assertUndefined(DCX.utils.access("inner.undef.test", test));
    },

    "test core.utils.isNumeric": function () {
        expectAsserts(22);
        assertEquals("typeof DCX.utils.isNumeric", "function", typeof DCX.utils.isNumeric);
        assertTrue("-1", DCX.utils.isNumeric(-1));
        assertTrue("0", DCX.utils.isNumeric(0));
        assertTrue("1", DCX.utils.isNumeric(1));
        assertTrue("99", DCX.utils.isNumeric(99));
        assertTrue('"-1"', DCX.utils.isNumeric("-1"));
        assertTrue('"0"', DCX.utils.isNumeric("0"));
        assertTrue('"1"', DCX.utils.isNumeric("1"));
        assertTrue('"99"', DCX.utils.isNumeric("99"));
        assertTrue('"1.1"', DCX.utils.isNumeric("1.1"));
        assertTrue('"1."', DCX.utils.isNumeric("1."));
        assertTrue('".1"', DCX.utils.isNumeric(".1"));
        assertTrue('"0.1"', DCX.utils.isNumeric("0.1"));
        assertFalse('"."', DCX.utils.isNumeric("."));
        assertFalse('"a1"', DCX.utils.isNumeric("a1"));
        assertFalse('"@"', DCX.utils.isNumeric("@"));
        assertFalse('""', DCX.utils.isNumeric(""));
        assertFalse('" "', DCX.utils.isNumeric(" "));
        assertFalse('"\t"', DCX.utils.isNumeric("\t"));
        assertFalse('undefined', DCX.utils.isNumeric());
        assertFalse('null', DCX.utils.isNumeric(null));
        assertFalse('{}', DCX.utils.isNumeric({}));
    },

    "test core.utils.isUpperCase": function () {
        expectAsserts(6);
        assertEquals("function", typeof DCX.utils.isUpperCase);
        assertTrue(DCX.utils.isUpperCase("A"));
        assertTrue(DCX.utils.isUpperCase("Z"));
        assertFalse(DCX.utils.isUpperCase("a"));
        assertFalse(DCX.utils.isUpperCase("z"));
        assertFalse(DCX.utils.isUpperCase("7"));
    },

    "test core.utils.isLowerCase": function () {
        expectAsserts(6);
        assertEquals("function", typeof DCX.utils.isLowerCase);
        assertTrue(DCX.utils.isLowerCase("a"));
        assertTrue(DCX.utils.isLowerCase("z"));
        assertFalse(DCX.utils.isLowerCase("A"));
        assertFalse(DCX.utils.isLowerCase("Z"));
        assertFalse(DCX.utils.isLowerCase("7"));
    },

    "test core.utils.extractResponseHeaders": function() {
        var headersObj;

        expectAsserts(6);
        assertEquals("No params", {}, DCX.utils.extractResponseHeaders());
        assertEquals("Empty string", {}, DCX.utils.extractResponseHeaders(""));
        assertEquals("String with empty lines", {}, DCX.utils.extractResponseHeaders("\n\n"));

        headersObj = DCX.utils.extractResponseHeaders("Content-Type: text/html\nLast-Modified: Fri, 27 Apr 2012 13:37:51 GMT\nServer: Jetty(6.1.x)\n\n");
        assertEquals("text/html", headersObj["Content-Type"]);
        assertEquals("Fri, 27 Apr 2012 13:37:51 GMT", headersObj["Last-Modified"]);
        assertEquals("Jetty(6.1.x)", headersObj["Server"]);
    },

    "test core.utils.getDocument": function() {
        /*:DOC += <input id="btn" type="button" value="test"/> */
        var btn = document.getElementById("btn"),
            documentEl;

        documentEl = DCX.utils.getDocument(btn);

        assertEquals("function", typeof DCX.utils.getDocument);

        assertEquals(9, documentEl.nodeType);
        assertSame(document ,documentEl);
    },

    "test core.utils.getWindow": function() {
        /*:DOC += <input id="btn" type="button" value="test"/> */

        expectAsserts(2);

        var btn = document.getElementById("btn");

        assertEquals("function", typeof DCX.utils.getWindow);
        // == used instead of assertUquals due to bug in IE9 in IE8/7 mode where 
        // document.parentWindow !== window, but document.parentWindow == window
        assertTrue(DCX.utils.getWindow(btn) == window.window);
    },

    "test core.utils.isIFrameDescendant": function() {
        /*:DOC += <iframe id="iframe"></iframe> */

        expectAsserts(2);

        var iframe = document.getElementById("iframe"),
            doc = iframe.contentWindow.document,
            iframecontent = '<html><body><input id="btn" type="button" value="test"/></body></html>',
            btn;

        doc.open();
        doc.write(iframecontent);
        doc.close();

        btn = doc.getElementById("btn");
    
        assertFalse(DCX.utils.isIFrameDescendant(iframe));
        assertTrue(DCX.utils.isIFrameDescendant(btn));
    },

    "test core.utils.getOrientationMode": function () {
        var portraitMode = "PORTRAIT",
            landscapeMode = "LANDSCAPE",
            invalidMode = "INVALID",
            unknownMode = "UNKNOWN";

        expectAsserts(11);
        assertEquals("function", typeof DCX.utils.getOrientationMode);
        assertEquals("orientationMode(0)", portraitMode, DCX.utils.getOrientationMode(0));
        assertEquals("orientationMode(180)", portraitMode, DCX.utils.getOrientationMode(180));
        assertEquals("orientationMode(360)", portraitMode, DCX.utils.getOrientationMode(360));
        assertEquals("orientationMode(90)", landscapeMode, DCX.utils.getOrientationMode(90));
        assertEquals("orientationMode(-90)", landscapeMode, DCX.utils.getOrientationMode(-90));
        assertEquals("orientationMode(270)", landscapeMode, DCX.utils.getOrientationMode(270));
        assertEquals("orientationMode(9999)", unknownMode, DCX.utils.getOrientationMode(9999));
        assertEquals("orientationMode()", invalidMode, DCX.utils.getOrientationMode());
        assertEquals("orientationMode(null)", invalidMode, DCX.utils.getOrientationMode(null));
        assertEquals("orientationMode('90')", invalidMode, DCX.utils.getOrientationMode("90"));
    },

    "test core.utils.trim": function () {
        expectAsserts(6);
        assertEquals("function", typeof DCX.utils.trim);
        assertEquals('trim("abcd")', "abcd", DCX.utils.trim("abcd"));
        assertEquals('trim("a\nb  c\td")', "a\nb  c\td", DCX.utils.trim("a\nb  c\td"));
        assertEquals('trim("\nab  cd\n")', "ab  cd", DCX.utils.trim("\nab  cd\n"));
        assertEquals('trim("  \n  abcd  \n  ")', "abcd", DCX.utils.trim("  \n  abcd  \n  "));
        assertEquals('trim("\t  abcd\n  ")', "abcd", DCX.utils.trim("\t  abcd\n  "));
    },

    "test core.utils.ltrim": function () {
        expectAsserts(6);
        assertEquals("function", typeof DCX.utils.ltrim);
        assertEquals('ltrim("abcd")', "abcd", DCX.utils.ltrim("abcd"));
        assertEquals('ltrim("a\nb  c\td")', "a\nb  c\td", DCX.utils.ltrim("a\nb  c\td"));
        assertEquals('ltrim("\nab  cd\n")', "ab  cd\n", DCX.utils.ltrim("\nab  cd\n"));
        assertEquals('ltrim("  \n  abcd  \n  ")', "abcd  \n  ", DCX.utils.ltrim("  \n  abcd  \n  "));
        assertEquals('ltrim("\t  abcd\n  ")', "abcd\n  ", DCX.utils.ltrim("\t  abcd\n  "));
    },

    "test core.utils.rtrim": function () {
        expectAsserts(6);
        assertEquals("function", typeof DCX.utils.rtrim);
        assertEquals('rtrim("abcd")', "abcd", DCX.utils.rtrim("abcd"));
        assertEquals('rtrim("a\nb  c\td")', "a\nb  c\td", DCX.utils.rtrim("a\nb  c\td"));
        assertEquals('rtrim("\nab  cd\n")', "\nab  cd", DCX.utils.rtrim("\nab  cd\n"));
        assertEquals('rtrim("  \n  abcd  \n  ")', "  \n  abcd", DCX.utils.rtrim("  \n  abcd  \n  "));
        assertEquals('rtrim("\t  abcd\n  ")', "\t  abcd", DCX.utils.rtrim("\t  abcd\n  "));
    },

    "test core.utils.getCookieValue": function () {
        expectAsserts(6);
        assertEquals("function", typeof DCX.utils.getCookieValue);
        assertEquals('getCookieValue("test")', null, DCX.utils.getCookieValue("test"));
        assertEquals('getCookieValue("test", "test=1234")', "1234", DCX.utils.getCookieValue("test", "test=1234"));
        assertEquals('getCookieValue("test", "foo=bar;test=1234")', "1234", DCX.utils.getCookieValue("test", "foo=bar;test=1234"));
        assertEquals('getCookieValue("test", "foo=bar;test=1234;homer=doh")', "1234", DCX.utils.getCookieValue("test", "foo=bar;test=1234;homer=doh"));
        assertEquals('getCookieValue("test", "foo=bar;test1=1234;homer=doh")', null, DCX.utils.getCookieValue("test", "foo=bar;test1=1234;homer=doh"));
    },

    "test core.utils.getQueryStringValue": function () {
        expectAsserts(10);
        assertEquals("function", typeof DCX.utils.getQueryStringValue);
        assertEquals('getQueryStringValue("test")', null, DCX.utils.getQueryStringValue("test"));
        assertEquals('getQueryStringValue("test", "&", "?test=1234")', "1234", DCX.utils.getQueryStringValue("test", "&", "?test=1234"));
        assertEquals('getQueryStringValue("test", "&", "?foo=bar&test=1234")', "1234", DCX.utils.getQueryStringValue("test", "&", "?foo=bar&test=1234"));
        assertEquals('getQueryStringValue("test", "&", "?foo=bar&test=1234&homer=doh")', "1234", DCX.utils.getQueryStringValue("test", "&", "?foo=bar&test=1234&homer=doh"));
        assertEquals('getQueryStringValue("test", "&", "?foo=bar&test1=1234&homer=doh")', null, DCX.utils.getQueryStringValue("test", "&", "?foo=bar&test1=1234&homer=doh"));
        assertEquals('getQueryStringValue("test", ";", "?test=1234")', "1234", DCX.utils.getQueryStringValue("test", ";", "?test=1234"));
        assertEquals('getQueryStringValue("test", ";", "?foo=bar;test=1234")', "1234", DCX.utils.getQueryStringValue("test", ";", "?foo=bar;test=1234"));
        assertEquals('getQueryStringValue("test", ";", "?foo=bar;test=1234;homer=doh")', "1234", DCX.utils.getQueryStringValue("test", ";", "?foo=bar;test=1234;homer=doh"));
        assertEquals('getQueryStringValue("test", ";", "?foo=bar;test1=1234;homer=doh")', null, DCX.utils.getQueryStringValue("test", ";", "?foo=bar;test1=1234;homer=doh"));
    },

    "test matchTarget": function () {
        /*:DOC += <div id="test"></div> */

        var target1 = { id: "myid", idType: -1 },
            target2 = { id: "main", idType: -1 },
            target3 = { id: "custom=bar", idType: -3 },
            target4 = { id: "[[\"HTML\",0],[\"BODY\",0],[\"SELECT\",0]]", idType: -2 },
            target5 = { id: "test", idType: -1 },
            target6 = { id: '[["body",0],["div",0],["input",1]]', idType: -2 },
            target7 = { id: '[["body",0],["div",1],["input",1]]', idType: -2 },
            target8 = { id: '[["container"],["div",0],["input",9]]', idType: -2 },
            target9 = { id: '[["body",0],["div",0],["input",0]]', idType: -2 },
            target10 = { id: '[["body",0],["div",0],["input",0]]', idType: -1 },
            targets = [
                // Matches target1
                { id: "myid", idType: -1 },
                { id: "custom=myid", idType: -3 },
                // Matches target4
                { id: "[[\"HTML\",0],[\"BODY\",0],[\"SELECT\",0]]", idType: -2 },
                // A couple of invalid entries
                { id: "custom=bar" },
                { idType: -3 },
                { },
                // Matches target5
                "div",
                // Matches target6, target8, target9
                {
                    id: {
                        regex: '.*\\["div",0\\],\\["input",\\d\\]\\]$',
                        flags: "i"
                    },
                    idType: -2
                }
            ];

        expectAsserts(11);
        assertFunction(DCX.utils.matchTarget);
        assertSame("Target 1", 0, DCX.utils.matchTarget(targets, target1));
        assertSame("Target 2", -1, DCX.utils.matchTarget(targets, target2));
        assertSame("Target 3", -1, DCX.utils.matchTarget(targets, target3));
        assertSame("Target 4", 2, DCX.utils.matchTarget(targets, target4));
        assertSame("Target 5", 6, DCX.utils.matchTarget(targets, target5));
        assertSame("Target 6", 7, DCX.utils.matchTarget(targets, target6));
        assertSame("Target 7", -1, DCX.utils.matchTarget(targets, target7));
        assertSame("Target 8", 7, DCX.utils.matchTarget(targets, target8));
        assertSame("Target 9", 7, DCX.utils.matchTarget(targets, target9));
        assertSame("Target 10", -1, DCX.utils.matchTarget(targets, target10));
    },

    "test getOriginAndPath": function () {
        var fakeLocation = {
                origin: "foo.com",
                host: "bar.com",
                protocol: "https:",
                pathname: "foobar;x=1&y=2"
            },
            retObj;
        expectAsserts(12);
        assertFunction(DCX.utils.getOriginAndPath);
        retObj = DCX.utils.getOriginAndPath();
        assertString("getOriginAndPath() test origin", retObj.origin);
        assertString("getOriginAndPath() test path", retObj.path);
        assertEquals("getOriginAndPath(document.location)", retObj, DCX.utils.getOriginAndPath(document.location));
        assertEquals("getOriginAndPath(window.location)", retObj, DCX.utils.getOriginAndPath(window.location));

        retObj = DCX.utils.getOriginAndPath(fakeLocation);
        assertEquals("1. getOriginAndPath(fakeLocation)", "foo.com", retObj.origin);
        assertEquals("2. getOriginAndPath(fakeLocation)", "foobar", retObj.path);

        delete fakeLocation.origin;
        retObj = DCX.utils.getOriginAndPath(fakeLocation);
        assertEquals("3. getOriginAndPath(fakeLocation)", "https://bar.com", retObj.origin);
        assertEquals("4. getOriginAndPath(fakeLocation)", "foobar", retObj.path);

        fakeLocation.pathname = "";
        retObj = DCX.utils.getOriginAndPath(fakeLocation);
        assertEquals("5. getOriginAndPath(fakeLocation)", "", retObj.path);

        fakeLocation.pathname = "test";
        retObj = DCX.utils.getOriginAndPath(fakeLocation);
        assertEquals("6. getOriginAndPath(fakeLocation)", "test", retObj.path);

        fakeLocation.pathname = "foobar;1;2;3";
        retObj = DCX.utils.getOriginAndPath(fakeLocation);
        assertEquals("7. getOriginAndPath(fakeLocation)", "foobar", retObj.path);
    },

    "test core.utils.WeakMap": function () {
        assertFunction(DCX.utils.WeakMap);
        var map = new DCX.utils.WeakMap;
        assertObject(map);

        assertFunction(map.get);
        assertFunction(map.set);
        assertFunction(map.clear);
        assertFunction(map.has);
        assertFunction(map.remove);

        var obj = {};
        map.set(obj, 1);
        assertTrue(map.has(obj));
        assertSame(1, map.get(obj));
        assertUndefined(map.get({}));
        assertFalse(map.has({}));

        map.set(obj, 2);
        map.set("test", 3);
        assertSame(2, map.get(obj));
        assertSame(3, map.get("test"));

        map.remove(obj);
        assertFalse(map.has(obj));
        assertUndefined(map.get(obj));

        map.clear();
        assertUndefined(map.get(obj));
        assertUndefined(map.get("test"));
    }
});

AsyncTestCase("utils_AsyncTests", {

    setUp: function () {
        DCX._getLocalTop = function() { return window.window; };
    },

    tearDown: function () {
    },

    "test core.utils.addEventListener": function(queue) {
        /*:DOC iframe = <iframe src="http://www.google.com"></iframe> */

        var isLoaded = false,
            iframe = this.iframe,
            onLoadCallback;

        if (DCX.utils.isLegacyIE && getIEVersion() < 7) {
            jstestdriver.console.log("Test skipped for legacy IE " + getIEVersion());
            return;
        }

        assertEquals("function", typeof DCX.utils.addEventListener);

        queue.call(function(callbacks) {
            onLoadCallback = callbacks.add(function(){
                isLoaded = true;
            });

            DCX.utils.addEventListener(iframe, "load", onLoadCallback);

            document.body.appendChild(iframe);
        });

        queue.call(function(callbacks) {
            assertTrue(isLoaded);
        });
    }
});