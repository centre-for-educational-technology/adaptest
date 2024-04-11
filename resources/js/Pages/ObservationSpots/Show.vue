<template>
    <AppLayout title="Dashboard">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                {{ props.water_body.title }} - {{ props.observation_spot.name }}
            </h2>
        </template>

        <main class="relative" style="height: 400px; width: 100%;">


            <l-map ref="map" :crs="crs" v-model:zoom="zoom"
                   :useGlobalLeaflet="true" :center="maaametCenter" :bounds="bounds" :maxZoom="14" :minZoom="3"
                   :scrollWheelZoom="false" @ready="mapReady">


                <l-tile-layer
                    url="https://tiles.maaamet.ee/tm/tms/1.0.0/vreljeef/{z}/{x}/{y}.png&ASUTUS=TLU&KESKKOND=ADAPTEST"
                    :tms="tms" :full-screen="false" :worldCopyJump="true" :z-index="1"
                    :options="{ maxNativeZoom: 13, maxZoom: 13, minZoom: 3 }"/>

                <l-tile-layer
                    url="https://tiles.maaamet.ee/tm/tms/1.0.0/hybriid/{z}/{x}/{y}.png&ASUTUS=TLU&KESKKOND=ADAPTEST"
                    attribution="Maa-ameti kaart, <a href='http://www.maaamet.ee'>Maa-amet</a>" :tms="tms"
                    :full-screen="false" :worldCopyJump="true" :z-index="2"
                    :options="{ maxNativeZoom: 13, maxZoom: 13, minZoom: 3 }"/>
                <l-marker v-if="props.coordinates" :lat-lng="props.coordinates" :icon="newMarkerIcon"
                          ref="marker"></l-marker>


            </l-map>


        </main>


        <!--        Section containing information about the observation spot-->
        <section class="text-gray-600 body-font">
            <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-wrap -m-4">
                    <div class="p-4 lg:w-1/3 md:w-full">

                        <div class="card bg-base-100 shadow-xl">
                            <div class="card-body gap-4">
                                <h2 class="card-title">{{ props.water_body.title }}</h2>

                                <div>
                                    <h3 class="text-xl">
                                        <Icon icon="mdi:water" class="w-6 h-6 inline-block"/>
                                        {{ $t('Type') }}

                                    </h3>
                                    <p>{{ props.water_body.type }}</p>
                                </div>

                                <div v-if="props.water_body.area">
                                    <h3 class="text-xl">
                                        <Icon icon="carbon:area" class="w-6 h-6 inline-block"/>
                                        {{ $t('Area') }}
                                    </h3>
                                    <p>{{ props.water_body.area }}</p>
                                </div>

                                <div v-if="props.water_body.watershed">
                                    <h3 class="text-xl">
                                        <Icon icon="carbon:area" class="w-6 h-6 inline-block"/>
                                        {{ $t('Watershed') }}
                                    </h3>
                                    <p>{{ props.water_body.watershed }}</p>
                                </div>


                                <div>
                                    <h3 class="text-xl">
                                        <Icon icon="tabler:id" class="w-6 h-6 inline-block"/>

                                        {{ $t('Code') }}
                                    </h3>

                                    <p>{{ props.water_body.code }}</p>
                                </div>

                            </div>
                        </div>


                    </div>

                    <div class="p-4 lg:w-2/3 md:w-full">

                        <div class="card bg-base-100 shadow-xl">
                            <div class="card-body gap-4">
                                <h2 class="card-title">{{ props.observation_spot.name }}</h2>

                                <p class="text-lg leading-relaxed">
                                    {{ props.observation_spot.description }}
                                </p>

                                <div class="overflow-x-auto">
                                    <table class="table">
                                        <!-- head -->
                                        <thead>
                                        <tr>
                                            <th>{{ $t('Measuring time') }}</th>
                                            <th>{{ $t('Author') }}</th>

                                        </tr>
                                        </thead>
                                        <tbody>

                                        <tr v-for="observation in props.observations" :key="observation.id">
                                            <td>
                                                <div class="flex items-center gap-3">
                                                    <a href="#"
                                                       class="font-bold text-blue-500 hover:underline"
                                                       @click.prevent="handleClick(observation)">
                                                        {{ observation.measuring_time }}
                                                    </a>
                                                </div>
                                            </td>


                                            <td>
                                                <div class="flex items-center gap-3">
                                                    <div class="avatar">
                                                        <div class="mask mask-squircle w-12 h-12">
                                                            <img :src="observation.author.profile_photo_url"
                                                                 :alt="observation.author.name"/>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <Link :href="route('users.show', observation.author.id)"
                                                              class="font-bold text-blue-500 hover:underline">
                                                            {{ observation.author.name }}
                                                        </Link>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>


                                        </tbody>
                                        <!-- foot -->
                                        <tfoot>
                                        <tr>
                                            <th>{{ $t('Measuring time') }}</th>
                                            <th>{{ $t('Author') }}</th>
                                        </tr>
                                        </tfoot>

                                    </table>
                                </div>


                            </div>
                        </div>


                    </div>
                </div>
            </div>

            <div v-if="isModalVisible && currentObservation" class="modal" :class="{ 'modal-open': isModalVisible }" @click.self="isModalVisible = false">
                <div class="modal-box" style="overflow: hidden; border-radius: 10px;">
                    <div style="overflow: auto; height: 500px;">
                        <h3 class="font-bold text-lg">{{ $t('Observation details') }}</h3>
                        <table class="table">

                            <tr>
                                <th>{{ $t('Measuring time') }}:</th>
                                <td v-if="currentObservation.measuring_time">{{ currentObservation.measuring_time }}</td>
                                <td v-else>-</td>
                            </tr>
                            <tr>
                                <th>{{ $t('Odor') }}:</th>
                                <td v-if="currentObservation.odor">{{ currentObservation.odor }}</td>
                                <td v-else>-</td>
                            </tr>
                            <tr>
                                <th>{{ $t('Color and turbidity') }}:</th>
                                <td v-if="currentObservation.color_turbidity">{{ currentObservation.color_turbidity }}</td>
                                <td v-else>-</td>
                            </tr>
                            <tr>
                                <th>{{ $t('Description of natural conditions') }}:</th>
                                <td v-if="currentObservation.conditions">{{ currentObservation.conditions }}</td>
                                <td v-else>-</td>
                            </tr>
                            <tr>
                                <th>{{ $t('pH') }}:</th>
                                <td v-if="currentObservation.ph">{{ currentObservation.ph }}</td>
                                <td v-else>-</td>
                            </tr>
                            <tr>
                                <th>{{ $t('Water temperature') }}:</th>
                                <td v-if="currentObservation.water_temperature">{{ currentObservation.water_temperature }}</td>
                                <td v-else>-</td>
                            </tr>
                            <tr>
                                <th>{{ $t('Air temperature') }}:</th>
                                <td v-if="currentObservation.air_temperature">{{ currentObservation.air_temperature }}</td>
                                <td v-else>-</td>
                            </tr>
                            <tr>
                                <th>{{ $t('Specific conductance') }}:</th>
                                <td v-if="currentObservation.specific_conductance">{{ currentObservation.specific_conductance }}</td>
                                <td v-else>-</td>
                            </tr>
                            <tr>
                                <th>{{ $t('Total dissolved solids') }}:</th>
                                <td v-if="currentObservation.total_dissolved_solids">{{ currentObservation.total_dissolved_solids }}</td>
                                <td v-else>-</td>
                            </tr>
                            <tr>
                                <th>{{ $t('Nitrate (NO3)') }}:</th>
                                <td v-if="currentObservation.nitrate">{{ currentObservation.nitrate }}</td>
                                <td v-else>-</td>
                            </tr>
                            <tr>
                                <th>{{ $t('Bicarbonate (HCO3)') }}:</th>
                                <td v-if="currentObservation.bicarbonate">{{ currentObservation.bicarbonate }}</td>
                                <td v-else>-</td>
                            </tr>
                            <tr>
                                <th>{{ $t('Redox potential') }}:</th>
                                <td v-if="currentObservation.redox_potential">{{ currentObservation.redox_potential }}</td>
                                <td v-else>-</td>
                            </tr>
                            <tr>
                                <th>{{ $t('Dissolved oxygen (%)') }}:</th>
                                <td v-if="currentObservation.dissolved_oxygen_percent">{{ currentObservation.dissolved_oxygen_percent }}</td>
                                <td v-else>-</td>
                            </tr>
                            <tr>
                                <th>{{ $t('Dissolved oxygen (mg/l)') }}:</th>
                                <td v-if="currentObservation.dissolved_oxygen_mgl">{{ currentObservation.dissolved_oxygen_mgl }}</td>
                                <td v-else>-</td>
                            </tr>
                            <tr>
                                <th>{{ $t('Discharge') }}:</th>
                                <td v-if="currentObservation.discharge">{{ currentObservation.discharge }}</td>
                                <td v-else>-</td>
                            </tr>
                            <tr>
                                <th>{{ $t('Flow velocity') }}:</th>
                                <td v-if="currentObservation.water_flow['label']">{{ currentObservation.water_flow['label'] }}</td>
                                <td v-else>-</td>
                            </tr>
                            <tr>
                                <th>{{ $t('Flow direction/water level') }}:</th>
                                <td v-if="currentObservation.flow_direction">{{ currentObservation.flow_direction }}</td>
                                <td v-else>-</td>
                            </tr>
                            <tr>
                                <th>{{ $t('Erosion') }}:</th>
                                <td v-if="currentObservation.erosion">{{ yesNo(currentObservation.erosion) }}</td>
                                <td v-else>-</td>
                            </tr>
                            <tr>
                                <th>{{ $t('Nature') }}:</th>
                                <td v-if="currentObservation.nature['label']">{{ currentObservation.nature['label'] }}</td>
                                <td v-else>-</td>
                            </tr>
                            <tr>
                                <th>{{ $t('Riparian vegetation') }}:</th>
                                <td v-if="currentObservation.riparian_vegetation['label']">{{ currentObservation.riparian_vegetation['label'] }}</td>
                                <td v-else>-</td>
                            </tr>
                            <tr>
                                <th>{{ $t('Vegetation coverage') }}:</th>
                                <td v-if="currentObservation.vegetation_coverage['label']">{{ currentObservation.vegetation_coverage['label'] }}</td>
                                <td v-else>-</td>
                            </tr>
                            <tr>
                                <th>{{ $t('Puujuures, oksad vms ulatuvad vett') }}:</th>
                                <td v-if="currentObservation.tree_roots">{{ yesNo(currentObservation.tree_roots) }}</td>
                                <td v-else>-</td>
                            </tr>
                            <tr>
                                <th>{{ $t('Veekogu põhi') }}:</th>
                                <td v-if="currentObservation.bottom['label']">{{ currentObservation.bottom['label'] }}</td>
                                <td v-else>-</td>
                            </tr>
                            <tr>
                                <th>{{ $t('Veetaimestik') }}:</th>
                                <td v-if="currentObservation.aquatic_vegetation['label']">{{ currentObservation.aquatic_vegetation['label'] }}</td>
                                <td v-else>-</td>
                            </tr>
                            <tr>
                                <th>{{ $t('Ehitisi') }}:</th>
                                <td v-if="currentObservation.buildings">{{ yesNo(currentObservation.buildings) }}</td>
                                <td v-else>-</td>
                            </tr>
                            <tr>
                                <th>{{ $t('Põllumajanduslik tegevus') }}:</th>
                                <td v-if="currentObservation.agricultural_activity">{{ yesNo(currentObservation.agricultural_activity) }}</td>
                                <td v-else>-</td>
                            </tr>
                            <tr>
                                <th>{{ $t('Teed, parkimisplatsid') }}:</th>
                                <td v-if="currentObservation.roads">{{ yesNo(currentObservation.roads) }}</td>
                                <td v-else>-</td>
                            </tr>
                            <tr>
                                <th>{{ $t('Park') }}:</th>
                                <td v-if="currentObservation.park">{{ yesNo(currentObservation.park) }}</td>
                                <td v-else>-</td>
                            </tr>
                            <tr>
                                <th>{{ $t('Supelrand') }}:</th>
                                <td v-if="currentObservation.beach">{{ yesNo(currentObservation.beach) }}</td>
                                <td v-else>-</td>
                            </tr>
                            <tr>
                                <th>{{ $t('Paadisild, slip') }}:</th>
                                <td v-if="currentObservation.boat_bridge">{{ yesNo(currentObservation.boat_bridge) }}</td>
                                <td v-else>-</td>
                            </tr>
                            <tr>
                                <th>{{ $t('Kaldakindlustusrajatised') }}:</th>
                                <td v-if="currentObservation.shore_facility">{{ yesNo(currentObservation.shore_facility) }}</td>
                                <td v-else>-</td>
                            </tr>
                            <tr>
                                <th>{{ $t('Paisud, sillad') }}:</th>
                                <td v-if="currentObservation.dams">{{ yesNo(currentObservation.dams) }}</td>
                                <td v-else>-</td>
                            </tr>
                            <tr>
                                <th>{{ $t('Kaldavööndi prügistamist') }}:</th>
                                <td v-if="currentObservation.littering">{{ yesNo(currentObservation.littering) }}</td>
                                <td v-else>-</td>
                            </tr>
                            <tr>
                                <th>{{ $t('Veereostust') }}:</th>
                                <td v-if="currentObservation.water_pollution">{{ yesNo(currentObservation.water_pollution) }}</td>
                                <td v-else>-</td>
                            </tr>

                        </table>
                        <div class="modal-action">
                            <button class="btn" @click="isModalVisible = false">
                                Ok
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </section>


    </AppLayout>
