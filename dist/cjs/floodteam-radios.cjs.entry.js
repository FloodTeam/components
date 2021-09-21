'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-6c3aefc5.js');

const radiosCss = "floodteam-radios .invalid .input-wrapper{border-bottom-color:var(--theme-red) !important}floodteam-radios .invalid ion-label{color:var(--theme-red) !important}floodteam-radios ion-label{color:var(--theme-dark-grey);font-size:12px;font-weight:bold;font-family:arial;display:block;background:transparent;text-align:left;padding:0 0 8px 0;font-family:var(--ion-font-family)}floodteam-radios ion-item{border-bottom:none !important;box-shadow:none !important}floodteam-radios ion-input{display:block;height:0;width:0;opacity:0;pointer-events:none}floodteam-radios ion-item ion-label{color:var(--theme-dark-grey) !important}floodteam-radios ion-item input{color:var(--theme-dark);border:none;box-shadow:none !important;font-family:var(--ion-font-family);outline:none !important}floodteam-radios ion-item.item-input-has-focus ion-label{color:var(--theme-blue)}floodteam-radios ul{display:block;width:100%;list-style:none;padding:15px 0 5px 0;margin:0;text-align:left;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}floodteam-radios ul li{display:inline-block;margin-right:15px;font-size:14px;line-height:30px;text-align:left;color:var(--theme-dark);position:relative;height:30px;text-indent:30px}floodteam-radios ul li ion-icon{position:absolute;left:0px;top:0;color:var(--theme-blue);height:28px;width:28px}floodteam-radios ul li ion-icon svg path{fill:var(--theme-blue)}floodteam-radios ul li .empty-circle{position:absolute;top:2px;left:0px;height:23px;width:23px;border-radius:100%;border:2px solid #999}floodteam-radios ul li:hover{cursor:pointer;color:var(--theme-blue)}floodteam-radios ul li:hover .empty-circle{border-color:var(--theme-blue)}";

const Radios = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.ionChange = index.createEvent(this, "ionChange", 7);
        this.lines = "full";
        this.selected = 0;
    }
    onSelectedChange() {
        setTimeout(() => {
            this.setSelectedIndex();
        }, 50);
    }
    onValueChange() {
        setTimeout(() => {
            this.setSelectedValue();
        }, 50);
    }
    async getOptionIndex(str) {
        if (!this.options || !this.options.length)
            return false;
        let selectedIndex = 0;
        let i = 0;
        for (const option of this.options) {
            if (option.value === str) {
                selectedIndex = i;
                break;
            }
            i = i + 1;
        }
        this.selected = this.selectedIndex;
        return selectedIndex;
    }
    setSelectedValue() {
        let index = 0;
        for (const option of this.options) {
            if (option.value === this.value) {
                this.selected = index;
            }
            index = index + 1;
        }
        this.ionChange.emit({
            value: this.value,
            name: this.name,
        });
    }
    setSelectedIndex() {
        this.selectedIndex = this.selected;
        this.value = this.options[this.selected].value;
        this.ionChange.emit({
            value: this.value,
            name: this.name,
        });
    }
    componentWillLoad() {
        this.setSelectedIndex();
    }
    selectOption(index, option) {
        this.value = typeof option.value !== "undefined" ? option.value : null;
        this.selectedIndex = index;
        if (!this.value) {
            setTimeout(() => {
                this.setSelectedValue();
            }, 50);
        }
    }
    render() {
        return (index.h("ion-item", { lines: this.lines }, index.h("ion-label", { position: "stacked" }, this.label), index.h("ul", null, this.options.map((radio, index$1) => (index.h("li", { onClick: () => this.selectOption(index$1, radio) }, radio.name, index$1 === this.selectedIndex ? (index.h("ion-icon", { name: "checkmark-circle" })) : (index.h("div", { class: "empty-circle" }))))))));
    }
    static get watchers() {
        return {
            "selected": ["onSelectedChange"],
            "value": ["onValueChange"]
        };
    }
};
Radios.style = radiosCss;

exports.floodteam_radios = Radios;
