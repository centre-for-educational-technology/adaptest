<script setup>

import Input from "@/CustomComponents/Input.vue";

import {defineProps} from "vue";
import {useForm} from "@inertiajs/vue3";

let form = useForm({
    measuring_time: hasObservation ? observation.measuring_time : '',
    odor: hasObservation ? observation.odor : '',
    color_turbidity: hasObservation ? observation.color_turbidity : '',
    ph: hasObservation ? observation.ph : '',
    water_temperature: hasObservation ? observation.water_temperature : '',
    air_temperature: hasObservation ? observation.air_temperature : '',
    specific_conductance: hasObservation ? observation.specific_conductance : '',
    total_dissolved_solids: hasObservation ? observation.total_dissolved_solids : '',
    nitrate: hasObservation ? observation.nitrate : '',
    bicarbonate: hasObservation ? observation.bicarbonate : '',
    redox_potential: hasObservation ? observation.redox_potential : '',
    dissolved_oxygen_percent: hasObservation ? observation.dissolved_oxygen_percent : '',
    dissolved_oxygen_ppm: hasObservation ? observation.dissolved_oxygen_ppm : '',
    discharge: hasObservation ? observation.discharge : '',
    water_flow: hasObservation ? observation.water_flow : '',
    erosion: hasObservation ? observation.erosion : false,
    nature: hasObservation ? observation.nature : '',
    riparian_vegetation: hasObservation ? observation.riparian_vegetation : '',
    vegetation_coverage: hasObservation ? observation.vegetation_coverage : '',
    tree_roots: hasObservation ? observation.tree_roots : false,
    bottom: hasObservation ? observation.bottom : '',
    aquatic_vegetation: hasObservation ? observation.aquatic_vegetation : '',
    buildings: hasObservation ? observation.buildings : false,
    agricultural_activity: hasObservation ? observation.agricultural_activity : false,
    roads: hasObservation ? observation.roads : false,
    park: hasObservation ? observation.park : false,
    beach: hasObservation ? observation.beach : false,
    boat_bridge: hasObservation ? observation.boat_bridge : false,
    shore_facility: hasObservation ? observation.shore_facility : false,
    dams: hasObservation ? observation.dams : false,
    littering: hasObservation ? observation.littering : false,
    water_pollution: hasObservation ? observation.water_pollution : false,
});


</script>

<template>
    <form @submit.prevent="submit">

        <div class="px-4 py-5 bg-white sm:p-6 shadow sm:rounded-tl-md sm:rounded-tr-md">
            <div class="grid grid-cols-6 gap-6">
                <div class="col-span-12">
                    <Input label="Measuring time" v-model="form.measuring_time" type="date"></Input>
                </div>
                <div class="col-span-12">
                    <Input label="Odor" v-model="form.odor" type="text"></Input>
                </div>
                <div class="col-span-12">
                    <Input label="Color and turbidity" v-model="form.color_turbidity" type="text"></Input>
                </div>
                <div class="col-span-12">
                    <Input label="pH" v-model="form.ph" type="text"></Input>
                </div>
                <div class="col-span-12">
                    <Input label="Water temperature" v-model="form.water_temperature" type="text"></Input>
                </div>


    </form>


</template>

<style scoped>

</style>
