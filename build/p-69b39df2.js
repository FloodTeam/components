import{MENU_BACK_BUTTON_PRIORITY as t}from"./p-f2660943.js";import{c as n}from"./p-b1e0c380.js";import{g as r}from"./p-49c5434a.js";import{c as a}from"./p-45318d64.js";const e=t=>a().duration(t?400:300),s=t=>{let n,s;const o=t.width+8,i=a(),c=a();t.isEndSide?(n=o+"px",s="0px"):(n=-o+"px",s="0px"),i.addElement(t.menuInnerEl).fromTo("transform",`translateX(${n})`,`translateX(${s})`);const p="ios"===r(t),u=p?.2:.25;return c.addElement(t.backdropEl).fromTo("opacity",.01,u),e(p).addAnimation([i,c])},o=t=>{let n,s;const o=r(t),i=t.width;t.isEndSide?(n=-i+"px",s=i+"px"):(n=i+"px",s=-i+"px");const c=a().addElement(t.menuInnerEl).fromTo("transform",`translateX(${s})`,"translateX(0px)"),p=a().addElement(t.contentEl).fromTo("transform","translateX(0px)",`translateX(${n})`),u=a().addElement(t.backdropEl).fromTo("opacity",.01,.32);return e("ios"===o).addAnimation([c,p,u])},i=t=>{const n=r(t),s=t.width*(t.isEndSide?-1:1)+"px",o=a().addElement(t.contentEl).fromTo("transform","translateX(0px)",`translateX(${s})`);return e("ios"===n).addAnimation(o)},c=(()=>{const r=new Map,a=[],e=async t=>{if(await f(),"start"===t||"end"===t){return w((n=>n.side===t&&!n.disabled))||w((n=>n.side===t))}if(null!=t)return w((n=>n.menuId===t));return w((t=>!t.disabled))||(a.length>0?a[0].el:void 0)},c=async()=>(await f(),m()),p=(t,n)=>{r.set(t,n)},u=t=>{const n=t.side;a.filter((r=>r.side===n&&r!==t)).forEach((t=>t.disabled=!0))},m=()=>w((t=>t._isOpen)),l=()=>a.some((t=>t.isAnimating)),w=t=>{const n=a.find(t);if(void 0!==n)return n.el},f=()=>Promise.all(Array.from(document.querySelectorAll("ion-menu")).map((t=>new Promise((r=>n(t,r))))));return p("reveal",i),p("push",o),p("overlay",s),"undefined"!=typeof document&&document.addEventListener("ionBackButton",(n=>{const r=m();r&&n.detail.register(t,(()=>r.close()))})),{registerAnimation:p,get:e,getMenus:async()=>(await f(),a.map((t=>t.el))),getOpen:c,isEnabled:async t=>{const n=await e(t);return!!n&&!n.disabled},swipeGesture:async(t,n)=>{const r=await e(n);return r&&(r.swipeGesture=t),r},isAnimating:async()=>(await f(),l()),isOpen:async t=>{if(null!=t){const n=await e(t);return void 0!==n&&n.isOpen()}return void 0!==await c()},enable:async(t,n)=>{const r=await e(n);return r&&(r.disabled=!t),r},toggle:async t=>{const n=await e(t);return!!n&&n.toggle()},close:async t=>{const n=await(void 0!==t?e(t):c());return void 0!==n&&n.close()},open:async t=>{const n=await e(t);return!!n&&n.open()},_getOpenSync:m,_createAnimation:(t,n)=>{const a=r.get(t);if(!a)throw new Error("animation not registered");return a(n)},_register:t=>{a.indexOf(t)<0&&(t.disabled||u(t),a.push(t))},_unregister:t=>{const n=a.indexOf(t);n>-1&&a.splice(n,1)},_setOpen:async(t,n,r)=>{if(l())return!1;if(n){const n=await c();n&&t.el!==n&&await n.setOpen(!1,!1)}return t._setOpen(n,r)},_setActiveMenu:u}})();export{c as m}