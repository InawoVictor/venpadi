<template>
    <div class="relative pb-3">
        <div class="flex flex-col gap-y-2">
            <label :for="label" class="ml-4 font-medium text-sm sm:text-md font-archivo text-black">{{label}}</label>
            <InputText :id="label" :value="modelValue"
                :type="type"
                @input="handleInput"
                :placeholder="placeholder"
                class="input-field"
                v-bind="$attrs"
            />
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
        default: "text",
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
.p-inputtext{
    background: white !important;
}
</style>