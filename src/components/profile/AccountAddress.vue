<template>
  <div class="account__address account-address">
    <div class="account-address__wrapper">
      <div class="account-address__caption">Shipping address</div>
      <div class="account-address__column">
        <hera-account-tile
          class="account-address__tile"
          name="First name"
          value="No"
        />
        <hera-account-tile
          class="account-address__tile"
          name="Last name"
          value="No"
        />
        <hera-account-tile
          class="account-address__tile"
          name="Address"
          value="No"
        />
        <hera-account-tile
          class="account-address__tile"
          name="City"
          value="No"
        />
        <hera-account-tile
          class="account-address__tile"
          name="State/Province"
          value="No"
        />
        <hera-account-tile
          class="account-address__tile"
          name="Zip/Post code"
          value="No"
        />
      </div>
    </div>
  </div>
</template>

<script>
import HeraAccountTile from "@/components/profile/AccountTile.vue";

export default {
  name: "HeraAccountAddress",
  components: {
    HeraAccountTile,
  },
};
</script>

<style lang="scss" scoped>
.account-address {
  // .account-address__wrapper

  &__wrapper {
    @apply h-full w-full rounded-2xl bg-bgPrimary p-4;
    @apply max-lg:bg-white max-lg:p-7;
  }

  // .account-address__caption

  &__caption {
    @apply mb-5 text-base text-primary;
  }

  // .account-address__column

  &__column {
    @apply flex flex-col gap-2.5;
  }

  // .account-address__tile

  &__tile {
  }
}
</style>
