<template>
    <main class="cart py-[30px] px-2">
        <!-- BreadCrumbs -->
        <article class="BreadCrumbs pb-3">
            <div class="container mx-auto">
                <ul class="flex gap-1 p-4">
                    <li>
                        <router-link to="/" class="text-teal-400">الرئيسية</router-link>
                    </li>
                    <li>/</li>
                    <li>
                        <router-link to="/AllProducts" class="text-teal-400">كل المنتجات</router-link>
                    </li>
                    <li>/</li>
                    <li>
                        <router-link to="" class="text-gray-400">سلة المشتريات</router-link>
                    </li>
                </ul>
            </div>
        </article>

        <!-- Cart -->
        <article>
            <section class="container mx-auto">
                <div class="flex flex-wrap justify-center gap-6">

                    <!-- right -->
                    <section class="flex flex-col gap-4 lg:w-[70%] w-full">

                        <!-- box -->
                        <div class="flex flex-wrap items-center justify-between gap-8 border-[1px] px-4 py-2 relative"
                            v-for="(product, index) in cartBox" :key="product.id">
                            <!-- 1 -->
                            <div class="flex flex-wrap gap-2 justify-center items-center">
                                <img :src="getImg(product.img)" alt="product" class="w-[90px] h-[90px]" loading="lazy">
                                <div class="flex flex-col gap-2">
                                    <p class="text-base text-gray-900 font-medium">
                                        {{ product.decripeOne }}
                                    </p>
                                    <p class="text-sm text-gray-400">
                                        {{ product.cPrice }} رس
                                    </p>
                                </div>

                            </div>

                            <!-- 2 -->
                            <div class="flex gap-6 p-4 border-[1px]">
                                <img :src="getImg('add.png')" alt="add" class="object-contain select-none cursor-pointer"
                                    @click="add(index)">
                                <img :src="getImg('Line-3.png')" alt="line" class="object-contain select-none">
                                <p>{{ product.quantity  }}</p>
                                <img :src="getImg('Line-3.png')" alt="line" class="object-contain select-none">
                                <img :src="getImg('minus.png')" alt="minus" class="object-contain select-none cursor-pointer"
                                    @click="minus(index)">

                            </div>
                            <!-- 3 -->

                            <p class="text-base text-gray-900 font-medium">
                                {{ product.cPrice }} رس
                            </p>
                            <span
                                class="w-[28px] h-[28px] rounded-full bg-gray-50 hover:bg-teal-400 flex justify-center items-center cursor-pointer"
                                v-on:click="deleteProduct(product.id)">
                                <img :src="getImg('close.png')" alt="close" class="object-contain">
                            </span>

                        </div>

                    </section>

                    <!-- left -->
                    <section class="flex flex-col w-full lg:w-auto gap-4 border-[1px] p-4 h-fit">
                        <!-- 1 -->
                        <h3 class="text-base text-gray-600 font-semibold">ملخص الطلب</h3>

                        <!-- 2 -->
                        <div class="flex justify-between gap-6">
                            <p class="text-base text-gray-900 font-medium">مجموع المنتجات</p>
                            <p class="text-base text-gray-900">{{ totalPrice }} رس</p>
                        </div>
                        <!-- 3 -->
                        <div class="flex flex-col gap-2">
                            <h4 class="text-sm text-gray-700">هل لديك كود خصم</h4>
                            <div class="flex justify-between gap-6 border-[1px] rounded-md">
                                <input type="text" placeholder="أدخل كود الخصم" class="outline-none text-sm px-2 ">
                                <button
                                    class="border-[1px] border-teal-400 rounded-md text-teal-400 text-sm p-3">إضافة</button>
                            </div>
                        </div>
                        <!-- 4 -->
                        <div class="flex flex-col gap-2">
                            <div class="flex justify-between gap-6">
                                <p class="text-base text-gray-900 font-medium">الإجمالى</p>
                                <p class="text-base text-gray-900 font-medium">{{ totalPrice }} رس</p>
                            </div>
                            <p class="text-sm text-gray-400"><span class="text-red-700">* </span>الاسعار شاملة للضريبة </p>
                            <button class="bg-teal-400 hover:bg-teal-600 text-white text-base p-4">إتمام الطلب</button>
                        </div>
                        <!-- 5 -->

                    </section>
                </div>
            </section>
        </article>

    </main>
</template>

<script setup>
import { useStore } from '@/store/store'
import { storeToRefs } from 'pinia';

const store = useStore()

const { deleteProduct ,add , minus , getImg } = store
const { cartBox , totalPrice } = storeToRefs(store) 



</script>