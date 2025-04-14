<script setup lang="ts">

</script>

<template>
  <div class="font-inter text-center py-30px">
    <p class="text-56px font-600 text-transparent bg-clip-text bg-gradient-to-b from-gray-6 to-gray-8">Welcome</p>
  </div>
  <CSection title="About me" title-align="left" title-size="38px">
    <div class="font-500 text-gray-6">
      <p><b>Web開発とゲーム</b>が好きな学生です。</p>
      <p><b>音楽</b>も好きで、<i>Coldplay</i>の<a href="https://www.youtube.com/watch?v=dvgZkm1xWPE">Viva La Vida</a>などをよく聴いています。</p>
      <p>海外にも興味があり、いつかヨーロッパに旅行に行きたいと思っています。</p>
    </div>
  </CSection>
  <CSection title="Main Projects" title-align="center" title-size="28px">
    <div class="flex gap-8px justify-center pt-6px">
      <CProjectCard link="https://github.com/axuata/axuata" title="Axuata Website" description="Axuataのウェブサイト" />
      <CProjectCard link="https://github.com/axuata/dummify" title="Dummify" description="ダミー画像生成ツール" />
    </div>
  </CSection>
  <CSection title="Links" title-align="left" title-size="26px">
    <div class="flex gap-8px">
      <a href="https://github.com/axuata" class="bg-white flex items-center justify-center size-70px b-(solid 1px gray-2) rounded-16px transition-all duration-100 hover:scale-105">
        <div class="i-logos:github-icon  size-30px" />
      </a>
      <a href="https://x.com/axuata_x" class="bg-white flex items-center justify-center size-70px b-(solid 1px gray-2) rounded-16px transition-all duration-100 hover:scale-105">
        <div class="i-logos:x  size-30px" />
      </a>
    </div>
  </CSection>
</template>

<style scoped>

</style>