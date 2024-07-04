<template>
    <app-layout :title="$t('Latest observations')">

        <template #header>
            {{ $t("Latest observations") }}
        </template>

        <div class="md:grid md:gap-6">
            <div class="m-5">

                <div class="container place-items-center mt-1 grid grid-cols-1 gap-6 mx-auto rounded">


                    <div v-for="observation in props.observations" :key="observation.id"
                         class="card lg:w-1/2 w-full bg-base-100 shadow-xl">
                        <figure>
                            <img :src="observation.photo ? `${baseUrl}${observation.photo}` : '/img/bg.jpg'"
                                 alt="Observation photo"/>
                        </figure>

                        <div class="card-body">
                            <h2 class="card-title">
                                {{ observation.observation_spot.name }}
                                <div class="badge badge-secondary">{{ observation.observation_spot.water_body }}</div>
                            </h2>
                            <p>{{ observation.conditions }}</p>

                            <div class="card-footer mt-3">
                                <div class="flex items-center">
                                    <div class="avatar">
                                        <div class="w-20 mr-3 rounded-full">
                                            <img :src="observation.author.profile_photo_url"
                                                 :alt="observation.author.name"/>
                                        </div>
                                    </div>
                                    <Link :href="route('users.show', observation.author.id)"
                                          class="font-bold text-blue-500 hover:underline">
                                        {{ observation.author.name }}
                                    </Link>
                                </div>
                            </div>
                            <div class="card-actions justify-end">
                                <Link :href="route('observations.show', observation.id)"
                                      class="btn btn-primary">
                                    {{ $t('Show') }}
                                </Link>
                            </div>

                        </div>
                    </div>
                </div>

            </div>

        </div>
    </app-layout>
</template>

<script setup>
import {defineProps} from 'vue';
import AppLayout from "@/Layouts/AppLayout.vue";
import {Link} from "@inertiajs/vue3";
import * as url from "node:url";

const baseUrl = import.meta.env.VITE_APP_URL + '/storage/observations/';

const props = defineProps({
    observations: {
        type: Array,
        required: true,
    },
});
</script>
