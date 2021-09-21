'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-6c3aefc5.js');

const tabCss = "floodteam-tab .tab-wrapper{opacity:0;pointer-events:none;height:0;display:block;transition:0.3s ease opacity;overflow:hidden}floodteam-tab .tab-wrapper.tab-selected{opacity:1;pointer-events:all;height:auto;overflow:auto}";

const TmgTab = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.selected = false;
    }
    render() {
        return (index.h("div", { class: {
                "tab-selected": this.selected,
                "tab-deselected": !this.selected,
                "tab-wrapper": true,
            } }, index.h("slot", null)));
    }
};
TmgTab.style = tabCss;

exports.floodteam_tab = TmgTab;
