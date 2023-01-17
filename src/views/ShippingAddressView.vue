<template>
  <div class="address">
    <div class="address__wrapper">
      <hera-address-form class="address__form" />
    </div>
  </div>
</template>
<script>
import HeraAddressForm from "@/components/profile/AddressForm.vue";

export default {
  name: "OrderHistoryView",
  components: {
    HeraAddressForm,
  },
};
</script>

<style lang="scss" scoped>
.address {
  // .address__wrapper

  &__wrapper {
    @apply max-lg:rounded-2xl max-lg:bg-white max-lg:p-7;
  }

  // .address__form

  &__form {
  }
}
</style>
