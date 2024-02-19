<template>
    <AppLayout :title="$t('Main map')">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                {{ $t(title) }}
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

            <!--                            <l-geo-json :geojson_jarved="geojson_jarved"/>-->
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
                        {{ loaderText }}
                    </p>
                </div>

            </div>


            <l-map ref="map" :crs="crs" v-model:zoom="zoom"
                   :useGlobalLeaflet="true" :center="maaametCenter" :bounds="bounds" :maxZoom="14" :minZoom="3"
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

                <!--                <l-wms-tile-layer-->
                <!--                    url="https://gsavalik.envir.ee/geoserver/eelis/ows?service=WMS"-->
                <!--                    layers="eelis:kr_jarv"-->

                <!--                ></l-wms-tile-layer>-->

                <l-geo-json :visible="geojsonFetched" :options="{ style: featureStyle, onEachFeature: onEachFeature }"
                            :geojson="jarvedData"></l-geo-json>

                <l-geo-json :visible="geojsonFetched" :options="{ style: featureStyle, onEachFeature: onEachFeature }"
                            :geojson="vooluvesiData"></l-geo-json>

                <!--                <l-marker v-for="marker, index in markers" :lat-lng="marker" @click="removeMarker(index)"></l-marker>-->

                <l-marker v-for="(marker, index) in markers" :key="index" :lat-lng="marker">
                    <l-popup ref="popup">
                        Popup content
                    </l-popup>
                </l-marker>

                <l-marker
                    v-for="(spot, index) in props.observation_spots.data" :key="index"
                    :lat-lng="[spot.latitude, spot.longitude]"
                    :icon="markerIcon"
                    @click="askForObservation(spot)">
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
import {LGeoJson, LMap, LMarker, LPopup, LTileLayer} from "@vue-leaflet/vue-leaflet";
import AppLayout from "@/Layouts/AppLayout.vue";
import "leaflet/dist/leaflet.css";
import {nextTick, onMounted, ref, watch} from 'vue';
import {latLng, latLngBounds} from "leaflet/dist/leaflet-src.esm.js";
import * as L from 'leaflet';
import 'proj4leaflet';
import Modal from "@/CustomComponents/LakeModal.vue";
import {router} from '@inertiajs/vue3'
import ApplicationMark from "@/Components/ApplicationMark.vue";
import markerIconUrl from '@/assets/pin.svg';

const map = ref(null);
const zoom = ref(4);
const center = ref([55.615, -50.09]);
const dragging = ref(true);
const touchZoom = ref(true);
const scrollWheelZoom = ref(true);
const keyboard = ref(false);
const url = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

let props = defineProps({
    observation_spots: Object,
    title: String,
    main_map: Boolean,
});


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

// Add a click event listener to the map
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


let tms = ref(true);
let maaametCenter = latLng(58.789, 24.554);

let bounds = latLngBounds(
    [60.4349, 29.4338],
    [56.7458, 20.373]
);


let markers = []
let mapInstance = null;


function mapReady() {
    console.log('map ready');
    mapInstance = map.value.leafletObject;

    if (mapInstance) {
        mapInstance.scrollWheelZoom.disable();
    }
}

const markerIcon = L.icon({
    iconUrl: markerIconUrl,
    iconSize: [55, 55],
    iconAnchor: [25, 55],
    popupAnchor: [0, -55],
    className: 'marker-icon'
});


