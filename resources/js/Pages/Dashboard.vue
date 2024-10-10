<template>
    <AppLayout :title="$t('Main map')">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                {{ $t(title) }}
            </h2>
        </template>

        <main class="relative" style="height: calc(100vh - 188px); width: 100%;">
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


            <div tabindex="0" ref="collapseRef"
                 class="collapse w-auto checkbox-container bg-primary text-primary-content focus:bg-secondary focus:text-secondary-content">
                <div class="collapse-title text-xl font-medium" @click="isCollapsed = !isCollapsed">
                    <Icon icon="lucide:layers" class="w-6 h-6 inline-block"/>
                    {{ $t('Options') }}
                </div>
                <div class="collapse-content" v-show="!isCollapsed">
                    <div class="lg:join lg:space-x-1">

                        <label class="label cursor-pointer">
                            <span class="label-text mr-1">Järved</span>
                            <input class="checkbox checkbox-lg" type="checkbox" v-model="isJarvedVisible"
                                   @mousedown.prevent>
                        </label>

                        <label class="label cursor-pointer">
                            <span class="label-text mr-1">Vooluveekogud</span>
                            <input class="checkbox checkbox-lg" type="checkbox" v-model="isVooluvesiVisible"
                                   @mousedown.prevent>
                        </label>

                        <label class="label cursor-pointer">
                            <span class="label-text mr-1">Karstijärvikud</span>
                            <input class="checkbox checkbox-lg" type="checkbox" v-model="isKarstVisible"
                                   @mousedown.prevent>
                        </label>

                        <button class="btn btn-accent" @mousedown.prevent="getUserLocation">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                 stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                      d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                                <path stroke-linecap="round" stroke-linejoin="round"
                                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"/>
                            </svg>
                        </button>


                    </div>

                </div>
            </div>


            <l-map ref="map" :crs="crs" v-model:zoom="zoom"
                   :useGlobalLeaflet="true" :center="maaametCenter" :bounds="bounds" :maxZoom="14" :minZoom="3"
                   :scrollWheelZoom="true" @click="addMarker" @ready="mapReady">


                <l-tile-layer
                    url="https://tiles.maaamet.ee/tm/tms/1.0.0/vreljeef/{z}/{x}/{y}.png&ASUTUS=TLU&KESKKOND=ADAPTEST"
                    :tms="tms" :full-screen="false" :worldCopyJump="true" :z-index="1"
                    :options="{ maxNativeZoom: 13, maxZoom: 13, minZoom: 3 }"/>

                <l-tile-layer
                    url="https://tiles.maaamet.ee/tm/tms/1.0.0/hybriid/{z}/{x}/{y}.png&ASUTUS=TLU&KESKKOND=ADAPTEST"
                    attribution="Maa-ameti kaart, <a href='http://www.maaamet.ee'>Maa-amet</a>" :tms="tms"
                    :full-screen="false" :worldCopyJump="true" :z-index="2"
                    :options="{ maxNativeZoom: 13, maxZoom: 13, minZoom: 3 }"/>

                <l-marker v-for="(marker, index) in markers" :key="index" :lat-lng="marker">
                    <l-popup ref="popup">
                        Popup content
                    </l-popup>
                </l-marker>

                <l-marker
                    v-for="(spot, index) in props.observation_spots" :key="index"
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


            <!-- Modal for when the location of a user is outside of Estonia -->
            <div class="modal" :class="{ 'modal-open': showOutsideEstoniaModal }">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">You are outside of Estonia</h3>
                    <div class="modal-action">
                        <button class="btn" @click="showOutsideEstoniaModal = false">
                            Ok
                        </button>
                    </div>
                </div>
            </div>


            <!-- Modal for when observation spot is not within 100m of water body borders -->
            <div class="modal" :class="{ 'modal-open': showTooFarModal }">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">The observation spot must be within 100 meters of the water body
                        border.</h3>
                    <div class="modal-action">
                        <button class="btn" @click="showTooFarModal = false">
                            Ok
                        </button>
                    </div>
                </div>
            </div>

        </main>
    </AppLayout>
</template>

