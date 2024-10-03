<script setup>
import {Head, Link} from "@inertiajs/vue3";
import Footer from "@/Layouts/Footer.vue";
import NavLink from "@/Components/NavLink.vue";

defineProps({
    title: String,
    backgroundImage: {
        type: String,
        required: false,
        default: '',
    },
    hideTitle: {
      type: Boolean,
      required: false,
      default: false,
    },
});
</script>

<template>
    <div class="flex flex-col min-h-screen">
        <Head :title="title"/>

        <div class="flex-grow">
            <!-- Page Navigation -->
            <nav class="bg-base-100">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="flex justify-between h-16">
                        <div class="flex">
                            <!-- Logo -->
                            <div class="shrink-0 flex items-center">
                                <Link :href="route('welcome')" class="text-2xl font-bold hover:text-primary">
                                    veestik
                                </Link>
                            </div>

                            <!-- Navigation Links -->
                            <div class="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                                <NavLink :href="route('dashboard')"
                                         :active="route().current('dashboard')">
                                    {{ $t('Water body observation') }}
                                </NavLink>
                            </div>

                            <div class="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                                <NavLink :href="$page.props.waterActUrl"
                                         :active="false"
                                         :external="true">
                                    {{ $t('Spring observation') }}
                                </NavLink>
                            </div>


                            <div class="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                                <NavLink :href="route('instructions')"
                                         :active="route().current('instructions')">
                                    {{ $t('Instructions') }}
                                </NavLink>
                            </div>

                            <div class="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                                <NavLink :href="route('contact')"
                                         :active="route().current('contact')">
                                    {{ $t('Contact') }}
                                </NavLink>
                            </div>

                            <div class="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                                <NavLink href="https://lifeadaptest.ee/"
                                         :active="false"
                                         :external="true">
                                    AdaptEST
                                </NavLink>
                            </div>

                            <div class="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex" v-if="!$page.props.auth.user">
                                <NavLink :href="route('login')"
                                         :active="route().current('login')">
                                    {{ $t('Log in') }}
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <!-- Page Heading -->
            <header class="bg-base-100">
                <div
                    v-if="backgroundImage"
                    class="bg-cover bg-center h-80"
                    :style="{ 'background-image': 'url(' + backgroundImage + ')' }"
                ></div>
                <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8" :class="{ 'hidden': hideTitle }">
                    <h1 class="font-semibold text-xl leading-tight">
                        {{ title }}
                    </h1>

                    <slot name="header"/>
                </div>
            </header>

            <!-- Page Content -->
            <slot/>
        </div>

        <Footer/>
    </div>
</template>

<style scoped>

</style>
