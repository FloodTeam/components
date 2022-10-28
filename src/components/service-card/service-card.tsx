import { Component, ComponentInterface, h, Prop } from "@stencil/core";

@Component({
  tag: "floodteam-service-card",
  styleUrl: "service-card.css",
})
export class ServiceCard implements ComponentInterface {
  @Prop() src: string;

  render() {
    return (
      <ion-card class="img-wrapper">
        <img class="inner-img" src={this.src} />
      </ion-card>
    );
  }
}
