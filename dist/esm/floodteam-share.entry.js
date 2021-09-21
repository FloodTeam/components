import { r as registerInstance, c as createEvent, h } from './index-2bcfd230.js';
import { C as ClipboardJS } from './clipboard-6bd0996f.js';
import './_commonjsHelpers-5ec8f9b7.js';

const shareCss = "floodteam-share ion-item:hover{cursor:pointer}floodteam-share .share-twitter ion-icon{color:#1da1f3}floodteam-share .share-twitter ion-icon svg{fill:#1da1f3}floodteam-share .share-twitter:hover .item{color:#1da1f3}floodteam-share .share-facebook ion-icon{color:#3b5998}floodteam-share .share-facebook ion-icon svg{fill:#3b5998}floodteam-share .share-facebook:hover .item{color:#3b5998}floodteam-share .share-google ion-icon{color:#dd4b38}floodteam-share .share-google ion-icon svg{fill:#dd4b38}floodteam-share .share-google:hover .item{color:#dd4b38}";

const Share = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.floodteamShareClose = createEvent(this, "floodteamShareClose", 7);
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
            new ClipboardJS(this.copyItemEl);
        }
    }
    render() {
        var _a;
        return (h("ion-list", null, h("ion-item", { class: "share-twitter", onClick: (event) => this.openPopup(event, "twitter") }, h("ion-icon", { slot: "end", name: "logo-twitter" }), "Share on Twitter"), h("ion-item", { class: "share-facebook", onClick: (event) => this.openPopup(event, "facebook") }, h("ion-icon", { slot: "end", name: "logo-facebook" }), "Share on Facebook"), h("ion-item", { ref: (el) => (this.copyItemEl = el), class: "share-clipboard", "data-clipboard-text": (_a = this.options) === null || _a === void 0 ? void 0 : _a.url }, h("ion-icon", { slot: "end", name: "clipboard" }), "Copy to Clipboard")));
    }
};
Share.style = shareCss;

export { Share as floodteam_share };
