<template>
  <div class="labtest-shimmer">
    <div class="labtest-shimmer__wrapper">
      <div class="labtest-shimmer__image labtest-shimmer-ibg-cover">
        <hera-shimmer
          :classes="[
            'aspect-square',
            'h-full',
            'w-full',
            'overflow-hidden',
            'rounded-2xl',
          ]"
        />
      </div>
      <div class="labtest-shimmer__info">
        <hera-shimmer :classes="['h-6', 'w-1/4', 'mb-2']" />
      </div>
    </div>
  </div>
</template>

<script>
import HeraShimmer from "@/components/common/Shimmer.vue";

export default {
  name: "HeraLabTestShimmer",
  components: {
    HeraShimmer,
  },
};
</script>

<style lang="scss" scoped>
.labtest-shimmer {
  @apply rounded-2xl bg-white p-2;
  // .labtest-shimmer__wrapper

  &__wrapper {
    @apply flex items-center gap-5 rounded-2xl bg-bgPrimary p-3;
  }

  // .labtest-shimmer__image

  &__image {
    @apply aspect-square w-20 shrink-0 overflow-hidden rounded-2xl;
  }

  // .labtest-shimmer__info

  &__info {
    @apply w-full;
  }

  // .labtest-shimmer__title

  &__title {
    @apply text-lg font-medium max-lg:text-sm;
  }
}
</style>
