<script setup>
defineProps({
    name: String,
    title: String,
    content: String,
    active: Boolean,
});
</script>

<template>
    <div class="collapse collapse-plus border-b rounded-none border-black">
        <input type="radio" :name="name" :checked="active" />
        <div class="collapse-title text-xl font-medium">
            {{ title }}
        </div>
        <div class="collapse-content">
            <p>{{ content }}</p>
        </div>
    </div>
</template>
