import{r as t,h as r}from"./p-0daa6e6f.js";const s=class{constructor(r){t(this,r),this.percent=0,this.radius=60,this.stroke=5}render(){const t=this.radius-2*this.stroke,s=2*t*Math.PI;return[r("svg",{height:2*this.radius,width:2*this.radius},r("circle",{id:"track",fill:"transparent","stroke-dasharray":s,"stroke-width":this.stroke,r:t,cx:this.radius,cy:this.radius}),r("circle",{id:"progress",fill:"transparent","stroke-dasharray":s,style:{strokeDashoffset:s-this.percent/100*s},"stroke-width":this.stroke,r:t,cx:this.radius,cy:this.radius})),r("div",{class:"slot-wrapper"},r("slot",null))]}};s.style=":host{display:flex;align-items:center;justify-content:center;height:100%;position:relative}.slot-wrapper{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);font-size:var(--progress-font-size, inherit) !important;font-weight:var(--progress-font-weight, inherit) !important;color:inherit}circle{transition:stroke-dashoffset 0.35s;-webkit-transform:rotate(-90deg);transform:rotate(-90deg);-webkit-transform-origin:50% 50%;transform-origin:50% 50%}#track{stroke:var(--progress-track-stroke, var(--ion-color-medium, grey))}#progress{stroke:var(--progress-stroke, var(--ion-color-primary, blue))}";export{s as floodteam_progress_circle}