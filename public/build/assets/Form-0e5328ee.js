import{x as M,l as D,A as K,o as b,e as h,a as t,t as p,F as j,h as z,K as A,T as Z,d as w,q as I,b as s,w as $,u as e,f as S,n as L,i as B,c as F,g as R,j as G}from"./app-f3a15199.js";import{L as d,I as c}from"./Label-e775fd0b.js";import{_ as O}from"./_plugin-vue_export-helper-c27b6911.js";import{C as _}from"./Checkbox-e5d23557.js";import{l as k,m as H,v as q,u as W,i as J}from"./pin-8c94dd1e.js";const Q=M({props:["message"]}),X={class:"text-sm text-red-600"};function Y(u,m,r,o,y,x){return D((b(),h("div",null,[t("p",X,p(u.message),1)],512)),[[K,u.message]])}const i=O(Q,[["render",Y]]),ee=M({props:["modelValue","options","multiple","placeholder","placeholderEnabled"],emits:["update:modelValue"],methods:{focus(){this.$refs.select.focus()}}}),oe=["value","multiple"],se=["disabled"],te=["value"];function le(u,m,r,o,y,x){return b(),h("select",{ref:"select",value:u.modelValue,onInput:m[0]||(m[0]=v=>u.$emit("update:modelValue",v.target.value)),multiple:u.multiple,class:"w-full select select-bordered"},[t("option",{disabled:!u.placeholderEnabled,value:""},p(u.placeholder),9,se),(b(!0),h(j,null,z(u.options,(v,g)=>(b(),h("option",{value:g},p(v),9,te))),256))],40,oe)}const f=O(ee,[["render",le]]),ae={class:"px-4 max-w-screen-lg card bg-white dark:bg-base-100 shadow-xl my-5 mx-auto py-5 sm:p-6 rounded-md"},re={class:"hero-content text-center rounded bg-blue-700"},ie={class:"max-w-md"},ne={class:"text-xl text-white font-bold"},de={class:"grid grid-cols-12 gap-6"},ue={key:0,class:"col-span-12"},me={class:"alert mt-5"},ce=t("div",{class:"divider"},null,-1),pe={class:"col-span-12"},_e={class:"col-span-12"},ve={class:"col-span-12"},ge={class:"col-span-12"},be={class:"col-span-6"},fe={class:"col-span-6"},he={class:"col-span-6"},ke={class:"col-span-6"},ye={class:"col-span-6"},we={class:"col-span-6"},xe={class:"col-span-6"},Ve={class:"col-span-6"},Ue={class:"col-span-6"},$e={class:"col-span-6"},Se={class:"col-span-6"},qe={class:"col-span-6"},Me={class:"col-span-12"},je=t("div",{class:"col-span-12"},[t("div",{class:"divider"})],-1),Oe=t("h3",{class:"col-span-12 text-center text-2xl font-bold"},"Hüdromorfoloogia",-1),Pe=t("h4",{class:"col-span-12 text-center text-xl font-bold"},"Veepiirist maismaa poole (kuni 10 m)",-1),Ce={class:"col-span-12"},Te={class:"flex items-center"},Ee=t("span",{class:"ml-2 text-sm text-gray-600"},p("Erosioon kaldaalalt"),-1),Ne={class:"col-span-12"},De={class:"col-span-12"},Ke={class:"col-span-12"},ze=t("div",{class:"col-span-12"},[t("div",{class:"divider"})],-1),Ae=t("h4",{class:"col-span-12 text-center text-xl font-bold"},"Veepiirist veekogu poole (kuni 10 m)",-1),Ze={class:"col-span-12"},Ie={class:"flex items-center"},Le=t("span",{class:"ml-2 text-sm text-gray-600"},p("Puujuures, oksad vms ulatuvad vett"),-1),Be={class:"col-span-12"},Fe={class:"col-span-12"},Re=t("div",{class:"col-span-12"},[t("div",{class:"divider"})],-1),Ge=t("h4",{class:"col-span-12 text-center text-xl font-bold"},"Inimmõju (~50 m raadiuses vaatluskohast)",-1),He={class:"col-span-12"},We={class:"flex items-center"},Je=t("span",{class:"ml-2 text-sm text-gray-600"},p("Ehitisi"),-1),Qe={class:"col-span-12"},Xe={class:"flex items-center"},Ye=t("span",{class:"ml-2 text-sm text-gray-600"},p("Põllumajanduslik tegevus"),-1),eo={class:"col-span-12"},oo={class:"flex items-center"},so=t("span",{class:"ml-2 text-sm text-gray-600"},p("Teed, parkimisplatsid"),-1),to={class:"col-span-12"},lo={class:"flex items-center"},ao=t("span",{class:"ml-2 text-sm text-gray-600"},p("Park"),-1),ro={class:"col-span-12"},io={class:"flex items-center"},no=t("span",{class:"ml-2 text-sm text-gray-600"},p("Supelrand"),-1),uo={class:"col-span-12"},mo={class:"flex items-center"},co=t("span",{class:"ml-2 text-sm text-gray-600"},p("Paadisild, slip"),-1),po={class:"col-span-12"},_o={class:"flex items-center"},vo=t("span",{class:"ml-2 text-sm text-gray-600"},p("Kaldakindlustusrajatised"),-1),go={class:"col-span-12"},bo={class:"flex items-center"},fo=t("span",{class:"ml-2 text-sm text-gray-600"},p("Paisud, sillad"),-1),ho={class:"col-span-12"},ko={class:"flex items-center"},yo=t("span",{class:"ml-2 text-sm text-gray-600"},p("Kaldavööndi prügistamist"),-1),wo={class:"col-span-12"},xo={class:"flex items-center"},Vo=t("span",{class:"ml-2 text-sm text-gray-600"},p("Veereostust"),-1),Uo={class:"col-span-12"},$o={class:"flex justify-end"},Po={__name:"Form",props:{observation:{type:Object,required:!1,default:null},water_flows:{type:Object,required:!0},natures:{type:Object,required:!0},riparian_vegetations:{type:Object,required:!0},vegetation_coverages:{type:Object,required:!0},bottoms:{type:Object,required:!0},aquatic_vegetations:{type:Object,required:!0},coordinates:{type:Object,required:!0},name:{type:String,required:!0},water_body_kr_code:{type:String,required:!0},observation_spot_id:{type:String,required:!0,default:null}},setup(u){const m=u;A();let r=m.observation!==null,o=Z({measuring_time:r?observation.measuring_time:"",odor:r?observation.odor:"",color_turbidity:r?observation.color_turbidity:"",conditions:r?observation.conditions:"",ph:r?observation.ph:"",water_temperature:r?observation.water_temperature:"",air_temperature:r?observation.air_temperature:"",specific_conductance:r?observation.specific_conductance:"",total_dissolved_solids:r?observation.total_dissolved_solids:"",nitrate:r?observation.nitrate:"",bicarbonate:r?observation.bicarbonate:"",redox_potential:r?observation.redox_potential:"",dissolved_oxygen_percent:r?observation.dissolved_oxygen_percent:"",dissolved_oxygen_mgl:r?observation.dissolved_oxygen_mgl:"",discharge:r?observation.discharge:"",water_flow:r?observation.water_flow:"",flow_direction:r?observation.flow_direction:"",erosion:r?observation.erosion:!1,nature:r?observation.nature:"",riparian_vegetation:r?observation.riparian_vegetation:"",vegetation_coverage:r?observation.vegetation_coverage:"",tree_roots:r?observation.tree_roots:!1,bottom:r?observation.bottom:"",aquatic_vegetation:r?observation.aquatic_vegetation:"",buildings:r?observation.buildings:!1,agricultural_activity:r?observation.agricultural_activity:!1,roads:r?observation.roads:!1,park:r?observation.park:!1,beach:r?observation.beach:!1,boat_bridge:r?observation.boat_bridge:!1,shore_facility:r?observation.shore_facility:!1,dams:r?observation.dams:!1,littering:r?observation.littering:!1,water_pollution:r?observation.water_pollution:!1,water_body_kr_code:m.water_body_kr_code,observation_spot_id:m.observation_spot_id,latitude:m.coordinates.lat,longitude:m.coordinates.lng,observation_spot_name:r?observation.observation_spot_name:"",observation_spot_description:r?observation.observation_spot_description:""});const y=w(null),x=w(null),v=w(10);let g=null,U=w(!0),P=k.latLng(58.379,24.554),C=k.latLngBounds([60.4349,29.4338],[56.7458,20.373]);var T=new k.Proj.CRS("EPSG:3301","+proj=lcc +lat_1=59.33333333333334 +lat_2=58 +lat_0=57.51755393055556 +lon_0=24 +x_0=500000 +y_0=6375000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",{resolutions:[4e3,2e3,1e3,500,250,125,62.5,31.25,15.625,7.8125,3.90625,1.953125,.9765625,.48828125,.244140625,.122070313,.061035156,.030517578,.015258789],origin:[40500,5993e3],bounds:k.bounds([40500,5993e3],[1064500,7017e3])});const E=k.icon({iconUrl:H,iconSize:[55,55],iconAnchor:[25,55],popupAnchor:[0,-55]});I(m.coordinates,n=>{n&&g&&g.setView(n,v.value)});function N(){console.log("map ready"),g=y.value.leafletObject,g&&(g.scrollWheelZoom.disable(),m.coordinates&&g.setView(m.coordinates,v.value))}let V=()=>{const n={forceFormData:!0};o.transform(l=>({...l,water_body_kr_code:m.water_body_kr_code,observation_spot_id:m.observation_spot_id})),console.log(o),o.post(route("observations.store"),n)};return(n,l)=>(b(),h(j,null,[s(e(J),{ref_key:"map",ref:y,crs:e(T),zoom:v.value,"onUpdate:zoom":l[0]||(l[0]=a=>v.value=a),style:{height:"400px",width:"100%"},useGlobalLeaflet:!1,center:e(P),bounds:e(C),maxZoom:14,minZoom:3,scrollWheelZoom:!1,onReady:N},{default:$(()=>[s(e(q),{url:"https://tiles.maaamet.ee/tm/tms/1.0.0/vreljeef/{z}/{x}/{y}.png&ASUTUS=TLU&KESKKOND=ADAPTEST",tms:e(U),"full-screen":!1,worldCopyJump:!0,"z-index":1,options:{maxNativeZoom:13,maxZoom:13,minZoom:3}},null,8,["tms"]),s(e(q),{url:"https://tiles.maaamet.ee/tm/tms/1.0.0/hybriid/{z}/{x}/{y}.png&ASUTUS=TLU&KESKKOND=ADAPTEST",attribution:"Maa-ameti kaart, <a href='http://www.maaamet.ee'>Maa-amet</a>",tms:e(U),"full-screen":!1,worldCopyJump:!0,"z-index":2,options:{maxNativeZoom:13,maxZoom:13,minZoom:3}},null,8,["tms"]),e(m).coordinates?(b(),F(e(W),{key:0,"lat-lng":e(m).coordinates,icon:e(E),ref_key:"marker",ref:x},null,8,["lat-lng","icon"])):S("",!0)]),_:1},8,["crs","zoom","center","bounds"]),t("form",{onSubmit:l[37]||(l[37]=B((...a)=>e(V)&&e(V)(...a),["prevent"]))},[t("div",ae,[t("div",re,[t("div",ie,[t("h1",ne,p(n.$t("Selected water body:"))+" "+p(u.name),1)])]),t("div",de,[e(m).observation_spot_id===null||e(m).observation_spot_id==="null"?(b(),h("div",ue,[t("div",me,p(n.$t("This is a new observation spot. Please fill the fields below.")),1),s(d,{for:"observation_spot_name",value:n.$t("New observation spot name *")},null,8,["value"]),s(c,{id:"observation_spot_name",class:"mt-1 block w-full",type:"text",ref:"observation_spot_name",autocomplete:"observation_spot_name",modelValue:e(o).observation_spot_name,"onUpdate:modelValue":l[1]||(l[1]=a=>e(o).observation_spot_name=a),modelModifiers:{trim:!0}},null,8,["modelValue"]),s(d,{for:"observation_spot_description",value:n.$t("New observation spot description *")},null,8,["value"]),s(c,{id:"observation_spot_description",class:"mt-1 block w-full",type:"text",ref:"observation_spot_description",autocomplete:"observation_spot_description",modelValue:e(o).observation_spot_description,"onUpdate:modelValue":l[2]||(l[2]=a=>e(o).observation_spot_description=a),modelModifiers:{trim:!0}},null,8,["modelValue"]),ce])):S("",!0),t("div",pe,[s(d,{for:"measuring_time",value:n.$t("Time of measurement *")},null,8,["value"]),s(c,{id:"measuring_time",class:"mt-1 block w-full",modelValue:e(o).measuring_time,"onUpdate:modelValue":l[3]||(l[3]=a=>e(o).measuring_time=a),modelModifiers:{trim:!0},type:"datetime-local",ref:"measuring_time",autocomplete:"measuring_time",dusk:"measuring_time"},null,8,["modelValue"]),s(i,{message:e(o).errors.measuring_time,class:"mt-2"},null,8,["message"])]),t("div",_e,[s(d,{for:"odor",value:n.$t("Odor")},null,8,["value"]),s(c,{id:"odor",class:"mt-1 block w-full",modelValue:e(o).odor,"onUpdate:modelValue":l[4]||(l[4]=a=>e(o).odor=a),modelModifiers:{trim:!0},type:"text",ref:"odor",autocomplete:"odor",dusk:"odor"},null,8,["modelValue"]),s(i,{message:e(o).errors.odor,class:"mt-2"},null,8,["message"])]),t("div",ve,[s(d,{for:"color_turbidity",value:n.$t("Color and turbidity")},null,8,["value"]),s(c,{id:"color_turbidity",class:"mt-1 block w-full",modelValue:e(o).color_turbidity,"onUpdate:modelValue":l[5]||(l[5]=a=>e(o).color_turbidity=a),modelModifiers:{trim:!0},type:"text",ref:"color_turbidity",autocomplete:"color_turbidity",dusk:"color_turbidity"},null,8,["modelValue"]),s(i,{message:e(o).errors.color_turbidity,class:"mt-2"},null,8,["message"])]),t("div",ge,[s(d,{for:"conditions",value:n.$t("Description of natural conditions")},null,8,["value"]),s(c,{id:"conditions",class:"mt-1 block w-full",modelValue:e(o).conditions,"onUpdate:modelValue":l[6]||(l[6]=a=>e(o).conditions=a),modelModifiers:{trim:!0},type:"text",ref:"conditions",autocomplete:"conditions",dusk:"conditions"},null,8,["modelValue"]),s(i,{message:e(o).errors.conditions,class:"mt-2"},null,8,["message"])]),t("div",be,[s(d,{for:"ph",value:n.$t("pH")},null,8,["value"]),s(c,{id:"ph",class:"mt-1 block w-full",modelValue:e(o).ph,"onUpdate:modelValue":l[7]||(l[7]=a=>e(o).ph=a),modelModifiers:{trim:!0},type:"number",ref:"ph",autocomplete:"ph",dusk:"ph"},null,8,["modelValue"]),s(i,{message:e(o).errors.ph,class:"mt-2"},null,8,["message"])]),t("div",fe,[s(d,{for:"water_temperature",value:n.$t("Water temperature")},null,8,["value"]),s(c,{id:"water_temperature",class:"mt-1 block w-full",modelValue:e(o).water_temperature,"onUpdate:modelValue":l[8]||(l[8]=a=>e(o).water_temperature=a),modelModifiers:{trim:!0},type:"number",ref:"water_temperature",autocomplete:"water_temperature",placeholder:"°C",dusk:"water_temperature"},null,8,["modelValue"]),s(i,{message:e(o).errors.water_temperature,class:"mt-2"},null,8,["message"])]),t("div",he,[s(d,{for:"air_temperature",value:n.$t("Air temperature")},null,8,["value"]),s(c,{id:"air_temperature",class:"mt-1 block w-full",modelValue:e(o).air_temperature,"onUpdate:modelValue":l[9]||(l[9]=a=>e(o).air_temperature=a),modelModifiers:{trim:!0},placeholder:"°C",type:"number",ref:"air_temperature",autocomplete:"air_temperature",dusk:"air_temperature"},null,8,["modelValue"]),s(i,{message:e(o).errors.air_temperature,class:"mt-2"},null,8,["message"])]),t("div",ke,[s(d,{for:"specific_conductance",value:n.$t("Specific conductance")},null,8,["value"]),s(c,{id:"specific_conductance",class:"mt-1 block w-full",modelValue:e(o).specific_conductance,"onUpdate:modelValue":l[10]||(l[10]=a=>e(o).specific_conductance=a),modelModifiers:{trim:!0},type:"number",ref:"specific_conductance",autocomplete:"specific_conductance",placeholder:"µS/cm",dusk:"specific_conductance"},null,8,["modelValue"]),s(i,{message:e(o).errors.specific_conductance,class:"mt-2"},null,8,["message"])]),t("div",ye,[s(d,{for:"total_dissolved_solids",value:n.$t("Total dissolved solids")},null,8,["value"]),s(c,{id:"total_dissolved_solids",class:"mt-1 block w-full",modelValue:e(o).total_dissolved_solids,"onUpdate:modelValue":l[11]||(l[11]=a=>e(o).total_dissolved_solids=a),modelModifiers:{trim:!0},placeholder:"mg/l",type:"number",ref:"total_dissolved_solids",autocomplete:"total_dissolved_solids",dusk:"total_dissolved_solids"},null,8,["modelValue"]),s(i,{message:e(o).errors.total_dissolved_solids,class:"mt-2"},null,8,["message"])]),t("div",we,[s(d,{for:"nitrate",value:n.$t("Nitrate (NO3)")},null,8,["value"]),s(c,{id:"nitrate",class:"mt-1 block w-full",modelValue:e(o).nitrate,"onUpdate:modelValue":l[12]||(l[12]=a=>e(o).nitrate=a),modelModifiers:{trim:!0},type:"number",ref:"nitrate",placeholder:"mg/l",autocomplete:"nitrate",dusk:"nitrate"},null,8,["modelValue"]),s(i,{message:e(o).errors.nitrate,class:"mt-2"},null,8,["message"])]),t("div",xe,[s(d,{for:"bicarbonate",value:n.$t("Bicarbonate (HCO3)")},null,8,["value"]),s(c,{id:"bicarbonate",class:"mt-1 block w-full",modelValue:e(o).bicarbonate,"onUpdate:modelValue":l[13]||(l[13]=a=>e(o).bicarbonate=a),modelModifiers:{trim:!0},type:"number",placeholder:"mg/l",ref:"bicarbonate",autocomplete:"bicarbonate",dusk:"bicarbonate"},null,8,["modelValue"]),s(i,{message:e(o).errors.bicarbonate,class:"mt-2"},null,8,["message"])]),t("div",Ve,[s(d,{for:"redox_potential",value:n.$t("Redox potential")},null,8,["value"]),s(c,{id:"redox_potential",class:"mt-1 block w-full",modelValue:e(o).redox_potential,"onUpdate:modelValue":l[14]||(l[14]=a=>e(o).redox_potential=a),modelModifiers:{trim:!0},placeholder:"mV",type:"number",ref:"redox_potential",autocomplete:"redox_potential",dusk:"redox_potential"},null,8,["modelValue"]),s(i,{message:e(o).errors.redox_potential,class:"mt-2"},null,8,["message"])]),t("div",Ue,[s(d,{for:"dissolved_oxygen_percent",value:n.$t("Dissolved oxygen (%)")},null,8,["value"]),s(c,{id:"dissolved_oxygen_percent",class:"mt-1 block w-full",placeholder:"%",modelValue:e(o).dissolved_oxygen_percent,"onUpdate:modelValue":l[15]||(l[15]=a=>e(o).dissolved_oxygen_percent=a),modelModifiers:{trim:!0},type:"number",ref:"dissolved_oxygen_percent",autocomplete:"dissolved_oxygen_percent",dusk:"dissolved_oxygen_percent"},null,8,["modelValue"]),s(i,{message:e(o).errors.dissolved_oxygen_percent,class:"mt-2"},null,8,["message"])]),t("div",$e,[s(d,{for:"dissolved_oxygen_mgl",value:n.$t("Dissolved oxygen (mg/l)")},null,8,["value"]),s(c,{id:"dissolved_oxygen_mgl",class:"mt-1 block w-full",modelValue:e(o).dissolved_oxygen_mgl,"onUpdate:modelValue":l[16]||(l[16]=a=>e(o).dissolved_oxygen_mgl=a),modelModifiers:{trim:!0},type:"number",ref:"dissolved_oxygen_mgl",autocomplete:"dissolved_oxygen_mgl",placeholder:"mg/l",dusk:"dissolved_oxygen_mgl"},null,8,["modelValue"]),s(i,{message:e(o).errors.dissolved_oxygen_mgl,class:"mt-2"},null,8,["message"])]),t("div",Se,[s(d,{for:"discharge",value:n.$t("Discharge")},null,8,["value"]),s(c,{id:"discharge",class:"mt-1 block w-full",modelValue:e(o).discharge,"onUpdate:modelValue":l[17]||(l[17]=a=>e(o).discharge=a),modelModifiers:{trim:!0},type:"number",placeholder:"l/s",ref:"discharge",autocomplete:"discharge",dusk:"discharge"},null,8,["modelValue"]),s(i,{message:e(o).errors.discharge,class:"mt-2"},null,8,["message"])]),t("div",qe,[s(d,{for:"water_flow",value:n.$t("Flow velocity")},null,8,["value"]),s(f,{modelValue:e(o).water_flow,"onUpdate:modelValue":l[18]||(l[18]=a=>e(o).water_flow=a),options:u.water_flows,placeholder:"Please select one",class:"mt-2 block w-full",ref:"water_flow",autocomplete:"water_flow"},null,8,["modelValue","options"]),s(i,{message:e(o).errors.water_flow,class:"mt-2"},null,8,["message"])]),t("div",Me,[s(d,{for:"flow_direction",value:n.$t("Flow direction/water level")},null,8,["value"]),s(c,{id:"flow_direction",class:"mt-1 block w-full",modelValue:e(o).flow_direction,"onUpdate:modelValue":l[19]||(l[19]=a=>e(o).flow_direction=a),modelModifiers:{trim:!0},type:"text",ref:"flow_direction",autocomplete:"flow_direction",dusk:"flow_direction"},null,8,["modelValue"]),s(i,{message:e(o).errors.flow_direction,class:"mt-2"},null,8,["message"])]),je,Oe,Pe,t("div",Ce,[t("label",Te,[s(_,{name:"erosion",checked:e(o).erosion,"onUpdate:checked":l[20]||(l[20]=a=>e(o).erosion=a)},null,8,["checked"]),Ee]),s(i,{message:e(o).errors.erosion,class:"mt-2"},null,8,["message"])]),t("div",Ne,[s(d,{for:"nature",value:"Kaldaala looduslikkus"}),s(f,{modelValue:e(o).nature,"onUpdate:modelValue":l[21]||(l[21]=a=>e(o).nature=a),options:u.natures,placeholder:"Please select one",class:"mt-2 block w-full",ref:"nature",autocomplete:"nature"},null,8,["modelValue","options"]),s(i,{message:e(o).errors.nature,class:"mt-2"},null,8,["message"])]),t("div",De,[s(d,{for:"riparian_vegetation",value:"Kaldaala taimestik"}),s(f,{modelValue:e(o).riparian_vegetation,"onUpdate:modelValue":l[22]||(l[22]=a=>e(o).riparian_vegetation=a),options:u.riparian_vegetations,placeholder:"Please select one",class:"mt-2 block w-full",ref:"riparian_vegetation",autocomplete:"riparian_vegetation"},null,8,["modelValue","options"]),s(i,{message:e(o).errors.riparian_vegetation,class:"mt-2"},null,8,["message"])]),t("div",Ke,[s(d,{for:"vegetation_coverage",value:"Taimestiku katvus"}),s(f,{modelValue:e(o).vegetation_coverage,"onUpdate:modelValue":l[23]||(l[23]=a=>e(o).vegetation_coverage=a),options:u.vegetation_coverages,placeholder:"Please select one",class:"mt-2 block w-full",ref:"vegetation_coverage",autocomplete:"vegetation_coverage"},null,8,["modelValue","options"]),s(i,{message:e(o).errors.vegetation_coverage,class:"mt-2"},null,8,["message"])]),ze,Ae,t("div",Ze,[t("label",Ie,[s(_,{name:"tree_roots",checked:e(o).tree_roots,"onUpdate:checked":l[24]||(l[24]=a=>e(o).tree_roots=a)},null,8,["checked"]),Le]),s(i,{message:e(o).errors.tree_roots,class:"mt-2"},null,8,["message"])]),t("div",Be,[s(d,{for:"bottom",value:"Veekogu põhi"}),s(f,{modelValue:e(o).bottom,"onUpdate:modelValue":l[25]||(l[25]=a=>e(o).bottom=a),options:u.bottoms,placeholder:"Please select one",class:"mt-2 block w-full",ref:"bottom",autocomplete:"bottom"},null,8,["modelValue","options"]),s(i,{message:e(o).errors.bottom,class:"mt-2"},null,8,["message"])]),t("div",Fe,[s(d,{for:"aquatic_vegetation",value:"Veetaimestik"}),s(f,{modelValue:e(o).aquatic_vegetation,"onUpdate:modelValue":l[26]||(l[26]=a=>e(o).aquatic_vegetation=a),options:u.aquatic_vegetations,placeholder:"Please select one",class:"mt-2 block w-full",ref:"aquatic_vegetation",autocomplete:"aquatic_vegetation"},null,8,["modelValue","options"]),s(i,{message:e(o).errors.aquatic_vegetation,class:"mt-2"},null,8,["message"])]),Re,Ge,t("div",He,[t("label",We,[s(_,{name:"buildings",checked:e(o).buildings,"onUpdate:checked":l[27]||(l[27]=a=>e(o).buildings=a)},null,8,["checked"]),Je]),s(i,{message:e(o).errors.buildings,class:"mt-2"},null,8,["message"])]),t("div",Qe,[t("label",Xe,[s(_,{name:"agricultural_activity",checked:e(o).agricultural_activity,"onUpdate:checked":l[28]||(l[28]=a=>e(o).agricultural_activity=a)},null,8,["checked"]),Ye]),s(i,{message:e(o).errors.agricultural_activity,class:"mt-2"},null,8,["message"])]),t("div",eo,[t("label",oo,[s(_,{name:"roads",checked:e(o).roads,"onUpdate:checked":l[29]||(l[29]=a=>e(o).roads=a)},null,8,["checked"]),so]),s(i,{message:e(o).errors.roads,class:"mt-2"},null,8,["message"])]),t("div",to,[t("label",lo,[s(_,{name:"park",checked:e(o).park,"onUpdate:checked":l[30]||(l[30]=a=>e(o).park=a)},null,8,["checked"]),ao]),s(i,{message:e(o).errors.park,class:"mt-2"},null,8,["message"])]),t("div",ro,[t("label",io,[s(_,{name:"beach",checked:e(o).beach,"onUpdate:checked":l[31]||(l[31]=a=>e(o).beach=a)},null,8,["checked"]),no]),s(i,{message:e(o).errors.beach,class:"mt-2"},null,8,["message"])]),t("div",uo,[t("label",mo,[s(_,{name:"boat_bridge",checked:e(o).boat_bridge,"onUpdate:checked":l[32]||(l[32]=a=>e(o).boat_bridge=a)},null,8,["checked"]),co]),s(i,{message:e(o).errors.boat_bridge,class:"mt-2"},null,8,["message"])]),t("div",po,[t("label",_o,[s(_,{name:"shore_facility",checked:e(o).shore_facility,"onUpdate:checked":l[33]||(l[33]=a=>e(o).shore_facility=a)},null,8,["checked"]),vo]),s(i,{message:e(o).errors.shore_facility,class:"mt-2"},null,8,["message"])]),t("div",go,[t("label",bo,[s(_,{name:"dams",checked:e(o).dams,"onUpdate:checked":l[34]||(l[34]=a=>e(o).dams=a)},null,8,["checked"]),fo]),s(i,{message:e(o).errors.dams,class:"mt-2"},null,8,["message"])]),t("div",ho,[t("label",ko,[s(_,{name:"littering",checked:e(o).littering,"onUpdate:checked":l[35]||(l[35]=a=>e(o).littering=a)},null,8,["checked"]),yo]),s(i,{message:e(o).errors.littering,class:"mt-2"},null,8,["message"])]),t("div",wo,[t("label",xo,[s(_,{name:"water_pollution",checked:e(o).water_pollution,"onUpdate:checked":l[36]||(l[36]=a=>e(o).water_pollution=a)},null,8,["checked"]),Vo]),s(i,{message:e(o).errors.water_pollution,class:"mt-2"},null,8,["message"])]),t("div",Uo,[t("div",$o,[s(e(G),{onClick:e(V),class:L(["btn btn-primary",{"btn-disabled":e(o).processing}]),dusk:"save",href:"#"},{default:$(()=>[R(" Submit ")]),_:1},8,["onClick","class"])])])])])],32)],64))}};export{Po as default};