/*
 *  **************************************************************************
 *  Licensed Materials - Property of HCL
 *  (c) Copyright HCL Technologies Ltd.  2020. All Rights Reserved.
 *  US Government Users Restricted Rights - Use, duplication or disclosure
 *  restricted by GSA ADP Schedule Contract with HCL Technologies.
 *  **************************************************************************
 */

/**
 * @fileOverview The DCCookie module implements the functionality related to reading, setting and transmitting cookies and tokens.
 * @exports DCCookie
 */

/*global DCX:true */

DCX.addModule("DCCookie", function (context) {
    "use strict";

    var moduleConfig = {},
        sessionIDStorageDCX = 0,
        wcxCookieName = "WCXSID",
        dcxCookieName = "TLTSID",
        visitorCookieName = "CoreID6",
        wcxCookieValue,
        dcxCookieValue,
        visitorCookieValue = null,
        dcAppKey,
        utils = context.utils;

    /**
     * Return a random 32 digit string.
     * @function
     * @private
     * @return {String} A randomly generated 32 digit string.
     */
    function generateDCXSID() {
        var dataSet = "123456789",
            dcxsid = utils.getRandomString(1, dataSet) + utils.getRandomString(31, dataSet + "0");

        return dcxsid;
    }

    /**
     * Create a DCXSID cookie using a randomly generated 32 character length string.
     * This is a session cookie i.e. no expires or max-age.
     * @function
     * @private
     * @return {String} The session cookie value or null if the cookie could not be set.
     */
    function createDCXSIDCookie() {
        var cookieValue = generateDCXSID(),
            secure = !!moduleConfig.secureDCXSID,
            undefined;

        // Set the session cookie
        utils.setCookie(dcxCookieName, cookieValue, undefined, undefined, undefined, secure);

        return utils.getCookieValue(dcxCookieName);
    }

    /**
     * Get DA visitor cookie (CoreID6) and store it in visitorCookieValue.
     * @function
     * @private
     */
    function getVisitorCookie() {
        if (visitorCookieValue || !window.cmRetrieveUserID) {
            return;
        }

        try {
            window.cmRetrieveUserID(function (id) {
                visitorCookieValue = id;
            });
        } catch (e) {
#ifdef DEBUG
            utils.clog("Error when invoking cmRetrieveUserID: ", e);
#endif
            visitorCookieValue = null;
        }
    }

    /**
     * Parse and return the session id value from localStorage.
     * @function
     * @private
     * @param {String} sidKey The session id key.
     * @return {String}|undefined Returns the session id value if found, else returns undefined.
     */
    function getSIDFromStorage(sidKey) {
        var expires,
            items,
            itemVal,
            sidValue;

        // Sanity check
        if (!localStorage || !sidKey) {
            return;
        }

        itemVal = localStorage.getItem(sidKey);
        if (itemVal) {
            items = itemVal.split("|");
            expires = parseInt(items[0], 10);
            if (Date.now() > expires) {
                localStorage.removeItem(sidKey);
            } else {
                sidValue = items[1];
            }
        }

        return sidValue;
    }

    /**
     * Set the session id value in localStorage along with the expiration time.
     * @function
     * @private
     * @param {String} sidKey The session id key.
     * @param {String} sidValue The session id value.
     * @return {String}|undefined Returns the session id value if set, else returns undefined.
     */
    function setSIDInStorage(sidKey, sidValue) {
        var expires;

        // Sanity check
        if (!localStorage || !sidKey) {
            return;
        }

        sidValue = sidValue || generateDCXSID();
        expires = Date.now() + sessionIDStorageDCX;
        localStorage.setItem(sidKey, expires + "|" + sidValue);

        return getSIDFromStorage(sidKey);
    }

    /**
     * Parse and return the visiter id value from localStorage.
     * @function
     * @private
     * @param {String} vidKey the visiter id key.
     * @return {String}|Returns the visitor id value if found, else creates a new visitor id and returns.
     */
     function getVIDFromStorage(vidKey) {
        var vidValue;

        // Sanity check
        var localStorage = window.localStorage;

        if (!localStorage || !vidKey) {
            return;
        }

        vidValue = localStorage.getItem(vidKey);
        if (vidValue === null)
        {
            vidValue = utils.getRandomString(28);
            localStorage.setItem(vidKey, vidValue);
        }
        return vidValue;
    }

    /**
     * Process the module configuration and setup the corresponding cookies and tokens.
     * Setup the callback to add the respective headers when the library POSTs.
     * @function
     * @private
     * @param {object} config The module configuration.
     */
    function processConfig(config) {
        var reqHeaders = [],
            sessionIDUsesCookie = utils.getValue(config, "sessionIDUsesCookie", true),
            sessionIDUsesStorage = utils.getValue(config, "sessionIDUsesStorage", false);

        // Check if the dcAppKey is specified
        if (config.dcAppKey) {
            dcAppKey = config.dcAppKey;
            reqHeaders.push(
                {
                    name: "X-Discover-SaaS-AppKey",
                    value: dcAppKey
                }
            );
        }

        if (config.visitorCookieName) {
            visitorCookieName = config.visitorCookieName;
        }

        /**
         * WCX session cookie processing
         */
        if (config.wcxCookieName) {
            wcxCookieName = config.wcxCookieName;
        }
        wcxCookieValue = utils.getCookieValue(wcxCookieName);
        if (wcxCookieValue) {
            reqHeaders.push(
                {
                    name: "X-WCXSID",
                    value: wcxCookieValue
                }
            );
        }

        /**
         * DCXSID processing
         */
        if (config.sessionizationCookieName) {
            dcxCookieName = config.sessionizationCookieName;
        }

        // Storing the session value in Storage is preferred over cookie when both are enabled.
        // Hence, check localStorage for session id before checking cookie.
        if (sessionIDUsesStorage) {
            sessionIDStorageDCX = utils.getValue(config, "sessionIDStorageDCX", 600000);
            dcxCookieValue = getSIDFromStorage(dcxCookieName);
        }
        if (!dcxCookieValue && sessionIDUsesCookie) {
            dcxCookieValue = utils.getCookieValue(dcxCookieName);
        }

        // A new session id needs to be created. Check for WCXSID before creating a new DCXSID.
        if (!dcxCookieValue) {
            if (wcxCookieValue) {
                dcxCookieValue = wcxCookieValue;
            } else {
                if (sessionIDUsesStorage) {
                    dcxCookieValue = setSIDInStorage(dcxCookieName);
                }
                if (!dcxCookieValue && sessionIDUsesCookie) {
                    // Create the DCXSID session cookie
                    dcxCookieValue = createDCXSIDCookie();
                }
            }
        }

        // Session id could not be created in either Storage or Cookie!
        if (!dcxCookieValue) {
            dcxCookieValue = "Check7UIC7Cookie7Configuration77";
        }
        reqHeaders.push(
            {
                name: "X-Discover-SaaS-TLTSID",
                value: dcxCookieValue
            }
        );
        reqHeaders.push(
            {
                name: "X-DCXVID",
                value: getVIDFromStorage("X-DCXVID")
            }
        );

        if (reqHeaders.length) {
            // Register the callback function to pass the X-Discover headers
            DCX.registerBridgeCallbacks([
                {
                    enabled: true,
                    cbType: "addRequestHeaders",
                    cbFunction: function () {
                        return reqHeaders;
                    }
                }
            ]);
        }
    }

    /**
     * Check if the cookie name is whitelisted
     * @function
     * @private
     * @param {String} cookieName The cookie name.
     * @returns {Boolean} true if name is whitelisted, false otherwise.
     */
    function isCookieWhitelisted(cookieName) {
        var i, len,
            result = false,
            rule,
            whitelist = moduleConfig.appCookieWhitelist;

        // Sanity check
        if (!whitelist || !whitelist.length) {
            return result;
        }

        for (i = 0, len = whitelist.length; i < len && !result; i += 1) {
            rule = whitelist[i];
            if (rule.regex) {
                // Create the RegExp object once
                if (!rule.cRegex) {
                    rule.cRegex = new RegExp(rule.regex, rule.flags);
                }
                // Reset and test
                rule.cRegex.lastIndex = 0;
                result = rule.cRegex.test(cookieName);
            } else {
                result = (rule === cookieName);
            }
        }

        return result;
    }

    /**
     * Read the document level cookies, filter them as per the configured whitelist,
     * and record them in a type 14 message.
     * @function
     * @private
     */
    function postAppCookies() {
        var i, j, len,
            appCookies = {},
            cookie,
            cookies = document.cookie,
            cookieList = [],
            cookieName = "",
            cookieValue = "";

        if (!cookies) {
            return;
        }

        cookieList = cookies.split("; ");
        for (i = 0, len = cookieList.length; i < len; i += 1) {
            cookie = cookieList[i];
            j = cookie.indexOf("=");
            // Handle edge case where cookie has no name i.e. j == -1
            if (j >= 0) {
                try {
                    cookieName = decodeURIComponent(cookie.substr(0, j));
                } catch (e1) {
                    cookieName = cookie.substr(0, j);
                }
            }
            cookieValue = cookie.substr(j + 1);
            // Check if this cookie is whitelisted
            if (isCookieWhitelisted(cookieName)) {
                try {
                    appCookies[cookieName] = decodeURIComponent(cookieValue);
                } catch (e2) {
                    appCookies[cookieName] = cookieValue;
                }
            }
        }

        // Add in the visitor cookie if not already present
        if (visitorCookieValue && !appCookies[visitorCookieName]) {
            appCookies[visitorCookieName] = visitorCookieValue;
        }

        context.post({
            type: 14,
            cookies: appCookies
        });
    }

    // Return the module's interface object. This contains callback functions which
    // will be invoked by the UIC core.
    return {
#ifdef DEBUG
        // Expose private functions for unit testing
        processConfig: processConfig,
        createDCXSIDCookie: createDCXSIDCookie,
        isCookieWhitelisted: isCookieWhitelisted,
        postAppCookies: postAppCookies,
#endif
        init: function () {
            moduleConfig = context.getConfig() || {};
            processConfig(moduleConfig);

            getVisitorCookie();
        },

        destroy: function () {
            if (moduleConfig.sessionIDUsesStorage) {
                // Reset the expiry of the storage session id
                setSIDInStorage(dcxCookieName, dcxCookieValue);
            }
        },

        onevent: function (webEvent) {
            switch (webEvent.type) {
            case "screenview_load":
                if (utils.getValue(moduleConfig, "appCookieWhitelist.length", 0)) {
                    getVisitorCookie();
                    postAppCookies();
                }
                break;
            default:
                break;
            }
        }
    };

});