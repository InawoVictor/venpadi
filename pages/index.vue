<template>
  <div>Hello from 
    
    <button @click="dialog.showError('hello success')">show dialog</button>
  </div>
</template>

<script setup lang="ts">
const dialog = useDialogStore();

</script>

<style>

</style>