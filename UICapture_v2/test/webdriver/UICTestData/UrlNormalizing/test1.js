{
    core: {
        modules: {
            performance: {
                enabled: true,
                events: [
                  { name: "load", target: window },
                  { name: "unload", target: window }
                ]
            },
            replay: {
                enabled: true
            },
            DCCookie: {
                enabled: true
            }
        },
        normalization: {
            urlFunction: function(urlOrPath) {
                return urlOrPath.replace("?", "/");
            }
        }
    },
    services: {
        browser: {
          sizzleURL: "test/services/fixtures/sizzle.js",
          sizzleObject: "window.Sizzle"      
        },
        queue: {
          queues: [
            {
              qid: "DEFAULT",
              endpoint: "DiscoverUIPost.php",
              maxEvents: 100,
              timerinterval: 0
            }
          ],
          asyncReqOnUnload: false
        },
        serializer: {
          json: {
            defaultToBuiltin: true,
            parsers: [],
            stringifiers: []
          }
        }
    },
    modules: {
    }
}