<script setup>
import ApplicationLogo from '@/Components/ApplicationLogo.vue';
</script>

<template>
    <div>
        <div class="p-6 lg:p-8 bg-white dark:bg-gray-800 dark:bg-gradient-to-bl dark:from-gray-700/50 dark:via-transparent border-b border-gray-200 dark:border-gray-700">
            <ApplicationLogo class="block h-12 w-auto" />
            <div class="text-center w-full">
                <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 dark:text-white">
                    AdaptEST</h1>
                <p class="mb-8 text-xl leading-relaxed dark:text-gray-200">Our mission is to organize the world's
                    information and make it universally accessible and useful</p>
                <div class="flex justify-center">
                    <a href="{{ route('register') }}"
                       class="btn inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg transition ease-in-out duration-500">{{ __('Register') }}</a>
                    <a href="{{ route('login') }}"
                       class="btn ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg transition ease-in-out duration-500">{{ __('Login') }}</a>
                </div>
            </div>
        </div>

    </div>
</template>
