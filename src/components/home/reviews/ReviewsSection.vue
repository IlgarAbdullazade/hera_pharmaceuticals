<template>
  <section class="reviews">
    <div class="reviews__container">
      <div class="reviews__wrapper">
        <div class="reviews__content">
          <hera-heading class="reviews__title">
            Our
            <strong class="text-primary">Reviews</strong></hera-heading
          >
        </div>
        <div class="reviews__empty" v-if="error">
          <hera-error-block />
        </div>
        <div class="reviews__shimmers" v-if="isLoading">
          <hera-review-shimmer />
          <hera-review-shimmer class="max-sm:hidden" />
          <hera-review-shimmer class="max-lg:hidden" />
          <hera-review-shimmer class="max-xl:hidden" />
        </div>
        <template v-if="reviews">
          <hera-reviews-slider class="reviews__slider" v-if="reviews.length" />
          <div class="reviews__empty" v-else>
            <hera-empty-block text="reviews" />
          </div>
        </template>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapState, mapActions } from "vuex";
import HeraHeading from "@/components/UI/Heading.vue";
import HeraReviewsSlider from "@/components/home/reviews/ReviewsSlider.vue";
import HeraReviewShimmer from "@/components/home/reviews/ReviewShimmer.vue";
import HeraEmptyBlock from "@/components/common/EmptyBlock.vue";
import HeraErrorBlock from "@/components/common/ErrorBlock.vue";

export default {
  name: "HeraReviewsSection",
  components: {
    HeraHeading,
    HeraReviewsSlider,
    HeraReviewShimmer,
    HeraEmptyBlock,
    HeraErrorBlock,
  },
  computed: {
    ...mapState({
      isLoading: (state) => state.reviews.isLoading,
      error: (state) => state.reviews.error,
    }),
    ...mapGetters({
      reviews: "reviews/reviews",
    }),
  },
  methods: {
    ...mapActions({
      getReviewList: "reviews/getReviewList",
    }),
  },
  mounted() {
    this.getReviewList();
  },
};
</script>

<style lang="scss" scoped>
.reviews {
  // .reviews__container

  &__container {
  }

  // .reviews__wrapper

  &__wrapper {
  }

  // .reviews__content

  &__content {
  }

  // .reviews__title

  &__title {
    @apply mb-20;
  }

  // .reviews__slider

  &__slider {
  }

  // .reviews__empty

  &__slider {
  }

  // .reviews__shimmers

  &__shimmers {
    @apply flex gap-5;
  }
}
</style>
