<script setup lang="ts">
const props = defineProps<{
  title: string,
  description: string,
  photo: string
}>();
</script>

<template>
  <div class="text-center w-fit transition-all duration-100 hover:scale-105">
    <img :src="photo" :alt="title" class="w-320px h-180px rounded-26px shadow-sm" />
    <div class="font-ja line-height-tight mt-6px">
      <p class="text-28px text-gray-7 font-600">{{ title }}</p>
      <p class="text-14px text-gray-6 font-500">{{ description }}</p>
    </div>
  </div>
</template>

<style scoped>

</style>