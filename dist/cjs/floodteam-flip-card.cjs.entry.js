'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-6c3aefc5.js');

const flipCardCss = "floodteam-flip-card{font-family:var(\r\n    --floodteam-flip-card-font-family,\r\n    var(--theme-font-primary, Arial, Helvetica, sans-serif)\r\n  )}floodteam-flip-card .flip-card{background-color:transparent;perspective:1000px;display:block;margin:0 auto}floodteam-flip-card .flip-card-inner{position:relative;width:100%;height:100%;text-align:center;transition:all 0.8s;transform-style:preserve-3d;box-shadow:5px 5px 8px #888}floodteam-flip-card .badge-top-left{background-color:rgba(0, 0, 0, 0.6);color:#fff;position:absolute;top:0;left:0;padding:5px 10px;border-radius:0 0 5px 0;font-size:12px;text-transform:uppercase;z-index:10}floodteam-flip-card .flip-card.flipped .flip-card-inner{transform:rotateY(180deg);box-shadow:-5px 5px 8px #888}floodteam-flip-card .flip-card-front,floodteam-flip-card .flip-card-back{position:absolute;width:100%;height:100%;backface-visibility:hidden;background-size:cover;background-position:center}floodteam-flip-card .flip-card-front{background-color:#bbb}floodteam-flip-card .flip-card-back{background-color:#bbb;transform:rotateY(180deg)}";

const FlipCard = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.floodteamFlip = index.createEvent(this, "floodteamFlip", 7);
        this.flipped = false;
        this.hideRefresh = false;
        this.isFlipped = false;
    }
    async flip(event) {
        if (event) {
            event.preventDefault();
            event.stopPropagation();
        }
        this.flipped = !this.flipped;
        this.floodteamFlip.emit({
            flipped: this.flipped
        });
    }
    onSwipeLeft(event) {
        if (event.target &&
            event.target.className &&
            event.target.className.indexOf("flip-card") >= 0) {
            this.flip();
        }
    }
    onSwipeRight(event) {
        if (event.target &&
            event.target.className &&
            event.target.className.indexOf("flip-card") >= 0) {
            this.flip();
        }
    }
    render() {
        return (index.h("div", { class: this.flipped ? "flip-card flipped" : "flip-card", "data-swipe-threshold": "10" }, index.h("slot", { name: "before" }), index.h("div", { class: "flip-card-inner" }, index.h("div", { class: "flip-card-front", style: this.frontImage
                ? { backgroundImage: `url('${this.frontImage}')` }
                : null }, index.h("slot", { name: "front" })), index.h("div", { class: "flip-card-back", style: this.backImage
                ? { backgroundImage: `url('${this.backImage}')` }
                : null }, index.h("slot", { name: "back" }))), !this.hideRefresh && (index.h("span", { class: "badge-top-left", onClick: event => this.flip(event) }, index.h("ion-icon", { name: "refresh" }))), index.h("slot", { name: "after" })));
    }
    get flipCardEl() { return index.getElement(this); }
};
FlipCard.style = flipCardCss;

exports.floodteam_flip_card = FlipCard;
