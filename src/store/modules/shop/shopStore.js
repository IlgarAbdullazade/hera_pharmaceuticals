import { productsStore } from "./productsStore";
import { productStore } from "./productStore";

export const shopStore = {
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    products: productsStore,
    product: productStore,
  },
  namespaced: true,
};
