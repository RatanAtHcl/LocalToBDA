/*
 *  **************************************************************************
 *  Licensed Materials - Property of HCL
 *  (c) Copyright HCL Technologies Ltd.  2020. All Rights Reserved.
 *  US Government Users Restricted Rights - Use, duplication or disclosure
 *  restricted by GSA ADP Schedule Contract with HCL Technologies.
 *  **************************************************************************
 */

/**
 * @fileOverview Defines a simple event target interface that can be inherited
 *      from by other parts of the system.
 * @exports DCX.EventTarget
 */
/*global DCX*/

(function () {

    "use strict";

    /**
     * Abstract type that implements basic event handling capabilities.
     * Other types may inherit from this in order to provide custom
     * events.
     * @constructor
     */
    DCX.EventTarget = function () {

        /**
         * Holds all registered event handlers. Each property represents
         * a specific event, each property value is an array containing
         * the event handlers for that event.
         * @type Object
         */
        this._handlers = {};

    };

    DCX.EventTarget.prototype = {

        /**
         * Restores the constructor to the correct value.
         * @private
         */
        constructor: DCX.EventTarget,

        /**
         * Publishes an event with the given name, which causes all
         * event handlers for that event to be called.
         * @param {String} name The name of the event to publish.
         * @param {Variant} [data] The data to provide for the event.
         * @returns {void}
         */
        publish: function (name, data) {

            var i = 0,
                len = 0,
                handlers = this._handlers[name],
                event = {
                    type: name,
                    data: data
                };

            if (typeof handlers !== "undefined") {
                for (len = handlers.length; i < len; i += 1) {
                    handlers[i](event);
                }
            }

        },

        /**
         * Registers an event handler for the given event.
         * @param {String} name The name of the event to subscribe to.
         * @param {Function} handler The function to call when the event occurs.
         * @returns {void}
         */
        subscribe: function (name, handler) {

            if (!this._handlers.hasOwnProperty(name)) {
                this._handlers[name] = [];
            }

#ifdef DEBUG
            if (typeof handler !== "function") {
                throw new Error("Event handler for '" + name + "' isn't a function.");
            }
#endif

            this._handlers[name].push(handler);
        },

        /**
         * Unregisters an event handler for the given event.
         * @param {String} name The name of the event to unsubscribe from.
         * @param {Function} handler The event handler to remove.
         * @returns {void}
         */
        unsubscribe: function (name, handler) {

            var i = 0,
                len = 0,
                handlers = this._handlers[name];

            if (handlers) {
                for (len = handlers.length; i < len; i += 1) {
                    if (handlers[i] === handler) {
                        handlers.splice(i, 1);
                        return;
                    }
                }
            }
        }

    };

}());