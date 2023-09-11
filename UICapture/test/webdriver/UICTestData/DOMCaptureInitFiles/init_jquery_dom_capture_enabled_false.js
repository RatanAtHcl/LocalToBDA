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
         "timerinterval": 0
       }
     ],
     "asyncReqOnUnload": false
   },
   "message": {
     "privacy": [
       {
         "targets": [
           "input[name=login\\$password]"
         ],
         "maskType": 2
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
   "domCapture": {
     "options": {
       "captureFrames": true,
       "removeScripts": true,
       "removeComments": true,
       "maxLength": 1000000,
       "maxMutations": 100
     },
     "diffEnabled": true
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
 },
   "geolocation": {
     "enabled": false,
     "triggers": [
       {
         "event": "load"
       }
     ]
   },
   "replay": {
     "domCapture": {
       "enabled": false,
       "triggers": [
         {
           "event": "click"
         },
         {
           "event": "change"
         },
         {
           "event": "load"
         },
         {
           "event": "unload"
         }
       ]
     }
   },
   "DCCookie": {
     "appCookieWhitelist": [
       {
         "regex": ".*"
       },
       "JSESSIONID",

{
         "regex": "*IBM"
       }
     ],
     "dcAppKey": "b3cdcba438954a8482dbcaa453886597"
   }
});