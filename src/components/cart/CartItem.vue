<template>
  <li class="cart-table__row cart-table__item">
    <router-link
      :to="{
        name: 'product',
        params: { category: product.category.slug, id: product.id },
      }"
      class="cart-table__cell cart-table__cell--product text-xs hover:text-primary"
    >
      {{ product.name }}
    </router-link>
    <div
      data-cell="Price"
      class="cart-table__cell cart-table__cell--price text-xl text-primary"
    >
      ${{ product.price }}
    </div>
    <div
      data-cell="Quantity"
      class="cart-table__cell cart-table__cell--quantity"
    >
      <hera-quantity-box :qyt="product.quantity" @update="updateQuantity" />
    </div>
    <div
      data-cell="Subtotal"
      class="cart-table__cell cart-table__cell--subtotal text-xl text-primary"
    >
      ${{ product.price * product.quantity }}
    </div>
    <div class="cart-table__cell cart-table__cell--remove">
      <button @click="removeCartItem()" class="cart-table__remove-button">
        <Icon icon="mdi:trash" />
      </button>
    </div>
  </li>
</template>

<script>
import { Icon } from "@iconify/vue";
import HeraQuantityBox from "@/components/UI/QuantityBox.vue";

export default {
  name: "HeraCartItem",
  components: {
    Icon,
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
      quantity: null,
    };
  },
  methods: {
    addToCart() {
      this.$store.dispatch("cart/addToCart", this.product);
    },
    updateQuantity(quantity) {
      this.product.quantity = quantity;
      this.addToCart();
    },
    removeCartItem() {
      this.$store.dispatch("cart/removeCartItem", this.product);
    },
  },
  mounted() {
    this.quantity = this.product.quantity;
  },
};
</script>

<style lang="scss" scoped></style>
