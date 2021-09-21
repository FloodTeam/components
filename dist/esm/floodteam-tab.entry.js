import { r as registerInstance, h } from './index-2bcfd230.js';

const tabCss = "floodteam-tab .tab-wrapper{opacity:0;pointer-events:none;height:0;display:block;transition:0.3s ease opacity;overflow:hidden}floodteam-tab .tab-wrapper.tab-selected{opacity:1;pointer-events:all;height:auto;overflow:auto}";

const TmgTab = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.selected = false;
    }
    render() {
        return (h("div", { class: {
                "tab-selected": this.selected,
                "tab-deselected": !this.selected,
                "tab-wrapper": true,
            } }, h("slot", null)));
    }
};
TmgTab.style = tabCss;

export { TmgTab as floodteam_tab };
