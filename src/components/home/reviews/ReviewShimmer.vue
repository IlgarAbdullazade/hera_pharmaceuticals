<template>
  <div class="review-shimmer">
    <div class="review-shimmer__wrapper">
      <div class="review-shimmer__image">
        <hera-shimmer :classes="['aspect-square', 'h-full', 'w-full']" />
      </div>
      <div class="review-shimmer__title">
        <hera-shimmer :classes="['h-7', 'w-1/2', 'mb-2', 'mx-auto']" />
      </div>
      <div class="review-shimmer__text">
        <hera-shimmer class="w-full" :classes="['h-4', 'w-full', 'mb-1']" />
        <hera-shimmer class="w-full" :classes="['h-4', 'w-full', 'mb-1']" />
        <hera-shimmer class="w-full" :classes="['h-4', 'w-1/2', 'mx-auto']" />
      </div>
    </div>
  </div>
</template>

<script>
import HeraShimmer from "@/components/common/Shimmer.vue";

export default {
  name: "HeraReviewShimmer",
  components: {
    HeraShimmer,
  },
};
</script>

<style lang="scss" scoped>
.review-shimmer {
  @apply w-full;
  // .review-shimmer__wrapper

  &__wrapper {
    @apply flex flex-col items-center rounded-[30px] bg-white p-6 text-center;
  }

  // .review-shimmer__image

  &__image {
    @apply mb-5 aspect-square w-full overflow-hidden rounded-[30px] pb-[100%];
  }

  // .review-shimmer__title

  &__title {
    @apply mb-2 w-full;
  }

  // .review-shimmer__text

  &__text {
    @apply w-full;
  }
}
</style>
