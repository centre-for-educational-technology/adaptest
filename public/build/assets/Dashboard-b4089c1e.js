import{l as m,m as Q,v as z,n as O,i as X,u as T,y as ee}from"./pin-eef2b704.js";import{_ as oe,a as te}from"./AppLayout-950c99a8.js";import"./proj4leaflet-9b7f940e.js";import{latLng as se,latLngBounds as ae}from"./leaflet-src.esm-9c358b30.js";import{o as u,e as h,a as t,g as Z,t as I,n as F,d as n,p as ne,q as le,c as w,w as f,u as a,b as r,f as ie,h as D,F as P,s as re,m as ce,O as U}from"./app-9bf64e70.js";const de={class:"modal-box"},ue={class:"font-bold text-lg"},pe={class:"font-bold text-blue-500"},me=t("p",{class:"py-4"},"Now set the marker of your observation by clicking on the map",-1),ve={class:"modal-action"},fe={__name:"LakeModal",props:{selectedAreaName:{type:String,required:!0},showModal:{type:Boolean,required:!0}},setup(g){return(_,c)=>(u(),h("div",{class:F(["modal",{"modal-open":g.showModal}])},[t("div",de,[t("h3",ue,[Z("You have chosen "),t("span",pe,I(g.selectedAreaName),1)]),me,t("div",ve,[t("button",{class:"btn",onClick:c[0]||(c[0]=p=>_.$emit("update:showModal",!1))}," Ok ")])])],2))}},ge=t("h2",{class:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight"}," Dashboard ",-1),be={class:"relative",style:{height:"calc(100vh - 138px)",width:"100%"}},he={key:0,class:"absolute inset-0 flex flex-col items-center justify-center bg-primary opacity-80 z-10"},_e={class:"spinner z-50"},ye={class:"loader"},xe={class:"loader-bg"},we={class:"flex items-center justify-center"},ke=t("div",{class:"drops"},[t("div",{class:"drop1"}),t("div",{class:"drop2"})],-1),Be=t("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.1"},[t("defs",null,[t("filter",{id:"liquid"},[t("feGaussianBlur",{in:"SourceGraphic",stdDeviation:"10",result:"blur"}),t("feColorMatrix",{in:"blur",mode:"matrix",values:"1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7",result:"liquid"})])])],-1),je={class:"text-white flex items-center justify-center text-2xl font-semibold"},Le=t("h3",{class:"font-bold text-lg"},"Please select a water source first",-1),Me={__name:"Dashboard",props:{observation_spots:Array},setup(g){const _=g,c=n(null),p=n(4),k=n([51.505,-.09]);n(!0),n(!0),n(!0),n(!1);let B=n(""),b=n(!1),v=n(!1);function G(){b.value=!b.value}function j(e){return{fillColor:e.properties&&e.properties.color?e.properties.color:"blue",color:"white",weight:2,opacity:1,fillOpacity:.7}}let y=n(!1),d=null,L=n(!1);const S=(e,o)=>{o.on("click",()=>{d&&d.setStyle({weight:3,color:"#3388ff"}),B=e.properties.nimi,o.setStyle({weight:5,color:"red"}),v.value=!0,console.log("show modal"),d=o,s.openTooltip()});const s=o.bindTooltip(e.properties.nimi,{permanent:!1,direction:"center",className:"my-tooltip"})};let N=n(!0),K=se(58.379,24.554),q=ae([60.4349,29.4338],[56.7458,20.373]),E=[],l=null;function J(){console.log("map ready"),l=c.value.leafletObject,l&&l.scrollWheelZoom.disable()}const C=m.icon({iconUrl:Q,iconSize:[55,55],iconAnchor:[25,55],popupAnchor:[0,-55],className:"marker-icon"});function R(e){if(!d){b.value=!0;return}if(e.originalEvent.target.classList.contains("leaflet-interactive"))return;const o=e.latlng,s=m.marker(o,{icon:C}),i=m.popup().setContent(`
      <p class="mb-2 text-lg font-semibold text-gray-900">Add a new observation spot?</p>
      <div class="flex space-x-2">
        <button id="yesButton" class="px-4 py-2 btn btn-primary">Yes</button>
        <button id="noButton" class="px-4 py-2 btn">No</button>
      </div>
    `);s.bindPopup(i),ce(()=>{l.invalidateSize(),l.addLayer(s),s.openPopup(),document.getElementById("yesButton").addEventListener("click",()=>{E.push(e.latlng),Y(e.latlng)}),document.getElementById("noButton").addEventListener("click",()=>{l.removeLayer(s)}),l.on("popupclose",()=>{l.removeLayer(s)})})}function V(e){console.log("mapInstance:",l);const o=`
      <p class="mb-2 text-lg font-semibold text-gray-900">Add a new observation to the spot ${e.name}?</p>
      <div class="flex space-x-2">
        <button id="yesButton" class="px-4 py-2 btn btn-primary">Yes</button>
        <button id="noButton" class="px-4 py-2 btn">No</button>
      </div>
    `;m.popup().setLatLng([e.latitude,e.longitude]).setContent(o).openOn(l),document.getElementById("yesButton").addEventListener("click",()=>{W(e.id)}),document.getElementById("noButton").addEventListener("click",()=>{l.closePopup()})}function Y(e){if(console.log("add new spot and observation"),d){const o=JSON.stringify(e),s=d.feature.properties.nimi,i=d.feature.properties.kr_kood,x=null;U.get(`/observations/create?coordinates=${o}&name=${s}&water_body_kr_code=${i}&observation_spot_id=${x}`)}}function W(e){console.log("add new observation"),U.get(`/observations/create?observation_spot_id=${e}`)}var A=null,$=null;let M=n("Laen järved...");var H=new m.Proj.CRS("EPSG:3301","+proj=lcc +lat_1=59.33333333333334 +lat_2=58 +lat_0=57.51755393055556 +lon_0=24 +x_0=500000 +y_0=6375000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",{resolutions:[4e3,2e3,1e3,500,250,125,62.5,31.25,15.625,7.8125,3.90625,1.953125,.9765625,.48828125,.244140625,.122070313,.061035156,.030517578,.015258789],origin:[40500,5993e3],bounds:m.bounds([40500,5993e3],[1064500,7017e3])});return ne(async()=>{const e=await caches.open("geojson-cache");let o=await e.match("/geojson/jarved");o||(o=await fetch("/geojson/jarved"),e.put("/geojson/jarved",o.clone()));let s=await o.json();M.value="Laen vooluveekogud...",A=s,o=await e.match("/geojson/vooluvesi"),o||(o=await fetch("/geojson/vooluvesi"),e.put("/geojson/vooluvesi",o.clone())),s=await o.json(),$=s,y.value=!0,L.value=!0}),navigator.geolocation&&navigator.geolocation.getCurrentPosition(e=>{k.value=[e.coords.latitude,e.coords.longitude],p.value=9},e=>{p.value=9,console.error("Error obtaining geolocation: ",e)}),le([k,p],([e,o])=>{c.value&&(c.value={center:e,zoom:o})}),(e,o)=>(u(),w(oe,{title:"Dashboard"},{header:f(()=>[ge]),default:f(()=>[t("main",be,[a(L)?ie("",!0):(u(),h("div",he,[t("div",_e,[t("div",ye,[t("div",xe,[t("span",we,[r(te,{class:"w-20 mt-4 h-20 fill-white"})])]),ke]),Be,t("p",je,I(a(M)),1)])])),r(a(X),{ref_key:"map",ref:c,crs:a(H),zoom:p.value,"onUpdate:zoom":o[0]||(o[0]=s=>p.value=s),useGlobalLeaflet:!0,center:a(K),bounds:a(q),maxZoom:14,minZoom:3,scrollWheelZoom:!1,onClick:R,onReady:J},{default:f(()=>[r(a(z),{url:"https://tiles.maaamet.ee/tm/tms/1.0.0/vreljeef/{z}/{x}/{y}.png&ASUTUS=TLU&KESKKOND=ADAPTEST",tms:a(N),"full-screen":!1,worldCopyJump:!0,"z-index":1,options:{maxNativeZoom:13,maxZoom:13,minZoom:3}},null,8,["tms"]),r(a(z),{url:"https://tiles.maaamet.ee/tm/tms/1.0.0/hybriid/{z}/{x}/{y}.png&ASUTUS=TLU&KESKKOND=ADAPTEST",attribution:"Maa-ameti kaart, <a href='http://www.maaamet.ee'>Maa-amet</a>",tms:a(N),"full-screen":!1,worldCopyJump:!0,"z-index":2,options:{maxNativeZoom:13,maxZoom:13,minZoom:3}},null,8,["tms"]),r(a(O),{visible:a(y),options:{style:j,onEachFeature:S},geojson:a(A)},null,8,["visible","options","geojson"]),r(a(O),{visible:a(y),options:{style:j,onEachFeature:S},geojson:a($)},null,8,["visible","options","geojson"]),(u(!0),h(P,null,D(a(E),(s,i)=>(u(),w(a(T),{key:i,"lat-lng":s},{default:f(()=>[r(a(ee),{ref_for:!0,ref:"popup"},{default:f(()=>[Z(" Popup content ")]),_:1},512)]),_:2},1032,["lat-lng"]))),128)),(u(!0),h(P,null,D(a(_).observation_spots.data,(s,i)=>(u(),w(a(T),{key:i,"lat-lng":[s.latitude,s.longitude],icon:a(C),onClick:x=>V(s)},null,8,["lat-lng","icon","onClick"]))),128))]),_:1},8,["crs","zoom","center","bounds"]),r(fe,{showModal:a(v),selectedAreaName:a(B),"onUpdate:showModal":o[1]||(o[1]=s=>re(v)?v.value=s:v=s)},null,8,["showModal","selectedAreaName"]),t("div",{class:F(["modal",{"modal-open":a(b)}])},[t("div",{class:"modal-box"},[Le,t("div",{class:"modal-action"},[t("button",{class:"btn",onClick:G}," Ok ")])])],2)])]),_:1}))}};export{Me as default};