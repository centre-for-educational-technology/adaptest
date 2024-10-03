<script setup>

import {Link} from "@inertiajs/vue3";
import ExternalLink from "@/CustomComponents/ExternalLink.vue";
</script>

<template>
    <div class="grid grid-cols-1 my-10">
        <h2 class="text-2xl font-semibold text-center">{{ $t('Add new observation') }}</h2>
        <div class="grid grid-cols-2 gap-4 text-center mt-10">
            <div>Soovin vaadelda <span class="text-primary">järve</span> või <span class="text-primary">vooluveekogu</span></div>
            <div>Soovin vaadelda <span class="text-primary-green-dark">allikat</span> või sisestada uue allika</div>
        </div>
        <div class="grid grid-cols-2 gap-4 text-center mt-10">
            <div>
                <Link :href="route('dashboard')" class="btn btn-outline btn-primary normal-case font-normal hover:text-white">{{ $t('Water body observation') }}</Link>
            </div>
            <div>
                <!-- @todo Need to use a different color that has to be defined in a meaningful way -->
                <ExternalLink :href="$page.props.waterActUrl" class="btn btn-outline border-primary-green-dark text-primary-green-dark normal-case font-normal hover:text-white hover:bg-primary-green-dark hover:border-primary-green-dark focus-visible:outline-primary-green-dark">{{ $t('Spring observation') }}</ExternalLink>
            </div>
        </div>
    </div>
</template>
