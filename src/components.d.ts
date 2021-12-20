/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { Color } from "@ionic/core";
export namespace Components {
    interface FireenjinGraphPaySplits {
        "graphTitle": string;
        "setUsers": (users: any) => Promise<any[]>;
        "users": any[];
    }
    interface FloodteamBookNow {
        /**
          * The Google Maps API Key
         */
        "googleMapsKey": string;
        /**
          * The ID of the location
         */
        "locationId": string;
        /**
          * The ID of the referring user
         */
        "referralId": string;
        /**
          * Is the user referring?
         */
        "referring": boolean;
        /**
          * The campaign or API token
         */
        "token": string;
    }
    interface FloodteamCheckmark {
        /**
          * Start the animation
         */
        "animating": boolean;
        /**
          * The size of the thumb
         */
        "size": string;
    }
    interface FloodteamEpay {
        /**
          * Confirm a check payment
         */
        "confirmPayment": (options?: any) => Promise<any>;
        "customer": any;
        "dadeKey": string;
        "dadeUrl": string;
        "disableFetch": boolean;
        /**
          * The error message to display
         */
        "error": string;
        "jobId": string;
        /**
          * The amount of money owed
         */
        "owed": any;
        "paymentId": string;
        "paymentMethod": "card" | "check" | "manual" | "ach";
        "paymentType": "insurance" | "codeblue";
        /**
          * The list of payments
         */
        "payments": {
    timestamp: string;
    brand: string;
    last4: number;
    amount: number;
  }[];
        "reset": () => Promise<void>;
        /**
          * The slide to show when loading the component
         */
        "showSlide": | "report"
    | "details"
    | "payments"
    | "card"
    | "check"
    | "confirmation";
        "stripeKey": string;
        "success": () => Promise<void>;
        "takePayment": () => Promise<void>;
        /**
          * The total amount of money billed
         */
        "total": any;
        /**
          * Update the ion-slides height
         */
        "updateSlides": () => Promise<void>;
        "userId": string;
        "users": any[];
    }
    interface FloodteamError {
        /**
          * The color of the component
         */
        "color": string;
        /**
          * The icon to use
         */
        "iconName": string;
        /**
          * The error message to display
         */
        "message": string;
    }
    interface FloodteamFallback {
        /**
          * An icon to display above the fallback message
         */
        "icon": string;
        /**
          * The message to display as a fallback
         */
        "message": string;
    }
    interface FloodteamFeedCard {
        /**
          * An optional action button to show on the card
         */
        "actionButtons"?: {
    action: string;
    size?: "small" | "default" | "large";
    fill?: "clear" | "outline" | "solid" | "default";
    color?: string;
    iconStart?: string;
    iconEnd?: string;
    text?: string;
    href?: string;
  }[];
        /**
          * The background image to use for the card
         */
        "backgroundImage"?: string;
        /**
          * When the feed item was created
         */
        "createdAt"?: Date;
        /**
          * The more in depth details about the feed card
         */
        "details"?: string;
        /**
          * The main text at the top of the feed card
         */
        "heading"?: string;
        /**
          * The image to display at the top left of the feed card
         */
        "image"?: string;
        /**
          * The component to load into a modal that will display on load
         */
        "modal"?: string;
        /**
          * Payload data to send through the feed card
         */
        "payload"?: any;
        /**
          * Whether the message has been read
         */
        "read"?: boolean;
        /**
          * The subtext to display under the title
         */
        "subtext"?: string;
        /**
          * A list of tags that apply to this feed card
         */
        "tags"?: string[];
    }
    interface FloodteamFlipCard {
        "backImage": string;
        "flip": (event?: any) => Promise<void>;
        "flipped": boolean;
        "frontImage": string;
        "hideRefresh": boolean;
    }
    interface FloodteamFloatingButton {
        /**
          * The content of the badge
         */
        "badge"?: string;
        /**
          * The color of the badge to display
         */
        "badgeColor"?: Color;
        /**
          * The list of buttons to show when the material button is clicked
         */
        "buttonList": {
    /**
     * The label to show next to the button
     */
    label: string;
    /**
     * The icon to use in the button
     */
    icon: string;
    /**
     * The color from the theme to make the button
     */
    color?: Color;
    /**
     * The link to use for the button
     */
    href?: string;
    /**
     * The functionality to run when the button is clicked
     */
    onClick?: (event: any) => any;
  }[];
        /**
          * The color of the button
         */
        "color": Color;
        /**
          * The horizontal position of the button
         */
        "horizontal": "end" | "start" | "center";
        /**
          * The side the list should display
         */
        "listSide": "end" | "start" | "top" | "bottom";
        /**
          * The icon to use on the material button when it's closed
         */
        "openIcon": string;
        /**
          * The url to link the material button to
         */
        "url": string;
        /**
          * The vertical position of the button
         */
        "vertical": "center" | "top" | "bottom";
    }
    interface FloodteamJobProgress {
        "color": Color;
        "name": string;
        "scrollable": boolean;
        "statuses": string[];
        "value": string;
    }
    interface FloodteamLocationBar {
        "algoliaAppId": string;
        "algoliaIndex": string;
        "algoliaSearchKey": string;
        "query": string;
    }
    interface FloodteamPayCard {
        "stripeKey": string;
        "stripeStyle": any;
    }
    interface FloodteamPayCheck {
        "amount": number;
        "apiKey": string;
        "confirmPayment": (options?: {}) => Promise<any>;
        "flipCard": () => Promise<void>;
        "loading": boolean;
        "openCamera": () => Promise<void>;
        "paymentId": string;
        "url": string;
        "userId": string;
    }
    interface FloodteamPaymentMethods {
        "address": any;
        "cardName": string;
        "methods": any[];
        "payType": "card" | "checking";
        "stripeKey": string;
        "userId": string;
    }
    interface FloodteamPhotoCarousel {
        "addButtonColor": Color;
        "badgeColor": Color;
        "currentSlide": number;
        "getCurrentSlide": () => Promise<number>;
        "hideAddButton": boolean;
        "jobId": string;
        "name": string;
        "options": any;
        "photos": any[];
        "selectFiles": (event: any) => Promise<any>;
        "siteId": string;
        "slideNext": () => Promise<void>;
        "slidePrev": () => Promise<void>;
        "slideTo": (slideNumber: number) => Promise<void>;
        "type": string;
        "update": () => Promise<void>;
    }
    interface FloodteamPhotoGallery {
        "photos": string[];
    }
    interface FloodteamPopoverControls {
        /**
          * The list of buttons to show when the material button is clicked
         */
        "buttonList": {
        /**
         * The label to show next to the button
         */
        label: string;
        /**
         * The icon to use in the button
         */
        icon: string;
        /**
         * The color from the theme to make the button
         */
        color?: Color;
        /**
         * The link to use for the button
         */
        href?: string;
        /**
         * The functionality to run when the button is clicked
         */
        onClick?: (event: any) => any;
    }[];
    }
    interface FloodteamSignaturePad {
        /**
          * The background color for the signature pad
         */
        "backgroundColor": string;
        /**
          * Clear the signature field
         */
        "clear": () => Promise<any>;
        /**
          * The text to display on the clear button
         */
        "clearText": string;
        /**
          * Radius of a single dot
         */
        "dotSize": number;
        /**
          * Download a file via a new browser tab
          * @param dataURL The signature image file data
          * @param filename The name of the file
         */
        "download": (dataURL: any, filename: any) => Promise<void>;
        /**
          * Download the signature as a JPG file
         */
        "downloadJPG": () => Promise<void>;
        /**
          * Download the signature as a PNG file
         */
        "downloadPNG": () => Promise<void>;
        /**
          * Download the signature as an SVG file
         */
        "downloadSVG": () => Promise<void>;
        /**
          * Fill the signature pad from data
          * @param data The signature data
         */
        "fromData": (data: any) => Promise<any>;
        "getSignatureInstace": () => Promise<any>;
        /**
          * Check if the signature pad is empty
         */
        "isEmpty": () => Promise<any>;
        /**
          * The label to display below signature pad
         */
        "label": string;
        /**
          * Maximum width of a line
         */
        "maxWidth": number;
        /**
          * Add the next point only if the previous one is farther than x pixels
         */
        "minDistance": number;
        /**
          * Minimum width of a line
         */
        "minWidth": number;
        /**
          * The name of the element
         */
        "name": string;
        /**
          * Color used to draw the lines. Can be any color format accepted by context.fillStyle
         */
        "penColor": string;
        /**
          * Resize the canvas based on browser
         */
        "resizeCanvas": () => Promise<void>;
        /**
          * Update the value and emit ionChange event
         */
        "submit": () => Promise<void>;
        /**
          * The text to display on the submit button
         */
        "submitText": string;
        /**
          * Draw the next point at most once per every x milliseconds. Set it to 0 to turn off throttling
         */
        "throttle": number;
        /**
          * Get the signature pad data
         */
        "toData": () => Promise<any>;
        "toDataURL": (type?: string) => Promise<any>;
        /**
          * Undo the last stroke from the signature
         */
        "undo": () => Promise<any>;
        /**
          * The current data for the signature pad
         */
        "value": any;
        /**
          * Weight used to modify new velocity based on the previous velocity
         */
        "velocityFilterWeight": number;
    }
    interface FloodteamSnapshotCard {
        "active": boolean;
        "buttonProps": {};
        "buttonText": string;
        "disableShrink": boolean;
        "href": string;
        "photo": string;
    }
}
declare global {
    interface HTMLFireenjinGraphPaySplitsElement extends Components.FireenjinGraphPaySplits, HTMLStencilElement {
    }
    var HTMLFireenjinGraphPaySplitsElement: {
        prototype: HTMLFireenjinGraphPaySplitsElement;
        new (): HTMLFireenjinGraphPaySplitsElement;
    };
    interface HTMLFloodteamBookNowElement extends Components.FloodteamBookNow, HTMLStencilElement {
    }
    var HTMLFloodteamBookNowElement: {
        prototype: HTMLFloodteamBookNowElement;
        new (): HTMLFloodteamBookNowElement;
    };
    interface HTMLFloodteamCheckmarkElement extends Components.FloodteamCheckmark, HTMLStencilElement {
    }
    var HTMLFloodteamCheckmarkElement: {
        prototype: HTMLFloodteamCheckmarkElement;
        new (): HTMLFloodteamCheckmarkElement;
    };
    interface HTMLFloodteamEpayElement extends Components.FloodteamEpay, HTMLStencilElement {
    }
    var HTMLFloodteamEpayElement: {
        prototype: HTMLFloodteamEpayElement;
        new (): HTMLFloodteamEpayElement;
    };
    interface HTMLFloodteamErrorElement extends Components.FloodteamError, HTMLStencilElement {
    }
    var HTMLFloodteamErrorElement: {
        prototype: HTMLFloodteamErrorElement;
        new (): HTMLFloodteamErrorElement;
    };
    interface HTMLFloodteamFallbackElement extends Components.FloodteamFallback, HTMLStencilElement {
    }
    var HTMLFloodteamFallbackElement: {
        prototype: HTMLFloodteamFallbackElement;
        new (): HTMLFloodteamFallbackElement;
    };
    interface HTMLFloodteamFeedCardElement extends Components.FloodteamFeedCard, HTMLStencilElement {
    }
    var HTMLFloodteamFeedCardElement: {
        prototype: HTMLFloodteamFeedCardElement;
        new (): HTMLFloodteamFeedCardElement;
    };
    interface HTMLFloodteamFlipCardElement extends Components.FloodteamFlipCard, HTMLStencilElement {
    }
    var HTMLFloodteamFlipCardElement: {
        prototype: HTMLFloodteamFlipCardElement;
        new (): HTMLFloodteamFlipCardElement;
    };
    interface HTMLFloodteamFloatingButtonElement extends Components.FloodteamFloatingButton, HTMLStencilElement {
    }
    var HTMLFloodteamFloatingButtonElement: {
        prototype: HTMLFloodteamFloatingButtonElement;
        new (): HTMLFloodteamFloatingButtonElement;
    };
    interface HTMLFloodteamJobProgressElement extends Components.FloodteamJobProgress, HTMLStencilElement {
    }
    var HTMLFloodteamJobProgressElement: {
        prototype: HTMLFloodteamJobProgressElement;
        new (): HTMLFloodteamJobProgressElement;
    };
    interface HTMLFloodteamLocationBarElement extends Components.FloodteamLocationBar, HTMLStencilElement {
    }
    var HTMLFloodteamLocationBarElement: {
        prototype: HTMLFloodteamLocationBarElement;
        new (): HTMLFloodteamLocationBarElement;
    };
    interface HTMLFloodteamPayCardElement extends Components.FloodteamPayCard, HTMLStencilElement {
    }
    var HTMLFloodteamPayCardElement: {
        prototype: HTMLFloodteamPayCardElement;
        new (): HTMLFloodteamPayCardElement;
    };
    interface HTMLFloodteamPayCheckElement extends Components.FloodteamPayCheck, HTMLStencilElement {
    }
    var HTMLFloodteamPayCheckElement: {
        prototype: HTMLFloodteamPayCheckElement;
        new (): HTMLFloodteamPayCheckElement;
    };
    interface HTMLFloodteamPaymentMethodsElement extends Components.FloodteamPaymentMethods, HTMLStencilElement {
    }
    var HTMLFloodteamPaymentMethodsElement: {
        prototype: HTMLFloodteamPaymentMethodsElement;
        new (): HTMLFloodteamPaymentMethodsElement;
    };
    interface HTMLFloodteamPhotoCarouselElement extends Components.FloodteamPhotoCarousel, HTMLStencilElement {
    }
    var HTMLFloodteamPhotoCarouselElement: {
        prototype: HTMLFloodteamPhotoCarouselElement;
        new (): HTMLFloodteamPhotoCarouselElement;
    };
    interface HTMLFloodteamPhotoGalleryElement extends Components.FloodteamPhotoGallery, HTMLStencilElement {
    }
    var HTMLFloodteamPhotoGalleryElement: {
        prototype: HTMLFloodteamPhotoGalleryElement;
        new (): HTMLFloodteamPhotoGalleryElement;
    };
    interface HTMLFloodteamPopoverControlsElement extends Components.FloodteamPopoverControls, HTMLStencilElement {
    }
    var HTMLFloodteamPopoverControlsElement: {
        prototype: HTMLFloodteamPopoverControlsElement;
        new (): HTMLFloodteamPopoverControlsElement;
    };
    interface HTMLFloodteamSignaturePadElement extends Components.FloodteamSignaturePad, HTMLStencilElement {
    }
    var HTMLFloodteamSignaturePadElement: {
        prototype: HTMLFloodteamSignaturePadElement;
        new (): HTMLFloodteamSignaturePadElement;
    };
    interface HTMLFloodteamSnapshotCardElement extends Components.FloodteamSnapshotCard, HTMLStencilElement {
    }
    var HTMLFloodteamSnapshotCardElement: {
        prototype: HTMLFloodteamSnapshotCardElement;
        new (): HTMLFloodteamSnapshotCardElement;
    };
    interface HTMLElementTagNameMap {
        "fireenjin-graph-pay-splits": HTMLFireenjinGraphPaySplitsElement;
        "floodteam-book-now": HTMLFloodteamBookNowElement;
        "floodteam-checkmark": HTMLFloodteamCheckmarkElement;
        "floodteam-epay": HTMLFloodteamEpayElement;
        "floodteam-error": HTMLFloodteamErrorElement;
        "floodteam-fallback": HTMLFloodteamFallbackElement;
        "floodteam-feed-card": HTMLFloodteamFeedCardElement;
        "floodteam-flip-card": HTMLFloodteamFlipCardElement;
        "floodteam-floating-button": HTMLFloodteamFloatingButtonElement;
        "floodteam-job-progress": HTMLFloodteamJobProgressElement;
        "floodteam-location-bar": HTMLFloodteamLocationBarElement;
        "floodteam-pay-card": HTMLFloodteamPayCardElement;
        "floodteam-pay-check": HTMLFloodteamPayCheckElement;
        "floodteam-payment-methods": HTMLFloodteamPaymentMethodsElement;
        "floodteam-photo-carousel": HTMLFloodteamPhotoCarouselElement;
        "floodteam-photo-gallery": HTMLFloodteamPhotoGalleryElement;
        "floodteam-popover-controls": HTMLFloodteamPopoverControlsElement;
        "floodteam-signature-pad": HTMLFloodteamSignaturePadElement;
        "floodteam-snapshot-card": HTMLFloodteamSnapshotCardElement;
    }
}
declare namespace LocalJSX {
    interface FireenjinGraphPaySplits {
        "graphTitle"?: string;
        "users"?: any[];
    }
    interface FloodteamBookNow {
        /**
          * The Google Maps API Key
         */
        "googleMapsKey"?: string;
        /**
          * The ID of the location
         */
        "locationId"?: string;
        /**
          * The ID of the referring user
         */
        "referralId"?: string;
        /**
          * Is the user referring?
         */
        "referring"?: boolean;
        /**
          * The campaign or API token
         */
        "token"?: string;
    }
    interface FloodteamCheckmark {
        /**
          * Start the animation
         */
        "animating"?: boolean;
        /**
          * The size of the thumb
         */
        "size"?: string;
    }
    interface FloodteamEpay {
        "customer"?: any;
        "dadeKey"?: string;
        "dadeUrl"?: string;
        "disableFetch"?: boolean;
        /**
          * The error message to display
         */
        "error"?: string;
        "jobId"?: string;
        "onFireenjinFetch"?: (event: CustomEvent<any>) => void;
        "onFireenjinSubmit"?: (event: CustomEvent<any>) => void;
        "onFtEpayShowCommisions"?: (event: CustomEvent<any>) => void;
        /**
          * The amount of money owed
         */
        "owed"?: any;
        "paymentId"?: string;
        "paymentMethod"?: "card" | "check" | "manual" | "ach";
        "paymentType"?: "insurance" | "codeblue";
        /**
          * The list of payments
         */
        "payments"?: {
    timestamp: string;
    brand: string;
    last4: number;
    amount: number;
  }[];
        /**
          * The slide to show when loading the component
         */
        "showSlide"?: | "report"
    | "details"
    | "payments"
    | "card"
    | "check"
    | "confirmation";
        "stripeKey"?: string;
        /**
          * The total amount of money billed
         */
        "total"?: any;
        "userId"?: string;
        "users"?: any[];
    }
    interface FloodteamError {
        /**
          * The color of the component
         */
        "color"?: string;
        /**
          * The icon to use
         */
        "iconName"?: string;
        /**
          * The error message to display
         */
        "message"?: string;
    }
    interface FloodteamFallback {
        /**
          * An icon to display above the fallback message
         */
        "icon"?: string;
        /**
          * The message to display as a fallback
         */
        "message"?: string;
    }
    interface FloodteamFeedCard {
        /**
          * An optional action button to show on the card
         */
        "actionButtons"?: {
    action: string;
    size?: "small" | "default" | "large";
    fill?: "clear" | "outline" | "solid" | "default";
    color?: string;
    iconStart?: string;
    iconEnd?: string;
    text?: string;
    href?: string;
  }[];
        /**
          * The background image to use for the card
         */
        "backgroundImage"?: string;
        /**
          * When the feed item was created
         */
        "createdAt"?: Date;
        /**
          * The more in depth details about the feed card
         */
        "details"?: string;
        /**
          * The main text at the top of the feed card
         */
        "heading"?: string;
        /**
          * The image to display at the top left of the feed card
         */
        "image"?: string;
        /**
          * The component to load into a modal that will display on load
         */
        "modal"?: string;
        "onFloodteamFeedAction"?: (event: CustomEvent<any>) => void;
        /**
          * Payload data to send through the feed card
         */
        "payload"?: any;
        /**
          * Whether the message has been read
         */
        "read"?: boolean;
        /**
          * The subtext to display under the title
         */
        "subtext"?: string;
        /**
          * A list of tags that apply to this feed card
         */
        "tags"?: string[];
    }
    interface FloodteamFlipCard {
        "backImage"?: string;
        "flipped"?: boolean;
        "frontImage"?: string;
        "hideRefresh"?: boolean;
        "onFloodteamFlip"?: (event: CustomEvent<any>) => void;
    }
    interface FloodteamFloatingButton {
        /**
          * The content of the badge
         */
        "badge"?: string;
        /**
          * The color of the badge to display
         */
        "badgeColor"?: Color;
        /**
          * The list of buttons to show when the material button is clicked
         */
        "buttonList"?: {
    /**
     * The label to show next to the button
     */
    label: string;
    /**
     * The icon to use in the button
     */
    icon: string;
    /**
     * The color from the theme to make the button
     */
    color?: Color;
    /**
     * The link to use for the button
     */
    href?: string;
    /**
     * The functionality to run when the button is clicked
     */
    onClick?: (event: any) => any;
  }[];
        /**
          * The color of the button
         */
        "color"?: Color;
        /**
          * The horizontal position of the button
         */
        "horizontal"?: "end" | "start" | "center";
        /**
          * The side the list should display
         */
        "listSide"?: "end" | "start" | "top" | "bottom";
        /**
          * The icon to use on the material button when it's closed
         */
        "openIcon"?: string;
        /**
          * The url to link the material button to
         */
        "url"?: string;
        /**
          * The vertical position of the button
         */
        "vertical"?: "center" | "top" | "bottom";
    }
    interface FloodteamJobProgress {
        "color"?: Color;
        "name"?: string;
        "scrollable"?: boolean;
        "statuses"?: string[];
        "value"?: string;
    }
    interface FloodteamLocationBar {
        "algoliaAppId"?: string;
        "algoliaIndex"?: string;
        "algoliaSearchKey"?: string;
        "query"?: string;
    }
    interface FloodteamPayCard {
        "onFtCancel"?: (event: CustomEvent<any>) => void;
        "onFtCardError"?: (event: CustomEvent<any>) => void;
        "onFtSubmitCard"?: (event: CustomEvent<any>) => void;
        "stripeKey"?: string;
        "stripeStyle"?: any;
    }
    interface FloodteamPayCheck {
        "amount"?: number;
        "apiKey"?: string;
        "loading"?: boolean;
        "onFtCancel"?: (event: CustomEvent<any>) => void;
        "onFtCheckConfirmation"?: (event: CustomEvent<any>) => void;
        "onFtCheckError"?: (event: CustomEvent<any>) => void;
        "onFtCheckScan"?: (event: CustomEvent<any>) => void;
        "onFtSubmitCheck"?: (event: CustomEvent<any>) => void;
        "paymentId"?: string;
        "url"?: string;
        "userId"?: string;
    }
    interface FloodteamPaymentMethods {
        "address"?: any;
        "cardName"?: string;
        "methods"?: any[];
        "onFtRemovePaymentMethod"?: (event: CustomEvent<any>) => void;
        "payType"?: "card" | "checking";
        "stripeKey"?: string;
        "userId"?: string;
    }
    interface FloodteamPhotoCarousel {
        "addButtonColor"?: Color;
        "badgeColor"?: Color;
        "currentSlide"?: number;
        "hideAddButton"?: boolean;
        "jobId"?: string;
        "name"?: string;
        "options"?: any;
        "photos"?: any[];
        "siteId"?: string;
        "type"?: string;
    }
    interface FloodteamPhotoGallery {
        "onFtOpenPhotoCarousel"?: (event: CustomEvent<any>) => void;
        "photos"?: string[];
    }
    interface FloodteamPopoverControls {
        /**
          * The list of buttons to show when the material button is clicked
         */
        "buttonList"?: {
        /**
         * The label to show next to the button
         */
        label: string;
        /**
         * The icon to use in the button
         */
        icon: string;
        /**
         * The color from the theme to make the button
         */
        color?: Color;
        /**
         * The link to use for the button
         */
        href?: string;
        /**
         * The functionality to run when the button is clicked
         */
        onClick?: (event: any) => any;
    }[];
        "onFloodteamClosePopover"?: (event: CustomEvent<any>) => void;
    }
    interface FloodteamSignaturePad {
        /**
          * The background color for the signature pad
         */
        "backgroundColor"?: string;
        /**
          * The text to display on the clear button
         */
        "clearText"?: string;
        /**
          * Radius of a single dot
         */
        "dotSize"?: number;
        /**
          * The label to display below signature pad
         */
        "label"?: string;
        /**
          * Maximum width of a line
         */
        "maxWidth"?: number;
        /**
          * Add the next point only if the previous one is farther than x pixels
         */
        "minDistance"?: number;
        /**
          * Minimum width of a line
         */
        "minWidth"?: number;
        /**
          * The name of the element
         */
        "name"?: string;
        "onIonChange"?: (event: CustomEvent<any>) => void;
        "onIonInput"?: (event: CustomEvent<any>) => void;
        /**
          * Color used to draw the lines. Can be any color format accepted by context.fillStyle
         */
        "penColor"?: string;
        /**
          * The text to display on the submit button
         */
        "submitText"?: string;
        /**
          * Draw the next point at most once per every x milliseconds. Set it to 0 to turn off throttling
         */
        "throttle"?: number;
        /**
          * The current data for the signature pad
         */
        "value"?: any;
        /**
          * Weight used to modify new velocity based on the previous velocity
         */
        "velocityFilterWeight"?: number;
    }
    interface FloodteamSnapshotCard {
        "active"?: boolean;
        "buttonProps"?: {};
        "buttonText"?: string;
        "disableShrink"?: boolean;
        "href"?: string;
        "onFloodteamClick"?: (event: CustomEvent<any>) => void;
        "photo"?: string;
    }
    interface IntrinsicElements {
        "fireenjin-graph-pay-splits": FireenjinGraphPaySplits;
        "floodteam-book-now": FloodteamBookNow;
        "floodteam-checkmark": FloodteamCheckmark;
        "floodteam-epay": FloodteamEpay;
        "floodteam-error": FloodteamError;
        "floodteam-fallback": FloodteamFallback;
        "floodteam-feed-card": FloodteamFeedCard;
        "floodteam-flip-card": FloodteamFlipCard;
        "floodteam-floating-button": FloodteamFloatingButton;
        "floodteam-job-progress": FloodteamJobProgress;
        "floodteam-location-bar": FloodteamLocationBar;
        "floodteam-pay-card": FloodteamPayCard;
        "floodteam-pay-check": FloodteamPayCheck;
        "floodteam-payment-methods": FloodteamPaymentMethods;
        "floodteam-photo-carousel": FloodteamPhotoCarousel;
        "floodteam-photo-gallery": FloodteamPhotoGallery;
        "floodteam-popover-controls": FloodteamPopoverControls;
        "floodteam-signature-pad": FloodteamSignaturePad;
        "floodteam-snapshot-card": FloodteamSnapshotCard;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "fireenjin-graph-pay-splits": LocalJSX.FireenjinGraphPaySplits & JSXBase.HTMLAttributes<HTMLFireenjinGraphPaySplitsElement>;
            "floodteam-book-now": LocalJSX.FloodteamBookNow & JSXBase.HTMLAttributes<HTMLFloodteamBookNowElement>;
            "floodteam-checkmark": LocalJSX.FloodteamCheckmark & JSXBase.HTMLAttributes<HTMLFloodteamCheckmarkElement>;
            "floodteam-epay": LocalJSX.FloodteamEpay & JSXBase.HTMLAttributes<HTMLFloodteamEpayElement>;
            "floodteam-error": LocalJSX.FloodteamError & JSXBase.HTMLAttributes<HTMLFloodteamErrorElement>;
            "floodteam-fallback": LocalJSX.FloodteamFallback & JSXBase.HTMLAttributes<HTMLFloodteamFallbackElement>;
            "floodteam-feed-card": LocalJSX.FloodteamFeedCard & JSXBase.HTMLAttributes<HTMLFloodteamFeedCardElement>;
            "floodteam-flip-card": LocalJSX.FloodteamFlipCard & JSXBase.HTMLAttributes<HTMLFloodteamFlipCardElement>;
            "floodteam-floating-button": LocalJSX.FloodteamFloatingButton & JSXBase.HTMLAttributes<HTMLFloodteamFloatingButtonElement>;
            "floodteam-job-progress": LocalJSX.FloodteamJobProgress & JSXBase.HTMLAttributes<HTMLFloodteamJobProgressElement>;
            "floodteam-location-bar": LocalJSX.FloodteamLocationBar & JSXBase.HTMLAttributes<HTMLFloodteamLocationBarElement>;
            "floodteam-pay-card": LocalJSX.FloodteamPayCard & JSXBase.HTMLAttributes<HTMLFloodteamPayCardElement>;
            "floodteam-pay-check": LocalJSX.FloodteamPayCheck & JSXBase.HTMLAttributes<HTMLFloodteamPayCheckElement>;
            "floodteam-payment-methods": LocalJSX.FloodteamPaymentMethods & JSXBase.HTMLAttributes<HTMLFloodteamPaymentMethodsElement>;
            "floodteam-photo-carousel": LocalJSX.FloodteamPhotoCarousel & JSXBase.HTMLAttributes<HTMLFloodteamPhotoCarouselElement>;
            "floodteam-photo-gallery": LocalJSX.FloodteamPhotoGallery & JSXBase.HTMLAttributes<HTMLFloodteamPhotoGalleryElement>;
            "floodteam-popover-controls": LocalJSX.FloodteamPopoverControls & JSXBase.HTMLAttributes<HTMLFloodteamPopoverControlsElement>;
            "floodteam-signature-pad": LocalJSX.FloodteamSignaturePad & JSXBase.HTMLAttributes<HTMLFloodteamSignaturePadElement>;
            "floodteam-snapshot-card": LocalJSX.FloodteamSnapshotCard & JSXBase.HTMLAttributes<HTMLFloodteamSnapshotCardElement>;
        }
    }
}
