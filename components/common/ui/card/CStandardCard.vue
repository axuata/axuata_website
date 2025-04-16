<script setup lang="ts">
const props = defineProps<{
  title: string,
  description: string,
  link?: string
}>();
</script>

<template>
  <a :href="link" class="no-underline b-(solid 1px gray-2) bg-white block w-fit px-18px py-10px text-center rounded-16px transition-all duration-100 shadow-sm hover:(scale-103)">
    <p class="font-inter font-600 text-gray-7 text-22px">{{ title }}</p>
    <p class="text-14px font-600 text-gray-6">{{ description }}</p>
  </a>
</template>

<style scoped>

</style>