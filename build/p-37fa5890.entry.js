import{r as i,h as l,d as n}from"./p-8710117e.js";const o=class{constructor(l){i(this,l),this.currentIndex=0,this.formData={},this.nextButton={label:"Next",color:"primary",fill:"clear",icon:"chevron-forward-circle-outline"},this.prevButton={label:"Back",color:"medium",fill:"clear",icon:"chevron-back-circle-outline"},this.saveButton={label:"Save",fill:"solid",color:"primary",icon:"checkmark-circle-outline"},this.hideControls=!1,this.excludeData=[],this.disableLoader=!1,this.loading=!1,this.disableEnterButton=!1,this.confirmExit=!1,this.hasChanged=!1,this.method="post",this.slidesOptions={autoHeight:!0,allowTouchMove:!1},this.pager=!1,this.scrollbar=!1,this.steps=[],this.disableRequiredCheck=!1,this.showSuccess=!1,this.showSave=!1}async onKeydown(i){"Enter"!==(null==i?void 0:i.key)||this.disableEnterButton||this.slideNext()}async onSlideChange(){this.currentIndex=await this.getActiveIndex(),this.currentStep=this.steps[this.currentIndex],this.currentIndex===this.steps.length-1?(this.hideControls=!0,this.showSave=!0):(this.hideControls=!1,this.showSave=!1),this.prevButton=Object.assign(Object.assign({},this.prevButton),0===this.currentIndex&&this.prevButton?{disabled:!0}:{disabled:!1})}onSubmit(i){var l;(null===(l=null==i?void 0:i.detail)||void 0===l?void 0:l.endpoint)===this.endpoint&&(this.showSuccess=!1)}onSuccess(i){var l;(null===(l=null==i?void 0:i.detail)||void 0===l?void 0:l.endpoint)===this.endpoint&&(this.showSuccess=!0)}async getActiveIndex(){return this.slidesEl.getActiveIndex()}async getSwiper(){return this.slidesEl.getSwiper()}async isBeginning(){return this.slidesEl.isBeginning()}async isEnd(){return this.slidesEl.isEnd()}async length(){return this.slidesEl.length()}async lockSwipeToNext(i){return this.slidesEl.lockSwipeToNext(i)}async lockSwipeToPrev(i){return this.slidesEl.lockSwipeToPrev(i)}async lockSwipes(i){return this.slidesEl.lockSwipes(i)}async slideNext(i,l){if(console.log(await this.checkStepValidity()),this.disableRequiredCheck||await this.checkStepValidity())return this.slidesEl.slideNext(i,l)}async slidePrev(i,l){return this.hideControls&&(this.hideControls=!1),this.slidesEl.slidePrev(i,l)}async slideTo(i,l,n){return this.slidesEl.slideTo(i,l,n)}async startAutoplay(){return this.slidesEl.startAutoplay()}async stopAutoplay(){return this.slidesEl.stopAutoplay()}async update(){return this.slidesEl.update()}async updateAutoHeight(i){return this.slidesEl.updateAutoHeight(i)}async reportFormValidity(){this.formEl.reportFormValidity()}async setFormData(i){this.formEl.setFormData(i)}async checkFormValidity(i){this.formEl.checkFormValidity(i)}async reset(i){this.formEl.reset(i),this.prevButton&&(this.prevButton.disabled=!0)}async submit(i,l){this.formEl.submit(i,l)}async checkStepValidity(){let i=!0;return await new Promise(((l,n)=>{try{const n=this.flowEl.querySelectorAll(`ion-slide:nth-of-type(${this.currentIndex+1}) [required]`);n.length||l(!0),(n||[]).forEach(((o,t)=>{var e;("function"==typeof(null==o?void 0:o.reportValidity)&&!(null==o?void 0:o.reportValidity())||"function"==typeof(null==o?void 0:o.checkValidity)&&!(null==o?void 0:o.checkValidity())||null===o.value||"string"==typeof o.value&&(null===(e=o.value)||void 0===e?void 0:e.length)<=0)&&(i=!1),t===n.length-1&&l(i)}))}catch(i){console.log(i),n()}})),i}componentWillLoad(){this.prevButton&&(this.prevButton.disabled=!0)}renderField(i){return"file"===(null==i?void 0:i.type)?l("fireenjin-input-file",{path:null==i?void 0:i.path,icon:null==i?void 0:i.icon,label:null==i?void 0:i.label,fileName:null==i?void 0:i.fileName,name:null==i?void 0:i.name,accept:null==i?void 0:i.accept,defaultValue:null==i?void 0:i.defaultValue,value:null==i?void 0:i.value,documentId:null==i?void 0:i.documentId,endpoint:null==i?void 0:i.endpoint,uploadData:null==i?void 0:i.uploadData,disabled:!!(null==i?void 0:i.disabled)}):"photo"===(null==i?void 0:i.type)?l("fireenjin-input-photo",{path:null==i?void 0:i.path,fileName:null==i?void 0:i.fileName,name:null==i?void 0:i.name,value:null==i?void 0:i.value,documentId:null==i?void 0:i.documentId,endpoint:null==i?void 0:i.endpoint,disabled:!!(null==i?void 0:i.disabled),fallback:null==i?void 0:i.fallback,showButton:!!(null==i?void 0:i.showButton),buttonText:null==i?void 0:i.buttonText,initials:null==i?void 0:i.initials,multiple:!!(null==i?void 0:i.multiple),resize:!!(null==i?void 0:i.resize),loading:!!(null==i?void 0:i.loading)}):"address"===(null==i?void 0:i.type)?l("fireenjin-input-address",{googleMapsKey:(null==i?void 0:i.googleMapsKey)||this.googleMapsKey,placeholder:null==i?void 0:i.placeholder,value:null==i?void 0:i.value,label:null==i?void 0:i.label,required:!!(null==i?void 0:i.required),name:null==i?void 0:i.name,lines:null==i?void 0:i.lines,labelPosition:null==i?void 0:i.labelPosition}):"select"===(null==i?void 0:i.type)?l("fireenjin-select",{disabled:!!(null==i?void 0:i.disabled),cancelText:null==i?void 0:i.cancelText,okText:null==i?void 0:i.okText,placeholder:null==i?void 0:i.placeholder,name:null==i?void 0:i.name,selectedText:null==i?void 0:i.selectedText,multiple:!!(null==i?void 0:i.multiple),interface:null==i?void 0:i.interface,interfaceOptions:null==i?void 0:i.interfaceOptions,compareWith:null==i?void 0:i.compareWith,value:null==i?void 0:i.value,icon:null==i?void 0:i.icon,endpoint:null==i?void 0:i.endpoint,header:null==i?void 0:i.header,subHeader:null==i?void 0:i.subHeader,message:null==i?void 0:i.message,orderBy:null==i?void 0:i.orderBy,dataPropsMap:null==i?void 0:i.dataPropsMap,optionEl:null==i?void 0:i.optionEl,limit:null==i?void 0:i.limit,params:null==i?void 0:i.params,query:null==i?void 0:i.query,label:null==i?void 0:i.label,options:null==i?void 0:i.options,required:!!(null==i?void 0:i.required),resultsKey:null==i?void 0:i.resultsKey,labelPosition:null==i?void 0:i.labelPosition,lines:null==i?void 0:i.lines}):"radios"===(null==i?void 0:i.type)?l("fireenjin-radios",{disabled:!!(null==i?void 0:i.disabled),name:null==i?void 0:i.name,value:null==i?void 0:i.value,endpoint:null==i?void 0:i.endpoint,orderBy:null==i?void 0:i.orderBy,dataPropsMap:null==i?void 0:i.dataPropsMap,optionEl:null==i?void 0:i.optionEl,limit:null==i?void 0:i.limit,params:null==i?void 0:i.params,query:null==i?void 0:i.query,label:null==i?void 0:i.label,options:null==i?void 0:i.options,required:!!(null==i?void 0:i.required),resultsKey:null==i?void 0:i.resultsKey,labelPosition:null==i?void 0:i.labelPosition,lines:null==i?void 0:i.lines}):"search"===(null==i?void 0:i.type)?l("fireenjin-input-search",{name:null==i?void 0:i.name,label:null==i?void 0:i.label,placeholder:null==i?void 0:i.placeholder,value:null==i?void 0:i.value,required:!!(null==i?void 0:i.required),autofocus:!!(null==i?void 0:i.autofocus),disabled:!!(null==i?void 0:i.disabled),endpoint:null==i?void 0:i.endpoint,dataPropsMap:null==i?void 0:i.dataPropsMap,template:null==i?void 0:i.template,searchParams:null==i?void 0:i.searchParams,iconEnd:null==i?void 0:i.iconRight,iconStart:null==i?void 0:i.iconLeft,results:null==i?void 0:i.results,resultsKey:null==i?void 0:i.resultsKey,lines:null==i?void 0:i.lines,labelPosition:null==i?void 0:i.labelPosition}):"checklist"===(null==i?void 0:i.type)?l("fireenjin-checklist",{name:null==i?void 0:i.name,value:null==i?void 0:i.value,options:(null==i?void 0:i.options)||[],disabled:null==i?void 0:i.disabled}):l("fireenjin-input",{type:(null==i?void 0:i.type)||"text",stripeKey:(null==i?void 0:i.stripeKey)||this.stripeKey,placeholder:null==i?void 0:i.placeholder,label:null==i?void 0:i.label,value:null==i?void 0:i.value,required:!!(null==i?void 0:i.required),name:null==i?void 0:i.name,autocomplete:null==i?void 0:i.autocomplete,autocapitalize:null==i?void 0:i.autocapitalize,autocorrect:null==i?void 0:i.autocorrect,autofocus:null==i?void 0:i.autofocus,minlength:null==i?void 0:i.minlength,maxlength:null==i?void 0:i.maxlength,disabled:!!(null==i?void 0:i.disabled),info:null==i?void 0:i.info,edit:!!(null==i?void 0:i.edit),min:null==i?void 0:i.min,max:null==i?void 0:i.max,iconLeft:null==i?void 0:i.iconLeft,iconRight:null==i?void 0:i.iconRight,silence:null==i?void 0:i.silence,step:null==i?void 0:i.step,actionOptions:null==i?void 0:i.actionOptions,pattern:null==i?void 0:i.pattern,clearInput:null==i?void 0:i.clearInput,multiple:!!(null==i?void 0:i.multiple),readOnly:!!(null==i?void 0:i.readOnly),spellCheck:!!(null==i?void 0:i.spellCheck),inputMode:null==i?void 0:i.inputMode,stripeElements:(null==i?void 0:i.stripeElements)||this.stripeElements,lines:null==i?void 0:i.lines,labelPosition:null==i?void 0:i.labelPosition})}render(){var i,n,o,t,e,d,s,u,v,a,h,r,c,p,f,y,m,b,g,w,x,k,j,P,T,M,S,E,q,B,C;return l("fireenjin-form",{ref:i=>this.formEl=i,name:this.name,formData:this.formData,submitButton:null,resetButton:null,documentId:this.documentId,endpoint:this.endpoint,hideControls:this.hideControls,filterData:this.filterData,beforeSubmit:this.beforeSubmit,disableLoader:this.disableLoader,loading:this.loading,disableEnterButton:!0,confirmExit:this.confirmExit,hasChanged:this.hasChanged,method:this.method,action:this.action,fetch:this.fetch,fetchParams:this.fetchParams,fetchDataMap:this.fetchDataMap,fetchKey:this.fetchKey,cacheKey:this.cacheKey},l("ion-slides",{ref:i=>this.slidesEl=i,pager:this.pager,options:this.slidesOptions,scrollbar:this.scrollbar,style:{transition:"all ease 0.5s",height:this.showSuccess?"0":"auto",opacity:this.showSuccess?"0":"1"}},(this.steps||[]).map((i=>{const n=(null==i?void 0:i.component)||null;return l("ion-slide",null,l("div",null,(null==i?void 0:i.beforeHTML)&&l("div",{innerHTML:i.beforeHTML}),n&&l(n,Object.assign({},(null==i?void 0:i.componentProps)||{})),((null==i?void 0:i.fields)||[]).map((i=>[(null==i?void 0:i.beforeHTML)&&l("div",{innerHTML:i.beforeHTML}),this.renderField(i),(null==i?void 0:i.afterHTML)&&l("div",{innerHTML:i.afterHTML})]))),(null==i?void 0:i.afterHTML)&&l("div",{innerHTML:i.afterHTML}))}))),l("div",{class:"flow-controls control-pager",style:{display:this.hideControls?"none":"flex"}},l("ion-button",{expand:null===(i=this.prevButton)||void 0===i?void 0:i.expand,disabled:!!(null===(n=this.prevButton)||void 0===n?void 0:n.disabled),color:null===(o=this.prevButton)||void 0===o?void 0:o.color,fill:null===(t=this.prevButton)||void 0===t?void 0:t.fill,size:null===(e=this.prevButton)||void 0===e?void 0:e.size,onClick:i=>{var l;return"function"==typeof(null===(l=this.prevButton)||void 0===l?void 0:l.onClick)?this.prevButton.onClick(i):this.slidePrev()}},(null===(d=this.prevButton)||void 0===d?void 0:d.icon)&&l("ion-icon",{slot:(null===(s=this.prevButton)||void 0===s?void 0:s.iconSlot)||"start",name:this.prevButton.icon}),(null===(u=this.prevButton)||void 0===u?void 0:u.label)&&l("ion-label",null,this.prevButton.label)),l("ion-button",{expand:null===(v=this.nextButton)||void 0===v?void 0:v.expand,disabled:!!(null===(a=this.nextButton)||void 0===a?void 0:a.disabled),color:null===(h=this.nextButton)||void 0===h?void 0:h.color,fill:null===(r=this.nextButton)||void 0===r?void 0:r.fill,size:null===(c=this.nextButton)||void 0===c?void 0:c.size,onClick:i=>{var l;return"function"==typeof(null===(l=this.nextButton)||void 0===l?void 0:l.onClick)?this.nextButton.onClick(i):this.slideNext()}},(null===(p=this.nextButton)||void 0===p?void 0:p.icon)&&l("ion-icon",{slot:(null===(f=this.nextButton)||void 0===f?void 0:f.iconSlot)||"end",name:this.nextButton.icon}),(null===(y=this.nextButton)||void 0===y?void 0:y.label)&&l("ion-label",null,this.nextButton.label))),l("div",{class:"flow-controls control-confirmation",style:{display:this.showSave&&!this.showSuccess?"flex":"none"}},l("ion-button",{expand:null===(m=this.prevButton)||void 0===m?void 0:m.expand,disabled:!!(null===(b=this.prevButton)||void 0===b?void 0:b.disabled),color:null===(g=this.prevButton)||void 0===g?void 0:g.color,fill:null===(w=this.prevButton)||void 0===w?void 0:w.fill,onClick:i=>{var l;return"function"==typeof(null===(l=this.prevButton)||void 0===l?void 0:l.onClick)?this.prevButton.onClick(i):this.slidePrev()}},(null===(x=this.prevButton)||void 0===x?void 0:x.icon)&&l("ion-icon",{slot:(null===(k=this.prevButton)||void 0===k?void 0:k.iconSlot)||"start",name:this.prevButton.icon}),(null===(j=this.prevButton)||void 0===j?void 0:j.label)&&l("ion-label",null,this.prevButton.label)),l("ion-button",{expand:null===(P=this.saveButton)||void 0===P?void 0:P.expand,disabled:!!(null===(T=this.saveButton)||void 0===T?void 0:T.disabled),color:null===(M=this.saveButton)||void 0===M?void 0:M.color,fill:null===(S=this.saveButton)||void 0===S?void 0:S.fill,type:"submit",size:null===(E=this.saveButton)||void 0===E?void 0:E.size,onClick:i=>{var l;return"function"==typeof(null===(l=this.saveButton)||void 0===l?void 0:l.onClick)?this.saveButton.onClick(i):null}},(null===(q=this.saveButton)||void 0===q?void 0:q.icon)&&l("ion-icon",{slot:(null===(B=this.saveButton)||void 0===B?void 0:B.iconSlot)||"end",name:this.saveButton.icon}),(null===(C=this.saveButton)||void 0===C?void 0:C.label)&&l("ion-label",null,this.saveButton.label))),l("div",{class:"flow-success",style:{transition:"all ease 0.5s",height:this.showSuccess?"auto":"0",opacity:this.showSuccess?"1":"0"}},l("slot",null)))}get flowEl(){return n(this)}};o.style="fireenjin-flow .flow-controls{display:flex;justify-content:space-between}";export{o as fireenjin_flow}