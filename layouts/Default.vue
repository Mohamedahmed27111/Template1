<template>
  <!-- Main container for the component -->
  <div class="relative">
    <!-- NavBar component -->
     <div class="Nav sticky top-0 z-50 ">
    <NavBar />
  </div>
    <!-- Slot container to render child components or content dynamically -->
    <div>
      <slot />
    </div>
    <Footer />

  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
/* 
  Scoped SCSS styles can be added here to style this specific component. 
  Since the component acts as a layout container, it currently does not have any specific styles defined.
*/
</style>
