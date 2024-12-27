<template>
    <!-- Footer section -->
    <div class="Footer py-16 bg-sec-1">
      <!-- Footer container -->
      <div class="Footer_p container mx-auto px-20 flex justify-between text-white">
        <!-- Logo and copyright -->
        <div class="Footer_main basis-1/2 flex flex-col  gap-8">
          <!-- Logo -->
          <div class="Logo flex items-center gap-1">
            <div class="Logo_img">
              <img src="@/assets/imgs/Logo.svg" alt="">
            </div>
            <div class="Logo_text">
              <h1 class=" text-3xl font-semibold">Nexcent</h1>
            </div>
          </div>
          <!-- Copyright -->
          <div class="CopyR">
            <p class="text-xs leading-normal"> Copyright © 2020 Landify UI Kit. <br> All rights reserved </p>
          </div>
          <!-- Social -->
          <div class="Social">
            <div class="Social_icons flex gap-3">
              <div v-for="Icon in IconArray" :key="Icon" class="Social_icon">
                <a href="#"><img :src="getImageUrl(Icon.src)" :alt="Icon.alt"></a>
              </div>
            </div>  
          </div>
        </div>
        <div class="Footer_content basis-1/2 flex gap-16">
           <div class="Us basis[30%]">
            <h3 class="text-xl font-semibold">Company</h3>
            <ul>
                <li v-for="item in UsUL" :key="item" class="text-xs py-2 text-gray-300">
                    <a :href="item.link">{{ item.title }}</a>
                </li>
            </ul>
            
           </div>
              <div class="Support basis[30%]">
                <h3 class="text-xl font-semibold">Support</h3>
                <ul>
                 <li v-for="item in SupportUL" :key="item" class="text-xs py-2 text-gray-300">
                      <a :href="item.link">{{ item.title }}</a>
                 </li>
                </ul>       
              </div>
              <div class="email">
                <h3 class="text-xl font-semibold mb-5">Stay up to date</h3>
                <form action=""  @submit.prevent>
                  <input type="email" placeholder="Your email address" class="py-2 px-3 rounded-lg bg-sec-2 text-gray-300 border-none focus:ring-0 focus:outline-none focus:border-none relative">
                </form>

              </div>
        </div>  
      </div>
    </div>
  </template>

  <script setup>
  const IconArray = [
    { src: "Social Icons.svg", alt: "X" },
    { src: "Social Icons1.svg", alt: "icon2" },
    { src: "Social Icons2.svg", alt: "Insta" },
    { src: "Social Icons3.svg", alt: "Youtube" },
  ];

  const UsUL = [
    { title: "About Us", link: "#" },
    { title: "Contact Us", link: "#" },
    { title: "Blog", link: "#" },
    { title: "Pricing", link: "#" },
    { title: "Testimonials", link: "#" }
  ];

  const SupportUL = [
    { title: "Help Center", link: "#" },
    { title: "Terms of Service", link: "#" },
    { title: "Legal", link: "#" },
    { title: "Privacy Policy", link: "#" },
    { title: "Status", link: "#" }
]
  const getImageUrl = (imageName) => {
  return new URL(`../assets/imgs/Social/${imageName}`, import.meta.url).href
}
  </script>
  
  <style >
  .Social_icon img {
  width: 30px;
  height: 30px;
}
input::placeholder {
  @apply text-gray-300 opacity-50 text-sm;
}


  </style>