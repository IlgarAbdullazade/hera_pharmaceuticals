<template>
  <section class="page__introduction introduction">
    <div class="introduction__container">
      <div class="introduction__wrapper">
        <div class="introduction__content">
          <hera-heading class="introduction__title">
            <strong class="text-primary"> Hera Pharmaceuticals</strong> - made
            by bodybuilders for bodybuilders</hera-heading
          >
          <hera-paragraph class="introduction__text">
            Hera Pharmaceuticals is prone to set a new standard for UGLs by
            bringing complete transparency to production and quality
            control</hera-paragraph
          >
          <hera-button
            class="introduction__button primary"
            :isLink="true"
            :link="{ name: 'products' }"
            text="SHOP NOW"
          >
            <template v-slot:iconBefore>
              <Icon class="mr-2 text-base" icon="mdi:cart" />
            </template>
          </hera-button>
        </div>
      </div>
    </div>
  </section>
  <section class="page__features features">
    <div class="features__container">
      <div class="features__wrapper">
        <div class="features__content">
          <hera-feature-item
            class="features__item"
            title="Finetuned recipe"
            text="Our own trusted formula with least amount of solvents ensuring
                that your body receives minimal amount of stress."
          >
            <template v-slot:icon>
              <img
                src="@/assets/icons/features/medicine.png"
                alt="Finetuned recipe"
              />
            </template>
          </hera-feature-item>
          <hera-feature-item
            class="features__item"
            title="Quality Control"
            text="We are testing each batch of raws and each batch of final product to always stay on top of our game."
          >
            <template v-slot:icon>
              <img
                src="@/assets/icons/features/quality.png"
                alt="Quality Control"
              />
            </template>
          </hera-feature-item>
          <hera-feature-item
            class="features__item"
            title="Discrete shipping"
            text="All products are packed and sealed in a professional discrete manner in case the exterior packaging comes apart."
          >
            <template v-slot:icon>
              <img
                src="@/assets/icons/features/shipping.png"
                alt="Discrete shipping"
              />
            </template>
          </hera-feature-item>
          <hera-feature-item
            class="features__item"
            title="Complete transparency"
            text="We value honesty and transparency and that’s why we never keep a secret about our production. Ask us anything!"
          >
            <template v-slot:icon>
              <img
                src="@/assets/icons/features/transparency.png"
                alt="Complete transparency"
              />
            </template>
          </hera-feature-item>
          <hera-feature-item
            class="features__item"
            title="Privacy"
            text="We use anonymous offshore hosting outside of US jurisdiction. Customer data is never shared with outside sources."
          >
            <template v-slot:icon>
              <img src="@/assets/icons/features/privacy.png" alt="Privacy" />
            </template>
          </hera-feature-item>
          <hera-feature-item
            class="features__item"
            title="24/7 Customer Support"
            text="We do our absolute best to instantly reply to all of our clients."
          >
            <template v-slot:icon>
              <img
                src="@/assets/icons/features/support.png"
                alt="24/7 Customer Support"
              />
            </template>
          </hera-feature-item>
        </div>
      </div>
    </div>
  </section>
  <section class="page__category category">
    <div class="category__container">
      <div class="category__wrapper">
        <div class="category__content">
          <hera-heading class="category__title">
            Our
            <strong class="text-primary"> products</strong></hera-heading
          >
          <div class="category__grid">
            <hera-category-item
              class="category__item"
              title="Injectables"
              :link="{ name: 'home' }"
            >
              <template v-slot:image>
                <img src="@/assets/img/mock/trenbolone.png" alt="Injectables" />
              </template>
            </hera-category-item>

            <hera-category-item
              class="category__item"
              title="Orals"
              :link="{ name: 'home' }"
            >
              <template v-slot:image>
                <img src="@/assets/img/mock/trenbolone.png" alt="Orals" />
              </template>
            </hera-category-item>
            <hera-category-item
              class="category__item"
              title="HGH"
              :link="{ name: 'home' }"
            >
              <template v-slot:image>
                <img src="@/assets/img/mock/trenbolone.png" alt="HGH" />
              </template>
            </hera-category-item>
            <hera-category-item
              class="category__item"
              title="Pharmagrade"
              :link="{ name: 'home' }"
            >
              <template v-slot:image>
                <img src="@/assets/img/mock/trenbolone.png" alt="Pharmagrade" />
              </template>
            </hera-category-item>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="page__about about">
    <div class="about__container">
      <div class="about__wrapper">
        <div class="about__content">
          <hera-heading v-if="!isTablet" class="about__title">
            About
            <strong class="text-primary">Hera</strong></hera-heading
          >
          <hera-caption class="about__caption">
            Hera pharmaceuticals was founded with athlete in mind</hera-caption
          >
          <hera-paragraph class="about__text">
            The founders have gone above and beyond were any UGL have to ensure
            the user is able to obtain exactly what they expect from their
            performance enhancing meds.
            <br /><br />
            From sourcing the highest purity active pharmaceutical ingredients
            available from manufacturers across the world to sourcing
            pharmaceutical grade carrier oils and designing informative
            effective packaging material the team work around the clock the
            ensure everything is done to the highest of
            standards.</hera-paragraph
          >
          <hera-button
            class="about__button _outline"
            :isLink="true"
            text="LEARN MORE"
          />
        </div>
        <div class="about__image about-ibg-cover">
          <img src="@/assets/img/bodybuilder.png" alt="Hera" />
        </div>
        <hera-heading v-if="isTablet" class="about__title">
          About
          <strong class="text-primary">Hera</strong></hera-heading
        >
      </div>
    </div>
  </section>
  <hera-reviews-section />
