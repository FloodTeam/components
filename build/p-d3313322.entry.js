import{r as t,c as i,h as s}from"./p-5c1a6496.js";
/*!
 * Signature Pad v3.0.0-beta.4 | https://github.com/szimek/signature_pad
 * (c) 2020 Szymon Nowak | Released under the MIT license
 */class h{constructor(t,i,s){this.x=t,this.y=i,this.time=s||Date.now()}distanceTo(t){return Math.sqrt(Math.pow(this.x-t.x,2)+Math.pow(this.y-t.y,2))}equals(t){return this.x===t.x&&this.y===t.y&&this.time===t.time}velocityFrom(t){return this.time!==t.time?this.distanceTo(t)/(this.time-t.time):0}}class o{constructor(t,i,s,h,o,n){this.startPoint=t,this.control2=i,this.control1=s,this.endPoint=h,this.startWidth=o,this.endWidth=n}static fromPoints(t,i){const s=this.calculateControlPoints(t[0],t[1],t[2]).c2,h=this.calculateControlPoints(t[1],t[2],t[3]).c1;return new o(t[1],s,h,t[2],i.start,i.end)}static calculateControlPoints(t,i,s){const o=t.x-i.x,n=t.y-i.y,e=i.x-s.x,a=i.y-s.y,r=(t.x+i.x)/2,c=(t.y+i.y)/2,l=(i.x+s.x)/2,u=(i.y+s.y)/2,d=Math.sqrt(o*o+n*n),p=Math.sqrt(e*e+a*a),g=p/(d+p),m=i.x-(l+(r-l)*g),f=i.y-(u+(c-u)*g);return{c1:new h(r+m,c+f),c2:new h(l+m,u+f)}}length(){let t,i,s=0;for(let h=0;h<=10;h+=1){const o=h/10,n=this.point(o,this.startPoint.x,this.control1.x,this.control2.x,this.endPoint.x),e=this.point(o,this.startPoint.y,this.control1.y,this.control2.y,this.endPoint.y);if(h>0){const h=n-t,o=e-i;s+=Math.sqrt(h*h+o*o)}t=n,i=e}return s}point(t,i,s,h,o){return i*(1-t)*(1-t)*(1-t)+3*s*(1-t)*(1-t)*t+3*h*(1-t)*t*t+o*t*t*t}}class n{constructor(t,i={}){this.canvas=t,this.options=i,this._handleMouseDown=t=>{1===t.which&&(this._mouseButtonDown=!0,this._strokeBegin(t))},this._handleMouseMove=t=>{this._mouseButtonDown&&this._strokeMoveUpdate(t)},this._handleMouseUp=t=>{1===t.which&&this._mouseButtonDown&&(this._mouseButtonDown=!1,this._strokeEnd(t))},this._handleTouchStart=t=>{t.preventDefault(),1===t.targetTouches.length&&this._strokeBegin(t.changedTouches[0])},this._handleTouchMove=t=>{t.preventDefault(),this._strokeMoveUpdate(t.targetTouches[0])},this._handleTouchEnd=t=>{t.target===this.canvas&&(t.preventDefault(),this._strokeEnd(t.changedTouches[0]))},this.velocityFilterWeight=i.velocityFilterWeight||.7,this.minWidth=i.minWidth||.5,this.maxWidth=i.maxWidth||2.5,this.throttle="throttle"in i?i.throttle:16,this.minDistance="minDistance"in i?i.minDistance:5,this.dotSize=i.dotSize||function(){return(this.minWidth+this.maxWidth)/2},this.penColor=i.penColor||"black",this.backgroundColor=i.backgroundColor||"rgba(0,0,0,0)",this.onBegin=i.onBegin,this.onEnd=i.onEnd,this._strokeMoveUpdate=this.throttle?function(t,i=250){let s,h,o,n=0,e=null;const a=()=>{n=Date.now(),e=null,s=t.apply(h,o),e||(h=null,o=[])};return function(...r){const c=Date.now(),l=i-(c-n);return h=this,o=r,l<=0||l>i?(e&&(clearTimeout(e),e=null),n=c,s=t.apply(h,o),e||(h=null,o=[])):e||(e=window.setTimeout(a,l)),s}}(n.prototype._strokeUpdate,this.throttle):n.prototype._strokeUpdate,this._ctx=t.getContext("2d"),this.clear(),this.on()}clear(){const{_ctx:t,canvas:i}=this;t.fillStyle=this.backgroundColor,t.clearRect(0,0,i.width,i.height),t.fillRect(0,0,i.width,i.height),this._data=[],this._reset(),this._isEmpty=!0}fromDataURL(t,i={},s){const h=new Image,o=i.ratio||window.devicePixelRatio||1,n=i.width||this.canvas.width/o,e=i.height||this.canvas.height/o;this._reset(),h.onload=()=>{this._ctx.drawImage(h,0,0,n,e),s&&s()},h.onerror=t=>{s&&s(t)},h.src=t,this._isEmpty=!1}toDataURL(t="image/png",i){switch(t){case"image/svg+xml":return this._toSVG();default:return this.canvas.toDataURL(t,i)}}on(){this.canvas.style.touchAction="none",this.canvas.style.msTouchAction="none",window.PointerEvent?this._handlePointerEvents():(this._handleMouseEvents(),"ontouchstart"in window&&this._handleTouchEvents())}off(){this.canvas.style.touchAction="auto",this.canvas.style.msTouchAction="auto",this.canvas.removeEventListener("pointerdown",this._handleMouseDown),this.canvas.removeEventListener("pointermove",this._handleMouseMove),document.removeEventListener("pointerup",this._handleMouseUp),this.canvas.removeEventListener("mousedown",this._handleMouseDown),this.canvas.removeEventListener("mousemove",this._handleMouseMove),document.removeEventListener("mouseup",this._handleMouseUp),this.canvas.removeEventListener("touchstart",this._handleTouchStart),this.canvas.removeEventListener("touchmove",this._handleTouchMove),this.canvas.removeEventListener("touchend",this._handleTouchEnd)}isEmpty(){return this._isEmpty}fromData(t){this.clear(),this._fromData(t,(({color:t,curve:i})=>this._drawCurve({color:t,curve:i})),(({color:t,point:i})=>this._drawDot({color:t,point:i}))),this._data=t}toData(){return this._data}_strokeBegin(t){const i={color:this.penColor,points:[]};"function"==typeof this.onBegin&&this.onBegin(t),this._data.push(i),this._reset(),this._strokeUpdate(t)}_strokeUpdate(t){if(0===this._data.length)return void this._strokeBegin(t);const i=this._createPoint(t.clientX,t.clientY),s=this._data[this._data.length-1],h=s.points,o=h.length>0&&h[h.length-1],n=!!o&&i.distanceTo(o)<=this.minDistance,e=s.color;if(!o||!o||!n){const t=this._addPoint(i);o?t&&this._drawCurve({color:e,curve:t}):this._drawDot({color:e,point:i}),h.push({time:i.time,x:i.x,y:i.y})}}_strokeEnd(t){this._strokeUpdate(t),"function"==typeof this.onEnd&&this.onEnd(t)}_handlePointerEvents(){this._mouseButtonDown=!1,this.canvas.addEventListener("pointerdown",this._handleMouseDown),this.canvas.addEventListener("pointermove",this._handleMouseMove),document.addEventListener("pointerup",this._handleMouseUp)}_handleMouseEvents(){this._mouseButtonDown=!1,this.canvas.addEventListener("mousedown",this._handleMouseDown),this.canvas.addEventListener("mousemove",this._handleMouseMove),document.addEventListener("mouseup",this._handleMouseUp)}_handleTouchEvents(){this.canvas.addEventListener("touchstart",this._handleTouchStart),this.canvas.addEventListener("touchmove",this._handleTouchMove),this.canvas.addEventListener("touchend",this._handleTouchEnd)}_reset(){this._lastPoints=[],this._lastVelocity=0,this._lastWidth=(this.minWidth+this.maxWidth)/2,this._ctx.fillStyle=this.penColor}_createPoint(t,i){const s=this.canvas.getBoundingClientRect();return new h(t-s.left,i-s.top,(new Date).getTime())}_addPoint(t){const{_lastPoints:i}=this;if(i.push(t),i.length>2){3===i.length&&i.unshift(i[0]);const t=this._calculateCurveWidths(i[1],i[2]),s=o.fromPoints(i,t);return i.shift(),s}return null}_calculateCurveWidths(t,i){const s=this.velocityFilterWeight*i.velocityFrom(t)+(1-this.velocityFilterWeight)*this._lastVelocity,h=this._strokeWidth(s),o={end:h,start:this._lastWidth};return this._lastVelocity=s,this._lastWidth=h,o}_strokeWidth(t){return Math.max(this.maxWidth/(t+1),this.minWidth)}_drawCurveSegment(t,i,s){const h=this._ctx;h.moveTo(t,i),h.arc(t,i,s,0,2*Math.PI,!1),this._isEmpty=!1}_drawCurve({color:t,curve:i}){const s=this._ctx,h=i.endWidth-i.startWidth,o=2*Math.floor(i.length());s.beginPath(),s.fillStyle=t;for(let t=0;t<o;t+=1){const s=t/o,n=s*s,e=n*s,a=1-s,r=a*a,c=r*a;let l=c*i.startPoint.x;l+=3*r*s*i.control1.x,l+=3*a*n*i.control2.x,l+=e*i.endPoint.x;let u=c*i.startPoint.y;u+=3*r*s*i.control1.y,u+=3*a*n*i.control2.y,u+=e*i.endPoint.y;const d=Math.min(i.startWidth+e*h,this.maxWidth);this._drawCurveSegment(l,u,d)}s.closePath(),s.fill()}_drawDot({color:t,point:i}){const s=this._ctx,h="function"==typeof this.dotSize?this.dotSize():this.dotSize;s.beginPath(),this._drawCurveSegment(i.x,i.y,h),s.closePath(),s.fillStyle=t,s.fill()}_fromData(t,i,s){for(const o of t){const{color:t,points:n}=o;if(n.length>1)for(let s=0;s<n.length;s+=1){const o=n[s],e=new h(o.x,o.y,o.time);this.penColor=t,0===s&&this._reset();const a=this._addPoint(e);a&&i({color:t,curve:a})}else this._reset(),s({color:t,point:n[0]})}}_toSVG(){const t=this._data,i=Math.max(window.devicePixelRatio||1,1),s=this.canvas.width/i,h=this.canvas.height/i,o=document.createElementNS("http://www.w3.org/2000/svg","svg");o.setAttribute("width",this.canvas.width.toString()),o.setAttribute("height",this.canvas.height.toString()),this._fromData(t,(({color:t,curve:i})=>{const s=document.createElement("path");if(!(isNaN(i.control1.x)||isNaN(i.control1.y)||isNaN(i.control2.x)||isNaN(i.control2.y))){const h=`M ${i.startPoint.x.toFixed(3)},${i.startPoint.y.toFixed(3)} C ${i.control1.x.toFixed(3)},${i.control1.y.toFixed(3)} ${i.control2.x.toFixed(3)},${i.control2.y.toFixed(3)} ${i.endPoint.x.toFixed(3)},${i.endPoint.y.toFixed(3)}`;s.setAttribute("d",h),s.setAttribute("stroke-width",(2.25*i.endWidth).toFixed(3)),s.setAttribute("stroke",t),s.setAttribute("fill","none"),s.setAttribute("stroke-linecap","round"),o.appendChild(s)}}),(({color:t,point:i})=>{const s=document.createElement("circle"),h="function"==typeof this.dotSize?this.dotSize():this.dotSize;s.setAttribute("r",h.toString()),s.setAttribute("cx",i.x.toString()),s.setAttribute("cy",i.y.toString()),s.setAttribute("fill",t),o.appendChild(s)}));const n=`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 ${s} ${h}" width="${s}" height="${h}">`;let e=o.innerHTML;if(void 0===e){const t=document.createElement("dummy"),i=o.childNodes;t.innerHTML="";for(let s=0;s<i.length;s+=1)t.appendChild(i[s].cloneNode(!0));e=t.innerHTML}return"data:image/svg+xml;base64,"+btoa(n+e+"</svg>")}}const e=class{constructor(s){t(this,s),this.ionChange=i(this,"ionChange",7),this.ionInput=i(this,"ionInput",7),this.name="signature",this.penColor="black",this.submitText="Submit",this.clearText="Clear",this.label="Sign Above",this.backgroundColor="rgb(255, 255, 255)",this.minWidth=.5,this.maxWidth=.5,this.throttle=16,this.minDistance=5,this.velocityFilterWeight=.7}onDataChange(){this.value&&this.fromData(this.value)}onBackgroundColorChange(){this.backgroundColor&&(this.pad.backgroundColor=this.backgroundColor)}onPenColorChange(){this.penColor&&(this.pad.penColor=this.penColor)}onMinWidthChange(){this.penColor&&(this.pad.minWidth=this.minWidth)}onMaxWidthChange(){this.penColor&&(this.pad.maxWidth=this.maxWidth)}onDotSizeChange(){this.penColor&&(this.pad.dotSize=this.dotSize)}onThrottleChange(){this.penColor&&(this.pad.throttle=this.throttle)}onMinDistanceChange(){this.penColor&&(this.pad.minDistance=this.minDistance)}onVelocityFilterWeightChange(){this.penColor&&(this.pad.velocityFilterWeight=this.velocityFilterWeight)}async onResize(){this.resizeCanvas()}async isEmpty(){return this.pad.isEmpty()}async downloadSVG(){if(this.pad.isEmpty())alert("Please provide a signature first.");else{var t=this.pad.toDataURL("image/svg+xml");this.download(t,"signature.svg")}}async downloadPNG(){if(this.pad.isEmpty())alert("Please provide a signature first.");else{var t=this.pad.toDataURL();this.download(t,"signature.png")}}async downloadJPG(){if(this.pad.isEmpty())alert("Please provide a signature first.");else{var t=this.pad.toDataURL("image/jpeg");this.download(t,"signature.jpg")}}async clear(){return this.pad.clear()}async undo(){const t=this.pad.toData();return t&&(t.pop(),this.pad.fromData(t)),t}async fromData(t){return this.pad.fromData(t)}async toData(){return this.pad.toData()}async download(t,i){if(navigator.userAgent.indexOf("Safari")>-1&&-1===navigator.userAgent.indexOf("Chrome"))window.open(t);else{var s=this.dataURLToBlob(t),h=window.URL.createObjectURL(s),o=document.createElement("a");o.style.display="none",o.href=h,o.download=i,document.body.appendChild(o),o.click(),window.URL.revokeObjectURL(h)}}async resizeCanvas(){var t=Math.max(window.devicePixelRatio||1,1);this.canvasEl.width=this.canvasEl.offsetWidth*t,this.canvasEl.height=this.canvasEl.offsetHeight*t,this.canvasEl.getContext("2d").scale(t,t),this.pad.clear()}async submit(){this.value=await this.toData(),this.ionChange.emit()}dataURLToBlob(t){var i=";base64,";if(-1==t.indexOf(i)){var s=(o=t.split(","))[0].split(":")[1],h=decodeURIComponent(o[1]);return new Blob([h],{type:s})}s=(o=t.split(i))[0].split(":")[1];for(var o,n=(h=window.atob(o[1])).length,e=new Uint8Array(n),a=0;a<n;++a)e[a]=h.charCodeAt(a);return new Blob([e],{type:s})}componentDidLoad(){this.pad=new n(this.canvasEl,{backgroundColor:this.backgroundColor,penColor:this.penColor,dotSize:this.dotSize,maxWidth:this.maxWidth,minDistance:this.minDistance,minWidth:this.minWidth,throttle:this.throttle,velocityFilterWeight:this.velocityFilterWeight,onEnd:()=>{this.ionInput.emit()}}),this.resizeCanvas()}render(){return s("ion-card",{id:"signature-pad",class:"signature-pad"},s("canvas",{ref:t=>this.canvasEl=t}),s("ion-icon",{class:"undo",name:"arrow-undo-circle-outline",onClick:()=>this.undo()}),s("div",{class:"signature-pad--footer"},s("div",{class:"signature-pad--actions"},s("ion-button",{fill:"outline",color:"medium",onClick:()=>this.clear()},this.clearText),s("p",null,this.label),s("ion-button",{color:"success",fill:"solid",onClick:()=>this.submit()},this.submitText))))}static get watchers(){return{value:["onDataChange"],backgroundColor:["onBackgroundColorChange"],penColor:["onPenColorChange"],minWidth:["onMinWidthChange"],maxWidth:["onMaxWidthChange"],dotSize:["onDotSizeChange"],throttle:["onThrottleChange"],minDistance:["onMinDistanceChange"],velocityFilterWeight:["onVelocityFilterWeightChange"]}}};e.style="floodteam-signature-pad{display:block;margin:0 auto}floodteam-signature-pad .signature-pad{position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;font-size:10px;width:100%;height:100%;max-width:700px;max-height:460px;background-color:#fff;border-radius:4px;padding:10px;margin:10px auto}floodteam-signature-pad canvas{box-shadow:0 0 5px rgba(0, 0, 0, 0.02) inset}floodteam-signature-pad .signature-pad ion-icon.undo{height:30px;width:30px;position:absolute;top:15px;left:15px;opacity:0.5}floodteam-signature-pad .signature-pad--footer{color:var(--ion-color-medium, #c3c3c3);text-align:center;font-size:1.2em;margin-top:8px}floodteam-signature-pad .signature-pad--actions{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;margin-top:8px}";export{e as floodteam_signature_pad}