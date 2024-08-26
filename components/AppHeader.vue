<template>
    <div class="  
        bg-white z-20
        sticky top-0 px-[3%]  flex items-center transition-all ease-out duration-300
        justify-between border-b border-b-gray1 h-[80px] "
        :class="drawer.isOpen ? 'ml-[232px]' : 'ml-0'"
    >
        <div class="flex items-center gap-4">
            <button
                class="
                    outline-none px-3 py-2 rounded-full h-[40px] w-[40px] 
                    sm:bg-transparent bg-gray-50 cursor-pointer
                    hover:bg-gray-50 active:bg-gray-100
                    flex items-center justify-center
                "
                @click="handleDrawer"
            >
                <i class="text-xl pi pi-bars text-gray-500"></i>
        </button>
            <div>
                <h4 class="text-2xl font-bold">Overview</h4>
                <span class="text-gray-darken-1 text-sm font-medium">December 18,2023</span>
            </div>
        </div>
        <div class="flex gap-x-5 items-center">
            <div class="flex items-center pr-6 border-r border-r-gray1">
                <Icon name="humbleicons:bell" 
                    width="16" height="20"  
                    style="color: #1D1B20" 
                />
            </div>
            <div class="flex items-center pr-6 border-r border-r-gray1">
                <Icon name="fluent:settings-28-regular" 
                    width="16" height="20"  
                    style="color: #1D1B20" 
                />
            </div>
            <div class="flex items-center gap-x-2 pr-6 border-r border-r-gray1">
                <span class="text-md font-bold">POS</span>
                <Icon name="dashicons:money-alt" 
                    width="16" height="20"  
                    style="color: #1D1B20" 
                />
            </div>
            <div class="">
                <div class="flex cursor-pointer items-center gap-x-2"
                    @click="toggle" 
                    aria-haspopup="true" 
                    aria-controls="overlay_menu"
                >
                    <span class="text-md font-bold">Wadas</span>
                    <Icon name="iconamoon:arrow-down-2" width="16" height="16"  style="color: #1A1C1E" />
                </div>
                <Menu ref="menu" id="overlay_menu" :model="items" :popup="true" />
            </div>
            <div class="">
                <button 
                    class="primary-btn2 flex items-center gap-3"
                >
                    <span>Add New</span>
                    <Icon name="ph:plus-bold" width="16" height="16"  style="color: white" />
                </button>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
const drawer = useDrawerStore();
const visible = ref(true);
const menu = ref();
const items = ref([
    {
        // label: 'Options',
        items: [
            {
                label: 'Refresh',
                icon: 'pi pi-refresh'
            },
            {
                label: 'Export',
                icon: 'pi pi-upload'
            }
        ]
    }
]);

const handleDrawer = () => {
    drawer.toggleDrawer();
};

const toggle = (event: Event) => {
    menu.value.toggle(event);
};
</script>