import shopApi from "@/network/api/shopApi";

export const labtestsStore = {
  state: () => ({
    data: null,
    isLoading: false,
    error: null,
  }),
  getters: {
    labtestList: (state) => state.data?.products,
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
    async getLabtests({ commit }, params) {
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
    async getLabtest({ commit }, slug) {
      try {
        return await shopApi.getLabtest(slug);
      } catch (e) {
        commit("setError", e.message);
      }
    },
  },
  namespaced: true,
};
