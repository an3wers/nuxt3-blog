// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css",
        },
      ],
    },
    pageTransition: true
  },

  modules: [
    "@pinia/nuxt",
    //"vee-validate",
    //"yup"
  ],
  css: [],
});
