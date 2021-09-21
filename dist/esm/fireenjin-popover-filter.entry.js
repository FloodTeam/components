import { r as registerInstance, h } from './index-2bcfd230.js';

const popoverFilterCss = ".fireenjin-popover-filter-wrapper{--min-width:300px}";

const PopoverFilter = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    var _a;
    return (h("ion-content", { style: {
        "--background": "var(--ion-color-base)",
      } }, h("fireenjin-form", { disableLoader: true, name: "filter" }, this.label && h("ion-item-divider", null, this.label), ((_a = this.controls) === null || _a === void 0 ? void 0 : _a.length)
      ? this.controls.map((control) => h("fireenjin-select", Object.assign({}, control)))
      : null)));
  }
};
PopoverFilter.style = popoverFilterCss;

export { PopoverFilter as fireenjin_popover_filter };
