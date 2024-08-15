<template>
    <div>
        <ResetInfo 
            @next:screen="showNextScreen" 
            v-if="nextScreen === 1"
        />
        <ResetNotification 
            data-aos="zoom-in" 
            v-else-if="nextScreen === 2"
            @next:screen="showNextScreen"
        />
        <ResetPassword 
            data-aos="zoom-in" 
            v-else-if="nextScreen === 3"
        />
    </div>
</template>

<script setup lang="">
definePageMeta({
    layout: "action-page-layout"
});

const nextScreen = ref(1);

const showNextScreen = () => {
    nextScreen.value += 1;
}
</script>

<style>
</style>