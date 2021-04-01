import{r as t,c as o,h as a}from"./p-5c1a6496.js";const e=class{constructor(a){t(this,a),this.floodteamClick=o(this,"floodteamClick",7),this.active=!1,this.buttonProps={},this.disableShrink=!1}render(){return a("ion-card",{class:{widget:!0,active:this.active,"disable-shrink":this.disableShrink},href:!this.buttonText&&this.href?this.href:null},a("div",{class:"widget__photo",onClick:t=>this.floodteamClick.emit({event:t}),style:this.photo?{backgroundImage:`url('${this.photo}')`}:null}),a("slot",{name:"before"}),this.buttonText?a("ion-button",{class:"widget__button",href:this.href},this.buttonText):null,a("div",{class:"widget__details"},a("slot",null)))}};e.style='floodteam-snapshot-card{height:400px;font-family:var(\n    --floodteam-snapshot-card-font-family,\n    var(--theme-font-primary, Arial, Helvetica, sans-serif)\n  );display:block}floodteam-snapshot-card floodteam-badge{--floodteam-badge-background:var(--theme-success, green);--floodteam-badge-color:#ffffff;position:absolute;top:5px;right:5px;display:block;transition:top ease-out 0.3s}floodteam-snapshot-card .widget{display:block;font-family:Arial, Helvetica, sans-serif;width:100%;margin:0 auto;max-width:430px;min-width:250px;height:375px;border:1px solid rgba(0, 0, 0, 0.2);background-color:var(--ion-background-color);border-radius:4px;overflow:hidden;position:relative;-webkit-box-shadow:0px 4px 15px 0px rgba(50, 50, 50, 0.32);-moz-box-shadow:0px 4px 15px 0px rgba(50, 50, 50, 0.32);box-shadow:0px 4px 15px 0px rgba(50, 50, 50, 0.32);-webkit-transition:0.8s cubic-bezier(0.165, 0.84, 0.44, 1);-moz-transition:0.8s cubic-bezier(0.165, 0.84, 0.44, 1);transition:0.8s cubic-bezier(0.165, 0.84, 0.44, 1);margin-bottom:25px}floodteam-snapshot-card .widget:hover .widget__button,floodteam-snapshot-card .widget.active .widget__button,floodteam-snapshot-card .widget.disable-shrink .widget__button{top:32px}floodteam-snapshot-card .widget:not(.disable-shrink):hover .widget__photo,floodteam-snapshot-card .widget.active .widget__photo{height:80px;-webkit-transform:scale(1.3);-moz-transform:scale(1.3);-ms-transform:scale(1.3);-o-transform:scale(1.3);transform:scale(1.3)}floodteam-snapshot-card .widget:hover .widget__photo:after,floodteam-snapshot-card .widget.active .widget__photo:after{opacity:1}floodteam-snapshot-card .widget:hover .widget__overlay,floodteam-snapshot-card .widget.active .widget__overlay{visibility:visible;opacity:1}floodteam-snapshot-card .widget:not(.disable-shrink):hover floodteam-badge,floodteam-snapshot-card .widget.active floodteam-badge{top:-100px}floodteam-snapshot-card .widget__photo{width:100%;height:250px;background-color:#666;background-repeat:no-repeat;background-position:center;background-size:cover;-webkit-transition:0.8s cubic-bezier(0.165, 0.84, 0.44, 1);-moz-transition:0.8s cubic-bezier(0.165, 0.84, 0.44, 1);transition:0.8s cubic-bezier(0.165, 0.84, 0.44, 1);position:relative;-webkit-transform:scale(1);-moz-transform:scale(1);-ms-transform:scale(1);-o-transform:scale(1);transform:scale(1)}floodteam-snapshot-card .widget__photo:after{-webkit-transition:0.8s cubic-bezier(0.165, 0.84, 0.44, 1);-moz-transition:0.8s cubic-bezier(0.165, 0.84, 0.44, 1);transition:0.8s cubic-bezier(0.165, 0.84, 0.44, 1);content:"";width:100%;height:100%;position:absolute;background-color:rgba(0, 0, 0, 0.6);top:0;left:0;opacity:0;z-index:10}floodteam-snapshot-card .widget__details{padding:20px;position:relative}floodteam-snapshot-card .widget__badges{position:absolute;right:30px;top:30px}floodteam-snapshot-card .widget__badge{font-size:12px;display:inline-block;border:1px solid rgba(0, 0, 0, 0.2);color:rgba(0, 0, 0, 0.5);width:40px;text-align:center;padding:2px 0;border-radius:3px}floodteam-snapshot-card .widget__badge.widget__badge--rating{background-color:#14c852;border-color:#14c852;color:#fff}floodteam-snapshot-card .widget__name{font-size:18px;color:rgba(var(--ion-text-color-rgb), 0.8);font-weight:600;width:100%;padding:0 80px 0 0;text-transform:capitalize}floodteam-snapshot-card .widget__type{font-size:12px;color:rgba(var(--ion-text-color-rgb), 0.6);text-transform:capitalize}floodteam-snapshot-card .widget__info span{color:rgba(var(--ion-text-color-rgb), 0.7);font-size:12px;display:block;width:100%;margin-bottom:4px}floodteam-snapshot-card .widget__info span:first-of-type{margin-top:15px}floodteam-snapshot-card .widget__table{width:100%}floodteam-snapshot-card .widget__table tr td{color:rgba(var(--ion-text-color-rgb), 0.7);line-height:25px}floodteam-snapshot-card .widget__table tr td:first-child{color:rgba(var(--ion-text-color-rgb), 0.4)}floodteam-snapshot-card .widget__overlay{visibility:hidden;opacity:0;position:absolute;height:100%;background-color:rgba(var(--ion-text-color-rgb), 0.6)}floodteam-snapshot-card .widget__button{text-decoration:none;cursor:pointer;-webkit-transition:0.8s cubic-bezier(0.165, 0.84, 0.44, 1);-moz-transition:0.8s cubic-bezier(0.165, 0.84, 0.44, 1);transition:0.8s cubic-bezier(0.165, 0.84, 0.44, 1);position:absolute;margin:0 auto;width:70%;text-align:center;text-transform:uppercase;letter-spacing:1px;font-weight:600;font-size:12px;left:0;right:0;top:-40px}';export{e as floodteam_snapshot_card}