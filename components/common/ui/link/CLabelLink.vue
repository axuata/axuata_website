<script setup lang="ts">
const props = defineProps<{
  to: string,
  icon?: string,
  label: string
}>();
</script>

<template>
  <NuxtLink :to class="flex items-center b-(solid 1px gray-2) w-fit px-6px py-2px gap-3px rounded-8px shadow-sm hover:b-(solid 1px gray-3) transition-all duration-100">
    <Icon v-if="icon" :name="icon" class="text-12px" />
    <label class="text-14px font-500 cursor-pointer text-gray-8">{{ label }}</label>
  </NuxtLink>
</template>

<style scoped>

</style>