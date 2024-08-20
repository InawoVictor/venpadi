<template>
    <Toast
        position="bottom-center"
    >
        <template #message="slotProps">
            <div class="flex gap-x-3 items-center flex-auto">
                <div>
                    <i class="pi text-[40px]  pi-exclamation-circle"></i>
                </div>
                <!-- text-[rgb(202,218,215)] -->
                <div class="font-medium text-dark text-md">{{ slotProps.message.summary }}</div>
            </div>
        </template>
    </Toast>
</template>

<script setup lang="ts">
</script>