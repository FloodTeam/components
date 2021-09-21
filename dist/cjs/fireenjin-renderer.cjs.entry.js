'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-6c3aefc5.js');

const Renderer = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h("ion-content", null, index.h("fireenjin-pagination", { endpoint: "listUsers", limit: 24, listEl: ({ result }) => index.h("ion-item", null, result.id) })));
  }
};

exports.fireenjin_renderer = Renderer;
