// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  //Habilita el router
  pages: true,
  //Desactiva el router de supabase
  supabase: {
    redirect: false,
  },
  //Carga los modulos de nuxt
  modules: [
    "nuxt-icon",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/supabase",
    "@pinia/nuxt",
    "@vite-pwa/nuxt",
  ],
  //Configuracion de la app que no debe de ser expuesta
  //En el frontend
  runtimeConfig: {
    public: {
      bucketUrl: process.env.BUCKET_URL,
    },
  },
  devtools: { enabled: false },
});
