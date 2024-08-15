<template>
    <Button 
        class="
            shadow-[0px_-3px_2px_0px_rgba(225,97,25,1)_inset]
            !bg-primary !text-white !py-[13px] 
            !px-6 !border !border-primary-darken-2
        "
        type="submit"
        :label="label" 
        :disabled="disabled" 
        :loading="loading"
    />
</template>

<script lang="ts" setup>
const props = defineProps({
    label: { type: String, required: true },
    disabled: { type: Boolean, default: false },
    loading: { type: Boolean, default: false}
})
</script>