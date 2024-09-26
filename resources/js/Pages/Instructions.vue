<script setup>
import Footer from "@/Layouts/Footer.vue";
import Accordion from "@/CustomComponents/Accordion.vue";
import {ref} from "vue";

const items = ref([
    {
        title: 'Kes on harrastusteadlane?',
        content: 'Kes on harrastusteadlane?',
        active: false
    },
    {
        title: 'Kui ma ei tea, mis tüüpi on veekogu, kas on mõtet vaadelda?',
        content: 'Kui ma ei tea, mis tüüpi on veekogu, kas on mõtet vaadelda?',
        active: false
    },
    {
        title: 'Millal on hea vaadelda?',
        content: 'Millal on hea vaadelda?',
        active: false
    },
    {
        title: 'Milliseid abivahendeid on vaja vaatluse sisestamiseks?',
        content: 'Milliseid abivahendeid on vaja vaatluse sisestamiseks?',
        active: false
    },
    {
        title: 'Mis sisestatud andmetest edasi saab?',
        content: 'Mis sisestatud andmetest edasi saab?',
        active: false
    }
]);
const steps = ref([
    {
        index: 1,
        text: 'Leia veekogu'
    },
    {
        index: 2,
        text: 'Vaatle ja mõõda'
    },
    {
        index: 3,
        text: 'Sisesta andmed'
    }
]);
</script>

<template>
    <div class="flex flex-col min-h-screen">

        <div class="flex-grow">
            <h1 class="text-4xl font-bold">{{ $t("Instructions") }}</h1>
        </div>

        <div class="bg-secondary p-10">
            <div class="pt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div class="text-center" v-for="step in steps" :key="step.index">
                    <div class="indicator">
                        <span class="indicator-item indicator-start badge bg-primary-green-dark text-base-100 text-2xl h-auto">{{ step.index }}</span>
                        <div class="grid w-64 h-64 bg-base-100 place-items-center rounded-lg border-primary-green-dark border">{{ step.text }}</div>
                    </div>
                </div>
            </div>
        </div>

        <div class="bg-primary-green-dark text-base-100 lg:p-10 pt-10">
            <h2 class="text-4xl font-bold">{{ $t("How to observe?") }}</h2>

            <div class="grid grid-cols-12 gap-8 my-10">
                <div class="col-span-12 md:col-span-8">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu urna sit amet mi pellentesque tristique eu id est. Cras tortor diam, mattis id nunc sed, porttitor semper metus. Curabitur vitae tincidunt lectus. Mauris sodales vulputate ligula at volutpat. Praesent lacinia vestibulum neque ut rutrum. Pellentesque mollis magna id ornare sollicitudin. Nullam ornare ullamcorper ornare. Donec est risus, gravida nec tempor sed, accumsan eget dui. Sed tincidunt volutpat malesuada. Aliquam et fermentum urna, eu vehicula quam.
                </div>

                <a href="" target="_blank" class="col-span-12 md:col-span-4">
                    <span class="rounded-full bg-white w-12 h-12 inline-flex items-center justify-center text-primary-green-dark font-bold">
                        pdf
                    </span>

                    {{ $t("Download instructions") }}
                </a>
            </div>

        </div>

        <div class="bg-primary-green-light lg:p-10">
            <Accordion
                v-for="item in items"
                name="contact-questions"
                :title="item.title"
                :content="item.content"
                :active="item.active"
            />
        </div>

        <Footer/>

    </div>
</template>
