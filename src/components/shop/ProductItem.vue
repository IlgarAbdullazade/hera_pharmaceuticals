<template>
  <div class="product-item">
    <div class="product-item__wrapper">
      <router-link
        :to="{ name: 'product', params: { id: 'id' } }"
        class="product-item__link"
      >
        <div class="product-item__image product-item-ibg-cover">
          <img src="@/assets/img/mock/omega.png" alt="Omega" />
        </div>
      </router-link>
      <div class="product-item__info product-item-info">
        <router-link
          :to="{ name: 'product', params: { id: 'id' } }"
          class="product-item-info__link"
        >
          <h3 class="product-item-info__name line-clamp-2">
            Testosterone Propionate 200 mg/ml
          </h3>
        </router-link>
        <div class="product-item-info__numbers">
          <h5 class="product-item-info__price">$50</h5>
          <hera-quantity-box class="product-item-info__quantity" />
        </div>
      </div>
      <hera-button class="product-item__button _outline" text="Add to cart">
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
import HeraQuantityBox from "@/components/UI/QuantityBox.vue";

export default {
  name: "HeraProductItem",
  components: {
    Icon,
    HeraButton,
    HeraQuantityBox,
  },
};
</script>

<style lang="scss" scoped>
.product-item {
  // .product-item__wrapper

  &__wrapper {
    @apply grid grid-flow-row grid-cols-2 gap-x-5 gap-y-4 rounded-[30px] bg-white p-4;
    grid-template-areas:
      "image info"
      "image info"
      "image button";

    @media not all and (min-width: 768px) {
      grid-template-areas:
        "image info"
        "image info"
        "button button";
    }
  }

  // .product-item__link

  &__link {
    @apply block;
    grid-area: image;
  }

  // .product-item__image

  &__image {
    @apply aspect-square h-full w-full overflow-hidden rounded-3xl;
  }

  // .product-item__info

  &__info {
    grid-area: info;
  }

  // .product-item__button

  &__button {
    @apply py-2;
    grid-area: button;
  }
}

.product-item-info {
  // .product-item-info__link

  &__link {
    @apply transition-colors hover:text-primary;
  }

  // .product-item-info__name

  &__name {
    @apply mb-4 text-base font-medium;
  }

  // .product-item-info__numbers

  &__numbers {
    @apply flex items-center gap-4;
  }

  // .product-item-info__price

  &__price {
    @apply text-xl font-semibold;
  }

  // .product-item-info__quantity

  &__quantity {
  }
}
</style>
