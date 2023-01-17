<template>
  <h3 class="caption">
    <slot>{{ text }}</slot>
  </h3>
</template>

<script>
export default {
  name: "HeraCaption",
};
</script>

<style lang="scss" scoped>
.caption {
  @apply text-xl font-medium tracking-wide;
}
</style>
