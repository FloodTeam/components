import{r as t,c as e,B as n,h as i}from"./p-8710117e.js";import{m as r}from"./p-10a42245.js";import{g as s}from"./p-2d180048.js";import{b as o}from"./p-e369b114.js";import"./p-b561825f.js";import"./p-add30d46.js";import"./p-295f0cea.js";function a(t,e){const n={};for(const i of e)((null==t?void 0:t[i])||0===(null==t?void 0:t[i]))&&(n[i]=t[i]);return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const c=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=63&r|128):55296==(64512&r)&&i+1<t.length&&56320==(64512&t.charCodeAt(i+1))?(r=65536+((1023&r)<<10)+(1023&t.charCodeAt(++i)),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=63&r|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=63&r|128)}return e},l={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let e=0;e<t.length;e+=3){const r=t[e],s=e+1<t.length,o=s?t[e+1]:0,a=e+2<t.length,c=a?t[e+2]:0;let l=(15&o)<<2|c>>6,h=63&c;a||(h=64,s||(l=64)),i.push(n[r>>2],n[(3&r)<<4|o>>4],n[l],n[h])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(c(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):function(t){const e=[];let n=0,i=0;for(;n<t.length;){const r=t[n++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=t[n++];e[i++]=String.fromCharCode((31&r)<<6|63&s)}else if(r>239&&r<365){const s=((7&r)<<18|(63&t[n++])<<12|(63&t[n++])<<6|63&t[n++])-65536;e[i++]=String.fromCharCode(55296+(s>>10)),e[i++]=String.fromCharCode(56320+(1023&s))}else{const s=t[n++],o=t[n++];e[i++]=String.fromCharCode((15&r)<<12|(63&s)<<6|63&o)}}return e.join("")}(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let e=0;e<t.length;){const r=n[t.charAt(e++)],s=e<t.length?n[t.charAt(e)]:0;++e;const o=e<t.length?n[t.charAt(e)]:64;++e;const a=e<t.length?n[t.charAt(e)]:64;if(++e,null==r||null==s||null==o||null==a)throw Error();i.push(r<<2|s>>4),64!==o&&(i.push(s<<4&240|o>>2),64!==a&&i.push(o<<6&192|a))}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},h=function(t){return function(t){const e=c(t);return l.encodeByteArray(e,!0)}(t).replace(/\./g,"")},u=()=>{try{return function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==s)return s;throw new Error("Unable to locate global object.")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */().__FIREBASE_DEFAULTS__||(()=>{if("undefined"==typeof document)return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(t){return}const e=t&&function(t){try{return l.decodeString(t,!0)}catch(t){console.error("base64Decode failed: ",t)}return null}(t[1]);return e&&JSON.parse(e)})()}catch(t){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`)}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class d{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"==typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,f.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,p.prototype.create)}}class p{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},i=`${this.service}/${t}`,r=this.errors[t],s=r?function(t,e){return t.replace(m,((t,n)=>{const i=e[n];return null!=i?String(i):`<${n}?>`}))}(r,n):"Error";return new f(i,`${this.serviceName}: ${s} (${i}).`,n)}}const m=/\{\$([^}]+)}/g;function g(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const r of n){if(!i.includes(r))return!1;const n=t[r],s=e[r];if(b(n)&&b(s)){if(!g(n,s))return!1}else if(n!==s)return!1}for(const t of i)if(!n.includes(t))return!1;return!0}function b(t){return null!==t&&"object"==typeof t}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w(t){return t&&t._delegate?t._delegate:t}class v{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class y{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new d;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(t){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null==t?void 0:t.identifier),i=null!==(e=null==t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(t){if(i)return null;throw t}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(function(t){return"EAGER"===t.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t))try{this.getOrInitializeService({instanceIdentifier:"[DEFAULT]"})}catch(t){}for(const[t,e]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:n});e.resolve(t)}catch(t){}}}}clearInstance(t="[DEFAULT]"){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t="[DEFAULT]"){return this.instances.has(t)}getOptions(t="[DEFAULT]"){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[t,e]of this.instancesDeferred.entries())n===this.normalizeInstanceIdentifier(t)&&e.resolve(i);return i}onInit(t,e){var n;const i=this.normalizeInstanceIdentifier(e),r=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;r.add(t),this.onInitCallbacks.set(i,r);const s=this.instances.get(i);return s&&t(s,i),()=>{r.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const i of n)try{i(t,e)}catch(t){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(i=t,"[DEFAULT]"===i?void 0:i),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(t){}var i;return n||null}normalizeInstanceIdentifier(t="[DEFAULT]"){return this.component?this.component.multipleInstances?t:"[DEFAULT]":t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class E{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new y(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var k;!function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"}(k||(k={}));const I={debug:k.DEBUG,verbose:k.VERBOSE,info:k.INFO,warn:k.WARN,error:k.ERROR,silent:k.SILENT},C=k.INFO,T={[k.DEBUG]:"log",[k.VERBOSE]:"log",[k.INFO]:"info",[k.WARN]:"warn",[k.ERROR]:"error"},A=(t,e,...n)=>{if(e<t.logLevel)return;const i=(new Date).toISOString(),r=T[e];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[r](`[${i}]  ${t.name}:`,...n)};let $,D;const S=new WeakMap,B=new WeakMap,R=new WeakMap,j=new WeakMap,O=new WeakMap;let U={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return B.get(t);if("objectStoreNames"===e)return t.objectStoreNames||R.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return _(t[e])},set:(t,e,n)=>(t[e]=n,!0),has:(t,e)=>t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t};function x(t){return"function"==typeof t?(e=t)!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(D||(D=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(M(this),t),_(S.get(this))}:function(...t){return _(e.apply(M(this),t))}:function(t,...n){const i=e.call(M(this),t,...n);return R.set(i,t.sort?t.sort():[t]),_(i)}:(t instanceof IDBTransaction&&function(t){if(B.has(t))return;const e=new Promise(((e,n)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",s),t.removeEventListener("abort",s)},r=()=>{e(),i()},s=()=>{n(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",s),t.addEventListener("abort",s)}));B.set(t,e)}(t),n=t,($||($=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((t=>n instanceof t))?new Proxy(t,U):t);var e,n}function _(t){if(t instanceof IDBRequest)return function(t){const e=new Promise(((e,n)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",s)},r=()=>{e(_(t.result)),i()},s=()=>{n(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",s)}));return e.then((e=>{e instanceof IDBCursor&&S.set(e,t)})).catch((()=>{})),O.set(e,t),e}(t);if(j.has(t))return j.get(t);const e=x(t);return e!==t&&(j.set(t,e),O.set(e,t)),e}const M=t=>O.get(t),P=["get","getKey","getAll","getAllKeys","count"],L=["put","add","delete","clear"],N=new Map;function F(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!=typeof e)return;if(N.get(e))return N.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,r=L.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!r&&!P.includes(n))return;const s=async function(t,...e){const s=this.transaction(t,r?"readwrite":"readonly");let o=s.store;return i&&(o=o.index(e.shift())),(await Promise.all([o[n](...e),r&&s.done]))[0]};return N.set(e,s),s}var z;z=U,U={...z,get:(t,e,n)=>F(t,e)||z.get(t,e,n),has:(t,e)=>!!F(t,e)||z.has(t,e)};
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class H{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map((t=>{if(function(t){const e=t.getComponent();return"VERSION"===(null==e?void 0:e.type)}(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}const W="@firebase/app",V=new class{constructor(t){this.name=t,this._logLevel=C,this._logHandler=A,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in k))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"==typeof t?I[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!=typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,k.DEBUG,...t),this._logHandler(this,k.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,k.VERBOSE,...t),this._logHandler(this,k.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,k.INFO,...t),this._logHandler(this,k.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,k.WARN,...t),this._logHandler(this,k.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,k.ERROR,...t),this._logHandler(this,k.ERROR,...t)}}("@firebase/app"),J={[W]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},q=new Map,K=new Map;function G(t,e){try{t.container.addComponent(e)}catch(n){V.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function X(t){const e=t.name;if(K.has(e))return V.debug(`There were multiple attempts to register component ${e}.`),!1;K.set(e,t);for(const e of q.values())G(e,t);return!0}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Z=new p("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Y{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new v("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Z.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q(t,e,n){var i;let r=null!==(i=J[t])&&void 0!==i?i:t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const t=[`Unable to register library "${r}" with version "${e}":`];return s&&t.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&t.push("and"),o&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void V.warn(t.join(" "))}X(new v(`${r}-version`,(()=>({library:r,version:e})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tt="firebase-heartbeat-store";let et=null;function nt(){return et||(et=function(t,e,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(t,e),a=_(o);return i&&o.addEventListener("upgradeneeded",(t=>{i(_(o.result),t.oldVersion,t.newVersion,_(o.transaction))})),n&&o.addEventListener("blocked",(()=>n())),a.then((t=>{s&&t.addEventListener("close",(()=>s())),r&&t.addEventListener("versionchange",(()=>r()))})).catch((()=>{})),a}("firebase-heartbeat-database",1,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(tt)}}}).catch((t=>{throw Z.create("idb-open",{originalErrorMessage:t.message})}))),et}async function it(t,e){var n;try{const n=(await nt()).transaction(tt,"readwrite"),i=n.objectStore(tt);return await i.put(e,rt(t)),n.done}catch(t){if(t instanceof f)V.warn(t.message);else{const e=Z.create("idb-set",{originalErrorMessage:null===(n=t)||void 0===n?void 0:n.message});V.warn(e.message)}}}function rt(t){return`${t.name}!${t.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new at(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),e=ot();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==e&&!this._heartbeatsCache.heartbeats.some((t=>t.date===e)))return this._heartbeatsCache.heartbeats.push({date:e,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((t=>{const e=new Date(t.date).valueOf();return Date.now()-e<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const t=ot(),{heartbeatsToSend:e,unsentEntries:n}=function(t,e=1024){const n=[];let i=t.slice();for(const r of t){const t=n.find((t=>t.agent===r.agent));if(t){if(t.dates.push(r.date),ct(n)>e){t.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),ct(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}(this._heartbeatsCache.heartbeats),i=h(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function ot(){return(new Date).toISOString().substring(0,10)}class at{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return"object"==typeof indexedDB&&new Promise(((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var t;e((null===(t=r.error)||void 0===t?void 0:t.message)||"")}}catch(t){e(t)}})).then((()=>!0)).catch((()=>!1))}async read(){return await this._canUseIndexedDBPromise&&await async function(t){var e;try{return(await nt()).transaction(tt).objectStore(tt).get(rt(t))}catch(t){if(t instanceof f)V.warn(t.message);else{const n=Z.create("idb-get",{originalErrorMessage:null===(e=t)||void 0===e?void 0:e.message});V.warn(n.message)}}}(this.app)||{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const n=await this.read();return it(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;if(await this._canUseIndexedDBPromise){const n=await this.read();return it(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}}function ct(t){return h(JSON.stringify({version:2,heartbeats:t})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var lt;X(new v("platform-logger",(t=>new H(t)),"PRIVATE")),X(new v("heartbeat",(t=>new st(t)),"PRIVATE")),Q(W,"0.8.3",""),Q(W,"0.8.3","esm2017"),Q("fire-js","");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ht extends f{constructor(t,e,n=0){super(ut(t),`Firebase Storage: ${e} (${ut(t)})`),this.status_=n,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ht.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return ut(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.message=this.customData.serverResponse?`${this._baseMessage}\n${this.customData.serverResponse}`:this._baseMessage}}function ut(t){return"storage/"+t}function dt(){return new ht("unknown","An unknown error occurred, please check the error payload for server response.")}function ft(t){return new ht("invalid-argument",t)}function pt(){return new ht("app-deleted","The Firebase app was deleted.")}function mt(t,e){return new ht("invalid-format","String does not match format '"+t+"': "+e)}function gt(t){throw new ht("internal-error","Internal error: "+t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(t,e){this.bucket=t,this.path_=e}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,e){let n;try{n=bt.makeFromUrl(t,e)}catch(e){return new bt(t,"")}if(""===n.path)return n;throw new ht("invalid-default-bucket","Invalid default bucket '"+t+"'.")}static makeFromUrl(t,e){let n=null;const i="([A-Za-z0-9.\\-_]+)",r=new RegExp("^gs://"+i+"(/(.*))?$","i");function s(t){t.path_=decodeURIComponent(t.path)}const o=e.replace(/[.]/g,"\\."),a=[{regex:r,indices:{bucket:1,path:3},postModify:function(t){"/"===t.path.charAt(t.path.length-1)&&(t.path_=t.path_.slice(0,-1))}},{regex:new RegExp(`^https?://${o}/v[A-Za-z0-9_]+/b/${i}/o(/([^?#]*).*)?$`,"i"),indices:{bucket:1,path:3},postModify:s},{regex:new RegExp(`^https?://${"firebasestorage.googleapis.com"===e?"(?:storage.googleapis.com|storage.cloud.google.com)":e}/${i}/([^?#]*)`,"i"),indices:{bucket:1,path:2},postModify:s}];for(let e=0;e<a.length;e++){const i=a[e],r=i.regex.exec(t);if(r){let t=r[i.indices.path];t||(t=""),n=new bt(r[i.indices.bucket],t),i.postModify(n);break}}if(null==n)throw function(t){return new ht("invalid-url","Invalid URL '"+t+"'.")}(t);return n}}class wt{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vt(t){return"string"==typeof t||t instanceof String}function yt(t){return Et()&&t instanceof Blob}function Et(){return"undefined"!=typeof Blob&&!function(){try{return"[object process]"===Object.prototype.toString.call(s.process)}catch(t){return!1}}()}function kt(t,e,n,i){if(i<e)throw ft(`Invalid value for '${t}'. Expected ${e} or greater.`);if(i>n)throw ft(`Invalid value for '${t}'. Expected ${n} or less.`)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function It(t,e,n){let i=e;return null==n&&(i=`https://${e}`),`${n}://${i}/v0${t}`}function Ct(t){const e=encodeURIComponent;let n="?";for(const i in t)t.hasOwnProperty(i)&&(n=n+(e(i)+"=")+e(t[i])+"&");return n=n.slice(0,-1),n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"}(lt||(lt={}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Tt{constructor(t,e,n,i,r,s,o,a,c,l,h,u=!0){this.url_=t,this.method_=e,this.headers_=n,this.body_=i,this.successCodes_=r,this.additionalRetryCodes_=s,this.callback_=o,this.errorCallback_=a,this.timeout_=c,this.progressCallback_=l,this.connectionFactory_=h,this.retry=u,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise(((t,e)=>{this.resolve_=t,this.reject_=e,this.start_()}))}start_(){const t=(t,e)=>{const n=this.resolve_,i=this.reject_,r=e.connection;if(e.wasSuccessCode)try{const t=this.callback_(r,r.getResponse());void 0!==t?n(t):n()}catch(t){i(t)}else if(null!==r){const t=dt();t.serverResponse=r.getErrorText(),i(this.errorCallback_?this.errorCallback_(r,t):t)}else i(e.canceled?this.appDelete_?pt():new ht("canceled","User canceled the upload/download."):new ht("retry-limit-exceeded","Max retry time for operation exceeded, please try again."))};this.canceled_?t(0,new At(!1,null,!0)):this.backoffId_=function(t,e,n){let i=1,r=null,s=null,o=!1,a=0;function c(){return 2===a}let l=!1;function h(...t){l||(l=!0,e.apply(null,t))}function u(e){r=setTimeout((()=>{r=null,t(f,c())}),e)}function d(){s&&clearTimeout(s)}function f(t,...e){if(l)return void d();if(t)return d(),void h.call(null,t,...e);if(c()||o)return d(),void h.call(null,t,...e);let n;i<64&&(i*=2),1===a?(a=2,n=0):n=1e3*(i+Math.random()),u(n)}let p=!1;function m(t){p||(p=!0,d(),l||(null!==r?(t||(a=2),clearTimeout(r),u(0)):t||(a=1)))}return u(0),s=setTimeout((()=>{o=!0,m(!0)}),n),m}(((t,e)=>{if(e)return void t(!1,new At(!1,null,!0));const n=this.connectionFactory_();this.pendingConnection_=n;const i=t=>{null!==this.progressCallback_&&this.progressCallback_(t.loaded,t.lengthComputable?t.total:-1)};null!==this.progressCallback_&&n.addUploadProgressListener(i),n.send(this.url_,this.method_,this.body_,this.headers_).then((()=>{null!==this.progressCallback_&&n.removeUploadProgressListener(i),this.pendingConnection_=null;const e=n.getErrorCode()===lt.NO_ERROR,r=n.getStatus();if((!e||
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(t,e){const n=t>=500&&t<600,i=-1!==[408,429].indexOf(t),r=-1!==e.indexOf(t);return n||i||r}(r,this.additionalRetryCodes_))&&this.retry){const e=n.getErrorCode()===lt.ABORT;return void t(!1,new At(!1,null,e))}const s=-1!==this.successCodes_.indexOf(r);t(!0,new At(s,n))}))}),t,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,null!==this.backoffId_&&(0,this.backoffId_)(!1),null!==this.pendingConnection_&&this.pendingConnection_.abort()}}class At{constructor(t,e,n){this.wasSuccessCode=t,this.connection=e,this.canceled=!!n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function $t(){return"undefined"!=typeof BlobBuilder?BlobBuilder:"undefined"!=typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0}function Dt(...t){const e=$t();if(void 0!==e){const n=new e;for(let e=0;e<t.length;e++)n.append(t[e]);return n.getBlob()}if(Et())return new Blob(t);throw new ht("unsupported-environment","This browser doesn't seem to support creating Blobs")}class St{constructor(t,e){this.data=t,this.contentType=e||null}}function Bt(t){const e=[];for(let n=0;n<t.length;n++){let i=t.charCodeAt(n);i<=127?e.push(i):i<=2047?e.push(192|i>>6,128|63&i):55296==(64512&i)?n<t.length-1&&56320==(64512&t.charCodeAt(n+1))?(i=65536|(1023&i)<<10|1023&t.charCodeAt(++n),e.push(240|i>>18,128|i>>12&63,128|i>>6&63,128|63&i)):e.push(239,191,189):56320==(64512&i)?e.push(239,191,189):e.push(224|i>>12,128|i>>6&63,128|63&i)}return new Uint8Array(e)}function Rt(t,e){switch(t){case"base64":{const n=-1!==e.indexOf("-"),i=-1!==e.indexOf("_");if(n||i)throw mt(t,"Invalid character '"+(n?"-":"_")+"' found: is it base64url encoded?");break}case"base64url":{const n=-1!==e.indexOf("+"),i=-1!==e.indexOf("/");if(n||i)throw mt(t,"Invalid character '"+(n?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=atob(e)}catch(e){throw mt(t,"Invalid character found")}const i=new Uint8Array(n.length);for(let t=0;t<n.length;t++)i[t]=n.charCodeAt(t);return i}class jt{constructor(t){this.base64=!1,this.contentType=null;const e=t.match(/^data:([^,]+)?,/);if(null===e)throw mt("data_url","Must be formatted 'data:[<mediatype>][;base64],<data>");const n=e[1]||null;var i,r;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */null!=n&&(this.base64=(i=n).length>=(r=";base64").length&&i.substring(i.length-r.length)===r,this.contentType=this.base64?n.substring(0,n.length-";base64".length):n),this.rest=t.substring(t.indexOf(",")+1)}}class Ot{constructor(t,e){let n=0,i="";yt(t)?(this.data_=t,n=t.size,i=t.type):t instanceof ArrayBuffer?(e?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),n=this.data_.length):t instanceof Uint8Array&&(e?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),n=t.length),this.size_=n,this.type_=i}size(){return this.size_}type(){return this.type_}slice(t,e){if(yt(this.data_)){const s=(i=t,r=e,(n=this.data_).webkitSlice?n.webkitSlice(i,r):n.mozSlice?n.mozSlice(i,r):n.slice?n.slice(i,r):null);return null===s?null:new Ot(s)}var n,i,r;
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */{const n=new Uint8Array(this.data_.buffer,t,e-t);return new Ot(n,!0)}}static getBlob(...t){if(Et()){const e=t.map((t=>t instanceof Ot?t.data_:t));return new Ot(Dt.apply(null,e))}{const e=t.map((t=>vt(t)?function(t,e){switch(t){case"raw":return new St(Bt(e));case"base64":case"base64url":return new St(Rt(t,e));case"data_url":return new St(function(t){const e=new jt(t);return e.base64?Rt("base64",e.rest):function(t){let e;try{e=decodeURIComponent(t)}catch(t){throw mt("data_url","Malformed data URL.")}return Bt(e)}(e.rest)}(e),new jt(e).contentType)}throw dt()}("raw",t).data:t.data_));let n=0;e.forEach((t=>{n+=t.byteLength}));const i=new Uint8Array(n);let r=0;return e.forEach((t=>{for(let e=0;e<t.length;e++)i[r++]=t[e]})),new Ot(i,!0)}}uploadData(){return this.data_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ut(t){let e;try{e=JSON.parse(t)}catch(t){return null}return"object"!=typeof(n=e)||Array.isArray(n)?null:e;var n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xt(t){const e=t.lastIndexOf("/",t.length-2);return-1===e?t:t.slice(e+1)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _t(t,e){return e}class Mt{constructor(t,e,n,i){this.server=t,this.local=e||t,this.writable=!!n,this.xform=i||_t}}let Pt=null;function Lt(){if(Pt)return Pt;const t=[];t.push(new Mt("bucket")),t.push(new Mt("generation")),t.push(new Mt("metageneration")),t.push(new Mt("name","fullPath",!0));const e=new Mt("name");e.xform=function(t,e){return function(t){return!vt(t)||t.length<2?t:xt(t)}(e)},t.push(e);const n=new Mt("size");return n.xform=function(t,e){return void 0!==e?Number(e):e},t.push(n),t.push(new Mt("timeCreated")),t.push(new Mt("updated")),t.push(new Mt("md5Hash",null,!0)),t.push(new Mt("cacheControl",null,!0)),t.push(new Mt("contentDisposition",null,!0)),t.push(new Mt("contentEncoding",null,!0)),t.push(new Mt("contentLanguage",null,!0)),t.push(new Mt("contentType",null,!0)),t.push(new Mt("metadata","customMetadata",!0)),Pt=t,Pt}function Nt(t,e,n){const i=Ut(e);return null===i?null:function(t,e,n){const i={type:"file"},r=n.length;for(let t=0;t<r;t++){const r=n[t];i[r.local]=r.xform(i,e[r.server])}return function(t,e){Object.defineProperty(t,"ref",{get:function(){const n=new bt(t.bucket,t.fullPath);return e._makeStorageReference(n)}})}(i,t),i}(t,i,n)}class Ft{constructor(t,e,n,i){this.url=t,this.method=e,this.handler=n,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zt(t){if(!t)throw dt()}function Ht(t){return function(e,n){let i;return i=401===e.getStatus()?e.getErrorText().includes("Firebase App Check token is invalid")?new ht("unauthorized-app","This app does not have permission to access Firebase Storage on this project."):new ht("unauthenticated","User is not authenticated, please authenticate using Firebase Authentication and try again."):402===e.getStatus()?new ht("quota-exceeded","Quota for bucket '"+t.bucket+"' exceeded, please view quota on https://firebase.google.com/pricing/."):403===e.getStatus()?new ht("unauthorized","User does not have permission to access '"+t.path+"'."):n,i.status=e.getStatus(),i.serverResponse=n.serverResponse,i}}class Wt extends class{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=lt.NO_ERROR,this.sendPromise_=new Promise((t=>{this.xhr_.addEventListener("abort",(()=>{this.errorCode_=lt.ABORT,t()})),this.xhr_.addEventListener("error",(()=>{this.errorCode_=lt.NETWORK_ERROR,t()})),this.xhr_.addEventListener("load",(()=>{t()}))}))}send(t,e,n,i){if(this.sent_)throw gt("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(e,t,!0),void 0!==i)for(const t in i)i.hasOwnProperty(t)&&this.xhr_.setRequestHeader(t,i[t].toString());return void 0!==n?this.xhr_.send(n):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw gt("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw gt("cannot .getStatus() before sending");try{return this.xhr_.status}catch(t){return-1}}getResponse(){if(!this.sent_)throw gt("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw gt("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){null!=this.xhr_.upload&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){null!=this.xhr_.upload&&this.xhr_.upload.removeEventListener("progress",t)}}{initXhr(){this.xhr_.responseType="text"}}function Vt(){return new Wt}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(t,e){this._service=t,this._location=e instanceof bt?e:bt.makeFromUrl(e,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,e){return new Jt(t,e)}get root(){const t=new bt(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return xt(this._location.path)}get storage(){return this._service}get parent(){const t=function(t){if(0===t.length)return null;const e=t.lastIndexOf("/");return-1===e?"":t.slice(0,e)}(this._location.path);if(null===t)return null;const e=new bt(this._location.bucket,t);return new Jt(this._service,e)}_throwIfRoot(t){if(""===this._location.path)throw function(t){return new ht("invalid-root-operation","The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}(t)}}function qt(t){t._throwIfRoot("getDownloadURL");const e=function(t,e,n){const i=It(e.fullServerUrl(),t.host,t._protocol),r=t.maxOperationRetryTime,s=new Ft(i,"GET",function(t,e){return function(n,i){const r=Nt(t,i,e);return zt(null!==r),function(t,e,n,i){const r=Ut(e);if(null===r)return null;if(!vt(r.downloadTokens))return null;const s=r.downloadTokens;if(0===s.length)return null;const o=encodeURIComponent;return s.split(",").map((e=>{const r=t.fullPath;return It("/b/"+o(t.bucket)+"/o/"+o(r),n,i)+Ct({alt:"media",token:e})}))[0]}(r,i,t.host,t._protocol)}}(t,n),r);return s.errorHandler=function(t){const e=Ht(t);return function(n,i){let r=e(n,i);return 404===n.getStatus()&&(r=new ht("object-not-found","Object '"+t.path+"' does not exist.")),r.serverResponse=i.serverResponse,r}}(e),s}(t.storage,t._location,Lt());return t.storage.makeRequestWithTokens(e,Vt).then((t=>{if(null===t)throw new ht("no-download-url","The given file does not have any download URLs.");return t}))}function Kt(t,e){if(t instanceof Zt){const n=t;if(null==n._bucket)throw new ht("no-default-bucket","No default bucket found. Did you set the 'storageBucket' property when initializing the app?");const i=new Jt(n,n._bucket);return null!=e?Kt(i,e):i}return void 0!==e?function(t,e){const n=function(t,e){const n=e.split("/").filter((t=>t.length>0)).join("/");return 0===t.length?n:t+"/"+n}(t._location.path,e),i=new bt(t._location.bucket,n);return new Jt(t.storage,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t,e):t}function Gt(t,e){if(e&&/^[A-Za-z]+:\/\//.test(e)){if(t instanceof Zt)return new Jt(t,e);throw ft("To use ref(service, url), the first argument must be a Storage instance.")}return Kt(t,e)}function Xt(t,e){const n=null==e?void 0:e.storageBucket;return null==n?null:bt.makeFromBucketSpec(n,t)}class Zt{constructor(t,e,n,i,r){this.app=t,this._authProvider=e,this._appCheckProvider=n,this._url=i,this._firebaseVersion=r,this._bucket=null,this._host="firebasestorage.googleapis.com",this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=12e4,this._maxUploadRetryTime=6e5,this._requests=new Set,this._bucket=null!=i?bt.makeFromBucketSpec(i,this._host):Xt(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._bucket=null!=this._url?bt.makeFromBucketSpec(this._url,t):Xt(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){kt("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){kt("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const e=await t.getToken();if(null!==e)return e.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach((t=>t.cancel())),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new Jt(this,t)}_makeRequest(t,e,n,i,r=!0){if(this._deleted)return new wt(pt());{const s=function(t,e,n,i,r,s,o=!0){const a=Ct(t.urlParams),c=t.url+a,l=Object.assign({},t.headers);return function(t,e){e&&(t["X-Firebase-GMPID"]=e)}(l,e),function(t,e){null!==e&&e.length>0&&(t.Authorization="Firebase "+e)}(l,n),function(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(null!=e?e:"AppManager")}(l,s),function(t,e){null!==e&&(t["X-Firebase-AppCheck"]=e)}(l,i),new Tt(c,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,r,o)}(t,this._appId,n,i,e,this._firebaseVersion,r);return this._requests.add(s),s.getPromise().then((()=>this._requests.delete(s)),(()=>this._requests.delete(s))),s}}async makeRequestWithTokens(t,e){const[n,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,e,n,i).getPromise()}}const Yt="@firebase/storage";function Qt(t,e,n){return function(t,e,n){t._throwIfRoot("uploadBytes");const i=function(t,e,n,i,r){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"},a=function(){let t="";for(let e=0;e<2;e++)t+=Math.random().toString().slice(2);return t}();o["Content-Type"]="multipart/related; boundary="+a;const c=function(t,e,n){const i=Object.assign({},n);return i.fullPath=t.path,i.size=e.size(),i.contentType||(i.contentType=function(t,e){return e&&e.type()||"application/octet-stream"}(0,e)),i}(e,i,r),l=function(t,e){const n={},i=e.length;for(let r=0;r<i;r++){const i=e[r];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}(c,n),h=Ot.getBlob("--"+a+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+l+"\r\n--"+a+"\r\nContent-Type: "+c.contentType+"\r\n\r\n",i,"\r\n--"+a+"--");if(null===h)throw new ht("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.");const u={name:c.fullPath},d=It(s,t.host,t._protocol),f=t.maxUploadRetryTime,p=new Ft(d,"POST",function(t,e){return function(n,i){const r=Nt(t,i,e);return zt(null!==r),r}}(t,n),f);return p.urlParams=u,p.headers=o,p.body=h.uploadData(),p.errorHandler=Ht(e),p}(t.storage,t._location,Lt(),new Ot(e,!0),n);return t.storage.makeRequestWithTokens(i,Vt).then((e=>({metadata:e,ref:t})))}(t=w(t),e,n)}function te(t=function(t="[DEFAULT]"){const e=q.get(t);if(!e&&"[DEFAULT]"===t)return function(t,e={}){let n=t;"object"!=typeof e&&(e={name:e});const i=Object.assign({name:"[DEFAULT]",automaticDataCollectionEnabled:!1},e),r=i.name;if("string"!=typeof r||!r)throw Z.create("bad-app-name",{appName:String(r)});var s;if(n||(n=null===(s=u())||void 0===s?void 0:s.config),!n)throw Z.create("no-options");const o=q.get(r);if(o){if(g(n,o.options)&&g(i,o.config))return o;throw Z.create("duplicate-app",{appName:r})}const a=new E(r);for(const t of K.values())a.addComponent(t);const c=new Y(n,i,a);return q.set(r,c),c}();if(!e)throw Z.create("no-app",{appName:t});return e}(),e){const n=function(t){const e=t.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),t.container.getProvider("storage")}(t=w(t)).getImmediate({identifier:e}),i=(t=>{const e=(t=>{var e,n;return null===(n=null===(e=u())||void 0===e?void 0:e.emulatorHosts)||void 0===n?void 0:n[t]})(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return"["===e[0]?[e.substring(1,n-1),i]:[e.substring(0,n),i]})("storage");return i&&function(t,e,n,i={}){!function(t,e,n,i={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:r}=i;r&&(t._overrideAuthToken="string"==typeof r?r:function(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t);return[h(JSON.stringify({alg:"none",type:"JWT"})),h(JSON.stringify(s)),""].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(r,t.app.options.projectId))}(t,e,n,i)}(n,...i),n}X(new v("storage",(function(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),i=t.getProvider("auth-internal"),r=t.getProvider("app-check-internal");return new Zt(n,i,r,e,"9.13.0")}),"PUBLIC").setMultipleInstances(!0)),Q(Yt,"0.9.13",""),Q(Yt,"0.9.13","esm2017");const ee=class{constructor(n){t(this,n),this.fireenjinTrigger=e(this,"fireenjinTrigger",7),this.fireenjinSubmit=e(this,"fireenjinSubmit",7),this.items=[{id:"alerts",href:"/alerts",icon:"notifications",name:"Alerts",permissionCheck:()=>this.isAdmin},{id:"appointments",href:"/appointments",icon:"calendar",name:"Appointments",permissionCheck:()=>this.isAdmin},{id:"atmospherics",href:"/atmospherics",icon:"cloud-circle-outline",name:"Atmospheric Readings",permissionCheck:()=>this.isAdmin},{id:"campaigns",href:"/campaigns",icon:"magnet",name:"Campaigns",permissionCheck:()=>this.isAdmin},{id:"companies",href:"/companies",icon:"briefcase",name:"Companies",add:"/companies/new",permissionCheck:()=>this.isInternalTeam},{id:"contracts",href:"/contracts",icon:"create",name:"Contracts",permissionCheck:()=>this.isInternalTeam},{id:"dots",href:"/dots",icon:"ellipse",name:"Dots",permissionCheck:()=>this.isAdmin},{id:"exhausts",href:"/exhausts",icon:"exit",name:"Exhaust Readings",permissionCheck:()=>this.isAdmin},{id:"jobs",href:"/jobs",icon:"water",name:"Jobs",add:"/jobs/refer",permissionCheck:()=>this.isLoggedIn},{id:"import",href:"/import",icon:"download",name:"Import",permissionCheck:()=>this.isAdmin},{id:"inventory",href:"/inventory",icon:"barcode-outline",name:"Inventory",permissionCheck:()=>this.isInternalTeam},{id:"locations",href:"/locations",icon:"business",name:"Locations",add:"/locations/new",permissionCheck:()=>this.isInternalTeam},{id:"logs",href:"/logs",icon:"journal",name:"Logs",permissionCheck:()=>this.isAdmin},{id:"moisturecontents",href:"/moisturecontents",icon:"water",name:"MC Readings",permissionCheck:()=>this.isAdmin},{id:"paymodels",href:"/paymodels",icon:"pie-chart",name:"Pay Models",permissionCheck:()=>this.isAdmin},{id:"payments",href:"/payments",icon:"cash",name:"Payments",permissionCheck:()=>this.isAdmin},{id:"phonenumbers",href:"/phonenumbers",icon:"call",name:"Phone Numbers",permissionCheck:()=>this.isAdmin},{id:"pins",href:"/pins",icon:"pin",name:"Pins",permissionCheck:()=>this.isAdmin},{id:"services",href:"/services",icon:"reader",name:"Services",permissionCheck:()=>this.isInternalTeam},{id:"templates",href:"/templates",icon:"create",name:"Templates",add:"/templates/new",permissionCheck:()=>this.isAdmin},{id:"totallers",href:"/totallers",icon:"calculator",name:"Totallers",permissionCheck:()=>this.isAdmin},{id:"triggers",href:"/triggers",icon:"flash",name:"Triggers",add:"/triggers/new",permissionCheck:()=>this.isAdmin},{id:"users",href:"/users",icon:"people",name:"Users",add:"/users/new",permissionCheck:()=>this.isInternalTeam},{id:"vehicles",href:"/vehicles",icon:"car",name:"Vehicles",permissionCheck:()=>this.isInternalTeam},{id:"weather",href:"/weather",icon:"rainy",name:"Weather",permissionCheck:()=>this.isAdmin}],this.isAdmin=!1,this.isLoggedIn=!1,this.isInternalTeam=!1,this.pins=void 0,this.userId=void 0,this.jobId=void 0,this.navigationView=void 0,this.profile=void 0,this.locations=void 0,this.locationId=void 0,this.templates=void 0,this.feedFetchData=void 0,this.activityFilters=["me"]}onTrigger(t){var e,n,i,r,s;"feedType"===(null===(i=null===(n=null===(e=null==t?void 0:t.detail)||void 0===e?void 0:e.event)||void 0===n?void 0:n.detail)||void 0===i?void 0:i.type)&&(this.activityFilters=(null===(s=null===(r=t.detail)||void 0===r?void 0:r.payload)||void 0===s?void 0:s.value)||["me"])}async toggleNavPin(t,e){t.preventDefault(),t.stopPropagation(),this.fireenjinTrigger.emit({name:"pin",payload:a(e,["icon","name","href"])})}async doReorder(t){const e=function(t,e,n){const i=t.find(((t,n)=>n===e)),r=t.filter(((t,n)=>n!==e));return[...r.slice(0,n),i,...r.slice(n)]}(this.pins.map((t=>t.id)),t.detail.from,t.detail.to),n=(this.pins||[]).map((t=>Object.assign(Object.assign({},t),{order:e.findIndex((e=>e===(null==t?void 0:t.id)))}))).sort(((t,e)=>t.order-e.order));this.fireenjinSubmit.emit({endpoint:"reorderPins",data:{userId:this.userId,pins:n}}),this.pins=t.detail.complete(this.pins)}async openNoteModal(){this.noteModalEl=await r.create({cssClass:"modal-note",component:"modal-note",componentProps:{jobId:this.jobId||null,userId:this.userId||null}}),this.noteModalEl.present()}getExtension(t){var e=t.split(/[\\/]/).pop(),n=e.lastIndexOf(".");return""===e||n<1?"":e.slice(n+1)}async onPhotoUpload(t){var e;console.log(t);const n=(i=te(),r=`pictures/${(new Date).toISOString()}.${this.getExtension(null===(e=null==t?void 0:t.file)||void 0===e?void 0:e.name)}`,Gt(i=w(i),r));var i,r;const s=await Qt(n,t.file);return{success:!0,file:{url:await(o=s.ref,qt(o=w(o)))}};var o}async componentDidLoad(){var t,e;(null==n?void 0:n.isBrowser)&&(this.editorJs=await(null===(e=null===(t=this.editorEl)||void 0===t?void 0:t.getInstance)||void 0===e?void 0:e.call(t)))}render(){var t,e,n,r,s,o,a,c,l,h;return["profile"===this.navigationView&&i("floodteam-profile",null),i("div",{id:"feed",style:{display:"feed"===this.navigationView?"block":"none"}},i("ion-grid",{class:"ion-no-padding"},i("ion-row",{class:"ion-padding"},i("ion-col",null,i("floodteam-title-bar",null,i("ion-router-link",{href:"#"},"Activity Feed"),i("ion-buttons",{slot:"end"},i("ion-button",{style:{"--color":"rgba(var(--ion-text-color-rgb), 0.5)"},onClick:t=>this.fireenjinTrigger.emit({event:t,name:"filter",type:"feedType",payload:{control:{name:"type",label:"Type",icon:"help-circle",multiple:!0,value:this.activityFilters,options:[{label:"📝 Note",value:"note",group:"Type"},{label:"✒️ Contract",value:"contract",group:"Type"},{label:"📧 Email",value:"email",group:"Type"},{label:"My Feed",value:"me",group:"Location"},...(this.locations||[]).filter((t=>this.isAdmin||this.locationId===(null==t?void 0:t.id))).map((({name:t,id:e})=>({label:t,value:`location-${e}`,group:"Location"})))]}}}),fill:"outline",size:"small"},"Filter",i("ion-icon",{slot:"end",name:"funnel"})))))),i("ion-row",null,i("ion-col",null,i("ion-card",{style:{overflow:"visible",padding:"1rem",position:"relative",zIndex:"9"}},i("floodteam-template",{disablePosition:!0,disableFrame:!0,class:"feed-card-header",templateId:"a6PugONYo4E8EBq81RnM",style:{display:"block"},data:{icon:(null===(t=this.profile)||void 0===t?void 0:t.photo)||`https://avatars.dicebear.com/api/initials/${(null===(r=null===(n=null===(e=this.profile)||void 0===e?void 0:e.firstName)||void 0===n?void 0:n.charAt)||void 0===r?void 0:r.call(n,0))||""}${(null===(a=null===(o=null===(s=this.profile)||void 0===s?void 0:s.lastName)||void 0===o?void 0:o.charAt)||void 0===a?void 0:a.call(o,0))||""}.svg`,badge:"📝",badgeStyle:"font-size: 24px; cursor: pointer !important; display: flex; align-items: center; justify-content: end;",subtextStyle:"opacity: 0.6",subject:`${(null===(c=this.profile)||void 0===c?void 0:c.firstName)||""} ${(null===(l=this.profile)||void 0===l?void 0:l.lastName)||""}`}}),i("fireenjin-form",{style:{padding:"0 10px"},name:"note",endpoint:"addNote",beforeSubmit:async t=>Object.assign(Object.assign({},t),{jobId:this.jobId,userId:this.userId}),submitButton:"Send",resetButton:"Clear",resetButtonColor:"medium",disableEnterButton:!0},i("fireenjin-editor",{uploadCallback:t=>this.onPhotoUpload(t),partials:this.templates,ref:t=>this.editorEl=t})))))),i("fireenjin-pagination",{name:"activity-feed",id:"activity-feed",disableVirtualScroll:!0,disablePageCheck:!0,display:"grid",ref:t=>this.feedPaginationEl=t,fetchData:this.feedFetchData,gridEl:({result:t})=>i("ion-card",{innerHTML:null==t?void 0:t.html}),endpoint:"listFeeds",limit:20,resultsKey:"feeds"})),"pins"===this.navigationView&&i("ion-reorder-group",{id:"pins",onIonItemReorder:t=>this.doReorder(t),disabled:!1},(this.pins||[]).map((t=>i("ion-item",{style:{"--background":"transparent"},"data-id":t.id},i("ion-buttons",{slot:"start"},i("ion-button",{onClick:()=>this.fireenjinTrigger.emit({name:"pin",payload:t})},i("ion-icon",{name:"pin",color:"primary"})),i("ion-icon",{name:null==t?void 0:t.icon,class:"ft-icon-style"})),i("ion-label",null,(null==t?void 0:t.name)||"No Label"),i("ion-reorder",{slot:"end"}))))),i("ion-list",{style:{background:"transparent"}},i("div",{style:{display:(null===(h=this.profile)||void 0===h?void 0:h.id)?"none":"block"}},i("slot",null)),"menu"===this.navigationView&&this.items.map((t=>{var e,n,r,s;return(null===(e=null==t?void 0:t.permissionCheck)||void 0===e?void 0:e.call(t))?i("ion-menu-toggle",{autoHide:!1},i("ion-item",{style:{"--background":"transparent"},title:(null==t?void 0:t.title)||(null==t?void 0:t.name),href:(null==t?void 0:t.href)||"#"},i("ion-icon",{slot:"start",class:"ft-icon-style",name:null==t?void 0:t.icon,color:"primary"}),i("ion-label",null,(null==t?void 0:t.name)||""),i("ion-buttons",{slot:"end"},(null==t?void 0:t.add)&&i("ion-button",{fill:"clear",onClick:t=>t.stopPropagation(),href:t.add},i("ion-icon",{name:"add-circle",slot:"icon-only",color:"primary"})),i("ion-button",{fill:"clear",onClick:e=>this.toggleNavPin(e,t)},i("ion-icon",{name:"pin",slot:"icon-only",color:(null===(s=null===(r=null===(n=this.pins)||void 0===n?void 0:n.map)||void 0===r?void 0:r.call(n,(t=>null==t?void 0:t.href)))||void 0===s?void 0:s.includes(null==t?void 0:t.href))?"primary":null}))))):null})))]}};export{ee as floodteam_navigation_menu}