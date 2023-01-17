<template>
  <div class="product-view">
    <div class="product-view__wrapper">
      <div class="product-view__header">
        <div class="product-view__card product-card">
          <div class="product-card__wrapper">
            <div class="product-card__image product-card-ibg-cover">
              <img src="@/assets/img/mock/omega.png" alt="Omega" />
            </div>
            <div class="product-card__info">
              <h3 class="product-card__name">
                Testosterone Propionate 200 mg/ml
              </h3>
              <div class="product-card__numbers">
                <h5 class="product-card__price">$50</h5>
                <hera-quantity-box class="product-card__quantity" />
              </div>
              <hera-button
                class="product-card__button _outline"
                text="Add to cart"
              >
                <template v-slot:iconAfter>
                  <Icon class="ml-1 text-base" icon="mdi:cart" />
                </template>
              </hera-button>
            </div>
          </div>
        </div>
        <div class="product-view__report product-report">
          <div class="product-report__wrapper">
            <router-link
              :to="{}"
              class="product-report__image product-report-ibg-cover"
            >
              <Icon
                class="product-report__icon"
                icon="material-symbols:search-rounded"
              />
              <img src="@/assets/img/mock/report.jpg" alt="Report" />
            </router-link>
            <span class="product-report__text">TEST REPORT</span>
          </div>
        </div>
      </div>
      <div class="product-view__content product-content">
        <h4 class="product-content__title">Description</h4>
        <hera-paragraph class="product-content__text">
          Testosterone Propionate – this is one of the most short testosterone
          esters, but that does not make it less popular among bodybuilders. It
          is designed to develop muscle mass and strength, but because of its
          features it is more commonly used in the drying period. Testosterone
          Propionate 100 – is a Testosterone molecule to which is attached an
          ester of propionic acid and it defines the characteristics and
          pharmacological action of this particular substance.
          <br /><br />
          Testosterone Propionate Effects:
          <br /><br />

          increase in weight; burning of fat; increase muscle definition;
          increase in power performance.
          <br /><br />

          The feature of this kind of testosterone, as already mentioned, is
          short duration. Injections of Testosterone Propionate normally do in a
          day. This is one of the downsides of the drug. As for the second minus
          – is its high cost. But it is universal meaning that can be used in
          the drying period and in the period of mass recruitment.
          <br /><br />

          How to Use Testosterone Propionate: Dosage, Cycle, PCT
          <br /><br />

          With proper use and dosage, Testosterone Propionate does not retain
          water in the body. So do not expect a sharp increase in body weight,
          but gains will implement quality and dry. As the drug’s benefits that
          it can be applied to athletes of all ages and levels of experience. It
          can be taken both solo and in combination with other drugs, that give
          a more tangible effect.
          <br /><br />

          For beginners dose should be less than for experienced athletes. Among
          complaints of side effects of Testosterone Propionate are the most
          common acne, gynecomastia development, alopecia and hirsutism. Do not
          forget to read the instructions, and if necessary, seek professional
          help.
          <br /><br />

          A 50 mg dose every day for 4-5 weeks give great weight gain.
          <br /><br />

          Warnings: Keep out of reach of children. For adults
          only.</hera-paragraph
        >
      </div>
    </div>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";
import HeraButton from "@/components/UI/Button.vue";
import HeraQuantityBox from "@/components/UI/QuantityBox.vue";
import HeraParagraph from "@/components/UI/Paragraph.vue";

export default {
  name: "ProductView",
  components: {
    Icon,
    HeraButton,
    HeraParagraph,
    HeraQuantityBox,
  },
};
</script>

<style lang="scss" scoped>
.product-view {
  // .product-view__wrapper

  &__wrapper {
    @apply rounded-3xl bg-white p-6 max-lg:-mx-4 max-lg:p-4;
  }

  // .product-view__header

  &__header {
    @apply mb-7 flex max-lg:flex-col;
  }

  // .product-view__card

  &__card {
    @apply mr-4 basis-2/3 max-lg:mr-0 max-lg:basis-full;
  }

  // .product-view__report

  &__report {
    @apply basis-1/3 max-lg:basis-full;
  }

  // .product-view__content

  &__content {
  }
}
.product-card {
  // .product-card__wrapper

  &__wrapper {
    @apply flex h-full items-center gap-6 overflow-hidden rounded-3xl bg-[#F7F8FA] max-lg:flex-col max-lg:bg-transparent;
  }

  // .product-card__image

  &__image {
    @apply aspect-square h-full w-full max-w-[328px] shrink-0 overflow-hidden rounded-3xl max-lg:max-w-none;
  }

  // .product-card__info

  &__info {
    @apply flex flex-col items-start gap-4 p-6  max-lg:items-center max-lg:p-0 max-lg:text-center;
  }

  // .product-card__name

  &__name {
    @apply text-2xl font-semibold;
  }

  // .product-card__numbers

  &__numbers {
    @apply flex items-center gap-4;
  }

  // .product-card__price

  &__price {
    @apply text-xl font-semibold;
  }

  // .product-card__quantity

  &__quantity {
  }

  // .product-card__button

  &__button {
    @apply px-10 py-2 max-lg:w-full;
  }
}

.product-report {
  // .product-report__wrapper

  &__wrapper {
    @apply flex h-full flex-col items-center justify-center overflow-hidden rounded-3xl bg-[#F7F8FA] p-10 max-lg:bg-transparent;
  }

  // .product-report__image

  &__image {
    @apply mb-6 aspect-square w-48 overflow-hidden rounded-3xl;
    @apply before:absolute before:top-0 before:left-0  before:z-10 before:h-full before:w-full before:bg-black/60 before:content-[''];
  }
  // .product-report__icon

  &__icon {
    @apply absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 text-5xl text-white;
  }

  // .product-report__text

  &__text {
    @apply text-base font-medium text-primary;
  }
}

.product-content {
  // .product-content__title

  &__title {
    @apply mb-4 text-base font-medium text-primary;
  }

  // .product-content__text

  &__text {
  }
}
</style>
