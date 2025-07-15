<script setup lang="ts">
const props = defineProps<{
  to: string,
  icon: string,
  title: string,
  desc: string
}>();
</script>

<template>
  <NuxtLink :to class="flex items-center px-10px py-6px bg-white transition-all duration-100 hover:scale-105 w-fit">
    <div class=" bg-gray-1 size-50px flex items-center justify-center rounded-12px">
      <Icon :name="icon" class="size-30px" />
    </div>
    <div class="ml-8px">
      <p class="text-17px font-600 text-gray-8">{{ title }}</p>
      <p class="text-12px font-500 text-gray-6">{{ desc }}</p>
    </div>
  </NuxtLink>
</template>

<style scoped>

</style>