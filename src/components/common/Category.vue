<template>
  <div class="category">
    <div class="category__wrapper">
      <div class="category__tabs category-tabs">
        <h3 class="category__caption">Category</h3>
        <router-link
          :to="{
            name: isShop ? 'products' : 'labTestItems',
            params: { category: 'all' },
          }"
          class="category-tabs__item"
          :class="{ active: categorySlug === 'all' }"
        >
          All
        </router-link>
        <router-link
          :to="{
            name: isShop ? 'products' : 'labTestItems',
            params: { category: category.slug },
          }"
          class="category-tabs__item"
          :class="{ active: categorySlug === category.slug }"
          v-for="category in categories"
          :key="category.id"
        >
          {{ category.name }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "HeraCategory",
  props: {
    isShop: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    ...mapGetters({
      categories: "categories/categories",
    }),
    categorySlug() {
      return this.$route.params.category;
    },
  },
};
</script>

<style lang="scss" scoped>
.category {
  // .category__wrapper

  &__wrapper {
    @apply flex max-w-fit content-start items-center rounded-full bg-white p-3;
  }

  // .category__caption

  &__caption {
    @apply py-1 px-6 text-base font-medium;
  }

  // .category__tabs

  &__tabs {
  }
}
.category-tabs {
  @apply flex items-center gap-2.5 max-lg:flex-wrap;
  // .category-tabs__item

  &__item {
    @apply inline-flex items-center justify-center rounded-full py-1 px-6 font-medium text-textSecondary transition-colors hover:bg-primary hover:text-white;

    &.active {
      @apply bg-primary text-white;
    }
  }
}
</style>
