import { r as registerInstance, c as createEvent, h } from './index-2bcfd230.js';

const photoGalleryCss = "floodteam-photo-gallery{display:block}floodteam-photo-gallery ion-img{width:120px;height:120px;margin:0 auto;display:block}";

const PhotoGallery = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.ftOpenPhotoCarousel = createEvent(this, "ftOpenPhotoCarousel", 7);
        this.photos = [];
    }
    render() {
        return (h("ion-grid", null, h("ion-row", null, (this.photos ? this.photos : []).map((photo, index) => (h("ion-col", { onClick: (event) => this.ftOpenPhotoCarousel.emit({
                event,
                photo,
                index,
            }) }, h("ion-img", { src: photo })))))));
    }
};
PhotoGallery.style = photoGalleryCss;

export { PhotoGallery as floodteam_photo_gallery };
