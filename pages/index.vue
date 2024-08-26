<template>
    <div></div>
</template>

<script setup lang="ts">
  const router = useRouter();
onBeforeMount(() => {
  // console.log("here");
  router.push("/dashboard");
});
</script>