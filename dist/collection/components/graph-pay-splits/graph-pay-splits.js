import { Component, Element, Method, Prop, State, Watch, h, Build, } from "@stencil/core";
export class GraphPaySplits {
  constructor() {
    this.users = [];
    this.datasets = [];
    this.labels = [];
    this.currentUsers = [];
  }
  async setUsers(users) {
    try {
      this.currentUsers =
        typeof users === "string"
          ? JSON.parse(users)
          : users.length > 0
            ? users
            : this.graphPaySplitsEl.getAttribute("users")
              ? JSON.parse(this.graphPaySplitsEl.getAttribute("users"))
              : [];
      const backgroundColor = [
        "#3e95cd",
        "#8e5ea2",
        "#3cba9f",
        "#e8c3b9",
        "#c45850",
      ];
      const data = [];
      this.users.map((record) => {
        this.labels.push(record.user.user_name);
        data.push(record.amount);
      });
      this.datasets = [
        {
          backgroundColor,
          data,
        },
      ];
      return this.currentUsers;
    }
    catch (error) {
      console.log(error);
      return [];
    }
  }
  onUsersUpdate() {
    this.setUsers(this.users);
  }
  formatUSD(amount) {
    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    });
    return formatter.format(amount);
  }
  getPaymentText(payment) {
    let paymentText = "";
    if (payment.type === "manual") {
      paymentText = `${this.formatUSD(payment.amount)} paid manually`;
    }
    else if (payment.type === "charge") {
      paymentText = `${this.formatUSD(payment.amount)} paid on ${payment.brand} card ending in ${payment.ending_in}`;
    }
    else if (payment.type === "check") {
      paymentText = `${this.formatUSD(payment.amount)} paid by check ${payment.check_number}`;
    }
    return paymentText;
  }
  componentDidLoad() {
    if (Build.isBrowser) {
      this.setUsers(this.users);
    }
  }
  render() {
    return (h("div", { class: "graph-pay-splits-wrapper" },
      this.graphTitle ? h("h1", null, this.graphTitle) : null,
      h("fireenjin-graph", { type: "doughnut", datasets: this.datasets, labels: this.labels }),
      this.users.map((record) => {
        var _a;
        return (h("ion-item", null,
          h("floodteam-avatar", { src: ((_a = record === null || record === void 0 ? void 0 : record.user) === null || _a === void 0 ? void 0 : _a.user_avatar)
              ? record.user.user_avatar
              : "./img/avatar.png", slot: "start" }),
          h("h4", null, record.user.user_name),
          record.payables && record.payables.length > 0 ? (record.payables.map((payable) => [
            h("p", null,
              payable.type === "percent"
                ? payable.percent * 100 + "%"
                : "Flat",
              " ",
              "- ",
              record.user.group.group_name),
            payable.payment ? (h("p", null, this.getPaymentText(payable.payment))) : null,
          ])) : (h("floodteam-error", { message: "No payment is tied to this payable!" })),
          h("ion-badge", { slot: "end" }, this.formatUSD(record.amount))));
      })));
  }
  static get is() { return "fireenjin-graph-pay-splits"; }
  static get originalStyleUrls() { return {
    "$": ["graph-pay-splits.css"]
  }; }
  static get styleUrls() { return {
    "$": ["graph-pay-splits.css"]
  }; }
  static get properties() { return {
    "users": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "any[]",
        "resolved": "any[]",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "defaultValue": "[]"
    },
    "graphTitle": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "graph-title",
      "reflect": false
    }
  }; }
  static get states() { return {
    "datasets": {},
    "labels": {},
    "currentUsers": {}
  }; }
  static get methods() { return {
    "setUsers": {
      "complexType": {
        "signature": "(users: any) => Promise<any[]>",
        "parameters": [{
            "tags": [],
            "text": ""
          }],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<any[]>"
      },
      "docs": {
        "text": "",
        "tags": []
      }
    }
  }; }
  static get elementRef() { return "graphPaySplitsEl"; }
  static get watchers() { return [{
      "propName": "users",
      "methodName": "onUsersUpdate"
    }]; }
}
