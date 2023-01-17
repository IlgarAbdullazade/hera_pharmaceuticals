<template>
  <div class="page__shop shop">
    <div class="shop__container">
      <div class="shop__wrapper">
        <hera-category class="shop__category" />
        <div class="shop__content">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeraCategory from "@/components/common/Category.vue";

export default {
  name: "ShopView",
  components: {
    HeraCategory,
  },
};
</script>

<style lang="scss" scoped>
.shop {
  // .shop__container

  &__container {
  }

  // .shop__wrapper

  &__wrapper {
  }

  // .shop__category

  &__category {
    @apply mb-12;
  }

  // .shop__content

  &__content {
  }
}
</style>
