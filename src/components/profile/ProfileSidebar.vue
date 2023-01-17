<template>
  <div class="profile-sidebar">
    <div class="profile-sidebar__wrapper">
      <h3 class="profile-sidebar__title">{{ currentView }}</h3>
      <nav class="profile-sidebar__menu profile-menu">
        <ul class="profile-menu__list">
          <li class="profile-menu__item">
            <router-link
              :to="{ name: 'myAccount' }"
              exact-active-class="active"
              class="profile-menu__link"
              >My account</router-link
            >
          </li>
          <li class="profile-menu__item">
            <router-link
              :to="{ name: 'orderHistory' }"
              exact-active-class="active"
              class="profile-menu__link"
              >Order history</router-link
            >
          </li>
          <li class="profile-menu__item">
            <router-link
              :to="{ name: 'shippingAddress' }"
              exact-active-class="active"
              class="profile-menu__link"
              >Shipping address</router-link
            >
          </li>
          <li class="profile-menu__item">
            <router-link
              :to="{ name: 'accountSettings' }"
              exact-active-class="active"
              class="profile-menu__link"
              >Account setting</router-link
            >
          </li>
          <li class="profile-menu__item">
            <router-link
              :to="{ name: 'myReviews' }"
              exact-active-class="active"
              class="profile-menu__link"
              >My reviews</router-link
            >
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>
<script>
export default {
  name: "HeraProfileSidebar",
  computed: {
    currentView() {
      return this.$route.meta.title;
    },
  },
};
</script>

<style lang="scss" scoped>
.profile-sidebar {
  // .profile-sidebar__wrapper

  &__wrapper {
    @apply rounded-2xl bg-white p-7 pb-4;
  }

  // .profile-sidebar__title

  &__title {
    @apply mb-4 text-2xl font-semibold;
  }

  // .profile-sidebar__menu

  &__menu {
  }
}
.profile-menu {
  // .profile-menu__list

  &__list {
  }

  // .profile-menu__item

  &__item {
  }

  // .profile-menu__link

  &__link {
    @apply -mx-7 block py-4 px-7 text-textSecondary transition-colors hover:bg-bgElement hover:text-primary;
    &.active {
      @apply bg-bgElement text-primary;
    }
  }
}
</style>
