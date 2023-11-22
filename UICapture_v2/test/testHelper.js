/*
 *  **************************************************************************
 *  Licensed Materials - Property of HCL
 *  (c) Copyright HCL Technologies Ltd.  2020. All Rights Reserved.
 *  US Government Users Restricted Rights - Use, duplication or disclosure
 *  restricted by GSA ADP Schedule Contract with HCL Technologies.
 *  **************************************************************************
 */


function stubFn(returnVal) {
    var fn = function () {
        fn.called = true;
        fn.args = arguments;
        ++fn.callCount;
        return returnVal;
    };
    fn.called = false;
    fn.callCount = 0;

    return fn;
}

// Returns the version of Internet Explorer or a -1
// (indicating the use of another browser).
function getIEVersion() {
    var ua,
        re,
        rv = -1;

    if (navigator.appName == 'Microsoft Internet Explorer') {
        ua = navigator.userAgent;
        re  = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
        if (re.exec(ua) !== null) {
            rv = parseFloat(RegExp.$1);
        }
    }
    return rv;
}

testHelper = (function() {

    var w3cBrowser = typeof document.dispatchEvent === "function";

    return {

        /**
         * Creates and returns mouse event.
         */
        createMouseEvent: (function() {
            //IE
            if (typeof document.createEvent !== "function") {
                return function (type, elem, clientX, clientY) {
                    var evt = document.createEventObject();
                    evt.bubbles = true;
                    (elem || window).fireEvent("on"+type, evt);
                    evt.pageX = typeof clientX !== "undefined" ? clientX : 0;
                    evt.pageY = typeof clientY !== "undefined" ? clientY : 0;
                    evt.clientX = evt.screenX = evt.pageX;
                    evt.clientY = evt.screenY = evt.pageY;
                    return evt;
                };
            }
            else {
                return function(type, elem, clientX, clientY) {
                    var x = typeof clientX === "undefined" ? 0 : clientX,
                        y = typeof clientY === "undefined" ? 0 : clientY,
                        evt = document.createEvent('MouseEvents');
                    evt.initMouseEvent(
                            type,       //mouse event type
                            true,        //canBubble
                            true,        //cancelable
                            window,      //view
                            0,           //detail
                            x,           //screenX
                            y,           //screenY
                            x,           //clientX
                            y,           //clientY
                            false,       //ctrlKey
                            false,       //altKey
                            false,       //shiftKey
                            false,       //metaKey
                            0,           //left button clicked
                            null);       //relatedTarget
                    (elem || window).dispatchEvent(evt);
                    return evt;
                };
            }
        }()),


        /**
         * Creates and returns touch event when runs on touch device. Otherwise
         * returns fake event.
         */
        //TODO complete it - add support for touch arrays
        createTouchEvent: (function() {
            if (typeof document.createEvent !== "function") {
                return function (type, elem) {
                    var evt = document.createEventObject();
                    (elem || window).fireEvent("on"+type, evt);
                    evt.touches = [];
                    evt.changedTouches = [];
                    evt.targetTouches = [];
                    return evt;
                };
            }
            try {
                document.createEvent('TouchEvent');
                return function(type, elem) {
                    var evt = document.createEvent('TouchEvent');
                    evt.initTouchEvent(type, true, true);
                    (elem || window).dispatchEvent(evt);
                    return evt;
                };
            } catch (err) {
                return function(type, elem) {
                    var evt = document.createEvent('Event');
                    evt.initEvent(type, true, true);
                    (elem || window).dispatchEvent(evt);
                    evt.touches = [];
                    evt.changedTouches = [];
                    evt.targetTouches = [];
                    return evt;
                };
            }
        }()),

        fireUIEvent: (function(){
            if (w3cBrowser) {
                return function(elem, type, canBubble) {
                    canBubble = typeof canBubble === "undefined" ? false : true;
                    var uie = document.createEvent("UIEvent");
                    uie.initUIEvent(type, canBubble, false, window, 1);
                    (elem || window).dispatchEvent(uie);
                };
            } else {
                return function(elem, type, canBubble) {
                    canBubble = typeof canBubble === "undefined" ? false : true;
                    var evt = document.createEventObject();
                    evt.bubbles = canBubble;
                    evt.cancelable = false;
                    (elem || window).fireEvent("on"+type, evt);
                };
            }
        })(),
        
        privacyMask: function () {
            return "X---X";            
        }
    };

})();