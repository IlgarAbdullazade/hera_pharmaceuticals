<template>
  <div class="page__labtests labtests">
    <div class="labtests__container">
      <div class="labtests__wrapper">
        <hera-category class="labtests__category" :isShop="false" />
        <div class="labtests__content">
          <div class="labtests__empty" v-if="error">
            <hera-error-block />
          </div>
          <div class="labtests__list" v-if="isLoading">
            <hera-lab-test-shimmer v-for="index in 10" :key="index" />
          </div>
          <div class="labtests__list" v-if="labtestList">
            <template v-if="labtestList.length">
              <hera-lab-test-item
                class="labtests__item"
                v-for="product in labtestList"
                :key="product.slug"
                :product="product"
              />
            </template>
            <div class="labtests__empty" v-else>
              <hera-empty-block text="labtests" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapState } from "vuex";
import HeraCategory from "@/components/common/Category.vue";
import HeraLabTestItem from "@/components/labtests/LabTestItem.vue";
import HeraLabTestShimmer from "@/components/labtests/LabTestShimmer.vue";
import HeraEmptyBlock from "@/components/common/EmptyBlock.vue";
import HeraErrorBlock from "@/components/common/ErrorBlock.vue";

export default {
  name: "LabTestsView",
  components: {
    HeraCategory,
    HeraLabTestItem,
    HeraLabTestShimmer,
    HeraEmptyBlock,
    HeraErrorBlock,
  },
  computed: {
    ...mapState({
      isLoading: (state) => state.shop.products.isLoading,
      error: (state) => state.shop.products.error,
    }),
    ...mapGetters({
      labtestList: "labtests/labtestList",
    }),
    categorySlug() {
      return this.$route.query.category;
    },
  },
  methods: {
    ...mapActions({
      getLabtests: "labtests/getLabtests",
    }),
    fetchLabtests() {
      this.getLabtests({
        slug: this.$route.query.category ?? "all",
        page: this.currentPage,
        only_labtest: true,
      });
    },
  },
  mounted() {
    this.fetchLabtests();
  },
  watch: {
    categorySlug() {
      this.fetchLabtests();
    },
  },
};
</script>

<style lang="scss" scoped>
.labtests {
  // .labtests__container

  &__container {
  }

  // .labtests__wrapper

  &__wrapper {
  }

  // .labtests__category

  &__category {
    @apply mb-12;
  }

  // .labtests__content

  &__content {
  }

  // .labtests__empty

  &__empty {
    @apply my-40;
  }

  // .labtests__list

  &__list {
    @apply flex flex-col gap-5;
  }

  // .labtests__item

  &__item {
  }
}
</style>
