<template>
    <app-layout :title="$t('User details')">

        <template #header>
            {{ $t("User details") }}
        </template>
        <div class="card m-5 w-96 bg-base-100 shadow-xl mx-auto">
            <figure>
                <img :src="user.profile_photo_url" alt="User Image" class="w-full object-cover h-48 mx-auto"/>
            </figure>
            <div class="card-body">
                <h2 class="card-title">
                    {{ user.name }}
                    <div class="badge badge-secondary">{{ user.role }}</div>
                </h2>
                <p>Joined: {{ user.created_at }}</p>
                <div class="card-actions">
                    <div class="badge badge-outline">Observations: {{ user.observations_count }}</div>
                </div>
            </div>
        </div>
    </app-layout>
</template>

<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";

const props = defineProps({
    user: {
        type: Object,
        required: true,
    },
});
</script>
