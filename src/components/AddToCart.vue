<template>
  <div class="flex md:gap-2 gap-1 justify-start m-3">
    <button
      class="flex justify-center items-center gap-2 border-2 lg:bg-teal-500 hover:bg-teal-600 flex-1 md:p-3 p-1"
      @click.once="addCountCart(product)"
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
      class="flex justify-center items-center border-2 border-gray-10 md:p-3 p-1"
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
</template>

<script setup>
// from vue & pania
import { useStore } from "@/store/store";
import { ref } from "vue";

//----------------------------------------------------------

// ------ variable ------------
const store = useStore();
const { getImg, addCountCart } = store;

const props = defineProps({
  product: Object,
});
const like = ref("like.png");
const likeHover = ref("like-hover.png");
const active = ref(false);
</script>
