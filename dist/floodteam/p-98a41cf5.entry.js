import{r as o,h as e}from"./p-eb2b03ce.js";import{C as s}from"./p-fff1b772.js";import"./p-eab67c09.js";const t=class{constructor(e){o(this,e),this.referring=!1,this.errors=[],this.successful=!1,this.formData={}}onError(o){"addJob"===o.detail.endpoint&&setTimeout((()=>{this.errors=o.detail.error.response.errors.map((o=>o.message))}),100)}async onSuccess(o){var e,s,t;this.errors=[],"addJob"===o.detail.endpoint&&(await this.formEl.reset(),this.successful=!0,this.confirmationId=null===(t=null===(s=null===(e=null==o?void 0:o.detail)||void 0===e?void 0:e.data)||void 0===s?void 0:s.addJob)||void 0===t?void 0:t.id,setTimeout((()=>{this.checkmarkEl.animating=!0}),500))}componentDidLoad(){this.formData.token=this.token,this.formData.locationId=this.locationId,this.referring||new s(".btn")}onBeforeSubmit(o){return Object.assign(Object.assign({},o),{referralId:this.referralId?this.referralId:null})}render(){return e("ion-card",{class:{successful:this.successful,"ion-padding":!0}},this.errors.map((o=>e("floodteam-error",{message:o}))),e("fireenjin-form",{ref:o=>this.formEl=o,endpoint:"addJob",formData:this.formData,submitButtonColor:"success",resetButtonColor:"medium",beforeSubmit:this.onBeforeSubmit.bind(this)},e("ion-list",null,e("floodteam-input",{name:"customer",label:"Customer Name",placeholder:"What is the customer's full name?"}),e("floodteam-input",{type:"tel",inputMode:"tel",label:"Customer Phone Number",placeholder:"What is the customer's phone number?",name:"phone"}),e("floodteam-input",{name:"email",type:"email",label:"Customer Email",placeholder:"What is the customer's email address?"}),e("floodteam-input-address",{googleMapsKey:this.googleMapsKey,name:"address",label:"Job Address",placeholder:"What is the address of the loss?"}))),e("div",{class:"success-message"},e("floodteam-checkmark",{size:"100px",ref:o=>this.checkmarkEl=o}),e("ion-grid",null,e("ion-row",null,e("ion-col",{class:"message-content"},e("ion-label",null,e("h1",null,"Job Added Successfully!"),e("p",null,this.referring?"Your job was submitted successfully.":'Job was submitted successfully, here is the confirmation number. Use the "Copy to Clipboard" button to copy and paste it into the field on AnswerConnect\'s system.'))),e("ion-col",{class:"dashboard-button"},this.referring?e("ion-button",{size:"default",onClick:()=>window?window.location.reload():null,expand:"block"},"Add Another"):e("div",null,e("b",null,this.confirmationId),e("br",null),e("ion-button",{class:"btn",size:"default",color:"success",expand:"block","data-clipboard-text":this.confirmationId},"Copy to clipboard",e("ion-icon",{name:"clipboard",slot:"end"}))))))))}};t.style="floodteam-book-now .success-message{display:block;opacity:0;height:0px;transition:opacity 0.6s ease;transition-delay:1s}floodteam-book-now .successful .success-message{opacity:1;height:auto}floodteam-book-now fireenjin-form{transition:opacity 0.6s ease;opacity:1}floodteam-book-now .successful fireenjin-form{opacity:0;height:0px}floodteam-book-now b{display:block;text-align:center;color:var(--ion-color-success)}";export{t as floodteam_book_now}