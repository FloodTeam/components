'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-6c3aefc5.js');

const errorCss = "ion-item{font-family:var(\r\n    --floodteam-error-font-family,\r\n    var(--theme-font-primary, Arial, Helvetica, sans-serif)\r\n  );--item-border-bottom:none;--item-content-padding:0;position:relative}ion-icon{height:20px;width:20px;display:inline-block}ion-label{padding-left:5px;font-size:14px;color:var(--ion-color-danger, red) !important}";

const Error = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /**
         * The color of the component
         */
        this.color = "danger";
        /**
         * The icon to use
         */
        this.iconName = "alert-circle-outline";
    }
    render() {
        return (index.h("ion-item", { role: "alert", lines: "none" }, index.h("ion-icon", { name: this.iconName, color: this.color, slot: "start" }), index.h("ion-label", { color: this.color, class: "ion-text-wrap" }, this.message, index.h("slot", null))));
    }
};
Error.style = errorCss;

exports.floodteam_error = Error;
