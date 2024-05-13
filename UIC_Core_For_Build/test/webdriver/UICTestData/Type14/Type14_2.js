{
  "services": {
    "browser": {
      "sizzleURL": "test/services/fixtures/sizzle.js",
      "sizzleObject": "window.Sizzle"      
    },
    "queue": {
      "queues": [
        {
          "qid": "DEFAULT",
          "endpoint": "DiscoverUIPost.php",
          "maxEvents": 100,
          "timerinterval": 0
        }
      ],
      "asyncReqOnUnload": false
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
          "enabled": true  
          
      },
        "DCCookie": {
            "enabled": true
        }
    }
   
  },
  "modules": {
     "DCCookie": {
         "appCookieWhitelist": [{ regex: ".*" }],
         "dcAppKey": "1d17b0c2e3c44061bfa1ed2e374966ec",
         "sessionizationCookieName": "TLTSID"
     }
  }
});
}());