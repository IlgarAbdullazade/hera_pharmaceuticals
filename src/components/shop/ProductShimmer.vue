<template>
  <div class="product-shimmer">
    <div class="product-shimmer__wrapper">
      <div class="product-shimmer__image">
        <hera-shimmer
          :classes="[
            'aspect-square',
            'h-full',
            'w-full',
            'overflow-hidden',
            'rounded-3xl',
          ]"
        />
      </div>
      <div class="product-shimmer__info product-shimmer-info">
        <hera-shimmer :classes="['h-6', 'w-full', 'mb-2']" />
        <hera-shimmer :classes="['h-6', 'w-1/2', 'mb-4']" />
        <div class="flex gap-3">
          <hera-shimmer :classes="['h-6', 'w-14']" />
          <hera-shimmer :classes="['h-6', 'w-14']" />
        </div>
      </div>
      <div class="product-shimmer__action">
        <hera-shimmer :classes="['h-12', 'rounded-full', 'w-full']" />
      </div>
    </div>
  </div>
</template>
<script>
import HeraShimmer from "@/components/common/Shimmer.vue";

export default {
  name: "HeraProductShimmer",
  components: {
    HeraShimmer,
  },
};
</script>

<style lang="scss" scoped>
.product-shimmer {
  // .product-shimmer__wrapper

  &__wrapper {
    @apply grid grid-flow-row grid-cols-2 gap-x-5 gap-y-4 rounded-[30px] bg-white p-4;
    grid-template-areas:
      "image info"
      "image info"
      "image action";

    @media not all and (min-width: 768px) {
      grid-template-areas:
        "image info"
        "image info"
        "action action";
    }
  }
  // .product-shimmer__image

  &__image {
    grid-area: image;
  }

  // .product-shimmer__info

  &__info {
    grid-area: info;
  }

  // .product-shimmer__action

  &__action {
    @apply self-end;
    grid-area: action;
  }
}
</style>
