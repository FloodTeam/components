import{r as i,c as n,h as e,a as t}from"./p-eb2b03ce.js";let o=class{constructor(e){i(this,e),this.fireenjinUpload=n(this,"fireenjinUpload",7),this.ionInput=n(this,"ionInput",7),this.type="file",this.endpoint="upload",this.uploadData={},this.dragOver=!1}onFileChange(){if(!this.value)return!1;this.ionInput.emit({name:this.name,value:this.value})}async openFile(){const i=this.fileUploaderEl.querySelector('input[type="file"]');return i.click(),i}uploadFile(i){if(this.isLoading=!0,!window.FileReader)return;const n=new FileReader;n.onload=async n=>{2==n.target.readyState&&(n.target.error?alert("Error while reading file"):this.fireenjinUpload.emit({event:n,name:this.name,endpoint:this.endpoint,data:Object.assign({id:this.documentId,type:this.type,fileName:this.fileName,file:i,path:this.path,encodedContent:n.target.result},this.uploadData)}))},n.readAsDataURL(i)}selectFile(i){this.isLoading=!0;const n=i.target.files[0];this.selectedFile=n.name,this.uploadFile(n)}onDrop(i){if(i.preventDefault(),i.dataTransfer.items){for(var n=0;n<i.dataTransfer.items.length;n++)if("file"===i.dataTransfer.items[n].kind){var e=i.dataTransfer.items[n].getAsFile();this.selectedFile=e.name,this.uploadFile(e)}}else for(n=0;n<i.dataTransfer.files.length;n++){const e=i.dataTransfer.files[n];this.selectedFile=e.name,this.uploadFile(e),console.log("... file["+n+"].name = "+e.name)}this.dragOver=!1}onDrag(i){i.preventDefault()}onDragOver(i){i.preventDefault()}onDragEnter(i){console.log("Show UI to drop file",i),this.dragOver=!0}onDragLeave(i){console.log("Hide UI to drop file",i),this.dragOver=!1}render(){return e("ion-card",{class:{"drag-over":this.dragOver},onDragEnter:i=>this.onDragEnter(i),onDragOver:i=>this.onDragOver(i),onDrag:i=>this.onDrag(i),onDrop:i=>this.onDrop(i),onDragLeave:i=>this.onDragLeave(i),onClick:()=>this.openFile()},e("ion-item",{lines:"none"},e("ion-icon",{name:this.icon?this.icon:"document",slot:"start"}),e("div",null,e("h2",null,this.dragOver?"Drop File Here":this.label?this.label:"Upload a File"),e("p",null,this.selectedFile?this.selectedFile:this.defaultValue?this.defaultValue:"Select a letterhead"))),e("input",{type:"file",onChange:i=>this.selectFile(i),accept:this.accept?this.accept:null,value:"blah"}))}get fileUploaderEl(){return t(this)}static get watchers(){return{value:["onFileChange"]}}};o.style="fireenjin-input-file ion-card{width:95%;margin:15px auto;background-color:var(--ion-color-light-tint);--background-color:var(--ion-color-light-tint);padding:0}fireenjin-input-file ion-card.drag-over{opacity:0.8}fireenjin-input-file ion-card ion-item{padding:5px 0;background-color:var(--ion-color-light-tint);--ion-color-base:var(--ion-color-light-tint);--background:var(--ion-color-light-tint);pointer-events:none}fireenjin-input-file ion-card ion-item ion-icon{height:50px;width:50px;color:var(--ion-color-medium)}fireenjin-input-file ion-card ion-item h2{font-size:20px;color:var(--ion-color-dark);margin:0}fireenjin-input-file ion-card ion-item p{color:var(--ion-color-darker-grey);margin:0}fireenjin-input-file ion-card:hover{cursor:pointer}fireenjin-input-file ion-card:hover h2{color:var(--ion-color-primary)}fireenjin-input-file ion-card:hover ion-icon{color:var(--ion-color-primary)}fireenjin-input-file input{float:left;height:0;width:0;visibility:hidden}";export{o as fireenjin_input_file}