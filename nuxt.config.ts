// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css:[
    'animate.css', 'bootstrap/dist/css/bootstrap.css', '@fortawesome/fontawesome-free/css/all.css',
    '~/assets/main.sass'
  ],
  app:{
    head:{
      title: "E-Shop",
      script:[
        {
          src:'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js'
        }
    ]
    }
  }
})
