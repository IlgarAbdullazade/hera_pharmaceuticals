<template>
  <div class="history-table">
    <div class="history-table__wrapper">
      <div class="history-table__header">
        <div class="history-table__row">
          <div class="history-table__cell history-table__cell--date">Date</div>
          <div class="history-table__cell history-table__cell--order">
            Order number
          </div>
          <div class="history-table__cell history-table__cell--total">
            Total
          </div>
          <div class="history-table__cell history-table__cell--tracking">
            Tracking number
          </div>
          <div class="history-table__cell history-table__cell--status">
            Status
          </div>
        </div>
      </div>
      <div class="history-table__body">
        <div class="history-table__row history-table__item">
          <div
            data-cell="Date"
            class="history-table__cell history-table__cell--date"
          >
            24-07-2022
          </div>
          <div
            data-cell="Order number"
            class="history-table__cell history-table__cell--order"
          >
            #42874
          </div>
          <div
            data-cell="Total"
            class="history-table__cell history-table__cell--total text-primary"
          >
            $250
          </div>
          <div
            data-cell="Tracking number"
            class="history-table__cell history-table__cell--tracking"
          >
            AZ468247942
          </div>
          <div
            data-cell="Status"
            class="history-table__cell history-table__cell--status"
          >
            Delivered
          </div>
        </div>
        <div class="history-table__row history-table__item">
          <div
            data-cell="Date"
            class="history-table__cell history-table__cell--date"
          >
            24-07-2022
          </div>
          <div
            data-cell="Order number"
            class="history-table__cell history-table__cell--order"
          >
            #42874
          </div>
          <div
            data-cell="Total"
            class="history-table__cell history-table__cell--total text-primary"
          >
            $250
          </div>
          <div
            data-cell="Tracking number"
            class="history-table__cell history-table__cell--tracking"
          >
            AZ468247942
          </div>
          <div
            data-cell="Status"
            class="history-table__cell history-table__cell--status"
          >
            Delivered
          </div>
        </div>
        <div class="history-table__row history-table__item">
          <div
            data-cell="Date"
            class="history-table__cell history-table__cell--date"
          >
            24-07-2022
          </div>
          <div
            data-cell="Order number"
            class="history-table__cell history-table__cell--order"
          >
            #42874
          </div>
          <div
            data-cell="Total"
            class="history-table__cell history-table__cell--total text-primary"
          >
            $250
          </div>
          <div
            data-cell="Tracking number"
            class="history-table__cell history-table__cell--tracking"
          >
            AZ468247942
          </div>
          <div
            data-cell="Status"
            class="history-table__cell history-table__cell--status"
          >
            Delivered
          </div>
        </div>
        <div class="history-table__row history-table__item">
          <div
            data-cell="Date"
            class="history-table__cell history-table__cell--date"
          >
            24-07-2022
          </div>
          <div
            data-cell="Order number"
            class="history-table__cell history-table__cell--order"
          >
            #42874
          </div>
          <div
            data-cell="Total"
            class="history-table__cell history-table__cell--total text-primary"
          >
            $250
          </div>
          <div
            data-cell="Tracking number"
            class="history-table__cell history-table__cell--tracking"
          >
            AZ468247942
          </div>
          <div
            data-cell="Status"
            class="history-table__cell history-table__cell--status"
          >
            Delivered
          </div>
        </div>
        <div class="history-table__row history-table__item">
          <div
            data-cell="Date"
            class="history-table__cell history-table__cell--date"
          >
            24-07-2022
          </div>
          <div
            data-cell="Order number"
            class="history-table__cell history-table__cell--order"
          >
            #42874
          </div>
          <div
            data-cell="Total"
            class="history-table__cell history-table__cell--total text-primary"
          >
            $250
          </div>
          <div
            data-cell="Tracking number"
            class="history-table__cell history-table__cell--tracking"
          >
            AZ468247942
          </div>
          <div
            data-cell="Status"
            class="history-table__cell history-table__cell--status"
          >
            Delivered
          </div>
        </div>
        <div class="history-table__row history-table__item">
          <div
            data-cell="Date"
            class="history-table__cell history-table__cell--date"
          >
            24-07-2022
          </div>
          <div
            data-cell="Order number"
            class="history-table__cell history-table__cell--order"
          >
            #42874
          </div>
          <div
            data-cell="Total"
            class="history-table__cell history-table__cell--total text-primary"
          >
            $250
          </div>
          <div
            data-cell="Tracking number"
            class="history-table__cell history-table__cell--tracking"
          >
            AZ468247942
          </div>
          <div
            data-cell="Status"
            class="history-table__cell history-table__cell--status"
          >
            Delivered
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeraHistoryTable",
};
</script>

<style lang="scss" scoped>
.history-table {
  // .history-table__wrapper

  &__wrapper {
  }

  // .history-table__header

  &__header {
    @apply py-3 px-5 text-textSecondary max-lg:hidden;
  }

  // .history-table__row

  &__row {
    @apply grid grid-flow-row grid-cols-7 gap-3 max-lg:grid-cols-2;
    grid-template-areas: "date order order total tracking tracking status";

    @media not all and (min-width: 1024px) {
      grid-template-areas:
        "date order"
        "total tracking"
        "status status";
    }
  }

  // .history-table__body

  &__body {
    @apply flex flex-col gap-2.5;
  }

  // .history-table__item

  &__item {
    @apply relative rounded-xl bg-bgPrimary p-5 text-xs font-medium max-lg:p-4 max-lg:text-base;
  }

  // .history-table__cell

  &__cell {
    @apply relative w-full max-lg:pb-6;
    @apply max-lg:after:absolute max-lg:after:left-0 max-lg:after:bottom-0 max-lg:after:text-sm max-lg:after:text-textSecondary max-lg:after:content-[attr(data-cell)];

    // .history-table__cell--date

    &--date {
      grid-area: date;
    }

    // .history-table__cell--order

    &--order {
      grid-area: order;
    }

    // .history-table__cell--total

    &--total {
      grid-area: total;
    }

    // .history-table__cell--tracking

    &--tracking {
      grid-area: tracking;
    }

    // .history-table__cell--status

    &--status {
      grid-area: status;
    }
  }

  // .history-table__remove-button

  &__remove-button {
    @apply flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-bgElement text-lg text-primary transition-colors hover:bg-bgDanger hover:text-textDanger;
  }
}
</style>
