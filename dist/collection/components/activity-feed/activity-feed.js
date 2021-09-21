import { Component, Host, Prop, State, h, Listen, Event, } from "@stencil/core";
export class ActivityFeed {
  constructor() {
    this.fetchData = {
      orderBy: "createdAt",
      orderDirection: "desc",
    };
    this.isLoading = true;
  }
  onChange(event) {
    const listEl = event.target.closest("ion-card ion-list");
    if (listEl) {
      this.setProgress(listEl);
    }
  }
  onSuccess(event) {
    if (event.detail.endpoint !== "listFeed")
      return;
    setTimeout(() => {
      this.paginationEl
        .querySelectorAll("[data-trigger]")
        .forEach((triggerEl) => {
        if (triggerEl.getAttribute("triggerer"))
          return;
        triggerEl.addEventListener("click", (triggerEvent) => {
          var _a, _b;
          triggerEvent.preventDefault();
          const trigger = (_b = (_a = triggerEvent === null || triggerEvent === void 0 ? void 0 : triggerEvent.target) === null || _a === void 0 ? void 0 : _a.dataset) === null || _b === void 0 ? void 0 : _b.trigger;
          this.fireenjinTrigger.emit({
            trigger,
          });
        });
        triggerEl.setAttribute("triggerer", "true");
      });
    }, 1000);
    this.isLoading = false;
  }
  setProgress(listEl) {
    var _a;
    let completed = 0;
    const items = Array.from(listEl.querySelectorAll("ion-item"));
    const progressBarEl = listEl.querySelector("ion-progress-bar");
    for (const item of items) {
      completed =
        completed + (((_a = item === null || item === void 0 ? void 0 : item.querySelector("ion-checkbox")) === null || _a === void 0 ? void 0 : _a.checked) ? 1 : 0);
    }
    const progressMath = completed / items.length;
    const progress = isFinite(progressMath) && progressMath > 0 ? progressMath : 0;
    progressBarEl.value = progress;
  }
  render() {
    return (h(Host, { class: {
        "is-loading": this.isLoading,
      } },
      h("ion-grid", null,
        h("ion-row", { class: "ion-justify-content-between ion-align-items-center" },
          h("ion-col", null,
            h("div", { class: "feed-header" },
              h("slot", null))),
          h("ion-col", { class: "ion-align-self-end" },
            h("fireenjin-filter-bar", { ref: (el) => (this.filterBarEl = el), paginationEl: this.paginationEl, disableSearch: true, filter: {
                label: "Filter By",
                controls: [
                  {
                    name: "tags",
                    label: "Tags",
                    endpoint: "listLocations",
                    icon: "business",
                    dataPropsMap: {
                      locations: "results",
                    },
                  },
                  {
                    name: "type",
                    label: "Type",
                    icon: "folder-open",
                    options: [
                      {
                        label: "All",
                        value: null,
                      },
                      {
                        label: "Note",
                        value: "note",
                      },
                      {
                        label: "Alert",
                        value: "alert",
                      },
                      {
                        label: "Job",
                        value: "job",
                      },
                      {
                        label: "Payment",
                        value: "payment",
                      },
                      {
                        label: "Admin",
                        value: "admin",
                      },
                    ],
                  },
                ],
              } })))),
      h("fireenjin-pagination", { ref: (el) => (this.paginationEl = el), disableVirtualScroll: true, display: "grid", gridEl: ({ result: card }) => (h("ion-card", { innerHTML: card.html })), fetchData: Object.assign(Object.assign({}, this.fetchData), { jobId: this.jobId, siteId: this.siteId, userId: this.userId }), resultsKey: "feeds", endpoint: "listFeed", limit: 24, removeDuplicates: true })));
  }
  static get is() { return "floodteam-activity-feed"; }
  static get originalStyleUrls() { return {
    "$": ["activity-feed.css"]
  }; }
  static get styleUrls() { return {
    "$": ["activity-feed.css"]
  }; }
  static get properties() { return {
    "jobId": {
      "type": "string",
      "mutable": false,
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
      "attribute": "job-id",
      "reflect": false
    },
    "siteId": {
      "type": "string",
      "mutable": false,
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
      "attribute": "site-id",
      "reflect": false
    },
    "userId": {
      "type": "string",
      "mutable": false,
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
      "attribute": "user-id",
      "reflect": false
    }
  }; }
  static get states() { return {
    "paginationEl": {},
    "fetchData": {},
    "isLoading": {}
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
  static get listeners() { return [{
      "name": "ionChange",
      "method": "onChange",
      "target": undefined,
      "capture": false,
      "passive": false
    }, {
      "name": "fireenjinSuccess",
      "method": "onSuccess",
      "target": "body",
      "capture": false,
      "passive": false
    }]; }
}
