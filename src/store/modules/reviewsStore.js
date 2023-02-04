import reviewsApi from "@/network/api/reviewsApi";

export const reviewsStore = {
  state: () => ({
    reviews: null,
    userReviews: null,
    isLoading: false,
    error: null,
  }),
  getters: {
    reviews: (state) => state.reviews,
    userReviews: (state) => state.userReviews?.reviews,
    paginator: (state) => state.userReviews?.paginator,
  },
  mutations: {
    setReviews(state, data) {
      state.reviews = data;
    },
    setUserReviews(state, data) {
      state.userReviews = data;
    },
    setLoading(state, bool) {
      state.isLoading = bool;
    },
    setError(state, error) {
      state.error = error;
    },
  },
  actions: {
    async getReviewList({ commit }) {
      try {
        commit("setReviews", null);
        commit("setLoading", true);
        const response = await reviewsApi.getReviewList();
        commit("setReviews", response.data);
        commit("setError", null);
        return response;
      } catch (e) {
        commit("setError", e.message);
      } finally {
        commit("setLoading", false);
      }
    },
    async getUserReviews({ commit }, params) {
      try {
        commit("setUserReviews", null);
        commit("setLoading", true);
        const response = await reviewsApi.getUserReviews(params);
        commit("setUserReviews", response.data);
        commit("setError", null);
        return response;
      } catch (e) {
        commit("setError", e.message);
      } finally {
        commit("setLoading", false);
      }
    },
    async addReview({ commit }, { params, image }) {
      try {
        commit("setLoading", true);
        const response = await reviewsApi.addReview(params, image);
        return response;
      } catch (e) {
        commit("setError", e.message);
      } finally {
        commit("setLoading", false);
      }
    },
    async editReview({ commit }, params) {
      try {
        commit("setLoading", true);
        const response = await reviewsApi.editReview(params);
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
