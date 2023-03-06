




///  normal mutation code

const element = document.body;
const options = {
  childList: true, // listen to listen to children being added or removed
  attributes: true, // listen to attributes changes
  subtree: true // omit or set to false to observe only changes to the parent node
}

const callback = (mutationList, observer) => {
  mutationList.forEach((mutation) => {
    switch(mutation.type) {
      case 'childList':

            alert('childList')
         // check mutation.addedNodes or mutation.removedNodes
        break;
      case 'attributes':
        /* An attribute value changed on the element in
           mutation.target; the attribute name is in
           mutation.attributeName and its previous value is in
           mutation.oldValue */
           alert('attributes')
        break;
    }
  });
}

const observer = new MutationObserver(callback);
observer.observe(element, options);


// If there is lazy load on img
function observeImages(callback) {
    const images = document.querySelectorAll("img[data-testid='lazy-image']");
    let count = 0;
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && count <= images.length) {
          count++;
          if (count % 10 === 0) {
            setTimeout(() => {
                callback(count);
            }, 500);
          }
        }
      });
    });
  
    images.forEach(image => {
      observer.observe(image);
    });
  
    window.addEventListener('load', () => {
      images.forEach(image => {
        if (observer && observer.root && observer.root.contains(image)) {
          observer.observe(image);
        }
      });
    });
  }
  
// Example usage
observeImages(count => {
    alert(`${count} images are loaded and visible`);
    var evt = new CustomEvent('DCXLazyLoad'); // DOM Oberver issue  (task no : 1970)
    document.dispatchEvent(evt); // Dispatch custom event - must be configured in Replay (and optionally DOM Capture)
    DCX.flushAll();
});


//const lazyComponent = document.querySelector('#home');
 // const observer = new IntersectionObserver((entries) => {
//     debugger
//     if (entries[0].isIntersecting) {
//         debugger
//         // The lazy-loaded component is now visible, so start observing it
//         const componentObserver = new MutationObserver((mutations) => {
//             debugger
//         // Handle changes to the component's DOM here
//         });
//         componentObserver.observe(entries[0].target.childNodes[0], { childList: true, subtree: true });

//         // Stop observing the intersection changes, we don't need it anymore
//        observer.disconnect();
//     }
// });

// observer.observe(lazyComponent);

//mutation actule code 


 // var DOMIntersectionObserve = function(target) {
        //     debugger
        //     let intervalCnt = 0;
        //     const interval = setInterval(function() {
        //         // const images = document.querySelectorAll("img[data-testid='lazy-image']");
        //         //const images = document.querySelectorAll("#home .MuiGrid-root img");
        //         //const images = document.querySelectorAll("#category-page .image-lzy-content img");
        //         const images = document.querySelectorAll(target.selector);
        //         debugger
        //         if (images.length > 0) {
        //             // If there is lazy load on img
        //             function observeImages(callback) {
        //                 let count = 0;
        //                 //let triggercnt = (images.length > 3) ? 3 : images.length;
        //                 const observer = new IntersectionObserver(function(entries, observer) {
        //                     entries.forEach(function(entry) {
        //                         if (entry.isIntersecting && count <= images.length) {
        //                             count++;
        //                             if (count % 10 === 0) {
        //                                 callback();
        //                             }
        //                         }
        //                     });
        //                 });
                    
        //                 images.forEach(function(image) {
        //                     observer.observe(image);
        //                 });
                    
        //                 window.addEventListener('load', function() {
        //                     images.forEach(function(image) {
        //                         if (observer && observer.root && observer.root.contains(image)) {
        //                          observer.observe(image);
        //                         }
        //                     });
        //                 });
        //             }
                    
        //             // Example usage
        //             observeImages(function () {
        //                 if (typeof DCX !== "undefined") {
        //                     var evt = new CustomEvent(target.eventName);
        //                     document.dispatchEvent(evt);
        //                     alert(target.eventName);
        //                 }
        //             });
        //             clearInterval(interval)
        //         } else if(intervalCnt >= 4) {
        //             clearInterval(interval);
        //         } else {
        //             intervalCnt++;
        //         }
        //     }, 2000);
        // };

var config = {
    attributes: true, 
    attributesOldValue: true, 
    attributeFilter: ["id", "class"], 
    subtree: true, 
    childList: true, 
    characterData: true,
    characterDataOldValue: true,
    composed: true,
};

