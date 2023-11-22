/*
 *  **************************************************************************
 *  Licensed Materials - Property of HCL
 *  (c) Copyright HCL Technologies Ltd.  2020. All Rights Reserved.
 *  US Government Users Restricted Rights - Use, duplication or disclosure
 *  restricted by GSA ADP Schedule Contract with HCL Technologies.
 *  **************************************************************************
 */


/**
 * @fileOverview JSTestDriver unit tests for the Usability Module
 */
TestCase('usability', {

    testModuleInterface: function() {
        var context = {
                utils: DCX.utils
            },
            module = DCX.getModule("usability", context);
        assertFunction("onevent", module.onevent);
        assertFunction("onmessage", module.onmessage);
        if (module.DEBUG) {
            // Confirm that debug hooks are present in DEBUG builds.
            assertFunction("createHoverEvent", module.createHoverEvent);
            assertFunction("cleanupHoverEvents", module.cleanupHoverEvents);
        }
    },

    // Test each case to bump up code coverage.
    testOnevent: function() {
        var context = {
                utils: DCX.utils
            },
            module = DCX.getModule("usability", context);
        assertUndefined(module.onevent(1));
        assertUndefined(module.onevent({ type: 'mousemove' }));
        assertUndefined(module.onevent({ type: 'mouseout' }));
        assertUndefined(module.onevent({ type: 'click' }));
        assertUndefined(module.onevent({ type: 'blah' }));
    },

    testPostUIEvent: function() {
        var bucket = [];
        var context = {
            post: function(event) {
                bucket.push(event);
            },
            utils: DCX.utils
        };
        var module = DCX.getModule("usability", context);

        if (typeof module.DEBUG === "undefined") {
            return;
        }

        var webEvt = {
            target: { id: "testEvent" },
            name: "",
            idType: -1
        };
        var evt = module.createHoverEvent(null, 0, 0, webEvt);
        evt.xPath = "testEvent";
        module.postUIEvent(evt);
        assertEquals(1, bucket.length);
    },

    testCleanupHoverEvents : function(){
        var bucket = [];
        var context = {
                utils: DCX.utils,
                getConfig: function(){
                    return {};
                },
                post: function(event) {
                    bucket.push(event);
                }
            },
            module = DCX.getModule("usability", context),
            evt1 = module.createHoverEvent(null, 0, 0),
            evt2 = module.createHoverEvent(null, 0, 0),
            evt3 = module.createHoverEvent(null, 0, 0),
            key = null,
            keyCount = 0;

        evt1.xPath = "evt1";
        evt1.webEvent = { target: { id: "evt1" } };
        evt1.hoverDuration = 5000;
        evt2.xPath = "evt2";
        evt2.webEvent = { target: { id: "evt2" } };
        evt2.hoverDuration = 3000;
        evt3.xPath = "evt3";
        evt3.webEvent = { target: { id: "evt3" } };
        evt3.hoverDuration = 2000;

        evt1.parentKey = evt2.getKey();

        module.eventMap[evt1.getKey()] = evt1;
        module.eventMap[evt2.getKey()] = evt2;
        module.eventMap[evt3.getKey()] = evt3;

        module.cleanupHoverEvents(evt1);

        for(key in module.eventMap)
            keyCount++;

        assertEquals(2, keyCount);
        assertEquals(1, bucket.length);
        assertEquals(bucket[0].target.id, evt3.xPath);
    },

    testHover: function() {
        var bucket = [],
            context = {
                utils: DCX.utils,
                getConfig: function() {
                    return {};
                },
                // Mouseout/click should post an event to this queue.
                post: function(event) {
                    bucket.push(event);
                }
            },
            module = DCX.getModule("usability", context),
            event = null,
            hoverTarget = null,
            message = null,
            hoverTime = 0;

        if (typeof module.DEBUG === "undefined") {
            return;
        }

        /*
        // This variable is null until the first call to handleHoverEvents.
        assertEquals(null, module.hoverThreshold());

        // No target so nothing to do.
        assertEquals(undefined, module.handleHoverEvents(event));

        event = {
            type: 'mouseover',
            target: { id: 'search', idType: 1 },
            timestamp: new Date().getTime()
        };
        module.handleHoverEvents(event);
        hoverTarget = module.hoverTargets[event.target.id];
        // Test side effects
        assertNotUndefined(hoverTarget);
        assertEquals(false, hoverTarget.clickOccurred);
        assertEquals(event.timestamp, hoverTarget.timestamp);

        // hoverThreshold should be set after the first call to handleHoverEvents
        // with a valid target.
        assertEquals(module.getHoverTimeThreshold(), module.hoverThreshold());

        // Trigger an event for a target that hasn't received a mouseover event yet.
        event = {
            type: 'mouseout',
            target: { id: 'login_field', idType: 1 },
            timestamp: new Date().getTime()
        };
        module.handleHoverEvents(event);
        hoverTarget = module.hoverTargets[event.target.id];
        assertUndefined(hoverTarget);

        event = {
            type: 'mouseout',
            target: { id: 'search', idType: 1 },
            timestamp: new Date().getTime() + module.getHoverTimeThreshold() + 1
        };
        hoverTarget = module.hoverTargets[event.target.id];
        hoverTime = Math.abs(event.timestamp - hoverTarget.timestamp);
        module.handleHoverEvents(event);
        // Test side effects
        assertNotUndefined(hoverTarget);
        assertEquals(false, hoverTarget.clickOccurred);
        assertUndefined(hoverTarget.timestamp);
        // Test queued events
        assertEquals(1, bucket.length);
        message = bucket.pop();
        assertEquals(4, message.type);
        assertEquals(event.type, message.event.type);
        assertEquals('hover', message.event.dcEvent);
        assertEquals(event.target.id, message.target.id);
        assertEquals(event.target.idType, message.target.idType);
        assertEquals(hoverTime, message.target.currState.hoverTime);
        assertEquals(0, bucket.length);
        */
    },

    testHoverToClick: function() {
        var bucket = [],
            context = {
                utils: DCX.utils,
                getConfig: function() {
                    return {};
                },
                // Mouseout/click should post an event to this queue.
                post: function(event) {
                    bucket.push(event);
                }
            },
            module = DCX.getModule("usability", context),
            event = null,
            hoverTarget = null,
            message = null,
            hoverTime = 0;

        if (typeof module.DEBUG === "undefined") {
            return;
        }

        /*
        event = {
            type: 'mouseover',
            target: { id: 'search', idType: 1 },
            timestamp: new Date().getTime()
        };
        module.handleHoverEvents(event);
        hoverTarget = module.hoverTargets[event.target.id];
        // Test side effects
        assertNotUndefined(hoverTarget);
        assertEquals(false, hoverTarget.clickOccurred);
        assertEquals(event.timestamp, hoverTarget.timestamp);

        event = {
            type: 'click',
            target: { id: 'search', idType: 1 },
            timestamp: new Date().getTime() + module.getHoverTimeThreshold() + 1
        };
        module.handleHoverEvents(event);
        hoverTarget = module.hoverTargets[event.target.id];
        hoverTime = Math.abs(event.timestamp - hoverTarget.timestamp);
        // Test side effects
        assertNotUndefined(hoverTarget);
        assertEquals(true, hoverTarget.clickOccurred);
        assertNotUndefined(hoverTarget.timestamp);
        // Test queued events
        assertEquals(1, bucket.length);
        message = bucket.pop();
        assertEquals(4, message.type);
        assertEquals(event.type, message.event.type);
        assertEquals('hoverToClick', message.event.dcEvent);
        assertEquals(event.target.id, message.target.id);
        assertEquals(event.target.idType, message.target.idType);
        assertEquals(hoverTime, message.target.currState.hoverTime);
        assertEquals(0, bucket.length);

        // Only the first click should post a hoverToClick message
        event = {
            type: 'click',
            target: { id: 'search', idType: 1 },
            timestamp: new Date().getTime() + module.getHoverTimeThreshold() + 1
        };
        module.handleHoverEvents(event);
        // Test side effects
        hoverTarget = module.hoverTargets[event.target.id];
        assertEquals(true, hoverTarget.clickOccurred);
        assertNotUndefined(hoverTarget.timestamp);
        assertEquals(0, bucket.length);
        */
    }

});