'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-6c3aefc5.js');

const graphPaySplitsCss = "floodteam-graph-pay-splits floodteam-error .floodteam-error-wrapper{padding:0 !important}floodteam-graph-pay-splits .graph-pay-splits-wrapper{display:block;max-width:400px;width:90%;margin:0 auto}floodteam-graph-pay-splits h1{text-align:center;color:var(--theme-success) !important;font-size:28px;font-weight:bold}floodteam-graph-pay-splits floodteam-graph{display:block;max-width:400px;margin:0 auto}floodteam-graph-pay-splits floodteam-item h4{color:var(--theme-dark-grey) !important}floodteam-graph-pay-splits floodteam-item floodteam-badge{--floodteam-badge-padding:0 10px;--floodteam-badge-background:var(--theme-success);--floodteam-badge-color:#ffffff}";

const GraphPaySplits = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
        {
            this.setUsers(this.users);
        }
    }
    render() {
        return (index.h("div", { class: "graph-pay-splits-wrapper" }, this.graphTitle ? index.h("h1", null, this.graphTitle) : null, index.h("fireenjin-graph", { type: "doughnut", datasets: this.datasets, labels: this.labels }), this.users.map((record) => {
            var _a;
            return (index.h("ion-item", null, index.h("floodteam-avatar", { src: ((_a = record === null || record === void 0 ? void 0 : record.user) === null || _a === void 0 ? void 0 : _a.user_avatar)
                    ? record.user.user_avatar
                    : "./img/avatar.png", slot: "start" }), index.h("h4", null, record.user.user_name), record.payables && record.payables.length > 0 ? (record.payables.map((payable) => [
                index.h("p", null, payable.type === "percent"
                    ? payable.percent * 100 + "%"
                    : "Flat", " ", "- ", record.user.group.group_name),
                payable.payment ? (index.h("p", null, this.getPaymentText(payable.payment))) : null,
            ])) : (index.h("floodteam-error", { message: "No payment is tied to this payable!" })), index.h("ion-badge", { slot: "end" }, this.formatUSD(record.amount))));
        })));
    }
    get graphPaySplitsEl() { return index.getElement(this); }
    static get watchers() {
        return {
            "users": ["onUsersUpdate"]
        };
    }
};
GraphPaySplits.style = graphPaySplitsCss;

exports.fireenjin_graph_pay_splits = GraphPaySplits;
