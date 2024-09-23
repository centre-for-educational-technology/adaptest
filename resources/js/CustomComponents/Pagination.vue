<script setup>
import { Link } from '@inertiajs/vue3';

const props = defineProps({
    links: {
        type: Object,
        required: true,
    },
    center: {
        type: Boolean,
        required: false,
        default: true
    }
});
</script>

<template>
    <div class="join" :class="{ 'mx-auto': props.center }">
        <Link
            as="button"
            v-for="(link, index) in props.links"
            :key="index"
            :href="link.url ?? ''"
            class="join-item btn"
            :class="{ 'btn-active': link.active, 'max-lg:hidden': index !== 0 && index !== props.links.length - 1 && !link.active }"
            :disabled="!link.url"
        >
            {{ link.label }}
        </Link>
    </div>
</template>
