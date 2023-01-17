<template>
  <div class="account">
    <div class="account__wrapper">
      <div class="account__details account-details">
        <div class="account-details__wrapper">
          <div class="account-details__info">
            <div class="account-details__caption">Personal details</div>
            <div class="account-details__column">
              <hera-account-tile
                class="account-details__tile"
                name="Name"
                value="PavlovichDesign"
              />
              <hera-account-tile
                class="account-details__tile"
                name="Email"
                value="Dpavloviche@gmail.com"
              />
            </div>
          </div>
          <div class="account-details__actions">
            <hera-button
              class="account-details__button danger"
              text="Delete account"
            />
            <hera-button
              class="account-details__button secondary"
              text="Log out"
            />
          </div>
        </div>
      </div>
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
    </div>
  </div>
</template>
<script>
import HeraAccountTile from "@/components/profile/AccountTile.vue";
import HeraButton from "@/components/UI/Button.vue";

export default {
  name: "MyAccountView",
  components: {
    HeraAccountTile,
    HeraButton,
  },
};
</script>

<style lang="scss" scoped>
.account {
  // .account__wrapper

  &__wrapper {
    @apply flex gap-2.5 max-lg:flex-col;
  }

  // .account__details

  &__details {
    @apply w-full max-w-xs max-lg:max-w-none;
  }

  // .account__address

  &__address {
    @apply w-full;
  }
}
.account-details {
  // .account-details__wrapper

  &__wrapper {
    @apply max-lg:rounded-2xl max-lg:bg-white max-lg:p-7;
  }

  // .account-details__info

  &__info {
    @apply mb-10 flex w-full flex-col rounded-2xl bg-bgPrimary p-4 max-lg:mb-7 max-lg:bg-transparent max-lg:p-0;
  }

  // .account-address__column

  &__column {
    @apply flex flex-col gap-2.5;
  }

  // .account-details__caption

  &__caption {
    @apply mb-5 text-base text-primary;
  }

  // .account-details__tile

  &__tile {
  }

  // .account-details__actions

  &__actions {
    @apply flex flex-col gap-2.5;
  }

  // .account-details__button

  &__button {
    @apply rounded-2xl;
  }
}

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
