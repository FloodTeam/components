import{r as o,h as t,H as i}from"./p-a7779090.js";const a=class{constructor(t){o(this,t),this.badgeColor="medium",this.addButtonColor="primary",this.hideAddButton=!1,this.photos=[],this.currentSlide=0,this.options={}}async onSlideChange(){this.currentSlide=await this.photoSlidesEl.getActiveIndex()+1}async getCurrentSlide(){return this.currentSlide=await this.photoSlidesEl.getActiveIndex()+1,this.currentSlide}async slideNext(){return this.photoSlidesEl.slideNext()}async slidePrev(){return this.photoSlidesEl.slidePrev()}async slideTo(o){return this.photoSlidesEl.slideTo(o-1)}async selectFiles(o){return this.inputPhotoEl.triggerFileInput(o)}async update(){return this.currentSlide=await this.photoSlidesEl.getActiveIndex()+1,this.photoSlidesEl.update()}componentDidLoad(){var o;(null===(o=this.photoSlidesEl)||void 0===o?void 0:o.getActiveIndex)?setTimeout((async()=>{this.currentSlide=await this.photoSlidesEl.getActiveIndex()+1,await this.photoSlidesEl.update()}),200):setTimeout(this.componentDidLoad,200)}render(){var o,a;return t(i,null,t("floodteam-input-photo",{ref:o=>this.inputPhotoEl=o,path:`jobs/${this.jobId}/photos`,documentId:this.jobId,fileName:(new Date).toISOString()}),(null===(o=this.photos)||void 0===o?void 0:o.length)?t("ion-badge",{color:this.badgeColor,class:"photo-pagination"},this.currentSlide," / ",this.photos.length):null,this.hideAddButton?null:t("ion-fab",{class:"select-photo",onClick:o=>this.selectFiles(o)},t("ion-fab-button",{color:this.addButtonColor},t("ion-icon",{name:"add"}))),(null===(a=this.photos)||void 0===a?void 0:a.length)?t("ion-slides",{ref:o=>this.photoSlidesEl=o,pager:!1,options:this.options},this.photos.map((o=>t("ion-slide",null,t("ion-img",{src:o.url}))))):t("floodteam-fallback",{icon:"image",message:"No Picture Taken..."}))}};a.style='floodteam-photo-carousel{border:1px solid var(--ion-color-base-dark);border-radius:8px;position:relative;display:flex;justify-content:center;align-items:center;margin:0px 10px auto auto;min-width:250px;min-height:200px;margin:0 auto;background:1px solid var(--ion-color-base-dark-tint)}floodteam-photo-carousel ion-slides::after{content:"";display:block;height:40px;width:100%;position:absolute;left:0;right:0;top:0;background:transparent;background:linear-gradient(\n    0deg,\n    rgba(0, 0, 0, 0) 10%,\n    rgba(0, 0, 0, 0.3) 80%\n  );border-radius:8px 8px 0 0}floodteam-photo-carousel ion-slide{width:100%;padding-top:75%;position:relative;min-width:250px;min-height:200px}floodteam-photo-carousel ion-slide ion-img{position:absolute;top:50%;left:0;right:0;transform:translateY(-50%)}floodteam-photo-carousel floodteam-input-photo{height:0px;width:0px;visibility:hidden;opacity:0;display:block}floodteam-photo-carousel floodteam-fallback{--floodteam-fallback-icon-size:10vw}floodteam-photo-carousel floodteam-fallback ion-icon{max-width:120px;max-height:120px;color:var(--ion-color-base-dark)}floodteam-photo-carousel .photo-pagination{position:absolute;top:10px;left:8px;color:#666;display:block;z-index:2;padding-right:10px}floodteam-photo-carousel ion-fab.select-photo{position:absolute;top:-10px;right:-10px;z-index:2}';export{a as floodteam_photo_carousel}