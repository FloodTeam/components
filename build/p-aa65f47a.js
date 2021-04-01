function t(t){return"function"==typeof t}let s=!1;const i={Promise:void 0,set useDeprecatedSynchronousErrorHandling(t){if(t){const t=new Error;console.warn("DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n"+t.stack)}else s&&console.log("RxJS: Back to a better error behavior. Thank you. <3");s=t},get useDeprecatedSynchronousErrorHandling(){return s}};function r(t){setTimeout((()=>{throw t}),0)}const e={closed:!0,next(t){},error(t){if(i.useDeprecatedSynchronousErrorHandling)throw t;r(t)},complete(){}},n=Array.isArray||(t=>t&&"number"==typeof t.length),o=(()=>{function t(t){return Error.call(this),this.message=t?`${t.length} errors occurred during unsubscription:\n${t.map(((t,s)=>`${s+1}) ${t.toString()}`)).join("\n  ")}`:"",this.name="UnsubscriptionError",this.errors=t,this}return t.prototype=Object.create(Error.prototype),t})();class h{constructor(t){this.closed=!1,this._parentOrParents=null,this._subscriptions=null,t&&(this._ctorUnsubscribe=!0,this._unsubscribe=t)}unsubscribe(){let s;if(this.closed)return;let{_parentOrParents:i,_ctorUnsubscribe:r,_unsubscribe:e,_subscriptions:u}=this;if(this.closed=!0,this._parentOrParents=null,this._subscriptions=null,i instanceof h)i.remove(this);else if(null!==i)for(let t=0;t<i.length;++t)i[t].remove(this);if(t(e)){r&&(this._unsubscribe=void 0);try{e.call(this)}catch(t){s=t instanceof o?c(t.errors):[t]}}if(n(u)){let t=-1,i=u.length;for(;++t<i;){const i=u[t];if(null!==(f=i)&&"object"==typeof f)try{i.unsubscribe()}catch(t){s=s||[],t instanceof o?s=s.concat(c(t.errors)):s.push(t)}}}var f;if(s)throw new o(s)}add(t){let s=t;if(!t)return h.EMPTY;switch(typeof t){case"function":s=new h(t);case"object":if(s===this||s.closed||"function"!=typeof s.unsubscribe)return s;if(this.closed)return s.unsubscribe(),s;if(!(s instanceof h)){const t=s;s=new h,s._subscriptions=[t]}break;default:throw new Error("unrecognized teardown "+t+" added to Subscription.")}let{_parentOrParents:i}=s;if(null===i)s._parentOrParents=this;else if(i instanceof h){if(i===this)return s;s._parentOrParents=[i,this]}else{if(-1!==i.indexOf(this))return s;i.push(this)}const r=this._subscriptions;return null===r?this._subscriptions=[s]:r.push(s),s}remove(t){const s=this._subscriptions;if(s){const i=s.indexOf(t);-1!==i&&s.splice(i,1)}}}function c(t){return t.reduce(((t,s)=>t.concat(s instanceof o?s.errors:s)),[])}h.EMPTY=function(t){return t.closed=!0,t}(new h);const u="function"==typeof Symbol?Symbol("rxSubscriber"):"@@rxSubscriber_"+Math.random();class f extends h{constructor(t,s,i){switch(super(),this.syncErrorValue=null,this.syncErrorThrown=!1,this.syncErrorThrowable=!1,this.isStopped=!1,arguments.length){case 0:this.destination=e;break;case 1:if(!t){this.destination=e;break}if("object"==typeof t){t instanceof f?(this.syncErrorThrowable=t.syncErrorThrowable,this.destination=t,t.add(this)):(this.syncErrorThrowable=!0,this.destination=new l(this,t));break}default:this.syncErrorThrowable=!0,this.destination=new l(this,t,s,i)}}[u](){return this}static create(t,s,i){const r=new f(t,s,i);return r.syncErrorThrowable=!1,r}next(t){this.isStopped||this._next(t)}error(t){this.isStopped||(this.isStopped=!0,this._error(t))}complete(){this.isStopped||(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe())}_next(t){this.destination.next(t)}_error(t){this.destination.error(t),this.unsubscribe()}_complete(){this.destination.complete(),this.unsubscribe()}_unsubscribeAndRecycle(){const{_parentOrParents:t}=this;return this._parentOrParents=null,this.unsubscribe(),this.closed=!1,this.isStopped=!1,this._parentOrParents=t,this}}class l extends f{constructor(s,i,r,n){let o;super(),this._parentSubscriber=s;let h=this;t(i)?o=i:i&&(o=i.next,r=i.error,n=i.complete,i!==e&&(h=Object.create(i),t(h.unsubscribe)&&this.add(h.unsubscribe.bind(h)),h.unsubscribe=this.unsubscribe.bind(this))),this._context=h,this._next=o,this._error=r,this._complete=n}next(t){if(!this.isStopped&&this._next){const{_parentSubscriber:s}=this;i.useDeprecatedSynchronousErrorHandling&&s.syncErrorThrowable?this.__tryOrSetError(s,this._next,t)&&this.unsubscribe():this.__tryOrUnsub(this._next,t)}}error(t){if(!this.isStopped){const{_parentSubscriber:s}=this,{useDeprecatedSynchronousErrorHandling:e}=i;if(this._error)e&&s.syncErrorThrowable?(this.__tryOrSetError(s,this._error,t),this.unsubscribe()):(this.__tryOrUnsub(this._error,t),this.unsubscribe());else if(s.syncErrorThrowable)e?(s.syncErrorValue=t,s.syncErrorThrown=!0):r(t),this.unsubscribe();else{if(this.unsubscribe(),e)throw t;r(t)}}}complete(){if(!this.isStopped){const{_parentSubscriber:t}=this;if(this._complete){const s=()=>this._complete.call(this._context);i.useDeprecatedSynchronousErrorHandling&&t.syncErrorThrowable?(this.__tryOrSetError(t,s),this.unsubscribe()):(this.__tryOrUnsub(s),this.unsubscribe())}else this.unsubscribe()}}__tryOrUnsub(t,s){try{t.call(this._context,s)}catch(t){if(this.unsubscribe(),i.useDeprecatedSynchronousErrorHandling)throw t;r(t)}}__tryOrSetError(t,s,e){if(!i.useDeprecatedSynchronousErrorHandling)throw new Error("bad call");try{s.call(this._context,e)}catch(s){return i.useDeprecatedSynchronousErrorHandling?(t.syncErrorValue=s,t.syncErrorThrown=!0,!0):(r(s),!0)}return!1}_unsubscribe(){const{_parentSubscriber:t}=this;this._context=null,this._parentSubscriber=null,t.unsubscribe()}}const a="function"==typeof Symbol&&Symbol.observable||"@@observable";function b(t){return t}class p{constructor(t){this._isScalar=!1,t&&(this._subscribe=t)}lift(t){const s=new p;return s.source=this,s.operator=t,s}subscribe(t,s,r){const{operator:n}=this,o=function(t,s,i){if(t){if(t instanceof f)return t;if(t[u])return t[u]()}return t||s||i?new f(t,s,i):new f(e)}(t,s,r);if(o.add(n?n.call(o,this.source):this.source||i.useDeprecatedSynchronousErrorHandling&&!o.syncErrorThrowable?this._subscribe(o):this._trySubscribe(o)),i.useDeprecatedSynchronousErrorHandling&&o.syncErrorThrowable&&(o.syncErrorThrowable=!1,o.syncErrorThrown))throw o.syncErrorValue;return o}_trySubscribe(t){try{return this._subscribe(t)}catch(s){i.useDeprecatedSynchronousErrorHandling&&(t.syncErrorThrown=!0,t.syncErrorValue=s),function(t){for(;t;){const{closed:s,destination:i,isStopped:r}=t;if(s||r)return!1;t=i&&i instanceof f?i:null}return!0}(t)?t.error(s):console.warn(s)}}forEach(t,s){return new(s=d(s))(((s,i)=>{let r;r=this.subscribe((s=>{try{t(s)}catch(t){i(t),r&&r.unsubscribe()}}),i,s)}))}_subscribe(t){const{source:s}=this;return s&&s.subscribe(t)}[a](){return this}pipe(...t){return 0===t.length?this:(0===(s=t).length?b:1===s.length?s[0]:function(t){return s.reduce(((t,s)=>s(t)),t)})(this);var s}toPromise(t){return new(t=d(t))(((t,s)=>{let i;this.subscribe((t=>i=t),(t=>s(t)),(()=>t(i)))}))}}function d(t){if(t||(t=Promise),!t)throw new Error("no Promise impl found");return t}p.create=t=>new p(t);class y{constructor(t,s){this.project=t,this.thisArg=s}call(t,s){return s.subscribe(new w(t,this.project,this.thisArg))}}class w extends f{constructor(t,s,i){super(t),this.project=s,this.count=0,this.thisArg=i||this}_next(t){let s;try{s=this.project.call(this.thisArg,t,this.count++)}catch(t){return void this.destination.error(t)}this.destination.next(s)}}function _(s,i,r,e){return t(r)&&(e=r,r=void 0),e?_(s,i,r).pipe((o=t=>n(t)?e(...t):e(t),function(t){return t.lift(new y(o,undefined))})):new p((t=>{S(s,i,(function(s){t.next(arguments.length>1?Array.prototype.slice.call(arguments):s)}),t,r)}));var o}function S(t,s,i,r,e){let n;if(function(t){return t&&"function"==typeof t.addEventListener&&"function"==typeof t.removeEventListener}(t)){const r=t;t.addEventListener(s,i,e),n=()=>r.removeEventListener(s,i,e)}else if(function(t){return t&&"function"==typeof t.on&&"function"==typeof t.off}(t)){const r=t;t.on(s,i),n=()=>r.off(s,i)}else if(function(t){return t&&"function"==typeof t.addListener&&"function"==typeof t.removeListener}(t)){const r=t;t.addListener(s,i),n=()=>r.removeListener(s,i)}else{if(!t||!t.length)throw new TypeError("Invalid event target");for(let n=0,o=t.length;n<o;n++)S(t[n],s,i,r,e)}r.add(n)}export{p as O,_ as f}