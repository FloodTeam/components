'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-6c3aefc5.js');

const activityFeedCss = "floodteam-activity-feed fireenjin-pagination .pagination>div>ion-grid>ion-row>ion-col{min-width:100%}floodteam-activity-feed .feed-header{padding-left:30px}floodteam-activity-feed .feed-header h1,floodteam-activity-feed .feed-header h2,floodteam-activity-feed .feed-header h3,floodteam-activity-feed .feed-header h4,floodteam-activity-feed .feed-header h5,floodteam-activity-feed .feed-header p{margin:0;padding:0}floodteam-activity-feed .embed{background:black;position:relative}floodteam-activity-feed .embed iframe{display:block;margin:0 auto;width:100%;max-width:400px;height:45%}";

const ActivityFeed = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.fireenjinTrigger = index.createEvent(this, "fireenjinTrigger", 7);
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
        return (index.h(index.Host, { class: {
                "is-loading": this.isLoading,
            } }, index.h("ion-grid", null, index.h("ion-row", { class: "ion-justify-content-between ion-align-items-center" }, index.h("ion-col", null, index.h("div", { class: "feed-header" }, index.h("slot", null))), index.h("ion-col", { class: "ion-align-self-end" }, index.h("fireenjin-filter-bar", { ref: (el) => (this.filterBarEl = el), paginationEl: this.paginationEl, disableSearch: true, filter: {
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
            } })))), index.h("fireenjin-pagination", { ref: (el) => (this.paginationEl = el), disableVirtualScroll: true, display: "grid", gridEl: ({ result: card }) => (index.h("ion-card", { innerHTML: card.html })), fetchData: Object.assign(Object.assign({}, this.fetchData), { jobId: this.jobId, siteId: this.siteId, userId: this.userId }), resultsKey: "feeds", endpoint: "listFeed", limit: 24, removeDuplicates: true })));
    }
};
ActivityFeed.style = activityFeedCss;

exports.floodteam_activity_feed = ActivityFeed;
