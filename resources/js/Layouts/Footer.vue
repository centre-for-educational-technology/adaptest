<script setup>

import ApplicationMark from "@/Components/ApplicationMark.vue";
</script>

<template>
    <footer class="footer p-10 bg-secondary text-primary-content">
        <aside>
            <ApplicationMark class="inline-block fill-white w-20 h-20 mr-2"/>
            <p class="font-bold">
                AdaptEST
            </p>
            <p>Kodulehe loomist on rahastatud projektist „Kliimamuutustega kohanemise tegevuste elluviimine Eestis“
                (Implementation of national climate change adaptation activities in Estonia, LIFE21-IPC-EE-LIFE-SIP
                AdaptEst/101069566), mida rahastavad Euroopa Liidu liikmesriikide keskkonnaprojektide
                kaasrahastamise programm LIFE ja Eesti riik kasvuhoonegaaside lubatud heitkoguse ühikutega
                kauplemise tulust. Euroopa Liit ega abiandvad asutused ei vastuta kodulehel oleva informatsiooni
                õigsuse ja sisu kasutamise eest.</p>
        </aside>
        <div class="flex justify-around space-x-3 mt-10">
            <img src="/img/Life.png" class="h-10 w-auto">
            <img src="/img/nat2000.png" class="h-10 w-auto">
            <img src="/img/TLU.png" class="h-10 w-auto">
            <img src="/img/Ok.png" class="h-10 w-auto">
        </div>
    </footer>
</template>

<style scoped>

</style>
