<template>
  <div class="reviews-slider">
    <div class="reviews-slider__wrapper">
      <swiper
        :modules="modules"
        :breakpoints="breakpoints"
        :pagination="{ el: '.swiper-pagination', clickable: true }"
        :navigation="{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }"
      >
        <swiper-slide v-for="review in reviews" :key="review.id">
          <hera-review-item :review="review" />
        </swiper-slide>
      </swiper>
      <div class="swiper-button-next" slot="button-next"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
    </div>

    <div class="swiper-pagination"></div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import HeraReviewItem from "@/components/home/reviews/ReviewItem.vue";

export default {
  name: "HeraReviewsSlider",
  components: {
    Swiper,
    SwiperSlide,
    HeraReviewItem,
  },
  computed: {
    ...mapGetters({
      reviews: "reviews/reviews",
    }),
  },
  setup() {
    return {
      loop: true,
      modules: [Navigation, Pagination],
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 8,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 8,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 16,
        },
        1268: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.reviews-slider {
  @apply relative px-12 pb-12;
  @apply max-lg:px-0;

  // .reviews-slider__wrapper

  &__wrapper {
    @apply relative;
  }

  .swiper-button-next,
  .swiper-button-prev {
    @apply max-lg:hidden;
  }
}
</style>
