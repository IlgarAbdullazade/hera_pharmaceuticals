import shopApi from "@/network/api/shopApi";

export const productStore = {
  state: () => ({
    data: null,
    isLoading: false,
    error: null,
  }),
  getters: {
    product: (state) => state.data,
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
    async getProduct({ commit }, params) {
      try {
        commit("setData", null);
        commit("setLoading", true);
        const response = await shopApi.getProduct(params);
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
