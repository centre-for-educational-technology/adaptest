<template>
  <textarea
      class="block w-full textarea textarea-bordered"
      :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" ref="textarea"></textarea>

</template>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
  props: ['modelValue'],

  emits: ['update:modelValue'],

  methods: {
    focus() {
      this.$refs.textarea.focus()
    }
  }
})
</script>
