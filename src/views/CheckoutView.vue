<template>
  <div class="page__checkout checkout">
    <div class="checkout__container">
      <div class="checkout__wrapper">
        <hera-checkout-form class="checkout__content" />
      </div>
    </div>
  </div>
</template>

<script>
import HeraCheckoutForm from "@/components/checkout/CheckoutForm.vue";

export default {
  name: "CheckoutView",
  components: {
    HeraCheckoutForm,
  },
};
</script>

<style lang="scss" scoped>
.checkout {
  // .checkout__container

  &__container {
  }

  // .checkout__wrapper

  &__wrapper {
  }

  // .checkout__content

  &__content {
  }
}
</style>
