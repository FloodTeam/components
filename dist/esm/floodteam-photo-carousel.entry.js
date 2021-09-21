import { r as registerInstance, h, H as Host } from './index-2bcfd230.js';

const photoCarouselCss = "floodteam-photo-carousel{display:block;border:1px solid var(--ion-color-base-dark);position:relative;min-height:45px;min-width:80px;margin:0 auto;border-radius:8px !important;padding-top:56.25%;}floodteam-photo-carousel ion-slides::after{content:\"\";display:block;height:40px;width:100%;position:absolute;left:0;right:0;top:0;background:transparent;background:linear-gradient(\r\n    0deg,\r\n    rgba(0, 0, 0, 0) 10%,\r\n    rgba(0, 0, 0, 0.3) 80%\r\n  );border-radius:8px 8px 0 0}floodteam-photo-carousel ion-slides{position:absolute !important;top:0;left:0;right:0;bottom:0;border-radius:8px !important;overflow:hidden !important}floodteam-photo-carousel ion-slide{margin:auto}floodteam-photo-carousel floodteam-input-photo{height:0px;width:0px;visibility:hidden;opacity:0;display:block;overflow:hidden}floodteam-photo-carousel floodteam-fallback{--floodteam-fallback-icon-size:10vw}floodteam-photo-carousel floodteam-fallback ion-icon{max-width:120px;max-height:120px;color:var(--ion-color-base-dark)}floodteam-photo-carousel .photo-pagination{position:absolute;top:10px;left:8px;color:#666;display:block;z-index:2;padding-right:10px}floodteam-photo-carousel ion-fab.select-photo{position:absolute;top:-10px;right:-10px;z-index:2}floodteam-photo-carousel ion-fab.select-photo{position:absolute;top:-10px;right:-10px;z-index:2}@media only screen and (max-width: 500px){floodteam-photo-carousel .photo-pagination{top:5px;left:4px}floodteam-photo-carousel ion-fab-button{height:45px !important;width:45px !important}}";

const PhotoCarousel = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.badgeColor = "medium";
        this.addButtonColor = "primary";
        this.hideAddButton = false;
        this.photos = [];
        this.currentSlide = 0;
        this.options = {};
        this.name = "photocarousel";
    }
    async onSlideChange() {
        this.currentSlide = (await this.photoSlidesEl.getActiveIndex()) + 1;
    }
    async getCurrentSlide() {
        this.currentSlide = (await this.photoSlidesEl.getActiveIndex()) + 1;
        return this.currentSlide;
    }
    async slideNext() {
        return this.photoSlidesEl.slideNext();
    }
    async slidePrev() {
        return this.photoSlidesEl.slidePrev();
    }
    async slideTo(slideNumber) {
        return this.photoSlidesEl.slideTo(slideNumber - 1);
    }
    async selectFiles(event) {
        return this.inputPhotoEl.triggerFileInput(event);
    }
    async update() {
        this.currentSlide = (await this.photoSlidesEl.getActiveIndex()) + 1;
        return this.photoSlidesEl.update();
    }
    componentDidLoad() {
        var _a;
        if (!((_a = this.photoSlidesEl) === null || _a === void 0 ? void 0 : _a.getActiveIndex)) {
            setTimeout(this.componentDidLoad, 200);
            return;
        }
        setTimeout(async () => {
            this.currentSlide = (await this.photoSlidesEl.getActiveIndex()) + 1;
            await this.photoSlidesEl.update();
        }, 200);
    }
    render() {
        var _a, _b;
        return (h(Host, null, h("floodteam-input-photo", { name: this.name, ref: (el) => (this.inputPhotoEl = el), path: `jobs/${this.jobId}/photos`, documentId: this.jobId, fileName: new Date().toISOString(), multiple: true }), ((_a = this.photos) === null || _a === void 0 ? void 0 : _a.length) ? (h("ion-badge", { color: this.badgeColor, class: "photo-pagination" }, this.currentSlide, " / ", this.photos.length)) : null, !this.hideAddButton ? (h("ion-fab", { class: "select-photo", onClick: (event) => this.selectFiles(event) }, h("ion-fab-button", { color: this.addButtonColor }, h("ion-icon", { name: "add" })))) : null, ((_b = this.photos) === null || _b === void 0 ? void 0 : _b.length) ? (h("ion-slides", { ref: (el) => (this.photoSlidesEl = el), pager: false, options: this.options }, this.photos.map((photo) => (h("ion-slide", null, h("ion-img", { src: photo.url })))))) : (h("floodteam-fallback", { icon: "image", message: "No Picture Taken..." }))));
    }
};
PhotoCarousel.style = photoCarouselCss;

export { PhotoCarousel as floodteam_photo_carousel };
