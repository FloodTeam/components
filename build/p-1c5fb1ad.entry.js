import{r as t,h as i,H as o}from"./p-eb2b03ce.js";const a=class{constructor(i){t(this,i),this.modeToggle=!1,this.displayMode="grid",this.disabled=!1,this.showFilter=!0,this.selectOptions={},this.currentFilters={}}onPaginationElChange(){this.paginationEl&&(this.displayMode=this.paginationEl.display?this.paginationEl.display:this.displayMode)}onSuccess(t){var i;"select"===(null===(i=null==t?void 0:t.detail)||void 0===i?void 0:i.name)&&(this.selectOptions[t.detail.target.name]=t.detail.data.results)}onReset(){this.filterPopoverEl&&this.filterPopoverEl.dismiss()}async onSubmit(t){var i,o,a,n;if(!this.filterPopoverEl||"filter"!==(null===(i=null==t?void 0:t.detail)||void 0===i?void 0:i.name))return;if((null===(o=t.detail)||void 0===o?void 0:o.data)&&Object.keys(t.detail.data).length)for(const[i,o]of this.filter.controls.entries()){if(!o.name||!(null===(a=t.detail)||void 0===a?void 0:a.data[o.name]))continue;const n=Object.assign(Object.assign({},o),{value:t.detail.data[o.name]});this.filter.controls[i]=n,this.currentFilters[o.name]=n,this.filter=Object.assign({},this.filter)}if(this.filterPopoverEl.dismiss(),!this.paginationEl)return;await this.paginationEl.clearResults();let e={paramData:(null===(n=null==t?void 0:t.detail)||void 0===n?void 0:n.data)?t.detail.data:{}};this.beforeGetResults&&"function"==typeof this.beforeGetResults&&(e=await this.beforeGetResults(e)),this.paginationEl.getResults(e)}async onChange(t){var i,o;"orderBy"===(null===(i=null==t?void 0:t.target)||void 0===i?void 0:i.name)&&(this.paginationEl.orderBy=t.detail.value),"ION-SEARCHBAR"===(null===(o=null==t?void 0:t.target)||void 0===o?void 0:o.tagName)&&(await this.paginationEl.clearParamData("next"),await this.paginationEl.clearParamData("back"),await this.paginationEl.clearParamData("page"),this.paginationEl.query=t.detail.value?t.detail.value:"")}async togglePaginationDisplay(){this.displayMode="grid"===this.displayMode?"list":"grid",this.paginationEl.display=this.displayMode}async clearFilter(t,i){t.preventDefault(),t.stopPropagation();for(const[t,o]of this.filter.controls.entries())o.name&&o.value&&o.name===i.name&&(this.filter.controls[t]=Object.assign(Object.assign({},o),{value:null}),delete this.currentFilters[i.name],this.filter=Object.assign({},this.filter),await this.paginationEl.clearParamData(o.name));await this.paginationEl.clearResults(),await this.paginationEl.getResults(await new Promise((async(t,i)=>{try{const i={};for(const t of Object.values(this.currentFilters))i[t.name]=t.value;let o={paramData:i};this.beforeGetResults&&"function"==typeof this.beforeGetResults&&(o=await this.beforeGetResults(o)),t(o)}catch(t){console.log(t),i({})}})))}render(){var t,a,n,e;return i(o,null,i("div",{class:"search-bar-wrapper"},i("ion-searchbar",{disabled:this.disabled}),this.showFilter&&i("div",{class:"filter-bar"},(null===(a=null===(t=this.filter)||void 0===t?void 0:t.controls)||void 0===a?void 0:a.length)&&(null===(n=this.filter)||void 0===n?void 0:n.controls.map((t=>i("ion-chip",{outline:!Object.keys(this.currentFilters).includes(null==t?void 0:t.name)},(null==t?void 0:t.icon)&&i("ion-icon",{name:t.icon}),(null==t?void 0:t.label)&&i("ion-label",null,t.label),Object.keys(this.currentFilters).includes(null==t?void 0:t.name)&&i("ion-icon",{name:"close-circle"}))))))),i("ion-button",{onClick:()=>this.showFilter=!this.showFilter,class:"filter-button",fill:"clear",shape:"round",style:{color:"var(--ion-text-color)"}},i("ion-icon",{name:"funnel",slot:"icon-only"}),(null===(e=Object.keys(this.currentFilters))||void 0===e?void 0:e.length)&&i("ion-badge",{slot:"end"},Object.keys(this.currentFilters).length)))}static get watchers(){return{paginationEl:["onPaginationElChange"]}}};a.style="floodteam-search-bar{display:block;border:1px solid rgba(var(--ion-text-color-rgb), 0.6);border-radius:26px;position:relative;padding:5px 0}floodteam-search-bar .search-bar-wrapper{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:space-between;align-content:center;padding-right:60px}floodteam-search-bar .filter-bar{display:inline-flex;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden;align-content:center;margin:auto 10px auto auto;max-width:100%}floodteam-search-bar .filter-bar ion-chip{margin:auto 10px;min-width:100px;border-color:rgba(var(--ion-text-color-rgb), 0.5)}floodteam-search-bar .filter-bar ion-chip ion-icon{color:var(--ion-text-color);opacity:0.6}floodteam-search-bar .filter-button{order:2;margin:auto 0;position:absolute;right:0px;top:0px;bottom:0px}floodteam-search-bar ion-searchbar{max-width:250px;padding-top:2px !important;padding-bottom:0px !important;--background:transparent !important;--box-shadow:none !important;--color:var(--ion-text-color) !important}@media only screen and (max-width: 500px){floodteam-search-bar .filter-button ion-label{display:none}floodteam-search-bar .search-bar-wrapper{padding-right:0}}";export{a as floodteam_search_bar}