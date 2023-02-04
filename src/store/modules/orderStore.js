import orderApi from "@/network/api/orderApi";

export const orderStore = {
  state: () => ({
    data: null,
    isLoading: false,
    error: null,
  }),
  getters: {
    orderList: (state) => state.data?.orders,
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
    async getOrderList({ commit }) {
      try {
        commit("setData", null);
        commit("setLoading", true);
        const response = await orderApi.getOrderList();
        commit("setData", response.data);
        commit("setError", null);
        return response;
      } catch (e) {
        commit("setError", e.message);
      } finally {
        commit("setLoading", false);
      }
    },
    async checkout({ commit }, params) {
      try {
        commit("setLoading", true);
        const response = await orderApi.checkout(params);
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
