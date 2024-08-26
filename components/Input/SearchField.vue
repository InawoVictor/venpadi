<template>
    <div class="flex border border-gray1 px-4 rounded-[10px] transition-all ease-out duration-200 items-center"
        :class="{'border-[1.1px] border-primary': isFocused}"
    >
        <Icon name="iconamoon:search-light" width="16" height="16"  style="color: black" />
        <InputText :id="label" :value="modelValue"
            :type="type"
            @input="handleInput"
            :placeholder="placeholder"
            class="!text-md !shadow-none placeholder:!text-md w-full !pr-0 !border-none !py-2"
            v-bind="$attrs"
            @blur="isFocused = false"
            @focus="isFocused = true"
        />        
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
});
const isFocused = ref(false);

function handleInput(event: Event) {
    const target = event.target as HTMLInputElement | null;
    if (target !== null) {
        emit('update:modelValue', target.value);
    }
}


</script>

<style>
</style>