import { Build, Component, h } from "@stencil/core";

@Component({
  tag: "floodteam-photo-gallery",
  styleUrl: "photo-gallery.css"
})
export class PhotoGallery {

  componentDidLoad() {
    if (Build.isBrowser) {
      // Get Data
    }
  }

  render() {
    return <div></div>;
  }
}
