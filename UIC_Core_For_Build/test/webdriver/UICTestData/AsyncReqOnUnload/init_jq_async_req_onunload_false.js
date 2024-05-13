{
  "services": {
    "browser": {
      "useCapture": true,
      "sizzleObject": "window.Sizzle"
    },
    "queue": {
      "queues": [
        {
          "qid": "DEFAULT",
          "endpoint": "../js/discoveruipost_pending.php",
          "maxEvents": 25,
          "maxSize": 0,
          "timerinterval": 0,
          "checkEndpoint": true,
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
        "maxLength": 1000000,
        "maxMutations": 15
      },
      "diffEnabled": true
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
      
      "usability": {
        "enabled": true,
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
            "name": "Login",
            "target": window
          },
          {
            "name": "touchend"
          },
          {
            "name": "touchstart"
          }, 
          { "name": "loadWithFrames"
          },
           {
            "name": "Login",
            "target": window
          }
        ]
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
//"fullDOMCapture": true
          },
          {
            "event": "click"
            //"delay": 100,
            //"fullDOMCapture": true
          },
          {
            "event": "change"
          },
          {
            "event": "unload"
          },
          {
            "event": "Login",
            "fullDOMCapture": true
          }
        ]
      },
           "geolocation": {
        "enabled": true,
        "triggers": [
          {
            "event": "load"
          }
        ]
      }
      }
  }
}