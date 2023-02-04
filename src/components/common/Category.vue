<template>
  <div class="category">
    <div class="category__wrapper">
      <div class="category__tabs category-tabs">
        <h3 class="category__caption">Category</h3>
        <router-link
          :to="{
            name: isShop ? 'products' : 'labTests',
          }"
          class="category-tabs__item"
          @click="selectCategory('all')"
          :class="{ active: selectedCategory === 'all' }"
        >
          All
        </router-link>

        <template v-if="isLoading">
          <hera-shimmer
            v-for="index in 3"
            :key="index"
            :classes="['w-24', 'h-7', 'rounded-full']"
          />
        </template>

        <router-link
          :to="{
            name: isShop ? 'products' : 'labTests',
            query: { category: category.slug },
          }"
          class="category-tabs__item"
          :class="{ active: selectedCategory === category.slug }"
          v-for="category in categories"
          :key="category.id"
        >
          {{ category.title }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
import HeraShimmer from "@/components/common/Shimmer.vue";

export default {
  name: "HeraCategory",
  components: {
    HeraShimmer,
  },
  props: {
    isShop: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    ...mapState({
      isLoading: (state) => state.categories.isLoading,
    }),
    ...mapGetters({
      categories: "categories/categories",
      selectedCategory: "categories/selectedCategory",
    }),
    categorySlug() {
      return this.$route.query.category;
    },
  },
  methods: {
    ...mapActions({
      getCategories: "categories/getCategories",
      selectCategory: "categories/selectCategory",
    }),
  },
  mounted() {
    this.getCategories();
  },
  watch: {
    categorySlug() {
      if (this.$route.name === "products" || this.$route.name === "labTests") {
        this.selectCategory(this.categorySlug ?? "all");
      }
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
