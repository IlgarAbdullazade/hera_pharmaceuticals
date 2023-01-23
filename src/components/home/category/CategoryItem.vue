<template>
  <router-link
    :to="{ name: 'products', params: { category: category.slug } }"
    class="category-item"
  >
    <div class="category-item__wrapper">
      <div class="category-item__image category-item-ibg-cover">
        <img :src="category.image" :alt="category.name" />
      </div>
      <hera-caption class="category-item__title">{{
        category.name
      }}</hera-caption>
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
    category: {
      type: Object,
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
