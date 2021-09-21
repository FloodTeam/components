import { r as registerInstance, c as createEvent, h } from './index-2bcfd230.js';

const feedCardCss = "floodteam-feed-card ion-card{position:relative;border-radius:3px;margin:15px 0;background-size:cover;background-position:center;background-repeat:no-repeat;min-height:100px}floodteam-feed-card ion-card ion-item.has-thumbnail{--padding-start:0}floodteam-feed-card ion-thumbnail{position:relative;height:100px;width:130px;margin-top:0;-webkit-mask-image:linear-gradient(to top, transparent 0%, black 20%);mask-image:linear-gradient(to top, transparent 0%, black 20%)}floodteam-feed-card ion-thumbnail:after{position:absolute;top:0;left:0;right:0;bottom:0;content:\" \";background:var(--ion-background-color);display:block;height:100%;width:100%;-webkit-mask-image:linear-gradient(to right, transparent 80%, black 100%);mask-image:linear-gradient(to right, transparent 80%, black 100%);z-index:1}floodteam-feed-card ion-card h3{display:block;padding:0;margin:0;font-size:16px;font-weight:bold;font-family:var(--theme-font-primary);text-transform:uppercase;color:var(--ion-text-color);letter-spacing:1px}floodteam-feed-card ion-card h5{font-size:20px;line-height:30px;display:block;position:relative;margin:4px 0 0 0;padding-right:20px;font-family:var(--theme-font-primary);color:var(--theme-grey);font-weight:500;letter-spacing:1px}floodteam-feed-card ion-card .tag-list ion-chip{color:var(--ion-text-color);opacity:0.8;transition:opacity ease 0.3s;font-size:10px;padding-left:7px !important;padding-right:7px !important;height:24px;text-transform:capitalize;margin:3px 5px 3px 0}floodteam-feed-card ion-card .tag-list ion-chip:hover{opacity:1}floodteam-feed-card ion-card p{font-size:18px;display:block;position:relative;margin:0;font-family:\"Bitter\", serif;color:var(--theme-light-grey);font-weight:500;letter-spacing:1px}floodteam-feed-card ion-buttons{display:flex !important;padding:15px !important}floodteam-feed-card ion-buttons ion-button{display:block !important;margin-left:auto !important}";

const FeedCard = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.floodteamFeedAction = createEvent(this, "floodteamFeedAction", 7);
    }
    render() {
        return (h("ion-card", { style: this.backgroundImage
                ? { backgroundImage: `url('${this.backgroundImage}')` }
                : null }, h("ion-item", { class: {
                "has-thumbnail": !!this.image
            } }, this.image && (h("ion-thumbnail", { slot: "start" }, h("img", { src: this.image }))), h("ion-label", { style: !this.image ? { paddingLeft: "0px" } : null }, h("h3", null, this.heading), this.subtext && h("h5", null, this.subtext), h("div", { class: "tag-list" }, this.tags && this.tags.map(tag => h("ion-chip", null, tag))), h("p", null, this.details))), h("ion-buttons", null, this.actionButtons &&
            this.actionButtons.map(actionButton => (h("ion-button", { size: actionButton.size ? actionButton.size : "large", fill: actionButton.fill ? actionButton.fill : "solid", color: actionButton.color ? actionButton.color : "success", href: actionButton.href ? actionButton.href : null, onClick: event => this.floodteamFeedAction.emit({
                    event,
                    name: actionButton.action
                }) }, actionButton.iconStart && (h("ion-icon", { name: actionButton.iconStart, slot: "start" })), actionButton.text, actionButton.iconEnd && (h("ion-icon", { name: actionButton.iconEnd, slot: "end" }))))))));
    }
};
FeedCard.style = feedCardCss;

export { FeedCard as floodteam_feed_card };
