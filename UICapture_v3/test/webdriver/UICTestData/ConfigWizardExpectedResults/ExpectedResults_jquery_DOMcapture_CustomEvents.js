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
          "maxEvents": 25,
          "timerinterval": 0,
          "encoder": "gzip"
        }
      ],
      "asyncReqOnUnload": false
    },
    "message": {
      "privacy": [
        {
          "targets": [
            {
              "id": "abcd",
              "idType": "-1"
            }
          ],
          "maskType": 3
        },
        {
          "targets": [
            {
              "id": "myattr=secret",
              "idType": "-3"
            }
          ],
          "maskType": 3
        },
        {
          "targets": [
            {
              "id": "[[\"TestForm\"],[\"UL\",0],[\"LI\",6],[\"INPUT\",0]]",
              "idType": "-2"
            }
          ],
          "maskType": 3
        }
      ]
    },
    "serializer": {
      "json": {
        "defaultToBuiltin": true,
        "parsers": [],
        "stringifiers": []
      }
    },
    "encoder": {
      "enable": true,
      "gzip": {
        "encode": "window.pako.gzip",
        "defaultEncoding": "gzip"
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
          },
          {
            "name": "Login",
            "state": "details",
            "recurseFrames": true
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
    "replay": {
      "domCapture": {
        "enabled": true,
        "options": {
          "captureFrames": true,
          "removeScript": true,
          "maxLength": 10000000
        },
        "triggers": [
          {
            "event": "load"
          },
          {
            "event": "click"
          },
          {
            "event": "change"
          },
          {
            "event": "Login"
          },
          {
            "event": "unload"
          }
        ]
      }
    }
  }
}