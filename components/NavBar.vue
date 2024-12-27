<template>
  <div>
    <!-- Navbar -->
    <nav class="bg-white dark:bg-gray-900 sticky w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600 md:px-20">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        
        <!-- Logo Section -->
        <NuxtLink to="/" class="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="@/assets/imgs/Icon.svg" alt="Nexcent" />
          <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Nexcent</span>
        </NuxtLink>

        <!-- Buttons Section -->
        <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <!-- Register Button -->
          <button type="button" class="flex items-center gap-3 bg-prim-1 hover:bg-prim-2 duration-500 text-white text-sm font-medium rounded px-5 py-3 text-center">
            Register Now
            <!-- SVG Icon for Register -->
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
              <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m21 12l-5-5m5 5l-5 5m5-5H3"/>
            </svg>
          </button>

          <!-- Mobile Menu Toggle Button -->
          <button data-collapse-toggle="navbar-sticky" id="triggerEl" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <!-- Hamburger Icon -->
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>
        </div>

        <!-- Navbar Links (Visible on Desktop, Hidden on Mobile) -->
        <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
          <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <!-- Navbar Items -->
            <li>
              <NuxtLink to="/" class="block py-2 px-3 md:p-0 text-prim-1" aria-current="page">Home</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/" class="block py-2 px-3 md:p-0 text-sec-1 hover:text-prim-1 duration-500">Features</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/" class="block py-2 px-3 md:p-0 text-sec-1 hover:text-prim-1 duration-500">Community</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/" class="block py-2 px-3 md:p-0 text-sec-1 hover:text-prim-1 duration-500">Blog</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/" class="block py-2 px-3 md:p-0 text-sec-1 hover:text-prim-1 duration-500">Pricing</NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { Collapse } from 'flowbite';

onMounted(() => {
  if (typeof window !== 'undefined') {
    // Find the elements for the navbar toggle
    const $targetEl = document.getElementById('navbar-sticky');
    const $triggerEl = document.getElementById('triggerEl');

    // Debugging: Log the elements to ensure they're found
    console.log({ $targetEl, $triggerEl });

    if ($targetEl && $triggerEl) {
      const options = {
       
        
      };

      // Initialize the Flowbite Collapse functionality
      new Collapse($targetEl, $triggerEl, options);
    } else {
      console.warn('Navbar elements not found for Collapse initialization.');
    }
  }
});
</script>

<style lang="scss" scoped>
/* Add custom scoped styles here if necessary */
</style>
