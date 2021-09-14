import{r as t,c as i,h as a}from"./p-0daa6e6f.js";const o=class{constructor(a){t(this,a),this.floodteamFeedAction=i(this,"floodteamFeedAction",7)}render(){return a("ion-card",{style:this.backgroundImage?{backgroundImage:`url('${this.backgroundImage}')`}:null},a("ion-item",{class:{"has-thumbnail":!!this.image}},this.image&&a("ion-thumbnail",{slot:"start"},a("img",{src:this.image})),a("ion-label",{style:this.image?null:{paddingLeft:"0px"}},a("h3",null,this.heading),this.subtext&&a("h5",null,this.subtext),a("div",{class:"tag-list"},this.tags&&this.tags.map((t=>a("ion-chip",null,t)))),a("p",null,this.details))),a("ion-buttons",null,this.actionButtons&&this.actionButtons.map((t=>a("ion-button",{size:t.size?t.size:"large",fill:t.fill?t.fill:"solid",color:t.color?t.color:"success",href:t.href?t.href:null,onClick:i=>this.floodteamFeedAction.emit({event:i,name:t.action})},t.iconStart&&a("ion-icon",{name:t.iconStart,slot:"start"}),t.text,t.iconEnd&&a("ion-icon",{name:t.iconEnd,slot:"end"}))))))}};o.style='floodteam-feed-card ion-card{position:relative;border-radius:3px;margin:15px 0;background-size:cover;background-position:center;background-repeat:no-repeat;min-height:100px}floodteam-feed-card ion-card ion-item.has-thumbnail{--padding-start:0}floodteam-feed-card ion-thumbnail{position:relative;height:100px;width:130px;margin-top:0;-webkit-mask-image:linear-gradient(to top, transparent 0%, black 20%);mask-image:linear-gradient(to top, transparent 0%, black 20%)}floodteam-feed-card ion-thumbnail:after{position:absolute;top:0;left:0;right:0;bottom:0;content:" ";background:var(--ion-background-color);display:block;height:100%;width:100%;-webkit-mask-image:linear-gradient(to right, transparent 80%, black 100%);mask-image:linear-gradient(to right, transparent 80%, black 100%);z-index:1}floodteam-feed-card ion-card h3{display:block;padding:0;margin:0;font-size:16px;font-weight:bold;font-family:var(--theme-font-primary);text-transform:uppercase;color:var(--ion-text-color);letter-spacing:1px}floodteam-feed-card ion-card h5{font-size:20px;line-height:30px;display:block;position:relative;margin:4px 0 0 0;padding-right:20px;font-family:var(--theme-font-primary);color:var(--theme-grey);font-weight:500;letter-spacing:1px}floodteam-feed-card ion-card .tag-list ion-chip{color:var(--ion-text-color);opacity:0.8;transition:opacity ease 0.3s;font-size:10px;padding-left:7px !important;padding-right:7px !important;height:24px;text-transform:capitalize;margin:3px 5px 3px 0}floodteam-feed-card ion-card .tag-list ion-chip:hover{opacity:1}floodteam-feed-card ion-card p{font-size:18px;display:block;position:relative;margin:0;font-family:"Bitter", serif;color:var(--theme-light-grey);font-weight:500;letter-spacing:1px}floodteam-feed-card ion-buttons{display:flex !important;padding:15px !important}floodteam-feed-card ion-buttons ion-button{display:block !important;margin-left:auto !important}';export{o as floodteam_feed_card}