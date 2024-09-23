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

                        <!-- Gallery of photos -->
                        <div class="grid mb-3 lg:grid-cols-2 gap-4 mt-8">
                            <div v-for="(photo, index) in props.observation.photos" :key="index">
                                <img :src="`${baseUrl}${photo}`" alt="Observation photo" class="rounded-lg"/>
                            </div>
                        </div>

                        <div class="card bg-base-100 shadow-xl">
                            <div class="card-body gap-4">
                                <div class="overflow-x-auto">

                                    <Link
                                        :href="`/observation-spots/${props.observation.observation_spot.id}`"
                                        class="btn my-4 btn-primary">
                                        {{ $t('Back to observation spot') }}
                                    </Link>

                                    <table class="table">
                                        <tbody>
                                        <tr>
                                            <th>{{ $t('Measuring time') }}:</th>
                                            <td v-if="props.observation.measuring_time">
                                                {{ props.observation.measuring_time }}
                                            </td>
                                            <td v-else>-</td>
                                        </tr>
                                        <tr>
                                            <th>{{ $t('Odor') }}:</th>
                                            <td v-if="props.observation.odor">{{ props.observation.odor }}</td>
                                            <td v-else>-</td>
                                        </tr>
                                        <tr>
                                            <th>{{ $t('Color and turbidity') }}:</th>
                                            <td v-if="props.observation.color_turbidity">
                                                {{ props.observation.color_turbidity }}
                                            </td>
                                            <td v-else>-</td>
                                        </tr>
                                        <tr>
                                            <th>{{ $t('Description of natural conditions') }}:</th>
                                            <td v-if="props.observation.conditions">{{
                                                    props.observation.conditions
                                                }}
                                            </td>
                                            <td v-else>-</td>
                                        </tr>
                                        <tr>
                                            <th>{{ $t('pH') }}:</th>
                                            <td v-if="props.observation.ph">{{ props.observation.ph }}</td>
                                            <td v-else>-</td>
                                        </tr>
                                        <tr>
                                            <th>{{ $t('Water temperature') }}:</th>
                                            <td v-if="props.observation.water_temperature">
                                                {{ props.observation.water_temperature }}
                                            </td>
                                            <td v-else>-</td>
                                        </tr>
                                        <tr>
                                            <th>{{ $t('Air temperature') }}:</th>
                                            <td v-if="props.observation.air_temperature">
                                                {{ props.observation.air_temperature }}
                                            </td>
                                            <td v-else>-</td>
                                        </tr>
                                        <tr>
                                            <th>{{ $t('Specific conductance') }}:</th>
                                            <td v-if="props.observation.specific_conductance">
                                                {{ props.observation.specific_conductance }}
                                            </td>
                                            <td v-else>-</td>
                                        </tr>
                                        <tr>
                                            <th>{{ $t('Total dissolved solids') }}:</th>
                                            <td v-if="props.observation.total_dissolved_solids">
                                                {{ props.observation.total_dissolved_solids }}
                                            </td>
                                            <td v-else>-</td>
                                        </tr>
                                        <tr>
                                            <th>{{ $t('Nitrate (NO3)') }}:</th>
                                            <td v-if="props.observation.nitrate">{{ props.observation.nitrate }}</td>
                                            <td v-else>-</td>
                                        </tr>
                                        <tr>
                                            <th>{{ $t('Bicarbonate (HCO3)') }}:</th>
                                            <td v-if="props.observation.bicarbonate">{{
                                                    props.observation.bicarbonate
                                                }}
                                            </td>
                                            <td v-else>-</td>
                                        </tr>
                                        <tr>
                                            <th>{{ $t('Redox potential') }}:</th>
                                            <td v-if="props.observation.redox_potential">
                                                {{ props.observation.redox_potential }}
                                            </td>
                                            <td v-else>-</td>
                                        </tr>
                                        <tr>
                                            <th>{{ $t('Dissolved oxygen (%)') }}:</th>
                                            <td v-if="props.observation.dissolved_oxygen_percent">
                                                {{ props.observation.dissolved_oxygen_percent }}
                                            </td>
                                            <td v-else>-</td>
                                        </tr>
                                        <tr>
                                            <th>{{ $t('Dissolved oxygen (mg/l)') }}:</th>
                                            <td v-if="props.observation.dissolved_oxygen_mgl">
                                                {{ props.observation.dissolved_oxygen_mgl }}
                                            </td>
                                            <td v-else>-</td>
                                        </tr>
                                        <tr>
                                            <th>{{ $t('Discharge') }}:</th>
                                            <td v-if="props.observation.discharge">{{
                                                    props.observation.discharge
                                                }}
                                            </td>
                                            <td v-else>-</td>
                                        </tr>
                                        <tr>
                                            <th>{{ $t('Flow velocity') }}:</th>
                                            <td v-if="props.observation.water_flow['label']">
                                                {{ props.observation.water_flow['label'] }}
                                            </td>
                                            <td v-else>-</td>
                                        </tr>
                                        <tr>
                                            <th>{{ $t('Flow direction/water level') }}:</th>
                                            <td v-if="props.observation.flow_direction">
                                                {{ props.observation.flow_direction }}
                                            </td>
                                            <td v-else>-</td>
                                        </tr>
                                        <tr>
                                            <th>{{ $t('Erosion') }}:</th>
                                            <td v-if="props.observation.erosion">{{
                                                    yesNo(props.observation.erosion)
                                                }}
                                            </td>
                                            <td v-else>-</td>
                                        </tr>
                                        <tr>
                                            <th>{{ $t('Nature') }}:</th>
                                            <td v-if="props.observation.nature['label']">
                                                {{ props.observation.nature['label'] }}
                                            </td>
                                            <td v-else>-</td>
                                        </tr>
                                        <tr>
                                            <th>{{ $t('Riparian vegetation') }}:</th>
                                            <td v-if="props.observation.riparian_vegetation['label']">
                                                {{ props.observation.riparian_vegetation['label'] }}
                                            </td>
                                            <td v-else>-</td>
                                        </tr>
                                        <tr>
                                            <th>{{ $t('Vegetation coverage') }}:</th>
                                            <td v-if="props.observation.vegetation_coverage['label']">
                                                {{ props.observation.vegetation_coverage['label'] }}
                                            </td>
                                            <td v-else>-</td>
                                        </tr>
                                        <tr>
                                            <th>{{ $t('Puujuured, oksad vms ulatuvad vette') }}:</th>
                                            <td v-if="props.observation.tree_roots">
                                                {{ yesNo(props.observation.tree_roots) }}
                                            </td>
                                            <td v-else>-</td>
                                        </tr>
                                        <tr>
                                            <th>{{ $t('Veekogu põhi') }}:</th>
                                            <td v-if="props.observation.bottom['label']">
                                                {{ props.observation.bottom['label'] }}
                                            </td>
                                            <td v-else>-</td>
                                        </tr>
                                        <tr>
                                            <th>{{ $t('Veetaimestik') }}:</th>
                                            <td v-if="props.observation.aquatic_vegetation['label']">
                                                {{ props.observation.aquatic_vegetation['label'] }}
                                            </td>
                                            <td v-else>-</td>
                                        </tr>
                                        <tr>
                                            <th>{{ $t('Ehitisi') }}:</th>
                                            <td v-if="props.observation.buildings">{{
                                                    yesNo(props.observation.buildings)
                                                }}
                                            </td>
                                            <td v-else>-</td>
                                        </tr>
                                        <tr>
                                            <th>{{ $t('Põllumajanduslik tegevus') }}:</th>
                                            <td v-if="props.observation.agricultural_activity">
                                                {{ yesNo(props.observation.agricultural_activity) }}
                                            </td>
                                            <td v-else>-</td>
                                        </tr>
                                        <tr>
                                            <th>{{ $t('Teed, parkimisplatsid') }}:</th>
                                            <td v-if="props.observation.roads">{{ yesNo(props.observation.roads) }}</td>
                                            <td v-else>-</td>
                                        </tr>
                                        <tr>
                                            <th>{{ $t('Park') }}:</th>
                                            <td v-if="props.observation.park">{{ yesNo(props.observation.park) }}</td>
                                            <td v-else>-</td>
                                        </tr>
                                        <tr>
                                            <th>{{ $t('Supelrand') }}:</th>
                                            <td v-if="props.observation.beach">{{ yesNo(props.observation.beach) }}</td>
                                            <td v-else>-</td>
                                        </tr>
                                        <tr>
                                            <th>{{ $t('Paadisild, slip') }}:</th>
                                            <td v-if="props.observation.boat_bridge">
                                                {{ yesNo(props.observation.boat_bridge) }}
                                            </td>
                                            <td v-else>-</td>
                                        </tr>
                                        <tr>
                                            <th>{{ $t('Kaldakindlustusrajatised') }}:</th>
                                            <td v-if="props.observation.shore_facility">
                                                {{ yesNo(props.observation.shore_facility) }}
                                            </td>
                                            <td v-else>-</td>
                                        </tr>
                                        <tr>
                                            <th>{{ $t('Paisud, sillad') }}:</th>
                                            <td v-if="props.observation.dams">{{ yesNo(props.observation.dams) }}</td>
                                            <td v-else>-</td>
                                        </tr>
                                        <tr>
                                            <th>{{ $t('Kaldavööndi prügistamist') }}:</th>
                                            <td v-if="props.observation.littering">{{
                                                    yesNo(props.observation.littering)
                                                }}
                                            </td>
                                            <td v-else>-</td>
                                        </tr>
                                        <tr>
                                            <th>{{ $t('Veereostust') }}:</th>
                                            <td v-if="props.observation.water_pollution">
                                                {{ yesNo(props.observation.water_pollution) }}
                                            </td>
                                            <td v-else>-</td>
                                        </tr>

                                        </tbody>
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
import {Link} from '@inertiajs/vue3';
import {trans} from "laravel-vue-i18n";

// Define your props here
let props = defineProps({
    observation: {
        type: Object,
        required: true,
    },
});

const baseUrl = import.meta.env.VITE_APP_URL + '/storage/observations/';


function yesNo(value) {
    return value ? trans('Yes') : trans('No');
}

</script>

<style scoped>

</style>
