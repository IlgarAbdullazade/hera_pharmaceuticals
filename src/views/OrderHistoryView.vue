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
  // .history__wrapper

  &__wrapper {
  }

  // .history__table

  &__table {
  }
}
</style>
