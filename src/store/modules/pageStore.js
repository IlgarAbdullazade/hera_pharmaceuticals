import pageApi from "@/network/api/pageApi";

export const pageStore = {
  state: () => ({
    data: null,
    isLoading: false,
    error: null,
  }),
  getters: {
    page: (state) => state.data,
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
    async getPage({ commit }, slug) {
      try {
        commit("setData", null);
        commit("setLoading", true);
        const response = await pageApi.getPage(slug);
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
