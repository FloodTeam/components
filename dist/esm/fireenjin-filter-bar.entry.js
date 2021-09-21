import { r as registerInstance, B as Build, h, H as Host } from './index-2bcfd230.js';
import { f as popoverController } from './overlays-f050c73e.js';
import './ionic-global-338b6e55.js';
import './hardware-back-button-508e48cf.js';
import './helpers-c13e5d7e.js';

const filterBarCss = "fireenjin-filter-bar ion-col.mode-toggle{max-width:60px;padding-top:12px}fireenjin-filter-bar ion-col.filter-control ion-card{padding:12px;margin-top:8px;position:relative;padding-left:35px;cursor:pointer}fireenjin-filter-bar ion-col.filter-control ion-card.has-value{padding:5px 30px}fireenjin-filter-bar ion-col.filter-control .start-icon{position:absolute;top:10px;left:10px;height:20px;width:20px}fireenjin-filter-bar ion-col.filter-control .end-icon{position:absolute;top:15px;right:10px;opacity:0.33}";

const FilterBar = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.modeToggle = false;
    this.displayMode = "grid";
    this.disableSearch = false;
    this.selectOptions = {};
    this.currentFilters = {};
  }
  onPaginationElChange() {
    if (!this.paginationEl)
      return;
    this.displayMode = this.paginationEl.display ? this.paginationEl.display : this.displayMode;
  }
  onSuccess(event) {
    var _a;
    if (((_a = event === null || event === void 0 ? void 0 : event.detail) === null || _a === void 0 ? void 0 : _a.name) !== "select")
      return;
    this.selectOptions[event.detail.target.name] = event.detail.data.results;
  }
  onReset() {
    if (!this.filterPopoverEl)
      return;
    this.filterPopoverEl.dismiss();
  }
  async onSubmit(event) {
    var _a, _b, _c, _d;
    if (!this.filterPopoverEl || ((_a = event === null || event === void 0 ? void 0 : event.detail) === null || _a === void 0 ? void 0 : _a.name) !== "filter")
      return;
    if (((_b = event.detail) === null || _b === void 0 ? void 0 : _b.data) && Object.keys(event.detail.data).length) {
      for (const [i, control] of this.filter.controls.entries()) {
        if (!control.name || !((_c = event.detail) === null || _c === void 0 ? void 0 : _c.data[control.name]))
          continue;
        const controlData = Object.assign(Object.assign({}, control), { value: event.detail.data[control.name] });
        this.filter.controls[i] = controlData;
        this.currentFilters[control.name] = controlData;
        this.filter = Object.assign({}, this.filter);
      }
    }
    this.filterPopoverEl.dismiss();
    if (!this.paginationEl)
      return;
    await this.paginationEl.clearResults();
    this.paginationEl.getResults({
      paramData: ((_d = event === null || event === void 0 ? void 0 : event.detail) === null || _d === void 0 ? void 0 : _d.data) ? event.detail.data : {},
    });
  }
  onChange(event) {
    var _a, _b;
    if (((_a = event === null || event === void 0 ? void 0 : event.target) === null || _a === void 0 ? void 0 : _a.name) === "orderBy") {
      this.paginationEl.orderBy = event.detail.value;
    }
    if (((_b = event === null || event === void 0 ? void 0 : event.target) === null || _b === void 0 ? void 0 : _b.tagName) === "ION-SEARCHBAR") {
      this.paginationEl.query = event.detail.value ? event.detail.value : "";
    }
  }
  async createFilterPopover(event) {
    return this.filterPopoverEl = await popoverController.create({
      component: "fireenjin-popover-filter",
      componentProps: this.filter,
      event: event ? event : null,
      cssClass: "fireenjin-popover-filter-wrapper",
    });
  }
  async togglePaginationDisplay() {
    this.displayMode = this.displayMode === "grid" ? "list" : "grid";
    this.paginationEl.display = this.displayMode;
  }
  async openFilterPopover(event) {
    await this.createFilterPopover(event);
    this.filterPopoverEl.present();
  }
  async clearFilter(event, clearingControl) {
    event.preventDefault();
    event.stopPropagation();
    for (const [i, control] of this.filter.controls.entries()) {
      if (!control.name ||
        !control.value ||
        control.name !== clearingControl.name)
        continue;
      this.filter.controls[i] = Object.assign(Object.assign({}, control), { value: null });
      delete this.currentFilters[clearingControl.name];
      this.filter = Object.assign({}, this.filter);
      await this.paginationEl.clearParamData(control.name);
    }
    await this.paginationEl.clearResults();
    await this.paginationEl.getResults(await new Promise((resolve, reject) => {
      try {
        const paramData = {};
        for (const filter of Object.values(this.currentFilters)) {
          paramData[filter.name] = filter.value;
        }
        console.log(paramData);
        resolve(paramData);
      }
      catch (err) {
        console.log(err);
        reject({});
      }
    }));
  }
  async componentDidLoad() {
    if (this.filter && Build.isBrowser) {
      await this.createFilterPopover();
    }
  }
  render() {
    var _a, _b, _c, _d, _e, _f, _g;
    return (h(Host, null, h("slot", { name: "before" }), h("ion-grid", null, h("ion-row", null, this.modeToggle && (h("ion-col", { class: "mode-toggle" }, h("ion-button", { fill: "clear", color: "primary", onClick: () => this.togglePaginationDisplay() }, h("ion-icon", { slot: "icon-only", name: this.displayMode === "grid" ? "list" : "grid" })))), !this.disableSearch && h("ion-col", null, h("ion-searchbar", null)), ((_b = (_a = this.filter) === null || _a === void 0 ? void 0 : _a.controls) === null || _b === void 0 ? void 0 : _b.length) && (h("ion-col", { class: "filter-control" }, h("ion-card", { onClick: (event) => this.openFilterPopover(event), class: {
        "has-value": this.currentFilters &&
          Object.keys(this.currentFilters).length > 0,
      } }, h("ion-icon", { name: "funnel", class: "start-icon" }), ((_d = (_c = this.filter) === null || _c === void 0 ? void 0 : _c.controls) === null || _d === void 0 ? void 0 : _d.length)
      ? this.filter.controls
        .filter((control) => {
        var _a;
        return !!control.value &&
          (((_a = control.options) === null || _a === void 0 ? void 0 : _a.length) ||
            this.selectOptions[control.name]);
      })
        .map((control) => {
        var _a;
        return (h("ion-chip", { outline: true, color: "primary", style: {
            marginTop: "0",
            marginBottom: "0",
          } }, control.icon && h("ion-icon", { name: control.icon }), h("ion-label", null, ((_a = control.options) === null || _a === void 0 ? void 0 : _a.length)
          ? control.options
            .filter((option) => control.value.map ? control.value.includes(option.value) : option.value === control.value)
            .map((option) => option.label).join(", ")
          : this.selectOptions[control.name]
            ? this.selectOptions[control.name]
              .filter((result) => control.value.map ? control.value.includes(result.id) : result.id === control.value)
              .map((result) => result.name).join(", ")
            : null), h("ion-icon", { name: "close-circle", onClick: (event) => this.clearFilter(event, control) })));
      })
      : null, ((_e = this.filter) === null || _e === void 0 ? void 0 : _e.label) &&
      !(this.currentFilters &&
        Object.keys(this.currentFilters).length > 0)
      ? this.filter.label
      : "", h("ion-icon", { name: "caret-down", class: "end-icon" })))), ((_g = (_f = this.sort) === null || _f === void 0 ? void 0 : _f.options) === null || _g === void 0 ? void 0 : _g.length) && (h("ion-col", null, h("ion-card", null, h("ion-icon", { style: {
        height: "25px",
        width: "25px",
        padding: "5px 0px 0px 5px",
      }, class: "ion-float-left", name: "swap-vertical" }), h("ion-select", { name: "orderBy", value: this.sort.value, okText: "Okay", cancelText: "Dismiss", interfaceOptions: {
        header: this.sort.header,
        subHeader: this.sort.subHeader,
        message: this.sort.message,
      } }, this.sort.options.map((option) => (h("ion-select-option", { value: option.value }, option.label))))))))), h("slot", { name: "after" })));
  }
  static get watchers() { return {
    "paginationEl": ["onPaginationElChange"]
  }; }
};
FilterBar.style = filterBarCss;

export { FilterBar as fireenjin_filter_bar };
