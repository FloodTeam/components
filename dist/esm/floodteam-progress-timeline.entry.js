import { r as registerInstance, h } from './index-2bcfd230.js';

const progressTimelineCss = "floodteam-progress-timeline .timeline{position:relative;display:flex;height:80vh;padding:10vh 0;flex-direction:column;justify-content:space-around}floodteam-progress-timeline .timeline .event{position:relative;display:flex;flex:1;align-items:center;justify-content:flex-end;padding-right:10px;margin-bottom:1px}floodteam-progress-timeline .timeline .event:after{position:absolute;right:0;top:0;bottom:0;width:10px;background:#ccc;content:\"\"}floodteam-progress-timeline .timeline .event.complete:after{background:green}floodteam-progress-timeline .timeline .details{writing-mode:tb-rl;transform:rotate(-180deg);padding-left:10px}floodteam-progress-timeline .timeline .event small,floodteam-progress-timeline .timeline .event b{display:block}floodteam-progress-timeline .timeline .event small{font-size:0.4em}floodteam-progress-timeline .timeline .event b{font-size:0.5em}";

const ProgressTimeline = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * The major events on the timeline
         */
        this.events = [];
    }
    render() {
        return (h("div", { class: {
                timeline: true
            } }, this.events.map(event => (h("div", { class: {
                event: true,
                complete: event.complete
            } }, h("div", { class: "details" }, h("small", null, event.timestamp), h("b", null, event.name)))))));
    }
};
ProgressTimeline.style = progressTimelineCss;

export { ProgressTimeline as floodteam_progress_timeline };
