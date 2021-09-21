'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-6c3aefc5.js');

const InputSearchPopover = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.results = [];
    }
    render() {
        return this.results.map(result => this.template(result));
    }
};

exports.floodteam_input_search_popover = InputSearchPopover;
