<template>
  <div class="cart-coupon">
    <Form
      @submit="onSubmitForm"
      :validation-schema="validationSchema"
      class="cart-coupon__form"
      ref="couponForm"
    >
      <div class="cart-coupon__group">
        <Field
          :disabled="isLoading"
          type="text"
          name="promo_code"
          class="cart-coupon__input input"
          placeholder="Coupon code"
        />
      </div>
      <hera-button
        :disabled="isLoading"
        class="cart-coupon__button primary"
        type="submit"
        text="Activate"
      />
    </Form>
    <div v-if="cartPromo" class="cart-coupon__info">
      Promo code "{{ cartPromo.promo_text }}" has applied
    </div>
  </div>
</template>
<script>
import { mapState, mapActions, mapGetters } from "vuex";
import { Form, Field } from "vee-validate";
import HeraButton from "@/components/UI/Button.vue";

export default {
  name: "HeraCartCoupon",
  components: {
    Form,
    Field,
    HeraButton,
  },
  data() {
    return {
      validationSchema: {
        promo_code: "required",
      },
    };
  },
  computed: {
    ...mapState({
      isLoading: (state) => state.cart.isLoading,
    }),
    ...mapGetters({
      cartPromo: "cart/cartPromo",
    }),
  },
  methods: {
    ...mapActions({
      acceptPromoCode: "cart/acceptPromoCode",
    }),
    onSubmitForm(values) {
      this.acceptPromoCode(values).then(() => {
        this.$refs.couponForm.resetForm();
      });
    },
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

  // .cart-coupon__info

  &__info {
    @apply mt-2 max-w-md px-7 text-green-500 max-lg:max-w-none;
  }
}
</style>
