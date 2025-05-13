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
      <CPhotoCard title="TX秋葉原" description="TX秋葉原駅 A1口" photo="/images/photos/20250427_akihabara_0.JPG" />
      <CPhotoCard title="ヨドバシカメラ秋葉原" description="ヨドバシアキバ" photo="/images/photos/20250427_akihabara_1.JPG" />
      <CPhotoCard title="東京駅" description="駅舎好き" photo="/images/photos/20250427_tokyo_0.JPG" />
      <CPhotoCard title="高輪ゲートウェイシティ" description="高層ビル" photo="/images/photos/20250427_takanawagateway_0.JPG" />
    </div>
  </CSection>
</template>

<style scoped>

</style>