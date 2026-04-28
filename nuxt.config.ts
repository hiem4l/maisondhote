// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    '@nuxtjs/google-fonts',
  ],

  googleFonts: {
    families: {
      'Cormorant+Garamond': [300, 400, 500, 600, 700],
      'Jost': [300, 400, 500],
    },
    display: 'swap',
    preload: true,
  },

  app: {
    head: {
      title: 'La Bastide des Oliviers — Maison d\'Hôtes',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Maison d\'hôtes de charme en Provence. Chambres d\'exception, piscine, gastronomie locale.' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      ],
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  },

  css: ['~/assets/css/main.css'],
})

