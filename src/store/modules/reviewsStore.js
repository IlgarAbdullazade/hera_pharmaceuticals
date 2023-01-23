import reviews from "@/mock/reviews";

export const reviewsStore = {
  state: () => ({
    data: reviews,
    isLoading: false,
    error: null,
  }),
  getters: {
    reviews: (state) => state.data,
  },
  mutations: {},
  actions: {},
  namespaced: true,
};
