<template>
  <div class="page__labtests labtests">
    <div class="labtests__container">
      <div class="labtests__wrapper">
        <hera-category class="labtests__category" :isShop="false" />
        <hera-lab-test-list class="labtests__content" />
      </div>
    </div>
  </div>
</template>

<script>
import HeraCategory from "@/components/common/Category.vue";
import HeraLabTestList from "@/components/labtests/LabTestList.vue";

export default {
  name: "LabTestsView",
  components: {
    HeraCategory,
    HeraLabTestList,
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

  // .labtests__item

  &__item {
  }
}
</style>
