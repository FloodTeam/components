import{r as i,c as o,h as t,H as n}from"./p-8710117e.js";const l=class{constructor(t){i(this,t),this.floodteamOpenSiteEditModal=o(this,"floodteamOpenSiteEditModal",7),this.href=void 0,this.detail=!0,this.disabled=!1,this.site=void 0}openTab(i,o){i.stopPropagation(),i.preventDefault(),this.floodteamOpenSiteEditModal.emit({selectedTab:o,site:this.site})}render(){var i,o,l,e,s,d,a,h,r;return t(n,null,t("ion-item",{detail:this.detail,href:this.href,disabled:this.disabled},t("ion-label",null,t("h3",null,(null===(i=this.site)||void 0===i?void 0:i.name)?this.site.name:"Common"),t("ion-grid",null,t("ion-row",null,t("ion-col",{size:"3"},t("ion-chip",{onClick:i=>this.openTab(i,"photos")},t("ion-icon",{name:"images"}),t("ion-label",null,(null===(l=null===(o=this.site)||void 0===o?void 0:o.photos)||void 0===l?void 0:l.length)?this.site.photos.length:0))),t("ion-col",{size:"3"},t("ion-chip",{onClick:i=>this.openTab(i,"info")},t("ion-icon",{name:"construct"}),t("ion-label",null,(null===(s=null===(e=this.site)||void 0===e?void 0:e.equipment)||void 0===s?void 0:s.length)?this.site.equipment.length:0))),t("ion-col",{size:"3"},t("ion-chip",{onClick:i=>this.openTab(i,"info")},t("ion-icon",{name:"reader"}),t("ion-label",null,(null===(a=null===(d=this.site)||void 0===d?void 0:d.services)||void 0===a?void 0:a.length)?this.site.services.length:0))),t("ion-col",{size:"3"},t("ion-chip",{onClick:i=>this.openTab(i,"dots")},t("ion-icon",{name:"ellipse"}),t("ion-label",null,(null===(r=null===(h=this.site)||void 0===h?void 0:h.dots)||void 0===r?void 0:r.length)?this.site.dots.length:0))))))))}};l.style="floodteam-item-site h3,floodteam-item-site ion-text{display:block;text-indent:10px}floodteam-item-site ion-label{margin-top:5px;margin-bottom:0px;text-transform:capitalize}floodteam-item-site ion-grid ion-chip{padding:0px 15px;--background:transparent;--color:var(--ion-text-color);opacity:0.5}floodteam-item-site ion-chip ion-icon{height:15px;width:15px;color:var(--ion-text-color)}floodteam-item-site ion-grid,floodteam-item-site ion-grid ion-row,floodteam-item-site ion-grid ion-row ion-col{padding:0;margin:0}";export{l as floodteam_item_site}