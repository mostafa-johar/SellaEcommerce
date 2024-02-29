<template>
    <main class="AllProducts py-[30px] px-2">
        <!-- BreadCrumbs -->
        <article class="BreadCrumbs pb-3">
            <div class="container mx-auto">
                <ul class="flex gap-1 p-4">
                    <li>
                        <router-link to="/" class="text-teal-400">الرئيسية</router-link>
                    </li>
                    <li>/</li>
                    <li>
                        <router-link to="/AllProducts" class="text-gray-400">كل المنتجات</router-link>
                    </li>
                </ul>
            </div>
        </article>


        <div class="container mx-auto">
            <!-- Products -->
            <article class="flex gap-6">

                <!--================== 
                ---  right Aside
                  ==================== -->
                <aside
                    class="lg:flex flex-col basis-[20%] gap-4 border-[1px] h-full transition-all bg-white z-10 absolute top-0 lg:relative"
                    :class="widthToggle ? ' right-[-294px] lg:right-0' : ' right-0'">
                    <p class="text-gray-600 font-semibold text-sm py-4 px-4 border-b-2">فلترة المنتجات</p>
                    <span
                        class="absolute md:top-[9%] top-[6%] -left-[30px] w-[30px] h-[30px] rounded-ee-md rounded-se-md bg-teal-400 hover:bg-teal-600 text-white flex justify-center items-center select-none cursor-pointer lg:hidden"
                        v-on:click="widthToggle = !widthToggle">x</span>
                    <!-- 1 Categories -->

                    <ul class="flex flex-col justify-start pt-4 px-4" v-for="(option, index) in options" :key="option.id">

                        <li class="mb-3" v-on:click="option.open = !option.open">
                            <button class="flex justify-between gap-1 w-full">
                                <h3 class="text-base text-gray-60 font-medium">{{ option.title }}</h3>
                                <img src="@/assets/imgs/arrow_down.png" alt="Arrow_Down"
                                    :class="`object-contain transition-all ${option.open ? '' : 'rotate-180'}`">
                            </button>
                        </li>

                        <section :class="`${(option.open) ? 'h-auto' : 'h-0'} transition-all mb-6  overflow-hidden`">
                            <li class="flex justify-between gap-2 pb-2" v-for="(category, index) in option.categories"
                                :key="category.id">
                                <label :for="`${(category.title == 'الكل') ? option.title : category.title}`"
                                    class="w-5 h-5 rounded-full border-[1px] border-teal-400 flex justify-center items-center">
                                    <input type="radio"
                                        :id="`${(category.title == 'الكل') ? option.title : category.title}`"
                                        class="appearance-none peer" :name="option.title">
                                    <span class="rounded-full w-3 h-3 bg-teal-400 hidden peer-checked:block"></span>
                                </label>
                                <div class="flex justify-between flex-1">
                                    <p class="text-gray-600 text-sm">{{ category.title }}</p>
                                    <p class="text-sm text-gray-400">({{ category.count }})</p>
                                </div>
                            </li>
                            <span class="text-sm text-teal-400 cursor-pointer">عرض المزيد</span>
                        </section>


                        <img src="@/assets/imgs/Line.png" alt="Line" class="object-contain">
                    </ul>

                    <!-- 2 price-->

                    <ul class="flex flex-col pt-4 px-4">
                        <li class="mb-3">
                            <button class="flex justify-between gap-1 w-full">
                                <h3 class="text-base text-gray-60 font-medium">السعر</h3>
                                <img src="@/assets/imgs/arrow_down.png" alt="Arrow_Down"
                                    class="object-contain transition-all">
                            </button>
                        </li>
                        <li class="flex py-6">
                            <label for="minPrice" class="slide w-[50%]  border-[1px] flex justify-center items-center">
                                <input type="range" min="1000" max="5000" step="1000" id="minPrice" v-model="min"
                                    class="slider" />
                            </label>
                            <label for="maxPrice" class="slide w-[50%] relative border-[1px]">
                                <input type="range" min="1000" max="50000" step="1000" id="maxPrice" v-model="max"
                                    class="slider" />
                            </label>

                        </li>
                        <li class="flex py-6 gap-6">
                            <KeepAlive>
                                <p>
                                    من : {{ min }}
                                </p>
                            </KeepAlive>
                            <p>
                                إلى : {{ max }}
                            </p>
                        </li>

                    </ul>

                    <!-- 3 colors -->

                    <ul class="flex flex-col justify-start pt-4 px-4" v-for="(color, index) in colors" :key="color.id">

                        <li class="mb-3" v-on:click="color.open = !color.open">
                            <button class="flex justify-between gap-1 w-full">
                                <h3 class="text-base text-gray-60 font-medium">اللون</h3>
                                <img src="@/assets/imgs/arrow_down.png" alt="Arrow_Down"
                                    :class="`object-contain transition-all ${color.open ? '' : 'rotate-180'}`">
                            </button>
                        </li>

                        <section :class="`${(color.open) ? 'h-auto' : 'h-0'} transition-all mb-6  overflow-hidden`">
                            <li class="flex justify-between gap-2 pb-2" v-for="(color, index) in color.colors"
                                :key="color.id">
                                <label :for="`${color.title}-color`"
                                    class="w-5 h-5 rounded-full border-[1px] border-teal-400 flex justify-center items-center">
                                    <input type="radio" :id="`${color.title}-color`" class="appearance-none peer"
                                        name="color">
                                    <span :class="`rounded-full w-3 h-3 ${color.color} hidden peer-checked:block`"></span>
                                </label>
                                <div class="flex justify-between flex-1">
                                    <span class="flex gap-1">
                                        <div :class="`rounded-full ${color.color} w-5 h-5 `" v-show="color.id != 1"></div>
                                        <p class="text-gray-600">{{ color.title }}</p>
                                    </span>
                                    <p class="text-sm text-gray-400">({{ color.count }})</p>
                                </div>
                            </li>
                            <span class="text-sm text-teal-400 cursor-pointer">عرض المزيد</span>
                        </section>


                        <img src="@/assets/imgs/Line.png" alt="Line" class="object-contain">
                    </ul>
                </aside>

                <!--================== 
                ---  left side 
                  ==================== -->

                <section class="flex-1 basis-[80%] flex flex-col gap-8">

                    <!-- grid Net -->

                    <section class="flex justify-between items-center flex-wrap gap-2 border-[1px] shadow-sm p-4">

                        <div class="flex gap-2">
                            <span class="border-[1px] rounded-md p-3 cursor-pointer "
                                :class="netOne.active ? '' : 'bg-teal-400'" v-on:click="netOne.active = !netOne.active">
                                <img :src="getImg(netOne.active ? netOne.imgOne : 'grid-3.png')" alt="grid"
                                    class="object-contain select-none">
                            </span>
                            <span class="border-[1px] rounded-md bg-gray-10 p-3 cursor-pointer"
                                :class="netOne.active ? 'bg-teal-400' : ''" v-on:click="netOne.active = !netOne.active">
                                <img :src="getImg(netOne.active ? netOne.imgTwo : 'grid-4.png')" alt="grid"
                                    class="object-contain select-none">
                            </span>
                        </div>

                        <div class="flex gap-2">
                            <p class="text-sm text-gray-600"><span class="text-gray-400">ترتيب حسب</span> : من الاعلى الى
                                الاقل</p>
                            <img :src="getImg('arrow_down.png')" alt="arrow_down"
                                class="object-contain rotate-180 cursor-pointer">
                        </div>

                    </section>

                    <!-- Products -->
                    <article class="products">
                        <section class="grid lg:gap-6"
                            :class="netOne.active ? 'lg:grid-cols-3 grid-cols-2 ' : 'grid-cols-1'">
                            <!-- box -->
                            <div class="grid  rounded-md p-2" v-for="(product, index) in products" :key="product.id"
                                v-show="((index) < Number(num))" :class="netOne.active ? 'grid-cols-1' : 'grid-cols-2'">
                                <img :src="getImg(product.img)" alt="cat" loading="lazy"
                                    class="object-contain max-h-[300px] basis-[40%] m-auto ">

                                <div class="flex flex-col gap-4 p-4 flex-1 justify-center basis-[60%]">
                                    <!-- 1 -->
                                    <div class="flex flex-col gap-1">
                                        <!-- title -->
                                        <div>
                                            <h5 class="text-sm text-teal-400">{{ product.title }}</h5>
                                            <h3 class="text-sm text-gray-600  font-medium">
                                                {{ product.decripeOne }}
                                            </h3>
                                            <h4 class="text-sm text-gray-400">{{ product.decripeTwo }}</h4>
                                        </div>
                                        <div class="flex gap-1">
                                            <span class="text-[18px] text-red-400 font-medium"> {{ product.cPrice }}
                                                ر.س</span>
                                            <span class="text-sm text-gray-300 line-through font-medium"> {{ product.oPrice
                                            }}
                                                ر.س</span>
                                        </div>
                                    </div>
                                    <!-- 2 -->
                                    <!-- Add to Cart -->
                                    <AddToCart
                                        :product="{ id: product.id, img: product.img, decripeOne: product.decripeOne, cPrice: product.cPrice, quantity: 1 }" />
                                </div>
                            </div>
                        </section>


                        <span class="text-lg text-teal-400 cursor-pointer text-center block p-3" @click="decrease">عرض
                            المزيد</span>
                    </article>


                </section>


            </article>

        </div>

    </main>
