<template>
  <div class="cart-footer">
    <div class="cart-footer__wrapper">
      <div class="cart-footer__row" v-if="cartItems.length">
        <span class="cart-footer__caption">Subtotal:</span>
        <div class="flex gap-2">
          <span class="cart-footer__price">${{ cartTotalAmount }}</span>
          <span
            v-if="cartPromo"
            class="cart-footer__price !text-textSecondary line-through"
            >${{ cartRealTotalAmount }}</span
          >
        </div>
      </div>
      <div class="cart-footer__row" v-if="cartItems.length">
        <span class="cart-footer__caption">Shipping:</span>
        <span class="cart-footer__price">${{ shippingPrice }}</span>
      </div>
      <div class="cart-footer__row">
        <span class="cart-footer__caption">Total:</span>
        <span class="cart-footer__price"
          >${{ cartTotalAmount + (cartItems.length ? shippingPrice : 0) }}</span
        >
      </div>
      <hera-button
        :isLink="true"
        :link="{ name: 'checkout' }"
        class="cart-footer__button primary"
        text="Procced to checkout"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import HeraButton from "@/components/UI/Button.vue";

export default {
  name: "HeraCartFooter",
  components: {
    HeraButton,
  },
  data: () => {
    return {
      shippingPrice: 80,
    };
  },
  computed: {
    ...mapGetters({
      cartItems: "cart/cartItems",
      cartPromo: "cart/cartPromo",
      cartTotalAmount: "cart/cartTotalAmount",
      cartRealTotalAmount: "cart/cartRealTotalAmount",
    }),
  },
};
</script>

<style lang="scss" scoped>
.cart-footer {
  @apply max-w-md max-lg:max-w-none;
  // .cart-footer__wrapper

  &__wrapper {
    @apply flex flex-col gap-2.5 divide-y-2 rounded-3xl bg-bgPrimary p-7;
  }

  // .cart-footer__row

  &__row {
    @apply flex justify-between gap-5 pt-4;
  }

  // .cart-footer__caption

  &__caption {
    @apply text-textPrimary;
  }

  // .cart-footer__price

  &__price {
    @apply text-xl text-primary;
  }

  // .cart-footer__button

  &__button {
    @apply mt-4;
  }
}
</style>
