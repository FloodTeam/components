import{r as i,h as r}from"./p-eb2b03ce.js";const t=class{constructor(r){i(this,r)}render(){var i,t,a;return r("div",{class:"avatar-image",style:{backgroundImage:!(null===(i=this.src)||void 0===i?void 0:i.length)&&this.initials?`url('https://avatars.dicebear.com/api/initials/${this.initials}.svg')`:`url('${(null===(t=this.src)||void 0===t?void 0:t.length)?this.src:(null===(a=this.fallback)||void 0===a?void 0:a.length)?this.fallback:"/assets/images/default-icon.png"}')`,height:this.size?this.size:"50px",width:this.size?this.size:"50px"}})}};t.style="fireenjin-avatar{position:relative}fireenjin-avatar .avatar-image{display:block;border-radius:4px;border:1px solid var(--ion-color-light-shade);background-color:var(--ion-color-light);background-size:cover;background-position:center;font-weight:bolder;text-align:center;color:var(--ion-color-medium);text-decoration:none}";export{t as fireenjin_avatar}