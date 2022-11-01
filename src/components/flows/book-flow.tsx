import {
  Build,
  Component,
  State,
  Host,
  Listen,
  Prop,
  h,
  Method,
} from "@stencil/core";
import { Step } from "@fireenjin/components/dist/types/typings";
import serviceAddress from "../../helpers/steps/serviceAddress";
import customerName from "../../helpers/steps/customerName";
import contactInformation from "../../helpers/steps/contactInformation";
import selectLocation from "../../helpers/steps/selectLocation";
import serviceType from "../../helpers/steps/serviceType";
import valueToPath from "../../helpers/valueToPath";
import ClipboardJS from "clipboard";
import algoliasearch from "algoliasearch";

@Component({
  tag: "floodteam-book-flow",
})
export class BookFlow {
  index: any;

  @Prop() algoliaAppId = "ZKFP93O6EH";
  @Prop() algoliaSearchKey = "cef2b52143823594c9c5af78ad86bcf0";
  @Prop() algoliaIndex = "locations";
  /**
   * The current path of the flow they are in
   */
  @Prop({ mutable: true }) currentPath = "bookFlow";
  /**
   * The current step of the path they are on
   */
  @Prop({ mutable: true }) currentStep = "serviceAddress";
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
  @Prop({ mutable: true }) locationId: string;
  /**
   * The campaign or API token
   */
  @Prop() token: string;
  /**
   * The Google Maps API Key
   */
  @Prop() googleMapsKey;
  /**
   * The phone number captured in the flow
   */
  @Prop({ mutable: true }) phone: string;
  /**
   * The name of the customer captured in the flow
   */
  @Prop({ mutable: true }) customer: string;
  /**
   * The service address captured in the flow
   */
  @Prop({ mutable: true }) address: any;

  /**
   * The ID of the job from Flood Team App
   */
  @State() confirmationId: string;
  /**
   * Any errors captured from the flow
   */
  @State() errors: string[] = [];
  /**
   * The current steps on the path selected
   */
  @State() steps: Step[] = [];
  /**
   * The index of the current slide (step) on the path
   */
  @State() currentSlideIndex = 0;
  /**
   * The location selected
   */
  @State() location: any;

  paths: { [pathName: string]: () => Step[] } = {
    bookFlow: () => [
      serviceAddress({
        googleMapsKey: this.googleMapsKey,
      }),
      customerName(),
      contactInformation(),
      selectLocation({
        locationId: this.locationId,
      }),
      serviceType(),
    ],
  };

  @Method()
  async findLocation(id: string) {
    this.location = await this.index.getObject(id);
    return this.location;
  }

  /**
   * Set the path of the flow
   * @param path The path name to change to
   * @returns A list of steps for the current path
   */
  @Method()
  async setPath(path?: string) {
    this.currentPath = path || this.currentPath;
    this.currentStep =
      this.paths?.[this.currentPath]?.()?.[this.currentSlideIndex]?.name ||
      null;
    this.steps = this.paths[this.currentPath]();
    return this.steps;
  }

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

  @Listen("ionInput")
  @Listen("ionChange")
  async onChange(event) {
    console.log(event);
    if (event?.target?.name === "customer") {
      this.customer = event?.target?.value || null;
    } else if (event.target.name === "phone") {
      this.phone = event?.target?.value || null;
    } else if (event?.target?.name?.includes?.("address.")) {
      this.address = valueToPath(
        event.target.name.replace("address.", ""),
        event?.target?.value,
        this.address
      );
      console.log(event.target.name, this.address);
    } else if (event?.target?.name === "address") {
      this.address = event?.target?.value;
    } else if (event.target.name === "locationId") {
      this.locationId = event?.target?.value || null;
      await this.findLocation(this.locationId);
    }
  }

  @Listen("fireenjinSuccess")
  async onSuccess(event) {
    this.errors = [];
    if (event.detail.endpoint === "addJob") {
      this.confirmationId = event?.detail?.data?.addJob?.id;
    }
  }

  @Listen("ionSlideDidChange")
  async onSlideChange(event) {
    this.currentSlideIndex = await event.target.getActiveIndex();
    await this.setPath();
  }

  onBeforeSubmit(data) {
    return {
      ...data,
      referralId: this.referralId ? this.referralId : null,
    };
  }

  async componentDidLoad() {
    if (!Build?.isBrowser) return;
    const client = algoliasearch(this.algoliaAppId, this.algoliaSearchKey);
    this.index = client.initIndex(this.algoliaIndex);
    await this.setPath();
    // Get Data
    if (!this.referring) {
      new ClipboardJS(".btn");
    }
  }

  render() {
    const unit = 1 / this.steps.length;
    const progress = unit * this.currentSlideIndex;
    return (
      <Host>
        {this.errors.map((message) => (
          <floodteam-error message={message} />
        ))}
        {!(this.currentSlideIndex >= this.steps.length) && (
          <ion-progress-bar
            style={{
              width: "80%",
              margin: this.confirmationId ? "0 auto" : "30px auto",
              transition: "opacity ease 500ms",
              opacity: this.confirmationId ? "0" : "1",
            }}
            value={progress}
          />
        )}
        <fireenjin-flow
          endpoint="addJob"
          steps={this.steps}
          beforeSubmit={this.onBeforeSubmit.bind(this)}
          prevButton={{
            color: "medium",
            fill: "outline",
            label: "Back",
          }}
          nextButton={{
            color: "primary",
            fill: "solid",
            icon: null,
            label: "Next",
          }}
        >
          <div style={{ color: "var(--ion-text-color)", padding: "2rem 3rem" }}>
            <h1 class="ion-padding-horizontal">
              Success! The Flood Team is on the job 💪.
            </h1>
            <p
              class="ion-padding-horizontal"
              style={{ color: "var(--ion-color-medium-shade)" }}
            >
              A flood team associate will be reaching out to the contact above
              shortly to follow up on damage details and schedule an on site
              evaluation.
            </p>
            <div class="confirm-card">
              <span>
                <small>Customer</small>
                <p>{this.customer || ""}</p>
              </span>
              <span>
                <small>Phone</small>
                <p>{this.phone || ""}</p>
              </span>
              <span>
                <small>Address</small>
                <p>{this.address?.full || ""}</p>
              </span>
              <span>
                <small>Flood Team Location</small>
                <p>{this.location?.name || ""}</p>
              </span>
              <span>
                <small>Job ID</small>
                <p>{this.confirmationId}</p>
              </span>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "2rem",
              }}
            >
              <ion-button
                class="btn"
                size="default"
                expand="block"
                fill="outline"
                data-clipboard-text={this.confirmationId}
              >
                Copy to clipboard
                <ion-icon name="clipboard" slot="end" />
              </ion-button>
              <ion-button
                size="default"
                href={`/jobs/${this.confirmationId}`}
                expand="block"
              >
                View Job
              </ion-button>
            </div>
          </div>
        </fireenjin-flow>
      </Host>
    );
  }
}