// Add a marker to the map
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
    const marker = L.marker(latlng, {icon: markerIcon});
    const popup = L.popup().setContent(`
      <p class="mb-2 text-lg font-semibold text-gray-900">Add a new observation spot?</p>
      <div class="flex space-x-2">
        <button id="yesButton" class="px-4 py-2 btn btn-primary">Yes</button>
        <button id="noButton" class="px-4 py-2 btn">No</button>
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
            addNewSpotAndObservation(event.latlng);
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


function askForObservation(spot) {
    console.log('mapInstance:', mapInstance); // Add this line

    const popupContent = `
      <h2 class="mb-2 text-lg font-semibold text-gray-900">${spot.name}</h2>
      <p class="mb-2 text-md text-gray-900">Add a new observation?</p>
      <div class="flex space-x-2">
          <div class="join">
            <button id="yesButton" class="px-4 py-2 btn join-item btn-primary">Yes</button>
            <button id="noButton" class="px-4 py-2 btn join-item btn-error">No</button>
           </div>
           <button id="viewButton" class="px-4 py-2 btn btn-secondary">View</button>

      </div>
    `;

    const popup = L.popup()
        .setLatLng([spot.latitude, spot.longitude])
        .setContent(popupContent)
        .openOn(mapInstance);

    // Add click event listener to the "Yes" button
    const yesButton = document.getElementById('yesButton');
    yesButton.addEventListener('click', () => {
        addNewObservation(spot.id);

    });

    // Add click event listener to the "No" button
    const noButton = document.getElementById('noButton');
    noButton.addEventListener('click', () => {
        mapInstance.closePopup();
    });

    // Add click event listener to the "View" button
    const viewButton = document.getElementById('viewButton');
    viewButton.addEventListener('click', () => {
        router.get(`/observation-spots/${spot.id}`)
    });


}

// Add a new spot and observation
function addNewSpotAndObservation(latlng) {
    console.log('add new spot and observation');
    if (selectedLayer) {
        const coordinates = JSON.stringify(latlng);
        const name = selectedLayer.feature.properties.nimi;
        const water_body_kr_code = selectedLayer.feature.properties.kr_kood;
        const observation_spot_id = null;
        router.get(`/observations/create?coordinates=${coordinates}&name=${name}&water_body_kr_code=${water_body_kr_code}&observation_spot_id=${observation_spot_id}`)
    }

}

// Add a new observation
function addNewObservation(spotId) {
    console.log('add new observation');
    router.get(`/observations/create?observation_spot_id=${spotId}`)

}


//init geojson
var jarvedData = null;
var vooluvesiData = null;
let loaderText = ref('Laen järved...');


var crs = new L.Proj.CRS('EPSG:3301', '+proj=lcc +lat_1=59.33333333333334 +lat_2=58 +lat_0=57.51755393055556 +lon_0=24 +x_0=500000 +y_0=6375000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs', {
    resolutions: [4000, 2000, 1000, 500, 250, 125, 62.5, 31.25, 15.625, 7.8125, 3.90625, 1.953125, 0.9765625, 0.48828125, 0.244140625, 0.122070313, 0.061035156, 0.030517578, 0.015258789],
    origin: [40500, 5993000],
    bounds: L.bounds([40500, 5993000], [1064500, 7017000])
})

let estoniaBounds = latLngBounds(
    [57.522, 21.77], // Southwest coordinates
    [59.674, 28.209]  // Northeast coordinates
);

onMounted(async () => {
    const cache = await caches.open('geojson-cache');

    // Fetch jarved.json
    let response = await cache.match('/geojson/jarved');
    if (!response) {
        response = await fetch('/geojson/jarved');
        cache.put('/geojson/jarved', response.clone());
    }
    let data = await response.json();
    loaderText.value = 'Laen vooluveekogud...';
    jarvedData = data;

    // Fetch vooluvesi.json
    response = await cache.match('/geojson/vooluvesi');
    if (!response) {
        response = await fetch('/geojson/vooluvesi');
        cache.put('/geojson/vooluvesi', response.clone());
    }
    data = await response.json();
    vooluvesiData = data;

    geojsonFetched.value = true;
    mapLoaded.value = true;
});
if (navigator.geolocation && props.main_map) {
    navigator.geolocation.getCurrentPosition(position => {
        let userLocation = latLng(position.coords.latitude, position.coords.longitude);
        // Check if user's location is within the bounds of Estonia
        if (estoniaBounds.contains(userLocation)) {
            // Set maaametCenter to the user's current location
            maaametCenter = userLocation;
            console.log('maaametCenter:', maaametCenter);
            zoom.value = 9; // Adjust this value as needed
        }
    }, error => {
        console.error("Error obtaining geolocation: ", error);
    });
}

watch([center, zoom], ([newCenter, newZoom]) => {
    if (map.value) {
        map.value = {center: newCenter, zoom: newZoom};
    }
});


</script>
