<script setup>

import Input from "@/CustomComponents/Input.vue";

import {defineProps, ref, watch} from "vue";
import {useForm} from "@inertiajs/vue3";
import InputError from "@/CustomComponents/InputError.vue";
import Label from "@/CustomComponents/Label.vue";
import Checkbox from "@/CustomComponents/Checkbox.vue";
import SelectOption from "@/CustomComponents/Select.vue";
import {usePage} from '@inertiajs/vue3'

import {Link} from '@inertiajs/vue3'

import {LGeoJson, LMap, LMarker, LPopup, LTileLayer} from "@vue-leaflet/vue-leaflet";
import "leaflet/dist/leaflet.css";
import {nextTick, onMounted} from 'vue';
import {latLng, latLngBounds} from "leaflet/dist/leaflet-src.esm.js";
import * as L from 'leaflet';
import 'proj4leaflet';
import markerIconUrl from '@/assets/pin.svg';

const page = usePage()

let props = defineProps({
    observation: {
        type: Object,
        required: false,
        default: null,
    },
    water_flows: {
        type: Object,
        required: true,
    },
    natures: {
        type: Object,
        required: true,
    },
    riparian_vegetations: {
        type: Object,
        required: true,
    },
    vegetation_coverages: {
        type: Object,
        required: true,
    },
    bottoms: {
        type: Object,
        required: true,
    },
    aquatic_vegetations: {
        type: Object,
        required: true,
    },
    coordinates: {
        type: Object,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    water_body_kr_code: {
        type: String,
        required: true,
    },
    observation_spot_id: {
        type: Number,
        required: true,
        default: null,
    },

});

let hasObservation = props.observation !== null;
let observation = props.observation;

let form = useForm({
    measuring_time: hasObservation ? observation.measuring_time : new Date().toISOString().slice(0, 16),
    odor: hasObservation ? observation.odor : '',
    color_turbidity: hasObservation ? observation.color_turbidity : '',
    conditions: hasObservation ? observation.conditions : '',
    ph: hasObservation ? observation.ph : '',
    water_temperature: hasObservation ? observation.water_temperature : '',
    air_temperature: hasObservation ? observation.air_temperature : '',
    specific_conductance: hasObservation ? observation.specific_conductance : '',
    total_dissolved_solids: hasObservation ? observation.total_dissolved_solids : '',
    nitrate: hasObservation ? observation.nitrate : '',
    bicarbonate: hasObservation ? observation.bicarbonate : '',
    redox_potential: hasObservation ? observation.redox_potential : '',
    dissolved_oxygen_percent: hasObservation ? observation.dissolved_oxygen_percent : '',
    dissolved_oxygen_mgl: hasObservation ? observation.dissolved_oxygen_mgl : '',
    discharge: hasObservation ? observation.discharge : '',
    water_flow: hasObservation ? observation.water_flow['number'] : '',
    flow_direction: hasObservation ? observation.flow_direction : '',
    erosion: hasObservation ? Boolean(observation.erosion) : false,
    nature: hasObservation ? observation.nature['number'] : '',
    riparian_vegetation: hasObservation ? observation.riparian_vegetation['number'] : '',
    vegetation_coverage: hasObservation ? observation.vegetation_coverage['number'] : '',
    tree_roots: hasObservation ? Boolean(observation.tree_roots) : false,
    bottom: hasObservation ? observation.bottom['number'] : '',
    aquatic_vegetation: hasObservation ? observation.aquatic_vegetation['number'] : '',
    buildings: hasObservation ? Boolean(observation.buildings) : false,
    agricultural_activity: hasObservation ? Boolean(observation.agricultural_activity) : false,
    roads: hasObservation ? Boolean(observation.roads) : false,
    park: hasObservation ? Boolean(observation.park) : false,
    beach: hasObservation ? Boolean(observation.beach) : false,
    boat_bridge: hasObservation ? Boolean(observation.boat_bridge) : false,
    shore_facility: hasObservation ? Boolean(observation.shore_facility) : false,
    dams: hasObservation ? Boolean(observation.dams) : false,
    littering: hasObservation ? Boolean(observation.littering) : false,
    water_pollution: hasObservation ? Boolean(observation.water_pollution) : false,
    water_body_kr_code: props.water_body_kr_code,
    observation_spot_id: props.observation_spot_id,
    latitude: props.coordinates.lat,
    longitude: props.coordinates.lng,
    observation_spot_name: hasObservation ? observation.observation_spot.name : '',
    observation_spot_description: hasObservation ? observation.observation_spot.description : '',
});

const map = ref(null);
const marker = ref(null);
const zoom = ref(10);
let mapInstance = null;
let tms = ref(true);
let maaametCenter = latLng(58.379, 24.554);
let bounds = latLngBounds(
    [60.4349, 29.4338],
    [56.7458, 20.373]
);
var crs = new L.Proj.CRS('EPSG:3301', '+proj=lcc +lat_1=59.33333333333334 +lat_2=58 +lat_0=57.51755393055556 +lon_0=24 +x_0=500000 +y_0=6375000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs', {
    resolutions: [4000, 2000, 1000, 500, 250, 125, 62.5, 31.25, 15.625, 7.8125, 3.90625, 1.953125, 0.9765625, 0.48828125, 0.244140625, 0.122070313, 0.061035156, 0.030517578, 0.015258789],
    origin: [40500, 5993000],
    bounds: L.bounds([40500, 5993000], [1064500, 7017000])
})

const newMarkerIcon = L.icon({
    iconUrl: markerIconUrl,
    iconSize: [55, 55],
    iconAnchor: [25, 55],
    popupAnchor: [0, -55],
});

watch(props.coordinates, (newCoordinates) => {
    if (newCoordinates && mapInstance) {
        mapInstance.setView(newCoordinates, zoom.value);
    }
});


function mapReady() {
    console.log('map ready');
    mapInstance = map.value.leafletObject;

    if (mapInstance) {
        mapInstance.scrollWheelZoom.disable();

        if (props.coordinates) {
            mapInstance.setView(props.coordinates, zoom.value);
        }
    }
}

let submit = () => {
    const options = {
        forceFormData: true,
    }

    form.transform((data) => ({
        ...data,
        water_body_kr_code: props.water_body_kr_code,
        observation_spot_id: props.observation_spot_id,
    }));


    if (hasObservation) {
        form
            .transform((data) => ({
                ...data,
                _method: 'PUT',// Read the issue for more details: https://bugs.php.net/bug.php?id=55815
            }))
            .post(route('observations.update', observation.id), options)
    } else {
        form.post(route('observations.store'), options)

    }


}


</script>

<template>
    <l-map ref="map" :crs="crs" v-model:zoom="zoom" style="height: 400px; width: 100%;" :useGlobalLeaflet="false"
           :center="maaametCenter" :bounds="bounds" :maxZoom="14" :minZoom="3" :scrollWheelZoom="false"
           @ready="mapReady">


        <l-tile-layer url="https://tiles.maaamet.ee/tm/tms/1.0.0/vreljeef/{z}/{x}/{y}.png&ASUTUS=TLU&KESKKOND=ADAPTEST"
                      :tms="tms" :full-screen="false" :worldCopyJump="true" :z-index="1"
                      :options="{ maxNativeZoom: 13, maxZoom: 13, minZoom: 3 }"/>

        <l-tile-layer url="https://tiles.maaamet.ee/tm/tms/1.0.0/hybriid/{z}/{x}/{y}.png&ASUTUS=TLU&KESKKOND=ADAPTEST"
                      attribution="Maa-ameti kaart, <a href='http://www.maaamet.ee'>Maa-amet</a>" :tms="tms"
                      :full-screen="false"
                      :worldCopyJump="true" :z-index="2" :options="{ maxNativeZoom: 13, maxZoom: 13, minZoom: 3 }"/>

        <l-marker v-if="props.coordinates" :lat-lng="props.coordinates" :icon="newMarkerIcon" ref="marker"></l-marker>


    </l-map>


    <form @submit.prevent="submit">

        <div
            class="px-4 max-w-screen-lg card bg-white dark:bg-base-100 shadow-xl my-5 mx-auto py-5 sm:p-6 rounded-md">
            <div class="hero-content text-center rounded bg-blue-700">
                <div class="max-w-md">
                    <h1 class="text-xl text-white font-bold">{{ $t('Selected water body:') }} {{ name }}</h1>
                </div>
            </div>

            <!--            <div class="alert mt-5 alert-info">-->
            <!--                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"-->
            <!--                     class="stroke-current shrink-0 w-6 h-6">-->
            <!--                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"-->
            <!--                          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>-->
            <!--                </svg>-->
            <!--                <span>Not all fields are required. You can fill only the ones you know.</span>-->
            <!--            </div>-->


            <div class="grid grid-cols-12 gap-6">

                <div class="col-span-12"
                     v-if="props.observation_spot_id === null || props.observation_spot_id === 'null'">
                    <div class="alert mt-5">
                        {{ $t('This is a new observation spot. Please fill the fields below.') }}
                    </div>


                    <Label for="observation_spot_name" :value="$t('New observation spot name *')"/>
                    <Input id="observation_spot_name" class="mt-1 block w-full" type="text"
                           ref="observation_spot_name" autocomplete="observation_spot_name"
                           v-model.trim="form.observation_spot_name"
                    />
                    <InputError :message="form.errors.observation_spot_name" class="mt-2"/>

                    <Label for="observation_spot_description" :value="$t('New observation spot description *')"/>
                    <Input id="observation_spot_description" class="mt-1 block w-full" type="text"
                           ref="observation_spot_description" autocomplete="observation_spot_description"
                           v-model.trim="form.observation_spot_description"
                    />
                    <InputError :message="form.errors.observation_spot_name" class="mt-2"/>

                    <div class="divider"></div>


                </div>

                <div class="col-span-12">
                    <Label for="measuring_time" :value="$t('Time of measurement *')"/>
                    <Input id="measuring_time" class="mt-1 block w-full" v-model.trim="form.measuring_time"
                           type="datetime-local" ref="measuring_time" autocomplete="measuring_time"
                           dusk="measuring_time"/>
                    <InputError :message="form.errors.measuring_time" class="mt-2"/>
                </div>

                <div class="col-span-12">
                    <Label for="odor" :value="$t('Odor')"/>
                    <Input id="odor" class="mt-1 block w-full" v-model.trim="form.odor" type="text" ref="odor"
                           autocomplete="odor" dusk="odor"/>
                    <InputError :message="form.errors.odor" class="mt-2"/>
                </div>

                <div class="col-span-12">
                    <Label for="color_turbidity" :value="$t('Color and turbidity')"/>
                    <Input id="color_turbidity" class="mt-1 block w-full" v-model.trim="form.color_turbidity"
                           type="text"
                           ref="color_turbidity" autocomplete="color_turbidity" dusk="color_turbidity"/>
                    <InputError :message="form.errors.color_turbidity" class="mt-2"/>
                </div>

                <div class="col-span-12">
                    <Label for="conditions" :value="$t('Description of natural conditions *')"/>
                    <Input id="conditions" class="mt-1 block w-full" v-model.trim="form.conditions"
                           type="text"
                           ref="conditions" autocomplete="conditions" dusk="conditions"/>
                    <InputError :message="form.errors.conditions" class="mt-2"/>
                </div>

                <div class="col-span-12">
                    <Label for="flow_direction" :value="$t('Flow direction/water level')"/>
                    <Input id="flow_direction" class="mt-1 block w-full" v-model.trim="form.flow_direction"
                           type="text"
                           ref="flow_direction" autocomplete="flow_direction" dusk="flow_direction"/>
                    <InputError :message="form.errors.flow_direction" class="mt-2"/>
                </div>

                <div class="col-span-12">
                    <div class="divider"></div>
                </div>

                <h3 class="col-span-12 text-center text-2xl font-bold">Füüsikalised-keemilised näitajad</h3>

                <div class="col-span-6">
                    <Label for="ph" :value="$t('pH')"/>
                    <Input id="ph" class="mt-1 block w-full" v-model.trim="form.ph" type="number" ref="ph"
                           autocomplete="ph"
                           dusk="ph"/>
                    <InputError :message="form.errors.ph" class="mt-2"/>
                </div>

                <div class="col-span-6">
                    <Label for="water_temperature" :value="$t('Water temperature')"/>
                    <Input id="water_temperature" class="mt-1 block w-full" v-model.trim="form.water_temperature"
                           type="number" ref="water_temperature" autocomplete="water_temperature"
                           placeholder="°C"
                           dusk="water_temperature"/>
                    <InputError :message="form.errors.water_temperature" class="mt-2"/>
                </div>

                <div class="col-span-6">
                    <Label for="air_temperature" :value="$t('Air temperature')"/>
                    <Input id="air_temperature" class="mt-1 block w-full" v-model.trim="form.air_temperature"
                           placeholder="°C"
                           type="number"
                           ref="air_temperature" autocomplete="air_temperature" dusk="air_temperature"/>
                    <InputError :message="form.errors.air_temperature" class="mt-2"/>
                </div>

                <div class="col-span-6">
                    <Label for="specific_conductance" :value="$t('Specific conductance')"/>
                    <Input id="specific_conductance" class="mt-1 block w-full" v-model.trim="form.specific_conductance"
                           type="number" ref="specific_conductance" autocomplete="specific_conductance"
                           placeholder="µS/cm"
                           dusk="specific_conductance"/>
                    <InputError :message="form.errors.specific_conductance" class="mt-2"/>

                </div>

                <div class="col-span-6">
                    <Label for="total_dissolved_solids" :value="$t('Total dissolved solids')"/>
                    <Input id="total_dissolved_solids" class="mt-1 block w-full"
                           v-model.trim="form.total_dissolved_solids"
                           placeholder="mg/l"
                           type="number" ref="total_dissolved_solids" autocomplete="total_dissolved_solids"
                           dusk="total_dissolved_solids"/>
                    <InputError :message="form.errors.total_dissolved_solids" class="mt-2"/>
                </div>

                <div class="col-span-6">
                    <Label for="nitrate" :value="$t('Nitrate (NO3)')"/>
                    <Input id="nitrate" class="mt-1 block w-full" v-model.trim="form.nitrate" type="number"
                           ref="nitrate"
                           placeholder="mg/l"
                           autocomplete="nitrate" dusk="nitrate"/>
                    <InputError :message="form.errors.nitrate" class="mt-2"/>
                </div>

                <div class="col-span-6">
                    <Label for="bicarbonate" :value="$t('Bicarbonate (HCO3)')"/>
                    <Input id="bicarbonate" class="mt-1 block w-full" v-model.trim="form.bicarbonate" type="number"
                           placeholder="mg/l"
                           ref="bicarbonate" autocomplete="bicarbonate" dusk="bicarbonate"/>
                    <InputError :message="form.errors.bicarbonate" class="mt-2"/>

                </div>

                <div class="col-span-6">
                    <Label for="redox_potential" :value="$t('Redox potential')"/>
                    <Input id="redox_potential" class="mt-1 block w-full" v-model.trim="form.redox_potential"
                           placeholder="mV"
                           type="number"
                           ref="redox_potential" autocomplete="redox_potential" dusk="redox_potential"/>
                    <InputError :message="form.errors.redox_potential" class="mt-2"/>
                </div>

                <div class="col-span-6">
                    <Label for="dissolved_oxygen_percent" :value="$t('Dissolved oxygen (%)')"/>
                    <Input id="dissolved_oxygen_percent" class="mt-1 block w-full"
                           placeholder="%"
                           v-model.trim="form.dissolved_oxygen_percent" type="number" ref="dissolved_oxygen_percent"
                           autocomplete="dissolved_oxygen_percent" dusk="dissolved_oxygen_percent"/>
                    <InputError :message="form.errors.dissolved_oxygen_percent" class="mt-2"/>
                </div>

                <div class="col-span-6">
                    <Label for="dissolved_oxygen_mgl" :value="$t('Dissolved oxygen (mg/l)')"/>
                    <Input id="dissolved_oxygen_mgl" class="mt-1 block w-full" v-model.trim="form.dissolved_oxygen_mgl"
                           type="number" ref="dissolved_oxygen_mgl" autocomplete="dissolved_oxygen_mgl"
                           placeholder="mg/l"
                           dusk="dissolved_oxygen_mgl"/>
                    <InputError :message="form.errors.dissolved_oxygen_mgl" class="mt-2"/>
                </div>

                <div class="col-span-6">
                    <Label for="discharge" :value="$t('Discharge')"/>
                    <Input id="discharge" class="mt-1 block w-full" v-model.trim="form.discharge" type="number"
                           placeholder="l/s"
                           ref="discharge" autocomplete="discharge" dusk="discharge"/>
                    <InputError :message="form.errors.discharge" class="mt-2"/>

                </div>

                <div class="col-span-6">
                    <Label for="water_flow" :value="$t('Flow velocity')"/>
                    <SelectOption v-model="form.water_flow" :options="water_flows" :placeholder="'Please select one'"
                                  class="mt-2 block w-full" ref="water_flow" autocomplete="water_flow"/>
                    <InputError :message="form.errors.water_flow" class="mt-2"/>

                </div>


                <div class="col-span-12">
                    <div class="divider"></div>
                </div>

                <h3 class="col-span-12 text-center text-2xl font-bold">Hüdromorfoloogia</h3>
                <h4 class="col-span-12 text-center text-xl font-bold">Veepiirist maismaa poole (kuni 10 m)</h4>

                <div class="col-span-12">
                    <label class="flex items-center">
                        <Checkbox name="erosion" v-model:checked="form.erosion"/>
                        <span class="ml-2 text-sm text-gray-600">{{ "Erosioon kaldaalalt" }}</span>
                    </label>
                    <InputError :message="form.errors.erosion" class="mt-2"/>
                </div>

                <div class="col-span-12">
                    <Label for="nature" :value="'Kaldaala looduslikkus'"/>
                    <SelectOption v-model="form.nature" :options="natures" :placeholder="'Please select one'"
                                  class="mt-2 block w-full" ref="nature" autocomplete="nature"/>
                    <InputError :message="form.errors.nature" class="mt-2"/>
                </div>

                <div class="col-span-12">
                    <Label for="riparian_vegetation" :value="'Kaldaala taimestik'"/>
                    <SelectOption v-model="form.riparian_vegetation" :options="riparian_vegetations"
                                  :placeholder="'Please select one'" class="mt-2 block w-full" ref="riparian_vegetation"
                                  autocomplete="riparian_vegetation"/>
                    <InputError :message="form.errors.riparian_vegetation" class="mt-2"/>
                </div>

                <div class="col-span-12">
                    <Label for="vegetation_coverage" :value="'Taimestiku katvus'"/>
                    <SelectOption v-model="form.vegetation_coverage" :options="vegetation_coverages"
                                  :placeholder="'Please select one'" class="mt-2 block w-full" ref="vegetation_coverage"
                                  autocomplete="vegetation_coverage"/>
                    <InputError :message="form.errors.vegetation_coverage" class="mt-2"/>
                </div>

                <div class="col-span-12">
                    <div class="divider"></div>
                </div>
                <h4 class="col-span-12 text-center text-xl font-bold">Veepiirist veekogu poole (kuni 10 m)</h4>

                <div class="col-span-12">
                    <label class="flex items-center">
                        <Checkbox name="tree_roots" v-model:checked="form.tree_roots"/>
                        <span class="ml-2 text-sm text-gray-600">{{ "Puujuures, oksad vms ulatuvad vett" }}</span>
                    </label>
                    <InputError :message="form.errors.tree_roots" class="mt-2"/>
                </div>

                <div class="col-span-12">
                    <Label for="bottom" :value="'Veekogu põhi'"/>
                    <SelectOption v-model="form.bottom" :options="bottoms" :placeholder="'Please select one'"
                                  class="mt-2 block w-full" ref="bottom" autocomplete="bottom"/>
                    <InputError :message="form.errors.bottom" class="mt-2"/>
                </div>

                <div class="col-span-12">
                    <Label for="aquatic_vegetation" :value="'Veetaimestik'"/>
                    <SelectOption v-model="form.aquatic_vegetation" :options="aquatic_vegetations"
                                  :placeholder="'Please select one'" class="mt-2 block w-full" ref="aquatic_vegetation"
                                  autocomplete="aquatic_vegetation"/>
                    <InputError :message="form.errors.aquatic_vegetation" class="mt-2"/>
                </div>

                <div class="col-span-12">
                    <div class="divider"></div>
                </div>
                <h4 class="col-span-12 text-center text-xl font-bold">Inimmõju (~50 m raadiuses vaatluskohast)</h4>


                <div class="col-span-12">
                    <label class="flex items-center">
                        <Checkbox name="buildings" v-model:checked="form.buildings"/>
                        <span class="ml-2 text-sm text-gray-600">{{ "Ehitisi" }}</span>
                    </label>
                    <InputError :message="form.errors.buildings" class="mt-2"/>
                </div>

                <div class="col-span-12">
                    <label class="flex items-center">
                        <Checkbox name="agricultural_activity" v-model:checked="form.agricultural_activity"/>
                        <span class="ml-2 text-sm text-gray-600">{{ "Põllumajanduslik tegevus" }}</span>
                    </label>
                    <InputError :message="form.errors.agricultural_activity" class="mt-2"/>
                </div>

                <div class="col-span-12">
                    <label class="flex items-center">
                        <Checkbox name="roads" v-model:checked="form.roads"/>
                        <span class="ml-2 text-sm text-gray-600">{{ "Teed, parkimisplatsid" }}</span>
                    </label>
                    <InputError :message="form.errors.roads" class="mt-2"/>
                </div>

                <div class="col-span-12">
                    <label class="flex items-center">
                        <Checkbox name="park" v-model:checked="form.park"/>
                        <span class="ml-2 text-sm text-gray-600">{{ "Park" }}</span>
                    </label>
                    <InputError :message="form.errors.park" class="mt-2"/>
                </div>


                <div class="col-span-12">
                    <label class="flex items-center">
                        <Checkbox name="beach" v-model:checked="form.beach"/>
                        <span class="ml-2 text-sm text-gray-600">{{ "Supelrand" }}</span>
                    </label>
                    <InputError :message="form.errors.beach" class="mt-2"/>
                </div>

                <div class="col-span-12">
                    <label class="flex items-center">
                        <Checkbox name="boat_bridge" v-model:checked="form.boat_bridge"/>
                        <span class="ml-2 text-sm text-gray-600">{{ "Paadisild, slip" }}</span>
                    </label>
                    <InputError :message="form.errors.boat_bridge" class="mt-2"/>
                </div>

                <div class="col-span-12">
                    <label class="flex items-center">
                        <Checkbox name="shore_facility" v-model:checked="form.shore_facility"/>
                        <span class="ml-2 text-sm text-gray-600">{{ "Kaldakindlustusrajatised" }}</span>
                    </label>
                    <InputError :message="form.errors.shore_facility" class="mt-2"/>
                </div>

                <div class="col-span-12">
                    <label class="flex items-center">
                        <Checkbox name="dams" v-model:checked="form.dams"/>
                        <span class="ml-2 text-sm text-gray-600">{{ "Paisud, sillad" }}</span>
                    </label>
                    <InputError :message="form.errors.dams" class="mt-2"/>
                </div>

                <div class="col-span-12">
                    <label class="flex items-center">
                        <Checkbox name="littering" v-model:checked="form.littering"/>
                        <span class="ml-2 text-sm text-gray-600">{{ "Kaldavööndi prügistamist" }}</span>
                    </label>
                    <InputError :message="form.errors.littering" class="mt-2"/>
                </div>

                <div class="col-span-12">
                    <label class="flex items-center">
                        <Checkbox name="water_pollution" v-model:checked="form.water_pollution"/>
                        <span class="ml-2 text-sm text-gray-600">{{ "Veereostust" }}</span>
                    </label>
                    <InputError :message="form.errors.water_pollution" class="mt-2"/>
                </div>


                <div class="col-span-12">
                    <div class="flex justify-end">
                        <Link v-on:click="submit" class="btn btn-primary" dusk="save"
                              href="#"
                              :class="{ 'btn-disabled': form.processing }">
                            Submit
                        </Link>
                    </div>
                </div>

            </div>
        </div>


    </form>
</template>

<style scoped></style>
