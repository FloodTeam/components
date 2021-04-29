import { Component, Event, EventEmitter, h, Prop } from "@stencil/core";

@Component({
  tag: "floodteam-photo-gallery",
  styleUrl: "photo-gallery.css",
})
export class PhotoGallery {
  @Event() ftOpenPhotoCarousel: EventEmitter;

  @Prop() photos: string[] = [];

  render() {
    return (
      <ion-grid>
        <ion-row>
          {(this.photos ? this.photos : []).map(
            (photo: string, index: number) => (
              <ion-col
                onClick={(event) =>
                  this.ftOpenPhotoCarousel.emit({
                    event,
                    photo,
                    index,
                  })
                }
              >
                <ion-img src={photo} />
              </ion-col>
            )
          )}
        </ion-row>
      </ion-grid>
    );
  }
}
