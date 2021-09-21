import { r as registerInstance } from './index-2bcfd230.js';

const InputSearchPopover = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.results = [];
    }
    render() {
        return this.results.map(result => this.template(result));
    }
};

export { InputSearchPopover as floodteam_input_search_popover };
