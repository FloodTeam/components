let e,t,n,l=!1,s=!1,o=!1,i=!1,r=!1;const c={isDev:!1,isBrowser:!0,isServer:!1,isTesting:!1},f=e=>{const t=new URL(e,we.t);return t.origin!==ye.location.origin?t.href:t.pathname},a="http://www.w3.org/1999/xlink",u={},d=e=>"object"==(e=typeof e)||"function"===e,p=(e,t,...n)=>{let l=null,s=null,o=null,i=!1,r=!1;const c=[],f=t=>{for(let n=0;n<t.length;n++)l=t[n],Array.isArray(l)?f(l):null!=l&&"boolean"!=typeof l&&((i="function"!=typeof e&&!d(l))&&(l+=""),i&&r?c[c.length-1].l+=l:c.push(i?$(null,l):l),r=i)};if(f(n),t){t.key&&(s=t.key),t.name&&(o=t.name);{const e=t.className||t.class;e&&(t.class="object"!=typeof e?e:Object.keys(e).filter((t=>e[t])).join(" "))}}if("function"==typeof e)return e(null===t?{}:t,c,m);const a=$(e,null);return a.o=t,c.length>0&&(a.i=c),a.u=s,a.p=o,a},$=(e,t)=>({$:0,h:e,l:t,m:null,i:null,o:null,u:null,p:null}),h={},m={forEach:(e,t)=>e.map(y).forEach(t),map:(e,t)=>e.map(y).map(t).map(b)},y=e=>({vattrs:e.o,vchildren:e.i,vkey:e.u,vname:e.p,vtag:e.h,vtext:e.l}),b=e=>{if("function"==typeof e.vtag){const t=Object.assign({},e.vattrs);return e.vkey&&(t.key=e.vkey),e.vname&&(t.name=e.vname),p(e.vtag,t,...e.vchildren||[])}const t=$(e.vtag,e.vtext);return t.o=e.vattrs,t.i=e.vchildren,t.u=e.vkey,t.p=e.vname,t},w=e=>me.push(e),g=e=>ce(e).g,v=e=>ce(e).v,k=(e,t,n)=>{const l=v(e);return{emit:e=>j(l,t,{bubbles:!!(4&n),composed:!!(2&n),cancelable:!!(1&n),detail:e})}},j=(e,t,n)=>{const l=we.ce(t,n);return e.dispatchEvent(l),l},S=new WeakMap,O=(e,t)=>"sc-"+(t&&32&e.$?e.k+"-"+t:e.k),C=(e,t,n,l,s,o)=>{if(n!==l){let i=ue(e,t),r=t.toLowerCase();if("class"===t){const t=e.classList,s=R(n),o=R(l);t.remove(...s.filter((e=>e&&!o.includes(e)))),t.add(...o.filter((e=>e&&!s.includes(e))))}else if("style"===t){for(const t in n)l&&null!=l[t]||(t.includes("-")?e.style.removeProperty(t):e.style[t]="");for(const t in l)n&&l[t]===n[t]||(t.includes("-")?e.style.setProperty(t,l[t]):e.style[t]=l[t])}else if("key"===t);else if("ref"===t)l&&l(e);else if(i||"o"!==t[0]||"n"!==t[1]){const c=d(l);if((i||c&&null!==l)&&!s)try{if(e.tagName.includes("-"))e[t]=l;else{const s=null==l?"":l;"list"===t?i=!1:null!=n&&e[t]==s||(e[t]=s)}}catch(e){}let f=!1;r!==(r=r.replace(/^xlink\:?/,""))&&(t=r,f=!0),null==l||!1===l?!1===l&&""!==e.getAttribute(t)||(f?e.removeAttributeNS(a,t):e.removeAttribute(t)):(!i||4&o||s)&&!c&&(l=!0===l?"":l,f?e.setAttributeNS(a,t,l):e.setAttribute(t,l))}else t="-"===t[2]?t.slice(3):ue(ye,r)?r.slice(2):r[2]+t.slice(3),n&&we.rel(e,t,n,!1),l&&we.ael(e,t,l,!1)}},M=/\s/,R=e=>e?e.split(M):[],x=(e,t,n,l)=>{const s=11===t.m.nodeType&&t.m.host?t.m.host:t.m,o=e&&e.o||u,i=t.o||u;for(l in o)l in i||C(s,l,o[l],void 0,n,t.$);for(l in i)C(s,l,o[l],i[l],n,t.$)},T=(s,r,c,f)=>{const a=r.i[c];let u,d,p,$=0;if(l||(o=!0,"slot"===a.h&&(e&&f.classList.add(e+"-s"),a.$|=a.i?2:1)),null!==a.l)u=a.m=be.createTextNode(a.l);else if(1&a.$)u=a.m=be.createTextNode("");else{if(i||(i="svg"===a.h),u=a.m=be.createElementNS(i?"http://www.w3.org/2000/svg":"http://www.w3.org/1999/xhtml",2&a.$?"slot-fb":a.h),i&&"foreignObject"===a.h&&(i=!1),x(null,a,i),null!=e&&u["s-si"]!==e&&u.classList.add(u["s-si"]=e),a.i)for($=0;$<a.i.length;++$)d=T(s,a,$,u),d&&u.appendChild(d);"svg"===a.h?i=!1:"foreignObject"===u.tagName&&(i=!0)}return u["s-hn"]=n,3&a.$&&(u["s-sr"]=!0,u["s-cr"]=t,u["s-sn"]=a.p||"",p=s&&s.i&&s.i[c],p&&p.h===a.h&&s.m&&L(s.m,!1)),u},L=(e,t)=>{we.$|=1;const l=e.childNodes;for(let e=l.length-1;e>=0;e--){const s=l[e];s["s-hn"]!==n&&s["s-ol"]&&(U(s).insertBefore(s,N(s)),s["s-ol"].remove(),s["s-ol"]=void 0,o=!0),t&&L(s,t)}we.$&=-2},P=(e,t,l,s,o,i)=>{let r,c=e["s-cr"]&&e["s-cr"].parentNode||e;for(c.shadowRoot&&c.tagName===n&&(c=c.shadowRoot);o<=i;++o)s[o]&&(r=T(null,l,o,e),r&&(s[o].m=r,c.insertBefore(r,N(t))))},D=(e,t,n,l,o)=>{for(;t<=n;++t)(l=e[t])&&(o=l.m,q(l),s=!0,o["s-ol"]?o["s-ol"].remove():L(o,!0),o.remove())},E=(e,t)=>e.h===t.h&&("slot"===e.h?e.p===t.p:e.u===t.u),N=e=>e&&e["s-ol"]||e,U=e=>(e["s-ol"]?e["s-ol"]:e).parentNode,W=(e,t)=>{const n=t.m=e.m,l=e.i,s=t.i,o=t.h,r=t.l;let c;null===r?(i="svg"===o||"foreignObject"!==o&&i,"slot"===o||x(e,t,i),null!==l&&null!==s?((e,t,n,l)=>{let s,o,i=0,r=0,c=0,f=0,a=t.length-1,u=t[0],d=t[a],p=l.length-1,$=l[0],h=l[p];for(;i<=a&&r<=p;)if(null==u)u=t[++i];else if(null==d)d=t[--a];else if(null==$)$=l[++r];else if(null==h)h=l[--p];else if(E(u,$))W(u,$),u=t[++i],$=l[++r];else if(E(d,h))W(d,h),d=t[--a],h=l[--p];else if(E(u,h))"slot"!==u.h&&"slot"!==h.h||L(u.m.parentNode,!1),W(u,h),e.insertBefore(u.m,d.m.nextSibling),u=t[++i],h=l[--p];else if(E(d,$))"slot"!==u.h&&"slot"!==h.h||L(d.m.parentNode,!1),W(d,$),e.insertBefore(d.m,u.m),d=t[--a],$=l[++r];else{for(c=-1,f=i;f<=a;++f)if(t[f]&&null!==t[f].u&&t[f].u===$.u){c=f;break}c>=0?(o=t[c],o.h!==$.h?s=T(t&&t[r],n,c,e):(W(o,$),t[c]=void 0,s=o.m),$=l[++r]):(s=T(t&&t[r],n,r,e),$=l[++r]),s&&U(u.m).insertBefore(s,N(u.m))}i>a?P(e,null==l[p+1]?null:l[p+1].m,n,l,r,p):r>p&&D(t,i,a)})(n,l,t,s):null!==s?(null!==e.l&&(n.textContent=""),P(n,null,t,s,0,s.length-1)):null!==l&&D(l,0,l.length-1),i&&"svg"===o&&(i=!1)):(c=n["s-cr"])?c.parentNode.textContent=r:e.l!==r&&(n.data=r)},F=e=>{const t=e.childNodes;let n,l,s,o,i,r;for(l=0,s=t.length;l<s;l++)if(n=t[l],1===n.nodeType){if(n["s-sr"])for(i=n["s-sn"],n.hidden=!1,o=0;o<s;o++)if(r=t[o].nodeType,t[o]["s-hn"]!==n["s-hn"]||""!==i){if(1===r&&i===t[o].getAttribute("slot")){n.hidden=!0;break}}else if(1===r||3===r&&""!==t[o].textContent.trim()){n.hidden=!0;break}F(n)}},A=[],B=e=>{let t,n,l,o,i,r,c=0;const f=e.childNodes,a=f.length;for(;c<a;c++){if(t=f[c],t["s-sr"]&&(n=t["s-cr"])&&n.parentNode)for(l=n.parentNode.childNodes,o=t["s-sn"],r=l.length-1;r>=0;r--)n=l[r],n["s-cn"]||n["s-nr"]||n["s-hn"]===t["s-hn"]||(H(n,o)?(i=A.find((e=>e.j===n)),s=!0,n["s-sn"]=n["s-sn"]||o,i?i.S=t:A.push({S:t,j:n}),n["s-sr"]&&A.map((e=>{H(e.j,n["s-sn"])&&(i=A.find((e=>e.j===n)),i&&!e.S&&(e.S=i.S))}))):A.some((e=>e.j===n))||A.push({j:n}));1===t.nodeType&&B(t)}},H=(e,t)=>1===e.nodeType?null===e.getAttribute("slot")&&""===t||e.getAttribute("slot")===t:e["s-sn"]===t||""===t,q=e=>{e.o&&e.o.ref&&e.o.ref(null),e.i&&e.i.map(q)},V=(e,t)=>{t&&!e.O&&t["s-p"]&&t["s-p"].push(new Promise((t=>e.O=t)))},_=(e,t)=>{if(e.$|=16,!(4&e.$))return V(e,e.C),Te((()=>z(e,t)));e.$|=512},z=(e,t)=>{const n=e.M;let l;return t&&(e.$|=256,e.R&&(e.R.map((([e,t])=>X(n,e,t))),e.R=null),l=X(n,"componentWillLoad")),l=Y(l,(()=>X(n,"componentWillRender"))),Y(l,(()=>G(e,n,t)))},G=async(e,t,n)=>{const l=e.v,s=l["s-rc"];n&&(e=>{const t=e.T,n=e.v,l=t.$,s=((e,t,n)=>{let l=O(t,n);const s=he.get(l);if(e=11===e.nodeType?e:be,s)if("string"==typeof s){let t,n=S.get(e=e.head||e);n||S.set(e,n=new Set),n.has(l)||(t=be.createElement("style"),t.innerHTML=s,e.insertBefore(t,e.querySelector("link")),n&&n.add(l))}else e.adoptedStyleSheets.includes(s)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,s]);return l})(n.shadowRoot?n.shadowRoot:n.getRootNode(),t,e.g);10&l&&(n["s-sc"]=s,n.classList.add(s+"-h"),2&l&&n.classList.add(s+"-s"))})(e);I(e,t),s&&(s.map((e=>e())),l["s-rc"]=void 0);{const t=l["s-p"],n=()=>J(e);0===t.length?n():(Promise.all(t).then(n),e.$|=4,t.length=0)}},I=(i,r)=>{try{r=r.render&&r.render(),i.$&=-17,i.$|=2,((i,r)=>{const c=i.v,f=i.T,a=i.L||$(null,null),u=(e=>e&&e.h===h)(r)?r:p(null,null,r);if(n=c.tagName,f.P&&(u.o=u.o||{},f.P.map((([e,t])=>u.o[t]=c[e]))),u.h=null,u.$|=4,i.L=u,u.m=a.m=c.shadowRoot||c,e=c["s-sc"],t=c["s-cr"],l=0!=(1&f.$),s=!1,W(a,u),we.$|=1,o){let e,t,n,l,s,o;B(u.m);let i=0;for(;i<A.length;i++)e=A[i],t=e.j,t["s-ol"]||(n=be.createTextNode(""),n["s-nr"]=t,t.parentNode.insertBefore(t["s-ol"]=n,t));for(i=0;i<A.length;i++)if(e=A[i],t=e.j,e.S){for(l=e.S.parentNode,s=e.S.nextSibling,n=t["s-ol"];n=n.previousSibling;)if(o=n["s-nr"],o&&o["s-sn"]===t["s-sn"]&&l===o.parentNode&&(o=o.nextSibling,!o||!o["s-nr"])){s=o;break}(!s&&l!==t.parentNode||t.nextSibling!==s)&&t!==s&&(!t["s-hn"]&&t["s-ol"]&&(t["s-hn"]=t["s-ol"].parentNode.nodeName),l.insertBefore(t,s))}else 1===t.nodeType&&(t.hidden=!0)}s&&F(u.m),we.$&=-2,A.length=0})(i,r)}catch(e){de(e,i.v)}return null},J=e=>{const t=e.v,n=e.M,l=e.C;X(n,"componentDidRender"),64&e.$?X(n,"componentDidUpdate"):(e.$|=64,Z(t),X(n,"componentDidLoad"),e.D(t),l||Q()),e.N(t),e.O&&(e.O(),e.O=void 0),512&e.$&&Re((()=>_(e,!1))),e.$&=-517},K=e=>{{const t=ce(e),n=t.v.isConnected;return n&&2==(18&t.$)&&_(t,!1),n}},Q=()=>{Z(be.documentElement),Re((()=>j(ye,"appload",{detail:{namespace:"floodteam"}})))},X=(e,t,n)=>{if(e&&e[t])try{return e[t](n)}catch(e){de(e)}},Y=(e,t)=>e&&e.then?e.then(t):t(),Z=e=>e.classList.add("hydrated"),ee=(e,t,n)=>{if(t.U){e.watchers&&(t.W=e.watchers);const l=Object.entries(t.U),s=e.prototype;if(l.map((([e,[l]])=>{31&l||2&n&&32&l?Object.defineProperty(s,e,{get(){return((e,t)=>ce(this).F.get(t))(0,e)},set(n){((e,t,n,l)=>{const s=ce(e),o=s.v,i=s.F.get(t),r=s.$,c=s.M;if(n=((e,t)=>null==e||d(e)?e:4&t?"false"!==e&&(""===e||!!e):2&t?parseFloat(e):1&t?e+"":e)(n,l.U[t][0]),(!(8&r)||void 0===i)&&n!==i&&(!Number.isNaN(i)||!Number.isNaN(n))&&(s.F.set(t,n),c)){if(l.W&&128&r){const e=l.W[t];e&&e.map((e=>{try{c[e](n,i,t)}catch(e){de(e,o)}}))}2==(18&r)&&_(s,!1)}})(this,e,n,t)},configurable:!0,enumerable:!0}):1&n&&64&l&&Object.defineProperty(s,e,{value(...t){const n=ce(this);return n.A.then((()=>n.M[e](...t)))}})})),1&n){const n=new Map;s.attributeChangedCallback=function(e,t,l){we.jmp((()=>{const t=n.get(e);if(this.hasOwnProperty(t))l=this[t],delete this[t];else if(s.hasOwnProperty(t)&&"number"==typeof this[t]&&this[t]==l)return;this[t]=(null!==l||"boolean"!=typeof this[t])&&l}))},e.observedAttributes=l.filter((([e,t])=>15&t[0])).map((([e,l])=>{const s=l[1]||e;return n.set(s,e),512&l[0]&&t.P.push([e,s]),s}))}}return e},te=e=>{X(e,"connectedCallback")},ne=(e,t={})=>{const n=[],l=t.exclude||[],s=ye.customElements,o=be.head,i=o.querySelector("meta[charset]"),r=be.createElement("style"),c=[];let f,a=!0;Object.assign(we,t),we.t=new URL(t.resourcesUrl||"./",be.baseURI).href,e.map((e=>{e[1].map((t=>{const o={$:t[0],k:t[1],U:t[2],B:t[3]};o.U=t[2],o.B=t[3],o.P=[],o.W={};const i=o.k,r=class extends HTMLElement{constructor(e){super(e),ae(e=this,o),1&o.$&&e.attachShadow({mode:"open",delegatesFocus:!!(16&o.$)})}connectedCallback(){f&&(clearTimeout(f),f=null),a?c.push(this):we.jmp((()=>(e=>{if(0==(1&we.$)){const t=ce(e),n=t.T,l=()=>{};if(1&t.$)le(e,t,n.B),te(t.M);else{t.$|=1,12&n.$&&(e=>{const t=e["s-cr"]=be.createComment("");t["s-cn"]=!0,e.insertBefore(t,e.firstChild)})(e);{let n=e;for(;n=n.parentNode||n.host;)if(n["s-p"]){V(t,t.C=n);break}}n.U&&Object.entries(n.U).map((([t,[n]])=>{if(31&n&&e.hasOwnProperty(t)){const n=e[t];delete e[t],e[t]=n}})),(async(e,t,n,l,s)=>{if(0==(32&t.$)){{if(t.$|=32,(s=$e(n)).then){const e=()=>{};s=await s,e()}s.isProxied||(n.W=s.watchers,ee(s,n,2),s.isProxied=!0);const e=()=>{};t.$|=8;try{new s(t)}catch(e){de(e)}t.$&=-9,t.$|=128,e(),te(t.M)}if(s.style){let l=s.style;"string"!=typeof l&&(l=l[t.g=(e=>me.map((t=>t(e))).find((e=>!!e)))(e)]);const o=O(n,t.g);if(!he.has(o)){const e=()=>{};((e,t,n)=>{let l=he.get(e);ke&&n?(l=l||new CSSStyleSheet,"string"==typeof l?l=t:l.replaceSync(t)):l=t,he.set(e,l)})(o,l,!!(1&n.$)),e()}}}const o=t.C,i=()=>_(t,!0);o&&o["s-rc"]?o["s-rc"].push(i):i()})(e,t,n)}l()}})(this)))}disconnectedCallback(){we.jmp((()=>(()=>{if(0==(1&we.$)){const e=ce(this),t=e.M;e.H&&(e.H.map((e=>e())),e.H=void 0),X(t,"disconnectedCallback")}})()))}componentOnReady(){return ce(this).q}};o.V=e[0],l.includes(i)||s.get(i)||(n.push(i),s.define(i,ee(r,o,1)))}))})),r.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",r.setAttribute("data-styles",""),o.insertBefore(r,i?i.nextSibling:o.firstChild),a=!1,c.length?c.map((e=>e.connectedCallback())):we.jmp((()=>f=setTimeout(Q,30)))},le=(e,t,n)=>{n&&n.map((([n,l,s])=>{const o=oe(e,n),i=se(t,s),r=ie(n);we.ael(o,l,i,r),(t.H=t.H||[]).push((()=>we.rel(o,l,i,r)))}))},se=(e,t)=>n=>{try{256&e.$?e.M[t](n):(e.R=e.R||[]).push([t,n])}catch(e){de(e)}},oe=(e,t)=>4&t?be:8&t?ye:16&t?be.body:e,ie=e=>0!=(2&e),re=new WeakMap,ce=e=>re.get(e),fe=(e,t)=>re.set(t.M=e,t),ae=(e,t)=>{const n={$:0,v:e,T:t,F:new Map};return n.A=new Promise((e=>n.N=e)),n.q=new Promise((e=>n.D=e)),e["s-p"]=[],e["s-rc"]=[],le(e,n,t.B),re.set(e,n)},ue=(e,t)=>t in e,de=(e,t)=>(0,console.error)(e,t),pe=new Map,$e=e=>{const t=e.k.replace(/-/g,"_"),n=e.V,l=pe.get(n);return l?l[t]:import(`./${n}.entry.js`).then((e=>(pe.set(n,e),e[t])),de)
/*!__STENCIL_STATIC_IMPORT_SWITCH__*/},he=new Map,me=[],ye="undefined"!=typeof window?window:{},be=ye.document||{head:{}},we={$:0,t:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,l)=>e.addEventListener(t,n,l),rel:(e,t,n,l)=>e.removeEventListener(t,n,l),ce:(e,t)=>new CustomEvent(e,t)},ge=e=>{Object.assign(we,e)},ve=e=>Promise.resolve(e),ke=(()=>{try{return new CSSStyleSheet,"function"==typeof(new CSSStyleSheet).replaceSync}catch(e){}return!1})(),je=[],Se=[],Oe=(e,t)=>n=>{e.push(n),r||(r=!0,t&&4&we.$?Re(Me):we.raf(Me))},Ce=e=>{for(let t=0;t<e.length;t++)try{e[t](performance.now())}catch(e){de(e)}e.length=0},Me=()=>{Ce(je),Ce(Se),(r=je.length>0)&&we.raf(Me)},Re=e=>ve().then(e),xe=Oe(je,!1),Te=Oe(Se,!0);export{c as B,h as H,w as a,ne as b,k as c,v as d,xe as e,K as f,g,p as h,f as i,ve as p,fe as r,ge as s,Te as w}