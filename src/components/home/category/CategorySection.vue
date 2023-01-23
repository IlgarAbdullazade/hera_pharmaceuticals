<template>
  <section class="category">
    <div class="category__container">
      <div class="category__wrapper">
        <div class="category__content">
          <hera-heading class="category__title">
            Our
            <strong class="text-primary"> products</strong></hera-heading
          >
          <div class="category__grid" v-if="categories.length">
            <hera-category-item
              v-for="category in categories"
              :category="category"
              :key="category.id"
              class="category__item"
            />
          </div>
          <div v-else>Empty</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import HeraHeading from "@/components/UI/Heading.vue";
import HeraCategoryItem from "@/components/home/category/CategoryItem.vue";

export default {
  name: "HeraCategorySection",
  components: {
    HeraHeading,
    HeraCategoryItem,
  },
  computed: {
    ...mapGetters({
      categories: "categories/categories",
    }),
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
