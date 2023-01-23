<template>
  <div class="notfound">
    <div class="notfound__container">
      <div class="notfound__wrapper">
        <h2 class="notfound__title"><span class="sr-only">Error</span>404</h2>
        <p class="notfound__subtitle">Sorry, we couldn't find this page.</p>
        <p class="notfound__text">
          But dont worry, you can find plenty of other things on our homepage.
        </p>
        <hera-button
          :isLink="true"
          :link="{ name: 'home' }"
          class="notfound__button primary"
          text="Go to homepage"
        />
      </div>
    </div>
  </div>
</template>

<script>
import HeraButton from "@/components/UI/Button.vue";

export default {
  name: "NotFoundView",
  components: {
    HeraButton,
  },
};
</script>

<style lang="scss" scoped>
.notfound {
  // .notfound__container

  &__container {
  }

  // .notfound__wrapper

  &__wrapper {
    @apply flex flex-col items-center justify-center;
  }

  // .notfound__title

  &__title {
    @apply mb-3 text-9xl font-extrabold text-primary;
  }

  // .notfound__subtitle

  &__subtitle {
    @apply text-3xl font-semibold max-lg:text-3xl;
  }

  // .notfound__text

  &__text {
    @apply mt-2 mb-6 text-textSecondary;
  }

  // .notfound__button

  &__button {
    @apply min-w-[200px];
  }
}
</style>
