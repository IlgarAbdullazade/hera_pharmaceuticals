<template>
  <div v-if="userAddress" class="checkout-content">
    <Form
      @submit="onSubmitForm"
      :validation-schema="validationSchema"
      class="checkout-content__body"
    >
      <div class="checkout-content__col">
        <h3 class="checkout-content__title">Billing details</h3>
        <div class="checkout-content__form checkout-form">
          <div class="checkout-form__row">
            <div class="checkout-form__group">
              <Field
                type="text"
                name="first_name"
                :value="userAddress?.first_name"
                class="checkout-form__input input"
                placeholder="First name"
              />
              <ErrorMessage name="first_name" class="error-message" />
            </div>
            <div class="checkout-form__group">
              <Field
                type="text"
                name="last_name"
                :value="userAddress?.last_name"
                class="checkout-form__input input"
                placeholder="Last name"
              />
              <ErrorMessage name="last_name" class="error-message" />
            </div>
          </div>
          <div class="checkout-form__group">
            <Field
              type="text"
              name="city"
              :value="userAddress?.city"
              class="checkout-form__input input"
              placeholder="Town/City"
            />
            <ErrorMessage name="city" class="error-message" />
          </div>
          <div class="checkout-form__group">
            <Field
              type="text"
              name="state"
              :value="userAddress?.state"
              class="checkout-form__input input"
              placeholder="State/Province"
            />
            <ErrorMessage name="state" class="error-message" />
          </div>
          <div class="checkout-form__group">
            <Field
              type="text"
              name="address"
              :value="userAddress?.address"
              class="checkout-form__input input"
              placeholder="Address"
            />
            <ErrorMessage name="address" class="error-message" />
          </div>
          <div class="checkout-form__group">
            <Field
              type="text"
              name="zip_code"
              :value="userAddress?.zip_code"
              class="checkout-form__input input"
              placeholder="Zip/Post code"
            />
            <ErrorMessage name="zip_code" class="error-message" />
          </div>
          <div class="checkout-form__group">
            <Field
              type="text"
              name="phone_number"
              :value="userAddress?.phone_number"
              v-mask="`+1 (###) ###-##-##`"
              class="checkout-form__input input"
              placeholder="Phone Number"
            />
            <ErrorMessage name="phone_number" class="error-message" />
          </div>
          <div class="checkout-form__group">
            <Field
              type="email"
              name="email"
              :value="currentUser.email"
              class="checkout-form__input input"
              placeholder="Email address"
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
            v-for="item in cartItems"
            :key="item.product.slug"
          >
            <div class="checkout-product__wrapper">
              <div class="checkout-product__name">
                {{ item.product.title }}
              </div>
              <div data-name="Subtotal" class="checkout-product__subtotal">
                ${{ item.product.price * item.quantity }}
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
          <router-link class="text-primary" :to="{ name: 'policy' }"
            >privacy policy</router-link
          >. We never share it with third parties.
        </div>
        <div class="checkout-content__terms">
          <div class="checkout-content__checkbox check-radio">
            <Field
              v-slot="{ field, errors }"
              name="terms"
              type="checkbox"
              :value="true"
            >
              <label class="check-radio__label">
                <input
                  class="check-radio__input"
                  :class="{ error: !!errors.length }"
                  type="checkbox"
                  name="terms"
                  v-bind="field"
                  :value="true"
                />
                I have read and agree to the website
                <router-link :to="{ name: 'terms' }" class="text-primary">
                  terms and conditions</router-link
                >
              </label>
            </Field>
          </div>
        </div>
        <div class="checkout-content__submit">
          <hera-button
            type="submit"
            class="checkout-content__button primary"
            text="Pay with bitcoin"
          />
        </div>
      </div>
    </Form>
  </div>
</template>

<script>
import { mapGetters, mapState, mapActions } from "vuex";
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
  data() {
    return {
      validationSchema: {
        first_name: "required",
        last_name: "required",
        address: "required",
        city: "required",
        state: "required",
        zip_code: "required",
        phone_number: "required",
        terms: (value) => {
          if (value) {
            return true;
          }
          return;
        },
      },
    };
  },
  computed: {
    ...mapGetters({
      cartItems: "cart/cartItems",
      userAddress: "auth/userAddress",
      currentUser: "auth/currentUser",
    }),
    ...mapState({
      isLoading: (state) => state.auth.isLoading,
      error: (state) => state.auth.error,
    }),
  },
  methods: {
    ...mapActions({
      getAddress: "auth/getAddress",
      checkout: "order/checkout",
    }),
    onSubmitForm(params) {
      this.checkout(params).then((res) =>
        res ? this.$router.push("payment") : null
      );
    },
  },
  mounted() {
    this.getAddress();
  },
  created() {
    if (!this.cartItems.length) this.$router.push({ name: "cart" });
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
