/** @type {import('tailwindcss').Config} */
export default {
  // Specify the paths to all template files where Tailwind CSS classes are used
  content: [
    "./components/**/*.{js,vue,ts}",      // Tailwind classes applied in components
    "./layouts/**/*.vue",                   // Tailwind classes applied in layouts
    "./pages/**/*.vue",                     // Tailwind classes applied in pages
    "./plugins/**/*.{js,ts}",              // Tailwind classes applied in plugins
    "./nuxt.config.{js,ts}",               // Tailwind classes applied in Nuxt config
    "./node_modules/flowbite/**/*.{js,ts}" // Flowbite plugin requires Tailwind classes from Flowbite
  ],
  
  // Extend the default theme (optional if further customization is needed)
  theme: {
    extend: {}, // No custom extensions here, but this is where you can customize the theme
    colors:{
      prim:{
        1:'#4CAF4F',
        2:'#38803a',
      },
      sec:{
        1:'#263238',
        2:'#717171'
      }
    },
  
  },
    
  
  
  // Plugins to include
  plugins: [
    require('flowbite/plugin') // Include Flowbite for UI components and utilities
  ],
}
