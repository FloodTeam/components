import { Component, Event, Prop, State, h, Build, } from "@stencil/core";
export class Tabs {
  constructor() {
    this.tabs = [];
  }
  componentDidLoad() {
    if (Build.isBrowser) {
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
    return (h("div", { ref: (el) => (this.tabsWrapperEl = el), class: "tabs-wrapper" },
      h("ion-grid", { class: "tabs-bar" },
        h("ion-row", null, this.tabs.map((tab) => (h("ion-col", { class: this.selected === tab.name ? "selected" : "", onClick: () => this.tabClick(tab) }, tab.name))))),
      h("div", { class: "tabs-content" },
        h("slot", null))));
  }
  static get is() { return "floodteam-tabs"; }
  static get originalStyleUrls() { return {
    "$": ["tabs.css"]
  }; }
  static get styleUrls() { return {
    "$": ["tabs.css"]
  }; }
  static get properties() { return {
    "hash": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "hash",
      "reflect": false
    },
    "selected": {
      "type": "string",
      "mutable": true,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "selected",
      "reflect": false
    }
  }; }
  static get states() { return {
    "tabs": {}
  }; }
  static get events() { return [{
      "method": "floodteamTabChange",
      "name": "floodteamTabChange",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
}
