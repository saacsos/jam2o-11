<template>
  <NuxtLayout>
    <NuxtPage></NuxtPage>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { initFlowbite } from 'flowbite';

onMounted(() => {
  initFlowbite()
})
</script>