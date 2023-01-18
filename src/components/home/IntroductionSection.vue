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
</template>

<script>
import { Icon } from "@iconify/vue";
import HeraHeading from "@/components/UI/Heading.vue";
import HeraParagraph from "@/components/UI/Paragraph.vue";
import HeraButton from "@/components/UI/Button.vue";

export default {
  name: "HeraIntroductionSection",
  components: {
    Icon,
    HeraHeading,
    HeraParagraph,
    HeraButton,
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
</style>
