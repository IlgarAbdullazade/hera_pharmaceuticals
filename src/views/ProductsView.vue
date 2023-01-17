<template>
  <div class="products">
    <div class="products__wrapper">
      <hera-product-item />
      <hera-product-item />
      <hera-product-item />
      <hera-product-item />
      <hera-product-item />
      <hera-product-item />
    </div>
  </div>
</template>

<script>
import HeraProductItem from "@/components/shop/ProductItem.vue";

export default {
  name: "ProductsView",
  components: {
    HeraProductItem,
  },
};
</script>

<style lang="scss" scoped>
.products {
  // .products__wrapper

  &__wrapper {
    @apply grid grid-cols-3 gap-y-7 gap-x-5 max-xl:grid-cols-2 max-md:grid-cols-1;
  }
}
</style>
