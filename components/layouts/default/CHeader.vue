<script setup lang="ts">

</script>

<template>
  <header class="font-en h-60px flex items-center justify-between">
    <div>
      <img src="/favicon.svg" alt="Axuata's icon" class="size-52px" />
    </div>
    <nav class="flex items-center justify-center gap-8px">
      <NuxtLink to="/" class="transition-all duration-100 no-underline text-gray-7 font-500 hover:tracking-wide">Home</NuxtLink>
      <NuxtLink to="/gallery/" class="transition-all duration-100 no-underline text-gray-7 font-500 hover:tracking-wide">Gallery</NuxtLink>
    </nav>
    <div class="flex items-center justify-center gap-10px">
      <a href="https://github.com/axuata"><div class="i-logos:github-icon size-20px" /></a>
      <a href="https://x.com/axuata_x"><div class="i-logos:x size-20px" /></a>
    </div>
  </header>
</template>

<style scoped>

</style>