/*
 *  **************************************************************************
 *  Licensed Materials - Property of HCL
 *  (c) Copyright HCL Technologies Ltd.  2020. All Rights Reserved.
 *  US Government Users Restricted Rights - Use, duplication or disclosure
 *  restricted by GSA ADP Schedule Contract with HCL Technologies.
 *  **************************************************************************
 */

// Default configuration
(function () {
  "use strict";
  // DCX is expected to be defined in the global scope i.e. window.DCX
  var config, isReinitialized = false,
    DCX = window.DCX,
    /**
     * Due to issue with lack of change event propagation on legacy IE (W3C version of UIC)
     * its mandatory to provide more specific configuration on IE6, IE7, IE8 and IE9 in legacy
     * compatibility mode. For other browsers changeTarget can remain undefined as it is
     * sufficient to listen to the change event at the document level.
     */
    changeTarget;

  if (DCX.getFlavor() === "w3c" && DCX.utils.isLegacyIE) {
    changeTarget = "input, select, textarea, button";
  }

  config =
    // *** DCX UIC CONFIGURATION BEGINS HERE ***
    {
      core: {
        // List of CSS selectors corresponding to elements for which no user interaction is to be reported.
        // WARNING: Since this list has to be evaluated for each event, specifying inefficient selectors can cause performance issues.
        blockedElements: [],

        // Internal version for reporting & tracking purposes.  Can be a single string or JSON object.
        version: {
          author: "HCL Discover",
          date: "",
        },

        // List of CSS selectors corresponding to elements which needs to be skipped from capturing.
        // WARNING: Since this list has to be evaluated for each event, specifying inefficient selectors can cause performance issues.
        //  e.g. ["img[id^=testImage]"] - this will skip capturing img elements where id starts with testImage.
        doNotCaptureElements: [],

        // Inactivity timeout should be set at least a few minutes lower than session timeout on the application
        inactivityTimeout: 25 * 60 * 1000, // 25 Minutes

        // WARNING: For advanced users only. Modifying the modules section may lead to unexpected behavior and or performance issues.
        modules: {
          replay: {
            events: [
              {
                name: "change",
                target: changeTarget,
                recurseFrames: true,
                attachToShadows: true,
              },
              { name: "click", recurseFrames: true },
              { name: "hashchange", target: window },
              { name: "focus", target: changeTarget, recurseFrames: true },
              { name: "blur", target: changeTarget, recurseFrames: true },
              { name: "load", target: window },
              { name: "unload", target: window },
              { name: "resize", target: window },
              { name: "scroll", target: window },
              { name: "orientationchange", target: window },
              { name: "touchend" },
              { name: "touchstart" },
            ],
          },
          usability: {
            events: [
              { name: "click", recurseFrames: true },
              { name: "mousemove", recurseFrames: true },
              { name: "mouseout", recurseFrames: true },
              { name: "submit", recurseFrames: true },
            ],
          },
          performance: {
            events: [
              { name: "load", target: window },
              { name: "unload", target: window },
            ],
          },
          DCCookie: {
            enabled: true,
          },
          rageClicks: {
            enabled: false,
            events: [
              { name: "load", target: window }
            ]
          },
        },

        normalization: {
          /**
           * User defined URL normalization function which accepts an URL or path and returns
           * the normalized URL or normalized path.
           * @param urlOrPath {String} URL or Path which needs to be normalized.
           * @returns {String} The normalized URL or Path.
           */
          urlFunction: function (urlOrPath) {
            // Normalize the input URL or path here.
            // Refer to the documentation for an example to normalize the URL path or URL query parameters.
            return urlOrPath;
          },
        },

        // Set the sessionDataEnabled flag to true only if it's OK to expose Discover session data to 3rd party scripts.
        sessionDataEnabled: false,
        sessionKeepAlive: false,
        sessionData: {
          // Set this flag if the session value needs to be hashed to derive the Discover session ID
          sessionValueNeedsHashing: true,

          // Specify sessionQueryName only if the session id is derived from a query parameter.
          sessionQueryName: "sessionID",
          sessionQueryDelim: ";",

          // sessionQueryName, if specified, takes precedence over sessionCookieName.
          sessionCookieName: "jsessionid",
        },
        // Automatically detect screenview changes by tracking URL path and hash change.
        screenviewAutoDetect: true,
        // list of ignored frames pointed by css selector (top level only)
            framesBlacklist: [
                "#iframe1"
            ],
            // advanced console logging
            // Can capture user logged messages from console
            captureConsole: {
                enabled: true,
                methods: []
            },
      },
      services: {
        queue: {
          asyncReqOnUnload: true, // Must be set to true due to changes in browser technology
          useBeacon: false, // DNCA must be version 12.1.5 or higher
          useFetch: true, // Set to true to help prevent data loss
          xhrLogging: false, // Useful for debgging
          //dcxWorker: window.fetch && window.Worker ? new Worker("dcxWorker.js") : null,
          queues: [
            {
              qid: "DEFAULT",
              endpoint: "/DiscoverUIPost.php",
              maxEvents: 20,
              timerInterval: 30000,
              maxSize: 400000,
              checkEndpoint: false,
              encoder: "gzip",
              endpointCheckTimeout: 3000,
            },
          ],
        },
        message: {
          maskVisiblePasswords: false, // If masking needs to be done on visible password
          privacy: [
            {
              targets: [
                // CSS Selector: All password input fields
                "input[type=password]",
              ],
              maskType: 2,
            },
          ],
          privacyPatterns: [
            /**
                     * Use privacy patterns to match and replace specific patterns in the HTML.
                     *
                     * WARNING: Applying regular expressions to the HTML DOM can have a
                     * performance impact on the application. Adequate testing must be performed
                     * to ensure that pattern matching is not only working as expected but also
                     * not causing performance impact.
                     *
                     * Example illustrating blocking of SSN
                    {
                        pattern: { regex: "\\d{3}-\\d{2}-\\d{4}", flags: "g" },
                        replacement: "XXX-XX-XXXX"
                    }
                     */
          ],
        },
        serializer: {
          json: {
            defaultToBuiltin: true,
            parsers: ["JSON.parse"],
            stringifiers: ["JSON.stringify"],
          },
        },
        encoder: {
          gzip: {
            /**
             * The encode function should return encoded data in an object like this:
             * {
             *     buffer: "encoded data"
             * }
             */
            encode: "window.pako.gzip",
            defaultEncoding: "gzip",
          },
        },
        domCapture: {
          diffEnabled: true,
          // DOM Capture options
          options: {
            maxMutations: 300,       // If this threshold is met or exceeded, a full DOM is captured instead of a diff.
            maxLength: 10000000,      // If this threshold is exceeded, the snapshot will not be sent
            captureFrames: false,  // Should child frames/iframes be captured
            captureShadowDOM: false,
            captureStyle: true, // Capture inline-style tags (Helpful in reducing capture size, requires Replay Rules)
            keepImports: true, // Capture link, rel, import tags
            removeComments: true, // Should comments be removed from the captured snapshot
            removeScripts: false,      // Should script tags be removed from the captured snapshot
            removeBase64: 50000, // Remove embeded base64 images > size in bytes (0 = remove all base64 images)
            captureJSS: false,  // Capture CSS Styles for React/JSS sites
            //customStyle: "#className {display: none;}" //user can pass custom style on page to override some style.
          }
        },
        browser: {
          sizzleObject: "window.Sizzle",
          jQueryObject: "window.jQuery",
          /*blacklist: [{
                regex: ".*",
                flags: "ig"
            }],*/
          customid: ["data-dcxid", "name"],
        },
      },
      modules: {
        usability: {
          hoverThreshold: 2000, // ms
        },
        performance: {
          calculateRenderTime: true,
          renderTimeThreshold: 600000,
          filter: {
            navigationStart: false,
            unloadEventStart: false,
            unloadEventEnd: false,
            redirectStart: false,
            redirectEnd: false,
            fetchStart: false,
            domainLookupStart: false,
            domainLookupEnd: false,
            connectStart: false,
            connectEnd: false,
            secureConnectionStart: false,
            requestStart: false,
            responseStart: false,
            responseEnd: false,
            domLoading: false,
            domInteractive: false,
            domContentLoadedEventStart: false,
            domContentLoadedEventEnd: false,
            domComplete: false,
            loadEventStart: false,
            loadEventEnd: false,
          },
        },
        replay: {
          // Geolocation configuration
          geolocation: {
            enabled: false,
            triggers: [
              {
                event: "load",
              },
            ],
          },
          // DOM Capture configuration
          domCapture: {
            /**
             * NOTE: Enabling DOM Capture has significant implications on data transmission and infrastructure.
             * Hence this feature should be enabled judiciously. If enabled, it requires further configuration
             * to only perform the DOM Capture based on specific events and elements. Please refer to the
             * documentation for more details.
             */
            enabled: true,
            /**
             * The rules for triggering DOM Snapshots are similar to the Privacy configuration.
             * It accepts a mandatory "event" followed by one or more optional targets
             * as well as an optional delay after which to take the DOM snapshot.
             *
             * The default configuration below will capture a full DOM snapshot for each and every click,
             * change action as well as for all screenview load and unloads. Refer to the documentation
             * for details on fine tuning this configuration to specific elements and screenviews.
             */
            triggers: [
              {
                event: "load",
                fullDOMCapture: true,
                delay: 300, // ms
              },
              {
                event: "click",
                targets: ["input[type=radio]", "input[type=checkbox]"],
                delay: 100, // ms -- Assists with Replay Fidelity on dynamic radio buttons & checkboxes
              },
              {
                event: "click",
              },
              {
                event: "change",
              },
            ],
          },
        },
        DCCookie: {
          appCookieWhitelist: [
            {
              regex: ".*",
            },
          ],
          dcAppKey: "",
        },
        rageClicks: {
          clickInterval: 4000, // Ms between first registered click of element and current click to determine if Rage Click
          rageMin: 5, // Minimum number of times an element is clicked on within the clickInterval before being classed as Rage Click
        }
      },
    };

  //----------------------------------------------------------------------------------------------------------
  //--------------------------------------------------------------------------------- Alternate FireFox Config
  //----------------------------------------------------------------------------------------------------------
  if (navigator.userAgent.indexOf("Firefox") !== -1) {
    //------------------------- Work arond for FETCH issues
    config.services.queue.asyncReqOnUnload = false;
    config.services.queue.useFetch = false;
  }

  //----------------------------------------------------------------------------------------------------------
  //------------------------------------------------------------------------------------- Alternate IE Configs
  //----------------------------------------------------------------------------------------------------------
  if (document.documentMode === 10) {
    //-------------------------- Alternate config for IE10 (No Diff Support)
    config.services.queue.useFetch = false;
    config.services.queue.useBeacon = false;
    config.services.queue.DCXWorker = false;
    config.services.domCapture.diffEnabled = false;
    config.modules.replay.domCapture.triggers = [
      {
        event: "click",
        targets: ["a", "a *", "button", "button *"],
      },
      {
        event: "change",
      },
      {
        event: "load",
        delay: 500,
      },
    ];
  }
  if (document.documentMode === 11) {
    //-------------------------------------------- Alternate Config for IE11
    config.services.queue.useFetch = false;
    config.services.queue.useBeacon = false;
    config.services.queue.DCXWorker = false;
    config.services.message.privacyPatterns = [];
  }

  DCX.init(config);
})();
