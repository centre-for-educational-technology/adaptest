<template>
    <select ref="select" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)"
            :multiple="multiple"
            class="w-full select select-bordered">
        <option :disabled="!placeholderEnabled" value="">{{ placeholder }}</option>
        <option v-for="(value, name) in options" :value="name">
            {{ value }}
        </option>
    </select>
</template>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
    props: ['modelValue', 'options', 'multiple', 'placeholder', 'placeholderEnabled'],

    emits: ['update:modelValue'],

    methods: {
        focus() {
            this.$refs.select.focus()
        }
    }
})
</script>
