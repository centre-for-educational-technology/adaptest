<template>
    <div class="modal" :class="{ 'modal-open': showModal }">
        <div class="modal-box">
            <h3 class="font-bold text-lg">{{ $t('You have chosen') }} <span class="font-bold text-blue-500">{{ selectedAreaName
            }}</span></h3>
            <p class="py-4">{{ $t('Now set the marker of your observation by clicking on the map') }}</p>
            <div class="modal-action">
                <button class="btn" @click="$emit('update:showModal', false)">
                    {{ $t('Ok') }}
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>

// Declare selectedAreaName and showModal as props
const props = defineProps({
    selectedAreaName: {
        type: String,
        required: true
    },
    showModal: {
        type: Boolean,
        required: true
    }
})


</script>
