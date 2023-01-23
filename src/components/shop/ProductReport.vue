<template>
  <div class="product-report">
    <div class="product-report__wrapper">
      <button
        type="button"
        @click="openModal"
        class="product-report__image product-report-ibg-cover"
      >
        <Icon
          class="product-report__icon"
          icon="material-symbols:search-rounded"
        />
        <img :src="reports[0]" :alt="reports[0]" />
      </button>
      <span class="product-report__text">TEST REPORT</span>
    </div>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";
import HeraReportsModal from "@/components/common/ReportsModal.vue";

export default {
  name: "HeraProductReport",
  components: {
    Icon,
  },
  props: {
    reports: {
      type: Array,
      required: true,
    },
  },
  methods: {
    openModal() {
      this.$vfm.show({
        component: "HeraCustomModal",
        bind: {
          name: "ReportsModal",
          class: "full-height",
        },
        slots: {
          default: {
            component: HeraReportsModal,
            bind: {
              reports: this.reports,
            },
          },
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.product-report {
  // .product-report__wrapper

  &__wrapper {
    @apply flex h-full flex-col items-center justify-center overflow-hidden rounded-3xl bg-[#F7F8FA] p-10 max-lg:bg-transparent;
  }

  // .product-report__image

  &__image {
    @apply mb-6 aspect-square w-48 overflow-hidden rounded-3xl;
    @apply before:absolute before:top-0 before:left-0  before:z-10 before:h-full before:w-full before:bg-black/60 before:content-[''];
  }
  // .product-report__icon

  &__icon {
    @apply absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 text-5xl text-white;
  }

  // .product-report__text

  &__text {
    @apply text-base font-medium text-primary;
  }
}
</style>
