import{g as t,c as n}from"./p-eb85c436.js";import{OVERLAY_BACK_BUTTON_PRIORITY as e}from"./p-f2660943.js";import{c as o,a,r as i,g as s}from"./p-159f073c.js";let r=0;const c=new WeakMap,d=t=>({create:n=>y(t,n),dismiss:(n,e,o)=>h(document,n,e,t,o),getTop:async()=>w(document,t)}),u=d("ion-alert"),p=d("ion-action-sheet"),l=d("ion-picker"),m=d("ion-popover"),f=t=>{"undefined"!=typeof document&&x(document);const n=r++;t.overlayIndex=n,t.hasAttribute("id")||(t.id=`ion-overlay-${n}`)},y=(t,n)=>"undefined"!=typeof customElements?customElements.whenDefined(t).then((()=>{const e=document.createElement(t);return e.classList.add("overlay-hidden"),Object.assign(e,n),A(document).appendChild(e),new Promise((t=>o(e,t)))})):Promise.resolve(),v='[tabindex]:not([tabindex^="-"]), input:not([type=hidden]):not([tabindex^="-"]), textarea:not([tabindex^="-"]), button:not([tabindex^="-"]), select:not([tabindex^="-"]), .ion-focusable:not([tabindex^="-"])',b="input:not([type=hidden]), textarea, button, select",x=t=>{0===r&&(r=1,t.addEventListener("focus",(n=>((t,n)=>{const e=w(n),o=t.target;if(e&&o)if(e===o)e.lastFocus=void 0;else{const t=s(e);if(!t.contains(o))return;const a=t.querySelector(".ion-overlay-wrapper");if(!a)return;if(a.contains(o))e.lastFocus=o;else{const t=e.lastFocus;((t,n)=>{let e=t.querySelector(v);const o=e&&e.shadowRoot;o&&(e=o.querySelector(b)||e),e?e.focus():n.focus()})(a,e),t===n.activeElement&&((t,n)=>{const e=Array.from(t.querySelectorAll(v));let o=e.length>0?e[e.length-1]:null;const a=o&&o.shadowRoot;a&&(o=a.querySelector(b)||o),o?o.focus():n.focus()})(a,e),e.lastFocus=n.activeElement}}})(n,t)),!0),t.addEventListener("ionBackButton",(n=>{const o=w(t);o&&o.backdropDismiss&&n.detail.register(e,(()=>o.dismiss(void 0,I)))})),t.addEventListener("keyup",(n=>{if("Escape"===n.key){const n=w(t);n&&n.backdropDismiss&&n.dismiss(void 0,I)}})))},h=(t,n,e,o,a)=>{const i=w(t,o,a);return i?i.dismiss(n,e):Promise.reject("overlay does not exist")},w=(t,n,e)=>{const o=((t,n)=>(void 0===n&&(n="ion-alert,ion-action-sheet,ion-loading,ion-modal,ion-picker,ion-popover,ion-toast"),Array.from(t.querySelectorAll(n)).filter((t=>t.overlayIndex>0))))(t,n);return void 0===e?o[o.length-1]:o.find((t=>t.id===e))},g=(t=!1)=>{const n=A(document).querySelector("ion-router-outlet, ion-nav, #ion-view-container-root");n&&(t?n.setAttribute("aria-hidden","true"):n.removeAttribute("aria-hidden"))},k=async(e,o,a,i,s)=>{if(e.presented)return;g(!0),e.presented=!0,e.willPresent.emit();const r=t(e),c=e.enterAnimation?e.enterAnimation:n.get(o,"ios"===r?a:i);await B(e,c,e.el,s)&&e.didPresent.emit(),"ION-TOAST"!==e.el.tagName&&j(e.el),e.keyboardClose&&e.el.focus()},j=async t=>{let n=document.activeElement;if(!n)return;const e=n&&n.shadowRoot;e&&(n=e.querySelector(b)||n),await t.onDidDismiss(),n.focus()},P=async(e,o,a,i,s,r,d)=>{if(!e.presented)return!1;g(!1),e.presented=!1;try{e.el.style.setProperty("pointer-events","none"),e.willDismiss.emit({data:o,role:a});const u=t(e),p=e.leaveAnimation?e.leaveAnimation:n.get(i,"ios"===u?s:r);"gesture"!==a&&await B(e,p,e.el,d),e.didDismiss.emit({data:o,role:a}),c.delete(e)}catch(t){console.error(t)}return e.el.remove(),!0},A=t=>t.querySelector("ion-app")||t.body,B=async(t,e,o,a)=>{o.classList.remove("overlay-hidden");const i=e(o.shadowRoot||t.el,a);t.animated&&n.getBoolean("animated",!0)||i.duration(0),t.keyboardClose&&i.beforeAddWrite((()=>{const t=o.ownerDocument.activeElement;t&&t.matches("input, ion-input, ion-textarea")&&t.blur()}));const s=c.get(t)||[];return c.set(t,[...s,i]),await i.play(),!0},E=(t,n)=>{let e;const o=new Promise((t=>e=t));return O(t,n,(t=>{e(t.detail)})),o},O=(t,n,e)=>{const o=a=>{i(t,n,o),e(a)};a(t,n,o)},T=t=>"cancel"===t||t===I,z=t=>t(),G=(t,e)=>{if("function"==typeof t)return n.get("_zoneGate",z)((()=>{try{return t(e)}catch(t){console.error(t)}}))},I="backdrop";export{I as B,f as a,l as b,c,P as d,E as e,m as f,p as g,u as h,T as i,k as p,G as s}