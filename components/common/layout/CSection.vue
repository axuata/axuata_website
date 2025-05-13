<script setup lang="ts">
const props = defineProps<{
  title: string,
  titleAlign: 'left' | 'center' | 'right',
  titleSize: string,
}>();
</script>

<template>
  <section class="my-30px">
    <div class="font-en">
      <p class="font-600 line-height-tight text-transparent bg-clip-text bg-gradient-to-b from-gray-7 to-gray-8" :style="{'text-align': titleAlign, 'font-size': titleSize}">{{ title }}</p>
    </div>
    <div class="font-ja">
      <slot />
    </div>
  </section>
</template>

<style scoped>

</style>