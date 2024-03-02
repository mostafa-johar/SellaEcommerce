<template>
  <div
    v-for="(prod, index) in giveProduct(typed)"
    :key="prod.id"
    :class="`product-${prod.id} border-2 rounded-md overflow-hidden border-gray-100 hover:border-teal-500 flex md:flex-col flex-row-reverse relative bg-white`"
    v-show="typed == 'All' ? index < num : true"
  >
    <productBox :prod="prod" :maxH="maxH" />
  </div>
</template>

<script setup>

// from vue & pania
import { useStore } from "@/store/store";
import productBox from "./productBox.vue";

// ------------ Variable --------------
const store = useStore();
const { giveProduct } = store;

const props = defineProps({
  typed: String,
  maxH: String,
  num: Number,
  netOne: Object,
});
</script>
