<script setup>

import AppLayout from "@/Layouts/AppLayout.vue";
import ObservationSpotForm from "@/Pages/ObservationSpots/Form.vue";

let props = defineProps({
    observation_spot: {
        type: Object,
        required: true,
    }
});

</script>

<template>
    <app-layout title="Edit observation spot">

        <template #header>
            {{ "Edit observation spot" }}
        </template>

        <div class="md:grid md:gap-6">
            <div class="mt-5 md:mt-0 md:col-span-2">
                <observation-spot-form :observation_spot="props.observation_spot"
                ></observation-spot-form>
            </div>
        </div>
    </app-layout>
</template>

<style scoped>

</style>
