import{r as o,c as l,h as n}from"./p-8f2d27d2.js";let t=class{constructor(n){o(this,n),this.floodteamClosePopover=l(this,"floodteamClosePopover",7),this.buttonList=[]}render(){return n("ion-content",null,n("ion-list",null,this.buttonList.map((o=>n("ion-item",{detail:!0,lines:"full",href:(null==o?void 0:o.href)||"#",onClick:l=>{"function"==typeof(null==o?void 0:o.onClick)&&(o.onClick(l),this.floodteamClosePopover.emit({event:l}))}},n("ion-icon",{color:null==o?void 0:o.color,name:-1===o.icon.indexOf("/")?o.icon:null,src:-1===o.icon.indexOf("/")?null:o.icon,slot:"start"}),n("ion-label",{color:null==o?void 0:o.color,innerHTML:o.label}))))))}};t.style="";export{t as floodteam_popover_controls}