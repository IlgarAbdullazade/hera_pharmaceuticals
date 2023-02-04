<template>
  <div class="actions-header">
    <router-link
      :to="{ name: 'cart' }"
      class="actions-header__item cart-header"
    >
      <div class="cart-header__icon">
        <Icon icon="mdi:cart" />
        <div v-if="cartItems.length != 0" class="cart-header__badge">
          {{ cartItems.length }}
        </div>
      </div>
    </router-link>

    <router-link
      v-if="isLoggedIn"
      :to="{ name: 'myAccount' }"
      class="actions-header__item user-header"
    >
      <div class="user-header__wrapper">
        <div class="user-header__image"><Icon icon="mdi:account-circle" /></div>
        <div class="user-header__name">My Account</div>
      </div>
    </router-link>

    <hera-button
      v-else
      class="actions-header__button _outline"
      :isLink="true"
      :link="{ name: 'signIn' }"
      text="Sign In"
    />
    <router-link
      :to="{ name: isLoggedIn ? 'profile' : 'signIn' }"
      class="actions-header__item actions-header__item--mobile"
    >
      <Icon icon="mdi:account-circle" />
    </router-link>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { Icon } from "@iconify/vue";
import HeraButton from "@/components/UI/Button.vue";

export default {
  name: "HeraHeaderActions",
  components: {
    Icon,
    HeraButton,
  },
  computed: {
    ...mapGetters({
      currentUser: "auth/currentUser",
      isLoggedIn: "auth/isLoggedIn",
      cartItems: "cart/cartItems",
    }),
  },
};
</script>

<style lang="scss" scoped>
.actions-header {
  @apply flex items-center max-lg:justify-end;
  // .actions-header__item

  &__item {
    @apply p-2 px-2.5 max-lg:-mr-1.5;

    &--mobile {
      @apply text-3xl text-primary lg:hidden;
    }
  }

  // .actions-header__button

  &__button {
    @apply ml-3 min-w-[130px] max-lg:hidden;
  }
}
.cart-header {
  @apply relative;
  // .cart-header__icon

  &__icon {
    @apply text-2xl text-primary;
  }

  // .cart-header__badge

  &__badge {
    @apply absolute -top-0.5 right-0 flex h-5 w-5 items-center  justify-center rounded-full bg-textDanger text-xs font-medium text-white;
  }
}
.user-header {
  @apply max-lg:hidden;
  // .user-header__wrapper

  &__wrapper {
    @apply flex items-center;
  }

  // .user-header__image

  &__image {
    @apply mr-3 text-3xl text-primary max-lg:mr-0;
  }

  // .user-header__name

  &__name {
    @apply font-secondary font-bold text-textHeader max-lg:hidden;
  }
}
</style>
