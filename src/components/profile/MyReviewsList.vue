<template>
  <div class="my-reviews-list">
    <div class="my-reviews-list__wrapper">
      <div class="my-reviews-list__empty" v-if="error">
        <hera-error-block />
      </div>
      <div class="my-reviews-list__column" v-if="isLoading">
        <hera-my-review-shimmer v-for="index in 6" :key="index" />
      </div>
      <template v-if="userReviews">
        <div class="my-reviews-list__column" v-if="userReviews.length">
          <hera-my-review-item
            class="my-reviews-list__item"
            v-for="review in userReviews"
            :key="review.id"
            :review="review"
          />
        </div>
        <div class="my-reviews-list__empty" v-else>
          <hera-empty-block text="reviews" />
        </div>
      </template>

      <hera-button
        @click="openModal"
        class="my-reviews-list__button primary"
        text="Add a review"
      />
    </div>
  </div>
</template>
<script>
import { mapGetters, mapState, mapActions } from "vuex";
import HeraMyReviewItem from "@/components/profile/MyReviewItem.vue";
import HeraMyReviewShimmer from "@/components/profile/MyReviewShimmer.vue";
import HeraMyReviewForm from "@/components/profile/MyReviewForm.vue";
import HeraButton from "@/components/UI/Button.vue";
import HeraEmptyBlock from "@/components/common/EmptyBlock.vue";
import HeraErrorBlock from "@/components/common/ErrorBlock.vue";

export default {
  name: "HeraMyReviewsList",
  components: {
    HeraMyReviewItem,
    HeraMyReviewShimmer,
    HeraButton,
    HeraEmptyBlock,
    HeraErrorBlock,
  },
  computed: {
    ...mapState({
      isLoading: (state) => state.reviews.isLoading,
      error: (state) => state.reviews.error,
    }),
    ...mapGetters({
      userReviews: "reviews/userReviews",
    }),
  },
  methods: {
    ...mapActions({
      getUserReviews: "reviews/getUserReviews",
    }),
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
  mounted() {
    this.getUserReviews();
  },
};
</script>

<style lang="scss" scoped>
.my-reviews-list {
  @apply h-full;
  // .my-reviews-list__wrapper

  &__wrapper {
    @apply flex h-full flex-col max-lg:rounded-2xl max-lg:bg-white max-lg:p-6;
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
  // .my-reviews-empty

  &__empty {
    @apply flex h-full items-center justify-center py-20;
  }
}
</style>
