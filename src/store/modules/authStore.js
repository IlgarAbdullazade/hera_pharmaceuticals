import authApi from "@/network/api/authApi";
import userApi from "@/network/api/userApi";
import { setItem, removeItem } from "@/helpers/persistanceStorage";
import { useToast } from "vue-toastification";
const toast = useToast();

export const authStore = {
  state: () => ({
    isLoading: false,
    currentUser: null,
    userAddress: null,
    error: null,
    isLoggedIn: false,
  }),
  getters: {
    currentUser: (state) => {
      return state.currentUser;
    },
    userAddress: (state) => {
      return state.userAddress;
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
    setAddress(state, payload) {
      state.userAddress = payload;
    },
    setError(state, error) {
      state.error = error;
    },
    setIsLoggedIn(state, bool) {
      state.isLoggedIn = bool;
    },
  },
  actions: {
    async login({ commit, dispatch }, credentials) {
      try {
        commit("setLoading", true);
        const response = await authApi.login(credentials);
        dispatch("actionsAfterSignIn", response);
      } catch (res) {
        commit("setError", res);
        toast.error(res.response.data.detail);
      } finally {
        commit("setLoading", false);
      }
    },
    async register({ commit, dispatch }, credentials) {
      try {
        commit("setLoading", true);
        const response = await authApi.register(credentials);
        dispatch("actionsAfterSignIn", response);
      } catch (res) {
        commit("setError", res);
        toast.error(res.response.data.detail);
      } finally {
        commit("setLoading", false);
      }
    },
    async refreshToken({ commit }) {
      try {
        commit("setLoading", true);
        const response = await authApi.refreshToken();
        setItem("accessToken", response.data.access_token);
        setItem("refreshToken", response.data.refresh_token);
        return response;
      } catch (res) {
        commit("setError", res);
        dispatch("logout");
      } finally {
        commit("setLoading", false);
      }
    },
    async getUser({ commit }) {
      try {
        commit("setLoading", true);
        const response = await userApi.getUser();
        commit("setUser", response.data);
        commit("setError", null);
        commit("setIsLoggedIn", true);
      } catch (res) {
        commit("setError", res);
      } finally {
        commit("setLoading", false);
      }
    },
    async getAddress({ commit }) {
      try {
        commit("setLoading", true);
        const response = await userApi.getAddress();
        commit("setAddress", response.data);
      } catch (res) {
        commit("setError", res);
      } finally {
        commit("setLoading", false);
      }
    },
    async changeEmail({ commit }) {
      try {
        commit("setLoading", true);
        return await userApi.changeEmail();
      } catch (res) {
        commit("setError", res);
        //toast.error(res.response.data.detail);
      } finally {
        commit("setLoading", false);
      }
    },
    async confirmEmailChange({ commit, dispatch }, params) {
      try {
        commit("setLoading", true);
        const response = await userApi.confirmEmailChange(params);
        dispatch("actionsAfterSignIn", response);
        toast.success("Your Email was successfully changed.");
        return response;
      } catch (res) {
        commit("setError", res);
        toast.error(res.response.data.detail);
      } finally {
        commit("setLoading", false);
      }
    },
    async changePassword({ commit, dispatch }, params) {
      try {
        commit("setLoading", true);
        const response = await userApi.changePassword(params);
        dispatch("actionsAfterSignIn", response);
        toast.success("Your password was successfully changed.");
      } catch (res) {
        commit("setError", res);
        toast.error(res.response.data.detail);
      } finally {
        commit("setLoading", false);
      }
    },
    async changeAddress({ commit }, params) {
      try {
        commit("setLoading", true);
        const response = await userApi.changeAddress(params);
        commit("setAddress", response.data);
        toast.success("Your address was successfully changed.");
        return response;
      } catch (res) {
        commit("setError", res);
        toast.error(res.response.data.detail);
      } finally {
        commit("setLoading", false);
      }
    },
    actionsAfterSignIn({ commit }, response) {
      commit("setUser", response.data.user);
      commit("setError", null);
      commit("setIsLoggedIn", true);
      setItem("accessToken", response.data.access_token);
      setItem("refreshToken", response.data.refresh_token);
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
