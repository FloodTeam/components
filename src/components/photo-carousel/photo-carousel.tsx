import { Color } from "@ionic/core";
import {
  Component,
  ComponentInterface,
  Listen,
  Prop,
  h,
  Host,
  Method,
} from "@stencil/core";

@Component({
  tag: "floodteam-photo-carousel",
  styleUrl: "photo-carousel.css",
})
export class PhotoCarousel implements ComponentInterface {
  photoSlidesEl: HTMLIonSlidesElement;
  inputPhotoEl: HTMLFloodteamInputPhotoElement;

  @Prop() jobId: string;
  @Prop() badgeColor: Color = "medium";
  @Prop() addButtonColor: Color = "primary";
  @Prop() hideAddButton = false;
  @Prop() photos: any[] = [];
  @Prop({ mutable: true }) currentSlide = 0;
  @Prop() options: any = {};
  @Prop() name = "photocarousel";

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
  async selectFiles(event) {
    return this.inputPhotoEl.triggerFileInput(event);
  }

  @Method()
  async update() {
    this.currentSlide = (await this.photoSlidesEl.getActiveIndex()) + 1;
    return this.photoSlidesEl.update();
  }

  componentDidLoad() {
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
        <floodteam-input-photo
          name={this.name}
          ref={(el) => (this.inputPhotoEl = el)}
          path={`jobs/${this.jobId}/photos`}
          documentId={this.jobId}
          fileName={new Date().toISOString()}
          multiple
        />
        {this.photos?.length ? (
          <ion-badge color={this.badgeColor} class="photo-pagination">
            {this.currentSlide} / {this.photos.length}
          </ion-badge>
        ) : null}
        {!this.hideAddButton ? (
          <ion-fab
            class="select-photo"
            onClick={(event) => this.selectFiles(event)}
          >
            <ion-fab-button color={this.addButtonColor}>
              <ion-icon name="add"></ion-icon>
            </ion-fab-button>
          </ion-fab>
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
