'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-6c3aefc5.js');

const tabsCss = "floodteam-tabs .tabs-bar{display:block;background-color:var(--theme-blue-light-grey);text-align:center;font-family:var(--ion-font-family);font-weight:bold;color:var(--theme-dark);text-transform:capitalize;font-size:18px;padding:0}floodteam-tabs .tabs-bar ion-col{padding:15px 0}floodteam-tabs .tabs-bar ion-col:hover{cursor:pointer;color:var(--theme-blue)}floodteam-tabs .tabs-bar ion-col.selected{background-color:#fff;color:var(--theme-blue)}";

const Tabs = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.floodteamTabChange = index.createEvent(this, "floodteamTabChange", 7);
        this.tabs = [];
    }
    componentDidLoad() {
        {
            this.tabs = this.setSelectedTab();
            if (this.hash) {
                window.onhashchange = () => {
                    const tabs = this.tabsWrapperEl.querySelectorAll("floodteam-tab");
                    this.tabs = this.setSelectedTab();
                    for (let i = 0; i < tabs.length; ++i) {
                        tabs[i].selected = this.selected === tabs[i].tab;
                    }
                };
            }
        }
    }
    setSelectedTab() {
        const tabs = this.tabsWrapperEl.querySelectorAll("floodteam-tab");
        const newTabs = [];
        for (let i = 0; i < tabs.length; ++i) {
            if (tabs[i].selected && (window.location.hash === "" || !this.hash)) {
                this.selected = tabs[i].tab;
            }
            else if (this.hash &&
                window.location.hash === "#" + tabs[i].tab.toLowerCase()) {
                this.selected = tabs[i].tab;
            }
            newTabs.push({ name: tabs[i].tab });
        }
        return newTabs;
    }
    tabClick(tab) {
        const tabs = this.tabsWrapperEl.querySelectorAll("floodteam-tab");
        this.selected = tab.name;
        for (let i = 0; i < tabs.length; ++i) {
            tabs[i].selected = this.selected === tabs[i].tab;
        }
        if (this.hash) {
            window.location.hash = `#${tab.name}`;
        }
        this.floodteamTabChange.emit({ tab });
    }
    render() {
        return (index.h("div", { ref: (el) => (this.tabsWrapperEl = el), class: "tabs-wrapper" }, index.h("ion-grid", { class: "tabs-bar" }, index.h("ion-row", null, this.tabs.map((tab) => (index.h("ion-col", { class: this.selected === tab.name ? "selected" : "", onClick: () => this.tabClick(tab) }, tab.name))))), index.h("div", { class: "tabs-content" }, index.h("slot", null))));
    }
};
Tabs.style = tabsCss;

exports.floodteam_tabs = Tabs;