</template>

<script setup>
import {LGeoJson, LMap, LMarker, LPopup, LTileLayer} from "@vue-leaflet/vue-leaflet";
import AppLayout from "@/Layouts/AppLayout.vue";
import "leaflet/dist/leaflet.css";
import {onMounted, ref, watch} from 'vue';
import {latLng, latLngBounds} from "leaflet/dist/leaflet-src.esm.js";
import * as L from 'leaflet';
import 'proj4leaflet';
import markerIconUrl from '@/assets/pin.svg';
import {Icon} from '@iconify/vue';
import {Link} from '@inertiajs/vue3';
import {trans} from "laravel-vue-i18n";


const map = ref(null);
const zoom = ref(4);
const center = ref([51.505, -0.09]);
const dragging = ref(true);
const touchZoom = ref(true);
const keyboard = ref(false);
const url = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

let isModalVisible = ref(false);

// Define a reactive variable for storing the current observation
let currentObservation = ref(null);


// Add a method to handle the click event
const handleClick = (observation) => {
    currentObservation.value = observation;
    isModalVisible.value = true;
};

function yesNo(value) {
    return value ? trans('Yes') : trans('No');
}

let props = defineProps({
        observation_spot: {
            type: Object,
            required: false,
            default: null,
        },

        water_body: {
            type: Object,
            required: true,
        },

        coordinates: {
            type: Object,
            required: false,
            default: null,
        },

        observations: {
            type: Object,
            required: false,
            default: null,
        },

    }
);

const newMarkerIcon = L.icon({
    iconUrl: markerIconUrl,
    iconSize: [55, 55],
    iconAnchor: [25, 55],
    popupAnchor: [0, -55],
});


let selectedAreaName = ref('');
let showModal = ref(false);


let selectedLayer = null;
let mapLoaded = ref(false);

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


var crs = new L.Proj.CRS('EPSG:3301', '+proj=lcc +lat_1=59.33333333333334 +lat_2=58 +lat_0=57.51755393055556 +lon_0=24 +x_0=500000 +y_0=6375000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs', {
    resolutions: [4000, 2000, 1000, 500, 250, 125, 62.5, 31.25, 15.625, 7.8125, 3.90625, 1.953125, 0.9765625, 0.48828125, 0.244140625, 0.122070313, 0.061035156, 0.030517578, 0.015258789],
    origin: [40500, 5993000],
    bounds: L.bounds([40500, 5993000], [1064500, 7017000])
})


onMounted(async () => {

    mapLoaded.value = true;
});

watch([center, zoom], ([newCenter, newZoom]) => {
    if (map.value) {
        map.value = {center: newCenter, zoom: newZoom};
    }
});


</script>
