'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-6c3aefc5.js');

const starRatingCss = ".star-rating{display:flex;flex-direction:row-reverse;justify-content:space-around;text-align:center;width:var(\r\n    --star-rating-width,\r\n    calc(\r\n      (var(--star-rating-size, 25px) * var(--star-rating-max, 5)) +\r\n        var(--star-rating-spacing, -10px)\r\n    )\r\n  )}.star-rating input{display:none}.star-rating>label{color:var(--star-rating-default, #fff);font-size:var(--star-rating-size, 25px);cursor:pointer}.star-rating .star-active{color:var(--star-rating-active, #f90)}.star-rating:not(.is-disabled) label:hover,.star-rating:not(.is-disabled) label:hover~label{color:var(--star-rating-hover, #fc0)}";

const StarRating = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.ftStarRating = index.createEvent(this, "ftStarRating", 7);
        this.disabled = false;
        this.name = "rating";
        this.maxRating = 5;
    }
    onInput(event) {
        console.log(event);
        if (this.disabled) {
            return false;
        }
        this.currentRating = parseFloat(event.target.value);
        this.ftStarRating.emit({
            event,
            name: this.name,
            value: this.currentRating
        });
    }
    async setCurrentRating(rating) {
        this.currentRating = parseFloat(rating);
    }
    onValueChange() {
        this.currentRating = parseFloat(this.value);
    }
    componentDidLoad() {
        {
            this.currentRating = parseFloat(this.value ? this.value : "0");
            this.starRatingEl.style.setProperty("--star-rating-max", `${this.maxRating}`);
        }
    }
    render() {
        return (index.h("div", { class: this.disabled ? "star-rating is-disabled" : "star-rating" }, [...Array(this.maxRating)].map((_radio, index$1) => [
            index.h("label", { class: this.currentRating >= this.maxRating - index$1 - 0.5
                    ? "star-active"
                    : null }, index.h("input", { type: "radio", name: this.name, value: this.maxRating - index$1, onInput: event => this.onInput(event) }), "\u2605")
        ])));
    }
    get starRatingEl() { return index.getElement(this); }
    static get watchers() {
        return {
            "value": ["onValueChange"]
        };
    }
};
StarRating.style = starRatingCss;

exports.floodteam_star_rating = StarRating;
