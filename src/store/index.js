import { createStore } from "vuex";
import { adaptiveStore } from "@/store/modules/adaptiveStore";
import { authStore } from "@/store/modules/authStore";
import { categoriesStore } from "@/store/modules/categoriesStore";
import { productsStore } from "@/store/modules/productsStore";
import { cartStore } from "@/store/modules/cartStore";
import { reviewsStore } from "@/store/modules/reviewsStore";

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    adaptive: adaptiveStore,
    auth: authStore,
    categories: categoriesStore,
    products: productsStore,
    cart: cartStore,
    reviews: reviewsStore,
  },
});
