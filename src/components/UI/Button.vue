<template>
  <router-link v-if="isLink" class="button" :to="link" :target="target">
    <slot name="iconBefore"></slot>
    {{ text }}
    <slot name="content"></slot>
    <slot name="iconAfter"></slot>
  </router-link>
  <button v-else class="button" :type="type">
    <slot name="iconBefore"></slot>
    {{ text }}
    <slot name="content"></slot>
    <slot name="iconAfter"></slot>
  </button>
</template>
<script>
export default {
  name: "HeraButton",
  props: {
    text: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: "button",
    },
    isLink: {
      type: Boolean,
      default: false,
    },
    link: {
      type: Object,
      default: {},
    },
    target: {
      type: String,
      default: "_self",
    },
  },
};
</script>

<style lang="scss" scoped>
.button {
  @apply inline-flex h-12 items-center justify-center rounded-full border border-solid p-3 font-medium transition-colors;
  &.primary {
    @apply border-primary bg-primary text-white hover:bg-blue-700;
  }

  &.secondary {
    @apply border-bgElement bg-bgElement text-primary hover:bg-primary hover:text-white;
  }

  &.danger {
    @apply border-bgDanger bg-bgDanger text-textDanger hover:bg-textDanger hover:text-bgDanger;
  }

  &._outline {
    @apply border-primary text-primary hover:bg-primary hover:text-white;
  }
}
</style>
