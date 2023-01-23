<template>
  <div class="account">
    <div class="account__wrapper">
      <hera-account-details class="account__details" />
      <hera-account-address class="account__address" />
    </div>
  </div>
</template>
<script>
import HeraAccountDetails from "@/components/profile/AccountDetails.vue";
import HeraAccountAddress from "@/components/profile/AccountAddress.vue";

export default {
  name: "MyAccountView",
  components: {
    HeraAccountDetails,
    HeraAccountAddress,
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
</style>
