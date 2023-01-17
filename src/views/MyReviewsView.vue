<template>
  <div class="my-reviews">
    <div class="my-reviews__wrapper">
      <hera-my-reviews-list class="my-reviews__list" />
    </div>
  </div>
</template>
<script>
import HeraMyReviewsList from "@/components/profile/MyReviewsList.vue";

export default {
  name: "MyReviewsView",
  components: {
    HeraMyReviewsList,
  },
};
</script>

<style lang="scss" scoped>
.my-reviews {
  // .my-reviews__wrapper

  &__wrapper {
    @apply flex flex-col gap-14 max-lg:rounded-2xl max-lg:p-0;
  }

  // .my-reviews__form

  &__form {
  }

  // .my-reviews__list

  &__list {
  }
}
</style>
