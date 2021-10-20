import{r as e,h as o}from"./p-eb2b03ce.js";import{C as s}from"./p-fff1b772.js";import"./p-eab67c09.js";let t=class{constructor(o){e(this,o),this.referring=!1,this.errors=[],this.successful=!1,this.formData={}}onError(e){"addJob"===e.detail.endpoint&&setTimeout((()=>{this.errors=e.detail.error.response.errors.map((e=>e.message))}),100)}async onSuccess(e){var o,s,t;this.errors=[],"addJob"===e.detail.endpoint&&(await this.formEl.reset(),this.successful=!0,this.confirmationId=null===(t=null===(s=null===(o=null==e?void 0:e.detail)||void 0===o?void 0:o.data)||void 0===s?void 0:s.addJob)||void 0===t?void 0:t.id,setTimeout((()=>{this.checkmarkEl.animating=!0}),500))}componentDidLoad(){this.formData.token=this.token,this.formData.locationId=this.locationId,this.referring||new s(".btn")}onBeforeSubmit(e){return Object.assign(Object.assign({},e),{referralId:this.referralId?this.referralId:null})}render(){return o("ion-card",{class:{successful:this.successful,"ion-padding":!0}},this.errors.map((e=>o("floodteam-error",{message:e}))),o("fireenjin-form",{ref:e=>this.formEl=e,endpoint:"addJob",formData:this.formData,resetButtonColor:"medium",beforeSubmit:this.onBeforeSubmit.bind(this)},o("ion-list",null,o("fireenjin-input",{name:"customer",label:"Customer Name",labelPosition:"stacked",placeholder:"What is the customer's full name?"}),o("fireenjin-input",{type:"tel",inputMode:"tel",labelPosition:"stacked",label:"Customer Phone Number",placeholder:"What is the customer's phone number?",name:"phone"}),o("fireenjin-input",{name:"email",type:"email",labelPosition:"stacked",label:"Customer Email",placeholder:"What is the customer's email address?"}),o("fireenjin-input-address",{googleMapsKey:this.googleMapsKey,name:"address",label:"Job Address",labelPosition:"stacked",placeholder:"What is the address of the loss?"}))),o("div",{class:"success-message"},o("floodteam-checkmark",{size:"100px",ref:e=>this.checkmarkEl=e}),o("ion-grid",null,o("ion-row",null,o("ion-col",{class:"message-content"},o("ion-label",null,o("h1",null,"Job Added Successfully!"),o("p",null,this.referring?"Your job was submitted successfully.":'Job was submitted successfully, here is the confirmation number. Use the "Copy to Clipboard" button to copy and paste it into the field on AnswerConnect\'s system.'))),o("ion-col",{class:"dashboard-button"},this.referring?o("ion-button",{size:"default",onClick:()=>window?window.location.reload():null,expand:"block"},"Add Another"):o("div",null,o("b",null,this.confirmationId),o("br",null),o("ion-button",{class:"btn",size:"default",expand:"block","data-clipboard-text":this.confirmationId},"Copy to clipboard",o("ion-icon",{name:"clipboard",slot:"end"}))))))))}};t.style="floodteam-book-now .success-message{display:block;opacity:0;height:0px;transition:opacity 0.6s ease;transition-delay:1s}floodteam-book-now .successful .success-message{opacity:1;height:auto}floodteam-book-now fireenjin-form{transition:opacity 0.6s ease;opacity:1}floodteam-book-now .successful fireenjin-form{opacity:0;height:0px}floodteam-book-now b{display:block;text-align:center;color:var(--ion-color-success)}";export{t as floodteam_book_now}