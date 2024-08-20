<template>
  <div>
    <!-- Sidebar Drawer -->
    <AppDrawer />

    <!-- App Header -->
    <AppHeader />


    <!-- Main Content Area -->
    <main :class="drawer.isOpen ? 'ml-[232px]' : 'ml-0'" class="p-4 transition-all ease-out duration-300">
      <nuxt-page></nuxt-page>
    </main>
  </div>
</template>


<script setup lang="ts">
const drawer = useDrawerStore();

onMounted(() => {
    drawer.toggleDrawer();
})
</script>
