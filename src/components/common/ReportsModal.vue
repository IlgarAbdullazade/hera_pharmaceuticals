<template>
  <div class="report-modal">
    <div
      class="report-modal__item"
      v-for="(item, index) in reports"
      :key="index"
    >
      <img
        class="report-modal__image"
        :src="baseURL + item.image"
        :alt="item.image"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: "HeraReportModal",
  props: {
    reports: {
      type: Array,
      required: true,
    },
  },
  data: () => {
    return {
      baseURL: import.meta.env.VITE_APP_BASEURL,
    };
  },
};
</script>

<style lang="scss" scoped>
.report-modal {
  @apply h-full overflow-auto pt-16 pb-32 scrollbar-hide max-lg:pt-6 max-lg:pb-24;

  // .report-modal__item

  &__item {
    @apply mb-32 last:mb-0 max-lg:mb-16;
  }

  // .report-modal__image

  &__image {
    @apply h-full w-full object-contain;
  }
}
</style>
