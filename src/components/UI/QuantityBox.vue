<template>
  <div class="quantity-box">
    <div class="quantity-box__wrapper">
      <div class="quantity-box__action">
        <button
          type="button"
          @click="decrementQuantity"
          class="quantity-box__button"
          data-type="minus"
        >
          <Icon
            class="quantity-box__icon"
            icon="material-symbols:arrow-left-rounded"
          />
        </button>
      </div>
      <input
        type="text"
        name="quantity"
        v-bind:value="quantity"
        @input="updateQuantity($event.target.value)"
        class="input quantity-box__input"
        readonly
      />
      <div class="quantity-box__action">
        <button
          type="button"
          @click="incrementQuantity"
          class="quantity-box__button"
          data-type="plus"
        >
          <Icon
            class="quantity-box__icon"
            icon="material-symbols:arrow-right-rounded"
          />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";

export default {
  name: "HeraQuantityBox",
  components: {
    Icon,
  },
  props: {
    qyt: {
      type: Number,
      default: 1,
    },
  },
  data: () => {
    return {
      quantity: 1,
    };
  },
  methods: {
    incrementQuantity() {
      this.quantity += 1;
      this.$emit("update", this.quantity);
    },
    decrementQuantity() {
      if (this.quantity > 1) {
        this.quantity -= 1;
        this.$emit("update", this.quantity);
      }
    },
    updateQuantity() {
      this.$emit("update", this.quantity);
    },
    onlyNumbers(e) {
      let keyCode = e.keyCode;
      if ((keyCode < 48 || keyCode > 57) && keyCode !== 8 && keyCode !== 9) {
        e.preventDefault();
      }
    },
  },
  mounted() {
    this.quantity = this.qyt;
  },
};
</script>

<style lang="scss" scoped>
.quantity-box {
  // .quantity-box__wrapper

  &__wrapper {
    @apply flex max-w-[65px] items-center rounded-full bg-neutral-100 px-0.5;
  }

  // .quantity-box__action

  &__action {
  }

  // .quantity-box__button

  &__button {
    @apply flex items-center justify-center text-xl text-[#808080] transition-transform hover:scale-125;
  }

  // .quantity-box__icon

  &__icon {
  }

  // .quantity-box__input

  &__input {
    @apply py-1 px-0 text-center font-medium;
  }
}
</style>
