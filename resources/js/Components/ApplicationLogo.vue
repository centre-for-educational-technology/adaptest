<!--<template>-->
<!--    <svg class="fill-blue-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 0c-4.87 7.197-8 11.699-8 16.075 0 4.378 3.579 7.925 8 7.925s8-3.547 8-7.925c0-4.376-3.13-8.878-8-16.075zm-.027 5.12c.467.725 1.027 1.987 1.027 3.32 0 3.908-4 4.548-4 2.17 0-1.633 1.988-4.044 2.973-5.49z"/></svg>-->
<!--</template>-->

<template>
    <div class="flex justify-center">
        <img :src="Logo" alt="AdaptEST"  />
    </div>
</template>

<script>
import Logo from '@/assets/logo.svg';

export default {
    data() {
        return {
            Logo
        }
    }
}
</script>
