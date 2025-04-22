<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps({
  error: Object as () => NuxtError
});
</script>

<template>
  <NuxtLayout>
    <div v-if="error" class="font-en text-center line-height-tight my-20px">
      <h1 class="text-transparent bg-clip-text bg-gradient-to-b from-red-5 to-red-6 text-72px font-600">{{ error.statusCode }}</h1>
      <p class="text-transparent bg-clip-text bg-gradient-to-b from-gray-6 to-gray-8 font-500">{{ error.statusMessage }}</p>
    </div>
  </NuxtLayout>
</template>