</template>

<script setup>
import { ref } from 'vue';
import { useStore } from '@/store/store'
import AddToCart from '@/components/AddToCart.vue';

const store = useStore()

const { products, getImg } = store

//  الفئة
const options = ref([
    {
        id: 1,
        title: 'الفئة',
        open: true,
        categories: [
            {
                id: 1,
                title: 'الكل',
                count: 100
            },
            {
                id: 2,
                title: 'الإلكترونيات والموبايلات',
                count: 60
            },
            {
                id: 3,
                title: 'التلفزيونات والشاشات',
                count: 35
            },
            {
                id: 4,
                title: 'سماعات أذن',
                count: 30
            },
            {
                id: 5,
                title: 'كاميرات ديجتال',
                count: 40
            },
            {
                id: 6,
                title: 'مكبرات صوت',
                count: 20
            }
        ]
    },
    {
        id: 2,
        title: 'الماركة',
        open: true,
        categories: [
            {
                id: 1,
                title: 'الكل',
                count: 100
            },
            {
                id: 2,
                title: 'إتش بي',
                count: 60
            },
            {
                id: 3,
                title: 'أبل',
                count: 35
            },
            {
                id: 4,
                title: 'سامسونج',
                count: 30
            },
            {
                id: 5,
                title: 'ديل',
                count: 40
            },
            {
                id: 6,
                title: 'لينوفو',
                count: 20
            }
        ]
    },

])

