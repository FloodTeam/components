'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-6c3aefc5.js');

const avatarCss = "floodteam-avatar{position:relative}floodteam-avatar .avatar-image{display:block;border-radius:4px;border:1px solid var(--theme-light-grey);background-color:var(--ion-color-light);background-size:cover;background-position:center;font-weight:bolder;text-align:center;color:var(--ion-color-medium);text-decoration:none}";

const Avatar = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        var _a, _b, _c;
        return (index.h("div", { class: "avatar-image", style: {
                backgroundImage: !((_a = this.src) === null || _a === void 0 ? void 0 : _a.length) && this.initials
                    ? `url('https://avatars.dicebear.com/api/initials/${this.initials}.svg')`
                    : `url('${((_b = this.src) === null || _b === void 0 ? void 0 : _b.length) ? this.src : ((_c = this.fallback) === null || _c === void 0 ? void 0 : _c.length) ? this.fallback : "/assets/images/default-icon.png"}')`,
                height: this.size ? this.size : "50px",
                width: this.size ? this.size : "50px"
            } }));
    }
};
Avatar.style = avatarCss;

exports.floodteam_avatar = Avatar;
