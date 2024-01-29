<script setup>

import AppLayout from "@/Layouts/AppLayout.vue";
import Input from "@/CustomComponents/Input.vue";
import Label from "@/CustomComponents/Label.vue";
import {Link, useForm} from "@inertiajs/vue3";

let props = defineProps({
    observation_spot: {
        type: Object,
        required: true,

    }
});

let form = useForm({
    name: props.observation_spot.name,
    description: props.observation_spot.description,
    processing: false,
});

function submit() {
    form.put(route('observation-spots.update', props.observation_spot.id));
}

</script>

<template>

    <form @submit.prevent="submit">

        <div
            class="px-4 max-w-screen-lg card bg-white dark:bg-base-100 shadow-xl my-5 mx-auto py-5 sm:p-6 rounded-md">

            <div class="grid grid-cols-12 gap-6">

                <div class="col-span-12">

                    <Label for="observation_spot_name" :value="$t('Observation spot name')"/>
                    <Input id="observation_spot_name" class="mt-1 block w-full" type="text"
                           ref="observation_spot_name" autocomplete="observation_spot_name"
                           v-model.trim="form.name"
                    />


                    <Label for="observation_spot_description" :value="$t('Observation spot description')"/>
                    <Input id="observation_spot_description" class="mt-1 block w-full" type="textarea"
                           ref="observation_spot_description" autocomplete="observation_spot_description"
                           v-model.trim="form.description"
                    />

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

<style scoped>

</style>
