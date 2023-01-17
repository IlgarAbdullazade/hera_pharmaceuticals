<template>
  <div class="settings">
    <div class="settings__wrapper">
      <hera-change-email-form class="settings__form" />
      <hera-change-password-form class="settings__form" />
    </div>
  </div>
</template>
<script>
import HeraChangeEmailForm from "@/components/profile/ChangeEmailForm.vue";
import HeraChangePasswordForm from "@/components/profile/ChangePasswordForm.vue";

export default {
  name: "AccountSettingsView",
  components: {
    HeraChangeEmailForm,
    HeraChangePasswordForm,
  },
};
</script>

<style lang="scss">
.settings {
  // .settings__wrapper

  &__wrapper {
    @apply flex flex-col gap-14 max-lg:rounded-2xl max-lg:p-0;
  }

  // .settings__form

  &__form {
  }
}

.settings-form {
  @apply flex flex-col gap-4 max-lg:bg-white max-lg:p-7;

  // .settings-form__header

  &__header {
    @apply -mx-7 rounded-t-2xl bg-bgElement px-8 py-5 max-lg:-mt-7;
  }

  // .settings-form__title

  &__title {
    @apply text-primary;
  }

  // .settings-form__row

  &__row {
    @apply flex items-center gap-2.5 max-lg:flex-col max-lg:items-start;
  }

  // .settings-form__caption

  &__caption {
    @apply mr-2.5 w-full max-w-[170px] text-right font-medium max-lg:mr-0 max-lg:min-w-0 max-lg:text-left;
  }

  // .settings-form__group

  &__group {
    @apply w-full;
  }

  // .settings-form__input

  &__input {
  }

  // .settings-form__button

  &__button {
    @apply w-full max-w-[220px] max-lg:max-w-none;
  }
}
</style>
