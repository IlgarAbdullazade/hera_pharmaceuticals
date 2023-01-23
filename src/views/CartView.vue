<template>
  <div class="page__cart cart">
    <div class="cart__container">
      <div class="cart__wrapper">
        <div class="cart__content cart-content">
          <div class="cart-content__body">
            <h3 class="cart-content__title">Cart</h3>
            <hera-cart-table class="cart-content__table" />
            <hera-cart-coupon class="cart-content__coupon" />
            <hera-cart-footer class="cart-content__footer" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import HeraCartTable from "@/components/cart/CartTable.vue";
import HeraCartCoupon from "@/components/cart/CartCoupon.vue";
import HeraCartFooter from "@/components/cart/CartFooter.vue";

export default {
  name: "CartView",
  components: {
    HeraCartTable,
    HeraCartCoupon,
    HeraCartFooter,
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
}
</style>
