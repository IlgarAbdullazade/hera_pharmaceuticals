<template>
  <div class="shimmer">
    <div :class="['shimmer__block', ...classes]"></div>
  </div>
</template>

<script>
export default {
  name: "HeraShimmer",
  props: {
    classes: {
      type: Array,
      default: [],
    },
  },
};
</script>
<style scoped lang="scss">
.shimmer {
  // .shimmer__block

  &__block {
    @apply relative overflow-hidden bg-gray-300 before:absolute before:-left-36 before:top-0 before:block before:h-full before:w-36 before:content-[''];
    &:before {
      background-image: linear-gradient(
        to left,
        rgba(251, 251, 251, 0.05),
        rgba(251, 251, 251, 0.3),
        rgba(251, 251, 251, 0.6),
        rgba(251, 251, 251, 0.3),
        rgba(251, 251, 251, 0.05)
      );
      animation: load 1s cubic-bezier(0.4, 0, 0.2, 1) infinite;
    }
  }
}

@keyframes load {
  from {
    @apply -left-36;
  }
  to {
    @apply left-full;
  }
}
</style>
