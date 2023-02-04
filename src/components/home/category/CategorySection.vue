<template>
  <section class="category">
    <div class="category__container">
      <div class="category__wrapper">
        <div class="category__content">
          <hera-heading class="category__title">
            Our
            <strong class="text-primary"> products</strong></hera-heading
          >
          <hera-error-block v-if="error" />
          <div class="category__grid" v-if="isLoading">
            <div v-for="index in 4" :key="index">
              <hera-shimmer
                :classes="[
                  'w-full',
                  'h-full',
                  'aspect-square',
                  'rounded-[30px]',
                  'mb-5',
                ]"
              />
              <hera-shimmer :classes="['mx-auto', 'w-40', 'h-7']" />
            </div>
          </div>
          <template v-if="categories">
            <div class="category__grid" v-if="categories.length">
              <hera-category-item
                v-for="category in categories"
                :category="category"
                :key="category.slug"
                class="category__item"
              />
            </div>
            <div v-else>
              <hera-empty-block text="categories" />
            </div>
          </template>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
import HeraHeading from "@/components/UI/Heading.vue";
import HeraCategoryItem from "@/components/home/category/CategoryItem.vue";
import HeraEmptyBlock from "@/components/common/EmptyBlock.vue";
import HeraErrorBlock from "@/components/common/ErrorBlock.vue";
import HeraShimmer from "@/components/common/Shimmer.vue";

export default {
  name: "HeraCategorySection",
  components: {
    HeraHeading,
    HeraCategoryItem,
    HeraEmptyBlock,
    HeraErrorBlock,
    HeraShimmer,
  },
  computed: {
    ...mapState({
      isLoading: (state) => state.categories.isLoading,
      error: (state) => state.categories.error,
    }),
    ...mapGetters({
      categories: "categories/categories",
    }),
  },
  methods: {
    ...mapActions({
      getCategories: "categories/getCategories",
    }),
  },
  mounted() {
    this.getCategories();
  },
};
</script>

<style lang="scss" scoped>
.category {
  @apply mb-48 max-lg:mb-20;
  // .category__container

  &__container {
  }

  // .category__wrapper

  &__wrapper {
  }

  // .category__content

  &__content {
  }

  // .category__title

  &__title {
    @apply mb-20;
  }

  // .category__grid

  &__grid {
    @apply grid grid-cols-4 gap-5 max-lg:grid-cols-2 max-md:grid-cols-1 max-md:gap-14;
  }

  // .category__item

  &__item {
  }
}
</style>
