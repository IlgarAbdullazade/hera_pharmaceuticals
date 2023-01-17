<template>
  <div class="my-reviews-list">
    <div class="my-reviews-list__wrapper">
      <div class="my-reviews-list__column">
        <hera-my-review-item class="my-reviews-list__item" />
        <hera-my-review-item class="my-reviews-list__item" />
        <hera-my-review-item class="my-reviews-list__item" />
        <hera-my-review-item class="my-reviews-list__item" />
      </div>
      <hera-button
        class="my-reviews-list__button primary"
        text="Add a review"
      />
    </div>
  </div>
</template>

<script>
import HeraMyReviewItem from "@/components/profile/MyReviewItem.vue";
import HeraButton from "@/components/UI/Button.vue";

export default {
  name: "HeraMyReviewsList",
  components: {
    HeraMyReviewItem,
    HeraButton,
  },
};
</script>

<style lang="scss" scoped>
.my-reviews-list {
  // .my-reviews-list__wrapper

  &__wrapper {
    @apply max-lg:rounded-2xl max-lg:bg-white max-lg:p-6;
  }

  // .my-reviews-list__column

  &__column {
    @apply mb-7 flex flex-col gap-2.5;
  }

  // .my-reviews-list__item

  &__item {
  }

  // .my-reviews-list__item

  &__button {
    @apply w-full rounded-2xl;
  }
}
</style>
