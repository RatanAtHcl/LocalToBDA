/*
 *  **************************************************************************
 *  Licensed Materials - Property of HCL
 *  (c) Copyright HCL Technologies Ltd.  2020. All Rights Reserved.
 *  US Government Users Restricted Rights - Use, duplication or disclosure
 *  restricted by GSA ADP Schedule Contract with HCL Technologies.
 *  **************************************************************************
 */



TestCase("ModuleContext", {

    _createCore: function(obj) {
        var core = {
            utils: DCX.utils
        };
        for(var key in obj) {
            if (obj.hasOwnProperty(key)) {
                core[key] = obj[key];
            }
        }
        return core;
    },

    testPassGetConfigPassThru: function() {
        expectAsserts(2);
        var result = {};

        var context = DCX.ModuleContext("test", this._createCore({
            getModuleConfig: function (moduleName) {
                assertEquals("test", moduleName);
                return result;
            }
        }));

        var actualResult = context.getConfig();
        assertSame(actualResult, result);
    },

    testPassBroadcastPassThru: function() {
        expectAsserts(4);
        var result = {};

        var context = DCX.ModuleContext("test", this._createCore({
            broadcast: function (moduleName, name, data) {
                assertEquals("test", moduleName);
                assertEquals("hello", name);
                assertEquals("foo", data);
                return result;
            }
        }));

        var actualResult = context.broadcast("hello", "foo");
        assertSame(actualResult, result);
    },

    testPassListenPassThru: function() {
        expectAsserts(3);
        var result = {};

        var context = DCX.ModuleContext("test", this._createCore({
            listen: function (moduleName, name) {
                assertEquals("test", moduleName);
                assertEquals("hello", name);
                return result;
            }
        }));

        var actualResult = context.listen("hello");
        assertSame(actualResult, result);
    },

    testPassPostPassThru: function() {
        expectAsserts(4);
        var result = {},
            info = {};

        var context = DCX.ModuleContext("test", this._createCore({
            post: function (moduleName, data, queueId) {
                assertEquals("test", moduleName);
                assertSame(info, data);
                assertEquals("check", queueId);
                return result;
            }
        }));

        var actualResult = context.post(info, "check");
        assertSame(actualResult, result);

    },
    
    testGetXpathPassThru: function() {
        expectAsserts(3);
        var result = "Success!";

        var context = DCX.ModuleContext("test", this._createCore({
            getXPathFromNode: function (moduleName, node) {
                assertEquals("test", moduleName);
                assertEquals(node, result);
                return result;
            }
        }));

        var actualResult = context.getXPathFromNode(result);
        assertEquals(actualResult, result);

    }

});
