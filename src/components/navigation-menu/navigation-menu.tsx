import {
  Build,
  Component,
  Event,
  EventEmitter,
  h,
  Listen,
  Prop,
  State,
} from "@stencil/core";
import { FireEnjinSubmitEvent, FireEnjinTriggerInput } from "@fireenjin/sdk";
import pick from "../../helpers/pick";
import moveItemInArray from "../../helpers/moveItemInArray";
import { ItemReorderEventDetail } from "@ionic/core";
import { modalController } from "@ionic/core";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

@Component({
  tag: "floodteam-navigation-menu",
})
export class NavigationMenu {
  editorEl: any;
  editorJs: any;
  filterBarEl;
  noteModalEl: HTMLIonModalElement;
  feedPaginationEl: any;

  @Prop() isAdmin = false;
  @Prop() isLoggedIn = false;
  @Prop() isInternalTeam = false;
  @Prop() pins: any[];
  @Prop() userId: string;
  @Prop() jobId: string;
  @Prop() navigationView: string;
  @Prop() profile: any;
  @Prop() locations: any[];
  @Prop() locationId: string;
  @Prop() templates: any[];
  @Prop() feedFetchData: any;

  items: {
    icon: string;
    id: string;
    name: string;
    href?: string;
    allowPin?: boolean;
    title?: string;
    add?: string;
    permissionCheck?: () => boolean;
    onClick?: () => Promise<void>;
  }[] = [
    {
      id: "alerts",
      href: "/alerts",
      icon: "notifications",
      name: "Alerts",
      permissionCheck: () => this.isAdmin,
    },
    {
      id: "appointments",
      href: "/appointments",
      icon: "calendar",
      name: "Appointments",
      permissionCheck: () => this.isAdmin,
    },
    {
      id: "atmospherics",
      href: "/atmospherics",
      icon: "cloud-circle-outline",
      name: "Atmospheric Readings",
      permissionCheck: () => this.isAdmin,
    },
    {
      id: "campaigns",
      href: "/campaigns",
      icon: "magnet",
      name: "Campaigns",
      permissionCheck: () => this.isAdmin,
    },
    {
      id: "companies",
      href: "/companies",
      icon: "briefcase",
      name: "Companies",
      add: "/companies/new",
      permissionCheck: () => this.isInternalTeam,
    },
    {
      id: "contracts",
      href: "/contracts",
      icon: "create",
      name: "Contracts",
      permissionCheck: () => this.isInternalTeam,
    },
    {
      id: "dots",
      href: "/dots",
      icon: "ellipse",
      name: "Dots",
      permissionCheck: () => this.isAdmin,
    },
    {
      id: "exhausts",
      href: "/exhausts",
      icon: "exit",
      name: "Exhaust Readings",
      permissionCheck: () => this.isAdmin,
    },
    {
      id: "jobs",
      href: "/jobs",
      icon: "water",
      name: "Jobs",
      add: "/jobs/refer",
      permissionCheck: () => this.isLoggedIn,
    },
    {
      id: "import",
      href: "/import",
      icon: "download",
      name: "Import",
      permissionCheck: () => this.isAdmin,
    },
    {
      id: "inventory",
      href: "/inventory",
      icon: "barcode-outline",
      name: "Inventory",
      permissionCheck: () => this.isInternalTeam,
    },
    {
      id: "locations",
      href: "/locations",
      icon: "business",
      name: "Locations",
      add: "/locations/new",
      permissionCheck: () => this.isInternalTeam,
    },
    {
      id: "logs",
      href: "/logs",
      icon: "journal",
      name: "Logs",
      permissionCheck: () => this.isAdmin,
    },
    {
      id: "moisturecontents",
      href: "/moisturecontents",
      icon: "water",
      name: "MC Readings",
      permissionCheck: () => this.isAdmin,
    },
    {
      id: "paymodels",
      href: "/paymodels",
      icon: "pie-chart",
      name: "Pay Models",
      permissionCheck: () => this.isAdmin,
    },
    {
      id: "payments",
      href: "/payments",
      icon: "cash",
      name: "Payments",
      permissionCheck: () => this.isAdmin,
    },
    {
      id: "phonenumbers",
      href: "/phonenumbers",
      icon: "call",
      name: "Phone Numbers",
      permissionCheck: () => this.isAdmin,
    },
    {
      id: "pins",
      href: "/pins",
      icon: "pin",
      name: "Pins",
      permissionCheck: () => this.isAdmin,
    },
    {
      id: "services",
      href: "/services",
      icon: "reader",
      name: "Services",
      permissionCheck: () => this.isInternalTeam,
    },
    {
      id: "templates",
      href: "/templates",
      icon: "create",
      name: "Templates",
      add: "/templates/new",
      permissionCheck: () => this.isAdmin,
    },
    {
      id: "totallers",
      href: "/totallers",
      icon: "calculator",
      name: "Totallers",
      permissionCheck: () => this.isAdmin,
    },
    {
      id: "triggers",
      href: "/triggers",
      icon: "flash",
      name: "Triggers",
      add: "/triggers/new",
      permissionCheck: () => this.isAdmin,
    },
    {
      id: "users",
      href: "/users",
      icon: "people",
      name: "Users",
      add: "/users/new",
      permissionCheck: () => this.isInternalTeam,
    },
    {
      id: "vehicles",
      href: "/vehicles",
      icon: "car",
      name: "Vehicles",
      permissionCheck: () => this.isInternalTeam,
    },
    {
      id: "weather",
      href: "/weather",
      icon: "rainy",
      name: "Weather",
      permissionCheck: () => this.isAdmin,
    },
  ];

