<template>
    <div class="gray-btn">
        <Button
            class="
            "
            type="submit"
            :label="label"
            :disabled="disabled"
            :loading="loading"
        />
    </div>
</template>

<script lang="ts" setup>
const props = defineProps({
    label: { type: String, required: true },
    disabled: { type: Boolean, default: false },
    loading: { type: Boolean, default: false}
})
</script>