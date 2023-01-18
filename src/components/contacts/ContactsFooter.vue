<template>
  <div class="contacts-content__footer contacts-footer">
    <div class="contacts-footer__wrapper">
      <div class="contacts-footer__item contacts-tile">
        <div class="contacts-tile__leading bg-[#5669FF]">
          <Icon class="contacts-tile__icon" icon="mdi:email" />
        </div>
        <div class="contacts-tile__info">
          <div class="contacts-tile__title">Write us on email:</div>
          <a href="" target="_blank" class="contacts-tile__text">
            info@herapharmaceuticals.com
          </a>
        </div>
      </div>
      <div class="contacts-footer__item contacts-tile">
        <div class="contacts-tile__leading bg-[#56C2FF]">
          <Icon class="contacts-tile__icon" icon="fa-brands:telegram-plane" />
        </div>
        <div class="contacts-tile__info">
          <div class="contacts-tile__title">Write us on telegram:</div>
          <a href="" target="_blank" class="contacts-tile__text"
            >t.me/herapharmaceuticals</a
          >
        </div>
      </div>
      <hera-button
        class="contacts-footer__button bg-[#56C2FF] text-white"
        :isLink="true"
        text="join telegram groupchat"
      >
        <template v-slot:iconBefore>
          <Icon class="mr-2 text-base" icon="fa-brands:telegram-plane" />
        </template>
      </hera-button>
    </div>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";
import HeraButton from "@/components/UI/Button.vue";

export default {
  name: "HeraContactsFooter",
  components: {
    Icon,
    HeraButton,
  },
};
</script>

<style lang="scss" scoped>
.contacts-footer {
  // .contacts-footer__wrapper

  &__wrapper {
    @apply flex items-center justify-between gap-5 max-lg:flex-col;
  }

  // .contacts-footer__item

  &__item {
    @apply w-full;
  }

  // .contacts-footer__button

  &__button {
    @apply w-full;
  }
}
.contacts-tile {
  @apply flex items-center gap-4;
  // .contacts-tile__leading

  &__leading {
    @apply flex h-12 w-12 shrink-0 items-center justify-center rounded-full;
  }

  // .contacts-tile__icon

  &__icon {
    @apply text-lg text-white;
  }

  // .contacts-tile__info

  &__info {
  }

  // .contacts-tile__title

  &__title {
    @apply mb-1 font-medium;
  }

  // .contacts-tile__text

  &__text {
    @apply text-textSecondary transition-colors hover:text-primary;
  }
}
</style>
