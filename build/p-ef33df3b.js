import{w as t}from"./p-5c1a6496.js";import{h as o,a as e,b as n}from"./p-c563b4de.js";import{createGesture as r}from"./p-101feae9.js";const a=(a,s)=>{let c,i;const d=(t,o,e)=>{if("undefined"==typeof document)return;const n=document.elementFromPoint(t,o);n&&s(n)?n!==c&&(f(),m(n,e)):f()},m=(o,e)=>{c=o,i||(i=c);const n=c;t((()=>n.classList.add("ion-activated"))),e()},f=(o=!1)=>{if(!c)return;const e=c;t((()=>e.classList.remove("ion-activated"))),o&&i!==c&&c.click(),c=void 0};return r({el:a,gestureName:"buttonActiveDrag",threshold:0,onStart:t=>d(t.currentX,t.currentY,e),onMove:t=>d(t.currentX,t.currentY,n),onEnd:()=>{f(!0),o(),i=void 0}})};export{a as c}