<template>
  <div class="labtest-item">
    <div class="labtest-item__wrapper">
      <button
        @click="openModal"
        type="button"
        class="labtest-item__image labtest-item-ibg-cover"
      >
        <img :src="baseURL + product.image" :alt="product.title" />
      </button>
      <div class="labtest-item__info">
        <h3 class="labtest-item__title">
          {{ product.title }}
        </h3>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import HeraReportsModal from "@/components/common/ReportsModal.vue";

export default {
  name: "HeraLabTestItem",
  components: {
    HeraReportsModal,
  },
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  data: () => {
    return {
      baseURL: import.meta.env.VITE_APP_BASEURL,
    };
  },
  methods: {
    ...mapActions({
      getLabtest: "labtests/getLabtest",
    }),
    openModal() {
      this.getLabtest(this.product.slug).then((res) => {
        this.$vfm.show({
          component: "HeraCustomModal",
          bind: {
            name: "ReportsModal",
            class: "full-height",
          },
          slots: {
            default: {
              component: HeraReportsModal,
              bind: {
                reports: res.data,
              },
            },
          },
        });
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.labtest-item {
  @apply rounded-2xl bg-white p-2;
  // .labtest-item__wrapper

  &__wrapper {
    @apply flex items-center gap-5 rounded-2xl bg-bgPrimary p-3;
  }

  // .labtest-item__image

  &__image {
    @apply aspect-square w-20 shrink-0 overflow-hidden rounded-2xl;
  }

  // .labtest-item__info

  &__info {
  }

  // .labtest-item__title

  &__title {
    @apply text-lg font-medium max-lg:text-sm;
  }
}
</style>
