<script setup lang="ts">
const props = defineProps<{
  emoji: string,
  title: string,
  description: string,
  link?: string
}>();
</script>

<template>
  <NuxtLink class="flex items-center no-underline transition-all duration-100 hover:(scale-105) w-fit" :to="link">
    <div class="bg-white size-80px flex items-center justify-center b-(solid 1px gray-2) rounded-20px">
      <Twemoji :emoji="emoji" size="35px" />
    </div>
    <div class="font-ja ml-8px">
      <p class="text-24px font-600 text-gray-7">{{ title }}</p>
      <p class="text-14px font-500 text-gray-6">{{ description }}</p>
    </div>
  </NuxtLink>
</template>

<style scoped>

</style>