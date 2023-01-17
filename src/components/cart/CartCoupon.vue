<template>
  <div class="cart-coupon">
    <Form class="cart-coupon__form">
      <div class="cart-coupon__group">
        <Field
          type="text"
          name="code"
          class="cart-coupon__input input"
          placeholder="Coupon code"
        />
        <ErrorMessage name="code" class="error-message" />
      </div>
      <hera-button
        class="cart-coupon__button primary"
        :type="'submit'"
        text="Activate"
      />
    </Form>
  </div>
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import HeraButton from "@/components/UI/Button.vue";

export default {
  name: "HeraCartCoupon",
  components: {
    Form,
    Field,
    ErrorMessage,
    HeraButton,
  },
};
</script>

<style lang="scss" scoped>
.cart-coupon {
  // .cart-coupon__form

  &__form {
    @apply flex max-w-md gap-5 max-lg:max-w-none max-lg:flex-col;
  }

  // .cart-coupon__group

  &__group {
    @apply w-full;
  }

  // .cart-coupon__input

  &__input {
    @apply max-lg:text-center;
  }

  // .cart-coupon__button

  &__button {
    @apply w-full;
  }
}
</style>
