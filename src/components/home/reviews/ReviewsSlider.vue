<template>
  <div class="reviews-slider">
    <div class="reviews-slider__wrapper">
      <swiper
        :modules="modules"
        :breakpoints="breakpoints"
        :auto-height="true"
        :pagination="{ el: '.swiper-pagination', clickable: true }"
        :navigation="{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }"
      >
        <swiper-slide v-for="slide in slides" :key="slide.id">
          <hera-review-item :review="slide" />
        </swiper-slide>
      </swiper>
      <div class="swiper-button-next" slot="button-next"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
    </div>

    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
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
  data() {
    return {
      slides: [
        {
          id: 1,
          title: "Link Naymon",
          description:
            "Everything suits me, I buy goods on this site not for the first time, the delivery pleases me!",
        },
        {
          id: 2,
          title: "Link Naymon2",
          description:
            "Everything suits me, I buy goods on this site not for the first time, the delivery pleases me!",
        },
        {
          id: 3,
          title: "Link Naymon3",
          description:
            "Everything suits me, I buy goods on this site not for the first time, the delivery pleases me!",
        },
        {
          id: 4,
          title: "Link Naymon4",
          description:
            "Everything suits me, I buy goods on this site not for the first time, the delivery pleases me!",
        },
        {
          id: 5,
          title: "Link Naymon5",
          description:
            "Everything suits me, I buy goods on this site not for the first time, the delivery pleases me!",
        },
      ],
    };
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
