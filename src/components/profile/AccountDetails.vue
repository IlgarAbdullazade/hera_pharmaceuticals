<template>
  <div class="account-details">
    <div class="account-details__wrapper">
      <div class="account-details__info">
        <div class="account-details__caption">Personal details</div>
        <div class="account-details__column" v-if="currentUser">
          <hera-account-tile
            class="account-details__tile"
            name="Name"
            :value="currentUser.name"
          />
          <hera-account-tile
            class="account-details__tile"
            name="Email"
            :value="currentUser.email"
          />
        </div>
      </div>
      <div class="account-details__actions">
        <hera-button
          class="account-details__button danger"
          text="Delete account"
        />
        <hera-button
          @click="onLogout"
          class="account-details__button secondary"
          text="Log out"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import HeraAccountTile from "@/components/profile/AccountTile.vue";
import HeraButton from "@/components/UI/Button.vue";

export default {
  name: "HeraAccountDetails",
  components: {
    HeraAccountTile,
    HeraButton,
  },
  computed: {
    ...mapGetters({
      currentUser: "auth/currentUser",
    }),
  },
  methods: {
    ...mapActions({
      logout: "auth/logout",
      clearCart: "cart/clearCart",
    }),
    onLogout() {
      this.$router.push({ name: "home" }).then(() =>
        this.logout().then(() => {
          this.clearCart();
        })
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.account-details {
  // .account-details__wrapper

  &__wrapper {
    @apply max-lg:rounded-2xl max-lg:bg-white max-lg:p-7;
  }

  // .account-details__info

  &__info {
    @apply mb-10 flex w-full flex-col rounded-2xl bg-bgPrimary p-4 max-lg:mb-7 max-lg:bg-transparent max-lg:p-0;
  }

  // .account-address__column

  &__column {
    @apply flex flex-col gap-2.5;
  }

  // .account-details__caption

  &__caption {
    @apply mb-5 text-base text-primary;
  }

  // .account-details__tile

  &__tile {
  }

  // .account-details__actions

  &__actions {
    @apply flex flex-col gap-2.5;
  }

  // .account-details__button

  &__button {
    @apply rounded-2xl;
  }
}
</style>
