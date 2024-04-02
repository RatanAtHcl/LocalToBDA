/*
 *  **************************************************************************
 *  Licensed Materials - Property of HCL
 *  (c) Copyright HCL Technologies Ltd.  2020. All Rights Reserved.
 *  US Government Users Restricted Rights - Use, duplication or disclosure
 *  restricted by GSA ADP Schedule Contract with HCL Technologies.
 *  **************************************************************************
 */



(function () {

    TestCase("xdomain service", {

        "test xdomain service": function(queue) {
            var service,
                isIE = false,
                fakeEvent = {
                    request: {
                        url: "",
                        async: false,
                        headers: "",
                        data: ""
                    }
                },
                sendRequest = stubFn();

            expectAsserts(1);

            /*@cc_on
                isIE = true;
            @*/
            service = DCX.getService("xdomain", {
                getService: function() {
                    return {
                        sendRequest: sendRequest
                    }
                },
                browserApi: {
                    addEventListener: function(el, type, method) {
                        method({
                            data: fakeEvent
                        });
                    },
                    removeEventListener: function() {}
                }
            });

            if(isIE || typeof window.postMessage !== "function") {
                window.sendMessage(fakeEvent);
            }

            service.destroy();

            assert(sendRequest.called);
        }
    });


    
}());