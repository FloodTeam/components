import{r as o,h as t}from"./p-eb2b03ce.js";const i=class{constructor(t){o(this,t),this.color="danger",this.iconName="alert-circle-outline"}render(){return t("ion-item",{role:"alert",lines:"none"},t("ion-icon",{name:this.iconName,color:this.color,slot:"start"}),t("ion-label",{color:this.color,class:"ion-text-wrap"},this.message,t("slot",null)))}};i.style="ion-item{font-family:var(\n    --floodteam-error-font-family,\n    var(--theme-font-primary, Arial, Helvetica, sans-serif)\n  );--item-border-bottom:none;--item-content-padding:0;position:relative}ion-icon{height:20px;width:20px;display:inline-block}ion-label{padding-left:5px;font-size:14px;color:var(--ion-color-danger, red) !important}";export{i as floodteam_error}