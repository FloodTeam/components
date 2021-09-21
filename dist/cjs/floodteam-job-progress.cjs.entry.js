'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-6c3aefc5.js');

const jobProgressCss = "floodteam-job-progress ion-segment{border-radius:4px;overflow:hidden;border:1px solid var(--ion-color-base-dark)}floodteam-job-progress ion-segment-button{min-height:30px;opacity:0.6}floodteam-job-progress ion-segment-button:hover{min-height:30px;opacity:1}floodteam-job-progress ion-segment-button.completed{background-color:var(--ion-color-success)}floodteam-job-progress ion-segment-button.current{opacity:1}floodteam-job-progress ion-segment-button.current ion-label{color:var(--ion-color-success);font-weight:bold}floodteam-job-progress ion-segment-button.completed.segment-button-checked ion-label,floodteam-job-progress ion-segment-button:hover ion-label{color:#fff !important}floodteam-job-progress ion-segment-button ion-label{margin-top:0 !important;margin-bottom:0 !important}";

const JobProgress = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.name = "status";
        this.value = "respond";
        this.statuses = ["respond", "evaluate", "map", "dry", "review"];
        this.color = "success";
        this.scrollable = true;
    }
    render() {
        var _a;
        return (index.h("ion-segment", { scrollable: this.scrollable, color: this.color, value: this.value ? this.value : "respond" }, (((_a = this.statuses) === null || _a === void 0 ? void 0 : _a.length) ? this.statuses : []).map((status, index$1) => {
            return (index.h("ion-segment-button", { class: index$1 <
                    this.statuses.indexOf(this.value ? this.value : "respond")
                    ? "completed"
                    : this.value === status
                        ? "current"
                        : "", value: status }, index.h("ion-label", null, status)));
        })));
    }
};
JobProgress.style = jobProgressCss;

exports.floodteam_job_progress = JobProgress;
