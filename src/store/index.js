import { createStore } from "vuex";
import { adaptiveStore } from "@/store/modules/adaptiveStore";
import { authStore } from "@/store/modules/authStore";
import { categoriesStore } from "@/store/modules/categoriesStore";
import { shopStore } from "@/store/modules/shop/shopStore";
import { cartStore } from "@/store/modules/cartStore";
import { reviewsStore } from "@/store/modules/reviewsStore";
import { labtestsStore } from "@/store/modules/labtestsStore";
import { orderStore } from "@/store/modules/orderStore";
import { faqStore } from "@/store/modules/faqStore";
import { contactsStore } from "@/store/modules/contactsStore";
import { pageStore } from "@/store/modules/pageStore";

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    adaptive: adaptiveStore,
    auth: authStore,
    categories: categoriesStore,
    shop: shopStore,
    cart: cartStore,
    reviews: reviewsStore,
    labtests: labtestsStore,
    order: orderStore,
    faq: faqStore,
    contacts: contactsStore,
    page: pageStore,
  },
});
