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
      htmlAttrs: { lang: 'en' },
      title: 'Petra Kohler — Product Owner & Software Developer',
      meta: [
        { name: 'description', content: 'Petra Kohler leads and builds software projects in Zurich — Product Ownership, Project Leadership, Development and Design.' },
        { name: 'keywords', content: 'Petra Kohler Zürich Product Owner Project Lead Scrum Master Software Developer Web Development Design Agile FHNW' },
      ],
      link: [
        { rel: 'icon', href: '/favicon.ico' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Major+Mono+Display|Raleway' },
      ],
      script: [
        {
          innerHTML: '(function(){try{var t=localStorage.getItem("theme");if(t)document.documentElement.setAttribute("data-theme",t);}catch(e){}})();',
        },
      ],
    },
  },
})
