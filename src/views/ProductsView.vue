<template>
  <div class="products">
    <div class="products__wrapper">
      <div class="products__list" v-if="productList.length">
        <hera-product-item
          v-for="product in productList"
          :key="product.id"
          :product="product"
        />
      </div>
      <div v-else>Empty</div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import HeraProductItem from "@/components/shop/ProductItem.vue";

export default {
  name: "ProductsView",
  components: {
    HeraProductItem,
  },
  computed: {
    ...mapGetters({
      products: "products/products",
      getProductsByCategory: "products/getProductsByCategory",
    }),
    productList() {
      return this.$route.params.category != "all"
        ? this.getProductsByCategory(this.$route.params.category)
        : this.products;
    },
  },
};
</script>

<style lang="scss" scoped>
.products {
  // .products__wrapper

  &__wrapper {
  }

  // .products__list

  &__list {
    @apply grid grid-cols-3 gap-y-7 gap-x-5 max-xl:grid-cols-2 max-md:grid-cols-1;
  }
}
</style>
