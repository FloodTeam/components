import { Build, Component, h } from "@stencil/core";

@Component({
  tag: "floodteam-signature-pad",
  styleUrl: "signature-pad.css"
})
export class SignaturePad {

  componentDidLoad() {
    if (Build.isBrowser) {
      // Get Data
    }
  }

  render() {
    return <div></div>;
  }
}
