import{r as i,h as o,H as t}from"./p-a7779090.js";import{p as n}from"./p-b2116e08.js";import"./p-eb85c436.js";import"./p-f2660943.js";import"./p-159f073c.js";const l=class{constructor(o){i(this,o),this.modeToggle=!1,this.displayMode="grid",this.disableSearch=!1,this.selectOptions={},this.currentFilters={}}onPaginationElChange(){this.paginationEl&&(this.displayMode=this.paginationEl.display?this.paginationEl.display:this.displayMode)}onSuccess(i){var o;"select"===(null===(o=null==i?void 0:i.detail)||void 0===o?void 0:o.name)&&(this.selectOptions[i.detail.target.name]=i.detail.data.results)}onReset(){this.filterPopoverEl&&this.filterPopoverEl.dismiss()}async onSubmit(i){var o,t,n,l;if(this.filterPopoverEl&&"filter"===(null===(o=null==i?void 0:i.detail)||void 0===o?void 0:o.name)){if((null===(t=i.detail)||void 0===t?void 0:t.data)&&Object.keys(i.detail.data).length)for(const[o,t]of this.filter.controls.entries()){if(!t.name||!(null===(n=i.detail)||void 0===n?void 0:n.data[t.name]))continue;const l=Object.assign(Object.assign({},t),{value:i.detail.data[t.name]});this.filter.controls[o]=l,this.currentFilters[t.name]=l,this.filter=Object.assign({},this.filter)}this.filterPopoverEl.dismiss(),this.paginationEl&&(await this.paginationEl.clearResults(),this.paginationEl.getResults({paramData:(null===(l=null==i?void 0:i.detail)||void 0===l?void 0:l.data)?i.detail.data:{}}))}}onChange(i){var o,t;"orderBy"===(null===(o=null==i?void 0:i.target)||void 0===o?void 0:o.name)&&(this.paginationEl.orderBy=i.detail.value),"ION-SEARCHBAR"===(null===(t=null==i?void 0:i.target)||void 0===t?void 0:t.tagName)&&(this.paginationEl.query=i.detail.value?i.detail.value:"")}async togglePaginationDisplay(){this.displayMode="grid"===this.displayMode?"list":"grid",this.paginationEl.display=this.displayMode}async openFilterPopover(i){this.filterPopoverEl=await n.create({component:"fireenjin-popover-filter",componentProps:this.filter,event:i,cssClass:"fireenjin-popover-filter-wrapper"}),this.filterPopoverEl.present()}async clearFilter(i,o){i.preventDefault(),i.stopPropagation();for(const[i,t]of this.filter.controls.entries())t.name&&t.value&&t.name===o.name&&(this.filter.controls[i]=Object.assign(Object.assign({},t),{value:null}),delete this.currentFilters[o.name],this.filter=Object.assign({},this.filter),await this.paginationEl.clearParamData(t.name));await this.paginationEl.clearResults(),await this.paginationEl.getResults(await new Promise(((i,o)=>{try{const o={};for(const i of Object.values(this.currentFilters))o[i.name]=i.value;console.log(o),i(o)}catch(i){console.log(i),o({})}})))}render(){var i,n,l,s,e,r,a;return o(t,null,o("slot",{name:"before"}),o("ion-grid",null,o("ion-row",null,this.modeToggle&&o("ion-col",{class:"mode-toggle"},o("ion-button",{fill:"clear",color:"primary",onClick:()=>this.togglePaginationDisplay()},o("ion-icon",{slot:"icon-only",name:"grid"===this.displayMode?"list":"grid"}))),!this.disableSearch&&o("ion-col",null,o("ion-searchbar",null)),(null===(n=null===(i=this.filter)||void 0===i?void 0:i.controls)||void 0===n?void 0:n.length)&&o("ion-col",{class:"filter-control"},o("ion-card",{onClick:i=>this.openFilterPopover(i),class:{"has-value":this.currentFilters&&Object.keys(this.currentFilters).length>0}},o("ion-icon",{name:"funnel",class:"start-icon"}),(null===(s=null===(l=this.filter)||void 0===l?void 0:l.controls)||void 0===s?void 0:s.length)?this.filter.controls.filter((i=>{var o;return!!i.value&&((null===(o=i.options)||void 0===o?void 0:o.length)||this.selectOptions[i.name])})).map((i=>{var t;return o("ion-chip",{outline:!0,color:"primary",style:{marginTop:"0",marginBottom:"0"}},i.icon&&o("ion-icon",{name:i.icon}),o("ion-label",null,(null===(t=i.options)||void 0===t?void 0:t.length)?i.options.filter((o=>i.value.map?i.value.includes(o.value):o.value===i.value)).map((i=>i.label)).join(", "):this.selectOptions[i.name]?this.selectOptions[i.name].filter((o=>i.value.map?i.value.includes(o.id):o.id===i.value)).map((i=>i.name)).join(", "):null),o("ion-icon",{name:"close-circle",onClick:o=>this.clearFilter(o,i)}))})):null,!(null===(e=this.filter)||void 0===e?void 0:e.label)||this.currentFilters&&Object.keys(this.currentFilters).length>0?"":this.filter.label,o("ion-icon",{name:"caret-down",class:"end-icon"}))),(null===(a=null===(r=this.sort)||void 0===r?void 0:r.options)||void 0===a?void 0:a.length)&&o("ion-col",null,o("ion-card",null,o("ion-icon",{style:{height:"25px",width:"25px",padding:"5px 0px 0px 5px"},class:"ion-float-left",name:"swap-vertical"}),o("ion-select",{name:"orderBy",value:this.sort.value,okText:"Okay",cancelText:"Dismiss",interfaceOptions:{header:this.sort.header,subHeader:this.sort.subHeader,message:this.sort.message}},this.sort.options.map((i=>o("ion-select-option",{value:i.value},i.label)))))))),o("slot",{name:"after"}))}static get watchers(){return{paginationEl:["onPaginationElChange"]}}};l.style="fireenjin-filter-bar ion-col.mode-toggle{max-width:60px;padding-top:12px}fireenjin-filter-bar ion-col.filter-control ion-card{padding:12px;margin-top:8px;position:relative;padding-left:35px;cursor:pointer}fireenjin-filter-bar ion-col.filter-control ion-card.has-value{padding:5px 30px}fireenjin-filter-bar ion-col.filter-control .start-icon{position:absolute;top:10px;left:10px;height:20px;width:20px}fireenjin-filter-bar ion-col.filter-control .end-icon{position:absolute;top:15px;right:10px;opacity:0.33}";export{l as fireenjin_filter_bar}