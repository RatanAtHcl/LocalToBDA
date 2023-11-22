/*
 *  **************************************************************************
 *  Licensed Materials - Property of HCL
 *  (c) Copyright HCL Technologies Ltd.  2020. All Rights Reserved.
 *  US Government Users Restricted Rights - Use, duplication or disclosure
 *  restricted by GSA ADP Schedule Contract with HCL Technologies.
 *  **************************************************************************
 */
/*global DCX*/
var supportedInterfaces = ["messageRedirect", "screenCapture"];
var iOSInterfaces = (function () {
    "use strict";
    var i,
        len,
        fE,
        ifs = [];

    /**
     * Function to create a URL that encodes the redirect type and data.
     * The URL format is:
     *    discover:<type>?data=<URL encoded data>
     * @param {string} type The redirect type. e.g. "messageRedirect"
     * @param {string} [data] Any data that needs to be encoded into
     *                 the URL.
     * @returns The encoded URL or null.
     */
    function createMsgURL(type, data) {
        var msg = "discover:";

        // Sanity check
        if (!type) {
            return null;
        }

        msg += type;

        if (data) {
            msg += "?data=" + encodeURIComponent(data);
        }
        return msg;
    }

    /**
     * Create a hidden iframe and update the source URL.
     * @param {String} srcURL URL to be set as the iframe source URL
     */
    function updateFrameSource(srcURL) {
        var docFrag = document.createDocumentFragment();

        if (!fE) {
            fE = document.createElement("IFRAME");
            fE.width = fE.height = "0";
            fE.hidden = true;
            fE.tabIndex = -1;
            fE.style.display = "none";
        }
        fE.src = srcURL;
        docFrag.appendChild(fE);
        document.body.appendChild(docFrag);
    }

    /**
     * The implementation of message redirect functionality.
     * The message data is encoded into the URL.
     *
     * @param {String} msg The serialized JSON message.
     */
    function msgRedirect(msg) {
        var url = createMsgURL("messageRedirect", msg);
        if (msg && url) {
            updateFrameSource(url);
        }
    }

    /**
     * The implementation of screen capture functionality.
     */
    function screenCapture() {
        var url = createMsgURL("screenCapture");
        if (url) {
            updateFrameSource(url);
        }
    }

    /**
     * Create and return the interface array to be passed to
     * the DCX.registerBridgeCallbacks() API
     */
    if (supportedInterfaces) {
        for (i = 0, len = supportedInterfaces.length; i < len; i += 1) {
            switch (supportedInterfaces[i]) {
            case "messageRedirect":
                ifs.push({
                    enabled: true,
                    cbType: "messageRedirect",
                    cbFunction: msgRedirect
                });
                break;
            case "screenCapture":
                ifs.push({
                    enabled: true,
                    cbType: "screenCapture",
                    cbFunction: screenCapture
                });
                break;
            default:
                break;
            }
        }
    }
    return ifs;
}(supportedInterfaces));

// Call the UIC API and register the callbacks.
if (DCX && DCX.registerBridgeCallbacks) {
    DCX.registerBridgeCallbacks(iOSInterfaces);
}