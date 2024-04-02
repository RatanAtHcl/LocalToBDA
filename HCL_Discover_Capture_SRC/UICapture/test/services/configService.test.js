/*
 *  **************************************************************************
 *  Licensed Materials - Property of HCL
 *  (c) Copyright HCL Technologies Ltd.  2020. All Rights Reserved.
 *  US Government Users Restricted Rights - Use, duplication or disclosure
 *  restricted by GSA ADP Schedule Contract with HCL Technologies.
 *  **************************************************************************
 */


(function () {
    function getService() {
        return DCX.getService("config", DCX);
    }

    var testConfig = {
            core: {
                modules: {
                    performance: {
                        enabled: true,
                        events: [ "load", "beforeunload" ]
                    }
                }
            },
            services: {
                queue: [
                    {
                        qid: "DEFAULT",
                        endpoint: "/",
                        maxEvents: 1,
                        serializer: "json"
                    }
                ]
            },
            modules: {
                performance: {
                    someKey: "someValue"
                }
            }
        };


    TestCase("configService", {
        setUp: function () {
            this.service = getService();
        },

        tearDown: function() {
            this.service.destroy();
        },


        "test verify service interface": function () {
            expectAsserts(8);
            assertFunction(this.service.getConfig);
            assertFunction(this.service.updateConfig);
            assertFunction(this.service.getCoreConfig);
            assertFunction(this.service.updateCoreConfig);
            assertFunction(this.service.getServiceConfig);
            assertFunction(this.service.updateServiceConfig);
            assertFunction(this.service.getModuleConfig);
            assertFunction(this.service.updateModuleConfig);
        },


        "test getConfig should return global config object": function () {
            var config = this.service.getConfig();

            expectAsserts(4);
            assertObject(config);
            assertObject(config.core);
            assertObject(config.services);
            assertObject(config.modules);
        },


        "test getCoreConfig without setting config should return object": function () {
            expectAsserts(1);
            assertObject(this.service.getCoreConfig());
        },


        "test getServiceConfig with unknown name": function () {
            expectAsserts(1);
            assertEquals('getServiceConfig("foo")', {}, this.service.getServiceConfig("foo"));
        },


        "test getModuleConfig with unknown name / no config": function () {
            expectAsserts(1);
            assertEquals({}, this.service.getModuleConfig("performance"));
        }
    });


    TestCase("configService update", {
        setUp: function () {
            this.service = getService();

            this.eventCallback = stubFn();

            this.service.subscribe("configupdated", this.eventCallback);
        },


        tearDown: function() {
            this.service.destroy();
        },


        "test updateConfig should merge config object": function () {
            var config = null;

            this.service.updateConfig(testConfig);
            config = this.service.getConfig();

            expectAsserts(3);
            assertEquals(testConfig.core, config.core);
            assertEquals(testConfig.services, config.services);
            assertEquals(testConfig.modules, config.modules);
        },


        "test updateCoreConfig should merge core config": function () {
            var config = null;

            this.service.updateCoreConfig(testConfig.core);
            config = this.service.getConfig();

            expectAsserts(3);
            assertEquals(testConfig.core, config.core);
            assertEquals({}, config.modules);
            assertEquals({}, config.services);
        },


        "test updateServiceConfig should merge service config": function () {
            var config = null;

            this.service.updateServiceConfig("queue", testConfig.services.queue);
            config = this.service.getConfig();

            expectAsserts(3);
            assertEquals({}, config.core);
            assertEquals({}, config.modules);
            assertEquals(testConfig.services.queue, config.services.queue);
        },


        "test updateModuleConfig should merge module config": function () {
            var config = null;

            this.service.updateModuleConfig("performance", testConfig.modules.performance);
            config = this.service.getConfig();

            expectAsserts(3);
            assertEquals({}, config.core);
            assertEquals(testConfig.modules.performance, config.modules.performance);
            assertEquals({}, config.services);
        },


        "test updateConfig should emit configupdated event": function () {
            expectAsserts(2);
            this.service.updateConfig(testConfig);
            assert(this.eventCallback.called);
            assertEquals("configupdated", this.eventCallback.args[0].type);
        },


        "test updateCoreConfig should emit configupdated event": function () {
            expectAsserts(2);
            this.service.updateCoreConfig(testConfig.core);
            assert(this.eventCallback.called);
            assertEquals("configupdated", this.eventCallback.args[0].type);
        },


        "test updateServiceConfig should emit configupdated event": function () {
            expectAsserts(2);
            this.service.updateServiceConfig("queue", testConfig.services.queue);
            assert(this.eventCallback.called);
            assertEquals("configupdated", this.eventCallback.args[0].type);
        },


        "test updateModuleConfig should emit configupdated event": function () {
            expectAsserts(2);
            this.service.updateModuleConfig("performance", testConfig.modules.performance);
            assert(this.eventCallback.called);
            assertEquals("configupdated", this.eventCallback.args[0].type);
        }
    });
}());