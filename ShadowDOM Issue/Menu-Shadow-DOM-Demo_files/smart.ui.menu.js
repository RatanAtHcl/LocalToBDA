/*!
 * 
 * /* Smart UI v9.4.1 (2021-July) 
 * Copyright (c) 2011-2021 jQWidgets. 
 * License: https://htmlelements.com/license/ * /
 * 
 * 
 */
!function(t) {
    var e = {};
    function r(n) {
        if (e[n])
            return e[n].exports;
        var o = e[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return t[n].call(o.exports, o, o.exports, r),
        o.l = !0,
        o.exports
    }
    r.m = t,
    r.c = e,
    r.d = function(t, e, n) {
        r.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: n
        })
    }
    ,
    r.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }
    ,
    r.t = function(t, e) {
        if (1 & e && (t = r(t)),
        8 & e)
            return t;
        if (4 & e && "object" == typeof t && t && t.__esModule)
            return t;
        var n = Object.create(null);
        if (r.r(n),
        Object.defineProperty(n, "default", {
            enumerable: !0,
            value: t
        }),
        2 & e && "string" != typeof t)
            for (var o in t)
                r.d(n, o, function(e) {
                    return t[e]
                }
                .bind(null, o));
        return n
    }
    ,
    r.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        }
        : function() {
            return t
        }
        ;
        return r.d(e, "a", e),
        e
    }
    ,
    r.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }
    ,
    r.p = "",
    r(r.s = 256)
}({
    0: function(t, e, r) {
        "use strict";
        t.exports = function(t) {
            var e = [];
            return e.toString = function() {
                return this.map((function(e) {
                    var r = function(t, e) {
                        var r = t[1] || ""
                          , n = t[3];
                        if (!n)
                            return r;
                        if (e && "function" == typeof btoa) {
                            var o = (i = n,
                            s = btoa(unescape(encodeURIComponent(JSON.stringify(i)))),
                            d = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),
                            "/*# ".concat(d, " */"))
                              , a = n.sources.map((function(t) {
                                return "/*# sourceURL=".concat(n.sourceRoot || "").concat(t, " */")
                            }
                            ));
                            return [r].concat(a).concat([o]).join("\n")
                        }
                        var i, s, d;
                        return [r].join("\n")
                    }(e, t);
                    return e[2] ? "@media ".concat(e[2], " {").concat(r, "}") : r
                }
                )).join("")
            }
            ,
            e.i = function(t, r, n) {
                "string" == typeof t && (t = [[null, t, ""]]);
                var o = {};
                if (n)
                    for (var a = 0; a < this.length; a++) {
                        var i = this[a][0];
                        null != i && (o[i] = !0)
                    }
                for (var s = 0; s < t.length; s++) {
                    var d = [].concat(t[s]);
                    n && o[d[0]] || (r && (d[2] ? d[2] = "".concat(r, " and ").concat(d[2]) : d[2] = r),
                    e.push(d))
                }
            }
            ,
            e
        }
    },
    1: function(t, e, r) {
        (e = r(0)(!1)).push([t.i, "/* smart-button, smart-repeat-button, smart-toggle-button */\r\nsmart-button,\r\nsmart-toggle-button,\r\nsmart-repeat-button {\r\n  --smart-button-flat-color: var(--smart-background-color);\r\n  text-align: center;\r\n  display: inline-flex;\r\n  vertical-align: middle;\r\n  cursor: pointer;\r\n  text-transform: var(--smart-button-text-transform);\r\n  letter-spacing: .08929em;\r\n  overflow: hidden;\r\n  border-color: var(--smart-border);\r\n  border-top-left-radius: var(--smart-border-top-left-radius);\r\n  border-top-right-radius: var(--smart-border-top-right-radius);\r\n  border-bottom-left-radius: var(--smart-border-bottom-left-radius);\r\n  border-bottom-right-radius: var(--smart-border-bottom-right-radius);\r\n  border-width: var(--smart-border-width);\r\n  border-style: solid;\r\n  visibility: hidden;\r\n  font-weight: 500;\r\n}\r\nsmart-button.smart-element,\r\nsmart-toggle-button.smart-element,\r\nsmart-repeat-button.smart-element {\r\n  display: inline-flex;\r\n  visibility: inherit;\r\n}\r\nsmart-button button::-moz-focus-inner,\r\nsmart-toggle-button button::-moz-focus-inner,\r\nsmart-repeat-button button::-moz-focus-inner {\r\n  border: 0;\r\n}\r\nsmart-button.primary,\r\nsmart-toggle-button.primary,\r\nsmart-repeat-button.primary {\r\n  --smart-button-opacity-hover: 0.75;\r\n  --smart-button-opacity-focus: 0.7;\r\n  --smart-button-opacity-active: 0.65;\r\n  --smart-background: var(--smart-primary);\r\n  --smart-border: var(--smart-primary);\r\n  --smart-border-rgb: var(--smart-primary-rgb);\r\n  --smart-background-color: var(--smart-primary-color);\r\n  --smart-ui-state-hover: var(--smart-primary);\r\n  --smart-ui-state-border-hover: var(--smart-primary);\r\n  --smart-ui-state-color-hover: var(--smart-primary-color);\r\n  --smart-ui-state-active: var(--smart-primary);\r\n  --smart-ui-state-border-active: var(--smart-primary);\r\n  --smart-ui-state-color-active: var(--smart-primary-color);\r\n  --smart-ui-state-focus: var(--smart-primary);\r\n  --smart-ui-state-border-focus: var(--smart-primary);\r\n  --smart-ui-state-color-focus: var(--smart-primary-color);\r\n  --smart-button-flat-color: var(--smart-primary);\r\n  --smart-button-outlined-color: var(--smart-primary);\r\n  --smart-button-outlined-border: var(--smart-primary);\r\n}\r\nsmart-button.secondary,\r\nsmart-toggle-button.secondary,\r\nsmart-repeat-button.secondary {\r\n  --smart-button-opacity-hover: 0.75;\r\n  --smart-button-opacity-focus: 0.7;\r\n  --smart-button-opacity-active: 0.65;\r\n  --smart-background: var(--smart-secondary);\r\n  --smart-border: var(--smart-secondary);\r\n  --smart-border-rgb: var(--smart-secondary-rgb);\r\n  --smart-background-color: var(--smart-secondary-color);\r\n  --smart-ui-state-hover: var(--smart-secondary);\r\n  --smart-ui-state-border-hover: var(--smart-secondary);\r\n  --smart-ui-state-color-hover: var(--smart-secondary-color);\r\n  --smart-ui-state-active: var(--smart-secondary);\r\n  --smart-ui-state-border-active: var(--smart-secondary);\r\n  --smart-ui-state-color-active: var(--smart-secondary-color);\r\n  --smart-ui-state-focus: var(--smart-secondary);\r\n  --smart-ui-state-border-focus: var(--smart-secondary);\r\n  --smart-ui-state-color-focus: var(--smart-secondary-color);\r\n  --smart-button-flat-color: var(--smart-secondary);\r\n  --smart-button-outlined-color: var(--smart-secondary);\r\n  --smart-button-outlined-border: var(--smart-secondary);\r\n}\r\nsmart-button.success,\r\nsmart-toggle-button.success,\r\nsmart-repeat-button.success {\r\n  --smart-button-opacity-hover: 0.75;\r\n  --smart-button-opacity-focus: 0.7;\r\n  --smart-button-opacity-active: 0.65;\r\n  --smart-background: var(--smart-success);\r\n  --smart-border: var(--smart-success);\r\n  --smart-border-rgb: var(--smart-success-rgb);\r\n  --smart-background-color: var(--smart-success-color);\r\n  --smart-ui-state-hover: var(--smart-success);\r\n  --smart-ui-state-border-hover: var(--smart-success);\r\n  --smart-ui-state-color-hover: var(--smart-success-color);\r\n  --smart-ui-state-active: var(--smart-success);\r\n  --smart-ui-state-border-active: var(--smart-success);\r\n  --smart-ui-state-color-active: var(--smart-success-color);\r\n  --smart-ui-state-focus: var(--smart-success);\r\n  --smart-ui-state-border-focus: var(--smart-success);\r\n  --smart-ui-state-color-focus: var(--smart-success-color);\r\n  --smart-button-flat-color: var(--smart-success);\r\n  --smart-button-outlined-color: var(--smart-success);\r\n  --smart-button-outlined-border: var(--smart-success);\r\n}\r\nsmart-button.error,\r\nsmart-toggle-button.error,\r\nsmart-repeat-button.error {\r\n  --smart-button-opacity-hover: 0.75;\r\n  --smart-button-opacity-focus: 0.7;\r\n  --smart-button-opacity-active: 0.65;\r\n  --smart-background: var(--smart-error);\r\n  --smart-border: var(--smart-error);\r\n  --smart-border-rgb: var(--smart-error-rgb);\r\n  --smart-background-color: var(--smart-error-color);\r\n  --smart-ui-state-hover: var(--smart-error);\r\n  --smart-ui-state-border-hover: var(--smart-error);\r\n  --smart-ui-state-color-hover: var(--smart-error-color);\r\n  --smart-ui-state-active: var(--smart-error);\r\n  --smart-ui-state-border-active: var(--smart-error);\r\n  --smart-ui-state-color-active: var(--smart-error-color);\r\n  --smart-ui-state-focus: var(--smart-error);\r\n  --smart-ui-state-border-focus: var(--smart-error);\r\n  --smart-ui-state-color-focus: var(--smart-error-color);\r\n  --smart-button-flat-color: var(--smart-error);\r\n  --smart-button-outlined-color: var(--smart-error);\r\n  --smart-button-outlined-border: var(--smart-error);\r\n}\r\nsmart-button.info,\r\nsmart-toggle-button.info,\r\nsmart-repeat-button.info {\r\n  --smart-button-opacity-hover: 0.75;\r\n  --smart-button-opacity-focus: 0.7;\r\n  --smart-button-opacity-active: 0.65;\r\n  --smart-background: var(--smart-info);\r\n  --smart-border: var(--smart-info);\r\n  --smart-border-rgb: var(--smart-info-rgb);\r\n  --smart-background-color: var(--smart-info-color);\r\n  --smart-ui-state-hover: var(--smart-info);\r\n  --smart-ui-state-border-hover: var(--smart-info);\r\n  --smart-ui-state-color-hover: var(--smart-info-color);\r\n  --smart-ui-state-active: var(--smart-info);\r\n  --smart-ui-state-border-active: var(--smart-info);\r\n  --smart-ui-state-color-active: var(--smart-info-color);\r\n  --smart-ui-state-focus: var(--smart-info);\r\n  --smart-ui-state-border-focus: var(--smart-info);\r\n  --smart-ui-state-color-focus: var(--smart-info-color);\r\n  --smart-button-flat-color: var(--smart-info);\r\n  --smart-button-outlined-color: var(--smart-info);\r\n  --smart-button-outlined-border: var(--smart-info);\r\n}\r\nsmart-button.warning,\r\nsmart-toggle-button.warning,\r\nsmart-repeat-button.warning {\r\n  --smart-button-opacity-hover: 0.75;\r\n  --smart-button-opacity-focus: 0.7;\r\n  --smart-button-opacity-active: 0.65;\r\n  --smart-background: var(--smart-warning);\r\n  --smart-border: var(--smart-warning);\r\n  --smart-border-rgb: var(--smart-warning-rgb);\r\n  --smart-background-color: var(--smart-warning-color);\r\n  --smart-ui-state-hover: var(--smart-warning);\r\n  --smart-ui-state-border-hover: var(--smart-warning);\r\n  --smart-ui-state-color-hover: var(--smart-warning-color);\r\n  --smart-ui-state-active: var(--smart-warning);\r\n  --smart-ui-state-border-active: var(--smart-warning);\r\n  --smart-ui-state-color-active: var(--smart-warning-color);\r\n  --smart-ui-state-focus: var(--smart-warning);\r\n  --smart-ui-state-border-focus: var(--smart-warning);\r\n  --smart-ui-state-color-focus: var(--smart-warning-color);\r\n  --smart-button-flat-color: var(--smart-warning);\r\n  --smart-button-outlined-color: var(--smart-warning);\r\n  --smart-button-outlined-border: var(--smart-warning);\r\n}\r\nsmart-button.light,\r\nsmart-toggle-button.light,\r\nsmart-repeat-button.light {\r\n  --smart-button-opacity-hover: 0.75;\r\n  --smart-button-opacity-focus: 0.7;\r\n  --smart-button-opacity-active: 0.65;\r\n  --smart-background: var(--smart-light);\r\n  --smart-border: var(--smart-light);\r\n  --smart-border-rgb: var(--smart-light-rgb);\r\n  --smart-background-color: var(--smart-light-color);\r\n  --smart-ui-state-hover: var(--smart-light);\r\n  --smart-ui-state-border-hover: var(--smart-light);\r\n  --smart-ui-state-color-hover: var(--smart-light-color);\r\n  --smart-ui-state-active: var(--smart-light);\r\n  --smart-ui-state-border-active: var(--smart-light);\r\n  --smart-ui-state-color-active: var(--smart-light-color);\r\n  --smart-ui-state-focus: var(--smart-light);\r\n  --smart-ui-state-border-focus: var(--smart-light);\r\n  --smart-ui-state-color-focus: var(--smart-light-color);\r\n  --smart-button-flat-color: var(--smart-light);\r\n  --smart-button-outlined-color: var(--smart-light);\r\n  --smart-button-outlined-border: var(--smart-light);\r\n}\r\nsmart-button.dark,\r\nsmart-toggle-button.dark,\r\nsmart-repeat-button.dark {\r\n  --smart-button-opacity-hover: 0.75;\r\n  --smart-button-opacity-focus: 0.7;\r\n  --smart-button-opacity-active: 0.65;\r\n  --smart-background: var(--smart-dark);\r\n  --smart-border: var(--smart-dark);\r\n  --smart-border-rgb: var(--smart-dark-rgb);\r\n  --smart-background-color: var(--smart-dark-color);\r\n  --smart-ui-state-hover: var(--smart-dark);\r\n  --smart-ui-state-border-hover: var(--smart-dark);\r\n  --smart-ui-state-color-hover: var(--smart-dark-color);\r\n  --smart-ui-state-active: var(--smart-dark);\r\n  --smart-ui-state-border-active: var(--smart-dark);\r\n  --smart-ui-state-color-active: var(--smart-dark-color);\r\n  --smart-ui-state-focus: var(--smart-dark);\r\n  --smart-ui-state-border-focus: var(--smart-dark);\r\n  --smart-ui-state-color-focus: var(--smart-dark-color);\r\n  --smart-button-flat-color: var(--smart-dark);\r\n  --smart-button-outlined-color: var(--smart-dark);\r\n  --smart-button-outlined-border: var(--smart-dark);\r\n}\r\nsmart-button[hover],\r\nsmart-toggle-button[hover],\r\nsmart-repeat-button[hover] {\r\n  color: var(--smart-ui-state-color-hover);\r\n  border-color: var(--smart-ui-state-border-hover);\r\n  background-color: var(--smart-ui-state-hover);\r\n  transition: background-color 100ms linear, box-shadow 280ms ease-in-out;\r\n  opacity: var(--smart-button-opacity-hover);\r\n}\r\nsmart-button[focus],\r\nsmart-toggle-button[focus],\r\nsmart-repeat-button[focus] {\r\n  color: var(--smart-ui-state-color-focus);\r\n  border-color: var(--smart-ui-state-border-focus);\r\n  background-color: var(--smart-ui-state-focus);\r\n  opacity: var(--smart-button-opacity-focus);\r\n}\r\nsmart-button[active],\r\nsmart-toggle-button[active],\r\nsmart-repeat-button[active] {\r\n  color: var(--smart-ui-state-color-active);\r\n  border-color: var(--smart-ui-state-border-active);\r\n  background-color: var(--smart-ui-state-active);\r\n  transition: background-color 100ms linear, box-shadow 280ms ease-in-out;\r\n  opacity: var(--smart-button-opacity-active);\r\n}\r\nsmart-button[disabled],\r\nsmart-toggle-button[disabled],\r\nsmart-repeat-button[disabled] {\r\n  color: var(--smart-disabled-color);\r\n  border-color: var(--smart-disabled);\r\n  background-color: var(--smart-disabled);\r\n  cursor: default;\r\n  --smart-background: var(--smart-disabled);\r\n  --smart-border: var(--smart-disabled);\r\n  --smart-background-color: var(--smart-disabled-color);\r\n}\r\nsmart-button.large button,\r\nsmart-toggle-button.large button,\r\nsmart-repeat-button.large button {\r\n  padding: var(--smart-button-large-padding);\r\n  font-size: var(--smart-button-large-font-size);\r\n}\r\nsmart-button.small button,\r\nsmart-toggle-button.small button,\r\nsmart-repeat-button.small button {\r\n  padding: var(--smart-button-small-padding);\r\n  font-size: var(--smart-button-small-font-size);\r\n}\r\nsmart-button.very-small button,\r\nsmart-toggle-button.very-small button,\r\nsmart-repeat-button.very-small button {\r\n  padding: var(--smart-button-very-small-padding);\r\n  font-size: var(--smart-button-very-small-font-size);\r\n}\r\nsmart-button.rounded,\r\nsmart-toggle-button.rounded,\r\nsmart-repeat-button.rounded {\r\n  --smart-border-top-left-radius: 50px;\r\n  --smart-border-top-right-radius: 50px;\r\n  --smart-border-bottom-left-radius: 50px;\r\n  --smart-border-bottom-right-radius: 50px;\r\n  border-radius: var(--smart-border-bottom-left-radius) !important;\r\n}\r\nsmart-button.squared,\r\nsmart-toggle-button.squared,\r\nsmart-repeat-button.squared {\r\n  --smart-border-top-left-radius: 0;\r\n  --smart-border-top-right-radius: 0;\r\n  --smart-border-bottom-left-radius: 0;\r\n  --smart-border-bottom-right-radius: 0;\r\n}\r\nsmart-button.flat,\r\nsmart-toggle-button.flat,\r\nsmart-repeat-button.flat {\r\n  color: var(--smart-button-flat-color);\r\n  background: transparent;\r\n  border-color: transparent;\r\n}\r\nsmart-button.flat[hover],\r\nsmart-toggle-button.flat[hover],\r\nsmart-repeat-button.flat[hover] {\r\n  color: var(--smart-button-flat-color);\r\n  background: transparent;\r\n  border-color: transparent;\r\n}\r\nsmart-button.flat[active],\r\nsmart-toggle-button.flat[active],\r\nsmart-repeat-button.flat[active] {\r\n  color: var(--smart-button-flat-color);\r\n  background: transparent;\r\n  border-color: transparent;\r\n}\r\nsmart-button.flat[focus],\r\nsmart-toggle-button.flat[focus],\r\nsmart-repeat-button.flat[focus] {\r\n  border-color: var(--smart-ui-state-focus);\r\n}\r\nsmart-button.flat[checked],\r\nsmart-toggle-button.flat[checked],\r\nsmart-repeat-button.flat[checked] {\r\n  text-decoration: underline;\r\n  background: var(--smart-ui-state-active);\r\n}\r\nsmart-button.flat .smart-ripple,\r\nsmart-toggle-button.flat .smart-ripple,\r\nsmart-repeat-button.flat .smart-ripple {\r\n  background-color: var(--smart-button-flat-color);\r\n}\r\nsmart-button.outlined,\r\nsmart-toggle-button.outlined,\r\nsmart-repeat-button.outlined {\r\n  color: var(--smart-button-outlined-color);\r\n  border-color: var(--smart-button-outlined-border);\r\n  background: transparent;\r\n  border-width: calc(2 * var(--smart-border-width));\r\n}\r\nsmart-button.outlined[hover],\r\nsmart-toggle-button.outlined[hover],\r\nsmart-repeat-button.outlined[hover] {\r\n  color: var(--smart-button-outlined-color);\r\n  border-color: var(--smart-button-outlined-border);\r\n  background: transparent;\r\n}\r\nsmart-button.outlined[active],\r\nsmart-toggle-button.outlined[active],\r\nsmart-repeat-button.outlined[active] {\r\n  color: var(--smart-button-outlined-color);\r\n  border-color: var(--smart-button-outlined-border);\r\n  background: transparent;\r\n}\r\nsmart-button.outlined[focus],\r\nsmart-toggle-button.outlined[focus],\r\nsmart-repeat-button.outlined[focus] {\r\n  color: var(--smart-button-outlined-color);\r\n  border-color: var(--smart-ui-state-focus);\r\n  background: transparent;\r\n}\r\nsmart-button.outlined[checked],\r\nsmart-toggle-button.outlined[checked],\r\nsmart-repeat-button.outlined[checked] {\r\n  color: var(--smart-ui-state-color-active);\r\n  border-color: var(--smart-ui-state-active);\r\n  background: var(--smart-ui-state-active);\r\n}\r\nsmart-button.outlined .smart-ripple,\r\nsmart-toggle-button.outlined .smart-ripple,\r\nsmart-repeat-button.outlined .smart-ripple {\r\n  background-color: var(--smart-button-outlined-color);\r\n}\r\nsmart-button.outlined button.smart-button,\r\nsmart-toggle-button.outlined button.smart-button,\r\nsmart-repeat-button.outlined button.smart-button {\r\n  border-radius: initial;\r\n}\r\nsmart-button.raised,\r\nsmart-toggle-button.raised,\r\nsmart-repeat-button.raised {\r\n  box-shadow: var(--smart-elevation-2);\r\n  transition: background-color 100ms linear, box-shadow 280ms ease-in-out;\r\n}\r\nsmart-button.raised[hover],\r\nsmart-toggle-button.raised[hover],\r\nsmart-repeat-button.raised[hover] {\r\n  box-shadow: var(--smart-elevation-4);\r\n}\r\nsmart-button.raised[active], smart-button.raised[checked], smart-button.raised[active],\r\nsmart-button.raised button[active],\r\nsmart-toggle-button.raised[active],\r\nsmart-toggle-button.raised[checked],\r\nsmart-toggle-button.raised[active],\r\nsmart-toggle-button.raised button[active],\r\nsmart-repeat-button.raised[active],\r\nsmart-repeat-button.raised[checked],\r\nsmart-repeat-button.raised[active],\r\nsmart-repeat-button.raised button[active] {\r\n  box-shadow: var(--smart-elevation-8);\r\n}\r\nsmart-button.raised[focus], smart-button.raised[focus]:not([checked]),\r\nsmart-toggle-button.raised[focus],\r\nsmart-toggle-button.raised[focus]:not([checked]),\r\nsmart-repeat-button.raised[focus],\r\nsmart-repeat-button.raised[focus]:not([checked]) {\r\n  box-shadow: var(--smart-elevation-6);\r\n}\r\nsmart-button.floating,\r\nsmart-toggle-button.floating,\r\nsmart-repeat-button.floating {\r\n  border-radius: 50%;\r\n  width: 48px;\r\n  height: 48px;\r\n  box-shadow: var(--smart-elevation-4);\r\n  transition: background-color 100ms linear, box-shadow 280ms ease-in-out;\r\n}\r\nsmart-button.floating[hover],\r\nsmart-toggle-button.floating[hover],\r\nsmart-repeat-button.floating[hover] {\r\n  box-shadow: var(--smart-elevation-6);\r\n}\r\nsmart-button.floating[active], smart-button.floating[checked],\r\nsmart-toggle-button.floating[active],\r\nsmart-toggle-button.floating[checked],\r\nsmart-repeat-button.floating[active],\r\nsmart-repeat-button.floating[checked] {\r\n  box-shadow: var(--smart-elevation-12);\r\n}\r\nsmart-button.floating[focus], smart-button.floating[focus]:not([checked]),\r\nsmart-toggle-button.floating[focus],\r\nsmart-toggle-button.floating[focus]:not([checked]),\r\nsmart-repeat-button.floating[focus],\r\nsmart-repeat-button.floating[focus]:not([checked]) {\r\n  box-shadow: var(--smart-elevation-6);\r\n}\r\n\r\nbutton.smart-button {\r\n  position: relative;\r\n  padding: var(--smart-button-padding);\r\n  text-align: inherit;\r\n  vertical-align: inherit;\r\n  cursor: inherit;\r\n  text-transform: inherit;\r\n  font-weight: inherit;\r\n  letter-spacing: inherit;\r\n  background: inherit;\r\n  color: inherit;\r\n  border: none;\r\n  -webkit-font-smoothing: antialiased;\r\n  opacity: var(--smart-button-opacity);\r\n  white-space: nowrap;\r\n  border-radius: inherit;\r\n}\r\n\r\n.smart-button .smart-ripple {\r\n  background: var(--smart-background-color);\r\n}\r\n\r\nsmart-toggle-button .smart-container,\r\n[smart-toggle-button] .smart-container {\r\n  font-weight: inherit;\r\n  font-style: inherit;\r\n}\r\nsmart-toggle-button[checked],\r\n[smart-toggle-button][checked] {\r\n  color: var(--smart-ui-state-color-selected);\r\n  border-color: var(--smart-ui-state-border-selected);\r\n  background-color: var(--smart-ui-state-selected);\r\n}\r\n\r\n.smart-scroll-button .smart-button {\r\n  padding: 0px;\r\n}\r\n\r\n:host(.smart-button.flat) .smart-ripple {\r\n  background-color: var(--smart-button-flat-color);\r\n}\r\n\r\n:host(.smart-button.outlined) .smart-ripple {\r\n  background-color: var(--smart-button-outlined-color);\r\n}\r\n\r\nbutton.smart-button[type]:not(.smart-container) {\r\n  border-color: var(--smart-border);\r\n  border-top-left-radius: var(--smart-border-top-left-radius);\r\n  border-top-right-radius: var(--smart-border-top-right-radius);\r\n  border-bottom-left-radius: var(--smart-border-bottom-left-radius);\r\n  border-bottom-right-radius: var(--smart-border-bottom-right-radius);\r\n  border-width: var(--smart-border-width);\r\n  border-style: solid;\r\n  text-align: center;\r\n  vertical-align: middle;\r\n  cursor: pointer;\r\n  text-transform: var(--smart-button-text-transform);\r\n  font-weight: 500;\r\n  letter-spacing: .08929em;\r\n  overflow: hidden;\r\n  font-style: var(--smart-font-style);\r\n  font-size: var(--smart-font-size);\r\n  background: var(--smart-background);\r\n  outline: none;\r\n}\r\n\r\nbutton.smart-button[type]:hover {\r\n  color: var(--smart-ui-state-color-hover);\r\n  border-color: var(--smart-ui-state-border-hover);\r\n  background-color: var(--smart-ui-state-hover);\r\n}\r\n\r\nbutton.smart-button[type]:not([disabled]):active {\r\n  color: var(--smart-ui-state-color-active);\r\n  border-color: var(--smart-ui-state-border-active);\r\n  background-color: var(--smart-ui-state-active);\r\n}\r\n\r\n/* smart-button, smart-repeat-button, smart-toggle-button */\r\nsmart-button[right-to-left],\r\nsmart-toggle-button[right-to-left],\r\nsmart-repeat-button[right-to-left] {\r\n  direction: rtl;\r\n}\r\n", ""]),
        t.exports = e
    },
    10: function(t, e) {
        Smart("smart-scroll-bar", class extends Smart.BaseElement {
            static get properties() {
                return {
                    clickRepeatDelay: {
                        type: "integer",
                        value: 50
                    },
                    largeStep: {
                        type: "integer",
                        value: 100
                    },
                    min: {
                        type: "integer",
                        value: 0
                    },
                    max: {
                        type: "integer",
                        value: 1e3
                    },
                    mechanicalAction: {
                        value: "switchWhileDragging",
                        allowedValues: ["switchUntilReleased", "switchWhenReleased", "switchWhileDragging"],
                        type: "string"
                    },
                    orientation: {
                        type: "string",
                        value: "horizontal",
                        allowedValues: ["horizontal", "vertical"]
                    },
                    step: {
                        type: "integer",
                        value: 10
                    },
                    showButtons: {
                        type: "boolean",
                        value: !0,
                        defaultReflectToAttribute: !0
                    },
                    value: {
                        type: "integer",
                        value: 0
                    }
                }
            }
            static get styleUrls() {
                return ["smart.scrollbar.css"]
            }
            template() {
                return '<div id="container" class="smart-container" role="presentation">\n                    <div id="nearButton" class="smart-scroll-button smart-arrow-left" role="presentation" aria-hidden="true"></div>\n                    <div  id="track" class="smart-track" role="presentation">\n                        <div id="thumb" class="smart-thumb" role="presentation"></div>\n                    </div>\n                    <div id="farButton" class="smart-scroll-button smart-arrow-right" role="presentation" aria-hidden="true"></div>\n            </div>'
            }
            static get listeners() {
                return {
                    "nearButton.click": "_nearButtonClickHandler",
                    "nearButton.down": "_startRepeat",
                    "nearButton.up": "_stopRepeat",
                    "nearButton.pointerenter": "_updateInBoundsFlag",
                    "nearButton.pointerleave": "_updateInBoundsFlag",
                    "farButton.click": "_farButtonClickHandler",
                    "farButton.down": "_startRepeat",
                    "farButton.up": "_stopRepeat",
                    "farButton.pointerenter": "_updateInBoundsFlag",
                    "farButton.pointerleave": "_updateInBoundsFlag",
                    "track.down": "_trackDownHandler",
                    "track.click": "_trackClickHandler",
                    "track.move": "_trackMoveHandler",
                    "thumb.down": "_dragStartHandler",
                    "document.move": "_dragHandler",
                    "document.up": "_dragEndHandler",
                    up: "_dragEndHandler",
                    "document.selectstart": "_selectStartHandler",
                    resize: "_resizeHandler"
                }
            }
            _updateInBoundsFlag(t) {
                const e = this
                  , r = t.target;
                r._isPointerInBounds = !0,
                -1 !== t.type.indexOf("leave") && (r._isPointerInBounds = !1),
                1 !== ("buttons"in t ? t.buttons : t.which) && e._stopRepeat(t)
            }
            _startRepeat(t) {
                const e = this;
                if (e.disabled)
                    return;
                const r = t.target;
                r._initialTimer || (r._initialTimer = setTimeout((function() {
                    r._repeatTimer = setInterval(()=>{
                        if (r._isPointerInBounds) {
                            const e = "buttons"in t ? t.buttons : t.which;
                            r.$.fireEvent("click", {
                                buttons: e,
                                clientX: t.clientX,
                                clientY: t.clientY,
                                pageX: t.pageX,
                                pageY: t.pageY,
                                screenX: t.screenX,
                                screenY: t.screenY
                            })
                        }
                    }
                    , e.clickRepeatDelay)
                }
                ), 3 * e.clickRepeatDelay))
            }
            _stopRepeat(t) {
                if (this.disabled)
                    return;
                const e = t.target;
                e._repeatTimer && (clearInterval(e._repeatTimer),
                e._repeatTimer = null),
                e._initialTimer && (clearTimeout(e._initialTimer),
                e._initialTimer = null)
            }
            _calculateThumbSize(t) {
                const e = this
                  , r = e.max - e.min
                  , n = "horizontal" === e.orientation ? e.$.track.offsetWidth > 10 : e.$.track.offsetHeight > 10;
                let o = 0;
                return r >= 1 && n ? (o = t / (r + t) * t,
                e.$.thumb.className.indexOf("smart-hidden") >= 0 && e.$thumb.removeClass("smart-hidden")) : e.$thumb.addClass("smart-hidden"),
                Math.max(10, Math.min(o, t))
            }
            _dragStartHandler(t) {
                this.disabled || (this.thumbCapture = !0,
                this.dragStartX = t.clientX,
                this.dragStartY = t.clientY,
                this.dragStartValue = this.value,
                t.stopPropagation(),
                t.preventDefault())
            }
            _dragHandler(t) {
                if (!0 !== this.thumbCapture)
                    return;
                this._isThumbDragged = !0;
                const e = (this.max - this.min) / (this.scrollBarSize - this.thumbSize)
                  , r = "horizontal" === this.orientation ? (t.clientX - this.dragStartX) * e : (t.clientY - this.dragStartY) * e;
                let n = r;
                this.rightToLeft && "horizontal" === this.orientation && (n = -r),
                this._updateValue(this.dragStartValue + n),
                t.stopPropagation(),
                t.preventDefault(),
                t.originalEvent && (t.originalEvent.stopPropagation(),
                t.originalEvent.preventDefault())
            }
            _dragEndHandler(t) {
                const e = this;
                e._trackDownTimer && (clearInterval(e._trackDownTimer),
                e._trackDownTimer = null),
                e.thumbCapture && (e.thumbCapture = !1,
                e._isThumbDragged = !1,
                "switchWhenReleased" === e.mechanicalAction ? e._updateValue(e.dragStartValue, e.value) : "switchUntilReleased" === this.mechanicalAction && e._updateValue(e.dragStartValue),
                t.preventDefault(),
                t.stopPropagation(),
                t.originalEvent.preventDefault(),
                t.originalEvent.stopPropagation())
            }
            _farButtonClickHandler() {
                const t = this;
                if (t.disabled)
                    return;
                const e = t.value;
                t._updateValue(t.value + ("horizontal" === t.orientation && t.rightToLeft ? -1 : 1) * t.step),
                "switchUntilReleased" === t.mechanicalAction && t._updateValue(e)
            }
            _nearButtonClickHandler() {
                const t = this;
                if (t.disabled)
                    return;
                const e = t.value;
                t._updateValue(t.value - ("horizontal" === t.orientation && t.rightToLeft ? -1 : 1) * t.step),
                "switchUntilReleased" === t.mechanicalAction && t._updateValue(e)
            }
            propertyChangedHandler(t, e, r) {
                super.propertyChangedHandler(t, e, r);
                const n = this;
                switch (t) {
                case "min":
                case "max":
                case "orientation":
                case "showButtons":
                    n._layout(),
                    "min" === t ? n.setAttribute("aria-valuemin", r) : "max" === t ? n.setAttribute("aria-valuemax", r) : "orientation" === t && n.setAttribute("aria-orientation", r);
                    break;
                case "value":
                    n._updateValue(e, r);
                    break;
                default:
                    n._layout()
                }
            }
            render() {
                this.setAttribute("role", "scrollbar"),
                this.setAttribute("aria-orientation", this.orientation),
                this.setAttribute("aria-valuemin", this.min),
                this.setAttribute("aria-valuemax", this.max),
                this.setAttribute("aria-valuenow", this.value),
                this._layout(),
                super.render()
            }
            _resizeHandler() {
                this._layout()
            }
            refresh() {
                this._layout()
            }
            beginUpdate() {
                this._isUpdating = !0
            }
            endUpdate() {
                this._isUpdating = !1,
                this.refreshValue()
            }
            refreshValue() {
                this._layout(),
                this._updateValue(this.value)
            }
            _layout() {
                const t = this;
                t._isUpdating || (t.scrollBarSize = "horizontal" === t.orientation ? t.$.track.offsetWidth : t.$.track.offsetHeight,
                t.thumbSize = t._calculateThumbSize(t.scrollBarSize),
                "horizontal" === t.orientation && t.$.thumb.style.width !== t.thumbSize + "px" ? t.$.thumb.style.width = t.thumbSize + "px" : "vertical" === t.orientation && t.$.thumb.style.height !== t.thumbSize + "px" && (t.$.thumb.style.height = t.thumbSize + "px"),
                "horizontal" === t.orientation ? (t.$.nearButton.classList.contains("smart-arrow-up") && t.$.nearButton.classList.remove("smart-arrow-up"),
                t.$.farButton.classList.contains("smart-arrow-down") && t.$.farButton.classList.remove("smart-arrow-down"),
                t.$.nearButton.classList.contains("smart-arrow-left") || t.$.nearButton.classList.add("smart-arrow-left"),
                t.$.farButton.classList.contains("smart-arrow-right") || t.$.farButton.classList.add("smart-arrow-right")) : (t.$.nearButton.classList.contains("smart-arrow-left") && t.$.nearButton.classList.remove("smart-arrow-left"),
                t.$.farButton.classList.contains("smart-arrow-right") && t.$.farButton.classList.remove("smart-arrow-right"),
                t.$.nearButton.classList.contains("smart-arrow-up") || t.$.nearButton.classList.add("smart-arrow-up"),
                t.$.farButton.classList.contains("smart-arrow-down") || t.$.farButton.classList.add("smart-arrow-down")),
                t._updateThumbPosition(),
                (t.value > t.max || t.value < t.min) && t._updateValue(t.value, t.value > t.max ? t.max : t.min))
            }
            _selectStartHandler(t) {
                this.thumbCapture && t.preventDefault()
            }
            _trackDownHandler(t) {
                const e = this;
                t.target === e.$.track && (e._trackDownTimer && clearInterval(e._trackDownTimer),
                e.thumbCapture || (e._trackDownTimer = setInterval((function() {
                    e._trackClickHandler(t)
                }
                ), e.clickRepeatDelay),
                t.stopPropagation(),
                t.preventDefault()))
            }
            _trackClickHandler(t) {
                const e = this;
                if (e.disabled)
                    return;
                if (e._isThumbDragged)
                    return clearInterval(e._trackDownTimer),
                    void (e._trackDownTimer = null);
                const r = e.$.thumb.getBoundingClientRect()
                  , n = t.pageX - window.pageXOffset
                  , o = t.pageY - window.pageYOffset
                  , a = (e.rightToLeft ? -1 : 1) * e.value;
                "horizontal" === e.orientation ? n > (e._isThumbDragged ? e.dragStartX : r.right) ? e._updateValue(e.value + (e.rightToLeft ? -1 : 1) * e.largeStep) : n < (e._isThumbDragged ? e.dragStartX : r.left) && e._updateValue(e.value - (e.rightToLeft ? -1 : 1) * e.largeStep) : o > (e._isThumbDragged ? e.dragStartY : r.bottom) ? e._updateValue(e.value + e.largeStep) : o < (e._isThumbDragged ? e.dragStartY : r.top) && e._updateValue(e.value - e.largeStep),
                "switchUntilReleased" === e.mechanicalAction && e._updateValue(a)
            }
            _trackMoveHandler(t) {
                "touchmove" === t.originalEvent.type && t.originalEvent.preventDefault()
            }
            _updateValue(t, e) {
                const r = this;
                if (!r._isUpdating && (1 === arguments.length && (e = t,
                t = r.value),
                (void 0 === e || isNaN(e)) && (e = r.min),
                e > r.max && (e = r.max),
                e < r.min && (e = r.min),
                r.value = e,
                t !== e)) {
                    if (r.setAttribute("aria-valuenow", e),
                    r._updateThumbPosition(),
                    r.thumbCapture && "switchWhenReleased" === r.mechanicalAction)
                        return;
                    if (r.onChange)
                        return void r.onChange({
                            value: r.value,
                            oldValue: t,
                            min: r.min,
                            max: r.max,
                            context: r
                        });
                    r.$.fireEvent("change", {
                        value: r.value,
                        oldValue: t,
                        min: r.min,
                        max: r.max
                    })
                }
            }
            _updateThumbPosition() {
                const t = this
                  , e = "horizontal" === t.orientation ? t.$.track.offsetWidth : t.$.track.offsetHeight
                  , r = t._calculateThumbSize(e)
                  , n = e - r;
                let o = (e - r) / (t.max - t.min) * (t.value - t.min);
                t.rightToLeft && "horizontal" === t.orientation && (o = (e - r) / (t.max - t.min) * (t.max - t.value - t.min)),
                o = Math.min(n, Math.max(0, o)),
                "vertical" === t.orientation && t.$.thumb.style.top !== o + "px" ? t.$.thumb.style.top = o + "px" : "horizontal" === t.orientation && t.$.thumb.style.left !== o + "px" && (t.$.thumb.style.left = o + "px")
            }
        }
        )
    },
    2: function(t, e, r) {
        t.exports = r.p + "font/smart-icons.woff2"
    },
    256: function(t, e, r) {
        "use strict";
        r.r(e),
        r.d(e, "MenuItem", (function() {
            return w.MenuItem
        }
        )),
        r.d(e, "MenuItemsGroup", (function() {
            return y.MenuItemsGroup
        }
        )),
        r.d(e, "UIMenu", (function() {
            return _
        }
        ));
        r(8),
        r(9),
        r(10),
        r(56);
        Smart.Component;
        Smart.Component;
        Smart.Component;
        var n = r(2)
          , o = r.n(n)
          , a = r(3)
          , i = r.n(a)
          , s = r(4)
          , d = r.n(s)
          , l = r(1)
          , m = r.n(l)
          , c = r(31)
          , u = r.n(c)
          , p = r(5)
          , h = r.n(p)
          , b = r(6)
          , f = r.n(b)
          , g = r(7)
          , v = r.n(g)
          , w = r(76)
          , y = r(77);
        const x = ["@font-face { font-family: smart-icons; src: url('" + o.a + "') format('woff2'); font-weight: normal; font-style: normal; }"]
          , k = [i.a, d.a, m.a, u.a, h.a, f.a, v.a];
        class _ extends HTMLElement {
            get _isUpdating() {
                return this.nativeElement ? this.nativeElement._isUpdating : void 0
            }
            set _isUpdating(t) {
                this.nativeElement && (this.nativeElement._isUpdating = t)
            }
            get animation() {
                return this.nativeElement ? this.nativeElement.animation : void 0
            }
            set animation(t) {
                if (this.nativeElement) {
                    this.nativeElement.animation = t,
                    this._isUpdatingAttribute = !0;
                    const e = this.nativeElement.getAttribute("animation");
                    this.nativeElement.hasAttribute("animation") ? this.setAttribute("animation", e) : this.removeAttribute("animation"),
                    this._isUpdatingAttribute = !1
                }
            }
            get _isUpdating() {
                return this.nativeElement ? this.nativeElement._isUpdating : void 0
            }
            set _isUpdating(t) {
                this.nativeElement && (this.nativeElement._isUpdating = t)
            }
            get autoCloseDelay() {
                return this.nativeElement ? this.nativeElement.autoCloseDelay : void 0
            }
            set autoCloseDelay(t) {
                if (this.nativeElement) {
                    this.nativeElement.autoCloseDelay = t,
                    this._isUpdatingAttribute = !0;
                    const e = this.nativeElement.getAttribute("auto-close-delay");
                    this.nativeElement.hasAttribute("auto-close-delay") ? this.setAttribute("auto-close-delay", e) : this.removeAttribute("auto-close-delay"),
                    this._isUpdatingAttribute = !1
                }
            }
            get _isUpdating() {
                return this.nativeElement ? this.nativeElement._isUpdating : void 0
            }
            set _isUpdating(t) {
                this.nativeElement && (this.nativeElement._isUpdating = t)
            }
            get autoFocusOnMouseenter() {
                return this.nativeElement ? this.nativeElement.autoFocusOnMouseenter : void 0
            }
            set autoFocusOnMouseenter(t) {
                if (this.nativeElement) {
                    this.nativeElement.autoFocusOnMouseenter = t,
                    this._isUpdatingAttribute = !0;
                    const e = this.nativeElement.getAttribute("auto-focus-on-mouseenter");
                    this.nativeElement.hasAttribute("auto-focus-on-mouseenter") ? this.setAttribute("auto-focus-on-mouseenter", e) : this.removeAttribute("auto-focus-on-mouseenter"),
                    this._isUpdatingAttribute = !1
                }
            }
            get _isUpdating() {
                return this.nativeElement ? this.nativeElement._isUpdating : void 0
            }
            set _isUpdating(t) {
                this.nativeElement && (this.nativeElement._isUpdating = t)
            }
            get checkable() {
                return this.nativeElement ? this.nativeElement.checkable : void 0
            }
            set checkable(t) {
                if (this.nativeElement) {
                    this.nativeElement.checkable = t,
                    this._isUpdatingAttribute = !0;
                    const e = this.nativeElement.getAttribute("checkable");
                    this.nativeElement.hasAttribute("checkable") ? this.setAttribute("checkable", e) : this.removeAttribute("checkable"),
                    this._isUpdatingAttribute = !1
                }
            }
            get _isUpdating() {
                return this.nativeElement ? this.nativeElement._isUpdating : void 0
            }
            set _isUpdating(t) {
                this.nativeElement && (this.nativeElement._isUpdating = t)
            }
            get checkboxes() {
                return this.nativeElement ? this.nativeElement.checkboxes : void 0
            }
            set checkboxes(t) {
                if (this.nativeElement) {
                    this.nativeElement.checkboxes = t,
                    this._isUpdatingAttribute = !0;
                    const e = this.nativeElement.getAttribute("checkboxes");
                    this.nativeElement.hasAttribute("checkboxes") ? this.setAttribute("checkboxes", e) : this.removeAttribute("checkboxes"),
                    this._isUpdatingAttribute = !1
                }
            }
            get _isUpdating() {
                return this.nativeElement ? this.nativeElement._isUpdating : void 0
            }
            set _isUpdating(t) {
                this.nativeElement && (this.nativeElement._isUpdating = t)
            }
            get checkMode() {
                return this.nativeElement ? this.nativeElement.checkMode : void 0
            }
            set checkMode(t) {
                if (this.nativeElement) {
                    this.nativeElement.checkMode = t,
                    this._isUpdatingAttribute = !0;
                    const e = this.nativeElement.getAttribute("check-mode");
                    this.nativeElement.hasAttribute("check-mode") ? this.setAttribute("check-mode", e) : this.removeAttribute("check-mode"),
                    this._isUpdatingAttribute = !1
                }
            }
            get _isUpdating() {
                return this.nativeElement ? this.nativeElement._isUpdating : void 0
            }
            set _isUpdating(t) {
                this.nativeElement && (this.nativeElement._isUpdating = t)
            }
            get closeAction() {
                return this.nativeElement ? this.nativeElement.closeAction : void 0
            }
            set closeAction(t) {
                if (this.nativeElement) {
                    this.nativeElement.closeAction = t,
                    this._isUpdatingAttribute = !0;
                    const e = this.nativeElement.getAttribute("close-action");
                    this.nativeElement.hasAttribute("close-action") ? this.setAttribute("close-action", e) : this.removeAttribute("close-action"),
                    this._isUpdatingAttribute = !1
                }
            }
            get _isUpdating() {
                return this.nativeElement ? this.nativeElement._isUpdating : void 0
            }
            set _isUpdating(t) {
                this.nativeElement && (this.nativeElement._isUpdating = t)
            }
            get dataSource() {
                return this.nativeElement ? this.nativeElement.dataSource : void 0
            }
            set dataSource(t) {
                if (this.nativeElement) {
                    this.nativeElement.dataSource = t,
                    this._isUpdatingAttribute = !0;
                    const e = this.nativeElement.getAttribute("data-source");
                    this.nativeElement.hasAttribute("data-source") ? this.setAttribute("data-source", e) : this.removeAttribute("data-source"),
                    this._isUpdatingAttribute = !1
                }
            }
            get _isUpdating() {
                return this.nativeElement ? this.nativeElement._isUpdating : void 0
            }
            set _isUpdating(t) {
                this.nativeElement && (this.nativeElement._isUpdating = t)
            }
            get disabled() {
                return this.nativeElement ? this.nativeElement.disabled : void 0
            }
            set disabled(t) {
                if (this.nativeElement) {
                    this.nativeElement.disabled = t,
                    this._isUpdatingAttribute = !0;
                    const e = this.nativeElement.getAttribute("disabled");
                    this.nativeElement.hasAttribute("disabled") ? this.setAttribute("disabled", e) : this.removeAttribute("disabled"),
                    this._isUpdatingAttribute = !1
                }
            }
            get _isUpdating() {
                return this.nativeElement ? this.nativeElement._isUpdating : void 0
            }
            set _isUpdating(t) {
                this.nativeElement && (this.nativeElement._isUpdating = t)
            }
            get displayMember() {
                return this.nativeElement ? this.nativeElement.displayMember : void 0
            }
            set displayMember(t) {
                if (this.nativeElement) {
                    this.nativeElement.displayMember = t,
                    this._isUpdatingAttribute = !0;
                    const e = this.nativeElement.getAttribute("display-member");
                    this.nativeElement.hasAttribute("display-member") ? this.setAttribute("display-member", e) : this.removeAttribute("display-member"),
                    this._isUpdatingAttribute = !1
                }
            }
            get _isUpdating() {
                return this.nativeElement ? this.nativeElement._isUpdating : void 0
            }
            set _isUpdating(t) {
                this.nativeElement && (this.nativeElement._isUpdating = t)
            }
            get dropDownAppendTo() {
                return this.nativeElement ? this.nativeElement.dropDownAppendTo : void 0
            }
            set dropDownAppendTo(t) {
                if (this.nativeElement) {
                    this.nativeElement.dropDownAppendTo = t,
                    this._isUpdatingAttribute = !0;
                    const e = this.nativeElement.getAttribute("drop-down-append-to");
                    this.nativeElement.hasAttribute("drop-down-append-to") ? this.setAttribute("drop-down-append-to", e) : this.removeAttribute("drop-down-append-to"),
                    this._isUpdatingAttribute = !1
                }
            }
            get _isUpdating() {
                return this.nativeElement ? this.nativeElement._isUpdating : void 0
            }
            set _isUpdating(t) {
                this.nativeElement && (this.nativeElement._isUpdating = t)
            }
            get dropDownOverlay() {
                return this.nativeElement ? this.nativeElement.dropDownOverlay : void 0
            }
            set dropDownOverlay(t) {
                if (this.nativeElement) {
                    this.nativeElement.dropDownOverlay = t,
                    this._isUpdatingAttribute = !0;
                    const e = this.nativeElement.getAttribute("drop-down-overlay");
                    this.nativeElement.hasAttribute("drop-down-overlay") ? this.setAttribute("drop-down-overlay", e) : this.removeAttribute("drop-down-overlay"),
                    this._isUpdatingAttribute = !1
                }
            }
            get _isUpdating() {
                return this.nativeElement ? this.nativeElement._isUpdating : void 0
            }
            set _isUpdating(t) {
                this.nativeElement && (this.nativeElement._isUpdating = t)
            }
            get dropDownPosition() {
                return this.nativeElement ? this.nativeElement.dropDownPosition : void 0
            }
            set dropDownPosition(t) {
                if (this.nativeElement) {
                    this.nativeElement.dropDownPosition = t,
                    this._isUpdatingAttribute = !0;
                    const e = this.nativeElement.getAttribute("drop-down-position");
                    this.nativeElement.hasAttribute("drop-down-position") ? this.setAttribute("drop-down-position", e) : this.removeAttribute("drop-down-position"),
                    this._isUpdatingAttribute = !1
                }
            }
            get _isUpdating() {
                return this.nativeElement ? this.nativeElement._isUpdating : void 0
            }
            set _isUpdating(t) {
                this.nativeElement && (this.nativeElement._isUpdating = t)
            }
            get items() {
                return this.nativeElement ? this.nativeElement.items : void 0
            }
            set items(t) {
                if (this.nativeElement) {
                    this.nativeElement.items = t,
                    this._isUpdatingAttribute = !0;
                    const e = this.nativeElement.getAttribute("items");
                    this.nativeElement.hasAttribute("items") ? this.setAttribute("items", e) : this.removeAttribute("items"),
                    this._isUpdatingAttribute = !1
                }
            }
            get _isUpdating() {
                return this.nativeElement ? this.nativeElement._isUpdating : void 0
            }
            set _isUpdating(t) {
                this.nativeElement && (this.nativeElement._isUpdating = t)
            }
            get itemsMember() {
                return this.nativeElement ? this.nativeElement.itemsMember : void 0
            }
            set itemsMember(t) {
                if (this.nativeElement) {
                    this.nativeElement.itemsMember = t,
                    this._isUpdatingAttribute = !0;
                    const e = this.nativeElement.getAttribute("items-member");
                    this.nativeElement.hasAttribute("items-member") ? this.setAttribute("items-member", e) : this.removeAttribute("items-member"),
                    this._isUpdatingAttribute = !1
                }
            }
            get _isUpdating() {
                return this.nativeElement ? this.nativeElement._isUpdating : void 0
            }
            set _isUpdating(t) {
                this.nativeElement && (this.nativeElement._isUpdating = t)
            }
            get locale() {
                return this.nativeElement ? this.nativeElement.locale : void 0
            }
            set locale(t) {
                if (this.nativeElement) {
                    this.nativeElement.locale = t,
                    this._isUpdatingAttribute = !0;
                    const e = this.nativeElement.getAttribute("locale");
                    this.nativeElement.hasAttribute("locale") ? this.setAttribute("locale", e) : this.removeAttribute("locale"),
                    this._isUpdatingAttribute = !1
                }
            }
            get _isUpdating() {
                return this.nativeElement ? this.nativeElement._isUpdating : void 0
            }
            set _isUpdating(t) {
                this.nativeElement && (this.nativeElement._isUpdating = t)
            }
            get localizeFormatFunction() {
                return this.nativeElement ? this.nativeElement.localizeFormatFunction : void 0
            }
            set localizeFormatFunction(t) {
                if (this.nativeElement) {
                    this.nativeElement.localizeFormatFunction = t,
                    this._isUpdatingAttribute = !0;
                    const e = this.nativeElement.getAttribute("localize-format-function");
                    this.nativeElement.hasAttribute("localize-format-function") ? this.setAttribute("localize-format-function", e) : this.removeAttribute("localize-format-function"),
                    this._isUpdatingAttribute = !1
                }
            }
            get _isUpdating() {
                return this.nativeElement ? this.nativeElement._isUpdating : void 0
            }
            set _isUpdating(t) {
                this.nativeElement && (this.nativeElement._isUpdating = t)
            }
            get messages() {
                return this.nativeElement ? this.nativeElement.messages : void 0
            }
            set messages(t) {
                if (this.nativeElement) {
                    this.nativeElement.messages = t,
                    this._isUpdatingAttribute = !0;
                    const e = this.nativeElement.getAttribute("messages");
                    this.nativeElement.hasAttribute("messages") ? this.setAttribute("messages", e) : this.removeAttribute("messages"),
                    this._isUpdatingAttribute = !1
                }
            }
            get _isUpdating() {
                return this.nativeElement ? this.nativeElement._isUpdating : void 0
            }
            set _isUpdating(t) {
                this.nativeElement && (this.nativeElement._isUpdating = t)
            }
            get minimizeIconTemplate() {
                return this.nativeElement ? this.nativeElement.minimizeIconTemplate : void 0
            }
            set minimizeIconTemplate(t) {
                if (this.nativeElement) {
                    this.nativeElement.minimizeIconTemplate = t,
                    this._isUpdatingAttribute = !0;
                    const e = this.nativeElement.getAttribute("minimize-icon-template");
                    this.nativeElement.hasAttribute("minimize-icon-template") ? this.setAttribute("minimize-icon-template", e) : this.removeAttribute("minimize-icon-template"),
                    this._isUpdatingAttribute = !1
                }
            }
            get _isUpdating() {
                return this.nativeElement ? this.nativeElement._isUpdating : void 0
            }
            set _isUpdating(t) {
                this.nativeElement && (this.nativeElement._isUpdating = t)
            }
            get minimizeWidth() {
                return this.nativeElement ? this.nativeElement.minimizeWidth : void 0
            }
            set minimizeWidth(t) {
                if (this.nativeElement) {
                    this.nativeElement.minimizeWidth = t,
                    this._isUpdatingAttribute = !0;
                    const e = this.nativeElement.getAttribute("minimize-width");
                    this.nativeElement.hasAttribute("minimize-width") ? this.setAttribute("minimize-width", e) : this.removeAttribute("minimize-width"),
                    this._isUpdatingAttribute = !1
                }
            }
            get _isUpdating() {
                return this.nativeElement ? this.nativeElement._isUpdating : void 0
            }
            set _isUpdating(t) {
                this.nativeElement && (this.nativeElement._isUpdating = t)
            }
            get mode() {
                return this.nativeElement ? this.nativeElement.mode : void 0
            }
            set mode(t) {
                if (this.nativeElement) {
                    this.nativeElement.mode = t,
                    this._isUpdatingAttribute = !0;
                    const e = this.nativeElement.getAttribute("mode");
                    this.nativeElement.hasAttribute("mode") ? this.setAttribute("mode", e) : this.removeAttribute("mode"),
                    this._isUpdatingAttribute = !1
                }
            }
            get _isUpdating() {
                return this.nativeElement ? this.nativeElement._isUpdating : void 0
            }
            set _isUpdating(t) {
                this.nativeElement && (this.nativeElement._isUpdating = t)
            }
            get opened() {
                return this.nativeElement ? this.nativeElement.opened : void 0
            }
            set opened(t) {
                if (this.nativeElement) {
                    this.nativeElement.opened = t,
                    this._isUpdatingAttribute = !0;
                    const e = this.nativeElement.getAttribute("opened");
                    this.nativeElement.hasAttribute("opened") ? this.setAttribute("opened", e) : this.removeAttribute("opened"),
                    this._isUpdatingAttribute = !1
                }
            }
            get _isUpdating() {
                return this.nativeElement ? this.nativeElement._isUpdating : void 0
            }
            set _isUpdating(t) {
                this.nativeElement && (this.nativeElement._isUpdating = t)
            }
            get overflow() {
                return this.nativeElement ? this.nativeElement.overflow : void 0
            }
            set overflow(t) {
                if (this.nativeElement) {
                    this.nativeElement.overflow = t,
                    this._isUpdatingAttribute = !0;
                    const e = this.nativeElement.getAttribute("overflow");
                    this.nativeElement.hasAttribute("overflow") ? this.setAttribute("overflow", e) : this.removeAttribute("overflow"),
                    this._isUpdatingAttribute = !1
                }
            }
            get _isUpdating() {
                return this.nativeElement ? this.nativeElement._isUpdating : void 0
            }
            set _isUpdating(t) {
                this.nativeElement && (this.nativeElement._isUpdating = t)
            }
            get preventCloseOnCheck() {
                return this.nativeElement ? this.nativeElement.preventCloseOnCheck : void 0
            }
            set preventCloseOnCheck(t) {
                if (this.nativeElement) {
                    this.nativeElement.preventCloseOnCheck = t,
                    this._isUpdatingAttribute = !0;
                    const e = this.nativeElement.getAttribute("prevent-close-on-check");
                    this.nativeElement.hasAttribute("prevent-close-on-check") ? this.setAttribute("prevent-close-on-check", e) : this.removeAttribute("prevent-close-on-check"),
                    this._isUpdatingAttribute = !1
                }
            }
            get _isUpdating() {
                return this.nativeElement ? this.nativeElement._isUpdating : void 0
            }
            set _isUpdating(t) {
                this.nativeElement && (this.nativeElement._isUpdating = t)
            }
            get readonly() {
                return this.nativeElement ? this.nativeElement.readonly : void 0
            }
            set readonly(t) {
                if (this.nativeElement) {
                    this.nativeElement.readonly = t,
                    this._isUpdatingAttribute = !0;
                    const e = this.nativeElement.getAttribute("readonly");
                    this.nativeElement.hasAttribute("readonly") ? this.setAttribute("readonly", e) : this.removeAttribute("readonly"),
                    this._isUpdatingAttribute = !1
                }
            }
            get _isUpdating() {
                return this.nativeElement ? this.nativeElement._isUpdating : void 0
            }
            set _isUpdating(t) {
                this.nativeElement && (this.nativeElement._isUpdating = t)
            }
            get rightToLeft() {
                return this.nativeElement ? this.nativeElement.rightToLeft : void 0
            }
            set rightToLeft(t) {
                if (this.nativeElement) {
                    this.nativeElement.rightToLeft = t,
                    this._isUpdatingAttribute = !0;
                    const e = this.nativeElement.getAttribute("right-to-left");
                    this.nativeElement.hasAttribute("right-to-left") ? this.setAttribute("right-to-left", e) : this.removeAttribute("right-to-left"),
                    this._isUpdatingAttribute = !1
                }
            }
            get _isUpdating() {
                return this.nativeElement ? this.nativeElement._isUpdating : void 0
            }
            set _isUpdating(t) {
                this.nativeElement && (this.nativeElement._isUpdating = t)
            }
            get selectionMode() {
                return this.nativeElement ? this.nativeElement.selectionMode : void 0
            }
            set selectionMode(t) {
                if (this.nativeElement) {
                    this.nativeElement.selectionMode = t,
                    this._isUpdatingAttribute = !0;
                    const e = this.nativeElement.getAttribute("selection-mode");
                    this.nativeElement.hasAttribute("selection-mode") ? this.setAttribute("selection-mode", e) : this.removeAttribute("selection-mode"),
                    this._isUpdatingAttribute = !1
                }
            }
            get _isUpdating() {
                return this.nativeElement ? this.nativeElement._isUpdating : void 0
            }
            set _isUpdating(t) {
                this.nativeElement && (this.nativeElement._isUpdating = t)
            }
            get theme() {
                return this.nativeElement ? this.nativeElement.theme : void 0
            }
            set theme(t) {
                if (this.nativeElement) {
                    this.nativeElement.theme = t,
                    this._isUpdatingAttribute = !0;
                    const e = this.nativeElement.getAttribute("theme");
                    this.nativeElement.hasAttribute("theme") ? this.setAttribute("theme", e) : this.removeAttribute("theme"),
                    this._isUpdatingAttribute = !1
                }
            }
            get _isUpdating() {
                return this.nativeElement ? this.nativeElement._isUpdating : void 0
            }
            set _isUpdating(t) {
                this.nativeElement && (this.nativeElement._isUpdating = t)
            }
            get unfocusable() {
                return this.nativeElement ? this.nativeElement.unfocusable : void 0
            }
            set unfocusable(t) {
                if (this.nativeElement) {
                    this.nativeElement.unfocusable = t,
                    this._isUpdatingAttribute = !0;
                    const e = this.nativeElement.getAttribute("unfocusable");
                    this.nativeElement.hasAttribute("unfocusable") ? this.setAttribute("unfocusable", e) : this.removeAttribute("unfocusable"),
                    this._isUpdatingAttribute = !1
                }
            }
            get _isUpdating() {
                return this.nativeElement ? this.nativeElement._isUpdating : void 0
            }
            set _isUpdating(t) {
                this.nativeElement && (this.nativeElement._isUpdating = t)
            }
            get valueMember() {
                return this.nativeElement ? this.nativeElement.valueMember : void 0
            }
            set valueMember(t) {
                if (this.nativeElement) {
                    this.nativeElement.valueMember = t,
                    this._isUpdatingAttribute = !0;
                    const e = this.nativeElement.getAttribute("value-member");
                    this.nativeElement.hasAttribute("value-member") ? this.setAttribute("value-member", e) : this.removeAttribute("value-member"),
                    this._isUpdatingAttribute = !1
                }
            }
            static get observedAttributes() {
                return ["style", "class", "animation", "auto-close-delay", "auto-focus-on-mouseenter", "checkable", "checkboxes", "check-mode", "close-action", "data-source", "disabled", "display-member", "drop-down-append-to", "drop-down-overlay", "drop-down-position", "items", "items-member", "locale", "localize-format-function", "messages", "minimize-icon-template", "minimize-width", "mode", "opened", "overflow", "prevent-close-on-check", "readonly", "right-to-left", "selection-mode", "theme", "unfocusable", "value-member"]
            }
            get properties() {
                return ["animation", "autoCloseDelay", "autoFocusOnMouseenter", "checkable", "checkboxes", "checkMode", "closeAction", "dataSource", "disabled", "displayMember", "dropDownAppendTo", "dropDownOverlay", "dropDownPosition", "items", "itemsMember", "locale", "localizeFormatFunction", "messages", "minimizeIconTemplate", "minimizeWidth", "mode", "opened", "overflow", "preventCloseOnCheck", "readonly", "rightToLeft", "selectionMode", "theme", "unfocusable", "valueMember"]
            }
            get onClose() {
                return this._onClose
            }
            set onClose(t) {
                this._onClose = t
            }
            get onClosing() {
                return this._onClosing
            }
            set onClosing(t) {
                this._onClosing = t
            }
            get onCollapse() {
                return this._onCollapse
            }
            set onCollapse(t) {
                this._onCollapse = t
            }
            get onCollapsing() {
                return this._onCollapsing
            }
            set onCollapsing(t) {
                this._onCollapsing = t
            }
            get onExpand() {
                return this._onExpand
            }
            set onExpand(t) {
                this._onExpand = t
            }
            get onExpanding() {
                return this._onExpanding
            }
            set onExpanding(t) {
                this._onExpanding = t
            }
            get onItemCheckChange() {
                return this._onItemCheckChange
            }
            set onItemCheckChange(t) {
                this._onItemCheckChange = t
            }
            get onItemClick() {
                return this._onItemClick
            }
            set onItemClick(t) {
                this._onItemClick = t
            }
            get onOpen() {
                return this._onOpen
            }
            set onOpen(t) {
                this._onOpen = t
            }
            get onOpening() {
                return this._onOpening
            }
            set onOpening(t) {
                this._onOpening = t
            }
            constructor() {
                super(),
                this._onClose = null,
                this._onClosing = null,
                this._onCollapse = null,
                this._onCollapsing = null,
                this._onExpand = null,
                this._onExpanding = null,
                this._onItemCheckChange = null,
                this._onItemClick = null,
                this._onOpen = null,
                this._onOpening = null
            }
            get eventListeners() {
                return ["onClose", "onClosing", "onCollapse", "onCollapsing", "onExpand", "onExpanding", "onItemCheckChange", "onItemClick", "onOpen", "onOpening"]
            }
            addItem(t, e) {
                this.nativeElement.isRendered ? this.nativeElement.addItem(t, e) : this.nativeElement.whenRendered(()=>{
                    this.nativeElement.addItem(t, e)
                }
                )
            }
            checkItem(t) {
                this.nativeElement.isRendered ? this.nativeElement.checkItem(t) : this.nativeElement.whenRendered(()=>{
                    this.nativeElement.checkItem(t)
                }
                )
            }
            clear() {
                this.nativeElement.isRendered ? this.nativeElement.clear() : this.nativeElement.whenRendered(()=>{
                    this.nativeElement.clear()
                }
                )
            }
            clickItem(t) {
                this.nativeElement.isRendered ? this.nativeElement.clickItem(t) : this.nativeElement.whenRendered(()=>{
                    this.nativeElement.clickItem(t)
                }
                )
            }
            close() {
                this.nativeElement.isRendered ? this.nativeElement.close() : this.nativeElement.whenRendered(()=>{
                    this.nativeElement.close()
                }
                )
            }
            collapseItem(t, e) {
                this.nativeElement.isRendered ? this.nativeElement.collapseItem(t, e) : this.nativeElement.whenRendered(()=>{
                    this.nativeElement.collapseItem(t, e)
                }
                )
            }
            expandItem(t, e) {
                this.nativeElement.isRendered ? this.nativeElement.expandItem(t, e) : this.nativeElement.whenRendered(()=>{
                    this.nativeElement.expandItem(t, e)
                }
                )
            }
            async getItem(t) {
                return await (()=>new Promise(e=>{
                    this.nativeElement.whenRendered(()=>{
                        const r = this.nativeElement.getItem(t);
                        e(r)
                    }
                    )
                }
                ))()
            }
            maximize() {
                this.nativeElement.isRendered ? this.nativeElement.maximize() : this.nativeElement.whenRendered(()=>{
                    this.nativeElement.maximize()
                }
                )
            }
            minimize() {
                this.nativeElement.isRendered ? this.nativeElement.minimize() : this.nativeElement.whenRendered(()=>{
                    this.nativeElement.minimize()
                }
                )
            }
            open(t, e) {
                this.nativeElement.isRendered ? this.nativeElement.open(t, e) : this.nativeElement.whenRendered(()=>{
                    this.nativeElement.open(t, e)
                }
                )
            }
            removeItem(t) {
                this.nativeElement.isRendered ? this.nativeElement.removeItem(t) : this.nativeElement.whenRendered(()=>{
                    this.nativeElement.removeItem(t)
                }
                )
            }
            uncheckItem(t) {
                this.nativeElement.isRendered ? this.nativeElement.uncheckItem(t) : this.nativeElement.whenRendered(()=>{
                    this.nativeElement.uncheckItem(t)
                }
                )
            }
            componentDidRender(t) {
                const e = this
                  , r = {}
                  , n = {};
                let o = null;
                for (let t in e.props)
                    "children" !== t && ("style" !== t ? t.startsWith("on") && -1 === e.properties.indexOf(t) ? n[t] = e.props[t] : r[t] = e.props[t] : o = e.props[t]);
                for (let t in e.attributes) {
                    const r = e.attributes[t].name;
                    if (r)
                        if ("class" !== r)
                            "style" === r && e.nativeElement.setAttribute(r, e.getAttribute(r)),
                            -1 !== e.properties.indexOf(r.replace(/-([a-z])/g, (function(t) {
                                return t[1].toUpperCase()
                            }
                            ))) && e.nativeElement.setAttribute(r, e.getAttribute(r));
                        else {
                            const t = e.getAttribute(r).trim().split(" ");
                            for (let r in t)
                                e.nativeElement.classList.contains(t[r]) || "" === t[r] || e.nativeElement.classList.add(t[r])
                        }
                }
                for (let t in r)
                    if ("class" !== t) {
                        if (r[t] !== e.nativeElement[t]) {
                            const n = t=>t.replace(/-([a-z])/g, (function(t) {
                                return t[1].toUpperCase()
                            }
                            ));
                            "hover" !== t && "active" !== t && "focus" !== t && "selected" !== t || e.nativeElement.setAttribute(t, "");
                            const o = n(t);
                            e.nativeElement[o] = r[t]
                        }
                    } else {
                        const n = r[t].trim().split(" ");
                        for (let t in n)
                            e.nativeElement.classList.contains(n[t]) || "" === n[t] || e.nativeElement.classList.add(n[t])
                    }
                for (let t in n)
                    e[t] = n[t],
                    e.nativeElement[t.toLowerCase()] = n[t];
                if (o)
                    for (let t in o)
                        e.nativeElement.style[t] = o[t]
            }
            componentDidMount() {
                this.componentDidRender(!0)
            }
            componentDidUpdate() {
                this.componentDidRender(!1)
            }
            componentWillUnmount() {
                const t = this;
                if (t.nativeElement) {
                    t.nativeElement.whenRenderedCallbacks = [];
                    for (let e = 0; e < t.eventListeners.length; e++) {
                        const r = t.eventListeners[e];
                        t.nativeElement.removeEventListener(r.substring(2).toLowerCase(), t[r])
                    }
                }
            }
            connectedCallback() {
                this.shadowRoot || this._render()
            }
            disconnectedCallback() {
                this.componentWillUnmount()
            }
            addStylesToElement(t, e) {
                const r = document.createElement("style");
                r.type = "text/css";
                for (let t = 0; t < e.length; t++) {
                    let n = document.createTextNode(e[t]);
                    n.textContent = n.textContent.replace(":root", ":host"),
                    r.appendChild(n)
                }
                if (document.adoptedStyleSheets) {
                    const e = new CSSStyleSheet;
                    e.replaceSync(r.innerHTML),
                    t.adoptedStyleSheets ? t.adoptedStyleSheets = [e] : -1 === document.adoptedStyleSheets.indexOf(e) && (document.adoptedStyleSheets = [e])
                } else
                    t.appendChild(r)
            }
            addStyle(t) {
                const e = this.shadowRoot;
                if ("string" == typeof t) {
                    const r = document.createElement("style");
                    r.type = "text/css";
                    const n = document.createTextNode(t);
                    r.appendChild(n),
                    e.appendChild(r)
                } else
                    e.appendChild(t)
            }
            attributeChangedCallback(t, e, r) {
                const n = this;
                if (n.shadowRoot && n.isReady && !n._isUpdatingAttribute)
                    if ("class" !== t)
                        n.nativeElement.setAttribute(t, r);
                    else {
                        const t = r.trim().split(" ")
                          , o = e.trim().split(" ");
                        for (let t in o)
                            "" !== o[t] && n.nativeElement.classList.remove(o[t]);
                        for (let e in t)
                            n.nativeElement.classList.contains(t[e]) || "" === t[e] || n.nativeElement.classList.add(t[e])
                    }
            }
            _render() {
                const t = this;
                t.innerHTML = '<template><smart-menu part="smart-menu" ref="menu">' + this.innerHTML + '</smart-menu ref="menu"></template>',
                t.attachShadow({
                    mode: "open"
                }),
                k && t.addStylesToElement(t.shadowRoot, k),
                x && t.addStylesToElement(t, x),
                t.hasAttribute("style-url") && t.addStyle("@import url(" + t.getAttribute("style-url") + ")"),
                t.classList.add("smart-element-init");
                (()=>{
                    const e = t.querySelector("template")
                      , r = e.content.cloneNode(!0);
                    r.props = this.props,
                    t.shadowRoot.appendChild(r),
                    t.nativeElement = t.shadowRoot.querySelector("smart-menu"),
                    t.classList.remove("smart-element-init"),
                    t.componentDidMount(),
                    e.remove(),
                    t.isReady = !0,
                    t.classList.add("smart-ui-component")
                }
                )()
            }
        }
        e.default = _;
        window.customElements.get("smart-ui-menu") || window.customElements.define("smart-ui-menu", _)
    },
    3: function(t, e, r) {
        (e = r(0)(!1)).push([t.i, "/* CSS variables */\r\n\r\n:root {\r\n    --smart-primary-rgb: 0, 92, 153;\r\n    /* The r, g, and b components of the theme primary color */\r\n    --smart-primary: rgb(var(--smart-primary-rgb));\r\n    /* The theme primary color */\r\n    --smart-primary-color: #ffffff;\r\n    /* Text color on top of a primary background */\r\n\r\n    --smart-secondary-rgb: 45, 45, 48;\r\n    /* The r, g, and b components of the theme secondary color */\r\n    --smart-secondary: rgb(var(--smart-secondary-rgb));\r\n    /* The theme secondary color */\r\n    --smart-secondary-color: #ffffff;\r\n    /* Text color on top of a secondary background */\r\n\r\n    --smart-error-rgb: 176, 0, 32;\r\n    /* The theme error color */\r\n    --smart-error: rgb(var(--smart-error-rgb));\r\n    /* The theme error color */\r\n    --smart-error-color: #ffffff;\r\n    /* Text color on top of a error background */\r\n\r\n    --smart-success-rgb: 139, 195, 74;\r\n    /* The r, g, and b components of the theme success color */\r\n    --smart-success: rgb(var(--smart-success-rgb));\r\n    /* The theme success color */\r\n    --smart-success-color: #ffffff;\r\n    /* Text color on top of a success background */\r\n\r\n    --smart-info-rgb: 92, 192, 222;\r\n    /* The r, g, and b components of the theme info color */\r\n    --smart-info: rgb(var(--smart-info-rgb));\r\n    /* The theme info color */\r\n    --smart-info-color: #fff;\r\n    /* Text color on top of a info background */\r\n\r\n    --smart-warning-rgb: 240, 173, 78;\r\n    /* The r, g, and b components of the theme warning color */\r\n    --smart-warning: rgb(var(--smart-warning-rgb));\r\n    /* The theme warning color */\r\n    --smart-warning-color: #fff;\r\n    /* Text color on top of a warning background */\r\n\r\n    --smart-light-rgb: 255, 255, 255;\r\n    /* The r, g, and b components of the theme light color */\r\n    --smart-light: rgb(var(--smart-light-rgb));\r\n    /* The theme light color */\r\n    --smart-light-color: #222222;\r\n    /* Text color on top of a light background */\r\n\r\n    --smart-dark-rgb: 34, 34, 34;\r\n    /* The r, g, and b components of the theme dark color */\r\n    --smart-dark: rgb(var(--smart-dark-rgb));\r\n    /* The theme dark color */\r\n    --smart-dark-color: #ffffff;\r\n    /* Text color on top of a dark background */\r\n\r\n    --smart-background: #fefefe;\r\n    /* The theme background color. The background color appears behind scrollable content.*/\r\n    --smart-background-color: #5A5A5A;\r\n    /* Text color on top of a background background */\r\n\r\n    --smart-surface: #F5F5F5;\r\n    /* The theme surface color. Surface colors affect surfaces of components, such as cards, sheets, and menus. */\r\n    --smart-surface-color: #323232;\r\n    /* Text color on top of a surface surface */\r\n\r\n    --smart-disabled: #CCCCCC;\r\n    /* The theme primary color in disabled state. */\r\n    --smart-disabled-color: #555;\r\n    /* Text color on top of a theme background in disabled state */\r\n\r\n    --smart-ui-state-hover: #ebebeb;\r\n    /* Hover state background. */\r\n    --smart-ui-state-color-hover: #333;\r\n    /* Text color, when UI Element's state is 'hover'. */\r\n    --smart-ui-state-border-hover: var(--smart-ui-state-hover);\r\n    /* Border color, when UI Element's state is 'hover'. */\r\n    --smart-ui-state-active: var(--smart-primary);\r\n    /* Active state background. */\r\n    --smart-ui-state-color-active: var(--smart-primary-color);\r\n    /* Text color, when UI Element's state is 'active'. */\r\n    --smart-ui-state-border-active: var(--smart-primary);\r\n    /* Border color, when UI Element's state is 'active'. */\r\n    --smart-ui-state-focus: #e2e0e0;\r\n    /* Focus state background. */\r\n    --smart-ui-state-color-focus: #333;\r\n    /* Text color, when UI Element's state is 'focus'. */\r\n    --smart-ui-state-border-focus: var(--smart-ui-state-focus);\r\n    /* Border color, when UI Element's state is 'focus'. */\r\n    --smart-ui-state-selected: rgba(var(--smart-primary-rgb), .1);\r\n    /* Selected state background. */\r\n    --smart-ui-state-color-selected: var(--smart-primary);\r\n    /* Text color, when UI Element's state is 'selected'. */\r\n    --smart-ui-state-border-selected: rgba(var(--smart-primary-rgb), .1);\r\n    /* Border color, when UI Element's state is 'selected'. */\r\n    --smart-item-border-width: 1px;\r\n    /* Theme border-width */\r\n    --smart-item-border-radius: var(--smart-border-radius);\r\n    /* Border radius of items. */\r\n    --smart-item-border-top-left-radius: var(--smart-border-radius);\r\n    /* Border top-left radius of items. */\r\n    --smart-item-border-top-right-radius: var(--smart-border-radius);\r\n    /* Border top-right radius of items. */\r\n    --smart-item-border-bottom-left-radius: var(--smart-border-radius);\r\n    /* Border bottom-left radius of items. */\r\n    --smart-item-border-bottom-right-radius: var(--smart-border-radius);\r\n    /* Border bottom-right radius of items. */\r\n    --smart-font-size: 14px;\r\n    /* Theme font-size */\r\n    --smart-font-weight: inherit;\r\n    /* Theme font-weight */\r\n    --smart-font-style: inherit;\r\n    /* Theme font-style */\r\n    --smart-font-family: Roboto, \"Helvetica Neue\", sans-serif;\r\n    /* Theme font-family */\r\n    --smart-font-family-icon: smart-icons;\r\n    /* Theme icons font-family. */\r\n    --smart-font-family-icon-src: local('../font/smart-icons'), url('../font/smart-icons.woff2') format('woff2'), url('../font/smart-icons.woff') format('woff'), url('../font/smart-icons.ttf') format('truetype'), url('../font/smart-icons.eot') format('embedded-opentype');\r\n    /* The source of the theme icons font-family */\r\n    --smart-border-width: 1px;\r\n    /* Theme border-width */\r\n    --smart-border-radius: 4px;\r\n    /* Theme border-radius */\r\n    --smart-border-top-left-radius: var(--smart-border-radius);\r\n    /* Theme border-radius */\r\n    --smart-border-top-right-radius: var(--smart-border-radius);\r\n    /* Theme border-radius */\r\n    --smart-border-bottom-left-radius: var(--smart-border-radius);\r\n    /* Theme border-radius */\r\n    --smart-border-bottom-right-radius: var(--smart-border-radius);\r\n    /* Theme border-radius */\r\n    --smart-border: #E0E0E0;\r\n    /* The theme background border color */\r\n    --smart-border-rgb: 244, 224, 224;\r\n    /* The theme background border color */\r\n    --smart-outline: #b2b2b2;\r\n    /* The theme active element outline color */\r\n    --smart-editor-selection: var(--smart-primary);\r\n    /* Background color of the selected text. */\r\n    --smart-editor-selection-color: var(--smart-primary-color);\r\n    /* Color of the selected text. */\r\n    --smart-alternation-index0-color: var(--smart-surface-color);\r\n    /* Alternation color for index0 */\r\n    --smart-alternation-index0-border: var(--smart-surface);\r\n    /* Alternation border color for index0 */\r\n    --smart-alternation-index0-background: var(--smart-surface);\r\n    /* Alternation background color for index0 */\r\n    --smart-alternation-index1-color: #111;\r\n    /*Alternation color for index1 */\r\n    --smart-alternation-index1-border: #9BBB59;\r\n    /* Alternation border color for index1 */\r\n    --smart-alternation-index1-background: #9BBB59;\r\n    /* Alternation background color for index1 */\r\n    --smart-alternation-index2-color: #fff;\r\n    /*Alternation color for index2 */\r\n    --smart-alternation-index2-border: #FC3752;\r\n    /* Alternation border color for index2 */\r\n    --smart-alternation-index2-background: #FC3752;\r\n    /* Alternation background color for index2 */\r\n    --smart-tick-color: var(--smart-border);\r\n    /* Default tick color for smartTank, smartSlider and smartGauge */\r\n    --smart-tick-label-color: var(--smart-background-color);\r\n    /* Default tick label color for smartTank, smartSlider and smartGauge */\r\n    --smart-box-height: 450px;\r\n    /* Default height for Dialog, Gauge, Accordion, Tabs, Tree, Array */\r\n    --smart-box-width: 450px;\r\n    /* Default width for  Dialog, Gauge, Accordion, Tabs, Tree, Array */\r\n    --smart-bar-height: 48px;\r\n    /* Default height for headers and footers */\r\n    --smart-bar-width: 400px;\r\n    /* Default width for headers and footers */\r\n    --smart-editor-height: 30px;\r\n    /* Default height for editors */\r\n    --smart-editor-width: 250px;\r\n    /* Default width for editors */\r\n    --smart-editor-drop-down-width: 300px;\r\n    /* Default width for editors drop-down */\r\n    --smart-editor-drop-down-height: 400px;\r\n    /* Default height for editors drop-down */\r\n    --smart-editor-drop-down-padding-size: 3px;\r\n    /* smartDropDownList, smartComboBox drop down default height */\r\n    --smart-editor-drop-down-max-width: 800px;\r\n    /* smartDropDownList, smartComboBox, smartTextBox popup max width */\r\n    --smart-editor-drop-down-min-width: 100px;\r\n    /* smartDropDownList, smartComboBox, smartTextBox popup min width */\r\n    --smart-editor-drop-down-max-height: 400px;\r\n    /* smartDropDownList, smartComboBox, smartTextBox popup max height */\r\n    --smart-editor-drop-down-min-height: 50px;\r\n    /* smartDropDownList, smartComboBox, smartTextBox popup min height */\r\n    --smart-editor-drop-down-resize-bar-height: 15px;\r\n    /* smartDropDownList, smartComboBox, smartTextBox popup resize bar default height */\r\n    --smart-editor-drop-down-vertical-offset: 5px;\r\n    /* Vertical offset of editor drop downs */\r\n    --smart-editor-drop-down-z-index: 9999;\r\n    /* z-index of editor drop downs */\r\n    --smart-editor-label-padding: 4px;\r\n    /* Default padding for inputs */\r\n    --smart-editor-addon-width: 27px;\r\n    /* Default width for spin buttons, dropdown buttons. */\r\n    --smart-column-icon-size: 30px;\r\n    /* Default size of column icons */\r\n    --smart-icon-table: '\\e800';\r\n    /* Code of table icon */\r\n    --smart-icon-star: '\\e801';\r\n    /* Code of star icon */\r\n    --smart-icon-star-empty: '\\e802';\r\n    /* Code of empty star icon */\r\n    --smart-icon-plus: '\\e803';\r\n    /* Code of plus icon */\r\n    --smart-icon-minus: '\\e804';\r\n    /* Code of minus icon */\r\n    --smart-icon-attention-circled: '\\e805';\r\n    /* Code of circled attention icon */\r\n    --smart-icon-align-left: '\\e806';\r\n    /* Code of align left icon */\r\n    --smart-icon-align-right: '\\e807';\r\n    /* Code of align right icon */\r\n    --smart-icon-align-center: '\\e808';\r\n    /* Code of align center icon */\r\n    --smart-icon-align-justify: '\\e813';\r\n    /* Code of align justify icon */\r\n    --smart-icon-reload: '\\e809';\r\n    /* Code of reload icon */\r\n    --smart-icon-cancel: '\\e80d';\r\n    /* Code of cancel icon */\r\n    --smart-icon-close: '\\e80d';\r\n    /* Code of close icon */\r\n    --smart-icon-cancel-circled: '\\e80e';\r\n    /* Code of circled cancel icon */\r\n    --smart-icon-plus-circled: '\\e810';\r\n    /* Code of circled plus icon */\r\n    --smart-icon-power: '\\e811';\r\n    /* Code of power icon */\r\n    --smart-icon-minus-circled: '\\e814';\r\n    /* Code of circled minus icon */\r\n    --smart-icon-arrow-up-alt: '\\e817';\r\n    /* Code of alternative up arrow icon */\r\n    --smart-icon-radio: '\\e818';\r\n    /* Code of radio icon */\r\n    --smart-icon-refresh: '\\e819';\r\n    /* Code of refresh icon */\r\n    --smart-icon-chart: '\\e81a';\r\n    /* Code of chart icon */\r\n    --smart-icon-check-squared: '\\e81b';\r\n    /* Code of squared check icon */\r\n    --smart-icon-resize-full: '\\e81c';\r\n    /* Code of full resize icon */\r\n    --smart-icon-resize-small: '\\e81d';\r\n    /* Code of small resize icon */\r\n    --smart-icon-resize-vertical: '\\e80c';\r\n    /* Code of vertical resize icon */\r\n    --smart-icon-resize-horizontal: '\\e80f';\r\n    /* Code of horizontal resize icon */\r\n    --smart-icon-lock: '\\e821';\r\n    /* Code of lock icon */\r\n    --smart-icon-sort: '\\e823';\r\n    /* Code of sort icon */\r\n    --smart-icon-delete: '\\e826';\r\n    /* Code of delete icon */\r\n    --smart-icon-search: '\\e828';\r\n    /* Code of search icon */\r\n    --smart-icon-calendar: '\\e829';\r\n    /* Code of calendar icon */\r\n    --smart-icon-edit: '\\e82a';\r\n    /* Code of edit icon */\r\n    --smart-icon-popup: '\\e82c';\r\n    /* Code of popup icon */\r\n    --smart-icon-lock-open: '\\e82e';\r\n    /* Code of open lock icon */\r\n    --smart-icon-add-filter: '\\e82f';\r\n    /* Code of add filter icon */\r\n    --smart-icon-block: '\\e832';\r\n    /* Code of block icon */\r\n    --smart-icon-settings: '\\e833';\r\n    /* Code of settings icon */\r\n    --smart-icon-duplicate: '\\e834';\r\n    /* Code of duplicate icon */\r\n    --smart-icon-copy-record: '\\e835';\r\n    /* Code of copy record icon */\r\n    --smart-icon-download-alt: '\\e836';\r\n    /* Code of alternative download icon */\r\n    --smart-icon-clock: '\\e837';\r\n    /* Code of clock icon */\r\n    --smart-icon-attention: '\\e838';\r\n    /* Code of attention icon */\r\n    --smart-icon-help-circled: '\\e839';\r\n    /* Code of circled help icon */\r\n    --smart-icon-mail: '\\e83c';\r\n    /* Code of mail icon */\r\n    --smart-icon-up: '\\e83f';\r\n    /* Code of up icon */\r\n    --smart-icon-first-page: '\\e900';\r\n    /* Code of first page icon */\r\n    --smart-icon-arrow-down: '\\e901';\r\n    /* Code of down arrow icon */\r\n    --smart-icon-arrow-left: '\\e902';\r\n    /* Code of left arrow icon */\r\n    --smart-icon-arrow-right: '\\e903';\r\n    /* Code of right arrow icon */\r\n    --smart-icon-arrow-up: '\\e904';\r\n    /* Code of up arrow icon */\r\n    --smart-icon-arrow-down-filled: '\\e812';\r\n    /* Code of filled down arrow icon */\r\n    --smart-icon-arrow-left-filled: '\\e816';\r\n    /* Code of filled left arrow icon */\r\n    --smart-icon-arrow-right-filled: '\\e81e';\r\n    /* Code of filled right arrow icon */\r\n    --smart-icon-arrow-up-filled: '\\e815';\r\n    /* Code of filled up arrow icon */\r\n    --smart-icon-last-page: '\\e905';\r\n    /* Code of last page icon */\r\n    --smart-icon-more-horiz: '\\e906';\r\n    /* Code of more icon */\r\n    --smart-icon-skip-next: '\\e907';\r\n    /* Code of skip next icon */\r\n    --smart-icon-check: '\\e908';\r\n    /* Code of check icon */\r\n    --smart-icon-mode-edit: '\\e909';\r\n    /* Code of edit mode icon */\r\n    --smart-icon-replay: '\\e90c';\r\n    /* Code of replay icon */\r\n    --smart-icon-visibility: '\\e90d';\r\n    /* Code of visibility icon */\r\n    --smart-icon-visibility-off: '\\e90e';\r\n    /* Code of visibility off icon */\r\n    --smart-icon-link: '\\e831';\r\n    /* Code of link icon */\r\n    --smart-icon-unlink: '\\f127';\r\n    /* Code of link icon */\r\n    --smart-icon-link-ext: '\\f08e';\r\n    /* Code of link icon */\r\n    --smart-icon-check-empty: '\\f096';\r\n    /* Code of empty check icon */\r\n    --smart-icon-filter: '\\f0b0';\r\n    /* Code of filter icon */\r\n    --smart-icon-resize-full-alt: '\\f0b2';\r\n    /* Code of full resize alternative icon */\r\n    --smart-icon-menu: '\\f0c9';\r\n    /* Code of menu icon */\r\n    --smart-icon-sort-1: '\\f0dc';\r\n    /* Code of sort alternative icon */\r\n    --smart-icon-paste: '\\f0ea';\r\n    /* Code of paste icon */\r\n    --smart-icon-circle-empty: '\\f10c';\r\n    /* Code of empty circle icon */\r\n    --smart-icon-circle: '\\f111';\r\n    /* Code of circle icon */\r\n    --smart-icon-ellipsis: '\\f141';\r\n    /* Code of ellipsis icon */\r\n    --smart-icon-minus-squared: '\\f146';\r\n    /* Code of squared minus icon */\r\n    --smart-icon-ok-squared: '\\f14a';\r\n    /* Code of squared ok icon */\r\n    --smart-icon-sort-name-up: '\\f15d';\r\n    /* Code of sort name up icon */\r\n    --smart-icon-sort-name-down: '\\f15e';\r\n    /* Code of sort name down icon */\r\n    --smart-icon-sort-alt-up: '\\f160';\r\n    /* Code of sort up alternative icon */\r\n    --smart-icon-sort-alt-down: '\\f161';\r\n    /* Code of sort down alternative icon */\r\n    --smart-icon-sort-number-up: '\\f162';\r\n    /* Code of sort number up icon */\r\n    --smart-icon-sort-number-down: '\\f163';\r\n    /* Code of sort number down icon */\r\n    --smart-icon-dot-circled: '\\f192';\r\n    /* Code of circled dot icon */\r\n    --smart-icon-toggle-off: '\\f204';\r\n    /* Code of toggle off icon */\r\n    --smart-icon-toggle-on: '\\f205';\r\n    /* Code of toggle on icon */\r\n    --smart-icon-group: '\\f247';\r\n    /* Code of group icon */\r\n    --smart-icon-ungroup: '\\f248';\r\n    /* Code of ungroup icon */\r\n    --smart-icon-window-maximize: '\\f2d0';\r\n    /* Code of maximize window icon */\r\n    --smart-icon-window-minimize: '\\f2d1';\r\n    /* Code of minimize window icon */\r\n    --smart-icon-window-restore: '\\f2d2';\r\n    /* Code of restore window icon */\r\n    --smart-icon-window-pin-alt: '\\e82d';\r\n    /* Code of pin window alternative icon */\r\n    --smart-icon-window-pin: '\\e80a';\r\n    /* Code of window pin icon */\r\n    --smart-icon-docs: '\\f0c5';\r\n    /* Code of docs icon */\r\n    --smart-icon-math: '\\f01a';\r\n    /* Code of math icon */\r\n    --smart-icon-spin: '\\e80b';\r\n    /* Code of spin icon */\r\n    --smart-icon-user: '\\e81f';\r\n    /* Code of user icon */\r\n    --smart-icon-font: '\\f031';\r\n    /* Code of font icon */\r\n    --smart-icon-fontsize: '\\f088';\r\n    /* Code of fontsize icon */\r\n    --smart-icon-contains: '\\f063';\r\n    /* Code of contains icon */\r\n    --smart-icon-starts_with: '\\f064';\r\n    /* Code of starts with icon */\r\n    --smart-icon-ends_with: '\\f065';\r\n    /* Code of ends with icon */\r\n    --smart-icon-does_not_contain: '\\f066';\r\n    /* Code of does not contain icon */\r\n    --smart-icon-equals: '\\f52c';\r\n    /* Code of equals icon */\r\n    --smart-icon-greater-than: '\\f531';\r\n    /* Code of greater than icon */\r\n    --smart-icon-greater-than-equal: '\\f532';\r\n    /* Code of greater than or equal icon */\r\n    --smart-icon-less-than: '\\f536';\r\n    /* Code of less than icon */\r\n    --smart-icon-less-than-equal: '\\f537';\r\n    /* Code of less than or equal icon */\r\n    --smart-icon-not-equal: '\\f53e';\r\n    /* Code of not equal icon */\r\n    --smart-icon-percentage: '\\f541';\r\n    /* Code of percentage icon */\r\n    --smart-icon-grip-vertical: '\\f58e';\r\n    /* Code of grip icon */\r\n    --smart-icon-between: '\\f06a';\r\n    /* Code of between icon */\r\n    --smart-icon-bold: '\\e820';\r\n    /* Code of bold icon */\r\n    --smart-icon-italic: '\\e822';\r\n    /* Code of italic icon */\r\n    --smart-icon-underline: '\\f0cd';\r\n    /* Code of underline icon */\r\n    --smart-icon-strike-through: '\\f0cc';\r\n    /* Code of strike-through icon */\r\n    --smart-icon-list-ordered: '\\f0cb';\r\n    /* Code of list numbered icon */\r\n    --smart-icon-list-unordered: '\\f0ca';\r\n    /* Code of list bullet icon */\r\n    --smart-icon-subscript: '\\f12c';\r\n    /* Code of subscript icon */\r\n    --smart-icon-superscript: '\\f12b';\r\n    /* Code of superscript icon */\r\n    --smart-icon-color-background: '\\e830';\r\n    /* Code of bucket icon */\r\n    --smart-icon-indent-right: '\\e824';\r\n    /* Code of indent icon */\r\n    --smart-icon-indent-left: '\\e825';\r\n    /* Code of outdent icon */\r\n    --smart-icon-image: '\\e827';\r\n    /* Code of image icon */\r\n    --smart-icon-case-lower: 'aa';\r\n    /* Code of lower case icon */\r\n    --smart-icon-case-upper: 'AA';\r\n    /* Code of upper case icon */\r\n    --smart-icon-print: '\\e82b';\r\n    /* Code of print icon */\r\n    --smart-icon-format-clear: 'T';\r\n    /* Code of clear format icon */\r\n    --smart-icon-source-code: '\\f121';\r\n    /* Code of source code icon */\r\n    --smart-icon-split-mode: '\\e83b';\r\n    /* Code of split mode icon */\r\n    --smart-icon-cut: '\\e83a';\r\n    /* Code of Cut icon */\r\n    --smart-icon-video: '\\f16a';\r\n    /* Code of YouTube video icon */\r\n    --smart-icon-video-camera: '\\e840';\r\n    /* Code of Bell  icon */\r\n    --smart-icon-bell: '\\f0f3';\r\n    /* Code of video icon */\r\n    --smart-icon-header: '\\f1dc';\r\n    /* Code of Table Header */\r\n    --smart-icon-row: '\\f0db';\r\n    /* Code of Table Row icon */\r\n    --smart-icon-row-before: '\\f2d0';\r\n    /* Code of Table Row icon */\r\n    --smart-icon-row-after: '\\f2d0';\r\n    /* Code of Table Row icon */\r\n    --smart-icon-row-delete: var(--smart-icon-cancel-circled);\r\n    /* Code of Table Row icon */\r\n    --smart-icon-column: '\\f0db';\r\n    /* Code of Table Column icon */\r\n    --smart-icon-column-left: '\\f2d0';\r\n    /* Code of Table Column left insert icon */\r\n    --smart-icon-column-right: '\\f2d0';\r\n    /* Code of Table Column right insert icon */\r\n    --smart-icon-column-delete: var(--smart-icon-cancel-circled);\r\n    /* Code of Table Column delete icon */\r\n    --smart-icon-vertical-align: '\\f06a \\e80c';\r\n    /* Code of Table Vertical Align icon */\r\n    --smart-icon-styles: '\\f1fc';\r\n    /* Code of Table Styles icon */\r\n    --smart-icon-comment: '\\F0E5';\r\n    /* Code of Comment icon */\r\n    --smart-icon-card: '\\E83E';\r\n    /* Code of Card icon */\r\n    --smart-icon-tasks: '\\F0AE';\r\n    /* Code of Tasks icon */\r\n    --smart-icon-phone: '\\E83D';\r\n    /* Code of Phone icon */\r\n    --smart-icon-kanban: '\\F181';\r\n    /* Code of Kanban icon */\r\n    --smart-icon-table-alt: '\\F0CE';\r\n    /* Code of Table icon */\r\n    /* Accordion */\r\n    --smart-accordion-animation-duration: 225ms;\r\n    /* smartAccordion animation duration */\r\n    --smart-accordion-default-width: var(--smart-box-width);\r\n    /* smartAccordion default width */\r\n    --smart-accordion-default-height: var(--smart-box-height);\r\n    /* smartAccordion default height */\r\n    --smart-accordion-expanded-content-height: 0px;\r\n    /* Determines expanded content's height */\r\n    --smart-accordion-expanded-content-local-height: 0px;\r\n    /* The height of an expanded item content part. Calculated dynamically for each item. Used in all modes except 'singleFitHeight'. */\r\n    --smart-accordion-item-header-height: var(--smart-bar-height);\r\n    /* Element's header height. Used in several calcilations related to items height. */\r\n    --smart-accordion-item-expanded-offset: 20px;\r\n    /* An offset below each expanded accordion item. */\r\n    /* Array */\r\n    --smart-array-default-width: var(--smart-box-width);\r\n    /* smartArray default width */\r\n    --smart-array-default-height: var(--smart-box-height);\r\n    /* smartArray default height */\r\n    --smart-array-element-gap: 3px;\r\n    /* smartArray element gap size */\r\n    /* Breadcrumb */\r\n    --smart-breadcrumb-default-width: 400px;\r\n    /* smartBreadcrumb default width */\r\n    --smart-breadcrumb-default-height: auto;\r\n    /* smartBreadcrumb default height */\r\n    --smart-breadcrumb-padding: 10px;\r\n    /* Padding of smart-breadcrumb and vertical offset between smartBreadcrumb items */\r\n    --smart-breadcrumb-drop-down-width: var(--smart-editor-drop-down-width);\r\n    /* Width of smartBreadcrumb dropdown in minimized mode */\r\n    --smart-breadcrumb-item-height: 40px;\r\n    /* Height of smartBreadcrumb items */\r\n    --smart-breadcrumb-horizontal-offset: 10px;\r\n    /* Horizontal offset between smartBreadcrumb items */\r\n    /* Button - Default */\r\n    --smart-button-text-transform: uppercase;\r\n    /* Controls the capitalization of button's text. Could be set as uppercase/lowercase/capitalize. */\r\n    --smart-button-padding: 8px 16px;\r\n    /* Sets button's paddings. */\r\n    --smart-button-large-padding: 10px 16px;\r\n    /* Sets large button's paddings. */\r\n    --smart-button-large-font-size: 18px;\r\n    /* Sets large button's font size. */\r\n    --smart-button-small-padding: 5px 10px;\r\n    /* Sets small button's paddings. */\r\n    --smart-button-small-font-size: 12px;\r\n    /* Sets small button's font size. */\r\n    --smart-button-very-small-padding: 3px 5px;\r\n    /* Sets very small button's paddings. */\r\n    --smart-button-very-small-font-size: 10px;\r\n    /* Sets very small button's font size. */\r\n    /* Button - Flat */\r\n    --smart-button-flat-color: var(--smart-background-color);\r\n    /* The color of the flat button. */\r\n    /* Button - Outlined */\r\n    --smart-button-outlined-color: var(--smart-background-color);\r\n    /* The color of the outlined button. */\r\n    --smart-button-outlined-border: var(--smart-border);\r\n    /* The border of the outlined button. */\r\n    /* Button Group */\r\n    --smart-button-group-default-width: auto;\r\n    --smart-button-group-default-height: auto;\r\n    /* Calendar */\r\n    --smart-calendar-header-height: calc(0.75 * var(--smart-bar-height));\r\n    /* Default height for smartCalendar's header section */\r\n    --smart-calendar-footer-height: calc(0.75 * var(--smart-bar-height));\r\n    /* Default height for smartCalendar's footer section */\r\n    --smart-calendar-title-height: calc(1.25 * var(--smart-bar-height));\r\n    /* Default height for calendar's title. */\r\n    --smart-calendar-cell-size: 30px;\r\n    /* Default size of calendar's cell. */\r\n    --smart-calendar-cell-spacing: 4px;\r\n    /* Defines calendar's cell spacing. */\r\n    --smart-calendar-default-width: calc(50px + var(--smart-calendar-cell-spacing) + 7 * (var(--smart-calendar-cell-spacing) + var(--smart-calendar-cell-size)));\r\n    /* smartCalendar default width */\r\n    --smart-calendar-default-height: calc(var(--smart-calendar-cell-spacing) + 7 * (var(--smart-calendar-cell-spacing) + var(--smart-calendar-cell-size)) + var(--smart-calendar-header-height));\r\n    /* smartCalendar default height */\r\n    --smart-calendar-title-text-transform: initial;\r\n    /* Controls the capitalization of the title text. */\r\n    --smart-calendar-week-title-text-transform: uppercase;\r\n    /* Controls the capitalization of the week title. */\r\n    --smart-calendar-header-text-transform: uppercase;\r\n    /* Controls the capitalization of the header text. */\r\n    --smart-calendar-footer-text-transform: uppercase;\r\n    /* Controls the capitalization of the footer text. */\r\n    --smart-calendar-cell-border-top-right-radius: 15px;\r\n    /* Defines cell's top-right border radius. */\r\n    --smart-calendar-cell-border-top-left-radius: 15px;\r\n    /* Defines cell's top-left border radius. */\r\n    --smart-calendar-cell-border-bottom-left-radius: 15px;\r\n    /* Defines cell's bottom-left border radius. */\r\n    --smart-calendar-cell-border-bottom-right-radius: 15px;\r\n    /* Defines cell's bottom-right border radius. */\r\n    --smart-calendar-title-padding: 10px;\r\n    /* Defines title's padding */\r\n    --smart-calendar-important-date-background: var(--smart-ui-state-hover);\r\n    /* Defines title's padding */\r\n    --smart-calendar-important-date-color: var(--smart-ui-state-color-hover);\r\n    /* Defines title's padding */\r\n    --smart-calendar-important-date-border-color: var(--smart-ui-state-border-hover);\r\n    /* Defines title's padding */\r\n    --smart-calendar-navigation-button-size: 30px;\r\n    /* Sets the size for the navigation buttons */\r\n    /* CardView */\r\n    --smart-card-view-default-width: 1200px;\r\n    /* Default width of CardView. */\r\n    --smart-card-view-default-height: 800px;\r\n    /* Default height of CardView. */\r\n    --smart-card-view-header-height: 30px;\r\n    /* Height of the CardView header */\r\n    --smart-card-view-cover-height: var(--smart-carousel-default-height);\r\n    /* Height of CardView cover (carousel). */\r\n    --smart-card-view-vertical-offset: 15px;\r\n    /* Vertical offset of CardView. */\r\n    --smart-card-view-column-min-width: 250px;\r\n    /* Min width of CardView visual columns. */\r\n    --smart-card-view-gap: 10px;\r\n    /* Gap between CardView cards. */\r\n    --smart-card-view-add-new-button-size: 60px;\r\n    /* Size of the 'Add new record' (+) button. */\r\n    /* Carousel */\r\n    --smart-carousel-default-width: 600px;\r\n    /* default width of the element */\r\n    --smart-carousel-default-height: 200px;\r\n    /* default height of the element */\r\n    --smart-carousel-3d-mode-slide-width: 400px;\r\n    /* default width of a slide in 3d mode */\r\n    --smart-carousel-3d-mode-slide-height: 400px;\r\n    /* default height of a slide in 3d mode */\r\n    --smart-carousel-multiple-mode-slide-width: 200px;\r\n    /* default width of a slide in multiple mode*/\r\n    /* Chart */\r\n    --smart-chart-default-width: 850px;\r\n    /* default width of the element */\r\n    --smart-chart-default-height: 500px;\r\n    /* default height of the element */\r\n    /* Check Box */\r\n    --smart-check-box-default-size: calc(1px + 1/2 * var(--smart-editor-height));\r\n    /* Default size for the check box used in smartCheckBox and smartListItem. */\r\n    /* ColorPanel*/\r\n    --smart-color-panel-default-width: auto;\r\n    /* smartColorPanel default width ; was 450px*/\r\n    --smart-color-panel-default-height: auto;\r\n    /* smartColorPanel default height ; was 370px */\r\n    --smart-color-panel-palette-size: 300px;\r\n    /* smartColorPanel palette size */\r\n    --smart-color-panel-grid-mode-item-size: 20px;\r\n    /* smartColorPanel item size */\r\n    /*was 40px*/\r\n    --smart-color-panel-grid-mode-column-count: 8;\r\n    /* smartColorPanel column count */\r\n    --smart-color-panel-grid-mode-columns-gap: 1px;\r\n    /* smartColorPanel column gap size */\r\n    --smart-color-panel-brightness: 0;\r\n    /* smartColorPanel brightness */\r\n    --smart-color-panel-default-mode-sections-gap: 8px;\r\n    /* smartColorPanel gap size in default mode */\r\n    --smart-color-panel-palette-width: var(--smart-color-panel-palette-size);\r\n    /* smartColorPanel palette width */\r\n    --smart-color-panel-palette-height: var(--smart-color-panel-palette-size);\r\n    /* smartColorPanel palette height */\r\n    --smart-color-panel-alpha-channel-color: white;\r\n    /* Used as a default color for the Alpha Scale */\r\n    /* ColorPicker*/\r\n    --smart-color-picker-default-width: var(--smart-editor-width);\r\n    /* smartColorPicker default width */\r\n    --smart-color-picker-default-height: var(--smart-editor-height);\r\n    /* smartColorPicker default height */\r\n    --smart-color-picker-drop-down-width: auto;\r\n    /* smartColorPicker default width */\r\n    --smart-color-picker-drop-down-height: auto;\r\n    /* smartColorPicker default height */\r\n    /* ComboBox */\r\n    --smart-combo-box-default-width: var(--smart-editor-width);\r\n    /* smartComboBox default width */\r\n    --smart-combo-box-default-height: var(--smart-editor-height);\r\n    /* smartComboBox default height */\r\n    --smart-combo-box-drop-down-width: auto;\r\n    /* smartComboBox default width */\r\n    --smart-combo-box-drop-down-height: auto;\r\n    /* smartComboBox default height */\r\n    /* Chip */\r\n    --smart-chip-default-height: var(--smart-editor-height);\r\n    /* Default chips height */\r\n    --smart-chip-avatar-background: var(--smart-secondary);\r\n    /* Default avatar background color */\r\n    /* Currency format panel */\r\n    --smart-currency-format-panel-currency-holder-width: 1fr;\r\n    --smart-currency-format-panel-apply-button-width: 125px;\r\n    --smart-currency-format-panel-header-holder-offset: 2%;\r\n    --smart-currency-format-panel-currency-holder-input-width: 1fr;\r\n    --smart-currency-format-panel-currency-holder-dropdown-width: 165px;\r\n    --smart-currency-format-panel-currency-holder-dropdown-button-width: 95%;\r\n    --smart-currency-format-panel-border-size: 1px;\r\n    --smart-currency-format-panel-border-color: #ccc;\r\n    --smart-currency-format-panel-border-radius: 4px;\r\n    --smart-currency-format-panel-currencies-margin-top: 15px;\r\n    --smart-currency-format-panel-currencies-max-height: 400px;\r\n    --smart-currency-format-panel-currencies-item-padding: 12px;\r\n    --smart-currency-format-panel-currency-holder-padding-left: 5px;\r\n    --smart-currency-format-panel-currency-holder-padding-top: 3px;\r\n    --smart-currency-format-panel-currency-holder-padding-bottom: 3px;\r\n    --smart-currency-format-panel-currency-input-width: 100%;\r\n    --smart-currency-format-panel-currencies-left-padding: 10px;\r\n    --smart-currency-format-panel-currencies-hover-background: #f1f1f1;\r\n    --smart-currency-format-panel-currencies-example-format-color: #777;\r\n    /* DataView - Common for CardView and Kanban */\r\n    --smart-data-view-padding: 10px;\r\n    /* Padding of the CardView and Kanban */\r\n    --smart-data-view-customize-panel-width: 320px;\r\n    /* Width of the CardView and Kanban customize panel (drop down). */\r\n    --smart-data-view-filter-panel-width: 550px;\r\n    /* Width of the CardView and Kanban filter panel (drop down). */\r\n    --smart-data-view-sort-panel-width: 450px;\r\n    /* Width of the CardView and Kanban sort panel (drop down). */\r\n    --smart-data-view-search-panel-width: 250px;\r\n    /* Width of the CardView and Kanban search panel (drop down). */\r\n    /* Date Format Panel */\r\n    --smart-date-format-panel-main-container-width: 960px;\r\n    /* Main container */\r\n    --smart-date-format-panel-main-container-padding: 15px;\r\n    --smart-date-format-panel-border-radius: 4px;\r\n    /* Default styles */\r\n    --smart-date-format-panel-border-size: 1px;\r\n    --smart-date-format-panel-border-color: #ccc;\r\n    --smart-date-format-panel-smart-inputs-container-width: 1fr;\r\n    /* Input and add format holder */\r\n    --smart-date-format-panel-apply-container-width: 150px;\r\n    --smart-date-format-panel-smart-input-buttons-column-gap: 2%;\r\n    --smart-date-format-panel-smart-inputs-holder-width: 94%;\r\n    /* Input and add format holder child */\r\n    --smart-date-format-panel-add-format-holder-width: 6%;\r\n    --smart-date-format-panel-smart-inputs-list-holder-offset: 2px;\r\n    --smart-date-format-panel-smart-input-format-width: 150px;\r\n    /* Smart inputs */\r\n    --smart-date-format-panel-smart-input-sign-width: 80px;\r\n    --smart-date-format-panel-smart-input-height: 25px;\r\n    --smart-date-format-panel-each-smart-input-offset: 4px;\r\n    --smart-date-format-panel-all-format-holders-width: 255px;\r\n    --smart-date-format-panel-add-format-holder-button: 120px;\r\n    --smart-date-format-panel-each-add-format-holder-width: 120px;\r\n    /* Add new format */\r\n    --smart-date-format-panel-add-new-format-dropdown-offset: 5px;\r\n    --smart-date-format-panel-date-time-format-list-offset-top: 15px;\r\n    /* Format list */\r\n    --smart-date-format-panel-date-time-format-list-max-height: 400px;\r\n    --smart-date-format-panel-each-date-time-format-offset: 12px;\r\n    /* Date Time Picker */\r\n    --smart-date-time-picker-default-width: var(--smart-editor-width);\r\n    /* smartDateTimePicker default width */\r\n    --smart-date-time-picker-default-height: var(--smart-editor-height);\r\n    /* smartDateTimePicker default height */\r\n    --smart-date-time-picker-header-opacity: 0.8;\r\n    /* Opacity of header elements */\r\n    --smart-date-time-picker-header-opacity-active: 1;\r\n    /* Opacity of header elements when selected */\r\n    --smart-date-time-picker-drop-down-width: var(--smart-editor-drop-down-height);\r\n    /* smartDropDownList drop down width */\r\n    --smart-date-time-picker-drop-down-height: auto;\r\n    /* smartDropDownList drop down height */\r\n    /*DockingLayout*/\r\n    --smart-docking-layout-default-width: 1000px;\r\n    /* smartDropDownList, smartComboBox default width */\r\n    --smart-docking-layout-default-height: 800px;\r\n    /* smartDropDownList, smartComboBox default height */\r\n    --smart-docking-layout-feedback-background-secondary-size: 7px;\r\n    /* The size of the arrows of the advanced snapping highlighters that show possible drop position of the dragged item. */\r\n    /*DropDownList*/\r\n    --smart-drop-down-list-default-width: var(--smart-editor-width);\r\n    /* smartDropDownList, smartComboBox default width */\r\n    --smart-drop-down-list-default-height: var(--smart-editor-height);\r\n    /* smartDropDownList, smartComboBox default height */\r\n    --smart-drop-down-list-drop-down-width: initial;\r\n    /* smartDropDownList drop down width */\r\n    --smart-drop-down-list-drop-down-height: auto;\r\n    /* smartDropDownList drop down height */\r\n    /* DropDownButton */\r\n    --smart-drop-down-button-default-width: auto;\r\n    /* smartDropDownButton default width */\r\n    --smart-drop-down-button-default-height: var(--smart-editor-height);\r\n    /* smartDropDownButton default height */\r\n    --smart-drop-down-button-drop-down-width: var(--smart-editor-drop-down-width);\r\n    /* smartDropDownButton drop down width */\r\n    --smart-drop-down-button-drop-down-height: var(--smart-editor-drop-down-height);\r\n    /* smartDropDownButton drop down height */\r\n    /* Editor */\r\n    --smart-editor-default-width: 100%;\r\n    /* smartEditor default width */\r\n    --smart-editor-default-height: 600px;\r\n    /* smartEditor default height */\r\n    --smart-editor-input-min-height: 100px;\r\n    /* smartEditor input min height */\r\n    --smart-editor-padding: 15px;\r\n    /* smartEditor padding */\r\n    --smart-editor-toolbar-item-margin: 5px;\r\n    /* smartEditor toolbar item margin */\r\n    --smart-editor-toolbar-button-width: 30px;\r\n    /* smartEditor toolbar button width */\r\n    --smart-editor-toolbar-delimiter-width: 5px;\r\n    /* smartEditor toolbar delimiter items width */\r\n    --smart-editor-toolbar-drop-down-width-large: 100px;\r\n    /* smartEditor wider drop down toolbar items like - format, fontname, etc. */\r\n    --smart-editor-toolbar-drop-down-width-small: 65px;\r\n    /* smartEditor all drop down toolbar items default width */\r\n    --smart-editor-window-header-height: var(--smart-scheduler-window-header-height);\r\n    /* smartEditor Dialog Window header height */\r\n    --smart-editor-window-footer-height: var(--smart-scheduler-window-footer-height);\r\n    /* smartEditor Dialog Window footer height */\r\n    --smart-editor-inline-toolbar-max-width: 80vw;\r\n    /* smartEditor Inline toolbar max width */\r\n    --smart-editor-table-column-width: initial;\r\n    /* smartEditor table column default width */\r\n    --smart-editor-table-cell-min-height: 20px;\r\n    /* smartEditor table cell defaut min height */\r\n    --smart-editor-table-cell-min-width: var(--smart-editor-table-cell-min-height);\r\n    /* smartEditor table cell default min width */\r\n    --smart-editor-char-counter-offset: 30px;\r\n    /* smartEditor char count offset from the edges of the element */\r\n    --smart-editor-toolbar-item-height: 30px;\r\n    /* smartEditor default toolbar item height */\r\n    --smart-editor-toolbar-item-border-radius: var(--smart-border-radius);\r\n    /* smartEditor toolbar item border radius */\r\n    --smart-editor-toolbar-height: calc(var(--smart-editor-toolbar-item-height) + 2 * var(--smart-editor-toolbar-item-margin));\r\n    /* smartEditor toolbar height */\r\n    --smart-editor-highlight: var(--smart-primary);\r\n    /* smartEditor Find and Replace highlight color */\r\n    --smart-editor-highlight-color: var(--smart-primary-color);\r\n    /* smartEditor highligh text color */\r\n    --smart-editor-search-bar-offset: 5px;\r\n    /* smartEditor search bar offset */\r\n    --smart-editor-search-bar-padding: 5px;\r\n    /* smartEditor search bar padding */\r\n    /* Filter Builder */\r\n    --smart-filter-builder-default-width: var(--smart-box-width);\r\n    /* Default width of the smartFilterBuilder*/\r\n    --smart-filter-builder-default-height: var(--smart-box-height);\r\n    /* Default height of the smartFilterBuilder*/\r\n    --smart-filter-builder-row-height: var(--smart-editor-height);\r\n    /* Default height of the smartFilterBuilder's rows*/\r\n    --smart-filter-builder-item-width: var(--smart-editor-width);\r\n    /* Default width of the smartFilterBuilder's button items*/\r\n    --smart-filter-builder-group-container-border: 4px;\r\n    --smart-filter-builder-item-margin: 20px;\r\n    --smart-filter-builder-group-condition-margin: 5px;\r\n    --smart-filter-builder-group-margin: 15px;\r\n    /* Filter Panel */\r\n    --smart-filter-panel-default-width: 300px;\r\n    /* Default width of the smartFilterPanel */\r\n    --smart-filter-panel-default-height: auto;\r\n    /* Default height of the smartFilterPanel */\r\n    --smart-filter-panel-padding: 10px;\r\n    /* padding of the smartFilterPanel */\r\n    --smart-filter-panel-border-top-right-radius: var(--smart-border-radius);\r\n    /* smartFilterPanel top-right border radius */\r\n    --smart-filter-panel-border-top-left-radius: var(--smart-border-radius);\r\n    /* smartFilterPanel top-left border radius */\r\n    --smart-filter-panel-border-bottom-left-radius: var(--smart-border-radius);\r\n    /* smartFilterPanel bottom-left border radius */\r\n    --smart-filter-panel-border-bottom-right-radius: var(--smart-border-radius);\r\n    /* smartFilterPanel bottom-right border radius */\r\n    --smart-filter-panel-border-width: var(--smart-border-width);\r\n    /* smartFilterPanel border width */\r\n    --smart-filter-panel-border: var(--smart-border);\r\n    /* smartFilterPanel border color */\r\n    --smart-filter-panel-background: var(--smart-background);\r\n    /* smartFilterPanel background color */\r\n    --smart-filter-panel-color: var(--smart-background-color);\r\n    /* smartFilterPanel text color */\r\n    --smart-filter-panel-vertical-offset: 10px;\r\n    /* Vertical offset between smartFilterPanel sub-elements */\r\n    --smart-filter-panel-main-element-height: 400px;\r\n    /* height of the smartTree inside the smartFilterPanel */\r\n    /* File Upload */\r\n    --smart-file-upload-default-width: var(--smart-editor-width);\r\n    /* Default width of the smartFileUpload*/\r\n    --smart-file-upload-browse-button-width: auto;\r\n    /* Default width of the browse button*/\r\n    --smart-file-upload-browse-button-height: auto;\r\n    /* Default height of the browse button*/\r\n    --smart-file-upload-footer-button-width: auto;\r\n    /* Default height of the smartFileUpload's footer buttons*/\r\n    --smart-file-upload-footer-button-height: auto;\r\n    /* Default height of the smartFileUpload's footer buttons*/\r\n    --smart-file-upload-text-content-uploading-start: \"Connecting ...\";\r\n    /* Default text content of the pseudo element shown when upload starts. */\r\n    --smart-file-upload-text-content-uploading: \"Uploading ...\";\r\n    /* Default text content of the pseudo element shown during the upload. */\r\n    --smart-file-upload-text-content-error: \"Upload error!\";\r\n    /* Default text content of the pseudo element shown on error. */\r\n    --smart-file-upload-text-content-pause: \"Upload paused!\";\r\n    /* Default text content of the pseudo element shown when upload is paused. */\r\n    --smart-file-upload-text-content-drop-zone: \"Drag files here\";\r\n    /* Default text content of the pseudo element shown where is the drop zone. */\r\n    --smart-file-upload-text-content-drop-zone-over: \"Drop here \\e824\";\r\n    /* Default text content of the pseudo element shown when dragged files are over the drop zone. */\r\n    --smart-file-upload-container-min-height: 60px;\r\n    /* Sets minimmum height of the drop zone and file zone containers. */\r\n    --smart-file-upload-total-files-min-height: 20px;\r\n    /* Sets min height of the container where total numbers of items is displayed. */\r\n    --smart-file-upload-drop-zone-height: 100%;\r\n    /* Sets min height of the container where total numbers of items is displayed. */\r\n    /* Gantt Chart */\r\n    --smart-gantt-chart-resource-splitter-bar-fit-size: calc(var(--smart-gantt-chart-resource-timeline-content-height) + var(--smart-gantt-chart-task-default-height));\r\n    /* The fit size of all Resource Splitter bar inside the Resource Panel of the element*/\r\n    --smart-gantt-chart-task-splitter-bar-fit-size: var(--smart-gantt-chart-task-timeline-content-height);\r\n    /* The fit size of all Splitter bar inside the element*/\r\n    --smart-gantt-chart-task-default-height: 30px;\r\n    /* The height of a Task inside the Timeline */\r\n    --smart-gantt-chart-header-height: var(--smart-gantt-chart-task-default-height);\r\n    /* The height of the header of the Task and Resource Panels */\r\n    --smart-gantt-chart-task-bar-fill-padding: 5px;\r\n    /* The padding of the Fill of the Task Bar */\r\n    --smart-gantt-chart-task-label-padding: 2px var(--smart-gantt-chart-task-bar-fill-padding);\r\n    /* */\r\n    --smart-gantt-chart-task-thumb-color: rgba(0, 0, 0, .55);\r\n    /* The color of the thumb */\r\n    --smart-gantt-chart-task-progress-color: rgba(0, 0, 0, .15);\r\n    /* #2d75f5 */\r\n    /* The default color of the progress fill of all Tasks inside the Timeline */\r\n    --smart-gantt-chart-project-color: #ffa558;\r\n    /* #38a238*/\r\n    /* The defaut color for all Project tasks */\r\n    --smart-gantt-chart-project-label-color: #333;\r\n    /* Determines the label color of the project tasks inside the Timeline. */\r\n    --smart-gantt-chart-project-label-color-selected: #000;\r\n    /* Determines the label color of the project tasks inside the Timeline when selected. */\r\n    --smart-gantt-chart-project-progress-color: var(--smart-gantt-chart-task-progress-color);\r\n    /* #008000 */\r\n    /* The default color of the progress fill for all Project tasks */\r\n    --smart-gantt-chart-task-color: rgb(43, 195, 190);\r\n    /* #6495ed */\r\n    /* The default color of a Task inside the Timeline */\r\n    --smart-gantt-chart-milestone-color: #800080;\r\n    /* The default color for all Milestones */\r\n    --smart-gantt-chart-timeline-task-background-color: transparent;\r\n    /* Determines the background color of the tasks(rows) inside the Timeline. */\r\n    --smart-gantt-chart-timeline-task-connection-feedback-color: #e6510a;\r\n    /* orange */\r\n    /* Determines the default color of the feedback that is shows when creating a connection between tasks inside the Timeline. */\r\n    --smart-gantt-chart-timeline-task-connection-feedback-width: 1px;\r\n    /* Determines the default width of the feedback that is shows when creating a connection between tasks inside the Timeline. */\r\n    --smart-gantt-chart-timeline-task-connection-feedback-style: dashed;\r\n    /* Determines the style of the feedback that is shows when creating a connection between tasks inside the Timeline. */\r\n    --smart-gantt-chart-timeline-task-connection-color: var(--smart-gantt-chart-timeline-task-connection-feedback-color);\r\n    /* Determines the color of the connections between Tasks inside the Timeline. */\r\n    --smart-gantt-chart-timeline-task-connection-color-hover: var(--smart-gantt-chart-timeline-task-connection-color);\r\n    /* Determines the color on hover of the connections between Tasks inside the Timeline. */\r\n    --smart-gantt-chart-timeline-task-connection-width: var(--smart-gantt-chart-timeline-task-connection-feedback-width);\r\n    /* Determines the width of the connections between the tasks inside the Timeline. */\r\n    --smart-gantt-chart-timeline-task-connection-style: solid;\r\n    /* Determines the style of the connections between the tasks inside the Timeline. */\r\n    --smart-gantt-chart-timeline-task-connection-arrow-type: solid;\r\n    /* Determines the border type of the arrow of the connections between Tasks inside the Timeline. */\r\n    --smart-gantt-chart-timeline-task-connection-arrow-width: 5px;\r\n    /* Determines the width of the arrow of the connections between Tasks inside the Timeline. */\r\n    --smart-gantt-chart-timeline-task-resize-indicator-width: 4px;\r\n    /* Determines the defualt width of the resize indicator of the Task bars inside the Timeline. */\r\n    --smart-gantt-chart-timeline-task-resize-indicator-color: #fff;\r\n    /* Determines the background-color of the resize indicators of the Task bars insinde the Timeline. */\r\n    --smart-gantt-chart-timeline-task-resize-indicator-border-color: #333;\r\n    /* Determines the border-color of the resize indicator of the Task bars inside the Timeline. */\r\n    --smart-gantt-chart-timeline-task-progress-thumb-size: 10px;\r\n    /* Determines the size of the thumb controlling the progress of a Task inside the Timeline. */\r\n    --smart-gantt-chart-timeline-cell-size: auto;\r\n    /* Determines the default width of the cells inside the Timeline. */\r\n    --smart-gantt-chart-timeline-cell-min-size: 70px;\r\n    /* Determines the default min-width of the cells inside the Timeline. */\r\n    --smart-gantt-chart-timeline-task-min-width: 5px;\r\n    /* Determines the default min-width of the Tasks insinde the Timeline. Not applicable to Milestone tasks. */\r\n    --smart-gantt-chart-timeline-weekend-color: #EFF5FD;\r\n    /* Determines the default background color of the 'weekend' cells insinde the Timeline. */\r\n    --smart-gantt-chart-timeline-nonworking-color: #F5F5F5;\r\n    /* Determines the default background-color of the nonworking days/hours inside the Timeline. */\r\n    --smart-gantt-chart-default-width: auto;\r\n    /* Determines the default width of the element. */\r\n    --smart-gantt-chart-default-height: 600px;\r\n    /* Determines the height of the element. */\r\n    --smart-gantt-chart-task-popup-window-default-width: 60vw;\r\n    /* Determines the width of the task editing popup windows of the element. */\r\n    --smart-gantt-chart-connection-popup-window-default-width: 300px;\r\n    /* Determines the width of the connection editing popup windows of the element. */\r\n    --smart-gantt-chart-confirm-popup-window-default-width: var(--smart-gantt-chart-connection-popup-default-width);\r\n    /* Determines the width of the confirm popup window of the element. */\r\n    --smart-gantt-chart-popup-window-header-height: 35px;\r\n    /* Determines the height of the header of the popup windows inside the element. */\r\n    --smart-gantt-chart-popup-window-footer-height: 50px;\r\n    /* Determines the height of the footer of the popup windows insinde the element. */\r\n    --smart-gantt-chart-header-placeholder: ' - ';\r\n    /* Placeholder for thea Header sections when there're no items */\r\n    --smart-gantt-chart-progress-label-padding: 0 10px 0 10px;\r\n    /* Task progress label padding */\r\n    --smart-gantt-chart-filter-row-height: 30px;\r\n    /* Sets a box shadow to the Task Timeline header */\r\n    --smart-gantt-chart-task-fill-border-radius: 0;\r\n    /* Sets the default border radius for the Timeline task bars */\r\n    --smart-gantt-chart-segment-link-color: var(--smart-gantt-chart-task-color);\r\n    /* Determines the color of the link between the task segments */\r\n    --smart-gantt-chart-segment-link-size: var(--smart-border-width);\r\n    /* Determines the height of the link between the task segments */\r\n    --smart-gantt-chart-date-marker-color: var(--smart-primary);\r\n    /* Determines the color of the date markers */\r\n    --smart-gantt-chart-date-marker-height: 25px;\r\n    /* Determines the background of the date markers */\r\n    --smart-gantt-chart-date-marker-width: var(--smart-border-width);\r\n    /* Determines the width of the date markers */\r\n    --smart-gantt-chart-date-marker-background: var(--smart-primary);\r\n    /* Determines the background of the date markers */\r\n    --smart-gantt-chart-date-marker-color: var(--smart-primary-color);\r\n    /* Determines the background of the date markers */\r\n    --smart-gantt-chart-date-marker-v-offset: 15%;\r\n    /* Determines the vertical position of the date markers */\r\n    --smart-gantt-chart-date-marker-h-offset: 10px;\r\n    /* Determines the horizontal offset of the date markers */\r\n    --smart-gantt-chart-indicator-icon: initial;\r\n    /* Determines the task indicator icon */\r\n    --smart-gantt-chart-deadline-icon: var(--smart-icon-attention-circled);\r\n    /* Determines the icon for the task deadline */\r\n    --smart-gantt-chart-deadline-color: var(--smart-error);\r\n    /* Determines the color for the task deadline icon */\r\n    --smart-gantt-chart-baseline-proportion: 2;\r\n    /* Determines the proportion of the baseline compared to the task height */\r\n    --smart-gantt-chart-baseline-background: rgba(166, 205, 87, .5);\r\n    /* Determines the background color of the task baseline */\r\n    --smart-gantt-chart-progress-label-width: 60px;\r\n    /* Determines the task progress label width */\r\n    --smart-gantt-chart-current-time-indicator-size: 1px;\r\n    /* Determines the current time indicator width */\r\n    --smart-gantt-chart-current-time-indicator-background: var(--smart-primary);\r\n    /* Determines the current time indicator background */\r\n    --smart-gantt-chart-current-time-indicator-arrow-size: 7px;\r\n    /* Determines the arrow size of the curernt time indicator */\r\n    --smart-gantt-chart-current-time-indicator-header-size: 2px;\r\n    /* Determines the current time indicator size inside the timeline header cell */\r\n    --smart-gantt-chart-shader-background: rgba(var(--smart-border-rgb), .5);\r\n    /* Determines the current time shader background color */\r\n\r\n    /* Gauge */\r\n    --smart-gauge-default-width: var(--smart-box-width);\r\n    /* smartGauge default width */\r\n    --smart-gauge-default-height: var(--smart-box-height);\r\n    /* smartgauge default height */\r\n    --smart-gauge-track-border: var(--smart-border);\r\n    /* Track's border color */\r\n    --smart-gauge-track-background: var(--smart-background);\r\n    /* Track's background color */\r\n    --smart-gauge-needle-background: var(--smart-primary);\r\n    /* Needle's background color */\r\n    --smart-gauge-label-fill-state: initial;\r\n    /* Fill color of labels */\r\n    --smart-gauge-label-stroke: initial;\r\n    /* Stroke color of labels */\r\n    /* Grid */\r\n    --smart-grid-default-width: 800px;\r\n    /* Used to set the default width. */\r\n    --smart-grid-default-height: 400px;\r\n    /* Used to set the default height. */\r\n    --smart-grid-footer-height: var(--smart-bar-height);\r\n    /* Sets footer height. */\r\n    --smart-grid-header-height: var(--smart-bar-height);\r\n    /* Sets header height. */\r\n    --smart-grid-group-header-height: var(--smart-bar-height);\r\n    /* Sets group header height. */\r\n    --smart-grid-row-height: 30px;\r\n    /* Sets rows height. */\r\n    --smart-grid-column-header-height: var(--smart-bar-height);\r\n    /* Sets columns height. */\r\n    --smart-grid-filter-footer-height: var(--smart-bar-height);\r\n    /* Sets filter row height. */\r\n    --smart-grid-aggregate-footer-height: var(--smart-bar-height);\r\n    /* Sets aggregates height. */\r\n    --smart-grid-header-background-freeze: var(--smart-surface);\r\n    /* Sets row/column header background, when row/column is frozen. */\r\n    --smart-grid-header-color-freeze: var(--smart-surface-color);\r\n    /* Sets row/column header text color, when row/column is frozen. */\r\n    --smart-grid-column-menu-width: 200px;\r\n    /* Sets column menu's width. */\r\n    --smart-grid-column-menu-height: auto;\r\n    /* Sets column menu's height. */\r\n    --smart-grid-column-buttons-width: 23px;\r\n    /* Sets column buttons width. */\r\n    --smart-grid-cell-color-freeze: var(--smart-surface-color);\r\n    /* Sets text color of cells, when row/column is frozen. */\r\n    --smart-grid-cell-background-freeze: var(--smart-surface);\r\n    /* Sets background color of cells, when row/column is frozen */\r\n    --smart-grid-cell-color-delete: #333;\r\n    /* Sets text color of cells, when row is deleted. */\r\n    --smart-grid-cell-background-delete: #FFDCDC;\r\n    /* Sets background color of cells, when row is deleted. */\r\n    --smart-grid-cell-color-update: #333;\r\n    /* Sets text color of cells, when cell is updated.. */\r\n    --smart-grid-cell-background-update: #D7F9C7;\r\n    /* Sets background color of cells, when cell is updated.. */\r\n    --smart-grid-cell-color-add: #333;\r\n    /* Sets text color of cells, when row is added.. */\r\n    --smart-grid-cell-background-add: #FED59B;\r\n    /* Sets background color of cells, when row is deleted.. */\r\n    --smart-grid-cell-color-unbound: var(--smart-surface-color);\r\n    /* Sets text color of cells, when row is unbound. */\r\n    --smart-grid-cell-background-unbound: var(--smart-surface);\r\n    /* Sets background color of cells, when row is unbound. */\r\n    --smart-grid-cell-color-sort: var(--smart-surface-color);\r\n    /* Sets text color of cells, when column is sorted. */\r\n    --smart-grid-cell-background-sort: var(--smart-surface);\r\n    /* Sets background color of cells, when column is sorted. */\r\n    --smart-grid-cell-color-filter: var(--smart-surface-color);\r\n    /* Sets text color of cells, when column is filtered. */\r\n    --smart-grid-cell-background-filter: var(--smart-surface);\r\n    /* Sets background color of cells, when column is filtered. */\r\n    --smart-grid-group-row-vertical-offset: 5;\r\n    /* Sets grouped rows vertical offset. */\r\n    --smart-grid-group-row-horizontal-offset: 1;\r\n    /* Sets grouped rows horizontal offset. */\r\n    --smart-grid-template-columns: none;\r\n    /* Sets Template columns. */\r\n    --smart-grid-column-gap: 0px;\r\n    /* Sets the element's grid-column-gap (related to CSS Grid) */\r\n    --smart-grid-row-gap: 0px;\r\n    /* Sets the element's grid-row-gap (related to CSS Grid) */\r\n    --smart-grid-freeze-splitter-size: 1px;\r\n    /* Sets frozen split bar size. */\r\n    --smart-grid-resize-line-size: 1px;\r\n    /* Sets resize line size. */\r\n    /* Grid Layout */\r\n    --smart-grid-layout-col-gap: 10px;\r\n    --smart-grid-layout-row-gap: 10px;\r\n    --smart-grid-layout-width: 100%;\r\n    --smart-grid-layout-rows: none;\r\n    /* Group Panel, Sort Panel, Column Panel, Multi Column Filter Panel, Formatting Panel */\r\n    --smart-grid-panel-default-width: 450px;\r\n    /* Default width of the smartGroupPanel/smartSortPanel/smartColumnPanel/smartMultiColumnFilterPanel */\r\n    --smart-grid-panel-default-height: auto;\r\n    /* Default height of the smartGroupPanel/smartSortPanel/smartColumnPanel/smartMultiColumnFilterPanel */\r\n    --smart-grid-panel-padding: 10px;\r\n    /* padding of the smartGroupPanel/smartSortPanel/smartColumnPanel/smartMultiColumnFilterPanel */\r\n    --smart-grid-panel-vertical-offset: 10px;\r\n    /* Vertical offset between smartGroupPanel/smartSortPanel/smartColumnPanel/smartMultiColumnFilterPanel items */\r\n    --smart-grid-panel-item-height: 30px;\r\n    /* height of smartGroupPanel/smartSortPanel/smartColumnPanel/smartMultiColumnFilterPanel items */\r\n    --smart-column-panel-drop-down-height: 350px;\r\n    /* height of drop-downs */\r\n    --smart-multi-column-filter-panel-template-columns: 15px 60px 2fr 3fr 3fr;\r\n    /* smartMultiColumnFilterPanel grid-template-columns */\r\n    --smart-formatting-panel-default-width: 600px;\r\n    /* Default width of the smartFormattingPanel */\r\n    --smart-formatting-panel-row-height: 30px;\r\n    /* Height of rows in smartFormattingPanel */\r\n    --smart-formatting-panel-add-new-button-size: 40px;\r\n    /* Size of \"Add new\" (+) button in smartFormattingPanel */\r\n    --smart-formatting-panel-popup-width: 300px;\r\n    /* Width of smartFormattingPanel's pop-up */\r\n    --smart-formatting-panel-color-box-height: 20px;\r\n    /* Height of color boxes in smartFormattingPanel's pop-up */\r\n    /* Kanban */\r\n    --smart-kanban-default-width: 1200px;\r\n    /* Default width of Kanban */\r\n    --smart-kanban-default-height: 500px;\r\n    /* Default height of Kanban */\r\n    --smart-kanban-header-size: 35px;\r\n    /* Header size of Kanban (applies to header and column headers) */\r\n    --smart-kanban-task-min-width: 150px;\r\n    /* Min width for Kanban tasks in columns with horizontal orientation */\r\n    --smart-kanban-task-min-height: 80px;\r\n    /* Kanban task min height */\r\n    --smart-kanban-text-max-height: 200px;\r\n    /* Kanban task text part max height */\r\n    --smart-kanban-user-icon-size: 30px;\r\n    /* Kanban user icon size */\r\n    --smart-kanban-user-list-width: 150px;\r\n    /* Kanban user list width */\r\n    --smart-kanban-user-list-max-height: 500px;\r\n    /* Kanban user list max height */\r\n    --smart-kanban-comments-list-width: 350px;\r\n    /* Kanban comments list width */\r\n    --smart-kanban-comments-list-height: auto;\r\n    /* Kanban comments list height */\r\n    --smart-kanban-new-comment-height: 50px;\r\n    /* Height of new comment section */\r\n    --smart-kanban-new-comment-height-expanded: 175px;\r\n    /* Expanded height of new comment section */\r\n    --smart-kanban-send-button-height: 30px;\r\n    /* Height of Send button in new comment section */\r\n    --smart-kanban-color-band-width: 3px;\r\n    /* Kanban color band width (i.e. left border of tasks) */\r\n    --smart-kanban-add-new-column-width: 1fr;\r\n    /* Kanban \"+ New status\" column width */\r\n    /* ListBox */\r\n    --smart-list-box-default-width: var(--smart-editor-width);\r\n    /* smartListBox default width */\r\n    --smart-list-box-default-height: var(--smart-editor-width);\r\n    /* smartListBox default height */\r\n    --smart-list-item-group-header-text-transform: uppercase;\r\n    /* smartListBox item group header text transform */\r\n    --smart-list-item-horizontal-offset: 3px;\r\n    /* Defines list item's horizontal offset. */\r\n    --smart-list-item-vertical-offset: 3px;\r\n    /* Defines list item's vertical offset. */\r\n    --smart-list-item-height: 36px;\r\n    /* smartListBox item height */\r\n    --smart-list-item-check-box-radius: 2px;\r\n    /* smartListBox checkbox radius */\r\n    --smart-list-item-label-padding: 0;\r\n    /* smartListBox item label padding */\r\n    --smart-list-item-label-border-radius: 0;\r\n    /* smartListBox item label border radius */\r\n    --smart-list-item-padding: 9px 12px;\r\n    /* smartListBox item padding */\r\n    /* Loader */\r\n    --smart-loader-size: var(--smart-editor-height);\r\n    /* smartListBox loader size(width=height) */\r\n    /* LED */\r\n    --smart-led-default-width: var(--smart-editor-height);\r\n    /* smartLed default width */\r\n    --smart-led-default-height: var(--smart-editor-height);\r\n    /* smartLed default height */\r\n    /* List Menu */\r\n    --smart-list-menu-default-width: var(--smart-box-width);\r\n    /* smartListMenu default width */\r\n    --smart-list-menu-default-height: var(--smart-box-height);\r\n    /* smartListMenu default height */\r\n    --smart-list-menu-filter-input-vertical-offset: 5px;\r\n    /* Defines vertical offset of the ListMenu's filter input. */\r\n    --smart-list-menu-filter-input-horizontal-offset: 5px;\r\n    /* Defines horizontal offset of the ListMenu's filter input. */\r\n    /*Masked Text Box*/\r\n    --smart-masked-text-box-default-width: var(--smart-editor-width);\r\n    /* smartMasked default width */\r\n    --smart-masked-text-box-default-height: var(--smart-editor-height);\r\n    /* smartMasked default height */\r\n    /* Menu */\r\n    --smart-menu-default-width: var(--smart-bar-width);\r\n    /* smartMenu default width */\r\n    --smart-menu-default-height: var(--smart-bar-height);\r\n    /* smartMenu default height */\r\n    --smart-menu-vertical-default-width: calc(var(--smart-bar-width) / 2);\r\n    /* vertical and context smartMenu default width */\r\n    --smart-menu-vertical-default-height: var(--smart-bar-width);\r\n    /* vertical and context smartMenu default height */\r\n    --smart-menu-scroll-button-size: calc(var(--smart-bar-height) / 1.5);\r\n    /* smartMenu scroll buttons size. Horizontal Menu scroll buttons width = Vertical Menu scroll buttons height. */\r\n    /* Multiline Text Box */\r\n    --smart-multiline-text-box-default-width: var(--smart-editor-width);\r\n    /* Default width of the element. */\r\n    --smart-multiline-text-box-default-height: calc(10 * var(--smart-editor-height));\r\n    /* Default height of the element. */\r\n    /* Multi Split Button*/\r\n    --smart-multi-split-button-default-width: var(--smart-editor-width);\r\n    /* Element's default width. */\r\n    --smart-multi-split-button-default-height: var(--smart-editor-height);\r\n    /* Element's default height. */\r\n    /* Number format Panel */\r\n    --smart-number-format-panel-selected-format-width: 1fr;\r\n    --smart-number-format-panel-apply-button-width: 125px;\r\n    --smart-number-format-panel-header-holder-offset: 10px;\r\n    --smart-number-format-panel-border-size: 1px;\r\n    --smart-number-format-panel-border-color: #ccc;\r\n    --smart-number-format-panel-border-radius: 4px;\r\n    --smart-number-format-panel-sample-container-vertical-offset: 15px;\r\n    --smart-number-format-panel-sample-container-horizontal-offset: 5px;\r\n    --smart-number-format-panel-formats-list-margin-top: 15px;\r\n    --smart-number-format-panel-formats-list-max-height: 400px;\r\n    --smart-number-format-panel-formats-item-padding: 12px;\r\n    --smart-number-format-panel-selected-format-padding-left: 5px;\r\n    --smart-number-format-panel-selected-format-padding-top: 3px;\r\n    --smart-number-format-panel-selected-format-padding-bottom: 3px;\r\n    --smart-number-format-panel-header-input-width: 100%;\r\n    --smart-number-format-panel-formats-item-left-padding: 10px;\r\n    --smart-number-format-panel-formats-item-hover-background: #f1f1f1;\r\n    --smart-number-format-panel-formats-item-example-format-color: #777;\r\n    /* Numeric Text Box */\r\n    --smart-numeric-text-box-default-width: var(--smart-editor-width);\r\n    /* smartNumericTextBox default width */\r\n    --smart-numeric-text-box-default-height: var(--smart-editor-height);\r\n    /* smartNumericTextBox default height */\r\n    --smart-numeric-text-box-default-radix-display-width: 12%;\r\n    /* smartNumericTextBox default radix display button width*/\r\n    --smart-numeric-text-box-default-unit-display-width: var(--smart-editor-addon-width);\r\n    /* smartNumericTextBox default unit display width*/\r\n    --smart-numeric-text-box-text-align: right;\r\n    /* smartNumericTextBox input text align */\r\n    /* Path */\r\n    --smart-path-default-width: var(--smart-editor-width);\r\n    /* smartPath default width */\r\n    --smart-path-default-height: var(--smart-editor-height);\r\n    /* smartPath default height */\r\n    --smart-path-drop-down-width: auto;\r\n    /* smartPath drop down width */\r\n    --smart-path-drop-down-height: auto;\r\n    /* smartPath drop down height */\r\n    --smart-path-button-gap: 5px;\r\n    /* smartPath button gap */\r\n    --smart-path-text-align: start;\r\n    /* smartPath text align */\r\n    /* Power Button */\r\n    --smart-power-button-default-width: var(--smart-editor-height);\r\n    /* smartPowerButton default width */\r\n    --smart-power-button-default-height: var(--smart-editor-height);\r\n    /* smartPowerButton default height */\r\n    /* Progress Bar */\r\n    --smart-progress-bar-default-width: var(--smart-editor-width);\r\n    /* smartProgressBar default width */\r\n    --smart-progress-bar-default-height: var(--smart-editor-height);\r\n    /* smartProgressBar default height */\r\n    --smart-circular-progress-bar-default-size: var(--smart-editor-width);\r\n    /* smartCircularProgressBar default size (width = height) */\r\n    --smart-circular-progress-bar-fill-size: 20%;\r\n    /* smartCircularProgressBar ui-state size. The width of the ui-state. The middle container's width is calculated defaultd on this value. */\r\n    /* Query Builder */\r\n    --smart-query-builder-default-width: auto;\r\n    /* Default width of QueryBuilder. */\r\n    --smart-query-builder-default-height: auto;\r\n    /* Default height of QueryBuilder. */\r\n    --smart-query-builder-min-width: 100px;\r\n    /* Minimum width of QueryBuilder. */\r\n    --smart-query-builder-content-padding: 5px;\r\n    /* Padding of QueryBuilder. */\r\n    --smart-query-builder-editor-width: 125px;\r\n    /* Width of editors in QueryBuilder. */\r\n    /* Radio Button */\r\n    --smart-radio-button-default-size: calc(1px + 1/2 * var(--smart-editor-height));\r\n    /* Default size for the radio button. */\r\n    /* Sortable */\r\n    --smart-sortable-handle-size: 25px;\r\n    /* smartSortable handle size */\r\n    /* Splitter */\r\n    --smart-splitter-default-width: var(--smart-box-width);\r\n    /* smartSplitter default width */\r\n    --smart-splitter-default-height: var(--smart-box-height);\r\n    /* smartSplitter default height */\r\n    --smart-splitter-bar-size: 10px;\r\n    /* The width of the scrollbar when vertical and the height of the scrollbar when horizontal*/\r\n    --smart-splitter-bar-fit-size: 100%;\r\n    /* The size of the splitter according to the orientation of the Splitter. By 'default' a SplitterBar fits the size of the Splitter. */\r\n    --smart-splitter-item-padding: 0;\r\n    /* Splitter item padding */\r\n    --smart-splitter-item-content-padding: 0;\r\n    /* Splitter item content padding */\r\n    --smart-splitter-item-size: auto;\r\n    /* The default size of the Splitter Items */\r\n    /* Switch Button */\r\n    --smart-switch-button-default-width: calc(var(--smart-editor-height) + 10px);\r\n    /* Default width of the SwitchButton. */\r\n    --smart-switch-button-default-height: var(--smart-editor-height);\r\n    /* smartSwitchButton default height */\r\n    --smart-switch-button-thumb-size: calc(var(--smart-switch-button-default-height) - 8px);\r\n    /* smartSwitchButton thumb size */\r\n    /* Slider */\r\n    --smart-slider-default-width: var(--smart-editor-width);\r\n    /* smartSlider default width */\r\n    --smart-slider-default-height: 35px;\r\n    /* smartSlider default height*/\r\n    --smart-slider-track-size: 1px;\r\n    /* smartSlider track size. Horizontal track height = Vertical track width */\r\n    --smart-slider-thumb-width: 20px;\r\n    /* smartSlider thumb width*/\r\n    --smart-slider-thumb-height: 20px;\r\n    /* smartSlider thumb height*/\r\n    --smart-slider-tooltip-width: 60px;\r\n    /* smartSlider tooltip width */\r\n    --smart-slider-tooltip-height: 30px;\r\n    /* smartSlider tooltip height*/\r\n    --smart-slider-spin-button-width: 30px;\r\n    /* smartSlider spin buttons width*/\r\n    --smart-slider-spin-button-height: 30px;\r\n    /* smartSlider spin buttons height*/\r\n    --smart-slider-tick-size: 10px;\r\n    /* smartSlider tick size. Horizontal Slider tick height = Vertical Slider tick width.*/\r\n    --smart-slider-minor-tick-size: 5px;\r\n    /* smartSlider minor tick size. Horizontal Slider minor tick height = Vertical Slider minor tick width.*/\r\n    --smart-slider-thumb-border-top-right-radius: 15px;\r\n    /* Top-right border radius of smartSlider thumb */\r\n    --smart-slider-thumb-border-top-left-radius: 15px;\r\n    /* Top-left border radius of smartSlider thumb */\r\n    --smart-slider-thumb-border-bottom-left-radius: 15px;\r\n    /* Bottom-left border radius of smartSlider thumb */\r\n    --smart-slider-thumb-border-bottom-right-radius: 15px;\r\n    /* Bottom-right border radius of smartSlider thumb */\r\n    /* ScrollBar */\r\n    --smart-scroll-button-size: 16px;\r\n    /* smartScrollBar buttons size. Horizontal ScrollBar button width = Vertical ScrollBar button height. ScrollBar track is calculated defaultd on this value. */\r\n    --smart-scroll-bar-size: 18px;\r\n    /* Default scrollbar size */\r\n    --smart-scroll-bar-default-width: var(--smart-editor-width);\r\n    /* ScrollBar's default width. */\r\n    --smart-scroll-bar-default-height: var(--smart-scroll-bar-size);\r\n    /* ScrollBar's default height. */\r\n    --smart-scroll-bar-background: #F1F1F1;\r\n    /* Default ScrollBar's background color. */\r\n    --smart-scroll-bar-track-background: var(--smart-scroll-bar-background);\r\n    --smart-scroll-bar-border: #F1F1F1;\r\n    /* The border color of the ScrollBar */\r\n    --smart-scroll-bar-thumb-border-top-right-radius: 0px;\r\n    /* Default ScrollBar's top-right border radius. */\r\n    --smart-scroll-bar-thumb-border-top-left-radius: 0px;\r\n    /* Default ScrollBar's top-left border radius. */\r\n    --smart-scroll-bar-thumb-border-bottom-left-radius: 0px;\r\n    /* Default ScrollBar's bottom-left border radius. */\r\n    --smart-scroll-bar-thumb-border-bottom-right-radius: 0px;\r\n    /* Default ScrollBar's bottom-right border radius. */\r\n    --smart-scroll-bar-thumb-background: #C1C1C1;\r\n    /* The color of the ScrollBar's thumb. */\r\n    --smart-scroll-bar-thumb-border: transparent;\r\n    /* The color of the ScrollBar's thumb border. */\r\n    --smart-scroll-bar-thumb-size: 100%;\r\n    /* The size of the ScrollBar's thumb. */\r\n    --smart-scroll-bar-thumb-padding: 1px;\r\n    /* The padding of the ScrollBar's thumb. */\r\n    --smart-scroll-bar-thumb-background-hover: #A8A8A8;\r\n    /* The background color of the ScrollBar's thumb in hover state. */\r\n    --smart-scroll-bar-thumb-border-hover: transparent;\r\n    /* The border color of the ScrollBar's thumb in hover state. */\r\n    --smart-scroll-bar-thumb-background-active: #787878;\r\n    /* The background color of the ScrollBar's thumb in active state. */\r\n    --smart-scroll-bar-thumb-border-active: transparent;\r\n    /* The border color of the ScrollBar's thumb in active state. */\r\n    --smart-scroll-bar-button-background: #F1F1F1;\r\n    /* The background color of ScrollBar's navigation buttons. */\r\n    --smart-scroll-bar-button-border: #F1F1F1;\r\n    /* The border color of ScrollBar's navigation buttons. */\r\n    --smart-scroll-bar-button-color: #505050;\r\n    /* The color of ScrollBar's navigation buttons. */\r\n    --smart-scroll-bar-button-background-hover: #D2D2D2;\r\n    /* The background color of the hovered ScrollBar's buttons. */\r\n    --smart-scroll-bar-button-border-hover: #F1F1F1;\r\n    /* The border color of the hovered ScrollBar's buttons. */\r\n    --smart-scroll-bar-button-color-hover: #505050;\r\n    /* The color of the hovered ScrollBar's buttons. */\r\n    --smart-scroll-bar-button-background-active: #787878;\r\n    /* The background color of the ScrollBar's buttons in active state. */\r\n    --smart-scroll-bar-button-border-active: #F1F1F1;\r\n    /* The border color of the ScrollBar's buttons in active state. */\r\n    --smart-scroll-bar-button-color-active: #fff;\r\n    /* The color of the ScrollBar's buttons in active state. */\r\n    /* Table and PivotTable */\r\n    --smart-table-default-width: 100%;\r\n    /* smartTable default width */\r\n    --smart-table-default-height: auto;\r\n    /* smartTable default height */\r\n    --smart-table-header-footer-height: 56px;\r\n    /* smartTable height of header and footer */\r\n    --smart-table-column-header-height: var(--smart-table-header-footer-height);\r\n    /* smartTable height of column header */\r\n    --smart-table-row-height: 48px;\r\n    /* smartTable height of rows */\r\n    --smart-table-cell-padding: 12px;\r\n    /* smartTable cell padding */\r\n    --smart-table-row-detail-height: var(--smart-table-row-height);\r\n    /* smartTable row detail height */\r\n    --smart-table-indent: 30px;\r\n    /* smartTable hierarchical cell indent */\r\n    --smart-table-arrow-size: 16px;\r\n    /* smartTable arrow size */\r\n    --smart-table-arrow-margin: 5px;\r\n    /* smartTable arrow margin */\r\n    --smart-table-group-name-display: unset;\r\n    /* smartTable group header name display */\r\n    --smart-table-group-count-display: unset;\r\n    /* smartTable group header leaf count display */\r\n    --smart-pivot-table-cell-width: 200px;\r\n    /* smartPivotTable cell width */\r\n    --smart-pivot-table-secondary-group-width: calc(1.25 * var(--smart-pivot-table-cell-width));\r\n    /* smartPivotTable row group width */\r\n    --smart-pivot-panel-width: 300px;\r\n    /* smartPivotTable designer (smartPivotPanel) width */\r\n    --smart-pivot-panel-default-height: 800px;\r\n    /* Standalone smartPivotPanel default height */\r\n    --smart-pivot-panel-tab-item-height: 150px;\r\n    /* smartPivotTable designer (smartPivotPanel) tab item height */\r\n    --smart-pivot-panel-padding: 10px;\r\n    /* smartPivotTable designer (smartPivotPanel) padding */\r\n    /* Tank */\r\n    --smart-tank-default-width: var(--smart-editor-width);\r\n    /* smartTank default width */\r\n    --smart-tank-default-height: calc(10 * var(--smart-editor-height));\r\n    /* smartTank default height*/\r\n    --smart-tank-scale-size: 105px;\r\n    /* smartTank scale size*/\r\n    --smart-tank-thumb-width: 25px;\r\n    /* smartTank thumb width*/\r\n    --smart-tank-thumb-height: var(--smart-tank-thumb-width);\r\n    /* smartTank thumb height*/\r\n    --smart-tank-tooltip-width: 80px;\r\n    /* smartTank tooltip width*/\r\n    --smart-tank-tooltip-height: 30px;\r\n    /* smartTank thumb height*/\r\n    --smart-tank-tick-size: 10px;\r\n    /* smartTank tick size. Horizontal Tank tick height = Vertical Tank tick width. */\r\n    --smart-tank-minor-tick-size: 5px;\r\n    /* smartTank minor tick size. */\r\n    --smart-tank-minimum-track-size: 6px;\r\n    /* smartTank horizontal track min-height, vertical track min-width */\r\n    /* Tabs */\r\n    --smart-tabs-header-button-size: 20px;\r\n    /* smartTabs header buttons size. Horizontal Tabs header buttons width = Vertical Tab header buttons height. */\r\n    --smart-tabs-animation-duration: 0.5s;\r\n    /* smartTabs animation duration */\r\n    --smart-tabs-default-width: var(--smart-box-width);\r\n    /* smartTabs default width */\r\n    --smart-tabs-default-height: var(--smart-box-height);\r\n    /* smartTabs default height */\r\n    --smart-tabs-header-padding: 0px;\r\n    /* Defines Tabs header padding. */\r\n    --smart-tabs-header-offset: 0px;\r\n    /* Defines Tabs header offset. */\r\n    --smart-tab-item-padding: 12px 16px;\r\n    /* Defines vertical and horizontal padding of tab items. */\r\n    --smart-tab-item-offset: 5px;\r\n    /* Default tab item offset. */\r\n    --smart-tab-item-initial-offset: 5px;\r\n    /* Initial tab item offset. */\r\n    --smart-tab-item-text-transform: uppercase;\r\n    /* Tab item text capitalization. */\r\n    /* Time Picker */\r\n    --smart-time-picker-default-width: var(--smart-editor-width);\r\n    /* smartTimePicker default width */\r\n    --smart-time-picker-default-height: calc(12 * var(--smart-editor-height));\r\n    /* smartTimePicker default height */\r\n    /* Tooltip */\r\n    --smart-tooltip-arrow-width: 6px;\r\n    /* Default smartTooltip arrow width */\r\n    --smart-tooltip-arrow-color: var(--smart-secondary);\r\n    /* smartTooltip arrow color */\r\n    --smart-tooltip-arrow-translate: 0;\r\n    /* smartTooltip arrow translation (transformation) */\r\n    --smart-tooltip-padding: 4px 8px;\r\n    /* smartTooltip padding */\r\n    --smart-tooltip-content-shadow: none;\r\n    /* smartTooltip content box-shadow */\r\n    /* Toast */\r\n    --smart-toast-item-icon: '';\r\n    /* Code of toast item icon */\r\n    --smart-toast-container-default-width: var(--smart-bar-width);\r\n    /* Default width of the smartToast's containers, positioned top-left, top-right, bottom-left, bottom-right */\r\n    --smart-toast-header-height: 20px;\r\n    /* smartToast header height */\r\n    --smart-toast-info-background: var(--smart-info);\r\n    /* Background color for type info */\r\n    --smart-toast-info-color: var(--smart-info-color);\r\n    /* Text color for type info */\r\n    --smart-toast-warning-background: var(--smart-warning);\r\n    /* Background color for type warning */\r\n    --smart-toast-warning-color: var(--smart-warning-color);\r\n    /* Text color for type warning */\r\n    --smart-toast-error-background: var(--smart-error);\r\n    /* Background color for type error */\r\n    --smart-toast-error-color: var(--smart-error-color);\r\n    /* Text color for type error */\r\n    --smart-toast-success-background: var(--smart-success);\r\n    /* Background color for type success */\r\n    --smart-toast-success-color: var(--smart-success-color);\r\n    /* Text color for type success */\r\n    /* Tree */\r\n    --smart-tree-default-width: var(--smart-box-width);\r\n    /* smartTree default width */\r\n    --smart-tree-default-height: var(--smart-box-height);\r\n    /* smartTree default height */\r\n    --smart-tree-scroll-button-size: 20px;\r\n    /* smartTree scroll buttons size */\r\n    --smart-tree-lines-style: dashed;\r\n    /* Default style of the connecting tree lines. */\r\n    --smart-tree-indent: 16px;\r\n    /* Defines the indent(hierarchy offset) size of the tree items. */\r\n    --smart-tree-lines-color: var(--smart-border);\r\n    /* Defines the color of the connecting lines. */\r\n    --smart-tree-lines-width: 1px;\r\n    /* Defines the width of the connecting lines. */\r\n    --smart-tree-item-label-height: 36px;\r\n    /* Defines the height of tree item labels. */\r\n    --smart-tree-item-padding: 9px 12px;\r\n    /* Defines the padding of the tree items. */\r\n    --smart-tree-item-vertical-offset: 3px;\r\n    /* Defines the vertical offset of the tree items. */\r\n    --smart-tree-item-horizontal-offset: 3px;\r\n    /* Defines the horizontal offset of the tree items. */\r\n    /* Text Box */\r\n    --smart-text-box-default-width: var(--smart-editor-width);\r\n    /* Text Box default width. */\r\n    --smart-text-box-default-height: var(--smart-editor-height);\r\n    /* Text Box default height. */\r\n    /* Validation panel */\r\n    --smart-validation-panel-description-width: 20%;\r\n    --smart-validation-panel-content-width: 80%;\r\n    /* Validation panel - appearance */\r\n    --smart-validation-panel-appearance-vertical-offset: 10px;\r\n    --smart-validation-panel-appearance-reset-button-left-offset: 5px;\r\n    --smart-validation-panel-appearance-textbox-vertical-offset: 5px;\r\n    --smart-validation-panel-appearance-reset-button-color: var(--smart-primary);\r\n    /* Validation panel - Criteria container */\r\n    --smart-validation-panel-criteria-row-margin-top: 10px;\r\n    --smart-validation-panel-criteria-container-vertical-offset: 10px;\r\n    --smart-validation-panel-criteria-container-input-width: 180px;\r\n    --smart-validation-panel-criteria-container-input-horizontal-offset: 2px;\r\n    --smart-validation-panel-criteria-container-textbox-width: 80px;\r\n    --smart-validation-panel-criteria-container-textbox-horizontal-offset: 2px;\r\n    --smart-validation-panel-criteria-container-text-between-inputs-offset: 5px;\r\n    /* Validation panel - Invalid data */\r\n    --smart-validation-panel-invalid-data-vertical-offset: 10px;\r\n    /* Validation panel - Footer */\r\n    --smart-validation-panel-footer-button-color: #188038;\r\n    --smart-validation-panel-footer-button-background: white;\r\n    --smart-validation-panel-footer-vertical-offset: 20px;\r\n    --smart-validation-panel-footer-button-horizontal-offset: 5px;\r\n    --smart-validation-panel-footer-remove-validation-button-color: var(--smart-validation-panel-footer-button-color);\r\n    --smart-validation-panel-footer-cancel-button-color: var(--smart-validation-panel-footer-button-color);\r\n    --smart-validation-panel-footer-save-button-color: var(--smart-validation-panel-footer-button-background);\r\n    --smart-validation-panel-footer-save-button-background: var(--smart-validation-panel-footer-button-color);\r\n    /*Password Text Box*/\r\n    --smart-password-text-box-default-width: var(--smart-editor-width);\r\n    /* smartPasswordTextBox default width */\r\n    --smart-password-text-box-default-height: var(--smart-editor-height);\r\n    /* smartPasswordTextBox default height */\r\n    /* Pager */\r\n    --smart-pager-default-width: var(--smart-bar-width);\r\n    /* default pager width */\r\n    --smart-pager-default-height: var(--smart-bar-height);\r\n    /* default pager height */\r\n    --smart-pager-button-width: 'auto';\r\n    /* default pager button width */\r\n    --smart-pager-button-height: 32px;\r\n    /* default pager button height */\r\n    --smart-pager-page-size-selector-width: 60px;\r\n    /* Default page size selector width. */\r\n    --smart-pager-page-index-selector-width: 32px;\r\n    /* default pager item width */\r\n    --smart-pager-page-index-selector-height: 32px;\r\n    /* default pager item height */\r\n    --smart-pager-page-index-ellipsis-selector-width: 32px;\r\n    /* default pager ellipsis width */\r\n    --smart-pager-page-index-ellipsis-selector-height: 32px;\r\n    /* default pager ellipsis width */\r\n    --smart-pager-page-index-selector-horizontal-offset: 8px;\r\n    /* default pager ellipsis width */\r\n    --smart-pager-padding: 2px;\r\n    /* Default padding. */\r\n    --smart-pager-input-width: 50px;\r\n    /* Default width of the pager input. */\r\n    /*ScrollViewer*/\r\n    --smart-scroll-viewer-min-width: none;\r\n    --smart-scroll-viewer-max-width: none;\r\n    --smart-scroll-viewer-min-height: none;\r\n    --smart-scroll-viewer-max-height: none;\r\n    /*Scheduler*/\r\n    --smart-scheduler-default-height: auto;\r\n    /* Sets the default height of the smartScheduler */\r\n    --smart-scheduler-default-width: auto;\r\n    /* Sets the default width of the smartScheduler */\r\n    --smart-scheduler-item-size: auto;\r\n    /* Sets the default size of the view selection items insinde the Timeline Header */\r\n    --smart-scheduler-timeline-cell-width: auto;\r\n    /* Sets the default width of the cells inside the Timeline  */\r\n    --smart-scheduler-timeline-cell-height: 50px;\r\n    /* Sets the default height of the cells inside the Timeline  */\r\n    --smart-scheduler-timeline-cell-min-width: 70px;\r\n    /* Sets the default min-width of the cells inside the Timeline */\r\n    --smart-scheduler-timeline-cell-min-height: 35px;\r\n    /* Sets the min-height of the cells inside the Timeline */\r\n    --smart-scheduler-header-height: 50px;\r\n    /* Sets the height of the header */\r\n    --smart-scheduler-header-today-button-size: 70px;\r\n    /* Scheduler header Today Button width */\r\n    --smart-scheduler-header-date-button-max-size: auto;\r\n    /* Sets the size of the Header Date Selection Button*/\r\n    --smart-scheduler-header-navigation-button-size: 30px;\r\n    /* Sets the size of the header buttons */\r\n    --smart-scheduler-footer-height: var(--smart-scheduler-header-height);\r\n    /* The height of the footer */\r\n    --smart-scheduler-header-box-shadow: initial;\r\n    /* Sets a Box shadow to the Timeline header */\r\n    --smart-scheduler-header-padding: 10px;\r\n    /* Sets a the padding for the header/footer */\r\n    --smart-scheduler-timeline-header-cell-padding: 5px;\r\n    /* Sets a the padding for the header/footer cells */\r\n    --smart-scheduler-header-menu-button-size: auto;\r\n    /* Sets the size for the Header menu button */\r\n    --smart-scheduler-timeline-weekend-color: var(--smart-background);\r\n    /* Sets the background color for the weekend cells */\r\n    --smart-scheduler-timeline-nonworking-color: var(--smart-gantt-chart-timeline-nonworking-color);\r\n    /* Sets the background color for nonworking days/hours cells */\r\n    --smart-scheduler-timeline-all-day-label-font-weight: 600;\r\n    /* Sets a the font-weight of the All day label */\r\n    --smart-scheduler-timeline-header-horizontal-cells-size: 40px;\r\n    /* Sets a the horizontal header cells size */\r\n    --smart-scheduler-timeline-header-horizontal-label-padding: initial;\r\n    /* Sets a the horizontal header cells label padding */\r\n    --smart-scheduler-timeline-header-horizontal-details-size: var(--smart-scheduler-timeline-header-horizontal-cells-size);\r\n    /* Sets the size of the Horizontal Details Header */\r\n    --smart-scheduler-timeline-header-horizontal-group-size: var(--smart-scheduler-timeline-header-horizontal-cells-size);\r\n    /* Sets the size of the Horizontal Group Header */\r\n    --smart-scheduler-timeline-header-vertical-cells-size: 100px;\r\n    /* Sets the vertical header cell size */\r\n    --smart-scheduler-timeline-header-vertical-label-padding: initial;\r\n    /* Sets the vertical header cells padding */\r\n    --smart-scheduler-timeline-header-vertical-details-size: var(--smart-scheduler-timeline-header-vertical-cells-size);\r\n    /* Sets the size of the Vertical Details Header */\r\n    --smart-scheduler-timeline-header-vertical-group-size: var(--smart-scheduler-timeline-header-vertical-cells-size);\r\n    /* Sets the size of the Vertical Group Header  */\r\n    --smart-scheduler-timeline-header-all-day-cells-size: 75px;\r\n    /* Sets the All Day View height */\r\n    --smart-scheduler-timeline-group-separator-background: var(--smart-outline);\r\n    /* Sets the color for the group separator */\r\n    --smart-scheduler-timeline-group-separator-size: var(--smart-border-width);\r\n    /* Sets the group cell separator size */\r\n    --smart-scheduler-timeline-group-white-space: nowrap;\r\n    /* Sets the white-space property for the Header Group cells */\r\n    --smart-scheduler-timeline-group-header-offset: calc(-50% - var(--smart-scheduler-timeline-header-cell-padding));\r\n    /* Sets the label offset for the header cells when groupByDate is enabled */\r\n    --smart-scheduler-current-time-indicator-background: var(--smart-primary);\r\n    /* Current Time Indicator background-color*/\r\n    --smart-scheduler-current-time-indicator-size: 1px;\r\n    /* Current Time Indicator size(width/height depending on the view orientation) */\r\n    --smart-scheduler-current-time-indicator-header-size: 2px;\r\n    /* Current Time Indicator size(width/height) inside the Headers */\r\n    --smart-scheduler-current-time-indicator-arrow-size: 7px;\r\n    /* Current Time Indicator arrow size */\r\n    --smart-scheduler-shader-background: rgba(var(--smart-border-rgb), .5);\r\n    /* Shade Until Current Time background */\r\n    --smart-scheduler-view-background: transparent;\r\n    --smart-scheduler-view-line-size: var(--smart-border-width);\r\n    /* Timeline lines size */\r\n    --smart-scheduler-view-horizontal-line-color: var(--smart-border);\r\n    /* Horizontal timeline line color */\r\n    --smart-scheduler-view-vertical-line-color: var(--smart-border);\r\n    /* Vertical timeline line color */\r\n    --smart-scheduler-day-week-view-vertical-line-size: var(--smart-scheduler-view-line-size);\r\n    /* Vertical line size in 'day' and 'week' views */\r\n    --smart-scheduler-day-week-view-vertical-line-color: var(--smart-border);\r\n    /* Vertical timeline color in 'day' and 'week' views */\r\n    --smart-scheduler-day-week-view-hour-size: var(--smart-scheduler-view-line-size);\r\n    /* Horizontal line size for 'day', 'week'. Only the hour lines (excluding minutes) */\r\n    --smart-scheduler-day-week-view-hour-color: var(--smart-border);\r\n    /* Horizontal line color for 'day', 'week' views. Only the hour lines ( excluding the minutes) */\r\n    --smart-scheduler-time-ruler-tick-size: 10px;\r\n    /* Time ruler tick size. Applicable only to day/week views */\r\n    --smart-scheduler-event-background-rgb: 52, 121, 186;\r\n    /* Event background RGB */\r\n    --smart-scheduler-event-background: rgba(var(--smart-scheduler-event-background-rgb), 1);\r\n    /* Event background color */\r\n    --smart-scheduler-legend-item-background: var(--smart-scheduler-event-background);\r\n    /* The default background color for the legen items */\r\n    --smart-scheduler-event-color: var(--smart-primary-color);\r\n    /* Event color */\r\n    --smart-scheduler-event-focus: rgba(var(--smart-scheduler-event-background-rgb), .9);\r\n    /* Event focus background color */\r\n    --smart-scheduler-event-color-focus: var(--smart-scheduler-event-color);\r\n    /* Event focus color */\r\n    --smart-scheduler-event-hover: rgba(var(--smart-scheduler-event-background-rgb), .8);\r\n    /* Event hover background color */\r\n    --smart-scheduler-event-color-hover: var(--smart-scheduler-event-color);\r\n    /* Event hover color */\r\n    --smart-scheduler-event-padding-agenda: 5px;\r\n    /* Event padding in 'agenda' view only */\r\n    --smart-scheduler-event-padding-basic: 2px;\r\n    /* Event padding in all basic views */\r\n    --smart-scheduler-event-padding-timeline: 2px;\r\n    /* Event padding in all timeline views */\r\n    --smart-scheduler-event-padding-all-day: 2px;\r\n    /* Event padding for events inside AllDay container */\r\n    --smart-scheduler-event-content-padding: 5px;\r\n    /* Event content padding */\r\n    --smart-scheduler-event-label-font-size: var(--smart-font-size);\r\n    /* Event label font size */\r\n    --smart-scheduler-event-time-font-size: calc(var(--smart-font-size) - 3px);\r\n    /* Event time label font size */\r\n    --smart-scheduler-event-time-font-size-agenda: var(--smart-font-size);\r\n    /* Event time font size for 'agenda' view */\r\n    --smart-scheduler-event-time-font-weight-agenda: 600;\r\n    /* Event time label font weight for 'agenda' view */\r\n    --smart-scheduler-event-time-opacity-agenda: 1;\r\n    /* Event time label opacity for 'agenda' view */\r\n    --smart-scheduler-event-time-opacity: 0.7;\r\n    /* Event time label opacity */\r\n    --smart-scheduler-event-icon-size: 30px;\r\n    /* Event icon (repeating, exception icon) size */\r\n    --smart-scheduler-event-size: 30px;\r\n    /* Sets the size of the timeline events in all views. Main variable. Used this variable to change the size of the events. Used by the Scheduler internally !*/\r\n    --smart-scheduler-event-size-basic: var(--smart-scheduler-event-size);\r\n    /* Sets the size of the events only in Basic views */\r\n    --smart-scheduler-event-size-timeline: 60px;\r\n    /* Sests the size of the events only in Timeline views. Should only be in pixels. Do not use calc()! */\r\n    --smart-scheduler-event-collector-size: 24px;\r\n    /* Event collector size */\r\n    --smart-scheduler-event-collector-mobile-size: 28px;\r\n    /* Event collector size on mobile */\r\n    --smart-scheduler-event-collector-background: rgba(var(--smart-primary-rgb), 1);\r\n    /* Event collector background color */\r\n    --smart-scheduler-event-collector-color: var(--smart-primary-color);\r\n    /* Event collector color */\r\n    --smart-scheduler-event-collector-focus: rgba(var(--smart-primary-rgb), .9);\r\n    /* Event collector background color on focus */\r\n    --smart-scheduler-event-collector-color-focus: var(--smart-scheduler-event-collector-color);\r\n    /* Event collector color on focus */\r\n    --smart-scheduler-event-collector-hover: rgba(var(--smart-primary-rgb), .8);\r\n    /* Event collector background colot on hover */\r\n    --smart-scheduler-event-collector-color-hover: var(--smart-scheduler-event-collector-color);\r\n    /* Event collector color on hover */\r\n    --smart-scheduler-month-view-number-size: 24px;\r\n    /* The size of the day number in month view */\r\n    --smart-scheduler-status-size: 7px;\r\n    /* The size of the day number in month view */\r\n    --smart-scheduler-status-padding: 5px;\r\n    /* The paddng between the content of the event and the satus strip */\r\n    --smart-scheduler-status-background: transparent;\r\n    /* The size of the day number in month view */\r\n    --smart-scheduler-status-free-background: white;\r\n    /* Event Status 'free' background color */\r\n    --smart-scheduler-status-tentative-background: 0 -244rem / 5rem 5rem linear-gradient(45deg, #fd7e14 25%, rgba(0, 0, 0, .2) 25%, rgba(0, 0, 0, .2) 50%, #fd7e14 50%, #fd7e14 75%, rgba(0, 0, 0, .2) 75%, rgba(0, 0, 0, .2));\r\n    /* Event status 'tentative' background color */\r\n    --smart-scheduler-status-busy-background: #dc3545;\r\n    /* Event status 'busy' background color */\r\n    --smart-scheduler-status-out-of-office-background: #00a9e6;\r\n    /* Event status 'out-of-office' background color */\r\n    --smart-scheduler-cell-feedback-background: transparent;\r\n    /* Cell feedback background color on event drop  */\r\n    --smart-scheduler-event-resize-indicator-size: var(--smart-gantt-chart-timeline-task-resize-indicator-width);\r\n    /* Event resize indicator size */\r\n    --smart-scheduler-event-resize-indicator-color: var(--smart-gantt-chart-timeline-task-resize-indicator-color);\r\n    /* Event resize indicator color */\r\n    --smart-scheduler-event-resize-indicator-border-color: var(--smart-gantt-chart-timeline-task-resize-indicator-border-color);\r\n    /* Event resize indicator border color */\r\n    --smart-scheduler-restricted-background: 0 -245rem / 12px 12px linear-gradient(135deg, rgba(255, 0, 0, .15) 25%, transparent 25%, transparent 50%, rgba(255, 0, 0, .15) 50%, rgba(255, 0, 0, .15) 75%, transparent 75%, transparent);\r\n    /* Restricted cells background color */\r\n    --smart-scheduler-event-item-size: 50px;\r\n    /* Event menu item size(height) */\r\n    --smart-scheduler-event-button-size: 30px;\r\n    /* Event menu item button size(delete button) */\r\n    --smart-scheduler-event-border-radius: initial;\r\n    /* Event border radius */\r\n    --smart-scheduler-event-collector-border-radius: 20px;\r\n    /* Event collector border radius */\r\n    --smart-scheduler-context-menu-max-height: calc(4 * var(--smart-scheduler-event-item-size));\r\n    /* Context menu max-height */\r\n    --smart-scheduler-context-menu-max-width: 300px;\r\n    /* Context menu max-width */\r\n    --smart-scheduler-window-header-height: var(--smart-gantt-chart-popup-window-header-height);\r\n    /* Window editor header height */\r\n    --smart-scheduler-window-footer-height: var(--smart-gantt-chart-popup-window-footer-height);\r\n    /* Window editor footer height */\r\n    --smart-scheduler-event-label-font-weight: 300;\r\n    /* Event label font weight */\r\n    --smart-scheduler-event-time-font-weight: 300;\r\n    /* Event time label font weight */\r\n    --smart-scheduler-event-item-label-font-weight: 600;\r\n    /* Event menu item label font-weight */\r\n    --smart-scheduler-toast-default-width: 400px;\r\n    /* Toast(notifications) default width */\r\n    --smart-scheduler-toast-default-height: 50px;\r\n    /* Toast(notifications) default height */\r\n    --smart-scheduler-shortcut-size: 28px;\r\n    /* The width of the shortuct of the view items when placed inside a drop down */\r\n    /*Window*/\r\n    --smart-window-default-height: var(--smart-box-height);\r\n    /* smartWindow default height */\r\n    --smart-window-default-width: var(--smart-box-width);\r\n    /* smartWindow default width */\r\n    --smart-window-header-height: var(--smart-bar-height);\r\n    /* smartWindow header height */\r\n    --smart-window-footer-height: var(--smart-bar-height);\r\n    /* smartWindow footer height */\r\n    --smart-window-min-width: 250px;\r\n    /* smartWindow header width */\r\n    --smart-window-header-padding: 10px;\r\n    /* smartWindow header and footer padding */\r\n    --smart-window-footer-padding: 6.5px;\r\n    /* smartWindow header and footer padding */\r\n    --smart-window-header-button-size: 24px;\r\n    /* Sets the size of the header buttons */\r\n    --smart-window-header-icon-size: var(--smart-font-size);\r\n    /* Sets the size of the header button icons */\r\n    --smart-window-header-background: var(--smart-surface);\r\n    /* Sets the background of the header section */\r\n    --smart-window-footer-background: var(--smart-surface);\r\n    /* Sets the size of the background of the footer section */\r\n    --smart-window-footer-button-width: 100px;\r\n    /* Sets the width of the footer buttons */\r\n    --smart-window-content-padding: 10px;\r\n    /* Sets the content section padding */\r\n    /*Elevations*/\r\n    --smart-elevation-24: 0 24px 38px 3px rgba(0, 0, 0, .14), 0 9px 46px 8px rgba(0, 0, 0, .12), 0 11px 15px 0 rgba(0, 0, 0, .2);\r\n    --smart-elevation-16: 0 16px 24px 2px rgba(0, 0, 0, .14), 0 6px 30px 5px rgba(0, 0, 0, .12), 0 8px 10px 0 rgba(0, 0, 0, .2);\r\n    --smart-elevation-12: 0 12px 17px 2px rgba(0, 0, 0, .14), 0 5px 22px 4px rgba(0, 0, 0, .12), 0 7px 8px 0 rgba(0, 0, 0, .2);\r\n    --smart-elevation-8: 0 8px 10px 1px rgba(0, 0, 0, .14), 0 3px 14px 3px rgba(0, 0, 0, .12), 0 4px 15px 0 rgba(0, 0, 0, .2);\r\n    --smart-elevation-6: 0 6px 10px 0 rgba(0, 0, 0, .14), 0 1px 18px 0 rgba(0, 0, 0, .12), 0 3px 5px 0 rgba(0, 0, 0, .2);\r\n    --smart-elevation-4: 0 2px 4px 0 rgba(0, 0, 0, .14), 0 4px 5px 0 rgba(0, 0, 0, .12), 0 1px 10px 0 rgba(0, 0, 0, .2);\r\n    --smart-elevation-2: 0 3px 1px -2px rgba(0, 0, 0, .2), 0 2px 2px 0 rgba(0, 0, 0, .14), 0 1px 5px 0 rgba(0, 0, 0, .12);\r\n    --smart-elevation-1: 0 0 2px 0 rgba(0, 0, 0, .14), 0 2px 2px 0 rgba(0, 0, 0, .12), 0 1px 3px 0 rgba(0, 0, 0, .2);\r\n    --smart-elevation-0: none;\r\n    /* Breakpoints */\r\n    --breakpoint-xs: 0;\r\n    --breakpoint-sm: 576px;\r\n    --breakpoint-md: 768px;\r\n    --breakpoint-lg: 992px;\r\n    --breakpoint-xl: 1200px;\r\n    /*Misc*/\r\n    --pseudo-element-height: 0;\r\n}\r\n\r\nbody[theme=\"dark\"],\r\n.smart-ui-component[theme=\"dark\"] {\r\n    --smart-primary-rgb: 122, 202, 255;\r\n    --smart-primary: rgb(var(--smart-primary-rgb));\r\n    /* The theme primary color */\r\n    --smart-primary-color: #242424;\r\n    --smart-background: #242424;\r\n    /* The theme background color. The background color appears behind scrollable content.*/\r\n    --smart-background-color: #fff;\r\n    /* Text color on top of a background background */\r\n    --smart-surface: #333;\r\n    /* The theme surface color. Surface colors affect surfaces of components, such as cards, sheets, and menus. */\r\n    --smart-surface-color: #fff;\r\n    /* Text color on top of a surface surface */\r\n    --smart-disabled: #535353;\r\n    /* The theme primary color in disabled state. */\r\n    --smart-disabled-color: #fff;\r\n    /* Text color on top of a theme background in disabled state */\r\n    --smart-border: #464646;\r\n    /* The theme background border color */\r\n    --smart-editor-selection: var(--smart-primary);\r\n    --smart-editor-selection-color: var(--smart-primary-color);\r\n    --smart-ui-state-hover: #444;\r\n    --smart-ui-state-color-hover: #fff;\r\n    --smart-ui-state-border-hover: var(--smart-ui-state-hover);\r\n    --smart-ui-state-active: var(--smart-primary);\r\n    --smart-ui-state-color-active: var(--smart-primary-color);\r\n    --smart-ui-state-border-active: var(--smart-primary);\r\n    --smart-ui-state-focus: #555;\r\n    --smart-ui-state-color-focus: #fff;\r\n    --smart-ui-state-border-focus: #555;\r\n    --smart-ui-state-selected: rgba(var(--smart-primary-rgb), .1);\r\n    --smart-ui-state-color-selected: var(--smart-primary);\r\n    --smart-ui-state-border-selected: rgba(var(--smart-primary-rgb), .1);\r\n    --smart-alternation-index0-color: var(--smart-surface-color);\r\n    /* Alternation color for index0 */\r\n    --smart-alternation-index0-border: var(--smart-surface);\r\n    /* Alternation border color for index0 */\r\n    --smart-alternation-index0-background: var(--smart-surface);\r\n    /* Alternation background color for index0 */\r\n    --smart-alternation-index1-color: #111;\r\n    /*Alternation color for index1 */\r\n    --smart-alternation-index1-border: #9BBB59;\r\n    /* Alternation border color for index1 */\r\n    --smart-alternation-index1-background: #9BBB59;\r\n    /* Alternation background color for index1 */\r\n    --smart-alternation-index2-color: #fff;\r\n    /*Alternation color for index2 */\r\n    --smart-alternation-index2-border: #FC3752;\r\n    /* Alternation border color for index2 */\r\n    --smart-alternation-index2-background: #FC3752;\r\n    /* Alternation background color for index2 */\r\n    --smart-grid-cell-background-freeze: #242424;\r\n    --smart-grid-cell-color-freeze: #fff;\r\n    --smart-scroll-bar-background: #3E3E42;\r\n    --smart-scroll-bar-track-background: var(--smart-scroll-bar-background);\r\n    --smart-scroll-bar-border: #3E3E42;\r\n    --smart-scroll-bar-thumb-background: #686868;\r\n    --smart-scroll-bar-thumb-border: #686868;\r\n    --smart-scroll-bar-thumb-background-hover: #9E9E9E;\r\n    --smart-scroll-bar-thumb-border-hover: #9E9E9E;\r\n    --smart-scroll-bar-thumb-background-active: #444;\r\n    --smart-scroll-bar-thumb-border-active: #444;\r\n    --smart-scroll-bar-button-background: #3E3E42;\r\n    --smart-scroll-bar-button-border: #3E3E42;\r\n    --smart-scroll-bar-button-color: #999999;\r\n    --smart-scroll-bar-button-background-hover: #3E3E42;\r\n    --smart-scroll-bar-button-border-hover: #3E3E42;\r\n    --smart-scroll-bar-button-color-hover: var(--smart-primary);\r\n    --smart-scroll-bar-button-background-active: #3E3E42;\r\n    --smart-scroll-bar-button-border-active: #3E3E42;\r\n    --smart-scroll-bar-button-color-active: var(--smart-primary);\r\n    --smart-gantt-chart-timeline-nonworking-color: #3E3E42;\r\n    --smart-scheduler-timeline-weekend-color: var(--smart-background);\r\n    /* Sets the background color for the weekend cells */\r\n    --smart-scheduler-timeline-nonworking-color: var(--smart-gantt-chart-timeline-nonworking-color);\r\n    /* Sets the background color for nonworking days/hours cells */\r\n    --smart-scheduler-event-background-rgb: 103, 176, 245;\r\n    --smart-scheduler-event-background: rgba(var(--smart-scheduler-event-background-rgb), 1);\r\n    --smart-scheduler-event-color: var(--smart-primary-color);\r\n    --smart-scheduler-event-focus: rgba(var(--smart-scheduler-event-background-rgb), .9);\r\n    --smart-scheduler-event-color-focus: var(--smart-scheduler-event-color);\r\n    --smart-scheduler-event-hover: rgba(var(--smart-scheduler-event-background-rgb), .8);\r\n    --smart-scheduler-event-color-hover: var(--smart-scheduler-event-color);\r\n    --smart-scheduler-event-collector-background: rgba(var(--smart-primary-rgb), 1);\r\n    --smart-scheduler-event-collector-color: var(--smart-primary-color);\r\n    --smart-scheduler-event-collector-focus: rgba(var(--smart-primary-rgb), .9);\r\n    --smart-scheduler-event-collector-color-focus: var(--smart-scheduler-event-collector-color);\r\n    --smart-scheduler-event-collector-hover: rgba(var(--smart-primary-rgb), .8);\r\n    --smart-scheduler-event-collector-color-hover: var(--smart-scheduler-event-collector-color);\r\n    --smart-scheduler-status-free-background: white;\r\n    --smart-scheduler-status-tentative-background: 0 -244rem / 5rem 5rem linear-gradient(45deg, #fd7e14 25%, rgba(0, 0, 0, .2) 25%, rgba(0, 0, 0, .2) 50%, #fd7e14 50%, #fd7e14 75%, rgba(0, 0, 0, .2) 75%, rgba(0, 0, 0, .2));\r\n    --smart-scheduler-status-busy-background: #dc3545;\r\n    --smart-scheduler-status-out-of-office-background: #00a9e6;\r\n    --smart-scheduler-event-resize-indicator-color: var(--smart-gantt-chart-timeline-task-resize-indicator-color);\r\n    --smart-scheduler-event-resize-indicator-border-color: var(--smart-gantt-chart-timeline-task-resize-indicator-border-color);\r\n    --smart-scheduler-restricted-background: 0 -245rem / 12px 12px linear-gradient(135deg, rgba(255, 0, 0, .15) 25%, transparent 25%, transparent 50%, rgba(255, 0, 0, .15) 50%, rgba(255, 0, 0, .15) 75%, transparent 75%, transparent);\r\n}", ""]),
        t.exports = e
    },
    31: function(t, e, r) {
        (e = r(0)(!1)).push([t.i, '/* smart-menu */\r\nsmart-menu {\r\n  width: var(--smart-menu-default-width);\r\n  height: var(--smart-menu-default-height);\r\n  visibility: hidden; }\r\n  smart-menu:focus {\r\n    outline: none;\r\n    border-color: var(--smart-outline); }\r\n  smart-menu > .smart-container {\r\n    display: flex;\r\n    position: relative; }\r\n  smart-menu smart-menu-item[level="1"][separator], smart-menu smart-menu-item[separator][level]:last-child,\r\n  smart-menu smart-menu-items-group[level="1"][separator],\r\n  smart-menu smart-menu-items-group[separator][level]:last-child {\r\n    border-bottom: none; }\r\n  smart-menu.smart-element {\r\n    visibility: inherit;\r\n    overflow: visible; }\r\n  smart-menu .smart-ripple {\r\n    background: var(--smart-primary); }\r\n  smart-menu[aria-orientation="horizontal"] {\r\n    background: var(--smart-surface);\r\n    color: var(--smart-surface-color);\r\n    border-color: var(--smart-border); }\r\n  smart-menu[mode="vertical"], smart-menu[mode="dropDown"], smart-menu[mode="tree"] {\r\n    width: var(--smart-menu-vertical-default-width);\r\n    height: var(--smart-menu-vertical-default-height); }\r\n  smart-menu[mode="tree"]:focus {\r\n    outline: none;\r\n    border-color: var(--smart-outline); }\r\n  smart-menu[mode="vertical"] smart-menu-item[level="1"][separator],\r\n  smart-menu[mode="vertical"] smart-menu-items-group[level="1"][separator], smart-menu[mode="dropDown"] smart-menu-item[level="1"][separator],\r\n  smart-menu[mode="dropDown"] smart-menu-items-group[level="1"][separator], smart-menu[mode="tree"] smart-menu-item[level="1"][separator],\r\n  smart-menu[mode="tree"] smart-menu-items-group[level="1"][separator], smart-menu[minimized] smart-menu-item[level="1"][separator],\r\n  smart-menu[minimized] smart-menu-items-group[level="1"][separator] {\r\n    border-bottom: 1px solid var(--smart-border); }\r\n  smart-menu[minimized][drop-down-position$="left"] .smart-menu-minimized-items-container .smart-menu-item-label-container {\r\n    flex-direction: row; }\r\n  smart-menu[mode="tree"] {\r\n    background: var(--smart-background);\r\n    border-color: var(--smart-border);\r\n    color: var(--smart-background-color); }\r\n  smart-menu[mode="dropDown"] {\r\n    position: absolute;\r\n    background: var(--smart-background);\r\n    color: var(--smart-background-color);\r\n    box-shadow: var(--smart-elevation-8);\r\n    border-radius: var(--smart-border-radius);\r\n    left: 0;\r\n    top: 0;\r\n    z-index: var(--smart-editor-drop-down-z-index); }\r\n\r\nsmart-menu-item,\r\nsmart-menu-items-group {\r\n  visibility: hidden;\r\n  cursor: pointer;\r\n  height: auto;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  white-space: nowrap; }\r\n  smart-menu-item.smart-element,\r\n  smart-menu-items-group.smart-element {\r\n    visibility: inherit;\r\n    overflow: visible;\r\n    background: inherit;\r\n    color: inherit;\r\n    border-color: inherit; }\r\n  smart-menu-item[hover],\r\n  smart-menu-items-group[hover] {\r\n    background-color: var(--smart-ui-state-hover);\r\n    border-color: var(--smart-ui-state-border-hover);\r\n    color: var(--smart-ui-state-color-hover); }\r\n  smart-menu-item[focus],\r\n  smart-menu-items-group[focus] {\r\n    background-color: var(--smart-ui-state-focus);\r\n    border-color: var(--smart-ui-state-border-focus);\r\n    color: var(--smart-ui-state-color-focus); }\r\n  smart-menu-item[separator],\r\n  smart-menu-items-group[separator] {\r\n    border-bottom: 1px solid var(--smart-border); }\r\n\r\nsmart-menu-item .smart-menu-item-shortcut {\r\n  margin-left: 100px;\r\n  opacity: 0.5; }\r\nsmart-menu-item[template-applied] {\r\n  cursor: default; }\r\nsmart-menu-item[disabled] {\r\n  opacity: 0.5; }\r\n\r\nsmart-menu-items-group {\r\n  position: relative; }\r\n\r\n.smart-menu a {\r\n  color: inherit; }\r\n.smart-menu smart-menu-item[level="1"],\r\n.smart-menu smart-menu-items-group[level="1"] {\r\n  height: 100%; }\r\n  .smart-menu smart-menu-item[level="1"] > .smart-menu-item-label-container,\r\n  .smart-menu smart-menu-items-group[level="1"] > .smart-menu-item-label-container {\r\n    height: 100%; }\r\n.smart-menu .smart-menu-drop-down {\r\n  position: absolute;\r\n  background: var(--smart-background);\r\n  color: var(--smart-background-color);\r\n  box-shadow: var(--smart-elevation-8);\r\n  border-radius: var(--smart-border-radius);\r\n  left: 100%;\r\n  top: 0;\r\n  z-index: var(--smart-editor-drop-down-z-index); }\r\n  .smart-menu .smart-menu-drop-down .smart-menu-drop-down {\r\n    border: none; }\r\n    .smart-menu .smart-menu-drop-down .smart-menu-drop-down.smart-visibility-hidden {\r\n      border: none; }\r\n  .smart-menu .smart-menu-drop-down.smart-visibility-hidden.not-in-view {\r\n    left: -9999px;\r\n    top: -9999px;\r\n    transition: none; }\r\n  .smart-menu .smart-menu-drop-down[level="2"] {\r\n    top: 100%;\r\n    left: 0; }\r\n.smart-menu .smart-menu-main-container {\r\n  display: flex;\r\n  position: relative;\r\n  align-items: center;\r\n  width: 100%;\r\n  height: 100%;\r\n  cursor: default; }\r\n  .smart-menu .smart-menu-main-container > smart-menu-item[level="1"] .smart-menu-item-shortcut {\r\n    display: none; }\r\n  .smart-menu .smart-menu-main-container.scroll-buttons-shown {\r\n    width: calc(100% - 2 * var(--smart-menu-scroll-button-size));\r\n    overflow: hidden; }\r\n    .smart-menu .smart-menu-main-container.scroll-buttons-shown.one-button-shown {\r\n      width: calc(100% - var(--smart-menu-scroll-button-size)); }\r\n.smart-menu .smart-menu-item-label-element {\r\n  display: flex;\r\n  align-items: center;\r\n  overflow: hidden; }\r\n  .smart-menu .smart-menu-item-label-element > span {\r\n    display: flex;\r\n    align-items: center; }\r\n.smart-menu .smart-element[level="2"]:first-child {\r\n  margin-top: var(--smart-border-radius); }\r\n.smart-menu .smart-element[level="2"]:last-child {\r\n  margin-bottom: var(--smart-border-radius); }\r\n.smart-menu .smart-element[level="3"]:first-child {\r\n  margin-top: var(--smart-border-radius); }\r\n.smart-menu .smart-element[level="3"]:last-child {\r\n  margin-bottom: var(--smart-border-radius); }\r\n.smart-menu .smart-header {\r\n  background: var(--smart-surface);\r\n  color: var(--smart-surface-color);\r\n  box-shadow: var(--smart-elevation-4);\r\n  border: var(--smart-border-width) solid var(--smart-border);\r\n  border-top-left-radius: var(--smart-border-top-left-radius);\r\n  border-top-right-radius: var(--smart-border-top-right-radius);\r\n  border-bottom-left-radius: var(--smart-border-bottom-left-radius);\r\n  border-bottom-right-radius: var(--smart-border-bottom-right-radius);\r\n  z-index: 3;\r\n  padding: 0px 16px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  position: relative;\r\n  width: 100%; }\r\n.smart-menu .smart-hamburger-icon {\r\n  width: 40px;\r\n  height: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  float: none;\r\n  cursor: pointer; }\r\n  .smart-menu .smart-hamburger-icon .smart-hamburger-icon-custom-container {\r\n    height: 100%;\r\n    display: flex;\r\n    align-items: center; }\r\n  .smart-menu .smart-hamburger-icon.smart-close-button > .smart-hamburger-icon-line-top {\r\n    width: 29px;\r\n    transform: translateX(4px) rotate(45deg); }\r\n  .smart-menu .smart-hamburger-icon.smart-close-button > .smart-hamburger-icon-line-center {\r\n    visibility: hidden; }\r\n  .smart-menu .smart-hamburger-icon.smart-close-button > .smart-hamburger-icon-line-bottom {\r\n    width: 29px;\r\n    transform: translateX(4px) rotate(-45deg); }\r\n  .smart-menu .smart-hamburger-icon .smart-hamburger-icon-custom-container {\r\n    height: 100%;\r\n    display: flex;\r\n    align-items: center; }\r\n.smart-menu .smart-hamburger-icon-line {\r\n  margin-bottom: 5px;\r\n  border-radius: 10px;\r\n  width: 30px;\r\n  height: 5px;\r\n  transform-origin: left;\r\n  background-color: #757575; }\r\n.smart-menu .smart-hamburger-icon-line-bottom {\r\n  margin-bottom: 0; }\r\n.smart-menu .smart-menu-minimized-items-container .smart-menu-items-group-opened > .smart-menu-item-label-container {\r\n  padding-bottom: 0; }\r\n.smart-menu .smart-menu-minimized-items-container .smart-menu-drop-down.smart-visibility-hidden {\r\n  margin-top: 0;\r\n  height: 0;\r\n  transform: scaleY(0); }\r\n.smart-menu .smart-menu-minimized-items-container.smart-visibility-hidden.not-in-view {\r\n  left: -9999px;\r\n  top: -9999px;\r\n  transition: none; }\r\n.smart-menu .smart-menu-item-label-container {\r\n  position: relative;\r\n  width: 100%;\r\n  padding: 10px;\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  overflow: hidden; }\r\n.smart-menu .smart-menu-scroll-button {\r\n  display: block;\r\n  background-color: var(--smart-scroll-bar-button-background);\r\n  color: var(--smart-scroll-bar-button-color);\r\n  border-color: var(--smart-scroll-bar-button-border);\r\n  min-height: 0;\r\n  width: var(--smart-menu-scroll-button-size);\r\n  height: 100%; }\r\n  .smart-menu .smart-menu-scroll-button[hover] {\r\n    background-color: var(--smart-scroll-bar-button-background-hover);\r\n    color: var(--smart-scroll-bar-button-color-hover);\r\n    border-color: var(--smart-scroll-bar-button-border-hover); }\r\n  .smart-menu .smart-menu-scroll-button[active] {\r\n    background-color: var(--smart-scroll-bar-button-background-active);\r\n    color: var(--smart-scroll-bar-button-color-active);\r\n    border-color: var(--smart-scroll-bar-button-border-active); }\r\n  .smart-menu .smart-menu-scroll-button > button {\r\n    border: none; }\r\n.smart-menu .smart-hidden {\r\n  display: none !important; }\r\n.smart-menu.smart-container {\r\n  display: flex;\r\n  position: relative; }\r\n.smart-menu:not([animation=\'none\']) .smart-menu-drop-down,\r\n.smart-menu:not([animation=\'none\']) .smart-menu-minimized-items-container {\r\n  opacity: 1;\r\n  transform: scaleY(1);\r\n  -webkit-transform-origin: top;\r\n  transform-origin: top;\r\n  transition: opacity 0.2s ease-in, visibility 0.2s ease-in, transform 0.2s ease-in; }\r\n  .smart-menu:not([animation=\'none\']) .smart-menu-drop-down.smart-visibility-hidden,\r\n  .smart-menu:not([animation=\'none\']) .smart-menu-minimized-items-container.smart-visibility-hidden {\r\n    opacity: 0.2;\r\n    transform: scaleY(0); }\r\n.smart-menu:not([animation=\'none\']) .smart-menu-minimized-items-container .smart-menu-drop-down {\r\n  -webkit-transform-origin: top;\r\n  transform-origin: top;\r\n  transition: height 0.2s ease-in; }\r\n.smart-menu:not([animation=\'none\']) .smart-menu-minimized-items-container .smart-menu-item-label-container > .smart-menu-items-group-arrow {\r\n  transition: transform 0.2s ease-in; }\r\n.smart-menu:not([animation=\'none\']) .smart-hamburger-icon-line {\r\n  transition: visibility 0.02s ease-in, transform 0.2s ease-in, width 0.2s ease-in; }\r\n.smart-menu[animation=\'none\'] .smart-menu-drop-down.smart-visibility-hidden,\r\n.smart-menu[animation=\'none\'] .smart-menu-minimized-items-container.smart-visibility-hidden {\r\n  transform: scale(0); }\r\n.smart-menu[drop-down-append-to]:not([drop-down-append-to="null"]) .smart-menu-main-container {\r\n  overflow: hidden; }\r\n.smart-menu[overflow="hidden"] .smart-menu-main-container {\r\n  width: 100%; }\r\n.smart-menu[overflow="hidden"][mode]:not([mode="horizontal"]) .smart-menu-main-container {\r\n  height: 100%; }\r\n.smart-menu[aria-orientation="horizontal"] .smart-element[level="1"]:first-child {\r\n  margin-left: var(--smart-border-radius); }\r\n.smart-menu[aria-orientation="horizontal"] .smart-element[level="1"]:last-child {\r\n  margin-right: var(--smart-border-radius); }\r\n.smart-menu:not([aria-orientation="horizontal"]) .smart-element[level="1"]:first-child {\r\n  margin-top: var(--smart-border-radius); }\r\n.smart-menu:not([aria-orientation="horizontal"]) .smart-element[level="1"]:last-child {\r\n  margin-bottom: var(--smart-border-radius); }\r\n.smart-menu[disabled] smart-menu-item,\r\n.smart-menu[disabled] smart-menu-items-group,\r\n.smart-menu[disabled] .smart-hamburger-icon {\r\n  cursor: default; }\r\n.smart-menu[disabled] .smart-hamburger-icon {\r\n  cursor: default; }\r\n.smart-menu[disabled][mode="dropDown"]:not([animation=\'none\']) {\r\n  opacity: 0.55; }\r\n.smart-menu[minimized] .smart-minimized-header {\r\n  border: var(--smart-border-width) solid var(--smart-border);\r\n  background: var(--smart-surface);\r\n  justify-content: flex-end; }\r\n.smart-menu[minimized][drop-down-position$="left"] > .smart-container {\r\n  flex-direction: row-reverse; }\r\n.smart-menu[minimized][drop-down-position$="left"] .smart-menu-minimized-items-container .smart-menu-item-label-container {\r\n  flex-direction: row-reverse; }\r\n.smart-menu[minimized][drop-down-position$="left"] .smart-menu-minimized-items-container .smart-menu-items-group-arrow {\r\n  margin: 0; }\r\n.smart-menu[minimized][drop-down-position$="left"] .smart-menu-minimized-items-container .smart-menu-drop-down {\r\n  padding-left: 0;\r\n  padding-right: 20px; }\r\n.smart-menu[minimized][checkboxes][checkable][drop-down-position$="left"] .smart-menu-minimized-items-container > smart-menu-item > .smart-menu-item-label-container,\r\n.smart-menu[minimized][checkboxes][checkable][drop-down-position$="left"] .smart-menu-minimized-items-container > smart-menu-items-group > .smart-menu-item-label-container {\r\n  padding-left: 10px;\r\n  padding-right: 35px; }\r\n  .smart-menu[minimized][checkboxes][checkable][drop-down-position$="left"] .smart-menu-minimized-items-container > smart-menu-item > .smart-menu-item-label-container:after,\r\n  .smart-menu[minimized][checkboxes][checkable][drop-down-position$="left"] .smart-menu-minimized-items-container > smart-menu-items-group > .smart-menu-item-label-container:after {\r\n    left: initial;\r\n    right: 10px; }\r\n.smart-menu[minimize-icon-template] .smart-hamburger-icon {\r\n  width: auto;\r\n  float: left; }\r\n.smart-menu[minimize-icon-template="null"] .smart-hamburger-icon {\r\n  width: 40px;\r\n  height: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  float: none;\r\n  cursor: pointer; }\r\n.smart-menu:not([mode="tree"])[drop-down-position$="left"] smart-menu-item:not([level="1"]) > .smart-menu-item-label-container {\r\n  flex-direction: row-reverse; }\r\n.smart-menu:not([mode="tree"])[checkboxes][drop-down-position$="left"] .smart-menu-item-container[checkable] > smart-menu-item > .smart-menu-item-label-container,\r\n.smart-menu:not([mode="tree"])[checkboxes][drop-down-position$="left"] .smart-menu-item-container[checkable] > smart-menu-items-group > .smart-menu-item-label-container {\r\n  padding-left: 10px;\r\n  padding-right: 35px; }\r\n  .smart-menu:not([mode="tree"])[checkboxes][drop-down-position$="left"] .smart-menu-item-container[checkable] > smart-menu-item > .smart-menu-item-label-container:after,\r\n  .smart-menu:not([mode="tree"])[checkboxes][drop-down-position$="left"] .smart-menu-item-container[checkable] > smart-menu-items-group > .smart-menu-item-label-container:after {\r\n    left: initial;\r\n    right: 10px; }\r\n.smart-menu[mode]:not([mode="horizontal"]) smart-menu-item[level="1"] > .smart-menu-item-label-container,\r\n.smart-menu[mode]:not([mode="horizontal"]) smart-menu-items-group[level="1"] > .smart-menu-item-label-container {\r\n  height: initial; }\r\n.smart-menu[mode]:not([mode="horizontal"]):not([mode="tree"])[drop-down-position$="left"] smart-menu-item > .smart-menu-item-label-container {\r\n  flex-direction: row-reverse; }\r\n.smart-menu[mode]:not([mode="horizontal"])[drop-down-position$="left"] .smart-menu-main-container smart-menu-items-group > .smart-menu-item-label-container {\r\n  flex-direction: row-reverse; }\r\n  .smart-menu[mode]:not([mode="horizontal"])[drop-down-position$="left"] .smart-menu-main-container smart-menu-items-group > .smart-menu-item-label-container > .smart-menu-items-group-arrow {\r\n    margin-left: 0;\r\n    margin-right: 50px;\r\n    transform: rotate(180deg); }\r\n.smart-menu[mode]:not([mode="horizontal"])[drop-down-position$="left"] .smart-menu-main-container smart-menu-item > .smart-menu-item-label-container > .smart-menu-item-shortcut {\r\n  margin-left: 0;\r\n  margin-right: 100px; }\r\n.smart-menu[mode]:not([mode="horizontal"]):not([minimized]) > .smart-container, .smart-menu[mode]:not([mode="horizontal"]):not([minimized]).smart-container {\r\n  display: block; }\r\n.smart-menu[mode="vertical"] .smart-menu-main-container, .smart-menu[mode="dropDown"] .smart-menu-main-container {\r\n  flex-direction: column; }\r\n  .smart-menu[mode="vertical"] .smart-menu-main-container.scroll-buttons-shown, .smart-menu[mode="dropDown"] .smart-menu-main-container.scroll-buttons-shown {\r\n    width: 100%;\r\n    height: calc(100% - 2 * var(--smart-menu-scroll-button-size)); }\r\n    .smart-menu[mode="vertical"] .smart-menu-main-container.scroll-buttons-shown.one-button-shown, .smart-menu[mode="dropDown"] .smart-menu-main-container.scroll-buttons-shown.one-button-shown {\r\n      width: 100%;\r\n      height: calc(100% - var(--smart-menu-scroll-button-size)); }\r\n.smart-menu[mode="vertical"] .smart-menu-drop-down[level="2"], .smart-menu[mode="dropDown"] .smart-menu-drop-down[level="2"] {\r\n  top: 0;\r\n  left: 100%; }\r\n.smart-menu[mode="vertical"] smart-menu-item[level="1"],\r\n.smart-menu[mode="vertical"] smart-menu-items-group[level="1"], .smart-menu[mode="dropDown"] smart-menu-item[level="1"],\r\n.smart-menu[mode="dropDown"] smart-menu-items-group[level="1"] {\r\n  width: 100%;\r\n  height: auto; }\r\n  .smart-menu[mode="vertical"] smart-menu-item[level="1"] > .smart-menu-item-label-element,\r\n  .smart-menu[mode="vertical"] smart-menu-items-group[level="1"] > .smart-menu-item-label-element, .smart-menu[mode="dropDown"] smart-menu-item[level="1"] > .smart-menu-item-label-element,\r\n  .smart-menu[mode="dropDown"] smart-menu-items-group[level="1"] > .smart-menu-item-label-element {\r\n    max-width: calc(100% - 10px); }\r\n.smart-menu[mode="vertical"] .smart-menu-scroll-button, .smart-menu[mode="dropDown"] .smart-menu-scroll-button {\r\n  width: 100%;\r\n  height: var(--smart-menu-scroll-button-size); }\r\n.smart-menu[mode="vertical"][drop-down-position$="left"] .smart-menu-drop-down[level="2"], .smart-menu[mode="dropDown"][drop-down-position$="left"] .smart-menu-drop-down[level="2"] {\r\n  left: initial;\r\n  right: 100%; }\r\n.smart-menu[mode="vertical"][drop-down-position|="top"] .smart-menu-drop-down, .smart-menu[mode="dropDown"][drop-down-position|="top"] .smart-menu-drop-down {\r\n  box-shadow: var(--smart-elevation-8); }\r\n  .smart-menu[mode="vertical"][drop-down-position|="top"] .smart-menu-drop-down[level="2"], .smart-menu[mode="dropDown"][drop-down-position|="top"] .smart-menu-drop-down[level="2"] {\r\n    top: 100%; }\r\n.smart-menu[mode="vertical"][drop-down-position="overlay-right"] .smart-menu-drop-down[level="2"], .smart-menu[mode="dropDown"][drop-down-position="overlay-right"] .smart-menu-drop-down[level="2"] {\r\n  left: 0; }\r\n.smart-menu[mode="vertical"][drop-down-position="overlay-left"] .smart-menu-drop-down[level="2"], .smart-menu[mode="dropDown"][drop-down-position="overlay-left"] .smart-menu-drop-down[level="2"] {\r\n  right: 0; }\r\n.smart-menu[mode="vertical"][checkboxes][checkable][drop-down-position$="left"] smart-menu-item[level="1"] > .smart-menu-item-label-container,\r\n.smart-menu[mode="vertical"][checkboxes][checkable][drop-down-position$="left"] smart-menu-items-group[level="1"] > .smart-menu-item-label-container, .smart-menu[mode="dropDown"][checkboxes][checkable][drop-down-position$="left"] smart-menu-item[level="1"] > .smart-menu-item-label-container,\r\n.smart-menu[mode="dropDown"][checkboxes][checkable][drop-down-position$="left"] smart-menu-items-group[level="1"] > .smart-menu-item-label-container {\r\n  padding-left: 10px;\r\n  padding-right: 35px; }\r\n  .smart-menu[mode="vertical"][checkboxes][checkable][drop-down-position$="left"] smart-menu-item[level="1"] > .smart-menu-item-label-container:after,\r\n  .smart-menu[mode="vertical"][checkboxes][checkable][drop-down-position$="left"] smart-menu-items-group[level="1"] > .smart-menu-item-label-container:after, .smart-menu[mode="dropDown"][checkboxes][checkable][drop-down-position$="left"] smart-menu-item[level="1"] > .smart-menu-item-label-container:after,\r\n  .smart-menu[mode="dropDown"][checkboxes][checkable][drop-down-position$="left"] smart-menu-items-group[level="1"] > .smart-menu-item-label-container:after {\r\n    left: initial;\r\n    right: 10px; }\r\n.smart-menu[mode="vertical"] .smart-menu-drop-down:not(.smart-menu-minimized-items-container) {\r\n  margin: 0 calc(var(--smart-editor-drop-down-vertical-offset) + 3px); }\r\n  .smart-menu[mode="vertical"] .smart-menu-drop-down:not(.smart-menu-minimized-items-container) .smart-menu-drop-down {\r\n    margin: 0; }\r\n.smart-menu[mode="vertical"] .smart-menu-main-container > smart-menu-item[level="1"] .smart-menu-item-shortcut {\r\n  display: none; }\r\n.smart-menu[mode="dropDown"][drop-down-position$="left"] .smart-menu-main-container smart-menu-item[level="1"] > .smart-menu-item-label-container > .smart-menu-item-shortcut {\r\n  margin-right: initial; }\r\n.smart-menu[mode="dropDown"] smart-menu-item[level="1"] .smart-menu-item-shortcut {\r\n  display: block;\r\n  margin-left: 0; }\r\n.smart-menu[mode="dropDown"]:not([animation=\'none\']) {\r\n  transition: opacity 0.2s ease-in, visibility 0.2s ease-in, transform 0.2s ease-in;\r\n  opacity: 1;\r\n  transform: scale(1);\r\n  -webkit-transform-origin: 0 0;\r\n  transform-origin: 0 0; }\r\n  .smart-menu[mode="dropDown"]:not([animation=\'none\']).smart-visibility-hidden {\r\n    opacity: 0.2;\r\n    transform: scale(0); }\r\n.smart-menu[mode="tree"] smart-menu-item[level="1"] .smart-menu-item-shortcut {\r\n  display: block; }\r\n.smart-menu[mode="tree"] .smart-menu-scroll-button {\r\n  width: 100%;\r\n  height: var(--smart-menu-scroll-button-size); }\r\n.smart-menu[mode="tree"] .smart-menu-minimized-items-container.scroll-buttons-shown {\r\n  width: 100%;\r\n  height: calc(100% - 2 * var(--smart-menu-scroll-button-size)); }\r\n  .smart-menu[mode="tree"] .smart-menu-minimized-items-container.scroll-buttons-shown.one-button-shown {\r\n    width: 100%;\r\n    height: calc(100% - var(--smart-menu-scroll-button-size)); }\r\n.smart-menu[mode="tree"]:not([minimized]) .smart-menu-minimized-items-container {\r\n  position: relative;\r\n  width: 100%;\r\n  height: 100%;\r\n  box-shadow: none;\r\n  overflow: hidden;\r\n  transform: none;\r\n  left: 0;\r\n  top: 0; }\r\n.smart-menu[mode="tree"]:not([minimized])[drop-down-position$="left"] smart-menu-items-group:not([level="1"]) > .smart-menu-item-label-container {\r\n  flex-direction: row; }\r\n.smart-menu[mode="tree"][minimized][checkboxes][drop-down-position$="left"] .smart-menu-item-container[checkable] > smart-menu-item > .smart-menu-item-label-container,\r\n.smart-menu[mode="tree"][minimized][checkboxes][drop-down-position$="left"] .smart-menu-item-container[checkable] > smart-menu-items-group > .smart-menu-item-label-container {\r\n  padding-left: 10px;\r\n  padding-right: 35px; }\r\n  .smart-menu[mode="tree"][minimized][checkboxes][drop-down-position$="left"] .smart-menu-item-container[checkable] > smart-menu-item > .smart-menu-item-label-container:after,\r\n  .smart-menu[mode="tree"][minimized][checkboxes][drop-down-position$="left"] .smart-menu-item-container[checkable] > smart-menu-items-group > .smart-menu-item-label-container:after {\r\n    left: initial;\r\n    right: 10px; }\r\n.smart-menu[drop-down-position] .smart-menu-minimized-items-container .smart-menu-drop-down {\r\n  position: static;\r\n  width: 100%;\r\n  height: auto;\r\n  padding-left: 20px;\r\n  box-shadow: none;\r\n  transform: none; }\r\n.smart-menu[drop-down-position*="overlay"] .smart-menu-drop-down,\r\n.smart-menu[drop-down-position*="overlay"] .smart-menu-drop-down[level="2"] {\r\n  margin: unset; }\r\n.smart-menu[drop-down-position|="overlay"] .smart-menu-drop-down {\r\n  top: 50%;\r\n  left: 0;\r\n  transform: translateY(-50%);\r\n  box-shadow: var(--smart-elevation-8); }\r\n  .smart-menu[drop-down-position|="overlay"] .smart-menu-drop-down[level="2"] {\r\n    top: initial;\r\n    transform: initial; }\r\n.smart-menu[drop-down-position|="overlay"]:not([animation=\'none\']) .smart-menu-drop-down {\r\n  transform: translateY(-50%) scaleY(1);\r\n  -webkit-transform-origin: center;\r\n  transform-origin: center; }\r\n  .smart-menu[drop-down-position|="overlay"]:not([animation=\'none\']) .smart-menu-drop-down.smart-visibility-hidden {\r\n    transform: translateY(-50%) scaleY(0); }\r\n  .smart-menu[drop-down-position|="overlay"]:not([animation=\'none\']) .smart-menu-drop-down[level="2"] {\r\n    transform: scaleY(1); }\r\n    .smart-menu[drop-down-position|="overlay"]:not([animation=\'none\']) .smart-menu-drop-down[level="2"].smart-visibility-hidden {\r\n      transform: scaleY(0); }\r\n.smart-menu[drop-down-position*="top"] .smart-menu-drop-down,\r\n.smart-menu[drop-down-position*="top"] .smart-menu-drop-down[level="2"] {\r\n  margin: calc(-1 * (var(--smart-editor-drop-down-vertical-offset) + 3px)) 0px; }\r\n.smart-menu[drop-down-position|="top"] .smart-menu-drop-down {\r\n  top: 100%;\r\n  transform: translateY(-100%);\r\n  box-shadow: var(--smart-elevation-8); }\r\n  .smart-menu[drop-down-position|="top"] .smart-menu-drop-down[level="2"] {\r\n    top: 0; }\r\n.smart-menu[drop-down-position|="top"] .smart-menu-minimized-items-container {\r\n  top: calc(-1 * var(--smart-border-width));\r\n  transform: translateY(-100%);\r\n  box-shadow: var(--smart-elevation-4); }\r\n.smart-menu[drop-down-position|="top"]:not([animation=\'none\']) .smart-menu-drop-down {\r\n  transform: translateY(-100%) scaleY(1);\r\n  -webkit-transform-origin: bottom;\r\n  transform-origin: bottom; }\r\n.smart-menu[drop-down-position|="top"]:not([animation=\'none\']) .smart-menu-drop-down.smart-visibility-hidden,\r\n.smart-menu[drop-down-position|="top"]:not([animation=\'none\']) .smart-menu-minimized-items-container.smart-visibility-hidden {\r\n  transform: translateY(-100%) scaleY(0); }\r\n.smart-menu[drop-down-position|="top"]:not([animation=\'none\']):not([mode="tree"]) .smart-menu-minimized-items-container {\r\n  transform: translateY(-100%) scaleY(1);\r\n  -webkit-transform-origin: bottom;\r\n  transform-origin: bottom; }\r\n.smart-menu[drop-down-position|="top"][mode="vertical"]:not([animation=\'none\']) .smart-menu-minimized-items-container .smart-menu-drop-down, .smart-menu[drop-down-position|="top"][mode="dropDown"]:not([animation=\'none\']) .smart-menu-minimized-items-container .smart-menu-drop-down {\r\n  -webkit-transform-origin: top;\r\n  transform-origin: top; }\r\n.smart-menu[drop-down-position$="left"] .smart-menu-drop-down {\r\n  left: initial;\r\n  right: 100%; }\r\n  .smart-menu[drop-down-position$="left"] .smart-menu-drop-down[level="2"] {\r\n    left: initial;\r\n    right: 0; }\r\n.smart-menu[drop-down-position$="left"] .smart-menu-main-container smart-menu-items-group:not([level="1"]) > .smart-menu-item-label-container > .smart-menu-items-group-arrow {\r\n  margin-left: 0;\r\n  margin-right: 50px;\r\n  transform: rotate(180deg); }\r\n.smart-menu[drop-down-position$="left"] .smart-menu-main-container smart-menu-item:not([level="1"]) > .smart-menu-item-label-container > .smart-menu-item-shortcut {\r\n  margin-left: 0;\r\n  margin-right: 100px; }\r\n.smart-menu[drop-down-position$="left"] smart-menu-items-group:not([level="1"]) > .smart-menu-item-label-container {\r\n  flex-direction: row-reverse; }\r\n.smart-menu[drop-down-position$="left"] .smart-menu-minimized-items-container {\r\n  left: initial;\r\n  right: calc(-1 * var(--smart-border-width)); }\r\n.smart-menu[drop-down-position="overlay-left"] .smart-menu-main-container .smart-menu-drop-down:not([level="2"]) {\r\n  left: initial;\r\n  right: 0; }\r\n.smart-menu[checkboxes] .smart-menu-item-container[checkable] > smart-menu-item > .smart-menu-item-label-container,\r\n.smart-menu[checkboxes] .smart-menu-item-container[checkable] > smart-menu-items-group > .smart-menu-item-label-container {\r\n  padding-left: 35px; }\r\n.smart-menu[checkboxes] .smart-menu-item-container[checkable] > smart-menu-item[checked] > .smart-menu-item-label-container:after,\r\n.smart-menu[checkboxes] .smart-menu-item-container[checkable] > smart-menu-items-group[checked] > .smart-menu-item-label-container:after {\r\n  position: absolute;\r\n  left: 10px;\r\n  top: 50%;\r\n  transform: translateY(-50%);\r\n  content: var(--smart-icon-check);\r\n  font-family: "smart-icons"; }\r\n.smart-menu[checkboxes] .smart-menu-item-container[checkable][check-mode="radioButton"] > smart-menu-item[checked] > .smart-menu-item-label-container:after, .smart-menu[checkboxes] .smart-menu-item-container[checkable][check-mode="radioButton"] > smart-menu-items-group[checked] > .smart-menu-item-label-container:after,\r\n.smart-menu[checkboxes] .smart-menu-item-container[checkable] > smart-menu-item[checked][check-type="radioButton"] > .smart-menu-item-label-container:after,\r\n.smart-menu[checkboxes] .smart-menu-item-container[checkable] > smart-menu-items-group[checked][check-type="radioButton"] > .smart-menu-item-label-container:after {\r\n  content: var(--smart-icon-radio); }\r\n.smart-menu[checkboxes][checkable] smart-menu-item[level="1"] > .smart-menu-item-label-container,\r\n.smart-menu[checkboxes][checkable] smart-menu-items-group[level="1"] > .smart-menu-item-label-container {\r\n  padding-left: 35px; }\r\n.smart-menu[checkboxes][checkable] smart-menu-item[level="1"][checked] > .smart-menu-item-label-container:after,\r\n.smart-menu[checkboxes][checkable] smart-menu-items-group[level="1"][checked] > .smart-menu-item-label-container:after {\r\n  position: absolute;\r\n  left: 10px;\r\n  top: 50%;\r\n  transform: translateY(-50%);\r\n  content: var(--smart-icon-check);\r\n  font-family: "smart-icons"; }\r\n.smart-menu[checkboxes][checkable] smart-menu-item[level="1"][checked][check-type="radioButton"] > .smart-menu-item-label-container:after,\r\n.smart-menu[checkboxes][checkable] smart-menu-items-group[level="1"][checked][check-type="radioButton"] > .smart-menu-item-label-container:after {\r\n  content: var(--smart-icon-radio); }\r\n.smart-menu[checkboxes][checkable][check-mode="radioButton"] smart-menu-item[level="1"][checked] > .smart-menu-item-label-container:after,\r\n.smart-menu[checkboxes][checkable][check-mode="radioButton"] smart-menu-items-group[level="1"][checked] > .smart-menu-item-label-container:after {\r\n  content: var(--smart-icon-radio); }\r\n.smart-menu[checkboxes][mode="tree"] .smart-menu-minimized-items-container smart-menu-items-group.smart-menu-items-group-opened > .smart-menu-item-label-container:after {\r\n  top: calc(50% + 5px); }\r\n\r\n.smart-menu-items-group .smart-menu-items-group-arrow {\r\n  margin-left: 50px;\r\n  font-size: calc(var(--smart-font-size) - 3px);\r\n  font-family: var(--smart-family-icon);\r\n  transform: rotate(0deg); }\r\n.smart-menu-items-group[level="1"] > .smart-menu-item-label-container > .smart-menu-items-group-arrow {\r\n  margin-left: 10px; }\r\n\r\n.smart-menu-item[template-applied] {\r\n  cursor: default; }\r\n  .smart-menu-item[template-applied] .smart-menu-item-label-container {\r\n    overflow: visible; }\r\n  .smart-menu-item[template-applied] .smart-menu-item-label-element {\r\n    width: 100%;\r\n    overflow: visible;\r\n    display: block;\r\n    white-space: normal; }\r\n\r\n.smart-menu-drop-down {\r\n  cursor: default;\r\n  background: var(--smart-background);\r\n  color: var(--smart-background-color); }\r\n  .smart-menu-drop-down .smart-menu-drop-down {\r\n    margin: 0; }\r\n  .smart-menu-drop-down[level="2"]:not(.smart-menu-minimized-items-container) {\r\n    margin: calc(var(--smart-editor-drop-down-vertical-offset) + 3px) 0px; }\r\n  .smart-menu-drop-down[level="2"][mode="vertical"]:not(.smart-menu-minimized-items-container), .smart-menu-drop-down[level="2"][mode="dropDown"]:not(.smart-menu-minimized-items-container) {\r\n    margin: 0; }\r\n  .smart-menu-drop-down[drop-down-position*="overlay"] {\r\n    margin: unset; }\r\n  .smart-menu-drop-down.drop-down-height-set .smart-menu-scroll-button {\r\n    display: block;\r\n    background-color: var(--smart-scroll-bar-button-background);\r\n    color: var(--smart-scroll-bar-button-color);\r\n    border-color: var(--smart-scroll-bar-button-border);\r\n    min-height: 0;\r\n    width: 100%;\r\n    height: var(--smart-menu-scroll-button-size); }\r\n    .smart-menu-drop-down.drop-down-height-set .smart-menu-scroll-button[hover] {\r\n      background-color: var(--smart-scroll-bar-button-background-hover);\r\n      color: var(--smart-scroll-bar-button-color-hover);\r\n      border-color: var(--smart-scroll-bar-button-border-hover); }\r\n    .smart-menu-drop-down.drop-down-height-set .smart-menu-scroll-button[active] {\r\n      background-color: var(--smart-scroll-bar-button-background-active);\r\n      color: var(--smart-scroll-bar-button-color-active);\r\n      border-color: var(--smart-scroll-bar-button-border-active); }\r\n    .smart-menu-drop-down.drop-down-height-set .smart-menu-scroll-button > button {\r\n      border: none; }\r\n  .smart-menu-drop-down.drop-down-height-set .smart-menu-main-container.scroll-buttons-shown {\r\n    width: calc(100% - 2 * var(--smart-menu-scroll-button-size));\r\n    overflow: hidden; }\r\n  .smart-menu-drop-down.drop-down-height-set[mode="vertical"] .smart-menu-scroll-button, .smart-menu-drop-down.drop-down-height-set[mode="dropDown"] .smart-menu-scroll-button, .smart-menu-drop-down.drop-down-height-set[mode="tree"] .smart-menu-scroll-button {\r\n    width: 100%;\r\n    height: var(--smart-menu-scroll-button-size); }\r\n  .smart-menu-drop-down.drop-down-height-set > .smart-menu-item-container {\r\n    height: 100%;\r\n    overflow: hidden; }\r\n    .smart-menu-drop-down.drop-down-height-set > .smart-menu-item-container.scroll-buttons-shown {\r\n      height: calc(100% - 2 * var(--smart-menu-scroll-button-size)); }\r\n      .smart-menu-drop-down.drop-down-height-set > .smart-menu-item-container.scroll-buttons-shown.one-button-shown {\r\n        width: 100%;\r\n        height: calc(100% - var(--smart-menu-scroll-button-size)); }\r\n    .smart-menu-drop-down.drop-down-height-set > .smart-menu-item-container > smart-menu-items-group {\r\n      position: static; }\r\n  .smart-menu-drop-down.smart-drop-down-repositioned {\r\n    position: absolute;\r\n    background: var(--smart-background);\r\n    color: var(--smart-background-color);\r\n    box-shadow: var(--smart-elevation-8);\r\n    border-radius: var(--smart-border-radius);\r\n    left: 100%;\r\n    top: 0;\r\n    z-index: var(--smart-editor-drop-down-z-index);\r\n    box-sizing: border-box;\r\n    font-size: var(--smart-font-size);\r\n    font-family: var(--smart-font-family); }\r\n    .smart-menu-drop-down.smart-drop-down-repositioned a {\r\n      color: inherit; }\r\n    .smart-menu-drop-down.smart-drop-down-repositioned * {\r\n      box-sizing: border-box; }\r\n    .smart-menu-drop-down.smart-drop-down-repositioned .smart-ripple {\r\n      background: var(--smart-primary); }\r\n    .smart-menu-drop-down.smart-drop-down-repositioned .smart-menu-drop-down {\r\n      border: none; }\r\n    .smart-menu-drop-down.smart-drop-down-repositioned .smart-menu-item-label-container {\r\n      position: relative;\r\n      width: 100%;\r\n      padding: 10px;\r\n      display: flex;\r\n      flex-direction: row;\r\n      align-items: center;\r\n      justify-content: space-between;\r\n      overflow: hidden; }\r\n    .smart-menu-drop-down.smart-drop-down-repositioned smart-menu-item[separator][level]:last-child,\r\n    .smart-menu-drop-down.smart-drop-down-repositioned smart-menu-items-group[separator][level]:last-child {\r\n      border-bottom: none; }\r\n    .smart-menu-drop-down.smart-drop-down-repositioned.smart-drop-down-container[drop-down-position*="top"] {\r\n      margin: calc(-1 * (var(--smart-editor-drop-down-vertical-offset) + 3px)) 0px; }\r\n    .smart-menu-drop-down.smart-drop-down-repositioned[checkboxes] .smart-menu-item-container[checkable] > smart-menu-item > .smart-menu-item-label-container,\r\n    .smart-menu-drop-down.smart-drop-down-repositioned[checkboxes] .smart-menu-item-container[checkable] > smart-menu-items-group > .smart-menu-item-label-container {\r\n      padding-left: 35px; }\r\n    .smart-menu-drop-down.smart-drop-down-repositioned[checkboxes] .smart-menu-item-container[checkable] > smart-menu-item[checked] > .smart-menu-item-label-container:after,\r\n    .smart-menu-drop-down.smart-drop-down-repositioned[checkboxes] .smart-menu-item-container[checkable] > smart-menu-items-group[checked] > .smart-menu-item-label-container:after {\r\n      position: absolute;\r\n      left: 10px;\r\n      top: 50%;\r\n      transform: translateY(-50%);\r\n      content: var(--smart-icon-check);\r\n      font-family: "smart-icons"; }\r\n    .smart-menu-drop-down.smart-drop-down-repositioned[checkboxes] .smart-menu-item-container[checkable][check-mode="radioButton"] > smart-menu-item[checked] > .smart-menu-item-label-container:after, .smart-menu-drop-down.smart-drop-down-repositioned[checkboxes] .smart-menu-item-container[checkable][check-mode="radioButton"] > smart-menu-items-group[checked] > .smart-menu-item-label-container:after,\r\n    .smart-menu-drop-down.smart-drop-down-repositioned[checkboxes] .smart-menu-item-container[checkable] > smart-menu-item[checked][check-type="radioButton"] > .smart-menu-item-label-container:after,\r\n    .smart-menu-drop-down.smart-drop-down-repositioned[checkboxes] .smart-menu-item-container[checkable] > smart-menu-items-group[checked][check-type="radioButton"] > .smart-menu-item-label-container:after {\r\n      content: var(--smart-icon-radio); }\r\n    .smart-menu-drop-down.smart-drop-down-repositioned[level="2"] {\r\n      top: 100%;\r\n      left: 0; }\r\n    .smart-menu-drop-down.smart-drop-down-repositioned[mode="vertical"][level="2"], .smart-menu-drop-down.smart-drop-down-repositioned[mode="dropDown"][level="2"] {\r\n      top: 0;\r\n      left: 100%; }\r\n    .smart-menu-drop-down.smart-drop-down-repositioned[mode="vertical"][drop-down-position|="top"], .smart-menu-drop-down.smart-drop-down-repositioned[mode="dropDown"][drop-down-position|="top"] {\r\n      box-shadow: var(--smart-elevation-8);\r\n      transform: translateY(-100%); }\r\n      .smart-menu-drop-down.smart-drop-down-repositioned[mode="vertical"][drop-down-position|="top"][level="2"], .smart-menu-drop-down.smart-drop-down-repositioned[mode="dropDown"][drop-down-position|="top"][level="2"] {\r\n        top: 100%;\r\n        transform: none; }\r\n    .smart-menu-drop-down.smart-drop-down-repositioned[mode="vertical"][drop-down-position="overlay-right"][level="2"], .smart-menu-drop-down.smart-drop-down-repositioned[mode="dropDown"][drop-down-position="overlay-right"][level="2"] {\r\n      left: 0; }\r\n    .smart-menu-drop-down.smart-drop-down-repositioned[mode="vertical"][drop-down-position="overlay-left"][level="2"], .smart-menu-drop-down.smart-drop-down-repositioned[mode="dropDown"][drop-down-position="overlay-left"][level="2"] {\r\n      right: 0; }\r\n    .smart-menu-drop-down.smart-drop-down-repositioned[mode="dropDown"][drop-down-position$="left"][level="2"] {\r\n      left: initial;\r\n      right: 100%; }\r\n    .smart-menu-drop-down.smart-drop-down-repositioned[drop-down-position$="left"] {\r\n      left: initial;\r\n      right: 100%; }\r\n      .smart-menu-drop-down.smart-drop-down-repositioned[drop-down-position$="left"][level="2"] {\r\n        left: initial;\r\n        right: 0; }\r\n    .smart-menu-drop-down.smart-drop-down-repositioned[drop-down-position="overlay-left"]:not([level="2"]) {\r\n      left: initial;\r\n      right: 0; }\r\n    .smart-menu-drop-down.smart-drop-down-repositioned[drop-down-position*="overlay"] {\r\n      margin: unset; }\r\n    .smart-menu-drop-down.smart-drop-down-repositioned[drop-down-position|="overlay"] {\r\n      top: 50%;\r\n      left: 0;\r\n      transform: translateY(-50%);\r\n      box-shadow: var(--smart-elevation-8); }\r\n    .smart-menu-drop-down.smart-drop-down-repositioned[drop-down-position*="top"] {\r\n      margin: calc(-1 * (var(--smart-editor-drop-down-vertical-offset) + 3px)) 0px; }\r\n    .smart-menu-drop-down.smart-drop-down-repositioned[drop-down-position|="top"] {\r\n      top: 100%;\r\n      transform: translateY(-100%);\r\n      box-shadow: var(--smart-elevation-8); }\r\n      .smart-menu-drop-down.smart-drop-down-repositioned[drop-down-position|="top"][level="2"] {\r\n        top: 0;\r\n        transform: none; }\r\n    .smart-menu-drop-down.smart-drop-down-repositioned[animation=\'none\'].smart-visibility-hidden {\r\n      transform: scale(0); }\r\n    .smart-menu-drop-down.smart-drop-down-repositioned.smart-visibility-hidden.not-in-view {\r\n      left: -9999px;\r\n      top: -9999px;\r\n      transition: none; }\r\n    .smart-menu-drop-down.smart-drop-down-repositioned .smart-hidden {\r\n      display: none !important; }\r\n  .smart-menu-drop-down:not([animation=\'none\']).smart-drop-down-repositioned {\r\n    opacity: 1;\r\n    transform: scaleY(1);\r\n    -webkit-transform-origin: top;\r\n    transform-origin: top;\r\n    transition: opacity 0.2s ease-in, visibility 0.2s ease-in, transform 0.2s ease-in; }\r\n    .smart-menu-drop-down:not([animation=\'none\']).smart-drop-down-repositioned.smart-visibility-hidden {\r\n      opacity: 0.2;\r\n      transform: scaleY(0); }\r\n    .smart-menu-drop-down:not([animation=\'none\']).smart-drop-down-repositioned[drop-down-position|="top"] {\r\n      transform: translateY(-100%) scaleY(1);\r\n      -webkit-transform-origin: bottom;\r\n      transform-origin: bottom; }\r\n      .smart-menu-drop-down:not([animation=\'none\']).smart-drop-down-repositioned[drop-down-position|="top"].smart-visibility-hidden {\r\n        transform: translateY(-100%) scaleY(0); }\r\n      .smart-menu-drop-down:not([animation=\'none\']).smart-drop-down-repositioned[drop-down-position|="top"][level="2"] {\r\n        transform: scaleY(1); }\r\n        .smart-menu-drop-down:not([animation=\'none\']).smart-drop-down-repositioned[drop-down-position|="top"][level="2"].smart-visibility-hidden {\r\n          transform: scaleY(0); }\r\n    .smart-menu-drop-down:not([animation=\'none\']).smart-drop-down-repositioned[drop-down-position|="overlay"] {\r\n      transform: translateY(-50%) scaleY(1);\r\n      -webkit-transform-origin: center;\r\n      transform-origin: center; }\r\n      .smart-menu-drop-down:not([animation=\'none\']).smart-drop-down-repositioned[drop-down-position|="overlay"].smart-visibility-hidden {\r\n        transform: translateY(-50%) scaleY(0); }\r\n  .smart-menu-drop-down:not(.smart-list-menu-view-minimized).smart-drop-down-repositioned[checkboxes][drop-down-position$="left"] .smart-menu-item-container[checkable] > smart-menu-item > .smart-menu-item-label-container,\r\n  .smart-menu-drop-down:not(.smart-list-menu-view-minimized).smart-drop-down-repositioned[checkboxes][drop-down-position$="left"] .smart-menu-item-container[checkable] > smart-menu-items-group > .smart-menu-item-label-container {\r\n    padding-left: 10px;\r\n    padding-right: 35px; }\r\n    .smart-menu-drop-down:not(.smart-list-menu-view-minimized).smart-drop-down-repositioned[checkboxes][drop-down-position$="left"] .smart-menu-item-container[checkable] > smart-menu-item > .smart-menu-item-label-container:after,\r\n    .smart-menu-drop-down:not(.smart-list-menu-view-minimized).smart-drop-down-repositioned[checkboxes][drop-down-position$="left"] .smart-menu-item-container[checkable] > smart-menu-items-group > .smart-menu-item-label-container:after {\r\n      left: initial;\r\n      right: 10px; }\r\n\r\n.smart-menu-minimized-items-container {\r\n  position: absolute;\r\n  background: var(--smart-background);\r\n  color: var(--smart-background-color);\r\n  box-shadow: var(--smart-elevation-8);\r\n  border-radius: var(--smart-border-radius);\r\n  z-index: var(--smart-editor-drop-down-z-index);\r\n  left: calc(-1 * var(--smart-border-width));\r\n  top: calc(100% + var(--smart-border-width)); }\r\n  .smart-menu-minimized-items-container smart-menu-items-group {\r\n    display: flex;\r\n    flex-direction: column;\r\n    overflow: hidden; }\r\n    .smart-menu-minimized-items-container smart-menu-items-group .smart-menu-items-group-arrow {\r\n      margin-left: 0; }\r\n  .smart-menu-minimized-items-container smart-menu-item[level],\r\n  .smart-menu-minimized-items-container smart-menu-items-group[level] {\r\n    margin: 0;\r\n    height: auto; }\r\n  .smart-menu-minimized-items-container .smart-menu-drop-down {\r\n    margin: 0;\r\n    border: none;\r\n    position: static;\r\n    width: 100%;\r\n    height: auto;\r\n    padding-left: 20px;\r\n    box-shadow: none;\r\n    transform: none; }\r\n    .smart-menu-minimized-items-container .smart-menu-drop-down.smart-visibility-hidden {\r\n      border: none; }\r\n    .smart-menu-minimized-items-container .smart-menu-drop-down:not(.smart-menu-minimized-items-container) {\r\n      margin: 0; }\r\n    .smart-menu-minimized-items-container .smart-menu-drop-down.drop-down-height-set > .smart-menu-item-container {\r\n      overflow: initial; }\r\n  .smart-menu-minimized-items-container.smart-menu-drop-down.smart-drop-down-repositioned[drop-down-position$="left"] .smart-menu-drop-down .smart-menu-item-label-container > .smart-menu-item-shortcut {\r\n    margin-right: 0; }\r\n  .smart-menu-minimized-items-container.smart-menu-drop-down.smart-drop-down-repositioned[drop-down-position|="overlay"] {\r\n    transform: none; }\r\n  .smart-menu-minimized-items-container.smart-menu-drop-down:not([animation=\'none\']).smart-drop-down-repositioned[drop-down-position|="overlay"] {\r\n    transform: scaleY(1);\r\n    -webkit-transform-origin: top;\r\n    transform-origin: top; }\r\n  .smart-menu-minimized-items-container.smart-menu-drop-down:not([animation=\'none\']).smart-visibility-hidden.smart-drop-down-repositioned[drop-down-position|="overlay"] {\r\n    transform: scaleY(0); }\r\n  .smart-menu-minimized-items-container .smart-menu-item-shortcut {\r\n    margin-left: 0; }\r\n  .smart-menu-minimized-items-container .smart-menu-item-label-container {\r\n    position: relative;\r\n    width: 100%;\r\n    padding: 10px;\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    overflow: hidden; }\r\n  .smart-menu-minimized-items-container .smart-menu-items-group-opened > .smart-menu-drop-down {\r\n    margin-top: 10px; }\r\n  .smart-menu-minimized-items-container .smart-menu-items-group-opened > .smart-menu-item-label-container > .smart-menu-items-group-arrow {\r\n    transform: rotate(180deg); }\r\n  .smart-menu-minimized-items-container .smart-menu-item-label-element {\r\n    overflow: hidden;\r\n    white-space: nowrap;\r\n    text-overflow: ellipsis; }\r\n  .smart-menu-minimized-items-container.smart-drop-down-repositioned {\r\n    z-index: var(--smart-editor-drop-down-z-index); }\r\n    .smart-menu-minimized-items-container.smart-drop-down-repositioned .smart-menu-drop-down {\r\n      position: absolute;\r\n      background: var(--smart-background);\r\n      color: var(--smart-background-color);\r\n      box-shadow: var(--smart-elevation-8);\r\n      border-radius: var(--smart-border-radius);\r\n      left: 100%;\r\n      top: 0;\r\n      z-index: var(--smart-editor-drop-down-z-index); }\r\n      .smart-menu-minimized-items-container.smart-drop-down-repositioned .smart-menu-drop-down.smart-visibility-hidden {\r\n        border: none;\r\n        margin-top: 0;\r\n        height: 0;\r\n        transform: scaleY(0); }\r\n    .smart-menu-minimized-items-container.smart-drop-down-repositioned .smart-menu-items-group-opened > .smart-menu-item-label-container {\r\n      padding-bottom: 0; }\r\n    .smart-menu-minimized-items-container.smart-drop-down-repositioned[drop-down-position$="left"] {\r\n      left: initial;\r\n      right: calc(-1 * var(--smart-border-width)); }\r\n      .smart-menu-minimized-items-container.smart-drop-down-repositioned[drop-down-position$="left"] .smart-menu-items-group-arrow {\r\n        margin: 0; }\r\n    .smart-menu-minimized-items-container.smart-drop-down-repositioned[checkboxes] smart-menu-items-group.smart-menu-items-group-opened > .smart-menu-item-label-container:after {\r\n      top: calc(50% + 5px); }\r\n  .smart-menu-minimized-items-container:not([animation=\'none\']) {\r\n    opacity: 1;\r\n    transform: scaleY(1);\r\n    -webkit-transform-origin: top;\r\n    transform-origin: top;\r\n    transition: opacity 0.2s ease-in, visibility 0.2s ease-in, transform 0.2s ease-in; }\r\n    .smart-menu-minimized-items-container:not([animation=\'none\']) .smart-menu-drop-down {\r\n      -webkit-transform-origin: top;\r\n      transform-origin: top;\r\n      transition: height 0.2s ease-in; }\r\n    .smart-menu-minimized-items-container:not([animation=\'none\']) .smart-menu-item-label-container > .smart-menu-items-group-arrow {\r\n      transition: transform 0.2s ease-in; }\r\n    .smart-menu-minimized-items-container:not([animation=\'none\']).smart-visibility-hidden {\r\n      opacity: 0.2;\r\n      transform: scaleY(0); }\r\n  .smart-menu-minimized-items-container[drop-down] {\r\n    margin: calc(var(--smart-editor-drop-down-vertical-offset) + 3px) 0px; }\r\n  .smart-menu-minimized-items-container[drop-down-position] .smart-menu-drop-down {\r\n    position: static;\r\n    width: 100%;\r\n    height: auto;\r\n    padding-left: 20px;\r\n    box-shadow: none;\r\n    transform: none; }\r\n  .smart-menu-minimized-items-container[drop-down-position|="top"] {\r\n    top: calc(-1 * var(--smart-border-width));\r\n    transform: translateY(-100%);\r\n    box-shadow: var(--smart-elevation-4); }\r\n    .smart-menu-minimized-items-container[drop-down-position|="top"]:not([animation=\'none\']) {\r\n      transform: translateY(-100%) scaleY(1);\r\n      -webkit-transform-origin: bottom;\r\n      transform-origin: bottom; }\r\n      .smart-menu-minimized-items-container[drop-down-position|="top"]:not([animation=\'none\']).smart-visibility-hidden {\r\n        transform: translateY(-100%) scaleY(0); }\r\n    .smart-menu-minimized-items-container[drop-down-position|="top"][mode="vertical"]:not([animation=\'none\']) .smart-menu-drop-down, .smart-menu-minimized-items-container[drop-down-position|="top"][mode="dropDown"]:not([animation=\'none\']) .smart-menu-drop-down {\r\n      -webkit-transform-origin: top;\r\n      transform-origin: top; }\r\n  .smart-menu-minimized-items-container[drop-down-position$="left"] .smart-menu-drop-down {\r\n    padding-left: 0;\r\n    padding-right: 20px; }\r\n  .smart-menu-minimized-items-container[checkboxes][checkable] > smart-menu-item > .smart-menu-item-label-container,\r\n  .smart-menu-minimized-items-container[checkboxes][checkable] > smart-menu-items-group > .smart-menu-item-label-container {\r\n    padding-left: 35px; }\r\n  .smart-menu-minimized-items-container[checkboxes][checkable] > smart-menu-item[checked] > .smart-menu-item-label-container:after,\r\n  .smart-menu-minimized-items-container[checkboxes][checkable] > smart-menu-items-group[checked] > .smart-menu-item-label-container:after {\r\n    position: absolute;\r\n    left: 10px;\r\n    top: 50%;\r\n    transform: translateY(-50%);\r\n    content: var(--smart-icon-check);\r\n    font-family: "smart-icons"; }\r\n  .smart-menu-minimized-items-container[checkboxes][checkable] > smart-menu-item[checked][check-type="radioButton"] > .smart-menu-item-label-container:after, .smart-menu-minimized-items-container[checkboxes][checkable] > smart-menu-item[checked][check-type="radioButton"] > .smart-menu-item-label-container:after,\r\n  .smart-menu-minimized-items-container[checkboxes][checkable] > smart-menu-items-group[checked][check-type="radioButton"] > .smart-menu-item-label-container:after,\r\n  .smart-menu-minimized-items-container[checkboxes][checkable] > smart-menu-items-group[checked][check-type="radioButton"] > .smart-menu-item-label-container:after {\r\n    content: var(--smart-icon-radio); }\r\n  .smart-menu-minimized-items-container[checkboxes][checkable][drop-down-position$="left"] > smart-menu-item > .smart-menu-item-label-container,\r\n  .smart-menu-minimized-items-container[checkboxes][checkable][drop-down-position$="left"] > smart-menu-items-group > .smart-menu-item-label-container {\r\n    padding-left: 10px;\r\n    padding-right: 35px; }\r\n    .smart-menu-minimized-items-container[checkboxes][checkable][drop-down-position$="left"] > smart-menu-item > .smart-menu-item-label-container:after,\r\n    .smart-menu-minimized-items-container[checkboxes][checkable][drop-down-position$="left"] > smart-menu-items-group > .smart-menu-item-label-container:after {\r\n      left: initial;\r\n      right: 10px; }\r\n  .smart-menu-minimized-items-container[checkboxes][checkable][check-mode="radioButton"] > smart-menu-item[checked] > .smart-menu-item-label-container:after,\r\n  .smart-menu-minimized-items-container[checkboxes][checkable][check-mode="radioButton"] > smart-menu-items-group[checked] > .smart-menu-item-label-container:after {\r\n    content: var(--smart-icon-radio); }\r\n\r\n.smart-drop-down.smart-menu-minimized-items-container {\r\n  margin: calc(var(--smart-editor-drop-down-vertical-offset) + 3px) 0px; }\r\n\r\n.smart-date-time-picker .smart-date-time-drop-down.smart-visibility-hidden.not-in-view {\r\n  left: -9999px;\r\n  top: -9999px;\r\n  transition: none; }\r\n\r\n.minus:after {\r\n  content: var(--smart-icon-minus);\r\n  font-family: var(--smart-font-family-icon); }\r\n\r\n/* --- Right-To-Left --- */\r\n.smart-menu[right-to-left] .smart-menu-main-container {\r\n  direction: rtl; }\r\n.smart-menu[right-to-left] .smart-menu-minimized-items-container {\r\n  left: initial;\r\n  right: calc(-1 * var(--smart-border-width)); }\r\n  .smart-menu[right-to-left] .smart-menu-minimized-items-container .smart-menu-item-shortcut {\r\n    margin-right: initial;\r\n    margin-left: initial; }\r\n.smart-menu[right-to-left] .smart-menu-items-group-arrow.right.smart-arrow-right {\r\n  margin-left: initial;\r\n  margin-right: 50px; }\r\n.smart-menu[right-to-left] .smart-menu-drop-down {\r\n  left: initial;\r\n  right: 100%; }\r\n  .smart-menu[right-to-left] .smart-menu-drop-down[level="2"] {\r\n    right: 0; }\r\n.smart-menu[right-to-left] smart-menu-item .smart-menu-item-shortcut {\r\n  margin-left: initial;\r\n  margin-right: 100px; }\r\n.smart-menu[right-to-left] smart-menu-items-group .smart-menu-items-group-arrow {\r\n  margin-right: initial;\r\n  margin-left: initial; }\r\n.smart-menu[right-to-left] smart-menu-items-group[level="1"] > .smart-menu-item-label-container > .smart-menu-items-group-arrow {\r\n  /*margin-right: initial;*/\r\n  margin-right: 10px;\r\n  margin-left: initial; }\r\n.smart-menu[right-to-left]:not([mode="tree"])[drop-down-position$="left"] smart-menu-item:not([level="1"]) > .smart-menu-item-label-container {\r\n  flex-direction: row; }\r\n.smart-menu[right-to-left][mode]:not([mode="horizontal"])[drop-down-position$="left"] .smart-menu-main-container smart-menu-items-group > .smart-menu-item-label-container {\r\n  flex-direction: row; }\r\n.smart-menu[right-to-left][mode]:not([mode="horizontal"]):not([mode="tree"])[drop-down-position$="left"] smart-menu-item > .smart-menu-item-label-container {\r\n  flex-direction: row; }\r\n.smart-menu[right-to-left][mode="tree"] .smart-menu-minimized-items-container {\r\n  direction: rtl; }\r\n.smart-menu[right-to-left][mode="dropDown"] {\r\n  left: initial;\r\n  right: 100%; }\r\n  .smart-menu[right-to-left][mode="dropDown"] smart-menu-item[level="1"] .smart-menu-item-shortcut {\r\n    margin-right: initial;\r\n    margin-left: initial; }\r\n.smart-menu[right-to-left][mode="vertical"] .smart-menu-drop-down[level="2"] {\r\n  left: initial;\r\n  right: 100%; }\r\n.smart-menu[right-to-left][drop-down-position$="left"] smart-menu-items-group:not([level="1"]) > .smart-menu-item-label-container {\r\n  flex-direction: row; }\r\n.smart-menu[right-to-left][drop-down-position$="right"] .smart-menu-drop-down[level="2"] {\r\n  right: initial;\r\n  left: 0; }\r\n.smart-menu[right-to-left][drop-down-position="overlay-right"] .smart-menu-main-container .smart-menu-drop-down:not([level="2"]) {\r\n  right: initial;\r\n  left: 0; }\r\n.smart-menu[right-to-left][minimized] .smart-menu-minimized-items-container {\r\n  direction: rtl; }\r\n.smart-menu[right-to-left][minimized][drop-down-position$="left"] > .smart-container {\r\n  flex-direction: row; }\r\n.smart-menu[right-to-left][checkboxes] .smart-menu-item-container[checkable] > smart-menu-item > .smart-menu-item-label-container,\r\n.smart-menu[right-to-left][checkboxes] .smart-menu-item-container[checkable] > smart-menu-items-group > .smart-menu-item-label-container {\r\n  padding-left: 10px;\r\n  padding-right: 35px; }\r\n.smart-menu[right-to-left][checkboxes] .smart-menu-item-container[checkable] > smart-menu-item[checked] > .smart-menu-item-label-container:after,\r\n.smart-menu[right-to-left][checkboxes] .smart-menu-item-container[checkable] > smart-menu-items-group[checked] > .smart-menu-item-label-container:after {\r\n  left: initial;\r\n  right: 10px; }\r\n.smart-menu[right-to-left][checkboxes][checkable] smart-menu-item[level="1"] > .smart-menu-item-label-container,\r\n.smart-menu[right-to-left][checkboxes][checkable] smart-menu-items-group[level="1"] > .smart-menu-item-label-container {\r\n  padding-left: 10px;\r\n  padding-right: 35px; }\r\n.smart-menu[right-to-left][checkboxes][checkable] smart-menu-item[level="1"][checked] > .smart-menu-item-label-container:after,\r\n.smart-menu[right-to-left][checkboxes][checkable] smart-menu-items-group[level="1"][checked] > .smart-menu-item-label-container:after {\r\n  left: initial;\r\n  right: 10px; }\r\n\r\n.smart-menu-drop-down.smart-drop-down-repositioned[right-to-left] {\r\n  left: initial;\r\n  right: 100%; }\r\n  .smart-menu-drop-down.smart-drop-down-repositioned[right-to-left].smart-menu-minimized-items-container {\r\n    direction: rtl; }\r\n  .smart-menu-drop-down.smart-drop-down-repositioned[right-to-left] .smart-menu-item-container {\r\n    direction: rtl; }\r\n  .smart-menu-drop-down.smart-drop-down-repositioned[right-to-left] .smart-menu-items-group-arrow.right.smart-arrow-right {\r\n    margin-left: initial;\r\n    margin-right: 50px; }\r\n  .smart-menu-drop-down.smart-drop-down-repositioned[right-to-left] smart-menu-item .smart-menu-item-shortcut {\r\n    margin-left: initial;\r\n    margin-right: 100px; }\r\n  .smart-menu-drop-down.smart-drop-down-repositioned[right-to-left][drop-down-position$="left"][level="2"], .smart-menu-drop-down.smart-drop-down-repositioned[right-to-left][drop-down-position="overlay-right"]:not([level="2"]) {\r\n    right: initial;\r\n    left: 0; }\r\n  .smart-menu-drop-down.smart-drop-down-repositioned[right-to-left][level="2"] {\r\n    right: 0; }\r\n  .smart-menu-drop-down.smart-drop-down-repositioned[right-to-left][checkboxes] .smart-menu-item-container[checkable] > smart-menu-item > .smart-menu-item-label-container,\r\n  .smart-menu-drop-down.smart-drop-down-repositioned[right-to-left][checkboxes] .smart-menu-item-container[checkable] > smart-menu-items-group > .smart-menu-item-label-container {\r\n    padding-left: 10px;\r\n    padding-right: 35px; }\r\n  .smart-menu-drop-down.smart-drop-down-repositioned[right-to-left][checkboxes] .smart-menu-item-container[checkable] > smart-menu-item[checked] > .smart-menu-item-label-container:after,\r\n  .smart-menu-drop-down.smart-drop-down-repositioned[right-to-left][checkboxes] .smart-menu-item-container[checkable] > smart-menu-items-group[checked] > .smart-menu-item-label-container:after {\r\n    left: initial;\r\n    right: 10px; }\r\n\r\n.smart-menu-minimized-items-container[right-to-left] {\r\n  left: initial;\r\n  right: 100%; }\r\n  .smart-menu-minimized-items-container[right-to-left] .smart-menu-item-shortcut,\r\n  .smart-menu-minimized-items-container[right-to-left] smart-menu-items-group .smart-menu-items-group-arrow {\r\n    margin-right: initial;\r\n    margin-left: initial; }\r\n  .smart-menu-minimized-items-container[right-to-left].smart-drop-down-repositioned {\r\n    left: initial;\r\n    right: calc(-1 * var(--smart-border-width)); }\r\n    .smart-menu-minimized-items-container[right-to-left].smart-drop-down-repositioned .smart-menu-drop-down {\r\n      left: initial;\r\n      right: 100%; }\r\n  .smart-menu-minimized-items-container[right-to-left][checkboxes][checkable] > smart-menu-item > .smart-menu-item-label-container,\r\n  .smart-menu-minimized-items-container[right-to-left][checkboxes][checkable] > smart-menu-items-group > .smart-menu-item-label-container {\r\n    padding-left: 10px;\r\n    padding-right: 35px; }\r\n  .smart-menu-minimized-items-container[right-to-left][checkboxes][checkable] > smart-menu-item[checked] > .smart-menu-item-label-container:after,\r\n  .smart-menu-minimized-items-container[right-to-left][checkboxes][checkable] > smart-menu-items-group[checked] > .smart-menu-item-label-container:after {\r\n    left: initial;\r\n    right: 10px; }\r\n', ""]),
        t.exports = e
    },
    4: function(t, e, r) {
        (e = r(0)(!1)).push([t.i, '/* all elements */\r\nsmart-accordion,\r\nsmart-button,\r\nsmart-toggle-button,\r\nsmart-repeat-button,\r\nsmart-switch-button,\r\nsmart-slider,\r\nsmart-led,\r\nsmart-tank,\r\nsmart-check-box,\r\nsmart-calendar,\r\nsmart-carousel,\r\nsmart-card,\r\nsmart-radio-button,\r\nsmart-progress-bar,\r\nsmart-circular-progress-bar,\r\nsmart-scroll-bar,\r\nsmart-gauge,\r\nsmart-grid,\r\nsmart-numeric-text-box,\r\nsmart-list-box,\r\nsmart-combo-box,\r\nsmart-docking-layout,\r\nsmart-drop-down-list,\r\nsmart-drop-down-button,\r\nsmart-multi-split-button,\r\nsmart-power-button,\r\nsmart-text-box,\r\nsmart-multiline-text-box,\r\nsmart-password-text-box,\r\nsmart-masked-text-box,\r\nsmart-tabs,\r\nsmart-date-time-picker,\r\nsmart-array,\r\nsmart-time-picker,\r\nsmart-menu,\r\nsmart-list-menu,\r\nsmart-window,\r\nsmart-alert-window,\r\nsmart-prompt-window,\r\nsmart-multiline-prompt-window,\r\nsmart-progress-window,\r\nsmart-tabs-window,\r\nsmart-dialog-window,\r\nsmart-pager,\r\nsmart-progress-window,\r\nsmart-wait-window,\r\nsmart-splitter,\r\nsmart-tree,\r\nsmart-filter-panel,\r\nsmart-breadcrumb,\r\nsmart-color-panel,\r\nsmart-color-picker,\r\nsmart-sort-panel,\r\nsmart-group-panel,\r\nsmart-column-panel,\r\nsmart-multi-column-filter-panel,\r\nsmart-query-builder,\r\nsmart-card-view,\r\nsmart-tooltip,\r\nsmart-layout,\r\nsmart-path,\r\nsmart-kanban,\r\nsmart-gantt-chart,\r\nsmart-sheduler,\r\nsmart-pivot-panel {\r\n    padding: 0px;\r\n    margin: 0px;\r\n    overflow: hidden;\r\n    display: block;\r\n}\r\n\r\n.smart-element {\r\n    outline: none;\r\n    box-sizing: border-box;\r\n    font-family: var(--smart-font-family);\r\n    font-size: var(--smart-font-size);\r\n    font-weight: var(--smart-font-weight);\r\n    /* Apple iOS specific browser CSS variable used for area highlighting on click. Reference link for details:\r\n        https://developer.apple.com/library/content/documentation/AppleApplications/Reference/SafariWebContent/AdjustingtheTextSize/AdjustingtheTextSize.html#//apple_ref/doc/uid/TP40006510-SW5 */\r\n    -webkit-tap-highlight-color: transparent;\r\n    background: var(--smart-background);\r\n    color: var(--smart-background-color);\r\n}\r\n\r\n.smart-root {\r\n    width: 100%;\r\n    height: 100%;\r\n    padding: 0;\r\n    margin: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\nsmart-button[disabled],\r\nsmart-calendar[disabled],\r\nsmart-combo-box[disabled],\r\nsmart-chip[disabled],\r\nsmart-toggle-button[disabled],\r\nsmart-repeat-button[disabled],\r\nsmart-switch-button[disabled],\r\nsmart-slider[disabled],\r\nsmart-led[disabled],\r\nsmart-tank[disabled],\r\nsmart-check-box[disabled],\r\nsmart-radio-button[disabled],\r\nsmart-progress-bar[disabled],\r\nsmart-circular-progress-bar[disabled],\r\nsmart-gauge[disabled],\r\nsmart-grid[disabled],\r\nsmart-numeric-text-box[disabled],\r\nsmart-list-item[disabled],\r\nsmart-list-box[disabled],\r\nsmart-drop-down-list[disabled],\r\nsmart-drop-down-button[disabled],\r\nsmart-multi-split-button[disabled],\r\nsmart-scroll-bar[disabled],\r\nsmart-power-button[disabled],\r\nsmart-text-box[disabled],\r\nsmart-multiline-text-box[disabled],\r\nsmart-password-text-box[disabled],\r\nsmart-tab[disabled],\r\nsmart-tabs[disabled],\r\nsmart-time-picker[disabled],\r\nsmart-menu-item[disabled],\r\nsmart-menu-items-group[disabled],\r\nsmart-menu[disabled],\r\nsmart-list-menu[disabled],\r\nsmart-window[disabled],\r\nsmart-dialog-window[disabled],\r\nsmart-progress-window[disabled],\r\nsmart-wait-window[disabled],\r\nsmart-alert-window[disabled],\r\nsmart-prompt-window[disabled],\r\nsmart-card[disabled],\r\nsmart-multiline-prompt-window[disabled],\r\nsmart-splitter[disabled],\r\nsmart-tree-item[disabled]>.smart-tree-item-label-container,\r\nsmart-tree-items-group[disabled]>.smart-tree-item-label-container,\r\nsmart-tree[disabled],\r\nsmart-docking-layout[disabled],\r\nsmart-filter-panel[disabled],\r\nsmart-breadcrumb[disabled],\r\nsmart-pager[disabled],\r\nsmart-pager .smart-pager-button[disabled],\r\nsmart-color-panel[disabled],\r\nsmart-color-picker[disabled],\r\nsmart-input[disabled],\r\nsmart-check-input[disabled],\r\nsmart-number-input[disabled],\r\nsmart-multi-input[disabled],\r\nsmart-multi-combo-input[disabled],\r\nsmart-date-input[disabled],\r\nsmart-time-input[disabled],\r\nsmart-date-range-input[disabled],\r\nsmart-password-input[disabled],\r\nsmart-text-area[disabled],\r\nsmart-sort-panel[disabled],\r\nsmart-group-panel[disabled],\r\nsmart-column-panel[disabled],\r\nsmart-multi-column-filter-panel[disabled],\r\nsmart-card-view[disabled],\r\nsmart-query-builder[disabled],\r\nsmart-date-time-picker[disabled],\r\nsmart-layout[disabled],\r\nsmart-path[disabled],\r\nsmart-kanban[disabled],\r\nsmart-gantt[disabled],\r\nsmart-gantt-chart[disabled],\r\nsmart-scheduler[disabled],\r\nsmart-button-group[disabled],\r\nsmart-table[disabled],\r\nsmart-pivot-table[disabled],\r\nsmart-notification-panel[disabled],\r\nsmart-formatting-panel[disabled],\r\nsmart-color-input[disabled],\r\nsmart-editor[disabled] {\r\n    opacity: 0.55;\r\n    cursor: default;\r\n    pointer-events: none;\r\n    user-select: none;\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n}\r\n\r\nsmart-accordion,\r\nsmart-calendar,\r\nsmart-card-view,\r\nsmart-button,\r\nsmart-color-panel,\r\nsmart-docking-layout,\r\nsmart-date-time-picker,\r\nsmart-gantt-chart,\r\nsmart-scheduler,\r\nsmart-grid,\r\nsmart-menu,\r\nsmart-list-menu,\r\nsmart-list-box,\r\nsmart-scroll-viewer,\r\nsmart-progress-bar,\r\nsmart-pager,\r\nsmart-splitter,\r\nsmart-tank,\r\nsmart-time-picker,\r\nsmart-tree,\r\nsmart-text-box,\r\nsmart-multiline-text-box,\r\nsmart-layout,\r\n.smart-window,\r\nsmart-kanban,\r\nsmart-sort-panel,\r\nsmart-button-group,\r\nsmart-group-panel,\r\nsmart-column-panel,\r\nsmart-multi-column-filter-panel,\r\nsmart-formatting-panel {\r\n    border-color: var(--smart-border);\r\n    border-top-left-radius: var(--smart-border-top-left-radius);\r\n    border-top-right-radius: var(--smart-border-top-right-radius);\r\n    border-bottom-left-radius: var(--smart-border-bottom-left-radius);\r\n    border-bottom-right-radius: var(--smart-border-bottom-right-radius);\r\n    border-width: var(--smart-border-width);\r\n    border-style: solid;\r\n}\r\n\r\nsmart-numeric-text-box.smart-element,\r\nsmart-masked-text-box.smart-element,\r\nsmart-multiline-text-box.smart-element,\r\nsmart-text-box.smart-element,\r\nsmart-drop-down-button.smart-element,\r\nsmart-drop-down-list.smart-element,\r\nsmart-combo-box.smart-element,\r\nsmart-password-text-box.smart-element,\r\nsmart-multi-split-button.smart-element,\r\nsmart-switch-button.smart-element,\r\nsmart-multiline-text-box.smart-element,\r\nsmart-date-time-picker.smart-element,\r\nsmart-pager.smart-element,\r\nsmart-menu.smart-element,\r\nsmart-menu.smart-element,\r\nsmart-numeric-text-box.smart-element,\r\nsmart-tabs.smart-element,\r\nsmart-tank.smart-element,\r\nsmart-slider.smart-element,\r\nsmart-filter-panel.smart-element,\r\nsmart-color-panel.smart-element,\r\nsmart-color-picker.smart-element,\r\nsmart-query-builder.smart-element,\r\nsmart-card-view.smart-element,\r\nsmart-path.smart-element,\r\nsmart-kanban.smart-element {\r\n    overflow: visible;\r\n}\r\n\r\n.smart-disabled {\r\n    opacity: 0.55;\r\n    cursor: default;\r\n    pointer-events: none;\r\n    user-select: none;\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n}\r\n\r\n/*\r\n    Common code for Box Components with Content and Action buttons.\r\n*/\r\n.smart-element input::selection,\r\n.smart-input::selection {\r\n    background: var(--smart-editor-selection);\r\n    color: var(--smart-editor-selection-color);\r\n}\r\n\r\n/* Style for standard HTML scrollbars when dark theme is applied (limited browser support) */\r\n@media (hover: hover) {\r\n\r\n    body[theme="dark"],\r\n    .smart-element[theme="dark"] {\r\n        scrollbar-color: var(--smart-scroll-bar-thumb-background) var(--smart-scroll-bar-track-background);\r\n    }\r\n\r\n    body[theme="dark"]::-webkit-scrollbar,\r\n    body[theme="dark"] ::-webkit-scrollbar {\r\n        background-color: var(--smart-background);\r\n    }\r\n\r\n    body[theme="dark"]::-webkit-scrollbar-track,\r\n    body[theme="dark"] ::-webkit-scrollbar-track,\r\n    body[theme="dark"]::-webkit-scrollbar-track-piece,\r\n    body[theme="dark"] ::-webkit-scrollbar-track-piece {\r\n        background-color: var(--smart-scroll-bar-track-background);\r\n    }\r\n\r\n    body[theme="dark"]::-webkit-scrollbar-thumb,\r\n    body[theme="dark"] ::-webkit-scrollbar-thumb {\r\n        border: 1px solid var(--smart-scroll-bar-thumb-border);\r\n        background-color: var(--smart-scroll-bar-thumb-background);\r\n    }\r\n\r\n    body[theme="dark"]::-webkit-scrollbar-thumb:hover,\r\n    body[theme="dark"] ::-webkit-scrollbar-thumb:hover {\r\n        border-color: var(--smart-scroll-bar-thumb-border-hover);\r\n        background-color: var(--smart-scroll-bar-thumb-background-hover);\r\n    }\r\n\r\n    body[theme="dark"]::-webkit-scrollbar-button,\r\n    body[theme="dark"] ::-webkit-scrollbar-button {\r\n        background-color: var(--smart-scroll-bar-button-background);\r\n    }\r\n}', ""]),
        t.exports = e
    },
    5: function(t, e, r) {
        (e = r(0)(!1)).push([t.i, ".smart-drop-down-box {\r\n  background: var(--smart-surface);\r\n  border-color: var(--smart-border);\r\n  border-top-left-radius: var(--smart-border-top-left-radius);\r\n  border-bottom-left-radius: var(--smart-border-bottom-left-radius);\r\n  border-top-right-radius: var(--smart-border-top-right-radius);\r\n  border-bottom-right-radius: var(--smart-border-bottom-right-radius);\r\n  overflow: initial;\r\n  font-family: var(--smart-font-family);\r\n  font-size: var(--smart-font-size);\r\n  outline: none;\r\n  height: var(--smart-editor-height); }\r\n  .smart-drop-down-box > .smart-container, .smart-drop-down-box.smart-container {\r\n    display: flex;\r\n    position: relative;\r\n    align-items: center; }\r\n    .smart-drop-down-box > .smart-container > .smart-content, .smart-drop-down-box.smart-container > .smart-content {\r\n      position: relative;\r\n      display: flex;\r\n      width: 100%;\r\n      height: 100%; }\r\n  .smart-drop-down-box .smart-buttons-container {\r\n    width: inherit;\r\n    height: inherit;\r\n    display: inherit;\r\n    flex-direction: inherit;\r\n    cursor: inherit;\r\n    position: inherit;\r\n    overflow: hidden;\r\n    min-height: inherit; }\r\n  .smart-drop-down-box .smart-action-button {\r\n    display: flex;\r\n    padding-left: var(--smart-editor-label-padding);\r\n    align-content: center;\r\n    outline: 1px solid transparent;\r\n    height: 100%;\r\n    width: calc(100% - var(--smart-editor-addon-width));\r\n    flex-wrap: wrap;\r\n    overflow: hidden;\r\n    position: relative;\r\n    border-style: solid;\r\n    border-color: var(--smart-border);\r\n    border-width: var(--smart-border-width);\r\n    align-items: center;\r\n    border-right: none;\r\n    border-top-left-radius: var(--smart-border-top-left-radius);\r\n    border-bottom-left-radius: var(--smart-border-bottom-left-radius);\r\n    user-select: none;\r\n    white-space: nowrap; }\r\n    .smart-drop-down-box .smart-action-button .smart-input {\r\n      color: inherit;\r\n      background: inherit;\r\n      border: none;\r\n      width: calc(100% - var(--smart-editor-addon-width));\r\n      height: 100%;\r\n      outline: none;\r\n      text-overflow: ellipsis; }\r\n      .smart-drop-down-box .smart-action-button .smart-input::placeholder {\r\n        color: inherit; }\r\n  .smart-drop-down-box .smart-drop-down-button {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    width: var(--smart-editor-addon-width);\r\n    min-width: var(--smart-editor-addon-width);\r\n    color: inherit;\r\n    outline: 1px solid transparent;\r\n    overflow: hidden;\r\n    position: relative;\r\n    background-color: var(--smart-surface);\r\n    border-width: var(--smart-border-width);\r\n    border-style: solid;\r\n    border-color: var(--smart-border);\r\n    border-left: none;\r\n    color: var(--smart-surface-color);\r\n    border-top-right-radius: var(--smart-border-top-right-radius);\r\n    border-bottom-right-radius: var(--smart-border-bottom-right-radius);\r\n    cursor: pointer; }\r\n    .smart-drop-down-box .smart-drop-down-button .smart-drop-down-button-icon {\r\n      pointer-events: none;\r\n      width: 100%;\r\n      height: 100%;\r\n      display: flex;\r\n      justify-content: center;\r\n      align-items: center;\r\n      transform-origin: center;\r\n      font-family: var(--smart-font-family-icon); }\r\n      .smart-drop-down-box .smart-drop-down-button .smart-drop-down-button-icon:after {\r\n        content: var(--smart-icon-arrow-down);\r\n        font-size: var(--smart-arrow-size); }\r\n    .smart-drop-down-box .smart-drop-down-button[active] {\r\n      border-color: var(--smart-ui-state-border-active);\r\n      background-color: var(--smart-ui-state-active);\r\n      color: var(--smart-ui-state-color-active); }\r\n    .smart-drop-down-box .smart-drop-down-button[top] .smart-drop-down-button-icon:after, .smart-drop-down-box .smart-drop-down-button[center-top] .smart-drop-down-button-icon:after {\r\n      transform: rotate(180deg); }\r\n  .smart-drop-down-box .smart-drop-down {\r\n    font-family: var(--smart-font-family);\r\n    font-size: var(--smart-font-size); }\r\n    .smart-drop-down-box .smart-drop-down.smart-visibility-hidden {\r\n      transform: scale(0);\r\n      transition: transform 0.2s ease-in;\r\n      transform-origin: left top 0px; }\r\n  .smart-drop-down-box[drop-down-button-position=\"top\"] .smart-action-button, .smart-drop-down-box[drop-down-button-position=\"bottom\"] .smart-action-button {\r\n    min-height: var(--smart-editor-height);\r\n    padding-left: initial; }\r\n  .smart-drop-down-box[drop-down-button-position=\"top\"] .smart-drop-down-button,\r\n  .smart-drop-down-box[drop-down-button-position=\"top\"] .smart-action-button, .smart-drop-down-box[drop-down-button-position=\"bottom\"] .smart-drop-down-button,\r\n  .smart-drop-down-box[drop-down-button-position=\"bottom\"] .smart-action-button {\r\n    width: 100%;\r\n    border: var(--smart-border-width) solid var(--smart-border);\r\n    height: 50%;\r\n    justify-content: center; }\r\n  .smart-drop-down-box[drop-down-button-position=\"top\"] {\r\n    min-height: calc(2 * var(--smart-editor-height)); }\r\n    .smart-drop-down-box[drop-down-button-position=\"top\"] .smart-content {\r\n      flex-direction: column-reverse; }\r\n    .smart-drop-down-box[drop-down-button-position=\"top\"] .smart-drop-down-button {\r\n      border-bottom: initial;\r\n      border-top-left-radius: var(--smart-border-top-left-radius);\r\n      border-bottom-left-radius: 0;\r\n      border-top-right-radius: var(--smart-border-top-right-radius);\r\n      border-bottom-right-radius: 0; }\r\n    .smart-drop-down-box[drop-down-button-position=\"top\"] .smart-action-button {\r\n      border-top-left-radius: 0;\r\n      border-bottom-left-radius: var(--smart-border-bottom-left-radius);\r\n      border-top-right-radius: 0;\r\n      border-bottom-right-radius: var(--smart-border-bottom-right-radius); }\r\n    .smart-drop-down-box[drop-down-button-position=\"top\"]:not([drop-down-open-mode=\"dropDownButton\"]) .smart-action-button {\r\n      border-top: initial; }\r\n  .smart-drop-down-box[drop-down-button-position=\"bottom\"] {\r\n    min-height: calc(2 * var(--smart-editor-height)); }\r\n    .smart-drop-down-box[drop-down-button-position=\"bottom\"] .smart-content {\r\n      flex-direction: column; }\r\n    .smart-drop-down-box[drop-down-button-position=\"bottom\"] .smart-action-button {\r\n      border-bottom: initial;\r\n      border-top-left-radius: var(--smart-border-top-left-radius);\r\n      border-bottom-left-radius: 0;\r\n      border-top-right-radius: var(--smart-border-top-right-radius);\r\n      border-bottom-right-radius: 0; }\r\n    .smart-drop-down-box[drop-down-button-position=\"bottom\"] .smart-drop-down-button {\r\n      border-top-left-radius: 0;\r\n      border-bottom-left-radius: var(--smart-border-bottom-left-radius);\r\n      border-top-right-radius: 0;\r\n      border-bottom-right-radius: var(--smart-border-bottom-right-radius); }\r\n    .smart-drop-down-box[drop-down-button-position=\"bottom\"]:not([drop-down-open-mode=\"dropDownButton\"]) .smart-drop-down-button {\r\n      border-top: initial; }\r\n  .smart-drop-down-box[drop-down-button-position=\"left\"] > .smart-container > .smart-content, .smart-drop-down-box[drop-down-button-position=\"left\"].smart-container > .smart-content {\r\n    flex-direction: row-reverse; }\r\n  .smart-drop-down-box[drop-down-button-position=\"left\"] .smart-action-button {\r\n    padding-right: var(--smart-editor-label-padding);\r\n    border-right: var(--smart-border-width) solid var(--smart-border);\r\n    border-color: var(--smart-border);\r\n    border-top-left-radius: 0px;\r\n    border-bottom-left-radius: 0px;\r\n    border-top-right-radius: var(--smart-border-top-right-radius);\r\n    border-bottom-right-radius: var(--smart-border-bottom-right-radius);\r\n    padding-left: initial;\r\n    flex-direction: row-reverse; }\r\n  .smart-drop-down-box[drop-down-button-position=\"left\"] .smart-drop-down-button {\r\n    border-left: var(--smart-border-width) solid var(--smart-border);\r\n    border-color: var(--smart-border);\r\n    border-top-left-radius: var(--smart-border-top-left-radius);\r\n    border-bottom-left-radius: var(--smart-border-bottom-left-radius);\r\n    border-top-right-radius: 0px;\r\n    border-bottom-right-radius: 0px;\r\n    border-right: initial; }\r\n    .smart-drop-down-box[drop-down-button-position=\"left\"] .smart-drop-down-button[selected] {\r\n      border-right: initial; }\r\n  .smart-drop-down-box[drop-down-button-position=\"left\"]:not([drop-down-open-mode=\"dropDownButton\"]) .smart-action-button {\r\n    border-left: initial; }\r\n  .smart-drop-down-box[drop-down-button-position=\"right\"] .smart-action-button {\r\n    padding-left: var(--smart-editor-label-padding); }\r\n  .smart-drop-down-box[drop-down-button-position=\"none\"] .smart-action-button {\r\n    border-right: var(--smart-border-width) solid var(--smart-border);\r\n    border-top-right-radius: var(--smart-border-top-right-radius);\r\n    border-bottom-right-radius: var(--smart-border-bottom-right-radius);\r\n    width: 100%;\r\n    padding-right: var(--smart-editor-label-padding); }\r\n  .smart-drop-down-box[drop-down-button-position=\"none\"] .smart-drop-down-button {\r\n    display: none; }\r\n  .smart-drop-down-box:not([drop-down-open-mode=\"dropDownButton\"]) .smart-action-button {\r\n    border-color: var(--smart-border);\r\n    background-color: var(--smart-surface);\r\n    color: var(--smart-surface-color); }\r\n  .smart-drop-down-box[drop-down-open-mode=\"dropDownButton\"] .smart-action-button {\r\n    border-color: var(--smart-border);\r\n    background-color: var(--smart-background);\r\n    color: var(--smart-background-color); }\r\n    .smart-drop-down-box[drop-down-open-mode=\"dropDownButton\"] .smart-action-button[active] {\r\n      border-color: var(--smart-ui-state-border-active);\r\n      background-color: var(--smart-ui-state-active);\r\n      color: var(--smart-ui-state-color-active); }\r\n  .smart-drop-down-box[drop-down-open-mode=\"dropDownButton\"] .smart-drop-down-button {\r\n    border-color: var(--smart-border);\r\n    background-color: var(--smart-surface);\r\n    color: var(--smart-surface-color);\r\n    border-left-style: solid;\r\n    border-left-width: var(--smart-border-width); }\r\n  .smart-drop-down-box[drop-down-open-mode=\"dropDownButton\"][drop-down-button-position=\"left\"]:not([hover]) .smart-drop-down-button:focus {\r\n    border-color: var(--smart-outline);\r\n    box-shadow: var(--smart-border-width) 0 0 0 var(--smart-outline); }\r\n  .smart-drop-down-box[drop-down-open-mode=\"dropDownButton\"][drop-down-button-position=\"left\"]:not([hover]) .smart-action-button:focus {\r\n    border-color: var(--smart-outline);\r\n    box-shadow: calc(-1 * var(--smart-border-width)) 0 0 0 var(--smart-outline); }\r\n  .smart-drop-down-box[drop-down-open-mode=\"dropDownButton\"][drop-down-button-position=\"right\"]:not([hover]) .smart-action-button:focus {\r\n    box-shadow: var(--smart-border-width) 0 0 0 var(--smart-outline);\r\n    border-color: var(--smart-outline);\r\n    z-index: 1; }\r\n  .smart-drop-down-box[drop-down-open-mode=\"dropDownButton\"]:not([drop-down-button-position]):not([hover]) .smart-drop-down-button:focus {\r\n    border-color: var(--smart-outline); }\r\n  .smart-drop-down-box[drop-down-open-mode=\"dropDownButton\"]:not([drop-down-button-position]):not([hover]) .smart-action-button:focus {\r\n    box-shadow: var(--smart-border-width) 0 0 0 var(--smart-outline);\r\n    border-color: var(--smart-outline);\r\n    z-index: 1; }\r\n  .smart-drop-down-box[resizing] {\r\n    user-select: none;\r\n    touch-action: none; }\r\n  .smart-drop-down-box[readonly] input {\r\n    user-select: none;\r\n    -moz-user-select: none;\r\n    -webkit-user-select: none; }\r\n  .smart-drop-down-box[hover] .smart-drop-down-button {\r\n    border-color: var(--smart-ui-state-border-hover);\r\n    background-color: var(--smart-ui-state-hover);\r\n    color: var(--smart-ui-state-color-hover); }\r\n  .smart-drop-down-box[hover]:not([drop-down-open-mode=\"dropDownButton\"]) .smart-action-button {\r\n    border-color: var(--smart-ui-state-border-hover);\r\n    background-color: var(--smart-ui-state-hover);\r\n    color: var(--smart-ui-state-color-hover); }\r\n  .smart-drop-down-box[focus]:not([opened]) .smart-action-button[focus],\r\n  .smart-drop-down-box[focus]:not([opened]) .smart-drop-down-button[focus],\r\n  .smart-drop-down-box[focus]:not([opened]) .smart-action-button,\r\n  .smart-drop-down-box[focus]:not([opened]) .smart-drop-down-button {\r\n    outline: initial;\r\n    border-color: var(--smart-outline); }\r\n  .smart-drop-down-box[active] .smart-action-button, .smart-drop-down-box[active][focus][drop-down-open-mode=\"dropDownButton\"] .smart-action-button, .smart-drop-down-box[active][focus][drop-down-open-mode=\"dropDownButton\"] .smart-drop-down-button, .smart-drop-down-box[active][drop-down-open-mode=\"dropDownButton\"] .smart-drop-down-button:focus {\r\n    border-color: var(--smart-ui-state-border-active);\r\n    background-color: var(--smart-ui-state-active);\r\n    color: var(--smart-ui-state-color-active); }\r\n  .smart-drop-down-box[opened] .smart-drop-down-button .smart-drop-down-button-icon:after {\r\n    transform: rotate(180deg); }\r\n  .smart-drop-down-box[opened] .smart-drop-down-button[bottom] .smart-drop-down-button-icon:after, .smart-drop-down-box[opened] .smart-drop-down-button[center-bottom] .smart-drop-down-button-icon:after {\r\n    transform: rotate(180deg); }\r\n  .smart-drop-down-box[opened] .smart-drop-down-button[top] .smart-drop-down-button-icon:after, .smart-drop-down-box[opened] .smart-drop-down-button[center-top] .smart-drop-down-button-icon:after {\r\n    transform: rotate(0deg); }\r\n  .smart-drop-down-box[opened]:not([drop-down-open-mode=\"dropDownButton\"]):not(.outlined):not(.underlined) .smart-action-button, .smart-drop-down-box[opened]:not(.outlined):not(.underlined) .smart-drop-down-button {\r\n    border-color: var(--smart-ui-state-active);\r\n    background-color: var(--smart-ui-state-active);\r\n    color: var(--smart-ui-state-color-active); }\r\n  .smart-drop-down-box.auto-height {\r\n    height: auto;\r\n    min-height: var(--smart-editor-height); }\r\n    .smart-drop-down-box.auto-height > .smart-container, .smart-drop-down-box.auto-height.smart-container {\r\n      min-height: inherit; }\r\n    .smart-drop-down-box.auto-height .smart-action-button,\r\n    .smart-drop-down-box.auto-height .smart-content {\r\n      min-height: inherit; }\r\n    .smart-drop-down-box.auto-height .smart-action-button {\r\n      padding: 3px; }\r\n    .smart-drop-down-box.auto-height[label], .smart-drop-down-box.auto-height[hint] {\r\n      height: auto; }\r\n  .smart-drop-down-box[label][hint] > .smart-container {\r\n    display: flex;\r\n    position: relative;\r\n    align-items: center; }\r\n  .smart-drop-down-box[label] > .smart-container {\r\n    align-items: flex-end; }\r\n  .smart-drop-down-box[hint] > .smart-container {\r\n    align-items: flex-start; }\r\n  .smart-drop-down-box[hint] .smart-hint {\r\n    opacity: 0;\r\n    transition: opacity 0.2s cubic-bezier(0.4, 0, 0.6, 1);\r\n    top: 100%;\r\n    bottom: initial; }\r\n  .smart-drop-down-box[hint][focus] .smart-hint {\r\n    opacity: 1;\r\n    transition: opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1); }\r\n  .smart-drop-down-box[label] .smart-label, .smart-drop-down-box[hint] .smart-hint {\r\n    position: absolute;\r\n    left: 0;\r\n    bottom: 100%;\r\n    font-size: 12px;\r\n    width: 100%;\r\n    display: block;\r\n    padding: var(--smart-editor-label-padding);\r\n    pointer-events: none;\r\n    user-select: none;\r\n    -webkit-user-select: none;\r\n    -ms-user-select: none;\r\n    -moz-user-select: none;\r\n    text-align: initial;\r\n    line-height: initial;\r\n    vertical-align: initial; }\r\n  .smart-drop-down-box[disabled] > .smart-container {\r\n    cursor: default;\r\n    background-color: initial; }\r\n  .smart-drop-down-box[disabled] .smart-drop-down-button {\r\n    cursor: default;\r\n    background-color: initial; }\r\n  .smart-drop-down-box[disabled][selection-display-mode=\"tokens\"] .smart-action-button > span {\r\n    cursor: default; }\r\n  .smart-drop-down-box.underlined {\r\n    background-color: transparent;\r\n    border-width: 0px;\r\n    border-bottom-width: 1px;\r\n    background: var(--smart-background);\r\n    border-bottom-color: var(--smart-border); }\r\n    .smart-drop-down-box.underlined .smart-action-button {\r\n      border-top-color: transparent;\r\n      border-left-color: transparent;\r\n      border-right-color: transparent;\r\n      border-bottom-left-radius: 0;\r\n      background-color: transparent;\r\n      color: var(--smart-background-color); }\r\n      .smart-drop-down-box.underlined .smart-action-button input {\r\n        border-color: transparent !important; }\r\n      .smart-drop-down-box.underlined .smart-action-button[active] {\r\n        background-color: var(--smart-ui-state-active);\r\n        color: var(--smart-ui-state-color-active); }\r\n    .smart-drop-down-box.underlined .smart-spin-button {\r\n      background: var(--smart-background);\r\n      border-width: 0px; }\r\n      .smart-drop-down-box.underlined .smart-spin-button[hover] {\r\n        background: var(--smart-background);\r\n        color: var(--smart-ui-state-active); }\r\n      .smart-drop-down-box.underlined .smart-spin-button[active] {\r\n        background: var(--smart-background);\r\n        color: var(--smart-ui-state-active); }\r\n    .smart-drop-down-box.underlined .smart-drop-down-button {\r\n      background: var(--smart-background);\r\n      border-width: 0px;\r\n      border-bottom: 1px solid var(--smart-border) !important;\r\n      border-top-color: transparent;\r\n      border-left-color: transparent;\r\n      border-right-color: transparent; }\r\n      .smart-drop-down-box.underlined .smart-drop-down-button[hover] {\r\n        background: var(--smart-background);\r\n        color: var(--smart-ui-state-active); }\r\n      .smart-drop-down-box.underlined .smart-drop-down-button[active] {\r\n        background-color: var(--smart-ui-state-active);\r\n        color: var(--smart-ui-state-color-active); }\r\n    .smart-drop-down-box.underlined .smart-hint {\r\n      position: absolute;\r\n      top: 0;\r\n      left: 0;\r\n      right: 0;\r\n      bottom: 0;\r\n      display: block !important;\r\n      box-sizing: border-box;\r\n      padding: var(--smart-editor-label-padding);\r\n      color: var(--smart-background-color);\r\n      pointer-events: none;\r\n      font-size: 75%;\r\n      opacity: 0;\r\n      transition: color 0.2s, opacity 0.1s, font-size 0.2s, line-height 0.2s, margin-top 0.2s, top 0.2s;\r\n      margin-top: calc(0px - var(--smart-font-size)); }\r\n      .smart-drop-down-box.underlined .smart-hint:after {\r\n        content: \"\";\r\n        position: absolute;\r\n        left: 0;\r\n        bottom: -2px;\r\n        display: block;\r\n        width: 100%;\r\n        height: 2px;\r\n        background-color: var(--smart-primary);\r\n        transform-origin: bottom center;\r\n        transform: scaleX(0);\r\n        transition: transform 0.2s; }\r\n    .smart-drop-down-box.underlined:not([focus]) .smart-hint {\r\n      margin-top: 0px; }\r\n    .smart-drop-down-box.underlined[focus] input {\r\n      border-color: transparent !important; }\r\n    .smart-drop-down-box.underlined[focus] .smart-action-button {\r\n      border-color: transparent !important; }\r\n    .smart-drop-down-box.underlined[focus] .smart-drop-down-button,\r\n    .smart-drop-down-box.underlined[focus] .smart-hint {\r\n      color: var(--smart-primary) !important;\r\n      opacity: 1;\r\n      border-color: transparent !important; }\r\n    .smart-drop-down-box.underlined[focus] .smart-hint:after {\r\n      transform: scale(1); }\r\n    .smart-drop-down-box.underlined[opened] .smart-action-button {\r\n      border-top-color: transparent;\r\n      border-left-color: transparent;\r\n      border-right-color: transparent;\r\n      border-bottom-left-radius: 0;\r\n      background-color: transparent;\r\n      color: var(--smart-background-color); }\r\n    .smart-drop-down-box.underlined:not([opened]):not([hover]) .smart-drop-down-button {\r\n      background-color: transparent;\r\n      color: var(--smart-background-color); }\r\n      .smart-drop-down-box.underlined:not([opened]):not([hover]) .smart-drop-down-button:not([hover]) {\r\n        border-bottom-left-radius: 0; }\r\n      .smart-drop-down-box.underlined:not([opened]):not([hover]) .smart-drop-down-button:not([active]):not([hover]) {\r\n        border-radius: initial; }\r\n    .smart-drop-down-box.underlined:not([opened]) .smart-action-button:not([active]):not([hover]) {\r\n      border-radius: initial; }\r\n    .smart-drop-down-box.underlined[hover]:not([drop-down-open-mode=\"dropDownButton\"]):not([opened]) .smart-action-button {\r\n      border-bottom-left-radius: 0; }\r\n      .smart-drop-down-box.underlined[hover]:not([drop-down-open-mode=\"dropDownButton\"]):not([opened]) .smart-action-button:not([active]) {\r\n        background-color: transparent; }\r\n    .smart-drop-down-box.underlined[hover]:not([opened]) .smart-action-button, .smart-drop-down-box.underlined[hover]:not([opened]):not([drop-down-open-mode=\"dropDownButton\"]) .smart-action-button:not([active]) {\r\n      border-top-color: transparent;\r\n      border-left-color: transparent;\r\n      border-right-color: transparent; }\r\n    .smart-drop-down-box.underlined[drop-down-open-mode=\"dropDownButton\"]:not([drop-down-button-position=\"left\"]):not([drop-down-button-position=\"top\"]):not([drop-down-button-position=\"bottom\"]):not([hover]) .smart-action-button:focus {\r\n      box-shadow: none;\r\n      z-index: initial; }\r\n    .smart-drop-down-box.underlined[drop-down-open-mode=\"dropDownButton\"][drop-down-button-position=\"left\"]:not([hover]) .smart-drop-down-button:focus {\r\n      box-shadow: none; }\r\n    .smart-drop-down-box.underlined[drop-down-open-mode=\"dropDownButton\"][hover]:not([opened]) .smart-action-button[hover] {\r\n      border-top-color: transparent;\r\n      border-left-color: transparent;\r\n      border-right-color: transparent; }\r\n    .smart-drop-down-box.underlined.smart-invalid .smart-drop-down-button {\r\n      border-bottom-color: rgba(var(--smart-error-rgb), 0.5) !important; }\r\n  .smart-drop-down-box.outlined {\r\n    background-color: transparent;\r\n    padding-top: 6px;\r\n    height: auto;\r\n    min-height: 0;\r\n    border: none;\r\n    background: transparent; }\r\n    .smart-drop-down-box.outlined > .smart-container > .smart-content {\r\n      padding: 4px 3px 4px;\r\n      border: 1px solid var(--smart-border);\r\n      height: auto;\r\n      background: var(--smart-background);\r\n      border-radius: var(--smart-border-radius);\r\n      z-index: 5; }\r\n    .smart-drop-down-box.outlined .smart-action-button {\r\n      border: none;\r\n      background: var(--smart-background) !important;\r\n      border-color: var(--smart-border) !important;\r\n      color: var(--smart-background-color) !important; }\r\n      .smart-drop-down-box.outlined .smart-action-button input {\r\n        padding: 0;\r\n        border: none !important;\r\n        z-index: initial; }\r\n    .smart-drop-down-box.outlined .smart-spin-button {\r\n      background: var(--smart-background);\r\n      border-width: 0px; }\r\n      .smart-drop-down-box.outlined .smart-spin-button[hover] {\r\n        background: var(--smart-background);\r\n        color: var(--smart-ui-state-active); }\r\n      .smart-drop-down-box.outlined .smart-spin-button[active] {\r\n        background: var(--smart-background);\r\n        color: var(--smart-ui-state-active); }\r\n    .smart-drop-down-box.outlined .smart-drop-down-button {\r\n      background: var(--smart-background);\r\n      border-width: 0px;\r\n      padding: 8px 0px;\r\n      background: var(--smart-background) !important;\r\n      border-color: var(--smart-border) !important;\r\n      color: var(--smart-background-color) !important; }\r\n      .smart-drop-down-box.outlined .smart-drop-down-button.smart-calendar-button[hover] {\r\n        background: var(--smart-background);\r\n        color: var(--smart-ui-state-active); }\r\n      .smart-drop-down-box.outlined .smart-drop-down-button.smart-calendar-button[active] {\r\n        background: var(--smart-background);\r\n        color: var(--smart-ui-state-active); }\r\n    .smart-drop-down-box.outlined.smart-element-init .smart-hint {\r\n      visibility: hidden;\r\n      display: none !important; }\r\n    .smart-drop-down-box.outlined:not([focus])[hint] .smart-hint {\r\n      font-size: var(--smart-font-size);\r\n      line-height: 48px;\r\n      opacity: 0; }\r\n    .smart-drop-down-box.outlined[hint] .smart-hint {\r\n      position: absolute;\r\n      top: 0;\r\n      left: 0;\r\n      display: flex !important;\r\n      border-color: var(--smart-border) !important;\r\n      width: 100%;\r\n      max-height: 100%;\r\n      color: var(--smart-background-color);\r\n      font-size: 75%;\r\n      line-height: 15px;\r\n      cursor: text;\r\n      margin-top: -6px;\r\n      z-index: 10;\r\n      padding: 0;\r\n      transition: color 0.2s, font-size 0.2s, opacity 0.1s, font-size 0.2s, line-height 0.2s; }\r\n      .smart-drop-down-box.outlined[hint] .smart-hint:before, .smart-drop-down-box.outlined[hint] .smart-hint:after {\r\n        content: \"\";\r\n        display: block;\r\n        box-sizing: border-box;\r\n        margin-top: 6px;\r\n        border-top: solid 1px;\r\n        border-top-color: var(--smart-border) !important;\r\n        min-width: 10px;\r\n        height: 8px;\r\n        pointer-events: none;\r\n        box-shadow: inset 0 1px transparent;\r\n        transition: border-color 0.2s, box-shadow 0.2s; }\r\n      .smart-drop-down-box.outlined[hint] .smart-hint:before {\r\n        margin-right: 4px;\r\n        border-left: solid 1px transparent;\r\n        border-radius: 4px 0; }\r\n      .smart-drop-down-box.outlined[hint] .smart-hint:after {\r\n        flex-grow: 1;\r\n        margin-left: 4px;\r\n        border-right: solid 1px transparent;\r\n        border-radius: 0 4px; }\r\n    .smart-drop-down-box.outlined[focus] {\r\n      background-color: transparent; }\r\n      .smart-drop-down-box.outlined[focus] > .smart-container > .smart-content {\r\n        border-color: var(--smart-primary); }\r\n      .smart-drop-down-box.outlined[focus] .smart-drop-down-button {\r\n        color: var(--smart-ui-state-active) !important; }\r\n    .smart-drop-down-box.outlined[focus][hint] > .smart-container > .smart-content {\r\n      border-top-color: transparent !important; }\r\n    .smart-drop-down-box.outlined[focus][hint] .smart-hint {\r\n      color: var(--smart-primary);\r\n      opacity: 1; }\r\n      .smart-drop-down-box.outlined[focus][hint] .smart-hint:before, .smart-drop-down-box.outlined[focus][hint] .smart-hint:after {\r\n        border-top-color: var(--smart-primary) !important; }\r\n    .smart-drop-down-box.outlined[hover]:not([opened]):not([drop-down-open-mode=\"dropDownButton\"]) .smart-action-button:not([active]) {\r\n      background-color: transparent; }\r\n    .smart-drop-down-box.outlined:not([opened]) .smart-action-button:not([active]),\r\n    .smart-drop-down-box.outlined:not([opened]) .smart-drop-down-button {\r\n      background-color: transparent; }\r\n    .smart-drop-down-box.outlined[drop-down-open-mode=\"dropDownButton\"]:not([hover]) .smart-action-button:not([active]) {\r\n      background-color: transparent; }\r\n    .smart-drop-down-box.outlined.smart-invalid > .smart-container > .smart-content {\r\n      border-color: rgba(var(--smart-error-rgb), 0.5); }\r\n  .smart-drop-down-box[placeholder=\"\"][dropDownButtonPosition=\"none\"] .smart-drop-down-button, .smart-drop-down-box:not([placeholder])[dropDownButtonPosition=\"none\"] .smart-drop-down-button {\r\n    border-left-width: var(--smart-border-width);\r\n    border-left-style: solid;\r\n    border-top-left-radius: 0px;\r\n    border-bottom-left-radius: 0px;\r\n    border-top-right-radius: var(--smart-border-top-right-radius);\r\n    border-bottom-right-radius: var(--smart-border-bottom-right-radius); }\r\n  .smart-drop-down-box[placeholder=\"\"]:not([opened])[dropDownButtonPosition=\"none\"] .smart-drop-down-button:not([focus]), .smart-drop-down-box:not([placeholder]):not([opened])[dropDownButtonPosition=\"none\"] .smart-drop-down-button:not([focus]) {\r\n    border-color: var(--smart-border); }\r\n  .smart-drop-down-box:not([animation='none']) .smart-drop-down-button .smart-drop-down-button-icon:after {\r\n    transition: transform 0.2s; }\r\n  .smart-drop-down-box[drop-down-position=\"overlay-center\"] .smart-drop-down-button .smart-drop-down-button-icon:after {\r\n    content: var(--smart-icon-minus); }\r\n  .smart-drop-down-box.smart-invalid:not([drop-down-open-mode=\"dropDownButton\"]) .smart-action-button {\r\n    border-bottom-color: rgba(var(--smart-error-rgb), 0.5) !important; }\r\n  .smart-drop-down-box[right-to-left] {\r\n    direction: rtl; }\r\n    .smart-drop-down-box[right-to-left] .smart-label,\r\n    .smart-drop-down-box[right-to-left] .smart-hint {\r\n      direction: rtl; }\r\n    .smart-drop-down-box[right-to-left] .smart-drop-down-button:focus {\r\n      border-color: var(--smart-outline); }\r\n    .smart-drop-down-box[right-to-left]:not([hover]) .smart-action-button[focus],\r\n    .smart-drop-down-box[right-to-left]:not([hover]) .smart-drop-down-button[focus] {\r\n      border-color: var(--smart-outline); }\r\n    .smart-drop-down-box[right-to-left][drop-down-button-position=\"left\"] .smart-action-button {\r\n      flex-direction: row; }\r\n    .smart-drop-down-box[right-to-left][drop-down-button-position=\"right\"] > .smart-container > .smart-content {\r\n      flex-direction: row-reverse; }\r\n    .smart-drop-down-box[right-to-left][drop-down-button-position=\"left\"] .smart-action-button, .smart-drop-down-box[right-to-left]:not([drop-down-button-position]) .smart-action-button {\r\n      padding: 0 var(--smart-editor-label-padding) 0 0;\r\n      border-right: var(--smart-border-width) solid var(--smart-border);\r\n      border-top-left-radius: initial;\r\n      border-top-right-radius: var(--smart-border-top-right-radius);\r\n      border-bottom-left-radius: initial;\r\n      border-bottom-right-radius: var(--smart-border-bottom-right-radius); }\r\n    .smart-drop-down-box[right-to-left][drop-down-button-position=\"left\"] .smart-drop-down-button, .smart-drop-down-box[right-to-left]:not([drop-down-button-position]) .smart-drop-down-button {\r\n      border-left: var(--smart-border-width) solid var(--smart-border);\r\n      border-top-right-radius: initial;\r\n      border-bottom-right-radius: initial;\r\n      border-top-left-radius: var(--smart-border-top-left-radius);\r\n      border-bottom-left-radius: var(--smart-border-bottom-left-radius); }\r\n    .smart-drop-down-box[right-to-left][drop-down-button-position=\"left\"] > .smart-container > .smart-content, .smart-drop-down-box[right-to-left]:not([drop-down-button-position]) > .smart-container > .smart-content {\r\n      flex-direction: row; }\r\n    .smart-drop-down-box[right-to-left]:not([drop-down-open-mode=\"dropDownButton\"])[drop-down-button-position=\"left\"] .smart-action-button, .smart-drop-down-box[right-to-left]:not([drop-down-button-position]) .smart-action-button {\r\n      border-left: initial; }\r\n    .smart-drop-down-box[right-to-left]:not([drop-down-open-mode=\"dropDownButton\"]):not([drop-down-button-position]) .smart-drop-down-button, .smart-drop-down-box[right-to-left][drop-down-button-position=\"left\"] .smart-drop-down-button {\r\n      border-right: initial; }\r\n    .smart-drop-down-box[right-to-left][opened] .smart-drop-down-button,\r\n    .smart-drop-down-box[right-to-left][opened] .smart-action-button {\r\n      border-color: var(--smart-border-active); }\r\n    .smart-drop-down-box[right-to-left][drop-down-open-mode=\"dropDownButton\"][drop-down-button-position=\"right\"]:not([hover]) .smart-action-button:focus, .smart-drop-down-box[right-to-left][drop-down-open-mode=\"dropDownButton\"]:not([drop-down-button-position]):not([hover]) .smart-action-button:focus {\r\n      box-shadow: calc(-1 * var(--smart-border-width)) 0 0 0 var(--smart-outline); }\r\n\r\n.smart-drop-down.smart-drop-down-container {\r\n  box-shadow: var(--smart-elevation-8);\r\n  border-color: var(--smart-border);\r\n  font-size: var(--smart-font-size);\r\n  font-family: var(--smart-font-family);\r\n  background-color: var(--smart-background);\r\n  box-sizing: border-box;\r\n  outline: none;\r\n  border-width: var(--smart-border-width);\r\n  border-style: solid;\r\n  border-color: var(--smart-border);\r\n  display: flex;\r\n  flex-direction: column;\r\n  height: var(--smart-editor-drop-down-height);\r\n  max-height: var(--smart-editor-drop-down-max-height);\r\n  min-height: var(--smart-editor-drop-down-min-height);\r\n  width: var(--smart-editor-drop-down-width);\r\n  max-width: var(--smart-editor-drop-down-max-width);\r\n  min-width: var(--smart-editor-drop-down-min-width);\r\n  font-size: var(--smart-font-size);\r\n  font-family: var(--smart-font-family);\r\n  margin: calc(var(--smart-editor-drop-down-vertical-offset) + var(--smart-editor-drop-down-padding-size)) 0px;\r\n  padding: var(--smart-editor-drop-down-padding-size) 0 var(--smart-editor-drop-down-padding-size) 0 !important; }\r\n  .smart-drop-down.smart-drop-down-container smart-list-box:focus {\r\n    border-color: var(--smart-outline); }\r\n  .smart-drop-down.smart-drop-down-container .smart-drop-down-resize-bar {\r\n    position: relative;\r\n    width: 100%;\r\n    margin-top: 2.5px;\r\n    height: calc(var(--smart-editor-drop-down-resize-bar-height) - 2.5px);\r\n    touch-action: none; }\r\n  .smart-drop-down.smart-drop-down-container.smart-visibility-hidden {\r\n    transform: scale(0); }\r\n  .smart-drop-down.smart-drop-down-container.smart-drop-down-repositioned.smart-visibility-hidden {\r\n    top: 0;\r\n    left: 0; }\r\n  .smart-drop-down.smart-drop-down-container.smart-visibility-hidden.not-in-view {\r\n    left: -9999px;\r\n    top: -9999px;\r\n    transition: none; }\r\n  .smart-drop-down.smart-drop-down-container.smart-drop-down-repositioned {\r\n    background-color: var(--smart-background);\r\n    box-sizing: border-box;\r\n    outline: none;\r\n    border-width: var(--smart-border-width);\r\n    border-style: solid;\r\n    border-color: var(--smart-border);\r\n    display: flex;\r\n    flex-direction: column;\r\n    height: var(--smart-editor-drop-down-height);\r\n    max-height: var(--smart-editor-drop-down-max-height);\r\n    min-height: var(--smart-editor-drop-down-min-height);\r\n    width: var(--smart-editor-drop-down-width);\r\n    max-width: var(--smart-editor-drop-down-max-width);\r\n    min-width: var(--smart-editor-drop-down-min-width);\r\n    font-size: var(--smart-font-size);\r\n    font-family: var(--smart-font-family);\r\n    margin: calc(var(--smart-editor-drop-down-vertical-offset) + var(--smart-editor-drop-down-padding-size)) 0px;\r\n    padding: var(--smart-editor-drop-down-padding-size) 0 var(--smart-editor-drop-down-padding-size) 0 !important; }\r\n    .smart-drop-down.smart-drop-down-container.smart-drop-down-repositioned.smart-visibility-hidden.not-in-view {\r\n      left: -9999px;\r\n      top: -9999px;\r\n      transition: none; }\r\n    .smart-drop-down.smart-drop-down-container.smart-drop-down-repositioned[top], .smart-drop-down.smart-drop-down-container.smart-drop-down-repositioned[center-top] {\r\n      margin: calc(-1 * (var(--smart-editor-drop-down-vertical-offset) + 3px)) 0px; }\r\n.smart-drop-down.smart-date-time-drop-down {\r\n  width: var(--smart-editor-drop-down-width);\r\n  height: var(--smart-editor-drop-down-height); }\r\n  .smart-drop-down.smart-date-time-drop-down.smart-drop-down-repositioned {\r\n    width: var(--smart-editor-drop-down-width);\r\n    height: var(--smart-editor-drop-down-height);\r\n    padding: initial !important;\r\n    background-color: var(--smart-background);\r\n    box-sizing: border-box;\r\n    outline: none;\r\n    border-width: var(--smart-border-width);\r\n    border-style: solid;\r\n    border-color: var(--smart-border);\r\n    display: flex;\r\n    flex-direction: column;\r\n    height: var(--smart-editor-drop-down-height);\r\n    max-height: var(--smart-editor-drop-down-max-height);\r\n    min-height: var(--smart-editor-drop-down-min-height);\r\n    width: var(--smart-editor-drop-down-width);\r\n    max-width: var(--smart-editor-drop-down-max-width);\r\n    min-width: var(--smart-editor-drop-down-min-width);\r\n    font-size: var(--smart-font-size);\r\n    font-family: var(--smart-font-family);\r\n    margin: calc(var(--smart-editor-drop-down-vertical-offset) + var(--smart-editor-drop-down-padding-size)) 0px;\r\n    padding: var(--smart-editor-drop-down-padding-size) 0 var(--smart-editor-drop-down-padding-size) 0 !important; }\r\n  .smart-drop-down.smart-date-time-drop-down[drop-down-display-mode=\"calendar\"] {\r\n    height: calc(var(--smart-editor-drop-down-height) - var(--smart-calendar-title-height)) !important; }\r\n.smart-drop-down.smart-drop-down-color-picker.smart-drop-down-repositioned {\r\n  max-height: calc(var(--smart-editor-drop-down-max-height) + 50px); }\r\n.smart-drop-down[top] .smart-drop-down-resize-bar {\r\n  margin-top: 0;\r\n  margin-bottom: 2.5px; }\r\n.smart-drop-down[top].smart-drop-down-container.smart-drop-down-repositioned, .smart-drop-down[top].smart-drop-down-container.smart-drop-down-repositioned.smart-visibility-hidden {\r\n  top: initial;\r\n  bottom: calc(100% - var(--smart-border-width));\r\n  flex-direction: column-reverse; }\r\n.smart-drop-down[overlay-bottom], .smart-drop-down[overlay-center], .smart-drop-down[overlay-top] {\r\n  margin: unset; }\r\n.smart-drop-down:not([resize-mode='none']) smart-list-box {\r\n  position: relative;\r\n  width: 100%;\r\n  height: calc(100% - var(--smart-editor-drop-down-resize-bar-height));\r\n  border: none; }\r\n.smart-drop-down:not([resize-mode='none']) .smart-drop-down-resize-bar {\r\n  border-top: 1px solid var(--smart-border); }\r\n.smart-drop-down:not([resize-mode='none'])[top] .smart-drop-down-resize-bar {\r\n  border-top: initial;\r\n  border-bottom: 1px solid var(--smart-border); }\r\n.smart-drop-down[resize-mode][top] .smart-drop-down-resize-bar > div {\r\n  top: calc(50% - 1px);\r\n  /* Including the BorderBottom */ }\r\n.smart-drop-down[resize-mode='none'] smart-list-box {\r\n  width: 100%;\r\n  height: 100%;\r\n  position: relative;\r\n  border: none; }\r\n.smart-drop-down[resize-mode='none'] .smart-drop-down-resize-bar {\r\n  display: none;\r\n  cursor: default; }\r\n  .smart-drop-down[resize-mode='none'] .smart-drop-down-resize-bar > div {\r\n    display: none; }\r\n.smart-drop-down[resize-mode=\"vertical\"] .smart-drop-down-resize-bar > div, .smart-drop-down[resize-mode=\"both\"] .smart-drop-down-resize-bar > div {\r\n  display: initial;\r\n  position: absolute;\r\n  width: 5px;\r\n  height: 5px;\r\n  left: 50%;\r\n  /*top: 50%;*/\r\n  top: calc(50% + 1px);\r\n  /* Including the BorderTop */\r\n  transform: translate(-50%, -50%);\r\n  border: 1px solid var(--smart-border);\r\n  border-radius: 50%;\r\n  pointer-events: none; }\r\n  .smart-drop-down[resize-mode=\"vertical\"] .smart-drop-down-resize-bar > div:after, .smart-drop-down[resize-mode=\"vertical\"] .smart-drop-down-resize-bar > div:before, .smart-drop-down[resize-mode=\"both\"] .smart-drop-down-resize-bar > div:after, .smart-drop-down[resize-mode=\"both\"] .smart-drop-down-resize-bar > div:before {\r\n    position: absolute;\r\n    top: 50%;\r\n    transform: translate(-50%, -50%);\r\n    content: '';\r\n    width: 100%;\r\n    height: 100%;\r\n    border: 1px solid var(--smart-border);\r\n    border-radius: 50%;\r\n    pointer-events: none; }\r\n  .smart-drop-down[resize-mode=\"vertical\"] .smart-drop-down-resize-bar > div:after, .smart-drop-down[resize-mode=\"both\"] .smart-drop-down-resize-bar > div:after {\r\n    left: 500%; }\r\n  .smart-drop-down[resize-mode=\"vertical\"] .smart-drop-down-resize-bar > div:before, .smart-drop-down[resize-mode=\"both\"] .smart-drop-down-resize-bar > div:before {\r\n    left: -400%; }\r\n.smart-drop-down[resize-mode=\"vertical\"].smart-drop-down-container.smart-drop-down-repositioned .smart-drop-down-resize-bar > div, .smart-drop-down[resize-mode=\"both\"].smart-drop-down-container.smart-drop-down-repositioned .smart-drop-down-resize-bar > div {\r\n  width: 3px;\r\n  height: 3px; }\r\n.smart-drop-down[resize-mode=\"horizontal\"][resize-indicator] .smart-drop-down-resize-bar:before, .smart-drop-down[resize-mode=\"both\"][resize-indicator] .smart-drop-down-resize-bar:before {\r\n  width: 8px;\r\n  height: 5px;\r\n  font-family: var(--smart-font-family-icon);\r\n  content: var(--smart-icon-resize-horizontal);\r\n  position: absolute;\r\n  top: calc(100% - 8px);\r\n  left: calc(100% - 8px);\r\n  transform: rotate(-45deg);\r\n  font-size: 10px;\r\n  cursor: se-resize; }\r\n.smart-drop-down[resize-mode=\"horizontal\"][resize-indicator] .smart-drop-down-resize-bar:after, .smart-drop-down[resize-mode=\"both\"][resize-indicator] .smart-drop-down-resize-bar:after {\r\n  width: 8px;\r\n  height: 12px;\r\n  font-family: var(--smart-font-family-icon);\r\n  content: var(--smart-icon-resize-full);\r\n  position: absolute;\r\n  top: calc(100% - 12px);\r\n  left: calc(100% - 7px);\r\n  transform: rotate(-45deg) scaleX(2.25);\r\n  font-size: 10px;\r\n  cursor: e-resize; }\r\n.smart-drop-down[resize-mode=\"horizontal\"][top] .smart-drop-down-resize-bar:before, .smart-drop-down[resize-mode=\"both\"][top] .smart-drop-down-resize-bar:before {\r\n  transform: rotate(45deg);\r\n  top: calc(100% - 13px);\r\n  left: calc(100% - 4px); }\r\n.smart-drop-down[resize-mode=\"vertical\"] .smart-drop-down-resize-bar {\r\n  cursor: n-resize; }\r\n.smart-drop-down[resize-mode=\"horizontal\"] .smart-drop-down-resize-bar {\r\n  cursor: e-resize; }\r\n  .smart-drop-down[resize-mode=\"horizontal\"] .smart-drop-down-resize-bar > div {\r\n    display: none; }\r\n.smart-drop-down[resize-mode=\"both\"] .smart-drop-down-resize-bar {\r\n  cursor: nwse-resize; }\r\n.smart-drop-down[resize-mode=\"both\"][top] .smart-drop-down-resize-bar {\r\n  cursor: sw-resize; }\r\n\r\n.smart-drop-down-container.smart-drop-down-repositioned {\r\n  background-color: var(--smart-background);\r\n  box-sizing: border-box;\r\n  outline: none;\r\n  border-width: var(--smart-border-width);\r\n  border-style: solid;\r\n  border-color: var(--smart-border);\r\n  display: flex;\r\n  flex-direction: column;\r\n  height: var(--smart-editor-drop-down-height);\r\n  max-height: var(--smart-editor-drop-down-max-height);\r\n  min-height: var(--smart-editor-drop-down-min-height);\r\n  width: var(--smart-editor-drop-down-width);\r\n  max-width: var(--smart-editor-drop-down-max-width);\r\n  min-width: var(--smart-editor-drop-down-min-width);\r\n  font-size: var(--smart-font-size);\r\n  font-family: var(--smart-font-family);\r\n  margin: calc(var(--smart-editor-drop-down-vertical-offset) + var(--smart-editor-drop-down-padding-size)) 0px;\r\n  padding: var(--smart-editor-drop-down-padding-size) 0 var(--smart-editor-drop-down-padding-size) 0 !important; }\r\n  .smart-drop-down-container.smart-drop-down-repositioned.smart-visibility-hidden.not-in-view {\r\n    left: -9999px;\r\n    top: -9999px;\r\n    transition: none; }\r\n  .smart-drop-down-container.smart-drop-down-repositioned:focus {\r\n    border-color: var(--smart-border); }\r\n  .smart-drop-down-container.smart-drop-down-repositioned[overlay-bottom], .smart-drop-down-container.smart-drop-down-repositioned[overlay-center], .smart-drop-down-container.smart-drop-down-repositioned[overlay-top] {\r\n    margin: unset; }\r\n    .smart-drop-down-container.smart-drop-down-repositioned[overlay-bottom]:not([animation='none']), .smart-drop-down-container.smart-drop-down-repositioned[overlay-center]:not([animation='none']), .smart-drop-down-container.smart-drop-down-repositioned[overlay-top]:not([animation='none']) {\r\n      animation: smart-drop-down-list-smart-animate-opening 0.2s ease-out;\r\n      -webkit-transform-origin: center;\r\n      transform-origin: center; }\r\n      .smart-drop-down-container.smart-drop-down-repositioned[overlay-bottom]:not([animation='none']).smart-visibility-hidden, .smart-drop-down-container.smart-drop-down-repositioned[overlay-center]:not([animation='none']).smart-visibility-hidden, .smart-drop-down-container.smart-drop-down-repositioned[overlay-top]:not([animation='none']).smart-visibility-hidden {\r\n        animation: smart-drop-down-list-smart-animate-closing 0.2s ease-in;\r\n        -webkit-transform-origin: center;\r\n        transform-origin: center; }\r\n  .smart-drop-down-container.smart-drop-down-repositioned[top], .smart-drop-down-container.smart-drop-down-repositioned[center-top] {\r\n    margin: calc(-1 * (var(--smart-editor-drop-down-vertical-offset) + 3px)) 0px; }\r\n    .smart-drop-down-container.smart-drop-down-repositioned[top]:not([animation='none']), .smart-drop-down-container.smart-drop-down-repositioned[center-top]:not([animation='none']) {\r\n      animation: smart-drop-down-list-smart-animate-opening 0.2s ease-out;\r\n      -webkit-transform-origin: bottom;\r\n      transform-origin: bottom; }\r\n      .smart-drop-down-container.smart-drop-down-repositioned[top]:not([animation='none']).smart-visibility-hidden, .smart-drop-down-container.smart-drop-down-repositioned[center-top]:not([animation='none']).smart-visibility-hidden {\r\n        animation: smart-drop-down-list-smart-animate-closing 0.2s ease-in;\r\n        -webkit-transform-origin: bottom;\r\n        transform-origin: bottom; }\r\n  .smart-drop-down-container.smart-drop-down-repositioned[bottom]:not([animation='none']), .smart-drop-down-container.smart-drop-down-repositioned[center-bottom]:not([animation='none']) {\r\n    animation: smart-drop-down-list-smart-animate-opening 0.2s ease-out;\r\n    -webkit-transform-origin: top;\r\n    transform-origin: top; }\r\n    .smart-drop-down-container.smart-drop-down-repositioned[bottom]:not([animation='none']).smart-visibility-hidden, .smart-drop-down-container.smart-drop-down-repositioned[center-bottom]:not([animation='none']).smart-visibility-hidden {\r\n      animation: smart-drop-down-list-smart-animate-closing 0.2s ease-in;\r\n      -webkit-transform-origin: top;\r\n      transform-origin: top; }\r\n  .smart-drop-down-container.smart-drop-down-repositioned:not([animation='none']).smart-visibility-hidden {\r\n    transition: animation, visibility 0.2s ease-in; }\r\n.smart-drop-down-container[top].smart-drop-down-container.smart-drop-down-repositioned {\r\n  bottom: initial; }\r\n  .smart-drop-down-container[top].smart-drop-down-container.smart-drop-down-repositioned.smart-visibility-hidden {\r\n    bottom: calc(100% - var(--smart-border-width)); }\r\n\r\n.smart-path .smart-drop-down,\r\n.smart-color-picker .smart-drop-down,\r\n.smart-multi-split-button .smart-drop-down,\r\n.smart-drop-down-list .smart-drop-down,\r\n.smart-combo-box .smart-drop-down,\r\n.smart-text-box .smart-drop-down,\r\n.smart-drop-down-button .smart-drop-down,\r\n.smart-date-time-picker .smart-drop-down {\r\n  background-color: var(--smart-background);\r\n  box-sizing: border-box;\r\n  outline: none;\r\n  border-width: var(--smart-border-width);\r\n  border-style: solid;\r\n  border-color: var(--smart-border);\r\n  display: flex;\r\n  flex-direction: column;\r\n  height: var(--smart-editor-drop-down-height);\r\n  max-height: var(--smart-editor-drop-down-max-height);\r\n  min-height: var(--smart-editor-drop-down-min-height);\r\n  width: var(--smart-editor-drop-down-width);\r\n  max-width: var(--smart-editor-drop-down-max-width);\r\n  min-width: var(--smart-editor-drop-down-min-width);\r\n  font-size: var(--smart-font-size);\r\n  font-family: var(--smart-font-family);\r\n  margin: calc(var(--smart-editor-drop-down-vertical-offset) + var(--smart-editor-drop-down-padding-size)) 0px;\r\n  padding: var(--smart-editor-drop-down-padding-size) 0 var(--smart-editor-drop-down-padding-size) 0 !important;\r\n  top: calc(100% - var(--smart-border-width)); }\r\n  .smart-path .smart-drop-down.smart-visibility-hidden,\r\n  .smart-color-picker .smart-drop-down.smart-visibility-hidden,\r\n  .smart-multi-split-button .smart-drop-down.smart-visibility-hidden,\r\n  .smart-drop-down-list .smart-drop-down.smart-visibility-hidden,\r\n  .smart-combo-box .smart-drop-down.smart-visibility-hidden,\r\n  .smart-text-box .smart-drop-down.smart-visibility-hidden,\r\n  .smart-drop-down-button .smart-drop-down.smart-visibility-hidden,\r\n  .smart-date-time-picker .smart-drop-down.smart-visibility-hidden {\r\n    top: calc(100% - var(--smart-border-width)); }\r\n    .smart-path .smart-drop-down.smart-visibility-hidden.not-in-view,\r\n    .smart-color-picker .smart-drop-down.smart-visibility-hidden.not-in-view,\r\n    .smart-multi-split-button .smart-drop-down.smart-visibility-hidden.not-in-view,\r\n    .smart-drop-down-list .smart-drop-down.smart-visibility-hidden.not-in-view,\r\n    .smart-combo-box .smart-drop-down.smart-visibility-hidden.not-in-view,\r\n    .smart-text-box .smart-drop-down.smart-visibility-hidden.not-in-view,\r\n    .smart-drop-down-button .smart-drop-down.smart-visibility-hidden.not-in-view,\r\n    .smart-date-time-picker .smart-drop-down.smart-visibility-hidden.not-in-view {\r\n      left: -9999px;\r\n      top: -9999px;\r\n      transition: none; }\r\n  .smart-path .smart-drop-down[overlay-bottom], .smart-path .smart-drop-down[overlay-bottom].smart-visibility-hidden,\r\n  .smart-color-picker .smart-drop-down[overlay-bottom],\r\n  .smart-color-picker .smart-drop-down[overlay-bottom].smart-visibility-hidden,\r\n  .smart-multi-split-button .smart-drop-down[overlay-bottom],\r\n  .smart-multi-split-button .smart-drop-down[overlay-bottom].smart-visibility-hidden,\r\n  .smart-drop-down-list .smart-drop-down[overlay-bottom],\r\n  .smart-drop-down-list .smart-drop-down[overlay-bottom].smart-visibility-hidden,\r\n  .smart-combo-box .smart-drop-down[overlay-bottom],\r\n  .smart-combo-box .smart-drop-down[overlay-bottom].smart-visibility-hidden,\r\n  .smart-text-box .smart-drop-down[overlay-bottom],\r\n  .smart-text-box .smart-drop-down[overlay-bottom].smart-visibility-hidden,\r\n  .smart-drop-down-button .smart-drop-down[overlay-bottom],\r\n  .smart-drop-down-button .smart-drop-down[overlay-bottom].smart-visibility-hidden,\r\n  .smart-date-time-picker .smart-drop-down[overlay-bottom],\r\n  .smart-date-time-picker .smart-drop-down[overlay-bottom].smart-visibility-hidden {\r\n    border-color: var(--smart-border);\r\n    border-width: var(--smart-border-width);\r\n    border-style: solid;\r\n    top: 0; }\r\n  .smart-path .smart-drop-down[overlay-center], .smart-path .smart-drop-down[overlay-center].smart-visibility-hidden,\r\n  .smart-color-picker .smart-drop-down[overlay-center],\r\n  .smart-color-picker .smart-drop-down[overlay-center].smart-visibility-hidden,\r\n  .smart-multi-split-button .smart-drop-down[overlay-center],\r\n  .smart-multi-split-button .smart-drop-down[overlay-center].smart-visibility-hidden,\r\n  .smart-drop-down-list .smart-drop-down[overlay-center],\r\n  .smart-drop-down-list .smart-drop-down[overlay-center].smart-visibility-hidden,\r\n  .smart-combo-box .smart-drop-down[overlay-center],\r\n  .smart-combo-box .smart-drop-down[overlay-center].smart-visibility-hidden,\r\n  .smart-text-box .smart-drop-down[overlay-center],\r\n  .smart-text-box .smart-drop-down[overlay-center].smart-visibility-hidden,\r\n  .smart-drop-down-button .smart-drop-down[overlay-center],\r\n  .smart-drop-down-button .smart-drop-down[overlay-center].smart-visibility-hidden,\r\n  .smart-date-time-picker .smart-drop-down[overlay-center],\r\n  .smart-date-time-picker .smart-drop-down[overlay-center].smart-visibility-hidden {\r\n    border-color: var(--smart-border);\r\n    border-width: var(--smart-border-width);\r\n    border-style: solid;\r\n    top: 50%;\r\n    transform: translateY(-50%); }\r\n  .smart-path .smart-drop-down[overlay-top], .smart-path .smart-drop-down[overlay-top].smart-visibility-hidden,\r\n  .smart-color-picker .smart-drop-down[overlay-top],\r\n  .smart-color-picker .smart-drop-down[overlay-top].smart-visibility-hidden,\r\n  .smart-multi-split-button .smart-drop-down[overlay-top],\r\n  .smart-multi-split-button .smart-drop-down[overlay-top].smart-visibility-hidden,\r\n  .smart-drop-down-list .smart-drop-down[overlay-top],\r\n  .smart-drop-down-list .smart-drop-down[overlay-top].smart-visibility-hidden,\r\n  .smart-combo-box .smart-drop-down[overlay-top],\r\n  .smart-combo-box .smart-drop-down[overlay-top].smart-visibility-hidden,\r\n  .smart-text-box .smart-drop-down[overlay-top],\r\n  .smart-text-box .smart-drop-down[overlay-top].smart-visibility-hidden,\r\n  .smart-drop-down-button .smart-drop-down[overlay-top],\r\n  .smart-drop-down-button .smart-drop-down[overlay-top].smart-visibility-hidden,\r\n  .smart-date-time-picker .smart-drop-down[overlay-top],\r\n  .smart-date-time-picker .smart-drop-down[overlay-top].smart-visibility-hidden {\r\n    border-color: var(--smart-border);\r\n    border-width: var(--smart-border-width);\r\n    border-style: solid;\r\n    top: initial;\r\n    bottom: 0; }\r\n  .smart-path .smart-drop-down[top],\r\n  .smart-color-picker .smart-drop-down[top],\r\n  .smart-multi-split-button .smart-drop-down[top],\r\n  .smart-drop-down-list .smart-drop-down[top],\r\n  .smart-combo-box .smart-drop-down[top],\r\n  .smart-text-box .smart-drop-down[top],\r\n  .smart-drop-down-button .smart-drop-down[top],\r\n  .smart-date-time-picker .smart-drop-down[top] {\r\n    top: initial;\r\n    bottom: calc(100% - var(--smart-border-width));\r\n    flex-direction: column-reverse; }\r\n    .smart-path .smart-drop-down[top].smart-visibility-hidden,\r\n    .smart-color-picker .smart-drop-down[top].smart-visibility-hidden,\r\n    .smart-multi-split-button .smart-drop-down[top].smart-visibility-hidden,\r\n    .smart-drop-down-list .smart-drop-down[top].smart-visibility-hidden,\r\n    .smart-combo-box .smart-drop-down[top].smart-visibility-hidden,\r\n    .smart-text-box .smart-drop-down[top].smart-visibility-hidden,\r\n    .smart-drop-down-button .smart-drop-down[top].smart-visibility-hidden,\r\n    .smart-date-time-picker .smart-drop-down[top].smart-visibility-hidden {\r\n      top: initial;\r\n      bottom: calc(100% - var(--smart-border-width));\r\n      flex-direction: column-reverse; }\r\n  .smart-path .smart-drop-down[bottom],\r\n  .smart-color-picker .smart-drop-down[bottom],\r\n  .smart-multi-split-button .smart-drop-down[bottom],\r\n  .smart-drop-down-list .smart-drop-down[bottom],\r\n  .smart-combo-box .smart-drop-down[bottom],\r\n  .smart-text-box .smart-drop-down[bottom],\r\n  .smart-drop-down-button .smart-drop-down[bottom],\r\n  .smart-date-time-picker .smart-drop-down[bottom] {\r\n    cursor: default;\r\n    left: 0;\r\n    box-sizing: border-box;\r\n    font-size: inherit;\r\n    padding: var(--smart-editor-drop-down-padding-size);\r\n    margin: calc(var(--smart-editor-drop-down-vertical-offset) + var(--smart-editor-drop-down-padding-size)) 0px;\r\n    background-color: var(--smart-background);\r\n    border-width: var(--smart-border-width);\r\n    border-style: solid;\r\n    border-color: var(--smart-border);\r\n    box-shadow: var(--smart-elevation-8);\r\n    /*border-top: initial;*/\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding-left: 0px;\r\n    top: calc(100% - var(--smart-border-width)); }\r\n    .smart-path .smart-drop-down[bottom].smart-visibility-hidden,\r\n    .smart-color-picker .smart-drop-down[bottom].smart-visibility-hidden,\r\n    .smart-multi-split-button .smart-drop-down[bottom].smart-visibility-hidden,\r\n    .smart-drop-down-list .smart-drop-down[bottom].smart-visibility-hidden,\r\n    .smart-combo-box .smart-drop-down[bottom].smart-visibility-hidden,\r\n    .smart-text-box .smart-drop-down[bottom].smart-visibility-hidden,\r\n    .smart-drop-down-button .smart-drop-down[bottom].smart-visibility-hidden,\r\n    .smart-date-time-picker .smart-drop-down[bottom].smart-visibility-hidden {\r\n      top: calc(100% - var(--smart-border-width)); }\r\n  .smart-path .smart-drop-down[center-bottom], .smart-path .smart-drop-down[center-bottom].smart-visibility-hidden,\r\n  .smart-color-picker .smart-drop-down[center-bottom],\r\n  .smart-color-picker .smart-drop-down[center-bottom].smart-visibility-hidden,\r\n  .smart-multi-split-button .smart-drop-down[center-bottom],\r\n  .smart-multi-split-button .smart-drop-down[center-bottom].smart-visibility-hidden,\r\n  .smart-drop-down-list .smart-drop-down[center-bottom],\r\n  .smart-drop-down-list .smart-drop-down[center-bottom].smart-visibility-hidden,\r\n  .smart-combo-box .smart-drop-down[center-bottom],\r\n  .smart-combo-box .smart-drop-down[center-bottom].smart-visibility-hidden,\r\n  .smart-text-box .smart-drop-down[center-bottom],\r\n  .smart-text-box .smart-drop-down[center-bottom].smart-visibility-hidden,\r\n  .smart-drop-down-button .smart-drop-down[center-bottom],\r\n  .smart-drop-down-button .smart-drop-down[center-bottom].smart-visibility-hidden,\r\n  .smart-date-time-picker .smart-drop-down[center-bottom],\r\n  .smart-date-time-picker .smart-drop-down[center-bottom].smart-visibility-hidden {\r\n    left: 50%;\r\n    border: var(--smart-border-width) solid var(--smart-border);\r\n    top: calc(100% - var(--smart-border-width)); }\r\n  .smart-path .smart-drop-down[center-top], .smart-path .smart-drop-down[center-top].smart-visibility-hidden,\r\n  .smart-color-picker .smart-drop-down[center-top],\r\n  .smart-color-picker .smart-drop-down[center-top].smart-visibility-hidden,\r\n  .smart-multi-split-button .smart-drop-down[center-top],\r\n  .smart-multi-split-button .smart-drop-down[center-top].smart-visibility-hidden,\r\n  .smart-drop-down-list .smart-drop-down[center-top],\r\n  .smart-drop-down-list .smart-drop-down[center-top].smart-visibility-hidden,\r\n  .smart-combo-box .smart-drop-down[center-top],\r\n  .smart-combo-box .smart-drop-down[center-top].smart-visibility-hidden,\r\n  .smart-text-box .smart-drop-down[center-top],\r\n  .smart-text-box .smart-drop-down[center-top].smart-visibility-hidden,\r\n  .smart-drop-down-button .smart-drop-down[center-top],\r\n  .smart-drop-down-button .smart-drop-down[center-top].smart-visibility-hidden,\r\n  .smart-date-time-picker .smart-drop-down[center-top],\r\n  .smart-date-time-picker .smart-drop-down[center-top].smart-visibility-hidden {\r\n    left: 50%;\r\n    border: var(--smart-border-width) solid var(--smart-border);\r\n    top: initial;\r\n    bottom: calc(100% - var(--smart-border-width)); }\r\n.smart-path:not([animation='none']) .smart-drop-down,\r\n.smart-color-picker:not([animation='none']) .smart-drop-down,\r\n.smart-multi-split-button:not([animation='none']) .smart-drop-down,\r\n.smart-drop-down-list:not([animation='none']) .smart-drop-down,\r\n.smart-combo-box:not([animation='none']) .smart-drop-down,\r\n.smart-text-box:not([animation='none']) .smart-drop-down,\r\n.smart-drop-down-button:not([animation='none']) .smart-drop-down,\r\n.smart-date-time-picker:not([animation='none']) .smart-drop-down {\r\n  animation: smart-drop-down-list-smart-animate-opening 0.2s ease-out;\r\n  -webkit-transform-origin: top;\r\n  transform-origin: top; }\r\n  .smart-path:not([animation='none']) .smart-drop-down.smart-visibility-hidden,\r\n  .smart-color-picker:not([animation='none']) .smart-drop-down.smart-visibility-hidden,\r\n  .smart-multi-split-button:not([animation='none']) .smart-drop-down.smart-visibility-hidden,\r\n  .smart-drop-down-list:not([animation='none']) .smart-drop-down.smart-visibility-hidden,\r\n  .smart-combo-box:not([animation='none']) .smart-drop-down.smart-visibility-hidden,\r\n  .smart-text-box:not([animation='none']) .smart-drop-down.smart-visibility-hidden,\r\n  .smart-drop-down-button:not([animation='none']) .smart-drop-down.smart-visibility-hidden,\r\n  .smart-date-time-picker:not([animation='none']) .smart-drop-down.smart-visibility-hidden {\r\n    transition: animation, visibility 0.2s ease-in;\r\n    animation: smart-drop-down-list-smart-animate-closing 0.2s ease-in;\r\n    -webkit-transform-origin: top;\r\n    transform-origin: top; }\r\n  .smart-path:not([animation='none']) .smart-drop-down[bottom], .smart-path:not([animation='none']) .smart-drop-down[center-bottom],\r\n  .smart-color-picker:not([animation='none']) .smart-drop-down[bottom],\r\n  .smart-color-picker:not([animation='none']) .smart-drop-down[center-bottom],\r\n  .smart-multi-split-button:not([animation='none']) .smart-drop-down[bottom],\r\n  .smart-multi-split-button:not([animation='none']) .smart-drop-down[center-bottom],\r\n  .smart-drop-down-list:not([animation='none']) .smart-drop-down[bottom],\r\n  .smart-drop-down-list:not([animation='none']) .smart-drop-down[center-bottom],\r\n  .smart-combo-box:not([animation='none']) .smart-drop-down[bottom],\r\n  .smart-combo-box:not([animation='none']) .smart-drop-down[center-bottom],\r\n  .smart-text-box:not([animation='none']) .smart-drop-down[bottom],\r\n  .smart-text-box:not([animation='none']) .smart-drop-down[center-bottom],\r\n  .smart-drop-down-button:not([animation='none']) .smart-drop-down[bottom],\r\n  .smart-drop-down-button:not([animation='none']) .smart-drop-down[center-bottom],\r\n  .smart-date-time-picker:not([animation='none']) .smart-drop-down[bottom],\r\n  .smart-date-time-picker:not([animation='none']) .smart-drop-down[center-bottom] {\r\n    animation: smart-drop-down-list-smart-animate-opening 0.2s ease-out;\r\n    -webkit-transform-origin: top;\r\n    transform-origin: top; }\r\n    .smart-path:not([animation='none']) .smart-drop-down[bottom].smart-visibility-hidden, .smart-path:not([animation='none']) .smart-drop-down[center-bottom].smart-visibility-hidden,\r\n    .smart-color-picker:not([animation='none']) .smart-drop-down[bottom].smart-visibility-hidden,\r\n    .smart-color-picker:not([animation='none']) .smart-drop-down[center-bottom].smart-visibility-hidden,\r\n    .smart-multi-split-button:not([animation='none']) .smart-drop-down[bottom].smart-visibility-hidden,\r\n    .smart-multi-split-button:not([animation='none']) .smart-drop-down[center-bottom].smart-visibility-hidden,\r\n    .smart-drop-down-list:not([animation='none']) .smart-drop-down[bottom].smart-visibility-hidden,\r\n    .smart-drop-down-list:not([animation='none']) .smart-drop-down[center-bottom].smart-visibility-hidden,\r\n    .smart-combo-box:not([animation='none']) .smart-drop-down[bottom].smart-visibility-hidden,\r\n    .smart-combo-box:not([animation='none']) .smart-drop-down[center-bottom].smart-visibility-hidden,\r\n    .smart-text-box:not([animation='none']) .smart-drop-down[bottom].smart-visibility-hidden,\r\n    .smart-text-box:not([animation='none']) .smart-drop-down[center-bottom].smart-visibility-hidden,\r\n    .smart-drop-down-button:not([animation='none']) .smart-drop-down[bottom].smart-visibility-hidden,\r\n    .smart-drop-down-button:not([animation='none']) .smart-drop-down[center-bottom].smart-visibility-hidden,\r\n    .smart-date-time-picker:not([animation='none']) .smart-drop-down[bottom].smart-visibility-hidden,\r\n    .smart-date-time-picker:not([animation='none']) .smart-drop-down[center-bottom].smart-visibility-hidden {\r\n      animation: smart-drop-down-list-smart-animate-closing 0.2s ease-in;\r\n      -webkit-transform-origin: top;\r\n      transform-origin: top; }\r\n  .smart-path:not([animation='none']) .smart-drop-down[top], .smart-path:not([animation='none']) .smart-drop-down[center-top],\r\n  .smart-color-picker:not([animation='none']) .smart-drop-down[top],\r\n  .smart-color-picker:not([animation='none']) .smart-drop-down[center-top],\r\n  .smart-multi-split-button:not([animation='none']) .smart-drop-down[top],\r\n  .smart-multi-split-button:not([animation='none']) .smart-drop-down[center-top],\r\n  .smart-drop-down-list:not([animation='none']) .smart-drop-down[top],\r\n  .smart-drop-down-list:not([animation='none']) .smart-drop-down[center-top],\r\n  .smart-combo-box:not([animation='none']) .smart-drop-down[top],\r\n  .smart-combo-box:not([animation='none']) .smart-drop-down[center-top],\r\n  .smart-text-box:not([animation='none']) .smart-drop-down[top],\r\n  .smart-text-box:not([animation='none']) .smart-drop-down[center-top],\r\n  .smart-drop-down-button:not([animation='none']) .smart-drop-down[top],\r\n  .smart-drop-down-button:not([animation='none']) .smart-drop-down[center-top],\r\n  .smart-date-time-picker:not([animation='none']) .smart-drop-down[top],\r\n  .smart-date-time-picker:not([animation='none']) .smart-drop-down[center-top] {\r\n    animation: smart-drop-down-list-smart-animate-opening 0.2s ease-out;\r\n    -webkit-transform-origin: bottom;\r\n    transform-origin: bottom; }\r\n    .smart-path:not([animation='none']) .smart-drop-down[top].smart-visibility-hidden, .smart-path:not([animation='none']) .smart-drop-down[center-top].smart-visibility-hidden,\r\n    .smart-color-picker:not([animation='none']) .smart-drop-down[top].smart-visibility-hidden,\r\n    .smart-color-picker:not([animation='none']) .smart-drop-down[center-top].smart-visibility-hidden,\r\n    .smart-multi-split-button:not([animation='none']) .smart-drop-down[top].smart-visibility-hidden,\r\n    .smart-multi-split-button:not([animation='none']) .smart-drop-down[center-top].smart-visibility-hidden,\r\n    .smart-drop-down-list:not([animation='none']) .smart-drop-down[top].smart-visibility-hidden,\r\n    .smart-drop-down-list:not([animation='none']) .smart-drop-down[center-top].smart-visibility-hidden,\r\n    .smart-combo-box:not([animation='none']) .smart-drop-down[top].smart-visibility-hidden,\r\n    .smart-combo-box:not([animation='none']) .smart-drop-down[center-top].smart-visibility-hidden,\r\n    .smart-text-box:not([animation='none']) .smart-drop-down[top].smart-visibility-hidden,\r\n    .smart-text-box:not([animation='none']) .smart-drop-down[center-top].smart-visibility-hidden,\r\n    .smart-drop-down-button:not([animation='none']) .smart-drop-down[top].smart-visibility-hidden,\r\n    .smart-drop-down-button:not([animation='none']) .smart-drop-down[center-top].smart-visibility-hidden,\r\n    .smart-date-time-picker:not([animation='none']) .smart-drop-down[top].smart-visibility-hidden,\r\n    .smart-date-time-picker:not([animation='none']) .smart-drop-down[center-top].smart-visibility-hidden {\r\n      animation: smart-drop-down-list-smart-animate-closing 0.2s ease-in;\r\n      -webkit-transform-origin: bottom;\r\n      transform-origin: bottom; }\r\n  .smart-path:not([animation='none']) .smart-drop-down[overlay-bottom], .smart-path:not([animation='none']) .smart-drop-down[overlay-top],\r\n  .smart-color-picker:not([animation='none']) .smart-drop-down[overlay-bottom],\r\n  .smart-color-picker:not([animation='none']) .smart-drop-down[overlay-top],\r\n  .smart-multi-split-button:not([animation='none']) .smart-drop-down[overlay-bottom],\r\n  .smart-multi-split-button:not([animation='none']) .smart-drop-down[overlay-top],\r\n  .smart-drop-down-list:not([animation='none']) .smart-drop-down[overlay-bottom],\r\n  .smart-drop-down-list:not([animation='none']) .smart-drop-down[overlay-top],\r\n  .smart-combo-box:not([animation='none']) .smart-drop-down[overlay-bottom],\r\n  .smart-combo-box:not([animation='none']) .smart-drop-down[overlay-top],\r\n  .smart-text-box:not([animation='none']) .smart-drop-down[overlay-bottom],\r\n  .smart-text-box:not([animation='none']) .smart-drop-down[overlay-top],\r\n  .smart-drop-down-button:not([animation='none']) .smart-drop-down[overlay-bottom],\r\n  .smart-drop-down-button:not([animation='none']) .smart-drop-down[overlay-top],\r\n  .smart-date-time-picker:not([animation='none']) .smart-drop-down[overlay-bottom],\r\n  .smart-date-time-picker:not([animation='none']) .smart-drop-down[overlay-top] {\r\n    animation: smart-drop-down-list-smart-animate-opening 0.2s ease-out;\r\n    -webkit-transform-origin: center;\r\n    transform-origin: center; }\r\n    .smart-path:not([animation='none']) .smart-drop-down[overlay-bottom].smart-visibility-hidden, .smart-path:not([animation='none']) .smart-drop-down[overlay-top].smart-visibility-hidden,\r\n    .smart-color-picker:not([animation='none']) .smart-drop-down[overlay-bottom].smart-visibility-hidden,\r\n    .smart-color-picker:not([animation='none']) .smart-drop-down[overlay-top].smart-visibility-hidden,\r\n    .smart-multi-split-button:not([animation='none']) .smart-drop-down[overlay-bottom].smart-visibility-hidden,\r\n    .smart-multi-split-button:not([animation='none']) .smart-drop-down[overlay-top].smart-visibility-hidden,\r\n    .smart-drop-down-list:not([animation='none']) .smart-drop-down[overlay-bottom].smart-visibility-hidden,\r\n    .smart-drop-down-list:not([animation='none']) .smart-drop-down[overlay-top].smart-visibility-hidden,\r\n    .smart-combo-box:not([animation='none']) .smart-drop-down[overlay-bottom].smart-visibility-hidden,\r\n    .smart-combo-box:not([animation='none']) .smart-drop-down[overlay-top].smart-visibility-hidden,\r\n    .smart-text-box:not([animation='none']) .smart-drop-down[overlay-bottom].smart-visibility-hidden,\r\n    .smart-text-box:not([animation='none']) .smart-drop-down[overlay-top].smart-visibility-hidden,\r\n    .smart-drop-down-button:not([animation='none']) .smart-drop-down[overlay-bottom].smart-visibility-hidden,\r\n    .smart-drop-down-button:not([animation='none']) .smart-drop-down[overlay-top].smart-visibility-hidden,\r\n    .smart-date-time-picker:not([animation='none']) .smart-drop-down[overlay-bottom].smart-visibility-hidden,\r\n    .smart-date-time-picker:not([animation='none']) .smart-drop-down[overlay-top].smart-visibility-hidden {\r\n      animation: smart-drop-down-list-smart-animate-closing 0.2s ease-in;\r\n      -webkit-transform-origin: center;\r\n      transform-origin: center; }\r\n  .smart-path:not([animation='none']) .smart-drop-down[overlay-center],\r\n  .smart-color-picker:not([animation='none']) .smart-drop-down[overlay-center],\r\n  .smart-multi-split-button:not([animation='none']) .smart-drop-down[overlay-center],\r\n  .smart-drop-down-list:not([animation='none']) .smart-drop-down[overlay-center],\r\n  .smart-combo-box:not([animation='none']) .smart-drop-down[overlay-center],\r\n  .smart-text-box:not([animation='none']) .smart-drop-down[overlay-center],\r\n  .smart-drop-down-button:not([animation='none']) .smart-drop-down[overlay-center],\r\n  .smart-date-time-picker:not([animation='none']) .smart-drop-down[overlay-center] {\r\n    animation: smart-drop-down-list-smart-animate-overlay-center-opening 0.2s ease-out;\r\n    -webkit-transform-origin: top;\r\n    transform-origin: top; }\r\n    .smart-path:not([animation='none']) .smart-drop-down[overlay-center].smart-visibility-hidden,\r\n    .smart-color-picker:not([animation='none']) .smart-drop-down[overlay-center].smart-visibility-hidden,\r\n    .smart-multi-split-button:not([animation='none']) .smart-drop-down[overlay-center].smart-visibility-hidden,\r\n    .smart-drop-down-list:not([animation='none']) .smart-drop-down[overlay-center].smart-visibility-hidden,\r\n    .smart-combo-box:not([animation='none']) .smart-drop-down[overlay-center].smart-visibility-hidden,\r\n    .smart-text-box:not([animation='none']) .smart-drop-down[overlay-center].smart-visibility-hidden,\r\n    .smart-drop-down-button:not([animation='none']) .smart-drop-down[overlay-center].smart-visibility-hidden,\r\n    .smart-date-time-picker:not([animation='none']) .smart-drop-down[overlay-center].smart-visibility-hidden {\r\n      animation: smart-drop-down-list-smart-animate-overlay-center-closing 0.2s ease-in;\r\n      -webkit-transform-origin: top;\r\n      transform-origin: top; }\r\n\r\n.smart-multi-split-button .smart-drop-down,\r\n.smart-drop-down-list .smart-drop-down,\r\n.smart-text-box .smart-drop-down,\r\n.smart-drop-down-button .smart-drop-down {\r\n  height: calc(var(--smart-scroll-bar-size)); }\r\n  .smart-multi-split-button .smart-drop-down smart-scroll-bar:before,\r\n  .smart-drop-down-list .smart-drop-down smart-scroll-bar:before,\r\n  .smart-text-box .smart-drop-down smart-scroll-bar:before,\r\n  .smart-drop-down-button .smart-drop-down smart-scroll-bar:before {\r\n    display: none;\r\n    background-color: var(--smart-border); }\r\n  .smart-multi-split-button .smart-drop-down smart-scroll-bar[orientation=\"vertical\"].bottom-corner,\r\n  .smart-drop-down-list .smart-drop-down smart-scroll-bar[orientation=\"vertical\"].bottom-corner,\r\n  .smart-text-box .smart-drop-down smart-scroll-bar[orientation=\"vertical\"].bottom-corner,\r\n  .smart-drop-down-button .smart-drop-down smart-scroll-bar[orientation=\"vertical\"].bottom-corner {\r\n    width: calc(var(--smart-scroll-bar-size));\r\n    height: calc(100% - var(--smart-scroll-bar-size)); }\r\n  .smart-multi-split-button .smart-drop-down smart-scroll-bar.bottom-corner,\r\n  .smart-drop-down-list .smart-drop-down smart-scroll-bar.bottom-corner,\r\n  .smart-text-box .smart-drop-down smart-scroll-bar.bottom-corner,\r\n  .smart-drop-down-button .smart-drop-down smart-scroll-bar.bottom-corner {\r\n    width: calc(100% - var(--smart-scroll-bar-size)); }\r\n  .smart-multi-split-button .smart-drop-down .smart-list-items-container.vscroll,\r\n  .smart-drop-down-list .smart-drop-down .smart-list-items-container.vscroll,\r\n  .smart-text-box .smart-drop-down .smart-list-items-container.vscroll,\r\n  .smart-drop-down-button .smart-drop-down .smart-list-items-container.vscroll {\r\n    width: calc(100% - var(--smart-scroll-bar-size)); }\r\n    .smart-multi-split-button .smart-drop-down .smart-list-items-container.vscroll[orientation=\"vertical\"],\r\n    .smart-drop-down-list .smart-drop-down .smart-list-items-container.vscroll[orientation=\"vertical\"],\r\n    .smart-text-box .smart-drop-down .smart-list-items-container.vscroll[orientation=\"vertical\"],\r\n    .smart-drop-down-button .smart-drop-down .smart-list-items-container.vscroll[orientation=\"vertical\"] {\r\n      padding-top: initial; }\r\n  .smart-multi-split-button .smart-drop-down input:focus,\r\n  .smart-drop-down-list .smart-drop-down input:focus,\r\n  .smart-text-box .smart-drop-down input:focus,\r\n  .smart-drop-down-button .smart-drop-down input:focus {\r\n    outline: none; }\r\n\r\n.smart-multi-split-button.auto-height .smart-action-button,\r\n.smart-drop-down-list.auto-height .smart-action-button,\r\n.smart-drop-down-button.auto-height .smart-action-button {\r\n  white-space: initial;\r\n  text-overflow: initial;\r\n  line-height: 1rem;\r\n  flex-wrap: wrap; }\r\n.smart-multi-split-button.auto-height[selection-display-mode=\"tokens\"] smart-action-button > span,\r\n.smart-multi-split-button.auto-height[selection-display-mode=\"tokens\"] .smart-action-button > span:first-of-type,\r\n.smart-drop-down-list.auto-height[selection-display-mode=\"tokens\"] smart-action-button > span,\r\n.smart-drop-down-list.auto-height[selection-display-mode=\"tokens\"] .smart-action-button > span:first-of-type,\r\n.smart-drop-down-button.auto-height[selection-display-mode=\"tokens\"] smart-action-button > span,\r\n.smart-drop-down-button.auto-height[selection-display-mode=\"tokens\"] .smart-action-button > span:first-of-type {\r\n  display: inline-block;\r\n  margin: 0.2em; }\r\n\r\n.smart-color-picker .smart-drop-down {\r\n  width: var(--smart-drop-down-button-drop-down-width);\r\n  height: var(--smart-drop-down-button-drop-down-height); }\r\n  .smart-color-picker .smart-drop-down.smart-drop-down-color-picker {\r\n    max-height: calc(var(--smart-editor-drop-down-max-height) + 50px); }\r\n  .smart-color-picker .smart-drop-down smart-scroll-bar:before {\r\n    display: none;\r\n    background-color: var(--smart-border); }\r\n  .smart-color-picker .smart-drop-down smart-scroll-bar[orientation=\"vertical\"].bottom-corner {\r\n    width: calc(var(--smart-scroll-bar-size));\r\n    height: calc(100% - var(--smart-scroll-bar-size)); }\r\n  .smart-color-picker .smart-drop-down .smart-list-items-container.vscroll {\r\n    width: calc(100% - var(--smart-scroll-bar-size)); }\r\n    .smart-color-picker .smart-drop-down .smart-list-items-container.vscroll[orientation=\"vertical\"] {\r\n      padding-top: initial; }\r\n\r\n.smart-drop-down-list .smart-drop-down {\r\n  width: var(--smart-drop-down-list-drop-down-width);\r\n  height: var(--smart-drop-down-list-drop-down-height); }\r\n\r\n.smart-combo-box .smart-drop-down {\r\n  width: var(--smart-combo-box-drop-down-width);\r\n  height: var(--smart-combo-box-drop-down-height); }\r\n  .smart-combo-box .smart-drop-down smart-scroll-bar:before {\r\n    display: none;\r\n    background-color: var(--smart-border); }\r\n  .smart-combo-box .smart-drop-down smart-scroll-bar[orientation=\"vertical\"].bottom-corner {\r\n    width: calc(var(--smart-scroll-bar-size));\r\n    height: calc(100% - var(--smart-scroll-bar-size)); }\r\n  .smart-combo-box .smart-drop-down smart-scroll-bar.bottom-corner {\r\n    width: calc(100% - var(--smart-scroll-bar-size)); }\r\n  .smart-combo-box .smart-drop-down .smart-list-items-container.vscroll {\r\n    width: calc(100% - var(--smart-scroll-bar-size)); }\r\n    .smart-combo-box .smart-drop-down .smart-list-items-container.vscroll[orientation=\"vertical\"] {\r\n      padding-top: initial; }\r\n.smart-combo-box .smart-selection-field input {\r\n  outline: none; }\r\n\r\n.smart-drop-down-button .smart-drop-down {\r\n  width: var(--smart-drop-down-button-drop-down-width);\r\n  height: var(--smart-drop-down-button-drop-down-height); }\r\n\r\n.smart-date-time-picker .smart-drop-down {\r\n  border: none; }\r\n\r\n.smart-drop-down-overlay {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  z-index: 9000; }\r\n\r\n.smart-list-box input.vscroll {\r\n  outline: none; }\r\n.smart-list-box smart-scroll-bar:before {\r\n  display: none;\r\n  background-color: var(--smart-border); }\r\n.smart-list-box smart-scroll-bar[orientation=\"vertical\"].bottom-corner {\r\n  width: calc(var(--smart-scroll-bar-size));\r\n  height: calc(100% - var(--smart-scroll-bar-size)); }\r\n.smart-list-box smart-scroll-bar.bottom-corner {\r\n  width: calc(100% - var(--smart-scroll-bar-size)); }\r\n.smart-list-box .smart-list-items-container.vscroll {\r\n  width: calc(100% - var(--smart-scroll-bar-size)); }\r\n\r\n.smart-scroll-viewer {\r\n  max-width: 100%;\r\n  border: 0; }\r\n  .smart-scroll-viewer smart-scroll-bar:before {\r\n    display: none;\r\n    background-color: var(--smart-border); }\r\n  .smart-scroll-viewer smart-scroll-bar[orientation=\"vertical\"].bottom-corner {\r\n    width: calc(var(--smart-scroll-bar-size));\r\n    height: calc(100% - var(--smart-scroll-bar-size)); }\r\n  .smart-scroll-viewer smart-scroll-bar.bottom-corner {\r\n    width: calc(100% - var(--smart-scroll-bar-size)); }\r\n  .smart-scroll-viewer .smart-list-items-container.vscroll {\r\n    width: calc(100% - var(--smart-scroll-bar-size)); }\r\n\r\n@keyframes smart-drop-down-list-smart-animate-overlay-center-opening {\r\n  0% {\r\n    opacity: 0.2;\r\n    transform: scaleY(0) translateY(-50%); }\r\n  50% {\r\n    opacity: 0.4; }\r\n  100% {\r\n    opacity: 1;\r\n    transform: scaleY(1) translateY(-50%); } }\r\n@keyframes smart-drop-down-list-smart-animate-overlay-center-closing {\r\n  0% {\r\n    opacity: 1;\r\n    transform: scaleY(1) translateY(-50%); }\r\n  50% {\r\n    opacity: 0.4; }\r\n  100% {\r\n    opacity: 0.2;\r\n    transform: scaleY(0) translateY(-50%); } }\r\n@keyframes smart-drop-down-list-smart-animate-opening {\r\n  0% {\r\n    opacity: 0.2;\r\n    transform: scaleY(0); }\r\n  50% {\r\n    opacity: 0.4; }\r\n  100% {\r\n    opacity: 1;\r\n    transform: scaleY(1); } }\r\n@keyframes smart-drop-down-list-smart-animate-closing {\r\n  0% {\r\n    opacity: 1;\r\n    transform: scaleY(1);\r\n    pointer-events: none; }\r\n  50% {\r\n    opacity: 0.4;\r\n    pointer-events: none; }\r\n  100% {\r\n    opacity: 0.2;\r\n    transform: scaleY(0);\r\n    pointer-events: none; } }\r\n.smart-drop-down-box[right-to-left]:not([hover]) .smart-action-button[focus] {\r\n  border-top-color: transparent;\r\n  border-left-color: transparent;\r\n  border-right-color: transparent;\r\n  border-bottom-left-radius: 0; }\r\n.smart-drop-down-box[right-to-left]:not([drop-down-button-position]) .smart-drop-down-button,\r\n.smart-drop-down-box[right-to-left]:not([drop-down-button-position]) .smart-drop-down-button[focus] {\r\n  border-top-color: transparent;\r\n  border-left-color: transparent;\r\n  border-right-color: transparent; }\r\n.smart-drop-down-box[right-to-left]:not([drop-down-button-position]) .smart-action-button {\r\n  border-top-color: transparent;\r\n  border-left-color: transparent;\r\n  border-right-color: transparent;\r\n  border-bottom-left-radius: 0;\r\n  border-bottom-right-radius: 0; }\r\n.smart-drop-down-box[right-to-left]:not([drop-down-button-position]):not([opened]):not([hover]) .smart-drop-down-button:not([hover]),\r\n.smart-drop-down-box[right-to-left]:not([drop-down-button-position]):not([opened]):not([hover]) .smart-drop-down-button[focus]:not([hover]) {\r\n  border-bottom-left-radius: 0; }\r\n", ""]),
        t.exports = e
    },
    56: function(t, e) {
        Smart("smart-menu-item", class extends Smart.BaseElement {
            static get properties() {
                return {
                    checked: {
                        value: !1,
                        type: "boolean"
                    },
                    label: {
                        value: "",
                        type: "any"
                    },
                    level: {
                        value: null,
                        type: "number?"
                    },
                    separator: {
                        value: !1,
                        type: "boolean"
                    },
                    shortcut: {
                        value: "",
                        type: "string"
                    },
                    value: {
                        value: null,
                        type: "any"
                    }
                }
            }
            get enableShadowDOM() {
                return !1
            }
            template() {
                return ""
            }
            ready() {
                const t = this;
                if (super.ready(),
                t.$.addClass("smart-unselectable"),
                t.setAttribute("role", "menuitem"),
                t.checked && t.setAttribute("aria-checked", !0),
                !1 === t.isDirty)
                    return;
                const e = t.closest("smart-menu, smart-tree");
                e && e.isRendered && (cancelAnimationFrame(Smart.Menu.processTimer),
                Smart.Menu.processTimer = requestAnimationFrame(()=>{
                    e._lazyInitItems()
                }
                ))
            }
            propertyChangedHandler(t, e, r) {
                const n = this;
                if (super.propertyChangedHandler(t, e, r),
                "smart-tree-item" === n.tagName.toLowerCase())
                    return;
                const o = n.menu
                  , a = n.parentItem
                  , i = a || o;
                if ("label" === t)
                    return "" === r ? void (n.label = e) : (n.setAttribute("aria-label", r),
                    void (o && o._setItemLabel(n, r)));
                if (!o)
                    return;
                if ("separator" === t)
                    return void o._refreshCheckableItems(i);
                if ("disabled" !== t || !1 === r || !n.checked)
                    return;
                super.propertyChangedHandler(t, e, r),
                n.checked = !1;
                const s = i.checkMode;
                "radioButton" === s ? o._validateRadioButtonSelection(a, n.level, []) : "checkbox" !== s && o._refreshCheckableItems(i)
            }
        }
        ),
        Smart("smart-menu-items-group", class extends Smart.BaseElement {
            static get properties() {
                return {
                    checkable: {
                        value: !1,
                        type: "boolean"
                    },
                    checked: {
                        value: !1,
                        type: "boolean"
                    },
                    checkMode: {
                        value: "checkbox",
                        type: "string"
                    },
                    dropDownHeight: {
                        value: null,
                        type: "number?"
                    },
                    expanded: {
                        value: !1,
                        type: "boolean"
                    },
                    label: {
                        value: "",
                        type: "any"
                    },
                    level: {
                        value: null,
                        type: "number?"
                    },
                    separator: {
                        value: !1,
                        type: "boolean"
                    },
                    value: {
                        value: null,
                        type: "any"
                    }
                }
            }
            get enableShadowDOM() {
                return !1
            }
            template() {
                return ""
            }
            ready() {
                const t = this;
                if (super.ready(),
                t.$.addClass("smart-unselectable"),
                t.setAttribute("role", "menuitem"),
                t.setAttribute("aria-haspopup", !0),
                t.setAttribute("aria-expanded", t.expanded),
                t.checked && t.setAttribute("aria-checked", !0),
                !1 === t.isDirty)
                    return;
                const e = t.closest("smart-menu, smart-tree");
                e && e.isRendered && (cancelAnimationFrame(Smart.Menu.processTimer),
                Smart.Menu.processTimer = requestAnimationFrame(()=>{
                    e._lazyInitItems()
                }
                ))
            }
            propertyChangedHandler(t, e, r) {
                const n = this;
                if (super.propertyChangedHandler(t, e, r),
                "smart-tree-items-group" === n.tagName.toLowerCase())
                    return;
                const o = n.menu
                  , a = n.parentItem
                  , i = a || o;
                if ("label" === t)
                    return "" === r ? void (n.label = e) : (n.setAttribute("aria-label", r),
                    void (o && o._setItemLabel(n, r)));
                if (o && -1 !== ["checkable", "checkMode", "disabled", "separator"].indexOf(t))
                    switch (t) {
                    case "checkable":
                        r ? n.itemContainer.setAttribute("checkable", "") : n.itemContainer.removeAttribute("checkable"),
                        o._isContainerOpened(n.container.level, n.container) && "tree" !== o.mode && !o._minimized && o._closeSubContainers(n.level + 2),
                        o._updateItemRoles(n);
                        break;
                    case "checkMode":
                        n.itemContainer.setAttribute("check-mode", r),
                        o._changeToRadioButtonMode(r, n.itemContainer, n),
                        o._updateItemRoles(n);
                        break;
                    case "disabled":
                        {
                            if (Smart.ListMenu && o instanceof Smart.ListMenu) {
                                if (o._view)
                                    for (; n.contains(o._view); )
                                        o._backButtonClickHandler()
                            } else
                                o._isContainerOpened(n.container.level, n.container) && o._closeSubContainers(n.level + 1, n.container);
                            if (!n.checked)
                                return;
                            n.checked = !1;
                            const t = i.checkMode;
                            "radioButton" === t ? o._validateRadioButtonSelection(a, n.level, []) : "checkbox" !== t && o._refreshCheckableItems(i);
                            break
                        }
                    case "separator":
                        o._refreshCheckableItems(i)
                    }
            }
        }
        ),
        Smart("smart-menu", class extends Smart.BaseElement {
            static get properties() {
                return {
                    autoCloseDelay: {
                        value: 100,
                        type: "number"
                    },
                    autoFocusOnMouseenter: {
                        value: !1,
                        type: "boolean"
                    },
                    checkable: {
                        value: !1,
                        type: "boolean"
                    },
                    checkboxes: {
                        value: !1,
                        type: "boolean"
                    },
                    checkMode: {
                        value: "checkbox",
                        type: "string"
                    },
                    closeAction: {
                        value: "up",
                        allowedValues: ["up", "down", "none"],
                        type: "string"
                    },
                    dataSource: {
                        value: null,
                        type: "array?",
                        reflectToAttribute: !1
                    },
                    displayMember: {
                        value: "label",
                        type: "string"
                    },
                    dropDownAppendTo: {
                        value: null,
                        type: "any?"
                    },
                    dropDownOverlay: {
                        value: !1,
                        type: "boolean"
                    },
                    dropDownPosition: {
                        value: "auto",
                        allowedValues: ["top-left", "top-right", "bottom-left", "bottom-right", "overlay-left", "overlay-right", "auto"],
                        type: "string"
                    },
                    enableMouseWheelAction: {
                        value: !1,
                        type: "boolean"
                    },
                    innerHTML: {
                        type: "string",
                        reflectToAttribute: !1
                    },
                    itemsMember: {
                        value: "items",
                        type: "string"
                    },
                    minimizeIconTemplate: {
                        value: null,
                        type: "string?"
                    },
                    minimizeWidth: {
                        value: null,
                        type: "number?"
                    },
                    mode: {
                        value: "horizontal",
                        allowedValues: ["horizontal", "vertical", "dropDown", "tree"],
                        type: "string"
                    },
                    opened: {
                        value: !1,
                        type: "boolean"
                    },
                    overflow: {
                        value: "auto",
                        allowedValues: ["auto", "hidden", "scroll"],
                        type: "string"
                    },
                    preventCloseOnCheck: {
                        value: !1,
                        type: "boolean"
                    },
                    selectionMode: {
                        value: "click",
                        allowedValues: ["click", "mouseenter"],
                        type: "string"
                    },
                    valueMember: {
                        value: "value",
                        type: "string"
                    }
                }
            }
            static get listeners() {
                return {
                    "container.click": "_selectionHandler",
                    keydown: "_keydownHandler",
                    mouseenter: "_mouseenterHandler",
                    mouseleave: "_mouseleaveHandler",
                    "container.mouseout": "_mouseoutMouseoverHandler",
                    "container.mouseover": "_mouseoutMouseoverHandler",
                    resize: "_resizeHandler",
                    transitionend: "_transitionendHandler",
                    "hamburgerIcon.click": "_hamburgerIconClickHandler",
                    "mainContainer.click": "_mainContainerHandler",
                    "mainContainer.mouseleave": "_mainContainerHandler",
                    "mainContainer.mouseout": "_mainContainerHandler",
                    "mainContainer.mouseover": "_mainContainerHandler",
                    "document.down": "_documentDownHandler",
                    "document.up": "_documentUpHandler"
                }
            }
            static get requires() {
                return {
                    "Smart.RepeatButton": "smart.button.js"
                }
            }
            static get styleUrls() {
                return ["smart.button.css", "smart.menu.css"]
            }
            get items() {
                return this._menuItems
            }
            template() {
                return '<div id="container" role="presentation">\n                    <div id="minimizedHeader" class="smart-header smart-minimized-header smart-hidden" role="presentation">\n                        <div id="hamburgerIcon" class="smart-hamburger-icon smart-hidden" role="button" aria-label="Toggle minimized menu" aria-haspopup="true">\n                            <div id="hamburgerIconLineTop" class="smart-hamburger-icon-line smart-hamburger-icon-line-top" role="presentation"></div>\n                            <div id="hamburgerIconLineCenter" class="smart-hamburger-icon-line smart-hamburger-icon-line-center" role="presentation"></div>\n                            <div id="hamburgerIconLineBottom" class="smart-hamburger-icon-line smart-hamburger-icon-line-bottom" role="presentation"></div>\n                            <div id="customIconContainer" class="smart-hamburger-icon-custom-container smart-hidden" role="presentation"></div>\n                        </div>\n                    </div>\n                    <smart-repeat-button id="scrollButtonNear" class="smart-menu-scroll-button smart-spin-button smart-scroll-button-near smart-hidden" animation="[[animation]]" unfocusable right-to-left="[[rightToLeft]]">\n                        <div id="arrowNear" class="smart-arrow" aria-hidden="true"></div>\n                    </smart-repeat-button>\n                    <div id="mainContainer" class="smart-menu-main-container" role="presentation">\n                        <content></content>\n                    </div>\n                    <smart-repeat-button id="scrollButtonFar" class="smart-menu-scroll-button smart-spin-button smart-scroll-button-far smart-hidden" animation="[[animation]]" unfocusable right-to-left="[[rightToLeft]]">\n                        <div id="arrowFar" class="smart-arrow" aria-hidden="true"></div>\n                    </smart-repeat-button>\n                </div>'
            }
            attached() {
                const t = this;
                if (super.attached(),
                !t.isCompleted || !t.isRendered || "tree" === t._element || Smart.ListMenu && t instanceof Smart.ListMenu)
                    return;
                const e = t._scrollInfo;
                if (null !== t.dropDownAppendTo) {
                    if (t._minimized)
                        t._dropDownParent.appendChild(t.$.mainContainer);
                    else
                        for (let e = 0; e < t._containersInBody.length; e++)
                            t._dropDownParent.appendChild(t._containersInBody[e]);
                    "dropDown" === t.mode && (t._dropDownParent === t.parentElement ? t._dynamicallyReparented ? delete t._dynamicallyReparented : t._positionRelativeTo = null : (t._positionRelativeTo = t.parentElement,
                    t._dynamicallyReparented = !0,
                    setTimeout((function() {
                        t._dropDownParent.appendChild(t)
                    }
                    ), 0)))
                }
                e && e.forEach((function(t, e) {
                    e.scrollLeft = t.left,
                    e.scrollTop = t.top
                }
                ))
            }
            detached() {
                const t = this;
                super.detached(),
                "tree" === t._element || Smart.ListMenu && t instanceof Smart.ListMenu || (t._close(),
                null !== t.dropDownAppendTo && (t._minimized ? t._dropDownParent.removeChild(t.$.mainContainer) : t._removeContainersInBody()))
            }
            ready() {
                super.ready()
            }
            render() {
                this._element = "menu",
                this._edgeMacFF = Smart.Utilities.Core.Browser.Edge || Smart.Utilities.Core.Browser.Firefox && -1 !== navigator.platform.toLowerCase().indexOf("mac"),
                this._containers = [],
                this._containersInBody = [],
                this._openedContainers = [],
                this._containersFixedHeight = [],
                this._menuItemsGroupsToExpand = [],
                this._additionalScrollButtons = [],
                this._scrollInfo = new Map,
                this._createElement(),
                super.render()
            }
            addItem(t, e) {
                const r = this;
                if (!(t instanceof Smart.MenuItem || t instanceof Smart.MenuItemsGroup))
                    if ("string" == typeof t) {
                        const e = document.createElement("smart-menu-item");
                        e.label = t,
                        t = e
                    } else {
                        if (!t || !t.label)
                            return;
                        {
                            const e = document.createElement("smart-menu-item");
                            e.label = t.label,
                            t = e
                        }
                    }
                let n, o, a;
                if (t.isDirty = !1,
                void 0 === e)
                    n = r,
                    o = 1,
                    a = e = r.$.mainContainer;
                else {
                    if ((e = r.getItem(e))instanceof Smart.MenuItemsGroup == !1)
                        return;
                    n = e,
                    o = e.level + 1,
                    a = e.itemContainer
                }
                if (r._createItemHTMLStructure(t, o, e, a.childElementCount, 0),
                t instanceof Smart.MenuItemsGroup && (r._processHTML(t, o + 1),
                r._checkContainersLength()),
                a.appendChild(t),
                r._checkOverflowAddRemove(t.level, a),
                t instanceof Smart.MenuItemsGroup && ("tree" === r.mode || r._minimized)) {
                    const e = t.getElementsByClassName("smart-menu-items-group-arrow");
                    for (let t = 0; t < e.length; t++)
                        e[t].className = "smart-menu-items-group-arrow down smart-arrow-down";
                    r._expandItemsByDefault()
                }
                r._refreshCheckableItems(n)
            }
            checkItem(t) {
                void 0 === (t = this.getItem(t)) || t.checked || t.disabled || t.templateApplied || this._toggleItem(t)
            }
            clear() {
                this.$.mainContainer.innerHTML = "",
                this._removeContainersInBody(),
                this._menuItems = {},
                this._containers = [],
                this._containersInBody = [],
                this._openedContainers = [],
                this._containersFixedHeight = [],
                this._menuItemsGroupsToExpand = [],
                this._additionalScrollButtons = []
            }
            clickItem(t) {
                const e = this;
                "string" == typeof t && (t = e.getItem(t)),
                t && t.nodeName && e._selectionHandler({
                    type: "click",
                    isTrusted: !0,
                    target: t,
                    stopPropagation: ()=>{}
                    ,
                    preventDefault: ()=>{}
                })
            }
            close() {
                const t = this;
                "dropDown" !== t.mode || !1 === t.opened && t.$.hasClass("smart-visibility-hidden") || (t.$.fireEvent("closing", arguments[0] || {
                    trigger: "programmatic"
                }).defaultPrevented ? t.opened = !0 : (t.opened = !1,
                t.$.addClass("smart-visibility-hidden"),
                t._close(),
                t.$.fireEvent("close")))
            }
            collapseItem(t, e) {
                const r = this
                  , n = r.animation
                  , o = !1 === e && r.hasAnimation;
                if (void 0 === t)
                    return o && (r.animation = "none"),
                    r._close(),
                    void (o && setTimeout((function() {
                        r.animation = n
                    }
                    ), 0));
                if (void 0 === (t = r.getItem(t)) || t instanceof Smart.MenuItem)
                    return;
                const a = t.level;
                if (r._openedContainers[a + 1] && r._isContainerOpened(a + 1, t.container)) {
                    const e = r.mode;
                    o && (r.animation = "none"),
                    r._closeSubContainers(a + 1, t.container, void 0, !1 !== arguments[2]),
                    1 !== a && "tree" !== e || r._checkOverflow(r.$.mainContainer, "horizontal" === e, [r.$.scrollButtonNear, r.$.scrollButtonFar]),
                    o && (r.animation = n)
                }
            }
            expandItem(t, e) {
                const r = this;
                if (void 0 === (t = r.getItem(t)) || t instanceof Smart.MenuItemsGroup && r._isContainerOpened(t.level + 1, t.container) && r._isBranchExpanded(t))
                    return;
                void 0 !== Smart.Menu.processTimer && r._lazyInitItems();
                const n = [t]
                  , o = r.animation
                  , a = !1 === e && r.hasAnimation;
                let i = t.parentItem;
                for (a && (r.animation = "none"),
                r._discardKeyboardHover(); i; )
                    n.unshift(i),
                    i = i.parentItem;
                for (let t = 0; t < n.length; t++) {
                    const e = n[t];
                    if (t === n.length - 1 && e instanceof Smart.MenuItem) {
                        e.disabled || e.templateApplied || r._hoverViaKeyboard(e);
                        break
                    }
                    r._isContainerOpened(e.container.level, e.container) || r._menuItemsGroupSelectionHandler(e, {
                        target: e,
                        type: "expand",
                        isTrusted: !0
                    }, arguments[2])
                }
                a && (r.animation = o)
            }
            getItem(t) {
                const e = this;
                let r;
                if (null != t && e._menuItems) {
                    if ("string" == typeof t) {
                        if (/^[0-9]*([.]?[0-9]*)*$/gm.test(t))
                            return e._menuItems[t];
                        if (r = e.$.mainContainer.querySelector('[id="' + t + '"]'),
                        null === r)
                            return e._menuItems[t]
                    } else {
                        if (!isNaN(t))
                            return e._menuItems[t.toString()];
                        r = t
                    }
                    if ((r instanceof Smart.MenuItem || r instanceof Smart.MenuItemsGroup) && (e.contains(r) || e.$.mainContainer.contains(r) || r.parentElement.parentElement.ownerElement === e))
                        return r
                }
            }
            maximize() {
                const t = this;
                if (!t._minimized)
                    return;
                const e = t.animation;
                if (t.$.mainContainer.style.marginTop = "",
                t.$.mainContainer.style.marginLeft = "",
                t.enableShadowDOM && !t.$.mainContainer.id && (t.$.mainContainer.id = t.$.mainContainer.getAttribute("smart-id")),
                "none" !== e && (t.animation = "none"),
                t._positionDetection.removeOverlay(),
                t._closeSubContainers(2),
                t.$minimizedHeader.addClass("smart-hidden"),
                t._minimized = !1,
                t._minimizedDropDownOpened && (t.$hamburgerIcon.removeClass("smart-close-button"),
                t._minimizedDropDownOpened = !1),
                null !== t.dropDownAppendTo && t._appendMinimizedContainerToMenu(t.$.mainContainer, t.$.scrollButtonFar),
                "tree" !== t.mode) {
                    t.$mainContainer.addClass("smart-menu-main-container"),
                    t.$mainContainer.removeClass("smart-menu-minimized-items-container");
                    const e = t.$.mainContainer.getElementsByClassName("smart-menu-items-group-arrow");
                    for (let r = 0; r < e.length; r++)
                        t._setArrowDirection(e[r], e[r].parentElement.parentElement.level + 1);
                    null !== t.dropDownAppendTo && t._moveDropDownsToExternalContainer(),
                    t._applyContainerFixedHeight()
                }
                t.$mainContainer.removeClass("smart-visibility-hidden"),
                t.$hamburgerIcon.addClass("smart-hidden"),
                t.removeAttribute("minimized"),
                t._checkOverflow(t.$.mainContainer, "horizontal" === t.mode, [t.$.scrollButtonNear, t.$.scrollButtonFar]),
                "none" !== e && setTimeout((function() {
                    t.animation = e
                }
                ), 0),
                t.$.mainContainer.removeAttribute("drop-down"),
                t.$.hamburgerIcon.removeAttribute("aria-expanded"),
                t.$.hamburgerIcon.removeAttribute("aria-owns"),
                t.$.mainContainer.setAttribute("role", "presentation"),
                t.$.mainContainer.removeAttribute("aria-orientation"),
                t.setAttribute("role", "menu"),
                t.setAttribute("aria-orientation", "horizontal" === t.mode ? "horizontal" : "vertical")
            }
            minimize() {
                const t = this;
                if (t._minimized || "dropDown" === t.mode)
                    return;
                t.$minimizedHeader.removeClass("smart-hidden");
                const e = null !== t.dropDownAppendTo
                  , r = t.animation
                  , n = t.hasAnimation;
                if (n && (t.animation = "none"),
                t._positionDetection.removeOverlay(),
                t._closeSubContainers(2),
                n && e && (t.animation = r),
                "tree" !== t.mode && (e && t._moveDropDownsToMenu(),
                t._removeContainerFixedHeight()),
                t._hideMainContainerScrollButtons(),
                t.$mainContainer.removeClass("smart-menu-main-container"),
                t.$mainContainer.addClass("smart-visibility-hidden"),
                t.enableShadowDOM && t.$.mainContainer.removeAttribute("id"),
                t._edgeMacFF && (t.$.mainContainer.style.left = "",
                t.$.mainContainer.style.top = "",
                t.$mainContainer.addClass("not-in-view")),
                t.$hamburgerIcon.removeClass("smart-hidden"),
                e && t._appendMinimizedContainerToExternalElement(t.$.mainContainer),
                setTimeout((function() {
                    t.$mainContainer.addClass("smart-menu-minimized-items-container"),
                    n && !e && (t.animation = r)
                }
                ), 0),
                t._minimized = !0,
                t.setAttribute("minimized", ""),
                "tree" !== t.mode)
                    for (let e = 0; e < t._containers.length; e++) {
                        const r = t._containers[e];
                        r.level > 2 && t._setArrowDirection(r.menuItemsGroup.children[0].children[1], r.level)
                    }
                t.$.mainContainer.setAttribute("drop-down", ""),
                t.setAttribute("role", "presentation"),
                t.removeAttribute("aria-orientation"),
                t.$.hamburgerIcon.setAttribute("aria-expanded", !1),
                t.$.hamburgerIcon.setAttribute("aria-owns", t.$.mainContainer.id),
                t.$.mainContainer.setAttribute("role", "menu"),
                t.$.mainContainer.setAttribute("aria-orientation", "vertical")
            }
            open(t, e) {
                const r = this;
                if ("dropDown" !== r.mode)
                    return;
                if (r.$.fireEvent("opening").defaultPrevented)
                    return void (r.opened = !1);
                let n;
                if (r.opened = !0,
                r._positionRelativeTo) {
                    const o = r._positionRelativeTo.getBoundingClientRect();
                    t += o.left,
                    e += o.top,
                    r._positionedParent ? (n = r._positionedParent.getBoundingClientRect(),
                    t -= n.left,
                    e -= n.top) : (t += window.pageXOffset,
                    e += window.pageYOffset)
                }
                let o = t + r.offsetWidth - document.documentElement.clientWidth
                  , a = e + r.offsetHeight - document.documentElement.clientHeight;
                n ? (o += n.left,
                a += n.top) : (o -= window.pageXOffset,
                a -= window.pageYOffset),
                o > 0 ? t -= o : t = n ? Math.max(t, -n.left) : Math.max(t, window.pageXOffset),
                a > 0 ? e -= a : e = n ? Math.max(e, -n.top) : Math.max(e, window.pageYOffset),
                r.style.right = "",
                isNaN(t) || (r.rightToLeft && (r.style.right = "initial"),
                r.style.left = t + "px"),
                isNaN(e) || (r.style.top = e + "px"),
                r.$.removeClass("smart-visibility-hidden"),
                r.$.fireEvent("open"),
                r.hasAnimation || (r._checkOverflowOnOpen && (r._checkOverflow(r.$.mainContainer, !1, [r.$.scrollButtonNear, r.$.scrollButtonFar]),
                delete r._checkOverflowOnOpen),
                r._noAutoFocus || r.focus())
            }
            removeItem(t) {
                const e = this;
                if (void 0 === (t = e.getItem(t)))
                    return;
                const r = t.parentElement
                  , n = t.parentItem || e;
                if (t instanceof Smart.MenuItemsGroup) {
                    const r = t.container;
                    if (e._isContainerOpened(r.level, r) && e._closeSubContainers(r.level, r),
                    1 === t.level) {
                        const t = e._containersInBody.indexOf(r);
                        -1 !== t && (e._containersInBody.splice(t, 1),
                        null === e.dropDownAppendTo || "tree" === e.mode || e._minimized || e._dropDownParent.removeChild(r))
                    }
                }
                r.removeChild(t),
                e._refreshContainersArrays(),
                e._menuItems = {},
                e._refreshItemPaths(e.$.mainContainer, !0),
                e._checkOverflowAddRemove(t.level, r),
                e._refreshCheckableItems(n)
            }
            uncheckItem(t) {
                void 0 === (t = this.getItem(t)) || !t.checked || t.disabled || t.templateApplied || this._toggleItem(t)
            }
            propertyChangedHandler(t, e, r) {
                super.propertyChangedHandler(t, e, r);
                const n = this;
                if ("tree" !== n._element)
                    switch (t) {
                    case "animation":
                        n.$.mainContainer.setAttribute("animation", r),
                        n._additionalScrollButtons.forEach((function(t) {
                            t[0].animation = r,
                            t[1].animation = r
                        }
                        )),
                        null !== n._dropDownParent && n._containers.forEach((function(t) {
                            t.setAttribute("animation", r)
                        }
                        ));
                        break;
                    case "checkable":
                        "tree" === n.mode || n._minimized ? n._minimized && null !== n.dropDownAppendTo && a("checkable", n.$.mainContainer, r) : n._closeSubContainers(2),
                        n._updateItemRoles(n);
                        break;
                    case "checkboxes":
                        if (n._close(),
                        null !== n.dropDownAppendTo) {
                            for (let t = 0; t < n._containers.length; t++) {
                                a("checkboxes", n._containers[t], r)
                            }
                            n._minimized && a("checkboxes", n.$.mainContainer, r)
                        }
                        n._updateItemRoles();
                        break;
                    case "checkMode":
                        n._changeToRadioButtonMode(r, n.$.mainContainer),
                        n._minimized && null !== n.dropDownAppendTo && n.$.mainContainer.setAttribute("check-mode", r),
                        n._updateItemRoles(n);
                        break;
                    case "dataSource":
                        {
                            let t = !1;
                            n._minimized && (n.maximize(),
                            t = !0),
                            n._removeContainersInBody(),
                            n._containersInBody = [],
                            n._menuItems = {},
                            n._processDataSource(),
                            n._checkContainersLength(),
                            t ? n.minimize() : o(),
                            n._expandItemsByDefault(),
                            n._refreshCheckableItems(),
                            n._suppressResizeHandler = !0,
                            setTimeout(()=>delete n._suppressResizeHandler, 500);
                            break
                        }
                    case "innerHTML":
                        n.$.mainContainer.innerHTML = r,
                        n._lazyInitItems();
                        break;
                    case "dropDownAppendTo":
                        {
                            const t = n._dropDownParent;
                            if (n._positionDetection.getDropDownParent(),
                            n._dropDownParent === t || "tree" === n.mode && !n._minimized)
                                return;
                            if (n._close(),
                            n._minimized)
                                return void (null === r ? n._appendMinimizedContainerToMenu(n.$.mainContainer, n.$.scrollButtonFar) : n._appendMinimizedContainerToExternalElement(n.$.mainContainer));
                            if (null !== n._dropDownParent && null === t)
                                n._moveDropDownsToExternalContainer();
                            else if (null === n._dropDownParent && null !== t)
                                n._moveDropDownsToMenu();
                            else if (null !== n._dropDownParent && null !== t)
                                for (let t = 0; t < n._containersInBody.length; t++)
                                    n._dropDownParent.appendChild(n._containersInBody[t]);
                            null !== r || n.$mainContainer.hasClass("simple") ? n._checkOverflow(n.$.mainContainer, "horizontal" === n.mode, [n.$.scrollButtonNear, n.$.scrollButtonFar]) : n._hideMainContainerScrollButtons();
                            for (let t = 0; t < n._containersFixedHeight.length; t++)
                                n._containersFixedHeight[t].itemContainer.checkOverflow = !0;
                            "dropDown" === n.mode && (n.close({
                                trigger: "internal"
                            }),
                            n._reparentMenu(!0, t));
                            break
                        }
                    case "dropDownOverlay":
                        r || n._positionDetection.removeOverlay();
                        break;
                    case "disabled":
                        r && n._close(),
                        n._setFocusable(),
                        n.$.scrollButtonNear.disabled = r,
                        n.$.scrollButtonFar.disabled = r,
                        r || null === n.dropDownAppendTo && !n.$mainContainer.hasClass("simple") && "tree" !== n.mode || n._updateScrollButtonVisibility(n.$.mainContainer, "horizontal" === n.mode, [n.$.scrollButtonNear, n.$.scrollButtonFar]);
                        break;
                    case "dropDownPosition":
                    case "mode":
                        {
                            if ("mode" === t) {
                                if (delete n._dynamicallyReparented,
                                "tree" === e || n._minimized ? (n._closeSubContainersTreeMode(2, void 0, void 0, void 0, !0),
                                n._openedContainers = []) : n._closeSubContainersDefaultMode(2),
                                n._discardKeyboardHover(!0),
                                n._minimized && n._minimizedDropDownOpened && (n.$mainContainer.addClass("smart-visibility-hidden"),
                                n.$hamburgerIcon.removeClass("smart-close-button"),
                                n.$.hamburgerIcon.setAttribute("aria-expanded", !1),
                                n._minimizedDropDownOpened = !1),
                                "horizontal" !== r && "horizontal" !== e || n._changeScrollButtonsArrows(),
                                n._minimized)
                                    return void ("dropDown" === r && (n.mode = e));
                                n.setAttribute("aria-orientation", "horizontal" === n.mode ? "horizontal" : "vertical"),
                                !1 === n.opened && ("dropDown" === r ? n.$.addClass("smart-visibility-hidden") : "dropDown" === e && n.$.removeClass("smart-visibility-hidden")),
                                "tree" === e ? (null !== n.dropDownAppendTo && n._moveDropDownsToExternalContainer(),
                                n.$mainContainer.addClass("smart-menu-main-container"),
                                n.$mainContainer.removeClass("smart-menu-minimized-items-container"),
                                n._applyContainerFixedHeight()) : "tree" === r && (null !== n.dropDownAppendTo && n._moveDropDownsToMenu(),
                                n._applyTreeMode()),
                                "auto" === n.overflow && n._hideMainContainerScrollButtons(),
                                o()
                            }
                            if ("tree" === n.mode || n._minimized)
                                return n._minimizedDropDownOpened && n._close(),
                                void (n._minimized && null !== n.dropDownAppendTo && n.$.mainContainer.setAttribute(n.properties[t].attributeName, r));
                            "dropDownPosition" === t && n._close();
                            const a = n._containers.map(t=>t.menuItemsGroup);
                            for (let t = 0; t < a.length; t++) {
                                const e = a[t];
                                n._setArrowDirection(e.children[0].children[1], e.level + 1)
                            }
                            if (null !== n.dropDownAppendTo)
                                for (let e = 0; e < n._containers.length; e++) {
                                    const o = n._containers[e];
                                    o.setAttribute(Smart.Utilities.Core.toDash(t), r),
                                    o.level > 2 && n._setArrowDirection(o.menuItemsGroup.children[0].children[1], o.level)
                                }
                            break
                        }
                    case "minimizeIconTemplate":
                        n._applyMinimizeIconTemplate(r, e);
                        break;
                    case "minimizeWidth":
                        n._resizeHandler();
                        break;
                    case "opened":
                        r ? n.open() : n.close({
                            trigger: "internal"
                        });
                        break;
                    case "overflow":
                        n._handleOverflowChange();
                        break;
                    case "rightToLeft":
                        if ("tree" !== n.mode) {
                            const t = n._containers.map(t=>t.menuItemsGroup);
                            for (let e = 0; e < t.length; e++) {
                                const r = t[e];
                                n._setArrowDirection(r.children[0].children[1], r.level + 1)
                            }
                            if (null !== n.dropDownAppendTo) {
                                r ? n.$.mainContainer.setAttribute("right-to-left", "") : n.$.mainContainer.removeAttribute("right-to-left");
                                for (let t = 0; t < n._containers.length; t++) {
                                    const e = n._containers[t];
                                    r ? e.setAttribute("right-to-left", "") : e.removeAttribute("right-to-left"),
                                    e.level > 2 && n._setArrowDirection(e.menuItemsGroup.children[0].children[1], e.level)
                                }
                            }
                        }
                        break;
                    case "theme":
                        if (null === n.dropDownAppendTo || Smart.ListMenu && n instanceof Smart.ListMenu)
                            return;
                        if (n._minimized)
                            "" !== e && n.$mainContainer.removeClass(e),
                            "" !== r && n.$mainContainer.addClass(r);
                        else
                            for (let t = 0; t < n._containers.length; t++) {
                                const o = n._containers[t];
                                "" !== e && o.classList.remove(e),
                                "" !== r && o.classList.add(r)
                            }
                        break;
                    case "unfocusable":
                        n._setFocusable()
                    }
                function o() {
                    null === n.dropDownAppendTo && "tree" !== n.mode || n._checkOverflow(n.$.mainContainer, "horizontal" === n.mode, [n.$.scrollButtonNear, n.$.scrollButtonFar])
                }
                function a(t, e, r) {
                    r ? e.setAttribute(t, "") : e.removeAttribute(t)
                }
            }
            _addOpenedContainer(t, e) {
                const r = this;
                if ("tree" === r.mode || r._minimized) {
                    r._openedContainers[t] || (r._openedContainers[t] = []);
                    const n = e.menuItemsGroup;
                    return n.set("expanded", !0),
                    n.setAttribute("aria-expanded", !0),
                    r._updateState && r._updateState("expanded", n.id, !0),
                    r._openedContainers[t].push(e)
                }
                r._openedContainers[t] = e
            }
            _appendMinimizedContainerToExternalElement(t) {
                const e = this;
                t.ownerElement = e,
                e._dropDownParent.appendChild(t),
                t.setAttribute("animation", e.animation),
                "" !== e.theme && t.$.addClass(e.theme),
                t.$.addClass("smart-menu-drop-down smart-drop-down"),
                t.$.addClass("smart-drop-down-repositioned"),
                t.setAttribute("check-mode", e.checkMode),
                t.setAttribute("drop-down-position", e.dropDownPosition),
                t.setAttribute("mode", e.mode),
                t.setAttribute("loading-indicator-position", e.loadingIndicatorPosition),
                e.rightToLeft && t.setAttribute("right-to-left", ""),
                e.checkable && t.setAttribute("checkable", ""),
                e.checkboxes && t.setAttribute("checkboxes", ""),
                e.$.view && e.detachedChildren.indexOf(e.$.view) && e.detachedChildren.push(e.$.view)
            }
            _appendMinimizedContainerToMenu(t, e) {
                const r = this;
                delete t.ownerElement,
                r.$.container.insertBefore(t, e),
                t.removeAttribute("animation"),
                "" !== r.theme && t.$.removeClass(r.theme),
                t.$.removeClass("smart-menu-drop-down smart-drop-down"),
                t.$.removeClass("smart-drop-down-repositioned"),
                t.removeAttribute("checkable"),
                t.removeAttribute("checkboxes"),
                t.removeAttribute("check-mode"),
                t.removeAttribute("drop-down-position"),
                t.removeAttribute("mode"),
                t.removeAttribute("loading-indicator-position"),
                t.removeAttribute("style"),
                t.removeAttribute("right-to-left")
            }
            _applyContainerFixedHeight() {
                const t = this;
                for (let e = 0; e < t._containers.length; e++) {
                    const r = t._containers[e];
                    -1 !== t._containersFixedHeight.indexOf(r) ? (r.style.height = r.menuItemsGroup.dropDownHeight + "px",
                    r.itemContainer.checkOverflow = !0) : r.style.height = ""
                }
            }
            _applyGrouping(t, e) {
                const r = this;
                let n;
                n = t === r.$.mainContainer ? Array.from(t.children) : Array.from(t.container.firstElementChild.children);
                for (let t = 0; t < n.length; t++) {
                    const o = n[t];
                    o.originalIndex = t,
                    o instanceof Smart.MenuItemsGroup && void 0 === e && r._applyGrouping(o)
                }
                r._sortItems(t)
            }
            _applyMinimizeIconTemplate(t, e) {
                const r = this;
                if (null === t) {
                    if (null === e)
                        return;
                    r.$customIconContainer.addClass("smart-hidden"),
                    r.$.customIconContainer.innerHTML = "",
                    r.$hamburgerIconLineTop.removeClass("smart-hidden"),
                    r.$hamburgerIconLineCenter.removeClass("smart-hidden"),
                    r.$hamburgerIconLineBottom.removeClass("smart-hidden")
                } else {
                    const n = document.getElementById(t);
                    if (null !== n && "template" === n.tagName.toLowerCase()) {
                        const t = document.importNode(n.content, !0);
                        r.$hamburgerIconLineTop.addClass("smart-hidden"),
                        r.$hamburgerIconLineCenter.addClass("smart-hidden"),
                        r.$hamburgerIconLineBottom.addClass("smart-hidden"),
                        r.$.customIconContainer.innerHTML = "",
                        r.$.customIconContainer.appendChild(t),
                        r.$customIconContainer.removeClass("smart-hidden")
                    } else
                        r.minimizeIconTemplate = e
                }
            }
            _applyTreeMode() {
                const t = this.$.mainContainer.getElementsByClassName("smart-menu-items-group-arrow");
                if (this.$mainContainer.removeClass("smart-menu-main-container"),
                this.$mainContainer.addClass("smart-menu-minimized-items-container"),
                this.isCompleted && this.isRendered)
                    for (let e = 0; e < t.length; e++)
                        t[e].className = "smart-menu-items-group-arrow down";
                this._removeContainerFixedHeight()
            }
            _arrowLeftHandler(t, e, r, n) {
                const o = this;
                1 === t ? "horizontal" === e && o._levelOneNavigate("_getLastEnabledChild", r, n) : 2 === t ? o._levelOneNavigateFromLowerLevel("_getPreviousEnabledChild", r) : o._escapeHandler(r, t, n)
            }
            _arrowRightHandler(t, e, r, n) {
                const o = this;
                1 === t ? "horizontal" === e ? o._levelOneNavigate("_getFirstEnabledChild", r, n) : o._levelOneOpenDropDown(r) : r instanceof Smart.MenuItemsGroup ? o._selectionHandler({
                    target: r,
                    isTrusted: !0
                }) : o._levelOneNavigateFromLowerLevel("_getNextEnabledChild", r)
            }
            _browserBoundsDetection(t) {
                if ("tree" === this.mode && !this._minimized)
                    return;
                if (t.style.marginTop = "",
                t.style.marginLeft = "",
                "auto" !== this.dropDownPosition)
                    return;
                const e = 1 === window.devicePixelRatio ? document.documentElement.clientWidth : window.innerWidth
                  , r = 1 === window.devicePixelRatio ? document.documentElement.clientHeight : window.innerHeight
                  , n = t.getBoundingClientRect()
                  , o = e - n.left - t.offsetWidth
                  , a = r - n.top - t.offsetHeight;
                o < 10 && (t.style.marginLeft = Math.min(o - 10, -10) + "px"),
                a < 10 && (t.style.marginTop = Math.min(a - 10, -10) + "px")
            }
            _changeScrollButtonsArrows() {
                const t = this;
                "horizontal" === t.mode ? (t.$.scrollButtonNear.setAttribute("aria-label", "Scroll left"),
                t.$.scrollButtonFar.setAttribute("aria-label", "Scroll right"),
                t.$arrowNear.removeClass("smart-arrow-up"),
                t.$arrowFar.removeClass("smart-arrow-down"),
                t.$arrowNear.addClass("smart-arrow-left"),
                t.$arrowFar.addClass("smart-arrow-right")) : (t.$.scrollButtonNear.setAttribute("aria-label", "Scroll up"),
                t.$.scrollButtonFar.setAttribute("aria-label", "Scroll down"),
                t.$arrowNear.removeClass("smart-arrow-left"),
                t.$arrowFar.removeClass("smart-arrow-right"),
                t.$arrowNear.addClass("smart-arrow-up"),
                t.$arrowFar.addClass("smart-arrow-down"))
            }
            _changeToRadioButtonMode(t, e, r) {
                if ("radioButton" === t) {
                    const t = [];
                    for (let r = 0; r < e.childElementCount; r++) {
                        const n = e.children[r];
                        !n.checked || n.disabled || n.templateApplied || t.push(n)
                    }
                    this._validateRadioButtonSelection(r, r ? r.level + 1 : 1, t)
                }
            }
            _checkContainersLength(t) {
                const e = this;
                0 === e._containers.length ? (e.$mainContainer.addClass("simple"),
                t || e._checkOverflow(e.$.mainContainer, "horizontal" === e.mode, [e.$.scrollButtonNear, e.$.scrollButtonFar])) : t || (e.$mainContainer.removeClass("simple"),
                null === e.dropDownAppendTo && "tree" !== e.mode && e.$mainContainer.removeClass("scroll-buttons-shown one-button-shown"))
            }
            _checkOverflow(t, e, r) {
                const n = this
                  , o = n.$.mainContainer
                  , a = t === o ? n.overflow : "auto";
                if (n._minimized || "hidden" === a || null === n.dropDownAppendTo && "tree" !== n.mode && t === o && !o.classList.contains("simple"))
                    return;
                if ("dropDown" === n.mode && !n.opened)
                    return void (n._checkOverflowOnOpen = !0);
                const i = t.scrollLeft
                  , s = i / (t.scrollWidth - t.offsetWidth)
                  , d = t.scrollTop
                  , l = d / (t.scrollHeight - t.offsetHeight);
                let m, c, u;
                "auto" === a && (t.classList.remove("scroll-buttons-shown"),
                t.classList.remove("one-button-shown"),
                r[0].$.addClass("smart-hidden"),
                r[1].$.addClass("smart-hidden")),
                e ? (m = Math.round(t.scrollWidth) > Math.round(t.offsetWidth),
                c = s > 0,
                u = s < 1) : (m = Math.round(t.scrollHeight) > Math.round(t.offsetHeight),
                c = l > 0,
                u = l < 1),
                m ? "auto" === a ? (t.classList.add("scroll-buttons-shown"),
                c && r[0].$.removeClass("smart-hidden"),
                u && r[1].$.removeClass("smart-hidden"),
                !1 === (c && u) && t.classList.add("one-button-shown"),
                n.disabled || (r[0].disabled = !1,
                r[1].disabled = !1),
                t.scrollLeft = i,
                t.scrollTop = d) : (r[0].$.removeClass("smart-hidden"),
                r[1].$.removeClass("smart-hidden"),
                n.disabled ? (r[0].disabled = !0,
                r[1].disabled = !0) : (r[0].disabled = !c,
                r[1].disabled = !u)) : "scroll" === a && (r[0].disabled = !0,
                r[1].disabled = !0),
                t === o && "tree" !== n.mode && n._close(),
                n._scrollInfo.set(t, {
                    left: t.scrollLeft,
                    top: t.scrollTop
                })
            }
            _checkOverflowAddRemove(t, e) {
                const r = this;
                1 === t && null !== r.dropDownAppendTo || "tree" === r.mode ? r._checkOverflow(r.$.mainContainer, "horizontal" === r.mode, [r.$.scrollButtonNear, r.$.scrollButtonFar]) : t > 1 && e.dropDownHeightSet && (r._isContainerOpened(t, e.container) ? r._checkOverflow(e, !1, [e.container.children[0], e.container.children[2]]) : e.checkOverflow = !0)
            }
            _close() {
                const t = this;
                t._positionDetection.removeOverlay(),
                t._closeSubContainers(2),
                t._discardKeyboardHover(!0),
                t._minimized && t._minimizedDropDownOpened && (t.$mainContainer.addClass("smart-visibility-hidden"),
                t._edgeMacFF && (t.$.mainContainer.style.left = "",
                t.$.mainContainer.style.top = "",
                t.$mainContainer.addClass("not-in-view")),
                t.$hamburgerIcon.removeClass("smart-close-button"),
                t.$.hamburgerIcon.setAttribute("aria-expanded", !1),
                t._minimizedDropDownOpened = !1)
            }
            _closeSubContainers(t, e, r, n) {
                const o = this;
                "tree" === o.mode || o._minimized ? o._closeSubContainersTreeMode(t, e, r, n) : o._closeSubContainersDefaultMode(t, e, r)
            }
            _closeSubContainersDefaultMode(t, e, r) {
                const n = this
                  , o = n._openedContainers;
                function a(e) {
                    const a = o[e].menuItemsGroup;
                    r && e === t || (a.$.removeClass("focus"),
                    a.removeAttribute("focus"),
                    a.$.removeClass("hover"),
                    a.removeAttribute("hover")),
                    a.$.removeClass("smart-menu-items-group-opened"),
                    a.$.removeClass("smart-menu-items-group-expanded"),
                    a.setAttribute("aria-expanded", !1),
                    o[e].$.addClass("smart-visibility-hidden"),
                    n._edgeMacFF && 2 === e && !n.hasAnimation && (o[e].style.left = "",
                    o[e].style.top = "",
                    o[e].$.addClass("not-in-view")),
                    n._minimized && n._browserBoundsDetection(n.$.mainContainer),
                    n.$.fireEvent("collapse", {
                        item: a,
                        label: a.label,
                        path: a.path,
                        value: a.value,
                        children: a.itemContainer.children
                    }),
                    o[e] = void 0
                }
                for (let e = o.length - 1; e >= t; e--)
                    void 0 !== o[e] && a(e)
            }
            _closeSubContainersTreeMode(t, e, r, n, o) {
                const a = this;
                if (n) {
                    const t = e.menuItemsGroup;
                    if (a.$.fireEvent("collapsing", {
                        item: t,
                        label: t.label,
                        path: t.path,
                        value: t.value,
                        children: e.itemContainer.children
                    }).defaultPrevented)
                        return
                }
                if (void 0 === e)
                    return void a._collapseAll(!1, o);
                const i = e.menuItemsGroup;
                if (i.set("expanded", !1),
                i.setAttribute("aria-expanded", !1),
                "menu" === a._element)
                    if (r) {
                        const t = a.$.mainContainer.getElementsByClassName("focus")[0];
                        t && (t.$.removeClass("focus"),
                        t.removeAttribute("focus")),
                        i.$.addClass("focus"),
                        i.setAttribute("focus", ""),
                        a._focusedViaKeyboard = i
                    } else
                        i.$.removeClass("focus"),
                        i.removeAttribute("focus");
                else
                    a._updateState("expanded", i.id, !1);
                if (i.$.removeClass("smart-" + a._element + "-items-group-opened"),
                o || !a.hasAnimation ? (i.$.removeClass("smart-" + a._element + "-items-group-expanded"),
                i.setAttribute("aria-expanded", !1),
                e.$.addClass("smart-visibility-hidden"),
                a._minimized && a._browserBoundsDetection(a.$.mainContainer)) : a._collapseSection(e),
                n) {
                    const t = {
                        item: i,
                        label: i.label,
                        path: i.path,
                        value: i.value,
                        children: i.itemContainer.children
                    };
                    a.toggleCallback ? (t.type = "collapse",
                    a.toggleCallback(t)) : a.$.fireEvent("collapse", t)
                }
                if (!a._openedContainers[t])
                    return;
                const s = a._openedContainers[t].indexOf(e);
                -1 !== s && a._openedContainers[t].splice(s, 1)
            }
            _collapseAll(t, e) {
                const r = this;
                for (let n = r._openedContainers.length - 1; n >= 2 && void 0 !== r._openedContainers[n]; n--)
                    for (let o = r._openedContainers[n].length - 1; o >= 0; o--)
                        r._closeSubContainersTreeMode(n, r._openedContainers[n][o], void 0, t, e);
                r.hasAnimation || r._checkOverflow(r.$.mainContainer, !1, [r.$.scrollButtonNear, r.$.scrollButtonFar]);
                for (let t = r._openedContainers.length - 1; t >= 2; t--) {
                    const e = r._openedContainers[t];
                    if (void 0 !== e && 0 !== e.length)
                        break;
                    r._openedContainers.splice(t, 1)
                }
                2 === r._openedContainers.length && (r._openedContainers = [])
            }
            _collapseSection(t) {
                const e = this
                  , r = t.scrollHeight + "px";
                e._treeAnimationInProgress = t,
                t.style.transition = "none",
                requestAnimationFrame((function() {
                    "tree" === e.mode || e._minimized ? (t.style.height = r,
                    t.style.transition = "",
                    requestAnimationFrame((function() {
                        t.style.height = "0px",
                        "smart-tree" === e.tagName.toLowerCase() && t.$.addClass("smart-visibility-hidden"),
                        "0px" === r && e._transitionendHandlerCollapse(e, t)
                    }
                    ))) : t.style.transition = ""
                }
                )),
                t.addEventListener("transitionend", e._transitionendHandlerCollapse)
            }
            _createElement() {
                const t = this
                  , e = t.mode;
                t.setAttribute("role", "menu"),
                t.$.mainContainer.id = t.id + "MainContainer",
                t.setAttribute("aria-orientation", "horizontal" === t.mode ? "horizontal" : "vertical"),
                t._positionDetection = new Smart.Utilities.PositionDetection(t),
                t._positionDetection.getDropDownParent(),
                t._reparentMenu(),
                t.disabled && (t.$.scrollButtonNear.disabled = !0,
                t.$.scrollButtonFar.disabled = !0),
                null === t.dataSource && t.$.mainContainer.firstElementChild instanceof HTMLUListElement && t._processUList();
                const r = (t.shadowRoot || t).querySelectorAll("smart-menu-item, smart-menu-items-group")
                  , n = function() {
                    const r = t.animation;
                    t._changeScrollButtonsArrows(),
                    t._setFocusable(),
                    "dropDown" === e && !1 === t.opened && (t.hasAnimation ? (t.animation = "none",
                    t.$.addClass("smart-visibility-hidden"),
                    t.animation = r) : t.$.addClass("smart-visibility-hidden")),
                    t._menuItems = {},
                    t.$.mainContainer.setAttribute("animation", r),
                    null === t.dataSource ? t._processHTML(t.$.mainContainer, 1) : t._processDataSource(),
                    t._checkContainersLength(!0),
                    null === t.dropDownAppendTo && !t.$mainContainer.hasClass("simple") && "tree" !== t.mode || "scroll" !== t.overflow || (t.$mainContainer.addClass("scroll-buttons-shown"),
                    t.$scrollButtonNear.removeClass("smart-hidden"),
                    t.$scrollButtonFar.removeClass("smart-hidden"),
                    t._updateScrollButtonVisibility(t.$.mainContainer, "horizontal" === e, [t.$.scrollButtonNear, t.$.scrollButtonFar])),
                    t._applyMinimizeIconTemplate(t.minimizeIconTemplate, null),
                    "tree" === e && t._applyTreeMode(),
                    null !== t.minimizeWidth && t.offsetWidth <= t.minimizeWidth ? t.minimize() : t._checkOverflow(t.$.mainContainer, "horizontal" === e, [t.$.scrollButtonNear, t.$.scrollButtonFar]),
                    t._expandItemsByDefault(),
                    t._refreshCheckableItems(),
                    t.__onCompleted && (t._onCompleted = t.__onCompleted,
                    t.__onCompleted = null,
                    t._onCompleted())
                };
                0 === r.length || t.enableShadowDOM || t.isInShadowDOM ? n() : (t._onCompleted && (t.__onCompleted = t._onCompleted,
                t._onCompleted = null),
                t._ensureItemsReady(r, n))
            }
            _ensureItemsReady(t, e) {
                const r = this
                  , n = function() {
                    const r = function(e) {
                        for (let r = 0; r < t.length; r++)
                            t[r].context = "node" === e ? t[r] : document
                    };
                    r("node"),
                    e(),
                    r()
                };
                if (0 === t.length)
                    n();
                else {
                    r._nodesReadyListeners = 0;
                    for (let e = 0; e < t.length; e++) {
                        const o = t[e]
                          , a = function() {
                            const t = r.context;
                            r.context = r,
                            r._nodesReadyListeners--,
                            0 === r._nodesReadyListeners && (n(),
                            delete r._nodesReadyListeners),
                            r.context = t
                        }
                        .bind(r);
                        o.isCompleted || (r._nodesReadyListeners++,
                        o.completeHandlers = [],
                        o._onCompleted = a)
                    }
                    0 === r._nodesReadyListeners && n()
                }
            }
            _createItemHTMLStructure(t, e, r, n) {
                const o = this
                  , a = "smart-" + o._element + "-item-label-container"
                  , i = "smart-" + o._element + "-item-label-element"
                  , s = document.createDocumentFragment()
                  , d = t.children;
                let l, m, c, u;
                for (let t = 0; t < d.length; t++) {
                    const e = d[t];
                    if (e.classList && (e.classList && e.classList.contains(a) ? l = e : e.classList && e.classList.contains(i) && (m = e),
                    l && m))
                        break
                }
                if (l) {
                    const e = l.querySelector("." + i);
                    if (null !== e) {
                        t.insertBefore(e.firstElementChild, t.children[0]);
                        const r = "smart-" + o._element + "-drop-down"
                          , n = "smart-" + o._element + "-item-container"
                          , a = t.querySelector("." + r);
                        if (a) {
                            const e = t.querySelector("." + n);
                            for (; e.childNodes.length; )
                                t.appendChild(e.firstChild);
                            a.remove()
                        }
                    }
                    l.remove()
                }
                m && m.remove(),
                l = document.createElement("div"),
                m = document.createElement("div");
                let p = document.createElement("span");
                t.menu = o,
                e > 1 ? (t.originalIndex = n,
                c = r.path + "." + t.originalIndex,
                t.parentItem = r,
                u = r) : (t.originalIndex = n,
                c = "" + n,
                u = o),
                o.checkboxes && u.checkable && ("checkbox" === u.checkMode ? t.setAttribute("role", "menuitemcheckbox") : "radioButton" === u.checkMode && t.setAttribute("role", "menuitemradio")),
                t.path = c,
                o._menuItems[c] = t,
                l.className = a,
                m.className = i,
                "tree" === o._element && o._setIndentation(l, e, o.rightToLeft ? "paddingRight" : "paddingLeft");
                const h = Array.from(t.childNodes);
                for (let t = 0; t < h.length; t++) {
                    const e = h[t];
                    if (e instanceof Smart.MenuItem || e instanceof Smart.MenuItemsGroup)
                        break;
                    p.appendChild(e)
                }
                if ("" === p.innerHTML.trim()) {
                    const e = t.label || t.getAttribute("label");
                    e && "" !== e ? o._setLabel(e, p, t, !0) : (t.set("label", "Item " + n),
                    p.innerHTML = "Item " + n)
                } else
                    t.set("label", p.innerHTML.trim());
                if (t.setAttribute("aria-label", t.label),
                t instanceof Smart.MenuItemsGroup && void 0 === t.titleLabel && (t.titleLabel = t.label),
                m.appendChild(p),
                s.appendChild(m),
                t.set("level", e),
                t.set("shortcut", t.shortcut || t.getAttribute("shortcut") || ""),
                t.shortcut && t instanceof Smart.MenuItem) {
                    const e = document.createElement("div");
                    e.id = t.id + "Shortcut",
                    e.className = "smart-" + o._element + "-item-shortcut",
                    e.innerHTML = t.shortcut,
                    s.appendChild(e),
                    t.setAttribute("aria-describedby", e.id)
                }
                l.appendChild(s),
                t.insertBefore(l, t.children[0]),
                t.id || (t.id = o.id + "ItemP" + t.path.replace(/\./g, "_") + "L" + t.label.replace(/[^a-zA-Z0-9\-\_]/g, ""))
            }
            _createMenuItemsGroupContainer(t, e) {
                const r = this
                  , n = t.children
                  , o = "smart-" + r._element + "-drop-down"
                  , a = "smart-" + r._element + "-item-container";
                let i, s;
                for (let t = 0; t < n.length; t++) {
                    const e = n[t];
                    if (e.classList && (e.classList && e.classList.contains(o) ? i = e : e.classList && e.classList.contains(a) && (s = e),
                    i && s))
                        break
                }
                if (i || (i = document.createElement("div")),
                s || (s = document.createElement("div")),
                i.innerHTML = s.innerHTML = "",
                i.id = t.id + "Container",
                i.className = "smart-" + r._element + "-drop-down smart-visibility-hidden",
                r._edgeMacFF && 2 === e && "tree" !== r.mode && (i.className += " not-in-view"),
                i.$ || (i.$ = Smart.Utilities.Extend(i)),
                i.level = e,
                i.setAttribute("level", e),
                "menu" === r._element ? (t.setAttribute("aria-owns", i.id),
                i.setAttribute("role", "menu")) : i.setAttribute("role", "group"),
                i.menuItemsGroup = t,
                s.className = a,
                s.$ || (s.$ = Smart.Utilities.Extend(s)),
                s.container = i,
                s.menuItemsGroup = t,
                t.checkable && s.setAttribute("checkable", ""),
                s.setAttribute("check-mode", t.checkMode),
                s.setAttribute("role", "presentation"),
                i.itemContainer = s,
                i.contains(s) || i.appendChild(s),
                null !== t.dropDownHeight) {
                    let e = i.querySelector(".smart-spin-button.smart-scroll-button-near")
                      , n = i.querySelector(".smart-spin-button.smart-scroll-button-far");
                    e || (e = document.createElement("smart-repeat-button")),
                    n || (n = document.createElement("smart-repeat-button")),
                    e.className = "smart-menu-scroll-button smart-spin-button smart-scroll-button-near smart-hidden",
                    e.setAttribute("aria-label", "Scroll up"),
                    e.innerHTML = '<div class="smart-arrow smart-arrow-up" aria-hidden="true"></div>',
                    e.animation = r.animation,
                    e.unfocusable = !0,
                    e.rightToLeft = r.rightToLeft,
                    n.className = "smart-menu-scroll-button smart-spin-button smart-scroll-button-far smart-hidden",
                    n.setAttribute("aria-label", "Scroll down"),
                    n.innerHTML = '<div class="smart-arrow smart-arrow-down" aria-hidden="true"></div>',
                    n.animation = r.animation,
                    n.unfocusable = !0,
                    n.rightToLeft = r.rightToLeft,
                    i.contains(e) || i.insertBefore(e, s),
                    i.contains(n) || i.appendChild(n),
                    i.$.addClass("drop-down-height-set"),
                    s.dropDownHeightSet = !0,
                    s.checkOverflow = !0,
                    i.style.height = t.dropDownHeight + "px",
                    r._containersFixedHeight.push(i),
                    r._additionalScrollButtons.push([e, n])
                }
                return i
            }
            _discardKeyboardHover(t) {
                this._focusedViaKeyboard && (!t && this._focusedViaKeyboard instanceof Smart.MenuItemsGroup && this._isContainerOpened(this._focusedViaKeyboard.level + 1, this._focusedViaKeyboard.container) || (this._focusedViaKeyboard.$.removeClass("focus"),
                this._focusedViaKeyboard.removeAttribute("focus"),
                this._focusedViaKeyboard.$.removeClass("hover"),
                this._focusedViaKeyboard.removeAttribute("hover"),
                this._focusedViaKeyboard = void 0))
            }
            _documentDownHandler(t) {
                const e = this;
                "down" === e.closeAction && e._closeOnDocumentInteraction(t.originalEvent)
            }
            _documentUpHandler(t) {
                const e = this
                  , r = t.originalEvent.target;
                if (e.disabled || e.displayLoadingIndicator || !r.closest)
                    return;
                const n = "up" === e.closeAction && e._closeOnDocumentInteraction(t.originalEvent);
                if (n)
                    return;
                let o, a;
                if (e.isInShadowDOM ? (o = e.isInShadowDOM ? e.getRootNode().activeElement : e.shadowRoot && e.shadowRoot.activeElement || document.activeElement,
                a = e.$.container.contains(t.originalEvent.composedPath()[0])) : (o = document.activeElement,
                a = e.contains(r)),
                !n && e !== o && null === o.closest("[template-applied]")) {
                    if (a || r.closest(".smart-list-menu-view") === e.$.view)
                        return void e.focus();
                    const t = r.closest(".smart-drop-down-repositioned");
                    t && t.ownerElement === e && e.focus()
                }
            }
            _closeOnDocumentInteraction(t) {
                const e = this
                  , r = t.target;
                let n, o;
                if (e.isInShadowDOM ? (n = t.composedPath()[0],
                o = e.$.container.contains(n)) : o = e.contains(r),
                "dropDown" === e.mode && e.opened) {
                    const t = r.closest(".smart-drop-down-repositioned");
                    if (!(o || t && t.ownerElement === e))
                        return e.close({
                            trigger: "interaction",
                            target: e.isInShadowDOM ? n : r
                        }),
                        !0
                }
                const a = (n || r).closest(".smart-input-drop-down-menu");
                return (!a || !e.contains(a.ownerElement)) && (!o && null === r.closest(".smart-menu-drop-down") || n && n === e.$.mainContainer || r === e.$.mainContainer ? ("tree" === e.mode || e._close(),
                !0) : void 0)
            }
            _ensureVisible(t) {
                const e = this;
                if (e._minimized)
                    return;
                const r = e.mode
                  , n = e.$.mainContainer;
                let o, a;
                if ("tree" !== r && t.parentElement !== n) {
                    if (null === t.dropDownHeight)
                        return;
                    o = t.parentElement,
                    a = [o.container.children[0], o.container.children[2]]
                } else
                    o = n,
                    a = [e.$.scrollButtonNear, e.$.scrollButtonFar];
                if (o === n && (null === e.dropDownAppendTo && "tree" !== e.mode && !n.classList.contains("simple") || !o.$.hasClass("scroll-buttons-shown") && "hidden" !== e.overflow))
                    return;
                const i = o.getBoundingClientRect()
                  , s = t.getBoundingClientRect();
                function d(e, r, n) {
                    let a = t.firstElementChild[n] + e - o[n];
                    a < 0 && (a = e),
                    o["scroll" + r] = a
                }
                function l(r, i) {
                    let s = t["offset" + r]
                      , l = o[i];
                    "Top" !== r || o === n || a[0].$.hasClass("smart-hidden") || (s -= a[0][i]),
                    d(s, r, i),
                    e._updateScrollButtonVisibility(o, "Left" === r, a),
                    l !== o[i] && d(s, r, i)
                }
                "tree" !== r ? (o === n && "horizontal" === r && (i.left > s.left || i.right < s.right) ? l("Left", "offsetWidth") : (i.top > s.top || i.bottom < s.bottom) && l("Top", "offsetHeight"),
                e._scrollInfo.set(o, {
                    left: o.scrollLeft,
                    top: o.scrollTop
                })) : e._ensureVisibleTreeMode(t, s, o, i, 0)
            }
            _ensureVisibleTreeMode(t, e, r, n, o) {
                const a = this;
                if (("menu" === a._element || "scrollButtons" === a.scrollMode) && !r.$.hasClass("scroll-buttons-shown") && "hidden" !== a.overflow)
                    return;
                const i = r.offsetHeight
                  , s = a.$scrollButtonNear.hasClass("smart-hidden");
                let d;
                if (n.top > e.top)
                    d = a._getOffsetTop(t);
                else {
                    let r = t.expanded ? t.firstElementChild.offsetHeight + parseInt(window.getComputedStyle(t.children[1]).marginTop, 10) : t.offsetHeight;
                    if ("tree" === a._element && (r += parseFloat(getComputedStyle(a).getPropertyValue("--smart-tree-item-vertical-offset")) || 0),
                    !(n.bottom < e.top + r))
                        return;
                    d = a._getOffsetTop(t) - i + r + o
                }
                "tree" === a._element && "0" === t.path && (d -= parseFloat(getComputedStyle(a).getPropertyValue("--smart-tree-item-vertical-offset"))),
                r.scrollTop = d,
                "menu" !== a._element && "scrollButtons" !== a.scrollMode || a._updateScrollButtonVisibility(r, !1, [a.$.scrollButtonNear, a.$.scrollButtonFar]),
                "auto" === a.overflow && s && !a.$scrollButtonNear.hasClass("smart-hidden") && (r.scrollTop += i - r.offsetHeight),
                a._scrollInfo.set(r, {
                    left: r.scrollLeft,
                    top: r.scrollTop
                })
            }
            _escapeHandler(t, e, r) {
                t && (t.$.removeClass("focus"),
                t.removeAttribute("focus")),
                this._closeSubContainers(e, void 0, void 0, !0),
                this._hoverViaKeyboard(r.menuItemsGroup)
            }
            _expandItemsByDefault(t) {
                const e = this;
                if (0 === e._menuItemsGroupsToExpand.length && !t || "tree" !== e.mode && !e._minimized)
                    return;
                const r = e.hasAnimation
                  , n = e.animation;
                r && (e.animation = "none"),
                t && e._collapseAll(!1);
                for (let t = 0; t < e._menuItemsGroupsToExpand.length; t++)
                    e.expandItem(e._menuItemsGroupsToExpand[t].path, void 0, !1);
                r && (e.animation = n),
                e._menuItemsGroupsToExpand = []
            }
            _expandSection(t) {
                const e = this
                  , r = t.style.height
                  , n = t.scrollHeight + "px";
                t.style.height = n,
                e._treeAnimationInProgress = t,
                r !== n && (parseFloat(r) || parseFloat(n)) ? t.addEventListener("transitionend", e._transitionendHandlerExpand) : e._transitionendHandlerExpand(e, t)
            }
            _filterInputKeyupHandler() {
                const t = this;
                t._filterTimer && clearTimeout(t._filterTimer),
                t._filterTimer = setTimeout((function() {
                    const e = t.context;
                    t.context = t,
                    t._applyFilter(t.$.filterInput.value, t._view),
                    t._checkOverflow(),
                    t.context = e
                }
                ), 300)
            }
            _findItem(t, e) {
                if ("" === e)
                    return t;
                const r = t[this.filterMember || "label"];
                if ("string" != typeof r)
                    return null;
                switch (this.filterMode) {
                case "startsWith":
                    if (0 === r.indexOf(e))
                        return t;
                    break;
                case "startsWithIgnoreCase":
                    if (0 === r.toLowerCase().indexOf(e.toLowerCase()))
                        return t;
                    break;
                case "doesNotContain":
                    if (r.indexOf(e) < 0)
                        return t;
                    break;
                case "doesNotContainIgnoreCase":
                    if (r.toLowerCase().indexOf(e.toLowerCase()) < 0)
                        return t;
                    break;
                case "contains":
                    if (r.indexOf(e) > -1)
                        return t;
                    break;
                case "containsIgnoreCase":
                    if (r.toLowerCase().indexOf(e.toLowerCase()) > -1)
                        return t;
                    break;
                case "equals":
                    if (0 === r.localeCompare(e))
                        return t;
                    break;
                case "equalsIgnoreCase":
                    if (0 === r.toLowerCase().localeCompare(e.toLowerCase()))
                        return t;
                    break;
                case "endsWith":
                    if (r.endsWith(e))
                        return t;
                    break;
                case "endsWithIgnoreCase":
                    if (r.toLowerCase().endsWith(e.toLowerCase()))
                        return t
                }
                return null
            }
            _getFirstEnabledChild(t) {
                const e = t.children;
                for (let t = 0; t < e.length; t++)
                    if (this._isChildEnabled(e[t]))
                        return e[t]
            }
            _getLastEnabledChild(t) {
                const e = t.children;
                for (let t = e.length - 1; t >= 0; t--)
                    if (this._isChildEnabled(e[t]))
                        return e[t]
            }
            _getNextEnabledChild(t) {
                if (t)
                    for (; t.nextElementSibling; ) {
                        const e = t.nextElementSibling;
                        if (this._isChildEnabled(e))
                            return e;
                        t = e
                    }
            }
            _getOffsetTop(t) {
                let e = t.offsetTop;
                for (; t.offsetParent !== this.$.mainContainer; )
                    e += (t = t.offsetParent).offsetTop;
                return e
            }
            _getPreviousEnabledChild(t) {
                if (t)
                    for (; t.previousElementSibling; ) {
                        const e = t.previousElementSibling;
                        if (this._isChildEnabled(e))
                            return e;
                        t = e
                    }
            }
            _hamburgerIconClickHandler(t, e) {
                t && t.stopPropagation();
                const r = this;
                if (void 0 === e && (e = Smart.ListMenu && r instanceof Smart.ListMenu ? r.$.view : r.$.mainContainer),
                !r.disabled)
                    if (r._minimizedDropDownOpened)
                        r._close();
                    else {
                        if (r._positionDetection.placeOverlay(),
                        null !== r.dropDownAppendTo) {
                            const t = r.dropDownPosition
                              , n = r.getBoundingClientRect()
                              , o = r._positionDetection.getDropDownOffset();
                            -1 !== t.indexOf("right") || "auto" === t ? r.rightToLeft ? (e.style.right = "initial",
                            e.style.left = n.left + n.width - e.offsetWidth - o.x + "px") : (e.style.left = n.left + o.x + "px",
                            e.style.right = "initial") : -1 !== t.indexOf("left") && (e.style.left = n.right - e.offsetWidth + o.x + "px",
                            e.style.right = "initial"),
                            -1 !== t.indexOf("bottom") || -1 !== t.indexOf("overlay") || "auto" === t ? e.style.top = n.bottom + o.y + "px" : -1 !== t.indexOf("top") && (e.style.top = n.top + o.y + "px")
                        } else
                            e.style.right = "";
                        r._edgeMacFF && e.$.removeClass("not-in-view"),
                        e.$.removeClass("smart-visibility-hidden"),
                        r.$hamburgerIcon.addClass("smart-close-button"),
                        r.$.hamburgerIcon.setAttribute("aria-expanded", !0),
                        r._minimizedDropDownOpened = !0,
                        r._browserBoundsDetection(e)
                    }
            }
            _handleOverflowChange() {
                const t = this
                  , e = t.$.mainContainer;
                if ((t._minimized || null === t.dropDownAppendTo && !e.classList.contains("simple") && "tree" !== t.mode) && !(Smart.ListMenu && t instanceof Smart.ListMenu))
                    return;
                const r = t.overflow;
                let n;
                "horizontal" === t.mode ? (n = !0,
                e.scrollLeft = 0) : (n = !1,
                e.scrollTop = 0),
                "hidden" === r ? (e.classList.remove("scroll-buttons-shown"),
                t.$scrollButtonNear.addClass("smart-hidden"),
                t.$scrollButtonFar.addClass("smart-hidden")) : (t.$.scrollButtonNear.disabled = t.disabled,
                t.$.scrollButtonFar.disabled = t.disabled,
                "auto" === r ? (t.$scrollButtonNear.addClass("smart-hidden"),
                t.$scrollButtonFar.addClass("smart-hidden"),
                t._checkOverflow(e, n, [t.$.scrollButtonNear, t.$.scrollButtonFar])) : (e.classList.add("scroll-buttons-shown"),
                e.classList.remove("one-button-shown"),
                t.$scrollButtonNear.removeClass("smart-hidden"),
                t.$scrollButtonFar.removeClass("smart-hidden"),
                t._updateScrollButtonVisibility(e, n, [t.$.scrollButtonNear, t.$.scrollButtonFar]))),
                t._scrollInfo.set(e, {
                    left: e.scrollLeft,
                    top: e.scrollTop
                })
            }
            _hideMainContainerScrollButtons() {
                this.$scrollButtonNear.addClass("smart-hidden"),
                this.$scrollButtonFar.addClass("smart-hidden"),
                this.$mainContainer.removeClass("scroll-buttons-shown"),
                this.$mainContainer.removeClass("one-button-shown")
            }
            _hoverViaKeyboard(t) {
                if (!t)
                    return;
                t.$.addClass("focus"),
                t.setAttribute("focus", ""),
                this._focusedViaKeyboard = t,
                this._ensureVisible(t)
            }
            _isBranchExpanded(t) {
                if ("tree" !== this.mode)
                    return !0;
                let e = !0;
                for (; t.parentItem; )
                    e = e && t.parentItem.expanded,
                    t = t.parentItem;
                return e
            }
            _isChildEnabled(t) {
                return !(t.disabled || t.templateApplied || t.hidden || t instanceof HTMLDivElement || 0 === t.offsetHeight)
            }
            _isContainerOpened(t, e) {
                const r = this;
                return "tree" === r.mode || r._minimized ? (r._openedContainers[t] || (r._openedContainers[t] = []),
                -1 !== r._openedContainers[t].indexOf(e)) : r._openedContainers[t] === e
            }
            _keydownHandler(t) {
                const e = this;
                let r = t.key;
                if (e.getRootNode().activeElement !== e || -1 === ["ArrowDown", "ArrowLeft", "ArrowRight", "ArrowUp", "End", "Enter", "Escape", "Home", " "].indexOf(r) || e.disabled)
                    return;
                t.preventDefault();
                const n = e.mode;
                if ("tree" === n || e._minimized)
                    return void e._keydownHandlerTreeMode(r);
                const o = e.dropDownPosition
                  , a = -1 !== o.indexOf("left")
                  , i = "top-left" === o || "top-right" === o
                  , s = e._openedContainers;
                let d, l = e.$.mainContainer, m = 1;
                for (let t = s.length - 1; t >= 0; t--)
                    if (void 0 !== s[t]) {
                        l = s[t],
                        m = l.level,
                        l = l.itemContainer;
                        break
                    }
                switch (d = l.querySelector('[focus][level="' + m + '"]'),
                e.rightToLeft && ("ArrowLeft" === r ? r = "ArrowRight" : "ArrowRight" === r && (r = "ArrowLeft")),
                r) {
                case "ArrowDown":
                    1 === m ? "horizontal" !== n || i ? "horizontal" !== n && e._levelOneNavigate("_getFirstEnabledChild", d, l) : e._levelOneOpenDropDown(d) : e._navigate("_getNextEnabledChild", d, l);
                    break;
                case "ArrowLeft":
                    a ? 1 === m ? "horizontal" === n ? e._levelOneNavigate("_getLastEnabledChild", d, l) : e._levelOneOpenDropDown(d) : d instanceof Smart.MenuItemsGroup ? e._selectionHandler({
                        target: d,
                        isTrusted: !0
                    }) : e._levelOneNavigateFromLowerLevel("_getPreviousEnabledChild", d) : e._arrowLeftHandler(m, n, d, l);
                    break;
                case "ArrowRight":
                    a ? 1 === m ? "horizontal" === n && e._levelOneNavigate("_getFirstEnabledChild", d, l) : 2 === m ? e._levelOneNavigateFromLowerLevel("_getNextEnabledChild", d) : e._escapeHandler(d, m, l) : e._arrowRightHandler(m, n, d, l);
                    break;
                case "ArrowUp":
                    1 === m ? "horizontal" === n && i ? e._levelOneOpenDropDown(d) : "horizontal" !== n && e._levelOneNavigate("_getLastEnabledChild", d, l) : e._navigate("_getPreviousEnabledChild", d, l);
                    break;
                case "End":
                case "Home":
                    {
                        const t = "End" === r ? e._getLastEnabledChild(l) : e._getFirstEnabledChild(l);
                        if (!t || d === t)
                            return;
                        d && (d.$.removeClass("focus"),
                        d.removeAttribute("focus")),
                        e._hoverViaKeyboard(t);
                        break
                    }
                case "Enter":
                    d && e._selectionHandler({
                        target: d,
                        isTrusted: !0
                    });
                    break;
                case "Escape":
                    m > 1 ? (2 === m && e._positionDetection.removeOverlay(),
                    e._escapeHandler(d, m, l)) : "dropDown" === n && e.opened && e.close({
                        trigger: "interaction",
                        target: "Escape"
                    });
                    break;
                case " ":
                    d && e._toggleItem(d)
                }
            }
            _keydownHandlerTreeMode(t) {
                const e = this
                  , r = Array.from(e.$.mainContainer.querySelectorAll("smart-menu-item, smart-menu-items-group"))
                  , n = e.$.mainContainer.getElementsByClassName("focus")[0];
                function o(t) {
                    const r = t.level;
                    return !1 === t.disabled && !0 !== t.templateApplied && (1 === r || r > 1 && e._isContainerOpened(r, t.parentElement.container) && t.getBoundingClientRect().height > 0)
                }
                function a(t) {
                    for (let a = t; a < r.length; a++) {
                        const t = r[a];
                        if (o(t)) {
                            if (n) {
                                if (n === t)
                                    break;
                                n.$.removeClass("focus"),
                                n.removeAttribute("focus")
                            }
                            e._hoverViaKeyboard(t);
                            break
                        }
                    }
                }
                function i(t) {
                    for (let a = t; a >= 0; a--) {
                        const t = r[a];
                        if (o(t)) {
                            if (n) {
                                if (n === t)
                                    break;
                                n.$.removeClass("focus"),
                                n.removeAttribute("focus")
                            }
                            e._hoverViaKeyboard(t);
                            break
                        }
                    }
                }
                function s() {
                    n.level > 1 && (n.$.removeClass("focus"),
                    n.removeAttribute("focus"),
                    e._hoverViaKeyboard(n.parentItem))
                }
                let d;
                switch (t) {
                case "ArrowDown":
                    d = n ? r.indexOf(n) + 1 : 0,
                    a(d);
                    break;
                case "ArrowLeft":
                    if (!n)
                        return;
                    if (n instanceof Smart.MenuItem)
                        s();
                    else {
                        if (e._isContainerOpened(n.level + 1, n.container))
                            return void e._closeSubContainers(n.level + 1, n.container, !0, !0);
                        s()
                    }
                    break;
                case "ArrowRight":
                    if (!n || n instanceof Smart.MenuItem)
                        return;
                    e._isContainerOpened(n.level + 1, n.container) ? (n.$.removeClass("focus"),
                    n.removeAttribute("focus"),
                    e._hoverViaKeyboard(e._getFirstEnabledChild(n.itemContainer))) : e._selectionHandler({
                        target: n,
                        type: "keydown",
                        isTrusted: !0
                    }, n);
                    break;
                case "ArrowUp":
                    d = n ? r.indexOf(n) - 1 : r.length - 1,
                    i(d);
                    break;
                case "End":
                    i(r.length - 1);
                    break;
                case "Enter":
                    e._minimized && !e._minimizedDropDownOpened ? e._hamburgerIconClickHandler(void 0, e.$.mainContainer) : n && e._selectionHandler({
                        target: n,
                        type: "keydown",
                        isTrusted: !0
                    });
                    break;
                case "Escape":
                    e._minimized && e._minimizedDropDownOpened && e._close();
                    break;
                case "Home":
                    a(0);
                    break;
                case " ":
                    n && e._toggleItem(n)
                }
            }
            _lazyInitItems() {
                const t = this;
                t._inLazyInit || (t._inLazyInit = !0,
                t._menuItems = {},
                t._processHTML(t.$.mainContainer, 1),
                t._expandItemsByDefault(),
                t._refreshCheckableItems(),
                cancelAnimationFrame(Smart.Menu.processTimer),
                delete Smart.Menu.processTimer,
                t._inLazyInit = !1,
                t.$.scrollViewer && t.$.scrollViewer.refresh())
            }
            _levelOneNavigate(t, e, r) {
                const n = this;
                if (e)
                    "_getLastEnabledChild" === t ? n._navigate("_getPreviousEnabledChild", e, r) : n._navigate("_getNextEnabledChild", e, r);
                else {
                    const e = n[t](r);
                    e && n._hoverViaKeyboard(e)
                }
            }
            _levelOneNavigateFromLowerLevel(t, e) {
                const r = this
                  , n = r[t](r._openedContainers[2].menuItemsGroup);
                n && (e && (e.$.removeClass("focus"),
                e.removeAttribute("focus")),
                r._closeSubContainers(2),
                n instanceof Smart.MenuItemsGroup ? r._selectionHandler({
                    target: n,
                    isTrusted: !0
                }) : r._hoverViaKeyboard(n))
            }
            _levelOneOpenDropDown(t) {
                t && t instanceof Smart.MenuItemsGroup && this._selectionHandler({
                    target: t,
                    isTrusted: !0
                })
            }
            _mainContainerHandler(t) {
                const e = this;
                if (e._minimized && null !== e.dropDownAppendTo)
                    switch (t.type) {
                    case "click":
                        e._selectionHandler(t);
                        break;
                    case "mouseleave":
                        e._mouseleaveHandler(t);
                        break;
                    case "mouseout":
                    case "mouseover":
                        e._mouseoutMouseoverHandler(t)
                    }
            }
            _menuItemSelectionHandler(t, e) {
                const r = this;
                function n() {
                    r.enableShadowDOM && (r.shadowRoot.activeElement || document.activeElement) !== r && null !== r.dropDownAppendTo && "click" === e.type && !r.shadowRoot.contains(t) ? r.focus() : document.activeElement === r || null === r.dropDownAppendTo || "click" !== e.type || r.contains(t) || r.focus()
                }
                if (t.disabled || t.templateApplied)
                    n();
                else {
                    if (!r._toggleItem(t)) {
                        if (r.$.fireEvent("itemClick", {
                            item: t,
                            label: t.label,
                            value: t.value
                        }),
                        e.target && "A" !== e.target.nodeName) {
                            const e = t.querySelector("a");
                            e && e.click()
                        }
                        if ("tree" !== r.mode && (r._close(),
                        "dropDown" === r.mode))
                            return r._ripple(t, e),
                            void r.close({
                                trigger: "interaction",
                                target: t
                            })
                    }
                    r._ripple(t, e),
                    n()
                }
            }
            _menuItemsGroupSelectionHandler(t, e, r) {
                const n = this
                  , o = n.mode
                  , a = t.container
                  , i = a.level
                  , s = "tree" !== o && !n._minimized;
                if (n._treeAnimationInProgress === a)
                    return;
                if (n._discardKeyboardHover(),
                n.getRootNode().activeElement === n || null === n.dropDownAppendTo || "click" !== e.type || n.contains(e.target) || n.focus(),
                "click" === e.type && (!e.target.classList.contains("smart-" + n._element + "-items-group-arrow") && n._toggleItem(t) || "mouseenter" === n.selectionMode && "tree" !== o && !n._minimized))
                    return;
                let d = n.hasAnimation;
                if (n._isContainerOpened(i, a))
                    n._closeSubContainers(i, a, !0, !1 !== r),
                    s && t.hasAttribute("focus") && (n._focusedViaKeyboard = t);
                else {
                    if (n.$.fireEvent("expanding", {
                        item: t,
                        label: t.label,
                        path: t.path,
                        value: t.value,
                        children: t.itemContainer.children
                    }).defaultPrevented)
                        return;
                    if (n._positionDetection.placeOverlay(),
                    s && n._closeSubContainers(i),
                    d && !s && ("expand" !== e.type && (n._ensureVisibleOnTransitionend = t),
                    n._expandSection(a)),
                    n._edgeMacFF && 2 === i && s && a.$.removeClass("not-in-view"),
                    a.$.removeClass("smart-visibility-hidden"),
                    s || "expand" !== e.type) {
                        if (s)
                            "keydown" === e.type && (n._focusedViaKeyboard = t);
                        else {
                            const e = n.$.mainContainer.getElementsByClassName("focus")[0];
                            e && (e.$.removeClass("focus"),
                            e.removeAttribute("focus")),
                            n._focusedViaKeyboard = t
                        }
                        t.$.addClass("focus"),
                        t.setAttribute("focus", "")
                    }
                    if (t.$.addClass("smart-" + n._element + "-items-group-opened"),
                    t.$.addClass("smart-" + n._element + "-items-group-expanded"),
                    t.setAttribute("aria-expanded", !0),
                    n._addOpenedContainer(i, a),
                    s) {
                        if (n._ensureVisible(t),
                        t.level > 1 && t.parentElement.dropDownHeightSet) {
                            const e = n.dropDownPosition
                              , r = t.getBoundingClientRect().top - t.parentElement.container.getBoundingClientRect().top;
                            -1 !== e.indexOf("bottom") || "auto" === e ? a.style.top = r + "px" : -1 !== e.indexOf("top") ? a.style.top = r + t.offsetHeight + "px" : a.style.top = r + t.offsetHeight / 2 + "px"
                        }
                        a.itemContainer.checkOverflow && a.itemContainer.dropDownHeightSet && (n._checkOverflow(a.itemContainer, !1, [a.children[0], a.children[2]]),
                        delete a.itemContainer.checkOverflow)
                    }
                    n._positionExternalContainer(a, t),
                    "tree" === o || n._minimized ? d || n._browserBoundsDetection(n.$.mainContainer) : n._browserBoundsDetection(a),
                    void 0 === e.type && n._hoverViaKeyboard(n._getFirstEnabledChild(t.itemContainer)),
                    !1 !== r && n.$.fireEvent("expand", {
                        item: t,
                        label: t.label,
                        path: t.path,
                        value: t.value,
                        children: t.itemContainer.children
                    })
                }
                s ? n._ripple(t, e) : "tree" !== o || d || (n._checkOverflow(n.$.mainContainer, !1, [n.$.scrollButtonNear, n.$.scrollButtonFar]),
                n._minimized || "expand" === e.type || n._ensureVisible(t))
            }
            _mouseenterHandler() {
                const t = this;
                t.autoFocusOnMouseenter && t.getRootNode().activeElement !== t && t.focus()
            }
            _mouseleaveHandler(t) {
                const e = this;
                if ("mouseenter" === e.selectionMode && "tree" !== e.mode && !e._minimized) {
                    if (null !== e.dropDownAppendTo && t.relatedTarget)
                        if (e.contains(t.target)) {
                            const r = t.relatedTarget.closest(".smart-menu-drop-down");
                            if (r && r.ownerElement === e)
                                return
                        } else if (e.contains(t.relatedTarget))
                            return;
                    e._isElementHovered = !1,
                    e._autoCloseTimeout = setTimeout((function() {
                        const t = e.context;
                        clearTimeout(e._autoCloseTimeout),
                        e._isElementHovered || (e.context = e,
                        e._close(),
                        e.context = t)
                    }
                    ), e.autoCloseDelay)
                }
            }
            _mouseoutMouseoverHandler(t) {
                const e = this;
                if (e.disabled || e.displayLoadingIndicator)
                    return;
                let r = t.target.closest("smart-menu-item") || t.target.closest("smart-menu-items-group");
                if (e.enableShadowDOM && (r = t.composedPath()[0].closest("smart-menu-item") || t.composedPath()[0].closest("smart-menu-items-group") || r),
                "mouseover" === t.type && (e._isElementHovered = !0),
                null !== r && !r.disabled && !r.templateApplied && ("tree" !== e.mode && !e._minimized || !r.hasAttribute("focus") || !t.relatedTarget || t.target.parentElement !== t.relatedTarget && t.relatedTarget.parentElement !== t.target))
                    if (e._discardKeyboardHover(!1),
                    "mouseover" === t.type) {
                        "mouseenter" !== e.selectionMode || "tree" === e.mode || e._minimized || (r instanceof Smart.MenuItemsGroup && !r.hasAttribute("hover") ? e._selectionHandler(t, r) : r instanceof Smart.MenuItem && e._closeSubContainers(r.level + 1));
                        const n = t.target.closest(".smart-menu-drop-down");
                        (!n || n && !r.contains(n)) && (r.$.addClass("hover"),
                        r.setAttribute("hover", ""),
                        e._discardKeyboardHover(!0))
                    } else {
                        if ("tree" !== e.mode && !e._minimized && ("mouseenter" === e.selectionMode && t.relatedTarget === e.$.mainContainer && e._close(),
                        r instanceof Smart.MenuItemsGroup && r.container && !r.container.$.hasClass("smart-visibility-hidden")))
                            return;
                        r.$.removeClass("hover"),
                        r.removeAttribute("hover")
                    }
            }
            _moveDropDownsToExternalContainer() {
                const t = this;
                for (let e = 0; e < t._containersInBody.length; e++) {
                    const r = t._containersInBody[e];
                    t._dropDownParent.appendChild(r),
                    r.$.listen("click", t._selectionHandler.bind(t)),
                    r.$.listen("mouseleave", t._mouseleaveHandler.bind(t)),
                    r.$.listen("mouseout", t._mouseoutMouseoverHandler.bind(t)),
                    r.$.listen("mouseover", t._mouseoutMouseoverHandler.bind(t))
                }
                for (let e = 0; e < t._containers.length; e++) {
                    const r = t._containers[e];
                    r.ownerElement = t,
                    "" !== t.theme && r.classList.add(t.theme),
                    t.rightToLeft && r.setAttribute("right-to-left", ""),
                    r.classList.add("smart-drop-down-repositioned"),
                    r.setAttribute("mode", t.mode),
                    r.setAttribute("drop-down-position", t.dropDownPosition),
                    t.checkboxes && r.setAttribute("checkboxes", "")
                }
            }
            _moveDropDownsToMenu() {
                const t = this;
                for (let e = 0; e < t._containersInBody.length; e++) {
                    const r = t._containersInBody[e];
                    r.$.unlisten("click"),
                    r.$.unlisten("mouseleave"),
                    r.$.unlisten("mouseout"),
                    r.$.unlisten("mouseover"),
                    r.style.left = "",
                    r.style.right = "",
                    r.style.top = "",
                    r.style.marginLeft = "",
                    r.style.marginTop = "",
                    r.menuItemsGroup.appendChild(r)
                }
                for (let e = 0; e < t._containers.length; e++) {
                    const r = t._containers[e];
                    "" !== t.theme && r.classList.remove(t.theme),
                    r.classList.remove("smart-drop-down-repositioned"),
                    r.removeAttribute("mode"),
                    r.removeAttribute("drop-down-position"),
                    r.removeAttribute("checkboxes"),
                    r.removeAttribute("right-to-left")
                }
            }
            _navigate(t, e, r) {
                const n = this;
                if (!e)
                    return void ("_getNextEnabledChild" === t ? n._hoverViaKeyboard(n._getFirstEnabledChild(r)) : n._hoverViaKeyboard(n._getLastEnabledChild(r)));
                const o = n[t](e);
                o && (e.$.removeClass("focus"),
                e.removeAttribute("focus"),
                n._hoverViaKeyboard(o))
            }
            _positionExternalContainer(t, e) {
                const r = this;
                if (null === r.dropDownAppendTo || 2 !== t.level)
                    return;
                const n = r.dropDownPosition
                  , o = r.mode
                  , a = e.getBoundingClientRect()
                  , i = r._positionDetection.getDropDownOffset()
                  , s = a.top + i.y
                  , d = a.bottom + i.y;
                let l = a.left + i.x
                  , m = a.right + i.x;
                switch (t.style.top = t.style.left = t.style.right = "",
                r.rightToLeft && (t.style.right = "initial"),
                -1 !== n.indexOf("left") ? (l -= t.offsetWidth,
                "horizontal" !== o && "overlay-left" !== n || (l += a.width),
                t.style.left = l + "px",
                t.style.right = "initial") : "horizontal" === o || "overlay-right" === n ? t.style.left = l + "px" : r.rightToLeft ? t.style.left = m - t.offsetWidth + "px" : t.style.left = l + a.width + "px",
                n) {
                case "bottom-right":
                case "bottom-left":
                case "auto":
                    t.style.top = "horizontal" === o ? d + "px" : s + "px";
                    break;
                case "top-right":
                case "top-left":
                    t.style.top = "horizontal" === o ? s - t.offsetHeight + "px" : d - t.offsetHeight + "px";
                    break;
                case "overlay-right":
                case "overlay-left":
                    t.style.top = s + a.height / 2 + "px"
                }
            }
            _processDataSource() {
                const t = this
                  , e = t.dataSource
                  , r = t.displayMember
                  , n = t.itemsMember
                  , o = t.valueMember
                  , a = t.$.mainContainer
                  , i = document.createDocumentFragment();
                function s(e, a) {
                    let i;
                    if (Array.isArray(e[n]) && e[n].length > 0) {
                        i = document.createElement("smart-" + t._element + "-items-group"),
                        !0 === e.checkable && i.set("checkable", !0),
                        "string" == typeof e.checkMode && i.set("checkMode", e.checkMode),
                        e.dropDownHeight && i.set("dropDownHeight", e.dropDownHeight),
                        !0 === e.expanded && "tree" === t.mode && (i.set("expanded", !0),
                        i.setAttribute("aria-expanded", !0));
                        for (let t = 0; t < e[n].length; t++)
                            s(e[n][t], i)
                    } else
                        i = document.createElement("smart-" + t._element + "-item"),
                        void 0 !== e.shortcut && i.set("shortcut", e.shortcut),
                        e.customAttribute && i.setAttribute(e.customAttribute, "");
                    i.isDirty = !1,
                    void 0 !== e.id && /^[A-Za-z]+[\w\-\:\.]*$/.test(e.id) && (i.id = e.id),
                    !0 === e.checked && (i.set("checked", !0),
                    i.setAttribute("aria-checked", !0)),
                    !0 === e.disabled && i.set("disabled", !0),
                    void 0 !== e[r] ? i.set("label", e[r]) : "string" == typeof e[n] && i.set("label", e[n]),
                    !0 === e.selected && i.set("selected", !0),
                    !0 === e.separator && i.set("separator", !0),
                    void 0 !== e[o] && i.set("value", e[o]),
                    a.appendChild(i)
                }
                a.innerHTML = "",
                a instanceof Smart.ScrollViewer && a.removeAll();
                for (let t = 0; t < e.length; t++) {
                    s(e[t], i)
                }
                t.$.mainContainer.appendChild(i),
                t._processHTML(t.$.mainContainer, 1)
            }
            _processHTML(t, e, r) {
                const n = this;
                let o, a;
                e > 1 && (o = n._createMenuItemsGroupContainer(t, e),
                a = o.itemContainer,
                (t.expanded || t.hasAttribute("expanded")) && "tree" === n.mode ? n._menuItemsGroupsToExpand.push(t) : (t.set("expanded", !1),
                t.removeAttribute("expanded"),
                t.setAttribute("aria-expanded", !1)));
                const i = Array.from(t.children)
                  , s = []
                  , d = document.createDocumentFragment();
                let l = 0;
                for (let r = 0; r < i.length; r++) {
                    if (e > 1 && 0 === r) {
                        l++;
                        continue
                    }
                    const o = i[r];
                    o instanceof Smart.MenuItem || o instanceof Smart.MenuItemsGroup ? (n._createItemHTMLStructure(o, e, t, r - l),
                    (o.checked || o.hasAttribute("checked")) && (o.disabled || o.hasAttribute("disabled") || o.templateApplied ? (o.set("checked", !1),
                    o.removeAttribute("checked"),
                    o.removeAttribute("aria-checked")) : s.push(o)),
                    e > 1 && d.appendChild(o),
                    o instanceof Smart.MenuItemsGroup && n._processHTML(o, e + 1)) : (o.parentElement.removeChild(o),
                    l++)
                }
                if (e > 1) {
                    if (a.appendChild(d),
                    t.container = o,
                    t.itemContainer = a,
                    t instanceof Smart.MenuItemsGroup) {
                        const r = document.createElement("div");
                        r.className = "smart-" + n._element + "-items-group-arrow",
                        "menu" === n._element ? r.setAttribute("role", "presentation") : (r.setAttribute("role", "button"),
                        r.setAttribute("aria-label", "Toggle")),
                        n._setArrowDirection(r, e),
                        t.firstElementChild.appendChild(r)
                    }
                    n._containers.push(o),
                    2 === e && (n._containersInBody.push(o),
                    n._edgeMacFF && o.addEventListener("transitionend", (function(t) {
                        t.target === this && this.$.hasClass("smart-visibility-hidden") && (this.style.left = "",
                        this.style.top = "",
                        this.$.addClass("not-in-view"))
                    }
                    ))),
                    null === n.dropDownAppendTo || "tree" === n.mode || n._minimized ? t.appendChild(o) : (o.ownerElement = n,
                    n.rightToLeft ? o.setAttribute("right-to-left", "") : o.removeAttribute("right-to-left"),
                    o.classList.add("smart-drop-down-repositioned"),
                    o.setAttribute("mode", n.mode),
                    o.setAttribute("drop-down-position", n.dropDownPosition),
                    n.checkboxes && o.setAttribute("checkboxes", ""),
                    "" !== n.theme && o.$.addClass(n.theme),
                    o.setAttribute("animation", n.animation),
                    2 === e ? (n._dropDownParent.appendChild(o),
                    o.$.listen("click", n._selectionHandler.bind(n)),
                    o.$.listen("mouseleave", n._mouseleaveHandler.bind(n)),
                    o.$.listen("mouseout", n._mouseoutMouseoverHandler.bind(n)),
                    o.$.listen("mouseover", n._mouseoutMouseoverHandler.bind(n))) : t.appendChild(o))
                }
                n._validateRadioButtonSelection(t, e, s),
                n._sortItems && !1 !== r && n._sortItems(t)
            }
            _processUList() {
                const t = this
                  , e = new RegExp(/<li>(.(?!<\/li>)|\n)*?<ul>/)
                  , r = new RegExp(/<\/ul>(.|\n)*?<\/li>/);
                let n = t.$.mainContainer.firstElementChild.innerHTML;
                for (n = n.replace(/\r?\n|\r/g, ""),
                n = n.replace(/<li(.|\n)*?>/g, "<li>"),
                n = n.replace(/<li><\/li>/g, "<li> </li>"),
                n = n.replace(/<ul(.|\n)*?>/g, "<ul>"); e.test(n); ) {
                    const r = e.exec(n)
                      , o = "<smart-" + t._element + "-items-group>" + r[0].slice(4, r[0].length - 4);
                    n = n.replace(r[0], o)
                }
                for (; r.test(n); ) {
                    const e = r.exec(n)
                      , o = "</smart-" + t._element + "-items-group>";
                    n = n.replace(e[0], o)
                }
                n = n.replace(/li>/g, "smart-" + t._element + "-item>"),
                t.$.mainContainer.innerHTML = n
            }
            _refreshContainersArrays() {
                const t = this;
                for (let e = t._containers.length - 1; e >= 0; e--) {
                    const r = t._containers[e];
                    if (!document.body.contains(r)) {
                        t._containers.splice(e, 1);
                        const n = t._containersFixedHeight.indexOf(r);
                        n > -1 && (t._containersFixedHeight.splice(n, 1),
                        t._additionalScrollButtons.splice(n, 1))
                    }
                }
                t._checkContainersLength()
            }
            _refreshItemPaths(t, e, r, n) {
                const o = this;
                let a;
                a = e ? t : t.container.itemContainer;
                const i = r ? r(t) : a.children;
                for (let a = 0; a < i.length; a++) {
                    const s = i[a];
                    let d;
                    n && (s.originalIndex = a),
                    d = e ? "" + a : t.path + "." + a,
                    s.path = d,
                    o._menuItems[d] = s,
                    s instanceof Smart.MenuItemsGroup && o._refreshItemPaths(s, void 0, r, n)
                }
            }
            _removeContainerFixedHeight() {
                const t = this;
                for (let e = 0; e < t._containersFixedHeight.length; e++) {
                    const r = t._containersFixedHeight[e];
                    r.style.height = "",
                    r.itemContainer.$.removeClass("scroll-buttons-shown"),
                    r.itemContainer.$.removeClass("one-button-shown"),
                    r.children[0].$.addClass("smart-hidden"),
                    r.children[2].$.addClass("smart-hidden"),
                    r.itemContainer.checkOverflow = !0
                }
            }
            _removeContainersInBody() {
                const t = this;
                if (null !== t.dropDownAppendTo && !t._minimized)
                    for (let e = 0; e < t._containersInBody.length; e++)
                        t._containersInBody[e].remove()
            }
            _reparentMenu(t, e) {
                const r = this;
                if ("dropDown" === r.mode && (null !== r._dropDownParent || t) && r._dropDownParent !== r.parentElement) {
                    if (t && null !== e) {
                        if (null === r._dropDownParent)
                            return r._positionRelativeTo.appendChild(r),
                            void (r._positionRelativeTo = null)
                    } else
                        r._positionRelativeTo = r.parentElement;
                    r._dropDownParent.appendChild(r)
                }
            }
            refresh() {
                const t = this;
                if (t._suppressResizeHandler)
                    return void delete t._suppressResizeHandler;
                const e = t.minimizeWidth
                  , r = t.mode;
                if (null !== e && "dropDown" !== r) {
                    if (t.offsetWidth <= e && !t._minimized)
                        return void t.minimize();
                    t.offsetWidth > e && t.maximize()
                }
                (null !== t.dropDownAppendTo || "tree" === r || t.$mainContainer.hasClass("simple")) && t._checkOverflow(t.$.mainContainer, "horizontal" === r, [t.$.scrollButtonNear, t.$.scrollButtonFar])
            }
            _resizeHandler() {
                this.refresh()
            }
            _ripple(t, e) {
                if (this.hasRippleAnimation && "click" === e.type)
                    return Smart.Utilities.Animation.Ripple.animate(t, e.pageX, e.pageY),
                    !0
            }
            _scroll(t) {
                if (t.closest("[template-applied]"))
                    return;
                const e = this
                  , r = e.$.mainContainer
                  , n = e.mode
                  , o = t.classList.contains("smart-scroll-button-near") ? -1 : 1;
                let a;
                if (t.parentElement === e.$.container)
                    a = r,
                    "tree" !== n && e._closeSubContainers(2),
                    "horizontal" === e.mode ? (r.scrollLeft = r.scrollLeft + 10 * o,
                    e._updateScrollButtonVisibility(r, !0, [e.$.scrollButtonNear, e.$.scrollButtonFar])) : (r.scrollTop = r.scrollTop + 10 * o,
                    e._updateScrollButtonVisibility(r, !1, [e.$.scrollButtonNear, e.$.scrollButtonFar]));
                else {
                    const r = t.parentElement
                      , n = r.itemContainer;
                    a = n,
                    e._closeSubContainers(r.level + 1),
                    n.scrollTop = n.scrollTop + 10 * o,
                    e._updateScrollButtonVisibility(n, !1, [r.children[0], r.children[2]])
                }
                e._scrollInfo.set(a, {
                    left: a.scrollLeft,
                    top: a.scrollTop
                })
            }
            _selectionHandler(t, e) {
                const r = this
                  , n = t.target;
                if (n.closest("[template-applied]") && t.stopPropagation(),
                !r.disabled && !r.displayLoadingIndicator) {
                    if (void 0 === e) {
                        if ("click" === t.type) {
                            const e = n.closest("smart-repeat-button");
                            if (e)
                                return void r._scroll(e, t)
                        }
                        if (!t.isTrusted)
                            return;
                        const o = n.closest("smart-" + r._element + "-item");
                        if (o)
                            return void r._menuItemSelectionHandler(o, t);
                        if ((e = n.closest("smart-" + r._element + "-items-group")) && (n === e.container || n === e.container.firstElementChild))
                            return
                    }
                    e && !e.disabled && r._menuItemsGroupSelectionHandler(e, t)
                }
            }
            _setArrowDirection(t, e) {
                const r = this
                  , n = r.mode;
                "tree" === n || r._minimized ? t.className = "smart-" + r._element + "-items-group-arrow down smart-arrow-down" : "overlay" !== r.dropDownPosition.slice(0, 7) ? 2 === e && "horizontal" === n ? "top" !== r.dropDownPosition.slice(0, 3) ? t.className = "smart-menu-items-group-arrow down smart-arrow-down" : t.className = "smart-menu-items-group-arrow up smart-arrow-up" : t.className = "smart-menu-items-group-arrow " + (r.rightToLeft ? "left smart-arrow-left" : "right smart-arrow-right") : t.className = "smart-menu-items-group-arrow minus"
            }
            _setFocusable() {
                const t = this;
                if (t.disabled || t.unfocusable)
                    return void t.removeAttribute("tabindex");
                const e = t.getAttribute("tabindex");
                (null === e || e < 0) && t.setAttribute("tabindex", 0)
            }
            _setItemLabel(t, e) {
                const r = this.context
                  , n = t.querySelector(".smart-menu-item-label-element>span");
                this.context = this,
                this._setLabel(e, n, t, !0),
                this._checkOverflow(this.$.mainContainer, "horizontal" === this.mode, [this.$.scrollButtonNear, this.$.scrollButtonFar]),
                this.context = r
            }
            _setLabel(t, e, r, n) {
                const o = document.getElementById(t);
                if (null !== o && "template" === o.tagName.toLowerCase()) {
                    const a = document.importNode(o.content, !0);
                    if (r instanceof Smart.MenuItem)
                        e.appendChild(a),
                        n && (r.setAttribute("template-applied", ""),
                        r.templateApplied = !0);
                    else if (Smart.ListMenu && this instanceof Smart.ListMenu) {
                        const t = new RegExp(/{{title="(.*)"}}/);
                        for (let e = 0; e < a.childNodes.length; e++)
                            t.test(a.childNodes[e].innerHTML) ? (r.titleLabel = t.exec(a.childNodes[e].innerHTML)[1],
                            a.childNodes[e].innerHTML = a.childNodes[e].innerHTML.replace(t, "")) : t.test(a.childNodes[e].textContent) && (r.titleLabel = t.exec(a.childNodes[e].textContent)[1],
                            a.childNodes[e].textContent = a.childNodes[e].textContent.replace(t, ""));
                        void 0 === r.titleLabel && (r.titleLabel = a.textContent),
                        e.appendChild(a)
                    } else
                        e.innerHTML = t,
                        r.titleLabel = t
                } else
                    e.innerHTML = t,
                    r instanceof Smart.MenuItemsGroup && (r.titleLabel = t)
            }
            _toggleItem(t) {
                const e = this;
                if (e.checkboxes) {
                    const r = 1 === t.level ? e : t.parentItem;
                    if (r.checkable) {
                        const n = e._getItemCheckableInfo(t, r);
                        let o = !1;
                        return "none" !== n.checkMode && ("checkbox" === n.checkMode ? (o = !0,
                        t.set("checked", !t.checked),
                        t.checked ? t.setAttribute("aria-checked", !0) : t.removeAttribute("aria-checked"),
                        e.$.fireEvent("itemCheckChange", {
                            item: t,
                            label: t.label,
                            value: t.value,
                            checked: t.checked
                        })) : "radioButton" !== n.checkMode || t.checked || (o = !0,
                        t.set("checked", !0),
                        t.setAttribute("aria-checked", !0),
                        e._uncheckSiblings(t, n.siblings),
                        e.$.fireEvent("itemCheckChange", {
                            item: t,
                            label: t.label,
                            value: t.value,
                            checked: !0
                        })),
                        t instanceof Smart.MenuItem && o && e.$.fireEvent("itemClick", {
                            item: t,
                            label: t.label,
                            value: t.value
                        }),
                        "tree" === e.mode || "ListMenu" === e.elementName || e.preventCloseOnCheck || (e._close(),
                        e.close()),
                        !0)
                    }
                }
                return !1
            }
            _getItemCheckableInfo(t, e) {
                const r = Array.from(t.parentElement.children)
                  , n = e.checkMode.replace(/\s/g, "").split(",");
                let o, a;
                if (1 === n.length)
                    o = n[0],
                    a = r;
                else {
                    let e = 0
                      , i = !1;
                    a = [];
                    for (let n = 0; n < r.length; n++) {
                        const o = r[n];
                        if (a.push(o),
                        o === t && (i = !0),
                        o.separator) {
                            if (!0 === i)
                                break;
                            e++,
                            a = []
                        }
                    }
                    o = n[e]
                }
                return {
                    checkMode: o,
                    siblings: a
                }
            }
            _refreshCheckableItems(t) {
                const e = this
                  , r = !e.checkboxes;
                (t ? [t] : [e].concat(e._containers.map(t=>t.menuItemsGroup))).forEach(t=>{
                    const n = Array.from((t === e ? e.$.mainContainer : t.itemContainer).children);
                    let o = t.checkMode.replace(/\s/g, "").split(",");
                    if (r || !t.checkable || 1 === o.length)
                        return void n.forEach(t=>t.removeAttribute("check-type"));
                    let a = 0;
                    o = o.map(t=>-1 === ["checkbox", "radioButton", "none"].indexOf(t) ? "none" : t);
                    let i = []
                      , s = [];
                    for (let t = 0; t < n.length; t++) {
                        const r = n[t];
                        let d = o[a];
                        if (void 0 === d && (d = o[a] = "none"),
                        "none" !== d && e._isChildEnabled(r) || (r.checked = !1,
                        r.removeAttribute("aria-checked")),
                        "none" === d ? r.setAttribute("role", "menuitem") : "checkbox" === d ? r.setAttribute("role", "menuitemcheckbox") : "radioButton" === d && (r.setAttribute("role", "menuitemradio"),
                        i.push(r),
                        r.checked && s.push(r)),
                        r.setAttribute("check-type", d),
                        r.separator) {
                            if (i.length > 0)
                                if (s.length > 1)
                                    for (let t = 0; t < s.length - 1; t++)
                                        s[t].checked = !1;
                                else if (0 === s.length)
                                    for (let t = 0; t < i.length; t++)
                                        if (e._isChildEnabled(i[t])) {
                                            i[t].checked = !0;
                                            break
                                        }
                            i = [],
                            s = [],
                            a++
                        }
                    }
                    t.checkMode = o.join(", ")
                }
                )
            }
            _transitionendHandler(t) {
                const e = this;
                "dropDown" === e.mode && e.opened && t.target === e && "opacity" === t.propertyName && (e._checkOverflowOnOpen && (e._checkOverflow(e.$.mainContainer, !1, [e.$.scrollButtonNear, e.$.scrollButtonFar]),
                delete e._checkOverflowOnOpen),
                e.getRootNode().activeElement === e || e._noAutoFocus || e.focus())
            }
            _transitionendHandlerCollapse() {
                let t, e;
                if (1 === arguments.length) {
                    if ("visibility" === arguments[0].propertyName)
                        return;
                    e = this,
                    t = e.menuItemsGroup.menu
                } else
                    t = arguments[0],
                    e = arguments[1];
                e.menuItemsGroup.$.removeClass("smart-" + t._element + "-items-group-expanded"),
                e.menuItemsGroup.setAttribute("aria-expanded", !1),
                e.removeEventListener("transitionend", t._transitionendHandlerCollapse),
                e.style.height = null,
                e.$.addClass("smart-visibility-hidden"),
                t._checkOverflow(t.$.mainContainer, !1, [t.$.scrollButtonNear, t.$.scrollButtonFar]),
                t._minimized && t._browserBoundsDetection(t.$.mainContainer),
                delete t._treeAnimationInProgress
            }
            _transitionendHandlerExpand() {
                let t, e;
                if (1 === arguments.length) {
                    if ("visibility" === arguments[0].propertyName)
                        return;
                    e = this,
                    t = e.menuItemsGroup.menu
                } else
                    t = arguments[0],
                    e = arguments[1];
                e.removeEventListener("transitionend", t._transitionendHandlerExpand),
                e.style.height = null,
                t._checkOverflow(t.$.mainContainer, !1, [t.$.scrollButtonNear, t.$.scrollButtonFar]),
                t._minimized && t._browserBoundsDetection(t.$.mainContainer),
                t._ensureVisibleOnTransitionend && (t._ensureVisible(t._ensureVisibleOnTransitionend),
                delete t._ensureVisibleOnTransitionend),
                delete t._treeAnimationInProgress
            }
            _uncheckSiblings(t, e) {
                for (let r = 0; r < e.length; r++) {
                    const n = e[r];
                    n !== t && n.checked && (n.set("checked", !1),
                    n.removeAttribute("aria-checked"),
                    this.$.fireEvent("itemCheckChange", {
                        item: n,
                        label: n.label,
                        value: n.value,
                        checked: !1
                    }))
                }
            }
            _unsortItems(t, e) {
                const r = this;
                let n, o, a = [];
                t === r.$.mainContainer ? (o = t,
                n = t.children) : (o = t.container.firstElementChild,
                n = o.children);
                for (let t = 0; t < n.length; t++) {
                    const o = n[t];
                    a[o.originalIndex] = o,
                    o instanceof Smart.MenuItemsGroup && void 0 === e && r._unsortItems(o)
                }
                if (!(a.length < 2))
                    for (let t = 0; t < a.length; t++)
                        o.appendChild(a[t])
            }
            _updateItemRoles(t) {
                const e = this;
                for (let r in e._menuItems) {
                    const n = e._menuItems[r]
                      , o = n.parentItem || e;
                    t && o !== t || (e.checkboxes && o.checkable ? n.setAttribute("role", "checkbox" === o.checkMode ? "menuitemcheckbox" : "menuitemradio") : n.setAttribute("role", "menuitem"))
                }
                e._refreshCheckableItems(t)
            }
            _updateScrollButtonVisibility(t, e, r) {
                const n = this.overflow
                  , o = t === this.$.mainContainer;
                if (o && "hidden" === n)
                    return;
                let a, i, s, d = !0, l = !0;
                if (e ? (a = "scrollLeft",
                i = "offsetWidth",
                s = "scrollWidth") : (a = "scrollTop",
                i = "offsetHeight",
                s = "scrollHeight"),
                0 === Math.round(t[a]) && (d = !1),
                Math.round(t[i] + t[a]) >= Math.round(t[s]) && (l = !1),
                o && "auto" !== n)
                    "scroll" !== n || this.disabled || (r[0].disabled = !d,
                    r[1].disabled = !l);
                else {
                    if (d && l)
                        return r[0].$.removeClass("smart-hidden"),
                        r[1].$.removeClass("smart-hidden"),
                        void t.classList.remove("one-button-shown");
                    d ? r[0].$.removeClass("smart-hidden") : r[0].$.addClass("smart-hidden"),
                    l ? r[1].$.removeClass("smart-hidden") : r[1].$.addClass("smart-hidden"),
                    t.classList.add("one-button-shown")
                }
            }
            _validateRadioButtonSelection(t, e, r) {
                const n = this;
                if (n.checkboxes) {
                    let o, a;
                    if (1 === e ? (o = n,
                    a = n.$.mainContainer) : (o = t,
                    a = t.itemContainer),
                    "radioButton" === o.checkMode && o.checkable)
                        if (r.length > 1)
                            for (let t = r.length - 2; t >= 0; t--)
                                r[t].set("checked", !1),
                                r[t].removeAttribute("aria-checked");
                        else if (0 === r.length) {
                            const t = n._getFirstEnabledChild(a);
                            t && (t.set("checked", !0),
                            t.setAttribute("aria-checked", !0))
                        }
                }
            }
        }
        )
    },
    6: function(t, e, r) {
        (e = r(0)(!1)).push([t.i, '.smart-input-group {\r\n  position: relative;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-wrap: wrap;\r\n  flex-wrap: wrap;\r\n  -webkit-box-align: stretch;\r\n  -ms-flex-align: stretch;\r\n  align-items: stretch;\r\n  box-sizing: border-box;\r\n  font-family: var(--smart-font-family);\r\n}\r\n.smart-input-group smart-input .smart-drop-down-button {\r\n  border-left: none;\r\n}\r\n.smart-input-group smart-button[focus] {\r\n  z-index: 3;\r\n}\r\n.smart-input-group > .smart-input-group-prepend > smart-button,\r\n.smart-input-group > .smart-input-group-prepend > .smart-input-group-text {\r\n  border-top-right-radius: 0;\r\n  border-bottom-right-radius: 0;\r\n}\r\n.smart-input-group > .smart-input-group-prepend:first-child > smart-button:not(:first-child),\r\n.smart-input-group > .smart-input-group-prepend:first-child > .smart-input-group-text:not(:first-child) {\r\n  border-top-left-radius: 0;\r\n  border-bottom-left-radius: 0;\r\n}\r\n.smart-input-group > .smart-input-group-prepend:not(:first-child) > smart-button,\r\n.smart-input-group > .smart-input-group-prepend:not(:first-child) > .smart-input-group-text {\r\n  border-top-left-radius: 0;\r\n  border-bottom-left-radius: 0;\r\n}\r\n.smart-input-group > .smart-input-group-append > smart-button,\r\n.smart-input-group > .smart-input-group-append > .smart-input-group-text {\r\n  border-top-left-radius: 0;\r\n  border-bottom-left-radius: 0;\r\n}\r\n.smart-input-group > .smart-input-group-append:last-child > smart-button:not(:last-child):not(.dropdown-toggle),\r\n.smart-input-group > .smart-input-group-append:last-child > .smart-input-group-text:not(:last-child) {\r\n  border-top-right-radius: 0;\r\n  border-bottom-right-radius: 0;\r\n}\r\n.smart-input-group > .smart-input-group-append:not(:last-child) > smart-button,\r\n.smart-input-group > .smart-input-group-append:not(:last-child) > .smart-input-group-text {\r\n  border-top-right-radius: 0;\r\n  border-bottom-right-radius: 0;\r\n}\r\n.smart-input-group > .custom-file,\r\n.smart-input-group > .custom-select,\r\n.smart-input-group > .form-control {\r\n  position: relative;\r\n  flex: 1 1 auto;\r\n  width: 1%;\r\n  margin-bottom: 0;\r\n}\r\n.smart-input-group > .custom-file:focus,\r\n.smart-input-group > .custom-select:focus,\r\n.smart-input-group > .form-control:focus {\r\n  z-index: 3;\r\n}\r\n.smart-input-group > .custom-select:not(:first-child),\r\n.smart-input-group > .form-control:not(:first-child) {\r\n  border-top-left-radius: 0;\r\n  border-bottom-left-radius: 0;\r\n}\r\n.smart-input-group > .custom-select:not(:last-child),\r\n.smart-input-group > .form-control:not(:last-child) {\r\n  border-top-right-radius: 0;\r\n  border-bottom-right-radius: 0;\r\n}\r\n.smart-input-group > .form-control[focus] {\r\n  z-index: 3;\r\n}\r\n.smart-input-group > .custom-file + .custom-file,\r\n.smart-input-group > .custom-file + .custom-select,\r\n.smart-input-group > .custom-file + .form-control,\r\n.smart-input-group > .custom-select + .custom-file,\r\n.smart-input-group > .custom-select + .custom-select,\r\n.smart-input-group > .custom-select + .form-control,\r\n.smart-input-group > .form-control + .custom-file,\r\n.smart-input-group > .form-control + .custom-select,\r\n.smart-input-group > .form-control + .form-control {\r\n  margin-left: -1px;\r\n}\r\n\r\n.smart-input-group-append,\r\n.smart-input-group-prepend {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  box-sizing: border-box;\r\n  height: auto;\r\n}\r\n.smart-input-group-append > smart-button,\r\n.smart-input-group-prepend > smart-button {\r\n  height: 100%;\r\n}\r\n.smart-input-group-append smart-button + smart-button,\r\n.smart-input-group-append smart-button + .smart-input-group-text,\r\n.smart-input-group-append .smart-input-group-text + smart-button,\r\n.smart-input-group-append .smart-input-group-text + .smart-input-group-text,\r\n.smart-input-group-prepend smart-button + smart-button,\r\n.smart-input-group-prepend smart-button + .smart-input-group-text,\r\n.smart-input-group-prepend .smart-input-group-text + smart-button,\r\n.smart-input-group-prepend .smart-input-group-text + .smart-input-group-text {\r\n  margin-left: -1px;\r\n}\r\n\r\n.smart-input-group-prepend {\r\n  margin-right: -1px;\r\n}\r\n\r\n.smart-input-group-append {\r\n  margin-left: -1px;\r\n}\r\n\r\n.smart-input-group-text {\r\n  border-radius: var(--smart-border-radius);\r\n  display: flex;\r\n  align-items: center;\r\n  padding: .375rem .75rem;\r\n  margin-bottom: 0;\r\n  font-size: 1rem;\r\n  font-weight: 400;\r\n  line-height: 1.5;\r\n  color: var(--smart-surface-color);\r\n  text-align: center;\r\n  white-space: nowrap;\r\n  background-color: var(--smart-surface);\r\n  border: 1px solid var(--smart-border);\r\n}\r\n\r\n.form-control {\r\n  border-radius: var(--smart-border-radius);\r\n  height: auto;\r\n  display: block;\r\n  width: 100%;\r\n  padding: .375rem .75rem;\r\n  font-size: var(--smart-font-size);\r\n  line-height: 1.5;\r\n  color: #495057;\r\n  background-color: var(--smart-background);\r\n  background-clip: padding-box;\r\n  -webkit-background-clip: padding-box;\r\n  border: 1px solid var(--smart-border);\r\n  transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;\r\n}\r\n.form-control:focus, .form-control[focus] {\r\n  color: var(--smart-color);\r\n  background-color: var(--smart-background);\r\n  border-color: var(--smart-primary);\r\n  outline: 0;\r\n}\r\n\r\n.smart-form {\r\n  background: var(--smart-background);\r\n  color: var(--smart-background-color);\r\n  border: 0px solid var(--smart-border);\r\n  border-radius: var(--smart-border-radius);\r\n  box-sizing: border-box;\r\n  overflow: visible;\r\n  width: 600px;\r\n  font-family: var(--smart-font-family);\r\n  font-size: var(--smart-font-size);\r\n  display: block;\r\n}\r\n@media only screen and (max-width: 600px) {\r\n  .smart-form {\r\n    width: 350px;\r\n  }\r\n}\r\n\r\n.smart-form-row {\r\n  padding: 5px 0px;\r\n  box-sizing: border-box;\r\n}\r\n.smart-form-row .smart-form-control-label {\r\n  display: flex;\r\n  align-items: center;\r\n  white-space: nowrap;\r\n  text-overflow: ellipsis;\r\n  font-family: var(--smart-font-family);\r\n  font-size: calc(0.9 * var(--smart-font-size));\r\n}\r\n.smart-form-row .smart-form-control-label[required]:after {\r\n  content: \'*\';\r\n  color: #a94442;\r\n  font-size: 14px;\r\n  margin-left: 2px;\r\n  margin-right: 2px;\r\n}\r\n.smart-form-row .smart-form-control {\r\n  display: flex;\r\n  box-sizing: border-box;\r\n}\r\n.smart-form-row .smart-form-control + .smart-form-label[required]:before {\r\n  content: \'*\';\r\n  color: #a94442;\r\n  font-size: 14px;\r\n  margin-left: 2px;\r\n  margin-right: 2px;\r\n}\r\n.smart-form-row .smart-form-control + .smart-form-control-label[required]:after {\r\n  content: \'\';\r\n}\r\n\r\n.smart-form-row-flex {\r\n  display: flex;\r\n}\r\n\r\n.smart-form-control .smart-form-control-addon {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n.smart-form-control.left {\r\n  justify-content: flex-start;\r\n}\r\n.smart-form-control.center {\r\n  justify-content: center;\r\n}\r\n.smart-form-control.right {\r\n  justify-content: flex-end;\r\n}\r\n.smart-form-control[readonly] .smart-form-editor {\r\n  pointer-events: none;\r\n}\r\n.smart-form-control[readonly] .smart-form-editor .smart-drop-down-button,\r\n.smart-form-control[readonly] .smart-form-editor .smart-calendar-button {\r\n  visibility: hidden;\r\n}\r\n.smart-form-control[readonly] .smart-form-editor textarea,\r\n.smart-form-control[readonly] .smart-form-editor input,\r\n.smart-form-control[readonly] .smart-form-editor div,\r\n.smart-form-control[readonly] .smart-form-editor span {\r\n  border: none !important;\r\n}\r\n.smart-form-control[readonly] .smart-form-editor + div,\r\n.smart-form-control[readonly] .smart-form-editor + .smart-form-control-addon,\r\n.smart-form-control[readonly] .smart-form-editor + .smart-form-control-icon {\r\n  visibility: hidden;\r\n}\r\n\r\n.smart-form-control-icon:after {\r\n  content: attr(tooltip);\r\n  visibility: hidden;\r\n  white-space: nowrap;\r\n  margin-top: 25px;\r\n  position: absolute;\r\n  border-top-left-radius: var(--smart-border-top-left-radius);\r\n  border-top-right-radius: var(--smart-border-top-right-radius);\r\n  border-bottom-left-radius: var(--smart-border-bottom-left-radius);\r\n  border-bottom-right-radius: var(--smart-border-bottom-right-radius);\r\n  padding: 7px;\r\n  background-color: var(--smart-secondary);\r\n  color: var(--smart-secondary-color);\r\n  font-size: calc(var(--smart-font-size) - 2px);\r\n  opacity: 0;\r\n  transform: scale(0);\r\n  transition: opacity 0.2s ease-out, transform 0.1s ease-out;\r\n  z-index: 9;\r\n}\r\n.smart-form-control-icon:hover:after {\r\n  visibility: visible;\r\n  opacity: 0.9;\r\n  transform: scale(1);\r\n  color: var(--smart-secondary-color);\r\n  background: var(--smart-secondary);\r\n}\r\n\r\n.smart-form-control-label[readonly]:after {\r\n  visibility: hidden;\r\n}\r\n\r\n.smart-form-group .smart-form-group-content {\r\n  display: grid;\r\n  grid-template-columns: none;\r\n}\r\n.smart-form-group[columns="2"] > .smart-form-group-content {\r\n  grid-template-columns: 50% 50%;\r\n}\r\n.smart-form-group[columns="3"] > .smart-form-group-content {\r\n  grid-template-columns: 33% 33% 33%;\r\n}\r\n.smart-form-group[columns="4"] > .smart-form-group-content {\r\n  grid-template-columns: 25% 25% 25% 25%;\r\n}\r\n.smart-form-group[columns="5"] > .smart-form-group-content {\r\n  grid-template-columns: 20% 20% 20% 20% 20%;\r\n}\r\n.smart-form-group[columns="6"] > .smart-form-group-content {\r\n  grid-template-columns: 16.66% 16.66% 16.66% 16.66% 16.66% 16.66%;\r\n}\r\n\r\n.smart-form-group-label {\r\n  font-size: 20px;\r\n  font-family: var(--smart-font-family);\r\n  padding-top: 10px;\r\n  padding-bottom: 10px;\r\n  margin-bottom: 20px;\r\n  border-bottom: 1px solid var(--smart-border);\r\n}\r\n.smart-form-group-label.center {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n.smart-form-group-label.right {\r\n  display: flex;\r\n  justify-content: flex-end;\r\n}\r\n\r\n.smart-form-group-buttons {\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  padding-right: 30px;\r\n}\r\n.smart-form-group-buttons smart-button {\r\n  margin-left: 20px;\r\n}\r\n\r\n.smart-form-editor {\r\n  width: 100%;\r\n}\r\n.smart-form-editor.smart-validation-success:not(smart-check-box):not([focus]) > div.smart-container::after {\r\n  display: none;\r\n}\r\n.smart-form-editor.smart-validation-success:not(smart-check-box)[focus] > div.smart-container::after {\r\n  left: initial;\r\n  right: 0px;\r\n  z-index: 9;\r\n}\r\n.smart-form-editor.smart-validation-error:not(smart-check-box) > div.smart-container::after {\r\n  left: initial;\r\n  right: 0px;\r\n  z-index: 9;\r\n}\r\n.smart-form-editor.smart-numeric-text-box.smart-validation-success:not(smart-check-box)[focus] > div.smart-container input, .smart-form-editor.smart-numeric-text-box.smart-validation-error:not(smart-check-box) > div.smart-container input {\r\n  padding-right: 30px;\r\n}\r\n.smart-form-editor.smart-numeric-text-box[focus][spin-buttons].smart-validation-success[focus] input, .smart-form-editor.smart-numeric-text-box[focus][spin-buttons].smart-validation-error[focus] input, .smart-form-editor.smart-number-input[focus]:not([drop-down-button-position="none"]).smart-validation-success[focus] input, .smart-form-editor.smart-number-input[focus]:not([drop-down-button-position="none"]).smart-validation-error[focus] input {\r\n  padding-right: 30px;\r\n}\r\n.smart-form-editor.smart-numeric-text-box.smart-validation-success:not(smart-check-box)[focus] > div.smart-container::after, .smart-form-editor.smart-numeric-text-box.smart-validation-error:not(smart-check-box) > div.smart-container::after, .smart-form-editor.smart-number-input.smart-validation-success:not(smart-check-box)[focus] > div.smart-container::after, .smart-form-editor.smart-number-input.smart-validation-error:not(smart-check-box) > div.smart-container::after, .smart-form-editor.smart-combo-box.smart-validation-success:not(smart-check-box)[focus] > div.smart-container::after, .smart-form-editor.smart-combo-box.smart-validation-error:not(smart-check-box) > div.smart-container::after, .smart-form-editor.smart-date-time-picker.smart-validation-success:not(smart-check-box)[focus] > div.smart-container::after, .smart-form-editor.smart-date-time-picker.smart-validation-error:not(smart-check-box) > div.smart-container::after, .smart-form-editor.smart-drop-down-list.smart-validation-success:not(smart-check-box)[focus] > div.smart-container::after, .smart-form-editor.smart-drop-down-list.smart-validation-error:not(smart-check-box) > div.smart-container::after {\r\n  right: 20px;\r\n}\r\n.smart-form-editor.smart-invalid + .smart-error-label-like-after-element, .smart-form-editor.smart-valid + .smart-success-label-like-after-element {\r\n  left: initial;\r\n  right: 0px;\r\n  z-index: 9;\r\n}\r\n\r\ninput.smart-form-editor.smart-valid:not(:focus) + .smart-success-label-like-after-element {\r\n  display: none;\r\n}\r\ninput.smart-form-editor.smart-invalid + .smart-error-label-like-after-element, input.smart-form-editor.smart-valid + .smart-success-label-like-after-element {\r\n  right: 35px;\r\n}\r\n\r\n.smart-form-tab {\r\n  grid-row: 1;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  min-width: 0;\r\n  cursor: pointer;\r\n  font-family: var(--smart-font-family);\r\n  box-sizing: border-box;\r\n  transition: background-color 0.2s ease-in-out;\r\n}\r\n.smart-form-tab.selected {\r\n  border-bottom: 2px solid var(--smart-primary);\r\n  color: var(--smart-primary);\r\n}\r\n.smart-form-tab.smart-invalid {\r\n  border-bottom: 2px solid var(--smart-error);\r\n  color: var(--smart-error);\r\n}\r\n\r\n.smart-form-tab-strip {\r\n  display: grid;\r\n  grid-auto-columns: 1fr;\r\n  overflow: hidden;\r\n  border-bottom: var(--smart-border-width) solid var(--smart-border);\r\n  height: 30px;\r\n  margin-bottom: 10px;\r\n}\r\n.smart-form-tab-strip .smart-form-tab .smart-form-tab-label {\r\n  font-size: calc(var(--smart-font-size) + 1px);\r\n  min-width: 0;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  white-space: nowrap;\r\n  padding: 5px;\r\n}\r\n.smart-form-tab-strip .smart-form-tab:hover {\r\n  background: var(--smart-ui-state-hover);\r\n  color: var(--smart-ui-state-color-hover);\r\n}\r\n.smart-form-tab-strip[vertical] {\r\n  display: flex;\r\n  height: auto;\r\n  flex-direction: column;\r\n  background: var(--smart-background);\r\n  border: none;\r\n  border-radius: initial;\r\n  padding-bottom: 1px;\r\n}\r\n.smart-form-tab-strip[vertical] .smart-form-tab {\r\n  background-color: var(--smart-surface);\r\n  color: var(--smart-surface-color);\r\n  overflow: hidden;\r\n  border: var(--smart-border-width) solid var(--smart-border);\r\n  border-radius: 0px;\r\n  padding: 10px;\r\n  margin-bottom: -1px;\r\n  justify-content: left;\r\n}\r\n.smart-form-tab-strip[vertical] .smart-form-tab .smart-form-tab-label {\r\n  width: 100%;\r\n}\r\n.smart-form-tab-strip[vertical] .smart-form-tab .smart-form-tab-button {\r\n  float: right;\r\n  transition: transform 0.3s ease-in-out;\r\n  transform: rotate(-180deg);\r\n  font-size: 17px;\r\n}\r\n.smart-form-tab-strip[vertical] .smart-form-tab.selected {\r\n  background: var(--smart-ui-state-focus);\r\n}\r\n.smart-form-tab-strip[vertical] .smart-form-tab.selected .smart-form-tab-button {\r\n  transform: rotate(0deg);\r\n}\r\n.smart-form-tab-strip[vertical] .smart-form-tab.smart-invalid {\r\n  color: var(--smart-error);\r\n  background-color: var(--smart-surface);\r\n}\r\n.smart-form-tab-strip[breadcrumb] {\r\n  border: none;\r\n}\r\n.smart-form-tab-strip[breadcrumb] .smart-form-tab {\r\n  border-bottom: none;\r\n}\r\n.smart-form-tab-strip[breadcrumb] .smart-form-tab .smart-form-tab-label {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n.smart-form-tab-strip[breadcrumb] .smart-form-tab .smart-form-tab-label .circle {\r\n  border-radius: 100%;\r\n  font-family: var(--smart-font-family);\r\n  width: 12px;\r\n  height: 12px;\r\n  padding: 5px;\r\n  margin-right: 10px;\r\n  background: var(--smart-secondary);\r\n  color: var(--smart-secondary-color);\r\n  align-items: center;\r\n  justify-content: center;\r\n  display: flex;\r\n}\r\n.smart-form-tab-strip[breadcrumb] .smart-form-tab.smart-invalid {\r\n  color: var(--smart-color);\r\n}\r\n.smart-form-tab-strip[breadcrumb] .smart-form-tab.selected .smart-form-tab-label .circle {\r\n  background: var(--smart-primary);\r\n  color: var(--smart-primary-color);\r\n}\r\n\r\n.smart-form-tab-control {\r\n  padding: 0;\r\n  display: none !important;\r\n}\r\n.smart-form-tab-control.selected {\r\n  margin-bottom: -1px;\r\n  display: grid !important;\r\n}\r\n.smart-form-tab-control.selected[vertical] {\r\n  padding: 10px;\r\n  border: 1px solid var(--smart-border);\r\n}\r\n\r\n.smart-form-options-horizontal {\r\n  display: flex;\r\n}\r\n', ""]),
        t.exports = e
    },
    7: function(t, e, r) {
        (e = r(0)(!1)).push([t.i, '/* smart-element */\r\n.smart-container {\r\n    box-sizing: border-box;\r\n    font-family: inherit;\r\n    font-size: inherit;\r\n    display: block;\r\n    width: 100%;\r\n    height: 100%;\r\n    outline: none;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n.smart-container * {\r\n    box-sizing: border-box;\r\n}\r\n\r\n.smart-popup,\r\n.smart-drop-down {\r\n    position: absolute;\r\n    box-sizing: border-box;\r\n    margin: var(--smart-editor-drop-down-vertical-offset) 0px;\r\n    z-index: var(--smart-editor-drop-down-z-index);\r\n    list-style-type: none;\r\n}\r\n\r\n@font-face {\r\n    font-family: \'smart-icons\';\r\n    src: url("../font/smart-icons.woff2") format("woff2"), url("../font/smart-icons.woff") format("woff"), url("../font/smart-icons.ttf") format("truetype"), url("../font/smart-icons.eot") format("embedded-opentype");\r\n    font-weight: normal;\r\n    font-style: normal;\r\n}\r\n\r\n.smart-icons {\r\n    font-family: \'smart-icons\';\r\n    font-weight: normal;\r\n    font-style: normal;\r\n    font-size: 24px;\r\n    line-height: 1;\r\n    letter-spacing: normal;\r\n    text-transform: none;\r\n    display: inline-block;\r\n    white-space: nowrap;\r\n    word-wrap: normal;\r\n    direction: ltr;\r\n    -webkit-font-smoothing: antialiased;\r\n}\r\n\r\n\r\n.smart-arrow {\r\n    width: 100%;\r\n    height: 100%;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: 1em 1em;\r\n}\r\n\r\n.smart-arrow-up:after,\r\n.smart-arrow-down:after,\r\n.smart-arrow-left:after,\r\n.smart-arrow-right:after,\r\n.smart-arrow-left-first:after,\r\n.smart-arrow-right-last:after {\r\n    width: 100%;\r\n    height: 100%;\r\n    font-family: var(--smart-font-family-icon);\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    font-size: var(--smart-arrow-size);\r\n    color: inherit;\r\n    text-decoration: inherit;\r\n    font-variant: normal;\r\n    text-transform: none;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    align-items: center;\r\n    justify-content: center;\r\n    position: relative;\r\n}\r\n\r\n.smart-arrow-up:after {\r\n    content: var(--smart-icon-arrow-up);\r\n    top: -1px;\r\n}\r\n\r\n.smart-arrow-down:after {\r\n    content: var(--smart-icon-arrow-down);\r\n}\r\n\r\n.smart-arrow-left:after {\r\n    content: var(--smart-icon-arrow-left);\r\n}\r\n\r\n.smart-arrow-left-first:after {\r\n    content: var(--smart-icon-first-page);\r\n}\r\n\r\n.smart-arrow-right-last:after {\r\n    content: var(--smart-icon-last-page);\r\n}\r\n\r\n.smart-arrow-right:after {\r\n    content: var(--smart-icon-arrow-right);\r\n}\r\n\r\n.drawContainer {\r\n    width: 100%;\r\n    height: 100%;\r\n    position: relative;\r\n}\r\n\r\n.smart-ripple {\r\n    display: block;\r\n    position: absolute;\r\n    border-radius: 50%;\r\n    transform: scale(0);\r\n    pointer-events: none;\r\n    animation: ripple 0.35s linear;\r\n    border: none;\r\n    opacity: 0.5;\r\n}\r\n\r\n.smart-ripple.smart-animate {\r\n    animation: ripple 0.65s linear;\r\n    position: absolute;\r\n}\r\n\r\n@keyframes ripple {\r\n    100% {\r\n        opacity: 0;\r\n        transform: scale(2.5);\r\n        /*scale the element to 250% to safely cover the entire link and fade it out*/\r\n    }\r\n}\r\n\r\n.smart-overlay {\r\n    pointer-events: none;\r\n}\r\n\r\n.smart-unselectable {\r\n    -webkit-user-select: none;\r\n    -ms-user-select: none;\r\n    -moz-user-select: none;\r\n}\r\n\r\n.smart-hidden {\r\n    display: none !important;\r\n}\r\n\r\n.smart-visibility-hidden {\r\n    visibility: hidden !important;\r\n}\r\n\r\n.smart-element-init {\r\n    visibility: hidden;\r\n}\r\n\r\n.smart-element-ready {\r\n    overflow: hidden;\r\n}\r\n\r\n.smart-shown {\r\n    display: block;\r\n}\r\n\r\n.smart-resize-trigger {\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    transition: 0s;\r\n}\r\n\r\n.smart-resize-trigger-shrink {\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    transition: 0s;\r\n    width: 200%;\r\n    height: 200%;\r\n}\r\n\r\n.smart-resize-trigger-container {\r\n    display: block;\r\n    position: relative;\r\n    top: -100%;\r\n    left: 0;\r\n    height: 100%;\r\n    width: 100%;\r\n    min-height: 1px;\r\n    overflow: hidden;\r\n    pointer-events: none;\r\n    z-index: -1;\r\n    visibility: hidden;\r\n}\r\n\r\nsmart-grid .smart-loader,\r\nsmart-list-box .smart-loader,\r\nsmart-list-menu .smart-loader,\r\n.smart-list-menu-view.smart-drop-down-repositioned .smart-loader,\r\nsmart-tree .smart-loader,\r\nsmart-card-view .smart-loader,\r\nsmart-table .smart-loader {\r\n    margin: inherit;\r\n    display: block;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    opacity: 0.85;\r\n    text-align: left;\r\n    border: 6px solid rgba(43, 51, 63, 0.1);\r\n    box-sizing: border-box;\r\n    background-clip: padding-box;\r\n    border-radius: 50%;\r\n    z-index: 10;\r\n    width: calc(var(--smart-loader-size) + 10px);\r\n    height: calc(var(--smart-loader-size) + 10px);\r\n}\r\n\r\nsmart-grid .smart-loader:before,\r\nsmart-grid .smart-loader:after,\r\nsmart-list-box .smart-loader:before,\r\nsmart-list-box .smart-loader:after,\r\nsmart-list-menu .smart-loader:before,\r\nsmart-list-menu .smart-loader:after,\r\n.smart-list-menu-view.smart-drop-down-repositioned .smart-loader:before,\r\n.smart-list-menu-view.smart-drop-down-repositioned .smart-loader:after,\r\nsmart-tree .smart-loader:before,\r\nsmart-tree .smart-loader:after,\r\nsmart-card-view .smart-loader:before,\r\nsmart-card-view .smart-loader:after,\r\nsmart-table .smart-loader:before,\r\nsmart-table .smart-loader:after {\r\n    content: "";\r\n    position: absolute;\r\n    margin: -6px;\r\n    box-sizing: inherit;\r\n    width: inherit;\r\n    height: inherit;\r\n    border-radius: inherit;\r\n    opacity: 1;\r\n    border: 6px solid transparent;\r\n    animation-delay: 0.44s;\r\n    animation: smart-loader-spin 1.1s cubic-bezier(0.6, 0.2, 0, 0.8) infinite, smart-loader-spin-fade 1.1s linear infinite;\r\n}\r\n\r\nsmart-grid .smart-loader.smart-hidden,\r\nsmart-list-box .smart-loader.smart-hidden,\r\nsmart-list-menu .smart-loader.smart-hidden,\r\n.smart-list-menu-view.smart-drop-down-repositioned .smart-loader.smart-hidden,\r\nsmart-tree .smart-loader.smart-hidden,\r\nsmart-card-view .smart-loader.smart-hidden,\r\nsmart-table .smart-loader.smart-hidden {\r\n    display: none;\r\n}\r\n\r\nsmart-grid[loading-indicator-position="top"] .smart-loader,\r\nsmart-grid[loading-indicator-position="bottom"] .smart-loader,\r\nsmart-list-box[loading-indicator-position="top"] .smart-loader,\r\nsmart-list-box[loading-indicator-position="bottom"] .smart-loader,\r\nsmart-list-menu[loading-indicator-position="top"] .smart-loader,\r\nsmart-list-menu[loading-indicator-position="bottom"] .smart-loader,\r\n.smart-list-menu-view.smart-drop-down-repositioned[loading-indicator-position="top"] .smart-loader,\r\n.smart-list-menu-view.smart-drop-down-repositioned[loading-indicator-position="bottom"] .smart-loader,\r\nsmart-tree[loading-indicator-position="top"] .smart-loader,\r\nsmart-tree[loading-indicator-position="bottom"] .smart-loader {\r\n    width: var(--smart-loader-size);\r\n    height: var(--smart-loader-size);\r\n    left: 20%;\r\n}\r\n\r\nsmart-grid[loading-indicator-position="top"] .smart-loader-container,\r\nsmart-grid[loading-indicator-position="bottom"] .smart-loader-container,\r\nsmart-list-box[loading-indicator-position="top"] .smart-loader-container,\r\nsmart-list-box[loading-indicator-position="bottom"] .smart-loader-container,\r\nsmart-list-menu[loading-indicator-position="top"] .smart-loader-container,\r\nsmart-list-menu[loading-indicator-position="bottom"] .smart-loader-container,\r\n.smart-list-menu-view.smart-drop-down-repositioned[loading-indicator-position="top"] .smart-loader-container,\r\n.smart-list-menu-view.smart-drop-down-repositioned[loading-indicator-position="bottom"] .smart-loader-container,\r\nsmart-tree[loading-indicator-position="top"] .smart-loader-container,\r\nsmart-tree[loading-indicator-position="bottom"] .smart-loader-container {\r\n    display: block;\r\n    position: relative;\r\n    width: 100%;\r\n    height: 10%;\r\n    background-color: #F2F2F2;\r\n    overflow: hidden;\r\n    animation: smart-loader-container-pop-up-down 0.3s linear;\r\n}\r\n\r\nsmart-grid[loading-indicator-position="top"] .smart-loader-container.smart-hidden,\r\nsmart-grid[loading-indicator-position="bottom"] .smart-loader-container.smart-hidden,\r\nsmart-list-box[loading-indicator-position="top"] .smart-loader-container.smart-hidden,\r\nsmart-list-box[loading-indicator-position="bottom"] .smart-loader-container.smart-hidden,\r\nsmart-list-menu[loading-indicator-position="top"] .smart-loader-container.smart-hidden,\r\nsmart-list-menu[loading-indicator-position="bottom"] .smart-loader-container.smart-hidden,\r\n.smart-list-menu-view.smart-drop-down-repositioned[loading-indicator-position="top"] .smart-loader-container.smart-hidden,\r\n.smart-list-menu-view.smart-drop-down-repositioned[loading-indicator-position="bottom"] .smart-loader-container.smart-hidden,\r\nsmart-tree[loading-indicator-position="top"] .smart-loader-container.smart-hidden,\r\nsmart-tree[loading-indicator-position="bottom"] .smart-loader-container.smart-hidden {\r\n    display: none;\r\n}\r\n\r\nsmart-grid[loading-indicator-position="top"] .smart-loader-label,\r\nsmart-grid[loading-indicator-position="bottom"] .smart-loader-label,\r\nsmart-list-box[loading-indicator-position="top"] .smart-loader-label,\r\nsmart-list-box[loading-indicator-position="bottom"] .smart-loader-label,\r\nsmart-list-menu[loading-indicator-position="top"] .smart-loader-label,\r\nsmart-list-menu[loading-indicator-position="bottom"] .smart-loader-label,\r\n.smart-list-menu-view.smart-drop-down-repositioned[loading-indicator-position="top"] .smart-loader-label,\r\n.smart-list-menu-view.smart-drop-down-repositioned[loading-indicator-position="bottom"] .smart-loader-label,\r\nsmart-tree[loading-indicator-position="top"] .smart-loader-label,\r\nsmart-tree[loading-indicator-position="bottom"] .smart-loader-label {\r\n    position: absolute;\r\n    display: block;\r\n    top: 50%;\r\n    transform: translate(-50%, -50%);\r\n    left: 60%;\r\n    font-family: inherit;\r\n    font-size: inherit;\r\n    vertical-align: middle;\r\n    white-space: nowrap;\r\n}\r\n\r\nsmart-grid[loading-indicator-position="top"] .smart-loader-container,\r\nsmart-list-box[loading-indicator-position="top"] .smart-loader-container,\r\nsmart-list-menu[loading-indicator-position="top"] .smart-loader-container,\r\n.smart-list-menu-view.smart-drop-down-repositioned[loading-indicator-position="top"] .smart-loader-container,\r\nsmart-tree[loading-indicator-position="top"] .smart-loader-container {\r\n    top: 0;\r\n    position: absolute;\r\n    animation: smart-loader-container-pop-up-top 0.3s linear;\r\n}\r\n\r\nsmart-grid[loading-indicator-position="bottom"] .smart-loader-container,\r\nsmart-list-box[loading-indicator-position="bottom"] .smart-loader-container,\r\nsmart-list-menu[loading-indicator-position="bottom"] .smart-loader-container,\r\n.smart-list-menu-view.smart-drop-down-repositioned[loading-indicator-position="bottom"] .smart-loader-container,\r\nsmart-tree[loading-indicator-position="bottom"] .smart-loader-container {\r\n    top: -10%;\r\n}\r\n\r\nsmart-grid[loading-indicator-position="center"] .smart-loader,\r\nsmart-list-box[loading-indicator-position="center"] .smart-loader,\r\nsmart-list-menu[loading-indicator-position="center"] .smart-loader,\r\n.smart-list-menu-view.smart-drop-down-repositioned[loading-indicator-position="center"] .smart-loader,\r\nsmart-tree[loading-indicator-position="center"] .smart-loader {\r\n    width: calc(var(--smart-loader-size) + 10px);\r\n    height: calc(var(--smart-loader-size) + 10px);\r\n}\r\n\r\nsmart-grid[disabled] .smart-loader:before,\r\nsmart-grid[disabled] .smart-loader:after,\r\nsmart-list-box[disabled] .smart-loader:before,\r\nsmart-list-box[disabled] .smart-loader:after,\r\nsmart-list-menu[disabled] .smart-loader:before,\r\nsmart-list-menu[disabled] .smart-loader:after,\r\nsmart-tree[disabled] .smart-loader:before,\r\nsmart-tree[disabled] .smart-loader:after {\r\n    animation: none;\r\n}\r\n\r\n@keyframes smart-loader-container-pop-up-down {\r\n    0% {\r\n        top: 0;\r\n    }\r\n\r\n    20% {\r\n        top: -2%;\r\n    }\r\n\r\n    35% {\r\n        top: -6%;\r\n    }\r\n\r\n    60% {\r\n        top: -8%;\r\n    }\r\n\r\n    100% {\r\n        top: -10%;\r\n    }\r\n}\r\n\r\n@keyframes smart-loader-container-pop-up-top {\r\n    0% {\r\n        top: -10%;\r\n    }\r\n\r\n    20% {\r\n        top: -8%;\r\n    }\r\n\r\n    35% {\r\n        top: -6%;\r\n    }\r\n\r\n    60% {\r\n        top: -2%;\r\n    }\r\n\r\n    100% {\r\n        top: 0;\r\n    }\r\n}\r\n\r\n@keyframes smart-loader-spin {\r\n    100% {\r\n        transform: rotate(360deg);\r\n    }\r\n}\r\n\r\n@keyframes smart-loader-spin-fade {\r\n    0% {\r\n        border-top-color: #7A7A7A;\r\n    }\r\n\r\n    20% {\r\n        border-top-color: #7A7A7A;\r\n    }\r\n\r\n    35% {\r\n        border-top-color: transparent;\r\n    }\r\n\r\n    60% {\r\n        border-top-color: #7A7A7A;\r\n    }\r\n\r\n    100% {\r\n        border-top-color: #7A7A7A;\r\n    }\r\n}\r\n\r\n.smart-right-to-left {\r\n    direction: rtl;\r\n}\r\n\r\n.smart-micro {\r\n    font-size: 9px;\r\n}\r\n\r\n.smart-caps {\r\n    text-transform: uppercase;\r\n    letter-spacing: .1em;\r\n}\r\n\r\n.smart-strong {\r\n    font-weight: 500;\r\n}\r\n\r\n.smart-truncate {\r\n    max-width: 100%;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    white-space: nowrap;\r\n}\r\n\r\n.smart-flex-auto {\r\n    flex: 1 1 auto;\r\n    display: flex;\r\n    min-width: 0;\r\n    min-height: 0;\r\n}\r\n\r\n.smart-flex {\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.smart-quiet {\r\n    opacity: 0.75;\r\n}\r\n\r\n.smart-dragging,\r\n.smart-dragging * {\r\n    cursor: move !important;\r\n}', ""]),
        t.exports = e
    },
    76: function(t, e, r) {
        "use strict";
        r.r(e),
        r.d(e, "UIMenuItem", (function() {
            return n
        }
        ));
        class n extends HTMLElement {
            get _isUpdating() {
                return this.nativeElement ? this.nativeElement._isUpdating : void 0
            }
            set _isUpdating(t) {
                this.nativeElement && (this.nativeElement._isUpdating = t)
            }
            get checked() {
                return this.nativeElement ? this.nativeElement.checked : void 0
            }
            set checked(t) {
                if (this.nativeElement) {
                    this.nativeElement.checked = t,
                    this._isUpdatingAttribute = !0;
                    const e = this.nativeElement.getAttribute("checked");
                    this.nativeElement.hasAttribute("checked") ? this.setAttribute("checked", e) : this.removeAttribute("checked"),
                    this._isUpdatingAttribute = !1
                }
            }
            get _isUpdating() {
                return this.nativeElement ? this.nativeElement._isUpdating : void 0
            }
            set _isUpdating(t) {
                this.nativeElement && (this.nativeElement._isUpdating = t)
            }
            get disabled() {
                return this.nativeElement ? this.nativeElement.disabled : void 0
            }
            set disabled(t) {
                if (this.nativeElement) {
                    this.nativeElement.disabled = t,
                    this._isUpdatingAttribute = !0;
                    const e = this.nativeElement.getAttribute("disabled");
                    this.nativeElement.hasAttribute("disabled") ? this.setAttribute("disabled", e) : this.removeAttribute("disabled"),
                    this._isUpdatingAttribute = !1
                }
            }
            get _isUpdating() {
                return this.nativeElement ? this.nativeElement._isUpdating : void 0
            }
            set _isUpdating(t) {
                this.nativeElement && (this.nativeElement._isUpdating = t)
            }
            get label() {
                return this.nativeElement ? this.nativeElement.label : void 0
            }
            set label(t) {
                if (this.nativeElement) {
                    this.nativeElement.label = t,
                    this._isUpdatingAttribute = !0;
                    const e = this.nativeElement.getAttribute("label");
                    this.nativeElement.hasAttribute("label") ? this.setAttribute("label", e) : this.removeAttribute("label"),
                    this._isUpdatingAttribute = !1
                }
            }
            get _isUpdating() {
                return this.nativeElement ? this.nativeElement._isUpdating : void 0
            }
            set _isUpdating(t) {
                this.nativeElement && (this.nativeElement._isUpdating = t)
            }
            get level() {
                return this.nativeElement ? this.nativeElement.level : void 0
            }
            set level(t) {
                if (this.nativeElement) {
                    this.nativeElement.level = t,
                    this._isUpdatingAttribute = !0;
                    const e = this.nativeElement.getAttribute("level");
                    this.nativeElement.hasAttribute("level") ? this.setAttribute("level", e) : this.removeAttribute("level"),
                    this._isUpdatingAttribute = !1
                }
            }
            get _isUpdating() {
                return this.nativeElement ? this.nativeElement._isUpdating : void 0
            }
            set _isUpdating(t) {
                this.nativeElement && (this.nativeElement._isUpdating = t)
            }
            get separator() {
                return this.nativeElement ? this.nativeElement.separator : void 0
            }
            set separator(t) {
                if (this.nativeElement) {
                    this.nativeElement.separator = t,
                    this._isUpdatingAttribute = !0;
                    const e = this.nativeElement.getAttribute("separator");
                    this.nativeElement.hasAttribute("separator") ? this.setAttribute("separator", e) : this.removeAttribute("separator"),
                    this._isUpdatingAttribute = !1
                }
            }
            get _isUpdating() {
                return this.nativeElement ? this.nativeElement._isUpdating : void 0
            }
            set _isUpdating(t) {
                this.nativeElement && (this.nativeElement._isUpdating = t)
            }
            get shortcut() {
                return this.nativeElement ? this.nativeElement.shortcut : void 0
            }
            set shortcut(t) {
                if (this.nativeElement) {
                    this.nativeElement.shortcut = t,
                    this._isUpdatingAttribute = !0;
                    const e = this.nativeElement.getAttribute("shortcut");
                    this.nativeElement.hasAttribute("shortcut") ? this.setAttribute("shortcut", e) : this.removeAttribute("shortcut"),
                    this._isUpdatingAttribute = !1
                }
            }
            get _isUpdating() {
                return this.nativeElement ? this.nativeElement._isUpdating : void 0
            }
            set _isUpdating(t) {
                this.nativeElement && (this.nativeElement._isUpdating = t)
            }
            get value() {
                return this.nativeElement ? this.nativeElement.value : void 0
            }
            set value(t) {
                if (this.nativeElement) {
                    this.nativeElement.value = t,
                    this._isUpdatingAttribute = !0;
                    const e = this.nativeElement.getAttribute("value");
                    this.nativeElement.hasAttribute("value") ? this.setAttribute("value", e) : this.removeAttribute("value"),
                    this._isUpdatingAttribute = !1
                }
            }
            static get observedAttributes() {
                return ["style", "class", "checked", "disabled", "label", "level", "separator", "shortcut", "value"]
            }
            get properties() {
                return ["checked", "disabled", "label", "level", "separator", "shortcut", "value"]
            }
            constructor() {
                super()
            }
            get eventListeners() {
                return []
            }
            componentDidRender(t) {
                const e = this
                  , r = {}
                  , n = {};
                let o = null;
                for (let t in e.props)
                    "children" !== t && ("style" !== t ? t.startsWith("on") && -1 === e.properties.indexOf(t) ? n[t] = e.props[t] : r[t] = e.props[t] : o = e.props[t]);
                for (let t in e.attributes) {
                    const r = e.attributes[t].name;
                    if (r)
                        if ("class" !== r)
                            "style" === r && e.nativeElement.setAttribute(r, e.getAttribute(r)),
                            -1 !== e.properties.indexOf(r.replace(/-([a-z])/g, (function(t) {
                                return t[1].toUpperCase()
                            }
                            ))) && e.nativeElement.setAttribute(r, e.getAttribute(r));
                        else {
                            const t = e.getAttribute(r).trim().split(" ");
                            for (let r in t)
                                e.nativeElement.classList.contains(t[r]) || "" === t[r] || e.nativeElement.classList.add(t[r])
                        }
                }
                for (let t in r)
                    if ("class" !== t) {
                        if (r[t] !== e.nativeElement[t]) {
                            const n = t=>t.replace(/-([a-z])/g, (function(t) {
                                return t[1].toUpperCase()
                            }
                            ));
                            "hover" !== t && "active" !== t && "focus" !== t && "selected" !== t || e.nativeElement.setAttribute(t, "");
                            const o = n(t);
                            e.nativeElement[o] = r[t]
                        }
                    } else {
                        const n = r[t].trim().split(" ");
                        for (let t in n)
                            e.nativeElement.classList.contains(n[t]) || "" === n[t] || e.nativeElement.classList.add(n[t])
                    }
                for (let t in n)
                    e[t] = n[t],
                    e.nativeElement[t.toLowerCase()] = n[t];
                if (o)
                    for (let t in o)
                        e.nativeElement.style[t] = o[t]
            }
            componentDidMount() {
                this.componentDidRender(!0)
            }
            componentDidUpdate() {
                this.componentDidRender(!1)
            }
            componentWillUnmount() {
                const t = this;
                if (t.nativeElement) {
                    t.nativeElement.whenRenderedCallbacks = [];
                    for (let e = 0; e < t.eventListeners.length; e++) {
                        const r = t.eventListeners[e];
                        t.nativeElement.removeEventListener(r.substring(2).toLowerCase(), t[r])
                    }
                }
            }
            connectedCallback() {
                this.shadowRoot || this._render()
            }
            disconnectedCallback() {
                this.componentWillUnmount()
            }
            addStylesToElement(t, e) {
                const r = document.createElement("style");
                r.type = "text/css";
                for (let t = 0; t < e.length; t++) {
                    let n = document.createTextNode(e[t]);
                    n.textContent = n.textContent.replace(":root", ":host"),
                    r.appendChild(n)
                }
                if (document.adoptedStyleSheets) {
                    const e = new CSSStyleSheet;
                    e.replaceSync(r.innerHTML),
                    t.adoptedStyleSheets ? t.adoptedStyleSheets = [e] : -1 === document.adoptedStyleSheets.indexOf(e) && (document.adoptedStyleSheets = [e])
                } else
                    t.appendChild(r)
            }
            addStyle(t) {
                const e = this.shadowRoot;
                if ("string" == typeof t) {
                    const r = document.createElement("style");
                    r.type = "text/css";
                    const n = document.createTextNode(t);
                    r.appendChild(n),
                    e.appendChild(r)
                } else
                    e.appendChild(t)
            }
            attributeChangedCallback(t, e, r) {
                const n = this;
                if (n.shadowRoot && n.isReady && !n._isUpdatingAttribute)
                    if ("class" !== t)
                        n.nativeElement.setAttribute(t, r);
                    else {
                        const t = r.trim().split(" ")
                          , o = e.trim().split(" ");
                        for (let t in o)
                            "" !== o[t] && n.nativeElement.classList.remove(o[t]);
                        for (let e in t)
                            n.nativeElement.classList.contains(t[e]) || "" === t[e] || n.nativeElement.classList.add(t[e])
                    }
            }
            _render() {
                const t = this;
                if (t.parentNode) {
                    const e = document.createElement("smart-menu-item");
                    t.parentNode ? t.parentNode.replaceChild(e, t) : t.getRootNode().host.shadowRoot.replaceChild(e, t),
                    t.nativeElement = e,
                    t.componentDidMount(),
                    t.isReady = !0,
                    t.classList.add("smart-ui-component")
                }
            }
        }
        e.default = n,
        window.customElements.get("smart-ui-menu-item") || window.customElements.define("smart-ui-menu-item", n)
    },
    77: function(t, e, r) {
        "use strict";
        r.r(e),
        r.d(e, "UIMenuItemsGroup", (function() {
            return n
        }
        ));
        class n extends HTMLElement {
            get _isUpdating() {
                return this.nativeElement ? this.nativeElement._isUpdating : void 0
            }
            set _isUpdating(t) {
                this.nativeElement && (this.nativeElement._isUpdating = t)
            }
            get checkable() {
                return this.nativeElement ? this.nativeElement.checkable : void 0
            }
            set checkable(t) {
                if (this.nativeElement) {
                    this.nativeElement.checkable = t,
                    this._isUpdatingAttribute = !0;
                    const e = this.nativeElement.getAttribute("checkable");
                    this.nativeElement.hasAttribute("checkable") ? this.setAttribute("checkable", e) : this.removeAttribute("checkable"),
                    this._isUpdatingAttribute = !1
                }
            }
            get _isUpdating() {
                return this.nativeElement ? this.nativeElement._isUpdating : void 0
            }
            set _isUpdating(t) {
                this.nativeElement && (this.nativeElement._isUpdating = t)
            }
            get checked() {
                return this.nativeElement ? this.nativeElement.checked : void 0
            }
            set checked(t) {
                if (this.nativeElement) {
                    this.nativeElement.checked = t,
                    this._isUpdatingAttribute = !0;
                    const e = this.nativeElement.getAttribute("checked");
                    this.nativeElement.hasAttribute("checked") ? this.setAttribute("checked", e) : this.removeAttribute("checked"),
                    this._isUpdatingAttribute = !1
                }
            }
            get _isUpdating() {
                return this.nativeElement ? this.nativeElement._isUpdating : void 0
            }
            set _isUpdating(t) {
                this.nativeElement && (this.nativeElement._isUpdating = t)
            }
            get checkMode() {
                return this.nativeElement ? this.nativeElement.checkMode : void 0
            }
            set checkMode(t) {
                if (this.nativeElement) {
                    this.nativeElement.checkMode = t,
                    this._isUpdatingAttribute = !0;
                    const e = this.nativeElement.getAttribute("check-mode");
                    this.nativeElement.hasAttribute("check-mode") ? this.setAttribute("check-mode", e) : this.removeAttribute("check-mode"),
                    this._isUpdatingAttribute = !1
                }
            }
            get _isUpdating() {
                return this.nativeElement ? this.nativeElement._isUpdating : void 0
            }
            set _isUpdating(t) {
                this.nativeElement && (this.nativeElement._isUpdating = t)
            }
            get disabled() {
                return this.nativeElement ? this.nativeElement.disabled : void 0
            }
            set disabled(t) {
                if (this.nativeElement) {
                    this.nativeElement.disabled = t,
                    this._isUpdatingAttribute = !0;
                    const e = this.nativeElement.getAttribute("disabled");
                    this.nativeElement.hasAttribute("disabled") ? this.setAttribute("disabled", e) : this.removeAttribute("disabled"),
                    this._isUpdatingAttribute = !1
                }
            }
            get _isUpdating() {
                return this.nativeElement ? this.nativeElement._isUpdating : void 0
            }
            set _isUpdating(t) {
                this.nativeElement && (this.nativeElement._isUpdating = t)
            }
            get dropDownHeight() {
                return this.nativeElement ? this.nativeElement.dropDownHeight : void 0
            }
            set dropDownHeight(t) {
                if (this.nativeElement) {
                    this.nativeElement.dropDownHeight = t,
                    this._isUpdatingAttribute = !0;
                    const e = this.nativeElement.getAttribute("drop-down-height");
                    this.nativeElement.hasAttribute("drop-down-height") ? this.setAttribute("drop-down-height", e) : this.removeAttribute("drop-down-height"),
                    this._isUpdatingAttribute = !1
                }
            }
            get _isUpdating() {
                return this.nativeElement ? this.nativeElement._isUpdating : void 0
            }
            set _isUpdating(t) {
                this.nativeElement && (this.nativeElement._isUpdating = t)
            }
            get expanded() {
                return this.nativeElement ? this.nativeElement.expanded : void 0
            }
            set expanded(t) {
                if (this.nativeElement) {
                    this.nativeElement.expanded = t,
                    this._isUpdatingAttribute = !0;
                    const e = this.nativeElement.getAttribute("expanded");
                    this.nativeElement.hasAttribute("expanded") ? this.setAttribute("expanded", e) : this.removeAttribute("expanded"),
                    this._isUpdatingAttribute = !1
                }
            }
            get _isUpdating() {
                return this.nativeElement ? this.nativeElement._isUpdating : void 0
            }
            set _isUpdating(t) {
                this.nativeElement && (this.nativeElement._isUpdating = t)
            }
            get label() {
                return this.nativeElement ? this.nativeElement.label : void 0
            }
            set label(t) {
                if (this.nativeElement) {
                    this.nativeElement.label = t,
                    this._isUpdatingAttribute = !0;
                    const e = this.nativeElement.getAttribute("label");
                    this.nativeElement.hasAttribute("label") ? this.setAttribute("label", e) : this.removeAttribute("label"),
                    this._isUpdatingAttribute = !1
                }
            }
            get _isUpdating() {
                return this.nativeElement ? this.nativeElement._isUpdating : void 0
            }
            set _isUpdating(t) {
                this.nativeElement && (this.nativeElement._isUpdating = t)
            }
            get level() {
                return this.nativeElement ? this.nativeElement.level : void 0
            }
            set level(t) {
                if (this.nativeElement) {
                    this.nativeElement.level = t,
                    this._isUpdatingAttribute = !0;
                    const e = this.nativeElement.getAttribute("level");
                    this.nativeElement.hasAttribute("level") ? this.setAttribute("level", e) : this.removeAttribute("level"),
                    this._isUpdatingAttribute = !1
                }
            }
            get _isUpdating() {
                return this.nativeElement ? this.nativeElement._isUpdating : void 0
            }
            set _isUpdating(t) {
                this.nativeElement && (this.nativeElement._isUpdating = t)
            }
            get separator() {
                return this.nativeElement ? this.nativeElement.separator : void 0
            }
            set separator(t) {
                if (this.nativeElement) {
                    this.nativeElement.separator = t,
                    this._isUpdatingAttribute = !0;
                    const e = this.nativeElement.getAttribute("separator");
                    this.nativeElement.hasAttribute("separator") ? this.setAttribute("separator", e) : this.removeAttribute("separator"),
                    this._isUpdatingAttribute = !1
                }
            }
            get _isUpdating() {
                return this.nativeElement ? this.nativeElement._isUpdating : void 0
            }
            set _isUpdating(t) {
                this.nativeElement && (this.nativeElement._isUpdating = t)
            }
            get value() {
                return this.nativeElement ? this.nativeElement.value : void 0
            }
            set value(t) {
                if (this.nativeElement) {
                    this.nativeElement.value = t,
                    this._isUpdatingAttribute = !0;
                    const e = this.nativeElement.getAttribute("value");
                    this.nativeElement.hasAttribute("value") ? this.setAttribute("value", e) : this.removeAttribute("value"),
                    this._isUpdatingAttribute = !1
                }
            }
            static get observedAttributes() {
                return ["style", "class", "checkable", "checked", "check-mode", "disabled", "drop-down-height", "expanded", "label", "level", "separator", "value"]
            }
            get properties() {
                return ["checkable", "checked", "checkMode", "disabled", "dropDownHeight", "expanded", "label", "level", "separator", "value"]
            }
            constructor() {
                super()
            }
            get eventListeners() {
                return []
            }
            componentDidRender(t) {
                const e = this
                  , r = {}
                  , n = {};
                let o = null;
                for (let t in e.props)
                    "children" !== t && ("style" !== t ? t.startsWith("on") && -1 === e.properties.indexOf(t) ? n[t] = e.props[t] : r[t] = e.props[t] : o = e.props[t]);
                for (let t in e.attributes) {
                    const r = e.attributes[t].name;
                    if (r)
                        if ("class" !== r)
                            "style" === r && e.nativeElement.setAttribute(r, e.getAttribute(r)),
                            -1 !== e.properties.indexOf(r.replace(/-([a-z])/g, (function(t) {
                                return t[1].toUpperCase()
                            }
                            ))) && e.nativeElement.setAttribute(r, e.getAttribute(r));
                        else {
                            const t = e.getAttribute(r).trim().split(" ");
                            for (let r in t)
                                e.nativeElement.classList.contains(t[r]) || "" === t[r] || e.nativeElement.classList.add(t[r])
                        }
                }
                for (let t in r)
                    if ("class" !== t) {
                        if (r[t] !== e.nativeElement[t]) {
                            const n = t=>t.replace(/-([a-z])/g, (function(t) {
                                return t[1].toUpperCase()
                            }
                            ));
                            "hover" !== t && "active" !== t && "focus" !== t && "selected" !== t || e.nativeElement.setAttribute(t, "");
                            const o = n(t);
                            e.nativeElement[o] = r[t]
                        }
                    } else {
                        const n = r[t].trim().split(" ");
                        for (let t in n)
                            e.nativeElement.classList.contains(n[t]) || "" === n[t] || e.nativeElement.classList.add(n[t])
                    }
                for (let t in n)
                    e[t] = n[t],
                    e.nativeElement[t.toLowerCase()] = n[t];
                if (o)
                    for (let t in o)
                        e.nativeElement.style[t] = o[t]
            }
            componentDidMount() {
                this.componentDidRender(!0)
            }
            componentDidUpdate() {
                this.componentDidRender(!1)
            }
            componentWillUnmount() {
                const t = this;
                if (t.nativeElement) {
                    t.nativeElement.whenRenderedCallbacks = [];
                    for (let e = 0; e < t.eventListeners.length; e++) {
                        const r = t.eventListeners[e];
                        t.nativeElement.removeEventListener(r.substring(2).toLowerCase(), t[r])
                    }
                }
            }
            connectedCallback() {
                this.shadowRoot || this._render()
            }
            disconnectedCallback() {
                this.componentWillUnmount()
            }
            addStylesToElement(t, e) {
                const r = document.createElement("style");
                r.type = "text/css";
                for (let t = 0; t < e.length; t++) {
                    let n = document.createTextNode(e[t]);
                    n.textContent = n.textContent.replace(":root", ":host"),
                    r.appendChild(n)
                }
                if (document.adoptedStyleSheets) {
                    const e = new CSSStyleSheet;
                    e.replaceSync(r.innerHTML),
                    t.adoptedStyleSheets ? t.adoptedStyleSheets = [e] : -1 === document.adoptedStyleSheets.indexOf(e) && (document.adoptedStyleSheets = [e])
                } else
                    t.appendChild(r)
            }
            addStyle(t) {
                const e = this.shadowRoot;
                if ("string" == typeof t) {
                    const r = document.createElement("style");
                    r.type = "text/css";
                    const n = document.createTextNode(t);
                    r.appendChild(n),
                    e.appendChild(r)
                } else
                    e.appendChild(t)
            }
            attributeChangedCallback(t, e, r) {
                const n = this;
                if (n.shadowRoot && n.isReady && !n._isUpdatingAttribute)
                    if ("class" !== t)
                        n.nativeElement.setAttribute(t, r);
                    else {
                        const t = r.trim().split(" ")
                          , o = e.trim().split(" ");
                        for (let t in o)
                            "" !== o[t] && n.nativeElement.classList.remove(o[t]);
                        for (let e in t)
                            n.nativeElement.classList.contains(t[e]) || "" === t[e] || n.nativeElement.classList.add(t[e])
                    }
            }
            _render() {
                const t = this;
                if (t.parentNode) {
                    const e = document.createElement("smart-menu-items-group");
                    t.parentNode ? t.parentNode.replaceChild(e, t) : t.getRootNode().host.shadowRoot.replaceChild(e, t),
                    t.nativeElement = e,
                    t.componentDidMount(),
                    t.isReady = !0,
                    t.classList.add("smart-ui-component")
                }
            }
        }
        e.default = n,
        window.customElements.get("smart-ui-menu-items-group") || window.customElements.define("smart-ui-menu-items-group", n)
    },
    8: function(t, e) {
        !function() {
            const t = [];
            let e = "Smart";
            if (window[e] && window[e].Version) {
                if ("13.2.0" === window[e].Version)
                    return;
                if ("13.2.0" !== window[e].Version)
                    e += "13.2.0";
                else {
                    let t = 2;
                    for (; window[e]; )
                        e += t.toString(),
                        t++
                }
            }
            const r = navigator.userAgent.indexOf("Edge") > -1 && navigator.appVersion.indexOf("Edge") > -1;
            document.elementsFromPoint || (document.elementsFromPoint = document.msElementsFromPoint);
            class n {
                static isBoolean(t) {
                    return "boolean" == typeof t
                }
                static isFunction(t) {
                    return !!(t && t.constructor && t.call && t.apply)
                }
                static isArray(t) {
                    return Array.isArray(t)
                }
                static isObject(t) {
                    return t && ("object" == typeof t || this.isFunction(t)) || !1
                }
                static isDate(t) {
                    return t instanceof Date
                }
                static isString(t) {
                    return "string" == typeof t
                }
                static isNumber(t) {
                    return "number" == typeof t
                }
                static getType(t) {
                    const e = this
                      , r = ["Boolean", "Number", "String", "Function", "Array", "Date", "Object"].find(r=>{
                        if (e["is" + r](t))
                            return r
                    }
                    );
                    return r ? r.toLowerCase() : void 0
                }
            }
            class o {
                static animate(t, r, n, o) {
                    const a = t;
                    if (!a || a instanceof HTMLElement == !1)
                        return;
                    if (0 === a.getElementsByClassName("smart-ripple").length) {
                        const t = document.createElement("span");
                        t.classList.add("smart-ripple"),
                        t.setAttribute("role", "presentation");
                        let r = !0
                          , n = null;
                        if (window[e].EnableShadowDOM && a.enableShadowDOM && !0 !== a.isInShadowDOM) {
                            for (let t = 0; t < a.shadowRoot.host.shadowRoot.children.length; t++)
                                "link" !== a.shadowRoot.host.shadowRoot.children[t].tagName.toLowerCase() && (n = a.shadowRoot.host.shadowRoot.children[t]);
                            a.shadowRoot.host.shadowRoot.querySelector(".smart-ripple") && (r = !1)
                        } else
                            n = a.firstElementChild;
                        r && (n && !n.noRipple && n.offsetHeight > 0 ? n.appendChild(t) : a.appendChild(t))
                    }
                    let i = null;
                    if (i = window[e].EnableShadowDOM && a.shadowRoot ? a.shadowRoot.host.shadowRoot.querySelector(".smart-ripple") : a.getElementsByClassName("smart-ripple")[0],
                    !i)
                        return;
                    i.innerHTML = "",
                    i.classList.remove("smart-animate"),
                    i.style.height = i.style.width = Math.max(a.offsetHeight, a.offsetWidth) + "px";
                    const s = window.getComputedStyle(i.parentElement)
                      , d = parseInt(s.borderLeftWidth) || 0
                      , l = parseInt(s.borderTopWidth) || 0
                      , m = a.getBoundingClientRect()
                      , c = r - (m.left + window.pageXOffset) - i.offsetWidth / 2 - d
                      , u = n - (m.top + window.pageYOffset) - i.offsetHeight / 2 - l;
                    i.style.left = c + "px",
                    i.style.top = u + "px",
                    i.classList.add("smart-animate"),
                    i.addEventListener("animationend", (function t() {
                        i.parentElement && i.parentElement.removeChild(i),
                        o && o(),
                        i.removeEventListener("animationend", t),
                        i.removeEventListener("animationcancel", t)
                    }
                    )),
                    i.addEventListener("animationcancel", (function t() {
                        i.parentElement && i.parentElement.removeChild(i),
                        o && o(),
                        i.removeEventListener("animationcancel", t),
                        i.removeEventListener("animationend", t)
                    }
                    ))
                }
            }
            class a {
                static easeInQuad(t, e, r, n) {
                    return r * (t /= n) * t + e
                }
                static easeOutQuad(t, e, r, n) {
                    return -r * (t /= n) * (t - 2) + e
                }
                static easeInOutQuad(t, e, r, n) {
                    return (t /= n / 2) < 1 ? r / 2 * t * t + e : -r / 2 * (--t * (t - 2) - 1) + e
                }
                static easeInCubic(t, e, r, n) {
                    return r * (t /= n) * t * t + e
                }
                static easeOutCubic(t, e, r, n) {
                    return r * ((t = t / n - 1) * t * t + 1) + e
                }
                static easeInOutCubic(t, e, r, n) {
                    return (t /= n / 2) < 1 ? r / 2 * t * t * t + e : r / 2 * ((t -= 2) * t * t + 2) + e
                }
                static easeInQuart(t, e, r, n) {
                    return r * (t /= n) * t * t * t + e
                }
                static easeOutQuart(t, e, r, n) {
                    return -r * ((t = t / n - 1) * t * t * t - 1) + e
                }
                static easeInOutQuart(t, e, r, n) {
                    return (t /= n / 2) < 1 ? r / 2 * t * t * t * t + e : -r / 2 * ((t -= 2) * t * t * t - 2) + e
                }
                static easeInQuint(t, e, r, n) {
                    return r * (t /= n) * t * t * t * t + e
                }
                static easeOutQuint(t, e, r, n) {
                    return r * ((t = t / n - 1) * t * t * t * t + 1) + e
                }
                static easeInOutQuint(t, e, r, n) {
                    return (t /= n / 2) < 1 ? r / 2 * t * t * t * t * t + e : r / 2 * ((t -= 2) * t * t * t * t + 2) + e
                }
                static easeInSine(t, e, r, n) {
                    return -r * Math.cos(t / n * (Math.PI / 2)) + r + e
                }
                static easeOutSine(t, e, r, n) {
                    return r * Math.sin(t / n * (Math.PI / 2)) + e
                }
                static easeInOutSine(t, e, r, n) {
                    return -r / 2 * (Math.cos(Math.PI * t / n) - 1) + e
                }
                static easeInExpo(t, e, r, n) {
                    return 0 === t ? e : r * Math.pow(2, 10 * (t / n - 1)) + e
                }
                static easeOutExpo(t, e, r, n) {
                    return t === n ? e + r : r * (1 - Math.pow(2, -10 * t / n)) + e
                }
                static easeInOutExpo(t, e, r, n) {
                    return 0 === t ? e : t === n ? e + r : (t /= n / 2) < 1 ? r / 2 * Math.pow(2, 10 * (t - 1)) + e : r / 2 * (2 - Math.pow(2, -10 * --t)) + e
                }
                static easeInCirc(t, e, r, n) {
                    return -r * (Math.sqrt(1 - (t /= n) * t) - 1) + e
                }
                static easeOutCirc(t, e, r, n) {
                    return r * Math.sqrt(1 - (t = t / n - 1) * t) + e
                }
                static easeInOutCirc(t, e, r, n) {
                    return (t /= n / 2) < 1 ? -r / 2 * (Math.sqrt(1 - t * t) - 1) + e : r / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + e
                }
                static easeInElastic(t, e, r, n) {
                    let o = 1.70158
                      , a = 0
                      , i = r;
                    return 0 === t ? e : 1 == (t /= n) ? e + r : (a || (a = .3 * n),
                    i < Math.abs(r) ? (i = r,
                    o = a / 4) : o = a / (2 * Math.PI) * Math.asin(r / i),
                    -i * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * n - o) * (2 * Math.PI) / a) + e)
                }
                static easeOutElastic(t, e, r, n) {
                    let o = 1.70158
                      , a = 0
                      , i = r;
                    return 0 === t ? e : 1 == (t /= n) ? e + r : (a || (a = .3 * n),
                    i < Math.abs(r) ? (i = r,
                    o = a / 4) : o = a / (2 * Math.PI) * Math.asin(r / i),
                    i * Math.pow(2, -10 * t) * Math.sin((t * n - o) * (2 * Math.PI) / a) + r + e)
                }
                static easeInOutElastic(t, e, r, n) {
                    let o = 1.70158
                      , a = 0
                      , i = r;
                    return 0 === t ? e : 2 == (t /= n / 2) ? e + r : (a || (a = n * (.3 * 1.5)),
                    i < Math.abs(r) ? (i = r,
                    o = a / 4) : o = a / (2 * Math.PI) * Math.asin(r / i),
                    t < 1 ? i * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * n - o) * (2 * Math.PI) / a) * -.5 + e : i * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * n - o) * (2 * Math.PI) / a) * .5 + r + e)
                }
                static easeInBack(t, e, r, n, o) {
                    return void 0 === o && (o = 1.70158),
                    r * (t /= n) * t * ((o + 1) * t - o) + e
                }
                static easeOutBack(t, e, r, n, o) {
                    return void 0 === o && (o = 1.70158),
                    r * ((t = t / n - 1) * t * ((o + 1) * t + o) + 1) + e
                }
                static easeInOutBack(t, e, r, n, o) {
                    return void 0 === o && (o = 1.70158),
                    (t /= n / 2) < 1 ? r / 2 * (t * t * ((1 + (o *= 1.525)) * t - o)) + e : r / 2 * ((t -= 2) * t * ((1 + (o *= 1.525)) * t + o) + 2) + e
                }
                static easeInBounce(t, e, r, n) {
                    return r - this.easeOutBounce(n - t, 0, r, n) + e
                }
                static easeOutBounce(t, e, r, n) {
                    return (t /= n) < 1 / 2.75 ? r * (7.5625 * t * t) + e : t < 2 / 2.75 ? r * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + e : t < 2.5 / 2.75 ? r * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + e : r * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + e
                }
                static easeInOutBounce(t, e, r, n) {
                    return t < n / 2 ? .5 * this.easeInBounce(2 * t, 0, r, n) + e : .5 * this.easeOutBounce(2 * t - n, 0, r, n) + .5 * r + e
                }
            }
            class i {
                static get isMobile() {
                    const t = /(iphone|ipod|ipad|android|iemobile|blackberry|bada)/.test(window.navigator.userAgent.toLowerCase());
                    return t || (["iPad Simulator", "iPhone Simulator", "iPod Simulator", "iPad", "iPhone", "iPod"].includes(navigator.platform) || navigator.userAgent.includes("Mac") && "ontouchend"in document)
                }
                static get Browser() {
                    let t;
                    const e = function(e) {
                        let r = e.indexOf(t);
                        if (-1 === r)
                            return;
                        const n = e.indexOf("rv:");
                        return "Trident" === t && -1 !== n ? parseFloat(e.substring(n + 3)) : parseFloat(e.substring(r + t.length + 1))
                    };
                    let r = {};
                    return r[function() {
                        const e = [{
                            string: navigator.userAgent,
                            subString: "Edge",
                            identity: "Edge"
                        }, {
                            string: navigator.userAgent,
                            subString: "MSIE",
                            identity: "IE"
                        }, {
                            string: navigator.userAgent,
                            subString: "Trident",
                            identity: "IE"
                        }, {
                            string: navigator.userAgent,
                            subString: "Firefox",
                            identity: "Firefox"
                        }, {
                            string: navigator.userAgent,
                            subString: "Opera",
                            identity: "Opera"
                        }, {
                            string: navigator.userAgent,
                            subString: "OPR",
                            identity: "Opera"
                        }, {
                            string: navigator.userAgent,
                            subString: "Chrome",
                            identity: "Chrome"
                        }, {
                            string: navigator.userAgent,
                            subString: "Safari",
                            identity: "Safari"
                        }];
                        for (let r = 0; r < e.length; r++) {
                            let n = e[r].string;
                            if (t = e[r].subString,
                            -1 !== n.indexOf(e[r].subString))
                                return e[r].identity
                        }
                        return "Other"
                    }()] = !0,
                    r.version = e(navigator.userAgent) || e(navigator.appVersion) || "Unknown",
                    r
                }
                static toCamelCase(t) {
                    return t.replace(/-([a-z])/g, (function(t) {
                        return t[1].toUpperCase()
                    }
                    ))
                }
                static toDash(t) {
                    return t.split(/(?=[A-Z])/).join("-").toLowerCase()
                }
                static unescapeHTML(t) {
                    return (new DOMParser).parseFromString(t, "text/html").documentElement.textContent
                }
                static escapeHTML(t) {
                    const e = {
                        "&": "&amp;",
                        "<": "&lt;",
                        ">": "&gt;",
                        '"': "&quot;",
                        "'": "&#39;",
                        "/": "&#x2F;",
                        "`": "&#x60;",
                        "=": "&#x3D;"
                    };
                    return String(t).replace(/[&<>"'`=\/]/g, t=>e[t])
                }
                static sanitizeHTML(t) {
                    if (t && (t.indexOf("onclick") >= 0 || t.indexOf("onload") >= 0 || t.indexOf("onerror") >= 0))
                        return this.escapeHTML(t);
                    const e = new RegExp("<s*(applet|audio|base|bgsound|embed|form|iframe|isindex|keygen|layout|link|meta|object|script|svg|style|template|video)[^>]*>(.*?)<s*/s*(applet|audio|base|bgsound|embed|form|iframe|isindex|keygen|layout|link|meta|object|script|svg|style|template|video)>","ig");
                    return String(t).replace(e, t=>this.escapeHTML(t))
                }
                static createGUID() {
                    function t() {
                        return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
                    }
                    return t() + t() + "-" + t() + "-" + t() + "-" + t() + "-" + t() + t() + t()
                }
                static getScriptLocation() {
                    if ("./" !== window[e].BaseUrl)
                        return window[e].BaseUrl;
                    return function() {
                        if (document.currentScript) {
                            let t = document.currentScript.src
                              , e = t.lastIndexOf("/");
                            return t = t.substring(0, e),
                            t
                        }
                        const t = new Error;
                        let e = "("
                          , r = ")";
                        if (Smart.Utilities.Core.Browser.Safari && (e = "@",
                        r = "\n"),
                        t.fileName)
                            return t.fileName.replace("/smart.element.js", "");
                        let n = t.stack.split(e);
                        return n = n[1],
                        n = n.split(r)[0],
                        n = n.split(":"),
                        n.splice(-2, 2),
                        n = n.join(":"),
                        n.replace("/smart.element.js", "")
                    }()
                }
                static CSSVariablesSupport() {
                    return window.CSS && window.CSS.supports && window.CSS.supports("(--fake-var: 0)")
                }
                static assign(t, e) {
                    const r = t=>t && "object" == typeof t && !Array.isArray(t) && null !== t;
                    let n = Object.assign({}, t);
                    return r(t) && r(e) && Object.keys(e).forEach(o=>{
                        r(e[o]) && o in t ? n[o] = this.assign(t[o], e[o]) : Object.assign(n, {
                            [o]: e[o]
                        })
                    }
                    ),
                    n
                }
                static html(t, e) {
                    const r = this;
                    let n = ""
                      , o = t.childNodes;
                    if (!e) {
                        for (let t, e = 0, a = o.length; e < a && (t = o[e]); e++) {
                            const e = ["strong"];
                            if (t instanceof HTMLElement || t.tagName && e.indexOf(t.tagName.toLowerCase()) >= 0) {
                                const e = t.tagName.toLowerCase()
                                  , o = t.attributes;
                                let a = "<" + e;
                                for (let t, e = 0; t = o[e]; e++)
                                    a += " " + t.name + '="' + t.value.replace(/[&\u00A0"]/g, f.Core.escapeHTML) + '"';
                                a += ">",
                                ["area", "base", "br", "col", "command", "embed", "hr", "img", "input", "keygen", "link", "meta", "param", "source", "track", "wbr"][e] && (n += a),
                                n = n + a + r.html(t) + "</" + e + ">"
                            } else {
                                if (8 === t.nodeType)
                                    continue;
                                n += t.textContent.replace(/[&\u00A0<>]/g, f.Core.escapeHTML)
                            }
                        }
                        return n
                    }
                    {
                        const r = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi;
                        t.innerHTML = e.replace(r, "<$1></$2>")
                    }
                }
            }
            let s = [];
            class d {
                static watch(t) {
                    switch (t.nodeName.toLowerCase()) {
                    case "smart-grid":
                    case "smart-kanban":
                    case "smart-table":
                    case "smart-pivot-table":
                    case "smart-scheduler":
                    case "smart-tabs":
                    case "smart-card-view":
                    case "smart-list-box":
                    case "smart-combo-box":
                    case "smart-drop-down-list":
                    case "smart-calendar":
                    case "smart-gauge":
                    case "smart-numeric-text-box":
                    case "smart-menu":
                    case "smart-tree":
                        s.push(t);
                        break;
                    default:
                        return
                    }
                    d.start()
                }
                static start() {
                    d.isStarted || (d.isStarted = !0,
                    d.interval && clearInterval(d.interval),
                    0 === s.length || document.hidden ? d.isStarted = !1 : d.interval = setInterval((function() {
                        d.observe()
                    }
                    ), 100))
                }
                static stop() {
                    d.isStarted = !1,
                    d.interval && clearInterval(d.interval)
                }
                static observeElement(t) {
                    const e = t;
                    if ("test" === window.Smart.Mode || document.hidden)
                        return void (d.interval && clearInterval(d.interval));
                    let r = t._computedStyle || "resize" !== e.hasStyleObserver ? document.defaultView.getComputedStyle(e, null) : {}
                      , n = !0
                      , o = "resize" !== e.hasStyleObserver ? ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth", "display", "visibility", "font-size", "font-family", "font-style", "font-weight", "max-height", "min-height", "max-width", "min-width", "overflow", "overflow-x", "overflow-y"] : [];
                    if (t.styleProperties && (o = o.concat(t.styleProperties)),
                    t.observableStyleProperties && (o = t.observableStyleProperties),
                    !e._styleInfo) {
                        e._styleInfo = [];
                        for (let t = 0; t < o.length; t++) {
                            const n = o[t]
                              , a = n.startsWith("--") ? r.getPropertyValue(n) : r[n];
                            e._styleInfo[n] = a
                        }
                        return
                    }
                    if (t.isHidden || "none" !== r.display && (0 !== t.offsetWidth && 0 !== t.offsetHeight || (t.isHidden = !0)),
                    t.isHidden) {
                        if (t.visibilityChangedHandler(),
                        t.isHidden)
                            return;
                        n = !1
                    }
                    let a = [];
                    for (let t = 0; t < o.length; t++) {
                        const n = o[t]
                          , i = n.startsWith("--") ? r.getPropertyValue(n) : r[n];
                        e._styleInfo[n] !== i && (a[n] = {
                            oldValue: e._styleInfo[n],
                            value: i
                        },
                        a.length++),
                        e._styleInfo[n] = i
                    }
                    a.length > 0 && (e.$.fireEvent("styleChanged", {
                        styleProperties: a
                    }, {
                        bubbles: !1,
                        cancelable: !0
                    }),
                    a.display && n && e.$.fireEvent("resize", e, {
                        bubbles: !1,
                        cancelable: !0
                    }))
                }
                static observe() {
                    for (let t = 0; t < s.length; t++) {
                        const e = s[t];
                        this.observeElement(e)
                    }
                }
                static unwatch(t) {
                    d.stop();
                    const e = s.indexOf(t);
                    -1 !== e && s.splice(e, 1),
                    d.start()
                }
            }
            let l = [];
            const m = []
              , c = ["resize", "down", "up", "move", "tap", "taphold", "swipeleft", "swiperight", "swipetop", "swipebottom"];
            class u {
                constructor(t) {
                    const e = this;
                    e.target = t,
                    e.$target = new h(t),
                    e.$document = t.$document ? t.$document : new h(document),
                    e.id = (Date.now().toString(36) + Math.random().toString(36).substr(2, 5)).toUpperCase();
                    let r = {
                        handlers: {},
                        boundEventTypes: [],
                        listen: e.listen.bind(e),
                        unlisten: e.unlisten.bind(e)
                    };
                    return e.tapHoldDelay = 750,
                    e.swipeMin = 10,
                    e.swipeMax = 5e3,
                    e.swipeDelay = 1e3,
                    e.tapHoldDelay = 750,
                    e.inputEventProperties = ["clientX", "clientY", "pageX", "pageY", "screenX", "screenY"],
                    c.forEach(t=>{
                        r[t] = e=>{
                            r.handlers[t] = e
                        }
                        ,
                        e[t] = t=>{
                            if (!r.handlers[t.type]) {
                                if (("mousemove" === t.type || "pointermove" === t.type || "touchmove" === t.type) && r.handlers.move) {
                                    const n = e.createEvent(t, "move");
                                    r.handlers.move(n)
                                }
                                return !0
                            }
                            return r.handlers[t.type](t)
                        }
                    }
                    ),
                    e.listen(),
                    e.handlers = r.handlers,
                    r
                }
                listen(t) {
                    const r = this;
                    if ("resize" === t && r.target !== document && r.target !== window && !1 !== r.target.hasResizeObserver)
                        if (Smart.Utilities.Core.Browser.Firefox) {
                            if (!r.target.resizeObserver) {
                                let t, e, n, o = !1, a = r.target.offsetWidth, i = r.target.offsetHeight;
                                const s = new ResizeObserver(()=>{
                                    if (!o)
                                        return void (o = !0);
                                    const s = new CustomEvent("resize",{
                                        bubbles: !1,
                                        cancelable: !0
                                    });
                                    e = r.target.offsetWidth,
                                    n = r.target.offsetHeight,
                                    t = e !== a || n !== i,
                                    r.target.requiresLayout && (t = !0),
                                    t && (r.resize(s),
                                    r.target.requiresLayout = !1)
                                }
                                );
                                s.observe(r.target),
                                r.target.resizeObserver = s
                            }
                        } else if (!r.target.resizeTrigger) {
                            const t = document.createElement("div");
                            t.className = "smart-resize-trigger-container",
                            t.innerHTML = '<div class="smart-resize-trigger-container"><div class="smart-resize-trigger"></div></div><div class="smart-resize-trigger-container"><div class="smart-resize-trigger-shrink"></div></div>',
                            t.setAttribute("aria-hidden", !0),
                            window[e].EnableShadowDOM && r.target.shadowRoot ? r.target.shadowRoot.appendChild(t) : r.target.appendChild(t),
                            r.target.resizeTrigger = t;
                            const n = t.childNodes[0]
                              , o = n.childNodes[0]
                              , a = t.childNodes[1]
                              , i = function() {
                                o.style.width = "100000px",
                                o.style.height = "100000px",
                                n.scrollLeft = 1e5,
                                n.scrollTop = 1e5,
                                a.scrollLeft = 1e5,
                                a.scrollTop = 1e5
                            };
                            let s, d, l, m, c = r.target.offsetWidth, u = r.target.offsetHeight;
                            if (0 === c || 0 === u) {
                                const t = function() {
                                    i(),
                                    r.target.removeEventListener("resize", t)
                                };
                                r.target.addEventListener("resize", t),
                                i()
                            } else
                                i();
                            r.target.resizeHandler = function() {
                                d || (d = requestAnimationFrame((function() {
                                    if (d = 0,
                                    l = r.target.offsetWidth,
                                    m = r.target.offsetHeight,
                                    s = l !== c || m !== u,
                                    r.target.requiresLayout && (s = !0),
                                    !s)
                                        return;
                                    c = l,
                                    u = m;
                                    const t = new CustomEvent("resize",{
                                        bubbles: !1,
                                        cancelable: !0
                                    });
                                    r.resize(t),
                                    r.target.requiresLayout = !1
                                }
                                ))),
                                i()
                            }
                            ,
                            n.addEventListener("scroll", r.target.resizeHandler),
                            a.addEventListener("scroll", r.target.resizeHandler)
                        }
                    if (!r.isListening) {
                        if (r.isListening = !0,
                        r.isPressed = !1,
                        r.isReleased = !1,
                        r.isInBounds = !1,
                        window.PointerEvent)
                            r.$target.listen("pointerdown.inputEvents" + r.id, r.pointerDown.bind(r)),
                            r.$target.listen("pointerup.inputEvents" + r.id, r.pointerUp.bind(r)),
                            r.$target.listen("pointermove.inputEvents" + r.id, r.pointerMove.bind(r)),
                            r.$target.listen("pointercancel.inputEvents" + r.id, r.pointerCancel.bind(r));
                        else {
                            "ontouchstart"in window && (r.$target.listen("touchmove.inputEvents" + r.id, r.touchMove.bind(r)),
                            r.$target.listen("touchstart.inputEvents" + r.id, r.touchStart.bind(r)),
                            r.$target.listen("touchend.inputEvents" + r.id, r.touchEnd.bind(r)),
                            r.$target.listen("touchcancel.inputEvents" + r.id, r.touchCancel.bind(r))),
                            r.$target.listen("mousedown.inputEvents" + r.id, r.mouseDown.bind(r)),
                            r.$target.listen("mouseup.inputEvents" + r.id, r.mouseUp.bind(r)),
                            r.$target.listen("mousemove.inputEvents" + r.id, r.mouseMove.bind(r)),
                            r.$target.listen("mouseleave.inputEvents" + r.id, r.mouseLeave.bind(r))
                        }
                        r.target._handleDocumentUp || (r.target._handleDocumentUp = r.handleDocumentUp.bind(r),
                        r.target._handleDocumentUpId = r.id,
                        r.$document.listen("mouseup.inputEvents" + r.target._handleDocumentUpId, r.target._handleDocumentUp))
                    }
                }
                unlisten(t) {
                    const e = this;
                    if (e.isListening = !1,
                    window.PointerEvent)
                        e.$target.unlisten("pointerdown.inputEvents" + e.id),
                        e.$target.unlisten("pointerup.inputEvents" + e.id),
                        e.$target.unlisten("pointermove.inputEvents" + e.id),
                        e.$target.unlisten("pointercancel.inputEvents" + e.id);
                    else {
                        "ontouchstart"in window && (e.$target.unlisten("touchstart.inputEvents" + e.id),
                        e.$target.unlisten("touchmove.inputEvents" + e.id),
                        e.$target.unlisten("touchend.inputEvents" + e.id),
                        e.$target.unlisten("touchcancel.inputEvents" + e.id)),
                        e.$target.unlisten("mousedown.inputEvents" + e.id),
                        e.$target.unlisten("mouseup.inputEvents" + e.id),
                        e.$target.unlisten("mousemove.inputEvents" + e.id),
                        e.$target.unlisten("mouseleave.inputEvents" + e.id)
                    }
                    if (e.target._handleDocumentUp && (e.$document.unlisten("mouseup.inputEvents" + e.target._handleDocumentUpId, e.target._handleDocumentUp),
                    delete e.target._handleDocumentUp,
                    delete e.target._handleDocumentUpId),
                    "resize" === t)
                        if (Smart.Utilities.Core.Browser.Firefox)
                            e.target.resizeObserver && (e.target.resizeObserver.unobserve(e.target),
                            delete e.target.resizeObserver);
                        else if (e.target.resizeTrigger) {
                            const t = e.target.resizeTrigger
                              , r = t.childNodes[0]
                              , n = t.childNodes[1];
                            r.removeEventListener("scroll", e.target.resizeHandler),
                            n.removeEventListener("scroll", e.target.resizeHandler),
                            e.target.resizeHandler = null,
                            t.parentNode.removeChild(t),
                            delete e.target.resizeTrigger
                        }
                }
                handleDocumentUp(t) {
                    this.isPressed = !1,
                    this.isReleased = !1,
                    this.resetSwipe(t)
                }
                createEvent(t, e) {
                    const r = this
                      , n = t.touches
                      , o = t.changedTouches
                      , a = n && n.length ? n[0] : o && o.length ? o[0] : void 0
                      , i = new CustomEvent(e,{
                        bubbles: !0,
                        cancelable: !0,
                        composed: void 0 !== r.$target.element.getRootNode().host
                    });
                    if (i.originalEvent = t,
                    a) {
                        for (let t = 0; t < r.inputEventProperties.length; t++) {
                            const e = r.inputEventProperties[t];
                            i[e] = a[e]
                        }
                        return i
                    }
                    for (let e in t)
                        e in i || (i[e] = t[e]);
                    return i
                }
                fireTap(t) {
                    const e = this;
                    if (clearTimeout(this.tapHoldTimeout),
                    !this.tapHoldFired && this.isInBounds) {
                        const r = e.createEvent(t, "tap");
                        e.tap(r)
                    }
                }
                initTap(t) {
                    const e = this;
                    e.isInBounds = !0,
                    e.tapHoldFired = !1,
                    e.tapHoldTimeout = setTimeout((function() {
                        if (e.isInBounds) {
                            e.tapHoldFired = !0;
                            const r = e.createEvent(t, "taphold");
                            e.taphold(r)
                        }
                    }
                    ), e.tapHoldDelay)
                }
                pointerDown(t) {
                    return this.handleDown(t)
                }
                mouseDown(t) {
                    if (!(this.isPressed || this.touchStartTime && new Date - this.touchStartTime < 500))
                        return this.handleDown(t)
                }
                touchStart(t) {
                    return this.touchStartTime = new Date,
                    this.isTouchMoved = !0,
                    this.handleDown(t)
                }
                mouseUp(t) {
                    if (!(this.isReleased || this.touchEndTime && new Date - this.touchEndTime < 500))
                        return this.handleUp(t)
                }
                handleDown(t) {
                    const e = this;
                    e.isReleased = !1,
                    e.isPressed = !0;
                    const r = e.createEvent(t, "down");
                    return (e.handlers.tap || e.handlers.taphold) && e.initTap(r),
                    (e.handlers.swipeleft || e.handlers.swiperight || e.handlers.swipetop || e.handlers.swipebottom) && e.initSwipe(r),
                    e.down(r)
                }
                handleUp(t) {
                    const e = this;
                    e.isReleased = !0,
                    e.isPressed = !1;
                    const r = e.createEvent(t, "up")
                      , n = e.up(r);
                    return (e.handlers.tap || e.handlers.taphold) && e.fireTap(r),
                    e.resetSwipe(r),
                    n
                }
                handleMove(t) {
                    const e = this;
                    let r = e.move(t);
                    return e.isPressed && (e._maxSwipeVerticalDistance = Math.max(e._maxSwipeVerticalDistance, Math.abs(e._startY - t.pageY)),
                    e._maxSwipeHorizontalDistance = Math.max(e._maxSwipeHorizontalDistance, Math.abs(e._startX - t.pageX)),
                    r = e.handleSwipeEvents(t)),
                    r
                }
                touchEnd(t) {
                    return this.touchEndTime = new Date,
                    this.handleUp(t)
                }
                pointerUp(t) {
                    return this.handleUp(t)
                }
                pointerCancel(t) {
                    this.pointerUp(t)
                }
                touchCancel(t) {
                    this.touchEnd(t)
                }
                mouseLeave() {
                    this.isInBounds = !1
                }
                mouseMove(t) {
                    if (!this.isTouchMoved)
                        return this.handleMove(t)
                }
                pointerMove(t) {
                    return this.handleMove(t)
                }
                touchMove(t) {
                    const e = this
                      , r = t.touches
                      , n = t.changedTouches
                      , o = r && r.length ? r[0] : n && n.length ? n[0] : void 0;
                    for (let r = 0; r < e.inputEventProperties.length; r++) {
                        const n = e.inputEventProperties[r];
                        void 0 === t[n] && (t[n] = o[n])
                    }
                    return e.isTouchMoved = !0,
                    e.handleMove(t)
                }
                handleSwipeEvents(t) {
                    let e = !0;
                    return (this.handlers.swipetop || this.handlers.swipebottom) && (e = this.handleVerticalSwipeEvents(t)),
                    !1 === e || (this.handlers.swipeleft || this.handlers.swiperight) && (e = this.handleHorizontalSwipeEvents(t)),
                    e
                }
                handleVerticalSwipeEvents(t) {
                    let e, r;
                    return e = t.pageY,
                    r = e - this._startY,
                    this.swiped(t, r, "vertical")
                }
                handleHorizontalSwipeEvents(t) {
                    let e, r;
                    return e = t.pageX,
                    r = e - this._startX,
                    this.swiped(t, r, "horizontal")
                }
                swiped(t, e, r) {
                    const n = this;
                    if (r = r || 0,
                    Math.abs(e) >= n.swipeMin && !n._swipeEvent && !n._swipeLocked) {
                        let o = e < 0 ? "swipeleft" : "swiperight";
                        if ("horizontal" === r ? n._swipeEvent = n.createEvent(t, o) : (o = e < 0 ? "swipetop" : "swipebottom",
                        n._swipeEvent = n.createEvent(t, e < 0 ? "swipetop" : "swipebottom")),
                        n[o] && (n[o](this._swipeEvent),
                        Math.abs(e) <= this.swipeMax))
                            return t.stopImmediatePropagation(),
                            !1
                    }
                    return !0
                }
                resetSwipe() {
                    this._swipeEvent = null,
                    clearTimeout(this._swipeTimeout)
                }
                initSwipe(t) {
                    const e = this;
                    e._maxSwipeVerticalDistance = 0,
                    e._maxSwipeHorizontalDistance = 0,
                    e._startX = t.pageX,
                    e._startY = t.pageY,
                    e._swipeLocked = !1,
                    e._swipeEvent = null,
                    e._swipeTimeout = setTimeout((function() {
                        e._swipeLocked = !0
                    }
                    ), e.swipeDelay)
                }
            }
            class p {
                get scrollWidth() {
                    const t = this;
                    return t.horizontalScrollBar ? t.horizontalScrollBar.max : -1
                }
                set scrollWidth(t) {
                    const e = this;
                    t < 0 && (t = 0),
                    e.horizontalScrollBar && (e.horizontalScrollBar.max = t)
                }
                get scrollHeight() {
                    const t = this;
                    return t.verticalScrollBar ? t.verticalScrollBar.max : -1
                }
                set scrollHeight(t) {
                    const e = this;
                    t < 0 && (t = 0),
                    e.verticalScrollBar && (e.verticalScrollBar.max = t)
                }
                get scrollLeft() {
                    const t = this;
                    return t.horizontalScrollBar ? t.horizontalScrollBar.value : -1
                }
                set scrollLeft(t) {
                    const e = this;
                    t < 0 && (t = 0),
                    e.horizontalScrollBar && (e.horizontalScrollBar.value = t)
                }
                get scrollTop() {
                    const t = this;
                    return t.verticalScrollBar ? t.verticalScrollBar.value : -1
                }
                set scrollTop(t) {
                    const e = this;
                    t < 0 && (t = 0),
                    e.verticalScrollBar && (e.verticalScrollBar.value = t)
                }
                get vScrollBar() {
                    return this.verticalScrollBar
                }
                get hScrollBar() {
                    return this.horizontalScrollBar
                }
                constructor(t, e, r) {
                    this.container = t,
                    this.horizontalScrollBar = e,
                    this.verticalScrollBar = r,
                    this.disableSwipeScroll = !1,
                    this.listen()
                }
                listen() {
                    const t = this
                      , e = i.isMobile
                      , r = t.horizontalScrollBar
                      , n = t.verticalScrollBar;
                    t.inputEvents = new u(t.container);
                    let o, a, s, d, l, m, c, p;
                    const h = function(t) {
                        return {
                            amplitude: 0,
                            delta: 0,
                            initialValue: 0,
                            min: 0,
                            max: t.max,
                            previousValue: 0,
                            pointerPosition: 0,
                            targetValue: 0,
                            scrollBar: t,
                            value: 0,
                            velocity: 0
                        }
                    }
                      , b = h(r)
                      , g = h(n)
                      , v = function() {
                        const e = t.container.touchVelocityCoefficient || 50;
                        m = Date.now(),
                        c = m - d,
                        d = m;
                        const r = function(t) {
                            t.delta = t.value - t.previousValue,
                            t.previousValue = t.value;
                            let r = e * t.delta / (1 + c);
                            t.velocity = .8 * r + .2 * t.velocity
                        };
                        r(g),
                        r(b)
                    }
                      , w = function(t) {
                        return p.value = t > p.max ? p.max : t < p.min ? p.min : t,
                        p.scrollBar.value = p.value,
                        t > p.max ? "max" : t < p.min ? "min" : "value"
                    };
                    function y() {
                        let e, r;
                        p.amplitude && (t.container.$.fireEvent("kineticScroll"),
                        e = Date.now() - d,
                        r = -p.amplitude * Math.exp(-e / 500),
                        r > 5 || r < -5 ? (w(p.targetValue + r),
                        cancelAnimationFrame(a),
                        a = 0,
                        a = requestAnimationFrame(y)) : w(p.targetValue))
                    }
                    let x;
                    t.inputEvents.down((function(r) {
                        if (!e)
                            return;
                        const n = r.originalEvent.target
                          , a = n && n.closest ? n.closest("smart-scroll-bar") : void 0;
                        if (a === t.horizontalScrollBar || a === t.verticalScrollBar)
                            return;
                        s = !0,
                        o = !1;
                        const i = function(t, e) {
                            t.amplitude = 0,
                            t.pointerPosition = e,
                            t.previousValue = t.value,
                            t.value = t.scrollBar.value,
                            t.initialValue = t.value,
                            t.max = t.scrollBar.max
                        };
                        i(g, r.clientY),
                        i(b, r.clientX),
                        d = Date.now(),
                        clearInterval(l),
                        l = setInterval(v, 500)
                    }
                    )),
                    t.inputEvents.up((function() {
                        if (!s)
                            return !0;
                        if (clearInterval(l),
                        t.disableSwipeScroll)
                            return void (s = !1);
                        const e = function(t) {
                            p = t,
                            t.amplitude = .8 * t.velocity,
                            t.targetValue = Math.round(t.value + t.amplitude),
                            d = Date.now(),
                            cancelAnimationFrame(a),
                            a = requestAnimationFrame(y),
                            t.velocity = 0
                        };
                        g.velocity > 10 || g.velocity < -10 ? e(g) : (b.velocity > 10 || b.velocity < -10) && e(b),
                        s = !1
                    }
                    )),
                    t.inputEvents.move((function(e) {
                        if (!s)
                            return !0;
                        if (t.disableSwipeScroll)
                            return;
                        if (o && (e.originalEvent.preventDefault(),
                        e.originalEvent.stopPropagation()),
                        b.visible = t.scrollWidth > 0,
                        g.visible = t.scrollHeight > 0,
                        !s || !b.visible && !g.visible)
                            return;
                        const r = t.container.touchScrollRatio
                          , n = t.container;
                        let a, i;
                        r && ("number" == typeof r ? (a = -r,
                        i = -r) : "function" == typeof r && (a = r(g.max, n.offsetHeight),
                        i = r(b.max, n.offsetWidth))),
                        g.ratio = a || -g.max / n.offsetHeight,
                        g.delta = (e.clientY - g.pointerPosition) * g.ratio,
                        b.ratio = i || -b.max / n.offsetWidth,
                        b.delta = (e.clientX - b.pointerPosition) * b.ratio;
                        let d = "value";
                        const l = function(e, r, n) {
                            return e.delta > 5 || e.delta < -5 ? (p = e,
                            d = e.initialValue + e.delta > p.max ? "max" : e.initialValue + e.delta < p.min ? "min" : "value",
                            "min" === d && 0 === e.initialValue || ("max" === d && e.initialValue === e.max || (!e.visible || (t.container.$.fireEvent("kineticScroll"),
                            w(e.initialValue + e.delta),
                            v(),
                            n.originalEvent.preventDefault(),
                            n.originalEvent.stopPropagation(),
                            o = !0,
                            !1)))) : null
                        };
                        let m = l(g, e.clientY, e);
                        if (null !== m)
                            return m;
                        {
                            let t = l(b, e.clientX, e);
                            if (null !== t)
                                return t
                        }
                    }
                    )),
                    t.scrollTo = function(e, r) {
                        const n = !1 === r ? b : g;
                        let o = !1;
                        d || (d = Date.now()),
                        x || (x = Date.now()),
                        Math.abs(Date.now() - x) > 375 ? d = Date.now() : o = !0,
                        x = Date.now(),
                        n.value = n.scrollBar.value,
                        n.delta = e - n.value,
                        n.max = n.scrollBar.max,
                        e <= n.min && (e = n.min),
                        e >= n.max && (e = n.max),
                        n.targetValue = e;
                        const i = e;
                        let s = n.value;
                        n.velocity = 100 * n.delta / (1 + n.max),
                        n.from = s;
                        const l = function(t) {
                            return n.value = t > n.max ? n.max : t < n.min ? n.min : t,
                            n.scrollBar.value = n.value,
                            t > n.max ? "max" : t < n.min ? "min" : "value"
                        }
                          , m = function() {
                            let r, c = Date.now() - x, u = Math.min(1e3, Date.now() - d), p = n.velocity * Math.exp(u / 175);
                            if (o)
                                (p < 0 && n.value <= e || p > 0 && n.value >= e) && (p = 0),
                                (n.value + p <= n.min || n.value + p >= n.max) && (p = 0),
                                p > .5 || p < -.5 ? (l(n.value + p),
                                cancelAnimationFrame(a),
                                a = 0,
                                a = requestAnimationFrame(m)) : l(n.targetValue);
                            else {
                                if (c >= 175)
                                    return cancelAnimationFrame(a),
                                    t.container.$.fireEvent("kineticScroll"),
                                    void (a = 0);
                                r = f.Animation.Easings.easeInSine(c, s, i - s, 175),
                                l(r),
                                cancelAnimationFrame(a),
                                a = 0,
                                a = requestAnimationFrame(m)
                            }
                        };
                        cancelAnimationFrame(a),
                        a = requestAnimationFrame(m)
                    }
                    ,
                    t.inputEvents.listen()
                }
                unlisten() {
                    const t = this;
                    t.inputEvents && t.inputEvents.unlisten(),
                    delete t.inputEvents
                }
            }
            class h {
                constructor(t) {
                    this.events = {},
                    this.handlers = {},
                    this.element = t
                }
                hasClass(t) {
                    const e = this
                      , r = t.split(" ");
                    for (let t = 0; t < r.length; t++) {
                        if (!e.element.classList.contains(r[t]))
                            return !1
                    }
                    return !0
                }
                addClass(t) {
                    const e = this;
                    if (e.hasClass(t))
                        return;
                    const r = t.split(" ");
                    for (let t = 0; t < r.length; t++)
                        e.element.classList.add(r[t]);
                    e.isNativeElement || d.observeElement(e.element)
                }
                removeClass(t) {
                    const e = this;
                    if (0 === arguments.length)
                        return void e.element.removeAttribute("class");
                    const r = t.split(" ");
                    for (let t = 0; t < r.length; t++)
                        e.element.classList.remove(r[t]);
                    "" === e.element.className && e.element.removeAttribute("class"),
                    e.isNativeElement || d.observeElement(e.element)
                }
                get isCustomElement() {
                    return !!this.element.tagName.startsWith(e) || (this.element instanceof window[e].BaseElement == !0 || "DIV" !== this.element.tagName && "SPAN" !== this.element.tagName && "BUTTON" !== this.element.tagName && "INPUT" !== this.element.tagName && "UL" !== this.element.tagName && "LI" !== this.element.tagName && document.createElement(this.element.nodeName)instanceof window[e].BaseElement == !0)
                }
                get isNativeElement() {
                    return !this.isCustomElement
                }
                dispatch(t) {
                    const e = this
                      , r = e.events[t.type];
                    let n = !1;
                    if (r.length > 1)
                        for (let t = 0; t < r.length; t++) {
                            const e = r[t];
                            if (e.namespace && e.namespace.indexOf("_") >= 0) {
                                n = !0;
                                break
                            }
                        }
                    n && r.sort((function(t, e) {
                        let r = t.namespace
                          , n = e.namespace;
                        return r = -1 === r.indexOf("_") ? 0 : parseInt(r.substring(r.indexOf("_") + 1)),
                        n = -1 === n.indexOf("_") ? 0 : parseInt(n.substring(n.indexOf("_") + 1)),
                        r < n ? -1 : r > n ? 1 : 0
                    }
                    ));
                    for (let n = 0; n < r.length; n++) {
                        const o = r[n];
                        if (t.namespace = o.namespace,
                        t.context = o.context,
                        t.defaultPrevented)
                            break;
                        const a = o.handler.apply(e.element, [t]);
                        if (void 0 !== a && (t.result = a,
                        !1 === a)) {
                            t.preventDefault(),
                            t.stopPropagation();
                            break
                        }
                    }
                    return t.result
                }
                fireEvent(t, e, r) {
                    const n = this;
                    r || (r = {
                        bubbles: !0,
                        cancelable: !0,
                        composed: null !== n.element.getRootNode().host
                    }),
                    r.detail = e || {};
                    const o = new CustomEvent(t,r);
                    return o.originalStopPropagation = o.stopPropagation,
                    o.stopPropagation = function() {
                        return o.isPropagationStopped = !0,
                        o.originalStopPropagation()
                    }
                    ,
                    n.dispatchEvent(o),
                    o
                }
                get isPassiveSupported() {
                    const t = this;
                    if (void 0 !== t.supportsPassive)
                        return t.supportsPassive;
                    t.supportsPassive = !1;
                    try {
                        let e = Object.defineProperty({}, "passive", {
                            get: function() {
                                t.supportsPassive = !0
                            }
                        });
                        window.addEventListener("testPassive", null, e),
                        window.removeEventListener("testPassive", null, e)
                    } catch (t) {}
                    return t.supportsPassive
                }
                dispatchEvent(t) {
                    const e = this
                      , r = t.type
                      , n = e.element.context
                      , o = r.substring(0, 1).toUpperCase() + r.substring(1);
                    e.element.context = document,
                    e.element["on" + o] ? e.element["on" + o](t) : e.element["on" + r.toLowerCase()] ? e.element["on" + r.toLowerCase()](t) : e.element.dispatchEvent(t),
                    e.element.context = n
                }
                listen(t, e) {
                    const r = this
                      , n = t.split(".")
                      , o = n.slice(1).join(".")
                      , a = n[0];
                    r.events[a] || (r.events[a] = []);
                    const i = {
                        type: a,
                        handler: e,
                        context: r.element,
                        namespace: o
                    };
                    c.indexOf(a) >= 0 && (r.inputEvents || (r.inputEvents = new u(r.element)),
                    r.inputEvents[a]((function(t) {
                        r.dispatchEvent(t)
                    }
                    )),
                    r.inputEvents.boundEventTypes.push(a),
                    r.inputEvents.listen(a)),
                    0 === r.events[a].length && (r.handlers[a] = r.dispatch.bind(r),
                    "wheel" === a ? r.element.addEventListener("wheel", r.handlers[a], !!r.isPassiveSupported && {
                        passive: !1
                    }) : "touchmove" === a || "touchstart" === a || "touchend" === a ? r.element.addEventListener(a, r.handlers[a], !!r.isPassiveSupported && {
                        passive: !1
                    }) : r.element.addEventListener(a, r.handlers[a], !1)),
                    r.events[a].push(i)
                }
                unlisten(t) {
                    const e = this
                      , r = t.split(".")
                      , n = r.slice(1).join(".")
                      , o = r[0];
                    let a = e.events[o];
                    if (e.inputEvents && e.inputEvents.boundEventTypes.indexOf(o) >= 0 && (e.inputEvents.boundEventTypes.splice(e.inputEvents.boundEventTypes.indexOf(o), 1),
                    0 === e.inputEvents.boundEventTypes.length && e.inputEvents.unlisten(o)),
                    a) {
                        for (let t = 0; t < a.length; t++) {
                            if ("" !== n) {
                                let t = a.findIndex(t=>t.namespace === n);
                                a.splice(t, 1);
                                break
                            }
                            a = []
                        }
                        0 === a.length && (e.element.removeEventListener(o, e.handlers[o]),
                        e.events[o] = [],
                        delete e.handlers[o])
                    }
                }
                getAttributeValue(t, e) {
                    const r = this
                      , n = r.element.getAttribute(t);
                    if (r.isNativeElement)
                        return r.deserialize(n, e);
                    const o = r.element.propertyByAttributeName[t];
                    return void 0 === o.deserialize ? r.deserialize(n, e, o.nullable) : r.element[o.deserialize](n)
                }
                setAttributeValue(t, e, r) {
                    const n = this;
                    let o, a = !1;
                    if (n.isNativeElement) {
                        if (o = n.serialize(e, r),
                        "boolean" === r) {
                            if (["checked", "selected", "async", "autofocus", "autoplay", "controls", "defer", "disabled", "hidden", "ismap", "loop", "multiple", "open", "readonly", "required", "scoped"].indexOf(t) >= 0)
                                return void (e ? n.element.setAttribute(t, "") : n.element.removeAttribute(t))
                        }
                    } else {
                        const i = n.element.propertyByAttributeName[t];
                        a = !i || i.nullable,
                        o = i && i.serialize ? n.element[i.serialize](e) : n.serialize(e, r, a)
                    }
                    "array" !== r && "object" !== r || "[]" !== o && "{}" !== o ? void 0 === o ? (n.element.removeAttribute(t),
                    n.element.shadowRoot && n.element.$.root && n.element.$.root.removeAttribute(t)) : (n.element.setAttribute(t, o),
                    n.element.shadowRoot && n.element.$.root && n.element.$.root.setAttribute(t, o)) : n.element.removeAttribute(t)
                }
                serialize(t, e, r) {
                    if (void 0 === e && (e = f.Types.getType(t)),
                    void 0 === t || !r && null === t)
                        return;
                    if (r && null === t)
                        return "null";
                    if ("string" === e)
                        return t;
                    if ("boolean" === e || "bool" === e) {
                        if (!0 === t || "true" === t || 1 === t || "1" === t)
                            return "";
                        if (!1 === t || "false" === t || 0 === t || "0" === t)
                            return
                    }
                    if ("array" === e)
                        return JSON.stringify(t);
                    return ["string", "number", "int", "integer", "float", "date", "any", "function"].indexOf(e) >= 0 ? t.toString() : "object" === e ? JSON.stringify(t) : void 0
                }
                deserialize(t, e, r) {
                    const n = "null" === t;
                    if (void 0 !== t && (!n || r)) {
                        if (n && r)
                            return null;
                        if ("boolean" === e || "bool" === e)
                            return null !== t;
                        if ("number" === e || "float" === e)
                            return "NaN" === t ? NaN : "Infinity" === t ? 1 / 0 : "-Infinity" === t ? -1 / 0 : parseFloat(t);
                        if ("int" === e || "integer" === e)
                            return "NaN" === t ? NaN : "Infinity" === t ? 1 / 0 : "-Infinity" === t ? -1 / 0 : parseInt(t);
                        if ("string" === e)
                            return t;
                        if ("any" === e)
                            return t;
                        if ("date" === e)
                            return new Date(t);
                        if ("function" === e) {
                            if ("function" == typeof window[t])
                                return window[t]
                        } else if ("array" === e || "object" === e)
                            try {
                                const e = JSON.parse(t);
                                if (e)
                                    return e
                            } catch (r) {
                                if (window[t] && "object" == typeof window[t])
                                    return window[t];
                                if ("array" === e && t.indexOf("[") >= 0) {
                                    if (t.indexOf("{") >= 0) {
                                        let e = t.replace(/{/gi, "").replace("[", "").replace("]", "").replace(/'/gi, "").replace(/"/gi, "").trim();
                                        e = e.split("},");
                                        for (let t = 0; t < e.length; t++) {
                                            let r = {}
                                              , n = e[t].trim().split(",");
                                            for (let t = 0; t < n.length; t++) {
                                                const e = n[t].split(":")[0].trim()
                                                  , o = n[t].split(":")[1].trim();
                                                r[e] = o
                                            }
                                            e[t] = r
                                        }
                                        return e
                                    }
                                    return t.replace("[", "").replace("]", "").replace(/'/gi, "").replace(/"/gi, "").trim().split(",")
                                }
                            }
                    }
                }
            }
            class b {
                static get Ripple() {
                    return o
                }
                static get Easings() {
                    return a
                }
            }
            class f {
                static get Types() {
                    return n
                }
                static get Core() {
                    return i
                }
                static get Animation() {
                    return b
                }
                static get Scroll() {
                    return p
                }
                static get InputEvents() {
                    return u
                }
                static Extend(t) {
                    return new h(t)
                }
                static Assign(t, e) {
                    if (t.indexOf(".") >= 0) {
                        const r = t.split(".");
                        return f[r[0]] || (f[r[0]] = {}),
                        void (f[r[0]][r[1]] = e)
                    }
                    f[t] = e
                }
            }
            const g = f.Extend(document);
            let v = null;
            document.addEventListener("click", ()=>{
                d.start(),
                v && clearTimeout(v),
                v = setTimeout(()=>{
                    d.stop()
                }
                , 1e4)
            }
            ),
            document.addEventListener("mouseenter", ()=>{
                d.start()
            }
            ),
            document.addEventListener("mouseleave", ()=>{
                d.stop()
            }
            );
            class w {
            }
            w.cache = {};
            class y extends HTMLElement {
                static get properties() {
                    return {
                        animation: {
                            value: "advanced",
                            type: "string",
                            allowedValues: ["none", "simple", "advanced"]
                        },
                        unfocusable: {
                            value: !1,
                            type: "boolean"
                        },
                        disabled: {
                            value: !1,
                            type: "boolean"
                        },
                        dataContext: {
                            value: null,
                            reflectToAttribute: !1,
                            type: "any"
                        },
                        debugMode: {
                            value: !0,
                            type: "boolean",
                            reflectToAttribute: !1
                        },
                        locale: {
                            value: "en",
                            type: "string",
                            reflectToAttribute: !1
                        },
                        localizeFormatFunction: {
                            value: null,
                            type: "any",
                            reflectToAttribute: !1
                        },
                        messages: {
                            value: {
                                en: {
                                    propertyUnknownName: "Invalid property name: '{{name}}'!",
                                    propertyUnknownType: "'{{name}}' property is with undefined 'type' member!",
                                    propertyInvalidValue: "Invalid '{{name}}' property value! Actual value: '{{actualValue}}', Expected value: '{{value}}'!",
                                    propertyInvalidValueType: "Invalid '{{name}}' property value type! Actual type: '{{actualType}}', Expected type: '{{type}}'!",
                                    methodInvalidValueType: "Invalid '{{name}}' method argument value type! Actual type: '{{actualType}}', Expected type: '{{type}}' for argument with index: '{{argumentIndex}}'!",
                                    methodInvalidArgumentsCount: "Invalid '{{name}}' method arguments count! Actual arguments count: '{{actualArgumentsCount}}', Expected at least: '{{argumentsCount}}' argument(s)!",
                                    methodInvalidReturnType: "Invalid '{{name}}' method return type! Actual type: '{{actualType}}', Expected type: '{{type}}'!",
                                    elementNotInDOM: "Element does not exist in DOM! Please, add the element to the DOM, before invoking a method.",
                                    moduleUndefined: "Module is undefined.",
                                    missingReference: "{{elementType}}: Missing reference to '{{files}}'.",
                                    htmlTemplateNotSuported: "{{elementType}}: Web Browser doesn't support HTMLTemplate elements.",
                                    invalidTemplate: "{{elementType}}: '{{property}}' property accepts a string that must match the id of an HTMLTemplate element from the DOM."
                                }
                            },
                            reflectToAttribute: !1,
                            inherit: !0,
                            type: "object"
                        },
                        props: {
                            value: null,
                            reflectToAttribute: !1,
                            isHierarchicalProperty: !0,
                            type: "any"
                        },
                        readonly: {
                            value: !1,
                            type: "boolean"
                        },
                        renderMode: {
                            value: "auto",
                            type: "string",
                            reflectToAttribute: !1,
                            allowedValues: ["auto", "manual"]
                        },
                        rightToLeft: {
                            value: !1,
                            type: "boolean"
                        },
                        rethrowError: {
                            value: !0,
                            type: "boolean",
                            reflectToAttribute: !1
                        },
                        theme: {
                            value: window[e].Theme,
                            type: "string"
                        },
                        visibility: {
                            value: "visible",
                            allowedValues: ["visible", "collapsed", "hidden"],
                            type: "string"
                        },
                        wait: {
                            value: !1,
                            type: "boolean"
                        }
                    }
                }
                getBindings(t, e) {
                    const r = this;
                    let n = 0
                      , o = {}
                      , a = (t=>{
                        if (t instanceof HTMLElement)
                            return r.parseAttributes(t);
                        {
                            let e = r.parseProperty(t.data ? t.data.trim() : null, "textContent", t);
                            if (e)
                                return r && t.parentNode === r.$.content && (e.value = "" !== r.$.html ? r.$.html : void 0,
                                r.innerHTML = ""),
                                {
                                    textContent: e
                                }
                        }
                    }
                    )(t);
                    a && (o.data = a),
                    e || (o.mapping = [],
                    e = o),
                    t.getAttribute && (o.nodeId = t.getAttribute("smart-id"),
                    e && a && (e.mapping[o.nodeId] = a)),
                    o.node = t,
                    t.firstChild && (o.children = {});
                    for (let a = t.firstChild; a; a = a.nextSibling)
                        o.children[n++] = r.getBindings(a, e);
                    return o
                }
                _addRemovePropertyBinding(t, e, r, n, o) {
                    if (!t || !e || !r)
                        return;
                    const a = this
                      , i = a.bindings
                      , s = r.getAttribute("smart-id")
                      , d = t.indexOf("{{") >= 0;
                    let l = !1;
                    (t = t.replace("{{", "").replace("}}", "").replace("[[", "").replace("]]", "")).indexOf("!") >= 0 && (t = t.replace("!", ""),
                    l = !0);
                    const m = a._properties[t]
                      , c = {
                        name: t,
                        reflectToAttribute: m.reflectToAttribute,
                        twoWay: d,
                        type: m.type,
                        not: l
                    };
                    if (o && !n) {
                        const r = {}
                          , n = {
                            name: t,
                            targetPropertyName: e,
                            reflectToAttribute: m.reflectToAttribute,
                            twoWay: d,
                            type: m.type,
                            not: l
                        };
                        r[t] = n,
                        i.mapping[s] = r
                    }
                    const u = function(t) {
                        for (let o in t) {
                            const i = t[o];
                            if (i.nodeId === s) {
                                i.data || (i.data = {}),
                                n ? (i.data[e] = null,
                                delete i.data[e]) : i.data[e] = c;
                                break
                            }
                            if (i.children)
                                u(i.children);
                            else if (i.node && i.node.children && i.node === r.parentElement) {
                                const t = i.node;
                                if (!t.firstChild)
                                    continue;
                                i.children = {};
                                let e = 0;
                                for (let r = t.firstChild; r; r = r.nextSibling)
                                    i.children[e++] = a.getBindings(r);
                                u(i.children)
                            }
                        }
                    };
                    u(i.children),
                    n ? delete a.boundProperties[t] : a.boundProperties[t] = !0,
                    a.updateBoundNodes(t)
                }
                addPropertyBinding(t, e, r, n) {
                    this._addRemovePropertyBinding(t, e, r, !1, n)
                }
                removePropertyBinding(t, e, r, n) {
                    this._addRemovePropertyBinding(t, e, r, !0, n)
                }
                parseAttributes(t) {
                    const e = this;
                    let r = void 0;
                    for (let n = 0; n < t.attributes.length; n++) {
                        const o = t.attributes[n]
                          , a = o.name
                          , i = o.value;
                        w.cache["toCamelCase" + a] || (w.cache["toCamelCase" + a] = f.Core.toCamelCase(a));
                        const s = w.cache["toCamelCase" + a];
                        if (a.indexOf("(") >= 0) {
                            let n = a.substring(1, a.length - 1);
                            if (e && !e.dataContext) {
                                e.templateListeners[t.getAttribute("smart-id") + "." + n] = i,
                                t.removeAttribute(a);
                                continue
                            }
                            {
                                r || (r = {});
                                const t = i.substring(0, i.indexOf("("));
                                r[s] = {
                                    isEvent: !0,
                                    name: n,
                                    value: t
                                };
                                continue
                            }
                        }
                        let d = e.parseProperty(i, a, t);
                        d && (r || (r = {}),
                        r[s] = d)
                    }
                    return r
                }
                parseProperty(t, e) {
                    if (!t || !t.length)
                        return;
                    const r = this;
                    let n, o = t.length, a = 0, i = 0, s = 0, d = !0;
                    for (; i < o; ) {
                        a = t.indexOf("{{", i);
                        let e = t.indexOf("[[", i)
                          , r = "}}";
                        if (e >= 0 && (a < 0 || e < a) && (a = e,
                        d = !1,
                        r = "]]"),
                        s = a < 0 ? -1 : t.indexOf(r, a + 2),
                        s < 0)
                            return;
                        n = n || {};
                        let o = t.slice(a + 2, s).trim();
                        n.name = o,
                        i = s + 2
                    }
                    const l = n.name
                      , m = r ? r._properties[l] : null;
                    if (n.twoWay = d,
                    n.ready = !1,
                    r && (l.indexOf("::") >= 0 ? r.boundProperties[l.substring(0, l.indexOf("::"))] = !0 : r.boundProperties[l] = !0),
                    m)
                        n.type = m.type,
                        n.reflectToAttribute = m.reflectToAttribute;
                    else {
                        ["checked", "selected", "async", "autofocus", "autoplay", "controls", "defer", "disabled", "hidden", "ismap", "loop", "multiple", "open", "readonly", "required", "scoped"].indexOf(e) >= 0 ? n.type = "boolean" : n.type = "string",
                        n.reflectToAttribute = !0
                    }
                    return n
                }
                updateTextNodes() {
                    this.updateTextNode(this.shadowRoot || this, this.bindings, this)
                }
                updateTextNode(t, e, r) {
                    const n = this;
                    if (!e)
                        return;
                    let o = 0;
                    for (let a = t.firstChild; a && e.children; a = a.nextSibling)
                        n.updateTextNode(a, e.children[o++], r);
                    if (e && e.data)
                        for (let t in e.data) {
                            const n = e.data[t]
                              , o = n.name;
                            "textContent" === t && n.twoWay && !n.updating && void 0 !== n.value && (r[o] = n.value)
                        }
                }
                updateBoundProperty(t, e) {
                    if (e.updating)
                        return;
                    const r = this;
                    e.updating = !0,
                    r[t] = e.value,
                    e.updating = !1
                }
                updateBoundNodes(t) {
                    const e = this;
                    if (e.updateBoundNode(e.shadowRoot || e, e.bindings, e, t),
                    e.detachedChildren.length > 0)
                        for (let r = 0; r < e.detachedChildren.length; r++) {
                            const n = e.detachedChildren[r]
                              , o = n.getAttribute("smart-id")
                              , a = function(t) {
                                if (t.nodeId === o)
                                    return t;
                                for (let e in t.children) {
                                    const r = t.children[e];
                                    if ((r.getAttribute ? r.getAttribute("smart-id") : "") === o)
                                        return t;
                                    if (r.children) {
                                        const t = a(r);
                                        if (t)
                                            return t
                                    }
                                }
                                return null
                            }
                              , i = a(e.bindings);
                            if (i)
                                e.updateBoundNode(n, i, e, t, !0);
                            else if (n.getAttribute && e.bindings.mapping) {
                                const r = e
                                  , n = e.bindings;
                                if (n)
                                    for (let o in n.mapping) {
                                        const a = r.querySelector('[smart-id="' + o + '"]');
                                        if (a) {
                                            const i = n.mapping[o];
                                            e.updateBoundData(a, i, r, t)
                                        }
                                    }
                            }
                        }
                }
                updateBoundMappedNodes() {
                    const t = this
                      , e = t.bindings
                      , r = t;
                    if (e.mapping)
                        for (let n in e.mapping) {
                            let o = r.querySelector('[smart-id="' + n + '"]');
                            if (r.shadowRoot && (o = r.querySelector('[id="' + n + '"]'),
                            o || (o = r.shadowRoot.querySelector('[id="' + n + '"]') || r.shadowRoot.querySelector('[smart-id="' + n + '"]'))),
                            o) {
                                const a = e.mapping[n];
                                t.updateBoundData(o, a, r)
                            } else if (r.getAttribute("aria-controls")) {
                                let a = document.getElementById(r.getAttribute("aria-controls"));
                                if (!a && r.shadowRoot && (a = r.shadowRoot.getElementById(r.getAttribute("aria-controls"))),
                                o = a.querySelector('[smart-id="' + n + '"]'),
                                o) {
                                    const a = e.mapping[n];
                                    t.updateBoundData(o, a, r)
                                }
                            }
                        }
                }
                updateBoundNode(t, e, r, n, o) {
                    const a = this;
                    if (!e)
                        return;
                    let i = 0;
                    if (o) {
                        if (o && !e.data)
                            for (let s = t.firstChild; s && e.children; s = s.nextSibling)
                                if (s.getAttribute) {
                                    const t = s.getAttribute("smart-id")
                                      , o = function() {
                                        for (let r in e.children)
                                            if (e.children[r].nodeId === t)
                                                return e.children[r]
                                    }();
                                    a.updateBoundNode(s, o, r, n),
                                    i++
                                } else
                                    a.updateBoundNode(s, e.children[i++], r, n, o)
                    } else
                        for (let o = t.firstChild; o && e.children; o = o.nextSibling)
                            if (o.getAttribute) {
                                const t = o.getAttribute("smart-id")
                                  , s = function() {
                                    for (let r in e.children)
                                        if (e.children[r].nodeId === t)
                                            return e.children[r]
                                }();
                                a.updateBoundNode(o, s, r, n),
                                i++
                            } else
                                a.updateBoundNode(o, e.children[i++], r, n);
                    if (!e || !e.data)
                        return;
                    const s = e.data;
                    a.updateBoundData(t, s, r, n)
                }
                updateBoundData(t, e, r, n) {
                    const o = this;
                    for (let a in e) {
                        const i = e[a];
                        let s = i.name;
                        if (!i.updating && (s.indexOf("::") >= 0 && (s = s.substring(0, s.indexOf("::"))),
                        void 0 === n || n === s)) {
                            if (s.indexOf("(") >= 0) {
                                let t = s.substring(s.indexOf("("));
                                const e = s.substring(0, s.indexOf("("));
                                if (t = t.substring(1, t.length - 1),
                                t = t.replace(/ /gi, ""),
                                t = t.split(","),
                                t.length > 0 && "" !== t[0]) {
                                    let n = [];
                                    for (let e = 0; e < t.length; e++)
                                        n.push(r[t[e]]);
                                    i.value = r[e].apply(r, n)
                                } else
                                    i.value = r[e]();
                                i.type = typeof i.value
                            } else
                                i.value = r[s];
                            if ("innerHTML" === s) {
                                if (t[a].toString().trim() !== r[s].toString().trim()) {
                                    if (window.smartBlazor && t[a].indexOf("\x3c!--") >= 0) {
                                        (i.ready || r._properties[s].defaultValue !== i.value) && (t[a] = i.value.toString());
                                        continue
                                    }
                                    (i.ready || r._properties[s].defaultValue !== i.value) && (t[a] = i.value.toString().trim())
                                }
                            } else
                                i.not ? (t[a] = !i.value,
                                i.targetPropertyName && (t[i.targetPropertyName] = !i.value)) : (t[a] = i.value,
                                i.targetPropertyName && (t[i.targetPropertyName] = i.value));
                            if (t.$ && t.$.isNativeElement) {
                                w.cache["toDash" + a] || (w.cache["toDash" + a] = f.Core.toDash(a));
                                const e = w.cache["toDash" + a]
                                  , r = t.$.getAttributeValue(e, i.type);
                                !i.reflectToAttribute || r === i.value && i.ready || t.$.setAttributeValue(e, i.value, i.type),
                                i.reflectToAttribute || t.$.setAttributeValue(e, null, i.type)
                            }
                            if (!i.ready) {
                                if (t.$ && t.$.isCustomElement) {
                                    w.cache["toDash" + a] || (w.cache["toDash" + a] = f.Core.toDash(a));
                                    const e = w.cache["toDash" + a];
                                    t._properties || (t._beforeCreatedProperties = t._properties = t.propertyByAttributeName = []),
                                    t._properties[a] || (t._properties[a] = {
                                        attributeName: e
                                    },
                                    t._beforeCreatedProperties && (t._beforeCreatedProperties[a] = t._properties[a]),
                                    t.propertyByAttributeName[e] = t._properties[a]);
                                    const r = t._properties[a];
                                    r.isUpdating = !0,
                                    i.reflectToAttribute && (i.not ? t.$.setAttributeValue(r.attributeName, !i.value, i.type) : t.$.setAttributeValue(r.attributeName, i.value, i.type)),
                                    i.reflectToAttribute || t.$.setAttributeValue(r.attributeName, null, i.type),
                                    r.isUpdating = !1
                                }
                                if (i.twoWay) {
                                    const e = function(e) {
                                        if (i.value = e,
                                        t.$ && t.$.isNativeElement) {
                                            w.cache["toDash" + a] || (w.cache["toDash" + a] = f.Core.toDash(a));
                                            const e = w.cache["toDash" + a]
                                              , r = t.$.getAttributeValue(e, i.type);
                                            i.reflectToAttribute && r !== i.value && t.$.setAttributeValue(e, i.value, i.type),
                                            i.reflectToAttribute || t.$.setAttributeValue(e, null, i.type)
                                        }
                                    };
                                    if (i.name.indexOf("::") >= 0) {
                                        const r = i.name.indexOf("::")
                                          , n = i.name.substring(r + 2);
                                        o["$" + t.getAttribute("smart-id")].listen(n, (function() {
                                            e(t[a]);
                                            const r = i.name.substring(0, i.name.indexOf("::"));
                                            o.updateBoundProperty(r, i)
                                        }
                                        ))
                                    }
                                    if (t.$ && t.$.isCustomElement) {
                                        t._properties[a] && (t._properties[a].notify = !0),
                                        w.cache["toDash" + a] || (w.cache["toDash" + a] = f.Core.toDash(a));
                                        const r = w.cache["toDash" + a];
                                        o["$" + t.getAttribute("smart-id")].listen(r + "-changed", (function(t) {
                                            let r = t.detail;
                                            e(r.value);
                                            const n = o.context;
                                            t.context !== document && (o.context = o),
                                            o.updateBoundProperty(i.name, i),
                                            o.context = n
                                        }
                                        ))
                                    }
                                }
                            }
                            i.ready = !0
                        }
                    }
                }
                static clearCache() {
                    this.cache = {}
                }
                addMessages(t, e) {
                    Object.assign(this.messages[t], e)
                }
                localize(t, e) {
                    const r = this;
                    if (!r.messages || !r.messages[r.locale])
                        return;
                    let n = r.messages[r.locale][t];
                    if ("" === n)
                        return "";
                    if (!n) {
                        const n = r.messages.en;
                        if (n) {
                            let r = n[t];
                            if (r) {
                                for (let t in e) {
                                    let n = e[t];
                                    r = r.replace(new RegExp("{{" + t + "}}","g"), n)
                                }
                                return r
                            }
                            return t
                        }
                    }
                    const o = n;
                    for (let t in e) {
                        let r = e[t];
                        n = n.replace(new RegExp("{{" + t + "}}","g"), r)
                    }
                    if (r.localizeFormatFunction) {
                        const a = r.localizeFormatFunction(o, n, e, t);
                        if (void 0 !== a)
                            return a
                    }
                    return n
                }
                static get requires() {
                    return {}
                }
                static get listeners() {
                    return {
                        "theme-changed": function(t) {
                            this.theme = t.detail.newValue
                        }
                    }
                }
                static get methods() {
                    return {}
                }
                get classNamesMap() {
                    return {
                        animation: "smart-animate",
                        rippleAnimation: "smart-ripple"
                    }
                }
                get hasAnimation() {
                    return "none" !== this.animation
                }
                get hasRippleAnimation() {
                    return "none" !== this.animation && "advanced" === this.animation
                }
                static get modules() {
                    return window[e].Modules
                }
                get properties() {
                    const t = this;
                    return t._properties || (t._properties = []),
                    t._properties
                }
                get parents() {
                    const t = this;
                    let r = []
                      , n = t.parentNode;
                    for (; n && 9 !== n.nodeType; )
                        n instanceof HTMLElement == !0 && r.push(n),
                        n = n.parentNode;
                    const o = t.getRootNode();
                    if (o.host) {
                        const t = t=>{
                            let e = [t]
                              , r = t.parentNode;
                            for (; r && 9 !== r.nodeType; )
                                r instanceof HTMLElement == !0 && e.push(r),
                                r = r.parentNode;
                            return e
                        }
                        ;
                        r = r.concat(t(o.host))
                    }
                    return window[e].EnableShadowDOM && t.isInShadowDOM && t.shadowParent && (r = r.concat(t.shadowParent.parents)),
                    r
                }
                log(t) {
                    this._logger("log", t)
                }
                warn(t) {
                    this._logger("warn", t)
                }
                error(t) {
                    this._logger("error", t)
                }
                _logger(t, e) {
                    if (this.debugMode) {
                        const r = e instanceof Error ? e.message : e.toString();
                        console[t](r)
                    }
                    if (this.rethrowError && "error" === t)
                        throw e
                }
                get focused() {
                    return this.contains(document.activeElement)
                }
                template() {
                    return "<div></div>"
                }
                registered() {
                    const t = this;
                    t.onRegistered && t.onRegistered()
                }
                created() {
                    const t = this;
                    t.isReady = !1,
                    t._initElement(t),
                    t._setModuleState("created"),
                    t.onCreated && t.onCreated()
                }
                completed() {
                    const t = this;
                    t.isCompleted = !0,
                    t._onCompleted && t._onCompleted(),
                    t.onCompleted && t.onCompleted()
                }
                whenReady(t) {
                    const e = this;
                    e.isCompleted ? t() : (e.whenReadyCallbacks || (e.whenReadyCallbacks = []),
                    e.whenReadyCallbacks.push(t))
                }
                whenRendered(t) {
                    const e = this;
                    e.isRendered ? t() : (e.whenRenderedCallbacks || (e.whenRenderedCallbacks = []),
                    e.whenRenderedCallbacks.push(t))
                }
                addThemeClass() {
                    const t = this;
                    "" !== t.theme && t.classList.add("smart-" + t.theme)
                }
                addDefaultClass() {
                    this.classList.add(e.toLowerCase() + "-element"),
                    this.classList.add(this.nodeName.toLowerCase())
                }
                _renderShadowRoot() {
                    const t = this;
                    if (t.shadowRoot) {
                        t.$.root.classList.add(t.nodeName.toLowerCase());
                        for (let e = 0; e < t.attributes.length; e++) {
                            const r = t.attributes[e];
                            "class" === r.name || "id" === r.name || "style" === r.name || "tabindex" === r.name || r.name.indexOf("aria") >= 0 || t.$.root.setAttribute(r.name, r.value)
                        }
                        for (let e = 0; e < t.classList.length; e++) {
                            const r = t.classList[e];
                            "smart-element-init" !== r && "smart-element" !== r && "smart-hidden" !== r && "smart-visibility-hidden" !== r && t.$.root.classList.add(r)
                        }
                    }
                }
                render() {
                    const t = this;
                    if (!t.isRendered && (t.isRendered = !0,
                    t.isRendering = !1,
                    t.context = document,
                    t._renderShadowRoot(),
                    t.whenRenderedCallbacks)) {
                        for (let e = 0; e < t.whenRenderedCallbacks.length; e++)
                            t.whenRenderedCallbacks[e]();
                        t.whenRenderedCallbacks = []
                    }
                    t.onRender && t.onRender(),
                    t.disabled && t.setAttribute("aria-disabled", !0),
                    t.readonly && -1 !== ["checkbox", "combobox", "grid", "gridcell", "listbox", "radiogroup", "slider", "spinbutton", "textbox"].indexOf(t.getAttribute("role")) && t.setAttribute("aria-readonly", !0)
                }
                ready() {
                    const t = this;
                    if (t._setId(),
                    t.addThemeClass(),
                    t.addDefaultClass(),
                    "collapsed" === t.visibility ? t.classList.add("smart-hidden") : "hidden" === t.visibility && t.classList.add("smart-visibility-hidden"),
                    t.dataContext && t.applyDataContext(),
                    t.onReady && t.onReady(),
                    t.shadowRoot && Smart(t._selector)) {
                        if (Smart(t._selector).styleUrls) {
                            const e = Smart(t._selector).styleUrls;
                            for (let r = 0; r < e.length; r++)
                                t.importStyle(e[r])
                        }
                        if (Smart(t._selector).styles) {
                            const e = document.createElement("style");
                            e.innerHTML = Smart(t._selector).styles,
                            t.shadowRoot.insertBefore(e, t.shadowRoot.firstChild)
                        }
                    }
                    Smart(t._selector) && Smart(t._selector).ready && Smart(t._selector).ready()
                }
                _setId() {
                    const t = this;
                    if (!t.id) {
                        const e = t.elementName;
                        t.id = e.slice(0, 1).toLowerCase() + e.slice(1) + Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
                    }
                }
                checkLicense() {
                    const t = this;
                    "Evaluation" === window[e].License && -1 === window.location.hostname.indexOf("htmlelements") && (t.logWatermark(),
                    t.logLicense(),
                    window[e].License = "")
                }
                logWatermark() {
                    const t = document.createElement("a");
                    t.href = "https://www.htmlelements.com/",
                    t.innerHTML = "https://www.htmlelements.com/",
                    t.style.position = "absolute",
                    t.style.right = "5px",
                    t.style.bottom = "5px",
                    t.style.color = "#fff",
                    t.style.padding = "20px",
                    t.style.borderRadius = "5px",
                    t.style.background = "#0C3D78",
                    t.style.cursor = "pointer",
                    t.style.zIndex = "999999",
                    t.style.display = "block",
                    t.style.fontSize = "24px",
                    t.style.textDecoration = "none",
                    t.style.fontWeight = "bold",
                    t.style.opacity = 0,
                    t.style.transition = "opacity .35s ease-in-out",
                    t.id = "watermark",
                    document.getElementById("watermark") || setTimeout(()=>{
                        document.getElementById("watermark") || (document.body.appendChild(t),
                        setTimeout(()=>{
                            t.style.opacity = 1
                        }
                        ),
                        setTimeout(()=>{
                            t.style.opacity = 0,
                            setTimeout(()=>{
                                t.parentNode.removeChild(t)
                            }
                            , 350)
                        }
                        , 6e3))
                    }
                    , 1e3)
                }
                logLicense() {
                    console.log("****************************************************************************************************************"),
                    console.log("****************************************************************************************************************"),
                    console.log("****************************************************************************************************************"),
                    console.log("*jQWidgets License Key Not Found."),
                    console.log("*This is an EVALUATION only Version, it is NOT Licensed for software projects intended for PRODUCTION."),
                    console.log("*if you want to hide this message, please send an email to: sales@jqwidgets.com for a license."),
                    console.log("****************************************************************************************************************"),
                    console.log("****************************************************************************************************************"),
                    console.log("****************************************************************************************************************")
                }
                get _selector() {
                    const t = this;
                    return t.id ? "#" + t.id : t.classList.length > 0 ? "." + t.classList[0] : ""
                }
                applyDataContext(t) {
                    const e = this;
                    let r = "string" == typeof e.dataContext ? window[e.dataContext] || document[e.dataContext] : e.dataContext;
                    if (t && (r = t,
                    e.dataContext = t),
                    r) {
                        if (!r._uid) {
                            r._uid = (Date.now().toString(36) + Math.random().toString(36).substr(2, 5)).toUpperCase(),
                            r._properties = [];
                            for (let t in r) {
                                const n = r[t];
                                "function" != typeof n && "_properties" !== t && "_uid" !== t && (r._properties[t] = n,
                                Object.defineProperty(r, t, {
                                    configurable: !1,
                                    enumerable: !0,
                                    get: ()=>r._properties[t],
                                    set(n) {
                                        const o = r._properties[t];
                                        r._properties[t] = n;
                                        let a = [];
                                        a[t] = {
                                            oldValue: o,
                                            value: n
                                        },
                                        a.length++,
                                        e.updatingDataContext = !0,
                                        g.fireEvent("dataContextPropertyChanged", {
                                            dataContext: r,
                                            properties: a
                                        }, {
                                            bubbles: !1,
                                            cancelable: !0
                                        }),
                                        e.updatingDataContext = !1
                                    }
                                }))
                            }
                        }
                        if (e.dataContextProperties = e.parseAttributes(e),
                        e.dataContextPropertiesMap = {},
                        e.dataContextListeners = {},
                        e.dataContextProperties) {
                            e.updatingDataContext = !0;
                            for (let t in e.dataContextProperties) {
                                const n = e.dataContextProperties[t]
                                  , o = n.name;
                                if (n.propertyName = t,
                                e.dataContextPropertiesMap[o] = t,
                                w.cache["toDash" + t] || (w.cache["toDash" + t] = f.Core.toDash(o)),
                                n.isEvent) {
                                    const t = n.value;
                                    e.dataContextListeners[o] && e.removeEventListener(o, e.dataContextListeners[o]),
                                    e.dataContextListeners[o] = function(e) {
                                        r[t](e)
                                    }
                                    ,
                                    e.addEventListener(o, e.dataContextListeners[o])
                                }
                                if (o.indexOf(".") >= 0) {
                                    const n = o.split(".");
                                    let a = r[n[0]];
                                    for (let t = 1; t < n.length; t++)
                                        a = a[n[t]];
                                    void 0 !== a && (e[t] = a)
                                } else
                                    e[t] = r[o]
                            }
                            e.dataContextPropertyChangedHandler = function(t) {
                                const r = t.detail.properties;
                                if (t.detail.dataContext === ("string" == typeof e.dataContext ? window[e.dataContext] || document[e.dataContext] : e.dataContext))
                                    for (let t in r) {
                                        const n = e.dataContextPropertiesMap[t]
                                          , o = e.context;
                                        n && (e.context = document,
                                        e[n] = r[t].value,
                                        e.context = o)
                                    }
                            }
                            ,
                            g.listen("dataContextPropertyChanged", e.dataContextPropertyChangedHandler),
                            e.updatingDataContext = !1
                        } else
                            e.dataContextProperties = null
                    } else {
                        e.dataContextProperties = null;
                        const t = function() {
                            ("string" == typeof e.dataContext ? window[e.dataContext] || document[e.dataContext] : e.dataContext) && (e.applyDataContext(),
                            window.removeEventListener("load", t))
                        };
                        window.addEventListener("load", t)
                    }
                }
                updateDataContextProperty(t) {
                    const e = this
                      , r = "string" == typeof e.dataContext ? window[e.dataContext] || document[e.dataContext] : e.dataContext
                      , n = e.dataContextProperties[t];
                    if (!e.updatingDataContext && n.twoWay) {
                        const o = n.name;
                        if (o.indexOf(".") >= 0) {
                            const n = o.split(".");
                            let a = r[n[0]];
                            for (let t = 1; t < n.length; t++)
                                a = a[n[t]];
                            void 0 !== a && (a = e[t],
                            l[r._uid] && (l[r._uid][t] = a))
                        } else
                            r[o] = e[t],
                            l[r._uid] && (l[r._uid][t] = r[o])
                    }
                }
                static get version() {
                    return window[e].Version
                }
                initProperties() {
                    const t = this;
                    if (Smart(t._selector) && Smart(t._selector).properties && (t._initProperties = Smart(t._selector).properties),
                    t.hasAttribute("props") && !t.props ? t._initProperties = window[t.getAttribute("props")] : t.props && (t._initProperties = t.props),
                    t._initProperties) {
                        const e = Object.keys(t._initProperties);
                        for (let r = 0; r < e.length; r++) {
                            const n = e[r]
                              , o = t._initProperties[n];
                            if (o) {
                                if (o.constructor === Smart.ObservableArray || o instanceof Smart.ObservableArray) {
                                    t[n] = o.toArray();
                                    continue
                                }
                                if (o.constructor === Smart.DataAdapter || "smartDataAdapter" === o.constructor.name || "object" == typeof o && Smart.DataAdapter && o instanceof Smart.DataAdapter || o instanceof Smart.Observable || o.constructor === Smart.Observable || "object" != typeof o || f.Types.isArray(o) || o instanceof Date) {
                                    if (void 0 === t[n] && -1 === ["onReady", "onAttached", "onDetached", "onCreated", "onCompleted"].indexOf(n)) {
                                        const e = t.localize("propertyUnknownName", {
                                            name: n
                                        });
                                        t.log(e)
                                    }
                                    t[n] = o;
                                    continue
                                }
                            }
                            if ("messages" !== n)
                                if ("dataSourceMap" !== n && "rowCSSRules" !== n) {
                                    if (o && "object" == typeof o) {
                                        const e = function(r, n) {
                                            const o = Object.keys(r);
                                            for (let a = 0; a < o.length; a++) {
                                                const i = o[a]
                                                  , s = r[i]
                                                  , d = t._properties[n + "_" + i];
                                                if (d && null === d.value) {
                                                    if (void 0 === t[n + "_" + i]) {
                                                        const e = t.localize("propertyUnknownName", {
                                                            name: n + "_" + i
                                                        });
                                                        t.log(e)
                                                    }
                                                    t[n + "_" + i] = s
                                                } else if ("object" == typeof s && !f.Types.isArray(s) && s && s.constructor !== Date)
                                                    e(s, n + "_" + i);
                                                else {
                                                    if (void 0 === t[n + "_" + i]) {
                                                        const e = t.localize("propertyUnknownName", {
                                                            name: n + "_" + i
                                                        });
                                                        t.log(e)
                                                    }
                                                    t[n + "_" + i] = s
                                                }
                                            }
                                        };
                                        e(o, n)
                                    }
                                } else
                                    t[n] = o;
                            else
                                t[n] = Object.assign(t[n], o)
                        }
                    }
                }
                setProperties(t) {
                    const e = this
                      , r = Object.keys(t);
                    for (let n = 0; n < r.length; n++) {
                        const o = r[n]
                          , a = t[o];
                        if (a.constructor === Smart.ObservableArray || a instanceof Smart.ObservableArray)
                            e[o] = a.toArray();
                        else if (a.constructor === Smart.DataAdapter || "smartDataAdapter" === a.constructor.name || "object" == typeof a && Smart.DataAdapter && a instanceof Smart.DataAdapter || a instanceof Smart.Observable || a.constructor === Smart.Observable || "object" != typeof a || f.Types.isArray(a) || a instanceof Date) {
                            if (void 0 === e[o] && -1 === ["onReady", "onAttached", "onDetached", "onCreated", "onCompleted"].indexOf(o))
                                continue;
                            const t = e._properties[o];
                            "int" === t.type || "number" === t.type && "string" == typeof subPropertyValue ? "int" === t.type ? e[o] = parseInt(a) : e[o] = parseFloat(a) : e[o] = a
                        } else if ("messages" !== o && "dataSourceMap" !== o) {
                            if ("object" == typeof a) {
                                const t = function(r, n) {
                                    const o = Object.keys(r);
                                    for (let a = 0; a < o.length; a++) {
                                        const i = o[a]
                                          , s = r[i]
                                          , d = e._properties[n + "_" + i];
                                        if (d && null === d.value) {
                                            if (void 0 === e[n + "_" + i])
                                                continue;
                                            const t = e._properties[n + "_" + i];
                                            "int" === t.type || "number" === t.type && "string" == typeof s ? "int" === t.type ? e[n + "_" + i] = parseInt(s) : e[n + "_" + i] = parseFloat(s) : e[n + "_" + i] = s
                                        } else if ("object" == typeof s && !f.Types.isArray(s) && s && s.constructor !== Date)
                                            t(s, n + "_" + i);
                                        else {
                                            if (void 0 === e[n + "_" + i])
                                                continue;
                                            const t = e._properties[n + "_" + i];
                                            "int" === t.type || "number" === t.type && "string" == typeof s ? "int" === t.type ? e[n + "_" + i] = parseInt(s) : e[n + "_" + i] = parseFloat(s) : e[n + "_" + i] = s
                                        }
                                    }
                                };
                                t(a, o)
                            }
                        } else
                            e[o] = a
                    }
                }
                setup() {
                    const t = this;
                    if (t.context = this,
                    t.isReady && !t.isCompleted)
                        return;
                    if (t.isReady)
                        return t._setModuleState("attached"),
                        t.isAttached = !0,
                        t.attached(),
                        t._handleListeners("listen"),
                        void (t.context = document);
                    t.ownerElement && t.ownerElement.detachedChildren.indexOf(t) >= 0 && t.ownerElement.detachedChildren.splice(t.ownerElement.detachedChildren.indexOf(t), 1),
                    t.isReady = !0,
                    t.methods = t.getStaticMember("methods"),
                    t.initProperties(),
                    i.isMobile && t.classList.add("smart-mobile");
                    for (let e = 0; e < t.attributes.length; e += 1) {
                        const r = t.propertyByAttributeName[t.attributes[e].name];
                        if (!r)
                            continue;
                        let n = t.$.getAttributeValue(r.attributeName, r.type);
                        const o = n ? n.toString() : "";
                        if (!(o.indexOf("{{") >= 0 || o.indexOf("[[") >= 0) && (("object" === r.type || "array" === r.type || !(t.attributes[e].value.indexOf("{{") >= 0 || t.attributes[e].value.indexOf("[[") >= 0)) && void 0 !== n && r.value !== n)) {
                            const o = f.Types.getType(n)
                              , a = t.attributes[e].value;
                            if (("any" === r.type || "object" === r.type) && "" + t[r.name] === n)
                                continue;
                            if ("array" === r.type && t[r.name] && JSON.stringify(t[r.name]) === n)
                                continue;
                            if ("number" === o && isNaN(n) && "NaN" !== a && "Infinity" !== a && "-Infinity" !== a) {
                                const e = t.localize("propertyInvalidValueType", {
                                    name: r.name,
                                    actualType: "string",
                                    type: r.type
                                });
                                t.log(e)
                            }
                            r.isUpdatingFromAttribute = !0,
                            t[r.name] = n,
                            r.isUpdatingFromAttribute = !1
                        }
                    }
                    for (let e in t._properties) {
                        const r = t._properties[e];
                        if ("innerHTML" === e && r.value === r.defaultValue && (r.value = r.defaultValue = f.Core.html(t)),
                        "boolean" !== r.type && "bool" !== r.type || "false" === t.getAttribute(r.attributeName) && (r.isUpdating = !0,
                        t.setAttribute(r.attributeName, ""),
                        r.isUpdating = !1),
                        r.defaultReflectToAttribute && r.reflectToAttribute) {
                            if (r.defaultReflectToAttribute && r.defaultReflectToAttributeConditions) {
                                let e = !0;
                                for (let n = 0; n < r.defaultReflectToAttributeConditions.length; n++) {
                                    const o = r.defaultReflectToAttributeConditions[n];
                                    let a, i;
                                    for (let t in o)
                                        a = t,
                                        i = o[t];
                                    t._properties[a] && t._properties[a].value !== i && (e = !1)
                                }
                                if (!e)
                                    continue
                            }
                            r.isUpdating = !0,
                            t.$.setAttributeValue(r.attributeName, r.value, r.type),
                            r.isUpdating = !1
                        }
                    }
                    const r = [];
                    if (t.children.length > 0)
                        for (let e = 0; e < t.children.length; e++) {
                            const n = t.children[e];
                            f.Extend(n).isCustomElement && r.push(n)
                        }
                    t.applyTemplate(),
                    t.complete = function() {
                        if (!t.templateBindingsReady) {
                            const e = t=>{
                                t.templateBindingsReady || (t.templateBindingsReady = !0,
                                t.updateTextNodes(),
                                t.updateBoundNodes())
                            }
                            ;
                            if (t.ownerElement) {
                                let r = t.ownerElement
                                  , n = [];
                                for (; r; )
                                    n.push(r),
                                    r = r.ownerElement;
                                for (let t = n.length - 1; t >= 0; t--)
                                    e(n[t]);
                                e(t)
                            } else
                                e(t)
                        }
                        const e = ()=>{
                            if (t._setModuleState("ready"),
                            t.ready(),
                            "auto" !== t.renderMode || t.isRendered || t.render(),
                            t.isAttached = !0,
                            t._setModuleState("attached"),
                            t.attached(),
                            t._handleListeners("listen"),
                            t.isHidden || 0 !== t.offsetWidth && 0 !== t.offsetHeight || (t.isHidden = !0),
                            t.completed(),
                            t.isRendered && (t.context = document),
                            t.whenReadyCallbacks) {
                                for (let e = 0; e < t.whenReadyCallbacks.length; e++)
                                    t.whenReadyCallbacks[e]();
                                t.whenReadyCallbacks = []
                            }
                        }
                        ;
                        if (t.wait)
                            t.classList.add("smart-visibility-hidden");
                        else if (t.classList.contains("smart-async"))
                            requestAnimationFrame(()=>{
                                e()
                            }
                            );
                        else {
                            const r = t.shadowParent;
                            t.shadowParent = null;
                            const n = t.parents;
                            if (t.shadowParent = r,
                            0 === n.length)
                                return;
                            const o = ()=>{
                                let e = t.ownerElement
                                  , r = [];
                                for (; e; )
                                    r.push(e),
                                    e = e.ownerElement;
                                for (let t = r.length - 1; t >= 0; t--)
                                    r[t].updateBoundMappedNodes()
                            }
                            ;
                            t.ownerElement && "HTML" !== n[n.length - 1].nodeName ? t.getRootNode().host ? e() : t.ownerElement && "HTML" === t.ownerElement.parents[t.ownerElement.parents.length - 1].nodeName ? (o(),
                            e()) : t.checkIsInDomInterval = setInterval(()=>{
                                const r = t.parents;
                                "HTML" === r[r.length - 1].nodeName && (clearInterval(t.checkIsInDomInterval),
                                o(),
                                e())
                            }
                            , 100) : e()
                        }
                    }
                    ;
                    let n = [].slice.call(t.querySelectorAll("[smart-id]")).concat(r);
                    if (window[e].EnableShadowDOM && !0 !== t.isInShadowDOM && (n = [].slice.call(t.shadowRoot.querySelectorAll("[smart-id]")).concat(r)),
                    0 === n.length)
                        t.complete();
                    else {
                        t._completeListeners = 0;
                        for (let e = 0; e < n.length; e++) {
                            const r = n[e];
                            if (f.Extend(r).isCustomElement) {
                                const e = function() {
                                    t._completeListeners--,
                                    0 === t._completeListeners && (t.complete(),
                                    delete t._completeListeners)
                                }
                                .bind(t);
                                r.isCompleted || r.isUtilityElement || !0 === r.wait || (t._completeListeners++,
                                r._onCompleted || (r.completeHandlers = [],
                                r._onCompleted = function() {
                                    for (let t = 0; t < r.completeHandlers.length; t++)
                                        r.completeHandlers[t]()
                                }
                                ),
                                r.completeHandlers.push(e))
                            }
                        }
                        0 === t._completeListeners && t.complete()
                    }
                }
                visibilityChangedHandler() {
                    const t = this;
                    t.isReady && requestAnimationFrame(()=>{
                        0 === t.offsetWidth || 0 === t.offsetHeight ? t.isHidden = !0 : (t.isHidden = !1,
                        t.$.fireEvent("resize", t, {
                            bubbles: !1,
                            cancelable: !0
                        }))
                    }
                    )
                }
                attributeChangedCallback(t, e, r) {
                    const n = this
                      , o = n.propertyByAttributeName[t];
                    if ("class" !== t && "style" !== t || n.visibilityChangedHandler(),
                    o || n.attributeChanged(t, e, r),
                    n.onAttributeChanged && n.onAttributeChanged(t, e, r),
                    !o || o && o.isUpdating)
                        return;
                    let a = n.$.getAttributeValue(o.attributeName, o.type);
                    void 0 !== r && n[o.name] !== a && (o.isUpdatingFromAttribute = !0,
                    n[o.name] = void 0 !== a ? a : n._properties[o.name].defaultValue,
                    o.isUpdatingFromAttribute = !1)
                }
                attributeChanged(t, e, r) {}
                set hasStyleObserver(t) {
                    const e = this;
                    void 0 === e._hasStyleObserver && (e._hasStyleObserver = t),
                    t ? d.watch(e) : d.unwatch(e)
                }
                get hasStyleObserver() {
                    const t = this;
                    return void 0 === t._hasStyleObserver || t._hasStyleObserver
                }
                attached() {
                    const t = this;
                    t.hasStyleObserver && d.watch(t),
                    t.onAttached && t.onAttached(),
                    Smart(t._selector) && Smart(t._selector).attached && Smart(t._selector).attached()
                }
                detached() {
                    const t = this;
                    t.hasStyleObserver && d.unwatch(t),
                    t._setModuleState("detached"),
                    t.isAttached = !1,
                    t.ownerElement && -1 === t.ownerElement.detachedChildren.indexOf(t) && t.ownerElement.detachedChildren.push(t),
                    t._handleListeners("unlisten"),
                    t.onDetached && t.onDetached(),
                    Smart(t._selector) && Smart(t._selector).detached && Smart(t._selector).detached(),
                    m && m[t._selector] && delete m[t._selector]
                }
                propertyChangedHandler(t, e, r) {
                    const n = this;
                    e !== r && ("theme" === t && ("" !== e && n.classList.remove("smart-" + e),
                    "" !== r && n.classList.add("smart-" + r)),
                    "visibility" === t ? ("collapsed" === e ? n.classList.remove("smart-hidden") : "hidden" === e && n.classList.remove("smart-visibility-hidden"),
                    "collapsed" === r ? n.classList.add("smart-hidden") : "hidden" === r && n.classList.add("smart-visibility-hidden")) : ("disabled" === t || "readonly" === t) && n._ariaPropertyChangedHandler(t, r),
                    n.propertyChanged && n.propertyChanged(t, e, r))
                }
                _ariaPropertyChangedHandler(t, e) {
                    const r = this;
                    "readonly" === t && -1 === ["checkbox", "combobox", "grid", "gridcell", "listbox", "radiogroup", "slider", "spinbutton", "textbox"].indexOf(r.getAttribute("role")) || (e ? r.setAttribute("aria-" + t, !0) : r.removeAttribute("aria-" + t))
                }
                _handleListeners(t) {
                    const e = this
                      , r = e.tagName.toLowerCase()
                      , n = n=>{
                        for (let o in n) {
                            const a = o.split(".");
                            let i = a[0]
                              , s = e.$;
                            if (a[1])
                                if (i = a[1],
                                s = e["$" + a[0]],
                                "document" === a[0]) {
                                    let t = e.smartId;
                                    "" === t && (t = f.Core.toCamelCase(r)),
                                    i = i + "." + t
                                } else
                                    e.smartId && (i = i + "." + e.smartId + "_" + e.parents.length);
                            else
                                e.smartId && (i = i + "." + e.smartId);
                            const d = n[o]
                              , l = function(t) {
                                const r = e.context;
                                e.context = e,
                                e[d] && e[d].apply(e, [t]),
                                e.context = r
                            };
                            s && s[t](i, l)
                        }
                    }
                    ;
                    n(e.getStaticMember("listeners")),
                    n(e.templateListeners),
                    Smart(e._selector) && Smart(e._selector).properties && n(Smart(e._selector).listeners)
                }
                parseTemplate() {
                    const e = this
                      , n = e.template()
                      , o = document.createDocumentFragment();
                    if (t[e.nodeName] && !r)
                        return t[e.nodeName].cloneNode(!0);
                    if ("" === n)
                        return null;
                    let a = document.createElement("div");
                    o.appendChild(a),
                    a.innerHTML = n;
                    let i = a.childNodes;
                    a.parentNode.removeChild(a);
                    for (let t = 0; t < i.length; t++)
                        o.appendChild(i[t]);
                    return t[e.nodeName] = o,
                    r ? o : o.cloneNode(!0)
                }
                applyTemplate() {
                    const t = this
                      , e = t.parseTemplate();
                    if (!e)
                        return;
                    if (!e.hasChildNodes)
                        return;
                    const r = e.childNodes[0]
                      , n = (e,r)=>{
                        t["$" + e] = r.$ = f.Extend(r),
                        t.$[e] = r,
                        r.ownerElement = t
                    }
                    ;
                    let o = r;
                    if (r.getElementsByTagName("content").length > 0) {
                        let t = r.getElementsByTagName("content")[0];
                        o = t.parentNode,
                        o.removeChild(t)
                    } else {
                        const t = e.querySelectorAll("[inner-h-t-m-l]");
                        t && t.length > 0 && (o = t[0])
                    }
                    t.$.template = "template" === r.nodeName.toLowerCase() ? r : r.querySelector("template");
                    let a = e.querySelectorAll("[id]");
                    0 === a.length && (a = e.querySelectorAll("*")),
                    n("root", r),
                    n("content", o),
                    t.$.html = t.innerHTML.toString().trim();
                    for (let e = 0; e < a.length; e += 1) {
                        let r = a[e];
                        "" === r.id && (r.id = "child" + e),
                        n(r.id, r),
                        r.setAttribute("smart-id", r.id),
                        t.shadowRoot ? r.shadowParent = t : r.removeAttribute("id")
                    }
                    for (!1 !== t.hasTemplateBindings ? t.bindings = t.getBindings(e) : t.bindings = [],
                    t.$root.addClass("smart-container"); t.childNodes.length; )
                        o.appendChild(t.firstChild);
                    if (t.appendTemplate(e),
                    t.$.template) {
                        const e = document.createElement("div");
                        e.classList.add("smart-template-container"),
                        t.$.templateContainer = e,
                        t.$.template.parentNode.insertBefore(e, t.$.template),
                        t.refreshTemplate()
                    }
                }
                refreshTemplate() {
                    const t = this;
                    if (!t.$.templateContainer)
                        return;
                    t.templateDetached(t.$.templateContainer);
                    const e = t.$.template.content.cloneNode(!0);
                    t.templateBindings = t.getBindings(e),
                    t.templateProperties = [];
                    let r = document.createDocumentFragment();
                    const n = function(e, r, o) {
                        for (let a in e) {
                            const i = e[a]
                              , s = i.node.cloneNode();
                            r.appendChild(s);
                            let d = []
                              , l = !1;
                            if (i.data)
                                for (let e in i.data) {
                                    const n = i.data[e]
                                      , a = n.name;
                                    if (t.templateProperties[a] = !0,
                                    s.removeAttribute(f.Core.toDash(e)),
                                    "*items" === e)
                                        d = t[a],
                                        l = !0;
                                    else if (a.indexOf("item.") >= 0 && void 0 !== o)
                                        n.value = o[a.substring("item.".length)],
                                        s[e] = n.value;
                                    else if (a.indexOf("item") >= 0 && void 0 !== o)
                                        n.value = o,
                                        s[e] = n.value;
                                    else if ("*if" === e)
                                        if (a.indexOf("(") >= 0) {
                                            let e, n = a.substring(a.indexOf("("));
                                            const o = a.substring(0, a.indexOf("("));
                                            if (n = n.substring(1, n.length - 1),
                                            n = n.replace(/ /gi, ""),
                                            n = n.split(","),
                                            n.length > 0 && "" !== n[0]) {
                                                let r = [];
                                                for (let e = 0; e < n.length; e++)
                                                    r.push(t[n[e]]);
                                                e = t[o].apply(t, r)
                                            } else
                                                e = t[o]();
                                            !1 === e && r.removeChild(s)
                                        } else
                                            t[a] || r.removeChild(s);
                                    else
                                        t.updateBoundNode(s, i, t, a)
                                }
                            if (d.length > 0 || l) {
                                for (let t = 0; t < d.length; t++)
                                    i.children && n(i.children, s, d[t]);
                                if ("number" == typeof d)
                                    for (let t = 0; t < d; t++)
                                        i.children && n(i.children, s, t)
                            } else
                                i.children && n(i.children, s, o)
                        }
                    };
                    n(t.templateBindings.children, r),
                    t.$.templateContainer.innerHTML = "",
                    t.$.templateContainer.appendChild(r),
                    t.templateAttached(t.$.templateContainer)
                }
                templateAttached() {}
                templateDetached() {}
                appendTemplate(t) {
                    this.appendChild(t)
                }
                defineElementModules() {
                    const t = this
                      , e = t.constructor.prototype;
                    if ("BaseElement" === e.elementName) {
                        e.modules = t.constructor.modules;
                        const r = e.modules;
                        for (let e = 0; e < r.length; e += 1)
                            t.addModule(r[e])
                    } else {
                        const r = e.modules;
                        if (!r)
                            return;
                        for (let e = 0; e < r.length; e += 1) {
                            const n = r[e]
                              , o = n.prototype;
                            t.defineElementMethods(o.methodNames, o),
                            t.defineElementProperties(n.properties)
                        }
                    }
                }
                watch(t, e) {
                    const r = this;
                    r._watch = null !== t && null !== e ? {
                        properties: t,
                        propertyChangedCallback: e
                    } : null
                }
                unwatch() {
                    this._watch = null
                }
                set(t, e, r) {
                    const n = this
                      , o = n.context;
                    n.context = !0 === r ? document : n,
                    n[t] = e,
                    n.context = o
                }
                get(t) {
                    return this[t]
                }
                _setModuleState(t, e) {
                    const r = this
                      , n = "is" + t.substring(0, 1).toUpperCase() + t.substring(1)
                      , o = "on" + t.substring(0, 1).toUpperCase() + t.substring(1);
                    for (let a = 0; a < r.modulesList.length; a++) {
                        const i = r.modulesList[a];
                        i[n] = !0,
                        i[t] && i[t](e),
                        i[o] && i[o](e)
                    }
                }
                addModule(t, e) {
                    const r = this;
                    if (!t)
                        return;
                    const n = r.modules.slice(0)
                      , o = t.prototype
                      , a = Object.getPrototypeOf(t);
                    if (a.name && a.name !== t.name && r.addModule(a),
                    !t.moduleName && t.name && (t.moduleName = t.name),
                    -1 === n.findIndex(e=>t.moduleName === e.moduleName) && n.push(t),
                    r.defineModule(t),
                    r.defineElementMethods(o.methodNames, o),
                    r.defineElementProperties(t.properties),
                    r.constructor.prototype.modules = n,
                    e)
                        for (let e in Smart.Elements.tagNames) {
                            const n = Smart.Elements.tagNames[e];
                            let o = Object.getPrototypeOf(n)
                              , a = [];
                            for (; o !== HTMLElement; )
                                a.push(o.prototype),
                                o = Object.getPrototypeOf(o);
                            a.indexOf(r) >= 0 && n !== r && n.prototype.addModule(t)
                        }
                }
                defineModule(t) {
                    if (t.isDefined)
                        return;
                    t.prototype._initModule = function(t) {
                        this.ownerElement = t
                    }
                    ;
                    const e = t.properties || {}
                      , r = Object.keys(e)
                      , n = Object.getOwnPropertyNames(t.prototype);
                    t.prototype.methodNames = n;
                    for (let n = 0; n < r.length; n += 1) {
                        const o = r[n]
                          , a = e[o];
                        Object.defineProperty(t.prototype, o, {
                            configurable: !1,
                            enumerable: !0,
                            get() {
                                return this.ownerElement ? this.ownerElement[o] : a.value
                            },
                            set(t) {
                                this.ownerElement[o] = t
                            }
                        })
                    }
                    t.isDefined = !0
                }
                getStaticMember(t, r) {
                    const n = window[e][this.elementName]
                      , o = n[t];
                    r || (r = "");
                    let a = "array" === r ? [] : "string" === r ? "" : {}
                      , i = Object.getPrototypeOf(n)
                      , s = [];
                    for (; i[t]; )
                        s.push(i[t]),
                        i = Object.getPrototypeOf(i);
                    for (let t = s.length - 1; t >= 0; t--)
                        if ("array" === r)
                            for (let e = 0; e < s[t].length; e++)
                                -1 === a.indexOf(s[t][e]) && a.push(s[t][e]);
                        else
                            "string" === r ? -1 === a.indexOf(s[t]) && (a += s[t]) : a = f.Core.assign(a, s[t]);
                    if ("array" === r) {
                        for (let t = 0; t < o.length; t++)
                            -1 === a.indexOf(o[t]) && a.push(o[t]);
                        return a
                    }
                    return "string" === r ? (-1 === a.indexOf(o) && (a += o),
                    a) : f.Core.assign(a, o)
                }
                defineElementHierarchicalProperties(t, e) {
                    const r = this
                      , n = [];
                    !function(t) {
                        const r = Object.keys(t);
                        for (let o = 0; o < r.length; o++) {
                            const a = r[o];
                            if ("messages" === a)
                                continue;
                            const i = t[a]
                              , s = Object.keys(i)
                              , d = s.indexOf("value") >= 0 && s.indexOf("type") >= 0 && "object" == typeof i.value;
                            if ("propertyObject" === i.type || d) {
                                const t = function(r, o) {
                                    if (!r.value)
                                        return;
                                    const a = Object.keys(r.value);
                                    for (let i = 0; i < a.length; i++) {
                                        const s = a[i]
                                          , d = r.value[s]
                                          , l = o + "_" + s;
                                        if ("object" != typeof d || null === d)
                                            break;
                                        const m = Object.keys(d);
                                        if (!(m.indexOf("value") >= 0 && m.indexOf("type") >= 0))
                                            break;
                                        if ("array" !== r.type && (r.isHierarchicalProperty = !0),
                                        d.parentPropertyName = o,
                                        e) {
                                            const t = e._properties[l];
                                            if (r.value.hasOwnProperty(s)) {
                                                if (t.isDefined)
                                                    continue;
                                                delete r.value[s]
                                            }
                                            t.isDefined = !0,
                                            Object.defineProperty(r.value, s, {
                                                configurable: !1,
                                                enumerable: !0,
                                                get: ()=>e._properties[l].value,
                                                set(t) {
                                                    e.updateProperty(e, e._properties[l], t)
                                                }
                                            })
                                        }
                                        n[l] || (n[l] = d,
                                        n.length++),
                                        ("propertyObject" === d.type || "object" == typeof d.value && "array" !== d.type) && t(e ? e._properties[l] : d, l)
                                    }
                                };
                                t(i, a)
                            }
                        }
                    }(t),
                    n.length > 0 && !e && r.defineElementProperties(n)
                }
                defineElement() {
                    const t = this.constructor.prototype
                      , e = this.getStaticMember("properties")
                      , r = Object.getOwnPropertyNames(t);
                    t.extendedProperties = {},
                    t.boundProperties = {},
                    t.templateListeners = {},
                    this.defineElementModules(),
                    this.defineElementMethods(r, t),
                    this.defineElementProperties(e),
                    this.defineElementHierarchicalProperties(this.extendedProperties),
                    t._initElement = function() {
                        const e = this
                          , r = t.extendedProperties
                          , n = Object.keys(r)
                          , o = e.modules;
                        e.$ = f.Extend(e),
                        e.$document = g,
                        e.smartId = (Date.now().toString(36) + Math.random().toString(36).substr(2, 5)).toUpperCase(),
                        e.isCreated || (e.modulesList = [],
                        e._properties = [],
                        e._beforeCreatedProperties && (e._properties = e._beforeCreatedProperties,
                        delete e._beforeCreatedProperties),
                        e.detachedChildren = [],
                        e.propertyByAttributeName = []);
                        for (let t = 0; t < o.length; t += 1) {
                            let r = new (0,
                            o[t]);
                            r._initModule(e),
                            e.modulesList.push(r)
                        }
                        for (let t = 0; t < n.length; t += 1) {
                            const o = n[t]
                              , a = r[o];
                            let i = a.value;
                            if (e._properties[o]) {
                                if (void 0 !== e._properties[o].notify)
                                    continue;
                                delete e._properties[o]
                            }
                            if (C && "innerHTML" === o && delete e[o],
                            -1 === window.navigator.userAgent.indexOf("PhantomJS") && e.hasOwnProperty(o) && (i = e[o],
                            delete e[o]),
                            "array" === a.type && null != i && (i = i.slice(0)),
                            "object" === a.type && null != i && (i = Array.isArray(i) ? i.slice(0) : Object.assign({}, i)),
                            e._properties[o] = {
                                name: o,
                                notify: a.notify,
                                allowedValues: a.allowedValues,
                                type: a.type,
                                nullable: a.nullable,
                                reflectToAttribute: a.reflectToAttribute,
                                defaultReflectToAttribute: a.defaultReflectToAttribute,
                                defaultReflectToAttributeConditions: a.defaultReflectToAttributeConditions,
                                value: i,
                                readOnly: a.readOnly,
                                defaultValue: i,
                                attributeName: a.attributeName,
                                observer: a.observer,
                                inherit: a.inherit,
                                extend: a.extend,
                                validator: a.validator
                            },
                            e.propertyByAttributeName[a.attributeName] = e._properties[o],
                            !a.hasOwnProperty("type")) {
                                const t = e.localize("propertyUnknownType", {
                                    name: o
                                });
                                e.log(t)
                            }
                            if ("any" === a.type || "propertyObject" === a.type)
                                continue;
                            const s = f.Types.getType(i);
                            if (null != i && a.type !== s && !a.validator) {
                                if ("object" === a.type && "array" === s)
                                    continue;
                                if ("number" === s) {
                                    if (["integer", "int", "float"].findIndex(t=>t === a.type) >= 0)
                                        continue
                                }
                                const t = e.localize("propertyInvalidValueType", {
                                    name: o,
                                    actualType: s,
                                    type: a.type
                                });
                                e.log(t)
                            }
                        }
                        e.defineElementHierarchicalProperties(e._properties, e),
                        e.isCreated = !0
                    }
                    ,
                    t.registered()
                }
                defineElementMethods(t, e) {
                    const r = this.constructor.prototype
                      , n = function(t, e) {
                        const r = Array.prototype.slice.call(arguments, 2)
                          , n = function() {
                            if (!this.isReady && "localize" !== e && "localize" !== e && "cloneNode" !== e && "importStyle" !== e && "log" !== e && "parseAttributes" !== e) {
                                const t = this.localize("elementNotInDOM");
                                this.log(t)
                            }
                            let n = this;
                            for (let t = 0; t < this.modulesList.length; t++) {
                                let r = this.modulesList[t];
                                if (e in r) {
                                    n = r;
                                    break
                                }
                            }
                            const o = this.context
                              , a = r.concat(Array.prototype.slice.call(arguments));
                            let i = null;
                            const s = function(t, e) {
                                return t === e || ("number" === t && ("int" === e || "integer" === e || "float" === e) || ("bool" === t && "boolean" === e || "boolean" === t && "bool" === e || ("object" === t && "any" === e || void 0)))
                            };
                            if (this.methods) {
                                const t = this.methods[e];
                                if (t) {
                                    const r = t.split(":");
                                    i = r[r.length - 1].trim();
                                    const n = []
                                      , o = t.substring(1 + t.indexOf("("), t.lastIndexOf(")")).split(",");
                                    let d = "";
                                    for (let t = 0; t < o.length; t++) {
                                        const e = o[t];
                                        d += e,
                                        e.indexOf(":") >= 0 ? (n.push(d),
                                        d = "") : d += ","
                                    }
                                    let l = n.length;
                                    for (let t = 0; t < n.length; t++) {
                                        const r = n[t].trim().split(":")
                                          , o = r[0].split("=")[0].trim().indexOf("?") >= 0
                                          , i = r[1].indexOf("?") >= 0
                                          , d = r[1].replace(/\?/gi, "").trim()
                                          , m = d.split("|");
                                        let c = r[0].split("=")[1];
                                        const u = f.Types.getType(a[t]);
                                        if (void 0 === a[t] && c) {
                                            switch (c = c.trim(),
                                            d[0]) {
                                            case "date":
                                                {
                                                    let t = c.substring(c.indexOf("(") + 1, c.lastIndexOf(")"));
                                                    t = t.length > 0 ? t.split(",").map(t=>parseInt(t)) : [],
                                                    c = 0 === t.length ? new Date : new Date(t[0],t[1],t[2]);
                                                    break
                                                }
                                            case "bool":
                                            case "boolean":
                                                c = "true" === c || "1" === c;
                                                break;
                                            case "int":
                                            case "integer":
                                                c = parseInt(c);
                                                break;
                                            case "float":
                                            case "number":
                                                c = parseFloat(c);
                                                break;
                                            case "any":
                                            case "object":
                                                c = c.indexOf("{") >= 0 ? JSON.parse(c) : c
                                            }
                                            a.push(c)
                                        } else
                                            o && l--;
                                        if (d !== u && u) {
                                            let r = !0;
                                            for (let t = 0; t < m.length; t++)
                                                if (s(u, m[t])) {
                                                    r = !1;
                                                    break
                                                }
                                            if (r && (null !== a[t] || !i)) {
                                                const r = this.localize("methodInvalidValueType", {
                                                    name: e,
                                                    actualType: u,
                                                    type: d,
                                                    argumentIndex: t
                                                });
                                                this.log(r)
                                            }
                                        }
                                        if (a.length < l) {
                                            const t = this.localize("methodInvalidArgumentsCount", {
                                                name: e,
                                                actualArgumentsCount: a.length,
                                                argumentsCount: l
                                            });
                                            this.log(t)
                                        }
                                    }
                                }
                            }
                            this.context = this;
                            const d = t.apply(n, a);
                            if (i) {
                                const t = void 0 === f.Types.getType(d) ? "void" : f.Types.getType(d);
                                if (!s(t, i)) {
                                    const r = this.localize("methodInvalidReturnType", {
                                        name: e,
                                        actualType: t,
                                        type: i
                                    });
                                    this.log(r)
                                }
                            }
                            return this.context = o,
                            d
                        };
                        return n
                    }
                      , o = ["constructor", "ready", "created", "render", "attached", "detached", "appendChild", "insertBefore", "removeChild", "connect", "disconnectedCallback", "connectedCallback", "attributeChangedCallback", "propertyChangedHandler", "enableShadowDOM", "isInShadowDOM", "addPropertyBindings"];
                    for (let a in t) {
                        let i = t[a];
                        i && i.startsWith && i.startsWith("_") || void 0 !== o.find(t=>t === i) || (r.extendedProperties[i] || f.Types.isFunction(e[i]) && (r[i] = n(e[i], i)))
                    }
                }
                defineElementProperties(t) {
                    if (!t)
                        return;
                    const e = this.constructor.prototype
                      , r = Object.keys(t)
                      , n = this.getStaticMember("properties");
                    Object.assign(e.extendedProperties, t),
                    this.updateProperty = function(t, e, r) {
                        const n = t;
                        if (!e || e.readOnly)
                            return;
                        if (e.allowedValues) {
                            let t = !1;
                            for (let n = 0; n < e.allowedValues.length; n++)
                                if (e.allowedValues[n] === r) {
                                    t = !0;
                                    break
                                }
                            if (!t) {
                                const t = JSON.stringify(e.allowedValues).replace(/\[|\]/gi, "").replace(",", ", ").replace(/"/gi, "'")
                                  , o = "'" + r + "'"
                                  , a = n.localize("propertyInvalidValue", {
                                    name: e.name,
                                    actualValue: o,
                                    value: t
                                });
                                return void n.log(a)
                            }
                        }
                        const o = e.name
                          , a = n._properties[o].value;
                        if (e.validator && n[e.validator]) {
                            const t = n.context;
                            n.context = n;
                            const o = n[e.validator](a, r);
                            void 0 !== o && (r = o),
                            n.context = t
                        }
                        if (a !== r) {
                            if (n.propertyChanging) {
                                const t = n.propertyChanging(o, a, r);
                                if (!1 === t || null === t)
                                    return
                            }
                            if (!e.hasOwnProperty("type")) {
                                const t = n.localize("propertyUnknownType", {
                                    name: o
                                });
                                n.log(t)
                            }
                            if ("array" !== e.type || JSON.stringify(a) !== JSON.stringify(r)) {
                                if (null != r && "any" !== e.type && "propertyObject" !== e.type && e.type !== f.Types.getType(r) && !e.validator || null === r && !e.nullable) {
                                    let t = !0;
                                    if ("object" === e.type && "array" === f.Types.getType(r) && (t = !1),
                                    "number" === f.Types.getType(r)) {
                                        ["integer", "int", "float"].findIndex(t=>t === e.type) >= 0 && (t = !1)
                                    }
                                    if (t) {
                                        const t = n.localize("propertyInvalidValueType", {
                                            name: o,
                                            actualType: f.Types.getType(r),
                                            type: e.type
                                        });
                                        return void n.error(t)
                                    }
                                }
                                if (e.isUpdating = !0,
                                e.isHierarchicalProperty) {
                                    const t = function(e, r) {
                                        if (!e)
                                            return;
                                        const o = Object.keys(e);
                                        for (let a = 0; a < o.length; a++) {
                                            const i = o[a]
                                              , s = e[i];
                                            "object" == typeof s && !f.Types.isArray(s) && s && s.constructor !== Date ? t(s, r + "_" + i) : n[r + "_" + i] = s
                                        }
                                    };
                                    t(r, o)
                                } else
                                    n._properties[o].value = r;
                                if (!e.isUpdatingFromAttribute && e.reflectToAttribute && n.$.setAttributeValue(e.attributeName, r, e.type),
                                n.isReady && (!n.ownerElement || n.ownerElement && n.ownerElement.isReady)) {
                                    if ("wait" === o && (r || !a || n.isCompleted || (n.classList.remove("smart-visibility-hidden"),
                                    n.ownerElement && n.ownerElement.updateBoundMappedNodes(),
                                    n.updateBoundMappedNodes(),
                                    n.complete())),
                                    "renderMode" === o)
                                        return;
                                    if (n.context !== n && !n.wait) {
                                        const t = n.context;
                                        n.context = n,
                                        n.propertyChangedHandler(o, a, r),
                                        n.context = t,
                                        e.observer && n[e.observer] && (n.context = n,
                                        n[e.observer](a, r),
                                        n.context = document),
                                        n._watch && n._watch.properties.indexOf(o) >= 0 && n._watch.propertyChangedCallback(o, a, r)
                                    }
                                    const t = e.notify || n.boundProperties[o];
                                    t && (n.$.fireEvent(e.attributeName + "-changed", {
                                        context: n.context,
                                        oldValue: a,
                                        value: n[o]
                                    }),
                                    n.boundProperties[o] && n.updateBoundNodes(o)),
                                    t && n.templateProperties && n.templateProperties[o] && n.refreshTemplate(),
                                    n.dataContextProperties && ("dataContext" === o ? n.applyDataContext() : n.dataContextProperties[o] && n.updateDataContextProperty(o))
                                }
                                e.isUpdating = !1
                            }
                        }
                    }
                    ;
                    for (let o = 0; o < r.length; o += 1) {
                        const a = r[o]
                          , i = t[a]
                          , s = f.Core.toDash(a)
                          , d = i.type || "any"
                          , l = d.indexOf("?") >= 0 || "any" === d;
                        l && "any" !== d && (i.type = d.substring(0, d.length - 1)),
                        i.nullable = l,
                        i.attributeName = s.toLowerCase(),
                        i.name = a,
                        i.reflectToAttribute = void 0 === i.reflectToAttribute || i.reflectToAttribute,
                        i.inherit && n[a] && (i.value = n[a].value),
                        i.extend && n[a] && f.Core.assign(i.value, n[a].value),
                        e.hasOwnProperty(a) || Object.defineProperty(e, a, {
                            configurable: !1,
                            enumerable: !0,
                            get() {
                                if (this._properties[a])
                                    return this._properties[a].value
                            },
                            set(t) {
                                this.updateProperty(this, this._properties[a], t)
                            }
                        })
                    }
                }
            }
            let x = []
              , k = []
              , _ = []
              , C = !1;
            const E = navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);
            if (E) {
                parseInt(E[2], 10) <= 50 && (C = !0)
            }
            class z {
                static register(t, r) {
                    const n = r.prototype;
                    let o = i.toCamelCase(t).replace(/[a-z]+/, "")
                      , a = r.version || window[e].Version;
                    if (window.customElements.get(t) && window.customElements.get(t).version === a)
                        return;
                    let s = t;
                    for (a = a.split("."); window.customElements.get(t); )
                        t = s + "-" + a.join("."),
                        a[2] = parseInt(a[2]) + 1;
                    if (!x[t]) {
                        if (t.startsWith(e.toLowerCase()))
                            x[t] = window[e][o] = window[e.toLowerCase() + o] = r;
                        else {
                            let n = t.split("-")[0];
                            n = n.substring(0, 1).toUpperCase() + n.substring(1),
                            window[e][n] || (window[e][n] = {}),
                            x[t] = window[e][n][o] = window[n.toLowerCase() + o] = r,
                            window[e][o] && (o = i.toCamelCase(t)),
                            window[e][o] = r
                        }
                        n.elementName = o,
                        n.defineElement(),
                        k[t] && k[t](n),
                        window.customElements.define(t, r)
                    }
                }
                static registerElements() {
                    const t = this;
                    if (t.toRegister) {
                        t.isRegistering = !0;
                        for (let e = 0; e < t.toRegister.length; e++) {
                            const r = t.toRegister[e];
                            t.register(r.tagName, r.element)
                        }
                        t.isRegistering = !1
                    }
                }
                static get(t) {
                    if (x[t])
                        return x[t]
                }
                static whenRegistered(t, e) {
                    if (!t)
                        throw new Error("Syntax Error: Invalid tag name");
                    const r = k[t]
                      , n = this.get(t)
                      , o = n ? n.modules.length : 3;
                    try {
                        r || n ? !r && n ? (e(n.prototype),
                        k[t] = void 0) : r && !n ? k[t] = function(t) {
                            r(t),
                            e(t)
                        }
                        : r && n && (n.proto && (r(n.proto),
                        e(n.proto)),
                        k[t] = void 0) : k[t] = function(t) {
                            try {
                                e(t)
                            } catch (t) {
                                const e = t instanceof Error ? t.message : t.toString();
                                console.log(e)
                            }
                        }
                    } catch (t) {
                        const e = t instanceof Error ? t.message : t.toString();
                        console.log(e)
                    }
                    if (n && o !== n.prototype.modules.length) {
                        const e = document.querySelectorAll(t);
                        for (let t = 0; t < e.length; t++) {
                            const r = e[t];
                            r.isCreated && r._initElement()
                        }
                    }
                }
            }
            z.lazyRegister = !1,
            z.tagNames = [];
            class A {
                constructor() {
                    const t = this;
                    t.name = "observableArray",
                    t.observables = arguments.length < 3 ? null : arguments[2];
                    const e = new Proxy(t,{
                        deleteProperty: function(t, e) {
                            return delete t[e],
                            !0
                        },
                        apply: function(t, e, r) {
                            return t.apply(e, r)
                        },
                        get: function(e, r) {
                            return e[r] || isNaN(parseInt(r)) ? e[r] : t.getItem(parseInt(r))
                        },
                        set: function(e, r, n) {
                            return e[r] || isNaN(parseInt(r)) ? (e[r] = n,
                            !0) : (t.setItem(parseInt(r), n),
                            !0)
                        }
                    });
                    if (t._addArgs = {
                        eventName: "change",
                        object: e,
                        action: "add",
                        index: null,
                        removed: new Array,
                        addedCount: 1
                    },
                    t._removeArgs = {
                        eventName: "change",
                        object: e,
                        action: "remove",
                        index: null,
                        removed: null,
                        addedCount: 0
                    },
                    arguments.length >= 1 && Array.isArray(arguments[0])) {
                        t._array = [];
                        const e = arguments[0];
                        for (let r = 0, n = e.length; r < n; r++) {
                            const n = t._getItem(t._array.length, e[r]);
                            t._array.push(n)
                        }
                    } else
                        t._array = Array.apply(null, arguments);
                    return 2 === arguments.length && (t.notifyFn = arguments[1]),
                    e
                }
                get canNotify() {
                    const t = this;
                    return void 0 === t._canNotify && (t._canNotify = !0),
                    t._canNotify
                }
                set canNotify(t) {
                    this._canNotify = t
                }
                _notify(t) {
                    const e = this;
                    e.canNotify && e.notifyFn && e.notifyFn(t)
                }
                notify(t) {
                    t && (this.notifyFn = t)
                }
                toArray() {
                    return this._array
                }
                _getItem(t, e) {
                    const r = this;
                    return "string" == typeof e || "number" == typeof e || void 0 === e ? e : new Proxy(e,{
                        deleteProperty: function(t, e) {
                            return delete t[e],
                            !0
                        },
                        set: function(e, n, o) {
                            const a = e[n];
                            return e[n] = o,
                            !r._canNotify || !1 === e.canNotify || (r.observables && !r.observables[n] || r._notify({
                                eventName: "change",
                                object: r,
                                target: e,
                                action: "update",
                                index: t,
                                path: t + "." + n,
                                oldValue: a,
                                newValue: o,
                                propertyName: n
                            }),
                            !0)
                        }
                    })
                }
                getItem(t) {
                    return this._array[t]
                }
                setItem(t, e) {
                    const r = this._array[t];
                    this._array[t] = this._getItem(t, e),
                    this._notify({
                        eventName: "change",
                        object: this._array,
                        action: "update",
                        index: t,
                        removed: [r],
                        addedCount: 1
                    })
                }
                get length() {
                    return this._array.length
                }
                set length(t) {
                    const e = this;
                    n.isNumber(t) && e._array && e._array.length !== t && e.splice(t, e._array.length - t)
                }
                toString() {
                    return this._array.toString()
                }
                toLocaleString() {
                    return this._array.toLocaleString()
                }
                concat() {
                    this._addArgs.index = this._array.length;
                    const t = this._array.concat.apply(this._array, arguments);
                    return new Smart.ObservableArray(t)
                }
                join(t) {
                    return this._array.join(t)
                }
                pop() {
                    this._removeArgs.index = this._array.length - 1,
                    delete this[this._array.length - 1];
                    const t = this._array.pop();
                    return this._removeArgs.removed = [t],
                    this._notify(this._removeArgs),
                    this._notifyLengthChange(),
                    t
                }
                push() {
                    const t = this;
                    if (t._addArgs.index = t._array.length,
                    1 === arguments.length && Array.isArray(arguments[0])) {
                        const e = arguments[0];
                        for (let r = 0, n = e.length; r < n; r++) {
                            const n = t._getItem(t._array.length, e[r]);
                            t._array.push(n)
                        }
                    } else {
                        const e = t._getItem(t._addArgs.index, arguments[0]);
                        t._array.push.apply(t._array, [e])
                    }
                    return t._addArgs.addedCount = t._array.length - t._addArgs.index,
                    t._notify(t._addArgs),
                    t._notifyLengthChange(),
                    t._array.length
                }
                _notifyLengthChange() {
                    if (!this.canNotify)
                        return;
                    const t = this._createPropertyChangeData("length", this._array.length);
                    this._notify(t)
                }
                _createPropertyChangeData(t, e, r) {
                    return {
                        eventName: "change",
                        object: this,
                        action: t,
                        value: e,
                        oldValue: r
                    }
                }
                reverse() {
                    return this._array.reverse()
                }
                shift() {
                    const t = this._array.shift();
                    return this._removeArgs.index = 0,
                    this._removeArgs.removed = [t],
                    this._notify(this._removeArgs),
                    this._notifyLengthChange(),
                    t
                }
                slice(t, e) {
                    return this._array.slice(t, e)
                }
                sort(t) {
                    return this._array.sort(t)
                }
                splice(t, e, r) {
                    const n = this
                      , o = n._array.length;
                    let a;
                    if (r && r.length)
                        for (let o = 0; o < r.length; o++)
                            a = n._array.splice(t + o, e, r[o]);
                    else
                        a = n._array.splice.apply(n._array, arguments);
                    if (r) {
                        let e = n.canNotify;
                        if (n.canNotify = !1,
                        r.length)
                            for (let e = 0; e < r.length; e++)
                                n.setItem(t + e, r[e]);
                        else
                            n.setItem(t, r);
                        n.canNotify = e,
                        n._notify({
                            eventName: "change",
                            object: this,
                            action: "add",
                            index: t,
                            added: a,
                            addedCount: n._array.length > o ? n._array.length - o : 0
                        })
                    } else
                        n._notify({
                            eventName: "change",
                            object: this,
                            action: "remove",
                            index: t,
                            removed: a,
                            addedCount: n._array.length > o ? n._array.length - o : 0
                        });
                    return n._array.length !== o && n._notifyLengthChange(),
                    a
                }
                unshift() {
                    const t = this._array.length
                      , e = this._array.unshift.apply(this._array, arguments);
                    return this._addArgs.index = 0,
                    this._addArgs.addedCount = e - t,
                    this._notify(this._addArgs),
                    this._notifyLengthChange(),
                    e
                }
                indexOf(t, e) {
                    const r = this;
                    for (let n = e || 0, o = r._array.length; n < o; n++)
                        if (r._array[n] === t)
                            return n;
                    return -1
                }
                lastIndexOf(t, e) {
                    const r = this;
                    for (let n = e || r._array.length - 1; n >= 0; n--)
                        if (r._array[n] === t)
                            return n;
                    return -1
                }
                find(t, e) {
                    return this._array.find(t, e)
                }
                findIndex(t, e) {
                    return this._array.findIndex(t, e)
                }
                every(t, e) {
                    return this._array.every(t, e)
                }
                some(t, e) {
                    return this._array.some(t, e)
                }
                forEach(t, e) {
                    this._array.forEach(t, e)
                }
                map(t, e) {
                    return this._array.map(t, e)
                }
                filter(t, e) {
                    return this._array.filter(t, e)
                }
                reduce(t, e) {
                    return void 0 !== e ? this._array.reduce(t, e) : this._array.reduce(t)
                }
                reduceRight(t, e) {
                    return void 0 !== e ? this._array.reduceRight(t, e) : this._array.reduceRight(t)
                }
                move(t, e) {
                    this.splice(e, 0, this.splice(t, 1)[0])
                }
            }
            let S = {};
            window[e] && (S = window[e]),
            window[e] = function(t, r) {
                let n = t;
                if (t) {
                    if (t.indexOf("#") >= 0 || t.indexOf(".") >= 0)
                        return m[t] ? m[t] : r ? (m[t] = new r,
                        function(t, e) {
                            const r = e.properties;
                            e._properties = [];
                            const n = function(r, o) {
                                const a = Object.keys(r);
                                for (let i = 0; i < a.length; i++) {
                                    const s = a[i]
                                      , d = r[s];
                                    e._properties[o + s] = d,
                                    Array.isArray(d) ? e._properties[o + s] = new A(d,(function(e) {
                                        const r = s + "." + e.path
                                          , n = e.newValue
                                          , o = document.querySelector(t);
                                        if (o) {
                                            const t = r.split(".");
                                            let e = o;
                                            for (let r = 0; r < t.length; r++) {
                                                e = e[t[r]]
                                            }
                                            e = n
                                        }
                                    }
                                    )) : (Object.defineProperty(r, s, {
                                        configurable: !1,
                                        enumerable: !0,
                                        get: ()=>e._properties[o + s],
                                        set(t) {
                                            e._properties[o + s] = t
                                        }
                                    }),
                                    d && "DataAdapter" === d.constructor.name || d && "object" == typeof d && Smart.DataAdapter && d instanceof Smart.DataAdapter || "object" == typeof d && d && Object.keys(d).length > 0 && n(d, o + s + "."))
                                }
                            };
                            n(r, ""),
                            Object.defineProperty(e, "properties", {
                                configurable: !1,
                                enumerable: !0,
                                get: ()=>r
                            });
                            const o = document.querySelector(t);
                            if (o && o.isReady)
                                for (let t in r)
                                    o[t] = r[t];
                            else if (o) {
                                o.props = {};
                                for (let t in r)
                                    o.props[t] = r[t]
                            }
                        }(t, m[t]),
                        m[t]) : void 0;
                    if (r) {
                        if (z.tagNames[t] = r,
                        z.lazyRegister) {
                            z.toRegister || (z.toRegister = []);
                            const t = i.toCamelCase(n).replace(/[a-z]+/, "");
                            return window[e][t] = r,
                            void z.toRegister.push({
                                tagName: n,
                                element: r
                            })
                        }
                        z.register(n, r)
                    }
                }
            }
            ,
            window.addEventListener("load", (function() {
                const t = window[e].Elements.tagNames;
                let r = [];
                for (let n in t) {
                    const o = t[n];
                    let a = document.querySelectorAll("[" + n + "]");
                    for (let t = 0; t < a.length; t++) {
                        const e = a[t];
                        e instanceof HTMLDivElement && (e.__proto__ = o.prototype,
                        e.created(),
                        e.connectedCallback()),
                        e.classList.add("smart-element-ready")
                    }
                    let i = o.name;
                    "Item" === i && (i = "ListItem"),
                    a = document.querySelectorAll('[is="' + e.toLocaleLowerCase() + i + '"]');
                    for (let t = 0; t < a.length; t++)
                        r.push(a[t])
                }
                if (r.length > 0) {
                    const t = t=>{
                        let e = []
                          , r = t.parentNode;
                        for (; r && 9 !== r.nodeType; )
                            r instanceof HTMLElement == !0 && e.push(r),
                            r = r.parentNode;
                        return e
                    }
                    ;
                    r.sort((function(e, r) {
                        let n = t(e).length
                          , o = t(r).length;
                        return n < o ? 1 : n > o ? -1 : 0
                    }
                    ));
                    for (let t = 0; t < r.length; t++) {
                        const e = r[t]
                          , n = e.getAttribute("is");
                        let o;
                        o = "smartItem" === n ? new window.smartListItem(e) : new window[n](e),
                        o.removeAttribute("is")
                    }
                }
            }
            ));
            const T = function() {
                if ("complete" === document.readyState && "manual" !== window[e].RenderMode) {
                    _.sort((function(t, e) {
                        let r = t.element.parents.length
                          , n = e.element.parents.length;
                        return r < n ? -1 : r > n ? 1 : 0
                    }
                    ));
                    for (let t = 0; t < _.length; t++)
                        window[e].RenderMode = "",
                        _[t].element.isLoading = !1,
                        _[t].callback(),
                        window[e].RenderMode = "";
                    _ = [],
                    document.removeEventListener("readystatechange", T)
                }
            };
            Object.assign(window[e], {
                Elements: z,
                Modules: [],
                BaseElement: class extends y {
                    static get observedAttributes() {
                        let t = this
                          , e = ["external-style"];
                        for (let r in t.prototype.extendedProperties) {
                            const n = t.prototype.extendedProperties[r];
                            e.push(n.attributeName)
                        }
                        return e
                    }
                    static get styleUrls() {
                        return []
                    }
                    static get styles() {
                        return ""
                    }
                    get styleUrl() {
                        return this._styleUrl
                    }
                    set styleUrl(t) {
                        this._styleUrl = t
                    }
                    get isInShadowDOM() {
                        const t = this.getRootNode();
                        return !this.hasAttribute("smart-blazor") && (t !== document && t !== this)
                    }
                    getShadowRootOrBody() {
                        const t = this;
                        return t.isInShadowDOM && t.getRootNode().host ? t.getRootNode().host.shadowRoot : document.body
                    }
                    get enableShadowDOM() {
                        return window[e].EnableShadowDOM
                    }
                    importStyle(t, e) {
                        this._importStyle(t, e)
                    }
                    _importStyle(t, e) {
                        const r = this;
                        if (!r.shadowRoot || !t)
                            return;
                        const n = t=>{
                            const n = r.shadowRoot.children;
                            for (let r = 0; r < n.length; r++) {
                                const o = n[r];
                                if (o instanceof HTMLLinkElement && o.href === t)
                                    return e && e(),
                                    null
                            }
                            const o = document.createElement("link");
                            return o.rel = "stylesheet",
                            o.type = "text/css",
                            o.href = t,
                            o.onload = e,
                            o
                        }
                          , o = (()=>{
                            const t = r.shadowRoot.children;
                            let e = null;
                            for (let r = 0; r < t.length; r++) {
                                const n = t[r];
                                n instanceof HTMLLinkElement && (e = n)
                            }
                            return e
                        }
                        )()
                          , a = (t,e)=>{
                            e.parentNode.insertBefore(t, e.nextSibling)
                        }
                        ;
                        if (Array.isArray(t)) {
                            const e = document.createDocumentFragment();
                            for (let r = 0; r < t.length; r++) {
                                const o = n(t[r]);
                                o && e.appendChild(o)
                            }
                            o ? a(e, o) : r.shadowRoot.insertBefore(e, r.shadowRoot.firstChild)
                        } else {
                            const e = n(t);
                            if (!e)
                                return;
                            o ? a(e, o) : r.shadowRoot.insertBefore(e, r.shadowRoot.firstChild)
                        }
                    }
                    attributeChanged(t, e, r) {
                        "style-url" === t && (this.styleUrl = r)
                    }
                    attributeChangedCallback(t, e, r) {
                        this.isReady && super.attributeChangedCallback(t, e, r)
                    }
                    constructor(t, e) {
                        super();
                        const r = this;
                        if (t) {
                            e && (r._initProperties = e);
                            const n = t=>{
                                if ("string" == typeof t ? document.querySelector(t) : t) {
                                    const n = "string" == typeof t ? document.querySelector(t) : t;
                                    if (n instanceof HTMLDivElement) {
                                        const o = document.createElement(r.tagName);
                                        for (let t of n.attributes)
                                            o.setAttribute(t.name, n.getAttribute(t.name));
                                        for (; n.childNodes.length; )
                                            o.appendChild(n.firstChild);
                                        return "string" == typeof t && (o.id = t.substring(1)),
                                        o._initProperties = e,
                                        n.parentNode && n.parentNode.replaceChild(o, n),
                                        o
                                    }
                                    if (e) {
                                        const t = n.context;
                                        if (n._initProperties = e,
                                        n.isReady) {
                                            n.context = n;
                                            const r = {}
                                              , o = {};
                                            for (let t in e)
                                                r[t] = n[t],
                                                o[t] = e[t];
                                            Object.getOwnPropertyNames(e).length > 0 && (n.initProperties(),
                                            n.propertyChangedHandler(e, r, o)),
                                            n.context = t
                                        }
                                    }
                                    return n
                                }
                            }
                            ;
                            if ("string" == typeof t) {
                                const e = document.querySelectorAll(t)
                                  , r = [];
                                if (e.length > 1) {
                                    for (let t = 0; t < e.length; t++) {
                                        const o = n(e[t]);
                                        r.push(o)
                                    }
                                    return r
                                }
                            } else if (t && t.length > 0) {
                                const e = t;
                                if (e.length > 1) {
                                    for (let t = 0; t < e.length; t++) {
                                        const r = n(e[t]);
                                        x.push(r)
                                    }
                                    return x
                                }
                            }
                            return n(t)
                        }
                        r._styleUrl = "",
                        r.isUtilityElement || r.created()
                    }
                    _getRootShadowParent() {
                        let t = this.shadowParent;
                        for (; t; ) {
                            if (!t.shadowParent)
                                return t;
                            t = t.shadowParent
                        }
                        return t || this.shadowParent
                    }
                    _getStyleUrl(t) {
                        let r = f.Core.getScriptLocation() + window[e].StyleBaseUrl + t;
                        return this.shadowParent && (r = r.replace("scoped/", "")),
                        r
                    }
                    _getStyleUrls() {
                        const t = this;
                        t.nodeName.startsWith(e);
                        const r = t.getStaticMember("styleUrls", "array")
                          , n = [];
                        for (let e = 0; e < r.length; e++) {
                            const o = r[e]
                              , a = t._getStyleUrl(o);
                            n.push(a)
                        }
                        return n
                    }
                    _setupShadowRoot() {
                        const t = this;
                        t.classList.add("smart-element-init");
                        const r = r=>{
                            r.$.root && (r.$.root.classList.add(e.toLowerCase() + "-element"),
                            r.$.root.classList.add(t.nodeName.toLowerCase())),
                            r.setup(),
                            r.classList.remove("smart-element-init")
                        }
                        ;
                        if (document.adoptedStyleSheets)
                            if (window[e].AdoptedStyleSheets)
                                window[e].AdoptedStyleSheetsLoaded ? (t.shadowRoot.adoptedStyleSheets = window[e].AdoptedStyleSheets,
                                r(t)) : (t.shadowRoot.adoptedStyleSheets = window[e].AdoptedStyleSheets,
                                window[e].AdoptedStyleSheetsLoadedQueue || (window[e].AdoptedStyleSheetsLoadedQueue = []),
                                window[e].AdoptedStyleSheetsLoadedQueue.push(t));
                            else {
                                const n = new CSSStyleSheet;
                                let o = f.Core.getScriptLocation() + "/styles/smart.default.css";
                                n.replace('@import url("' + o + '")').then(()=>{
                                    if (r(t),
                                    window[e].AdoptedStyleSheetsLoaded = !0,
                                    window[e].AdoptedStyleSheetsLoadedQueue) {
                                        const t = window[e].AdoptedStyleSheetsLoadedQueue;
                                        for (let e = 0; e < t.length; e++) {
                                            const n = t[e];
                                            r(n)
                                        }
                                        delete window[e].AdoptedStyleSheetsLoadedQueue
                                    }
                                }
                                ).catch(t=>{
                                    console.error("Failed to load:", t)
                                }
                                ),
                                window[e].AdoptedStyleSheets = [n],
                                document.adoptedStyleSheets = [n],
                                t.shadowRoot.adoptedStyleSheets = window[e].AdoptedStyleSheets
                            }
                    }
                    connect() {
                        const t = this;
                        window[e].EnableShadowDOM && !t.shadowRoot && !0 !== t.isInShadowDOM && (t.attachShadow({
                            mode: "open"
                        }),
                        t.shadowRoot && t.$.root && (t.shadowRoot.appendChild(t.$.root),
                        t.$.root.classList.add(t.nodeName.toLowerCase()))),
                        t.shadowRoot || t.shadowParent ? t.shadowRoot ? t._setupShadowRoot() : (t.shadowParent && window[e].EnableShadowDOM,
                        t.setup()) : t.setup()
                    }
                    connectedCallback() {
                        const t = this;
                        if (t.isLoading || t.isUtilityElement)
                            return;
                        t.classList.add("smart-element-init");
                        const r = function() {
                            t.classList.remove("smart-element-init")
                        };
                        if ("complete" === document.readyState && (void 0 === window[e].isAngular && (window[e].isAngular = null !== document.body.querySelector("[ng-version]")),
                        window[e].isAngular))
                            for (let r = 0; r < t.parents.length && !t.parents[r].nodeName.toLowerCase().startsWith(e.toLowerCase() + "-"); r++)
                                if (t.parents[r].hasAttribute("ng-version") && !t.classList.contains("smart-angular")) {
                                    window[e].RenderMode = "manual";
                                    break
                                }
                        if ("complete" === document.readyState && "manual" !== window[e].RenderMode) {
                            const e = t.parents;
                            e.length && "HTML" === e[e.length - 1].nodeName || t.getRootNode().host ? (t.checkIsInDomTimer && clearInterval(t.checkIsInDomTimer),
                            r(),
                            t.connect()) : (t.checkIsInDomTimer && clearInterval(t.checkIsInDomTimer),
                            e.length > 0 && (t.checkIsInDomTimer = setInterval(()=>{
                                const e = t.parents;
                                0 === e.length && clearInterval(t.checkIsInDomTimer),
                                e.length > 0 && "HTML" === e[e.length - 1].nodeName && (clearInterval(t.checkIsInDomTimer),
                                r(),
                                t.connect())
                            }
                            , 100)))
                        } else
                            t.isLoading = !0,
                            _.push({
                                element: this,
                                callback: function() {
                                    this.isReady || (r(),
                                    this.connect())
                                }
                                .bind(t)
                            })
                    }
                    disconnectedCallback() {
                        const t = this;
                        t.isAttached ? (t.shadowParent = null,
                        t.detached()) : t._resetShadowParent()
                    }
                    adoptedCallback() {
                        this.setup()
                    }
                    appendTemplate(t) {
                        const e = this;
                        e.shadowRoot ? e.shadowRoot.appendChild(t) : e.appendChild(t)
                    }
                    _resetShadowParent() {
                        const t = this;
                        if (!window[e].EnableShadowDOM || null === t.shadowParent)
                            return;
                        const r = [];
                        let n = t.parentNode;
                        for (; n && 9 !== n.nodeType; ) {
                            if (n instanceof HTMLElement == !0)
                                r.push(n);
                            else if (11 === n.nodeType && n.host) {
                                n = n.host;
                                continue
                            }
                            n = n.parentNode
                        }
                        for (let e = 0; e < r.length; e++)
                            if (r[e] === t.shadowParent)
                                return;
                        r.length > 0 && "HTML" === r[r.length - 1].nodeName && (t.shadowParent = null)
                    }
                }
                ,
                Utilities: f,
                Import: function(t, e) {
                    let r = 0;
                    const n = function(t, e) {
                        return new Promise(r=>{
                            const n = document.createElement("script");
                            n.src = t,
                            n.onload = r;
                            for (let t = 0; t < document.head.children.length; t++) {
                                const n = document.head.children[t];
                                if (n.src && n.src.toString().indexOf(e) >= 0)
                                    return void r()
                            }
                            document.head.appendChild(n)
                        }
                        )
                    };
                    return new Promise(o=>{
                        const a = f.Core.getScriptLocation()
                          , i = function(e) {
                            if (!t[e])
                                return;
                            const s = a + "/" + t[e];
                            n(s, t[e]).then((function() {
                                r++,
                                r === t.length && o(),
                                i(e + 1)
                            }
                            ))
                        };
                        if (e)
                            for (let e = 0; e < t.length; e++) {
                                const i = a + "/" + t[e];
                                n(i, t[e]).then((function() {
                                    r++,
                                    r === t.length && o()
                                }
                                ))
                            }
                        else
                            i(0)
                    }
                    )
                },
                ObservableArray: A,
                Observable: class {
                    constructor(t, e) {
                        const r = this;
                        this.name = "observable",
                        t && Object.assign(r, t);
                        var n;
                        return n = t,
                        Object.getOwnPropertyNames(Object.getPrototypeOf(n)).forEach(t=>"constructor" === t || !!t.startsWith("_") || void (r[t] = n[t])),
                        new Proxy(r,{
                            deleteProperty: function(t, e) {
                                return delete t[e],
                                !0
                            },
                            get: function(t, e) {
                                return t[e]
                            },
                            set: function(t, n, o) {
                                const a = t[n];
                                return a === o || (t[n] = o,
                                !("notifyFn" !== n && !n.startsWith("_") && "canNotify" !== n) || (!(!e || -1 !== e.indexOf(n)) || (!r.canNotify || (r._notify({
                                    target: t,
                                    propertyName: n,
                                    oldValue: a,
                                    newValue: o
                                }),
                                !0))))
                            }
                        })
                    }
                    get canNotify() {
                        const t = this;
                        return void 0 === t._canNotify && (t._canNotify = !0),
                        t._canNotify
                    }
                    set canNotify(t) {
                        this._canNotify = t
                    }
                    _notify(t) {
                        const e = this;
                        if (e.canNotify && e.notifyFn)
                            for (let r = 0; r < e.notifyFn.length; r++)
                                e.notifyFn[r](t)
                    }
                    notify(t) {
                        const e = this;
                        t && (e.notifyFn || (e.notifyFn = []),
                        e.notifyFn.push(t))
                    }
                }
                ,
                Component: class {
                    constructor(t, e) {
                        const r = this.name;
                        let n = null;
                        return t ? n = new window[r](t,e) : (n = new window[r],
                        n._initProperties = e),
                        this._element = n,
                        n
                    }
                    get name() {
                        return "Component"
                    }
                    get element() {
                        return this._element
                    }
                }
                ,
                Theme: S.Theme || "",
                EnableShadowDOM: S.ShadowDom || !1,
                BaseUrl: "./",
                StyleBaseUrl: "/styles/default/",
                Version: "13.2.0",
                Templates: t,
                RenderMode: S.RenderMode || "auto",
                Render: function() {
                    const t = ()=>{
                        window[e].RenderMode = "",
                        T()
                    }
                    ;
                    "complete" === document.readyState ? t() : (window.removeEventListener("load", t),
                    window.addEventListener("load", t))
                },
                Data: m,
                Mode: S.Mode || "production",
                License: "Evaluation"
            });
            let D = window[e].Theme;
            "manual" !== window[e].RenderMode && document.addEventListener("readystatechange", T),
            Object.defineProperty(window[e], "Theme", {
                configurable: !1,
                enumerable: !0,
                get: ()=>D,
                set(t) {
                    const e = D;
                    D = t,
                    g.fireEvent("theme-changed", {
                        oldValue: e,
                        newValue: t
                    }, {
                        bubbles: !0,
                        cancelable: !0
                    })
                }
            }),
            window[e]("smart-base-element", window[e].BaseElement),
            window[e]("smart-content-element", class extends window[e].BaseElement {
                static get properties() {
                    return {
                        content: {
                            type: "any",
                            reflectToAttribute: !1
                        },
                        innerHTML: {
                            type: "string",
                            reflectToAttribute: !1
                        }
                    }
                }
                template() {
                    return "<div inner-h-t-m-l='[[innerHTML]]'></div>"
                }
                ready() {
                    super.ready();
                    this.applyContent()
                }
                refresh() {}
                clearContent() {
                    const t = this;
                    for (; t.$.content.firstChild; )
                        t.$.content.removeChild(t.$.content.firstChild)
                }
                applyContent() {
                    const t = this;
                    if (void 0 === t.content)
                        return void (t.content = t.$.content);
                    if ("" === t.content || null === t.content)
                        return void t.clearContent();
                    if (t.content instanceof HTMLElement)
                        return t.clearContent(),
                        void t.$.content.appendChild(t.content);
                    const e = document.createDocumentFragment();
                    let r = document.createElement("div");
                    e.appendChild(r),
                    t.content instanceof HTMLElement ? r.appendChild(t.content) : r.innerHTML = t.content;
                    let n = Array.from(r.childNodes);
                    r.parentNode.removeChild(r);
                    for (let t = 0; t < n.length; t++)
                        e.appendChild(n[t]);
                    t.clearContent(),
                    t.$.content.appendChild(e)
                }
                propertyChangedHandler(t, e, r) {
                    super.propertyChangedHandler(t, e, r);
                    const n = this;
                    e !== r && ("innerHTML" === t && (n.content = r,
                    n.applyContent(),
                    n.innerHTML = n.content = f.Core.html(n.$.content)),
                    "content" === t && n.applyContent())
                }
            }
            ),
            window[e]("smart-scroll-viewer", class extends window[e].ContentElement {
                static get properties() {
                    return {
                        autoRefresh: {
                            type: "boolean",
                            value: !1
                        },
                        horizontalScrollBarVisibility: {
                            type: "string",
                            value: "auto",
                            allowedValues: ["auto", "disabled", "hidden", "visible"]
                        },
                        touchScrollRatio: {
                            type: "any",
                            value: null
                        },
                        touchVelocityCoefficient: {
                            type: "number",
                            value: 50
                        },
                        verticalScrollBarVisibility: {
                            type: "string",
                            value: "auto",
                            allowedValues: ["auto", "disabled", "hidden", "visible"]
                        }
                    }
                }
                static get listeners() {
                    return {
                        touchmove: "_touchmoveHandler",
                        touchstart: "_touchstartHandler",
                        wheel: "_mouseWheelHandler",
                        "document.up": "_upHandler"
                    }
                }
                static get styleUrls() {
                    return ["smart.scrollviewer.css"]
                }
                template() {
                    return '<div id="container" class="smart-container" role="presentation">\n                        <div id="scrollViewerContainer" class="smart-scroll-viewer-container" role="presentation">\n                            <div id="scrollViewerContentContainer" inner-h-t-m-l=\'[[innerHTML]]\' class="smart-scroll-viewer-content-container" role="presentation">\n                                <content></content>\n                            </div>\n                        </div>\n                        <smart-scroll-bar id="verticalScrollBar" theme="[[theme]]"  animation="[[animation]]" disabled="[[disabled]]" right-to-left="[[rightToLeft]]" orientation="vertical"></smart-scroll-bar>\n                        <smart-scroll-bar id="horizontalScrollBar" theme="[[theme]]" disabled="[[disabled]]" right-to-left="[[rightToLeft]]"></smart-scroll-bar>\n                    </div>'
                }
                appendChild(t) {
                    const e = this;
                    if (t) {
                        if (!e.isCompleted || t.classList && t.classList.contains("smart-resize-trigger-container")) {
                            const t = Array.prototype.slice.call(arguments, 2);
                            return HTMLElement.prototype.appendChild.apply(e, t.concat(Array.prototype.slice.call(arguments)))
                        }
                        e.$.scrollViewerContentContainer.appendChild(t)
                    }
                }
                removeChild(t) {
                    const e = this;
                    if (t) {
                        if (!e.isCompleted || t.classList && t.classList.contains("smart-resize-trigger-container")) {
                            const t = Array.prototype.slice.call(arguments, 2);
                            return HTMLElement.prototype.removeChild.apply(e, t.concat(Array.prototype.slice.call(arguments)))
                        }
                        e.$.scrollViewerContentContainer.removeChild(t)
                    }
                }
                removeAll() {
                    const t = this;
                    t.isCompleted && (t.$.scrollViewerContentContainer.innerHTML = "")
                }
                _horizontalScrollbarHandler(t) {
                    const e = this;
                    e.$.scrollViewerContentContainer.style.left = (e.rightToLeft ? 1 : -1) * e.scrollLeft + "px",
                    t.stopPropagation && t.stopPropagation(),
                    e.onHorizontalChange && e.onHorizontalChange(t)
                }
                _verticalScrollbarHandler(t) {
                    const e = this;
                    e.$.scrollViewerContentContainer.style.top = -e.scrollTop + "px",
                    t.stopPropagation && t.stopPropagation(),
                    e.onVerticalChange && e.onVerticalChange(t)
                }
                _touchmoveHandler(t) {
                    const e = this;
                    if (e._touchmoveInside && t.cancelable)
                        return t.preventDefault(),
                        void t.stopPropagation();
                    const r = e.scrollHeight > 0
                      , n = e.scrollWidth > 0
                      , o = e._touchCoords;
                    if (!r && !n || !o)
                        return;
                    const a = t.touches[0];
                    let i, s, d, l;
                    e._touchCoords = [a.pageX, a.pageY],
                    r ? (i = e.scrollTop,
                    s = e.scrollHeight,
                    d = a.pageY,
                    l = o[1]) : (i = e.scrollLeft,
                    s = e.scrollWidth,
                    d = a.pageX,
                    l = o[0]);
                    const m = parseFloat(d.toFixed(5))
                      , c = parseFloat(l.toFixed(5));
                    0 === i && m >= c || i === s && m <= c || (d !== l && (e._touchmoveInside = !0),
                    t.cancelable && (t.preventDefault(),
                    t.stopPropagation()))
                }
                _touchstartHandler(t) {
                    const e = t.touches[0];
                    this._touchCoords = [e.pageX, e.pageY]
                }
                _mouseWheelHandler(t) {
                    const e = this;
                    if (!e.disabled && (e.computedHorizontalScrollBarVisibility || e.computedVerticalScrollBarVisibility)) {
                        if (t.shiftKey && e.computedHorizontalScrollBarVisibility) {
                            const r = e.scrollLeft;
                            if (0 === r && t.deltaX < 0 || r === e.scrollHeight && t.deltaX > 0)
                                return;
                            return t.stopPropagation(),
                            t.preventDefault(),
                            void (e.scrollWidth > 0 && e.scrollTo(void 0, e.scrollLeft + e._getScrollCoefficient(t, e.offsetWidth)))
                        }
                        if (e.computedVerticalScrollBarVisibility) {
                            const r = e.scrollTop;
                            if (0 === r && t.deltaY < 0 || r === e.scrollHeight && t.deltaY > 0)
                                return;
                            t.stopPropagation(),
                            t.preventDefault(),
                            e.scrollHeight > 0 && e.scrollTo(e.scrollTop + e._getScrollCoefficient(t, e.offsetHeight))
                        }
                    }
                }
                _overriddenHandler() {}
                _upHandler() {
                    delete this._touchCoords,
                    delete this._touchmoveInside
                }
                _getScrollCoefficient(t, e) {
                    const r = t.deltaMode
                      , n = Math.abs(t.deltaY);
                    let o;
                    return 0 === r ? o = n < 100 / 3 ? n : e : 1 === r ? o = n < 1 ? n * (100 / 3) : e : 2 === r && (o = e),
                    t.deltaY < 0 ? -o : o
                }
                applyContent() {
                    super.applyContent(),
                    this.refresh()
                }
                get computedHorizontalScrollBarVisibility() {
                    const t = this;
                    return t._scrollView && t._scrollView.hScrollBar ? !t._scrollView.hScrollBar.$.hasClass("smart-hidden") : null
                }
                get computedVerticalScrollBarVisibility() {
                    const t = this;
                    return t._scrollView && t._scrollView.vScrollBar ? !t._scrollView.vScrollBar.$.hasClass("smart-hidden") : null
                }
                scrollTo(t, e) {
                    const r = this;
                    r._scrollView && (void 0 !== t && r._scrollView.scrollTo(t),
                    void 0 !== e && r._scrollView.scrollTo(e, !1))
                }
                refreshScrollBarsVisibility() {
                    const t = this;
                    t._scrollView && (t._scrollView.hScrollBar.disabled = t.disabled,
                    t._scrollView.vScrollBar.disabled = t.disabled,
                    "disabled" === t.horizontalScrollBarVisibility && (t._scrollView.hScrollBar.disabled = !0),
                    "disabled" === t.verticalScrollBarVisibility && (t._scrollView.vScrollBar.disabled = !0),
                    t.scrollWidth > 0 ? t._scrollView.hScrollBar.$.removeClass("smart-hidden") : "visible" !== t.horizontalScrollBarVisibility && t._scrollView.hScrollBar.$.addClass("smart-hidden"),
                    t.scrollHeight > 0 ? t._scrollView.vScrollBar.$.removeClass("smart-hidden") : "visible" !== t.verticalScrollBarVisibility && t._scrollView.vScrollBar.$.addClass("smart-hidden"),
                    "hidden" === t.horizontalScrollBarVisibility && t._scrollView.hScrollBar.$.addClass("smart-hidden"),
                    "hidden" === t.verticalScrollBarVisibility && t._scrollView.vScrollBar.$.addClass("smart-hidden"),
                    "visible" === t.horizontalScrollBarVisibility && t._scrollView.hScrollBar.$.removeClass("smart-hidden"),
                    "visible" === t.verticalScrollBarVisibility && (t._scrollView.vScrollBar.$.removeClass("smart-hidden"),
                    t.disabled || (t._scrollView.vScrollBar.disabled = t.scrollHeight <= 0)),
                    t.computedHorizontalScrollBarVisibility && t.computedVerticalScrollBarVisibility ? (t._scrollView.hScrollBar.$.addClass("bottom-corner"),
                    t._scrollView.vScrollBar.$.addClass("bottom-corner")) : (t._scrollView.hScrollBar.$.removeClass("bottom-corner"),
                    t._scrollView.vScrollBar.$.removeClass("bottom-corner")))
                }
                ready() {
                    super.ready();
                    const t = this;
                    t.$.verticalScrollBar.onChange = e=>{
                        e.detail = e,
                        t._verticalScrollbarHandler(e)
                    }
                    ,
                    t.$.horizontalScrollBar.onChange = e=>{
                        e.detail = e,
                        t._horizontalScrollbarHandler(e)
                    }
                    ,
                    t.$.verticalScrollBar.setAttribute("aria-controls", t.id),
                    t.$.horizontalScrollBar.setAttribute("aria-controls", t.id),
                    t._customScrollView || (t._scrollView = new Smart.Utilities.Scroll(t,t.$.horizontalScrollBar,t.$.verticalScrollBar)),
                    t.refresh()
                }
                refresh() {
                    const t = this;
                    function e() {
                        const e = t.$.scrollViewerContainer.classList.contains("vscroll");
                        t.$.scrollViewerContainer.classList.remove("vscroll");
                        const r = t.$.scrollViewerContentContainer.offsetWidth - t.$.scrollViewerContainer.offsetWidth;
                        return r > 0 && "hidden" !== t.horizontalScrollBarVisibility || "visible" === t.horizontalScrollBarVisibility ? t.$.scrollViewerContainer.classList.add("hscroll") : t.$.scrollViewerContainer.classList.remove("hscroll"),
                        e && t.$.scrollViewerContainer.classList.add("vscroll"),
                        r
                    }
                    function r() {
                        let e;
                        const r = t.$.scrollViewerContainer.classList.contains("hscroll");
                        if (t.$.scrollViewerContainer.classList.remove("hscroll"),
                        Smart.Utilities.Core.Browser.Safari) {
                            const r = t.$.scrollViewerContentContainer.getBoundingClientRect().height
                              , n = t.$.scrollViewerContainer.getBoundingClientRect().height;
                            e = r && n ? parseInt(r) - parseInt(n) : t.$.scrollViewerContentContainer.offsetHeight - t.$.scrollViewerContainer.offsetHeight
                        } else
                            e = t.$.scrollViewerContentContainer.offsetHeight - t.$.scrollViewerContainer.offsetHeight;
                        return t.virtualScrollHeight && (e = t.virtualScrollHeight),
                        e > 0 && "hidden" !== t.verticalScrollBarVisibility || "visible" === t.verticalScrollBarVisibility ? t.$.scrollViewerContainer.classList.add("vscroll") : t.$.scrollViewerContainer.classList.remove("vscroll"),
                        r && t.$.scrollViewerContainer.classList.add("hscroll"),
                        e
                    }
                    if (!t.$.scrollViewerContentContainer)
                        return;
                    "hidden" === t.verticalScrollBarVisibility && t.$.scrollViewerContentContainer.setAttribute("disable-vertical", ""),
                    "hidden" === t.horizontalScrollBarVisibility && t.$.scrollViewerContentContainer.setAttribute("disable-horizontal", "");
                    let n = t.scrollWidth
                      , o = t.scrollHeight;
                    t.scrollWidth = e(),
                    t.scrollHeight = r(),
                    t.scrollHeight && o === t.scrollHeight || (t.scrollWidth = e()),
                    t.scrollWidth && n === t.scrollWidth || (t.scrollHeight = r()),
                    t.computedVerticalScrollBarVisibility && (t.scrollHeight += t._scrollView.hScrollBar.offsetHeight),
                    t.computedHorizontalScrollBarVisibility && (t.scrollWidth += t._scrollView.vScrollBar.offsetWidth),
                    0 === t.scrollHeight && t.scrollWidth > 0 && t.$.container.offsetHeight - t.$.content.offsetHeight < 5 && (t.$.container.style.paddingBottom = t._scrollView.hScrollBar.offsetHeight + "px"),
                    t.autoRefresh && (t.$.scrollViewerContainer.scrollLeft = 0,
                    t.$.scrollViewerContainer.scrollTop = 0)
                }
                attached() {
                    const t = this;
                    super.attached(),
                    t._scrollView || t._customScrollView || (t._scrollView = new Smart.Utilities.Scroll(t,t.$.horizontalScrollBar,t.$.verticalScrollBar))
                }
                detached() {
                    const t = this;
                    super.detached(),
                    t._scrollView && (t._scrollView.unlisten(),
                    delete t._scrollView)
                }
                get scrollWidth() {
                    const t = this;
                    return t._scrollView && t._scrollView.hScrollBar ? 1 === t._scrollView.hScrollBar.max && "visible" === t.horizontalScrollBarVisibility ? 0 : t._scrollView.hScrollBar.max : -1
                }
                set scrollWidth(t) {
                    const e = this;
                    t < 0 && (t = 0),
                    e._scrollView && e._scrollView.hScrollBar && (0 === t && "visible" === e.horizontalScrollBarVisibility ? e._scrollView.hScrollBar.max = 0 : e._scrollView.hScrollBar.max = t,
                    e.refreshScrollBarsVisibility())
                }
                get scrollHeight() {
                    const t = this;
                    return t._scrollView && t._scrollView.vScrollBar ? 1 === t._scrollView.vScrollBar.max && "visible" === t.verticalScrollBarVisibility ? 0 : t._scrollView.vScrollBar.max : 0
                }
                set scrollHeight(t) {
                    const e = this;
                    t < 0 && (t = 0),
                    e._scrollView && e._scrollView.vScrollBar && (0 === t && "visible" === e.verticalScrollBarVisibility ? e._scrollView.vScrollBar.max = 1 : e._scrollView.vScrollBar.max = t,
                    e.refreshScrollBarsVisibility())
                }
                get scrollLeft() {
                    const t = this;
                    return t._scrollView && t._scrollView.hScrollBar ? t._scrollView.hScrollBar.value : 0
                }
                set scrollLeft(t) {
                    const e = this;
                    t < 0 && (t = 0),
                    e._scrollView && e._scrollView.hScrollBar && (e._scrollView.hScrollBar.value = t)
                }
                get scrollTop() {
                    const t = this;
                    return t._scrollView && t._scrollView.vScrollBar ? t._scrollView.vScrollBar.value : 0
                }
                set scrollTop(t) {
                    const e = this;
                    t < 0 && (t = 0),
                    e._scrollView && e._scrollView.vScrollBar && (e._scrollView.vScrollBar.value = t)
                }
                propertyChangedHandler(t, e, r) {
                    const n = this;
                    super.propertyChangedHandler(t, e, r),
                    "animation" !== t && "theme" !== t && n.refresh()
                }
            }
            ),
            window[e].Utilities.Assign("PositionDetection", class {
                constructor(t, e, r, n) {
                    if (e) {
                        const r = "dropDown" + Math.floor(65536 * (1 + Math.random())).toString(16).substring(1);
                        e.id = r,
                        t.setAttribute("aria-owns", r)
                    }
                    this.context = t,
                    this.dropDown = e,
                    this.defaultParent = r,
                    this.closeMethod = n
                }
                handleAutoPositioning() {
                    const t = this
                      , e = t.context;
                    if ("auto" !== e.dropDownPosition || e.disabled || e.isHidden)
                        return;
                    const r = window.requestAnimationFrame;
                    let n, o = Date.now();
                    return n = r((function a() {
                        if (e.isHidden || document.hidden)
                            return;
                        n = r(a),
                        "auto" === e.dropDownPosition && !e.disabled && (e.isInShadowDOM ? document.body.contains(e.shadowParent) : document.body.contains(e)) || cancelAnimationFrame(n),
                        e.isHidden && cancelAnimationFrame(n),
                        Date.now() - o >= 200 && (t.scrollHandler(),
                        o = Date.now())
                    }
                    ))
                }
                checkBrowserBounds(t) {
                    const e = this.context;
                    if ("auto" === e.dropDownPosition && !e.disabled)
                        switch (t) {
                        case "vertically":
                            this.checkBrowserBoundsVertically();
                            break;
                        case "horizontally":
                            this.checkBrowserBoundsHorizontally();
                            break;
                        default:
                            this.checkBrowserBoundsVertically(),
                            this.checkBrowserBoundsHorizontally()
                        }
                }
                checkBrowserBoundsHorizontally() {
                    const t = this.context
                      , e = this.dropDown;
                    let r, n = 0;
                    i.isMobile || window.innerWidth === document.documentElement.clientWidth || (n = window.innerWidth - document.documentElement.clientWidth),
                    null !== t._dropDownParent ? r = !0 : e.style.left = "";
                    const o = window.innerWidth - n;
                    let a = t.getBoundingClientRect().left;
                    if (a < 0 && (e.style.left = (r ? 0 : Math.abs(a)) + "px",
                    a = parseFloat(e.style.left)),
                    a + e.offsetWidth > o) {
                        let t = a - Math.abs(o - a - e.offsetWidth);
                        r && (t += window.pageXOffset),
                        e.style.left = (r ? t : t - a) + "px",
                        window.innerWidth === document.documentElement.clientWidth && (e.style.left = parseFloat(e.style.left) + n + "px"),
                        r && window.innerHeight === document.documentElement.clientHeight && this.positionDropDown(!0)
                    }
                }
                checkBrowserBoundsVertically(t) {
                    const e = this.context
                      , r = this.dropDown
                      , n = e._dropDownListPosition;
                    t || (t = e.getBoundingClientRect()),
                    0 !== t.height && (document.documentElement.clientHeight - Math.abs(t.top + t.height + r.offsetHeight) >= 0 ? e._dropDownListPosition = "bottom" : t.top - r.offsetHeight >= 0 ? e._dropDownListPosition = "top" : e._dropDownListPosition = "overlay-center",
                    this.updatePositionAttribute(n, e._dropDownListPosition))
                }
                scrollHandler() {
                    const t = this.context;
                    if (!t.parentElement)
                        return;
                    const e = t.getBoundingClientRect();
                    if (e.top === t._positionTop)
                        return;
                    const r = t._dropDownListPosition;
                    this.checkBrowserBoundsVertically(e),
                    t._dropDownListPosition !== r && this.positionDropDown(),
                    t._positionTop = e.top
                }
                getDropDownParent(t) {
                    const e = this.context
                      , r = this.dropDown;
                    let n = e.dropDownAppendTo;
                    e._positionedParent = null,
                    null === n ? e._dropDownParent = null : "body" === n || n === document.body ? e.getRootNode().host ? e._dropDownParent = e.getRootNode().host.shadowRoot : e._dropDownParent = document.body : n instanceof HTMLElement ? e._dropDownParent = n : "string" == typeof n ? (n = document.getElementById(n),
                    n instanceof HTMLElement ? e._dropDownParent = n : (e.dropDownAppendTo = null,
                    e._dropDownParent = null)) : (e.dropDownAppendTo = null,
                    e._dropDownParent = null);
                    let o = e._dropDownParent;
                    if (null !== o) {
                        for (; o && o instanceof HTMLElement && "static" === window.getComputedStyle(o).position && o !== e.getShadowRootOrBody(); )
                            o = o.parentElement;
                        o === document.body ? e._positionedParent = null : e._positionedParent = o,
                        r && (r.setAttribute("animation", e.animation),
                        "" !== e.theme && r.$.addClass(e.theme),
                        t && (e._dropDownParent.appendChild(r),
                        r.$.addClass("smart-drop-down-repositioned")),
                        -1 === e.detachedChildren.indexOf(r) && e.detachedChildren.push(r))
                    }
                }
                dropDownAppendToChangedHandler() {
                    const t = this.context
                      , e = this.dropDown
                      , r = t._dropDownParent;
                    this.getDropDownParent(),
                    t._dropDownParent !== r && (t[this.closeMethod](),
                    ["left", "top", "font-size", "font-family", "font-style", "font-weight"].forEach(t=>e.style[t] = null),
                    null === t._dropDownParent ? (this.defaultParent.appendChild(e),
                    e.$.removeClass("smart-drop-down-repositioned")) : (t._dropDownParent.appendChild(e),
                    e.$.addClass("smart-drop-down-repositioned")))
                }
                dropDownPositionChangedHandler() {
                    this.dropDown.style.transition = "none",
                    this.context[this.closeMethod](),
                    this.setDropDownPosition(),
                    this.handleAutoPositioning()
                }
                dropDownAttached(t) {
                    const e = this.context;
                    null !== e._dropDownParent && (e._dropDownParent.appendChild(this.dropDown),
                    this.handleAutoPositioning(),
                    t && e[t]())
                }
                dropDownDetached() {
                    const t = this.context;
                    null !== t._dropDownParent && document.body.contains(this.dropDown) && document.body.contains(t._dropDownParent) && t._dropDownParent.removeChild(this.dropDown)
                }
                setDropDownPosition() {
                    const t = this.context
                      , e = t.dropDownPosition
                      , r = t._dropDownListPosition;
                    "auto" === e ? this.checkBrowserBounds() : t._dropDownListPosition = e,
                    this.updatePositionAttribute(r, t._dropDownListPosition)
                }
                updatePositionAttribute(t, e) {
                    const r = this.context
                      , n = this.dropDown;
                    r.$.dropDownButton && !r.$.dropDownButton.hasAttribute(e) && (r.$.dropDownButton.removeAttribute(t),
                    r.$.dropDownButton.setAttribute(e, "")),
                    n.hasAttribute(e) || (n.style.transition = "none",
                    n.removeAttribute(t),
                    n.setAttribute(e, ""),
                    requestAnimationFrame((function() {
                        n.style.transition = null
                    }
                    )))
                }
                positionDropDown(t) {
                    const e = this.context
                      , r = this.dropDown;
                    if (!e.opened || null === e._dropDownParent)
                        return;
                    const n = e.getBoundingClientRect();
                    let o, a;
                    if (this.customPositionDropDown) {
                        const t = this.customPositionDropDown(n);
                        o = t.left,
                        a = t.top
                    } else
                        switch (o = n.left,
                        a = n.top,
                        e._dropDownListPosition) {
                        case "bottom":
                            a += e.$.container.offsetHeight - 1;
                            break;
                        case "center-bottom":
                            a += e.$.container.offsetHeight - 1,
                            o += e.offsetWidth - r.offsetWidth / 2;
                            break;
                        case "center-top":
                            a -= r.offsetHeight - 1,
                            o += e.offsetWidth - r.offsetWidth / 2;
                            break;
                        case "top":
                            a -= r.offsetHeight - 1;
                            break;
                        case "overlay-bottom":
                            break;
                        case "overlay-center":
                            a -= r.offsetHeight / 2 - e.offsetHeight / 2;
                            break;
                        case "overlay-top":
                            a -= r.offsetHeight - e.offsetHeight
                        }
                    const i = this.getDropDownOffset();
                    r.style.top = a + i.y + "px",
                    t || (r.style.left = o + i.x + "px")
                }
                getDropDownOffset() {
                    const t = this.context._positionedParent;
                    let e, r;
                    if (t && "#document-fragment" !== t.nodeName) {
                        const n = t.getBoundingClientRect();
                        e = -n.left,
                        r = -n.top
                    } else
                        e = window.pageXOffset,
                        r = window.pageYOffset;
                    return {
                        x: e,
                        y: r
                    }
                }
                placeOverlay() {
                    const t = this.context;
                    if (!t.dropDownOverlay || t._overlay)
                        return;
                    const e = document.createElement("div");
                    e.classList.add("smart-drop-down-overlay"),
                    e.style.width = document.documentElement.scrollWidth + "px",
                    e.style.height = document.documentElement.scrollHeight + "px",
                    document.body.appendChild(e),
                    t._overlay = e
                }
                removeOverlay(t) {
                    const e = this
                      , r = e.context;
                    r._overlay && (r.hasAnimation && t ? requestAnimationFrame((function t() {
                        e.dropDown.getBoundingClientRect().height > 0 ? requestAnimationFrame(t) : (document.body.removeChild(r._overlay),
                        delete r._overlay)
                    }
                    )) : (document.body.removeChild(r._overlay),
                    delete r._overlay))
                }
            }
            );
            window.Smart.Color = class {
                constructor(t) {
                    if (window.Smart._colors || (window.Smart._colors = []),
                    window.Smart._colors[t]) {
                        const e = window.Smart._colors[t];
                        return this.hex = e.hex,
                        this.r = e.r,
                        this.g = e.g,
                        void (this.b = e.b)
                    }
                    this.r = this.g = this.b = 0,
                    this.hex = "";
                    const e = this.getStandardizedColor(t);
                    e && (this.setHex(e.substring(1)),
                    window.Smart._colors[t] = {
                        hex: this.hex,
                        r: this.r,
                        g: this.g,
                        b: this.b
                    })
                }
                getStandardizedColor(t) {
                    const e = document.createElement("canvas").getContext("2d");
                    return e.fillStyle = t,
                    e.fillStyle
                }
                getInvertedColor() {
                    if ("" === this.hex)
                        return "transparent";
                    return 255 - (.299 * this.r + .587 * this.g + .114 * this.b) < 105 ? "Black" : "White"
                }
                hexToRgb(t) {
                    let e = "00"
                      , r = "00"
                      , n = "00";
                    return 6 === (t = this.validateHex(t)).length ? (e = t.substring(0, 2),
                    r = t.substring(2, 4),
                    n = t.substring(4, 6)) : (t.length > 4 && (e = t.substring(4, t.length),
                    t = t.substring(0, 4)),
                    t.length > 2 && (r = t.substring(2, t.length),
                    t = t.substring(0, 2)),
                    t.length > 0 && (n = t.substring(0, t.length))),
                    {
                        r: this.hexToInt(e),
                        g: this.hexToInt(r),
                        b: this.hexToInt(n)
                    }
                }
                validateHex(t) {
                    return (t = (t = new String(t).toUpperCase()).replace(/[^A-F0-9]/g, "0")).length > 6 && (t = t.substring(0, 6)),
                    t
                }
                webSafeDec(t) {
                    return t = Math.round(t / 51),
                    t *= 51
                }
                hexToWebSafe(t) {
                    let e, r, n;
                    return 3 === t.length ? (e = t.substring(0, 1),
                    r = t.substring(1, 1),
                    n = t.substring(2, 1)) : (e = t.substring(0, 2),
                    r = t.substring(2, 4),
                    n = t.substring(4, 6)),
                    this.intToHex(this.webSafeDec(this.hexToInt(e))) + this.intToHex(this.webSafeDec(this.hexToInt(r))) + this.intToHex(this.webSafeDec(this.hexToInt(n)))
                }
                rgbToWebSafe(t) {
                    return {
                        r: this.webSafeDec(t.r),
                        g: this.webSafeDec(t.g),
                        b: this.webSafeDec(t.b)
                    }
                }
                rgbToHex(t) {
                    return this.intToHex(t.r) + this.intToHex(t.g) + this.intToHex(t.b)
                }
                intToHex(t) {
                    let e = parseInt(t).toString(16);
                    return 1 === e.length && (e = "0" + e),
                    e.toUpperCase()
                }
                hexToInt(t) {
                    return parseInt(t, 16)
                }
                setRgb(t, e, r) {
                    let n = function(t) {
                        return t < 0 || t > 255 || isNaN(parseInt(t)) ? 0 : t
                    };
                    this.r = n(t),
                    this.g = n(e),
                    this.b = n(r),
                    this.hex = this.rgbToHex(this)
                }
                setHex(t) {
                    this.hex = t;
                    let e = this.hexToRgb(this.hex);
                    this.r = e.r,
                    this.g = e.g,
                    this.b = e.b
                }
            }
        }()
    },
    9: function(t, e) {
        Smart("smart-button", class extends Smart.ContentElement {
            static get properties() {
                return {
                    value: {
                        type: "string"
                    },
                    name: {
                        type: "string"
                    },
                    type: {
                        value: "button",
                        type: "string"
                    },
                    clickMode: {
                        allowedValues: ["hover", "press", "release", "pressAndRelease"],
                        type: "string",
                        value: "release"
                    }
                }
            }
            static get styleUrls() {
                return ["smart.button.css"]
            }
            template() {
                return "<button class=\"smart-button smart-unselectable\" inner-h-t-m-l='[[innerHTML]]' id='button' type='[[type]]' name='[[name]]' value='[[value]]' disabled='[[disabled]]' role=\"presentation\"></button>"
            }
            refresh() {}
            static get listeners() {
                return {
                    "button.down": "_downHandler",
                    "button.mouseenter": "_mouseEnterHandler",
                    "button.mouseleave": "_mouseLeaveHandler",
                    "button.touchend": "_touchEndHandler",
                    "button.click": "_clickHandler",
                    "button.up": "_upHandler",
                    up: "_upHandler",
                    "button.focus": "_focusHandler",
                    "button.blur": "_blurHandler"
                }
            }
            focus() {
                const t = this;
                t.$.button ? t.$.button.focus() : HTMLElement.prototype.focus.call(t)
            }
            blur() {
                const t = this;
                t.$.button ? t.$.button.blur() : HTMLElement.prototype.blur.call(t)
            }
            _upHandler(t) {
                const e = this;
                if (t.stopPropagation(),
                e.$.setAttributeValue("active", !1),
                e.dataset.target) {
                    const r = document.querySelector(e.dataset.target);
                    let n = e.dataset.toggle;
                    const o = "smart-window".toLowerCase();
                    if (r && r.nodeName.toLowerCase() === o && "modal" === n && (n = "openModal"),
                    "tab" === n || "pill" === n || "list" === n) {
                        const t = this.closest(".nav, .list-group")
                          , n = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]'
                          , o = !t || "UL" !== t.nodeName && "OL" !== t.nodeName ? t.children(".active") : t.querySelectorAll("li > .active");
                        if (t) {
                            const r = t.querySelectorAll(n);
                            for (let t = 0; t < r.length; t++)
                                r[t].classList.remove("primary");
                            for (let t = 0; t < o.length; t++)
                                o[t].classList.remove("active");
                            let a = e.parentNode;
                            for (; a; ) {
                                if ("LI" === a.nodeName) {
                                    a.classList.add("active");
                                    break
                                }
                                a = a.parentNode
                            }
                            e.classList.add("primary")
                        }
                        return r.parentNode.querySelectorAll(".active").forEach(t=>{
                            t.classList.remove("active"),
                            t.classList.add("smart-hidden")
                        }
                        ),
                        r.classList.add("active"),
                        void r.classList.remove("smart-hidden")
                    }
                    n && r && !r[n] && "collapse" === n && (setTimeout(()=>{
                        r.classList.contains("smart-hidden") ? r.classList.remove("smart-hidden") : r.classList.add("smart-hidden")
                    }
                    ),
                    t.originalEvent.preventDefault()),
                    n && r && !r[n] && "dropdown" === n ? (setTimeout(()=>{
                        r.opened = !r.opened
                    }
                    ),
                    t.originalEvent.preventDefault()) : n && r && r[n] && (setTimeout(()=>{
                        r[n]()
                    }
                    , 50),
                    t.originalEvent.preventDefault())
                }
            }
            _focusHandler() {
                this.$.setAttributeValue("focus", !0),
                this.$.fireEvent("focus")
            }
            _blurHandler() {
                this.$.setAttributeValue("focus", !1),
                this.$.fireEvent("blur")
            }
            _clickHandler(t) {
                ("release" !== this.clickMode && "pressAndRelease" !== this.clickMode || this.readonly) && (t.preventDefault(),
                t.stopPropagation())
            }
            _downHandler(t) {
                const e = this;
                if (!(e.disabled || (e.hasRippleAnimation && Smart.Utilities.Animation.Ripple.animate(e, t.pageX, t.pageY),
                e.$.setAttributeValue("active", !0),
                "press" !== e.clickMode && "pressAndRelease" !== e.clickMode || e.readonly))) {
                    if (e.hasAttribute("smart-blazor"))
                        return void e.$.dispatchEvent(new Event("click"));
                    const r = "buttons"in t ? t.buttons : t.which;
                    e.$.fireEvent("click", {
                        buttons: r,
                        clientX: t.clientX,
                        clientY: t.clientY,
                        pageX: t.pageX,
                        pageY: t.pageY,
                        screenX: t.screenX,
                        screenY: t.screenY
                    })
                }
            }
            _mouseEnterHandler(t) {
                const e = this;
                if (!e.readonly && (e.$button.setAttributeValue("hover", !0),
                e.$.setAttributeValue("hover", !0),
                "hover" === e.clickMode)) {
                    const r = "buttons"in t ? t.buttons : t.which;
                    if (e.hasAttribute("smart-blazor"))
                        return void e.$.dispatchEvent(new Event("click"));
                    e.$.fireEvent("click", {
                        buttons: r,
                        clientX: t.clientX,
                        clientY: t.clientY,
                        pageX: t.pageX,
                        pageY: t.pageY,
                        screenX: t.screenX,
                        screenY: t.screenY
                    })
                }
            }
            _touchEndHandler() {
                const t = this;
                setTimeout((function() {
                    t.$button.setAttributeValue("hover", !1),
                    t.$.setAttributeValue("hover", !1)
                }
                ), 300)
            }
            _mouseLeaveHandler() {
                this.$button.setAttributeValue("hover", !1),
                this.$.setAttributeValue("hover", !1)
            }
            propertyChangedHandler(t, e, r) {
                super.propertyChangedHandler(t, e, r);
                const n = this;
                "disabled" === t ? (n._setFocusable(),
                n.$button && n.$button.setAttributeValue("hover", !1),
                n.$.setAttributeValue("hover", !1),
                n instanceof Smart.RepeatButton && n._stopRepeat()) : "unfocusable" === t && n._setFocusable()
            }
            _setFocusable() {
                const t = this.$.button ? this.$.button : this;
                if (this.disabled || this.unfocusable)
                    return t.removeAttribute("tabindex"),
                    void (t.tabIndex = -1);
                t.tabIndex = this.tabIndex > 0 ? this.tabIndex : 0
            }
            ready() {
                const t = this;
                super.ready(),
                t.setAttribute("role", "button"),
                t._setFocusable(),
                t.enableShadowDOM && t.$.hiddenInput && t.appendChild(t.$.hiddenInput)
            }
        }
        ),
        Smart("smart-repeat-button", class extends Smart.Button {
            static get properties() {
                return {
                    delay: {
                        value: 50,
                        type: "number"
                    },
                    initialDelay: {
                        value: 150,
                        type: "number"
                    }
                }
            }
            static get listeners() {
                return {
                    "button.down": "_startRepeat",
                    "button.mouseenter": "_overriddenHandler",
                    "button.mouseleave": "_overriddenHandler",
                    "button.pointerenter": "_updateInBoundsFlag",
                    "button.pointerleave": "_updateInBoundsFlag",
                    "button.touchmove": "_touchmoveHandler",
                    "document.up": "_stopRepeat"
                }
            }
            _clickHandler(t) {
                const e = this;
                ("release" !== e.clickMode || e.preventDefaultClick || e.readonly || e.disabled) && (t.preventDefault(),
                t.stopPropagation(),
                e.preventDefaultClick = !1)
            }
            _updateInBoundsFlag(t) {
                const e = this;
                -1 !== t.type.indexOf("leave") ? (e._isPointerInBounds = !1,
                e.$button.setAttributeValue("hover", !1),
                e.$.setAttributeValue("hover", !1)) : (e._isPointerInBounds = !0,
                e.$button.setAttributeValue("hover", !0),
                e.$.setAttributeValue("hover", !0)),
                1 !== ("buttons"in t ? t.buttons : t.which) && e._stopRepeat(t)
            }
            _startRepeat(t) {
                const e = this;
                e.setAttribute("active", ""),
                e._initialTimer || e.readonly || (e._initialTimer = setTimeout((function() {
                    e._repeatTimer = setInterval(()=>{
                        if (e._isPointerInBounds) {
                            if (e.hasAttribute("smart-blazor"))
                                return e.$.dispatchEvent(new Event("click")),
                                void (e.preventDefaultClick = !0);
                            const r = "buttons"in t ? t.buttons : t.which;
                            e.$.fireEvent("click", {
                                buttons: r,
                                clientX: t.clientX,
                                clientY: t.clientY,
                                pageX: t.pageX,
                                pageY: t.pageY,
                                screenX: t.screenX,
                                screenY: t.screenY
                            }),
                            e.preventDefaultClick = !0
                        }
                    }
                    , e.delay)
                }
                ), e.initialDelay))
            }
            _stopRepeat(t) {
                const e = this;
                e.readonly || t && ("pointercancel" === t.type || t.originalEvent && "pointercancel" === t.originalEvent.type) || (e.$.setAttributeValue("active", !1),
                e._repeatTimer && (clearInterval(e._repeatTimer),
                e._repeatTimer = null),
                e._initialTimer && (clearTimeout(e._initialTimer),
                e._initialTimer = null))
            }
            _touchmoveHandler(t) {
                this.preventDefaultClick && t.cancelable && (t.preventDefault(),
                t.stopPropagation())
            }
            _overriddenHandler() {}
        }
        ),
        Smart("smart-toggle-button", class extends Smart.Button {
            static get properties() {
                return {
                    checked: {
                        value: !1,
                        type: "boolean?"
                    },
                    falseContent: {
                        value: "",
                        reflectToAttribute: !1,
                        type: "string"
                    },
                    indeterminateContent: {
                        value: "",
                        reflectToAttribute: !1,
                        type: "string"
                    },
                    indeterminate: {
                        value: !1,
                        type: "boolean"
                    },
                    trueContent: {
                        value: "",
                        reflectToAttribute: !1,
                        type: "string"
                    },
                    indeterminateTemplate: {
                        value: null,
                        type: "any"
                    },
                    trueTemplate: {
                        value: null,
                        type: "any"
                    },
                    falseTemplate: {
                        value: null,
                        type: "any"
                    },
                    type: {
                        value: "toggle",
                        type: "string",
                        defaultReflectToAttribute: !0,
                        readonly: !0
                    }
                }
            }
            static get listeners() {
                return {
                    keydown: "_keyHandler",
                    keyup: "_keyHandler",
                    dragstart: "_dragStartHandler",
                    "button.click": "_buttonClickHandler",
                    "button.mouseenter": "_buttonMouseEnterHandler",
                    "button.mouseleave": "_buttonMouseLeaveHandler",
                    "document.up": "_documentUpHandler"
                }
            }
            ready() {
                super.ready(),
                this._setAriaState(),
                this._updateGroupValue()
            }
            _setAriaState() {
                const t = this
                  , e = t.checked;
                null !== e ? t.setAttribute("aria-pressed", e) : t.setAttribute("aria-pressed", "mixed")
            }
            _buttonClickHandler() {}
            _buttonMouseLeaveHandler() {
                this.removeAttribute("hover")
            }
            _buttonMouseEnterHandler() {
                this.setAttribute("hover", ""),
                this.disabled || this.readonly || "hover" !== this.clickMode || (this._changeCheckState("pointer"),
                this.focus(),
                this._updateHidenInputNameAndValue())
            }
            _documentUpHandler(t) {
                this._pressed && (this._pressed = !1,
                this.disabled || this.readonly || "press" === this.clickMode || "pointercancel" === t.originalEvent.type || (this._changeCheckState("pointer"),
                this.focus(),
                this._updateHidenInputNameAndValue()))
            }
            _downHandler(t) {
                const e = this;
                e.disabled || e.readonly || (e.hasRippleAnimation && Smart.Utilities.Animation.Ripple.animate(e, t.pageX, t.pageY),
                e._pressed = !0,
                "press" !== e.clickMode && "pressAndRelease" !== e.clickMode || (e._changeCheckState("pointer"),
                e.hasAttribute("smart-blazor") ? e.$.dispatchEvent(new Event("click")) : e.$.fireEvent("click"),
                e._updateHidenInputNameAndValue()),
                "press" === e.clickMode && (t.preventDefault(),
                t.stopPropagation()))
            }
            _dragStartHandler(t) {
                t.preventDefault()
            }
            _keyHandler(t) {
                const e = this;
                if (!0 !== e.disabled && !e.readonly && 32 === t.keyCode) {
                    if ("keydown" === t.type)
                        return void t.preventDefault();
                    if ("none" === e.switchMode)
                        return;
                    e._changeCheckState("keyboard"),
                    e._updateHidenInputNameAndValue()
                }
            }
            _updateGroupValue() {
                const t = this;
                if (t.dataset.target) {
                    const e = document.querySelector(t.dataset.target);
                    if (e) {
                        const r = document.querySelectorAll('[data-target="' + t.dataset.target + '"]')
                          , n = [];
                        if (t.checked) {
                            const r = t.dataset.property
                              , n = t.dataset.value;
                            if (r && void 0 !== e[r]) {
                                let t = n;
                                "true" === t && (t = !0),
                                "false" === t && (t = !1),
                                e[r] = t
                            }
                        }
                        for (let e = 0; e < r.length; e++) {
                            const o = r[e];
                            o.checked && (o.name ? (n.push(o.name),
                            t.id && o.setAttribute("data-id", t.id)) : t.id && n.push(t.id))
                        }
                        e.value = n.toString(),
                        t._targetDispatchTimer && clearTimeout(t._targetDispatchTimer),
                        t._targetDispatchTimer = setTimeout(()=>{
                            e.dispatchEvent(new Event("change"))
                        }
                        , 100)
                    }
                }
            }
            _changeCheckState(t) {
                const e = this;
                let r = null;
                null === e.checked ? e.checked = !0 : (r = e.checked,
                e.checked = !e.checked),
                e._handleTextSelection(),
                e.$.fireEvent("change", {
                    value: e.checked,
                    oldValue: r,
                    changeType: t
                }),
                e.checked ? e.$.fireEvent("checkValue", {
                    changeType: t
                }) : e.$.fireEvent("uncheckValue", {
                    changeType: t
                }),
                e._updateGroupValue(),
                e._setAriaState()
            }
            _handleTextSelection() {
                const t = this;
                t.$.addClass("smart-unselectable"),
                t.timer && clearTimeout(t.timer),
                t.timer = setTimeout(()=>t.$.removeClass("smart-unselectable"), 500)
            }
            propertyChangedHandler(t, e, r) {
                super.propertyChangedHandler(t, e, r);
                const n = this;
                if ("checked" === t)
                    return n.$.fireEvent("change", {
                        value: r,
                        oldValue: e,
                        changeType: "api"
                    }),
                    void n._setAriaState();
                switch (t) {
                case "trueTemplate":
                    n._handleTemplate(!0);
                    break;
                case "falseTemplate":
                    n._handleTemplate(!1);
                    break;
                case "indeterminateTemplate":
                    n._handleTemplate()
                }
            }
            _htmlBindOnInitialization() {
                this._bindContentProperty("trueContent", "smart-true-content"),
                this._bindContentProperty("falseContent", "smart-false-content"),
                this._bindContentProperty("indeterminateContent", "smart-indeterminate-content")
            }
            _bindContentProperty(t, e) {
                const r = this;
                if (!r.$[t + "Container"])
                    return;
                let n = document.createElement("div");
                n.innerHTML = r.innerHTML;
                let o, a = n.getElementsByClassName(e);
                if (a.length > 0)
                    for (let t = 0; t < a.length; t++)
                        o = a[t];
                "" === r[t] && (r[t] = void 0 === o ? "" : o.outerHTML),
                r.$[t + "Container"].innerHTML = r[t]
            }
            _updateContentProperties() {
                const t = this;
                function e(e) {
                    t.$[e + "Container"] && (t[e] = t.$[e + "Container"].innerHTML)
                }
                e("trueContent"),
                e("falseContent"),
                e("indeterminateContent")
            }
            _updateHidenInputValue() {
                const t = this;
                if (!t.$.hiddenInput)
                    return;
                let e;
                e = null === t.checked ? "null" : !1 === t.checked ? "off" : t.value || "on",
                t.$.hiddenInput.setAttribute("value", e)
            }
            _updateHidenInputName() {
                if (!this.$.hiddenInput)
                    return;
                let t = !1 === this.checked ? "" : this.name || "";
                this.$.hiddenInput.setAttribute("name", t)
            }
            _updateHidenInputNameAndValue() {
                this._updateHidenInputName(),
                this._updateHidenInputValue()
            }
            _handleTemplate(t, e) {
                const r = this;
                let n, o, a;
                if (!0 === t ? (n = r.trueTemplate,
                o = r.$.trueContentContainer,
                a = r.trueContent) : !1 === t ? (n = r.falseTemplate,
                o = r.$.falseContentContainer,
                a = r.falseContent) : (n = r.indeterminateTemplate,
                o = r.$.indeterminateContentContainer,
                a = r.indeterminateContent),
                e && (o.innerHTML = a || ""),
                null === n || !n)
                    return;
                if ("function" == typeof n)
                    return void n(o, {
                        value: a
                    });
                if (!("content"in document.createElement("template")))
                    return void r.error(r.localize("htmlTemplateNotSuported", {
                        elementType: r.nodeName.toLowerCase()
                    }));
                if (n = document.getElementById(n),
                null === n || !("content"in n))
                    return void r.error(r.localize("invalidTemplate", {
                        elementType: r.nodeName.toLowerCase(),
                        property: "template"
                    }));
                const i = n.content
                  , s = i.childNodes.length
                  , d = /{{\w+}}/g;
                let l, m = [];
                for (let t = 0; t < s; t++)
                    for (l = d.exec(i.childNodes[t].innerHTML); l; )
                        m.push({
                            childNodeIndex: t,
                            bindingString: l[0]
                        }),
                        l = d.exec(i.childNodes[t].innerHTML);
                const c = m.length;
                let u, p, h = document.importNode(n.content, !0);
                for (let t = 0; t < c; t++) {
                    u = h.childNodes[m[t].childNodeIndex],
                    p = m.length;
                    for (let e = 0; e < p; e++)
                        u.innerHTML = u.innerHTML.replace(m[t].bindingString, a)
                }
                o.innerHTML = "";
                for (let t = 0; t < h.childNodes.length; t++)
                    h.childNodes[t].outerHTML && (o.innerHTML += h.childNodes[t].outerHTML)
            }
        }
        )
    }
});
