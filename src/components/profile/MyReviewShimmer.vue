<template>
  <div class="my-review-item">
    <div class="my-review-item__wrapper">
      <div class="my-review-item__content">
        <div class="my-review-item__image">
          <hera-shimmer :classes="['aspect-square', 'h-full', 'w-full']" />
        </div>
        <div class="my-review-item__info">
          <div class="my-review-item__title">
            <hera-shimmer :classes="['h-5', 'w-1/2']" />
          </div>
          <p class="my-review-item__text">
            <hera-shimmer :classes="['h-3', 'w-full', 'mb-1']" />
            <hera-shimmer :classes="['h-3', 'w-3/4']" />
          </p>
        </div>
      </div>
      <div class="my-review-item__button">
        <hera-shimmer :classes="['h-5', 'w-full']" />
      </div>
    </div>
  </div>
</template>
<script>
import HeraShimmer from "@/components/common/Shimmer.vue";

export default {
  name: "HeraMyReviewItem",
  components: {
    HeraShimmer,
  },
};
</script>

<style lang="scss" scoped>
.my-review-item {
  // .my-review-item__wrapper

  &__wrapper {
    @apply flex gap-8 rounded-2xl bg-bgPrimary p-3 max-lg:flex-col max-lg:gap-2.5;
  }

  // .my-review-item__content

  &__content {
    @apply flex w-full items-center gap-4;
  }

  // .my-review-item__image

  &__image {
    @apply aspect-square h-20 w-20 shrink-0 overflow-hidden rounded-2xl;
  }

  // .my-review-item__info

  &__info {
    @apply w-full;
  }

  // .my-review-item__title

  &__title {
    @apply mb-3 w-full;
  }

  // .my-review-item__text

  &__text {
    @apply font-medium text-textSecondary line-clamp-2;
  }

  // .my-review-item__button

  &__button {
    @apply w-28;
  }
}
</style>
