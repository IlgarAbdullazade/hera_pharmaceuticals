<template>
  <div class="account-tile">
    <div class="account-tile__name">{{ name }}:</div>
    <div class="account-tile__value">{{ value }}</div>
  </div>
</template>

<script>
export default {
  name: "HeraAccountTile",
  props: {
    name: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.account-tile {
  @apply flex justify-between gap-2.5;
  // .account-tile__name

  &__name {
  }

  // .account-tile__value

  &__value {
    @apply text-textSecondary;
  }
}
</style>
