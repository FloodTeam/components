import{d as o,w as t}from"./p-eb2b03ce.js";import{c as s}from"./p-41f6108f.js";const n=()=>{const n=window;n.addEventListener("statusTap",(()=>{o((()=>{const o=document.elementFromPoint(n.innerWidth/2,n.innerHeight/2);if(!o)return;const c=o.closest("ion-content");c&&new Promise((o=>s(c,o))).then((()=>{t((()=>c.scrollToTop(300)))}))}))}))};export{n as startStatusTap}