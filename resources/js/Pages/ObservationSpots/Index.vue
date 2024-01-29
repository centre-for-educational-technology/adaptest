<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import {defineProps} from 'vue';
import {Link, router} from '@inertiajs/vue3';
import { useForm } from '@inertiajs/vue3';

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
    <app-layout title="All observation spots">

        <template #header>
            {{ "All observation spots" }}
        </template>


        <div class="md:grid md:gap-6">
            <div class="mt-5">

                <div class="container mt-1 grid grid-cols-1 gap-6 mx-auto bg-base-100 rounded">

                    <table class="table mb-5 table-zebra">
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Water Body</th>
                            <th>Creation Date</th>
                            <th>Author</th>
                            <th>Actions</th>
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
                                          :href="route('observation-spots.show', spot.id)">View
                                    </Link>
                                    <Link class="btn join-item btn-accent"
                                          :href="route('observation-spots.edit', spot.id)">Edit
                                    </Link>
                                    <button class="btn join-item btn-error" @click="deleteSpot(spot.id)">Delete</button>
                                </div>
                            </td>
                        </tr>
                        </tbody>
                    </table>

                </div>


            </div>
        </div>
    </app-layout>
</template>

<style scoped>

</style>
