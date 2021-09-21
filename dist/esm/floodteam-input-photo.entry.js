import { r as registerInstance, c as createEvent, h, a as getElement } from './index-2bcfd230.js';

const inputPhotoCss = "floodteam-input-photo .upload-wrapper{display:block;margin:0 auto;height:150px;width:150px;position:relative}floodteam-input-photo .upload-wrapper .photo{position:relative;background:var(--theme-grey);border-radius:4px;border:2px solid var(--theme-light);height:150px;width:150px;margin:0 auto;display:block;background-repeat:no-repeat;background-size:cover;background-position:center;color:var(--ion-color-medium);font-size:75px;line-height:150px;text-align:center;font-weight:bolder}floodteam-input-photo .upload-wrapper .photo.is-loading:before{border-radius:4px}floodteam-input-photo .upload-wrapper .photo.is-loading:after{border-radius:4px}floodteam-input-photo .upload-wrapper .photo:hover{cursor:pointer;border-color:var(--theme-blue)}floodteam-input-photo input[type=\"file\"]{height:0;width:0;visibility:hidden;opacity:0;pointer-events:none;float:left}";

const InputPhoto = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.fireenjinUpload = createEvent(this, "fireenjinUpload", 7);
        this.ionInput = createEvent(this, "ionInput", 7);
        /**
         * Is the uploader disabled
         */
        this.disabled = false;
        /**
         * Should the photo uploader show the button
         */
        this.showButton = false;
        /**
         * Text to display on the photo upload button
         */
        this.buttonText = "Edit Image";
        /**
         * The type of photo being uploaded
         */
        this.type = "photo";
        /**
         * The endpoint to upload to
         */
        this.endpoint = "upload";
        /**
         * Allow uploading multiple
         */
        this.multiple = false;
    }
    onSuccess(event) {
        if (event.detail.endpoint !== "upload" || event.detail.name !== this.name)
            return false;
        this.loading = false;
    }
    onPhotoChange() {
        this.updatePhoto();
    }
    componentDidLoad() {
        this.updatePhoto();
    }
    updatePhoto() {
        this.photoUrl = this.value
            ? this.value
            : this.fallback
                ? this.fallback
                : null;
        if (this.value) {
            this.ionInput.emit({
                name: this.name,
                value: this.value,
            });
        }
    }
    async triggerFileInput(_event) {
        if (this.disabled) {
            return false;
        }
        const fileInputEl = this.photoUploaderEl.querySelector('input[type="file"]');
        fileInputEl.click();
    }
    selectFile(event) {
        this.uploadPhoto(event.target.files[0]);
    }
    uploadPhoto(file) {
        this.loading = true;
        if (!window.FileReader)
            return;
        const reader = new FileReader();
        reader.onload = async (event) => {
            if (event.target.readyState != 2)
                return;
            if (event.target.error) {
                alert("Error while reading file");
                return;
            }
            this.fireenjinUpload.emit({
                event,
                endpoint: this.endpoint,
                name: this.name,
                data: {
                    id: this.documentId,
                    type: this.type,
                    path: this.path,
                    file,
                    fileName: this.fileName,
                    encodedContent: event.target.result,
                },
            });
        };
        reader.readAsDataURL(file);
    }
    onDrop(event) {
        event.preventDefault();
        this.uploadPhoto(event.dataTransfer.files[0]);
    }
    onDrag(event) {
        event.preventDefault();
    }
    onDragEnter() {
        this.showButton = true;
    }
    onDragLeave() {
        this.showButton = false;
    }
    render() {
        return (h("div", null, h("div", { class: "upload-wrapper" }, h("div", { class: this.loading ? "photo is-loading" : "photo", style: {
                backgroundImage: this.photoUrl ? `url('${this.photoUrl}')` : null,
            }, onClick: (event) => this.triggerFileInput(event), onDrop: (event) => this.onDrop(event), onDragOver: (event) => this.onDrag(event), onDragEnter: () => this.onDragEnter(), onDragLeave: () => this.onDragLeave() }, !this.photoUrl && this.initials ? this.initials : null), this.showButton ? (h("ion-button", { fill: "clear", expand: "block", size: "small", onClick: (event) => this.triggerFileInput(event) }, this.buttonText, h("ion-icon", { name: "image", slot: "end" }))) : null), h("slot", null), h("input", { type: "file", onChange: (event) => this.selectFile(event), accept: "image/*", multiple: this.multiple })));
    }
    get photoUploaderEl() { return getElement(this); }
    static get watchers() {
        return {
            "value": ["onPhotoChange"]
        };
    }
};
InputPhoto.style = inputPhotoCss;

export { InputPhoto as floodteam_input_photo };
