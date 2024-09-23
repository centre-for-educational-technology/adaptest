<script setup>
import Footer from "@/Layouts/Footer.vue";
</script>

<template>
    <div class="flex flex-col min-h-screen">

        <div class="flex-grow">
            <h1 class="text-4xl font-bold">{{ $t("Contact") }}</h1>
        </div>

        <div class="grid grid-cols-2 gap-4 border border-primary-green-dark rounded-lg p-4">
            <div>{{ $t('Email') }}</div>
            <div>TODO</div>
            <div>{{ $t('Phone') }}</div>
            <div>TODO</div>
            <div>{{ $t('Address') }}</div>
            <div>TODO</div>
        </div>

        <Footer/>

    </div>
</template>
