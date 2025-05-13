<script setup lang="ts">
const props = defineProps<{
  title: string,
  description: string,
  photo: string
}>();
</script>

<template>
  <div class="text-center w-fit transition-all duration-100 hover:scale-103">
    <NuxtImg :src="photo" :alt="title" class="w-320px h-180px rounded-20px shadow-sm" />
    <div class="font-ja line-height-tight mt-8px">
      <p class="text-24px text-gray-8 font-600">{{ title }}</p>
      <p class="text-14px text-gray-6 font-500 mt-4px">{{ description }}</p>
    </div>
  </div>
</template>

<style scoped>

</style>