const colors = ref([
    {
        id: 1,
        open: true,
        colors: [
            {
                id: 1,
                open: true,
                title: 'الكل',
                count: 100,
                color: 'bg-teal-400'
            },
            {
                id: 2,
                open: true,
                title: 'احمر',
                count: 30,
                color: 'bg-red-500'
            },
            {
                id: 3,
                open: true,
                title: 'اخضر',
                count: 8,
                color: 'bg-teal-500'
            },
            {
                id: 4,
                open: true,
                title: 'اسود',
                count: 10,
                color: 'bg-black'
            },
            {
                id: 5,
                open: true,
                title: 'أزرق',
                count: 5,
                color: 'bg-blue-500'
            },
            {
                id: 6,
                open: true,
                title: 'أصفر',
                count: 3,
                color: 'bg-yellow-500'
            },
        ]
    }
])
// slider range 
const min = ref(1000)
const max = ref(10000)

// show more products عرض المزيد
const num = ref(6)
const decrease = () => {
    num.value += 4
}

// grid 
const netOne = ref({
    imgOne: 'grid-1.png',
    imgTwo: 'grid-2.png',
    active: true,
})

// aside to open and close
const widthToggle = ref(true)



</script>

<style scoped>
.slider {
    -webkit-appearance: none;
    --moz-appearance: none;
    appearance: none;
    width: 100%;
    height: 10px;
    background: #d3d3d3;
    border-radius: 10px;
    outline: none;
    opacity: 0.7;
    -webkit-transition: .2s;
    transition: opacity .2s;
    z-index: 2;
    position: relative;

}

.slider:hover {
    opacity: 1;
}

.slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #04AA6D;
    cursor: pointer;
}

input::before {
    content: '';
    position: absolute;
    background-color: #04AA6D;
    height: 10px;
    top: 0;
    left: 0;
    z-index: -1;
    border-radius: 10px;
}
</style>