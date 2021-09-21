'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-6c3aefc5.js');

const inputSearchUserCss = "";

const InputSearchUser = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.ionInput = index.createEvent(this, "ionInput", 7);
        this.floodteamSelectUser = index.createEvent(this, "floodteamSelectUser", 7);
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
        return (index.h("floodteam-input-search", { iconEnd: this.iconEnd, iconStart: this.iconStart, mode: this.mode, label: this.label, ref: (el) => (this.inputSearchEl = el), endpoint: "searchUsers", resultsKey: "searchUsers.results", name: this.name, searchParams: {
                limit: this.limit ? this.limit : null,
            }, results: this.results, placeholder: this.placeholder, value: this.value, template: (result) => (index.h("ion-item", { onClick: (event) => this.selectUser(event, result), style: {
                    cursor: "pointer",
                } }, index.h("ion-label", null, index.h("h2", null, result.firstName ? result.firstName : "", " ", result.lastName ? result.lastName : ""), index.h("p", null, result.email ? result.email : "No email on file")), index.h("ion-icon", { name: "checkmark-circle" }))) }, index.h("slot", { name: "start" }), index.h("slot", { name: "end" })));
    }
};
InputSearchUser.style = inputSearchUserCss;

exports.floodteam_input_search_user = InputSearchUser;
