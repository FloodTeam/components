import{r as t,h as o,H as a,a as s}from"./p-0daa6e6f.js";import{g as e,c as i,a as n}from"./p-0c550731.js";const p=class{constructor(o){t(this,o)}componentDidLoad(){d((async()=>{const t=n(window,"hybrid");i.getBoolean("_testing")||import("./p-3fbfb0b4.js").then((t=>t.startTapClick(i))),i.getBoolean("statusTap",t)&&import("./p-857c08ca.js").then((t=>t.startStatusTap())),i.getBoolean("inputShims",r())&&import("./p-23e2b615.js").then((t=>t.startInputShims(i)));const o=await import("./p-f2660943.js");i.getBoolean("hardwareBackButton",t)?o.startHardwareBackButton():o.blockHardwareBackButton(),"undefined"!=typeof window&&import("./p-2e4e8117.js").then((t=>t.startKeyboardAssist(window))),import("./p-aef0bba0.js").then((t=>t.startFocusVisible()))}))}render(){const t=e(this);return o(a,{class:{[t]:!0,"ion-page":!0,"force-statusbar-padding":i.getBoolean("_forceStatusbarPadding")}})}get el(){return s(this)}},r=()=>n(window,"ios")&&n(window,"mobile"),d=t=>{"requestIdleCallback"in window?window.requestIdleCallback(t):setTimeout(t,32)};p.style="html.plt-mobile ion-app{user-select:none}html.plt-mobile ion-app [contenteditable]{user-select:text}ion-app.force-statusbar-padding{--ion-safe-area-top:20px}";export{p as ion_app}