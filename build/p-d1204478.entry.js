import{r as i,c as t,B as s,h as a,H as n,d as o}from"./p-8710117e.js";import{G as e}from"./p-c2656cdf.js";import{L as r}from"./p-29d0604b.js";import"./p-e369b114.js";import"./p-2d180048.js";import"rxjs";const h=class{constructor(s){i(this,s),this.fireenjinTrigger=t(this,"fireenjinTrigger",7),this.mapMarkers=[],this.options={},this.visible=!0,this.markers=[],this.isVisible=!0}async addMarker(i){var t;this.google||(this.google=(null===(t=null===window||void 0===window?void 0:window.google)||void 0===t?void 0:t.maps)?window.google:await this.loadGoogleMaps());const s="string"==typeof i?JSON.parse(i):i,a=new this.google.maps.Marker({position:s.position,map:this.map,title:(null==s?void 0:s.name)||"",icon:(null==s?void 0:s.icon)?{url:s.icon,origin:new this.google.maps.Point(0,0),anchor:new this.google.maps.Point(15,15),scaledSize:new this.google.maps.Size(34,34),shape:{coords:[17,17,18],type:"circle"},optimized:!1}:null});return a.addListener("click",(()=>{this.onMarkerClick(a,s)})),this.mapMarkers.push(a),a}async updateMarkers(){return await this.clearMarkers(),this.markers.length>=1&&this.markers.map(this.addMarker.bind(this)),this.markers}async setMarkers(i=[]){return this.markers=i,await this.clearMarkers(),this.markers.length>=1&&this.markers.map(this.addMarker.bind(this)),this.markers}async setZoom(i){return this.map.setZoom(i)}async setCenter(i){return this.map.setCenter(i)}async clearMarkers(){var i;for(let t=0;t<this.mapMarkers.length;t++)(null===(i=this.mapMarkers[t])||void 0===i?void 0:i.setMap)&&this.mapMarkers[t].setMap(null);return this.mapMarkers=[],!0}onMarkerClick(i,t){this.map.setZoom(12),this.map.setCenter(i.getPosition()),this.fireenjinTrigger.emit({name:"markerClick",payload:{marker:i,location:t}})}getLocationCoords(i){try{e.getCurrentPosition().then((t=>{i&&"function"==typeof i&&i(t.coords)})).catch((async()=>{fetch("http://ip-api.com/json").then((async t=>{const s=await t.json();i({latitude:s.lat,longitude:s.lon})})),i&&"function"==typeof i&&i(!1)}))}catch(t){i(!1)}}async createMap(i){var t;this.google||(this.google=(null===(t=null===window||void 0===window?void 0:window.google)||void 0===t?void 0:t.maps)?window.google:await this.loadGoogleMaps()),this.map=new this.google.maps.Map(this.mapEl.querySelector("#map"),{zoom:9,center:{lat:i.latitude,lng:i.longitude}})}async loadGoogleMaps(i){return new r(this.googleMapsKey,i||{}).load()}async componentDidLoad(){var i;(null==s?void 0:s.isBrowser)&&(this.isVisible=this.visible,this.google=(null===(i=null===window||void 0===window?void 0:window.google)||void 0===i?void 0:i.maps)?window.google:await this.loadGoogleMaps(),setTimeout((()=>{this.getLocationCoords((async i=>{this.position=i||{latitude:38.6270025,longitude:-90.19940419999999},this.createMap(this.position),await this.setMarkers(this.markers)}))}),100))}render(){return a(n,{class:{"map-is-visible":this.isVisible}},a("div",{id:"map"}))}get mapEl(){return o(this)}static get watchers(){return{markers:["updateMarkers"]}}};h.style="fireenjin-map{position:relative;display:block}fireenjin-map #map{display:block;height:0px;width:100%;margin:0 auto;opacity:0;transition:all ease 0.5s}fireenjin-map.map-is-visible #map{height:var(--map-height, 300px);opacity:1}";export{h as fireenjin_map}