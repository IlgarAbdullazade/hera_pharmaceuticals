<template>
  <p class="paragraph">
    <slot>{{ text }}</slot>
  </p>
</template>

<script>
export default {
  name: "HeraParagraph",
};
</script>

<style lang="scss" scoped>
.paragraph {
  @apply text-base text-textSecondary;
}
</style>
