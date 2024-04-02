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
        var config = config || {};
        return {
            fail: function (msg, code) {
                var err = new Error(msg);
                err.code = code;
                throw err;
            },
            getServiceConfig: function (service) {
                var retVal = {};
                switch (service) {
                    case "queue":
                        retVal = {
                            useBeacon: true
                        };
                        break;
                    default:
                        retVal = {};
                        break;
                };
                
                return retVal;
            },
            getState: function () {
                return config.state || "loaded";
            },
            utils: DCX.utils
        };
    }

    TestCase("ajaxService w3c", {

        setUp: function () {
            this.service = DCX.getService("ajax", getStubContext());
        },

        tearDown: function () {
            this.service.destroy();
        },

        "test browserService.convertHeadersToArray": function () {
            // private method test not exposed
            if (typeof this.service.convertHeadersToArray === "undefined") {
                jstestdriver.console.log("browserServiceW3C: No access to private method convertHeadersToArray");
                return;
            }
            expectAsserts(3);
            var headersObj = {
                    "X-Discover": "test",
                    "Content-Type": "text/plain"
                },
                expectedResult = [
                    ["X-Discover", "test"],
                    ["Content-Type", "text/plain"]
                ];

            assertEquals("1. convertHeadersToArray()", [], this.service.convertHeadersToArray());
            assertEquals("2. convertHeadersToArray({})", [], this.service.convertHeadersToArray({}));
            assertEquals("3. convertHeadersToArray(headersObj)", expectedResult, this.service.convertHeadersToArray(headersObj));
        },

        "test browserService.convertHeadersToQuery": function () {
            // private method test not exposed
            if (typeof this.service.convertHeadersToQuery === "undefined") {
                jstestdriver.console.log("browserServiceW3C: No access to private method convertHeadersToQuery");
                return;
            }
            expectAsserts(3);
            var headersObj = {
                    "X-Discover": "test",
                    "Content-Type": "text/plain"
                },
                expectedResult = "?X-Discover=test&Content-Type=text%2Fplain";

            assertEquals("1. convertHeadersToQuery()", "", this.service.convertHeadersToQuery());
            assertEquals("2. convertHeadersToQuery({})", "", this.service.convertHeadersToQuery({}));
            assertEquals("3. convertHeadersToQuery(headersObj)", expectedResult, this.service.convertHeadersToQuery(headersObj));
        }
    });

	AsyncTestCase("ajaxService w3c AsyncTests", {
        setUp: function () {
        	this.service = DCX.getService("ajax", getStubContext());
        },
        
        tearDown: function () {
        	this.service.destroy();
        },
        
        "test sendRequest": function(queue) {
            var browserService;

            expectAsserts(1);

            queue.call(function(callbacks) {
                this.service.sendRequest({
                    headers: {
                        "X-Test-Header": true
                    },
                    oncomplete: callbacks.add(function(response) {
                        assert(true);
                    }),
                    timeout: 1000,
                    contentType: "UTF-8",
                    type: "GET",
                    url: ".",
                    async: true,
                    data: ""
                });
            });
        },

        "test sendRequest timeout": function(queue) {
            var browserService;

            expectAsserts(0);

            queue.call(function(callbacks) {
                this.service.sendRequest({
                    headers: {
                        "X-Test-Header": true
                    },
                    oncomplete: function() {},
                    timeout: -1,
                    contentType: "UTF-8",
                    type: "GET",
                    url: ".",
                    async: true,
                    data: ""
                });
            });
        }
    });
}());