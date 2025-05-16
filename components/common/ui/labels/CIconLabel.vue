<script setup lang="ts">
const props = defineProps<{
  icon?: string,
  label: string
}>()
</script>

<template>
  <div class="flex items-center b-(solid 1px gray-2) w-fit px-5px py-3px gap-3px rounded-8px shadow-sm">
    <Icon v-if="icon" :name="icon" class="text-12px" />
    <label class="text-14px font-500">{{ label }}</label>
  </div>
</template>

<style scoped>

</style>