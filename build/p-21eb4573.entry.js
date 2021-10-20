import{r as i,c as t,h as e,a as o}from"./p-eb2b03ce.js";let a=class{constructor(e){i(this,e),this.ftEpayShowCommisions=t(this,"ftEpayShowCommisions",7),this.fireenjinFetch=t(this,"fireenjinFetch",7),this.fireenjinSubmit=t(this,"fireenjinSubmit",7),this.slideIndex=["summary","payment","card","check","confirmation","success"],this.userPrefersDark=!!(window&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches),this.owed=0,this.total=0,this.payments=[],this.customer={},this.users=[],this.paymentMethod="card",this.isSlidesHidding=!1,this.isBackShowing=!1,this.isHeaderHidden=!1,this.loading=!1}async onSuccess(i){var t,e,o,a,n,s,l,h,d;"findJob"===i.detail.endpoint?(this.job=(null===(e=null===(t=i.detail)||void 0===t?void 0:t.data)||void 0===e?void 0:e.job)?i.detail.data.job:null,this.customer=(null===(n=null===(a=null===(o=i.detail)||void 0===o?void 0:o.data)||void 0===a?void 0:a.job)||void 0===n?void 0:n.customer)?i.detail.data.job.customer:{},this.email=(null===(l=null===(s=this.job)||void 0===s?void 0:s.customer)||void 0===l?void 0:l.email)?this.job.customer.email:null,this.owed=(null===(h=this.job)||void 0===h?void 0:h.amountOwed)?this.job.amountOwed:0,this.total=(null===(d=this.job)||void 0===d?void 0:d.amountBilled)?this.job.amountBilled:0,this.amount=this.owed,setTimeout((async()=>{await this.sliderEl.updateAutoHeight()}),1e3)):"addPayment"===i.detail.endpoint&&(this.fetchData(),this.reset())}async onSubmit(){"check"===this.paymentMethod?await this.payWithCheck():await this.payWithCard()}onReset(){this.goBack()}onCheckScan(i){if(!i||!i.detail||!i.detail.front)return!1;this.checkFront=i.detail.front,this.checkBack=i.detail.back}onInput(i){var t;"amount"===(null===(t=null==i?void 0:i.target)||void 0===t?void 0:t.name)?this.amount=i.target.value?parseFloat(i.target.value):null:"email"===i.target.name?this.email=i.target.value:"paymentMethod"===i.target.name?this.paymentMethod=i.target.value:"paymentType"===i.target.name&&(this.paymentType=i.target.value)}onFtToggle(i){var t;"projected"===(null===(t=null==i?void 0:i.target)||void 0===t?void 0:t.name)&&console.log(i)}async onSubmitCard(i){await this.goToConfirmation(event)}async goToConfirmation(i){this.paymentPayload=i&&i.detail?i.detail:null,this.isHeaderHidden=!0,await this.sliderEl.slideTo(4),this.paymentEvent=i}async approve(){if("check"===this.paymentMethod)try{await this.confirmPayment(2006===this.errorCode?{ignore_check_amount_mismatch:!0}:{}),this.submitPayment(this.paymentMethod,this.paymentEvent)}catch(i){console.log("Error taking check payment",i)}else this.submitPayment(this.paymentMethod,this.paymentEvent)}submitPayment(i,t){let e={};"card"===i?e={token:t.detail.token.id,amount:this.amount,email:this.email}:"check"===i?e={transactionId:t.id?t.id:null,checkNumber:t.check_number?t.check_number:null,amount:this.amount,email:this.email}:"manual"===i&&(e={amount:this.amount,email:this.email}),this.fireenjinSubmit.emit({endpoint:"addPayment",data:Object.assign(Object.assign({},e),{jobId:this.jobId,userId:this.userId,type:i})})}onCardError(){setTimeout((()=>{this.updateSlides()}),1e3)}async onSlideChange(i){console.log(i),this.sliderEl&&await this.setSlide(this.sliderEl.querySelectorAll("ion-slide")[await this.sliderEl.getActiveIndex()].id)}onCheckError(i){if(!(i&&i.detail&&i.detail.error&&i.detail.error.errors&&i.detail.error.errors[0]))return!1;2006===i.detail.error.errors[0].error_code?(this.errorCode=2006,this.error=`The amount you typed doesn't match what the scanner saw (${this.formatUSD(i.detail.error.errors[0].error_data.read_amount)}). Are you sure you wish to proceed?`):this.error=i.detail.error.errors[0].error_message,setTimeout((()=>{this.updateSlides()}),2e3)}async onSubmitCheck(i){this.goToConfirmation(i)}async updateSlides(){return this.sliderEl.updateAutoHeight(),this.sliderEl.update()}async success(){await this.sliderEl.slideTo(5),this.isBackShowing=!1,this.checkmarkEl.animating=!0,setTimeout((async()=>{await this.reset()}),5e3)}async reset(){this.error=null,this.paymentPayload=null,this.sliderEl.slideTo(0),this.amount=0,this.isBackShowing=!1,this.isHeaderHidden=!1,this.paymentMethod=null,this.paymentEvent=null,this.setSubText(),await this.sliderEl.update()}async confirmPayment(i={}){return this.payCheckEl.confirmPayment(i)}onOwedChange(){this.setSubText()}onTotalChange(){this.setSubText()}componentDidLoad(){this.setSubText(),this.showSlide&&this.setSlide(this.showSlide),this.fetchData()}async fetchData(){this.jobId&&this.fireenjinFetch.emit({endpoint:"findJob",params:{id:this.jobId,withPayments:!0,withEfiles:!1,withUsers:!1,withSites:!1,withPayModel:!1,withPhotos:!1,withPayables:!1,withReadings:!1}})}async setSlide(i){["confirmation","card","check","success"].indexOf(i)>=0?this.isBackShowing=!0:"confirmation"===i||"success"===i?(this.isHeaderHidden=!0,"success"===i&&await this.success()):"payments"===i&&(this.isBackShowing=!1)}formatUSD(i){return new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(i)}setSubText(){this.amount=parseFloat(this.owed)||0,this.subText=`${this.calculatePercentPaid()}% paid of ${this.formatUSD(parseFloat(this.total)||0)} bill`}calculatePercentPaid(){const i=100-Math.round(this.owed/this.total*100);return"number"==typeof i&&i!==1/0&&i>0?i:0}async takePayment(){this.isBackShowing||(this.isBackShowing=!0,this.sliderEl.slideNext())}payWithCard(){if(!this.amount||this.amount<=0||!this.email||-1===this.email.indexOf("@"))return alert("Billee email address and amount being paid are required!"),!1;this.paymentMethod="card",this.subText=`Paying ${this.formatUSD(this.amount)} by card...`,this.sliderEl.slideTo(2)}payWithCheck(){if(!this.amount||this.amount<=0||!this.email||-1===this.email.indexOf("@"))return alert("Billee email address and amount being paid are required!"),!1;this.paymentMethod="check",this.subText=`Paying ${this.formatUSD(this.amount)} by check...`,this.sliderEl.slideTo(3)}payManually(){if(!this.amount||this.amount<=5||!this.email||-1===this.email.indexOf("@"))return alert("Billee email address and amount greater than $5.00 being paid are required!"),!1;this.paymentMethod="manual",this.goToConfirmation(null)}async goBack(){this.loading=!1,this.error=null;const i=await this.sliderEl.getActiveIndex();4===i?"card"===this.paymentMethod?await this.sliderEl.slideTo(2):"check"===this.paymentMethod?await this.sliderEl.slideTo(3):"manual"===this.paymentMethod&&await this.sliderEl.slideTo(1):"check"===this.paymentMethod?await this.sliderEl.slideTo(1):await this.sliderEl.slidePrev(),this.paymentMethod=null,0===i&&this.reset(),this.isHeaderHidden=!1}capitalize(i){return"string"!=typeof i?"":i.charAt(0).toUpperCase()+i.slice(1)}getPaymentTypeCofirmation(){return"card"===this.paymentMethod?`<h4>${this.capitalize(this.paymentPayload&&this.paymentPayload.token&&this.paymentPayload.token.card&&this.paymentPayload.token.card?this.paymentPayload.token.card.brand:"")} ${this.paymentPayload&&this.paymentPayload.token&&this.paymentPayload.token.card&&this.paymentPayload.token.card?this.paymentPayload.token.card.funding:""} ending in ${this.paymentPayload&&this.paymentPayload.token&&this.paymentPayload.token.card&&this.paymentPayload.token.card?this.paymentPayload.token.card.last4:""}</h4>`:"check"===this.paymentMethod?`<ion-grid><ion-row><ion-col size="6"><img src="${this.checkFront}" style="border-radius: 20px; width:100%; display: block; max-width: 300px;" /></ion-col><ion-col size="6"><img src="${this.checkBack}" style="border-radius: 20px; width:100%; display: block; max-width: 300px;" /></ion-col></ion-row></ion-grid>`:"manual"===this.paymentMethod?"<h4>This should be avoided!</h4>":void 0}getPaymentText(i){let t="";const e=new Date(i.createdAt).toLocaleString().split(",")[0];return"manual"===i.type?t=`${this.formatUSD(i.amount)} manually on ${e}`:"card"===i.type?t=`${this.formatUSD(i.amount)} on ${i.brand?i.brand:""} card ending in ${i.ending_in?i.ending_in:""} on ${e}`:"check"===i.type&&(t=`${this.formatUSD(i.amount)} by check ${i.check_number?i.check_number:""} on ${e}`),t}render(){var i,t,o,a;return e("ion-card",null,!this.isBackShowing&&e("ion-fab",{style:{top:"-30px",right:"0px"},vertical:"top",horizontal:"end",onClick:()=>this.takePayment()},e("ion-fab-button",null,e("ion-icon",{name:"add"}))),e("div",{class:{owed:!0,hidden:this.isHeaderHidden}},e("span",null,this.formatUSD(this.owed),e("small",null," owed")),e("p",null,this.subText)),e("ion-slides",{ref:i=>this.sliderEl=i,options:{autoHeight:!0,allowTouchMove:!1,simulateTouch:!1,autoplay:!1},class:{"hide-slides":this.isSlidesHidding}},e("ion-slide",{id:"payments"},e("ion-grid",null,e("ion-row",null,e("ion-col",null,e("div",{class:"past"},e("h2",null,"Past Payments"),(null===(t=null===(i=this.job)||void 0===i?void 0:i.payments)||void 0===t?void 0:t.length)>0?this.job.payments.map((i=>{var t,o;return e("ion-item",{lines:"none"},e("ion-label",{class:"ion-text-wrap"},e("h4",null,(null===(t=i.user)||void 0===t?void 0:t.firstName)?i.user.firstName:""," ",(null===(o=i.user)||void 0===o?void 0:o.lastName)?i.user.lastName:""),e("p",{style:{color:"manual"===i.type?"var(--ion-color-danger)":"var(--ion-color-success)"}},this.getPaymentText(i))))})):e("floodteam-fallback",{icon:"sad",message:"No payments received yet..."})))))),e("ion-slide",{id:"details"},e("fireenjin-form",{id:"invoice",name:"invoice",class:"ion-padding",resetButton:"Back",resetButtonColor:"medium",submitButton:"Next",disableReset:!0,disableLoader:!0},e("fireenjin-input-amount",{name:"amount",labelPosition:"stacked",label:"Amount on Invoice",value:this.amount}),e("fireenjin-input",{name:"email",labelPosition:"stacked",type:"email",label:"Invoice Email",value:this.email}),e("fireenjin-select",{lines:"full",labelPosition:"stacked",name:"paymentType",label:"Payment Type",value:null,options:[{label:"Self",value:null},{label:"Insurance",value:"insurance"},{label:"Code Blue",value:"codeblue"}]}),e("fireenjin-select",{lines:"full",labelPosition:"stacked",name:"paymentMethod",label:"Payment Method",value:"card",options:[{label:"Check",value:"check"},{label:"Card",value:"card"},{label:"ACH",value:"ach"}]}),e("fireenjin-toggle",{lines:"full",name:"send",value:!0,label:"Send Invoice",color:"secondary"}))),e("ion-slide",{id:"card"},e("floodteam-pay-card",{stripeKey:this.stripeKey,stripeStyle:{base:{color:this.userPrefersDark?"#FFFFFF":"#000000",iconSize:"30px",iconColor:"#999999",lineHeight:"20px",fontFamily:'"Work Sans", sans-serif',fontSmoothing:"antialiased",fontSize:"18px","::placeholder":{color:"#999999",iconColor:"#999999",fontWeight:"normal"}},invalid:{color:"#ee6274",iconColor:"#ee6274"}}})),e("ion-slide",{id:"check"},e("floodteam-pay-check",{loading:this.loading,ref:i=>this.payCheckEl=i,apiKey:this.dadeKey,url:this.dadeUrl,amount:this.amount})),e("ion-slide",{id:"confirmation"},e("ion-grid",null,e("ion-row",null,e("ion-col",null,e("p",{class:"confirm-title"},"Confirm Payment of"),e("h1",null,this.formatUSD(this.amount)),this.error&&e("floodteam-error",{message:this.error}),e("ion-list",null,e("ion-item",null,e("ion-icon",{slot:"start",name:"person"}),e("div",null,e("p",null,"From"),e("h4",null,(null===(o=this.customer)||void 0===o?void 0:o.firstName)?this.customer.firstName:"Customer"," ",(null===(a=this.customer)||void 0===a?void 0:a.lastName)?this.customer.lastName:"Name"))),e("ion-item",null,e("ion-icon",{slot:"start",name:"mail"}),e("div",null,e("p",null,"Send receipt to"),e("h4",null,this.email?this.email:"Customer Email"))),e("ion-item",null,e("ion-icon",{slot:"start",name:"logo-usd"}),e("div",null,e("p",null,"manual"===this.paymentMethod?"Paying manually":`Paying with ${this.capitalize(this.paymentMethod)}`),e("div",{innerHTML:this.getPaymentTypeCofirmation()}))),e("ion-grid",null,e("ion-row",{class:"ion-align-items-center"},e("ion-col",{size:"12",class:"ion-align-self-end"},e("ion-button",{onClick:()=>this.approve()},"Approve & Finish"))))))))),e("ion-slide",{id:"success"},e("ion-grid",null,e("ion-row",null,e("ion-col",null,e("floodteam-checkmark",{ref:i=>this.checkmarkEl=i}),e("p",null,"You're good to go!")))))))}get epayEl(){return o(this)}static get watchers(){return{owed:["onOwedChange"],total:["onTotalChange"]}}};a.style='floodteam-epay ion-card{overflow:visible}floodteam-epay .hidden{height:0;width:0;opacity:0;pointer-events:none}floodteam-epay floodteam-flip-card .flip-card-inner .badge-top-right{background-color:rgba(0, 0, 0, 0.6);color:#fff;position:absolute;top:0;right:0;padding:5px 10px;border-radius:0 0 0 5px;font-size:12px;text-transform:uppercase}floodteam-epay ion-item ion-icon[slot="start"]{margin:auto 10px 10px auto;fill:var(--ion-text-color)}floodteam-epay fireenjin-form#invoice{min-width:100%}floodteam-epay .owed{padding:var(--floodteam-epay-owed-padding, 15px 0 15px 0);transition:opacity 0.3s ease}floodteam-epay .back-button{position:absolute;top:0px;left:0px;z-index:9}floodteam-epay .owed>span,floodteam-epay .owed>p{display:block;margin:0 auto;text-align:center}floodteam-epay .owed>span,floodteam-epay #confirmation h1{margin:0 auto;font-size:36px;font-weight:bold;color:var(\n    --floodteam-epay-money-color,\n    var(--ion-color-success, green)\n  ) !important;line-height:60px;height:60px;transition:0.4s all ease}floodteam-epay .owed>p{letter-spacing:2px;color:var(--ion-text-color) !important}floodteam-epay .confirm-title{margin:0 !important}floodteam-epay #confirmation h1{font-size:28px;padding-top:0}floodteam-epay #payments .past{display:block;max-width:500px;width:90%;margin:0 auto}floodteam-epay #payments h2{color:#999 !important;margin:0 15px;padding:5px 5px;font-size:16px;border-bottom:2px solid #bbb;display:block;text-align:left}floodteam-epay #payments floodteam-button{display:block;width:100%}floodteam-epay #payments floodteam-fallback{--floodteam-fallback-icon-size:50px;display:block;width:100%;padding:15px 0}floodteam-epay #details{padding:0 30px}floodteam-epay #details label{font-size:16px;font-weight:bold;color:#bbb !important;text-align:left}floodteam-epay #details floodteam-grid{padding:15px 0 0 0}floodteam-epay #card{padding:30px 30px 0 30px}floodteam-epay #check{padding:0 30px}floodteam-epay #admin-controls floodteam-button{display:block;width:100%;text-align:center;font-weight:normal;font-size:12px}floodteam-epay #confirmation .confirm-title{font-weight:bold;color:var(--ion-color-medium) !important;margin:0 auto 15px}floodteam-epay #confirmation floodteam-thumbs-up{display:block;margin:30px auto}floodteam-epay #confirmation floodteam-error{display:block;width:90%;margin:15px auto 0}floodteam-epay #success p{color:var(--ion-color-medium) !important;font-size:14px;font-weight:bold}floodteam-epay floodteam-error .ft-error-wrapper{padding:0 !important}@media only screen and (max-width: 500px){floodteam-epay .back-button{top:3px;left:-15px;z-index:9}floodteam-epay .owed>span{font-size:24px !important;line-height:30px;padding-top:20px}floodteam-epay #details{padding:0 10px}floodteam-epay #card{padding:20px 10px 0 10px}floodteam-epay #check{padding:0 10px}}';export{a as floodteam_epay}