{
  "services": {
    "browser": {
      "jQueryObject": "window.jQuery",
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
          "maxEvents": 50,
          "timerinterval": 100,
          "crossDomainEnabled": true,
          "crossDomainFrameSelector": "#uicXdomain"
        }
      ],
      "asyncReqOnUnload": true
    },
    "serializer": {
      "json": {
        "parsers": [
          "window.myProxyParser1",
          "window.myProxyParser2"
        ],
        "stringifiers": [
          "window.myProxyStringifier1",
          "window.myProxyStringifier2"
        ],
        "defaultToBuiltin": false
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
          },
          {
            "name": "touchstart"
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
      "renderTimeThreshold": 600000,
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
    },
    "replay": {}
  }
}