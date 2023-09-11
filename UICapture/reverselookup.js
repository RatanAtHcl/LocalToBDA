/*
 *  **************************************************************************
 *  Licensed Materials - Property of HCL
 *  (c) Copyright HCL Technologies Ltd.  2020. All Rights Reserved.
 *  US Government Users Restricted Rights - Use, duplication or disclosure
 *  restricted by GSA ADP Schedule Contract with HCL Technologies.
 *  **************************************************************************
 */

/**
 * Returns an element corresponding to the given (id, idType) where id
 * could be either an HTML ID, attribute ID or XPath.
 * @param  {String} id       The id. Either a HTML ID or an attribute ID
 *                           e.g.: "myid=customid" or an XPath string.
 * @param  {Number} type     A number, indicating the type of the id
 *                           -1: HTML ID, -2: XPath, -3: attribute ID.
 * @return {Object}          Returns the node, if found. Otherwise null.
 */
function findNode(id, type) {

    var idTypes = {
            HTML_ID: -1,
            XPATH_ID: -2,
            ATTRIBUTE_ID: -3
        },
        getNodeFromXPath;

    /**
     * Given a HTML frame element, returns the window object of the frame. Tries the contentWindow property
     * first. If contentWindow is not accessible, tries the contentDocument.parentWindow property instead.
     * @param {Object} iFrameElement The HTML frame element object.
     * @return {Object} Returns the window object of the frame element or null.
     */
    function getIFrameWindow(iFrameElement) {
        var contentWindow = null;

        if (!iFrameElement) {
            return contentWindow;
        }

        try {
            contentWindow = iFrameElement.contentWindow ||
            (iFrameElement.contentDocument ? iFrameElement.contentDocument.parentWindow : null);
        } catch (e) {
            // Do nothing.
        }

        return contentWindow;
    }

    /**
     * Find one or more elements using a XPath selector.
     * @function
     * @name getNodeFromXPath
     * @param  {String} query The XPath query to search for.
     * @param  {Object} [scope="document"] The DOM subtree to run the query in.
     * @return {Object}       Returns the DOM element matching the XPath.
     */
    getNodeFromXPath = (function () {

        var __strToArr = typeof JSON === "object" && typeof JSON.parse === "function" ?
            function (xpathStr) { return JSON.parse(String(xpathStr)); } :
            function (xpathStr) { return eval(String(xpathStr)); };

        return function (query, scope) {
            var xpath = __strToArr(query),
                elem,
                pathElem = null,
                pathElemIsHost,
                tagName,
                i, j, k, len, jlen;

            scope = typeof scope !== "undefined" ? scope : document;
            elem = scope;

            if (!xpath) {
                return null;
            }

            for (i = 0, len = xpath.length; i < len && elem; i += 1) {
                pathElem = xpath[i];
                pathElemIsHost = pathElem.length > 1 && pathElem[pathElem.length - 1] === "h";
                if (pathElem.length === 1 || (pathElem.length === 2 && pathElemIsHost)) {
                    elem = scope.getElementById(pathElem[0]);
                } else {
                    for (j = 0, k = -1, jlen = elem.childNodes.length; j < jlen; ++j) {
                        if (elem.childNodes[j].nodeType === 1 && elem.childNodes[j].tagName.toLowerCase() === pathElem[0].toLowerCase()) {
                            if (++k === pathElem[1]) {
                                elem = elem.childNodes[j];
                                break;
                            }
                        }
                    }
                    if (k !== pathElem[1]) {
                        console.log("Unable to locate xpath component (" + i + ") " + pathElem[0]);
                        return null;
                    }
                }

                if (!elem) {
                    console.log("Unable to locate xpath component (" + i + ") " + pathElem[0]);
                    return null;
                }

                if (pathElemIsHost) {
                    if (i < len - 1) {
                        if (!elem.shadowRoot) {
                            console.log("Host (" + i + ") " + pathElem[0] + " does not have a shadow root or the shadow root is not accessible.");
                            return null;
                        }
                        elem = elem.shadowRoot;
                        scope = elem;
                    }
                }

                // If elem is a frame or iframe, then point to it's document element
                tagName = (elem.tagName || elem.nodeName).toLowerCase();
                if (tagName === "frame" || tagName === "iframe") {
                    elem = getIFrameWindow(elem).document;
                    // The scope for the subsequent xpath also changes to that of the frame/iframe document.
                    scope = elem;
                }
            }

            return elem === scope || !elem ? null : elem;
        };
    }());

    /**
     * Helper function to transform a nodelist into an array.
     * @function
     * @name browserService-queryDom.list2Array
     * @param  {List} nodeList Pass in a DOM NodeList
     * @return {Array}          Returns an array.
     */
    function list2Array(nodeList) {
        var len = nodeList.length,
            result = [],
            i;
        if (typeof nodeList.length === "undefined") {
            return [nodeList];
        }
        for (i = 0; i < len; i += 1) {
            result[i] = nodeList[i];
        }
        return result;
    }

    if (type === idTypes.HTML_ID) {
        return document.getElementById(id);
    } else if (type === idTypes.ATTRIBUTE_ID) {
        parts = id.split("=");
        return document.querySelector("[" + parts[0] + "=\"" + parts[1] + "\"]");
    } else if (type === idTypes.XPATH_ID) {
        return getNodeFromXPath(id);
    }

}