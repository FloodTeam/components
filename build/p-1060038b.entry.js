import{r as t,c as i,h as o,a as e}from"./p-13ea6980.js";const a=class{constructor(o){t(this,o),this.ftEpayShowCommisions=i(this,"ftEpayShowCommisions",7),this.fireenjinFetch=i(this,"fireenjinFetch",7),this.fireenjinSubmit=i(this,"fireenjinSubmit",7),this.slideIndex=["summary","payment","card","check","confirmation","success"],this.userPrefersDark=!!(window&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches),this.owed=0,this.total=0,this.payments=[],this.customer={},this.users=[],this.isSlidesHidding=!1,this.isHeaderShrunk=!1,this.isBackShowing=!1,this.isSubTextShowing=!0,this.isHeaderHidden=!1,this.loading=!1}async onSuccess(t){var i,o,e,a,s,n,l,h,d;"findJob"===t.detail.endpoint?(this.job=(null===(o=null===(i=t.detail)||void 0===i?void 0:i.data)||void 0===o?void 0:o.job)?t.detail.data.job:null,this.customer=(null===(s=null===(a=null===(e=t.detail)||void 0===e?void 0:e.data)||void 0===a?void 0:a.job)||void 0===s?void 0:s.customer)?t.detail.data.job.customer:{},this.email=(null===(l=null===(n=this.job)||void 0===n?void 0:n.customer)||void 0===l?void 0:l.email)?this.job.customer.email:null,this.owed=(null===(h=this.job)||void 0===h?void 0:h.amountOwed)?this.job.amountOwed:0,this.total=(null===(d=this.job)||void 0===d?void 0:d.amountBilled)?this.job.amountBilled:0,this.amount=this.owed,setTimeout((async()=>{await this.sliderEl.updateAutoHeight()}),1e3)):"addPayment"===t.detail.endpoint&&(this.fetchData(),this.reset())}onCheckScan(t){if(!t||!t.detail||!t.detail.front)return!1;this.checkFront=t.detail.front,this.checkBack=t.detail.back}onInput(t){var i;"amount"===(null===(i=null==t?void 0:t.target)||void 0===i?void 0:i.name)?this.amount=t.target.value?parseFloat(t.target.value):null:"email"===t.target.name&&(this.email=t.target.value)}onFtToggle(t){var i;"projected"===(null===(i=null==t?void 0:t.target)||void 0===i?void 0:i.name)&&console.log(t)}async onSubmitCard(t){await this.goToConfirmation(event)}async goToConfirmation(t){this.paymentPayload=t&&t.detail?t.detail:null,this.isHeaderHidden=!0,await this.sliderEl.slideTo(4),this.paymentEvent=t}async approve(){if("check"===this.paymentType)try{await this.confirmPayment(2006===this.errorCode?{ignore_check_amount_mismatch:!0}:{}),this.submitPayment(this.paymentType,this.paymentEvent)}catch(t){console.log("Error taking check payment",t)}else this.submitPayment(this.paymentType,this.paymentEvent)}submitPayment(t,i){let o={};"card"===t?o={token:i.detail.token.id,amount:this.amount,email:this.email}:"check"===t?o={transactionId:i.id?i.id:null,checkNumber:i.check_number?i.check_number:null,amount:this.amount,email:this.email}:"manual"===t&&(o={amount:this.amount,email:this.email}),this.fireenjinSubmit.emit({endpoint:"addPayment",data:Object.assign(Object.assign({},o),{jobId:this.jobId,userId:this.userId,type:t})})}onCardError(){setTimeout((()=>{this.updateSlides()}),1e3)}async onSlideChange(t){console.log(t),this.sliderEl&&await this.setSlide(this.sliderEl.querySelectorAll("ion-slide")[await this.sliderEl.getActiveIndex()].id)}onCheckError(t){if(console.log(t),!(t&&t.detail&&t.detail.error&&t.detail.error.errors&&t.detail.error.errors[0]))return!1;2006===t.detail.error.errors[0].error_code?(this.errorCode=2006,this.error=`The amount you typed doesn't match what the scanner saw (${this.formatUSD(t.detail.error.errors[0].error_data.read_amount)}). Are you sure you wish to proceed?`):this.error=t.detail.error.errors[0].error_message,setTimeout((()=>{this.updateSlides()}),2e3)}onSelect(t){t&&t.detail&&t.detail.user&&t.detail.user.user_email&&(this.userId=t.detail.user.id,this.customer=t.detail.user,this.email=t.detail.user.user_email)}async onSubmitCheck(t){this.goToConfirmation(t)}onCancel(){this.sliderEl.slideTo(0),this.isHeaderShrunk=!1,this.isBackShowing=!1,this.isSubTextShowing=!0,this.setSubText()}async updateSlides(){return this.sliderEl.updateAutoHeight(),this.sliderEl.update()}async success(){await this.sliderEl.slideTo(5),this.isBackShowing=!1,this.checkmarkEl.animating=!0,setTimeout((async()=>{await this.reset()}),5e3)}async reset(){this.error=null,this.paymentPayload=null,this.sliderEl.slideTo(0),this.amount=0,this.isHeaderShrunk=!1,this.isBackShowing=!1,this.isSubTextShowing=!0,this.isHeaderHidden=!1,this.paymentType=null,this.paymentEvent=null,this.setSubText(),await this.sliderEl.update()}async confirmPayment(t={}){return this.payCheckEl.confirmPayment(t)}onOwedChange(){this.setSubText()}onTotalChange(){this.setSubText()}componentDidLoad(){this.setSubText(),this.showSlide&&this.setSlide(this.showSlide),this.fetchData()}async fetchData(){this.jobId&&this.fireenjinFetch.emit({endpoint:"findJob",params:{id:this.jobId,withPayments:!0,withEfiles:!1,withUsers:!1,withSites:!1,withPayModel:!1,withPhotos:!1,withPayables:!1,withReadings:!1}})}async setSlide(t){["confirmation","card","check","success"].indexOf(t)>=0?(this.isHeaderShrunk=!0,this.isSubTextShowing=!1,this.isBackShowing=!0):"confirmation"===t||"success"===t?(this.isHeaderHidden=!0,"success"===t&&await this.success()):"payments"===t&&(this.isBackShowing=!1,this.isSubTextShowing=!0,this.isHeaderShrunk=!1)}formatUSD(t){return new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(t)}setSubText(){this.amount=parseFloat(this.owed)||0,this.subText=`${this.calculatePercentPaid()}% paid of ${this.formatUSD(parseFloat(this.total)||0)} bill`}calculatePercentPaid(){const t=100-Math.round(this.owed/this.total*100);return"number"==typeof t&&t!==1/0&&t>0?t:0}async takePayment(){this.isBackShowing||(this.isHeaderShrunk=!0,this.isBackShowing=!0,this.isSubTextShowing=!1,this.sliderEl.slideNext())}payWithCard(){if(!this.amount||this.amount<=0||!this.email||-1===this.email.indexOf("@"))return alert("Billee email address and amount being paid are required!"),!1;this.paymentType="card",this.subText=`Paying ${this.formatUSD(this.amount)} by card...`,this.isSubTextShowing=!0,this.sliderEl.slideTo(2)}payWithCheck(){if(!this.amount||this.amount<=0||!this.email||-1===this.email.indexOf("@"))return alert("Billee email address and amount being paid are required!"),!1;this.paymentType="check",this.subText=`Paying ${this.formatUSD(this.amount)} by check...`,this.isSubTextShowing=!0,this.sliderEl.slideTo(3)}payManually(){if(!this.amount||this.amount<=5||!this.email||-1===this.email.indexOf("@"))return alert("Billee email address and amount greater than $5.00 being paid are required!"),!1;this.paymentType="manual",this.goToConfirmation(null)}async goBack(){this.loading=!1,this.error=null;const t=await this.sliderEl.getActiveIndex();4===t?"card"===this.paymentType?await this.sliderEl.slideTo(2):"check"===this.paymentType?await this.sliderEl.slideTo(3):"manual"===this.paymentType&&await this.sliderEl.slideTo(1):"check"===this.paymentType?await this.sliderEl.slideTo(1):await this.sliderEl.slidePrev(),this.paymentType=null,0===t?this.reset():1===t&&(this.isHeaderShrunk=!0,this.isSubTextShowing=!1),this.isHeaderHidden=!1}capitalize(t){return"string"!=typeof t?"":t.charAt(0).toUpperCase()+t.slice(1)}getPaymentTypeCofirmation(){return"card"===this.paymentType?`<h4>${this.capitalize(this.paymentPayload&&this.paymentPayload.token&&this.paymentPayload.token.card&&this.paymentPayload.token.card?this.paymentPayload.token.card.brand:"")} ${this.paymentPayload&&this.paymentPayload.token&&this.paymentPayload.token.card&&this.paymentPayload.token.card?this.paymentPayload.token.card.funding:""} ending in ${this.paymentPayload&&this.paymentPayload.token&&this.paymentPayload.token.card&&this.paymentPayload.token.card?this.paymentPayload.token.card.last4:""}</h4>`:"check"===this.paymentType?`<ion-grid><ion-row><ion-col size="6"><img src="${this.checkFront}" style="border-radius: 20px; width:100%; display: block; max-width: 300px;" /></ion-col><ion-col size="6"><img src="${this.checkBack}" style="border-radius: 20px; width:100%; display: block; max-width: 300px;" /></ion-col></ion-row></ion-grid>`:"manual"===this.paymentType?"<h4>This should be avoided!</h4>":void 0}getPaymentText(t){let i="";const o=new Date(t.createdAt).toLocaleString().split(",")[0];return"manual"===t.type?i=`${this.formatUSD(t.amount)} manually on ${o}`:"card"===t.type?i=`${this.formatUSD(t.amount)} on ${t.brand?t.brand:""} card ending in ${t.ending_in?t.ending_in:""} on ${o}`:"check"===t.type&&(i=`${this.formatUSD(t.amount)} by check ${t.check_number?t.check_number:""} on ${o}`),i}render(){var t,i,e,a,s;return o("ion-card",{class:"epay-wrapper"},this.isBackShowing&&o("ion-button",{class:"back-button",onClick:()=>this.goBack(),fill:"clear",shape:"round",size:"large",color:this.userPrefersDark?"light":"dark"},o("ion-icon",{name:"arrow-back",slot:"icon-only"})),o("div",{class:{owed:!0,shrunk:this.isHeaderShrunk,hidden:this.isHeaderHidden}},o("span",null,this.formatUSD(this.owed),o("small",null," owed")),o("floodteam-progress-bar",{percent:this.calculatePercentPaid()}),this.isSubTextShowing&&o("p",null,this.subText)),o("ion-slides",{ref:t=>this.sliderEl=t,options:{autoHeight:!0,allowTouchMove:!1,simulateTouch:!1,autoplay:!1},class:{"hide-slides":this.isSlidesHidding}},o("ion-slide",{id:"payments"},o("ion-grid",null,o("ion-row",null,o("ion-col",null,o("div",{class:"past"},o("h2",null,"Past Payments"),(null===(i=null===(t=this.job)||void 0===t?void 0:t.payments)||void 0===i?void 0:i.length)>0?this.job.payments.map((t=>{var i,e;return o("ion-item",{lines:"none"},o("ion-label",{class:"ion-text-wrap"},o("h4",null,(null===(i=t.user)||void 0===i?void 0:i.firstName)?t.user.firstName:""," ",(null===(e=t.user)||void 0===e?void 0:e.lastName)?t.user.lastName:""),o("p",{style:{color:"manual"===t.type?"var(--ion-color-danger)":"var(--ion-color-success)"}},this.getPaymentText(t))))})):o("floodteam-fallback",{icon:"sad",message:"No payments received yet..."})))))),o("ion-slide",{id:"details"},o("ion-grid",null,o("ion-row",null,o("ion-col",null,o("ion-list",null,o("floodteam-input",{class:"billee-input",iconLeft:"mail",label:"Billee Email",type:"email",name:"email",autocomplete:"off",value:this.email?this.email:(null===(e=this.customer)||void 0===e?void 0:e.email)?this.customer.email:null,required:!0}),o("floodteam-input",{class:"amount-input",iconLeft:"logo-usd",label:"Amount",type:"number",name:"amount",autocomplete:"off",min:"5.00",step:"0.01",value:this.amount,required:!0})))),o("ion-row",null,o("ion-col",{size:"6"},o("ion-button",{color:"success",onClick:()=>this.payWithCheck()},"Pay with Check")),o("ion-col",{size:"6"},o("ion-button",{color:"success",onClick:()=>this.payWithCard()},"Pay with Card"))))),o("ion-slide",{id:"card"},o("floodteam-pay-card",{stripeKey:this.stripeKey,stripeStyle:{base:{color:this.userPrefersDark?"#FFFFFF":"#000000",iconSize:"30px",iconColor:"#999999",lineHeight:"20px",fontFamily:'"Work Sans", sans-serif',fontSmoothing:"antialiased",fontSize:"18px","::placeholder":{color:"#999999",iconColor:"#999999",fontWeight:"normal"}},invalid:{color:"#ee6274",iconColor:"#ee6274"}}})),o("ion-slide",{id:"check"},o("floodteam-pay-check",{loading:this.loading,ref:t=>this.payCheckEl=t,apiKey:this.dadeKey,url:this.dadeUrl,amount:this.amount})),o("ion-slide",{id:"confirmation"},o("ion-grid",null,o("ion-row",null,o("ion-col",null,o("p",{class:"confirm-title"},"Confirm Payment of"),o("h1",null,this.formatUSD(this.amount)),this.error&&o("floodteam-error",{message:this.error}),o("ion-list",null,o("ion-item",null,o("ion-icon",{slot:"start",name:"person"}),o("div",null,o("p",null,"From"),o("h4",null,(null===(a=this.customer)||void 0===a?void 0:a.firstName)?this.customer.firstName:"Customer"," ",(null===(s=this.customer)||void 0===s?void 0:s.lastName)?this.customer.lastName:"Name"))),o("ion-item",null,o("ion-icon",{slot:"start",name:"mail"}),o("div",null,o("p",null,"Send receipt to"),o("h4",null,this.email?this.email:"Customer Email"))),o("ion-item",null,o("ion-icon",{slot:"start",name:"logo-usd"}),o("div",null,o("p",null,"manual"===this.paymentType?"Paying manually":`Paying with ${this.capitalize(this.paymentType)}`),o("div",{innerHTML:this.getPaymentTypeCofirmation()}))),o("ion-grid",null,o("ion-row",{class:"ion-align-items-center"},o("ion-col",{size:"12",class:"ion-align-self-end"},o("ion-button",{onClick:()=>this.approve(),color:"success"},"Approve"))))))))),o("ion-slide",{id:"success"},o("ion-grid",null,o("ion-row",null,o("ion-col",null,o("floodteam-checkmark",{ref:t=>this.checkmarkEl=t}),o("p",null,"You're good to go!")))))))}get epayEl(){return e(this)}static get watchers(){return{owed:["onOwedChange"],total:["onTotalChange"]}}};a.style='floodteam-epay{font-family:var(\n    --floodteam-epay-font-family,\n    var(--ion-font-family, Arial, Helvetica, sans-serif)\n  )}floodteam-epay .hidden{height:0;width:0;opacity:0;pointer-events:none}floodteam-epay floodteam-flip-card .flip-card-inner .badge-top-right{background-color:rgba(0, 0, 0, 0.6);color:#fff;position:absolute;top:0;right:0;padding:5px 10px;border-radius:0 0 0 5px;font-size:12px;text-transform:uppercase}floodteam-epay floodteam-button{cursor:pointer}floodteam-epay floodteam-slides{transition:0.4s ease all;max-width:700px;margin:0 auto;display:block;opacity:1}floodteam-epay floodteam-slides.hide-slides{opacity:0;height:0}floodteam-epay floodteam-toggle{position:absolute;top:var(--floodteam-epay-toggle-top, 10px);right:var(--floodteam-epay-toggle-right, 25px);opacity:1;transition:opacity ease 0.3s;pointer-events:initial}floodteam-epay ion-item ion-icon[slot="start"]{margin:auto 10px 10px auto;fill:var(--ion-text-color)}floodteam-epay .owed{padding:var(--floodteam-epay-owed-padding, 15px 0 15px 0);transition:opacity 0.3s ease}floodteam-epay .back-button{position:absolute;top:0px;left:0px;z-index:9}floodteam-epay .owed>span,floodteam-epay .owed>p{display:block;margin:0 auto;text-align:center}floodteam-epay .owed>span,floodteam-epay #confirmation h1{margin:0 auto;font-size:36px;font-weight:bold;color:var(\n    --floodteam-epay-money-color,\n    var(--ion-color-success, green)\n  ) !important;line-height:60px;height:60px;transition:0.4s all ease}floodteam-epay .owed>p{letter-spacing:2px;color:var(--ion-text-color) !important}floodteam-epay .owed floodteam-progress-bar{transition:0.4s all ease;display:block;max-width:200px;width:80%;margin:15px auto;opacity:1}floodteam-epay .owed.shrunk{padding:10px 0 0 0}floodteam-epay .owed.shrunk floodteam-progress-bar{--floodteam-progress-bar-height:10px}floodteam-epay .owed.shrunk floodteam-toggle{opacity:0;pointer-events:none}floodteam-epay .owed.shrunk>span,floodteam-epay #confirmation h1{height:30px;font-size:28px;padding-top:0}floodteam-epay #payments .past{display:block;max-width:500px;width:90%;margin:0 auto}floodteam-epay #payments h2{color:#999 !important;margin:0 15px;padding:5px 5px;font-size:16px;border-bottom:2px solid #bbb;display:block;text-align:left}floodteam-epay #payments floodteam-button{display:block;width:100%}floodteam-epay #payments floodteam-fallback{--floodteam-fallback-icon-size:50px;display:block;width:100%;padding:15px 0}floodteam-epay #details{padding:0 30px}floodteam-epay #details label{font-size:16px;font-weight:bold;color:#bbb !important;text-align:left}floodteam-epay #details floodteam-grid{padding:15px 0 0 0}floodteam-epay #card{padding:30px 30px 0 30px}floodteam-epay #check{padding:0 30px}floodteam-epay #admin-controls floodteam-button{display:block;width:100%;text-align:center;font-weight:normal;font-size:12px}floodteam-epay .view-button{width:80px;padding:10px;position:absolute;top:var(--floodteam-epay-view-button-top, 0px);left:var(--floodteam-epay-view-button-left, 0px)}floodteam-epay .view-button p{font-size:12px;font-weight:bold;padding:0;margin:0;display:block;color:#95989a !important;width:100%;text-align:center}floodteam-epay .view-button ion-icon{display:block;margin:0 auto;height:25px;width:25px;color:#cccccc !important}floodteam-epay .view-button:hover{cursor:pointer}floodteam-epay .view-button:hover p{color:var(--ion-color-secondary) !important}floodteam-epay .view-button:hover ion-icon{color:var(--ion-color-secondary) !important}floodteam-epay #confirmation .confirm-title{font-weight:bold;color:var(--ion-color-medium) !important;margin:0 auto 15px}floodteam-epay #confirmation floodteam-list{display:block;max-width:400px;width:90%;margin:0 auto 20px}floodteam-epay #confirmation floodteam-list p{font-size:14px}floodteam-epay #confirmation floodteam-progress-circle{color:var(--ion-color-medium);font-size:14px;font-weight:bold;height:40px;float:right}floodteam-epay #confirmation floodteam-thumbs-up{display:block;margin:30px auto}floodteam-epay #confirmation floodteam-error{display:block;width:90%;margin:15px auto 0}floodteam-epay #success p{color:var(--ion-color-medium) !important;font-size:14px;font-weight:bold}floodteam-epay floodteam-error .ft-error-wrapper{padding:0 !important}floodteam-epay ion-item h4{color:var(--theme-dark-grey) !important}@media only screen and (max-width: 500px){floodteam-epay .back-button{top:3px;left:-15px;z-index:9}floodteam-epay .owed>span{font-size:24px !important;line-height:30px;padding-top:20px}floodteam-epay #details{padding:0 10px}floodteam-epay #card{padding:20px 10px 0 10px}floodteam-epay #check{padding:0 10px}}';export{a as floodteam_epay}