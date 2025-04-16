<script setup lang="ts">

</script>

<template>
  <!-- Welcome -->
  <div class="font-inter text-center py-30px">
    <p class="text-56px font-600 text-transparent bg-clip-text bg-gradient-to-b from-gray-6 to-gray-8">Welcome</p>
  </div>

  <!-- About me -->
  <section class="my-26px flex items-center justify-between">
    <div>
      <div class="font-inter">
        <p class="font-600 line-height-tight text-transparent bg-clip-text bg-gradient-to-b from-gray-7 to-gray-8 text-38px">About me</p>
      </div>
      <div>
        <div class="font-500 text-gray-6">
          <p><b>Web開発とゲーム</b>が好きな学生です。</p>
          <p><b>音楽</b>も好きで、<i>Coldplay</i>の<a href="https://www.youtube.com/watch?v=dvgZkm1xWPE">Viva La Vida</a>などをよく聴いています。</p>
          <p>海外にも興味があり、いつかヨーロッパに旅行に行きたいと思っています。</p>
        </div>
      </div>
    </div>
    <div class="bg-white rounded-24px b-(solid 1px gray-2) shadow-sm">
      <img src="/favicon.svg" alt="Axuata's icon" class="size-120px max-md:hidden" />
    </div>
  </section>

  <CSection title="Main Projects" title-align="left" title-size="28px">
    <div class="flex gap-8px pt-5px">
      <CStandardCard link="https://github.com/axuata/axuata" title="Axuata Website" description="Axuataのウェブサイト" />
      <CStandardCard link="https://github.com/axuata/dummify" title="Dummify" description="ダミー画像生成ツール" />
    </div>
  </CSection>
  <CSection title="Links" title-align="left" title-size="28px">
    <div class="flex gap-8px">
      <CIconCard icon-name="logos:github-icon" link="https://github.com/axuata" />
      <CIconCard icon-name="logos:x" link="https://x.com/axuata_x" />
    </div>
  </CSection>
</template>

<style scoped>

</style>