import shopApi from "@/network/api/shopApi";

export const categoriesStore = {
  state: () => ({
    data: null,
    selectedCategory: "all",
    isLoading: false,
    error: null,
  }),
  getters: {
    categories: (state) => state.data,
    selectedCategory: (state) => state.selectedCategory,
  },
  mutations: {
    setData(state, data) {
      state.data = data;
    },
    setSelectedCategory(state, data) {
      state.selectedCategory = data;
    },
    setLoading(state, bool) {
      state.isLoading = bool;
    },
    setError(state, error) {
      state.error = error;
    },
  },
  actions: {
    async getCategories({ commit }) {
      try {
        commit("setData", null);
        commit("setLoading", true);
        const response = await shopApi.getCategories();
        commit("setData", response.data);
        commit("setError", null);
        return response;
      } catch (e) {
        commit("setError", e.message);
      } finally {
        commit("setLoading", false);
      }
    },
    selectCategory: ({ commit }, category) => {
      commit("setSelectedCategory", null);
      commit("setSelectedCategory", category);
    },
  },
  namespaced: true,
};
