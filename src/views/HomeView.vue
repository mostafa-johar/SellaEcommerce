<script setup>
// components
import ExploreMore from '@/components/ExploreMore.vue';
import Titleproduct from '@/components/Titleproduct.vue';
import ShoppingNow from '@/components/ShoppingNow.vue';
import AddToCart from '@/components/AddToCart.vue';
// from vue & pania
import { ref } from 'vue';
import { useStore } from '@/store/store'
import { storeToRefs } from 'pinia';
//----------------------------------------------------------

// ------------ Variable --------------
const store = useStore()

const { getImg } = store
const { products } = storeToRefs(store)

const feats = ref([
  {
    title: 'منتجات مضمونه',
    txt: 'مدفوعات آمنة أقساط تصل إلى 12 شهرًا',
    img: 'feat-1.png'
  },
  {
    title: 'شحن مجاني',
    txt: 'مدفوعات آمنة أقساط تصل إلى 12 شهرًا',
    img: 'feat-2.png'
  },
  {
    title: 'مدفوعات آمنة',
    txt: 'مدفوعات آمنة أقساط تصل إلى 12 شهرًا',
    img: 'feat-3.png'
  },
])

const catogorys = ref([
  {
    id: 1,
    img: 'cat-1.jpg',
    title: 'ساعات',
    count: 150
  },
  {
    id: 2,
    img: 'cat-2.jpg',
    title: 'شاشات كمبيوتر',
    count: 150
  },
  {
    id: 3,
    img: 'cat-3.jpg',
    title: 'موبايلات',
    count: 150
  },
  {
    id: 4,
    img: 'cat-4.jpg',
    title: 'مكبرات صوت',
    count: 150
  },
  {
    id: 5,
    img: 'cat-5.jpg',
    title: 'كاميرات',
    count: 150
  },
  {
    id: 6,
    img: 'cat-6.jpg',
    title: 'سماعات أذن',
    count: 150
  },
  {
    id: 7,
    img: 'cat-7.jpg',
    title: 'ساعات',
    count: 150
  },
])

const productsTwo = ref([
  {
    id: 1,
    img: 'watch-1.png',
    bgColor: 'bg-blue-100'
  },
  {
    id: 2,
    img: 'watch-2.png',
    bgColor: 'bg-yellow-100'
  },
  {
    id: 3,
    img: 'watch-3.png',
    bgColor: 'bg-red-100'
  }
])

