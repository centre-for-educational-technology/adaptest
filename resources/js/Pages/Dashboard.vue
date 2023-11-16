<template>
    <AppLayout title="Dashboard">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                Dashboard
            </h2>
        </template>

        <main class="relative" style="height: calc(100vh - 138px); width: 100%;">
            <!--                        <l-map ref="map" v-model:zoom="zoom" :center=center :useGlobalLeaflet="false"-->
            <!--                               :crs="projection"-->
            <!--                               :tilelayers="relief_layers"-->
            <!--                               :tms="tms"-->
            <!--                               :bounds="bounds">-->
            <!--                            <l-tile-layer-->
            <!--                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"-->
            <!--                                layer-type="base"-->
            <!--                                name="OpenStreetMap"-->
            <!--                            ></l-tile-layer>-->

            <!--                            <l-geo-json :geojson="geojson"/>-->
            <!--                        </l-map>-->
            <div v-if="!mapLoaded"
                 class="absolute inset-0 flex flex-col items-center justify-center bg-primary opacity-80 z-10">
                <div class="spinner z-50">


                    <div class="loader">
                        <div class="loader-bg">
                            <span class="flex items-center justify-center">
                                <ApplicationMark class="w-20 mt-4 h-20 fill-white"/>
                            </span>
                        </div>
                        <div class="drops">
                            <div class="drop1"></div>
                            <div class="drop2"></div>
                        </div>
                    </div>

                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                        <defs>
                            <filter id="liquid">
                                <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur"/>
                                <feColorMatrix in="blur" mode="matrix"
                                               values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="liquid"/>
                            </filter>
                        </defs>
                    </svg>
                    <p class="text-white flex items-center justify-center text-2xl font-semibold">
                        Laeb veekogud...
                    </p>
                </div>

            </div>


            <l-map ref="map" :crs="crs" v-model:zoom="zoom"
                   :useGlobalLeaflet="false" :center="maaametCenter" :bounds="bounds" :maxZoom="14" :minZoom="3"
                   :scrollWheelZoom="false" @click="addMarker" @ready="mapReady">


                <l-tile-layer
                    url="https://tiles.maaamet.ee/tm/tms/1.0.0/vreljeef/{z}/{x}/{y}.png&ASUTUS=TLU&KESKKOND=ADAPTEST"
                    :tms="tms" :full-screen="false" :worldCopyJump="true" :z-index="1"
                    :options="{ maxNativeZoom: 13, maxZoom: 13, minZoom: 3 }"/>

                <l-tile-layer
                    url="https://tiles.maaamet.ee/tm/tms/1.0.0/hybriid/{z}/{x}/{y}.png&ASUTUS=TLU&KESKKOND=ADAPTEST"
                    attribution="Maa-ameti kaart, <a href='http://www.maaamet.ee'>Maa-amet</a>" :tms="tms"
                    :full-screen="false" :worldCopyJump="true" :z-index="2"
                    :options="{ maxNativeZoom: 13, maxZoom: 13, minZoom: 3 }"/>

                <l-geo-json :visible="geojsonFetched" :options="{ style: featureStyle, onEachFeature: onEachFeature }"
                            :geojson="geojson"></l-geo-json>

                <!--                <l-marker v-for="marker, index in markers" :lat-lng="marker" @click="removeMarker(index)"></l-marker>-->

                <l-marker v-for="(marker, index) in markers" :key="index" :lat-lng="marker">
                    <l-popup ref="popup">
                        Popup content
                    </l-popup>
                </l-marker>

            </l-map>


            <Modal :showModal="showModal" :selectedAreaName="selectedAreaName" @update:showModal="showModal = $event"/>


            <!-- Modal for when a GeoJSON layer is not selected -->
            <div class="modal" :class="{ 'modal-open': showGeoJsonModal }">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">Please select a water source first</h3>
                    <div class="modal-action">
                        <button class="btn" @click="toggleGeoJsonModal">
                            Ok
                        </button>
                    </div>
                </div>
            </div>


        </main>
    </AppLayout>
</template>

<script setup>
import {LGeoJson, LIcon, LMap, LMarker, LPopup, LTileLayer} from "@vue-leaflet/vue-leaflet";
import AppLayout from "@/Layouts/AppLayout.vue";
import "leaflet/dist/leaflet.css";
import {nextTick, onMounted, ref, watch} from 'vue';
import {latLng, latLngBounds} from "leaflet/dist/leaflet-src.esm.js";
import * as L from 'leaflet';
import 'proj4leaflet';
import Modal from "@/CustomComponents/LakeModal.vue";
import {router} from '@inertiajs/vue3'
import ApplicationMark from "@/Components/ApplicationMark.vue";

const map = ref(null);
const zoom = ref(4);
const center = ref([51.505, -0.09]);
const maxZoom = ref(13);
const minZoom = ref(3);
const dragging = ref(true);
const touchZoom = ref(true);
const scrollWheelZoom = ref(true);
const keyboard = ref(false);
const zoomControl = ref(true);
const url = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const attribution = 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors';


let selectedAreaName = ref('');
let showGeoJsonModal = ref(false);
let showModal = ref(false);

function toggleGeoJsonModal() {
    showGeoJsonModal.value = !showGeoJsonModal.value;
}


function featureStyle(feature) {
    const color = feature.properties && feature.properties.color ? feature.properties.color : 'blue';

    return {
        fillColor: color,
        color: 'white',
        weight: 2,
        opacity: 1,
        fillOpacity: 0.7,
    };
}


