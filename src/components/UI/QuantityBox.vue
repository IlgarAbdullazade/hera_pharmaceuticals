<template>
  <div class="quantity-box">
    <div class="quantity-box__wrapper">
      <div class="quantity-box__action">
        <button type="button" class="quantity-box__button" data-type="minus">
          <Icon
            class="quantity-box__icon"
            icon="material-symbols:arrow-left-rounded"
          />
        </button>
      </div>
      <input
        type="text"
        name="quantity"
        value="1"
        class="input quantity-box__input"
      />
      <div class="quantity-box__action">
        <button type="button" class="quantity-box__button" data-type="minus">
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
