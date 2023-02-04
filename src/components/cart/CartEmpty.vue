<template>
  <div class="cart-empty">
    <div class="cart-empty__wrapper">
      <div class="cart-empty__icon">
        <Icon icon="carbon:shopping-cart-clear" />
      </div>
      <h4 class="cart-empty__title">Your cart is empty</h4>
      <hera-button
        :isLink="true"
        :link="{ name: 'shop' }"
        class="cart-empty__button primary"
        text="Start Shopping"
      >
        <template v-slot:iconAfter>
          <Icon class="ml-1 text-base" icon="mdi:cart" />
        </template>
      </hera-button>
    </div>
  </div>
</template>
<script>
import { Icon } from "@iconify/vue";
import HeraButton from "@/components/UI/Button.vue";

export default {
  name: "HeraCartEmpty",
  components: {
    Icon,
    HeraButton,
  },
};
</script>

<style lang="scss" scoped>
.cart-empty {
  // .cart-empty__wrapper

  &__wrapper {
    @apply flex flex-col items-center justify-center;
  }

  // .cart-empty__icon

  &__icon {
    @apply mb-3 text-7xl text-primary;
  }

  // .cart-empty__title

  &__title {
    @apply mb-5 text-xl font-medium;
  }

  // .cart-empty__title

  &__button {
    @apply px-6;
  }
}
</style>
