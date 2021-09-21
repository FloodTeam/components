'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-6c3aefc5.js');

const toggleCss = "floodteam-toggle{display:block;width:100%}floodteam-toggle .invalid{--border-color:var(--ion-color-danger) !important}floodteam-toggle .invalid ion-label{color:var(--ion-color-danger) !important}floodteam-toggle .valid{--border-color:var(--ion-color-success) !important}floodteam-toggle .valid ion-label{color:var(--ion-color-success) !important}floodteam-toggle ion-label{font-size:16px !important;font-weight:bold !important;display:block;background:transparent;text-align:left;padding:0 0 8px 0;font-family:var(--theme-font-primary)}floodteam-toggle ion-item{position:relative;box-shadow:none !important;--background:var(--background);font-size:inherit;text-align:inherit;--min-height:var(--item-min-height, 48px) !important}floodteam-toggle ion-item ion-icon[slot=\"start\"]{margin:auto 10px 10px auto;fill:var(--ion-text-color)}floodteam-toggle ion-item.item-has-focus{--border-width:0;border-color:var(--ion-color-primary)}floodteam-toggle ion-item.item-has-focus ion-label{color:var(--ion-color-primary) !important}floodteam-toggle .input-icon ion-icon{display:block;position:absolute;right:0px;top:30px;height:35px;width:35px;color:var(--ion-color-dark)}floodteam-toggle .input-icon ion-icon:hover{cursor:pointer;color:var(--ion-color-primary)}";

const Toggle = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    componentDidLoad() {
    }
    render() {
        return (index.h("ion-item", null, this.label && index.h("ion-label", null, this.label), index.h("ion-toggle", { color: "success", name: this.name, checked: !!this.value })));
    }
};
Toggle.style = toggleCss;

exports.floodteam_toggle = Toggle;
