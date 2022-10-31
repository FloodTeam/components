import{r as t,c as o,B as i,h as s,H as a}from"./p-8710117e.js";const e=class{constructor(i){t(this,i),this.fireenjinTrigger=o(this,"fireenjinTrigger",7),this.jobId=void 0,this.siteId=void 0,this.badgeColor="medium",this.addButtonColor="primary",this.hideAddButton=!1,this.photos=[],this.currentSlide=0,this.options={},this.name="photocarousel",this.type="site",this.multiple=!0,this.uploadPath=void 0,this.tags=[]}async onSlideChange(){this.currentSlide=await this.photoSlidesEl.getActiveIndex()+1}async getCurrentSlide(){return this.currentSlide=await this.photoSlidesEl.getActiveIndex()+1,this.currentSlide}async getPhoto(){return this.photos[this.currentSlide-1]}async slideNext(){return this.photoSlidesEl.slideNext()}async slidePrev(){return this.photoSlidesEl.slidePrev()}async slideTo(t){return this.photoSlidesEl.slideTo(t-1)}async selectFiles(){this.fireenjinTrigger.emit({name:"photos",multiple:!!this.multiple,payload:{path:this.uploadPath||`jobs/${this.jobId}/photos`,jobId:this.jobId,siteId:this.siteId,tags:this.tags||[]}})}async update(){return this.currentSlide=await this.photoSlidesEl.getActiveIndex()+1,this.photoSlidesEl.update()}componentDidLoad(){var t;(null==i?void 0:i.isBrowser)&&((null===(t=this.photoSlidesEl)||void 0===t?void 0:t.getActiveIndex)?setTimeout((async()=>{this.currentSlide=await this.photoSlidesEl.getActiveIndex()+1,await this.photoSlidesEl.update()}),200):setTimeout(this.componentDidLoad,200))}render(){var t,o;return s(a,null,(null===(t=this.photos)||void 0===t?void 0:t.length)?s("ion-badge",{color:this.badgeColor,class:"photo-pagination"},this.currentSlide," / ",this.photos.length):null,this.hideAddButton?null:s("ion-button",{class:"select-photo ion-float-right",color:this.addButtonColor,onClick:()=>this.selectFiles()},"Add"),(null===(o=this.photos)||void 0===o?void 0:o.length)?s("ion-slides",{ref:t=>this.photoSlidesEl=t,pager:!1,options:this.options},this.photos.map((t=>s("ion-slide",null,s("ion-img",{src:t.url}))))):s("floodteam-fallback",{icon:"image",message:"No Picture Taken..."}))}};e.style='floodteam-photo-carousel{display:block;position:relative;margin:0 auto;min-height:200px;padding-top:56.25%;}floodteam-photo-carousel ion-slides::after{content:"";display:block;height:40px;width:100%;position:absolute;left:0;right:0;top:0;background:transparent;background:linear-gradient(\n    0deg,\n    rgba(0, 0, 0, 0) 10%,\n    rgba(0, 0, 0, 0.3) 80%\n  )}floodteam-photo-carousel ion-slides{position:absolute !important;top:0;left:0;right:0;bottom:0;overflow:hidden !important}floodteam-photo-carousel ion-slide{margin:auto}floodteam-photo-carousel input[type="file"]{height:0px;width:0px;visibility:hidden;opacity:0 !important;display:block;overflow:hidden;float:left}floodteam-photo-carousel floodteam-fallback{--floodteam-fallback-icon-size:10vw}floodteam-photo-carousel floodteam-fallback ion-icon{max-width:120px;max-height:120px;color:var(--ion-color-base-dark)}floodteam-photo-carousel .photo-pagination{position:absolute;top:10px;left:8px;color:#666;display:block;z-index:2;padding-right:10px}@media only screen and (max-width: 500px){floodteam-photo-carousel .photo-pagination{top:5px;left:4px}floodteam-photo-carousel ion-fab-button{height:45px !important;width:45px !important}}';export{e as floodteam_photo_carousel}