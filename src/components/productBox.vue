<template>
  <!-- new or discount -->

  <span
    :class="`absolute top-[10px] left-[10px] ${
      prod.status == 'جديد'
        ? 'bg-teal-500'
        : prod.status == 'خصم 25%'
        ? 'bg-red-500'
        : ''
    } text-white text-sm px-[10px] py-[5px] select-none rounded-md`"
  >
    {{ prod.status ? prod.status : "" }}
  </span>

  <!-- img_Product -->

  <img
    :src="getImg(prod.img)"
    alt="product"
    :class="`object-contain md:object-cover md:w-auto lg:max-h-[${maxH}] w-[40%] m-auto`"
    loading="lazy"
  />

  <!-- info -->

  <section class="info flex flex-col gap-1 p-3">
    <h3 class="text-sm text-teal-400">{{ prod.title }}</h3>
    <p class="text-base text-gray-900 font-medium">{{ prod.decripeOne }}</p>
    <p class="text-base text-gray-400">{{ prod.decripeTwo }}</p>
    <p class="flex gap-1">
      <span class="text-base text-red-800 font-medium">{{ prod.cPrice }}</span>
      <span class="text-sm line-through text-gray-400 font-medium">{{
        prod.oPrice
      }}</span>
      <span class="text-base text-red-800 font-medium">ر.س</span>
    </p>
    <!-- Add To cart -->
    <div class="flex md:gap-2 gap-1 justify-start m-3">
      <button
        class="flex justify-center items-center gap-2 border-2 lg:bg-teal-500 hover:bg-teal-600 flex-1 lg:p-3 p-2"
        @click.once="addCountCart({ ...prod, quantity: 1 })"
      >
        <img
          src=" @/assets/imgs/cart-3.png"
          alt="cart"
          class="object-contain hidden md:block"
          loading="lazy"
        />
        <span class="text-sm md:text-sm font-medium lg:text-white">
          أضف للسلة
        </span>
      </button>
      <div
        class="flex justify-center items-center border-2 border-gray-10 lg:p-3 p-2"
        v-on:click="active = !active"
      >
        <img
          :src="getImg(active ? likeHover : like)"
          alt="like"
          class="object-contain"
          loading="lazy"
        />
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref } from "vue";
import { useStore } from "@/store/store";

const store = useStore();
const { getImg, addCountCart } = store;
const props = defineProps({
  prod: Object,
  maxH: String,
});

const active = ref(false);
const like = ref("like.png");
const likeHover = ref("like-hover.png");
</script>
