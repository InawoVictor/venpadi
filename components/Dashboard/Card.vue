<template>
    <div class="flex flex-col h-[230px] rounded-lg border border-gray1">
        <div class="w-full flex-1 px-4 py-4">
            <div class="flex items-center justify-between">
                <div>
                    <h4 class="text-dark2 font-medium text-xl">{{title}}</h4>
                    <span class="text-[#606060] text-[12px] leading-4 -tracking-[1%]">{{subtitle}}</span>
                </div>
                <div class="border border-gray1 rounded-[10px] px-3 py-2 flex items-center gap-x-2">
                    <!-- <SplitButton label="Save" @click="save" :model="items" /> -->
                    <span class="text-[#6C7278] text-[12px] font-normal">This month</span>
                    <Icon name="iconamoon:arrow-down-2-light" width="11" height="5"  style="color: #292D32" />
                </div>
            </div>
            <div class="mt-7 flex flex-col gap-y-3">
                <span class="text-[40px] text-dark2 font-bold font-manrope">{{value}}</span>
                <span class="text-success text-lg -tracking-[2%]">{{change}}</span>
            </div>
        </div>
        <div class="flex border border-gray1 rounded-b-lg justify-between items-center bg-[#F2F5F7] px-7 py-3 w-full">
            <span class="text-sm text-dark2 font-bold">VIEW REPORT</span>
            <Icon name="radix-icons:arrow-top-right" width="21" height="21"  style="color: #131619" />
        </div>
    </div>
</template>

<script lang="ts" setup>
interface Props {
    title: String;
    subtitle: String;
    value: Number;
    change: String,
}

const props = defineProps<Props>();
</script>