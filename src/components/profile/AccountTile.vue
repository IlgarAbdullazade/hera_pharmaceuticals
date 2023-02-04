<template>
  <div class="account-tile">
    <div class="account-tile__name">{{ name }}:</div>
    <hera-shimmer
      v-if="isLoading"
      class="w-full"
      :classes="['h-5', 'w-1/2', 'ml-auto']"
    />
    <div v-else class="account-tile__value">
      {{ value }}
    </div>
  </div>
</template>

<script>
import HeraShimmer from "@/components/common/Shimmer.vue";

export default {
  name: "HeraAccountTile",
  components: {
    HeraShimmer,
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
    isLoading: {
      type: Boolean,
      _default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.account-tile {
  @apply flex justify-between gap-2.5;
  // .account-tile__name

  &__name {
    @apply whitespace-nowrap;
  }

  // .account-tile__value

  &__value {
    @apply text-textSecondary;
  }
}
</style>
