import{r as i,c as o,h as e}from"./p-eb2b03ce.js";const n=class{constructor(e){i(this,e),this.ionChange=o(this,"ionChange",7),this.lines="none",this.selected=0}onSelectedChange(){setTimeout((()=>{this.setSelectedIndex()}),50)}onValueChange(){setTimeout((()=>{this.setSelectedValue()}),50)}async getOptionIndex(i){if(!this.options||!this.options.length)return!1;let o=0,e=0;for(const n of this.options){if(n.value===i){o=e;break}e+=1}return this.selected=this.selectedIndex,o}setSelectedValue(){let i=0;for(const o of this.options)o.value===this.value&&(this.selected=i),i+=1;this.ionChange.emit({value:this.value,name:this.name})}setSelectedIndex(){this.selectedIndex=this.selected,this.value=this.options[this.selected].value,this.ionChange.emit({value:this.value,name:this.name})}componentWillLoad(){this.setSelectedIndex()}selectOption(i,o){this.value=void 0!==o.value?o.value:null,this.selectedIndex=i,this.value||setTimeout((()=>{this.setSelectedValue()}),50)}render(){return e("ion-item",{lines:this.lines},e("ion-label",{position:"stacked"},this.label),e("ul",null,this.options.map(((i,o)=>e("li",{onClick:()=>this.selectOption(o,i)},i.name,o===this.selectedIndex?e("ion-icon",{name:"checkmark-circle"}):e("div",{class:"empty-circle"}))))))}static get watchers(){return{selected:["onSelectedChange"],value:["onValueChange"]}}};n.style="fireenjin-radios .invalid .input-wrapper{border-bottom-color:var(--ion-color-danger) !important}fireenjin-radios .invalid ion-label{color:var(--ion-color-danger) !important}fireenjin-radios ion-label{color:var(--ion-color-medium-shade);font-size:12px;font-weight:bold;text-transform:uppercase;font-family:arial;display:block;background:transparent;text-align:left;padding:0 0 8px 0;font-family:var(--ion-font-family)}fireenjin-radios ion-item{border-bottom:none !important;box-shadow:none !important}fireenjin-radios ion-input{display:block;height:0;width:0;opacity:0;pointer-events:none}fireenjin-radios ion-item ion-label{color:var(--ion-color-medium-shade) !important}fireenjin-radios ion-item input{color:var(--ion-color-dark);border:none;box-shadow:none !important;font-family:var(--ion-font-family);outline:none !important}fireenjin-radios ion-item.item-input-has-focus ion-label{color:var(--ion-color-primary)}fireenjin-radios ul{display:block;width:100%;list-style:none;padding:15px 0 5px 0;margin:0;text-align:left;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}fireenjin-radios ul li{display:inline-block;margin-right:15px;font-size:14px;line-height:30px;text-align:left;color:var(--ion-color-dark);position:relative;height:30px;text-indent:30px}fireenjin-radios ul li ion-icon{position:absolute;left:0px;top:0;color:var(--ion-color-primary);height:28px;width:28px}fireenjin-radios ul li ion-icon svg path{fill:var(--ion-color-primary)}fireenjin-radios ul li .empty-circle{position:absolute;top:2px;left:0px;height:23px;width:23px;border-radius:100%;border:2px solid var(--ion-color-medium-tint)}fireenjin-radios ul li:hover{cursor:pointer;color:var(--ion-color-primary)}fireenjin-radios ul li:hover .empty-circle{border-color:var(--ion-color-primary)}";export{n as fireenjin_radios}