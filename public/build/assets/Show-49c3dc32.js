import{_ as i}from"./AppLayout-6ed40c1b.js";import{o as u,c as d,w as r,a as t,t as l,u as n,b,g as v,j as h}from"./app-10f60e12.js";const p={class:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight"},$={class:"text-gray-600 body-font"},c={class:"container px-5 py-24 mx-auto"},g={class:"flex flex-wrap -m-4"},m={class:"p-4 md:w-full"},f={class:"card bg-base-100 shadow-xl"},y={class:"card-body gap-4"},_={class:"overflow-x-auto"},w={class:"table"},D={__name:"Show",props:{observation:{type:Object,required:!0}},setup(s){const o=s;function a(e){return e?"Yes":"No"}return(e,k)=>(u(),d(i,{title:"Dashboard"},{header:r(()=>[t("h2",p,l(n(o).observation.observation_spot.name)+" - "+l(n(o).observation.measuring_time),1)]),default:r(()=>[t("section",$,[t("div",c,[t("div",g,[t("div",m,[t("div",f,[t("div",y,[t("div",_,[b(n(h),{href:`/observation-spots/${n(o).observation.observation_spot.id}`,class:"btn my-4 btn-primary"},{default:r(()=>[v(l(e.$t("Back to observation spot")),1)]),_:1},8,["href"]),t("table",w,[t("tr",null,[t("th",null,l(e.$t("Measuring time"))+":",1),t("td",null,l(n(o).observation.measuring_time),1)]),t("tr",null,[t("th",null,l(e.$t("Odor"))+":",1),t("td",null,l(n(o).observation.odor),1)]),t("tr",null,[t("th",null,l(e.$t("Color and turbidity"))+":",1),t("td",null,l(n(o).observation.color_turbidity),1)]),t("tr",null,[t("th",null,l(e.$t("Description of natural conditions"))+":",1),t("td",null,l(n(o).observation.conditions),1)]),t("tr",null,[t("th",null,l(e.$t("pH"))+":",1),t("td",null,l(n(o).observation.ph),1)]),t("tr",null,[t("th",null,l(e.$t("Water temperature"))+":",1),t("td",null,l(n(o).observation.water_temperature),1)]),t("tr",null,[t("th",null,l(e.$t("Air temperature"))+":",1),t("td",null,l(n(o).observation.air_temperature),1)]),t("tr",null,[t("th",null,l(e.$t("Specific conductance"))+":",1),t("td",null,l(n(o).observation.specific_conductance),1)]),t("tr",null,[t("th",null,l(e.$t("Total dissolved solids"))+":",1),t("td",null,l(n(o).observation.total_dissolved_solids),1)]),t("tr",null,[t("th",null,l(e.$t("Nitrate (NO3)"))+":",1),t("td",null,l(n(o).observation.nitrate),1)]),t("tr",null,[t("th",null,l(e.$t("Bicarbonate (HCO3)"))+":",1),t("td",null,l(n(o).observation.bicarbonate),1)]),t("tr",null,[t("th",null,l(e.$t("Redox potential"))+":",1),t("td",null,l(n(o).observation.redox_potential),1)]),t("tr",null,[t("th",null,l(e.$t("Dissolved oxygen (%)"))+":",1),t("td",null,l(n(o).observation.dissolved_oxygen_percent),1)]),t("tr",null,[t("th",null,l(e.$t("Dissolved oxygen (mg/l)"))+":",1),t("td",null,l(n(o).observation.dissolved_oxygen_mgl),1)]),t("tr",null,[t("th",null,l(e.$t("Discharge"))+":",1),t("td",null,l(n(o).observation.discharge),1)]),t("tr",null,[t("th",null,l(e.$t("Flow velocity"))+":",1),t("td",null,l(n(o).observation.water_flow.label),1)]),t("tr",null,[t("th",null,l(e.$t("Flow direction/water level"))+":",1),t("td",null,l(n(o).observation.flow_direction),1)]),t("tr",null,[t("th",null,l(e.$t("Erosion"))+":",1),t("td",null,l(a(n(o).observation.erosion)),1)]),t("tr",null,[t("th",null,l(e.$t("Nature"))+":",1),t("td",null,l(n(o).observation.nature.label),1)]),t("tr",null,[t("th",null,l(e.$t("Riparian vegetation"))+":",1),t("td",null,l(n(o).observation.riparian_vegetation.label),1)]),t("tr",null,[t("th",null,l(e.$t("Vegetation coverage"))+":",1),t("td",null,l(n(o).observation.vegetation_coverage.label),1)]),t("tr",null,[t("th",null,l(e.$t("Puujuures, oksad vms ulatuvad vett"))+":",1),t("td",null,l(a(n(o).observation.tree_roots)),1)]),t("tr",null,[t("th",null,l(e.$t("Veekogu põhi"))+":",1),t("td",null,l(n(o).observation.bottom.label),1)]),t("tr",null,[t("th",null,l(e.$t("Veetaimestik"))+":",1),t("td",null,l(n(o).observation.aquatic_vegetation.label),1)]),t("tr",null,[t("th",null,l(e.$t("Ehitisi"))+":",1),t("td",null,l(a(n(o).observation.buildings)),1)]),t("tr",null,[t("th",null,l(e.$t("Põllumajanduslik tegevus"))+":",1),t("td",null,l(a(n(o).observation.agricultural_activity)),1)]),t("tr",null,[t("th",null,l(e.$t("Teed, parkimisplatsid"))+":",1),t("td",null,l(a(n(o).observation.roads)),1)]),t("tr",null,[t("th",null,l(e.$t("Park"))+":",1),t("td",null,l(a(n(o).observation.park)),1)]),t("tr",null,[t("th",null,l(e.$t("Supelrand"))+":",1),t("td",null,l(a(n(o).observation.beach)),1)]),t("tr",null,[t("th",null,l(e.$t("Paadisild, slip"))+":",1),t("td",null,l(a(n(o).observation.boat_bridge)),1)]),t("tr",null,[t("th",null,l(e.$t("Kaldakindlustusrajatised"))+":",1),t("td",null,l(a(n(o).observation.shore_facility)),1)]),t("tr",null,[t("th",null,l(e.$t("Paisud, sillad"))+":",1),t("td",null,l(a(n(o).observation.dams)),1)]),t("tr",null,[t("th",null,l(e.$t("Kaldavööndi prügistamist"))+":",1),t("td",null,l(a(n(o).observation.littering)),1)]),t("tr",null,[t("th",null,l(e.$t("Veereostust"))+":",1),t("td",null,l(a(n(o).observation.water_pollution)),1)])])])])])])])])])]),_:1}))}};export{D as default};