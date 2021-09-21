'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-6c3aefc5.js');
const clipboard = require('./clipboard-657b5a00.js');
require('./_commonjsHelpers-0c557e26.js');

const shareCss = "floodteam-share ion-item:hover{cursor:pointer}floodteam-share .share-twitter ion-icon{color:#1da1f3}floodteam-share .share-twitter ion-icon svg{fill:#1da1f3}floodteam-share .share-twitter:hover .item{color:#1da1f3}floodteam-share .share-facebook ion-icon{color:#3b5998}floodteam-share .share-facebook ion-icon svg{fill:#3b5998}floodteam-share .share-facebook:hover .item{color:#3b5998}floodteam-share .share-google ion-icon{color:#dd4b38}floodteam-share .share-google ion-icon svg{fill:#dd4b38}floodteam-share .share-google:hover .item{color:#dd4b38}";

const Share = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.floodteamShareClose = index.createEvent(this, "floodteamShareClose", 7);
        this.options = { url: null };
    }
    openPopup(event, type) {
        event.preventDefault();
        let popupUrl;
        if (type === "facebook") {
            const appId = "194800994302107";
            popupUrl = `https://www.facebook.com/dialog/share?app_id=${appId}&display=popup&href=${this.options.url}`;
        }
        else if (type === "google") {
            popupUrl = `https://plus.google.com/share?url=${this.options.url}`;
        }
        else if (type === "twitter") {
            popupUrl = `https://twitter.com/intent/tweet?url=${this.options.url}&text=${this.options.text}`;
        }
        else {
            return false;
        }
        this.floodteamShareClose.emit({ event, type });
        window.open(popupUrl, "Share Floodteam", type === "google" ? "height=600,width=400" : "height=400,width=600");
    }
    componentDidLoad() {
        {
            new clipboard.ClipboardJS(this.copyItemEl);
        }
    }
    render() {
        var _a;
        return (index.h("ion-list", null, index.h("ion-item", { class: "share-twitter", onClick: (event) => this.openPopup(event, "twitter") }, index.h("ion-icon", { slot: "end", name: "logo-twitter" }), "Share on Twitter"), index.h("ion-item", { class: "share-facebook", onClick: (event) => this.openPopup(event, "facebook") }, index.h("ion-icon", { slot: "end", name: "logo-facebook" }), "Share on Facebook"), index.h("ion-item", { ref: (el) => (this.copyItemEl = el), class: "share-clipboard", "data-clipboard-text": (_a = this.options) === null || _a === void 0 ? void 0 : _a.url }, index.h("ion-icon", { slot: "end", name: "clipboard" }), "Copy to Clipboard")));
    }
};
Share.style = shareCss;

exports.floodteam_share = Share;
