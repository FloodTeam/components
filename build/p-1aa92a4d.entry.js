import{r as t,c as i,h as o,a as e}from"./p-13ea6980.js";const a=class{constructor(o){t(this,o),this.fireenjinUpload=i(this,"fireenjinUpload",7),this.ionInput=i(this,"ionInput",7),this.disabled=!1,this.showButton=!1,this.buttonText="Edit Image",this.type="photo",this.endpoint="upload",this.multiple=!1}onSuccess(t){if("upload"!==t.detail.endpoint||t.detail.name!==this.name)return!1;this.loading=!1}onPhotoChange(){this.updatePhoto()}componentDidLoad(){this.updatePhoto()}updatePhoto(){this.photoUrl=this.value?this.value:this.fallback?this.fallback:null,this.value&&this.ionInput.emit({name:this.name,value:this.value})}async triggerFileInput(t){if(this.disabled)return!1;this.photoUploaderEl.querySelector('input[type="file"]').click()}selectFile(t){this.uploadPhoto(t.target.files[0])}uploadPhoto(t){if(this.loading=!0,!window.FileReader)return;const i=new FileReader;i.onload=async i=>{2==i.target.readyState&&(i.target.error?alert("Error while reading file"):this.fireenjinUpload.emit({event:i,endpoint:this.endpoint,name:this.name,data:{id:this.documentId,type:this.type,path:this.path,file:t,fileName:this.fileName,encodedContent:i.target.result}}))},i.readAsDataURL(t)}onDrop(t){t.preventDefault(),this.uploadPhoto(t.dataTransfer.files[0])}onDrag(t){t.preventDefault()}onDragEnter(){this.showButton=!0}onDragLeave(){this.showButton=!1}render(){return o("div",null,o("div",{class:"upload-wrapper"},o("div",{class:this.loading?"photo is-loading":"photo",style:{backgroundImage:this.photoUrl?`url('${this.photoUrl}')`:null},onClick:t=>this.triggerFileInput(t),onDrop:t=>this.onDrop(t),onDragOver:t=>this.onDrag(t),onDragEnter:()=>this.onDragEnter(),onDragLeave:()=>this.onDragLeave()},!this.photoUrl&&this.initials?this.initials:null),this.showButton?o("ion-button",{fill:"clear",expand:"block",size:"small",onClick:t=>this.triggerFileInput(t)},this.buttonText,o("ion-icon",{name:"image",slot:"end"})):null),o("slot",null),o("input",{type:"file",onChange:t=>this.selectFile(t),accept:"image/*",multiple:this.multiple}))}get photoUploaderEl(){return e(this)}static get watchers(){return{value:["onPhotoChange"]}}};a.style='floodteam-input-photo .upload-wrapper{display:block;margin:0 auto;height:150px;width:150px;position:relative}floodteam-input-photo .upload-wrapper .photo{position:relative;background:var(--theme-grey);border-radius:4px;border:2px solid var(--theme-light);height:150px;width:150px;margin:0 auto;display:block;background-repeat:no-repeat;background-size:cover;background-position:center;color:var(--ion-color-medium);font-size:75px;line-height:150px;text-align:center;font-weight:bolder}floodteam-input-photo .upload-wrapper .photo.is-loading:before{border-radius:4px}floodteam-input-photo .upload-wrapper .photo.is-loading:after{border-radius:4px}floodteam-input-photo .upload-wrapper .photo:hover{cursor:pointer;border-color:var(--theme-blue)}floodteam-input-photo input[type="file"]{height:0;width:0;visibility:hidden;opacity:0;pointer-events:none;float:left}';export{a as floodteam_input_photo}