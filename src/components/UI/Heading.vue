<template>
  <h1 class="heading">
    <slot>{{ text }}</slot>
  </h1>
</template>

<script>
export default {
  name: "HeraHeading",
};
</script>

<style lang="scss" scoped>
.heading {
  @apply text-[52px] font-semibold leading-tight tracking-wide;
  @apply max-lg:text-[38px];
}
</style>
