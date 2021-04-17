import {
  Component,
  ComponentInterface,
  Event,
  EventEmitter,
  Prop,
  h,
} from "@stencil/core";

@Component({
  tag: "floodteam-input-search-user",
  styleUrl: "input-search-user.css",
})
export class InputSearchUser implements ComponentInterface {
  timer: any;
  inputEl: HTMLIonInputElement;
  inputSearchEl: HTMLFloodteamInputSearchElement;

  @Prop() name: string;
  @Prop() label: string;
  @Prop() placeholder: string = "Search Users";
  @Prop({ mutable: true }) value: any;
  @Prop() required: boolean;
  @Prop() autofocus: boolean;
  @Prop() disableSearch = false;
  @Prop() disabled: boolean;
  @Prop() endpoint: string;
  @Prop() dataPropsMap: any;
  @Prop() mode: "popover" | "inline" = "inline";
  @Prop() iconEnd: string;
  @Prop() iconStart: string;
  @Prop() limit = 5;
  @Prop() template: (result) => any;
  @Prop() results: any[] = [];

  @Event() ionInput: EventEmitter;
  @Event() floodteamSelectUser: EventEmitter;

  async selectUser(event, user) {
    this.value = user.email;
    this.floodteamSelectUser.emit({
      event,
      user,
    });
    setTimeout(async () => {
      await this.inputSearchEl.checkValidity({
        setValidationClass: true,
      });
    }, 200);
    if (this.mode === "popover") {
      await this.inputSearchEl.closePopover();
    } else if (this.mode === "inline") {
      await this.inputSearchEl.clearResults();
    }
  }

  render() {
    return (
      <floodteam-input-search
        iconEnd={this.iconEnd}
        iconStart={this.iconStart}
        mode={this.mode}
        label={this.label}
        ref={(el) => (this.inputSearchEl = el)}
        endpoint="listUsers"
        dataPropsMap={{
          users: "results",
        }}
        name={this.name}
        searchParams={{
          limit: this.limit ? this.limit : null,
        }}
        results={this.results}
        placeholder={this.placeholder}
        value={this.value}
        template={(result) => (
          <ion-item
            onClick={(event) => this.selectUser(event, result)}
            style={{
              cursor: "pointer",
            }}
          >
            <ion-label>
              <h2>
                {result.firstName} {result.firstName}
              </h2>
              <p>{result.email}</p>
            </ion-label>
            <ion-icon name="checkmark-circle" />
          </ion-item>
        )}
      >
        <slot name="start" />
        <slot name="end" />
      </floodteam-input-search>
    );
  }
}
