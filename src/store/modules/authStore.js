import { removeItem } from "@/helpers/persistanceStorage";

export const authStore = {
  state: () => ({
    isLoading: false,
    currentUser: null,
    validationErrors: null,
    isLoggedIn: false,
  }),
  getters: {
    currentUser: (state) => {
      return state.currentUser;
    },
    isLoggedIn: (state) => {
      return !!state.isLoggedIn;
    },
  },
  mutations: {
    setLoading(state, bool) {
      state.isLoading = bool;
    },
    setUser(state, payload) {
      state.currentUser = payload;
    },
    setValidationErrors(state, errors) {
      state.validationErrors = errors;
    },
    setIsLoggedIn(state, bool) {
      state.isLoggedIn = bool;
    },
  },
  actions: {
    async login({ commit }, credentials) {
      try {
        commit("setLoading", true);
        commit("setIsLoggedIn", true);
      } catch (res) {
        commit("setValidationErrors", res);
      } finally {
        commit("setLoading", false);
      }
    },
    async register({ commit }, credentials) {
      try {
        commit("setLoading", true);
        commit("setIsLoggedIn", true);
      } catch (res) {
        commit("setValidationErrors", res);
      } finally {
        commit("setLoading", false);
      }
    },
    logout({ commit }) {
      removeItem("accessToken");
      removeItem("refreshToken");
      commit("setUser", null);
      commit("setIsLoggedIn", false);
    },
  },
  namespaced: true,
};
