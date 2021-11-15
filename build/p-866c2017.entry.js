import{r as i,c as t,h as e,a as o,H as n}from"./p-8f2d27d2.js";let a=class{constructor(e){i(this,e),this.ionInput=t(this,"ionInput",7),this.fireenjinAddressMode=t(this,"fireenjinAddressMode",7),this.fireenjinUpdateAutoHeight=t(this,"fireenjinUpdateAutoHeight",7),this.value={},this.manualEntry=!1}onChange(){this.manualEntry&&setTimeout((()=>{const i=`${this.streetInputEl.value},${this.unitInputEl.value?` ${this.unitInputEl.value},`:""} ${this.cityInputEl.value}, ${this.stateSelectEl.querySelector("ion-select").value} ${this.zipInputEl.value}`;this.autocompleteFieldEl.value=i,this.value.full=i,this.ionInput.emit({name:this.name,value:this.value})}),100)}injectScript(i){return new Promise(((t,e)=>{const o=document.createElement("script");o.async=!0,o.src=i,o.addEventListener("load",t),o.addEventListener("error",(()=>e("Error loading script."))),o.addEventListener("abort",(()=>e("Script loading aborted."))),document.head.appendChild(o)}))}async componentWillLoad(){var i;try{this.googleMapsKey&&!(null===(i=null===window||void 0===window?void 0:window.google)||void 0===i?void 0:i.maps)&&await this.injectScript(`https://maps.googleapis.com/maps/api/js?key=${this.googleMapsKey}&libraries=places`)}catch(i){console.log("Error injecting Google Maps")}}async componentDidLoad(){{const i=await this.autocompleteFieldEl.getInputElement();setTimeout((()=>{i.setAttribute("autocomplete","new-password")}),200);const t=new google.maps.places.Autocomplete(i,{types:["address"]});google.maps.event.addListener(t,"place_changed",(()=>{var i,e,o,n,a,s,r;this.place=t.getPlace(),this.value||(this.value={}),this.value.full=this.place.formatted_address;let l="";this.value.placeId=null===(i=this.place)||void 0===i?void 0:i.place_id,this.value.lat=null===(n=null===(o=null===(e=this.place)||void 0===e?void 0:e.geometry)||void 0===o?void 0:o.location)||void 0===n?void 0:n.lat(),this.value.lng=null===(r=null===(s=null===(a=this.place)||void 0===a?void 0:a.geometry)||void 0===s?void 0:s.location)||void 0===r?void 0:r.lng(),this.place.address_components.map(((i,t)=>{-1!==i.types.indexOf("street_number")&&(l=i.long_name),-1!==i.types.indexOf("route")&&(l=l+" "+i.long_name),-1!==i.types.indexOf("locality")&&(this.value.city=i.long_name),-1!==i.types.indexOf("postal_code")&&(this.value.zip=i.short_name),-1!==i.types.indexOf("administrative_area_level_1")&&(this.value.state=i.short_name),this.place.address_components.length===t+1&&(this.value.street=l),t===this.place.address_components.length-1&&setTimeout((()=>{this.ionInput.emit({name:this.name,value:this.value})}),10)}))}))}}toggleManualEntry(){this.manualEntry=!this.manualEntry,this.manualEntry&&(this.value={city:this.cityInputEl.value,country:"US",full:this.autocompleteFieldEl.value,state:this.stateSelectEl.value,street:this.streetInputEl.value,unit:this.unitInputEl.value,zip:this.zipInputEl.value}),this.fireenjinAddressMode.emit({maual:this.manualEntry}),this.fireenjinUpdateAutoHeight.emit(),setTimeout((()=>{this.addressAutocompleteEl.forceUpdate()}),0)}render(){const i=this.value?this.value:{};return[e("ion-item",{lines:this.lines,class:{"is-hidden":!this.manualEntry}},e("ion-label",{position:this.labelPosition},this.label),e("div",{class:"manual-fields"},e("ion-input",{ref:i=>this.streetInputEl=i,type:"text",name:this.name+".street",placeholder:"Street Address",value:i.street,required:this.required&&this.manualEntry}),e("ion-input",{ref:i=>this.unitInputEl=i,type:"text",name:this.name+".unit",placeholder:"Street Address 2",value:i.unit}),e("ion-input",{ref:i=>this.cityInputEl=i,type:"text",name:this.name+".city",placeholder:"City",value:i.city,required:this.required&&this.manualEntry}),e("ion-grid",null,e("ion-row",null,e("ion-col",{size:"6"},e("fireenjin-input-state",{ref:i=>this.stateSelectEl=i,name:this.name+".state",value:i.state,placeholder:"State"})),e("ion-col",{size:"6"},e("ion-input",{ref:i=>this.zipInputEl=i,class:"zip-input",type:"tel",name:this.name+".zip",min:"0",max:"999999",value:i.zip,placeholder:"Zip Code",required:this.required&&this.manualEntry}))))),e("ion-button",{fill:"clear",color:"primary",onClick:()=>this.toggleManualEntry(),slot:"end"},e("span",{class:"button-inner"},"Search",e("ion-icon",{name:"search"})))),e("ion-item",{class:{"is-hidden":this.manualEntry}},e("ion-label",{position:"stacked"},this.label),e("ion-input",{ref:i=>this.autocompleteFieldEl=i,class:"autocomplete-field",type:"text",placeholder:this.placeholder,value:i.full,autocomplete:"off",required:this.required&&!this.manualEntry}),e("ion-button",{fill:"clear",color:"primary",onClick:()=>this.toggleManualEntry(),slot:"end"},e("span",{class:"button-inner"},"Manual",e("ion-icon",{name:"create"}))))]}get addressAutocompleteEl(){return o(this)}};a.style="fireenjin-input-address ion-label{font-size:12px;font-weight:bold;font-family:arial;display:block;background:transparent;text-align:left;padding:0 0 8px 0}fireenjin-input-address .invalid .input-wrapper{border-bottom-color:var(--ion-color-danger) !important}fireenjin-input-address .invalid .label{color:var(--ion-color-danger) !important}fireenjin-input-address ion-item{position:relative;border-bottom:none !important;box-shadow:none !important}fireenjin-input-address ion-item.is-hidden{display:none}fireenjin-input-address ion-item ion-label{color:var(--ion-color-medium) !important}fireenjin-input-address ion-item ion-input{border:none;box-shadow:none !important;outline:none !important;font-size:16px;font-weight:normal !important}fireenjin-input-address ion-item.item-has-focus{--border-width:0;border-color:var(--ion-color-primary)}fireenjin-input-address ion-item.item-has-focus ion-label{color:var(--ion-color-primary) !important}fireenjin-input-address ion-input.autocomplete-field{--padding-top:13px !important}fireenjin-input-address ion-button{text-decoration:none;position:absolute;right:0px;top:3px;z-index:3}fireenjin-input-address ion-button .button-inner{font-size:14px;color:var(--ion-color-primary);padding-right:25px}fireenjin-input-address ion-button ion-icon{position:absolute;top:6px;right:10px;color:var(--ion-color-primary)}fireenjin-input-address .manual-fields{width:100%;padding-top:5px}fireenjin-input-address .manual-fields ion-input{--padding-top:8px;--padding-bottom:8px;--padding-start:17px}fireenjin-input-address .manual-fields ion-grid floodbot-state-autocomplete,fireenjin-input-address .manual-fields ion-grid ion-input{display:block;min-width:150px}fireenjin-input-address .autocomplete-field{display:block;padding-top:8px}fireenjin-input-address .manual-fields ion-grid,fireenjin-input-address .manual-fields ion-grid ion-row ion-col{padding-bottom:0 !important;padding-top:0 !important}fireenjin-input-address .manual-fields ion-input:not(.zip-input){border-bottom:1px solid var(--ion-color-light-shade, #eee) !important}";let s=class{constructor(t){i(this,t),this.stateList={AK:"Alaska",AL:"Alabama",AR:"Arkansas",AS:"American Samoa",AZ:"Arizona",CA:"California",CO:"Colorado",CT:"Connecticut",DC:"District of Columbia",DE:"Delaware",FL:"Florida",GA:"Georgia",GU:"Guam",HI:"Hawaii",IA:"Iowa",ID:"Idaho",IL:"Illinois",IN:"Indiana",KS:"Kansas",KY:"Kentucky",LA:"Louisiana",MA:"Massachusetts",MD:"Maryland",ME:"Maine",MI:"Michigan",MN:"Minnesota",MO:"Missouri",MS:"Mississippi",MT:"Montana",NC:"North Carolina",ND:" North Dakota",NE:"Nebraska",NH:"New Hampshire",NJ:"New Jersey",NM:"New Mexico",NV:"Nevada",NY:"New York",OH:"Ohio",OK:"Oklahoma",OR:"Oregon",PA:"Pennsylvania",PR:"Puerto Rico",RI:"Rhode Island",SC:"South Carolina",SD:"South Dakota",TN:"Tennessee",TX:"Texas",UT:"Utah",VA:"Virginia",VI:"Virgin Islands",VT:"Vermont",WA:"Washington",WI:"Wisconsin",WV:"West Virginia",WY:"Wyoming"}}componentDidLoad(){this.stateAutocompleteEl.querySelector("ion-select").interfaceOptions={header:"State"}}render(){return e("ion-select",{color:"primary",name:this.name,value:this.value,"ok-text":"Select","cancel-text":"Cancel",placeholder:this.placeholder},Object.keys(this.stateList).map((i=>e("ion-select-option",{value:i},this.stateList[i]))))}get stateAutocompleteEl(){return o(this)}};s.style="fireenjin-input-state ion-select{color:var(--ion-color-dark);font-family:var(--ion-font-family);--padding-start:0;max-width:auto}";let r=class{constructor(t){i(this,t),this.size="150px",this.animating=!1}render(){return e(n,{style:{"--floodteam-checkmark-size":this.size}},e("div",{class:{"checkmark-wrapper":!0,animate:this.animating}},e("ion-icon",{name:"checkmark-circle"})))}};r.style="@keyframes fadeRoll{0%{transform:rotate(30deg) translateY(50px) scale(0.6);opacity:0}80%{transform:rotate(-15deg) translateY(-10px) scale(1);opacity:1}100%{transform:rotate(0deg) translateY(0) scale(1);opacity:1}}.checkmark-wrapper{display:block;margin:0 auto;width:var(\n    --floodteam-checkmark-width,\n    var(--floodteam-checkmark-size, 150px)\n  );height:var(\n    --floodteam-checkmark-height,\n    var(--floodteam-checkmark-size, 150px)\n  );max-width:var(--floodteam-checkmark-max-width, 800px);min-height:var(\n    --floodteam-checkmark-min-height,\n    var(--floodteam-checkmark-size, 150px)\n  )}ion-icon{display:block;height:var(--floodteam-checkmark-size, 150px);width:var(--floodteam-checkmark-size, 150px);color:var(--ion-color-secondary, #000000);display:block;margin:0 auto;opacity:0}.animate ion-icon{animation:fadeRoll 2s;animation-iteration-count:1;animation-fill-mode:forwards}";export{a as fireenjin_input_address,s as fireenjin_input_state,r as floodteam_checkmark}