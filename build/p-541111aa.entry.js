import{r as s,h as t,H as i}from"./p-5c1a6496.js";import{g as o}from"./p-8a149e66.js";import{m as e}from"./p-40c5b67e.js";import{u as n}from"./p-de1b1403.js";import"./p-f2660943.js";import"./p-159f073c.js";import"./p-d10d3484.js";const r=class{constructor(t){s(this,t),this.visible=!1,this.autoHide=!0,this.onClick=()=>e.toggle(this.menu)}connectedCallback(){this.visibilityChanged()}async visibilityChanged(){this.visible=await n(this.menu)}render(){const s=o(this),e=this.autoHide&&!this.visible;return t(i,{onClick:this.onClick,"aria-hidden":e?"true":null,class:{[s]:!0,"menu-toggle-hidden":e}},t("slot",null))}};r.style=":host(.menu-toggle-hidden){display:none}";export{r as ion_menu_toggle}