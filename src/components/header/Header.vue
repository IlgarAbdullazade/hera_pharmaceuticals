<template>
  <header class="header">
    <div class="header__container">
      <div class="header__wrapper">
        <div class="header__body">
          <div class="header__mobile">
            <button
              type="button"
              :class="{ 'menu-open': this.menuIsOpen }"
              class="icon-menu"
              @click="toggleMenu()"
            >
              <div class="icon-menu__wrapper">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </button>
            <button type="button" class="search-button">
              <Icon icon="material-symbols:search-rounded" />
            </button>
          </div>
          <hera-logo class="header__logo" />
          <div
            class="header__menu menu"
            :class="{ 'menu-open': this.menuIsOpen }"
          >
            <nav class="menu__body">
              <ul class="menu__list">
                <li class="menu__item">
                  <router-link
                    :to="{ name: 'home' }"
                    exact-active-class="active"
                    class="menu__link"
                    >Home</router-link
                  >
                </li>
                <li class="menu__item">
                  <router-link
                    :to="{ name: 'products' }"
                    exact-active-class="active"
                    class="menu__link"
                    >Shop</router-link
                  >
                </li>
                <li class="menu__item">
                  <router-link
                    :to="{ name: 'aboutUs' }"
                    exact-active-class="active"
                    class="menu__link"
                    >About us</router-link
                  >
                </li>
                <li class="menu__item">
                  <router-link
                    :to="{ name: 'labTests' }"
                    exact-active-class="active"
                    class="menu__link"
                    >Labtests</router-link
                  >
                </li>
                <li class="menu__item">
                  <router-link
                    :to="{ name: 'contactUs' }"
                    exact-active-class="active"
                    class="menu__link"
                    >Contact us</router-link
                  >
                </li>
                <li class="menu__item">
                  <router-link
                    :to="{ name: 'faq' }"
                    exact-active-class="active"
                    class="menu__link"
                    >FAQ</router-link
                  >
                </li>
              </ul>
              <button @click="toggleMenu()" class="menu__button">
                <Icon icon="material-symbols:close-rounded" />
              </button>
            </nav>
          </div>
          <div v-if="!isTablet" class="header__search search">
            <div class="search__wrapper">
              <form class="search__form">
                <div class="search__icon">
                  <Icon icon="material-symbols:search-rounded" />
                </div>
                <input class="search__input" type="text" placeholder="Search" />
                <button type="submit" class="search__button">
                  <Icon icon="material-symbols:arrow-forward-ios-rounded" />
                </button>
              </form>
            </div>
          </div>
          <div class="header__actions actions-header">
            <router-link
              :to="{ name: 'cart' }"
              class="actions-header__item cart-header"
            >
              <div class="cart-header__icon">
                <Icon icon="mdi:cart" />
              </div>
            </router-link>

            <router-link
              :to="{ name: 'myAccount' }"
              class="actions-header__item user-header"
            >
              <div class="user-header__wrapper">
                <div class="user-header__image">
                  <Icon icon="mdi:account-circle" />
                </div>
                <div class="user-header__name">Clayton Santos</div>
              </div>
            </router-link>
          </div>
        </div>
        <!--<div v-if="isTablet" class="header__footer search">
          <div class="search__wrapper">
            <form class="search__form">
              <div class="search__icon">
                <Icon icon="material-symbols:search-rounded" />
              </div>
              <input class="search__input" type="text" placeholder="Search" />
              <button type="submit" class="search__button">
                <Icon icon="material-symbols:arrow-forward-ios-rounded" />
              </button>
            </form>
          </div>
        </div>-->
      </div>
    </div>
  </header>
</template>

<script>
import { Icon } from "@iconify/vue";
import { mapGetters } from "vuex";
import HeraLogo from "@/components/common/Logo.vue";

