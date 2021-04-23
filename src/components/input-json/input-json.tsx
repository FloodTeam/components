import { Build, Component, h, Prop } from "@stencil/core";

@Component({
  tag: "floodteam-input-json",
  styleUrl: "input-json.css",
})
export class InputJson {
  @Prop() value: any = {};

  componentDidLoad() {
    if (Build.isBrowser) {
      // Get Data
    }
  }

  render() {
    return (
      <ion-item>
        <ion-label position="stacked">Sample Data</ion-label>
        <fireenjin-json-editor
          style={{ width: "100%", marginTop: "15px" }}
          name="sampleData"
          value={this.value ? this.value : {}}
        />
      </ion-item>
    );
  }
}
