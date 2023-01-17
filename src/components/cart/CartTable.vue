<template>
  <div class="cart-table">
    <div class="cart-table__wrapper">
      <div class="cart-table__header">
        <div class="cart-table__row">
          <div class="cart-table__cell cart-table__cell--product">Product</div>
          <div class="cart-table__cell cart-table__cell--price">Price</div>
          <div class="cart-table__cell cart-table__cell--quantity">
            Quantity
          </div>
          <div class="cart-table__cell cart-table__cell--subtotal">
            Subtotal
          </div>
          <div class="cart-table__cell cart-table__cell--remove"></div>
        </div>
      </div>
      <div class="cart-table__body">
        <div class="cart-table__row cart-table__item">
          <div class="cart-table__cell cart-table__cell--product text-xs">
            NOVO NORDISK NORDITROPIN SIMPLEXX 5MG (15IU) - SOMATROPINE - 191
            AMINO ACID
          </div>
          <div
            data-cell="Price"
            class="cart-table__cell cart-table__cell--price text-xl text-primary"
          >
            $50
          </div>
          <div
            data-cell="Quantity"
            class="cart-table__cell cart-table__cell--quantity"
          >
            <hera-quantity-box />
          </div>
          <div
            data-cell="Subtotal"
            class="cart-table__cell cart-table__cell--subtotal text-xl text-primary"
          >
            $150
          </div>
          <div class="cart-table__cell cart-table__cell--remove">
            <button class="cart-table__remove-button">
              <Icon icon="mdi:trash" />
            </button>
          </div>
        </div>
        <div class="cart-table__row cart-table__item">
          <div
            data-cell="Product"
            class="cart-table__cell cart-table__cell--product text-xs"
          >
            NOVO NORDISK NORDITROPIN SIMPLEXX 5MG (15IU) - SOMATROPINE - 191
            AMINO ACID
          </div>
          <div
            data-cell="Price"
            class="cart-table__cell cart-table__cell--price text-xl text-primary"
          >
            $50
          </div>
          <div
            data-cell="Quantity"
            class="cart-table__cell cart-table__cell--quantity"
          >
            <hera-quantity-box />
          </div>
          <div
            data-cell="Subtotal"
            class="cart-table__cell cart-table__cell--subtotal text-xl text-primary"
          >
            $150
          </div>
          <div class="cart-table__cell cart-table__cell--remove">
            <button class="cart-table__remove-button">
              <Icon icon="mdi:trash" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";
import HeraQuantityBox from "@/components/UI/QuantityBox.vue";

export default {
  name: "HeraCartTable",
  components: {
    Icon,
    HeraQuantityBox,
  },
};
</script>

<style lang="scss" scoped>
.cart-table {
  // .cart-table__wrapper

  &__wrapper {
  }

  // .cart-table__header

  &__header {
    @apply py-3 px-5 text-textSecondary max-lg:hidden;
  }

  // .cart-table__row

  &__row {
    @apply grid grid-flow-row grid-cols-8 gap-4 max-lg:grid-cols-3;
    grid-template-areas: "product product product price quantity subtotal remove remove";

    @media not all and (min-width: 1024px) {
      grid-template-areas:
        "product product product"
        "price subtotal quantity"
        "remove remove remove";
    }
  }

  // .cart-table__body

  &__body {
    @apply flex flex-col gap-1  max-lg:gap-9;
  }

  // .cart-table__item

  &__item {
    @apply relative rounded-xl bg-bgPrimary py-3 px-5 font-medium max-lg:p-4;
  }

  // .cart-table__cell

  &__cell {
    @apply relative flex w-full justify-center first:justify-start last:justify-end max-lg:justify-start max-lg:pb-6 max-lg:first:pb-0 max-lg:last:justify-center max-lg:last:pb-0;
    @apply max-lg:after:absolute max-lg:after:left-0 max-lg:after:bottom-0 max-lg:after:text-sm max-lg:after:text-textSecondary max-lg:after:content-[attr(data-cell)];

    // .cart-table__cell--product

    &--product {
      grid-area: product;
    }

    // .cart-table__cell--price

    &--price {
      grid-area: price;
    }

    // .cart-table__cell--quantity

    &--quantity {
      grid-area: quantity;
    }

    // .cart-table__cell--subtotal

    &--subtotal {
      grid-area: subtotal;
    }

    // .cart-table__cell--remove

    &--remove {
      @apply max-lg:absolute max-lg:left-1/2 max-lg:top-1/2 max-lg:-translate-x-1/2 max-lg:-translate-y-2;
      grid-area: remove;
    }
  }

  // .cart-table__remove-button

  &__remove-button {
    @apply flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-bgElement text-lg text-primary transition-colors hover:bg-bgDanger hover:text-textDanger;
  }
}
</style>