export default {
  name: "HeraHeader",
  components: {
    Icon,
    HeraLogo,
  },
  data() {
    return {
      menuIsOpen: false,
    };
  },
  computed: {
    ...mapGetters({
      isTablet: "adaptive/isTablet",
    }),
  },
  methods: {
    toggleMenu() {
      this.menuIsOpen = !this.menuIsOpen;
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  &._absolute {
    @apply absolute z-10 w-full min-w-[360px];
  }
  // .header__wrapper

  &__wrapper {
    @apply py-6 max-lg:py-5;
  }

  // .header__container

  &__container {
  }

  // .header__body

  &__body {
    @apply flex items-center justify-between;
  }

  // .header__logo

  &__logo {
    @apply mr-16 max-xl:mr-6 max-lg:mr-0;
  }

  // .header__mobile

  &__mobile {
    @apply flex items-center gap-5 lg:hidden;
  }

  // .header__menu

  &__menu {
    @apply mr-16 max-xl:mr-8;
  }

  // .header__search

  &__search {
    @apply mr-8 max-xl:mr-4;
  }

  // .header__actions

  &__actions {
  }

  // .header__footer

  &__footer {
    @apply mt-7;
  }
}
.menu {
  @apply z-10 flex min-w-[320px];
  @apply max-lg:fixed max-lg:top-0 max-lg:-left-full max-lg:h-full max-lg:w-full max-lg:flex-col max-lg:opacity-0;
  @apply max-lg:before:fixed max-lg:before:top-0 max-lg:before:-z-10 max-lg:before:h-full max-lg:before:w-full max-lg:before:bg-black/60 max-lg:before:bg-cover max-lg:before:backdrop-blur-md max-lg:before:content-[''];
  &.menu-open {
    @apply max-lg:left-0 max-lg:opacity-100;
  }

  // .menu__body

  &__body {
  }

  // .menu__list

  &__list {
    @apply relative flex items-center space-x-7;
    @apply max-xl:space-x-5 max-lg:ml-auto max-lg:max-w-[60%] max-lg:basis-1/2 max-lg:flex-col max-lg:items-start max-lg:space-x-0 max-lg:divide-y-2 max-lg:rounded-bl-2xl max-lg:bg-white max-lg:px-10 max-lg:py-6 max-lg:text-lg;
  }

  // .menu__item

  &__item {
    @apply py-4 max-lg:w-full;
  }

  // .menu__link

  &__link {
    @apply inline-flex text-center font-secondary font-bold text-textHeader transition-colors hover:text-primary;
    &.active {
      @apply text-primary;
    }
  }

  // .menu__button

  &__button {
    @apply hidden max-lg:absolute max-lg:right-4 max-lg:top-4 max-lg:block max-lg:text-3xl max-lg:text-textHeader;
  }
}
.search {
  @apply w-full max-w-[360px] max-xl:max-w-[260px] max-lg:max-w-none;

  // .search__wrapper

  &__wrapper {
    @apply rounded-full bg-white;
  }

  // .search__form

  &__form {
    @apply relative flex items-center;
  }

  // .search__icon

  &__icon {
    @apply pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-xl text-[#ADB8CC];
  }

  // .search__input

  &__input {
    @apply w-full appearance-none border-none bg-transparent py-4 pl-12 pr-7 font-secondary text-xs font-bold transition-colors placeholder:text-[#ADB8CC] focus:text-primary focus:outline-none focus:ring-0;
  }

  // .search__button

  &__button {
    @apply flex items-center p-4 text-sm text-[#ADB8CC];
  }
}
.actions-header {
  @apply flex items-center space-x-5  max-lg:justify-end;
  // .actions-header__item

  &__item {
  }
}
.cart-header {
  // .cart-header__icon

  &__icon {
    @apply text-2xl text-primary;
  }
}
.user-header {
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
.icon-menu {
  @apply relative hidden h-5 w-8 flex-shrink-0 focus:outline-none max-lg:block;

  // .icon-menu__wrapper

  &__wrapper {
    @apply flex h-full items-center;

    span {
      @apply absolute block h-0.5 w-full rounded-full bg-primary transition-all first:-translate-y-2.5 last:translate-y-2.5;
    }
  }
}
.search-button {
  @apply flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-base text-primary;
}
</style>
