<template>
  <div class="history-table">
    <div class="history-table__wrapper">
      <div class="history-table__empty" v-if="error">
        <hera-error-block />
      </div>
      <template v-if="isLoading">
        <div class="history-table__header">
          <div class="history-table__row">
            <div class="history-table__cell history-table__cell--date">
              <hera-shimmer :classes="['h-3', 'w-full']" />
            </div>
            <div class="history-table__cell history-table__cell--order">
              <hera-shimmer :classes="['h-3', 'w-1/2']" />
            </div>
            <div class="history-table__cell history-table__cell--total">
              <hera-shimmer :classes="['h-3', 'w-3/4']" />
            </div>
            <div class="history-table__cell history-table__cell--tracking">
              <hera-shimmer :classes="['h-3', 'w-3/4']" />
            </div>
            <div class="history-table__cell history-table__cell--status">
              <hera-shimmer :classes="['h-3', 'w-full']" />
            </div>
          </div>
        </div>
        <div class="history-table__body">
          <div
            class="history-table__row history-table__item"
            v-for="index in 6"
            :key="index"
          >
            <div
              data-cell="Date"
              class="history-table__cell history-table__cell--date"
            >
              <hera-shimmer :classes="['h-3', 'w-full']" />
            </div>
            <div
              data-cell="Order number"
              class="history-table__cell history-table__cell--order"
            >
              <hera-shimmer :classes="['h-3', 'w-1/2']" />
            </div>
            <div
              data-cell="Total"
              class="history-table__cell history-table__cell--total text-primary"
            >
              <hera-shimmer :classes="['h-3', 'w-3/4']" />
            </div>
            <div
              data-cell="Tracking number"
              class="history-table__cell history-table__cell--tracking"
            >
              <hera-shimmer :classes="['h-3', 'w-3/4']" />
            </div>
            <div
              data-cell="Status"
              class="history-table__cell history-table__cell--status"
            >
              <hera-shimmer :classes="['h-3', 'w-full']" />
            </div>
          </div>
        </div>
      </template>
      <template v-if="orderList">
        <template v-if="orderList.length">
          <div class="history-table__header">
            <div class="history-table__row">
              <div class="history-table__cell history-table__cell--date">
                Date
              </div>
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
            <div
              class="history-table__row history-table__item"
              v-for="order in orderList"
              :key="order.order_number"
            >
              <div
                data-cell="Date"
                class="history-table__cell history-table__cell--date"
              >
                {{ order.created_at }}
              </div>
              <div
                data-cell="Order number"
                class="history-table__cell history-table__cell--order"
              >
                #{{ order.order_number }}
              </div>
              <div
                data-cell="Total"
                class="history-table__cell history-table__cell--total text-primary"
              >
                ${{ order.total_amount }}
              </div>
              <div
                data-cell="Tracking number"
                class="history-table__cell history-table__cell--tracking"
              >
                {{ order.track_number ?? "-" }}
              </div>
              <div
                data-cell="Status"
                class="history-table__cell history-table__cell--status"
              >
                {{ order.delivery_status }}
              </div>
            </div>
          </div>
          <div
            v-if="paginator && paginator.products_count > 6"
            class="history-table__pagination"
          >
            <vue-awesome-paginate
              :total-items="paginator.products_count"
              :items-per-page="6"
              :max-pages-shown="3"
              v-model="currentPage"
              :on-click="fetchOrders"
            />
          </div>
        </template>
        <div class="history-table__empty" v-else>
          <hera-empty-block text="orders" />
        </div>
      </template>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions, mapGetters } from "vuex";
import HeraEmptyBlock from "@/components/common/EmptyBlock.vue";
import HeraErrorBlock from "@/components/common/ErrorBlock.vue";
import HeraShimmer from "@/components/common/Shimmer.vue";

export default {
  name: "HeraHistoryTable",
  components: {
    HeraEmptyBlock,
    HeraErrorBlock,
    HeraShimmer,
  },
  data() {
    return {
      currentPage: 1,
    };
  },
  computed: {
    ...mapState({
      isLoading: (state) => state.order.isLoading,
      error: (state) => state.order.error,
    }),
    ...mapGetters({
      orderList: "order/orderList",
      paginator: "order/paginator",
    }),
  },
  methods: {
    ...mapActions({
      getOrderList: "order/getOrderList",
    }),
    fetchOrders() {
      this.getOrderList({
        page: this.currentPage,
      });
    },
  },
  mounted() {
    this.fetchOrders();
  },
};
</script>

<style lang="scss" scoped>
.history-table {
  // .history-table__wrapper

  &__wrapper {
    @apply h-full;
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

  // .history-table__empty

  &__empty {
    @apply flex h-full items-center justify-center py-20;
  }

  &__pagination {
    @apply pt-10;
  }
}
</style>
