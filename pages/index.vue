<script setup lang="ts">

</script>

<template>
  <!-- Welcome -->
  <section>
    <h1 class="font-700 text-32px">I'm Axuata 👋</h1>
    <div class="flex justify-between max-md:block">
      <div class="line-height-relaxed text-gray-8">
        <p>I am Axuata from Japan 🇯🇵.</p>
        <p>a newbie <span class="marker-front-end">front-end developer</span> & <span class="marker-web-designer">web designer</span>.</p>
      </div>
      <div class="flex justify-end">
        <a href="https://x.com/axuata_x" class="flex items-center justify-center size-40px">
          <Icon name="logos:x" class="size-20px" />
        </a>
        <a href="https://github.com/axuata" class="flex items-center justify-center size-40px">
          <Icon name="logos:github-icon" class="size-20px" />
        </a>
      </div>
    </div>
  </section>

  <!-- Skills -->
  <CSection>
    <h1 class="font-600 text-20px text-gray-8">🔧 Skills</h1>
    <div class="flex gap-5px mt-3px">
      <CLabelLink to="https://nuxt.com/" icon="logos:nuxt-icon" label="Nuxt" />
      <CLabelLink to="https://vuejs.org/" icon="logos:vue" label="Vue" />
      <CLabelLink to="https://www.typescriptlang.org/" icon="logos:typescript-icon" label="TypeScript" />
      <CLabelLink to="https://developer.mozilla.org/docs/Web/JavaScript" icon="logos:javascript" label="JavaScript" />
    </div>
  </CSection>

  <CSection>
    <h1 class="font-600 text-20px text-gray-8">📝 Articles</h1>
    <div class="flex-col gap-5px">
      <CArticleLink to="https://zenn.dev/axuata/articles/8a18d74cd0e516" icon="twemoji:evergreen-tree" title="Windowsのtreeで階層を指定したい" desc="最終更新：2025/03/29" />
    </div>
  </CSection>

  <!-- Footer -->
  <footer class="py-16px">
    <p class="text-14px text-gray-8 font-500">© 2025 Axuata - All Rights Reserved.</p>
  </footer>
</template>

<style scoped>
.marker-front-end {
  background:linear-gradient(transparent 70%, rgba(134, 206, 255, 0.95) 70%);
}

.marker-web-designer {
  background:linear-gradient(transparent 70%, rgba(134, 255, 144, 0.95) 70%);
}
</style>