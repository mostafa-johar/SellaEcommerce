<template>
    <footer>
        <section class="flex flex-col">
            <!-- subscripe -->
            <section class="bg-gray-50 py-6 px-2">
                <div class="container mx-auto">
                    <section class="flex flex-wrap gap-6">
                        <!-- 1 -->
                        <div class="flex flex-wrap gap-6">
                            <!-- 1 -->
                            <section class="flex gap-4 justify-center items-center ">
                                <span class="flex justify-center items-center bg-teal-100 rounded-full w-14 h-14 p-4 ">
                                    <img src="@/assets/imgs/email-1.png" alt="apple" class="object-contain">
                                </span>
                                <div class="flex flex-col gap-1">
                                    <h6 class="text-base text-gray-600 font-medium">الاشتراك فى النشرة البريدية</h6>
                                    <p class="text-sm text-gray-400">انضم الآن واحصل على خصم 10٪ على مشترياتك التالية!</p>
                                </div>
                            </section>
                            <!-- 2 -->
                            <section class="flex flex-col gap-4 flex-1">
                                <h4 class="text-sm text-gray-600 font-bold">يمكنك إلغاء الاشتراك في أي لحظة</h4>
                                <div class="flex flex-wrap gap-2">
                                    <input type="email" placeholder="ادحل بريدك الالكتروني"
                                        class="outline-none border-[1px] border-gray-100 lg:w-[450px] w-full px-4 py-3">
                                    <button
                                        class="text-white bg-teal-400 hover:bg-teal-600 px-6 py-3 w-full lg:w-auto">اشتراك</button>
                                </div>
                            </section>

                            <!-- 3 -->
                            <section class="flex flex-col gap-2">
                                <h3 class="lg:text-base text-sm text-gray-600 font-medium">تطبيقات الجوال</h3>
                                <div class="flex gap-2">
                                    <!-- box-1 -->
                                    <div class="flex gap-2">
                                        <div class="rounded-md bg-black flex py-3 px-4 gap-1">
                                            <img src="@/assets/imgs/appleStore.png" alt="apple" class="object-contain">
                                            <img src="@/assets/imgs/Apple.png" alt="apple" class="object-contain">
                                        </div>
                                    </div>
                                    <!-- box-2-->
                                    <div class="flex gap-2">
                                        <div class="rounded-md bg-black flex py-3 px-4 gap-1">
                                            <img src="@/assets/imgs/appleStore.png" alt="apple" class="object-contain">
                                            <img src="@/assets/imgs/Apple.png" alt="apple" class="object-contain">
                                        </div>
                                    </div>
                                </div>

                            </section>

                        </div>
                        <!-- 2 -->
                        <div></div>
                    </section>
                </div>
            </section>

            <!-- links -->
            <section>
                <div class="container mx-auto">
                    <section class="flex flex-wrap gap-10 py-12 px-2">
                        <!-- 1 -->
                        <div class="flex flex-col gap-4">
                            <h3 class="text-lg text-gray-600 font-medium">عن متجرنا</h3>
                            <div class="flex flex-col gap-2">
                                <p class="lg:text-base text-sm text-gray-400 max-w-[300px]">متجر سلة من افضل المتاجر التى تقوم ببيع
                                    المنتجات الرقمية بأفضل الاسعار وماركات عالمية تسوق الان واطلع على المزيد من التصاميم
                                    واستمتع بأفضل العروض والخصومات</p>
                            </div>

                        </div>
                        <!-- 2 -->
                        <div class="flex flex-col gap-4">
                            <h3 class="text-lg text-gray-600 font-medium">حسابى</h3>
                            <router-link to="/" class="flex gap-1 items-center"
                                v-for="(link, index) in ['حسابى', 'طلباتى', 'سلة المشتريات', 'المفضلة']" :key="index">
                                <img src="@/assets/imgs/doubleArrow.png" alt="doubleArrow" class="object-contain">
                                <span class="text-base text-gray-400 hover:text-blue-500">{{ link }}</span>
                            </router-link>
                        </div>
                        <!-- 3 -->
                        <div class="flex flex-col gap-4">
                            <h3 class="text-lg text-gray-600 font-medium">روابط مهمة</h3>
                            <router-link to="/" class="flex gap-1 items-center"
                                v-for="(link, index) in ['من نحن', 'ساسية الخصوصية', 'الشروط والاحكام', 'الدعم الفنى']"
                                :key="index">
                                <img src="@/assets/imgs/doubleArrow.png" alt="doubleArrow" class="object-contain">
                                <span class="text-base text-gray-400 hover:text-blue-500">{{ link }}</span>
                            </router-link>
                        </div>
                        <!-- 4 -->
                        <div class="flex flex-col gap-4">
                            <h3 class="text-lg text-gray-600 font-medium">تواصل معنا</h3>
                            <router-link to="/" class="flex flex-col gap-1 "
                                v-for="(link, index) in ['واتساب :009612345678932', 'موبايل :009612345678932', 'البريد :https://salla.sa']"
                                :key="index">
                                <span class="flex gap-1 items-center">
                                    <img src="@/assets/imgs/doubleArrow.png" alt="doubleArrow" class="object-contain">
                                    <span class="text-base text-gray-400 hover:text-blue-500 text-wrap w-[80%] ">{{ link
                                    }}</span>
                                </span>
                            </router-link>
                        </div>

                        <!-- 5 -->
                        <div class="flex flex-col gap-4">
                            <h3 class="text-lg text-gray-600 font-medium">تابعنا على</h3>
                            <div class="flex gap-2">
                                <span class="rounded-full flex justify-center items-center w-[34px] h-[34px] border-[1px]"
                                    v-for="(social, index) in ['facebook.png', 'twitter.png', 'instagram.png', 'snapchat.png']"
                                    :key="index">
                                    <img :src="getImg(social)" alt="social" class="object-contain">
                                </span>
                            </div>

                        </div>
                    </section>
                </div>
            </section>
            <!-- Rights -->
            <section class="bg-gray-950 py-4 px-2 text-white">
                <div class="container mx-auto">
                    <section class="flex flex-wrap gap-6 items-center">
                        <!-- 1 -->
                        <div class="flex-1">
                            الحقوق محفوظة لمنصة سلة &copy; 2023
                        </div>
                        <!-- 2 -->
                        <div class="flex gap-2 items-center">
                            <img src="@/assets/imgs/addValue.png" alt="addValue" class="object-contain">
                            <p>الرقم الضريبي : 32232323234 </p>

                        </div>
                        <!-- 3 -->
                        <div class="flex gap-2">
                            <div class="rounded-md bg-white w-16 h-8 flex justify-center items-center overflow-hidden"
                                v-for="(credit, index) in ['credit-1.png', 'credit-2.png', 'credit-3.png', 'credit-4.png']"
                                :key="index">
                                <img :src="getImg(credit)" alt="addValue" class="object-contain">
                            </div>
                        </div>
                    </section>
                </div>
            </section>

        </section>
    </footer>
</template>

<script setup>

// bind img 
const getImg = (name) => {
    return new URL(`../assets/imgs/${name}`, import.meta.url).href
}
</script>
