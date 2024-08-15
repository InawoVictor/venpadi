<template>
    <div>
        <SignUpInfo @next:page="changeScreen" v-if="!showBusiness"/>
        <SignUpBusiness data-aos="zoom-in" v-else/>
    </div>
</template>

<script setup lang="">
definePageMeta({
    layout: "action-page-layout"
});
const showBusiness = ref(false);
const changeScreen= () => {
    showBusiness.value = true;
    // console.log("Show busin")
}

</script>

<style>
</style>