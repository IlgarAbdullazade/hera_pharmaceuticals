import shop from "@/mock/shop";

export const productsStore = {
  state: () => ({
    data: shop.products,
    isLoading: false,
    error: null,
  }),
  getters: {
    products: (state) => state.data,
    getProductsByCategory: (state) => (category) =>
      state.data.filter((product) => product.category.slug === category),
    getProductById: (state) => (id) =>
      state.data.find((product) => product.id === id),
  },
  mutations: {},
  actions: {},
  namespaced: true,
};