// testimonails clients
const testimonails = ref([
  {
    id: 1,
    img: 'client-1.png',
    text: 'استخدمنا سلة قبل أربع سنوات ثم غادرناها قبل أن يكون فيها خيارات ترقية مدفوعة، خسرنا مبالغ كبيرة جدا في عمل متجر وتعبنا جدا في التعامل مع المبرمجين . ثم عدنا لمنصة سلة ووجدنا تطورا هائلاً وعملا مميزاً',
    client: 'محمد السيد',
    job: 'مهندس إستشارى لدى شركة سلة'
  },
  {
    id: 2,
    img: 'client-2.png',
    text: 'استخدمنا سلة قبل أربع سنوات ثم غادرناها قبل أن يكون فيها خيارات ترقية مدفوعة، خسرنا مبالغ كبيرة جدا في عمل متجر وتعبنا جدا في التعامل مع المبرمجين . ثم عدنا لمنصة سلة ووجدنا تطورا هائلاً وعملا مميزاً',
    client: 'محمد السيد',
    job: 'مهندس إستشارى لدى شركة سلة'
  },
  {
    id: 3,
    img: 'client-1.png',
    text: 'استخدمنا سلة قبل أربع سنوات ثم غادرناها قبل أن يكون فيها خيارات ترقية مدفوعة، خسرنا مبالغ كبيرة جدا في عمل متجر وتعبنا جدا في التعامل مع المبرمجين . ثم عدنا لمنصة سلة ووجدنا تطورا هائلاً وعملا مميزاً',
    client: 'محمد السيد',
    job: 'مهندس إستشارى لدى شركة سلة'
  },
  {
    id: 4,
    img: 'client-1.png',
    text: 'استخدمنا سلة قبل أربع سنوات ثم غادرناها قبل أن يكون فيها خيارات ترقية مدفوعة، خسرنا مبالغ كبيرة جدا في عمل متجر وتعبنا جدا في التعامل مع المبرمجين . ثم عدنا لمنصة سلة ووجدنا تطورا هائلاً وعملا مميزاً',
    client: 'محمد السيد',
    job: 'مهندس إستشارى لدى شركة سلة'
  },
  {
    id: 5,
    img: 'client-2.png',
    text: 'استخدمنا سلة قبل أربع سنوات ثم غادرناها قبل أن يكون فيها خيارات ترقية مدفوعة، خسرنا مبالغ كبيرة جدا في عمل متجر وتعبنا جدا في التعامل مع المبرمجين . ثم عدنا لمنصة سلة ووجدنا تطورا هائلاً وعملا مميزاً',
    client: 'محمد السيد',
    job: 'مهندس إستشارى لدى شركة سلة'
  },
  {
    id: 6,
    img: 'client-1.png',
    text: 'استخدمنا سلة قبل أربع سنوات ثم غادرناها قبل أن يكون فيها خيارات ترقية مدفوعة، خسرنا مبالغ كبيرة جدا في عمل متجر وتعبنا جدا في التعامل مع المبرمجين . ثم عدنا لمنصة سلة ووجدنا تطورا هائلاً وعملا مميزاً',
    client: 'محمد السيد',
    job: 'مهندس إستشارى لدى شركة سلة'
  },

])

// Newest Articles
const newestArticles = ref([
  {
    id: 1,
    img: 'article-1.png',
    title: 'مدى تأثير التكنولوجيا على حياة الإنسان',
    text: 'لكي تنجح في أعمال التجارة الإلكترونية، تحتاج إلى بيع المنتجات المطلوبة، إذا لم يكن لديك فكرة، سنشارك في هذه المقالة قائمة أنواع المنتجات'
  },
  {
    id: 2,
    img: 'article-2.png',
    title: 'مدى تأثير التكنولوجيا على حياة الإنسان',
    text: 'لكي تنجح في أعمال التجارة الإلكترونية، تحتاج إلى بيع المنتجات المطلوبة، إذا لم يكن لديك فكرة، سنشارك في هذه المقالة قائمة أنواع المنتجات'
  },
  {
    id: 3,
    img: 'article-3.png',
    title: 'مدى تأثير التكنولوجيا على حياة الإنسان',
    text: 'لكي تنجح في أعمال التجارة الإلكترونية، تحتاج إلى بيع المنتجات المطلوبة، إذا لم يكن لديك فكرة، سنشارك في هذه المقالة قائمة أنواع المنتجات'
  }
])

// break point for client testimonials
const breakpoints = ref({
  '640': {
    slidesPerView: 1,
    spaceBetween: 20,
  },
  '768': {
    slidesPerView: 2,
    spaceBetween: 40,
  },
  '1024': {
    slidesPerView: 3,
    spaceBetween: 50,
  }
})