  @State() activityFilters: string[] = ["me"];

  @Event() fireenjinTrigger: EventEmitter<FireEnjinTriggerInput>;
  @Event() fireenjinSubmit: EventEmitter<FireEnjinSubmitEvent>;

  @Listen("fireenjinTrigger", { target: "document" })
  onTrigger(event) {
    if (event?.detail?.event?.detail?.type === "feedType") {
      this.activityFilters = event.detail?.payload?.value || ["me"];
    }
  }

  // @Listen("ionInput")
  // onSearchInput(event) {
  //   if (event?.target?.name === "sendAlert") {
  //     state.draftNote.sendAlert = !!event?.detail?.checked;
  //     state.draftNote = { ...state.draftNote };
  //   } else if (event?.target?.name === "tags") {
  //     state.draftNote.tags = event?.target?.value ? event.target.value : [];
  //     state.draftNote = { ...state.draftNote };
  //   } else {
  //     this.feedPaginationEl.query = event?.target?.value || null;
  //   }
  // }

  // @Listen("fireenjinSuccess")
  // @Listen("fireenjinReset")
  // async onFormFinish(event) {
  //   if (event?.detail?.endpoint !== "addNote") return;
  //   state.draftNote = {};
  //   this.editorEl?.clear?.();
  // }

  // @Listen("fireenjinChange", { target: "body" })
  // async onEditorChange() {
  //   if (!this.editorEl?.exportHTML) return;
  //   const html = await this.editorEl.exportHTML();
  //   const editor = await this.editorEl.exportJSON();
  //   if (editor?.blocks?.length)
  //     state.draftNote = {
  //       ...state.draftNote,
  //       html,
  //       editor,
  //     };
  // }

  async toggleNavPin(
    event,
    item: {
      icon: string;
      id: string;
      name: string;
      href?: string;
      allowPin?: boolean;
      title?: string;
      add?: string;
      permissionCheck?: () => boolean;
      onClick?: () => Promise<void>;
    }
  ) {
    event.preventDefault();
    event.stopPropagation();
    this.fireenjinTrigger.emit({
      name: "pin",
      payload: pick(item, ["icon", "name", "href"]),
    });
  }

  async doReorder(event: CustomEvent<ItemReorderEventDetail>) {
    const pinIds = this.pins.map((pin) => pin.id);
    const reorderedPinIds = moveItemInArray(
      pinIds,
      event.detail.from,
      event.detail.to
    );
    const pins = (this.pins || [])
      .map((pin) => ({
        ...pin,
        order: reorderedPinIds.findIndex((p) => p === pin?.id),
      }))
      .sort((a, b) => a.order - b.order);
    this.fireenjinSubmit.emit({
      endpoint: "reorderPins",
      data: {
        userId: this.userId,
        pins,
      },
    });
    this.pins = event.detail.complete(this.pins);
  }

