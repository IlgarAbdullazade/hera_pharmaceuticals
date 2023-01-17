<template>
  <div class="page__profile profile">
    <div class="profile__container">
      <div class="profile__wrapper">
        <hera-profile-sidebar class="profile__sidedar" />
        <div class="profile__content">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import HeraProfileSidebar from "@/components/profile/ProfileSidebar.vue";

export default {
  name: "ProfileView",
  components: {
    HeraProfileSidebar,
  },
};
</script>

<style lang="scss" scoped>
.profile {
  // .profile__container

  &__container {
  }

  // .profile__wrapper

  &__wrapper {
    @apply flex gap-5 max-lg:flex-col max-lg:gap-2.5;
  }

  // .profile__sidedar

  &__sidedar {
    @apply w-full max-w-[280px] max-lg:max-w-none;
  }

  // .profile__content

  &__content {
    @apply w-full rounded-2xl bg-white p-7 max-lg:rounded-none max-lg:bg-transparent max-lg:p-0;
  }
}
</style>
