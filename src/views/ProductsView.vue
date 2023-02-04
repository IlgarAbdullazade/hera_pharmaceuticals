<template>
  <div class="products">
    <div class="products__wrapper">
      <div class="products__empty" v-if="error">
        <hera-error-block />
      </div>
      <div class="products__list" v-if="isLoading">
        <hera-product-shimmer v-for="index in 12" :key="index" />
      </div>
      <template v-if="productList">
        <div class="products__list" v-if="productList.length">
          <hera-product-item
            v-for="product in productList"
            :key="product.slug"
            :product="product"
          />
        </div>
        <div class="products__empty" v-else>
          <hera-empty-block text="products" />
        </div>
        <div
          v-if="
            productList.length && paginator && paginator.products_count > 12
          "
          class="products__pagination"
        >
          <vue-awesome-paginate
            :total-items="paginator.products_count"
            :items-per-page="12"
            :max-pages-shown="3"
            v-model="currentPage"
            :on-click="fetchProducts"
          />
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
import HeraProductItem from "@/components/shop/ProductItem.vue";
import HeraProductShimmer from "@/components/shop/ProductShimmer.vue";
import HeraEmptyBlock from "@/components/common/EmptyBlock.vue";
import HeraErrorBlock from "@/components/common/ErrorBlock.vue";

export default {
  name: "ProductsView",
  components: {
    HeraProductItem,
    HeraProductShimmer,
    HeraEmptyBlock,
    HeraErrorBlock,
  },
  data() {
    return {
      currentPage: 1,
    };
  },
  computed: {
    ...mapState({
      isLoading: (state) => state.shop.products.isLoading,
      error: (state) => state.shop.products.error,
    }),
    ...mapGetters({
      productList: "shop/products/productList",
      paginator: "shop/products/paginator",
    }),
    categorySlug() {
      return this.$route.query.category;
    },
    searchQuery() {
      return this.$route.query.search;
    },
  },
  methods: {
    ...mapActions({
      getProducts: "shop/products/getProducts",
      searchProduct: "shop/products/searchProduct",
    }),
    fetchProducts() {
      if (this.searchQuery) {
        this.searchProduct({
          query: this.searchQuery,
          page: this.currentPage,
        });
      } else {
        this.getProducts({
          slug: this.$route.query.category ?? "all",
          page: this.currentPage,
        });
      }
    },
  },
  mounted() {
    this.fetchProducts();
  },
  watch: {
    categorySlug() {
      this.currentPage = 1;
      this.fetchProducts();
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

  // .products__empty

  &__empty {
    @apply my-40;
  }

  // .products__list

  &__pagination {
    @apply mt-20;
  }
}
</style>
