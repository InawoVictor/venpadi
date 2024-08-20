export const useDrawerStore = defineStore('drawer', () => {
    const isOpen = ref(false);

    function toggleDrawer() {
        isOpen.value =!isOpen.value;
    }

    return {
        isOpen,
        toggleDrawer,
    }
});