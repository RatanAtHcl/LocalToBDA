{
  "services": {
    "browser": {
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
          "endpoint": "",
          "maxEvents": 25,
          "timerinterval": 0,
          "encoder": "gzip"
        }
      ],
      "asyncReqOnUnload": false,
      "xhrLogging": false
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
          "maskType": 1
        },
        {
          "targets": [
            {
              "id": "myattr=secret",
              "idType": "-3"
            }
          ],
          "maskType": 1
        },
        {
          "targets": [
            {
              "id": "[[\"iframe\"],[\"container_2\"],[\"table\",0],[\"tbody\",0],[\"tr\",2],[\"td\",1],[\"select\",0]]",
              "idType": "-2"
            }
          ],
          "maskType": 1
        },
          {
          "targets": [
            "select[class=toggle]"
          ],
          "maskType": 1
        },
         {
          "targets": [
            {
              "id": { regex: ".*ate$"},
              "idType": "-1"
            }
          ],
          "maskType": 1
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
      "diffEnabled": false,
      "options": {
          maxLength: 10000000,     
          captureFrames: true,    
          removeScripts: true     
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
        "triggers": [
          {
              event: "click"
          },
          {
              event: "change"
          },
          {
              event: "load"
          },
          {
              event: "unload"
          }
        ],
        options: {
            maxLength: 10000000,
            captureFrames: true,
            removeScripts: true
        }
      }
    }
  }
}