/*
 *  **************************************************************************
 *  Licensed Materials - Property of HCL
 *  (c) Copyright HCL Technologies Ltd.  2020. All Rights Reserved.
 *  US Government Users Restricted Rights - Use, duplication or disclosure
 *  restricted by GSA ADP Schedule Contract with HCL Technologies.
 *  **************************************************************************
 */

/**
 * @fileOverview rageClicks Module
 * @exports rageClicks
 */

DCX.addModule("rageClicks", function (context) {
  "use strict";


  var rageclickModuleConfig = DCX.getModuleConfig("rageClicks"),
    moduleLoaded = false;

  // Set Variables
  var rageTargetID, currClickTime, elemType, node, elementcheck, elementCount;
  var elementArray = [],
    rageCheckArray = [],
    rageMaping = new Map(),
    firstClickMaping = new Map(),
    clickInterval = rageclickModuleConfig.clickInterval || 4000,
    rageMin = rageclickModuleConfig.rageMin || 5,
    checkElements = function (element) {
      return element == rageTargetID;
    };

  // Determine what is available to use as an element identifier
  // order to look at: data-dcxid|id|xpath
  function setTaggetAndElementType() {
    if (node.getAttribute("data-dcxid")) {
      rageTargetID = node.getAttribute("data-dcxid");
      elemType = 'data-dcxid';
    } else if (node.id) {
      rageTargetID = node.id;
      elemType = 'id';
    } else {
      rageTargetID = context.getXPathFromNode(node);
      elemType = 'xpath';
    }
  }

  // If there has already been a first click then we need to see if this click has occured within the clickInterval 
  // if it has then this will count towards rage clicks
  function checkClickInterval() {
    var initClickTime = firstClickMaping.get(rageTargetID),
      timeDiff = currClickTime - initClickTime;
    if (timeDiff <= clickInterval) {
      elementArray.push(rageTargetID);
    } else {
      // If the click time of this click is outside the initial clickInterval
      // set new time for the first click for checking
      firstClickMaping.set(rageTargetID, currClickTime);

      // remove element from array and Map so that count can start properly
      for (var i = 0; i < elementArray.length; i++) {
        if (elementArray[i] === rageTargetID) {
          elementArray.splice(i, 1);
        }
      }
      // commenting this line of code because YUI compiler  what is throwing error "rageMaping.delete".
      // rageMaping.delete(rageTargetID);
      rageMaping["delete"](rageTargetID);
      for (var i = 0; i < rageCheckArray.length; i++) {
        if (rageCheckArray[i] === rageTargetID) {
          rageCheckArray.splice(i, 1);
        }
      }
    }
  }


  function sentEvntMsg() {
    const nodeElementName = node.nodeName.toLowerCase();
    const isLink = nodeElementName === 'a';
    const linkHREF = isLink ? node.getAttribute('href') : null;

    const msg = {
      type: 20,
      struggle: {
        struggleType: isLink ? 'deadLink' : 'rageclick',
        elementtype: elemType,
        element: rageTargetID,
        linkHREF: linkHREF,
      },
    };

    if(!isLink) {
      delete msg.struggle.linkHREF;
    }

    context.post(msg);
  }

  // If the count is greater that configurable value then count as a RAGE Click
  // Default rageMin = 5
  function checkRageMin(elementCount) {
    var rageCheck = rageCheckArray.filter(checkElements);

    if (rageCheck.length <= 0) {
      rageMaping.set(rageTargetID, elementCount);
      rageCheckArray.push(rageTargetID);
      sentEvntMsg();
    }
  }

  function rage() {
    moduleLoaded = true;
    // Start Event Listener on Clicks
    document.addEventListener("click", function () {
      node = event.target;

      setTaggetAndElementType();
      currClickTime = Date.now();

      // Check to see if this is the first click
      // or first click outside the clickInterval
      if (!firstClickMaping.has(rageTargetID)) {
        firstClickMaping.set(rageTargetID, currClickTime);
      }

      // check if there has already been a first click
      if (firstClickMaping.has(rageTargetID)) {
        checkClickInterval();
      }

      // Filter out the current element ID so that we can count how many times a click has occured
      elementcheck = elementArray.filter(checkElements);

      // How many times has the element click occured
      elementCount = elementcheck.length;

      if (elementCount >= rageMin) {
        checkRageMin(elementCount);
      }
    });
  }

  // RETURN SECTION
  return {
    init: function () {
      rageclickModuleConfig = context.getConfig();
    },
    destroy: function () { },
    onevent: function (webEvent) {
      switch (webEvent.type) {
        case "load":
          if(rageclickModuleConfig.enabled) {
            rage();
          }
          break;
        case "unload":
          moduleLoaded = false;
          break;
        default:
          break;
      }
    },
    version: "1.3.2"
  };
});