  async openNoteModal() {
    this.noteModalEl = await modalController.create({
      cssClass: "modal-note",
      component: "modal-note",
      componentProps: {
        jobId: this.jobId || null,
        userId: this.userId || null,
      },
    });
    this.noteModalEl.present();
  }

  getExtension(path) {
    var basename = path.split(/[\\/]/).pop(), // extract file name from full path ...
      // (supports `\\` and `/` separators)
      pos = basename.lastIndexOf("."); // get last position of `.`

    if (basename === "" || pos < 1)
      // if file name is empty or ...
      return ""; //  `.` not found (-1) or comes first (0)

    return basename.slice(pos + 1); // extract extension ignoring `.`
  }

  async onPhotoUpload(event) {
    console.log(event);
    const storage = getStorage();
    const storageRef = ref(
      storage,
      `pictures/${new Date().toISOString()}.${this.getExtension(
        event?.file?.name
      )}`
    );
    const upload = await uploadBytes(storageRef, event.file);
    const url = await getDownloadURL(upload.ref);
    return {
      success: true,
      file: {
        url,
      },
    };
  }

  async componentDidLoad() {
    if (!Build?.isBrowser) return;
    this.editorJs = await this.editorEl?.getInstance?.();
    // if (state?.draftNote?.editor) {
    //   try {
    //     this.editorJs.blocks.render(state.draftNote?.editor || {});
    //   } catch (error) {
    //     setTimeout(async () => {
    //       this.editorJs.blocks.render(state.draftNote?.editor || {});
    //     }, 1000);
    //   }
    // }
    // setInterval(() => {
    //   state.draftNote = { ...state.draftNote, createdAt: new Date() };
    // }, 60000);
  }

