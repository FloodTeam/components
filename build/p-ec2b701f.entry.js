import{r as e,c as o,h as i}from"./p-eb2b03ce.js";import{C as r}from"./p-fff1b772.js";import"./p-eab67c09.js";const t=class{constructor(i){e(this,i),this.fireenjinShareClose=o(this,"fireenjinShareClose",7)}openPopup(e,o){let i;if(e.preventDefault(),"facebook"===o)i=`https://www.facebook.com/dialog/share?app_id=${this.facebookAppId}&display=popup&href=${this.url}`;else if("google"===o)i=`https://plus.google.com/share?url=${this.url}`;else{if("twitter"!==o)return!1;i=`https://twitter.com/intent/tweet?url=${this.url}&text=${this.text}`}this.fireenjinShareClose.emit({event:e,type:o}),window.open(i,"Share","google"===o?"height=600,width=400":"height=400,width=600")}componentDidLoad(){new r(this.copyItemEl)}render(){return i("ion-list",null,i("ion-item",{class:"share-twitter",onClick:e=>this.openPopup(e,"twitter")},i("ion-icon",{slot:"end",name:"logo-twitter"}),"Share on Twitter"),i("ion-item",{class:"share-facebook",onClick:e=>this.openPopup(e,"facebook")},i("ion-icon",{slot:"end",name:"logo-facebook"}),"Share on Facebook"),i("ion-item",{ref:e=>this.copyItemEl=e,class:"share-clipboard","data-clipboard-text":this.url},i("ion-icon",{slot:"end",name:"clipboard"}),"Copy to Clipboard"))}};t.style="fireenjin-share ion-item:hover{cursor:pointer}fireenjin-share .share-twitter ion-icon{color:#1da1f3}fireenjin-share .share-twitter ion-icon svg{fill:#1da1f3}fireenjin-share .share-twitter:hover .item{color:#1da1f3}fireenjin-share .share-facebook ion-icon{color:#3b5998}fireenjin-share .share-facebook ion-icon svg{fill:#3b5998}fireenjin-share .share-facebook:hover .item{color:#3b5998}fireenjin-share .share-google ion-icon{color:#dd4b38}fireenjin-share .share-google ion-icon svg{fill:#dd4b38}fireenjin-share .share-google:hover .item{color:#dd4b38}";export{t as fireenjin_share}