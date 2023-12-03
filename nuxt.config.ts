export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      NETLIFY_TOKEN: process.env.NETLIFY_TOKEN,
      GITHUB_TOKEN: process.env.GITHUB_TOKEN,
      GITHUB_NAME: process.env.GITHUB_NAME,
      SITE_URL: process.env.SITE_URL,
    },
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' },
  },
  devtools: { enabled: true },
  typescript: {
    shim: false,
  },
  hooks: {
    'components:dirs': (dirs) => {
      dirs.unshift({
        path: '~/components/ui',
        extensions: ['.vue'],
        pathPrefix: false,
      })
    },
  },
  supabase: {
    redirectOptions: {
      login: '/login',
      callback: '/confirm',
      exclude: ['/'],
    },
  },
  modules: ['@nuxtjs/supabase', '@nuxtjs/tailwindcss', 'nuxt-icon'],
})
