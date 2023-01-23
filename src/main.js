import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import ValidationRules from "./plugins/ValidationRules";
import VueFinalModal from "vue-final-modal";
import HeraCustomModal from "@/components/common/CustomModal.vue";

import "./assets/scss/main.scss";

const app = createApp(App);

app
  .use(store)
  .use(router)
  .use(ValidationRules)
  .use(VueFinalModal)
  .component("HeraCustomModal", HeraCustomModal)
  .mount("#app");
