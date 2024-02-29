<script setup>
import { ref } from 'vue';
import { useStore } from '@/store/store'
import { storeToRefs } from 'pinia';
const store = useStore()

const { totalCount, totalPrice } = storeToRefs(store)



// links [top header] 

const links = ref([
    {
        name: 'العربية',
        href: '#'
    },
    {
        name: 'المفضلة',
        href: '#'
    },
    {
        name: 'سياسة الإستبدال أو الاسترجاع',
        href: '#'
    },
    {
        name: 'تواصل معنا',
        href: '#'
    }
])

// links [navLinks] 

const navLinks = ref([
    {
        name: 'كل المنتجات ',
        href: '#'
    },
    {
        name: 'إلكترونيات',
        href: '#'
    },
    {
        name: 'موبايلات',
        href: '#'
    },
    {
        name: 'كاميرات مراقبة',
        href: '#'
    },
    {
        name: 'سماعات رقمية',
        href: '#'
    },
    {
        name: 'كاميرات رقمية',
        href: '#'
    },
    {
        name: 'أكسسوارات',
        href: '#'
    },
    {
        name: 'شاشات كمبيوتر',
        href: '#'
    },
    {
        name: 'سماعات',
        href: '#'
    },

])

// toggle button
const toggleBTN = ref(false)

</script>
<template>
    <header>

        <!-- =========Start top-header ================ -->

        <section class="top-header bg-gray-50">
            <div class="container mx-auto px-3">
                <section class="flex gap-2 py-2 items-center justify-center">

                    <!-- Phone + email -->

                    <div class="flex gap-4 text-gray-400 text-sm items-center">
                        <p class="flex gap-2">
                            <img src="@/assets/imgs/call.png" alt="Line" class="object-contain">
                            <span>966556754472+</span>
                        </p>
                        <img src="@/assets/imgs/Line-1.png" alt="Line" class="object-contain">
                        <p class="flex gap-2">
                            <img src="@/assets/imgs/email.png" alt="Line" class="object-contain">
                            support@salla.sa
                        </p>
                    </div>

                    <!-- nav => links -->

                    <div class="flex-1 lg:flex justify-end hidden">
                        <ul class="flex gap-4 items-center">
                            <li class="flex items-center gap-1" v-for="(link, index) in links" :key="index">
                                <img src="@/assets/imgs/KSA.png" alt="KSA" class="object-contain ml-1"
                                    v-if="link.name == 'العربية'" />
                                <img src="@/assets/imgs/Line-2.png" alt="line" class="object-contain ml-1"
                                    v-if="link.name !== 'العربية'" />
                                <router-link :to="link.href" class="text-sm">
                                    {{ link.name }}
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
        </section>

        <!-- Start bottom-header [search + links] -->

        <section class="bottom-header">

            <!-- search + logo + login -->
            <div class="container mx-auto px-3">

                <div class="flex md:gap-12 gap-8 items-center justify-between md:py-8 pt-4">

                    <section class="flex gap-2">
                        <!-- menu-->
                        <button class='md:hidden' v-on:click="toggleBTN = !toggleBTN">
                            <img src="@/assets/imgs/Menu.png" alt="menu" class="object-contain">
                        </button>
                        <router-link to="/" class="flex gap-2 items-center">
                            <img src="@/assets/imgs/logo.png" alt="logo"
                                class="object-contain w-[31px] h-[31px] md:w-auto md:h-auto" />
                            <h3 class="md:w-[55px] w-[40px] md:text-[22px] text-gray-600 font-bold">متجر سلة</h3>
                        </router-link>
                    </section>

                    <section class="relative md:block hidden">
                        <input type="text" placeholder="ابحث عما تريد"
                            class="w-full lg:w-[600px] h-[48px] outline-none border-[1px] border-gray-300 rounded-md p-4">
                        <img src="@/assets/imgs/search.png" alt="search"
                            class="absolute left-5 top-[50%] translate-y-[-50%]">
                    </section>

                    <section class="flex md:gap-8 gap-2">

                        <div class="flex gap-2 items-center">
                            <div class="w-10 h-10 rounded-full bg-gray-50 flex justify-center items-center p-2">
                                <img src="@/assets/imgs/user.png" alt="user" class="object-cover" />
                            </div>
                            <p class="hidden md:block">
                                <span class="text-sm text-gray-400">مرحبا بك</span>
                                <span class="flex gap-1 text-base">تسجيل دخول<img src="@/assets/imgs/arrowTop.png"
                                        alt="arrowTop" class="object-contain" /> </span>
                            </p>
                        </div>
                        <router-link to="/cart">
                            <div class="flex gap-2 items-center ">
                                <div
                                    class="w-10 h-10 rounded-full bg-gray-50 flex justify-center items-center p-2 relative">
                                    <img src="@/assets/imgs/cart.png" alt="cart" class="object-cover" />
                                    <span
                                        class="absolute top-[-5px] right-[-5px] bg-red-500 text-white text-[13px] rounded-full w-[20px] h-[20px] flex justify-center items-center p-[12px]">{{
                                            totalCount }}</span>
                                </div>
                                <p class="flex-1">
                                    <span class="text-sm text-gray-400 hover:text-teal-400">سلة المشتريات</span>
                                    <span class="flex gap-1 text-base">{{ totalPrice }}</span>
                                </p>
                            </div>
                        </router-link>

                    </section>
                </div>

                <!-- Search input for mobile -->
                <section class="relative md:hidden my-4">
                    <input type="text" placeholder="ابحث عما تريد"
                        class="w-full lg:w-[600px] h-[48px] outline-none border-[1px] border-gray-300 rounded-md p-4">
                    <img src="@/assets/imgs/search.png" alt="search" class="absolute left-5 top-[50%] translate-y-[-50%]">
                </section>
            </div>

            <!-- nav -->
            <nav class="md:bg-black bg-white z-10 border-gray-50 border-b-[1px] py-2 md:block absolute top-0 transition-all  h-full md:relative"
                :class="toggleBTN ? 'w-[250px] right-0' : 'right-[-250px] md:right-0 md:w-auto'">
                <div class="container mx-auto px-3">
                    <span
                        class="absolute top-20 -left-[30px] w-[30px] h-[30px] rounded-ee-md rounded-se-md bg-teal-400 hover:bg-teal-600 text-white flex justify-center items-center select-none cursor-pointer md:hidden"
                        v-on:click="toggleBTN = !toggleBTN">x</span>
                    <ul class="flex flex-col md:flex-row gap-6 justify-center md:items-center flex-wrap">
                        <li class="md:hidden block">
                            <p class="text-gray-600 font-semibold text-sm py-4 border-b-2">جميع الاقسام</p>
                        </li>
                        <li class="flex gap-1 items-center" v-for="(navlink, index) in navLinks" :key="index">
                            <router-link :to="navlink.href" class="md:text-white text-base">{{ navlink.name }}</router-link>
                            <img src="@/assets/imgs/arrowDown.png" alt="arrowDown" class="object-contain">
                        </li>
                    </ul>

                </div>
            </nav>
        </section>
    </header>
</template>