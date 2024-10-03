<script setup>
import {Icon} from "@iconify/vue";

defineProps({
    href: String
});
</script>

<template>
    <a
        :href="href"
        target="_blank"
        rel="nofollow noopener noreferrer"
    >
        <slot />
        <Icon icon="line-md:external-link" class="w-4 h-4 ml-2"/>
    </a>
</template>
