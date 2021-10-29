import{r as i,c as t,h as o,H as n}from"./p-eb2b03ce.js";let r=class{constructor(o){i(this,o),this.fireenjinTrigger=t(this,"fireenjinTrigger",7),this.modeToggle=!1,this.displayMode="grid",this.disabled=!1,this.showFilter=!0,this.selectOptions={},this.currentFilters={}}onFilterChange(){this.updateCurrentFilters()}async onTrigger(i){var t,o,n,r,e,l,a,s,d,h,c,v,u;if("set"===(null===(t=null==i?void 0:i.detail)||void 0===t?void 0:t.trigger)&&(null===(n=null===(o=null==i?void 0:i.detail)||void 0===o?void 0:o.payload)||void 0===n?void 0:n.name)){for(const[t,o]of this.filter.controls.entries()){if(!(null==o?void 0:o.name)||(null===(e=null===(r=null==i?void 0:i.detail)||void 0===r?void 0:r.payload)||void 0===e?void 0:e.name)!==(null==o?void 0:o.name))continue;const n=Object.assign(Object.assign({},o),{value:(null===(a=null===(l=null==i?void 0:i.detail)||void 0===l?void 0:l.payload)||void 0===a?void 0:a.value)||null});this.filter.controls[t]=n,this.currentFilters[o.name]=n,this.filter=Object.assign({},this.filter),this.paginationEl&&!(null===(s=this.paginationEl)||void 0===s?void 0:s.disableFetch)&&(this.paginationEl.fetchData=Object.assign(Object.assign({},(null===(d=this.paginationEl)||void 0===d?void 0:d.fetchData)||{}),{[o.name]:null===(c=null===(h=null==i?void 0:i.detail)||void 0===h?void 0:h.payload)||void 0===c?void 0:c.value}))}if(!(null===(v=this.paginationEl)||void 0===v?void 0:v.clearResults)||!(null===(u=this.paginationEl)||void 0===u?void 0:u.getResults))return;await this.paginationEl.clearResults(),await this.paginationEl.getResults()}}onSuccess(i){var t;"select"===(null===(t=null==i?void 0:i.detail)||void 0===t?void 0:t.name)&&(this.selectOptions[i.detail.target.name]=i.detail.data.results)}async onChange(i){var t,o,n;(null===(t=this.paginationEl)||void 0===t?void 0:t.clearParamData)&&("orderBy"===(null===(o=null==i?void 0:i.target)||void 0===o?void 0:o.name)&&(this.paginationEl.orderBy=i.detail.value),"ION-SEARCHBAR"===(null===(n=null==i?void 0:i.target)||void 0===n?void 0:n.tagName)&&(await this.paginationEl.clearParamData("next"),await this.paginationEl.clearParamData("back"),await this.paginationEl.clearParamData("page"),this.paginationEl.query=i.detail.value?i.detail.value:""))}async togglePaginationDisplay(){this.displayMode="grid"===this.displayMode?"list":"grid",this.paginationEl.display=this.displayMode}async clearFilter(i,t){var o,n,r,e,l;i.preventDefault(),i.stopPropagation();const a=(null===(o=this.paginationEl)||void 0===o?void 0:o.fetchData)||{};for(const[i,o]of this.filter.controls.entries())o.name&&o.value&&o.name===t.name&&(this.filter.controls[i]=Object.assign(Object.assign({},o),{value:null}),delete this.currentFilters[t.name],a[o.name]&&delete a[o.name],this.filter=Object.assign({},this.filter),(null===(n=this.paginationEl)||void 0===n?void 0:n.clearParamData)&&await this.paginationEl.clearParamData(o.name));const s={};for(const i of Object.values(this.currentFilters))s[i.name]=i.value;let d={paramData:s};this.beforeGetResults&&"function"==typeof this.beforeGetResults&&(d=await this.beforeGetResults(d)),this.paginationEl&&!(null===(r=this.paginationEl)||void 0===r?void 0:r.disableFetch)&&(this.paginationEl.fetchData=a),(null===(e=this.paginationEl)||void 0===e?void 0:e.clearResults)&&await this.paginationEl.clearResults(),(null===(l=this.paginationEl)||void 0===l?void 0:l.getResults)&&await this.paginationEl.getResults(d)}async updateCurrentFilters(){var i;if(null===(i=this.filter)||void 0===i?void 0:i.controls)for(const i of this.filter.controls)(null==i?void 0:i.value)&&(this.currentFilters[i.name]=i,this.currentFilters=Object.assign({},this.currentFilters))}getLabelForValue(i,t){for(const o of(null==i?void 0:i.options)||[])if((null==o?void 0:o.value)===t)return(null==o?void 0:o.label)?o.label:o.value}getControlLabel(i){const t=(null==i?void 0:i.value)?i.value:null;return t?Array.isArray(t)?t.map((t=>this.getLabelForValue(i,t))).join(", "):this.getLabelForValue(i,t):i.label}componentDidLoad(){this.updateCurrentFilters()}render(){var i,t,r,e,l,a,s,d;return o(n,null,o("div",{class:"search-bar-wrapper"},o("ion-searchbar",{disabled:this.disabled}),this.showFilter&&(null===(t=null===(i=this.filter)||void 0===i?void 0:i.controls)||void 0===t?void 0:t.length)&&o("div",{class:"filter-bar"},(null===(e=null===(r=this.filter)||void 0===r?void 0:r.controls)||void 0===e?void 0:e.length)&&(null===(l=this.filter)||void 0===l?void 0:l.controls.map((i=>o("ion-chip",{outline:!Object.keys(this.currentFilters).includes(null==i?void 0:i.name),onClick:t=>this.fireenjinTrigger.emit({event:t,trigger:"filter",name:null==i?void 0:i.name,payload:{control:i}})},(null==i?void 0:i.icon)&&o("ion-icon",{name:i.icon}),(null==i?void 0:i.label)&&o("ion-label",null,this.getControlLabel(i)),Object.keys(this.currentFilters).includes(null==i?void 0:i.name)&&o("ion-icon",{name:"close-circle",onClick:t=>this.clearFilter(t,i)}))))))),(null===(s=null===(a=this.filter)||void 0===a?void 0:a.controls)||void 0===s?void 0:s.length)&&o("ion-button",{onClick:()=>this.showFilter=!this.showFilter,class:"filter-button",size:"small",fill:"clear",shape:"round",style:{color:"var(--ion-text-color)"}},o("ion-icon",{name:"funnel",slot:"icon-only"}),(null===(d=Object.keys(this.currentFilters))||void 0===d?void 0:d.length)&&o("ion-badge",{slot:"end"},this.currentFilters?Object.keys(this.currentFilters).length:0)))}static get watchers(){return{filter:["onFilterChange"]}}};r.style="fireenjin-search-bar{display:block;border:1px solid rgba(var(--ion-text-color-rgb), 0.6);border-radius:26px;position:relative;padding:5px 0}fireenjin-search-bar .search-bar-wrapper{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:space-between;align-content:center}fireenjin-search-bar .filter-bar{display:inline-flex;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden;align-content:center;margin:auto 10px auto auto;max-width:100%;padding-bottom:3px}fireenjin-search-bar .filter-bar::-webkit-scrollbar{height:5px}fireenjin-search-bar .filter-bar::-webkit-scrollbar-thumb{background:rgba(var(--ion-text-color-rgb), 0.6);border-radius:2px}fireenjin-search-bar .filter-bar ion-chip{margin:auto 10px;border-color:rgba(var(--ion-text-color-rgb), 0.8);opacity:0.8}fireenjin-search-bar .filter-bar ion-chip:hover{opacity:1}fireenjin-search-bar .filter-bar ion-chip ion-icon{color:var(--ion-text-color);display:inline-block;opacity:0.6;height:20px;width:20px}fireenjin-search-bar .filter-bar ion-chip:last-of-type{margin-right:50px}fireenjin-search-bar .filter-button{order:2;margin:auto 0;position:absolute;right:0px;top:12px}fireenjin-search-bar .filter-button ion-badge{border-radius:100%;font-size:8px;height:12px;width:12px;padding:2px}fireenjin-search-bar ion-searchbar{max-width:250px;padding-top:2px !important;padding-bottom:0px !important;--background:transparent !important;--box-shadow:none !important;--color:var(--ion-text-color) !important}fireenjin-search-bar .searchbar-input{padding-inline-end:65px !important;padding-inline-start:42px !important}fireenjin-search-bar .searchbar-search-icon{left:10px !important}@media only screen and (max-width: 500px){fireenjin-search-bar .filter-button ion-label{display:none}fireenjin-search-bar .search-bar-wrapper{padding-right:0}}";export{r as fireenjin_search_bar}