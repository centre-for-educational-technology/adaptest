<script setup>
import Accordion from "@/CustomComponents/Accordion.vue";
import {ref} from "vue";
import ExperimentalLayout from "@/Layouts/ExperimentalLayout.vue";
import {wTrans} from "laravel-vue-i18n";
import AddNewObservationBlock from "@/CustomComponents/AddNewObservationBlock.vue";

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
        text: wTrans('Find water body')
    },
    {
        index: 2,
        text: wTrans('Observe and measure')
    },
    {
        index: 3,
        text: wTrans('Enter data')
    }
]);
</script>

<template>
    <ExperimentalLayout
        :title="$t('Instructions')"
        background-image="/img/header/instructions.webp"
        class="bg-base-100"
    >
        <div class="container 2xl:mx-auto">
            <div class="bg-base-100 py-10 md:px-10 xl:px-0">
                <div class="pt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    <div class="text-center" v-for="step in steps" :key="step.index">
                        <div class="indicator hover:scale-105 transition transform">
                            <span class="indicator-item indicator-start badge bg-primary-green-dark text-base-100 text-2xl font-bold h-auto">{{ step.index }}</span>
                            <div class="grid w-96 h-96 bg-white place-items-center rounded-lg border-primary-green-dark border">
                                <img :src="'/img/instructions/step-' + step.index + '.webp'" :alt="step.text" class="w-3/4 h-3/4">
                                <span class="absolute bottom-2">{{ step.text }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="bg-primary-green-dark text-white p-5 lg:p-10">
                <h2 class="text-2xl font-bold">{{ $t("How to observe?") }}</h2>

                <div class="grid grid-cols-12 gap-8">
                    <div class="col-span-12 md:col-span-8">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu urna sit amet mi pellentesque tristique eu id est. Cras tortor diam, mattis id nunc sed, porttitor semper metus. Curabitur vitae tincidunt lectus. Mauris sodales vulputate ligula at volutpat. Praesent lacinia vestibulum neque ut rutrum. Pellentesque mollis magna id ornare sollicitudin. Nullam ornare ullamcorper ornare. Donec est risus, gravida nec tempor sed, accumsan eget dui. Sed tincidunt volutpat malesuada. Aliquam et fermentum urna, eu vehicula quam.
                    </div>

                    <a href="" target="_blank" class="col-span-12 md:col-span-4">
                    <span class="rounded-full bg-white w-12 h-12 inline-flex items-center justify-center text-primary-green-dark font-bold mr-4">
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

            <AddNewObservationBlock/>
        </div>
    </ExperimentalLayout>
</template>
