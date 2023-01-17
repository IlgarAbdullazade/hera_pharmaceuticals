export const adaptiveStore = {
  state: () => ({
    tablet: false,
  }),
  getters: {
    isTablet: (state) => {
      return state.tablet;
    },
  },
  mutations: {
    setTabletStatus(state, bool) {
      state.tablet = bool;
    },
  },
  actions: {
    onResize({ commit }) {
      commit("setTabletStatus", window.innerWidth < 1024);
    },
  },
  namespaced: true,
};
