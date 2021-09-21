'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-6c3aefc5.js');

const popoverFilterCss = ".fireenjin-popover-filter-wrapper{--min-width:300px}";

const PopoverFilter = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    var _a;
    return (index.h("ion-content", { style: {
        "--background": "var(--ion-color-base)",
      } }, index.h("fireenjin-form", { disableLoader: true, name: "filter" }, this.label && index.h("ion-item-divider", null, this.label), ((_a = this.controls) === null || _a === void 0 ? void 0 : _a.length)
      ? this.controls.map((control) => index.h("fireenjin-select", Object.assign({}, control)))
      : null)));
  }
};
PopoverFilter.style = popoverFilterCss;

exports.fireenjin_popover_filter = PopoverFilter;
