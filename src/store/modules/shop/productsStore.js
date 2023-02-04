import shop from "@/mock/shop";
import shopApi from "@/network/api/shopApi";

export const productsStore = {
  state: () => ({
    data: null,
    isLoading: false,
    error: null,
  }),
  getters: {
    productList: (state) => state.data?.products,
    paginator: (state) => state.data?.paginator,
  },
  mutations: {
    setData(state, data) {
      state.data = data;
    },
    setLoading(state, bool) {
      state.isLoading = bool;
    },
    setError(state, error) {
      state.error = error;
    },
  },
  actions: {
    async getProducts({ commit }, params) {
      try {
        commit("setData", null);
        commit("setLoading", true);
        const response = await shopApi.getProducts(params);
        commit("setData", response.data);
        commit("setError", null);
        return response;
      } catch (e) {
        commit("setError", e.message);
      } finally {
        commit("setLoading", false);
      }
    },
    async searchProduct({ commit }, params) {
      try {
        commit("setData", null);
        commit("setLoading", true);
        const response = await shopApi.searchProduct(params);
        commit("setData", response.data);
        commit("setError", null);
        return response;
      } catch (e) {
        commit("setError", e.message);
      } finally {
        commit("setLoading", false);
      }
    },
  },
  namespaced: true,
};
