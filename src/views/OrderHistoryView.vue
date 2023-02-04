<template>
  <div class="history">
    <div class="history__wrapper">
      <hera-history-table class="history__table" />
    </div>
  </div>
</template>

<script>
import HeraHistoryTable from "@/components/profile/HistoryTable.vue";

export default {
  name: "OrderHistoryView",
  components: {
    HeraHistoryTable,
  },
};
</script>

<style lang="scss" scoped>
.history {
  @apply h-full;
  // .history__wrapper

  &__wrapper {
    @apply h-full;
  }

  // .history__table

  &__table {
    @apply h-full;
  }
}
</style>
