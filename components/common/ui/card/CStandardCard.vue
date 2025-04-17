<script setup lang="ts">
const props = defineProps<{
  title: string,
  description: string,
  link?: string
}>();
</script>

<template>
  <a :href="link" class="no-underline b-(solid 1px gray-3) bg-white block w-fit px-18px py-10px text-center rounded-16px transition-all duration-100 shadow-md hover:(scale-103)">
    <p class="font-en font-600 text-gray-7 text-22px">{{ title }}</p>
    <p class="font-ja text-14px font-600 text-gray-6">{{ description }}</p>
  </a>
</template>

<style scoped>

</style>