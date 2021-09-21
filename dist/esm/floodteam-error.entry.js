import { r as registerInstance, h } from './index-2bcfd230.js';

const errorCss = "ion-item{font-family:var(\r\n    --floodteam-error-font-family,\r\n    var(--theme-font-primary, Arial, Helvetica, sans-serif)\r\n  );--item-border-bottom:none;--item-content-padding:0;position:relative}ion-icon{height:20px;width:20px;display:inline-block}ion-label{padding-left:5px;font-size:14px;color:var(--ion-color-danger, red) !important}";

const Error = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        return (h("ion-item", { role: "alert", lines: "none" }, h("ion-icon", { name: this.iconName, color: this.color, slot: "start" }), h("ion-label", { color: this.color, class: "ion-text-wrap" }, this.message, h("slot", null))));
    }
};
Error.style = errorCss;

export { Error as floodteam_error };
