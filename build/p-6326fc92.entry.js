import{r as o,c as e,h as t}from"./p-eb2b03ce.js";let n=class{constructor(t){o(this,t),this.ftRemovePaymentMethod=e(this,"ftRemovePaymentMethod",7),this.sliderOptions={initialSlide:0,autoHeight:!0,allowTouchMove:!1,simulateTouch:!1,autoplay:!1},this.address={},this.payType="card",this.errors=[],this.currentSlideIndex=0}async onSlideChange(){this.currentSlideIndex=await this.sliderEl.getActiveIndex(),this.sliderEl.updateAutoHeight()}async onReset(o){this.errors=[],"cardForm"===o.target.name&&await this.cardInputEl.clear(),this.back()}async onSubmit(o){if(this.errors=[],"cardForm"===o.detail.endpoint||"bankingForm"===o.target.name||"addPaymentMethod"===o.detail.endpoint)return!1;this.next()}onError(o){setTimeout((()=>{this.errors=o.detail.error.response.errors.map((o=>o.message))}),100)}async onSuccess(o){"addPaymentMethod"===o.detail.endpoint&&(setTimeout((()=>{this.checkmarkEl.animating=!0}),500),this.next())}async onBeforeSubmit(o,e=!1){if(this.errors=[],e)o.type="checking";else{const e=this.addressInputEl.value,{token:t}=await this.cardInputEl.getCardToken({name:this.nameInputEl.value,address_line1:null==e?void 0:e.street,address_line2:null==e?void 0:e.unit,address_city:null==e?void 0:e.city,address_country:"US",address_state:null==e?void 0:e.state,address_zip:null==e?void 0:e.zip});o.token=t.id,o.address=e.full}return o.userId=this.userId,o}async next(){this.sliderEl.slideNext()}async back(){this.sliderEl.slidePrev()}async removePaymentMethod(o){confirm("Are you sure you wish to delete this payment method?")&&this.ftRemovePaymentMethod.emit({id:o})}render(){return t("ion-card",null,this.errors.map((o=>t("floodteam-error",{message:o}))),t("ion-slides",{ref:o=>this.sliderEl=o,options:this.sliderOptions},t("ion-slide",{id:"methods"},t("div",{class:"slide-wrapper"},t("h2",null,"Payment Methods"),this.methods&&this.methods.length>0?t("ion-list",{lines:"none"},this.methods.map((o=>t("ion-item",null,t("ion-label",null,t("h2",null,o.name),t("p",{style:{textTransform:"capitalize"}},"checking"===o.type?"Bank Account":`${o.type} Card`)),t("ion-button",{color:"danger",fill:"clear",slot:"end",onClick:()=>this.removePaymentMethod(o.id)},t("ion-label",null,"Remove"),t("ion-icon",{slot:"end",name:"close-circle"})))))):t("p",null,"Your account with Stripe has been setup successfully, you may now add a payment method to get paid."),t("ion-grid",{class:"slide-controls"},t("ion-row",null,t("ion-col",{class:"ion-align-self-end"},t("ion-button",{onClick:()=>this.next()},"Add Payment Method")))))),t("ion-slide",{id:"payment-type"},t("div",{class:"slide-wrapper"},t("h2",null,"Select Payment Type"),t("p",null,"What is the method you would like to get paid on?"),t("fireenjin-form",{disableLoader:!0,name:"paymentForm",resetButton:"<ion-icon slot='start' name='arrow-back-outline'></ion-icon>Back",resetButtonColor:"medium",submitButton:"Next"},t("ion-grid",null,t("ion-row",{class:"options"},t("span",null),t("ion-col",{size:"6",class:"card"===this.payType?"active":null,onClick:()=>this.payType="card"},t("h2",null,t("div",{class:"empty-radio"}),"Debit Card"),t("ion-icon",{name:"card"}),t("p",null,"I want to hookup my debit card and have instant pay option.")),t("ion-col",{class:"checking"===this.payType?"active":null,size:"6",onClick:()=>this.payType="checking"},t("h2",null,t("div",{class:"empty-radio"}),"Bank Account"),t("ion-icon",{name:"create"}),t("p",null,"I want to hookup my bank account to receive payments."))))))),t("ion-slide",{id:"add"},t("div",{class:"slide-wrapper"},t("h2",null,"Add a ","card"===this.payType?"Debit Card":"Bank Account"),t("p",null,"What is the account information for the"," ","card"===this.payType?"Debit Card":"Bank Account","?"),"card"===this.payType?t("fireenjin-form",{name:"cardForm",resetButton:"<ion-icon slot='start' name='arrow-back-outline'></ion-icon>Back",resetButtonColor:"medium",endpoint:"addPaymentMethod",beforeSubmit:o=>this.onBeforeSubmit(o),excludeData:["card","cardName"]},t("ion-list",null,t("fireenjin-input",{ref:o=>this.cardInputEl=o,placeholder:"Card Number",name:"card",type:"card",stripeKey:this.stripeKey,stripeElements:{fonts:[{cssSrc:"https://fonts.googleapis.com/css?family=Work+Sans:400"}],style:{base:{color:window&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"#ffffff":"#000000",fontFamily:'"Work Sans", sans-serif',fontWeight:"400",fontSize:"18px","::placeholder":{fontWeight:"400",color:window&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"#8d9ba9":"#acadad"}},invalid:{iconColor:"#ee6274",color:"#ee6274"}}},required:!0}),t("fireenjin-input",{ref:o=>this.nameInputEl=o,placeholder:"Name on Card",name:"cardName",value:this.cardName,pattern:"^[a-zA-Z]+ (([',. -][a-zA-Z ])?[a-zA-Z]+)*$",required:!0}),t("fireenjin-input-address",{ref:o=>this.addressInputEl=o,placeholder:"Billing Address",name:"address",value:this.address,required:!0}))):t("fireenjin-form",{resetButton:"<ion-icon slot='start' name='arrow-back-outline'></ion-icon>Back",resetButtonColor:"medium",endpoint:"addPaymentMethod",beforeSubmit:o=>this.onBeforeSubmit(o,!0),name:"bankingForm"},t("ion-list",null,t("fireenjin-input",{ref:o=>this.accountInputEl=o,placeholder:"Account Number",name:"accountNumber",required:!0}),t("fireenjin-input",{ref:o=>this.routingInputEl=o,placeholder:"Routing Number",name:"routingNumber",required:!0}))))),t("ion-slide",{id:"confirmation"},t("div",{class:"slide-wrapper"},t("floodteam-checkmark",{size:"100px",ref:o=>this.checkmarkEl=o}),t("ion-grid",null,t("ion-row",null,t("ion-col",{class:"message-content"},t("ion-label",null,t("h1",null,"Payments are setup!"),t("p",null,"You can now head back to your dashboard."))),t("ion-col",{class:"dashboard-button"},t("ion-button",{href:"/dashboard"},"Go to Dashboard"))))))))}};n.style='floodteam-payment-methods .slide-wrapper{display:block;width:100%;text-align:left}floodteam-payment-methods h2{color:var(--ion-text-color)}floodteam-payment-methods .slide-controls{text-align:right}floodteam-payment-methods ion-card{padding:10px 15px 0 15px}floodteam-payment-methods ion-list{padding-top:0 !important}floodteam-payment-methods #payment-type{position:relative;padding:10px 0}floodteam-payment-methods #payment-type .options ion-icon{display:block;height:100px;width:100px;margin:0 auto;color:var(--ion-color-secondary);overflow:visible}floodteam-payment-methods #payment-type .options span{position:absolute;display:block;bottom:225px;pointer-events:none;left:50%}floodteam-payment-methods #payment-type .options span:after{position:relative;margin-left:-15px;padding:10px 0;margin-top:50px;width:100%;top:35px;left:calc(-50% + 8px);font-size:18px;font-family:var(--ion-font-family-secondary);z-index:4;content:"OR";background:var(--background)}floodteam-payment-methods #payment-type .options span:before{display:block;content:"";width:50%;height:200px;position:absolute;left:-50%;top:-50px;border-right:1px solid var(--ion-color-medium);z-index:1}floodteam-payment-methods #payment-type .options ion-col p{text-align:center;color:var(--ion-color-medium);font-size:14px;padding:0 15px}floodteam-payment-methods #payment-type .options ion-col h2{position:relative;font-weight:bold;font-family:var(--ion-font-family-secondary);text-align:left;font-size:1em;padding-left:60px;height:40px;overflow:visible}floodteam-payment-methods #payment-type .options ion-col .empty-radio{position:absolute;top:-2px;left:15px;height:30px;width:30px;border:2px solid var(--ion-color-medium);border-radius:100%;display:inline-block}floodteam-payment-methods #payment-type .options ion-col{cursor:pointer}floodteam-payment-methods #payment-type .options ion-col.active .empty-radio{border:none;height:40px;width:40px;content:"";top:-7px;border-radius:100%;background-image:var(--ion-icon-checkmark);z-index:10}floodteam-payment-methods .pager floodteam-payment-methods ion-col.message-content{min-width:300px}floodteam-payment-methods ion-col.dashboard-button{max-width:160px}@media only screen and (max-width: 500px){floodteam-payment-methods ion-col.dashboard-button{max-width:100%}}';export{n as floodteam_payment_methods}