<script setup>
const props = defineProps(['info'])
</script>
<template>
    <div class="flex gap-1 items-center justify-center ">
        <p class="flex flex-col flex-1">
            <span class="text-gray-900 font-medium text-2xl">{{ info }}</span>
            <span class="text-gray-400 text-base">تسوق احدث المنتجات المميزة المضافة جديد</span>
        </p>
        <router-link to="/AllProducts"
            class="border-[1px] border-green-400 md:w-[109px] md:h-[42px] flex gap-1 justify-center items-center rounded-md px-2 py-2">
            <span class="text-green-400 text-sm h-full">عرض الكل</span>
            <img src="@/assets/imgs/arrow_left.png" alt="arrow" class="" />
        </router-link>
    </div>
</template>