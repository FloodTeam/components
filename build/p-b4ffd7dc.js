import{w as i,B as e}from"./p-a7779090.js";import{c as n}from"./p-a5cea720.js";const a="ionViewWillLeave",o="ionViewDidLeave",s="ionViewWillUnload",t=e=>new Promise(((n,a)=>{i((()=>{r(e),c(e).then((i=>{i.animation&&i.animation.destroy(),p(e),n(i)}),(i=>{p(e),a(i)}))}))})),r=i=>{const e=i.enteringEl,n=i.leavingEl;P(e,n,i.direction),i.showGoBack?e.classList.add("can-go-back"):e.classList.remove("can-go-back"),h(e,!1),e.style.setProperty("pointer-events","none"),n&&(h(n,!1),n.style.setProperty("pointer-events","none"))},c=async i=>{const n=await w(i);return n&&e.isBrowser?d(n,i):l(i)},p=i=>{const e=i.enteringEl,n=i.leavingEl;e.classList.remove("ion-page-invisible"),e.style.removeProperty("pointer-events"),void 0!==n&&(n.classList.remove("ion-page-invisible"),n.style.removeProperty("pointer-events"))},w=async i=>{if(i.leavingEl&&i.animated&&0!==i.duration)return i.animationBuilder?i.animationBuilder:"ios"===i.mode?(await import("./p-84e5037d.js")).iosTransitionAnimation:(await import("./p-6fd19975.js")).mdTransitionAnimation},d=async(i,e)=>{await v(e,!0);const n=i(e.baseEl,e);b(e.enteringEl,e.leavingEl);const a=await u(n,e);return e.progressCallback&&e.progressCallback(void 0),a&&g(e.enteringEl,e.leavingEl),{hasCompleted:a,animation:n}},l=async i=>{const e=i.enteringEl,n=i.leavingEl;return await v(i,!1),b(e,n),g(e,n),{hasCompleted:!0}},v=async(i,e)=>{const n=(void 0!==i.deepWait?i.deepWait:e)?[V(i.enteringEl),V(i.leavingEl)]:[y(i.enteringEl),y(i.leavingEl)];await Promise.all(n),await m(i.viewIsReady,i.enteringEl)},m=async(i,e)=>{i&&await i(e)},u=(i,e)=>{const n=e.progressCallback,a=new Promise((e=>{i.onFinish((i=>e(1===i)))}));return n?(i.progressStart(!0),n(i)):i.play(),a},b=(i,e)=>{f(e,"ionViewWillLeave"),f(i,"ionViewWillEnter")},g=(i,e)=>{f(i,"ionViewDidEnter"),f(e,"ionViewDidLeave")},f=(i,e)=>{if(i){const n=new CustomEvent(e,{bubbles:!1,cancelable:!1});i.dispatchEvent(n)}},y=i=>i?new Promise((e=>n(i,e))):Promise.resolve(),V=async i=>{const e=i;if(e){if(null!=e.componentOnReady&&null!=await e.componentOnReady())return;await Promise.all(Array.from(e.children).map(V))}},h=(i,e)=>{e?(i.setAttribute("aria-hidden","true"),i.classList.add("ion-page-hidden")):(i.hidden=!1,i.removeAttribute("aria-hidden"),i.classList.remove("ion-page-hidden"))},P=(i,e,n)=>{void 0!==i&&(i.style.zIndex="back"===n?"99":"101"),void 0!==e&&(e.style.zIndex="100")},L=i=>{if(i.classList.contains("ion-page"))return i;return i.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")||i};export{s as L,a,o as b,V as d,L as g,f as l,h as s,t}