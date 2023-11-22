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
                    default: throw new Error("Unexpected service: " + name);
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

    TestCase("encoderService", {
        setUp: function () {
            this.service = DCX.getService("encoder", getStubContext());
        },

        tearDown: function() {
            this.service.destroy();
        },


        "test second init": function() {
            this.service.init();
        },


        "test handleConfigUpdated": function() {
            if (typeof this.service.handleConfigUpdated !== "function") {
                jstestdriver.console.log("encoderService", "No access to private method handleConfigUpdated.");
                return;
            }

            this.service.handleConfigUpdated();
        },

        "test verify service interface": function () {
            expectAsserts(1);
            assertFunction(this.service.encode);
        },


        "test getEncoder": function () {
            if (typeof this.service.getEncoder !== "function") {
                jstestdriver.console.log("encoderService", "No access to private method getEncoder.");
                return;
            }

            var config = {
                    services: {
                        encoder: {
                            abc: {
                                encode: function () {
                                    return "abc";
                                },
                                defaultEncoding: "alphabetical"
                            },
                            invalid: {

                            }
                        }
                    }
                },
                encoderService = DCX.getService("encoder", getStubContext(config));

            expectAsserts(6);
            assertEquals("getEncoder()", null, encoderService.getEncoder());
            assertEquals("getEncoder(null)", null, encoderService.getEncoder(null));
            assertEquals('getEncoder("dummy")', null, encoderService.getEncoder("dummy"));
            assertEquals('getEncoder(1)', null, encoderService.getEncoder(1));

            assertEquals('getEncoder("invalid")', config.services.encoder.invalid, encoderService.getEncoder("invalid"));
            assertEquals('getEncoder("abc")', config.services.encoder.abc, encoderService.getEncoder("abc"));
        },


        "test encode": function () {
            var config = {
                    services: {
                        encoder: {
                            gzip: {
                                encode: function (data) {
                                    return { xyz: "abcd" };
                                },
                                defaultEncoding: "gzip"
                            }
                        }
                    }
                },
                encoderService = DCX.getService("encoder", getStubContext(config)),
                badData = {
                    data: null,
                    encoding: null,
                    error: "Invalid data parameter."
                },
                badEncoding = {
                    data: null,
                    encoding: null,
                    error: "Invalid type parameter."
                };

            expectAsserts(12);
            assertEquals("encode()", badData, encoderService.encode());
            assertEquals("encode(null)", badData, encoderService.encode(null));
            assertEquals("encode(null, null)", badData, encoderService.encode(null, null));
            assertEquals('encode("pqrs")', badEncoding, encoderService.encode("pqrs"));
            assertEquals('encode("pqrs", null)', badEncoding, encoderService.encode("pqrs", null));
            assertEquals('encode(null, "gzip")', badData, encoderService.encode(null, "gzip"));

            assertEquals('1. encode(1, "gzip")', { data: null, encoding: null, error: 'Encoder (gzip) returned an invalid result.' }, encoderService.encode(1, "gzip"));
            assertEquals('1. encode("", "gzip")', { data: null, encoding: null, error: 'Encoder (gzip) returned an invalid result.' }, encoderService.encode("", "gzip"));
            assertEquals('1. encode("pqrs", "gzip")', { data: null, encoding: null, error: 'Encoder (gzip) returned an invalid result.' }, encoderService.encode("pqrs", "gzip"));

            config.services.encoder.gzip.encode = function (data) {
                var len = 99;
                
                if (typeof data === "string") {
                    len = data.length;
                }
                return { buffer: len };
            };

            assertEquals('2. encode(1, "gzip")', { data: 99, encoding: "gzip", error: null }, encoderService.encode(1, "gzip"));
            assertEquals('2. encode("", "gzip")', { data: 0, encoding: "gzip", error: null }, encoderService.encode("", "gzip"));
            assertEquals('2. encode("pqrs", "gzip")', { data: 4, encoding: "gzip", error: null }, encoderService.encode("pqrs", "gzip"));

        }
    });

}());