  render() {
    return [
      this.navigationView === "profile" && <floodteam-profile />,
      <div
        id="feed"
        style={{
          display: this.navigationView === "feed" ? "block" : "none",
        }}
      >
        <ion-grid class="ion-no-padding">
          <ion-row class="ion-padding">
            <ion-col>
              <floodteam-title-bar>
                <ion-router-link href="#">Activity Feed</ion-router-link>
                <ion-buttons slot="end">
                  <ion-button
                    style={{
                      "--color": "rgba(var(--ion-text-color-rgb), 0.5)",
                    }}
                    onClick={(event) =>
                      this.fireenjinTrigger.emit({
                        event,
                        name: "filter",
                        type: "feedType",
                        payload: {
                          control: {
                            name: "type",
                            label: "Type",
                            icon: "help-circle",
                            multiple: true,
                            value: this.activityFilters,
                            options: [
                              {
                                label: "📝 Note",
                                value: "note",
                                group: "Type",
                              },
                              {
                                label: "✒️ Contract",
                                value: "contract",
                                group: "Type",
                              },
                              {
                                label: "📧 Email",
                                value: "email",
                                group: "Type",
                              },
                              {
                                label: "My Feed",
                                value: "me",
                                group: "Location",
                              },
                              ...(this.locations || [])
                                .filter(
                                  (location) =>
                                    this.isAdmin ||
                                    this.locationId === location?.id
                                )
                                .map(({ name: label, id }) => ({
                                  label,
                                  value: `location-${id}`,
                                  group: "Location",
                                })),
                            ],
                          },
                        },
                      })
                    }
                    fill="outline"
                    size="small"
                  >
                    Filter
                    <ion-icon slot="end" name="funnel" />
                  </ion-button>
                </ion-buttons>
              </floodteam-title-bar>
            </ion-col>
          </ion-row>
          <ion-row>
            <ion-col>
              <ion-card
                style={{
                  overflow: "visible",
                  padding: "1rem",
                  position: "relative",
                  zIndex: "9",
                }}
              >
                <floodteam-template
                  disablePosition
                  disableFrame
                  class="feed-card-header"
                  templateId="a6PugONYo4E8EBq81RnM"
                  style={{
                    display: "block",
                  }}
                  data={{
                    icon:
                      this.profile?.photo ||
                      `https://avatars.dicebear.com/api/initials/${
                        this.profile?.firstName?.charAt?.(0) || ""
                      }${this.profile?.lastName?.charAt?.(0) || ""}.svg`,
                    badge: true
                      ? `📝`
                      : `<ion-toggle name="sendAlert" style="position: relative;" color="warning"></ion-toggle> 🔔`,
                    badgeStyle:
                      "font-size: 24px; cursor: pointer !important; display: flex; align-items: center; justify-content: end;",
                    subtextStyle: "opacity: 0.6",
                    subject: `${this.profile?.firstName || ""} ${
                      this.profile?.lastName || ""
                    }`,
                    // createdAt: state?.draftNote?.createdAt,
                  }}
                />
                <fireenjin-form
                  style={{ padding: "0 10px" }}
                  name="note"
                  endpoint="addNote"
                  beforeSubmit={async (data) => ({
                    // ...state.draftNote,
                    ...data,
                    jobId: this.jobId,
                    userId: this.userId,
                  })}
                  submitButton="Send"
                  resetButton="Clear"
                  resetButtonColor="medium"
                  disableEnterButton
                >
                  <fireenjin-editor
                    uploadCallback={(event) => this.onPhotoUpload(event)}
                    partials={this.templates}
                    ref={(el) => (this.editorEl = el)}
                  />
                </fireenjin-form>
              </ion-card>
            </ion-col>
          </ion-row>
        </ion-grid>
        <fireenjin-pagination
          name="activity-feed"
          id="activity-feed"
          disableVirtualScroll
          disablePageCheck
          display="grid"
          ref={(el) => (this.feedPaginationEl = el)}
          fetchData={this.feedFetchData}
          gridEl={({ result }) => (
            <ion-card innerHTML={result?.html}></ion-card>
          )}
          endpoint="listFeeds"
          limit={20}
          resultsKey="feeds"
        />
      </div>,
      this.navigationView === "pins" && (
        <ion-reorder-group
          id="pins"
          onIonItemReorder={(ev) => this.doReorder(ev)}
          disabled={false}
        >
          {(this.pins || []).map((pin) => (
            <ion-item
              style={{ "--background": "transparent" }}
              data-id={pin.id}
            >
              <ion-buttons slot="start">
                <ion-button
                  onClick={() =>
                    this.fireenjinTrigger.emit({
                      name: "pin",
                      payload: pin,
                    })
                  }
                >
                  <ion-icon name="pin" color="primary" />
                </ion-button>
                <ion-icon name={pin?.icon} class="ft-icon-style" />
              </ion-buttons>
              <ion-label>{pin?.name || "No Label"}</ion-label>
              <ion-reorder slot="end" />
            </ion-item>
          ))}
        </ion-reorder-group>
      ),
      <ion-list style={{ background: "transparent" }}>
        <div
          style={{
            display: this.profile?.id ? "none" : "block",
          }}
        >
          <slot></slot>
        </div>
        {this.navigationView === "menu" &&
          this.items.map((item) =>
            item?.permissionCheck?.() ? (
              <ion-menu-toggle autoHide={false}>
                <ion-item
                  style={{ "--background": "transparent" }}
                  title={item?.title || item?.name}
                  href={item?.href || "#"}
                >
                  <ion-icon
                    slot="start"
                    class="ft-icon-style"
                    name={item?.icon}
                    color="primary"
                  />
                  <ion-label>{item?.name || ""}</ion-label>
                  <ion-buttons slot="end">
                    {item?.add && (
                      <ion-button
                        fill="clear"
                        onClick={(event) => event.stopPropagation()}
                        href={item.add}
                      >
                        <ion-icon
                          name="add-circle"
                          slot="icon-only"
                          color="primary"
                        />
                      </ion-button>
                    )}
                    <ion-button
                      fill="clear"
                      onClick={(event) => this.toggleNavPin(event, item)}
                    >
                      <ion-icon
                        name="pin"
                        slot="icon-only"
                        color={
                          this.pins
                            ?.map?.((pin) => pin?.href)
                            ?.includes(item?.href)
                            ? "primary"
                            : null
                        }
                      />
                    </ion-button>
                  </ion-buttons>
                </ion-item>
              </ion-menu-toggle>
            ) : null
          )}
      </ion-list>,
    ];
  }
}
