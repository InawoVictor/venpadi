import Aura from '@primevue/themes/aura';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: [// 'primeicons/primeicons.css'
    '@primevue/nuxt-module', 
    "nuxt-aos",
  ],

  plugins: [
    '~/plugins/vue-tel-input.ts',
  ],

  primevue: {
    options: {
        theme: {
            preset: Aura
        }
    }
  },

  aos: {
    once: true,
    mirror: false,
  }
})