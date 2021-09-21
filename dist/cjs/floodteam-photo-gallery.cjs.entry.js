'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-6c3aefc5.js');

const photoGalleryCss = "floodteam-photo-gallery{display:block}floodteam-photo-gallery ion-img{width:120px;height:120px;margin:0 auto;display:block}";

const PhotoGallery = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.ftOpenPhotoCarousel = index.createEvent(this, "ftOpenPhotoCarousel", 7);
        this.photos = [];
    }
    render() {
        return (index.h("ion-grid", null, index.h("ion-row", null, (this.photos ? this.photos : []).map((photo, index$1) => (index.h("ion-col", { onClick: (event) => this.ftOpenPhotoCarousel.emit({
                event,
                photo,
                index: index$1,
            }) }, index.h("ion-img", { src: photo })))))));
    }
};
PhotoGallery.style = photoGalleryCss;

exports.floodteam_photo_gallery = PhotoGallery;
