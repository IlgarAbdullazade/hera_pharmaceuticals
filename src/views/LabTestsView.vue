<template>
  <div class="page__labtests labtests">
    <div class="labtests__container">
      <div class="labtests__wrapper">
        <hera-category class="labtests__category" />
        <div class="labtests__content">
          <hera-lab-test-item class="labtests__item" />
          <hera-lab-test-item class="labtests__item" />
          <hera-lab-test-item class="labtests__item" />
          <hera-lab-test-item class="labtests__item" />
          <hera-lab-test-item class="labtests__item" />
          <hera-lab-test-item class="labtests__item" />
          <hera-lab-test-item class="labtests__item" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeraCategory from "@/components/common/Category.vue";
import HeraLabTestItem from "@/components/labtests/LabTestItem.vue";

export default {
  name: "ShopView",
  components: {
    HeraCategory,
    HeraLabTestItem,
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
    @apply flex flex-col gap-5;
  }

  // .labtests__item

  &__item {
  }
}
.labtests-item {
  @apply rounded-3xl bg-white p-2;
  // .labtests-item__wrapper

  &__wrapper {
    @apply flex items-center gap-5 rounded-3xl bg-bgPrimary p-3;
  }

  // .labtests-item__image

  &__image {
    @apply aspect-square w-20 shrink-0 overflow-hidden rounded-3xl;
  }

  // .labtests-item__info

  &__info {
  }

  // .labtests-item__title

  &__title {
    @apply text-lg font-medium max-lg:text-sm;
  }
}
</style>
