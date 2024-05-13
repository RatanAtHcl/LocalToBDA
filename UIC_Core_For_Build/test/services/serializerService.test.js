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
                    case "config": return {
                            getServiceConfig: function(name){ 
                                return config.services[name] || {}; 
                            },
                            subscribe: function() {},
                            unsubscribe: function() {}
                        };
                    default: throw new Error("Unexpected service: "+name);
                }
            },
            utils: DCX.utils,
            fail: function() {
                failCalled = true
            }
        };
    }

    var testObject = {
            arr: [1, 2, 3],
            num: 1.5,
            obj: { a: "b" },
            str: "foo"
        },
        testString = '{"arr":[1,2,3],"num":1.5,"obj":{"a":"b"},"str":"foo"}',
        failCalled = false;

    TestCase("serializerService", {
        setUp: function () {
            this.service = DCX.getService("serializer", getStubContext());
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
            expectAsserts(2);
            assertFunction(this.service.parse);
            assertFunction(this.service.serialize);
        },


        "test should parse JSON string to object": function () {
            var obj = this.service.parse(testString);

            expectAsserts(1);
            assertEquals(testObject, obj);
        },


        "test parse with unsupported type": function () {
            var service = this.service;
            assertException(function() {
                service.parse(testObject, "xml");
            }, "TypeError");
        },


        "test shoud serialize object to JSON string": function () {
            var serialized = this.service.serialize(testObject);

            expectAsserts(1);
            assertEquals(testString, serialized);
        },


        "test serialize with unsupported type": function () {
            var service = this.service;

            expectAsserts(1);
            assertException(function () {
                service.serialize(testObject, "xml");
            }, "TypeError");
        }
    });

    TestCase("serializerService built-in implementation", {
        setUp: function () {
            this.oldWindowJSON = window.JSON;
            window.JSON = undefined;

            this.oldWindowEval = window.eval;
            window.eval = stubFn();

            this.service = DCX.getService("serializer", getStubContext());
        },


        tearDown: function () {
            window.JSON = this.oldWindowJSON;
            window.eval = this.oldWindowEval;
        },


        "test should use eval to parse JSON when window.JSON is unavailable": function () {
            this.service.parse(testString);

            expectAsserts(2);
            assert(window.eval.called);
            assertEquals("(" + testString + ")", window.eval.args[0]);
        },


        "test should serialize object to JSON string using own implementation": function () {
            var serialized = this.service.serialize(testObject);

            expectAsserts(3);
            assertEquals(testString, serialized);

            assertSame("null", this.service.serialize(function () {}));
            assertSame("null", this.service.serialize(undefined));
        }
    });


    TestCase("serializerService custom serializer", {
        setUp: function() {
            window.fakeSerializer = function() {
                return "test";
            };
            this.service = DCX.getService("serializer", getStubContext({
                    services: {
                        serializer: {
                            json: {
                                parsers: [undefined, undefined, "something.not.existing", function(){ return { a: 1 } }],
                                stringifiers: ["window.fakeSerializer"]
                            }
                        }
                    }
                }));
        },

        tearDown: function() {
        },

        "test custom functions": function() {
            assertEquals({ a: 1 }, this.service.parse("[]"));
            assertSame("test", this.service.serialize({}));
        }
    });


    TestCase("serializerService failed initialization", {
        setUp: function() {
            failCalled = false;
            this.service = DCX.getService("serializer", getStubContext({
                    services: {
                        serializer: {
                            json: {
                                parsers: [undefined],
                                stringifiers: [],
                                defaultToBuiltin: false
                            }
                        }
                    }
                }));
        },

        tearDown: function() {
            failCalled = false;
        },

        "test custom functions": function() {
           assertTrue(failCalled);
        }
    });

}());