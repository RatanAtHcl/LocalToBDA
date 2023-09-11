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
            },
            ajaxListener: {
                enabled: true,
                events: [
                    { name: "load", target: window},
                    { name: "unload", target: window}
                ]
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
        ajaxListener: {
            filters: [
                {
                }
            ]
        }
    }
}