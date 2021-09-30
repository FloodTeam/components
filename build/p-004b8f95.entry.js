import{r as i,c as n,h as t}from"./p-eb2b03ce.js";const o=class{constructor(t){i(this,t),this.ionInput=n(this,"ionInput",7),this.ionChange=n(this,"ionChange",7),this.step="0.01"}onChange(i){this.formattedValue=this.formatCurrency(i.target.value)}onValueChange(i,n){if(i===n)return!1;this.formattedValue=this.formatCurrency(this.value)}formatCurrency(i){if(!i||isNaN(parseFloat(i)))return this.value=null,this.inputEl.value=null,null;const n=Number(parseFloat((i+"").replace(",","")).toFixed(2)),t=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:2});return document.querySelectorAll(".presets span").forEach((i=>{+n==+parseFloat((i.textContent+"").replace(",","").replace("$","").replace(" ","")).toFixed(2)?i.classList.add("selected"):i.classList.remove("selected")})),this.value=n,setTimeout((()=>{this.ionInput.emit({name:this.name,value:n}),this.ionChange.emit({name:this.name,value:n})}),200),t.format(n).replace("$","")}componentDidLoad(){this.formattedValue=this.formatCurrency(this.value)}selectPreset(i){this.formattedValue=this.formatCurrency("string"==typeof i?i:(null==i?void 0:i.value)?i.value:0)}render(){return t("ion-item",null,t("ion-icon",{name:"logo-usd",slot:"start"}),this.label&&t("ion-label",{position:"stacked"},this.label),this.presets&&this.presets.length&&t("div",{class:"presets",slot:"end"},this.presets.map((i=>t("span",{onClick:()=>this.selectPreset(i)},"string"==typeof i?i:(null==i?void 0:i.label)?i.label:(null==i?void 0:i.value)?i.value:"")))),t("ion-input",{min:this.min,max:this.max,ref:i=>this.inputEl=i,disabled:this.disabled,inputmode:"decimal",type:"number",step:this.step,placeholder:this.placeholder,required:this.required,autofocus:this.autofocus,value:this.formattedValue}))}static get watchers(){return{value:["onValueChange"]}}};o.style='fireenjin-input .invalid{--border-color:var(--ion-color-danger) !important}fireenjin-input .invalid ion-label{color:var(--ion-color-danger) !important}fireenjin-input .valid{--border-color:var(--ion-color-success) !important}fireenjin-input .valid ion-label{color:var(--ion-color-success) !important}fireenjin-input ion-label{font-size:16px !important;font-weight:bold !important;display:block;background:transparent;text-align:left;padding:0 0 8px 0;font-family:var(--ion-font-family)}fireenjin-input-amount ion-item ion-input{color:var(--ion-text-color);border:none;box-shadow:none !important;font-family:var(--ion-font-family);outline:none !important;--padding-top:5px !important;--padding-bottom:3px !important;--padding-start:8px}fireenjin-input-amount ion-item ion-input input.native-input{font-size:18px !important;font-weight:bold !important;text-indent:15px !important}fireenjin-input-amount ion-item.item-has-focus{--border-width:0 0 2px 0;--border-color:var(--ion-color-primary)}fireenjin-input-amount ion-item.item-has-focus ion-label{color:var(--ion-color-primary) !important}fireenjin-input-amount ion-item ion-icon[slot="start"]{position:absolute;top:25px;left:8px;color:var(--ion-color-medium-shade)}fireenjin-input-amount ion-item .input-clear-icon{display:none !important;visibility:hidden !important}fireenjin-input-amount ion-item .text-input-clear-icon{display:none !important}fireenjin-input-amount .presets{position:absolute;top:6px;right:0px;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}fireenjin-input-amount .presets span{border:1px solid var(--ion-text-color);color:var(--ion-text-color);padding:3px 8px;margin-left:13px;font-size:12px;font-weight:bold;transition:300ms ease all;border-radius:3px}fireenjin-input-amount .presets span:hover{cursor:pointer;color:var(--ion-color-success);border-color:var(--ion-color-success)}fireenjin-input-amount .presets span.selected{background-color:var(--ion-color-success);color:#ffffff;border:none}fireenjin-input-amount .hidden-input{display:block;visibility:hidden;height:0;opacity:0}fireenjin-input-amount ion-input{font-weight:bold;font-size:20px}fireenjin-input-amount input::-webkit-outer-spin-button,fireenjin-input-amount input::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}fireenjin-input-amount input[type="number"]{-moz-appearance:textfield}';export{o as fireenjin_input_amount}