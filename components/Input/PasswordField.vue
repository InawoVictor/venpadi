<template>
    <div class="relative pb-3">
        <div class="flex flex-col gap-y-2">
            <label :for="label" class="ml-4 font-medium sm:text-md text-sm font-archivo text-black">{{label}}</label>
            <div class="flex-1 relative">
                <InputText :id="label" :value="modelValue"
                    :type="type"
                    @input="handleInput"
                    :placeholder="placeholder"
                    class="!pr-8 w-full"
                    v-bind="$attrs"
                />
                <div class="absolute stay-center" >
                    <i class="pi cursor-pointer text-txtDark3"
                        :class="type === 'password' ? 'pi-eye-slash' : 'pi-eye'"
                        @click="$emit('changeType')"
                    ></i>
                </div>
            </div>
        </div>
        <small
            v-for="error in errors"
            :key="error.$uid"
            class="text-rose-600 absolute -bottom-[10%] left-[1%]  font-medium "
            aria-live="assertive"
        >
            {{ error.$message }}
        </small>
    </div>
</template>

<script setup lang="ts">
const emit = defineEmits(['update:modelValue']);
const props = defineProps({
    type: {
        type: String,
        required: false,
        default: 'password',
    },
    modelValue: {
        type: String,
        required: true,
    },
    placeholder: {
        type: String,
        default: "",
    },
    label: {
        type: String,
        default: "",
    },
    required: {
        type: Boolean,
        default: false,
    },
    errors: {
        type: Array,
        default: [],
    },
});

function handleInput(event: Event) {
    const target = event.target as HTMLInputElement | null;
    if (target !== null) {
        emit('update:modelValue', target.value);
    }
}

</script>

<style>
.stay-center{
    top: 50%;
    right: 15px;
    transform: translateY(-50%);
}
</style>