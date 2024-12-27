<template>
    <div>
     <div class="Clients">
        <div class="Clients_p container mx-auto px-20">
            <div class="Clients_content text-center">
                <h2 class="text-2xl font-semibold text-sec-1">Our Clients</h2>
                <p class="text-sec-2 py-2">We have been working with some Fortune 500+ clients</p>
            </div>
            <div class="Clients_imgs flex justify-center gap-28 items-center py-4">
                <div v-for="Icon in IconArray" :key="Icon" class="Clients_img">
                    <img :src="getImageUrl(Icon.src)" :alt="Icon.alt" />
                </div>
            </div>
        </div>
     </div>
    </div>
</template>

<script setup>
const IconArray = [
  { src: "Logo.svg", alt: "icon1" },
  { src: "Logo (1).svg", alt: "icon2" },
  { src: "Logo (2).svg", alt: "icon3" },
  { src: "Logo (3).svg", alt: "icon4" },
  { src: "Logo (4).svg", alt: "icon5" },
  { src: "Logo (5).svg", alt: "icon6" },
  { src: "Logo (6).svg", alt: "icon7" },
];
const getImageUrl = (imageName) => {
  return new URL(`../assets/imgs/Clients/${imageName}`, import.meta.url).href
}

</script>

<style lang="scss" scoped>

</style>