import {
  Component,
  ComponentInterface,
  Method,
  Prop,
  h,
  Build,
} from "@stencil/core";
import Cropper from "cropperjs";

@Component({
  tag: "floodteam-photo-cropper",
  styleUrl: "photo-cropper.css",
})
export class PhotoCropper implements ComponentInterface {
  cropper: any;
  imgEl: HTMLImageElement;

  @Prop({ mutable: true }) src: string;
  @Prop({ mutable: true }) aspectRatio = 1 / 1;

  @Method()
  async setAspectRatio(aspectRatio: number) {
    this.aspectRatio = aspectRatio;
  }

  @Method()
  async reset() {
    return this.cropper.reset();
  }

  @Method()
  async getCroppedCanvas(options: any) {
    return this.cropper.getCroppedCanvas(options);
  }

  @Method()
  async getImageData(type: string = "image/png", quality = 1.0) {
    const canvasEl = await this.getCroppedCanvas({
      fillColor: "#ffffff",
    });

    return canvasEl.toDataURL(type, quality);
  }

  @Method()
  async replace(src: string, hasSameSize = false) {
    this.src = src;

    return this.cropper.replace(src, hasSameSize);
  }

  componentDidLoad() {
    if (!Build?.isBrowser) return;
    setTimeout(() => {
      this.cropper = new Cropper(this.imgEl, {
        aspectRatio: this.aspectRatio,
      });
    }, 300);
  }

  render() {
    return (
      <div>
        <img src={this.src} ref={(el) => (this.imgEl = el)} />
      </div>
    );
  }
}
