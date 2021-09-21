import { r as registerInstance, h } from './index-2bcfd230.js';

const jobProgressCss = "floodteam-job-progress ion-segment{border-radius:4px;overflow:hidden;border:1px solid var(--ion-color-base-dark)}floodteam-job-progress ion-segment-button{min-height:30px;opacity:0.6}floodteam-job-progress ion-segment-button:hover{min-height:30px;opacity:1}floodteam-job-progress ion-segment-button.completed{background-color:var(--ion-color-success)}floodteam-job-progress ion-segment-button.current{opacity:1}floodteam-job-progress ion-segment-button.current ion-label{color:var(--ion-color-success);font-weight:bold}floodteam-job-progress ion-segment-button.completed.segment-button-checked ion-label,floodteam-job-progress ion-segment-button:hover ion-label{color:#fff !important}floodteam-job-progress ion-segment-button ion-label{margin-top:0 !important;margin-bottom:0 !important}";

const JobProgress = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.name = "status";
        this.value = "respond";
        this.statuses = ["respond", "evaluate", "map", "dry", "review"];
        this.color = "success";
        this.scrollable = true;
    }
    render() {
        var _a;
        return (h("ion-segment", { scrollable: this.scrollable, color: this.color, value: this.value ? this.value : "respond" }, (((_a = this.statuses) === null || _a === void 0 ? void 0 : _a.length) ? this.statuses : []).map((status, index) => {
            return (h("ion-segment-button", { class: index <
                    this.statuses.indexOf(this.value ? this.value : "respond")
                    ? "completed"
                    : this.value === status
                        ? "current"
                        : "", value: status }, h("ion-label", null, status)));
        })));
    }
};
JobProgress.style = jobProgressCss;

export { JobProgress as floodteam_job_progress };
