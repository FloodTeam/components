import { Component, Event, h, Host, Listen, Method, Prop, State, Watch, } from "@stencil/core";
export class SearchBar {
  constructor() {
    this.modeToggle = false;
    this.displayMode = "grid";
    this.disabled = false;
    this.showFilter = true;
    this.selectOptions = {};
    this.currentFilters = {};
  }
  onFilterChange() {
    this.updateCurrentFilters();
  }
  onSuccess(event) {
    var _a;
    if (((_a = event === null || event === void 0 ? void 0 : event.detail) === null || _a === void 0 ? void 0 : _a.name) !== "select")
      return;
    this.selectOptions[event.detail.target.name] = event.detail.data.results;
  }
  async onChange(event) {
    var _a, _b;
    if (((_a = event === null || event === void 0 ? void 0 : event.target) === null || _a === void 0 ? void 0 : _a.name) === "orderBy") {
      this.paginationEl.orderBy = event.detail.value;
    }
    if (((_b = event === null || event === void 0 ? void 0 : event.target) === null || _b === void 0 ? void 0 : _b.tagName) === "ION-SEARCHBAR") {
      await this.paginationEl.clearParamData("next");
      await this.paginationEl.clearParamData("back");
      await this.paginationEl.clearParamData("page");
      this.paginationEl.query = event.detail.value ? event.detail.value : "";
    }
  }
  async togglePaginationDisplay() {
    this.displayMode = this.displayMode === "grid" ? "list" : "grid";
    this.paginationEl.display = this.displayMode;
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
    await this.paginationEl.getResults(await new Promise(async (resolve, reject) => {
      try {
        const paramData = {};
        for (const filter of Object.values(this.currentFilters)) {
          paramData[filter.name] = filter.value;
        }
        let fetchData = { paramData };
        if (this.beforeGetResults &&
          typeof this.beforeGetResults === "function")
          fetchData = await this.beforeGetResults(fetchData);
        resolve(fetchData);
      }
      catch (err) {
        console.log(err);
        reject({});
      }
    }));
  }
  async updateCurrentFilters() {
    var _a;
    if (!((_a = this.filter) === null || _a === void 0 ? void 0 : _a.controls))
      return;
    for (const control of this.filter.controls) {
      if (!(control === null || control === void 0 ? void 0 : control.value))
        continue;
      this.currentFilters[control.name] = control;
      this.currentFilters = Object.assign({}, this.currentFilters);
    }
  }
  getControlLabel(control) {
    return (control === null || control === void 0 ? void 0 : control.value) ? Array.isArray(control.value) ? control.value.join(", ") : control.value : control.label;
  }
  componentDidLoad() {
    this.updateCurrentFilters();
  }
  render() {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    return (h(Host, null,
      h("div", { class: "search-bar-wrapper" },
        h("ion-searchbar", { disabled: this.disabled }),
        this.showFilter && ((_b = (_a = this.filter) === null || _a === void 0 ? void 0 : _a.controls) === null || _b === void 0 ? void 0 : _b.length) && h("div", { class: "filter-bar" }, ((_d = (_c = this.filter) === null || _c === void 0 ? void 0 : _c.controls) === null || _d === void 0 ? void 0 : _d.length) && ((_e = this.filter) === null || _e === void 0 ? void 0 : _e.controls.map(control => (h("ion-chip", { outline: !Object.keys(this.currentFilters).includes(control === null || control === void 0 ? void 0 : control.name), onClick: (event) => this.fireenjinTrigger.emit({
            event,
            trigger: "filter",
            name: control === null || control === void 0 ? void 0 : control.name,
            payload: {
              control
            }
          }) },
          (control === null || control === void 0 ? void 0 : control.icon) && h("ion-icon", { name: control.icon }),
          (control === null || control === void 0 ? void 0 : control.label) && h("ion-label", null, this.getControlLabel(control)),
          Object.keys(this.currentFilters).includes(control === null || control === void 0 ? void 0 : control.name) && h("ion-icon", { name: "close-circle", onClick: (event) => this.clearFilter(event, control) }))))))),
      ((_g = (_f = this.filter) === null || _f === void 0 ? void 0 : _f.controls) === null || _g === void 0 ? void 0 : _g.length) && h("ion-button", { onClick: () => this.showFilter = !this.showFilter, class: "filter-button", size: "small", fill: "clear", shape: "round", style: { color: "var(--ion-text-color)" } },
        h("ion-icon", { name: "funnel", slot: "icon-only" }),
        ((_h = Object.keys(this.currentFilters)) === null || _h === void 0 ? void 0 : _h.length) && h("ion-badge", { slot: "end" }, this.currentFilters ? Object.keys(this.currentFilters).length : 0))));
  }
  static get is() { return "floodteam-search-bar"; }
  static get originalStyleUrls() { return {
    "$": ["search-bar.css"]
  }; }
  static get styleUrls() { return {
    "$": ["search-bar.css"]
  }; }
  static get properties() { return {
    "sort": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "{\r\n    label?: string;\r\n    value?: string;\r\n    header?: string;\r\n    subHeader?: string;\r\n    message?: string;\r\n    options: {\r\n      label: string;\r\n      value: string;\r\n    }[];\r\n  }",
        "resolved": "{ label?: string; value?: string; header?: string; subHeader?: string; message?: string; options: { label: string; value: string; }[]; }",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      }
    },
    "filter": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "{\r\n    label?: string;\r\n    controls: filterControl[];\r\n  }",
        "resolved": "{ label?: string; controls: filterControl[]; }",
        "references": {
          "filterControl": {
            "location": "import",
            "path": "../../typings"
          }
        }
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      }
    },
    "paginationEl": {
      "type": "any",
      "mutable": false,
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "pagination-el",
      "reflect": false
    },
    "modeToggle": {
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
      "attribute": "mode-toggle",
      "reflect": false,
      "defaultValue": "false"
    },
    "displayMode": {
      "type": "string",
      "mutable": true,
      "complexType": {
        "original": "\"list\" | \"grid\"",
        "resolved": "\"grid\" | \"list\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "display-mode",
      "reflect": false,
      "defaultValue": "\"grid\""
    },
    "disabled": {
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
      "attribute": "disabled",
      "reflect": false,
      "defaultValue": "false"
    },
    "beforeGetResults": {
      "type": "any",
      "mutable": false,
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "before-get-results",
      "reflect": false
    },
    "showFilter": {
      "type": "boolean",
      "mutable": true,
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
      "attribute": "show-filter",
      "reflect": false,
      "defaultValue": "true"
    }
  }; }
  static get states() { return {
    "selectOptions": {},
    "currentFilters": {}
  }; }
  static get events() { return [{
      "method": "fireenjinTrigger",
      "name": "fireenjinTrigger",
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
  static get methods() { return {
    "togglePaginationDisplay": {
      "complexType": {
        "signature": "() => Promise<void>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "",
        "tags": []
      }
    },
    "clearFilter": {
      "complexType": {
        "signature": "(event: any, clearingControl: filterControl) => Promise<void>",
        "parameters": [{
            "tags": [],
            "text": ""
          }, {
            "tags": [],
            "text": ""
          }],
        "references": {
          "Promise": {
            "location": "global"
          },
          "filterControl": {
            "location": "import",
            "path": "../../typings"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "",
        "tags": []
      }
    },
    "updateCurrentFilters": {
      "complexType": {
        "signature": "() => Promise<void>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "",
        "tags": []
      }
    }
  }; }
  static get watchers() { return [{
      "propName": "filter",
      "methodName": "onFilterChange"
    }]; }
  static get listeners() { return [{
      "name": "fireenjinSuccess",
      "method": "onSuccess",
      "target": "body",
      "capture": false,
      "passive": false
    }, {
      "name": "ionChange",
      "method": "onChange",
      "target": undefined,
      "capture": false,
      "passive": false
    }]; }
}
