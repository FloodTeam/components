import{r as e,h as t}from"./p-5c1a6496.js";const i=class{constructor(t){e(this,t),this.events=[]}render(){return t("div",{class:{timeline:!0}},this.events.map((e=>t("div",{class:{event:!0,complete:e.complete}},t("div",{class:"details"},t("small",null,e.timestamp),t("b",null,e.name))))))}};i.style='floodteam-progress-timeline .timeline{position:relative;display:flex;height:80vh;padding:10vh 0;flex-direction:column;justify-content:space-around}floodteam-progress-timeline .timeline .event{position:relative;display:flex;flex:1;align-items:center;justify-content:flex-end;padding-right:10px;margin-bottom:1px}floodteam-progress-timeline .timeline .event:after{position:absolute;right:0;top:0;bottom:0;width:10px;background:#ccc;content:""}floodteam-progress-timeline .timeline .event.complete:after{background:green}floodteam-progress-timeline .timeline .details{writing-mode:tb-rl;transform:rotate(-180deg);padding-left:10px}floodteam-progress-timeline .timeline .event small,floodteam-progress-timeline .timeline .event b{display:block}floodteam-progress-timeline .timeline .event small{font-size:0.4em}floodteam-progress-timeline .timeline .event b{font-size:0.5em}';export{i as floodteam_progress_timeline}