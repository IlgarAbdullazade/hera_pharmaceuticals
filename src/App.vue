<template>
  <hera-header :class="{ _absolute: this.$route.name === 'home' }" />

  <main
    class="page"
    :class="[this.$route.name !== 'home' && ['pt-20', 'max-lg:pt-12']]"
  >
    <router-view />

    <modals-container></modals-container>
  </main>

  <hera-footer />
</template>

<script>
import { mapActions } from "vuex";
import { ModalsContainer } from "vue-final-modal";
import { getItem } from "@/helpers/persistanceStorage";
import HeraHeader from "@/components/header/Header.vue";
import HeraFooter from "@/components/footer/Footer.vue";

export default {
  name: "App",
  components: {
    HeraHeader,
    HeraFooter,
    ModalsContainer,
  },
  methods: {
    ...mapActions({
      onResize: "adaptive/onResize",
      getUser: "auth/getUser",
      getCart: "cart/getCart",
    }),
  },
  mounted() {
    this.onResize();
    if (getItem("accessToken")) {
      this.getUser().then(() => this.getCart());
    }
  },
  created() {
    window.addEventListener("resize", this.onResize);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.onResize);
  },
};
</script>

<style lang="scss"></style>
