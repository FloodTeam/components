import {
  Component,
  ComponentInterface,
  Event,
  EventEmitter,
  Prop,
  h,
} from "@stencil/core";

@Component({
  tag: "floodteam-share",
  styleUrl: "share.css",
})
export class Share implements ComponentInterface {
  @Event()
  tmgShareClose: EventEmitter;

  @Prop()
  options: {
    url: string;
    text?: string;
    title?: string;
  } = { url: null };

  openPopup(event, type: string) {
    event.preventDefault();
    let popupUrl;
    if (type === "facebook") {
      const appId = "741489109379249";
      popupUrl = `https://www.facebook.com/dialog/share?app_id=${appId}&display=popup&href=${this.options.url}`;
    } else if (type === "google") {
      popupUrl = `https://plus.google.com/share?url=${this.options.url}`;
    } else if (type === "twitter") {
      popupUrl = `https://twitter.com/intent/tweet?url=${this.options.url}&text=${this.options.text}`;
    } else {
      return false;
    }

    this.tmgShareClose.emit({ event, type });

    window.open(
      popupUrl,
      "Share Floodteam",
      type === "google" ? "height=600,width=400" : "height=400,width=600"
    );
  }

  render() {
    return (
      <ion-list>
        <ion-item
          class="share-twitter"
          onClick={(event) => this.openPopup(event, "twitter")}
        >
          <ion-icon slot="end" name="logo-twitter" />
          Share on Twitter
        </ion-item>
        <ion-item
          class="share-facebook"
          onClick={(event) => this.openPopup(event, "facebook")}
        >
          <ion-icon slot="end" name="logo-facebook" />
          Share on Facebook
        </ion-item>
      </ion-list>
    );
  }
}
