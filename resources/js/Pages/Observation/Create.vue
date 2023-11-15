<script setup>

import AppLayout from "@/Layouts/AppLayout.vue";
import ObservationForm from "@/Pages/Observation/Form.vue";
</script>

<template>

    <app-layout title="Create">
        <template #header>
            {{ $t("Add observation") }}
        </template>
        <main class="content-row">
            <div class="md:grid md:gap-6">
                <div class="mt-5 md:mt-0 md:col-span-2">
                    <observation-form :observation="null"></observation-form>
                </div>
            </div>
        </main>
    </app-layout>


</template>

<style scoped>

</style>
