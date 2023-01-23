<template>
  <div class="checkout-content">
    <Form class="checkout-content__body">
      <div class="checkout-content__col">
        <h3 class="checkout-content__title">Billing details</h3>
        <div class="checkout-content__form checkout-form">
          <div class="checkout-form__row">
            <div class="checkout-form__group">
              <Field
                type="text"
                name="name"
                class="checkout-form__input input"
                placeholder="First name"
              />
              <ErrorMessage name="name" class="error-message" />
            </div>
            <div class="checkout-form__group">
              <Field
                type="text"
                name="lastName"
                class="checkout-form__input input"
                placeholder="Last name"
              />
              <ErrorMessage name="lastName" class="error-message" />
            </div>
          </div>
          <div class="checkout-form__group">
            <Field
              type="text"
              name="companyName"
              class="checkout-form__input input"
              placeholder="Company name (optional)"
            />
            <ErrorMessage name="companyName" class="error-message" />
          </div>
          <div class="checkout-form__group">
            <Field
              type="text"
              name="country"
              class="checkout-form__input input"
              placeholder="Country/Region"
            />
            <ErrorMessage name="country" class="error-message" />
          </div>
          <div class="checkout-form__group">
            <Field
              type="text"
              name="companyName"
              class="checkout-form__input input"
              placeholder="Company name (optional)"
            />
            <ErrorMessage name="companyName" class="error-message" />
          </div>
          <div class="checkout-form__group">
            <Field
              type="text"
              name="address"
              class="checkout-form__input input"
              placeholder="Street address"
            />
            <ErrorMessage name="address" class="error-message" />
          </div>
          <div class="checkout-form__group">
            <Field
              type="text"
              name="postCode"
              class="checkout-form__input input"
              placeholder="Postcode/ZIP"
            />
            <ErrorMessage name="postCode" class="error-message" />
          </div>
          <div class="checkout-form__group">
            <Field
              type="text"
              name="city"
              class="checkout-form__input input"
              placeholder="Town/City"
            />
            <ErrorMessage name="city" class="error-message" />
          </div>
          <div class="checkout-form__group">
            <Field
              type="text"
              name="phone"
              class="checkout-form__input input"
              placeholder="Phone"
            />
            <ErrorMessage name="phone" class="error-message" />
          </div>
          <div class="checkout-form__group">
            <Field
              type="email"
              name="email"
              class="checkout-form__input input"
              placeholder="Email addres"
            />
            <ErrorMessage name="email" class="error-message" />
          </div>
          <div class="checkout-form__group">
            <Field v-slot="{ field }" name="message">
              <textarea
                v-bind="field"
                class="checkout-form__input input"
                name="notes"
                rows="3"
                placeholder="Order notes (optional)"
              ></textarea>
            </Field>

            <ErrorMessage name="notes" class="error-message" />
          </div>
        </div>
      </div>
      <div class="checkout-content__col">
        <h3 class="checkout-content__title">Your order</h3>
        <div class="checkout-content__list checkout-list">
          <div
            class="checkout-list__item checkout-product"
            v-for="product in cartItems"
            :key="product.id"
          >
            <div class="checkout-product__wrapper">
              <div class="checkout-product__name">
                {{ product.name }}
              </div>
              <div data-name="Subtotal" class="checkout-product__subtotal">
                $ {{ product.price * product.quantity }}
              </div>
            </div>
          </div>
        </div>
        <div class="checkout-content__radio-inputs">
          <div class="checkout-content__radio check-radio">
            <Field
              v-slot="{ field }"
              name="payment_type"
              type="radio"
              value="bitcoin"
            >
              <label class="check-radio__label">
                <input
                  class="check-radio__input"
                  type="radio"
                  name="payment_type"
                  v-bind="field"
                  :checked="true"
                />
                Bitcoin
              </label>
            </Field>
          </div>
          <div class="checkout-content__radio">
            <Field
              v-slot="{ field }"
              name="payment_type"
              type="radio"
              value="other_cryptocurrencies"
            >
              <label class="check-radio__label">
                <input
                  class="check-radio__input"
                  type="radio"
                  name="payment_type"
                  v-bind="field"
                  :value="false"
                />
                Other cryptocurrencies
              </label>
            </Field>
          </div>
          <div class="checkout-content__radio">
            <Field
              v-slot="{ field }"
              name="payment_type"
              type="radio"
              value="payment_method"
            >
              <label class="check-radio__label">
                <input
                  type="radio"
                  class="check-radio__input"
                  name="payment_type"
                  v-bind="field"
                  :value="false"
                />
                Payment method
              </label>
            </Field>
          </div>
        </div>
        <div class="checkout-content__info">
          Your personal data will be used only to process your order, support
          your experience throughout this website, and for other purposes
          described in our
          <router-link class="text-primary" :to="{}">privacy policy</router-link
          >. We never share it with third parties.
        </div>
        <div class="checkout-content__terms">
          <div class="checkout-content__checkbox check-radio">
            <Field
              v-slot="{ field }"
              name="terms"
              type="checkbox"
              :value="false"
            >
              <label class="check-radio__label">
                <input
                  class="check-radio__input"
                  type="checkbox"
                  name="terms"
                  v-bind="field"
                  :value="false"
                />
                I have read and agree to the website
                <router-link :to="{}" class="text-primary">
                  terms and conditions</router-link
                >
              </label>
            </Field>
          </div>
        </div>
        <div class="checkout-content__submit">
          <hera-button
            :isLink="true"
            :link="{ name: 'payment' }"
            class="checkout-content__button primary"
            text="Pay with bitcoin"
          />
        </div>
      </div>
    </Form>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { Form, Field, ErrorMessage } from "vee-validate";
