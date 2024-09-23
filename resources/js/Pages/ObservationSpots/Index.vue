<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import {defineProps} from 'vue';
import {Link, router} from '@inertiajs/vue3';
import {useForm} from '@inertiajs/vue3';
import Pagination from "@/CustomComponents/Pagination.vue";

const props = defineProps({
    observation_spots: {
        type: Object,
        required: true,
    },
});


const deleteForm = useForm({
    id: null,
});

const deleteSpot = (id) => {
    deleteForm.id = id;
    deleteForm.delete(route('observation-spots.destroy', deleteForm.id));
}


</script>

<template>
    <app-layout :title="$t('All observation spots')">

        <template #header>
            {{ $t("All observation spots") }}
        </template>


        <div class="md:grid md:gap-6">
            <div class="m-5">

                <div class="container mt-1 grid grid-cols-1 gap-6 mx-auto bg-base-100 rounded">

                    <table class="table mb-5 table-zebra">
                        <thead>
                        <tr>
                            <th>{{ $t("Name") }}</th>
                            <th>{{ $t("Water body") }}</th>
                            <th>{{ $t("Created at") }}</th>
                            <th>{{ $t("Author") }}</th>
                            <th>{{ $t("Actions") }}</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="spot in props.observation_spots.data" :key="spot.id">
                            <td>
                                <Link class="link-accent" :href="route('observation-spots.show', spot.id)">
                                    {{ spot.name }}
                                </Link>
                            </td>
                            <td>{{ spot.water_body }}</td>
                            <td>{{ spot.created_at }}</td>
                            <td>{{ spot.author }}</td>
                            <td>
                                <div class="join">
                                    <Link class="btn join-item btn-primary"
                                          :href="route('observation-spots.show', spot.id)">{{ $t('Show') }}
                                    </Link>
                                    <Link class="btn join-item btn-accent"
                                          :href="route('observation-spots.edit', spot.id)">{{ $t('Edit') }}
                                    </Link>
                                    <button class="btn join-item btn-error" @click="deleteSpot(spot.id)">{{
                                            $t('Delete')
                                        }}
                                    </button>
                                </div>
                            </td>
                        </tr>
                        </tbody>
                    </table>

                    <Pagination :links="props.observation_spots.meta.links" class="mb-4"/>

                </div>


            </div>
        </div>
    </app-layout>
</template>

<style scoped>

</style>
