<template>
  <div class="category">
    <div class="category__wrapper">
      <div class="category__tabs category-tabs">
        <h3 class="category__caption">Category</h3>
        <router-link :to="{}" class="category-tabs__item active">
          Injectables
        </router-link>
        <router-link :to="{}" class="category-tabs__item"> Orals </router-link>
        <router-link :to="{}" class="category-tabs__item"> HGH </router-link>
        <router-link :to="{}" class="category-tabs__item">
          Pharmagrade
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeraCategory",
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
