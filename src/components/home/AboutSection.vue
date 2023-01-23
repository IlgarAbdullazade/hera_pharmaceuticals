<template>
  <section class="about">
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
            :link="{ name: 'aboutUs' }"
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
</template>

<script>
import { mapGetters } from "vuex";
import HeraHeading from "@/components/UI/Heading.vue";
import HeraCaption from "@/components/UI/Caption.vue";
import HeraParagraph from "@/components/UI/Paragraph.vue";
import HeraButton from "@/components/UI/Button.vue";

export default {
  name: "HeraAboutSection",
  components: {
    HeraHeading,
    HeraCaption,
    HeraParagraph,
    HeraButton,
  },
  computed: {
    ...mapGetters({
      isTablet: "adaptive/isTablet",
    }),
  },
};
</script>

<style lang="scss" scoped>
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
