<script setup>

import ObservationForm from "@/Pages/Observations/Form.vue";
import AppLayout from "@/Layouts/AppLayout.vue";
</script>

<template>
    <app-layout :title="$t('Edit observation')">

        <template #header>
            {{ $t("Edit observation") }}
        </template>

        <div class="md:grid md:gap-6">
            <div class="mt-5 md:mt-0 md:col-span-2">
                <observation-form :observation="props.observation"
                                  :natures="props.natures"
                                  :riparian_vegetations="props.riparian_vegetations"
                                  :vegetation_coverages="props.vegetation_coverages"
                                  :bottoms="props.bottoms"
                                  :aquatic_vegetations="props.aquatic_vegetations"
                                  :name="props.observation.name"
                                  :coordinates="props.observation.coordinates"
                                  :water_body_kr_code="props.observation.water_body_kr_code"
                                  :observation_spot_id="props.observation.id"
                                  :water_flows="props.water_flows"
                ></observation-form>
            </div>
        </div>
    </app-layout>


</template>

<style scoped>

</style>
