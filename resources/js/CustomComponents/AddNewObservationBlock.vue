<script setup>

import {Link} from "@inertiajs/vue3";
import ExternalLink from "@/CustomComponents/ExternalLink.vue";
</script>

<template>
    <div class="grid grid-cols-1 my-10">
        <h2 class="text-2xl font-semibold text-center">{{ $t('Add new observation') }}</h2>
        <div class="grid grid-cols-2 gap-4">
            <div>
                <img src="/img/arrow/long.svg" alt="arrow" class="h-10 ml-auto mr-4 md:mr-14 my-2"/>
            </div>
            <div>
                <img src="/img/arrow/long.svg" alt="arrow" class="h-10 mr-auto ml-4 md:ml-14 my-2 scale-x-[-1]"/>
            </div>
        </div>
        <div class="grid grid-cols-2 gap-4 text-center">
            <div v-html="$t('I would like to observe a <span class=\':class\'>lake</span> or <span class=\':class\'>watercourse</span>', { class: 'text-primary' })"></div>
            <div v-html="$t('I would like to observe a <span class=\':class\'>spring</span> or enter a new one', { class: 'text-primary-green-dark'})"></div>
        </div>
        <div class="grid grid-cols-2 gap-4 text-center">
            <div>
                <img src="/img/arrow/short.svg" alt="arrow" class="h-10 mx-auto my-2"/>
                <Link :href="route('dashboard')" class="btn btn-outline btn-primary normal-case font-normal hover:text-white">{{ $t('Water body observation') }}</Link>
            </div>
            <div>
                <img src="/img/arrow/short.svg" alt="arrow" class="h-10 mx-auto my-2 scale-x-[-1]"/>
                <ExternalLink :href="$page.props.waterActUrl" class="btn btn-outline border-primary-green-dark text-primary-green-dark normal-case font-normal hover:text-white hover:bg-primary-green-dark hover:border-primary-green-dark focus-visible:outline-primary-green-dark">{{ $t('Spring observation') }}</ExternalLink>
            </div>
        </div>
    </div>
</template>
