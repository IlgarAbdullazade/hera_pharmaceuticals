<template>
  <section class="category">
    <div class="category__container">
      <div class="category__wrapper">
        <div class="category__content">
          <hera-heading class="category__title">
            Our
            <strong class="text-primary"> products</strong></hera-heading
          >
          <div class="category__grid">
            <hera-category-item
              class="category__item"
              title="Injectables"
              :link="{ name: 'home' }"
            >
              <template v-slot:image>
                <img src="@/assets/img/mock/trenbolone.png" alt="Injectables" />
              </template>
            </hera-category-item>

            <hera-category-item
              class="category__item"
              title="Orals"
              :link="{ name: 'home' }"
            >
              <template v-slot:image>
                <img src="@/assets/img/mock/trenbolone.png" alt="Orals" />
              </template>
            </hera-category-item>

            <hera-category-item
              class="category__item"
              title="HGH"
              :link="{ name: 'home' }"
            >
              <template v-slot:image>
                <img src="@/assets/img/mock/trenbolone.png" alt="HGH" />
              </template>
            </hera-category-item>

            <hera-category-item
              class="category__item"
              title="Pharmagrade"
              :link="{ name: 'home' }"
            >
              <template v-slot:image>
                <img src="@/assets/img/mock/trenbolone.png" alt="Pharmagrade" />
              </template>
            </hera-category-item>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import HeraHeading from "@/components/UI/Heading.vue";
import HeraCategoryItem from "@/components/home/category/CategoryItem.vue";

export default {
  name: "HeraCategorySection",
  components: {
    HeraHeading,
    HeraCategoryItem,
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