</script>
<template>
  <article class="Home">

    <!--==================
       ---Start Banner
      ================== -->
    <section class="banner bg-gray-900">

      <swiper-container class="mySwiper" navigation="true" pagination="true">

        <swiper-slide class='slide1 w-full flex justify-center items-center'>
          <div class=" text-white text-center md:w-[888px] w-full">
            <h1 class="md:text-[48px] text-4xl font-bold mb-4">أفضل التخفيضات 2024</h1>
            <p class="text-base text-gray-50 mb-8">متجر سلة يوفر لك كل ماتحتاجه من إلكترونيات أو أثاث منزلي بالإضافة إلى
              أفضل التحفيضات على المنتجات , تسوق الان واستمتع بكل بالتخفيضات على المنتجات</p>
            <ExploreMore />
          </div>

        </swiper-slide>

        <swiper-slide class='slide2 w-full flex justify-center items-center'>
          <div class=" text-white text-center md:w-[888px] w-full">
            <h1 class="md:text-[48px] text-4xl font-bold mb-4">أفضل الخصومات 2024</h1>
            <p class="text-base text-gray-50 mb-8">متجر سلة يوفر لك كل ماتحتاجه من إلكترونيات أو أثاث منزلي بالإضافة إلى
              أفضل التحفيضات على المنتجات , تسوق الان واستمتع بكل بالتخفيضات على المنتجات</p>
            <ExploreMore />
          </div>
        </swiper-slide>

        <swiper-slide class='slide3 w-full'>3</swiper-slide>
        <swiper-slide class='slide4 w-full'>4</swiper-slide>
      </swiper-container>
    </section>

    <!--==================
      ---Start Feature
    ================== -->
    <article class="feature py-[30px] px-2">
      <section class="container mx-auto">
        <div class="flex flex-wrap gap-2 items-center justify-center">
          <!-- box -->
          <section class="flex gap-4 shadow-sm  p-8" v-for="(feat, index) in feats" :key="index">
            <img :src="getImg(feat.img)" alt="feat" class="object-contain" loading="lazy">
            <p class="flex flex-col">
              <span class="text-xl font-medium">{{ feat.title }}</span>
              <span class="text-gray-400 text-base">{{ feat.txt }}</span>
            </p>
          </section>
        </div>
      </section>
    </article>

    <!--==================
      ---Start Banner
    ================== -->

    <article class="Banner py-[30px] px-2">
      <section class="container mx-auto">
        <div class="flex flex-wrap gap-6 justify-center">

          <section class="relative" v-for="(ban, index) in ['Banner-1.png', 'Banner-2.png']" :key="index">
            <img :src="getImg(ban)" alt="Banner" loading="lazy">
            <div class="absolute top-[50%] left-4 translate-y-[-50%]  flex flex-col gap-4">
              <p class="flex flex-col">
                <span class="text-base text-gray-400">سماعات ديجتال</span>
                <span class="text-xl md:text-4xl text-gray-600 font-medium">أفضل صوت نقي</span>
              </p>
              <ShoppingNow bgColor="text-gray-600" />
            </div>
          </section>

        </div>
      </section>
    </article>

    <!--==================
      ---Start Premuim products
    ================== -->
    <article class="premuimProducts py-[30px] px-2">
      <section class="container mx-auto">
        <div class="flex flex-col gap-8">
          <!-- title -->
          <Titleproduct info='منتجات مميزة' />
          <!-- productBoxes -->
          <div class="productBoxes grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1  md:gap-6 gap-4">
            <!-- product -->
            <section
              class="border-2 rounded-md overflow-hidden border-gray-100 hover:border-teal-500 flex md:flex-col flex-row-reverse relative"
              v-for="(product, index) in products" :key="product.id" v-show="product.isPremuim">
              <span
                :class="`absolute top-[10px] left-[10px] ${product.status == 'جديد' ? 'bg-teal-500' : product.status == 'خصم 25%' ? 'bg-red-500' : ''} text-white text-sm px-[10px] py-[5px] select-none rounded-md`">
                {{ (product.status) ? product.status : '' }}
              </span>
              <img :src="getImg(product.img)" alt="product"
                class="object-contain md:object-cover md:w-auto lg:max-h-[320px] w-[40%] m-auto mb-2" loading="lazy">

              <section class="info flex-1">

                <div class="flex flex-col md:p-4 p-3 gap-2">
                  <div class="flex flex-col gap-2 ">
                    <h4 class="text-sm text-teal-400">{{ product.title }}</h4>
                    <p class="text-base text-gray-600 font-medium ">{{ product.decripeOne }}</p>
                    <p class="text-sm text-gray-400">{{ product.decripeTwo }}</p>
                  </div>
                  <div class="flex gap-[6px] items-center">
                    <span class="text-[18px] text-red-400 font-medium"> {{ product.cPrice }} ر.س</span>
                    <span class="text-sm text-gray-300 line-through font-medium"> {{ product.oPrice }} ر.س</span>
                  </div>
                </div>

                <AddToCart
                  :product="{ id: product.id, img: product.img, decripeOne: product.decripeOne, cPrice: product.cPrice, quantity: 1 }" />

              </section>
            </section>
          </div>
        </div>
      </section>
    </article>

    <!--==================
      ---Start ads
    ================== -->
    <article class="ads py-[50px] px-2 ">
      <section class="container mx-auto">

        <div class="adsContent min-h-[500px] flex flex-col lg:flex-row gap-10 justify-center items-center p-8">

          <div class="text-white text-center lg:text-start">
            <h1 class="text-2xl lg:text-3xl font-bold mb-2 md:mb-4">أفضل التخفيضات 2024</h1>
            <p class="text-base text-gray-50 mb-6 lg:mb-8">متجر سلة يوفر لك كل ماتحتاجه من إلكترونيات أو أثاث منزلي
              بالإضافة إلى
              أفضل التحفيضات على المنتجات , تسوق الان واستمتع بكل بالتخفيضات على المنتجات</p>
            <ExploreMore />
          </div>

          <img src="@/assets/imgs/lap.png" alt="lap" class="object-contain" loading="lazy">

        </div>
      </section>
    </article>

    <!--==================
      ---Start Category
    ================== -->
    <article class="catogory py-[30px] px-2">
      <div class="container mx-auto">
        <section class="flex flex-col gap-4">
          <!-- title -->
          <Titleproduct info='تسوق حسب الفئات' />
          <div class="grid lg:grid-cols-7 md:grid-cols-3 grid-cols-2  flex-wrap gap-6 ">
            <!-- box cat -->
            <section class="flex flex-col justify-center items-center gap-4" v-for="(cat, index) in catogorys"
              :key="index">
              <img :src="getImg(cat.img)" alt="cat" class="max-h-[200px]" loading="lazy">
              <div class="flex flex-col gap-1 justify-center items-center">
                <h3 class="text-xl text-gray-600">{{ cat.title }}</h3>
                <span class="text-base text-gray-400">{{ cat.count }} منتج</span>
              </div>
            </section>

          </div>

        </section>
      </div>
    </article>

    <!--==================
    ---Start BannerTwo
    ================== -->
    <article class="BannerTwo py-[30px] px-2">
      <div class="container  mx-auto">
        <section class="flex flex-col gap-6">
          <section class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
            <!-- box -->
            <div class="relative" v-for="(ban, index) in ['b-1.png', 'b-2.png', 'b-3.png']" :key="index">
              <img :src="getImg(ban)" alt="Banner" loading="lazy" class="w-full object-cover">

              <div class="absolute top-[50%] right-4 translate-y-[-50%] flex flex-col justify-start gap-4">
                <p class="flex flex-col">
                  <span class="text-base text-gray-100">سماعات ديجتال</span>
                  <span class="text-xl md:text-2xl text-white font-medium">أفضل صوت نقي</span>
                </p>
                <ShoppingNow bgColor="text-white" />
              </div>
            </div>

          </section>
          <div class="relative">
            <img src="@/assets/imgs/b-4.png" alt="Banner" loading="lazy" class="w-full h-[244px] object-cover">
            <div class="absolute top-[50%] left-[10%] translate-y-[-50%] flex flex-col justify-start gap-4">
              <p class="flex flex-col">
                <span class="text-base text-gray-100">سماعات ديجتال</span>
                <span class="text-xl md:text-3xl text-white font-medium">أفضل صوت نقي</span>
              </p>
              <ShoppingNow bgColor="text-white" />
            </div>
          </div>
        </section>
      </div>
    </article>

    <!--==================
    ---Start Discount
    ================== -->
    <article class="Discount BannerTwo py-[30px] px-2">
      <section class="container mx-auto">

        <div class="flex flex-col gap-4">
          <!-- title -->
          <Titleproduct info='عروض تنتهى قريبا' />

          <section class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
            <!-- box -->
            <div class="grid md:grid-cols-2 grid-cols-1 border-[1px] border-teal-500 rounded-md p-2"
              v-for="(product, index) in products" :key="product.id" v-show="product.id < 3">
              <img :src="getImg(product.img)" alt="cat" loading="lazy" class="object-contain max-h-[300px] m-auto">
              <div class="flex flex-col gap-4 p-4 flex-1 justify-center">
                <!-- 1 -->
                <div class="flex flex-col gap-1">
                  <!-- title -->
                  <div>
                    <h5 class="text-sm text-teal-900">{{ product.title }}</h5>
                    <h3 class="text-[18px] text-gray-600  font-medium">{{ product.decripeOne }}</h3>
                    <h4 class="text-gray-400">{{ product.decripeTwo }}</h4>
                  </div>
                  <!-- rating -->
                  <div class="flex gap-1">
                    <div class="flex">
                      <img :src="getImg(rate)" alt="star" v-for="(rate, index) in Array(4).fill('StarF.png')" :key="index"
                        class="object-contain">
                      <img :src="getImg('Star.png')" alt="star" class="object-contain">
                    </div>
                    <span class="text-sm text-gray-300">(4.5)</span>
                  </div>
                  <div class="flex gap-1">
                    <span class="text-[18px] text-red-400 font-medium"> 400 ر.س</span>
                    <span class="text-sm text-gray-300 line-through font-medium"> 500 ر.س</span>
                  </div>
                </div>
                <!-- 2 -->
                <div class="flex gap-1 flex-wrap">
                  <p class="flex flex-col justify-center items-center bg-gray-50 px-4 py-2"
                    v-for="(d, i) in [{ name: 'يوم', n: '02' }, { name: 'ساعة', n: 16 }, { name: 'دقيقة', n: 55 }, { name: 'ثانية', n: 55 }]"
                    :key="i">
                    <span class="text-[18px] text-gray-600 font-medium">{{ d.n }}</span>
                    <span class="text-sm text-gray-300">{{ d.name }}</span>
                  </p>
                </div>
                <!-- 3 -->
                <AddToCart
                  :product="{ id: product.id, img: product.img, decripeOne: product.decripeOne, cPrice: product.cPrice, quantity: 1 }" />
              </div>
            </div>
          </section>

        </div>
      </section>
    </article>

    <!--==================
    ---Start NewProducts
    ================== -->
    <article class="newProducts py-[30px] px-2 bg-gray-100">
      <section class="container mx-auto">
        <div class="flex flex-col gap-8">
          <!-- title -->
          <Titleproduct info='منتجات جديدة ' />
          <!-- productBoxes -->
          <div class="productBoxes grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1  md:gap-6 gap-4">
            <!-- product -->
            <section
              class="border-2 rounded-md overflow-hidden bg-white border-gray-100 hover:border-teal-500 flex md:flex-col flex-row-reverse relative"
              v-for="(product, index) in products" :key="product.id" v-show="(product.isNew)">
              <span
                :class="`absolute top-[10px] left-[10px] ${product.status == 'جديد' ? 'bg-teal-500' : product.status == 'خصم 25%' ? 'bg-red-500' : ''} text-white text-sm px-[10px] py-[5px] select-none rounded-md`">
                {{ (product.status) ? product.status : '' }}
              </span>
              <img :src="getImg(product.img)" alt="product"
                class="object-contian mx-auto md:w-[60%] w-[50%] max-h-[320px]  mb-2" loading="lazy">

              <section class="info flex-1">

                <div class="flex flex-col md:p-4 p-3 gap-2">
                  <div class="flex flex-col gap-2 ">
                    <h4 class="text-sm text-teal-400">{{ product.title }}</h4>
                    <p class="text-base text-gray-600 font-medium ">{{ product.decripeOne }}</p>
                    <p class="text-sm text-gray-400">{{ product.decripeTwo }}</p>
                  </div>
                  <div class="flex gap-[6px] items-center">
                    <span
                      :class="`text-[18px] ${product.status == 'جديد' ? 'text-gray-900' : 'text-red-400'} font-medium`">
                      {{ product.cPrice }} ر.س</span>
                    <span class="text-sm text-gray-300 line-through font-medium" v-if="product.status !== 'جديد'"> {{
                      product.oPrice }} ر.س</span>
                  </div>
                </div>
                <!-- ada To cart  -->
                <AddToCart
                  :product="{ id: product.id, img: product.img, decripeOne: product.decripeOne, cPrice: product.cPrice, quantity: 1 }" />

              </section>
            </section>
          </div>
        </div>
      </section>
    </article>

    <!--==================
    ---Start productsTwo
    ================== -->
    <article class="productsTwo  py-[30px] px-2">
      <div class="container mx-auto">
        <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- box -->
          <div :class="`flex flex-col gap-6  px-14 py-8 ${product.bgColor}`" v-for="(product, index) in productsTwo"
            :key="product.id">
            <!--1 img -->
            <img :src="getImg(product.img)" alt="watch" loading="lazy" class="object-contain m-auto">
            <!--2 info -->
            <div class="flex flex-col gap-4 justify-center items-center">
              <div class="flex flex-col justify-center items-center md:w-[272px] w-full gap-2">
                <h3 class="text-[18px] text-gray-600 font-bold">معالجة أسرع وأكثر ثراءً</h3>
                <p class="text-sm text-gray-400">أسرع من EXPEED 4 ، يعالج EXPEED 5 بسرعة 45.7 ميجابكسل من البيانات لتقليل
                  التشويش</p>
              </div>
              <ShoppingNow />
            </div>
          </div>
        </section>
      </div>
    </article>

    <!--==================
    ---Start Shows
    ================== -->
    <article class="Shows py-[30px] px-2 h-[500px]">
      <swiper-container class="mySwiper h-full" pagination="true">

        <swiper-slide class='slide1 w-full flex justify-center items-center'>
          <div class=" text-white text-center md:w-[888px] w-full">
            <h1 class="md:text-[48px] text-4xl font-bold mb-4">أفضل التخفيضات 2024</h1>
            <p class="text-base text-gray-50 mb-8">متجر سلة يوفر لك كل ماتحتاجه من إلكترونيات أو أثاث منزلي بالإضافة إلى
              أفضل التحفيضات على المنتجات , تسوق الان واستمتع بكل بالتخفيضات على المنتجات</p>
            <ExploreMore />
          </div>

        </swiper-slide>

        <swiper-slide class='slide2 w-full flex justify-center items-center'>
          <div class=" text-white text-center md:w-[888px] w-full">
            <h1 class="md:text-[48px] text-4xl font-bold mb-4">أفضل الخصومات 2024</h1>
            <p class="text-base text-gray-50 mb-8">متجر سلة يوفر لك كل ماتحتاجه من إلكترونيات أو أثاث منزلي بالإضافة إلى
              أفضل التحفيضات على المنتجات , تسوق الان واستمتع بكل بالتخفيضات على المنتجات</p>
            <ExploreMore />
          </div>
        </swiper-slide>

        <swiper-slide class='slide3 w-full'>3</swiper-slide>
        <swiper-slide class='slide4 w-full'>4</swiper-slide>
      </swiper-container>
    </article>
    <!--==================
      ---Start Special products
    ================== -->
    <article class="specialProducts py-[30px] px-2">
      <section class="container mx-auto">
        <div class="flex flex-col gap-8">
          <!-- title -->
          <Titleproduct info='منتجات مميزة' />
          <!-- productBoxes -->
          <div class="productBoxes grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1  md:gap-6 gap-4">
            <!-- product -->
            <section
              class="border-2 rounded-md overflow-hidden border-gray-100 hover:border-teal-500 flex md:flex-col flex-row-reverse relative"
              v-for="(product, index) in products" :key="product.id" v-show="product.isSpecial">
              <span
                :class="`absolute top-[10px] left-[10px] ${product.status == 'جديد' ? 'bg-teal-500' : product.status == 'خصم 25%' ? 'bg-red-500' : ''} text-white text-sm px-[10px] py-[5px] select-none rounded-md`">
                {{ (product.status) ? product.status : '' }}
              </span>
              <img :src="getImg(product.img)" alt="product"
                class="object-contain md:object-cover w-[50%] md:max-h-[228px] md:w-auto md:m-auto mb-2" loading="lazy">

              <section class="info flex-1">

                <div class="flex flex-col md:p-4 p-3 gap-2">
                  <div class="flex flex-col gap-2 ">
                    <h4 class="text-sm text-teal-400">{{ product.title }}</h4>
                    <p class="text-base text-gray-600 font-medium ">{{ product.decripeOne }}</p>
                    <p class="text-sm text-gray-400">{{ product.decripeTwo }}</p>
                  </div>
                  <div class="flex gap-[6px] items-center">
                    <span class="text-[18px] text-red-400 font-medium"> {{ product.cPrice }} ر.س</span>
                    <span class="text-sm text-gray-300 line-through font-medium"> {{ product.oPrice }} ر.س</span>
                  </div>
                </div>
                <!-- Add to Cart -->
                <AddToCart
                  :product="{ id: product.id, img: product.img, decripeOne: product.decripeOne, cPrice: product.cPrice, quantity: 1 }" />

              </section>
            </section>
          </div>
        </div>
      </section>
    </article>

    <!--==================
      ---Start testimonials
    ================== -->
    <article class="testimonials py-[30px] px-2 relative">
      <section class="container mx-auto">
        <!-- title -->
        <div class="flex justify-between mb-8">
          <div class="flex flex-col gap-1">
            <h3 class="text-2xl text-gray-900 font-medium">آراء العملاء</h3>
            <p class="text-base text-gray-400">بيتم استعراض بعض آراء وتعليقات المستخدمين</p>
          </div>
        </div>
        <!-- testimonail -->
        <div class="testimonail">
          <swiper-container class="mySwiper static" :pagination="true" :slidesPerView="1" :space-between="30"
            :breakpoints="breakpoints">
            <!-- box testi -->
            <swiper-slide v-for="(testi, index) in testimonails" :key="index">
              <section class="flex flex-col gap-4 border-[1px] p-6">
                <!-- rating -->
                <div class="flex justify-between gap-2">
                  <div class="flex">
                    <img :src="getImg(star)" alt="star" v-for="star in Array(4).fill('StarF.png')" class="object-contain">
                    <img :src="getImg('Star.png')" alt="star" class="object-contain">
                  </div>
                  <img src="@/assets/imgs/Leftquotes.png" alt="Leftquotes" class="object-contain">
                </div>
                <!-- text -->
                <p class="text-base text-gray-400">
                  استخدمنا سلة قبل أربع سنوات ثم غادرناها قبل أن يكون فيها خيارات ترقية مدفوعة، خسرنا مبالغ كبيرة جدا في
                  عمل متجر وتعبنا جدا في التعامل مع المبرمجين . ثم عدنا لمنصة سلة ووجدنا تطورا هائلاً وعملا مميزاً
                </p>
                <!-- name -->
                <div class="flex gap-1">
                  <img :src="getImg(testi.img)" alt="client" class="object-contain">
                  <div>
                    <h3 class="text-lg text-gray-600 font-medium">محمد السيد</h3>
                    <p class="text-sm text-gray-400">مهندس إستشارى لدى شركة سلة</p>
                  </div>

                </div>
              </section>
            </swiper-slide>
          </swiper-container>



        </div>
      </section>
    </article>

    <!--==================
      ---Start Newest Articles
    ================== -->
    <article class="newestArticles py-[30px] px-2">
      <section class="container mx-auto">
        <div class="flex flex-col gap-8">
          <Titleproduct info="أحدث المقالات" />
          <!-- articles -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <!-- box -->
            <section class="flex flex-col gap-6" v-for="(article, index) in newestArticles" :key="article.id">
              <img :src="getImg(article.img)" alt="article" class="max-h-[258px] object-cover">
              <div class="flex flex-col gap-2">
                <h3 class="text-[18px] text-gray-600 font-bold">{{ article.title }}</h3>
                <p class="text-base text-gray-400">{{ article.text }}</p>
              </div>

            </section>
          </div>
        </div>

      </section>
    </article>

    <!--==================
      ---Start Brands
    ================== -->
    <article class="Brands py-[30px] px-2">
      <section class="container mx-auto">
        <div class="flex flex-col gap-8">
          <!-- title -->
          <div class="flex flex-col gap-1">
            <h3 class="text-2xl text-gray-900 font-medium">الماركات التجارية</h3>
            <p class="text-base text-gray-400">يمكنك التسوق من خلال الماركات التجارية</p>
          </div>
          <!-- company -->
          <div class="flex flex-wrap justify-around gap-6">
            <img :src="getImg(brand)" alt="brand"
              v-for="(brand, index) in ['brand-1.png', 'brand-2.png', 'brand-3.png', 'brand-1.png', 'brand-2.png', 'brand-3.png']"
              :key="index" class="object-contain">
          </div>
        </div>
      </section>
    </article>


  </article>
