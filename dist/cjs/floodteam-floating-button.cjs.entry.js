'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-6c3aefc5.js');

const floatingButtonCss = "floodteam-floating-button ion-badge{margin:0 auto;padding:3px;display:block;font-size:12px;position:absolute;top:3px;right:3px;z-index:9999}floodteam-floating-button ion-fab>ion-fab-button{font-size:40px;position:relative}floodteam-floating-button ion-fab>ion-fab-button ion-icon{margin:0 auto;display:block;height:30px;width:30px;font-size:30px}floodteam-floating-button ion-fab-list{width:200px;right:0px}floodteam-floating-button ion-fab-list .button-wrapper{width:100%;position:relative}floodteam-floating-button ion-fab-list .fab-label{font-family:var(--ion-font-family);color:var(--ion-text-color);height:35px;white-space:nowrap;line-height:35px;padding:0 10px;border-radius:10px;background:rgba(var(--ion-color-base-rgb), 0.8);position:absolute;top:11px;right:65px}floodteam-floating-button ion-fab-list ion-button{height:50px;width:50px;float:right}floodteam-floating-button ion-fab-list ion-button ion-icon{position:absolute;height:25px;width:25px}";

const FloatingButton = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /**
         * The list of buttons to show when the material button is clicked
         */
        this.buttonList = [];
        /**
         * The icon to use on the material button when it's closed
         */
        this.openIcon = "ellipsis-vertical";
        /**
         * The horizontal position of the button
         */
        this.horizontal = "end";
        /**
         * The vertical position of the button
         */
        this.vertical = "center";
        /**
         * The side the list should display
         */
        this.listSide = "bottom";
        /**
         * The color of the badge to display
         */
        this.badgeColor = "success";
    }
    outterFabClick(event) {
        if (this.fabEl &&
            this.fabEl.activated &&
            !event.target.closest("ion-fab")) {
            this.fabEl.close();
        }
    }
    componentDidLoad() {
        {
            const fabIconEl = this.fabEl
                .querySelector("ion-fab-button")
                .shadowRoot.querySelector("ion-icon");
            fabIconEl.style.setProperty("font-size", "40px");
        }
    }
    render() {
        return (index.h("div", { class: "ion-fab-wrapper" }, index.h("ion-fab", { horizontal: this.horizontal, vertical: this.vertical, ref: (el) => (this.fabEl = el) }, index.h("ion-fab-button", { color: this.color }, index.h("ion-icon", { name: this.openIcon })), index.h("ion-fab-list", { side: this.listSide }, this.buttonList.map((mb) => (index.h("div", { class: "button-wrapper" }, index.h("span", { class: "fab-label" }, mb.label), index.h("ion-button", { href: mb.href, color: mb.color, onClick: (event) => mb.onClick && typeof mb.onClick === "function"
                ? mb.onClick(event)
                : null, shape: "round" }, index.h("ion-icon", { name: mb.icon.indexOf("/") === -1 ? mb.icon : null, src: mb.icon.indexOf("/") === -1 ? null : mb.icon }))))))), this.badge && (index.h("ion-badge", { color: this.badgeColor, innerHTML: this.badge }))));
    }
};
FloatingButton.style = floatingButtonCss;

exports.floodteam_floating_button = FloatingButton;
