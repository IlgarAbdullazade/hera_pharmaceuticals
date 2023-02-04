import contactsApi from "@/network/api/contactsApi";
import { useToast } from "vue-toastification";
const toast = useToast();

export const contactsStore = {
  state: () => ({
    data: null,
    isLoading: false,
    error: null,
  }),
  getters: {},
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
    async getInTouch({ commit }, params) {
      try {
        commit("setLoading", true);
        const response = await contactsApi.getInTouch(params);
        toast.success("Your inquiry has been successfully submitted.");
        commit("setError", null);
        return response;
      } catch (e) {
        commit("setError", e.message);
        toast.error(e.response.data.detail);
      } finally {
        commit("setLoading", false);
      }
    },
  },
  namespaced: true,
};
