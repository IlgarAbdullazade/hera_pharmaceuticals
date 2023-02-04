<template>
  <div class="error-block">
    <div class="error-block__wrapper">
      <hera-caption class="error-block__title">
        Something went wrong!</hera-caption
      >
      <hera-paragraph class="error-block__text"
        >We're sorry, but an unexpected error has occurred.</hera-paragraph
      >
    </div>
  </div>
</template>

<script>
import HeraCaption from "@/components/UI/Caption.vue";
import HeraParagraph from "@/components/UI/Paragraph.vue";
export default {
  name: "HeraErrorBlock",
  components: {
    HeraCaption,
    HeraParagraph,
  },
};
</script>

<style lang="scss" scoped>
.error-block {
  // .error-block__wrapper

  &__wrapper {
    @apply flex flex-col items-center justify-center text-center;
  }

  // .error-block__title

  &__title {
  }

  // .error-block__text

  &__text {
  }
}
</style>
