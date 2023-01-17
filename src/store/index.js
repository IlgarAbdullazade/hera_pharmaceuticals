import { createStore } from "vuex";
import { adaptiveStore } from "@/store/modules/adaptiveStore";

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    adaptive: adaptiveStore,
  },
});
