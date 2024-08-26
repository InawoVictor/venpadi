import Aura from '@primevue/themes/aura';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,

  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: [
    '@primevue/nuxt-module',
    "nuxt-aos",
    "@pinia/nuxt",
    "@nuxt/icon",
    "@nuxtjs/google-fonts",
    "vue3-carousel-nuxt"
  ],

  plugins: [
    '~/plugins/vue-tel-input.ts',
    '~/plugins/toast-service.ts',
    '~/plugins/easy-data-table.ts',
  ],

  primevue: {
    autoImport: false,
    components: {
      include: '*',
      exclude: ['Carousel']
    },
    options: {
      theme: {
        preset: Aura
      }
    }
  },

  googleFonts: {
    families: {
      Poppins: [300, 400, 500, 600, 700, 900],
      Manrope: [300, 400, 500, 600, 700, 900],
      // Inter: [300, 400, 500, 600, 700, 800, 900],
      // "Work Sans": [300, 400, 500, 600, 700, 800, 900],
      "Plus Jakarta Sans": [300, 400, 500, 600, 700, 800, 900],
    },
  },

  aos: {
    once: true,
    mirror: false,
  }
})