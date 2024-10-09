<script setup>
import {getActiveLanguage} from "laravel-vue-i18n";
import {ref} from "vue";

const props = defineProps({
    type: {
        type: String,
        required: true,
        default: '',
    },
    isTranslatable: {
        type: Boolean,
        required: false,
        default: false,
    },
});

const lang = getActiveLanguage();
const src = ref(`/img/frog/${props.type}${props.isTranslatable ? ('_' + lang) : ''}.webp`);
</script>

<template>
    <img :src="src" :alt="type"/>
</template>

