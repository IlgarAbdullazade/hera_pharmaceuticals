<template>
  <div class="my-reviews-list">
    <div class="my-reviews-list__wrapper">
      <div class="my-reviews-list__column" v-if="reviews.length">
        <hera-my-review-item
          class="my-reviews-list__item"
          v-for="review in reviews"
          :key="review.id"
          :review="review"
        />
      </div>
      <div v-else>Empty</div>
      <hera-button
        @click="openModal"
        class="my-reviews-list__button primary"
        text="Add a review"
      />
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import HeraMyReviewItem from "@/components/profile/MyReviewItem.vue";
import HeraMyReviewForm from "@/components/profile/MyReviewForm.vue";
import HeraButton from "@/components/UI/Button.vue";

export default {
  name: "HeraMyReviewsList",
  components: {
    HeraMyReviewItem,
    HeraButton,
  },
  computed: {
    ...mapGetters({
      reviews: "reviews/reviews",
    }),
  },
  methods: {
    openModal() {
      this.$vfm.show({
        component: "HeraCustomModal",
        bind: {
          name: "ReviewForm",
        },
        slots: {
          default: {
            component: HeraMyReviewForm,
          },
        },
      });
    },
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
