<template>
    <div>
        <router-link to="/AllProducts" class="text-base font-medium " :class="bgColor"> تسوق الان</router-link>
    </div>
</template>

<script setup>
const props = defineProps({
    bgColor: String
})

</script>