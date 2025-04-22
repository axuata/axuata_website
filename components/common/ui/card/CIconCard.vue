<script setup lang="ts">
const props = defineProps<{
  icon: string,
  link?: string
}>();
</script>

<template>
  <a :href="link" class="bg-white flex items-center justify-center size-65px b-(solid 1px gray-2) rounded-16px shadow-md transition-all duration-100 hover:shadow-sm hover:translate-y-3px">
    <div class="size-25px" :class="'i-' + icon" />
  </a>
</template>

<style scoped>

</style>