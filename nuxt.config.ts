// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',

  devtools: { enabled: true },

  runtimeConfig: {
    public: {
      apiBaseUrl: 'https://localhost:1337',
      stadiamapsApiKey: '37f5e78a-cd8d-4a6c-bc8c-8ae249e2eaf1',
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "~/assets/scss/main.scss";',
        },
      },
    },
  },

  app: {
    head: {
      link: [
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com',
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com',
          crossorigin: '',
        },
        {
          rel: 'manifest',
          href: '/favicon/site.webmanifest',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,300;0,400;0,700;1,300&display=swap',
        },
        {
          rel: 'icon',
          type: 'image/png',
          href: '/favicon/favicon-96x96.png',
          sizes: '96x96',
        },
        {
          rel: 'shortcut icon',
          href: '/favicon/favicon.ico',
          sizes: '96x96',
        },
        {
          rel: 'apple-touch-icon',
          type: 'image/png',
          href: '/favicon/apple-touch-icon.png',
          sizes: '180x180',
        },
        {
          rel: 'icon',
          type: 'image/svg+xml',
          href: '/favicon/favicon.svg',
        },
      ],
      meta: [
        {
          name: 'apple-mobile-web-app-title',
          content: 'Le Filanthrope',
        },
      ],
      htmlAttrs: {
        lang: 'fr',
      },
    },
  },

  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],

  modules: [
    '@vueuse/nuxt',
    '@nuxtjs/strapi',
    '@nuxt/eslint',
    '@nuxtjs/seo',
  ],
})
