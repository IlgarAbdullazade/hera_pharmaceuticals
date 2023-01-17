<template>
  <hera-header :class="{ _absolute: this.$route.name === 'home' }" />
  <main
    class="page"
    :class="[this.$route.name !== 'home' && ['pt-20', 'max-lg:pt-12']]"
  >
    <router-view />
  </main>

  <hera-footer />
</template>

<script>
import { mapActions } from "vuex";
import HeraHeader from "@/components/header/Header.vue";
import HeraFooter from "@/components/footer/Footer.vue";

export default {
  name: "App",
  components: {
    HeraHeader,
    HeraFooter,
  },
  methods: {
    ...mapActions({
      onResize: "adaptive/onResize",
    }),
    setTheme(theme) {
      localStorage.setItem("user-theme", theme);
      this.userTheme = theme;
      document.documentElement.className = theme;
    },
  },
  mounted() {
    this.onResize();
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
