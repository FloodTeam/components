import{r as i,h as t,H as r,c as o,a as e}from"./p-5c1a6496.js";import{g as n}from"./p-8a149e66.js";import{c as a,h as s}from"./p-7840618d.js";import{a as l,r as d,d as h}from"./p-159f073c.js";const c=class{constructor(t){i(this,t)}render(){const{lines:i}=this,o=n(this);return t(r,{class:a(this.color,{[o]:!0,[`list-header-lines-${i}`]:void 0!==i})},t("div",{class:"list-header-inner"},t("slot",null)))}};c.style={ios:":host{--border-style:solid;--border-width:0;--inner-border-width:0;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;display:flex;align-items:center;justify-content:space-between;width:100%;min-height:40px;border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);color:var(--color);overflow:hidden}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}.list-header-inner{display:flex;position:relative;flex:1;flex-direction:inherit;align-items:inherit;align-self:stretch;min-height:inherit;border-width:var(--inner-border-width);border-style:var(--border-style);border-color:var(--border-color);overflow:inherit;box-sizing:border-box}::slotted(ion-label){flex:1 1 auto}:host(.list-header-lines-inset),:host(.list-header-lines-none){--border-width:0}:host(.list-header-lines-full),:host(.list-header-lines-none){--inner-border-width:0}:host{--background:transparent;--color:var(--ion-color-step-850, #262626);--border-color:var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-250, #c8c7cc)));padding-left:calc(var(--ion-safe-area-left, 0px) + 20px);position:relative;align-items:flex-end;font-size:22px;font-weight:700;letter-spacing:0}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){:host{padding-left:unset;-webkit-padding-start:calc(var(--ion-safe-area-left, 0px) + 20px);padding-inline-start:calc(var(--ion-safe-area-left, 0px) + 20px)}}::slotted(ion-button),::slotted(ion-label){margin-top:29px;margin-bottom:6px}::slotted(ion-button){margin-left:3px;margin-right:3px;height:1.4em}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){::slotted(ion-button){margin-left:unset;margin-right:unset;-webkit-margin-start:3px;margin-inline-start:3px;-webkit-margin-end:3px;margin-inline-end:3px}}:host(.list-header-lines-full){--border-width:0 0 0.55px 0}:host(.list-header-lines-inset){--inner-border-width:0 0 0.55px 0}",md:":host{--border-style:solid;--border-width:0;--inner-border-width:0;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;display:flex;align-items:center;justify-content:space-between;width:100%;min-height:40px;border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);color:var(--color);overflow:hidden}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}.list-header-inner{display:flex;position:relative;flex:1;flex-direction:inherit;align-items:inherit;align-self:stretch;min-height:inherit;border-width:var(--inner-border-width);border-style:var(--border-style);border-color:var(--border-color);overflow:inherit;box-sizing:border-box}::slotted(ion-label){flex:1 1 auto}:host(.list-header-lines-inset),:host(.list-header-lines-none){--border-width:0}:host(.list-header-lines-full),:host(.list-header-lines-none){--inner-border-width:0}:host{--background:transparent;--color:var(--ion-text-color, #000);--border-color:var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-150, rgba(0, 0, 0, 0.13))));padding-left:calc(var(--ion-safe-area-left, 0) + 16px);min-height:45px;font-size:14px}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){:host{padding-left:unset;-webkit-padding-start:calc(var(--ion-safe-area-left, 0) + 16px);padding-inline-start:calc(var(--ion-safe-area-left, 0) + 16px)}}:host(.list-header-lines-full){--border-width:0 0 1px 0}:host(.list-header-lines-inset){--inner-border-width:0 0 1px 0}"};const b=class{constructor(t){i(this,t),this.ionStyle=o(this,"ionStyle",7),this.ionFocus=o(this,"ionFocus",7),this.ionBlur=o(this,"ionBlur",7),this.inputId="ion-rb-"+p++,this.radioGroup=null,this.checked=!1,this.buttonTabindex=-1,this.name=this.inputId,this.disabled=!1,this.updateState=()=>{this.radioGroup&&(this.checked=this.radioGroup.value===this.value)},this.onFocus=()=>{this.ionFocus.emit()},this.onBlur=()=>{this.ionBlur.emit()}}async setFocus(i){i.stopPropagation(),i.preventDefault(),this.el.focus()}async setButtonTabindex(i){this.buttonTabindex=i}connectedCallback(){void 0===this.value&&(this.value=this.inputId);const i=this.radioGroup=this.el.closest("ion-radio-group");i&&(this.updateState(),l(i,"ionChange",this.updateState))}disconnectedCallback(){const i=this.radioGroup;i&&(d(i,"ionChange",this.updateState),this.radioGroup=null)}componentWillLoad(){this.emitStyle()}emitStyle(){this.ionStyle.emit({"radio-checked":this.checked,"interactive-disabled":this.disabled})}render(){const{inputId:i,disabled:o,checked:e,color:l,el:d,buttonTabindex:c}=this,b=n(this),{label:p,labelId:g,labelText:m}=h(d,i);return t(r,{"aria-checked":`${e}`,"aria-hidden":o?"true":null,"aria-labelledby":p?g:null,role:"radio",tabindex:c,onFocus:this.onFocus,onBlur:this.onBlur,class:a(l,{[b]:!0,"in-item":s("ion-item",d),interactive:!0,"radio-checked":e,"radio-disabled":o})},t("div",{class:"radio-icon",part:"container"},t("div",{class:"radio-inner",part:"mark"}),t("div",{class:"radio-ripple"})),t("label",{htmlFor:i},m),t("input",{type:"radio",checked:e,disabled:o,tabindex:"-1",id:i}))}get el(){return e(this)}static get watchers(){return{color:["emitStyle"],checked:["emitStyle"],disabled:["emitStyle"]}}};let p=0;b.style={ios:':host{--inner-border-radius:50%;display:inline-block;position:relative;box-sizing:border-box;user-select:none;z-index:2}:host(.radio-disabled){pointer-events:none}.radio-icon{display:flex;align-items:center;justify-content:center;width:100%;height:100%;contain:layout size style}.radio-icon,.radio-inner{box-sizing:border-box}label{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;appearance:none;outline:none;display:flex;align-items:center;opacity:0}[dir=rtl] label,:host-context([dir=rtl]) label{left:unset;right:unset;right:0}label::-moz-focus-inner{border:0}input{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}:host(:focus){outline:none}:host{--color-checked:var(--ion-color-primary, #3880ff);width:15px;height:24px}:host(.ion-color.radio-checked) .radio-inner{border-color:var(--ion-color-base)}.item-radio.item-ios ion-label{margin-left:0}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){.item-radio.item-ios ion-label{margin-left:unset;-webkit-margin-start:0;margin-inline-start:0}}.radio-inner{width:33%;height:50%}:host(.radio-checked) .radio-inner{transform:rotate(45deg);border-width:2px;border-top-width:0;border-left-width:0;border-style:solid;border-color:var(--color-checked)}:host(.radio-disabled){opacity:0.3}:host(.ion-focused) .radio-icon::after{border-radius:var(--inner-border-radius);left:-9px;top:-8px;display:block;position:absolute;width:36px;height:36px;background:var(--ion-color-primary-tint, #4c8dff);content:"";opacity:0.2}:host-context([dir=rtl]):host(.ion-focused) .radio-icon::after,:host-context([dir=rtl]).ion-focused .radio-icon::after{left:unset;right:unset;right:-9px}:host(.in-item){margin-left:10px;margin-right:11px;margin-top:8px;margin-bottom:8px;display:block;position:static}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){:host(.in-item){margin-left:unset;margin-right:unset;-webkit-margin-start:10px;margin-inline-start:10px;-webkit-margin-end:11px;margin-inline-end:11px}}:host(.in-item[slot=start]){margin-left:3px;margin-right:21px;margin-top:8px;margin-bottom:8px}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){:host(.in-item[slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:3px;margin-inline-start:3px;-webkit-margin-end:21px;margin-inline-end:21px}}',md:':host{--inner-border-radius:50%;display:inline-block;position:relative;box-sizing:border-box;user-select:none;z-index:2}:host(.radio-disabled){pointer-events:none}.radio-icon{display:flex;align-items:center;justify-content:center;width:100%;height:100%;contain:layout size style}.radio-icon,.radio-inner{box-sizing:border-box}label{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;appearance:none;outline:none;display:flex;align-items:center;opacity:0}[dir=rtl] label,:host-context([dir=rtl]) label{left:unset;right:unset;right:0}label::-moz-focus-inner{border:0}input{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}:host(:focus){outline:none}:host{--color:var(--ion-color-step-400, #999999);--color-checked:var(--ion-color-primary, #3880ff);--border-width:2px;--border-style:solid;--border-radius:50%;width:20px;height:20px}:host(.ion-color) .radio-inner{background:var(--ion-color-base)}:host(.ion-color.radio-checked) .radio-icon{border-color:var(--ion-color-base)}.radio-icon{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;border-radius:var(--border-radius);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--color)}.radio-inner{border-radius:var(--inner-border-radius);width:calc(50% + var(--border-width));height:calc(50% + var(--border-width));transform:scale3d(0, 0, 0);transition:transform 280ms cubic-bezier(0.4, 0, 0.2, 1);background:var(--color-checked)}:host(.radio-checked) .radio-icon{border-color:var(--color-checked)}:host(.radio-checked) .radio-inner{transform:scale3d(1, 1, 1)}:host(.radio-disabled){opacity:0.3}:host(.ion-focused) .radio-icon::after{border-radius:var(--inner-border-radius);left:-12px;top:-12px;display:block;position:absolute;width:36px;height:36px;background:var(--ion-color-primary-tint, #4c8dff);content:"";opacity:0.2}:host-context([dir=rtl]):host(.ion-focused) .radio-icon::after,:host-context([dir=rtl]).ion-focused .radio-icon::after{left:unset;right:unset;right:-12px}:host(.in-item){margin-left:0;margin-right:0;margin-top:9px;margin-bottom:9px;display:block;position:static}:host(.in-item[slot=start]){margin-left:4px;margin-right:36px;margin-top:11px;margin-bottom:10px}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){:host(.in-item[slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:4px;margin-inline-start:4px;-webkit-margin-end:36px;margin-inline-end:36px}}'};const g=class{constructor(t){i(this,t),this.ionChange=o(this,"ionChange",7),this.inputId="ion-rg-"+m++,this.labelId=`${this.inputId}-lbl`,this.allowEmptySelection=!1,this.name=this.inputId,this.setRadioTabindex=i=>{const t=this.getRadios(),r=t.find((i=>!i.disabled)),o=t.find((t=>t.value===i&&!t.disabled));if(!r&&!o)return;const e=o||r;for(const i of t)i.setButtonTabindex(i===e?0:-1)},this.onClick=i=>{i.preventDefault();const t=i.target&&i.target.closest("ion-radio");if(t){const i=t.value;i!==this.value?this.value=i:this.allowEmptySelection&&(this.value=void 0)}}}valueChanged(i){this.setRadioTabindex(i),this.ionChange.emit({value:i})}componentDidLoad(){this.setRadioTabindex(this.value)}async connectedCallback(){const i=this.el.querySelector("ion-list-header")||this.el.querySelector("ion-item-divider");if(i){const t=this.label=i.querySelector("ion-label");t&&(this.labelId=t.id=this.name+"-lbl")}}getRadios(){return Array.from(this.el.querySelectorAll("ion-radio"))}onKeydown(i){const t=!!this.el.closest("ion-select-popover");if(i.target&&!this.el.contains(i.target))return;const r=Array.from(this.el.querySelectorAll("ion-radio")).filter((i=>!i.disabled));if(i.target&&r.includes(i.target)){const o=r.findIndex((t=>t===i.target)),e=r[o];let n;["ArrowDown","ArrowRight"].includes(i.code)&&(n=o===r.length-1?r[0]:r[o+1]),["ArrowUp","ArrowLeft"].includes(i.code)&&(n=0===o?r[r.length-1]:r[o-1]),n&&r.includes(n)&&(n.setFocus(i),t||(this.value=n.value)),["Space"].includes(i.code)&&(this.value=e.value,i.preventDefault())}}render(){const{label:i,labelId:o}=this,e=n(this);return t(r,{role:"radiogroup","aria-labelledby":i?o:null,onClick:this.onClick,class:e})}get el(){return e(this)}static get watchers(){return{value:["valueChanged"]}}};let m=0;export{c as ion_list_header,b as ion_radio,g as ion_radio_group}