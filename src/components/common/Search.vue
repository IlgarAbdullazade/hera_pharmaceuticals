<template>
  <div class="search">
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
</template>

<script>
import { Icon } from "@iconify/vue";

export default {
  name: "HeraSearch",
  components: {
    Icon,
  },
};
</script>

<style lang="scss" scoped>
.search {
  @apply w-full;

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
</style>
