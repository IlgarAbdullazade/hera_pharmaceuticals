<template>
  <div class="logo">
    <router-link :to="{ name: 'home' }" class="logo__link">
      <div class="logo__image logo-ibg-contain">
        <img src="@/assets/img/logo.svg" alt="Hera Pharmaceuticals" />
      </div>
    </router-link>
  </div>
</template>
<script>
export default {
  name: "HeraLogo",
};
</script>

<style lang="scss" scoped>
.logo {
  // .logo__link

  &__link {
    @apply flex;
  }

  // .logo__image

  &__image {
    @apply h-14 w-20 max-lg:h-12 max-lg:w-16;
  }
}
</style>
