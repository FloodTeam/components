'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-6c3aefc5.js');
const ionicGlobal = require('./ionic-global-c9d0903e.js');
const index$1 = require('./index-a9621cdc.js');
const menuToggleUtil = require('./menu-toggle-util-52b7d881.js');
require('./hardware-back-button-ca468aae.js');
require('./helpers-ff618d5e.js');
require('./animation-bd89cfc5.js');

const menuToggleCss = ":host(.menu-toggle-hidden){display:none}";

const MenuToggle = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.visible = false;
    /**
     * Automatically hides the content when the corresponding menu is not active.
     *
     * By default, it's `true`. Change it to `false` in order to
     * keep `ion-menu-toggle` always visible regardless the state of the menu.
     */
    this.autoHide = true;
    this.onClick = () => {
      return index$1.menuController.toggle(this.menu);
    };
  }
  connectedCallback() {
    this.visibilityChanged();
  }
  async visibilityChanged() {
    this.visible = await menuToggleUtil.updateVisibility(this.menu);
  }
  render() {
    const mode = ionicGlobal.getIonMode(this);
    const hidden = this.autoHide && !this.visible;
    return (index.h(index.Host, { onClick: this.onClick, "aria-hidden": hidden ? 'true' : null, class: {
        [mode]: true,
        'menu-toggle-hidden': hidden,
      } }, index.h("slot", null)));
  }
};
MenuToggle.style = menuToggleCss;

exports.ion_menu_toggle = MenuToggle;
