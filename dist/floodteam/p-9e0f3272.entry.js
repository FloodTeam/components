import{r as o,h as i}from"./p-eb2b03ce.js";const t=class{constructor(i){o(this,i),this.value={},this.name="json"}componentDidLoad(){}render(){return i("ion-item",{style:{overflow:"visible"}},this.label&&i("ion-label",{position:"stacked"},this.label),i("fireenjin-json-editor",{style:{width:"100%",marginTop:"15px"},name:this.name,value:this.value?this.value:{}}))}};t.style='floodteam-input-json{display:block;width:100%}floodteam-input-json .invalid{--border-color:var(--ion-color-danger) !important}floodteam-input-json .invalid ion-label{color:var(--ion-color-danger) !important}floodteam-input-json .valid{--border-color:var(--ion-color-success) !important}floodteam-input-json .valid ion-label{color:var(--ion-color-success) !important}floodteam-input-json ion-label{font-size:16px !important;font-weight:bold !important;display:block;background:transparent;text-align:left;padding:0 0 8px 0;font-family:var(--theme-font-primary)}floodteam-input-json ion-item{position:relative;box-shadow:none !important;--background:var(--background);font-size:inherit;text-align:inherit;--min-height:var(--item-min-height, 48px) !important}floodteam-input-json ion-item ion-icon[slot="start"]{margin:auto 10px 10px auto;fill:var(--ion-text-color)}floodteam-input-json ion-item.item-has-focus{--border-width:0;border-color:var(--ion-color-primary)}floodteam-input-json ion-item.item-has-focus ion-label{color:var(--ion-color-primary) !important}floodteam-input-json .input-icon ion-icon{display:block;position:absolute;right:0px;top:30px;height:35px;width:35px;color:var(--ion-color-dark)}floodteam-input-json .input-icon ion-icon:hover{cursor:pointer;color:var(--ion-color-primary)}';export{t as floodteam_input_json}