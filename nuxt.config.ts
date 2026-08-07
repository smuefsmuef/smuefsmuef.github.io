import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2026-08-07',
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@nuxt/icon'],
  icon: {
    serverBundle: {
      collections: ['fa6-solid', 'fa6-brands'],
    },
  },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [tailwindcss()],
  },
  app: {
    head: {
      title: 'Petra Kohler',
      meta: [
        { name: 'description', content: 'Petra Kohler - Web Developer - Computer Sciences Student - based Zurich.' },
        { name: 'keywords', content: 'Petra Zürich International Web IT Computer Science Girls in Tech Scrum Agile Travel Expert Mexico iCompetence Design Project Management Javascript Vue React Angular Git' },
      ],
      link: [
        { rel: 'icon', href: '/favicon.ico' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Major+Mono+Display|Raleway' },
      ],
    },
  },
})
