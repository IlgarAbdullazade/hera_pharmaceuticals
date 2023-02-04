<template>
  <div class="review-item">
    <div class="review-item__wrapper">
      <div class="review-item__image review-item-ibg-cover">
        <img :src="review.image" :alt="review.title" />
      </div>
      <hera-caption class="review-item__title">{{ review.title }}</hera-caption>
      <p class="review-item__text">
        {{ review.text }}
      </p>
    </div>
  </div>
</template>

<script>
import HeraCaption from "@/components/UI/Caption.vue";

export default {
  name: "HeraReviewItem",
  components: {
    HeraCaption,
  },
  props: {
    review: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.review-item {
  @apply block;
  // .review-item__wrapper

  &__wrapper {
    @apply flex flex-col items-center rounded-[30px] bg-white p-6 text-center;
  }

  // .review-item__image

  &__image {
    @apply mb-5 aspect-square w-full overflow-hidden rounded-[30px] pb-[100%];
  }

  // .review-item__title

  &__title {
    @apply mb-2;
  }

  // .review-item__text

  &__text {
    @apply text-sm text-textSecondary;
  }
}
</style>
