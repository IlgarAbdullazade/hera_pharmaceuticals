<template>
  <div class="page__auth auth">
    <div class="auth__container">
      <div class="auth__wrapper">
        <div class="auth__content">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AuthView",
};
</script>

<style lang="scss" scoped>
.auth {
  // .auth__container

  &__container {
  }

  // .auth__wrapper

  &__wrapper {
    @apply flex justify-center;
  }

  // .auth__content

  &__content {
    @apply w-full max-w-sm rounded-2xl bg-white p-7;
  }
}
</style>
