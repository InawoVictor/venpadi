<template>
    <div class="flex items-center justify-between border border-gray1 rounded-[7px] h-[103px] px-5">
        <div class="">
            <span class="text-sm text-gray-darken-1 -tracking-[2%]">{{title}}</span>
            <p class="mt-2 text-2xl font-bold">{{useFormatNumbers(stats)}}</p>
        </div>
        <div 
            class="w-[40px] h-[42px] rounded-[7px] flex items-center justify-center"
            :class="bgColor"
        >
            <img :src="icon" class="h-[24px] w-[24px]" alt="">
        </div>
    </div>
</template>

<script setup lang="ts">

const props = defineProps({
    title: {
        type: String, 
        required: true,
    },
    stats: {
        type: Number,
        required: true
    },
    icon: {
        type: String,
        required: true
    },
    cardIndex: {
        type: Number,
        default: 0
    },
});

const bgColor = computed(() => {
    if((props.cardIndex + 3) % 3 == 0){
        return "bg-primary-lighten-1 text-txtWhite"
    } else if((props.cardIndex + 2) % 3 == 0) {
        return " bg-success-lighten-1 text-secondary2"
    } else if((props.cardIndex + 1) % 3 == 0) {
        return " bg-info-lighten-2 text-secondary2"
    }
})
</script>