let geojsonFetched = ref(false);
let selectedLayer = null;
let mapLoaded = ref(false);


const onEachFeature = (feature, layer) => {
    layer.on('click', () => {

        // Reset the style of the previously selected layer
        if (selectedLayer) {
            selectedLayer.setStyle({
                weight: 3, // Set the border weight back to normal
                color: '#3388ff'

            });
        }


        selectedAreaName = feature.properties.nimi;

        layer.setStyle({
            weight: 5, // Make the border of the polygon bolder
            //change the color of the border to red
            color: 'red',
        });


        showModal.value = true;
        console.log('show modal')
        selectedLayer = layer;
        tooltip.openTooltip();
    });

    const tooltip = layer.bindTooltip(feature.properties.nimi, {
        permanent: false,
        direction: "center",
        className: "my-tooltip",
    });


};

// let zoom = ref(6);
let tms = ref(true);
let maaametCenter = latLng(58.379, 24.554)
//
let bounds = latLngBounds(
    [60.4349, 29.4338],
    [56.7458, 20.373]
);


let markers = []
let mapInstance = null;


function mapReady() {
    console.log('map ready');
    mapInstance = map.value.leafletObject;
}


function addMarker(event) {
    if (!selectedLayer) {

        showGeoJsonModal.value = true;
        return;
    }
    //if below is geo-json layer, then do not add marker
    if (event.originalEvent.target.classList.contains('leaflet-interactive')) {
        return;
    }

    const latlng = event.latlng;
    const marker = L.marker(latlng);
    const popup = L.popup().setContent(`
      <p class="mb-2 text-lg font-semibold text-gray-900">Add new observation spot?</p>
      <div class="flex space-x-2">
        <button id="yesButton" class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Yes</button>
        <button id="noButton" class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">No</button>
      </div>
    `);
    marker.bindPopup(popup);

    let observationAdded = false;

    nextTick(() => {
        mapInstance.invalidateSize();
        mapInstance.addLayer(marker);
        marker.openPopup(); // Open the popup


        // Add click event listener to the "Yes" button
        const yesButton = document.getElementById('yesButton');
        yesButton.addEventListener('click', () => {
            observationAdded = true;
            markers.push(event.latlng);
            //call add new observation
            addNewObservation(event.latlng);
        });


        // Add click event listener to the "No" button
        const noButton = document.getElementById('noButton');
        noButton.addEventListener('click', () => {
            mapInstance.removeLayer(marker);

        });

        // Add popupclose event listener to the map
        mapInstance.on('popupclose', () => {
            mapInstance.removeLayer(marker);

        });
    });


}

function addNewObservation(latlng) {
    console.log('add new observation');
    if (selectedLayer) {
        console.log('selected layer')
        const coordinates = latlng
        const name = selectedLayer.feature.properties.nimi;
        router.post('/observations/create', {coordinates: coordinates, name: name});
    }

}


// let projection = new L.Proj.CRS('EPSG:3301', '+proj=lcc +lat_1=59.33333333333334 +lat_2=58 +lat_0=57.51755393055556 +lon_0=24 +x_0=500000 +y_0=6375000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs', {
//     resolutions: [4000, 2000, 1000, 500, 250, 125, 62.5, 31.25, 15.625, 7.8125, 3.90625, 1.953125, 0.9765625, 0.48828125, 0.244140625, 0.122070313, 0.061035156, 0.030517578, 0.015258789],
//     origin: [40500, 5993000],
//     bounds: L.bounds([40500, 5993000], [1064500, 7017000])
// });


// let projection  = ref({
//     code: "EPSG:3301",
//     def: "+proj=lcc +lat_1=59.33333333333334 +lat_2=58 +lat_0=57.51755393055556 +lon_0=24 +x_0=500000 +y_0=6375000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
//     origin: [40500, 5993000],
//     resolutions: [4000, 2000, 1000, 500, 250, 125, 62.5, 31.25, 15.625, 7.8125, 3.90625, 1.953125, 0.9765625, 0.48828125, 0.244140625, 0.122070313, 0.061035156, 0.030517578, 0.015258789],
// });
//
//
//


//init geojson
var geojson = null;


var crs = new L.Proj.CRS('EPSG:3301', '+proj=lcc +lat_1=59.33333333333334 +lat_2=58 +lat_0=57.51755393055556 +lon_0=24 +x_0=500000 +y_0=6375000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs', {
    resolutions: [4000, 2000, 1000, 500, 250, 125, 62.5, 31.25, 15.625, 7.8125, 3.90625, 1.953125, 0.9765625, 0.48828125, 0.244140625, 0.122070313, 0.061035156, 0.030517578, 0.015258789],
    origin: [40500, 5993000],
    bounds: L.bounds([40500, 5993000], [1064500, 7017000])
})


onMounted(() => {
    //fetch geosjon from file
    fetch('/geojson/transformed_geojson.json')
        .then(response => response.json())
        .then(data => {
            //transform coordinates
            geojson = data;
        }).then(() => {
        geojsonFetched.value = true;
        mapLoaded.value = true;
    })

});

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
        // Set the map center to the user's current location
        center.value = [position.coords.latitude, position.coords.longitude];
        zoom.value = 9; // Adjust this value as needed
    }, error => {
        zoom.value = 9;
        console.error("Error obtaining geolocation: ", error);
    });
}

watch([center, zoom], ([newCenter, newZoom]) => {
    if (map.value) {
        map.value = {center: newCenter, zoom: newZoom};
    }
});


const addObservation = (event) => {

};


</script>
