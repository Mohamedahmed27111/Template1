export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  ssr: false, // Disable SSR for SPA mode

  devtools: { enabled: false }, // Disable DevTools
  // Other configurations...


  modules: ['@nuxtjs/tailwindcss' , '@nuxt/image'], // Tailwind CSS module

  css: ['~/assets/styles/main.scss'], // Global SCSS

  build: {
    transpile: ['@headlessui/vue'], // Transpile necessary libraries
  },

  vite: {
    cacheDir: '.vite-cache', // Cache directory for Vite
    build: {
      sourcemap: false, // Disable sourcemaps
      minify: 'esbuild', // Faster build minification
    },
    server: {
      hmr: { overlay: false }, // Disable HMR overlay
      watch: {
        ignored: ['**/node_modules/**'], // Ignore node_modules
      },
    },
  },

  tailwindcss: {
    viewer: false, // Disable Tailwind viewer
  },
});
