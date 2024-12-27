<template>
    <div>
        <!-- Marketing Section -->
        <div class="Marketing_p container mx-auto px-20">
            <div class="Marketing_content text-center flex flex-col items-center justify-center">
                <h1 class="text-4xl text-sec-1 font-semibold">Caring is the new marketing</h1>
                <p class="w-3/5 text-sec-2 py-3">
                    The Nextcent blog is the best place to read about the latest membership insights, trends and more. 
                    See who's joining the community, read about how our community are increasing their membership income 
                    and lot's more.
                </p>
            </div>
            <div class="Marketing_imgs flex items-center justify-between py-5">
     <!-- Loop through 3 images with descriptions -->
                <div v-for="card in cards" :key="card" data-aos="fade-up" class="Marketing_img relative flex items-center justify-center">
                    <!-- Image container for each marketing item -->
                     <div class="">
                    <img :src="getImageUrl(card.img)" :alt="`imagefor${card.title}`"  />
                     </div>
                    <!-- Content block positioned absolutely at the bottom -->
                    <div class="img_content absolute -bottom-14 px-2 py-5 w-4/5 bg-gray-50 rounded-xl text-center drop-shadow-md  ">
                        <!-- Title or description for each marketing item -->
                        <p class="text-sec-2 text-sm ">{{ card.title }}</p>
                        
                        <!-- Link to read more -->
                        <div class="img_link text-sm font-semibold pt-3 flex items-center justify-center gap-1 text-prim-1 hover:text-prim-2 duration-300 cursor-pointer ">
                            <h4>Read more</h4>
                            <!-- SVG icon for the "Read more" arrow -->
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m21 12l-5-5m5 5l-5 5m5-5H3"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
    <!-- End of Marketing Section -->

    </div>
</template>

<script setup>
defineProps({
    cards: Array
})

const getImageUrl = (imageName) => {
  return new URL(`../assets/imgs/Marketing/${imageName}`, import.meta.url).href
}

</script>

<style lang="scss" scoped>

</style>