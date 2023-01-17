<template>
  <div class="my-review-item">
    <div class="my-review-item__wrapper">
      <div class="my-review-item__content">
        <div class="my-review-item__image my-review-item-ibg-cover">
          <img src="@/assets/img/mock/omega.png" alt="Omega" />
        </div>
        <div class="my-review-item__info">
          <h4 class="my-review-item__title">Clayton Santos</h4>
          <p class="my-review-item__text">
            I ordered test cyp. No pip at all. One of the best UGLS i have ever
            tried. Looking to order my next cycle there. Probably gonna grab
            deca and primo. GTG
          </p>
        </div>
      </div>
      <button class="my-review-item__button">
        <Icon icon="material-symbols:edit" />
        <span>Edit review</span>
      </button>
    </div>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";

export default {
  name: "HeraMyReviewItem",
  components: {
    Icon,
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
    @apply flex items-center gap-4;
  }

  // .my-review-item__image

  &__image {
    @apply aspect-square h-20 w-20 shrink-0 overflow-hidden rounded-2xl;
  }

  // .my-review-item__info

  &__info {
    @apply text-xs;
  }

  // .my-review-item__title

  &__title {
    @apply mb-1 font-bold;
  }

  // .my-review-item__text

  &__text {
    @apply font-medium text-textSecondary line-clamp-2;
  }

  // .my-review-item__button

  &__button {
    @apply flex h-min shrink-0 items-center gap-2  text-sm font-medium text-primary max-lg:justify-end;
  }
}
</style>
