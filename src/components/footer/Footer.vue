<template>
  <footer class="footer">
    <div class="footer__container">
      <div class="footer__wrapper">
        <div class="footer__content footer-content">
          <div class="footer-content__wrapper">
            <hera-logo class="footer-content__logo" />
            <p class="footer-content__text">
              Hera pharmaceutical - made by bodybuilders for bodybuilders
            </p>
          </div>
        </div>
        <nav class="footer__nav footer-nav">
          <ul class="footer-nav__list">
            <li class="footer-nav__item">
              <router-link
                :to="{ name: 'home' }"
                exact-active-class="active"
                class="footer-nav__link"
                >Home</router-link
              >
            </li>
            <li class="footer-nav__item">
              <router-link
                :to="{ name: 'products' }"
                exact-active-class="active"
                class="footer-nav__link"
                >Shop</router-link
              >
            </li>
            <li class="footer-nav__item">
              <router-link
                :to="{ name: 'aboutUs' }"
                exact-active-class="active"
                class="footer-nav__link"
                >About us</router-link
              >
            </li>
            <li class="footer-nav__item">
              <router-link
                :to="{ name: 'labTests' }"
                exact-active-class="active"
                class="footer-nav__link"
                >Labtests</router-link
              >
            </li>
            <li class="footer-nav__item">
              <router-link
                :to="{ name: 'contactUs' }"
                exact-active-class="active"
                class="footer-nav__link"
                >Contact us</router-link
              >
            </li>
            <li class="footer-nav__item">
              <router-link
                :to="{ name: 'faq' }"
                exact-active-class="active"
                class="footer-nav__link"
                >FAQ</router-link
              >
            </li>
          </ul>
        </nav>
        <div class="footer__socials footer-socials">
          <div class="footer-socials__wrapper">
            <a
              href=""
              target="_blank"
              class="footer-socials__item bg-[#E9E9E9]"
            >
              <Icon class="text-[#00B67A]" icon="material-symbols:star-rate" />
            </a>
            <a
              href=""
              target="_blank"
              class="footer-socials__item bg-[#5669FF]"
            >
              <Icon icon="fa-brands:discord" />
            </a>
            <a
              href=""
              target="_blank"
              class="footer-socials__item bg-[#56C2FF]"
            >
              <Icon icon="fa-brands:telegram-plane" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { Icon } from "@iconify/vue";

import HeraLogo from "@/components/common/Logo.vue";

export default {
  name: "HeraFooter",
  components: {
    Icon,
    HeraLogo,
  },
};
</script>

<style lang="scss" scoped>
.footer {
  @apply mt-48 bg-[#EFEFEF] max-lg:mt-20;
  // .footer__container

  &__container {
  }

  // .footer__wrapper

  &__wrapper {
    @apply flex items-center justify-between gap-6 py-14 max-lg:flex-col;
  }

  // .footer__content

  &__content {
  }

  // .footer__nav

  &__nav {
  }

  // .footer__socials

  &__socials {
  }
}
.footer-content {
  // .footer-content__wrapper

  &__wrapper {
    @apply flex items-center;
  }

  // .footer-content__logo

  &__logo {
    @apply mr-12;
  }

  // .footer-content__text

  &__text {
    @apply max-w-[250px] text-sm text-textSecondary;
  }
}
.footer-nav {
  // .footer-nav__list

  &__list {
    @apply grid grid-cols-3 gap-x-8 gap-y-4;
  }

  // .footer-nav__item

  &__item {
  }

  // .footer-nav__link

  &__link {
    @apply inline-flex text-center font-secondary font-bold text-textHeader transition-colors hover:text-primary;
  }
}
.footer-socials {
  // .footer-socials__wrapper

  &__wrapper {
    @apply flex items-center gap-4;
  }

  // .footer-socials__item

  &__item {
    @apply flex h-12 w-12 items-center justify-center rounded-full text-2xl text-white;
  }
}
</style>
