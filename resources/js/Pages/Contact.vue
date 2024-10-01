<script setup>
import {Icon} from "@iconify/vue";
import {ref, useTemplateRef} from "vue";
import Input from "@/CustomComponents/Input.vue";
import InputError from "@/CustomComponents/InputError.vue";
import {Link, useForm} from "@inertiajs/vue3";
import Textarea from "@/CustomComponents/Textarea.vue";
import {useToast} from "vue-toast-notification";
import 'vue-toast-notification/dist/theme-sugar.css';
import {trans} from "laravel-vue-i18n";
import ExperimentalLayout from "@/Layouts/ExperimentalLayout.vue";

defineProps({
    mailFromAddress: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
});

const socialPresence = ref([
    {
        url: 'https://www.facebook.com/lifeadaptest',
        icon: 'line-md:facebook',
        text: 'veestik.info',
    },
    {
        url: 'https://www.instagram.com/know.your.water',
        icon: 'line-md:instagram',
        text: 'know.your.water',
    },
]);

const teamMembers = ref([
    {
        image: '/img/bg.jpg',
        name: 'Kaspar Kadakas',
        jobTitle: 'ametinimetus',
    },
    {
        image: '/img/bg.jpg',
        name: 'Jaana Järvik',
        jobTitle: 'ametinimetus',
    },
    {
        image: '/img/bg.jpg',
        name: 'Ants Allikas',
        jobTitle: 'ametinimetus',
    },
]);

const toast = useToast();
const form = useForm({
    name: '',
    email: '',
    message: '',
});
const formSubmit = useTemplateRef('submit');
const submit = () => {
    form.post(route('contact'), {
        forceFormData: true,
        preserveScroll: true,
        onSuccess: () => {
            form.reset();
            formSubmit.value.$el.blur();
            toast.success(trans('Message sent!'));
        },
    });
}

// Helpers
const replaceSpacesWithPrefix = (text, prefix = '', replaceValue = '') => {
    return `${prefix}${text.replaceAll(/ /g, replaceValue)}`;
};
</script>

<template>
    <ExperimentalLayout
        :title="$t('Contact')"
        background-image="/img/header/contact.webp"
        class="bg-base-100"
    >
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-4 md:mx-8 my-8">
            <div class="grid grid-cols-12 gap-4 sm:border-0 md:border border-primary sm:rounded-none md:rounded-lg p-8 bg-white">
                <div class="font-bold col-span-4 lg:col-span-2">{{ $t('Email') }}</div>
                <div class="col-span-8 lg:col-span-10">
                    <a :href="'mailto:' + mailFromAddress">
                        {{ mailFromAddress }}
                    </a>
                </div>

                <div class="font-bold col-span-4 lg:col-span-2">{{ $t('Phone') }}</div>
                <div class="col-span-8 lg:col-span-10">
                    <a :href="replaceSpacesWithPrefix(phoneNumber, 'tel:')">{{ phoneNumber }}</a>
                </div>

                <div class="font-bold col-span-4 lg:col-span-2">{{ $t('Address') }}</div>
                <div class="col-span-8 lg:col-span-10">
                    <a
                        :href="replaceSpacesWithPrefix(address, 'https://www.google.com/maps/place/', '+')"
                        target="_blank"
                        rel="external nofollow noopener noreferrer"
                    >
                        {{ address }}
                    </a>
                </div>
            </div>
            <div class="grid grid-cols-1 gap-2 ml-8 md:ml-0">
                <div v-for="(item, index) in socialPresence" :key="index" class="flex flex-row gap-4 items-center">
                    <a
                        :href="item.url"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="rounded-full bg-primary w-12 h-12 inline-flex items-center justify-center"
                    >
                        <Icon :icon="item.icon" class="w-8 h-8 text-base-100"/>
                    </a>
                    <a
                        :href="item.url"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="inline-block"
                    >
                        {{ item.text }}
                    </a>
                </div>
            </div>
        </div>

        <div class="bg-primary py-8">
            <h2 class="text-2xl text-base-100 px-4 sm:px-6 lg:px-8">{{ $t('Team') }}</h2>

            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center my-8 mx-2">
                <div
                    v-for="(member, index) in teamMembers"
                    :key="index"
                    class="card w-96 bg-base-100 shadow-xl hover:scale-105 transition transform"
                >
                    <figure><img :src="member.image" :alt="member.name" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">{{ member.name }}</h2>
                        <p>{{ member.jobTitle }}</p>
                    </div>
                </div>
            </div>
        </div>

        <form class="my-16">
            <div class="px-4 max-w-screen-lg card bg-white shadow-xl my-5 mx-auto py-5 sm:p-6 rounded-none md:rounded-lg border-0 md:border md:border-primary">
                <h2 class="text-center text-2xl font-bold mb-4">{{ $t('Contact us') }}</h2>

                <div class="grid grid-cols-12">
                    <div class="col-span-12 border-b-2 bg-base-100 rounded-t-md border-t-2 border-t-base-100">
                        <Input
                            id="name"
                            class="m-0 block w-full rounded-none border-0 focus:outline-none"
                            v-model.trim="form.name"
                            type="text"
                            ref="name"
                            autocomplete="name"
                            :placeholder="$t('Name')"
                            dusk="name"/>
                        <InputError :message="form.errors.name" class="mt-2 ml-4"/>
                    </div>

                    <div class="col-span-12 border-b-2 bg-base-100">
                        <Input
                            id="email"
                            class="m-0 block w-full rounded-none border-0 focus:outline-none"
                            v-model.trim="form.email"
                            type="text"
                            ref="email"
                            autocomplete="email"
                            :placeholder="$t('Email')"
                            dusk="email"/>
                        <InputError :message="form.errors.email" class="mt-2 ml-4"/>
                    </div>

                    <div class="col-span-12 border-b-2 bg-base-100">
                        <Textarea
                            id="message"
                            class="m-0 textarea-bordered textarea block w-full rounded-none border-0 focus:outline-none"
                            ref="message"
                            autocomplete="message"
                            :placeholder="$t('Message')"
                            v-model.trim="form.message"
                            rows="5"
                        ></Textarea>
                        <InputError :message="form.errors.message" class="mt-2 ml-4"/>
                    </div>

                    <div class="col-span-12 text-center mt-8">
                        <Link
                            v-on:click="submit"
                            class="btn btn-outline btn-primary hover:text-white"
                            href="#"
                            :class="{ 'btn-disabled': form.processing }"
                            ref="submit"
                            dusk="send"
                        >
                            {{ $t('Send') }}
                        </Link>
                    </div>
                </div>
            </div>
        </form>
    </ExperimentalLayout>
</template>
