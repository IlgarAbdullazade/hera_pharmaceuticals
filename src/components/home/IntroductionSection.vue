<template>
  <section class="page__introduction introduction">
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
  @apply relative -mb-10 before:absolute before:-z-10 before:h-full before:w-full before:bg-[url('@/assets/img/home/bg-decoration.png')] before:bg-cover before:bg-center before:bg-no-repeat before:content-[''];
  // .introduction__container

  &__container {
  }

  // .introduction__wrapper

  &__wrapper {
    @apply flex min-h-[860px] items-center justify-center pb-48 pt-16;
  }

  // .introduction__content

  &__content {
    @apply flex flex-col items-center justify-center;
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
</style>
