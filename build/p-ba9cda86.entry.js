import{r as o,c as t,h as i,H as n,d as r}from"./p-8710117e.js";import{g as a}from"./p-b561825f.js";const e=class{constructor(i){o(this,i),this.ionChange=t(this,"ionChange",7),this.animated=!0,this.disabled=!1,this.readonly=!1,this.expand="compact"}valueChanged(){const{value:o,multiple:t}=this;!t&&Array.isArray(o)?this.value=o[0]:this.ionChange.emit({value:this.value})}async disabledChanged(){const{disabled:o}=this,t=await this.getAccordions();for(const i of t)i.disabled=o}async readonlyChanged(){const{readonly:o}=this,t=await this.getAccordions();for(const i of t)i.readonly=o}async onKeydown(o){const t=document.activeElement;if(!t)return;if(!t.closest('ion-accordion [slot="header"]'))return;const i="ION-ACCORDION"===t.tagName?t:t.closest("ion-accordion");if(!i)return;if(i.closest("ion-accordion-group")!==this.el)return;const n=await this.getAccordions(),r=n.findIndex((o=>o===i));if(-1===r)return;let a;"ArrowDown"===o.key?a=this.findNextAccordion(n,r):"ArrowUp"===o.key?a=this.findPreviousAccordion(n,r):"Home"===o.key?a=n[0]:"End"===o.key&&(a=n[n.length-1]),void 0!==a&&a!==t&&a.focus()}async componentDidLoad(){this.disabled&&this.disabledChanged(),this.readonly&&this.readonlyChanged()}async requestAccordionToggle(o,t){const{multiple:i,value:n,readonly:r,disabled:a}=this;if(!r&&!a)if(t)if(i){const t=null!=n?n:[],i=Array.isArray(t)?t:[t];void 0===i.find((t=>t===o))&&void 0!==o&&(this.value=[...i,o])}else this.value=o;else if(i){const t=null!=n?n:[],i=Array.isArray(t)?t:[t];this.value=i.filter((t=>t!==o))}else this.value=void 0}findNextAccordion(o,t){const i=o[t+1];return void 0===i?o[0]:i}findPreviousAccordion(o,t){const i=o[t-1];return void 0===i?o[o.length-1]:i}async getAccordions(){return Array.from(this.el.querySelectorAll(":scope > ion-accordion"))}render(){const{disabled:o,readonly:t,expand:r}=this,e=a(this);return i(n,{class:{[e]:!0,"accordion-group-disabled":o,"accordion-group-readonly":t,[`accordion-group-expand-${r}`]:!0},role:"presentation"},i("slot",null))}get el(){return r(this)}static get watchers(){return{value:["valueChanged"],disabled:["disabledChanged"],readonly:["readonlyChanged"]}}};e.style={ios:":host{display:block}:host(.accordion-group-expand-inset){margin-left:16px;margin-right:16px;margin-top:16px;margin-bottom:16px}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){:host(.accordion-group-expand-inset){margin-left:unset;margin-right:unset;-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:16px;margin-inline-end:16px}}:host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-expanding),:host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-expanded){border-bottom:none}",md:":host{display:block}:host(.accordion-group-expand-inset){margin-left:16px;margin-right:16px;margin-top:16px;margin-bottom:16px}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){:host(.accordion-group-expand-inset){margin-left:unset;margin-right:unset;-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:16px;margin-inline-end:16px}}:host(.accordion-group-expand-inset) ::slotted(ion-accordion){box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)}:host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-expanding),:host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-expanded){margin-left:0;margin-right:0;margin-top:16px;margin-bottom:16px;border-radius:6px}:host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-previous){border-bottom-right-radius:6px;border-bottom-left-radius:6px}:host-context([dir=rtl]):host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-previous),:host-context([dir=rtl]).accordion-group-expand-inset ::slotted(ion-accordion.accordion-previous){border-bottom-right-radius:6px;border-bottom-left-radius:6px}:host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-next){border-top-left-radius:6px;border-top-right-radius:6px}:host-context([dir=rtl]):host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-next),:host-context([dir=rtl]).accordion-group-expand-inset ::slotted(ion-accordion.accordion-next){border-top-left-radius:6px;border-top-right-radius:6px}:host(.accordion-group-expand-inset) ::slotted(ion-accordion):first-of-type{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}"};export{e as ion_accordion_group}