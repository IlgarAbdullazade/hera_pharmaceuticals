<template>
  <div class="page__cart cart">
    <div class="cart__container">
      <div class="cart__wrapper">
        <div class="cart__content cart-content">
          <div class="cart-content__body">
            <h3 class="cart-content__title">Cart</h3>
            <template v-if="cartItems.length">
              <hera-cart-table class="cart-content__table" />
              <hera-cart-coupon class="cart-content__coupon" />
              <hera-cart-footer class="cart-content__footer" />
            </template>
            <hera-cart-empty v-else class="cart-content__empty" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import HeraCartTable from "@/components/cart/CartTable.vue";
import HeraCartCoupon from "@/components/cart/CartCoupon.vue";
import HeraCartFooter from "@/components/cart/CartFooter.vue";
import HeraCartEmpty from "@/components/cart/CartEmpty.vue";

export default {
  name: "CartView",
  components: {
    HeraCartTable,
    HeraCartCoupon,
    HeraCartFooter,
    HeraCartEmpty,
  },
  computed: {
    ...mapGetters({
      cartItems: "cart/cartItems",
    }),
  },
};
</script>

<style lang="scss" scoped>
.cart {
  // .cart__container

  &__container {
  }

  // .cart__wrapper

  &__wrapper {
  }

  // .cart__content

  &__content {
  }
}
.cart-content {
  @apply rounded-3xl bg-white p-7;
  // .cart-content__body

  &__body {
    @apply mb-10;
  }

  // .cart-content__title

  &__title {
    @apply mb-7 text-2xl font-semibold;
  }

  // .cart-content__table

  &__table {
    @apply mb-12;
  }

  // .cart-content__coupon

  &__coupon {
    @apply mb-12;
  }

  // .cart-content__footer

  &__footer {
  }

  // .cart-content__empty

  &__empty {
    @apply pt-10;
  }
}
</style>
