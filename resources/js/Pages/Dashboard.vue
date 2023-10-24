<template>
    <AppLayout title="Dashboard">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                Dashboard
            </h2>
        </template>

        <main>
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


            <l-map ref="map"
                   style="height: calc(100vh - 138px); width: 100%;"
                   :crs="crs"
                   v-model:zoom="zoom" :useGlobalLeaflet="false"
                   :center="maaametCenter"
                   :bounds="bounds"
                   :maxZoom="14"
                   :minZoom="3"
                   :scrollWheelZoom="false"
            >

                <l-tile-layer
                    url="https://tiles.maaamet.ee/tm/tms/1.0.0/vreljeef/{z}/{x}/{y}.png&ASUTUS=TLU&KESKKOND=ALLIKAD"
                    :tms="tms"
                    :full-screen="false"
                    :worldCopyJump="true"
                    :z-index="1"
                    :options="{ maxNativeZoom: 13, maxZoom:13, minZoom: 3 }"
                />

                <l-tile-layer
                    url="https://tiles.maaamet.ee/tm/tms/1.0.0/hybriid/{z}/{x}/{y}.png&ASUTUS=TLU&KESKKOND=ALLIKAD"
                    attribution="Maa-ameti kaart, <a href='http://www.maaamet.ee'>Maa-amet</a>"
                    :tms="tms"
                    :full-screen="false"
                    :worldCopyJump="true"
                    :z-index="2"
                    :options="{ maxNativeZoom: 13, maxZoom:13, minZoom: 3 }"
                />

                <l-geo-json
                    :visible="geojsonFetched"
                    :options="{ style: featureStyle, onEachFeature: onEachFeature  }"
                    :geojson="geojson"></l-geo-json>
            </l-map>

        </main>
    </AppLayout>
</template>

<script setup>
import {LGeoJson, LMap, LTileLayer} from "@vue-leaflet/vue-leaflet";
import AppLayout from "@/Layouts/AppLayout.vue";
import "leaflet/dist/leaflet.css";
import {onMounted, ref, watch} from 'vue';
import {latLng, latLngBounds} from "leaflet/dist/leaflet-src.esm.js";
import {relief_layers} from "@/constants.js";
import * as L from 'leaflet';
import 'proj4leaflet';

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

const onEachFeature = (feature, layer) => {
    const tooltip = layer.bindTooltip(feature.properties.nimi, {
        permanent: false,
        direction: "center",
        className: "my-tooltip",
    });

    layer.on("click", (e) => {

        tooltip.openTooltip();

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

let tilelayers = ref(relief_layers);


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
    })
});

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
        // Set the map center to the user's current location
        center.value = [position.coords.latitude, position.coords.longitude];
        zoom.value = 9; // Adjust this value as needed
    }, error => {
        console.error("Error obtaining geolocation: ", error);
    });
}

watch([center, zoom], ([newCenter, newZoom]) => {
    if (map.value) {
        map.value = { center: newCenter, zoom: newZoom };
    }
});


</script>

<style>
html,
body {
    margin: 0;
    padding: 0;
}

main {
    height: 100vh;
    width: 100vw;
}
</style>
