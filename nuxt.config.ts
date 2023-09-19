// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      apiBaseURL: 'http://localhost/api/'
    }
  },
  devtools: { enabled: true },
  modules: [
    '@vueuse/nuxt'
  ],
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  }
})
