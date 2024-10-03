<script setup>
import {Link} from '@inertiajs/vue3';
import ExperimentalLayout from "@/Layouts/ExperimentalLayout.vue";
import Accordion from "@/CustomComponents/Accordion.vue";
import {ref} from "vue";
import {Icon} from "@iconify/vue";
import AddNewObservationBlock from "@/CustomComponents/AddNewObservationBlock.vue";
import Counter from "@/CustomComponents/Counter.vue";

defineProps({
    canLogin: Boolean,
    canRegister: Boolean,
    springCount: Number,
    waterBodyCount: Number,
    observationCount: Number,
    weeklyObservationCont: Number,
    photoCount: Number,
    latestObservations: Array,
});

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

function photoUrl(observation) {
    return observation.photo ? `/storage/observations/${observation.photo}` : '/img/bg.jpg';
}
</script>

<template>
    <ExperimentalLayout
        :title="$t('Welcome')"
        :hide-title="true"
        background-image="/img/header/welcome.webp"
        class="bg-base-100"
    >
        <div class="container 2xl:mx-auto">
            <AddNewObservationBlock/>

            <div class="grid grid-cols-1 lg:grid-cols-3 gap-0">
                <div class="lg:col-span-2"><img src="/img/welcome/map.svg" alt="map"></div>
                <div class="bg-secondary grid grid-cols-2 gap-8 place-items-stretch">
                    <div class="text-center">
                        <div class="p-8">
                            <Counter class="text-2xl font-bold" :to="springCount"/>
                            <div>allikat</div>
                        </div>
                    </div>
                    <div class="text-center">
                        <div class="p-8">
                            <Counter class="text-2xl font-bold" :to="waterBodyCount"/>
                            <div>pinnaveekogu</div>
                        </div>
                    </div>
                    <div class="text-center">
                        <div class="p-8">
                            <Counter class="text-2xl font-bold" :to="observationCount"/>
                            <div>vaatlust koku</div>
                        </div>
                    </div>
                    <div class="text-center">
                        <div class="p-8">
                            <Counter class="text-2xl font-bold" :to="weeklyObservationCont"/>
                            <div>vaatlust sel nädalal</div>
                        </div>
                    </div>
                    <div class="text-center">
                        <div class="p-8">
                            <Counter class="text-2xl font-bold" :to="photoCount"/>
                            <div>fotot</div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="bg-primary-green-dark text-white p-5 lg:p-10">
                <h2 class="text-2xl font-bold">Miks vett seirata?</h2>

                <div class="grid grid-cols-12 gap-8">
                    <div class="col-span-12 md:col-span-8">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu urna sit amet mi pellentesque tristique eu id est. Cras tortor diam, mattis id nunc sed, porttitor semper metus. Curabitur vitae tincidunt lectus. Mauris sodales vulputate ligula at volutpat. Praesent lacinia vestibulum neque ut rutrum. Pellentesque mollis magna id ornare sollicitudin. Nullam ornare ullamcorper ornare. Donec est risus, gravida nec tempor sed, accumsan eget dui. Sed tincidunt volutpat malesuada. Aliquam et fermentum urna, eu vehicula quam.
                    </div>

                    <div class="col-span-12 md:col-span-4">
                        <img src="/img/welcome/river.svg" alt="river" />
                    </div>
                </div>
            </div>

            <div class="bg-secondary lg:p-10">
                <Accordion
                    v-for="item in items"
                    name="contact-questions"
                    :title="item.title"
                    :content="item.content"
                    :active="item.active"
                />
            </div>

            <div class="bg-base-100 lg:p-10">
                <h2 class="text-2xl font-bold">Viimased seired</h2>

                <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center my-8 mx-2">
                    <Link
                        v-for="observation in latestObservations"
                        :key="observation.id"
                        :href="route('observations.show', observation.id)"
                        class="card w-96 bg-primary text-white shadow-xl hover:scale-105 transition transform"
                    >
                        <figure class="max-h-64">
                            <img :src="photoUrl(observation)" :alt="observation.observation_spot.name" />
                        </figure>
                        <div class="card-body">
                            <h2 class="card-title">
                                <Icon icon="line-md:map-marker-filled-loop" class="w-8 h-8 text-white"/>
                                {{ observation.observation_spot.water_body }}
                            </h2>
                        </div>
                    </Link>
                </div>
            </div>

        </div>
    </ExperimentalLayout>
</template>

<style scoped>
</style>/
