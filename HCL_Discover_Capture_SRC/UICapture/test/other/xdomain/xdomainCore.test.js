/*
 *  **************************************************************************
 *  Licensed Materials - Property of HCL
 *  (c) Copyright HCL Technologies Ltd.  2020. All Rights Reserved.
 *  US Government Users Restricted Rights - Use, duplication or disclosure
 *  restricted by GSA ADP Schedule Contract with HCL Technologies.
 *  **************************************************************************
 */



(function () {

    TestCase("core", {

        setUp: function () {
            DCX.addService("xdomain", function() {
                return {
                    init: function() {},
                    destroy: function() {}
                };
            });
        },


        tearDown: function () {
            DCX.destroy();
        },


        "test init": function() {
            DCX.init();
        }
    });


	AsyncTestCase("core browserApi", {
        

        "test browserApi": function(queue) {
            /*:DOC iframe = <iframe src="http://www.google.com"></iframe> */
            var api,
                isLoaded = false,
                iframe = this.iframe,
                onLoadCallback;

            expectAsserts(2);

            api = DCX.browserApi;

            assertEquals("function", typeof api.addEventListener);

            queue.call(function(callbacks) {
                document.body.appendChild(iframe);

                onLoadCallback = callbacks.add(function(){
                    isLoaded = true;
                });

                api.addEventListener(iframe, "load", onLoadCallback);
            });

            queue.call(function(callbacks) {
                api.removeEventListener(iframe, "load", onLoadCallback);
                assertTrue(isLoaded);
            });
        }
        
        
    });
}());