<template>
    <AppLayout title="Dashboard">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                {{ props.observation.observation_spot.name }} - {{ props.observation.measuring_time }}
            </h2>
        </template>

        <!-- Section containing information about the observation -->
        <section class="text-gray-600 body-font">
            <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-wrap -m-4">
                    <div class="p-4 md:w-full">

                        <div class="card bg-base-100 shadow-xl">
                            <div class="card-body gap-4">
                                <div class="overflow-x-auto">

                                    <Link
                                        :href="`/observation-spots/${props.observation.observation_spot.id}`" class="btn my-4 btn-primary">
                                        {{ $t('Back to observation spot') }}
                                    </Link>

                                    <table class="table">

                                        <tr>
                                            <th>{{ $t('Measuring time') }}:</th>
                                            <td>{{ props.observation.measuring_time }}</td>
                                        </tr>
                                        <tr>
                                            <th>{{ $t('Odor') }}:</th>
                                            <td>{{ props.observation.odor }}</td>
                                        </tr>
                                        <tr>
                                            <th>{{ $t('Color and turbidity') }}:</th>
                                            <td>{{ props.observation.color_turbidity }}</td>
                                        </tr>
                                        <tr>
                                            <th>{{ $t('Description of natural conditions') }}:</th>
                                            <td>{{ props.observation.conditions }}</td>
                                        </tr>
                                        <tr>
                                            <th>{{ $t('pH') }}:</th>
                                            <td>{{ props.observation.ph }}</td>
                                        </tr>
                                        <tr>
                                            <th>{{ $t('Water temperature') }}:</th>
                                            <td>{{ props.observation.water_temperature }}</td>
                                        </tr>
                                        <tr>
                                            <th>{{ $t('Air temperature') }}:</th>
                                            <td>{{ props.observation.air_temperature }}</td>
                                        </tr>
                                        <tr>
                                            <th>{{ $t('Specific conductance') }}:</th>
                                            <td>{{ props.observation.specific_conductance }}</td>
                                        </tr>
                                        <tr>
                                            <th>{{ $t('Total dissolved solids') }}:</th>
                                            <td>{{ props.observation.total_dissolved_solids }}</td>
                                        </tr>
                                        <tr>
                                            <th>{{ $t('Nitrate (NO3)') }}:</th>
                                            <td>{{ props.observation.nitrate }}</td>
                                        </tr>
                                        <tr>
                                            <th>{{ $t('Bicarbonate (HCO3)') }}:</th>
                                            <td>{{ props.observation.bicarbonate }}</td>
                                        </tr>
                                        <tr>
                                            <th>{{ $t('Redox potential') }}:</th>
                                            <td>{{ props.observation.redox_potential }}</td>
                                        </tr>
                                        <tr>
                                            <th>{{ $t('Dissolved oxygen (%)') }}:</th>
                                            <td>{{ props.observation.dissolved_oxygen_percent }}</td>
                                        </tr>
                                        <tr>
                                            <th>{{ $t('Dissolved oxygen (mg/l)') }}:</th>
                                            <td>{{ props.observation.dissolved_oxygen_mgl }}</td>
                                        </tr>
                                        <tr>
                                            <th>{{ $t('Discharge') }}:</th>
                                            <td>{{ props.observation.discharge }}</td>
                                        </tr>
                                        <tr>
                                            <th>{{ $t('Flow velocity') }}:</th>
                                            <td>{{ props.observation.water_flow['label'] }}</td>
                                        </tr>
                                        <tr>
                                            <th>{{ $t('Flow direction/water level') }}:</th>
                                            <td>{{ props.observation.flow_direction }}</td>
                                        </tr>
                                        <tr>
                                            <th>{{ $t('Erosion') }}:</th>
                                            <td>{{ yesNo(props.observation.erosion) }}</td>
                                        </tr>
                                        <tr>
                                            <th>{{ $t('Nature') }}:</th>
                                            <td>{{ props.observation.nature['label'] }}</td>
                                        </tr>
                                        <tr>
                                            <th>{{ $t('Riparian vegetation') }}:</th>
                                            <td>{{ props.observation.riparian_vegetation['label'] }}</td>
                                        </tr>
                                        <tr>
                                            <th>{{ $t('Vegetation coverage') }}:</th>
                                            <td>{{ props.observation.vegetation_coverage['label'] }}</td>
                                        </tr>
                                        <tr>
                                            <th>{{ $t('Puujuures, oksad vms ulatuvad vett') }}:</th>
                                            <td>{{ yesNo(props.observation.tree_roots) }}</td>
                                        </tr>
                                        <tr>
                                            <th>{{ $t('Veekogu põhi') }}:</th>
                                            <td>{{ props.observation.bottom['label'] }}</td>
                                        </tr>
                                        <tr>
                                            <th>{{ $t('Veetaimestik') }}:</th>
                                            <td>{{ props.observation.aquatic_vegetation['label'] }}</td>
                                        </tr>
                                        <tr>
                                            <th>{{ $t('Ehitisi') }}:</th>
                                            <td>{{ yesNo(props.observation.buildings) }}</td>
                                        </tr>
                                        <tr>
                                            <th>{{ $t('Põllumajanduslik tegevus') }}:</th>
                                            <td>{{ yesNo(props.observation.agricultural_activity) }}</td>
                                        </tr>
                                        <tr>
                                            <th>{{ $t('Teed, parkimisplatsid') }}:</th>
                                            <td>{{ yesNo(props.observation.roads) }}</td>
                                        </tr>
                                        <tr>
                                            <th>{{ $t('Park') }}:</th>
                                            <td>{{ yesNo(props.observation.park) }}</td>
                                        </tr>
                                        <tr>
                                            <th>{{ $t('Supelrand') }}:</th>
                                            <td>{{ yesNo(props.observation.beach) }}</td>
                                        </tr>
                                        <tr>
                                            <th>{{ $t('Paadisild, slip') }}:</th>
                                            <td>{{ yesNo(props.observation.boat_bridge) }}</td>
                                        </tr>
                                        <tr>
                                            <th>{{ $t('Kaldakindlustusrajatised') }}:</th>
                                            <td>{{ yesNo(props.observation.shore_facility) }}</td>
                                        </tr>
                                        <tr>
                                            <th>{{ $t('Paisud, sillad') }}:</th>
                                            <td>{{ yesNo(props.observation.dams) }}</td>
                                        </tr>
                                        <tr>
                                            <th>{{ $t('Kaldavööndi prügistamist') }}:</th>
                                            <td>{{ yesNo(props.observation.littering) }}</td>
                                        </tr>
                                        <tr>
                                            <th>{{ $t('Veereostust') }}:</th>
                                            <td>{{ yesNo(props.observation.water_pollution) }}</td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </section>
    </AppLayout>
</template>

<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import { defineProps } from 'vue';
import { Link } from '@inertiajs/vue3';
import {trans} from "laravel-vue-i18n";

// Define your props here
let props = defineProps({
    observation: {
        type: Object,
        required: true,
    },
});

function yesNo(value) {
    return value ? trans('Yes') : trans('No');
}

</script>

<style scoped>

</style>