</template>

<script>
import { Icon } from "@iconify/vue";
import { mapGetters } from "vuex";
import HeraHeading from "@/components/UI/Heading.vue";
import HeraCaption from "@/components/UI/Caption.vue";
import HeraParagraph from "@/components/UI/Paragraph.vue";
import HeraButton from "@/components/UI/Button.vue";
import HeraFeatureItem from "@/components/home/FeatureItem.vue";
import HeraCategoryItem from "@/components/home/CategoryItem.vue";
import HeraReviewsSection from "@/components/home/reviews/ReviewsSection.vue";

export default {
  name: "HomeView",
  components: {
    Icon,
    HeraHeading,
    HeraCaption,
    HeraParagraph,
    HeraButton,
    HeraFeatureItem,
    HeraCategoryItem,
    HeraReviewsSection,
  },
  computed: {
    ...mapGetters({
      isTablet: "adaptive/isTablet",
    }),
  },
};
</script>

<style lang="scss" scoped>
.introduction {
  @apply relative -mb-10 before:absolute before:-z-10 before:h-full before:w-full before:bg-[url('@/assets/img/home/bg-decoration.png')] before:bg-cover before:bg-center before:bg-no-repeat before:content-[''];
  // .introduction__container

  &__container {
  }

  // .introduction__wrapper

  &__wrapper {
    @apply flex min-h-[1080px] items-center justify-center pb-48 pt-16;
  }

  // .introduction__content

  &__content {
    @apply flex flex-col justify-center;
  }

  // .introduction__title

  &__title {
    @apply mx-auto mb-6 max-w-[675px] text-center;
  }

  // .introduction__text

  &__text {
    @apply mx-auto mb-10 max-w-[590px] text-center;
  }

  // .introduction__button

  &__button {
    @apply mx-auto min-w-[200px];
  }
}

.features {
  @apply mb-48 max-lg:mb-20;
  // .features__container

  &__container {
  }

  // .features__wrapper

  &__wrapper {
  }

  // .features__content

  &__content {
    @apply grid grid-cols-3 gap-5 max-lg:grid-cols-2 max-md:grid-cols-1;
  }

  // .features__item

  &__item {
  }
}

.category {
  @apply mb-48 max-lg:mb-20;
  // .category__container

  &__container {
  }

  // .category__wrapper

  &__wrapper {
  }

  // .category__content

  &__content {
  }

  // .category__title

  &__title {
    @apply mb-20;
  }

  // .category__grid

  &__grid {
    @apply grid grid-cols-4 gap-5 max-lg:grid-cols-2 max-md:grid-cols-1 max-md:gap-14;
  }

  // .category__item

  &__item {
  }
}

.about {
  @apply relative mb-48 before:absolute before:-z-10 before:h-full before:w-full before:bg-[url('@/assets/img/home/bg-decoration.png')] before:bg-cover before:bg-center before:bg-no-repeat before:content-[''] max-lg:mb-20;

  // .about__container

  &__container {
  }

  // .about__wrapper

  &__wrapper {
    @apply flex items-center gap-20 py-16 max-lg:flex-col-reverse max-lg:gap-7;
  }

  // .about__content

  &__content {
    @apply flex max-w-[620px] flex-col items-start max-lg:items-center max-lg:text-center;
  }

  // .about__title

  &__title {
    @apply mb-7 max-lg:mb-0;
  }

  // .about__caption

  &__caption {
    @apply mb-5;
  }

  // .about__text

  &__text {
    @apply mb-10;
  }

  // .about__button

  &__button {
    @apply min-w-[200px];
  }

  // .about__image

  &__image {
    @apply aspect-square w-full max-w-[480px] flex-shrink-0	overflow-hidden rounded-full;
  }
}
</style>
