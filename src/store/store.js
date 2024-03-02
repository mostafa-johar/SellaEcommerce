import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useStore = defineStore("products", () => {
  /*============
  -- State
  ==============*/
  const products = ref([
    {
      id: 1,
      img: "product-1.jpg",
      title: "سماعات",
      decripeOne: "سماعة ساوند كور كيو30 فوق الاذن",
      decripeTwo: "سماعة ذات صوت عالي الدقة",
      cPrice: 400,
      oPrice: 500,
      status: "خصم 25%",
      isPremuim: true,
      isSpecial: false,
      typed: "isPremuim",
    },
    {
      id: 2,
      img: "product-7.jpg",
      title: "سماعات",
      decripeOne: "سماعات ايربودز 3 سيم اوريجينال",
      decripeTwo: "سماعة ذات صوت عالي الدقة",
      cPrice: 200,
      oPrice: 500,
      status: "خصم 25%",
      isPremuim: true,
      isSpecial: false,
      typed: "isPremuim",
    },

    {
      id: 3,
      img: "product-3.jpg",
      title: "موبايلات",
      decripeOne: "ابل ايباد برو 12.9 بوصة واي فاي",
      decripeTwo: "شاشة ليكويد ريتينا اكس دي ار رائعة مقاس 11",
      cPrice: 300,
      oPrice: 500,
      status: "خصم 25%",
      isPremuim: true,
      isSpecial: false,
      typed: "isPremuim",
    },
    {
      id: 4,
      img: "product-4.jpg",
      title: "سماعات",
      decripeOne: "سماعة ساوند كور كيو30 فوق الاذن",
      decripeTwo: "سماعة ذات صوت عالي الدقة",
      cPrice: 350,
      oPrice: 500,
      status: "خصم 25%",
      isPremuim: true,
      isSpecial: false,
      typed: "isPremuim",
    },
    {
      id: 5,
      img: "product-5.jpg",
      title: "ساعات",
      decripeOne: "ساعة ذكية جديدة من سلسلة 8",
      decripeTwo: "سوار رياضي اسود - عادي.",
      cPrice: 350,
      oPrice: 500,
      status: "خصم 25%",
      isNew: true,
      isPremuim: true,
      isSpecial: false,
      typed: "isPremuim",
    },
    {
      id: 6,
      img: "product-6.jpg",
      title: "سماعات",
      decripeOne: "سماعات ايربودز 3 سيم اوريجينال",
      decripeTwo: "سماعة ذات صوت عالي الدقة",
      cPrice: 450,
      oPrice: 500,
      status: "جديد",
      isNew: true,
      isPremuim: true,
      isSpecial: false,
      typed: "isPremuim",
    },
    {
      id: 7,
      img: "product-7.jpg",
      title: "ساعات",
      decripeOne: "ساعة ذكية جديدة من سلسلة 8",
      decripeTwo: "سوار رياضي اسود - عادي.",
      cPrice: 450,
      oPrice: 500,
      status: "خصم 25%",
      isNew: true,
      isPremuim: true,
      isSpecial: false,
      typed: "isPremuim",
    },

    {
      id: 8,
      img: "product-8.jpg",
      title: "ساعات",
      decripeOne: "ساعة ذكية جديدة من سلسلة 8",
      decripeTwo: "سوار رياضي اسود - عادي.",
      cPrice: 450,
      oPrice: 500,
      status: "جديد",
      isNew: true,
      isPremuim: true,
      isSpecial: false,
      typed: "isPremuim",
    },
    {
      id: 9,
      img: "product-9.jpg",
      title: "موبايلات",
      decripeOne: "موبايل سمارت سامسونج جالاكسي",
      decripeTwo: "موبايلات ذات صوت عالي الدقة",
      cPrice: 450,
      oPrice: 500,
      status: "",
      isNew: false,
      isPremuim: false,
      isSpecial: true,
      typed: "isSpecial",
    },
    {
      id: 10,
      img: "product-10.png",
      title: "سماعات",
      decripeOne: "سماعات ايربودز 3 سيم اوريجينال",
      decripeTwo: "سماعة ذات صوت عالي الدقة",
      cPrice: 450,
      oPrice: 500,
      status: "",
      isNew: false,
      isPremuim: false,
      isSpecial: true,
      typed: "isSpecial",
    },

    {
      id: 11,
      img: "product-11.png",
      title: "ساعات",
      decripeOne: "ابل ايباد برو 12.9 بوصة واي فاي",
      decripeTwo: "شاشة ليكويد ريتينا اكس دي ار رائعة مقاس 11",
      cPrice: 450,
      oPrice: 500,
      status: "خصم 25%",
      isNew: false,
      isPremuim: false,
      isSpecial: true,
      typed: "isSpecial",
    },
    {
      id: 12,
      img: "product-12.png",
      title: "سماعات",
      decripeOne: "ساعة ساوند كور كيو30 فوق الاذن",
      decripeTwo: "سماعة ذات صوت عالي الدقة",
      cPrice: 400,
      oPrice: 500,
      status: "",
      isNew: false,
      isPremuim: false,
      isSpecial: true,
      typed: "isSpecial",
    },
    {
      id: 13,
      img: "product-13.png",
      title: "موبايلات",
      decripeOne: "موبايلات ذكية جديدة من سلسلة 8",
      decripeTwo: "سوار رياضي اسود - عادي.",
      cPrice: 300,
      oPrice: 500,
      status: "",
      isNew: false,
      isPremuim: false,
      isSpecial: true,
      typed: "isSpecial",
    },
    {
      id: 14,
      img: "product-14.png",
      title: "موبايلات",
      decripeOne: "موبايل ابل ايفون 14 (128 جيجابايت) ",
      decripeTwo: "شاشة سوبر ريتينا XDR مقاس 6.1 بوصة",
      cPrice: 200,
      oPrice: 500,
      status: "جديد",
      isNew: false,
      isPremuim: false,
      isSpecial: true,
      typed: "isSpecial",
    },
    {
      id: 15,
      img: "product-15.png",
      title: "سماعات",
      decripeOne: "سماعات ايربودز 3 سيم اوريجينال",
      decripeTwo: "سماعة ذات صوت عالي الدقة",
      cPrice: 450,
      oPrice: 500,
      status: "خصم 25%",
      isNew: false,
      isPremuim: false,
      isSpecial: true,
      typed: "isSpecial",
    },

    {
      id: 16,
      img: "product-16.png",
      title: "موبايلات",
      decripeOne: "موبايل ابل ايفون 14 (128 جيجابايت) ",
      decripeTwo: "شاشة سوبر ريتينا XDR مقاس 6.1 بوصة",
      cPrice: 200,
      oPrice: 500,
      status: "جديد",
      isNew: false,
      isPremuim: false,
      isSpecial: true,
      typed: "isSpecial",
    },
  ]);

  const cartBox = ref([]);

  /*============
    -- Actions
    ==============*/

  // add product to cart
  function addCountCart(n) {
    cartBox.value.push(n);
  }
  // total price
  const totalPrice = computed(() => {
    let quantityMutliPrice = cartBox.value.map((n) => {
      return n.cPrice * n.quantity;
    });
    return quantityMutliPrice.reduce((c, p) => {
      return c + p;
    }, 0);
  });

  // total count
  const totalCount = computed(() => {
    let arr = [];
    cartBox.value.map((n) => {
      arr.push(n.quantity);
    });

    return arr.reduce((p, c) => {
      return c + p;
    }, 0);
  });

  function giveProduct(typed) {
    if (typed == "All") {
      return products.value;
    } else if (typed == "isNew") {
      return products.value.filter((prod) => {
        return prod.isNew;
      });
    } else {
      return products.value.filter((prod) => {
        return typed == prod.typed;
      });
    }
  }

  // increase count product
  const add = (index) => cartBox.value[index].quantity++;
  // decrease count Product
  const minus = (index) =>
    cartBox.value[index].quantity !== 0
      ? cartBox.value[index].quantity--
      : (cartBox.value[index].quantity = 0);

  // delete product
  function deleteProduct(id) {
    cartBox.value = cartBox.value.filter((cart) => {
      return cart.id !== id;
    });
  }
  // bind img
  const getImg = (name) => {
    return new URL(`../assets/imgs/${name}`, import.meta.url).href;
  };

  return {
    getImg,
    products,
    totalPrice,
    addCountCart,
    cartBox,
    deleteProduct,
    add,
    minus,
    totalCount,
    giveProduct,
  };
});
