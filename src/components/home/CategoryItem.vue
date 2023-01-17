<template>
  <router-link :to="link" class="category-item">
    <div class="category-item__wrapper">
      <div class="category-item__image category-item-ibg-cover">
        <slot name="image">{{ image }}</slot>
      </div>
      <hera-caption class="category-item__title">{{ title }}</hera-caption>
    </div>
  </router-link>
</template>

<script>
import HeraCaption from "@/components/UI/Caption.vue";

export default {
  name: "HeraCategoryItem",
  components: {
    HeraCaption,
  },
  props: {
    link: {
      type: Object,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.category-item {
  @apply block transition-transform hover:scale-105;
  // .category-item__wrapper

  &__wrapper {
    @apply flex flex-col items-center;
  }

  // .category-item__image

  &__image {
    @apply mb-5 w-full overflow-hidden rounded-[30px] pb-[100%];
  }

  // .category-item__title

  &__title {
    @apply text-center;
  }
}
</style>
