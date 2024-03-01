// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/ui',
    '@nuxt/image',
    'nuxt-swiper',
    '@nuxtjs/color-mode'
  ],
  runtimeConfig: {
    mongo_db: process.env.MONGO_URI
  },
})