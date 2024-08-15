<template>
    <div class="lg:pl-8 lg:py-2 pt-6 px-[7%] flex flex-col text-black gap-y-12 sm:gap-y-20">
        <img src="/svg/action-logo.svg" class="h-[53px] w-[53px]" alt="Logo">

        <div class="">
            <h3 class="sm:text-[32px] text-2xl leading-7 sm:leading-10 font-bold text-black">
                Tell us about your business
            </h3>
            <p class="sm:text-md text-sm mt-5 text-black tracking-[2%]">
                No matter what you sell, Venpadi has the tools 
                to take your business where you want it to go.
            </p>

            <form @submit.prevent="handleSubmit" class="mt-5 sm:mt-7 flex flex-col gap-y-3">
                <InputTextField 
                    v-model="formData.businessName" 
                    label="What is your business name?"
                    placeholder="Business name"
                    :errors="v$.businessName.$errors"
                />
                <InputTextField 
                    v-model="formData.businessDesc" 
                    label="What kind of business do you run?"
                    placeholder="Business Description"
                    :errors="v$.businessDesc.$errors"
                />
                <InputSubmitButton
                    class="sm:mt-20 mt-10"
                    label="Start using Venpadi"
                />
            </form>
            <div class="sm:mt-16 mt-20 flex justify-center items-center">
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

// const emit = defineEmits(['next:page']);
const showPassword = ref(false);
const formData = reactive({
    businessName: "",
    businessDesc: "",
})
const rememberMe = ref(false);

const rules = {
    businessName: { required },
    businessDesc: { required },
};

const v$ = useVuelidate(rules, formData);

const handleSubmit = async () => {
    const result = await v$.value.$validate();
    if (result) {
        // auth.login(formData);
        // emit('next:page');
        // console.log(first)
    }
};
</script>

<style>
</style>