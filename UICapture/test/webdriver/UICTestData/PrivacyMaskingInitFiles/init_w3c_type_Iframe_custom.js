{
  "services": {
    "browser": {
      "sizzleURL": "test/services/fixtures/sizzle.js",
      "sizzleObject": "window.Sizzle",
      "blacklist": [
        "abc"
      ],
      "customid": [
        "myattr"
      ]
    },
    "queue": {
      "queues": [
        {
          "qid": "DEFAULT",
          "endpoint": "DiscoverUIPost.php",
          "maxEvents": 25,
          "timerinterval": 0
        }
      ],
      "asyncReqOnUnload": false
    },
    "message": {
      "privacy": [
        {
          "targets": [
              "input[type=password]"     
          ],
          "maskType": 4,
          "maskFunction": "PrivacyTest.mask"
        }     
      ]
    },
    "serializer": {
      "json": {
        "defaultToBuiltin": true,
        "parsers": [],
        "stringifiers": []
      }
    }
  },
  "core": {
    "modules": {
      "performance": {
        "enabled": true,
        "events": [
          {
            "name": "load",
            "target": window
          },
          {
            "name": "unload",
            "target": window
          }
        ]
      },
      "replay": {
        "enabled": true,
        "events": [
          {
            "name": "load",
            "target": window
          },
          {
            "name": "unload",
            "target": window
          },
          {
            "name": "click",
            "recurseFrames": true
          },
          {
            "name": "focus",
            "target": "input, select, textarea, button",
            "recurseFrames": true
          },
          {
            "name": "blur",
            "target": "input, select, textarea, button",
            "recurseFrames": true
          },
          {
            "name": "change",
            "target": changeTarget,
            "recurseFrames": true
          },
          {
            "name": "resize",
            "target": window
          },
          {
            "name": "scroll",
            "target": window
          },
          {
            "name": "hashchange",
            "target": window
          },
          {
            "name": "orientationchange",
            "target": window
          },
          {
            "name": "touchend"
          }
        ]
      }
    },
    "sessionData": {
      "sessionCookieName": "TLTSID"
    }
  },
  "modules": {
    "performance": {
      "calculateRenderTime": true,
      "filter": {
        "navigationStart": true,
        "unloadEventStart": true,
        "unloadEventEnd": true,
        "redirectStart": true,
        "redirectEnd": true,
        "fetchStart": true,
        "domainLookupStart": true,
        "domainLookupEnd": true,
        "connectStart": true,
        "connectEnd": true,
        "secureConnectionStart": true,
        "requestStart": true,
        "responseStart": true,
        "responseEnd": true,
        "domLoading": true,
        "domInteractive": true,
        "domContentLoadedEventStart": true,
        "domContentLoadedEventEnd": true,
        "domComplete": true,
        "loadEventStart": true,
        "loadEventEnd": true
      }
    }
  }
});
}());