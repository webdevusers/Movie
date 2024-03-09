// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/ui',
    '@nuxt/image',
    'nuxt-swiper',
    '@nuxtjs/color-mode'
  ],
  runtimeConfig: {
    mongo_db: process.env.MONGO_URI,
    jsonsecret_key: process.env.SECRET_KEY,
    jsonrefresh_key: process.env.REFRESH_KEY
  },
  nitro: {
    plugins: ['~/server/index.ts']
  }
})