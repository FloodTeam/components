import {
  Component,
  ComponentInterface,
  Element,
  Event,
  EventEmitter,
  Prop,
  State,
  h,
  Watch,
  Method
} from "@stencil/core";

@Component({
  tag: "floodteam-input-file",
  styleUrl: "input-file.css"
})
export class InputFile implements ComponentInterface {
  @Element() fileUploaderEl: any;

  @Prop() path: string;
  @Prop() icon: string;
  @Prop() label: string;
  @Prop() fileName: string;
  @Prop() name?: string;
  @Prop() accept?: string;
  @Prop() defaultValue: any;
  @Prop() value: any;
  @Prop() type = "file";
  @Prop() documentId: string;
  /**
   * The endpoint to upload to
   */
  @Prop() endpoint = "upload";

  @Event() floodteamUploadFile: EventEmitter;

  @State() isLoading: boolean;
  @State() fileUrl: string;
  @State() selectedFile: string;

  @Event() floodteamUpload: EventEmitter;
  @Event() ionInput: EventEmitter;

  @Watch("value")
  onFileChange() {
    if (!this.value) return false;
    this.ionInput.emit({
      name: this.name,
      value: this.value
    });
  }

  @Method()
  async openFile() {
    const fileInputEl: any = this.fileUploaderEl.querySelector(
      'input[type="file"]'
    );
    fileInputEl.click();
    return fileInputEl;
  }

  uploadFile(file) {
    this.isLoading = true;
    if (!window.FileReader) return;

    const reader = new FileReader();
    reader.onload = async event => {
      if (event.target.readyState != 2) return;
      if (event.target.error) {
        alert("Error while reading file");
        return;
      }

      this.floodteamUpload.emit({
        event,
        name: this.name,
        endpoint: this.endpoint,
        data: {
          id: this.documentId,
          type: this.type,
          fileName: this.fileName,
          file,
          path: this.path,
          encodedContent: event.target.result
        }
      });
    };

    reader.readAsDataURL(file);
  }

  selectFile(event) {
    this.isLoading = true;
    const file = event.target.files[0];
    this.selectedFile = file.name;
    this.uploadFile(file);
  }

  onDrop(event) {
    event.preventDefault();
  }

  onDrag(event) {
    event.preventDefault();
  }

  onDragEnter(event) {
    console.log("Show UI to drop file", event);
  }

  onDragLeave(event) {
    console.log("Hide UI to drop file", event);
  }

  render() {
    return (
      <ion-card onClick={() => this.openFile()}>
        <ion-item lines="none">
          <ion-icon name={this.icon ? this.icon : "document"} slot="start" />
          <div>
            <h2>{this.label ? this.label : "Upload a File"}</h2>
            <p>
              {this.selectedFile
                ? this.selectedFile
                : this.defaultValue
                ? this.defaultValue
                : "Select a letterhead"}
            </p>
          </div>
        </ion-item>
        <input
          type="file"
          onChange={event => this.selectFile(event)}
          accept={this.accept ? this.accept : null}
          value="blah"
        />
      </ion-card>
    );
  }
}