</template>

<style>
/* ==============
===== Start Banner Slider Swiper js
===============*/
.banner swiper-slide {
  min-height: calc(100vh - 206px);
  background-size: cover;
}

.banner .slide1 {
  background-image: url('@/assets/imgs/banner-1.jpg');

}

.banner .slide2 {
  background-image: url('@/assets/imgs/banner-2.jpg');
}

.banner .slide3 {
  background-image: url('@/assets/imgs/banner-3.jpg');
}

.banner .slide4 {
  background-image: url('@/assets/imgs/banner-4.jpg');
}

/* ==> start navigation --- */
.banner swiper-container::part(button-prev),
.banner swiper-container::part(button-next) {
  border: 1px solid #EEE;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  color: white;
  padding: 8px;

}

.banner swiper-container::part(button-prev)::after,
.banner swiper-container::part(button-next)::after {
  font-size: 16px
}

.banner swiper-container::part(button-prev) {
  right: 40px;
}

.banner swiper-container::part(button-next) {
  left: 40px;
}

/* ==> start bullet --- */
.banner swiper-container::part(bullet),
.Shows swiper-container::part(bullet),
.testimonials swiper-container::part(bullet) {
  border: 1px solid white;
}

.banner swiper-container::part(bullet-active),
.Shows swiper-container::part(bullet-active),
.testimonials swiper-container::part(bullet-active) {
  background-color: #62D0B6;
}

/*  hide navigation in smart phone */
@media (max-width: 767px) {

  .banner swiper-container::part(button-prev),
  .banner swiper-container::part(button-next),
  .testimonials swiper-container::part(pagination) {
    display: none;
  }
}

/* ==============
---- Start ads
============== */
.ads .adsContent {
  background-image: url('../assets//imgs/bannerContainer.png');
  background-size: cover;
}

/* ==============
---- Start Sjows
============== */
.Shows {
  background-image: url('../assets//imgs/show-1.png');
  background-size: cover;
}

/* ==============
---- Start testimonials
============== */
.testimonials swiper-container::part(pagination) {

  bottom: 0 !important;
}
</style>
