// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: {enabled: true},
  modules: ['@nuxt/fonts', '@nuxt/icon', '@nuxt/image', '@unocss/nuxt', 'nuxt-twemoji'],
  app: {
    head: {
      title: 'Axuata',
      meta: [
        {charset: 'utf-8'},
        {name: 'viewport', content: 'width=device-width, initial-scale=1'}
      ],
      link: [
        {rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg'}
      ]
    }
  },
  css: [
    '@unocss/reset/tailwind.css',
    '~/assets/css/app.css',
    '~/assets/css/typography.css'
  ],
  components: {
    dirs: [
      {
        path: '~/components/',
        pathPrefix: false,
      }
    ]
  }
})