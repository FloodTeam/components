import {
  Component,
  ComponentInterface,
  Element,
  Event,
  EventEmitter,
  Method,
  Prop,
  State,
  Watch,
  h
} from "@stencil/core";
import { fromEvent } from "rxjs";

@Component({
  tag: "floodteam-user-select",
  styleUrl: "user-select.css"
})
export class UserSelect implements ComponentInterface {
  /**
   * Observer that watches input event
   */
  ftInput$;

  @Element() userSelectEl: HTMLElement;

  /**
   * Whether or not the search input is disabled
   */
  @Prop() disabled = false;
  /**
   * Whether or not the loader is showing
   */
  @Prop() loading = false;
  /**
   * The search query to fill into the input
   */
  @Prop({ mutable: true }) query: string;
  /**
   * The user currently selected
   */
  @Prop({ mutable: true }) user: any;
  /**
   * A list of user records that match the search query
   */
  @Prop({ mutable: true }) records: any[] = [];
  /**
   * How long to delay after input before searching
   */
  @Prop() delay = 1000;
  /**
   * Is the email required in order to select result
   */
  @Prop() emailRequired = false;

  /**
   * Whether or not a user has been selected
   */
  @State() userIsSelected = false;

  /**
   * Emitted when the component loads
   */
  @Event() ftLoad: EventEmitter;
  /**
   * Emitted when the user submits the search form or after typing
   */
  @Event() ftSelect: EventEmitter<{
    /**
     * The event from the click on the item
     */
    event: UIEvent;
    /**
     * The user object that was selected
     */
    user: any;
  }>;
  /**
   * Emitted when the user submits the search form or after typing
   */
  @Event() ftSearch: EventEmitter<{
    /**
     * The input event from the search box
     */
    event: any;
    /**
     * The search query string
     */
    query: string;
  }>;

  /**
   * Set search results with list of users
   * @param records An array of user records
   */
  @Method()
  async setResults(records: any[]) {
    try {
      this.records =
        typeof records === "string"
          ? JSON.parse(records)
          : records && records.length > 0
          ? records
          : this.userSelectEl.getAttribute("records")
          ? JSON.parse(this.userSelectEl.getAttribute("records"))
          : [];
    } catch (error) {
      console.log(error);
      this.records = [];
    }

    return this.records;
  }

  /**
   * Set selected user
   * @param user The selected user object
   */
  @Method()
  async setUser(user: any, event?: UIEvent) {
    try {
      const currentUser =
        typeof user === "string"
          ? JSON.parse(user)
          : user
          ? user
          : this.userSelectEl.getAttribute("user")
          ? JSON.parse(this.userSelectEl.getAttribute("user"))
          : null;
      if (
        (this.emailRequired && !currentUser.user_email) ||
        (currentUser &&
          currentUser.user_email &&
          currentUser.user_email.indexOf("@") === -1)
      ) {
        this.userIsSelected = false;
        this.user = null;

        return false;
      }
      this.user = currentUser;
      this.userIsSelected = this.user ? true : false;
    } catch (error) {
      console.log(error);
      this.userIsSelected = false;
      this.user = null;
    }

    this.ftSelect.emit({
      event,
      user: this.user
    });

    return this.user;
  }

  /**
   * Reset the field
   */
  @Method()
  async reset() {
    this.user = null;
    this.userIsSelected = false;

    return true;
  }

  @Watch("user")
  onUserChange(newValue, oldValue) {
    if (newValue !== oldValue) {
      this.setUser(this.user);
    }
  }

  async componentDidLoad() {
    await this.setResults(this.records);
    await this.setUser(this.user);
    let lastSearchCall;
    this.ftInput$ = fromEvent(this.userSelectEl, "ftInput").subscribe(
      async (event: any) => {
        clearTimeout(lastSearchCall);
        lastSearchCall = setTimeout(() => {
          this.ftSearch.emit({
            event,
            query: event.detail.value
          });
        }, this.delay);
      }
    );
  }

  render() {
    return (
      <div class="user-select-wrapper">
        <ion-content>
          <div class="user-search-top">
            {!this.userIsSelected ? (
              <floodteam-input
                iconLeft="search"
                value={this.query ? this.query : null}
                label="Search"
                required
              />
            ) : null}
          </div>
          <div class={this.loading ? "is-loading user-list" : "user-list"}>
            {this.records
              ? this.records.map(result => {
                  return (
                    <ul>
                      {!this.userIsSelected ? (
                        <li onClick={event => this.setUser(result, event)}>
                          <div class="user-select-avatar">
                            <img class="avatar" src={result.user_avatar} />
                          </div>
                          <div class="user-select-text">
                            <span>{result.user_name}</span>{" "}
                            <span>{result.user_email}</span>
                          </div>
                          <div class="user-select-icon">
                            <ion-icon
                              class={
                                this.user &&
                                this.user.user_id === result.user_id
                                  ? "user-select-checkmark selected-user"
                                  : "user-select-checkmark"
                              }
                              name="checkmark-circle"
                            />
                          </div>
                        </li>
                      ) : null}
                    </ul>
                  );
                })
              : null}
            {this.user ? (
              <ul>
                <li>
                  <div class="user-select-avatar">
                    <img class="avatar" src={this.user.user_avatar} />
                  </div>
                  <div class="user-select-text">
                    <span>{this.user.user_name}</span>
                    <span>{this.user.user_email}</span>
                  </div>
                  <div class="user-select-icon">
                    <ion-icon
                      onClick={() => this.reset()}
                      class="selected-user selected-edit"
                      name="create"
                    />
                  </div>
                </li>
              </ul>
            ) : null}
          </div>
        </ion-content>
      </div>
    );
  }
}
