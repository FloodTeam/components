import { Build, Component, h, Prop } from "@stencil/core";

@Component({
  tag: "floodteam-toggle",
  styleUrl: "toggle.css",
})
export class Toggle {
  @Prop() label: string;
  @Prop() name: string;
  @Prop() value: boolean;

  componentDidLoad() {
    if (Build.isBrowser) {
      // Get Data
    }
  }

  render() {
    return (
      <ion-item>
        {this.label && <ion-label>{this.label}</ion-label>}
        <ion-toggle color="success" name="partial" checked={!!this.value} />
      </ion-item>
    );
  }
}
