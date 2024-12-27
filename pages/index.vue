<template>
    <div>
        <!-- Hero Section -->
        <div class="Hero bg-gray-100 py-20">
            <!-- Hero Content Wrapper -->
            <div class="Hero_p container mx-auto px-20 flex justify-between items-center">
                <div class="Hero_content basis-3/5">
                    <!-- Hero Heading -->
                    <h1 class="text-4xl md:text-6xl font-bold text-sec-1">
                        Lessons and insights <span class="text-prim-1">from 8 years</span>
                    </h1>
                    <!-- Hero Subtitle -->
                    <p class="text-sec-1 text-lg py-2">
                        Where to grow your business as a photographer: site or social media?
                    </p>
                    <!-- Register Button -->
                    <button class="btn bg-prim-1 py-3 px-5 text-white rounded hover:bg-prim-2 duration-500">
                        Register
                    </button>
                </div>
                <!-- Hero Image -->
                <div class="Hero_img basis-2/5 flex justify-center">
                    <img src="@/assets/imgs/Hero/Hero.svg" alt="Hero Image" loading="lazy"/>
                </div>
            </div>
        </div>
        <!-- End of Hero Section -->

        <!-- Clients Section -->
        <div class="py-20">
            <!-- Clients Component -->
            <!-- Renders a reusable 'Clients' component -->
            <Clients />
        </div>
        <!-- End of Clients Section -->

        <!-- Community Section -->
        <div class="Community py-10">
            <!-- Community Content Wrapper -->
            <div class="Community_p container mx-auto px-20">
                <!-- Community Title and Subtitle -->
                <div class="community_content flex flex-col items-center">
                    <h1 class="text-center text-sec-1 text-4xl font-semibold w-1/2">
                        Manage your entire community in a single system
                    </h1>
                    <p class="text-sec-2 py-2 text-center">
                        Who is Nextcent suitable for?
                    </p>
                </div>
                <!-- Community Icons Section -->
                <div class="Community_icons flex justify-around items-center flex-wrap py-5">
                    <!-- Membership Organizations Card -->
                    <div class="Community_icon flex flex-col items-center px-14 basis-1/3">
                        <div class="C_icon">
                            <img src="@/assets/imgs/Community/Icon.svg" alt="Icon" />
                        </div>
                        <h3 class="text-sec-1 text-2xl font-bold text-center p-2">
                            Membership Organisations
                        </h3>
                        <p class="text-sec-2 text-center text-sm">
                            Our membership management software provides full automation of membership renewals and payments
                        </p>
                    </div>

                    <!-- National Associations Card -->
                    <div class="Community_icon flex flex-col items-center px-14 basis-1/3">
                        <div class="C_icon">
                            <img src="@/assets/imgs/Community/Icon (1).svg" alt="Icon" />
                        </div>
                        <h3 class="text-sec-1 text-2xl font-bold text-center p-2">
                            National Associations
                        </h3>
                        <p class="text-sec-2 text-center text-sm">
                            Our membership management software provides full automation of membership renewals and payments
                        </p>
                    </div>

                    <!-- Clubs and Groups Card -->
                    <div class="Community_icon flex flex-col items-center px-14 basis-1/3">
                        <div class="C_icon">
                            <img src="@/assets/imgs/Community/Icon (2).svg" alt="Icon" />
                        </div>
                        <h3 class="text-sec-1 text-2xl font-bold text-center p-2">
                            Clubs And Groups
                        </h3>
                        <p class="text-sec-2 text-center text-sm">
                            Our membership management software provides full automation of membership renewals and payments
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <!-- End of Community Section -->

        <!-- Journey Section -->
        <div class="Journey py-20">
            <div class="Journey_p container mx-auto px-20 flex justify-between items-center">
                <!-- Journey Image -->
                <div class="Journey_img basis-1/2 flex justify-center">
                    <img src="@/assets/imgs/Journey/Journey.svg" alt="Journey Image" loading="lazy" />
                </div>
                <!-- Journey Content -->
                <div class="Journey_content basis-1/2">
                    <h1 class="text-3xl text-sec-1 font-semibold">The unseen of spending three years at Pixelgrade</h1>
                    <p class="text-sm text-sec-2 py-3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
                        Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
                        Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.
                    </p>
                    <!-- Learn More Button -->
                    <button class="text-white text-sm bg-prim-1 py-3 px-5 rounded hover:bg-prim-2 duration-500">
                        Learn More
                    </button>
                </div>
            </div>
        </div>
        <!-- End of Journey Section -->

        <!-- Help Section -->
        <div class="Help py-20 bg-gray-100">
            <div class="Help_p container mx-auto px-20 flex justify-between items-center">
                <!-- Help Content -->
                <div class="Help_content basis-1/2">
                    <h1 class="text-5xl text-sec-1 font-semibold">
                        Helping a local <br />
                        <span class="text-prim-1"> business reinvent itself </span>
                    </h1>
                    <p class="text-sec-2 py-3">
                        We reached here with our hard work and dedication
                    </p>
                </div>
                <!-- Help Icons (Stats Grid) -->
                <div class="Help_icons basis-1/2 grid grid-row-2 grid-cols-2 gap-x-12 gap-y-8">
                    <!-- Members Stat -->
                    <div class="Help_icon flex items-center justify-center">
                        <div class="Help_I">
                            <img src="@/assets/imgs/Help/Vector.svg" alt="Icon" class="w-12" />
                        </div>
                        <div class="Help_I_content">
                            <h3 class="text-xl text-sec-1 font-bold">2,245,341</h3>
                            <p class="text-sm text-sec-2">Members</p>
                        </div>
                    </div>
                    <!-- Clubs Stat -->
                    <div class="Help_icon flex items-center justify-center">
                        <div class="Help_I">
                            <img src="@/assets/imgs/Help/Group 2.svg" alt="Icon" class="w-12" />
                        </div>
                        <div class="Help_I_content">
                            <h3 class="text-xl text-sec-1 font-bold">46,328</h3>
                            <p class="text-sm text-sec-2">Clubs</p>
                        </div>
                    </div>
                    <!-- Event Bookings Stat -->
                    <div class="Help_icon flex items-center justify-center gap-2">
                        <div class="Help_I">
                            <img src="@/assets/imgs/Help/Vector (1).svg" alt="Icon" class="w-12" />
                        </div>
                        <div class="Help_I_content">
                            <h3 class="text-xl text-sec-1 font-bold">828,867</h3>
                            <p class="text-sm text-sec-2">Event Bookings</p>
                        </div>
                    </div>
                    <!-- Payments Stat -->
                    <div class="Help_icon flex items-center justify-center gap-2">
                        <div class="Help_I">
                            <img src="@/assets/imgs/Help/Vector (2).svg" alt="Icon" class="w-12" />
                        </div>
                        <div class="Help_I_content">
                            <h3 class="text-xl text-sec-1 font-bold">1,926,436</h3>
                            <p class="text-sm text-sec-2">Payments</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- End of Help Section -->

   <!-- Design Section -->
   <div class="Design py-20">
        <div class="Design_p container mx-auto px-20 flex justify-between items-center">
            <!-- Design Image -->
            <div class="Design_img basis-1/2 flex justify-center">
                <img src="@/assets/imgs/Design/Design.svg" alt="Design Image" loading="lazy" />
            </div>
            <!-- Design Content -->
            <div class="Design_content basis-1/2">
                <h1 class="text-3xl text-sec-1 font-semibold">How to design your site footer like we did</h1>
                <p class="text-sm text-sec-2 py-3">
                    Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, 
                    massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. 
                    In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. 
                    In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla 
                    commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis 
                    libero. Donec consectetur faucibus ipsum id gravida.
                </p>
                <!-- Learn More Button -->
                <button class="text-white text-sm bg-prim-1 py-3 px-5 rounded hover:bg-prim-2 duration-500">
                    Learn More
                </button>
            </div>
        </div>
    </div>
    <!-- End of Design Section -->

    <!-- Tesla Section -->
    <div class="Tesla py-20 bg-gray-100">
        <div class="Tesla_p container mx-auto px-20 flex justify-between items-center">
      
            <!-- Tesla Image -->
            <div data-aos="fade-right" class="Tesla_img basis-1/3">
                <img src="@/assets/imgs/Tesla/Tesla.svg" alt="Tesla Image" loading="lazy" />
            </div>
            <!-- Tesla Content -->
            <div class="Tesla_content basis-2/3">
                <p class="text-sec-1">
                    Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus 
                    tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. 
                    Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. 
                    Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu 
                    turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. 
                    Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim 
                    finibus ac sit amet magna.
                </p>
                <h3 class="font-semibold text-prim-1 py-2">Tim Smith</h3>
                <p class="text-sec-2">British Dragon Boat Racing Association</p>
                <div class="Tesla_icons py-2 flex items-center justify-between">
                    <!-- Looping through client logos -->
                    <div class="Tesla_icon">
                        <img src="@/assets/imgs/Clients/Logo.svg" alt="Client Logo 1" />
                    </div>
                    <div class="Tesla_icon">
                        <img src="@/assets/imgs/Clients/Logo (1).svg" alt="Client Logo 2" />
                    </div>
                    <div class="Tesla_icon">
                        <img src="@/assets/imgs/Clients/Logo (2).svg" alt="Client Logo 3" />
                    </div>
                    <div class="Tesla_icon">
                        <img src="@/assets/imgs/Clients/Logo (3).svg" alt="Client Logo 4" />
                    </div>
                    <div class="Tesla_icon">
                        <img src="@/assets/imgs/Clients/Logo (4).svg" alt="Client Logo 5" />
                    </div>
                    <div class="Tesla_icon">
                        <img src="@/assets/imgs/Clients/Logo (5).svg" alt="Client Logo 6" />
                    </div>
                    <!-- "Meet all customers" link -->
                    <div class="Tesla_more my-2 font-bold flex items-center gap-3 text-prim-1  hover:text-prim-2 duration-300 cursor-pointer">
                        <h3>Meet all customers</h3>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m21 12l-5-5m5 5l-5 5m5-5H3"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End of Tesla Section -->

    <!-- Marketing Section -->
    <div class="Marketing py-20">
        <Marketing :cards="MarketingCards"  />
    </div>
    <!-- End of Marketing Section -->
    <!-- Demo Section -->
     <div class="Demo py-14 bg-gray-100">
        <Demo/>
     </div>
    <!-- End of Demo Section -->
</div>
</template>

<script setup>

import AOS from 'aos';
import 'aos/dist/aos.css';

// Initialize AOS
onMounted(() => {
  AOS.init({
    duration: 1000, // Animation duration in ms
    easing: 'ease-in-out', // Animation easing
    once: false, // Whether animation should happen only once
  });
});

const MarketingCards=[
    {img:'image 18.svg' , title:'Creating Streamlined Safeguarding Processes with OneRen'},
    {img:'image 19.svg' , title:'What are your safeguarding responsibilities and how can you manage them?'},
    {img:'image 20.svg' , title:'Revamping the Membership Model with Triathlon Australia'}
]
</script>

<style scoped>
  /* Scoped styling can be added here */
</style>
