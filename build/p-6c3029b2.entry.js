import{r as i,c as t,h as n,H as o}from"./p-eb2b03ce.js";const r=class{constructor(n){i(this,n),this.fireenjinTrigger=t(this,"fireenjinTrigger",7),this.modeToggle=!1,this.displayMode="grid",this.disabled=!1,this.showFilter=!0,this.selectOptions={},this.currentFilters={}}onFilterChange(){this.updateCurrentFilters()}async onTrigger(i){var t,n,o,r,e,a,l;if("set"===(null===(t=null==i?void 0:i.detail)||void 0===t?void 0:t.trigger)&&(null===(o=null===(n=null==i?void 0:i.detail)||void 0===n?void 0:n.payload)||void 0===o?void 0:o.name))for(const[t,n]of this.filter.controls.entries()){if(!(null==n?void 0:n.name)||(null===(e=null===(r=null==i?void 0:i.detail)||void 0===r?void 0:r.payload)||void 0===e?void 0:e.name)!==(null==n?void 0:n.name))continue;const o=Object.assign(Object.assign({},n),{value:(null===(l=null===(a=null==i?void 0:i.detail)||void 0===a?void 0:a.payload)||void 0===l?void 0:l.value)||null});this.filter.controls[t]=o,this.currentFilters[n.name]=o,this.filter=Object.assign({},this.filter)}}onSuccess(i){var t;"select"===(null===(t=null==i?void 0:i.detail)||void 0===t?void 0:t.name)&&(this.selectOptions[i.detail.target.name]=i.detail.data.results)}async onChange(i){var t,n;"orderBy"===(null===(t=null==i?void 0:i.target)||void 0===t?void 0:t.name)&&(this.paginationEl.orderBy=i.detail.value),"ION-SEARCHBAR"===(null===(n=null==i?void 0:i.target)||void 0===n?void 0:n.tagName)&&(await this.paginationEl.clearParamData("next"),await this.paginationEl.clearParamData("back"),await this.paginationEl.clearParamData("page"),this.paginationEl.query=i.detail.value?i.detail.value:"")}async togglePaginationDisplay(){this.displayMode="grid"===this.displayMode?"list":"grid",this.paginationEl.display=this.displayMode}async clearFilter(i,t){i.preventDefault(),i.stopPropagation();for(const[i,n]of this.filter.controls.entries())n.name&&n.value&&n.name===t.name&&(this.filter.controls[i]=Object.assign(Object.assign({},n),{value:null}),delete this.currentFilters[t.name],this.filter=Object.assign({},this.filter),await this.paginationEl.clearParamData(n.name));await this.paginationEl.clearResults(),await this.paginationEl.getResults(await new Promise((async(i,t)=>{try{const t={};for(const i of Object.values(this.currentFilters))t[i.name]=i.value;let n={paramData:t};this.beforeGetResults&&"function"==typeof this.beforeGetResults&&(n=await this.beforeGetResults(n)),i(n)}catch(i){console.log(i),t({})}})))}async updateCurrentFilters(){var i;if(null===(i=this.filter)||void 0===i?void 0:i.controls)for(const i of this.filter.controls)(null==i?void 0:i.value)&&(this.currentFilters[i.name]=i,this.currentFilters=Object.assign({},this.currentFilters))}getLabelForValue(i,t){for(const n of(null==i?void 0:i.options)||[])if((null==n?void 0:n.value)===t)return(null==n?void 0:n.label)?n.label:n.value}getControlLabel(i){const t=(null==i?void 0:i.value)?i.value:null;return t?Array.isArray(t)?t.map((t=>this.getLabelForValue(i,t))).join(", "):this.getLabelForValue(i,t):i.label}componentDidLoad(){this.updateCurrentFilters()}render(){var i,t,r,e,a,l,s,d;return n(o,null,n("div",{class:"search-bar-wrapper"},n("ion-searchbar",{disabled:this.disabled}),this.showFilter&&(null===(t=null===(i=this.filter)||void 0===i?void 0:i.controls)||void 0===t?void 0:t.length)&&n("div",{class:"filter-bar"},(null===(e=null===(r=this.filter)||void 0===r?void 0:r.controls)||void 0===e?void 0:e.length)&&(null===(a=this.filter)||void 0===a?void 0:a.controls.map((i=>n("ion-chip",{outline:!Object.keys(this.currentFilters).includes(null==i?void 0:i.name),onClick:t=>this.fireenjinTrigger.emit({event:t,trigger:"filter",name:null==i?void 0:i.name,payload:{control:i}})},(null==i?void 0:i.icon)&&n("ion-icon",{name:i.icon}),(null==i?void 0:i.label)&&n("ion-label",null,this.getControlLabel(i)),Object.keys(this.currentFilters).includes(null==i?void 0:i.name)&&n("ion-icon",{name:"close-circle",onClick:t=>this.clearFilter(t,i)}))))))),(null===(s=null===(l=this.filter)||void 0===l?void 0:l.controls)||void 0===s?void 0:s.length)&&n("ion-button",{onClick:()=>this.showFilter=!this.showFilter,class:"filter-button",size:"small",fill:"clear",shape:"round",style:{color:"var(--ion-text-color)"}},n("ion-icon",{name:"funnel",slot:"icon-only"}),(null===(d=Object.keys(this.currentFilters))||void 0===d?void 0:d.length)&&n("ion-badge",{slot:"end"},this.currentFilters?Object.keys(this.currentFilters).length:0)))}static get watchers(){return{filter:["onFilterChange"]}}};r.style="fireenjin-search-bar{display:block;border:1px solid rgba(var(--ion-text-color-rgb), 0.6);border-radius:26px;position:relative;padding:5px 0}fireenjin-search-bar .search-bar-wrapper{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:space-between;align-content:center}fireenjin-search-bar .filter-bar{display:inline-flex;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden;align-content:center;margin:auto 10px auto auto;max-width:100%;padding-bottom:3px}fireenjin-search-bar .filter-bar::-webkit-scrollbar{height:5px}fireenjin-search-bar .filter-bar::-webkit-scrollbar-thumb{background:rgba(var(--ion-text-color-rgb), 0.6);border-radius:2px}fireenjin-search-bar .filter-bar ion-chip{margin:auto 10px;border-color:rgba(var(--ion-text-color-rgb), 0.8);opacity:0.8}fireenjin-search-bar .filter-bar ion-chip:hover{opacity:1}fireenjin-search-bar .filter-bar ion-chip ion-icon{color:var(--ion-text-color);display:inline-block;opacity:0.6;height:20px;width:20px}fireenjin-search-bar .filter-bar ion-chip:last-of-type{margin-right:50px}fireenjin-search-bar .filter-button{order:2;margin:auto 0;position:absolute;right:0px;top:12px}fireenjin-search-bar .filter-button ion-badge{border-radius:100%;font-size:8px;height:12px;width:12px;padding:2px}fireenjin-search-bar ion-searchbar{max-width:250px;padding-top:2px !important;padding-bottom:0px !important;--background:transparent !important;--box-shadow:none !important;--color:var(--ion-text-color) !important}fireenjin-search-bar .searchbar-input{padding-inline-end:65px !important;padding-inline-start:42px !important}fireenjin-search-bar .searchbar-search-icon{left:10px !important}@media only screen and (max-width: 500px){fireenjin-search-bar .filter-button ion-label{display:none}fireenjin-search-bar .search-bar-wrapper{padding-right:0}}";export{r as fireenjin_search_bar}