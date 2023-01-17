<template>
  <div class="page__payment payment">
    <div class="payment__container">
      <div class="payment__wrapper">
        <div class="payment__content payment-content">
          <h3 class="payment-content__title">Order #7383521</h3>
          <span class="payment-content__caption">
            Please send 0.034 btc to the following bitcoin address:</span
          >
          <div class="payment-content__clipboard clipboard">
            <div class="clipboard__wrapper">
              <div class="clipboard__input">
                TBpH76ic2BHt7k46pU6QRKVEHUHxXo34ZC
              </div>
              <button class="clipboard__button">
                <Icon icon="material-symbols:content-copy-rounded" />
              </button>
            </div>
          </div>
          <hera-paragraph class="payment-content__text">
            Send us an e-mail with your order number and bitcoin transaction id
            after you made the payment.</hera-paragraph
          >
          <div class="payment-content__qr-code qr-code">
            <div class="qr-code__image logo-ibg-contain">
              <img src="@/assets/img/mock/qr_code.png" alt="Qr Code" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";

import HeraParagraph from "@/components/UI/Paragraph.vue";

export default {
  name: "CartView",
  components: {
    Icon,
    HeraParagraph,
  },
};
</script>

<style lang="scss" scoped>
.payment {
  // .payment__container

  &__container {
  }

  // .payment__wrapper

  &__wrapper {
  }

  // .payment__content

  &__content {
  }
}
.payment-content {
  @apply mx-auto max-w-xl rounded-3xl bg-white p-7 text-center;

  // .payment-content__title

  &__title {
    @apply mb-3 text-2xl font-semibold;
  }

  // .payment-content__caption

  &__caption {
    @apply font-medium text-textSecondary;
  }

  // .payment-content__text

  &__text {
    @apply text-sm;
  }

  // .payment-content__clipboard

  &__clipboard {
    @apply py-5;
  }

  // .payment-content__qr-code

  &__qr-code {
    @apply mt-11 px-10;
  }
}
.clipboard {
  // .clipboard__wrapper

  &__wrapper {
    @apply flex gap-2.5;
  }

  // .clipboard__input

  &__input {
    @apply w-full truncate rounded-full bg-bgPrimary py-3 px-7 text-base font-semibold text-primary max-lg:text-sm;
  }

  // .clipboard__button

  &__button {
    @apply flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full bg-bgElement text-xl text-primary max-lg:hidden;
  }
}
.qr-code {
  // .qr-code__image

  &__image {
    @apply mx-auto aspect-square h-full w-full max-w-[214px] shrink-0 overflow-hidden rounded-3xl max-lg:max-w-none;
  }
}
</style>
