<template>
  <div class="page__faq faq">
    <div class="faq__container">
      <div class="faq__wrapper">
        <div class="faq__empty" v-if="error">
          <hera-error-block />
        </div>
        <template v-if="isLoading">
          <div class="faq__item faq-item" v-for="index in 10" :key="index">
            <div class="faq-item__wrapper">
              <h4 class="faq-item__title">
                <hera-shimmer :classes="['h-5', 'w-1/4', 'mb-4']" />
              </h4>
              <p class="faq-item__text">
                <hera-shimmer :classes="['h-5', 'w-full', 'mb-2']" />
                <hera-shimmer :classes="['h-5', 'w-full', 'mb-2']" />
                <hera-shimmer :classes="['h-5', 'w-1/2', 'mb-2']" />
              </p>
            </div>
          </div>
        </template>
        <template v-if="faqList">
          <template v-if="faqList.length">
            <div
              class="faq__item faq-item"
              v-for="(faq, index) in faqList"
              :key="index"
            >
              <div class="faq-item__wrapper">
                <h4 class="faq-item__title">{{ faq.title }}</h4>
                <p class="faq-item__text">
                  {{ faq.description }}
                </p>
              </div>
            </div>
          </template>
          <div class="faq__empty" v-else>
            <hera-empty-block text="FAQs" />
          </div>
        </template>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions, mapGetters } from "vuex";
import HeraShimmer from "@/components/common/Shimmer.vue";
import HeraEmptyBlock from "@/components/common/EmptyBlock.vue";
import HeraErrorBlock from "@/components/common/ErrorBlock.vue";

export default {
  name: "FaqView",
  components: {
    HeraShimmer,
    HeraEmptyBlock,
    HeraErrorBlock,
  },
  computed: {
    ...mapState({
      isLoading: (state) => state.faq.isLoading,
      error: (state) => state.faq.error,
    }),
    ...mapGetters({
      faqList: "faq/faqList",
    }),
  },
  methods: {
    ...mapActions({
      getFaqList: "faq/getFaqList",
    }),
  },
  mounted() {
    this.getFaqList();
  },
};
</script>

<style lang="scss" scoped>
.faq {
  // .faq__container

  &__container {
  }

  // .faq__wrapper

  &__wrapper {
    @apply flex flex-col gap-2.5 rounded-3xl bg-white p-7;
  }

  // .faq__item

  &__item {
  }

  // .faq__emtpy

  &__empty {
    @apply py-20;
  }
}
.faq-item {
  // .faq-item__wrapper

  &__wrapper {
    @apply rounded-2xl bg-bgPrimary p-7;
  }

  // .faq-item__title

  &__title {
    @apply mb-2.5 text-base font-medium;
  }

  // .faq-item__content

  &__content {
    @apply flex gap-4 max-lg:flex-col max-lg:gap-2.5;
  }

  // .faq-item__text

  &__text {
    @apply text-textSecondary last:mb-0;
  }

  // .faq-item__point

  &__point {
    @apply relative block pl-4 text-primary;
    @apply before:absolute before:top-1/2 before:left-0 before:h-2 before:w-2 before:-translate-y-1/2 before:rounded-full before:border-2 before:border-bgElement before:bg-primary before:content-[''];
  }
}
</style>
