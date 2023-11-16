<script setup>

import Input from "@/CustomComponents/Input.vue";

import {defineProps, onMounted} from "vue";
import {useForm} from "@inertiajs/vue3";
import InputError from "@/CustomComponents/InputError.vue";
import Label from "@/CustomComponents/Label.vue";
import Checkbox from "@/CustomComponents/Checkbox.vue";
import SelectOption from "@/CustomComponents/Select.vue";
import {usePage} from '@inertiajs/vue3'

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
});

let hasObservation = props.observation !== null;

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

        <div
            class="px-4 max-w-screen-lg card bg-base-100 shadow-xl my-5 mx-auto py-5 bg-white sm:p-6 shadow rounded-md">
            <div class="alert mb-5 alert-info">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                     class="stroke-current shrink-0 w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>Not all fields are required. You can fill only the ones you know.</span>
            </div>


            <div class="hero-content text-center rounded bg-blue-700">
                <div class="max-w-md">
                    <h1 class="text-xl text-white font-bold">Selected water body: {{ name }}</h1>
                </div>
            </div>


            <div class="grid grid-cols-12 gap-6">


                <div class="col-span-12">
                    <Label for="measuring_time" :value="'Measuring time'"/>
                    <Input id="measuring_time" class="mt-1 block w-full"
                           v-model.trim="form.measuring_time" type="datetime-local"
                           ref="measuring_time"
                           autocomplete="measuring_time"
                           dusk="measuring_time"
                    />
                    <InputError :message="form.errors.measuring_time" class="mt-2"/>
                </div>

                <div class="col-span-12">
                    <Label for="odor" :value="'Odor'"/>
                    <Input id="odor" class="mt-1 block w-full"
                           v-model.trim="form.odor" type="text"
                           ref="odor"
                           autocomplete="odor"
                           dusk="odor"
                    />
                    <InputError :message="form.errors.odor" class="mt-2"/>
                </div>

                <div class="col-span-12">
                    <Label for="color_turbidity" :value="'Color turbidity'"/>
                    <Input id="color_turbidity" class="mt-1 block w-full"
                           v-model.trim="form.color_turbidity" type="text"
                           ref="color_turbidity"
                           autocomplete="color_turbidity"
                           dusk="color_turbidity"
                    />
                    <InputError :message="form.errors.color_turbidity" class="mt-2"/>
                </div>

                <div class="col-span-6">
                    <Label for="ph" :value="'PH'"/>
                    <Input id="ph" class="mt-1 block w-full"
                           v-model.trim="form.ph" type="text"
                           ref="ph"
                           autocomplete="ph"
                           dusk="ph"
                    />
                    <InputError :message="form.errors.ph" class="mt-2"/>
                </div>

                <div class="col-span-6">
                    <Label for="water_temperature" :value="'Water temperature'"/>
                    <Input id="water_temperature" class="mt-1 block w-full"
                           v-model.trim="form.water_temperature" type="text"
                           ref="water_temperature"
                           autocomplete="water_temperature"
                           dusk="water_temperature"
                    />
                    <InputError :message="form.errors.water_temperature" class="mt-2"/>
                </div>

                <div class="col-span-6">
                    <Label for="air_temperature" :value="'Air temperature'"/>
                    <Input id="air_temperature" class="mt-1 block w-full"
                           v-model.trim="form.air_temperature" type="text"
                           ref="air_temperature"
                           autocomplete="air_temperature"
                           dusk="air_temperature"
                    />
                    <InputError :message="form.errors.air_temperature" class="mt-2"/>
                </div>

                <div class="col-span-6">
                    <Label for="specific_conductance" :value="'Specific conductance'"/>
                    <Input id="specific_conductance" class="mt-1 block w-full"
                           v-model.trim="form.specific_conductance" type="text"
                           ref="specific_conductance"
                           autocomplete="specific_conductance"
                           dusk="specific_conductance"
                    />
                    <InputError :message="form.errors.specific_conductance" class="mt-2"/>

                </div>

                <div class="col-span-6">
                    <Label for="total_dissolved_solids" :value="'Total dissolved solids'"/>
                    <Input id="total_dissolved_solids" class="mt-1 block w-full"
                           v-model.trim="form.total_dissolved_solids" type="text"
                           ref="total_dissolved_solids"
                           autocomplete="total_dissolved_solids"
                           dusk="total_dissolved_solids"
                    />
                    <InputError :message="form.errors.total_dissolved_solids" class="mt-2"/>
                </div>

                <div class="col-span-6">
                    <Label for="nitrate" :value="'Nitrate'"/>
                    <Input id="nitrate" class="mt-1 block w-full"
                           v-model.trim="form.nitrate" type="text"
                           ref="nitrate"
                           autocomplete="nitrate"
                           dusk="nitrate"
                    />
                    <InputError :message="form.errors.nitrate" class="mt-2"/>
                </div>

                <div class="col-span-6">
                    <Label for="bicarbonate" :value="'Bicarbonate'"/>
                    <Input id="bicarbonate" class="mt-1 block w-full"
                           v-model.trim="form.bicarbonate" type="text"
                           ref="bicarbonate"
                           autocomplete="bicarbonate"
                           dusk="bicarbonate"
                    />
                    <InputError :message="form.errors.bicarbonate" class="mt-2"/>

                </div>

                <div class="col-span-6">
                    <Label for="redox_potential" :value="'Redox potential'"/>
                    <Input id="redox_potential" class="mt-1 block w-full"
                           v-model.trim="form.redox_potential" type="text"
                           ref="redox_potential"
                           autocomplete="redox_potential"
                           dusk="redox_potential"
                    />
                    <InputError :message="form.errors.redox_potential" class="mt-2"/>
                </div>

                <div class="col-span-6">
                    <Label for="dissolved_oxygen_percent" :value="'Dissolved oxygen percent'"/>
                    <Input id="dissolved_oxygen_percent" class="mt-1 block w-full"
                           v-model.trim="form.dissolved_oxygen_percent" type="text"
                           ref="dissolved_oxygen_percent"
                           autocomplete="dissolved_oxygen_percent"
                           dusk="dissolved_oxygen_percent"
                    />
                    <InputError :message="form.errors.dissolved_oxygen_percent" class="mt-2"/>
                </div>

                <div class="col-span-6">
                    <Label for="dissolved_oxygen_ppm" :value="'Dissolved oxygen ppm'"/>
                    <Input id="dissolved_oxygen_ppm" class="mt-1 block w-full"
                           v-model.trim="form.dissolved_oxygen_ppm" type="text"
                           ref="dissolved_oxygen_ppm"
                           autocomplete="dissolved_oxygen_ppm"
                           dusk="dissolved_oxygen_ppm"
                    />
                    <InputError :message="form.errors.dissolved_oxygen_ppm" class="mt-2"/>
                </div>

                <div class="col-span-6">
                    <Label for="discharge" :value="'Discharge'"/>
                    <Input id="discharge" class="mt-1 block w-full"
                           v-model.trim="form.discharge" type="text"
                           ref="discharge"
                           autocomplete="discharge"
                           dusk="discharge"
                    />
                    <InputError :message="form.errors.discharge" class="mt-2"/>

                </div>

                <div class="col-span-6">
                    <Label for="water_flow" :value="'Vooluveekogu voolukiirus'"/>
                    <SelectOption v-model="form.water_flow"
                                  :options="water_flows"
                                  :placeholder="'Please select one'"
                                  class="mt-2 block w-full"
                                  ref="water_flow"
                                  autocomplete="water_flow"/>
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
                    <SelectOption v-model="form.nature"
                                  :options="natures"
                                  :placeholder="'Please select one'"
                                  class="mt-2 block w-full"
                                  ref="nature"
                                  autocomplete="nature"/>
                    <InputError :message="form.errors.nature" class="mt-2"/>
                </div>

                <div class="col-span-12">
                    <Label for="riparian_vegetation" :value="'Kaldaala taimestik'"/>
                    <SelectOption v-model="form.riparian_vegetation"
                                  :options="riparian_vegetations"
                                  :placeholder="'Please select one'"
                                  class="mt-2 block w-full"
                                  ref="riparian_vegetation"
                                  autocomplete="riparian_vegetation"/>
                    <InputError :message="form.errors.riparian_vegetation" class="mt-2"/>
                </div>

                <div class="col-span-12">
                    <Label for="vegetation_coverage" :value="'Taimestiku katvus'"/>
                    <SelectOption v-model="form.vegetation_coverage"
                                  :options="vegetation_coverages"
                                  :placeholder="'Please select one'"
                                  class="mt-2 block w-full"
                                  ref="vegetation_coverage"
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
                    <SelectOption v-model="form.bottom"
                                  :options="bottoms"
                                  :placeholder="'Please select one'"
                                  class="mt-2 block w-full"
                                  ref="bottom"
                                  autocomplete="bottom"/>
                    <InputError :message="form.errors.bottom" class="mt-2"/>
                </div>

                <div class="col-span-12">
                    <Label for="aquatic_vegetation" :value="'Veetaimestik'"/>
                    <SelectOption v-model="form.aquatic_vegetation"
                                  :options="aquatic_vegetations"
                                  :placeholder="'Please select one'"
                                  class="mt-2 block w-full"
                                  ref="aquatic_vegetation"
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
                        <button type="submit" class="btn btn-primary">
                            {{ "Submit" }}
                        </button>
                    </div>
                </div>
            </div>
        </div>


    </form>


</template>

<style scoped>

</style>
