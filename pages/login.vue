<template>
  <div class="lg:pl-8 lg:pt-2 py-6 px-[7%] flex flex-col text-black gap-y-12 sm:gap-y-20">
    <img src="/svg/action-logo.svg" class="h-[53px] w-[53px]" alt="Logo">

    <div class="">
        <h3 class="text-[32px] font-bold text-black">Wellcome Back</h3>
        <p class="text-md mt-5 text-black tracking-[2%]">
            No matter what you sell, Venpadi has the tools to 
            take your business where you want it to go.
        </p>

        <form class="mt-7 flex flex-col gap-y-4">
            <InputTextField 
                v-model="formData.email" 
                label="Email"
                placeholder="Enter your email"
                type="email"
            />
            <InputPasswordField 
                v-model="formData.password"  
                label="Password"
                placeholder="Password"
                :type="showPassword ? 'text' : 'password'"
                @changeType="showPassword = !showPassword"
            />
            <div class="flex items-center justify-between">
                <div class="flex items-center gap-x-2">
                    <Checkbox v-model="rememberMe" variant="outlined" :binary="true" />
                    <label class="text-md font-semibold text-black">Remember me</label>
                </div>
                <NuxtLink to="/reset-password" 
                        class="text-black action-link"
                    >
                        Forgot password?
                    </NuxtLink>
            </div>
            <InputSubmitButton 
                label="Sign In"
            />
        </form>
        <div class="flex flex-col mt-12 gap-y-32 items-center">
            <p class="text-md font-semibold tracking-[-2%]">
                Dont have an account? 
                <NuxtLink to="/sign-up" class="text-info action-link">Register Here</NuxtLink>
            </p>
            <div class="flex justify-center items-center flex-wrap gap-3">
                <p class="text-[#6C7278] text-sm font-semibold text-nowrap">© 2024 Venpadi. All rights reserved. </p>
                <span class="text-info font-bold text-sm text-nowrap">Term & Condition</span>
                <div class="bg-[#ACB5BB] h-[21px] w-[1px]"></div>
                <span class="text-info font-bold text-sm text-nowrap">Privacy & Policy</span>
            </div>
        </div>
    </div>
  </div>
</template>

<script setup lang="">
definePageMeta({
    layout: "action-page-layout"
});

import { useVuelidate } from '@vuelidate/core'
import { required, email } from "@vuelidate/validators";

const showPassword = ref(false);

const formData = reactive({
    password: "",
    email: "",
})
const rememberMe = ref(false);

const rules = {
    password: { required },
    email: { required, email },
};
</script>

<style>
</style>