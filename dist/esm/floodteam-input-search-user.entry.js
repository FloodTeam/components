import { r as registerInstance, c as createEvent, h } from './index-2bcfd230.js';

const inputSearchUserCss = "";

const InputSearchUser = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.ionInput = createEvent(this, "ionInput", 7);
        this.floodteamSelectUser = createEvent(this, "floodteamSelectUser", 7);
        this.placeholder = "Search Users";
        this.disableSearch = false;
        this.mode = "inline";
        this.limit = 5;
        this.results = [];
    }
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
        }
        else if (this.mode === "inline") {
            await this.inputSearchEl.clearResults();
        }
    }
    render() {
        return (h("floodteam-input-search", { iconEnd: this.iconEnd, iconStart: this.iconStart, mode: this.mode, label: this.label, ref: (el) => (this.inputSearchEl = el), endpoint: "searchUsers", resultsKey: "searchUsers.results", name: this.name, searchParams: {
                limit: this.limit ? this.limit : null,
            }, results: this.results, placeholder: this.placeholder, value: this.value, template: (result) => (h("ion-item", { onClick: (event) => this.selectUser(event, result), style: {
                    cursor: "pointer",
                } }, h("ion-label", null, h("h2", null, result.firstName ? result.firstName : "", " ", result.lastName ? result.lastName : ""), h("p", null, result.email ? result.email : "No email on file")), h("ion-icon", { name: "checkmark-circle" }))) }, h("slot", { name: "start" }), h("slot", { name: "end" })));
    }
};
InputSearchUser.style = inputSearchUserCss;

export { InputSearchUser as floodteam_input_search_user };