<script setup>
import {LMap, LMarker, LPopup, LTileLayer} from "@vue-leaflet/vue-leaflet";
import AppLayout from "@/Layouts/AppLayout.vue";
import "leaflet/dist/leaflet.css";
import {nextTick, onBeforeUnmount, onMounted, ref, watch} from 'vue';
import {latLng, latLngBounds} from "leaflet/dist/leaflet-src.esm.js";
import * as L from 'leaflet';
import 'proj4leaflet';
import Modal from "@/CustomComponents/LakeModal.vue";
import {router} from '@inertiajs/vue3'
import ApplicationMark from "@/Components/ApplicationMark.vue";
import markerIconUrl from '@/assets/pin.svg';
import {trans} from 'laravel-vue-i18n';
import {computed} from 'vue';
import * as turf from '@turf/turf';
import {Icon} from "@iconify/vue";


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
let showOutsideEstoniaModal = ref(false);
let showTooFarModal = ref(false);

let isJarvedVisible = ref(false);
let isVooluvesiVisible = ref(false);
let isKarstVisible = ref(false);

let vooluvesiLayer = null;
let jarvedLayer = null;
let karstLayer = null;

let isCollapsed = ref(true);
let collapseRef = ref(null);

const updateLocalStorage = () => {
    localStorage.setItem('isJarvedVisible', isJarvedVisible.value);
    localStorage.setItem('isVooluvesiVisible', isVooluvesiVisible.value);
    localStorage.setItem('isKarstVisible', isKarstVisible.value);
};

watch([isJarvedVisible, isVooluvesiVisible, isKarstVisible], () => {
    updateLocalStorage();
});

// Add a method to get the user's location
const getUserLocation = () => {
    loaderText.value = 'Laen geolokatsiooni...';
    mapLoaded.value = false; // Start loading
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            let userLocation = latLng(position.coords.latitude, position.coords.longitude);
            // Check if user's location is within the bounds of Estonia
            if (estoniaBounds.contains(userLocation)) {

                // Update the map center and zoom
                mapInstance.setView(userLocation, 11);

                // Add a marker at the user's location
                const userMarker = L.marker(userLocation, {icon: markerIcon});
                mapInstance.addLayer(userMarker);
            } else {
                showOutsideEstoniaModal.value = true;
            }
            mapLoaded.value = true; // End loading
        }, error => {
            console.error("Error obtaining geolocation: ", error);
            mapLoaded.value = true; // End loading
        });
    } else {
        console.error("Geolocation is not supported by this browser.");
        mapLoaded.value = true; // End loading
    }
};

function toggleGeoJsonModal() {
    showGeoJsonModal.value = !showGeoJsonModal.value;

}

let vooluvesiWeight = computed(() => {
    if (zoom.value >= 7) {
        return 15; // Increase the weight when zoomed in
    } else {
        return 2; // Use a smaller weight when zoomed out
    }
});

function featureStyle1(feature) {
    return {
        fillColor: '#00B1F6',
        color: '#00B1F6',
        weight: 2,
        opacity: 1,
        fillOpacity: 0.6,
    };
}

function featureStyle2(feature) {
    return {
        fillColor: '#00b5ff',
        color: '#00b5ff',
        weight: vooluvesiWeight.value,
        opacity: 1,
        fillOpacity: 0.7,
    };
}

