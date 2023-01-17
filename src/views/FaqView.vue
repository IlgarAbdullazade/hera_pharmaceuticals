<template>
  <div class="page__faq faq">
    <div class="faq__container">
      <div class="faq__wrapper">
        <div class="faq__item faq-item">
          <div class="faq-item__wrapper">
            <h4 class="faq-item__title">Privacy Policy</h4>
            <p class="faq-item__text">
              We use anonymous offshore hosting outside of US government
              jurisdiction. Customer data is compartmentalized and never shared
              with outside sources. By deleting your account we automatically
              delete all of your data.
            </p>
          </div>
        </div>
        <div class="faq__item faq-item">
          <div class="faq-item__wrapper">
            <h4 class="faq-item__title">Terms & Conditions</h4>
            <p class="faq-item__text">
              By using our site you confirm that you are older than 21 and you
              agree to responsibly use these products at your own discretion.
            </p>
          </div>
        </div>
        <div class="faq__item faq-item">
          <div class="faq-item__wrapper">
            <h4 class="faq-item__title">Minimum order</h4>
            <p class="faq-item__text">We currently have no minimum order</p>
          </div>
        </div>
        <div class="faq__item faq-item">
          <div class="faq-item__wrapper">
            <h4 class="faq-item__title">Shipping</h4>
            <div class="faq-item__content">
              <div class="faq-item__point">Flat fee $15 USPS</div>
              <div class="faq-item__point">
                Free shipping on orders above $300
              </div>
            </div>
          </div>
        </div>
        <div class="faq__item faq-item">
          <div class="faq-item__wrapper">
            <h4 class="faq-item__title">Payment</h4>
            <p class="faq-item__text">
              <a
                href="https://www.youtube.com/watch?v=wXvFkiXxxTM"
                target="_blank"
                class="text-primary"
                >https://www.youtube.com/watch?v=wXvFkiXxxTM
              </a>
              Watch this tutorial to learn how to pay with bitcoin.
            </p>
          </div>
        </div>
        <div class="faq__item faq-item">
          <div class="faq-item__wrapper">
            <h4 class="faq-item__title">Which oils do you use</h4>
            <p class="faq-item__text">We use MCTAMK oils</p>
          </div>
        </div>
        <div class="faq__item faq-item">
          <div class="faq-item__wrapper">
            <h4 class="faq-item__title">How do you make your orals</h4>
            <p class="faq-item__text">
              We just say mashallah and press that shit
            </p>
          </div>
        </div>
        <div class="faq__item faq-item">
          <div class="faq-item__wrapper">
            <h4 class="faq-item__title">ETA & tracking code</h4>
            <p class="faq-item__text">
              Estimated T/A time is 7-10 days from receiving payment. We do not
              provide tracking codes.
            </p>
          </div>
        </div>
        <div class="faq__item faq-item">
          <div class="faq-item__wrapper">
            <h4 class="faq-item__title">Shipping</h4>
            <div class="faq-item__content">
              <p class="faq-item__text">Only contact us with our official</p>
              <router-link :to="{}" class="faq-item__point"
                >e-mail info@hera</router-link
              >
              <router-link :to="{}" class="faq-item__point">
                tg @herapharmaceuticals
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FaqView",
};
</script>

<style lang="scss" scoped>
.faq {
  // .faq__container

  &__container {
  }

  // .faq__wrapper

  &__wrapper {
    @apply flex flex-col gap-2.5 rounded-3xl bg-white p-7;
  }

  // .faq__item

  &__item {
  }
}
.faq-item {
  // .faq-item__wrapper

  &__wrapper {
    @apply rounded-2xl bg-bgPrimary p-7;
  }

  // .faq-item__title

  &__title {
    @apply mb-2.5 text-base font-medium;
  }

  // .faq-item__content

  &__content {
    @apply flex gap-4 max-lg:flex-col max-lg:gap-2.5;
  }

  // .faq-item__text

  &__text {
    @apply text-textSecondary last:mb-0;
  }

  // .faq-item__point

  &__point {
    @apply relative block pl-4 text-primary;
    @apply before:absolute before:top-1/2 before:left-0 before:h-2 before:w-2 before:-translate-y-1/2 before:rounded-full before:border-2 before:border-bgElement before:bg-primary before:content-[''];
  }
}
</style>
