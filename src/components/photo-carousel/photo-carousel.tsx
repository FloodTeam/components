import { FireEnjinTriggerInput } from "@fireenjin/sdk";
import { Color } from "@ionic/core";
import {
  Build,
  Component,
  ComponentInterface,
  Listen,
  Prop,
  h,
  Host,
  Method,
  Event,
  EventEmitter,
} from "@stencil/core";

@Component({
  tag: "floodteam-photo-carousel",
  styleUrl: "photo-carousel.css",
})
export class PhotoCarousel implements ComponentInterface {
  photoSlidesEl: HTMLIonSlidesElement;
  inputPhotoEl: any;

  @Event() fireenjinTrigger: EventEmitter<FireEnjinTriggerInput>;

  @Prop() jobId: string;
  @Prop() siteId: string;
  @Prop() badgeColor: Color = "medium";
  @Prop() addButtonColor: Color = "primary";
  @Prop() hideAddButton = false;
  @Prop() photos: any[] = [];
  @Prop({ mutable: true }) currentSlide = 0;
  @Prop() options: any = {};
  @Prop() name = "photocarousel";
  @Prop() type: string = "site";
  @Prop() multiple = true;
  @Prop() uploadPath: string;
  @Prop() tags: string[] = [];

  @Listen("ionSlideDidChange")
  async onSlideChange() {
    this.currentSlide = (await this.photoSlidesEl.getActiveIndex()) + 1;
  }

  @Method()
  async getCurrentSlide() {
    this.currentSlide = (await this.photoSlidesEl.getActiveIndex()) + 1;
    return this.currentSlide;
  }

  @Method()
  async getPhoto() {
    return this.photos[this.currentSlide - 1];
  }

  @Method()
  async slideNext() {
    return this.photoSlidesEl.slideNext();
  }

  @Method()
  async slidePrev() {
    return this.photoSlidesEl.slidePrev();
  }

  @Method()
  async slideTo(slideNumber: number) {
    return this.photoSlidesEl.slideTo(slideNumber - 1);
  }

  @Method()
  async selectFiles() {
    this.fireenjinTrigger.emit({
      name: "photos",
      multiple: !!this.multiple,
      payload: {
        path: this.uploadPath || `jobs/${this.jobId}/photos`,
        jobId: this.jobId,
        siteId: this.siteId,
        tags: this.tags || [],
      },
    });
  }

  @Method()
  async update() {
    this.currentSlide = (await this.photoSlidesEl.getActiveIndex()) + 1;
    return this.photoSlidesEl.update();
  }

  componentDidLoad() {
    if (!Build?.isBrowser) return;
    if (!this.photoSlidesEl?.getActiveIndex) {
      setTimeout(this.componentDidLoad, 200);
      return;
    }

    setTimeout(async () => {
      this.currentSlide = (await this.photoSlidesEl.getActiveIndex()) + 1;
      await this.photoSlidesEl.update();
    }, 200);
  }

  render() {
    return (
      <Host>
        {this.photos?.length ? (
          <ion-badge color={this.badgeColor} class="photo-pagination">
            {this.currentSlide} / {this.photos.length}
          </ion-badge>
        ) : null}
        {!this.hideAddButton ? (
          <ion-button
            class="select-photo ion-float-right"
            color={this.addButtonColor}
            onClick={() => this.selectFiles()}
          >
            Add
          </ion-button>
        ) : null}
        {this.photos?.length ? (
          <ion-slides
            ref={(el) => (this.photoSlidesEl = el)}
            pager={false}
            options={this.options}
          >
            {this.photos.map((photo) => (
              <ion-slide>
                <ion-img src={photo.url} />
              </ion-slide>
            ))}
          </ion-slides>
        ) : (
          <floodteam-fallback icon="image" message="No Picture Taken..." />
        )}
      </Host>
    );
  }
}