function featureStyle3(feature) {
    return {
        fillColor: '#006891',
        color: '#006891',
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

        // Reset the style of the previously selected layer using previously stored values
        if (selectedLayer) {
            selectedLayer.setStyle({
                weight: selectedLayer.options.previousWeight,
                color: selectedLayer.options.previousColor,
            });

            // Remove selection if already selected layers is clicked
            if (layer === selectedLayer) {
                nextTick(() => {
                    selectedLayer = null;
                });
                return;
            }
        }


        selectedAreaName = feature.properties.nimi;

        // Set the weight and color for the selected feature while simultaneously storing the previous values in custom options
        layer.setStyle({
            weight: 5,
            color: '#ff5861',
            previousWeight: layer.options.weight,
            previousColor: layer.options.color,
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
        //mapInstance.scrollWheelZoom.disable();
    }
}

const markerIcon = L.icon({
    iconUrl: markerIconUrl,
    iconSize: [55, 55],
    iconAnchor: [25, 55],
    popupAnchor: [0, -55],
    className: 'marker-icon'
});

/**
 * Converts supported GeoJSON feature types to corresponding Turf.js line or multiline representation.
 *
 * @param feature
 * @returns {Feature<LineString | MultiLineString, Properties>|FeatureCollection<LineString | MultiLineString, Properties>|Feature<LineString, Properties>|Feature<MultiLineString, Properties>}
 */
function featureToLine(feature) {
    switch(feature.geometry.type) {
        case 'Polygon':
            return turf.polygonToLine(turf.polygon(feature.geometry.coordinates));
        case 'MultiPolygon':
            return turf.polygonToLine(turf.multiPolygon(feature.geometry.coordinates));
        case 'LineString':
            return turf.lineString(feature.geometry.coordinates);
        case 'MultiLineString':
            return turf.multiLineString(feature.geometry.coordinates);
        default:
            throw new Error(`Unsupported geometry type of ${feature.geometry.type}!`);
    }
}

/**
 * Calculates distance in meters between provided point and feature. Feature is converted to line or multiline
 * representation to determine the nearest point on line to be used in distance determination.
 *
 * @param point
 * @param feature
 * @returns {number}
 */
function pointDistanceFromFeature(point, feature) {
    const line = featureToLine(feature);
    const nearestPointOnLine = turf.nearestPointOnLine(line, point);

    return turf.distance(point, nearestPointOnLine, { units: 'meters' });
}

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

    const clickedPoint = turf.point([event.latlng.lng, event.latlng.lat]);
    const distance = pointDistanceFromFeature(clickedPoint, selectedLayer.feature);

    if (distance > 100) {
        // Show an error message and return
        console.error('The observation spot must be within 100 meters of the lake border.');
        showTooFarModal.value = true;
        return;
    }

    const latlng = event.latlng;
    const marker = L.marker(latlng, {icon: markerIcon});
    const popup = L.popup().setContent(`
      <p class="mb-2 text-lg font-semibold text-gray-900">${trans('Add new observation spot?')}</p>
      <div class="flex space-x-2">
        <button id="yesButton" class="px-4 py-2 btn btn-primary">${trans('Yes')}</button>
        <button id="noButton" class="px-4 py-2 btn">${trans('No')}</button>
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
            // Reset the style of the previously selected layer using previously stored values
            if (selectedLayer) {
                selectedLayer.setStyle({
                    weight: selectedLayer.options.previousWeight,
                    color: selectedLayer.options.previousColor,
                });
                selectedLayer = null; // Clear the selected layer
            }

        });

        // Add popupclose event listener to the map
        mapInstance.on('popupclose', () => {
            mapInstance.removeLayer(marker);

        });
    });


}


function askForObservation(spot) {


    const popupContent = `
      <h2 class="mb-2 text-lg font-semibold text-gray-900">${spot.name}</h2>
      <p class="mb-2 text-md text-gray-900">${trans('Add a new observation?')}</p>
      <div class="flex space-x-2">
          <div class="join">
            <button id="yesButton" class="px-4 py-2 btn join-item btn-primary">${trans('Yes')}</button>
            <button id="noButton" class="px-4 py-2 btn join-item btn-error">${trans('No')}</button>
           </div>
           <button id="viewButton" class="px-4 py-2 btn btn-secondary">${trans('View')}</button>

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
        router.get(`/observations/create?coordinates=${coordinates}&name=${name}&water_body_kr_code=${water_body_kr_code}`);
    }
}

// Add a new observation
function addNewObservation(spotId) {
    console.log('add new observation');
    router.get(`/observations/create?observation_spot_id=${spotId}`)

}


let loaderText = ref('Laen andmeid...');

const crs = new L.Proj.CRS('EPSG:3301', '+proj=lcc +lat_1=59.33333333333334 +lat_2=58 +lat_0=57.51755393055556 +lon_0=24 +x_0=500000 +y_0=6375000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs', {
    resolutions: [4000, 2000, 1000, 500, 250, 125, 62.5, 31.25, 15.625, 7.8125, 3.90625, 1.953125, 0.9765625, 0.48828125, 0.244140625, 0.122070313, 0.061035156, 0.030517578, 0.015258789],
    origin: [40500, 5993000],
    bounds: L.bounds([40500, 5993000], [1064500, 7017000])
})

let estoniaBounds = latLngBounds(
    [57.522, 21.77], // Southwest coordinates
    [59.674, 28.209]  // Northeast coordinates
);


onMounted(async () => {

    document.addEventListener('click', (event) => {
        if (collapseRef.value && !collapseRef.value.contains(event.target)) {
            isCollapsed.value = true;
        }
    });

    // Wait for the map to be ready
    await nextTick();


    // Open GeoJSON data cache
    const cache = await caches.open('geojson-cache');
    const keys = await cache.keys();

    // Check if all the GeoJSON data requests are cached and fetch and cache the data id not
    if (keys.filter((key) => /\/geojson\/(jarved|vooluvesi|karst)/.test(key.url)).length !== 3) {
        await cache.addAll(['/geojson/jarved', '/geojson/vooluvesi', '/geojson/karst']);
    }

    // Fetch the data from cache, instantiate a data container and fill it with GeoJSON data
    const responses = await cache.matchAll();
    const data = {};

    for (const response of responses) {
        data[response.url.split('/geojson/')[1]] = await response.json();
    }

    geojsonFetched.value = true;
    mapLoaded.value = true;

    // Get the map instance
    const mapInstance = map.value.leafletObject;

    // Create the GeoJSON layers
    jarvedLayer = L.geoJSON(data.jarved, {style: featureStyle1, onEachFeature: onEachFeature});
    vooluvesiLayer = L.geoJSON(data.vooluvesi, {style: featureStyle2, onEachFeature: onEachFeature});
    karstLayer = L.geoJSON(data.karst, {style: featureStyle3, onEachFeature: onEachFeature});


    // Retrieve checkbox states from local storage
    isJarvedVisible.value = localStorage.getItem('isJarvedVisible') === 'true' || false;
    isVooluvesiVisible.value = localStorage.getItem('isVooluvesiVisible') === 'true' || false;
    isKarstVisible.value = localStorage.getItem('isKarstVisible') === 'true' || false;

    // Add the layers to the map
    if (isJarvedVisible.value) {
        jarvedLayer.addTo(mapInstance);
    }
    if (isVooluvesiVisible.value) {
        vooluvesiLayer.addTo(mapInstance);
    }
    if (isKarstVisible.value) {
        karstLayer.addTo(mapInstance);
    }

});

// Remove any GeoJSON layers from the map, remove all feature layers, removes all listeners and overwrite variable with null
onBeforeUnmount(async () => {
    if (jarvedLayer) {
        mapInstance.removeLayer(jarvedLayer);
        jarvedLayer.clearLayers();
        jarvedLayer.off();
        jarvedLayer = null;
    }
    if (vooluvesiLayer) {
        mapInstance.removeLayer(vooluvesiLayer);
        vooluvesiLayer.clearLayers();
        vooluvesiLayer.off();
        vooluvesiLayer = null;
    }
    if (karstLayer) {
        mapInstance.removeLayer(karstLayer);
        karstLayer.clearLayers();
        karstLayer.off();
        karstLayer = null;
    }
});

if (navigator.geolocation && props.main_map) {
    navigator.geolocation.getCurrentPosition(position => {
        let userLocation = latLng(position.coords.latitude, position.coords.longitude);
        // Check if user's location is within the bounds of Estonia
        if (estoniaBounds.contains(userLocation)) {
            // Set maaametCenter to the user's current location
            maaametCenter = userLocation;
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


watch(zoom, () => {
    if (vooluvesiLayer) {
        vooluvesiLayer.setStyle(featureStyle2);
    }
});

watch(isJarvedVisible, (newVal) => {
    if (newVal) {
        jarvedLayer.addTo(mapInstance);
    } else {
        mapInstance.removeLayer(jarvedLayer);
    }
});

watch(isVooluvesiVisible, (newVal) => {
    if (newVal) {
        vooluvesiLayer.addTo(mapInstance);
    } else {
        mapInstance.removeLayer(vooluvesiLayer);
    }
});

watch(isKarstVisible, (newVal) => {
    if (newVal) {
        karstLayer.addTo(mapInstance);
    } else {
        mapInstance.removeLayer(karstLayer);
    }
});


</script>
