import{r as t,h as a,H as e,a as i}from"./p-eb2b03ce.js";import{a as s}from"./p-43dbefb5.js";import"./p-41f6108f.js";let n=class{constructor(a){t(this,a),this.loaded=!1,this.active=!1}async componentWillLoad(){this.active&&await this.setActive()}async setActive(){await this.prepareLazyLoaded(),this.active=!0}changeActive(t){t&&this.prepareLazyLoaded()}prepareLazyLoaded(){if(!this.loaded&&null!=this.component){this.loaded=!0;try{return s(this.delegate,this.el,this.component,["ion-page"])}catch(t){console.error(t)}}return Promise.resolve(void 0)}render(){const{tab:t,active:i,component:s}=this;return a(e,{role:"tabpanel","aria-hidden":i?null:"true","aria-labelledby":`tab-button-${t}`,class:{"ion-page":void 0===s,"tab-hidden":!i}},a("slot",null))}get el(){return i(this)}static get watchers(){return{active:["changeActive"]}}};n.style=":host(.tab-hidden){display:none !important}";export{n as ion_tab}