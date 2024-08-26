<template>
    <div :class="isOpen ? 'left-0' : '-left-[232px]'" class="bg-dark h-full transition-all ease-out duration-300 fixed top-0 w-[232px]">
            <div class="flex h-full flex-col">
                <div class="flex justify-center w-full pb-10 pt-8">
                    <span class="font-bold font-poppins text-2xl text-white">Venpadi</span>
                </div>
                <div class="overflow-y-auto">
                    <ul class="list-none p-4 m-0">
                        <li v-for="(item, i) in menuItems" :key="i">
                            <div v-if="item.hasSubMenu">
                                <a
                                    v-ripple
                                    v-styleclass="{
                                        selector: '@next',
                                        enterFromClass: 'hidden',
                                        enterActiveClass: 'animate-slidedown',
                                        leaveToClass: 'hidden',
                                        leaveActiveClass: 'animate-slideup'
                                    }"
                                    class="flex items-center cursor-pointer p-4 rounded text-surface-700 hover:bg-surface-100 dark:text-surface-0 dark:hover:bg-surface-800 duration-150 transition-colors p-ripple"
                                >
                                    <img :src="item.icon" class="pr-2" alt="">
                                    <span class="font-medium">{{item.title}}</span>
                                    <i class="pi pi-chevron-down ml-auto"></i>
                                </a>
                                <ul class="list-none py-0 pl-4 pr-0 m-0 hidden overflow-y-hidden transition-all duration-[400ms] ease-in-out">
                                    <li v-for="(subItem, i) in item.subMenu" :key="i">
                                        <NuxtLink
                                            :to="subItem.link"
                                            v-ripple
                                            class="flex items-center cursor-pointer p-4 rounded text-surface-700 hover:bg-surface-100 dark:text-surface-0 dark:hover:bg-surface-800 duration-150 transition-colors p-ripple"
                                        >
                                            <img :src="subItem.icon" class="mr-2" alt="">
                                            <span class="font-medium">{{subItem.title}}</span>
                                        </NuxtLink>
                                    </li>
                                </ul>
                            </div>
                            <a v-else v-ripple class="flex items-center cursor-pointer p-4 rounded text-surface-700 hover:bg-surface-100 dark:text-surface-0 dark:hover:bg-surface-800 duration-150 transition-colors p-ripple">
                                <img :src="item.icon" class="mr-2" alt="">
                                <span class="font-medium">{{item.title}}</span>
                            </a>
                        </li>                                                
                        <!-- <li>
                            <a v-ripple class="flex items-center cursor-pointer p-4 rounded text-surface-700 hover:bg-surface-100 dark:text-surface-0 dark:hover:bg-surface-800 duration-150 transition-colors p-ripple">
                                <i class="pi pi-comments mr-2"></i>
                                <span class="font-medium">Messages</span>
                                <span class="inline-flex items-center justify-center ml-auto bg-primary text-primary-contrast rounded-full" style="min-width: 1.5rem; height: 1.5rem">3</span>
                            </a>
                        </li> -->
                        <!-- <li>
                            <a v-ripple class="flex items-center cursor-pointer p-4 rounded text-surface-700 hover:bg-surface-100 dark:text-surface-0 dark:hover:bg-surface-800 duration-150 transition-colors p-ripple">
                                <i class="pi pi-cog mr-2"></i>
                                <span class="font-medium">Settings</span>
                            </a>
                        </li> -->
                    </ul>
                </div>
            </div>
    </div>
</template>

<script setup lang="ts">
const drawer = useDrawerStore();
const menuItems = [
    {
        title: 'Dashboard',
        icon: '/svg/dashboard.svg',
        link: '/dashboard',
        hasSubMenu: false,
    },
    {
        title: 'Parties',
        icon: '/svg/people.svg',
        link: '/',
        hasSubMenu: true,
        subMenu: [
            {
                title: 'Parties',
                icon: '/svg/people.svg',
                link: '/parties',
            },
            {
                title: 'Parties',
                icon: '/svg/people.svg',
                link: '/',
            },
        ]
    },
    {
        title: 'Products',
        icon: '/svg/box.svg',
        link: '/',
        hasSubMenu: true,
        subMenu: [
            {
                title: 'Parties',
                icon: '/svg/people.svg',
                link: '/',
            },
            {
                title: 'Parties',
                icon: '/svg/people.svg',
                link: '/',
            },
        ]
    },
    {
        title: 'Products',
        icon: '/svg/box.svg',
        link: '/',
        hasSubMenu: true,
        subMenu: [
            {
                title: 'Parties',
                icon: '/svg/people.svg',
                link: '/',
            },
            {
                title: 'Parties',
                icon: '/svg/people.svg',
                link: '/',
            },
        ]
    },
    // {
    //     title: 'Sales',
    //     icon: '/svg/status-up.svg',
    //     link: '/',
    //     hasSubMenu: true,
    //     subMenu: [
    //         {
    //             title: 'Parties',
    //             icon: '/svg/parties.svg',
    //             link: '/',
    //         },
    //         {
    //             title: 'Parties',
    //             icon: '/svg/parties.svg',
    //             link: '/',
    //         },
    //     ]
    // },
]

const isOpen = computed({
    get: () => drawer.isOpen,
    set: (value: boolean) => {
        drawer.toggleDrawer();
    }
})
</script>