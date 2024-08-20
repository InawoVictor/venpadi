<template>
    <div 
        :class="
            variant == 'gray' ? 'gray-btn' : 
            variant == 'primary' ? 'primary-btn' : 'gray-btn'
        "
    >
        <Button
            v-bind="$attrs"
            :label="label"
            :disabled="disabled"
            :loading="loading"
            :icon="icon"
            :iconPos="iconPos"
            type="button"
        />
    </div>
</template>

<script lang="ts" setup>
const props = defineProps({
    label: { type: String, required: true },
    disabled: { type: Boolean, default: false },
    loading: { type: Boolean, default: false},
    variant: { type: String, default: "gray"},
    icon: { type: String, default: ""},
    iconPos: { type: String, default: "right"},
})
</script>