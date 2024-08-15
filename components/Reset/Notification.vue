<template>
    <div class="lg:pl-8 lg:pt-2 py-6 px-[7%] flex flex-col text-black gap-y-14 sm:gap-y-20">
        <img src="/svg/action-logo.svg" class="h-[53px] w-[53px]" alt="Logo">

        <div class="">
            <div class="flex flex-col items-center">
                <h3 class="text-[32px] font-bold text-black">Forgot Password</h3>
                <p class="text-md mt-5 text-center text-black tracking-[2%]">
                    We have sent a password reset link to your email <br />
                    <span class="font-bold">grace@yopmail.com</span>
                </p>
            </div>
            <div class="flex-1 flex gap-y-6 flex-col mt-10">
                <InputSubmitButton
                    class="w-full"
                    label="Continue"
                    @click="changeScreen"
                />
                <BtnPrimary 
                    label="Back" 
                    class=""
                />
                <p class="sm:text-md text-sm font-semibold tracking-[-2%]">
                    Didn't receive the mail ? 
                    <NuxtLink to="/sign-up" class="text-info action-link">Click to resend</NuxtLink>
                </p>
            </div>            
            <div class="flex justify-center mt-24">
            <div class="flex  items-center justify-center gap-3 flex-wrap">
                <p class="text-[#6C7278] text-sm font-semibold text-nowrap">© 2024 Venpadi. All rights reserved. </p>
                <span class="text-info font-bold text-sm text-nowrap">Term & Condition</span>
                <div class="bg-[#ACB5BB] h-[21px] w-[1px] text-nowrap"></div>
                <span class="text-info font-bold text-sm text-nowrap">Privacy & Policy</span>
            </div>
        </div>
        </div>        
    </div>
</template>

<script setup lang="ts">
const emit = defineEmits(['next:screen']);


const changeScreen = () => {
    emit('next:screen');
};
</script>

<style>
</style>