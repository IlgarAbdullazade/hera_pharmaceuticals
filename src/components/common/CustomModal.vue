<template>
  <vue-final-modal
    v-slot="{ close }"
    v-bind="$attrs"
    overlay-class="modal"
    classes="modal__container"
    content-class="modal__content"
    :click-to-close="true"
    :esc-to-close="true"
  >
    <button class="modal__close" @click="close">
      <Icon icon="material-symbols:close-rounded" />
    </button>
    <slot></slot>
  </vue-final-modal>
</template>

<script>
import { Icon } from "@iconify/vue";

export default {
  name: "HeraCustomModal",
  inheritAttrs: false,
  components: {
    Icon,
  },
};
</script>

<style lang="scss"></style>
