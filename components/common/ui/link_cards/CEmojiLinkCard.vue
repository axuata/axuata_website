<script setup lang="ts">
const props = defineProps<{
  emoji: string,
  to: string,
  title: string,
  desc: string
}>();
</script>

<template>
  <a :href="to" class="flex items-center px-10px py-6px bg-white transition-all duration-100 hover:scale-105 w-fit">
    <div class=" bg-gray-1 size-50px flex items-center justify-center rounded-12px">
      <Twemoji :emoji="emoji" class="size-25px" />
    </div>
    <div class="ml-8px">
      <p class="text-16px font-600 text-gray-8">{{ title }}</p>
      <p class="text-12px text-gray-6">{{ desc }}</p>
    </div>
  </a>
</template>

<style scoped>

</style>