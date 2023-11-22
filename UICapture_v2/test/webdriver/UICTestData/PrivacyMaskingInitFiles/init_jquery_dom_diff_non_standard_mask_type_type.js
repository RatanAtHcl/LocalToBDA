{
  "services": {
    "browser": {
      "useCapture": true,
      "jQueryObject": "window.jQuery",
      "blacklist": [
        "rb1"
      ],
      "customid": [
                   "myattr"
                 ]

    },
    "queue": {
      "queues": [
        {
          "qid": "DEFAULT",
        "endpoint": "../js/discoveruipost.php", 
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
            {
            "id": "ai",
            "idType": "-1"
            }
        ],
        "maskType": 3
    },
    {
        "targets": [
            "input[type=radio]"
        ],
        "maskType": 3
        },
    {
        "targets": [
            "input[type=checkbox]"
        ],
        "maskType": 3
    },
    {
        "targets": [
          {
              "id": "[[\"iframe\"],[\"ai\"]]",
              "idType": "-2"
            }
          ],
        "maskType": 3
    },
    {
        "targets": [
          "select[class=toggle]"
        ],
        "maskType": 3
    }]
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
  "inactivityTimeout": 1200000,
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
            "target": "input, select, textarea, button",
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
             "rootWithFrames",
       "#google_image_in_link"
              ] 
          },
          {
            "event": "click"
          },
          {
            "event": "change"
          },
          {
            "event": "unload",
            "fullDOMCapture": true
          }
        ]
      }
    },
    "DCCookie": {
        "dcAppKey": "1d17b0c2e3c44061bfa1ed2e374966ec",
      "sessionizationCookieName": "TLTSID"
    }
  }
}