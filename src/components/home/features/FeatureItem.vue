<template>
  <div class="feature-item">
    <div class="feature-item__wrapper">
      <div class="feature-item__icon feature-item-ibg-contain">
        <slot name="icon">{{ icon }}</slot>
      </div>
      <hera-caption class="feature-item__title">{{ title }}</hera-caption>
      <hera-paragraph class="feature-item__text"> {{ text }}</hera-paragraph>
    </div>
  </div>
</template>
<script>
import HeraCaption from "@/components/UI/Caption.vue";
import HeraParagraph from "@/components/UI/Paragraph.vue";

export default {
  name: "HeraFeatureItem",
  components: {
    HeraCaption,
    HeraParagraph,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.feature-item {
  // .feature-item__wrapper

  &__wrapper {
    @apply flex h-full flex-col items-center justify-center rounded-[30px] border border-solid bg-white py-12 px-6;
  }

  // .feature-item__icon

  &__icon {
    @apply mb-2 h-12 w-12;
  }

  // .feature-item__title

  &__title {
    @apply mb-4 text-center;
  }

  // .feature-item__text

  &__text {
    @apply text-center;
  }
}
</style>
