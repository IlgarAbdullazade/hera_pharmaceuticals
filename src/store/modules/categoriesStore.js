import shop from "@/mock/shop";

export const categoriesStore = {
  state: () => ({
    data: shop.categories,
    isLoading: false,
    error: null,
  }),
  getters: {
    categories: (state) => state.data,
  },
  mutations: {},
  actions: {},
  namespaced: true,
};
