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
          "endpoint": "../js/DiscoverUIPost.php",
          "maxEvents": 25,
          "maxSize": 0,
          "timerinterval": 0,
          "encoder": "gzip"
        }
      ],
      "asyncReqOnUnload": false
    },
  "message": {
      "privacy": [
     
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
        "maxLength": 1000000,
        "maxMutations": 100
      },
      "diffEnabled": true
    }
  },
  "core": {
  "inactivityTimeout": 120000,
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
            "name": "orientationchange",
            "target": window
          },
          {
            "name": "touchend"
          },
          {
            "name": "touchstart"
          },
       { "name": "loadWithFrames"
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
            "recurseFrames": true
          },
          {
            "name": "mouseout",
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
           "event": "load",
       "screenviews": 
       [
             "rootWithFrames"
              ]
          },
          {
            "event": "click"
          },
          {
            "event": "change"
          },
          {
            "event": "unload"
          }
       //,{
             //"event": "mouseup"
          // },
           //{
            //  "event": "mousedown"
          // }
        ]
      }
    },
    "DCCookie": {
      "dcAppKey": "43774adf2d954fca842df660d7a37a7d",
      "sessionizationCookieName": "TLTSID"
    }
  }
}