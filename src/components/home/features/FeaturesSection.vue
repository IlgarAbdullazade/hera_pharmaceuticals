<template>
  <section class="features">
    <div class="features__container">
      <div class="features__wrapper">
        <div class="features__content">
          <hera-feature-item
            class="features__item"
            title="Finetuned recipe"
            text="Our own trusted formula with least amount of solvents ensuring
                that your body receives minimal amount of stress."
          >
            <template v-slot:icon>
              <img
                src="@/assets/icons/features/medicine.png"
                alt="Finetuned recipe"
              />
            </template>
          </hera-feature-item>
          <hera-feature-item
            class="features__item"
            title="Quality Control"
            text="We are testing each batch of raws and each batch of final product to always stay on top of our game."
          >
            <template v-slot:icon>
              <img
                src="@/assets/icons/features/quality.png"
                alt="Quality Control"
              />
            </template>
          </hera-feature-item>
          <hera-feature-item
            class="features__item"
            title="Discrete shipping"
            text="All products are packed and sealed in a professional discrete manner in case the exterior packaging comes apart."
          >
            <template v-slot:icon>
              <img
                src="@/assets/icons/features/shipping.png"
                alt="Discrete shipping"
              />
            </template>
          </hera-feature-item>
          <hera-feature-item
            class="features__item"
            title="Complete transparency"
            text="We value honesty and transparency and that’s why we never keep a secret about our production. Ask us anything!"
          >
            <template v-slot:icon>
              <img
                src="@/assets/icons/features/transparency.png"
                alt="Complete transparency"
              />
            </template>
          </hera-feature-item>
          <hera-feature-item
            class="features__item"
            title="Privacy"
            text="We use anonymous offshore hosting outside of US jurisdiction. Customer data is never shared with outside sources."
          >
            <template v-slot:icon>
              <img src="@/assets/icons/features/privacy.png" alt="Privacy" />
            </template>
          </hera-feature-item>
          <hera-feature-item
            class="features__item"
            title="24/7 Customer Support"
            text="We do our absolute best to instantly reply to all of our clients."
          >
            <template v-slot:icon>
              <img
                src="@/assets/icons/features/support.png"
                alt="24/7 Customer Support"
              />
            </template>
          </hera-feature-item>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Icon } from "@iconify/vue";
import HeraFeatureItem from "@/components/home/features/FeatureItem.vue";

export default {
  name: "HeraFeaturesSection",
  components: {
    Icon,
    HeraFeatureItem,
  },
};
</script>

<style lang="scss" scoped>
.features {
  @apply mb-48 -mt-44 max-lg:mb-20;
  // .features__container

  &__container {
  }

  // .features__wrapper

  &__wrapper {
  }

  // .features__content

  &__content {
    @apply grid grid-cols-3 gap-5 max-lg:grid-cols-2 max-md:grid-cols-1;
  }

  // .features__item

  &__item {
  }
}
</style>
