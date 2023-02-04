<template>
  <div class="empty-block">
    <div class="empty-block__wrapper">
      <hera-caption class="empty-block__title">
        No {{ text }} found</hera-caption
      >
      <hera-paragraph class="empty-block__text"
        >Sorry, we couldn't find any {{ text }}.</hera-paragraph
      >
    </div>
  </div>
</template>

<script>
import HeraCaption from "@/components/UI/Caption.vue";
import HeraParagraph from "@/components/UI/Paragraph.vue";
export default {
  name: "HeraEmptyBlock",
  components: {
    HeraCaption,
    HeraParagraph,
  },
  props: {
    text: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.empty-block {
  // .empty-block__wrapper

  &__wrapper {
    @apply flex flex-col items-center justify-center text-center;
  }

  // .empty-block__title

  &__title {
  }

  // .empty-block__text

  &__text {
  }
}
</style>
