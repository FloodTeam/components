import{c as o}from"./p-295f0cea.js";import{b as t}from"./p-28e84784.js";
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const s="ion-content",n=".ion-content-scroll-host",e=o=>"ION-CONTENT"===o.tagName,a=async t=>e(t)?(await new Promise((s=>o(t,s))),t.getScrollElement()):t,r=o=>o.querySelector(".ion-content-scroll-host")||o.querySelector("ion-content, .ion-content-scroll-host"),i=o=>o.closest("ion-content, .ion-content-scroll-host"),c=(o,t)=>e(o)?o.scrollToTop(t):Promise.resolve(o.scrollTo({top:0,left:0,behavior:t>0?"smooth":"auto"})),l=(o,t,s,n)=>e(o)?o.scrollByPoint(t,s,n):Promise.resolve(o.scrollBy({top:s,left:t,behavior:n>0?"smooth":"auto"})),f=o=>t(o,"ion-content"),h=o=>{if(e(o)){const t=o.scrollY;return o.scrollY=!1,t}return o.style.setProperty("overflow","hidden"),!0},m=(o,t)=>{e(o)?o.scrollY=t:o.style.removeProperty("overflow")};export{s as I,i as a,n as b,l as c,h as d,r as f,a as g,e as i,f as p,m as r,c as s}