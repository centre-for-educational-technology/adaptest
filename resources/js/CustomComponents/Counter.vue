<script setup>
import {onBeforeUnmount, onMounted, ref, useTemplateRef} from "vue";

const props = defineProps({
    to: Number,
    duration: {
        type: Number,
        required: false,
        default: 1000,
    },
});

const shouldAnimate = ref(false);
const transitionDuration = ref(props.duration + 'ms');
const counterElement = useTemplateRef('counter');
let observer;

onMounted(() => {
    observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // @todo This seems to be giving a lot of false positives, especially with the smaller screens
            if (entry.isIntersecting) {
                shouldAnimate.value = true;
                observer.unobserve(entry.target);
            }
        });
    }, {
        root: null,
        threshold: 1.0,
    });

    observer.observe(counterElement.value);
});

onBeforeUnmount(() => {
    if (observer) {
        observer.disconnect();
    }
});
</script>

<template>
    <div ref="counter" :class="{ animate: shouldAnimate }">
        <span class="sr-only">{{ to }}</span>
    </div>
</template>

// CSS solution logic taken from here: https://css-tricks.com/animating-number-counters/
<style scoped>
@property --num {
    syntax: '<integer>';
    initial-value: 0;
    inherits: true;
}
div {
    transition: --num v-bind(transitionDuration);
    counter-reset: num var(--num);
}
div.animate {
    --num: v-bind(to);
}
div::after {
    content: counter(num);
}
</style>
