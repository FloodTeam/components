import{r as t,c as i,h as s,H as a,a as e}from"./p-eb2b03ce.js";import{G as o}from"./p-86931393.js";const r=class{constructor(s){t(this,s),this.floodteamMapMarkerClick=i(this,"floodteamMapMarkerClick",7),this.mapMarkers=[],this.visible=!0,this.markers=[],this.isVisible=!0}async addMarker(t){const i="string"==typeof t?JSON.parse(t):t,s=new google.maps.Marker({position:i.position,map:this.map,title:i.name,icon:{url:i.icon,origin:new google.maps.Point(0,0),anchor:new google.maps.Point(15,15),scaledSize:new google.maps.Size(34,34),shape:{coords:[17,17,18],type:"circle"},optimized:!1}});return s.addListener("click",(()=>{this.onMarkerClick(s,i)})),this.mapMarkers.push(s),s}async setMarkers(t=[]){return this.markers="string"==typeof t?JSON.parse(t):t.length>0?t:this.mapEl.getAttribute("markers")?JSON.parse(this.mapEl.getAttribute("markers")):[]}async setZoom(t){return this.map.setZoom(t)}async setCenter(t){return this.map.setCenter(t)}async clearMarkers(){for(let t=0;t<this.markers.length;t++)this.mapMarkers[t].setMap(null);return this.mapMarkers=[],!0}onMarkerClick(t,i){this.map.setZoom(12),this.map.setCenter(t.getPosition()),this.floodteamMapMarkerClick.emit({marker:t,location:i})}getLocationCoords(t){try{o.getCurrentPosition().then((i=>{t&&"function"==typeof t&&t(i.coords)})).catch((async()=>{fetch("http://ip-api.com/json").then((async i=>{const s=await i.json();t({latitude:s.lat,longitude:s.lon})})),t&&"function"==typeof t&&t(!1)}))}catch(i){t(!1)}}createMap(t){this.map=new google.maps.Map(this.mapEl.querySelector("#map"),{zoom:9,center:{lat:t.latitude,lng:t.longitude}})}componentDidLoad(){this.isVisible=this.visible,this.getLocationCoords((async t=>{this.position=t||{latitude:38.6270025,longitude:-90.19940419999999},this.createMap(this.position),await this.setMarkers(this.markers),this.markers.length>=1&&this.markers.map(this.addMarker.bind(this))}))}render(){return s(a,{class:{"map-is-visible":this.isVisible}},s("div",{id:"map"}))}get mapEl(){return e(this)}};r.style="floodteam-map{position:relative;display:block}floodteam-map #map{display:block;height:0px;width:100%;margin:0 auto;opacity:0;transition:all ease 0.5s}floodteam-map.map-is-visible #map{height:var(--map-height, 300px);opacity:1}floodteam-map.map-is-visible tmg-search{margin:-35px auto 0}";export{r as floodteam_map}