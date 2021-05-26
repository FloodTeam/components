import{r as e,c as i,h as t,H as a}from"./p-a7779090.js";const o=class{constructor(t){e(this,t),this.fireenjinTrigger=i(this,"fireenjinTrigger",7),this.fetchData={orderBy:"createdAt",orderDirection:"desc"},this.isLoading=!0}onChange(e){const i=e.target.closest("ion-card ion-list");i&&this.setProgress(i)}onSuccess(e){"listFeed"===e.detail.endpoint&&(setTimeout((()=>{this.paginationEl.querySelectorAll("[data-trigger]").forEach((e=>{e.getAttribute("triggerer")||(e.addEventListener("click",(e=>{var i,t;e.preventDefault();const a=null===(t=null===(i=null==e?void 0:e.target)||void 0===i?void 0:i.dataset)||void 0===t?void 0:t.trigger;this.fireenjinTrigger.emit({trigger:a})})),e.setAttribute("triggerer","true"))}))}),1e3),this.isLoading=!1)}setProgress(e){var i;let t=0;const a=Array.from(e.querySelectorAll("ion-item")),o=e.querySelector("ion-progress-bar");for(const e of a)t+=(null===(i=null==e?void 0:e.querySelector("ion-checkbox"))||void 0===i?void 0:i.checked)?1:0;const l=t/a.length,n=isFinite(l)&&l>0?l:0;o.value=n}render(){return t(a,{class:{"is-loading":this.isLoading}},t("ion-grid",null,t("ion-row",{class:"ion-justify-content-between ion-align-items-center"},t("ion-col",null,t("div",{class:"feed-header"},t("slot",null))),t("ion-col",{class:"ion-align-self-end"},t("fireenjin-filter-bar",{ref:e=>this.filterBarEl=e,paginationEl:this.paginationEl,disableSearch:!0,filter:{label:"Filter By",controls:[{name:"tags",label:"Tags",endpoint:"listLocations",icon:"business",dataPropsMap:{locations:"results"}},{name:"type",label:"Type",icon:"folder-open",options:[{label:"All",value:null},{label:"Note",value:"note"},{label:"Alert",value:"alert"},{label:"Job",value:"job"},{label:"Payment",value:"payment"},{label:"Admin",value:"admin"}]}]}})))),t("fireenjin-pagination",{ref:e=>this.paginationEl=e,disableVirtualScroll:!0,display:"grid",gridEl:({result:e})=>t("ion-card",{innerHTML:e.html}),fetchData:Object.assign(Object.assign({},this.fetchData),{jobId:this.jobId,siteId:this.siteId,userId:this.userId}),resultsKey:"feeds",endpoint:"listFeed",limit:24,removeDuplicates:!0}))}};o.style="floodteam-activity-feed fireenjin-pagination .pagination>div>ion-grid>ion-row>ion-col{min-width:100%}floodteam-activity-feed .feed-header{padding-left:30px}floodteam-activity-feed .feed-header h1,floodteam-activity-feed .feed-header h2,floodteam-activity-feed .feed-header h3,floodteam-activity-feed .feed-header h4,floodteam-activity-feed .feed-header h5,floodteam-activity-feed .feed-header p{margin:0;padding:0}floodteam-activity-feed .embed{background:black;position:relative}floodteam-activity-feed .embed iframe{display:block;margin:0 auto;width:100%;max-width:400px;height:45%}";export{o as floodteam_activity_feed}