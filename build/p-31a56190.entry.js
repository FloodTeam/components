import{r as s,h as t,H as i}from"./p-eb2b03ce.js";import{g as o}from"./p-7ecdf920.js";import{m as e}from"./p-05917950.js";import{u as r}from"./p-13836783.js";import"./p-f2660943.js";import"./p-41f6108f.js";import"./p-d1230c2d.js";let n=class{constructor(t){s(this,t),this.visible=!1,this.autoHide=!0,this.onClick=()=>e.toggle(this.menu)}connectedCallback(){this.visibilityChanged()}async visibilityChanged(){this.visible=await r(this.menu)}render(){const s=o(this),e=this.autoHide&&!this.visible;return t(i,{onClick:this.onClick,"aria-hidden":e?"true":null,class:{[s]:!0,"menu-toggle-hidden":e}},t("slot",null))}};n.style=":host(.menu-toggle-hidden){display:none}";export{n as ion_menu_toggle}