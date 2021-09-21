import { r as registerInstance, h, H as Host } from './index-2bcfd230.js';

const Slide = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, null, h("slot", null)));
    }
};

export { Slide as floodteam_slide };
