import{y as M,l as E,z as K,o as b,e as k,a as o,t as c,F as j,h as N,K as Z,T as A,d as x,s as D,b as t,w as S,u as e,n as I,i as L,c as B,f as R,g as F,j as G}from"./app-fe5769c9.js";import{I as u,L as n}from"./Label-4373d3e8.js";import{_ as $}from"./_plugin-vue_export-helper-c27b6911.js";import{C as p}from"./Checkbox-4591674b.js";import{l as h,m as W,v as q,u as H,i as J}from"./pin-2c91e02c.js";const Y=M({props:["message"]}),Q={class:"text-sm text-red-600"};function X(d,m,r,s,y,w){return E((b(),k("div",null,[o("p",Q,c(d.message),1)],512)),[[K,d.message]])}const i=$(Y,[["render",X]]),ee=M({props:["modelValue","options","multiple","placeholder","placeholderEnabled"],emits:["update:modelValue"],methods:{focus(){this.$refs.select.focus()}}}),se=["value","multiple"],te=["disabled"],oe=["value"];function le(d,m,r,s,y,w){return b(),k("select",{ref:"select",value:d.modelValue,onInput:m[0]||(m[0]=_=>d.$emit("update:modelValue",_.target.value)),multiple:d.multiple,class:"w-full select select-bordered"},[o("option",{disabled:!d.placeholderEnabled,value:""},c(d.placeholder),9,te),(b(!0),k(j,null,N(d.options,(_,v)=>(b(),k("option",{value:v},c(_),9,oe))),256))],40,se)}const g=$(ee,[["render",le]]),ae={class:"px-4 max-w-screen-lg card bg-white dark:bg-base-100 shadow-xl my-5 mx-auto py-5 sm:p-6 rounded-md"},re=o("div",{class:"alert mb-5 alert-info"},[o("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",class:"stroke-current shrink-0 w-6 h-6"},[o("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})]),o("span",null,"Not all fields are required. You can fill only the ones you know.")],-1),ie={class:"hero-content text-center rounded bg-blue-700"},ne={class:"max-w-md"},de={class:"text-xl text-white font-bold"},ce={class:"grid grid-cols-12 gap-6"},me={class:"col-span-12"},ue={class:"col-span-12"},pe={class:"col-span-12"},_e={class:"col-span-6"},ve={class:"col-span-6"},ge={class:"col-span-6"},be={class:"col-span-6"},fe={class:"col-span-6"},he={class:"col-span-6"},ke={class:"col-span-6"},ye={class:"col-span-6"},xe={class:"col-span-6"},we={class:"col-span-6"},Ve={class:"col-span-6"},Ue={class:"col-span-6"},Se=o("div",{class:"col-span-12"},[o("div",{class:"divider"})],-1),qe=o("h3",{class:"col-span-12 text-center text-2xl font-bold"},"Hüdromorfoloogia",-1),Me=o("h4",{class:"col-span-12 text-center text-xl font-bold"},"Veepiirist maismaa poole (kuni 10 m)",-1),je={class:"col-span-12"},$e={class:"flex items-center"},Pe=o("span",{class:"ml-2 text-sm text-gray-600"},c("Erosioon kaldaalalt"),-1),Oe={class:"col-span-12"},Te={class:"col-span-12"},ze={class:"col-span-12"},Ce=o("div",{class:"col-span-12"},[o("div",{class:"divider"})],-1),Ee=o("h4",{class:"col-span-12 text-center text-xl font-bold"},"Veepiirist veekogu poole (kuni 10 m)",-1),Ke={class:"col-span-12"},Ne={class:"flex items-center"},Ze=o("span",{class:"ml-2 text-sm text-gray-600"},c("Puujuures, oksad vms ulatuvad vett"),-1),Ae={class:"col-span-12"},De={class:"col-span-12"},Ie=o("div",{class:"col-span-12"},[o("div",{class:"divider"})],-1),Le=o("h4",{class:"col-span-12 text-center text-xl font-bold"},"Inimmõju (~50 m raadiuses vaatluskohast)",-1),Be={class:"col-span-12"},Re={class:"flex items-center"},Fe=o("span",{class:"ml-2 text-sm text-gray-600"},c("Ehitisi"),-1),Ge={class:"col-span-12"},We={class:"flex items-center"},He=o("span",{class:"ml-2 text-sm text-gray-600"},c("Põllumajanduslik tegevus"),-1),Je={class:"col-span-12"},Ye={class:"flex items-center"},Qe=o("span",{class:"ml-2 text-sm text-gray-600"},c("Teed, parkimisplatsid"),-1),Xe={class:"col-span-12"},es={class:"flex items-center"},ss=o("span",{class:"ml-2 text-sm text-gray-600"},c("Park"),-1),ts={class:"col-span-12"},os={class:"flex items-center"},ls=o("span",{class:"ml-2 text-sm text-gray-600"},c("Supelrand"),-1),as={class:"col-span-12"},rs={class:"flex items-center"},is=o("span",{class:"ml-2 text-sm text-gray-600"},c("Paadisild, slip"),-1),ns={class:"col-span-12"},ds={class:"flex items-center"},cs=o("span",{class:"ml-2 text-sm text-gray-600"},c("Kaldakindlustusrajatised"),-1),ms={class:"col-span-12"},us={class:"flex items-center"},ps=o("span",{class:"ml-2 text-sm text-gray-600"},c("Paisud, sillad"),-1),_s={class:"col-span-12"},vs={class:"flex items-center"},gs=o("span",{class:"ml-2 text-sm text-gray-600"},c("Kaldavööndi prügistamist"),-1),bs={class:"col-span-12"},fs={class:"flex items-center"},hs=o("span",{class:"ml-2 text-sm text-gray-600"},c("Veereostust"),-1),ks={class:"col-span-12"},ys={class:"flex justify-end"},qs={__name:"Form",props:{observation:{type:Object,required:!1,default:null},water_flows:{type:Object,required:!0},natures:{type:Object,required:!0},riparian_vegetations:{type:Object,required:!0},vegetation_coverages:{type:Object,required:!0},bottoms:{type:Object,required:!0},aquatic_vegetations:{type:Object,required:!0},coordinates:{type:Object,required:!0},name:{type:String,required:!0},water_body_sys_id:{type:String,required:!0},observation_spot_id:{type:String,required:!0,default:null}},setup(d){const m=d;Z();let r=m.observation!==null,s=A({measuring_time:r?observation.measuring_time:"",odor:r?observation.odor:"",color_turbidity:r?observation.color_turbidity:"",ph:r?observation.ph:"",water_temperature:r?observation.water_temperature:"",air_temperature:r?observation.air_temperature:"",specific_conductance:r?observation.specific_conductance:"",total_dissolved_solids:r?observation.total_dissolved_solids:"",nitrate:r?observation.nitrate:"",bicarbonate:r?observation.bicarbonate:"",redox_potential:r?observation.redox_potential:"",dissolved_oxygen_percent:r?observation.dissolved_oxygen_percent:"",dissolved_oxygen_ppm:r?observation.dissolved_oxygen_ppm:"",discharge:r?observation.discharge:"",water_flow:r?observation.water_flow:"",erosion:r?observation.erosion:!1,nature:r?observation.nature:"",riparian_vegetation:r?observation.riparian_vegetation:"",vegetation_coverage:r?observation.vegetation_coverage:"",tree_roots:r?observation.tree_roots:!1,bottom:r?observation.bottom:"",aquatic_vegetation:r?observation.aquatic_vegetation:"",buildings:r?observation.buildings:!1,agricultural_activity:r?observation.agricultural_activity:!1,roads:r?observation.roads:!1,park:r?observation.park:!1,beach:r?observation.beach:!1,boat_bridge:r?observation.boat_bridge:!1,shore_facility:r?observation.shore_facility:!1,dams:r?observation.dams:!1,littering:r?observation.littering:!1,water_pollution:r?observation.water_pollution:!1,water_body_sys_id:m.water_body_sys_id,observation_spot_id:m.observation_spot_id});const y=x(null),w=x(null),_=x(10);let v=null,U=x(!0),P=h.latLng(58.379,24.554),O=h.latLngBounds([60.4349,29.4338],[56.7458,20.373]);var T=new h.Proj.CRS("EPSG:3301","+proj=lcc +lat_1=59.33333333333334 +lat_2=58 +lat_0=57.51755393055556 +lon_0=24 +x_0=500000 +y_0=6375000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",{resolutions:[4e3,2e3,1e3,500,250,125,62.5,31.25,15.625,7.8125,3.90625,1.953125,.9765625,.48828125,.244140625,.122070313,.061035156,.030517578,.015258789],origin:[40500,5993e3],bounds:h.bounds([40500,5993e3],[1064500,7017e3])});const z=h.icon({iconUrl:W,iconSize:[55,55],iconAnchor:[25,55],popupAnchor:[0,-55]});D(m.coordinates,f=>{f&&v&&v.setView(f,_.value)});function C(){console.log("map ready"),v=y.value.leafletObject,v&&(v.scrollWheelZoom.disable(),m.coordinates&&v.setView(m.coordinates,_.value))}let V=()=>{s.transform(f=>({...f,water_body_sys_id:m.water_body_sys_id,observation_spot_id:m.observation_spot_id})),console.log(s),s.post(route("observations.store"),{preserveScroll:!0})};return(f,l)=>(b(),k(j,null,[t(e(J),{ref_key:"map",ref:y,crs:e(T),zoom:_.value,"onUpdate:zoom":l[0]||(l[0]=a=>_.value=a),style:{height:"400px",width:"100%"},useGlobalLeaflet:!1,center:e(P),bounds:e(O),maxZoom:14,minZoom:3,scrollWheelZoom:!1,onReady:C},{default:S(()=>[t(e(q),{url:"https://tiles.maaamet.ee/tm/tms/1.0.0/vreljeef/{z}/{x}/{y}.png&ASUTUS=TLU&KESKKOND=ADAPTEST",tms:e(U),"full-screen":!1,worldCopyJump:!0,"z-index":1,options:{maxNativeZoom:13,maxZoom:13,minZoom:3}},null,8,["tms"]),t(e(q),{url:"https://tiles.maaamet.ee/tm/tms/1.0.0/hybriid/{z}/{x}/{y}.png&ASUTUS=TLU&KESKKOND=ADAPTEST",attribution:"Maa-ameti kaart, <a href='http://www.maaamet.ee'>Maa-amet</a>",tms:e(U),"full-screen":!1,worldCopyJump:!0,"z-index":2,options:{maxNativeZoom:13,maxZoom:13,minZoom:3}},null,8,["tms"]),e(m).coordinates?(b(),B(e(H),{key:0,"lat-lng":e(m).coordinates,icon:e(z),ref_key:"marker",ref:w},null,8,["lat-lng","icon"])):R("",!0)]),_:1},8,["crs","zoom","center","bounds"]),o("form",{onSubmit:l[33]||(l[33]=L((...a)=>e(V)&&e(V)(...a),["prevent"]))},[o("div",ae,[re,o("div",ie,[o("div",ne,[o("h1",de,"Selected water body: "+c(d.name),1)])]),o("div",ce,[o("div",me,[t(n,{for:"measuring_time",value:"Measuring time"}),t(u,{id:"measuring_time",class:"mt-1 block w-full",modelValue:e(s).measuring_time,"onUpdate:modelValue":l[1]||(l[1]=a=>e(s).measuring_time=a),modelModifiers:{trim:!0},type:"datetime-local",ref:"measuring_time",autocomplete:"measuring_time",dusk:"measuring_time"},null,8,["modelValue"]),t(i,{message:e(s).errors.measuring_time,class:"mt-2"},null,8,["message"])]),o("div",ue,[t(n,{for:"odor",value:"Odor"}),t(u,{id:"odor",class:"mt-1 block w-full",modelValue:e(s).odor,"onUpdate:modelValue":l[2]||(l[2]=a=>e(s).odor=a),modelModifiers:{trim:!0},type:"text",ref:"odor",autocomplete:"odor",dusk:"odor"},null,8,["modelValue"]),t(i,{message:e(s).errors.odor,class:"mt-2"},null,8,["message"])]),o("div",pe,[t(n,{for:"color_turbidity",value:"Color turbidity"}),t(u,{id:"color_turbidity",class:"mt-1 block w-full",modelValue:e(s).color_turbidity,"onUpdate:modelValue":l[3]||(l[3]=a=>e(s).color_turbidity=a),modelModifiers:{trim:!0},type:"text",ref:"color_turbidity",autocomplete:"color_turbidity",dusk:"color_turbidity"},null,8,["modelValue"]),t(i,{message:e(s).errors.color_turbidity,class:"mt-2"},null,8,["message"])]),o("div",_e,[t(n,{for:"ph",value:"PH"}),t(u,{id:"ph",class:"mt-1 block w-full",modelValue:e(s).ph,"onUpdate:modelValue":l[4]||(l[4]=a=>e(s).ph=a),modelModifiers:{trim:!0},type:"number",ref:"ph",autocomplete:"ph",dusk:"ph"},null,8,["modelValue"]),t(i,{message:e(s).errors.ph,class:"mt-2"},null,8,["message"])]),o("div",ve,[t(n,{for:"water_temperature",value:"Water temperature"}),t(u,{id:"water_temperature",class:"mt-1 block w-full",modelValue:e(s).water_temperature,"onUpdate:modelValue":l[5]||(l[5]=a=>e(s).water_temperature=a),modelModifiers:{trim:!0},type:"number",ref:"water_temperature",autocomplete:"water_temperature",dusk:"water_temperature"},null,8,["modelValue"]),t(i,{message:e(s).errors.water_temperature,class:"mt-2"},null,8,["message"])]),o("div",ge,[t(n,{for:"air_temperature",value:"Air temperature"}),t(u,{id:"air_temperature",class:"mt-1 block w-full",modelValue:e(s).air_temperature,"onUpdate:modelValue":l[6]||(l[6]=a=>e(s).air_temperature=a),modelModifiers:{trim:!0},type:"number",ref:"air_temperature",autocomplete:"air_temperature",dusk:"air_temperature"},null,8,["modelValue"]),t(i,{message:e(s).errors.air_temperature,class:"mt-2"},null,8,["message"])]),o("div",be,[t(n,{for:"specific_conductance",value:"Specific conductance"}),t(u,{id:"specific_conductance",class:"mt-1 block w-full",modelValue:e(s).specific_conductance,"onUpdate:modelValue":l[7]||(l[7]=a=>e(s).specific_conductance=a),modelModifiers:{trim:!0},type:"number",ref:"specific_conductance",autocomplete:"specific_conductance",dusk:"specific_conductance"},null,8,["modelValue"]),t(i,{message:e(s).errors.specific_conductance,class:"mt-2"},null,8,["message"])]),o("div",fe,[t(n,{for:"total_dissolved_solids",value:"Total dissolved solids"}),t(u,{id:"total_dissolved_solids",class:"mt-1 block w-full",modelValue:e(s).total_dissolved_solids,"onUpdate:modelValue":l[8]||(l[8]=a=>e(s).total_dissolved_solids=a),modelModifiers:{trim:!0},type:"number",ref:"total_dissolved_solids",autocomplete:"total_dissolved_solids",dusk:"total_dissolved_solids"},null,8,["modelValue"]),t(i,{message:e(s).errors.total_dissolved_solids,class:"mt-2"},null,8,["message"])]),o("div",he,[t(n,{for:"nitrate",value:"Nitrate"}),t(u,{id:"nitrate",class:"mt-1 block w-full",modelValue:e(s).nitrate,"onUpdate:modelValue":l[9]||(l[9]=a=>e(s).nitrate=a),modelModifiers:{trim:!0},type:"number",ref:"nitrate",autocomplete:"nitrate",dusk:"nitrate"},null,8,["modelValue"]),t(i,{message:e(s).errors.nitrate,class:"mt-2"},null,8,["message"])]),o("div",ke,[t(n,{for:"bicarbonate",value:"Bicarbonate"}),t(u,{id:"bicarbonate",class:"mt-1 block w-full",modelValue:e(s).bicarbonate,"onUpdate:modelValue":l[10]||(l[10]=a=>e(s).bicarbonate=a),modelModifiers:{trim:!0},type:"number",ref:"bicarbonate",autocomplete:"bicarbonate",dusk:"bicarbonate"},null,8,["modelValue"]),t(i,{message:e(s).errors.bicarbonate,class:"mt-2"},null,8,["message"])]),o("div",ye,[t(n,{for:"redox_potential",value:"Redox potential"}),t(u,{id:"redox_potential",class:"mt-1 block w-full",modelValue:e(s).redox_potential,"onUpdate:modelValue":l[11]||(l[11]=a=>e(s).redox_potential=a),modelModifiers:{trim:!0},type:"number",ref:"redox_potential",autocomplete:"redox_potential",dusk:"redox_potential"},null,8,["modelValue"]),t(i,{message:e(s).errors.redox_potential,class:"mt-2"},null,8,["message"])]),o("div",xe,[t(n,{for:"dissolved_oxygen_percent",value:"Dissolved oxygen percent"}),t(u,{id:"dissolved_oxygen_percent",class:"mt-1 block w-full",modelValue:e(s).dissolved_oxygen_percent,"onUpdate:modelValue":l[12]||(l[12]=a=>e(s).dissolved_oxygen_percent=a),modelModifiers:{trim:!0},type:"number",ref:"dissolved_oxygen_percent",autocomplete:"dissolved_oxygen_percent",dusk:"dissolved_oxygen_percent"},null,8,["modelValue"]),t(i,{message:e(s).errors.dissolved_oxygen_percent,class:"mt-2"},null,8,["message"])]),o("div",we,[t(n,{for:"dissolved_oxygen_ppm",value:"Dissolved oxygen ppm"}),t(u,{id:"dissolved_oxygen_ppm",class:"mt-1 block w-full",modelValue:e(s).dissolved_oxygen_ppm,"onUpdate:modelValue":l[13]||(l[13]=a=>e(s).dissolved_oxygen_ppm=a),modelModifiers:{trim:!0},type:"number",ref:"dissolved_oxygen_ppm",autocomplete:"dissolved_oxygen_ppm",dusk:"dissolved_oxygen_ppm"},null,8,["modelValue"]),t(i,{message:e(s).errors.dissolved_oxygen_ppm,class:"mt-2"},null,8,["message"])]),o("div",Ve,[t(n,{for:"discharge",value:"Discharge"}),t(u,{id:"discharge",class:"mt-1 block w-full",modelValue:e(s).discharge,"onUpdate:modelValue":l[14]||(l[14]=a=>e(s).discharge=a),modelModifiers:{trim:!0},type:"number",ref:"discharge",autocomplete:"discharge",dusk:"discharge"},null,8,["modelValue"]),t(i,{message:e(s).errors.discharge,class:"mt-2"},null,8,["message"])]),o("div",Ue,[t(n,{for:"water_flow",value:"Vooluveekogu voolukiirus"}),t(g,{modelValue:e(s).water_flow,"onUpdate:modelValue":l[15]||(l[15]=a=>e(s).water_flow=a),options:d.water_flows,placeholder:"Please select one",class:"mt-2 block w-full",ref:"water_flow",autocomplete:"water_flow"},null,8,["modelValue","options"]),t(i,{message:e(s).errors.water_flow,class:"mt-2"},null,8,["message"])]),Se,qe,Me,o("div",je,[o("label",$e,[t(p,{name:"erosion",checked:e(s).erosion,"onUpdate:checked":l[16]||(l[16]=a=>e(s).erosion=a)},null,8,["checked"]),Pe]),t(i,{message:e(s).errors.erosion,class:"mt-2"},null,8,["message"])]),o("div",Oe,[t(n,{for:"nature",value:"Kaldaala looduslikkus"}),t(g,{modelValue:e(s).nature,"onUpdate:modelValue":l[17]||(l[17]=a=>e(s).nature=a),options:d.natures,placeholder:"Please select one",class:"mt-2 block w-full",ref:"nature",autocomplete:"nature"},null,8,["modelValue","options"]),t(i,{message:e(s).errors.nature,class:"mt-2"},null,8,["message"])]),o("div",Te,[t(n,{for:"riparian_vegetation",value:"Kaldaala taimestik"}),t(g,{modelValue:e(s).riparian_vegetation,"onUpdate:modelValue":l[18]||(l[18]=a=>e(s).riparian_vegetation=a),options:d.riparian_vegetations,placeholder:"Please select one",class:"mt-2 block w-full",ref:"riparian_vegetation",autocomplete:"riparian_vegetation"},null,8,["modelValue","options"]),t(i,{message:e(s).errors.riparian_vegetation,class:"mt-2"},null,8,["message"])]),o("div",ze,[t(n,{for:"vegetation_coverage",value:"Taimestiku katvus"}),t(g,{modelValue:e(s).vegetation_coverage,"onUpdate:modelValue":l[19]||(l[19]=a=>e(s).vegetation_coverage=a),options:d.vegetation_coverages,placeholder:"Please select one",class:"mt-2 block w-full",ref:"vegetation_coverage",autocomplete:"vegetation_coverage"},null,8,["modelValue","options"]),t(i,{message:e(s).errors.vegetation_coverage,class:"mt-2"},null,8,["message"])]),Ce,Ee,o("div",Ke,[o("label",Ne,[t(p,{name:"tree_roots",checked:e(s).tree_roots,"onUpdate:checked":l[20]||(l[20]=a=>e(s).tree_roots=a)},null,8,["checked"]),Ze]),t(i,{message:e(s).errors.tree_roots,class:"mt-2"},null,8,["message"])]),o("div",Ae,[t(n,{for:"bottom",value:"Veekogu põhi"}),t(g,{modelValue:e(s).bottom,"onUpdate:modelValue":l[21]||(l[21]=a=>e(s).bottom=a),options:d.bottoms,placeholder:"Please select one",class:"mt-2 block w-full",ref:"bottom",autocomplete:"bottom"},null,8,["modelValue","options"]),t(i,{message:e(s).errors.bottom,class:"mt-2"},null,8,["message"])]),o("div",De,[t(n,{for:"aquatic_vegetation",value:"Veetaimestik"}),t(g,{modelValue:e(s).aquatic_vegetation,"onUpdate:modelValue":l[22]||(l[22]=a=>e(s).aquatic_vegetation=a),options:d.aquatic_vegetations,placeholder:"Please select one",class:"mt-2 block w-full",ref:"aquatic_vegetation",autocomplete:"aquatic_vegetation"},null,8,["modelValue","options"]),t(i,{message:e(s).errors.aquatic_vegetation,class:"mt-2"},null,8,["message"])]),Ie,Le,o("div",Be,[o("label",Re,[t(p,{name:"buildings",checked:e(s).buildings,"onUpdate:checked":l[23]||(l[23]=a=>e(s).buildings=a)},null,8,["checked"]),Fe]),t(i,{message:e(s).errors.buildings,class:"mt-2"},null,8,["message"])]),o("div",Ge,[o("label",We,[t(p,{name:"agricultural_activity",checked:e(s).agricultural_activity,"onUpdate:checked":l[24]||(l[24]=a=>e(s).agricultural_activity=a)},null,8,["checked"]),He]),t(i,{message:e(s).errors.agricultural_activity,class:"mt-2"},null,8,["message"])]),o("div",Je,[o("label",Ye,[t(p,{name:"roads",checked:e(s).roads,"onUpdate:checked":l[25]||(l[25]=a=>e(s).roads=a)},null,8,["checked"]),Qe]),t(i,{message:e(s).errors.roads,class:"mt-2"},null,8,["message"])]),o("div",Xe,[o("label",es,[t(p,{name:"park",checked:e(s).park,"onUpdate:checked":l[26]||(l[26]=a=>e(s).park=a)},null,8,["checked"]),ss]),t(i,{message:e(s).errors.park,class:"mt-2"},null,8,["message"])]),o("div",ts,[o("label",os,[t(p,{name:"beach",checked:e(s).beach,"onUpdate:checked":l[27]||(l[27]=a=>e(s).beach=a)},null,8,["checked"]),ls]),t(i,{message:e(s).errors.beach,class:"mt-2"},null,8,["message"])]),o("div",as,[o("label",rs,[t(p,{name:"boat_bridge",checked:e(s).boat_bridge,"onUpdate:checked":l[28]||(l[28]=a=>e(s).boat_bridge=a)},null,8,["checked"]),is]),t(i,{message:e(s).errors.boat_bridge,class:"mt-2"},null,8,["message"])]),o("div",ns,[o("label",ds,[t(p,{name:"shore_facility",checked:e(s).shore_facility,"onUpdate:checked":l[29]||(l[29]=a=>e(s).shore_facility=a)},null,8,["checked"]),cs]),t(i,{message:e(s).errors.shore_facility,class:"mt-2"},null,8,["message"])]),o("div",ms,[o("label",us,[t(p,{name:"dams",checked:e(s).dams,"onUpdate:checked":l[30]||(l[30]=a=>e(s).dams=a)},null,8,["checked"]),ps]),t(i,{message:e(s).errors.dams,class:"mt-2"},null,8,["message"])]),o("div",_s,[o("label",vs,[t(p,{name:"littering",checked:e(s).littering,"onUpdate:checked":l[31]||(l[31]=a=>e(s).littering=a)},null,8,["checked"]),gs]),t(i,{message:e(s).errors.littering,class:"mt-2"},null,8,["message"])]),o("div",bs,[o("label",fs,[t(p,{name:"water_pollution",checked:e(s).water_pollution,"onUpdate:checked":l[32]||(l[32]=a=>e(s).water_pollution=a)},null,8,["checked"]),hs]),t(i,{message:e(s).errors.water_pollution,class:"mt-2"},null,8,["message"])]),o("div",ks,[o("div",ys,[t(e(G),{onClick:e(V),class:I(["btn btn-primary",{"btn-disabled":e(s).processing}]),dusk:"save",href:"#"},{default:S(()=>[F(" Submit ")]),_:1},8,["onClick","class"])])])])])],32)],64))}};export{qs as default};