import HeraButton from "@/components/UI/Button.vue";

export default {
  name: "HeraCheckoutForm",
  components: {
    Form,
    Field,
    ErrorMessage,
    HeraButton,
  },
  computed: {
    ...mapGetters({
      cartItems: "cart/cartItems",
    }),
  },
};
</script>

<style lang="scss" scoped>
.checkout-content {
  @apply rounded-3xl bg-white p-7;

  // .checkout-content__body

  &__body {
    @apply flex justify-between gap-10 max-lg:flex-col max-lg:gap-14;
  }

  // .checkout-content__col

  &__col {
    @apply w-full first:max-w-sm last:max-w-2xl max-lg:first:max-w-none max-lg:last:max-w-none;
  }

  // .checkout-content__title

  &__title {
    @apply mb-7 text-2xl font-semibold;
  }

  // .checkout-content__form

  &__form {
  }

  // .checkout-content__list

  &__list {
    @apply mb-10;
  }

  // .checkout-content__radio-inputs

  &__radio-inputs {
    @apply mb-6 flex gap-10 max-lg:flex-col max-lg:gap-7;
  }

  // .checkout-content__radio

  &__radio {
  }

  // .checkout-content__info

  &__info {
    @apply mb-10;
  }

  // .checkout-content__terms

  &__terms {
    @apply mb-10;
  }

  // .checkout-content__checkbox

  &__checkbox {
  }

  // .checkout-content__submit

  &__submit {
    @apply flex w-full justify-center;
  }

  // .checkout-content__button

  &__button {
    @apply w-full max-w-[250px] max-lg:max-w-none;
  }
}
.checkout-form {
  @apply flex flex-col gap-4;
  // .checkout-form__row

  &__row {
    @apply flex gap-2.5 max-lg:flex-col max-lg:gap-4;
  }

  // .checkout-form__group

  &__group {
    @apply w-full;
  }

  // .checkout-form__input

  &__input {
  }
}
.checkout-list {
  @apply flex flex-col gap-2.5;
  // .checkout-list__item

  &__item {
  }
}
.checkout-product {
  // .checkout-product__wrapper

  &__wrapper {
    @apply flex justify-between gap-4 rounded-xl bg-bgPrimary py-3 px-5 font-medium max-lg:flex-col max-lg:p-4;
  }

  // .checkout-product__name

  &__name {
    @apply max-w-xs text-xs max-lg:max-w-none;
  }

  // .checkout-product__subtotal

  &__subtotal {
    @apply relative text-xl text-primary max-lg:pb-6;
    @apply max-lg:after:absolute max-lg:after:left-0 max-lg:after:bottom-0 max-lg:after:text-sm max-lg:after:text-textSecondary max-lg:after:content-[attr(data-name)];
  }
}
</style>
