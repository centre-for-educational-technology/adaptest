<script setup>

import AppLayout from "@/Layouts/AppLayout.vue";
import ObservationForm from "@/Pages/Observations/Form.vue";

let props = defineProps({
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
    observation: {
        type: Object,
        required: false,
        default: null,
    },
    name: {
        type: String,
        required: true,
    },
    coordinates: {
        type: Object,
        required: false,
        default: null,
    },
    water_body_sys_id: {
        type: String,
        required: true,
    },
    observation_spot_id: {
        type: String,
        required: true,
        default: null,
    },
});


</script>

<template>

    <app-layout title="Create">
        <template #header>
            {{ "Add observation" }}
        </template>


        <div class="md:grid md:gap-6">
            <div class="mt-5 md:mt-0 md:col-span-2">
                <observation-form :observation="null"
                                  :water_flows="water_flows"
                                  :natures="natures"
                                  :riparian_vegetations="riparian_vegetations"
                                  :vegetation_coverages="vegetation_coverages"
                                  :bottoms="bottoms"
                                  :aquatic_vegetations="aquatic_vegetations"
                                  :name="name"
                                  :coordinates="coordinates"
                                  :water_body_sys_id="water_body_sys_id"
                                  :observation_spot_id="observation_spot_id"
                ></observation-form>
            </div>
        </div>


    </app-layout>


</template>

<style scoped>

</style>
