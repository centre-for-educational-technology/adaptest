<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import {defineProps} from 'vue';
import {Link, router} from '@inertiajs/vue3';
import {useForm} from '@inertiajs/vue3';
import Pagination from "@/CustomComponents/Pagination.vue";

const props = defineProps({
    observations: {
        type: Object,
        required: true,
    },
});

const deleteForm = useForm({
    id: null,
});

const deleteObservation = (id) => {
    deleteForm.id = id;
    deleteForm.delete(route('observations.destroy', deleteForm.id));
}

</script>

<template>
    <app-layout :title="$t('All observations')">

        <template #header>
            {{ $t("All observations") }}
        </template>

        <div class="md:grid md:gap-6">
            <div class="m-5">

                <div class="container mt-1 grid grid-cols-1 gap-6 mx-auto bg-base-100 rounded">

                    <table class="table mb-5 table-zebra">
                        <thead>
                        <tr>
                            <th>{{ $t("Observation Spot") }}</th>
                            <th>{{ $t("Created at") }}</th>
                            <th>{{ $t("Author") }}</th>
                            <th>{{ $t("Actions") }}</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="observation in props.observations.data" :key="observation.id">
                            <td>{{ observation.observation_spot.name }}</td>
                            <td>{{ observation.created_at }}</td>
                            <td>{{ observation.author.name }}</td>
                            <td>
                                <div class="join">
                                    <Link class="btn join-item btn-primary"
                                          :href="route('observations.show', observation.id)">{{ $t('Show') }}
                                    </Link>
                                    <Link class="btn join-item btn-accent"
                                          :href="route('observations.edit', observation.id)">{{ $t('Edit') }}
                                    </Link>
                                    <button class="btn join-item btn-error" @click="deleteObservation(observation.id)">{{
                                            $t('Delete')
                                        }}
                                    </button>
                                </div>
                            </td>
                        </tr>
                        </tbody>
                    </table>

                    <Pagination :links="props.observations.meta.links" class="mb-4"/>
                </div>

            </div>
        </div>
    </app-layout>
</template>
