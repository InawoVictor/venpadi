<template>
    <div class="lg:pl-8 lg:pt-2 py-6 sm:px-[7%] px-[5%] flex flex-col text-black gap-y-12 sm:gap-y-20">
        <img src="/svg/action-logo.svg" class="h-[53px] w-[53px]" alt="Logo">

        <div class="">
            <h3 class="sm:text-[32px] text-2xl leading-7 sm:leading-10 font-bold text-black ">Forgot Password</h3>
            <p class="sm:text-md text-sm mt-5 text-black tracking-[2%]">
                No worries we will send you instructions for reset.
            </p>
            <form @submit.prevent="handleSubmit" class="mt-9 sm:mt-12 flex flex-col ">
                <InputTextField 
                    v-model="formData.email" 
                    label="Email"
                    placeholder="Enter your email"
                    :errors="v$.email.$errors"
                />
                
                <div class="flex-1 flex gap-y-6 flex-col mt-10">
                    <InputSubmitButton
                        class="w-full"
                        label="Sign In"
                    />
                    <BtnPrimary 
                        label="Back" 
                        class=""
                    />
                </div>
            </form>
            <div class="flex justify-center mt-24">
            <div class="flex justify-center items-center gap-3 flex-wrap">
                <p class="text-[#6C7278] text-nowrap text-sm font-semibold">© 2024 Venpadi. All rights reserved. </p>
                <span class="text-info font-bold text-nowrap text-sm">Term & Condition</span>
                <div class="bg-[#ACB5BB] h-[21px] w-[1px]"></div>
                <span class="text-info font-bold text-nowrap text-sm">Privacy & Policy</span>
            </div>
        </div>
        </div>        
    </div>
</template>

<script setup lang="ts">
import { useVuelidate } from '@vuelidate/core'
import { required, email } from "@vuelidate/validators";

const emit = defineEmits(['next:screen']);
const formData = reactive({
    email: "",
})
const rules = {
    email: { required, email },
};

const v$ = useVuelidate(rules, formData);

const handleSubmit = async () => {
    const result = await v$.value.$validate();
    if (result) {
        emit('next:screen');
    }
};
</script>

<style>
</style>