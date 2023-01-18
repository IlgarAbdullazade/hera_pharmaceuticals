<template>
  <div class="labtests-list">
    <hera-lab-test-item class="labtests-list__item" />
    <hera-lab-test-item class="labtests-list__item" />
    <hera-lab-test-item class="labtests-list__item" />
    <hera-lab-test-item class="labtests-list__item" />
    <hera-lab-test-item class="labtests-list__item" />
    <hera-lab-test-item class="labtests-list__item" />
    <hera-lab-test-item class="labtests-list__item" />
  </div>
</template>

<script>
import HeraLabTestItem from "@/components/labtests/LabTestItem.vue";

export default {
  name: "HeraLabTestList",
  components: {
    HeraLabTestItem,
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