var observer = new MutationObserver(function(mutations) {

    var eventCount = 0;
    debugger
    mutations.forEach(function(mutation) {
        var takeSnapshot = "", target = undefined, customFunction = undefined;
        debugger
        if (mutation.type === "attributes" || mutation.type === "childList") {
            mutation.addedNodes.forEach(function(node) {
                target = undefined;
                target = targets.find(function(t) {
                        if (t.selector.indexOf(mutation.target.className) > -1 && mutation.className != "") { return(t) }
                });
                if (!target) {
                    target = targets.find(function (t) { 
                        if (t.selector.indexOf(mutation.target.id) > -1 && mutation.target.id != "") { return(t) }
                    });
                }
                if (!target) {
                    target = targets.find(function (t) { 
                        if (t.selector.toLowerCase().indexOf(mutation.target.nodeName.toLowerCase()) > -1) { return(t) }
                    });
                }
                if (!target) {
                    target = targets.find(function (t) { 
                        if (t.selector.toLowerCase() === "body") { return(t) }
                    });
                }
                
                if (target && target.maxEvents > eventCount) {
                    if (typeof(node.id) === "string" && target && (target.added === 1 || target.added === 2)) {
                        if (node.id === target.childNode) {
                            takeSnapshot = target.eventName;
                        }
                    }
                    if (typeof(node.className) === "string" && target && takeSnapshot === "" && (target.added === 1 || target.added === 2)) {
                        if (node.className === target.childNode) {
                            takeSnapshot = target.eventName;
                        }
                    }
                    if (typeof(node.outerHTML) === "string" && target && takeSnapshot === "" && (target.added === 1 || target.added === 2)) {
                        if (node.outerHTML.indexOf(target.childNode) > -1) {
                            takeSnapshot = target.eventName;
                        }
                    }
                    if (typeof(node.nodeValue) === "string" && target &&  takeSnapshot === "" && (target.added === 1 || target.added === 2)) {
                        if (node.nodeValue.indexOf(target.childNode) > -1) {
                            takeSnapshot = target.eventName;
                        }
                    }
                }
            });

            mutation.removedNodes.forEach(function(node) {
                target = undefined;
                console.log("mutationTarget" + mutation.target.className);
                target = targets.find(function(t) {
                        if (t.selector.indexOf(mutation.target.className) > -1 && mutation.className != "") { return(t) }
                });
                if (!target) {
                    target = targets.find(function (t) { 
                        if (t.selector.indexOf(mutation.target.id) > -1 && mutation.target.id != "") { return(t) }
                    });
                }
                if (!target) {
                    target = targets.find(function (t) { 
                        if (t.selector.toLowerCase().indexOf(mutation.target.nodeName.toLowerCase()) > -1) { return(t) }
                    });
                }
                if (!target) {
                    target = targets.find(function (t) { 
                        if (t.selector.toLowerCase() === "body") { return(t) }
                    });
                }
                
                if (target && target.maxEvents > eventCount) {
                    if (typeof(node.id) === "string" && target && (target.added === 0 || target.added === 2)) {
                        if (node.id === target.childNode) {
                            takeSnapshot = target.eventName;
                        }
                    }
                    if (typeof(node.className) === "string" && target && takeSnapshot === "" && (target.added === 0 || target.added === 2)) {
                        if (node.className === target.childNode) {
                            takeSnapshot = target.eventName;
                        }
                    }
                    if (typeof(node.outerHTML) === "string" && target && takeSnapshot === "" && (target.added === 0 || target.added === 2)) {
                        if (node.outerHTML.indexOf(target.childNode) > -1) {
                            takeSnapshot = target.eventName;
                        }
                    }
                    if (typeof(node.nodeValue) === "string" && target && takeSnapshot === "" && (target.added === 0 || target.added === 2)) {
                        if (node.nodeValue.indexOf(target.childNode) > -1) {
                            takeSnapshot = target.eventName;
                        }
                    }
                }
            });

            console.log('takeSnapshot ====>',takeSnapshot);
            if (typeof DCX !== "undefined" && takeSnapshot !== "") {
                if (typeof target.customFunction === "string") {
                    customFunction = utils.access(target.customFunction);
                } else {
                    customFunction = target.customFunction;
                }
                if (typeof customFunction === "function") { 
                    customFunction(); // Execute custom JavaScript function
                }
                var evt = new CustomEvent(target.eventName); // DOM Oberver issue  (task no : 1970)
                document.dispatchEvent(evt); // Dispatch custom event - must be configured in Replay (and optionally DOM Capture)
                eventCount = eventCount + 1;
                console.log ("DCX: Mutation Logged " + target.eventName + " custom event");
            } else {
                console.log ("DCX: Mutation Ignored");
            }
            console.log("last mutation target " + mutation.target);
        }
    });
});

for (let i=0; i<targets.length; i++) {
    try {
        const parentElement = document.querySelector(targets[i].selector);
        if(parentElement) {
            debugger
            observer.observe(parentElement, config);
            moduleLoaded = true;
        }
    } catch (e) {
        console.log("Observer NOT set: " + targets[i].selector + " not detected");
    };
}