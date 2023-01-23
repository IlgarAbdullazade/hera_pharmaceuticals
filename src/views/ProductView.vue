<template>
  <div class="product-view">
    <div class="product-view__wrapper">
      <div class="product-view__header">
        <div class="product-view__card product-card">
          <div class="product-card__wrapper">
            <div class="product-card__image product-card-ibg-cover">
              <img :src="product.image" :alt="product.name" />
            </div>
            <div class="product-card__info">
              <h3 class="product-card__name">
                {{ product.name }}
              </h3>
              <div class="product-card__numbers">
                <h5 class="product-card__price">${{ product.price }}</h5>
                <hera-quantity-box
                  class="product-card__quantity"
                  :qyt="quantity"
                  @update="updateQuantity"
                />
              </div>
              <hera-button
                @click="
                  this.isProductInCart(this.product.id) ? null : addToCart()
                "
                :isLink="!!this.isProductInCart(this.product.id)"
                :link="{ name: 'cart' }"
                :class="[
                  'product-card__button',
                  this.isProductInCart(this.product.id)
                    ? `primary`
                    : '_outline',
                ]"
                :text="
                  this.isProductInCart(this.product.id)
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
        <hera-product-report
          class="product-view__report"
          :reports="product.reports"
        />
      </div>
      <div class="product-view__content product-content">
        <h4 class="product-content__title">Description</h4>
        <hera-paragraph class="product-content__text">
          {{ product.description }}</hera-paragraph
        >
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { Icon } from "@iconify/vue";
import HeraButton from "@/components/UI/Button.vue";
import HeraQuantityBox from "@/components/UI/QuantityBox.vue";
import HeraParagraph from "@/components/UI/Paragraph.vue";
import HeraProductReport from "@/components/shop/ProductReport.vue";

export default {
  name: "ProductView",
  components: {
    Icon,
    HeraButton,
    HeraParagraph,
    HeraQuantityBox,
    HeraProductReport,
  },
  data: () => {
    return {
      quantity: null,
    };
  },
  computed: {
    ...mapGetters({
      getProductById: "products/getProductById",
      isProductInCart: "cart/isProductInCart",
    }),
    product() {
      const product = this.getProductById(this.$route.params.id);
      this.quantity = product.quantity;
      return product;
    },
  },
  methods: {
    addToCart() {
      this.product.quantity = this.quantity;
      this.$store.dispatch("cart/addToCart", this.product);
    },
    updateQuantity(quantity) {
      this.quantity = quantity;
      if (this.isProductInCart(this.product.id)) this.addToCart();
    },
  },
  mounted() {
    const item = this.isProductInCart(this.product.id);
    this.quantity = item ? item.quantity : 1;
  },
};
</script>

<style lang="scss" scoped>
.product-view {
  // .product-view__wrapper

  &__wrapper {
    @apply rounded-3xl bg-white p-6 max-lg:-mx-4 max-lg:p-4;
  }

  // .product-view__header

  &__header {
    @apply mb-7 flex max-lg:flex-col;
  }

  // .product-view__card

  &__card {
    @apply mr-4 basis-2/3 max-lg:mr-0 max-lg:basis-full;
  }

  // .product-view__report

  &__report {
    @apply basis-1/3 max-lg:basis-full;
  }

  // .product-view__content

  &__content {
  }
}
.product-card {
  // .product-card__wrapper

  &__wrapper {
    @apply flex h-full items-center gap-6 overflow-hidden rounded-3xl bg-[#F7F8FA] max-lg:flex-col max-lg:bg-transparent;
  }

  // .product-card__image

  &__image {
    @apply aspect-square h-full w-full max-w-[328px] shrink-0 overflow-hidden rounded-3xl max-lg:max-w-none;
  }

  // .product-card__info

  &__info {
    @apply flex flex-col items-start gap-4 p-6  max-lg:items-center max-lg:p-0 max-lg:text-center;
  }

  // .product-card__name

  &__name {
    @apply text-2xl font-semibold;
  }

  // .product-card__numbers

  &__numbers {
    @apply flex items-center gap-4;
  }

  // .product-card__price

  &__price {
    @apply text-xl font-semibold;
  }

  // .product-card__quantity

  &__quantity {
  }

  // .product-card__button

  &__button {
    @apply px-10 py-2 max-lg:w-full;
  }
}

.product-content {
  // .product-content__title

  &__title {
    @apply mb-4 text-base font-medium text-primary;
  }

  // .product-content__text

  &__text {
  }
}
</style>
