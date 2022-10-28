import { FireEnjinTriggerInput } from "@fireenjin/sdk";
import { modalController } from "@ionic/core";
import {
  Component,
  ComponentInterface,
  Event,
  EventEmitter,
  h,
  Host,
  Prop,
  State,
} from "@stencil/core";

@Component({
  tag: "floodteam-pin-bar",
  styleUrl: "pin-bar.css",
})
export class AppHeader implements ComponentInterface {
  modal: HTMLIonModalElement;
  chipBarEl: HTMLFireenjinChipBarElement;

  @Prop() reorder = false;
  @Prop() pins: any[];
  @Prop() profile: any;

  @Event() fireenjinTrigger: EventEmitter<FireEnjinTriggerInput>;

  @State() isDragging = false;

  dragOver(event: any) {
    event.preventDefault();
    // const cardEl: HTMLElement = event.target.closest("ion-card");
    // cardEl.style.opacity = "1";
  }

  dragLeave(event: any) {
    event.preventDefault();
    // const cardEl: HTMLElement = event.target.closest("ion-card");
    // cardEl.style.opacity = "0.6";
  }

  drag(event: any) {
    console.log(event);
    this.isDragging = true;
  }

  async drop(event: any) {
    event.preventDefault();
    // var data = ev.dataTransfer.getData('text');
    // ev.target.closest('ion-list').appendChild(document.getElementById(data));
    this.isDragging = false;
  }

  async openSupportModal(event) {
    this.modal = await modalController.create({
      cssClass: "modal-support",
      component: "modal-support",
      componentProps: {
        user: this.profile || null,
      },
      backdropDismiss: false,
    });
    this.modal.present();
    return event;
  }

  render() {
    return (
      <Host>
        <fireenjin-chip-bar
          ref={(el) => (this.chipBarEl = el)}
          onDrop={(event) => this.drop(event)}
          onDragOver={(event) => this.dragOver(event)}
          onDragLeave={(event) => this.dragLeave(event)}
        >
          <ion-router-link title="Home" href="/dashboard">
            <ion-chip title="Home">
              <ion-icon
                aria-hidden="true"
                name="home"
                class={{
                  "ft-icon-style": true,
                }}
              />
              <ion-label>Home</ion-label>
            </ion-chip>
          </ion-router-link>
          {(this.pins || []).map?.((pin) => (
            <ion-router-link
              title={pin?.name}
              href={pin?.href || "#"}
              onClick={(event) =>
                pin?.trigger
                  ? this.fireenjinTrigger.emit({
                      event,
                      payload: pin?.payload || null,
                      name: pin.trigger,
                    })
                  : null
              }
            >
              <ion-chip
                title={pin.name}
                draggable={this.reorder}
                onDragStart={(event) => this.drag(event)}
              >
                <ion-icon
                  aria-hidden="true"
                  name={pin.icon}
                  class={{
                    "ft-icon-style": true,
                  }}
                />
                {pin?.name && <ion-label>{pin.name}</ion-label>}
              </ion-chip>
            </ion-router-link>
          ))}
          <ion-router-link
            title={"Get Help"}
            href={"#support"}
            onClick={(event) => this.openSupportModal(event)}
          >
            <ion-chip color="warning">
              <ion-icon
                aria-hidden="true"
                color="warning"
                name="help-circle"
                style={{
                  "--ft-icon-primary": "var(--ion-color-warning)",
                }}
                class={{
                  "ft-icon-style": true,
                }}
              />
              <ion-label>Get Help</ion-label>
            </ion-chip>
          </ion-router-link>
        </fireenjin-chip-bar>
      </Host>
    );
  }
}
