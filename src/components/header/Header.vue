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
            <button type="button" class="search-button" @click="openModal">
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
                    :to="{ name: 'shop' }"
                    active-class="active"
                    class="menu__link"
                    >Shop</router-link
                  >
                </li>
                <li class="menu__item">
                  <router-link
                    :to="{ name: 'aboutUs' }"
                    active-class="active"
                    class="menu__link"
                    >About us</router-link
                  >
                </li>
                <li class="menu__item">
                  <router-link
                    :to="{ name: 'labTests' }"
                    active-class="active"
                    class="menu__link"
                    >Labtests</router-link
                  >
                </li>
                <li class="menu__item">
                  <router-link
                    :to="{ name: 'contactUs' }"
                    active-class="active"
                    class="menu__link"
                    >Contact us</router-link
                  >
                </li>
                <li class="menu__item">
                  <router-link
                    :to="{ name: 'faq' }"
                    active-class="active"
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
          <hera-search v-if="!isTablet" class="header__search" />
          <hera-header-actions class="header__actions" />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { Icon } from "@iconify/vue";
import { mapGetters } from "vuex";
import HeraLogo from "@/components/common/Logo.vue";
import HeraSearch from "@/components/common/Search.vue";
import HeraHeaderActions from "@/components/header/HeaderActions.vue";

export default {
  name: "HeraHeader",
  components: {
    Icon,
    HeraLogo,
    HeraSearch,
    HeraHeaderActions,
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
    openModal() {
      this.$vfm.show({
        component: "HeraCustomModal",
        bind: {
          name: "SearchModal",
        },
        slots: {
          default: {
            component: HeraSearch,
          },
        },
      });
    },
  },
  watch: {
    $route() {
      if (this.menuIsOpen) {
        this.menuIsOpen = false;
      }
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
    @apply mr-6 max-w-[360px] max-xl:mr-2 max-xl:max-w-[260px] max-lg:max-w-none;
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
    @apply max-lg:w-full;
  }

  // .menu__link

  &__link {
    @apply inline-flex py-4 text-center font-secondary font-bold text-textHeader transition-colors hover:text-primary;
    &.active {
      @apply text-primary;
    }
  }

  // .menu__button

  &__button {
    @apply hidden max-lg:absolute max-lg:right-4 max-lg:top-4 max-lg:block max-lg:text-3xl max-lg:text-textHeader;
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
