import { Build, Component, h, Listen, Prop, State } from "@stencil/core";
import ClipboardJS from "clipboard";

@Component({
  tag: "floodteam-book-now",
  styleUrl: "book-now.css",
})
export class BookNow {
  formEl: any;

  /**
   * Is the user referring?
   */
  @Prop() referring = false;
  /**
   * The ID of the referring user
   */
  @Prop() referralId: string;
  /**
   * The ID of the location
   */
  @Prop() locationId: string;
  /**
   * The campaign or API token
   */
  @Prop() token: string;
  /**
   * The Google Maps API Key
   */
  @Prop() googleMapsKey;

  @State() errors: string[] = [];
  @State() successful = false;
  @State() formData: any = {};
  @State() confirmationId: string;
  @State() checkmarkEl: any;

  @Listen("fireenjinError")
  onError(event) {
    if (event.detail.endpoint === "addJob") {
      setTimeout(() => {
        this.errors = event.detail.error.response.errors.map(
          (err) => err.message
        );
      }, 100);
    }
  }

  @Listen("fireenjinSuccess")
  async onSuccess(event) {
    this.errors = [];
    if (event.detail.endpoint === "addJob") {
      await this.formEl.reset();
      this.successful = true;
      this.confirmationId = event?.detail?.data?.addJob?.id;
      setTimeout(() => {
        this.checkmarkEl.animating = true;
      }, 500);
    }
  }

  componentDidLoad() {
    if (!Build?.isBrowser) return;
    // Get Data
    this.formData.token = this.token;
    this.formData.locationId = this.locationId;
    if (!this.referring) {
      new ClipboardJS(".btn");
    }
  }

  onBeforeSubmit(data) {
    return {
      ...data,
      referralId: this.referralId ? this.referralId : null,
    };
  }

  render() {
    return (
      <ion-card class={{ successful: this.successful, "ion-padding": true }}>
        {this.errors.map((message) => (
          <floodteam-error message={message} />
        ))}
        <fireenjin-form
          ref={(el) => (this.formEl = el)}
          endpoint="addJob"
          formData={this.formData}
          resetButtonColor="medium"
          beforeSubmit={this.onBeforeSubmit.bind(this)}
        >
          <ion-list>
            <fireenjin-input
              name="customer"
              label="Customer Name"
              labelPosition="stacked"
              placeholder="What is the customer's full name?"
            />
            <fireenjin-input
              type="tel"
              inputMode="tel"
              labelPosition="stacked"
              label="Customer Phone Number"
              placeholder="What is the customer's phone number?"
              name="phone"
            />
            <fireenjin-input
              name="email"
              type="email"
              labelPosition="stacked"
              label="Customer Email"
              placeholder="What is the customer's email address?"
            />
            <fireenjin-input-address
              googleMapsKey={this.googleMapsKey}
              name="address"
              label="Job Address"
              labelPosition="stacked"
              placeholder="What is the address of the loss?"
            />
          </ion-list>
        </fireenjin-form>
        <div class="success-message">
          <floodteam-checkmark
            size="100px"
            ref={(el) => (this.checkmarkEl = el)}
          />
          <ion-grid>
            <ion-row>
              <ion-col class="message-content">
                <ion-label>
                  <h1>Job Added Successfully!</h1>
                  {!this.referring ? (
                    <p>
                      Job was submitted successfully, here is the confirmation
                      number. Use the "Copy to Clipboard" button to copy and
                      paste it into the field on AnswerConnect's system.
                    </p>
                  ) : (
                    <p>Your job was submitted successfully.</p>
                  )}
                </ion-label>
              </ion-col>
              <ion-col class="dashboard-button">
                {!this.referring ? (
                  <div>
                    <b>{this.confirmationId}</b>
                    <br />
                    <ion-button
                      class="btn"
                      size="default"
                      expand="block"
                      data-clipboard-text={this.confirmationId}
                    >
                      Copy to clipboard
                      <ion-icon name="clipboard" slot="end" />
                    </ion-button>
                  </div>
                ) : (
                  <ion-button
                    size="default"
                    href={`/jobs/${this.confirmationId}`}
                    expand="block"
                  >
                    Open Job
                  </ion-button>
                )}
              </ion-col>
            </ion-row>
          </ion-grid>
        </div>
      </ion-card>
    );
  }
}
