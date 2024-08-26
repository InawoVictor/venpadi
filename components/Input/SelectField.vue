<template>
    <FloatLabel class="w-full">
        <Select v-model="modelValue" 
            :inputId="label" 
            :options="options" 
            :optionLabel="optionLabel" 
            class="w-full" 
            :loading="loading" 
            showClear 
        />
        <label :for="label">{{ label }}</label>
  </FloatLabel>
</template>

<script lang="ts" setup>
const emit = defineEmits(["update:modelValue"]);
const props = defineProps({
    modelValue: {
      type: [String, Number, Object],
      required: true,
    },
    options: {
      type: Array,
      required: true,
    },
    optionLabel: {
      type: String,
      default: "name",
    },
    label: {
      type: String,
      required: true,
    },
    loading: {
      type: Boolean,
      default: false,
    },
})
</script>