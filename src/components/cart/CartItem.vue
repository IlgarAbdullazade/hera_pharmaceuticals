<template>
  <li class="cart-table__row cart-table__item">
    <router-link
      :to="{
        name: 'product',
        params: {
          id: item.product.slug,
        },
      }"
      class="cart-table__cell cart-table__cell--product text-xs hover:text-primary"
    >
      {{ item.product.title }}
    </router-link>
    <div
      data-cell="Price"
      class="cart-table__cell cart-table__cell--price text-xl text-primary"
    >
      ${{ item.product.price }}
    </div>
    <div
      data-cell="Quantity"
      class="cart-table__cell cart-table__cell--quantity"
    >
      <hera-quantity-box
        :qyt="item.quantity"
        :maxValue="item.product.in_stock"
        @update="updateQuantity"
      />
    </div>
    <div
      data-cell="Subtotal"
      class="cart-table__cell cart-table__cell--subtotal text-xl text-primary"
    >
      ${{ item.product.price * item.quantity }}
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
    item: {
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
    updateUserCart(qty) {
      this.$store.dispatch("cart/updateUserCart", {
        product: this.item.product,
        quantity: qty,
      });
    },
    updateQuantity(quantity) {
      this.quantity = quantity;
      if (this.item.product.in_stock >= this.quantity) {
        this.$store.dispatch("cart/updateCartQuantity", {
          product: this.item.product,
          quantity: this.quantity,
        });
        this.updateUserCart(quantity);
      }
    },
    removeCartItem() {
      this.$store.dispatch("cart/removeCartItem", this.item.product);
      this.updateUserCart(0);
    },
  },
  mounted() {
    this.quantity = this.item.quantity;
  },
};
</script>

<style lang="scss" scoped></style>
