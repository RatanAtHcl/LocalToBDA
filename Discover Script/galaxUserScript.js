// ==UserScript==
// @name         Galax userScript
// @namespace    https://www.galax.co
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.galax.co/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

// events should be of type Array
function addMultipleDCXListeners(element,events,handler,useCapture){
    if (!(events instanceof Array)){
        throw 'addMultipleListeners: '+
            'please supply an array of eventstrings '+
            '(like ["click","mouseover"])';
    }
    for (var i=0;i<events.length;i+=1){
        element.addEventListener(events[i],handler,useCapture);
    }
}

function DCXHandler(e) {
    if (e.target.id == "input" && e.target.value.length >3){
        alert('srchBx is '+ e.target.value);
        // do your things here ...
    }
};

// Execute Interval on load
window.addEventListener("load", (event) => {
    var cnt = 0;
    var DXCInterval = setInterval(() => {
        // Check if Element is Available in DOM
        if(document.querySelector('#input')) {
            // clear Interval if selected element is Available in DOM.
            clearInterval(DXCInterval);

            // then add Mult event listeners
            addMultipleDCXListeners(
                document.querySelector('#input'),
                ['mousedown','change'],
                DCXHandler,
                false);
        } else if(cnt >= 40) {
            // clear Interval if finding count is greater then 5.
            clearInterval(DXCInterval);
        }
    }, 3000)
});


