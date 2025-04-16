<script setup lang="ts">
const props = defineProps<{
  iconName: string,
  link?: string
}>();
</script>

<template>
  <a :href="link" class="bg-white flex items-center justify-center size-65px b-(solid 1px gray-2) rounded-16px shadow-md transition-all duration-100 hover:scale-105">
    <div class="size-25px" :class="'i-' + iconName" />
  </a>
</template>

<style scoped>

</style>