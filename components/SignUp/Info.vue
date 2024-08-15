<template>
    <div class="lg:pl-8 lg:pt-2 py-6 px-[6%] flex flex-col text-black gap-y-12 sm:gap-y-20">
        <div class="flex items-center sm:justify-between gap-x-5">
            <img src="/svg/action-logo.svg" class="h-[53px] w-[53px]" alt="Logo">
            <div>
                <p class="sm:text-md text-sm font-semibold text-black">
                    Already have an account? <br class="sm:hidden"/>
                    <NuxtLink to="/login" 
                        class="text-info action-link"
                    >
                        Login Here
                    </NuxtLink>
                </p>
            </div>
        </div>

        <div class="">
            <h3 class="sm:text-[32px] text-2xl font-bold text-black leading-7 sm:leading-10">Let’s create your account.</h3>
            <p class="sm:text-md text-sm mt-5 text-black tracking-[2%]">
                Ready to take your retail business to the next level? 
                Fill out the form below to get started with Venpadi today!
            </p>

            <form @submit.prevent="handleSubmit" class="mt-3 sm:mt-7 flex flex-col gap-y-3">
                <InputTextField 
                    v-model="formData.name" 
                    label="Name"
                    placeholder="Enter your full name"
                    :errors="v$.name.$errors"
                />
                <InputTextField 
                    v-model="formData.email" 
                    label="Email"
                    placeholder="Enter your email"
                    type="text"
                    :errors="v$.email.$errors"
                />
                <!-- <InputTextField 
                    v-model="formData.email" 
                    label="Email"
                    placeholder="Enter your email"
                    type="email"
                    :errors="v$.email.$errors"
                /> -->
                <!-- <vue-tel-input v-model="formData.phoneNumber"></vue-tel-input> -->

                <InputPasswordField 
                    v-model="formData.password"  
                    label="Password"
                    placeholder="Password"
                    :type="showPassword ? 'text' : 'password'"
                    @changeType="showPassword = !showPassword"
                    :errors="v$.password.$errors"
                />
                <div class="flex items-center mt-3 gap-x-2">
                    <Checkbox v-model="rememberMe" variant="outlined" :binary="true" />
                    <label class="sm:text-md text-sm font-semibold text-black">
                        I agree to Venpadi's <span class="text-primary cursor-pointer underline">Terms, Privacy Policy</span>, 
                        and <span class="text-primary underline cursor-pointer">E-Sign Consent</span>.
                    </label>
                </div>
                <InputSubmitButton
                    class="mt-20"
                    label="Next"
                />
            </form>
            <div class="mt-16 flex justify-center items-center">
                <p class="text-[#6C7278] text-sm font-semibold">
                    © 2024 Venpadi. All rights reserved. 
                </p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useVuelidate } from '@vuelidate/core';
import { required, email } from "@vuelidate/validators";

const emit = defineEmits(['next:page']);
const showPassword = ref(false);
const formData = reactive({
    name: "",
    email: "",
    password: "",
});
    // phoneNumber: "",
const rememberMe = ref(false);

const rules = {
    name: { required },
    email: { required, email },
    password: { required },
};
    // phoneNumber: { required },

const v$ = useVuelidate(rules, formData);

const handleSubmit = async () => {
    const result = await v$.value.$validate();
    if (result) {
        emit('next:page');
    }
};
</script>

<style>
</style>