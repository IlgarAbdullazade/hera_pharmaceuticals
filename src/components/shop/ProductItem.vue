<template>
  <div class="product-item">
    <div class="product-item__wrapper">
      <router-link
        :to="{
          name: 'product',
          params: { id: product.slug },
        }"
        class="product-item__link"
      >
        <div class="product-item__image product-item-ibg-cover">
          <img :src="baseURL + product.image" :alt="product.title" />
        </div>
      </router-link>
      <div class="product-item__info product-item-info">
        <router-link
          :to="{
            name: 'product',
            params: { id: product.slug },
          }"
          class="product-item-info__link"
        >
          <h3 class="product-item-info__name line-clamp-2">
            {{ product.title }}
          </h3>
        </router-link>
        <div class="product-item-info__numbers" v-if="quantity">
          <h5 class="product-item-info__price">${{ product.price }}</h5>
          <hera-quantity-box
            class="product-item-info__quantity"
            :qyt="quantity"
            :maxValue="product.in_stock"
            @update="updateQuantity"
          />
        </div>
      </div>
      <div class="product-item__action">
        <hera-button
          @click="
            isLoggedIn
              ? this.isProductInCart(this.product.slug)
                ? null
                : addToCart()
              : null
          "
          :isLink="!!this.isProductInCart(this.product.slug) || !isLoggedIn"
          :link="{ name: isLoggedIn ? 'cart' : 'signIn' }"
          :class="[
            'product-item__button',
            this.isProductInCart(this.product.slug) ? `primary` : '_outline',
          ]"
          :text="
            this.isProductInCart(this.product.slug)
              ? `In the cart`
              : `Add to cart`
          "
        >
          <template v-slot:iconAfter>
            <Icon class="ml-1 text-base" icon="mdi:cart" />
          </template>
        </hera-button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
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
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  data: () => {
    return {
      baseURL: import.meta.env.VITE_APP_BASEURL,
      quantity: null,
    };
  },
  computed: {
    ...mapGetters({
      isLoggedIn: "auth/isLoggedIn",
      isProductInCart: "cart/isProductInCart",
    }),
  },
  methods: {
    updateUserCart() {
      this.$store.dispatch("cart/updateUserCart", {
        product: this.product,
        quantity: this.quantity,
      });
    },
    addToCart() {
      this.$store.dispatch("cart/addToCart", {
        product: this.product,
        quantity: this.quantity,
      });
      this.updateUserCart();
    },
    updateQuantity(quantity) {
      this.quantity = quantity;
      if (
        this.product.in_stock >= this.quantity &&
        this.isProductInCart(this.product.slug)
      ) {
        this.$store.dispatch("cart/updateCartQuantity", {
          product: this.product,
          quantity: this.quantity,
        });
        this.updateUserCart();
      }
    },
  },
  mounted() {
    const item = this.isProductInCart(this.product.slug);
    this.quantity = item ? item.quantity : 1;
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
      "image action";

    @media not all and (min-width: 768px) {
      grid-template-areas:
        "image info"
        "image info"
        "action action";
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

  // .product-item__action

  &__action {
    @apply self-end;
    grid-area: action;
  }

  // .product-item__button

  &__button {
    @apply w-full py-2;
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
