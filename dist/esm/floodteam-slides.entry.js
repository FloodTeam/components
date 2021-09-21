import { r as registerInstance, h, H as Host, a as getElement } from './index-2bcfd230.js';

const slidesCss = "floodteam-slides{width:300px;text-align:center;overflow:hidden}floodteam-slides .pagination a{display:inline-flex;width:1.5rem;height:1.5rem;background:white;text-decoration:none;align-items:center;justify-content:center;border-radius:50%;margin:0 0 0.5rem 0;position:relative}floodteam-slides .pagination a:active{top:1px}floodteam-slides .pagination a:focus{background:#000}floodteam-slides .slides{display:flex;overflow-x:auto;scroll-snap-type:x mandatory;scroll-behavior:smooth;-webkit-overflow-scrolling:touch;}floodteam-slides .slides::-webkit-scrollbar{width:10px;height:10px}floodteam-slides .slides::-webkit-scrollbar-thumb{background:black;border-radius:10px}floodteam-slides .slides::-webkit-scrollbar-track{background:transparent}floodteam-slides .slides floodteam-slide{scroll-snap-align:start;flex-shrink:0;width:300px;height:300px;margin-right:50px;border-radius:10px;background:#eee;transform-origin:center center;transform:scale(1);transition:transform 0.5s;position:relative;display:flex;justify-content:center;align-items:center;font-size:100px}@supports (scroll-snap-type){floodteam-slides>a{display:none}}";

const Slides = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.slides = [];
    }
    async update() {
        this.setSlides();
    }
    setSlides() {
        const slides = this.slidesEl.querySelectorAll("floodteam-slide");
        slides.forEach(slideEl => {
            this.slides.push(slideEl);
        });
        this.slides = [...this.slides];
    }
    componentDidLoad() {
        this.setSlides();
    }
    render() {
        return (h(Host, null, h("div", { class: "pagination" }, this.slides.map(slideEl => (h("a", { href: `#${slideEl.id}` }, slideEl.name ? slideEl.name : slideEl.id)))), h("div", { class: "slides" }, h("slot", null))));
    }
    get slidesEl() { return getElement(this); }
};
Slides.style = slidesCss;

export { Slides as floodteam_slides };
