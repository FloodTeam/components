import{r as n,h as t,a as r,H as i}from"./p-eb2b03ce.js";import{a as o}from"./p-eab67c09.js";var e=function(n,t){return Array.prototype.slice.call(n,t)},a="function"==typeof setImmediate?function(n){setImmediate(n)}:function(n){setTimeout(n,0)},u=function(n,t,r){n&&a((function(){n.apply(r||null,t||[])}))},c=function(n,t){var r=t||{},i={};return void 0===n&&(n={}),n.on=function(t,r){return i[t]?i[t].push(r):i[t]=[r],n},n.once=function(t,r){return r._once=!0,n.on(t,r),n},n.off=function(t,r){var o=arguments.length;if(1===o)delete i[t];else if(0===o)i={};else{var e=i[t];if(!e)return n;e.splice(e.indexOf(r),1)}return n},n.emit=function(){var t=e(arguments);return n.emitterSnapshot(t.shift()).apply(this,t)},n.emitterSnapshot=function(t){var o=(i[t]||[]).slice(0);return function(){var i=e(arguments),a=this||n;if("error"===t&&!1!==r.throws&&!o.length)throw 1===i.length?i[0]:i;return o.forEach((function(o){r.async?u(o,i,a):o.apply(a,i),o._once&&n.off(t,o)})),n}},n},d=o.CustomEvent,f=function(){try{var n=new d("cat",{detail:{foo:"bar"}});return"cat"===n.type&&"bar"===n.detail.foo}catch(n){}return!1}()?d:"undefined"!=typeof document&&"function"==typeof document.createEvent?function(n,t){var r=document.createEvent("CustomEvent");return t?r.initCustomEvent(n,t.bubbles,t.cancelable,t.detail):r.initCustomEvent(n,!1,!1,void 0),r}:function(n,t){var r=document.createEventObject();return r.type=n,t?(r.bubbles=Boolean(t.bubbles),r.cancelable=Boolean(t.cancelable),r.detail=t.detail):(r.bubbles=!1,r.cancelable=!1,r.detail=void 0),r},s=[],l="",v=/^on/;for(l in o)v.test(l)&&s.push(l.slice(2));var p=s,m=o.document,b=function(n,t,r,i){return n.addEventListener(t,r,i)},g=function(n,t,r,i){return n.removeEventListener(t,r,i)},h=[];o.addEventListener||(b=function(n,t,r){return n.attachEvent("on"+t,function(n,t,r){var i=y(n,t,r)||function(n,t,r){return function(t){var i=t||o.event;i.target=i.target||i.srcElement,i.preventDefault=i.preventDefault||function(){i.returnValue=!1},i.stopPropagation=i.stopPropagation||function(){i.cancelBubble=!0},i.which=i.which||i.keyCode,r.call(n,i)}}(n,0,r);return h.push({wrapper:i,element:n,type:t,fn:r}),i}(n,t,r))},g=function(n,t,r){var i=y(n,t,r);if(i)return n.detachEvent("on"+t,i)});var k={add:b,remove:g,fabricate:function(n,t,r){var i=-1===p.indexOf(t)?new f(t,{detail:r}):function(){var n;return m.createEvent?(n=m.createEvent("Event")).initEvent(t,!0,!0):m.createEventObject&&(n=m.createEventObject()),n}();n.dispatchEvent?n.dispatchEvent(i):n.fireEvent("on"+t,i)}};function y(n,t,r){var i=function(n,t,r){var i,o;for(i=0;i<h.length;i++)if((o=h[i]).element===n&&o.type===t&&o.fn===r)return i}(n,t,r);if(i){var o=h[i].wrapper;return h.splice(i,1),o}}var x={};function w(n){var t=x[n];return t?t.lastIndex=0:x[n]=t=new RegExp("(?:^|\\s)"+n+"(?:\\s|$)","g"),t}var _=function(n,t){var r=n.className;r.length?w(t).test(r)||(n.className+=" "+t):n.className=t},E=function(n,t){n.className=n.className.replace(w(t)," ").trim()},O=document,T=O.documentElement;function j(n,t,r,i){o.navigator.pointerEnabled?k[t](n,{mouseup:"pointerup",mousedown:"pointerdown",mousemove:"pointermove"}[r],i):o.navigator.msPointerEnabled?k[t](n,{mouseup:"MSPointerUp",mousedown:"MSPointerDown",mousemove:"MSPointerMove"}[r],i):(k[t](n,{mouseup:"touchend",mousedown:"touchstart",mousemove:"touchmove"}[r],i),k[t](n,r,i))}function z(n){if(void 0!==n.touches)return n.touches.length;if(void 0!==n.which&&0!==n.which)return n.which;if(void 0!==n.buttons)return n.buttons;var t=n.button;return void 0!==t?1&t?1:2&t?3:4&t?2:0:void 0}function I(n){var t=n.getBoundingClientRect();return{left:t.left+B("scrollLeft","pageXOffset"),top:t.top+B("scrollTop","pageYOffset")}}function B(n,t){return void 0!==o[t]?o[t]:T.clientHeight?T[n]:O.body[n]}function X(n,t,r){var i,o=(n=n||{}).className||"";return n.className+=" gu-hide",i=O.elementFromPoint(t,r),n.className=o,i}function A(){return!1}function M(){return!0}function Y(n){return n.width||n.right-n.left}function S(n){return n.height||n.bottom-n.top}function P(n){return n.parentNode===O?null:n.parentNode}function C(n){return"INPUT"===n.tagName||"TEXTAREA"===n.tagName||"SELECT"===n.tagName||L(n)}function L(n){return!!n&&"false"!==n.contentEditable&&("true"===n.contentEditable||L(P(n)))}function U(n){return n.nextElementSibling||function(){var t=n;do{t=t.nextSibling}while(t&&1!==t.nodeType);return t}()}function D(n,t){var r=function(n){return n.targetTouches&&n.targetTouches.length?n.targetTouches[0]:n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:n}(t),i={pageX:"clientX",pageY:"clientY"};return n in i&&!(n in r)&&i[n]in r&&(n=i[n]),r[n]}var H=function(n,t){var r,i,o,e,a,u,d,f,s,l,v,p=arguments.length;1===p&&!1===Array.isArray(n)&&(t=n,n=[]);var m,b=null,g=t||{};void 0===g.moves&&(g.moves=M),void 0===g.accepts&&(g.accepts=M),void 0===g.invalid&&(g.invalid=J),void 0===g.containers&&(g.containers=n||[]),void 0===g.isContainer&&(g.isContainer=A),void 0===g.copy&&(g.copy=!1),void 0===g.copySortSource&&(g.copySortSource=!1),void 0===g.revertOnSpill&&(g.revertOnSpill=!1),void 0===g.removeOnSpill&&(g.removeOnSpill=!1),void 0===g.direction&&(g.direction="vertical"),void 0===g.ignoreInputTextSelection&&(g.ignoreInputTextSelection=!0),void 0===g.mirrorContainer&&(g.mirrorContainer=O.body);var h=c({containers:g.containers,start:q,end:K,cancel:nn,remove:Z,destroy:L,canMove:$,dragging:!1});return!0===g.removeOnSpill&&h.on("over",an).on("out",un),x(),h;function y(n){return-1!==h.containers.indexOf(n)||g.isContainer(n)}function x(n){var t=n?"remove":"add";j(T,t,"mousedown",N),j(T,t,"mouseup",V)}function w(n){j(T,n?"remove":"add","mousemove",R)}function B(n){var t=n?"remove":"add";k[t](T,"selectstart",H),k[t](T,"click",H)}function L(){x(!0),V({})}function H(n){m&&n.preventDefault()}function N(n){if(u=n.clientX,d=n.clientY,1===z(n)&&!n.metaKey&&!n.ctrlKey){var t=n.target,r=G(t);r&&(m=r,w(),"mousedown"===n.type&&(C(t)?t.focus():n.preventDefault()))}}function R(n){if(m)if(0!==z(n)){if(!(void 0!==n.clientX&&Math.abs(n.clientX-u)<=(g.slideFactorX||0)&&void 0!==n.clientY&&Math.abs(n.clientY-d)<=(g.slideFactorY||0))){if(g.ignoreInputTextSelection){var t=D("clientX",n)||0,r=D("clientY",n)||0;if(C(O.elementFromPoint(t,r)))return}var i=m;w(!0),B(),K(),F(i);var c=I(o);e=D("pageX",n)-c.left,a=D("pageY",n)-c.top,_(l||o,"gu-transit"),cn(),en(n)}}else V({})}function G(n){if(!(h.dragging&&r||y(n))){for(var t=n;P(n)&&!1===y(P(n));){if(g.invalid(n,t))return;if(!(n=P(n)))return}var i=P(n);if(i&&!g.invalid(n,t)&&g.moves(n,i,t,U(n)))return{item:n,source:i}}}function $(n){return!!G(n)}function q(n){var t=G(n);t&&F(t)}function F(n){ln(n.item,n.source)&&(l=n.item.cloneNode(!0),h.emit("cloned",l,n.item,"copy")),i=n.source,o=n.item,f=s=U(n.item),h.dragging=!0,h.emit("drag",o,i)}function J(){return!1}function K(){if(h.dragging){var n=l||o;W(n,P(n))}}function Q(){m=!1,w(!0),B(!0)}function V(n){if(Q(),h.dragging){var t=l||o,e=D("clientX",n)||0,a=D("clientY",n)||0,u=on(X(r,e,a),e,a);u&&(l&&g.copySortSource||!l||u!==i)?W(t,u):g.removeOnSpill?Z():nn()}}function W(n,t){var r=P(n);l&&g.copySortSource&&t===i&&r.removeChild(o),rn(t)?h.emit("cancel",n,i,i):h.emit("drop",n,t,i,s),tn()}function Z(){if(h.dragging){var n=l||o,t=P(n);t&&t.removeChild(n),h.emit(l?"cancel":"remove",n,t,i),tn()}}function nn(n){if(h.dragging){var t=arguments.length>0?n:g.revertOnSpill,r=l||o,e=P(r),a=rn(e);!1===a&&t&&(l?e&&e.removeChild(l):i.insertBefore(r,f)),a||t?h.emit("cancel",r,i,i):h.emit("drop",r,e,i,s),tn()}}function tn(){var n=l||o;Q(),dn(),n&&E(n,"gu-transit"),v&&clearTimeout(v),h.dragging=!1,b&&h.emit("out",n,b,i),h.emit("dragend",n),i=o=l=f=s=v=b=null}function rn(n,t){var e;return e=void 0!==t?t:r?s:U(l||o),n===i&&e===f}function on(n,t,r){for(var e=n;e&&!a();)e=P(e);return e;function a(){if(!1===y(e))return!1;var a=fn(e,n),u=sn(e,a,t,r);return!!rn(e,u)||g.accepts(o,e,i,u)}}function en(n){if(r){n.preventDefault();var t=D("clientX",n)||0,u=D("clientY",n)||0,c=u-a;r.style.left=t-e+"px",r.style.top=c+"px";var d=l||o,v=X(r,t,u),p=on(v,t,u),m=null!==p&&p!==b;(m||null===p)&&(b&&w("out"),b=p,m&&w("over"));var k=P(d);if(p!==i||!l||g.copySortSource){var y,x=fn(p,v);if(null!==x)y=sn(p,x,t,u);else{if(!0!==g.revertOnSpill||l)return void(l&&k&&k.removeChild(d));y=f,p=i}(null===y&&m||y!==d&&y!==U(d))&&(s=y,p.insertBefore(d,y),h.emit("shadow",d,p,i))}else k&&k.removeChild(d)}function w(n){h.emit(n,d,b,i)}}function an(n){E(n,"gu-hide")}function un(n){h.dragging&&_(n,"gu-hide")}function cn(){if(!r){var n=o.getBoundingClientRect();(r=o.cloneNode(!0)).style.width=Y(n)+"px",r.style.height=S(n)+"px",E(r,"gu-transit"),_(r,"gu-mirror"),g.mirrorContainer.appendChild(r),j(T,"add","mousemove",en),_(g.mirrorContainer,"gu-unselectable"),h.emit("cloned",r,o,"mirror")}}function dn(){r&&(E(g.mirrorContainer,"gu-unselectable"),j(T,"remove","mousemove",en),P(r).removeChild(r),r=null)}function fn(n,t){for(var r=t;r!==n&&P(r)!==n;)r=P(r);return r===T?null:r}function sn(n,t,r,i){var o,e="horizontal"===g.direction;return t!==n?(o=t.getBoundingClientRect(),a(e?r>o.left+Y(o)/2:i>o.top+S(o)/2)):function(){var t,o,a,u=n.children.length;for(t=0;t<u;t++){if(a=(o=n.children[t]).getBoundingClientRect(),e&&a.left+a.width/2>r)return o;if(!e&&a.top+a.height/2>i)return o}return null}();function a(n){return n?U(t):t}}function ln(n,t){return"boolean"==typeof g.copy?g.copy:g.copy(n,t)}};!function(){this.jKanban=function(){var n=this,t={enabled:!1},r={enabled:!1};this._disallowedItemProperties=["id","title","click","drag","dragend","drop","order"],this.element="",this.container="",this.boardContainer=[],this.handlers=[],this.dragula=H,this.drake="",this.drakeBoard="",this.itemAddOptions=r,this.itemHandleOptions=t;var i={element:"",gutter:"15px",widthBoard:"250px",responsive:"700",responsivePercentage:!1,boards:[],dragBoards:!0,dragItems:!0,itemAddOptions:r,itemHandleOptions:t,dragEl:function(){},dragendEl:function(){},dropEl:function(){},dragBoard:function(){},dragendBoard:function(){},dropBoard:function(){},click:function(){},buttonClick:function(){}};function o(n,t){var r;for(r in t)t.hasOwnProperty(r)&&(n[r]=t[r]);return n}function e(){n.element=document.querySelector(n.options.element);var t=document.createElement("div");t.classList.add("kanban-container"),n.container=t,document.querySelector(n.options.element).dataset.hasOwnProperty("board")?(url=document.querySelector(n.options.element).dataset.board,window.fetch(url,{method:"GET",headers:{"Content-Type":"application/json"}}).then((t=>{t.json().then((function(t){n.options.boards=t,n.addBoards(n.options.boards,!0)}))})).catch((n=>{console.log("Error: ",n)}))):n.addBoards(n.options.boards,!0),n.element.appendChild(n.container)}function a(t){t.addEventListener("click",(function(t){t.preventDefault(),n.options.click(this),"function"==typeof this.clickfn&&this.clickfn(this)}))}function u(t,r){t.addEventListener("click",(function(t){t.preventDefault(),n.options.buttonClick(this,r)}))}function c(t){var r=[];return n.options.boards.map((function(n){if(n.id===t)return r.push(n)})),r[0]}function d(t,r){for(var i in r)n._disallowedItemProperties.indexOf(i)>-1||t.setAttribute("data-"+i,r[i])}function f(){for(var t=1,r=0;r<n.container.childNodes.length;r++)n.container.childNodes[r].dataset.order=t++}function s(t){var r=t;if(n.options.itemHandleOptions.enabled)if(void 0===(n.options.itemHandleOptions.customHandler||void 0)){var i=n.options.itemHandleOptions.customCssHandler,o=n.options.itemHandleOptions.customCssIconHandler;void 0===(i||void 0)&&(i="drag_handler"),void 0===(o||void 0)&&(o=i+"_icon"),r="<div class='item_handle "+i+"'><i class='item_handle "+o+"'></i></div><div>"+r+"</div>"}else r=n.options.itemHandleOptions.customHandler.replace("%s",r);return r}arguments[0]&&"object"==typeof arguments[0]&&(this.options=o(i,arguments[0])),this.__getCanMove=function(t){return n.options.itemHandleOptions.enabled?t.classList.contains(n.options.itemHandleOptions.handleClass?n.options.itemHandleOptions.handleClass:"item_handle"):!!n.options.dragItems},this.init=function(){e(),window.innerWidth>n.options.responsive&&(n.drakeBoard=n.dragula([n.container],{moves:function(t,r,i){return!!n.options.dragBoards&&(i.classList.contains("kanban-board-header")||i.classList.contains("kanban-title-board"))},accepts:function(n,t){return t.classList.contains("kanban-container")},revertOnSpill:!0,direction:"horizontal"}).on("drag",(function(t,r){t.classList.add("is-moving"),n.options.dragBoard(t,r),"function"==typeof t.dragfn&&t.dragfn(t,r)})).on("dragend",(function(t){f(),t.classList.remove("is-moving"),n.options.dragendBoard(t),"function"==typeof t.dragendfn&&t.dragendfn(t)})).on("drop",(function(t,r,i,o){t.classList.remove("is-moving"),n.options.dropBoard(t,r,i,o),"function"==typeof t.dropfn&&t.dropfn(t,r,i,o)})),n.drake=n.dragula(n.boardContainer,{moves:function(t,r,i){return n.__getCanMove(i)},revertOnSpill:!0}).on("cancel",(function(){n.enableAllBoards()})).on("drag",(function(t,r){var i=t.getAttribute("class");if(""!==i&&i.indexOf("not-draggable")>-1)n.drake.cancel(!0);else{t.classList.add("is-moving"),n.options.dragEl(t,r);var o=c(r.parentNode.dataset.id);void 0!==o.dragTo&&n.options.boards.map((function(t){-1===o.dragTo.indexOf(t.id)&&t.id!==r.parentNode.dataset.id&&n.findBoard(t.id).classList.add("disabled-board")})),null!==t&&"function"==typeof t.dragfn&&t.dragfn(t,r)}})).on("dragend",(function(t){n.options.dragendEl(t),null!==t&&"function"==typeof t.dragendfn&&t.dragendfn(t)})).on("drop",(function(t,r,i,o){n.enableAllBoards();var e=c(i.parentNode.dataset.id);void 0!==e.dragTo&&-1===e.dragTo.indexOf(r.parentNode.dataset.id)&&r.parentNode.dataset.id!==i.parentNode.dataset.id&&n.drake.cancel(!0),null!==t&&(!1===n.options.dropEl(t,r,i,o)&&n.drake.cancel(!0),t.classList.remove("is-moving"),"function"==typeof t.dropfn&&t.dropfn(t,r,i,o))})))},this.enableAllBoards=function(){var n=document.querySelectorAll(".kanban-board");if(n.length>0&&void 0!==n)for(var t=0;t<n.length;t++)n[t].classList.remove("disabled-board")},this.addElement=function(t,r){var i=n.element.querySelector('[data-id="'+t+'"] .kanban-drag'),o=document.createElement("div");return o.classList.add("kanban-item"),void 0!==r.id&&""!==r.id&&o.setAttribute("data-eid",r.id),r.class&&Array.isArray(r.class)&&r.class.forEach((function(n){o.classList.add(n)})),o.innerHTML=s(r.title),o.clickfn=r.click,o.dragfn=r.drag,o.dragendfn=r.dragend,o.dropfn=r.drop,d(o,r),a(o),n.options.itemHandleOptions.enabled&&(o.style.cursor="default"),i.appendChild(o),n},this.addForm=function(t,r){var i=n.element.querySelector('[data-id="'+t+'"] .kanban-drag'),o=r.getAttribute("class");return r.setAttribute("class",o+" not-draggable"),i.appendChild(r),n},this.addBoards=function(t,r){if(n.options.responsivePercentage)if(n.container.style.width="100%",n.options.gutter="1%",window.innerWidth>n.options.responsive)var i=(100-2*t.length)/t.length;else i=100-2*t.length;else i=n.options.widthBoard;var o=n.options.itemAddOptions.enabled,e=n.options.itemAddOptions.content,c=n.options.itemAddOptions.class,f=n.options.itemAddOptions.footer;for(var l in t){var v=t[l];r||n.options.boards.push(v),n.options.responsivePercentage||(n.container.style.width=""===n.container.style.width?parseInt(i)+2*parseInt(n.options.gutter)+"px":parseInt(n.container.style.width)+parseInt(i)+2*parseInt(n.options.gutter)+"px");var p=document.createElement("div");p.dataset.id=v.id,p.dataset.order=n.container.childNodes.length+1,p.classList.add("kanban-board"),p.style.width=n.options.responsivePercentage?i+"%":i,p.style.marginLeft=n.options.gutter,p.style.marginRight=n.options.gutter;var m=document.createElement("header");if(""!==v.class&&void 0!==v.class)var b=v.class.split(",");else b=[];m.classList.add("kanban-board-header"),b.map((function(n){n=n.replace(/^[ ]+/g,""),m.classList.add(n)})),m.innerHTML='<div class="kanban-title-board">'+v.title+"</div>";var g=document.createElement("main");if(g.classList.add("kanban-drag"),""!==v.bodyClass&&void 0!==v.bodyClass)var h=v.bodyClass.split(",");else h=[];for(var k in h.map((function(n){g.classList.add(n)})),n.boardContainer.push(g),v.item){var y=v.item[k],x=document.createElement("div");x.classList.add("kanban-item"),y.id&&(x.dataset.eid=y.id),y.class&&Array.isArray(y.class)&&y.class.forEach((function(n){x.classList.add(n)})),x.innerHTML=s(y.title),x.clickfn=y.click,x.dragfn=y.drag,x.dragendfn=y.dragend,x.dropfn=y.drop,d(x,y),a(x),n.options.itemHandleOptions.enabled&&(x.style.cursor="default"),g.appendChild(x)}var w=document.createElement("footer");if(o){var _=document.createElement("BUTTON"),E=document.createTextNode(e||"+");_.setAttribute("class",c||"kanban-title-button btn btn-default btn-xs"),_.appendChild(E),f?w.appendChild(_):m.appendChild(_),u(_,v.id)}p.appendChild(m),p.appendChild(g),p.appendChild(w),n.container.appendChild(p)}return n},this.findBoard=function(t){return n.element.querySelector('[data-id="'+t+'"]')},this.getParentBoardID=function(t){return"string"==typeof t&&(t=n.element.querySelector('[data-eid="'+t+'"]')),null===t?null:t.parentNode.parentNode.dataset.id},this.moveElement=function(n,t,r){if(n!==this.getParentBoardID(t))return this.removeElement(t),this.addElement(n,r)},this.replaceElement=function(t,r){var i=t;return"string"==typeof i&&(i=n.element.querySelector('[data-eid="'+t+'"]')),i.innerHTML=r.title,i.clickfn=r.click,i.dragfn=r.drag,i.dragendfn=r.dragend,i.dropfn=r.drop,d(i,r),n},this.findElement=function(t){return n.element.querySelector('[data-eid="'+t+'"]')},this.getBoardElements=function(t){return n.element.querySelector('[data-id="'+t+'"] .kanban-drag').childNodes},this.removeElement=function(t){return"string"==typeof t&&(t=n.element.querySelector('[data-eid="'+t+'"]')),null!==t&&("function"==typeof t.remove?t.remove():t.parentNode.removeChild(t)),n},this.removeBoard=function(t){var r=null;"string"==typeof t&&(r=n.element.querySelector('[data-id="'+t+'"]')),null!==r&&("function"==typeof r.remove?r.remove():r.parentNode.removeChild(r));for(var i=0;i<n.options.boards.length;i++)if(n.options.boards[i].id===t){n.options.boards.splice(i,1);break}return n},this.onButtonClick=function(){},this.init()}}();var N={};const R=Object.freeze(Object.assign(Object.create(null),N,{default:N})),G=class{constructor(t){n(this,t)}componentDidLoad(){this.kanban=new R(Object.assign({element:this.kanbanEl},this.options||{}))}render(){return t(i,null)}get kanbanEl(){return r(this)}};G.style='.kanban-container{position:relative;box-sizing:border-box;width:auto}.kanban-container *{box-sizing:border-box}.kanban-container:after{clear:both;display:block;content:""}.kanban-board{position:relative;float:left;background:#e2e4e6;transition:all 0.3s cubic-bezier(0.23, 1, 0.32, 1)}.kanban-board.disabled-board{opacity:0.3}.kanban-board.is-moving.gu-mirror{transform:rotate(3deg)}.kanban-board.is-moving.gu-mirror .kanban-drag{overflow:hidden;padding-right:50px}.kanban-board header{font-size:16px;padding:15px}.kanban-board header .kanban-title-board{font-weight:700;margin:0;padding:0;display:inline}.kanban-board header .kanban-title-button{float:right}.kanban-board .kanban-drag{min-height:200px;padding:20px}.kanban-board:after{clear:both;display:block;content:""}.kanban-item{background:#fff;padding:15px;margin-bottom:20px;transition:all 0.3s cubic-bezier(0.23, 1, 0.32, 1)}.kanban-item:hover{cursor:move}.kanban-item:last-child{margin:0}.kanban-item.is-moving.gu-mirror{transform:rotate(3deg);height:auto !important}.gu-mirror{position:fixed !important;margin:0 !important;z-index:9999 !important}.gu-hide{display:none !important}.gu-unselectable{-webkit-user-select:none !important;-moz-user-select:none !important;-ms-user-select:none !important;user-select:none !important}.gu-transit{opacity:0.2 !important;transform:rotate(0deg) !important}.drag_handler{background:#fff;border-radius:50%;width:24px;height:24px;position:relative;float:left;top:-3px;margin-right:4px}.drag_handler:hover{cursor:move}.drag_handler_icon{position:relative;display:block;background:#000;width:24px;height:2px;top:12px;transition:.5s ease-in-out}.drag_handler_icon:before,.drag_handler_icon:after{background:#000;content:\'\';display:block;width:100%;height:100%;position:absolute;transition:.5s ease-in-out}.drag_handler_icon:before{top:6px}.drag_handler_icon:after{bottom:6px}fireenjin-kanban{position:relative}';export{G as fireenjin_kanban}