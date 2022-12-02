// ==UserScript==
// @name         Galax userScript
// @namespace    https://www.puntoblanco.co/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.puntoblanco.co/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==
alert('dddd')

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
        // Create New Event
        const newEvent = new Event('change', { bubbles: true });
        // Creste New Input
        const newInput = document.createElement('input');
        newInput.value = e.target.value;
        // Listen for the event.
        newInput.addEventListener('change', (ee) => { alert(ee.target.value)})
        // Dispatch the event.
        newInput.dispatchEvent(newEvent);
        // Remove newley created Input
        newInput.remove()
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
                ['mouseup'],
                DCXHandler,
                false);
        } else if(cnt >= 40) {
            // clear Interval if page loading time is greater then 120 Sec.
            clearInterval(DXCInterval);
        }
    }, 3000)
});







