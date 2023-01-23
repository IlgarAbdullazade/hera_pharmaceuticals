<template>
  <div>
    <vue-final-modal
      v-model="localShowModal"
      overlay-class="modal"
      classes="modal__container"
      :content-class="['modal__content', classesProps]"
      :click-to-close="true"
      :esc-to-close="true"
      @closed="$emit('updateValue', false)"
    >
      <button class="modal__close" @click="localShowModal = false">
        <Icon icon="material-symbols:close-rounded" />
      </button>
      <slot>{{ content }}</slot>
    </vue-final-modal>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";
import { VueFinalModal } from "vue-final-modal";

export default {
  name: "HeraModal",
  components: {
    Icon,
    VueFinalModal,
  },
  props: {
    showModal: {
      type: Boolean,
      required: true,
    },
    classesProps: {
      type: String,
    },
  },
  data() {
    return {
      localShowModal: this.showModal,
    };
  },
  watch: {
    showModal(value) {
      this.localShowModal = value;
    },
  },
};
</script>

<style lang="scss" scoped></style>
