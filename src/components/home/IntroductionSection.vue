<template>
  <section class="page__introduction introduction">
    <div class="introduction__bg introduction-bg">
      <video
        loop
        muted
        autoplay
        poster="@/assets/img/home/bg-decoration.png"
        class="introduction-bg__video"
      >
        <source src="@/assets/video/background.mp4" type="video/mp4" />
      </video>
    </div>
    <div class="introduction__container">
      <div class="introduction__wrapper">
        <div class="introduction__content">
          <div class="introduction__image introduction-ibg-contain">
            <img src="@/assets/img/logo-big.png" alt="Hera Pharmaceuticals" />
          </div>
          <hera-heading class="introduction__title">
            Every batch tested.</hera-heading
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Icon } from "@iconify/vue";
import HeraHeading from "@/components/UI/Heading.vue";

export default {
  name: "HeraIntroductionSection",
  components: {
    Icon,
    HeraHeading,
  },
};
</script>

<style lang="scss" scoped>
.introduction {
  @apply relative -mb-10;
  @apply after:absolute after:bottom-0 after:left-0 after:-z-20 after:h-20 after:w-full after:bg-gradient-to-t after:from-bgPrimary after:to-transparent;
  // .introduction__bg

  &__bg {
  }

  // .introduction__container

  &__container {
  }

  // .introduction__wrapper

  &__wrapper {
    @apply flex items-center justify-center pb-48 pt-16 lg:min-h-[860px];
  }

  // .introduction__content

  &__content {
    @apply flex flex-col items-center justify-center max-lg:mt-20 max-lg:mb-32;
  }

  // .introduction__title

  &__image {
    @apply mb-6 w-full max-w-xs pb-64 max-lg:mb-3 max-lg:max-w-[240px] max-lg:pb-52;
  }

  // .introduction__title

  &__title {
    @apply mx-auto mb-6 max-w-2xl text-center;
  }
}

.introduction-bg {
  @apply absolute left-0 top-0 -z-50 h-full w-full overflow-hidden;

  // .introduction-bg__video

  &__video {
    @apply h-full w-full object-cover;
  }
}
</style>
