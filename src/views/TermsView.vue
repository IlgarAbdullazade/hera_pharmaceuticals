<template>
  <div class="page__terms terms">
    <div class="terms__container">
      <div class="terms__wrapper">
        <div class="terms__empty" v-if="error">
          <hera-error-block />
        </div>
        <div class="terms__content" v-if="isLoading">
          <h2 class="terms__title">
            <hera-shimmer :classes="['h-7', 'w-1/4', 'mb-4']" />
          </h2>
          <hera-shimmer
            v-for="index in 30"
            :key="index"
            :classes="['h-4', 'w-full', 'mb-2']"
          />
        </div>
        <div class="terms__content" v-if="page">
          <h2 class="terms__title">{{ page.title }}</h2>
          <hera-paragraph class="terms__text">{{
            page.description
          }}</hera-paragraph>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
import HeraParagraph from "@/components/UI/Paragraph.vue";
import HeraShimmer from "@/components/common/Shimmer.vue";
import HeraErrorBlock from "@/components/common/ErrorBlock.vue";

export default {
  name: "TermsView",
  components: {
    HeraParagraph,
    HeraShimmer,
    HeraErrorBlock,
  },
  computed: {
    ...mapState({
      isLoading: (state) => state.page.isLoading,
      error: (state) => state.page.error,
    }),
    ...mapGetters({
      page: "page/page",
    }),
  },
  methods: {
    ...mapActions({
      getPage: "page/getPage",
    }),
  },
  mounted() {
    this.getPage(this.$route.meta.slug);
  },
};
</script>

<style lang="scss" scoped>
.terms {
  // .terms__container

  &__container {
  }

  // .terms__wrapper

  &__wrapper {
    @apply flex flex-col gap-2.5 rounded-3xl bg-white p-7;
  }

  // .terms__content

  &__content {
  }

  // .terms__title

  &__title {
    @apply mb-6 text-2xl;
  }

  // .terms__text

  &__text {
  }

  // .terms__emtpy

  &__empty {
    @apply py-20;
  }
}
</style>
