<script setup lang="ts">

</script>

<template>
  <!-- Title -->
  <div class="font-en text-center py-18px line-height-tight">
    <p class="text-52px font-600 text-transparent bg-clip-text bg-gradient-to-b from-gray-6 to-gray-8">Gallery</p>
    <p class="text-14px font-500 text-transparent bg-clip-text bg-gradient-to-b from-gray-5 to-gray-6">Photos & Videos</p>
  </div>

  <CSection title="Photos" title-align="center" title-size="36px">
    <div class="flex flex-wrap gap-14px justify-center mt-8px">
      <CPhotoCard title="Coming Soon..." description="Coming Soon..." photo="https://placehold.co/320x180" />
      <CPhotoCard title="Coming Soon..." description="Coming Soon..." photo="https://placehold.co/320x180" />
    </div>
  </CSection>
</template>

<style scoped>

</style>