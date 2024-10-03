<script setup>
import { computed } from 'vue';
import { Link } from '@inertiajs/vue3';
import ExternalLink from "@/CustomComponents/ExternalLink.vue";

const props = defineProps({
    href: String,
    active: Boolean,
    external: {
        type: Boolean,
        required: false,
        default: false,
    },
});

const classes = computed(() => {
    return props.active
        ? 'inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-primary hover:border-primary focus:outline-none focus:border-primary transition duration-150 ease-in-out'
        : 'inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-black hover:text-primary hover:border-primary focus:outline-none focus:text-primary focus:border-primary transition duration-150 ease-in-out';
});
</script>

<template>
    <Link :href="href" :class="classes" v-if="!external">
        <slot />
    </Link>
    <ExternalLink :href="href" :class="classes" v-else>
        <slot/>
    </ExternalLink>
</template>
