/*
 *  **************************************************************************
 *  Licensed Materials - Property of HCL
 *  (c) Copyright HCL Technologies Ltd.  2020. All Rights Reserved.
 *  US Government Users Restricted Rights - Use, duplication or disclosure
 *  restricted by GSA ADP Schedule Contract with HCL Technologies.
 *  **************************************************************************
 */



TestCase("EventTarget", {

    testPublishAndSubscribe: function() {
        expectAsserts(2);

        var target = new DCX.EventTarget();

        function handler(event) {
            assertEquals("test", event.type);
            assertEquals("foo", event.data);
        }

        target.subscribe("test", handler);
        target.publish("test", "foo");

    },

    testPublishAndSubscribeMultiple: function() {
        expectAsserts(4);

        var target = new DCX.EventTarget();

        function handler(event) {
            assertEquals("test", event.type);
            assertEquals("foo", event.data);
        }

        function anotherHandler(event) {
            assertEquals("test", event.type);
            assertEquals("foo", event.data);
        }


        target.subscribe("test", handler);
        target.subscribe("test", anotherHandler);
        target.publish("test", "foo");

    },

    testPublishMultipleAndSubscribe: function() {
        expectAsserts(4);

        var target = new DCX.EventTarget();

        function handler(event) {
            assertEquals("test", event.type);
            assertEquals("foo", event.data);
        }

        function anotherHandler(event) {
            assertEquals("another", event.type);
            assertEquals("bar", event.data);
        }

        target.subscribe("test", handler);
        target.subscribe("another", anotherHandler);
        target.publish("test", "foo");
        target.publish("another", "bar");

    },

    testUnsubscribe: function() {
        expectAsserts(0);

        var target = new DCX.EventTarget();

        function handler(event) {
            assertEquals("test", event.type);
            assertEquals("foo", event.data);
        }

        target.subscribe("test", handler);
        target.unsubscribe("test", handler);
        target.publish("test", "foo");

    },

    testUnsubscribeMultiple: function() {
        expectAsserts(2);

        var target = new DCX.EventTarget();

        function handler(event) {
            assertEquals("test", event.type);
            assertEquals("foo", event.data);
        }

        function anotherHandler(event) {
            assertEquals("test", event.type);
            assertEquals("foo", event.data);
        }

        target.subscribe("test", handler);
        target.subscribe("test", anotherHandler);
        target.unsubscribe("test", anotherHandler);
        target.publish("test", "foo");

    }

});
