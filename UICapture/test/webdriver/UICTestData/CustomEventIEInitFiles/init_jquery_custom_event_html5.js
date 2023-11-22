{
  "services": {
    "browser": {
       "useCapture": false,
       "jQueryObject": "window.jQuery",
    },
    "queue": {
      "queues": [
        {
          "qid": "DEFAULT",
          "endpoint": "../../js/discoveruipost.php", 
          "maxEvents": 25,
          "maxSize": 20000,
          "timerinterval": 0,
          "checkEndpoint": false,
          "endpointCheckTimeout": 5000,
          "encoder": "gzip"
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
    },
    "domCapture": {
      "options": {
        "captureFrames": true,
        "removeScripts": true,
        "maxLength": 10000000
      },
      "diffEnabled": true
    }
  },
  "core": {
    "modules": {
      "performance": {
        "enabled": false,
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
            "name": "loadWithFrames"
          },
          { 
            "name": "Login", "state": "detail","recurseFrames": true
          },
          { 
            "name": "customIEEvent", "state": "detail","recurseFrames": true
          }
        ]
      },
      "usability": {
        "enabled": false,
        "events": [
          {
            "name": "click",
            "recurseFrames": true
          },
          {
            "name": "mousemove",
            "target": window,
            "recurseFrames": true
          },
          {
            "name": "mouseout",
            "target": window,
            "recurseFrames": true
          }
        ]
      },
      "DCCookie": {
        "enabled": true
      }
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
            "event": "unload"
          },
          {
            "event": "customIEEvent"
          }
        ]
      }
    },
    "DCCookie": {
      "dcAppKey": "43774adf2d954fca842df660d7a37a7d",
      "sessionizationCookieName": "TLTSID"
    }
  }
}