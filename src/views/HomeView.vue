<template>
  <hera-introduction-section class="page__introduction" />
  <hera-features-section class="page__features" />
  <hera-category-section class="page__category" />
  <hera-about-section class="page__about" />
  <hera-reviews-section class="page__reviews" />
</template>

<script>
import HeraIntroductionSection from "@/components/home/IntroductionSection.vue";
import HeraFeaturesSection from "@/components/home/features/FeaturesSection.vue";
import HeraCategorySection from "@/components/home/category/CategorySection.vue";
import HeraAboutSection from "@/components/home/AboutSection.vue";
import HeraReviewsSection from "@/components/home/reviews/ReviewsSection.vue";

export default {
  name: "HomeView",
  components: {
    HeraIntroductionSection,
    HeraFeaturesSection,
    HeraCategorySection,
    HeraAboutSection,
    HeraReviewsSection,
  },
};
</script>

<style lang="scss" scoped></style>
