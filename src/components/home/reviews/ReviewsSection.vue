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
        <hera-reviews-slider class="reviews__slider" />
      </div>
    </div>
  </section>
</template>

<script>
import HeraHeading from "@/components/UI/Heading.vue";
import HeraReviewsSlider from "@/components/home/reviews/ReviewsSlider.vue";

export default {
  name: "HeraReviewsSection",
  components: {
    HeraHeading,
    HeraReviewsSlider,
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
}
</style>
