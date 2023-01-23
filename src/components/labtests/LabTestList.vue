<template>
  <div class="labtests-list" v-if="productList.length">
    <hera-lab-test-item
      class="labtests-list__item"
      v-for="product in productList"
      :key="product.id"
      :product="product"
    />
  </div>
  <div v-else>Empty</div>
</template>

<script>
import { mapGetters } from "vuex";
import HeraLabTestItem from "@/components/labtests/LabTestItem.vue";

export default {
  name: "HeraLabTestList",
  components: {
    HeraLabTestItem,
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
.labtests-list {
  @apply flex flex-col gap-5;
  // .labtests-list__item

  &__item {
  }
}
</style>
