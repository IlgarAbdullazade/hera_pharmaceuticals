<template>
  <Form class="address-form">
    <div class="address-form__row">
      <div class="address-form__caption">Your name*</div>
      <div class="address-form__group">
        <Field
          type="text"
          name="firstName"
          class="address-form__input input"
          placeholder="First Name"
        />
        <ErrorMessage name="firstName" class="error-message" />
      </div>
      <div class="address-form__group">
        <Field
          type="text"
          name="lastName"
          class="address-form__input input"
          placeholder="Last Name"
        />
        <ErrorMessage name="lastName" class="error-message" />
      </div>
    </div>
    <div class="address-form__row">
      <div class="address-form__caption">Country*</div>
      <div class="address-form__group">
        <Field
          type="text"
          name="country"
          class="address-form__input input"
          placeholder="Select country"
        />
        <ErrorMessage name="country" class="error-message" />
      </div>
    </div>
    <div class="address-form__row">
      <div class="address-form__caption">State/Province*</div>
      <div class="address-form__group">
        <Field
          type="text"
          name="state"
          class="address-form__input input"
          placeholder="State/Province"
        />
        <ErrorMessage name="state" class="error-message" />
      </div>
    </div>
    <div class="address-form__row">
      <div class="address-form__caption">City*</div>
      <div class="address-form__group">
        <Field
          type="text"
          name="city"
          class="address-form__input input"
          placeholder="City"
        />
        <ErrorMessage name="city" class="error-message" />
      </div>
    </div>
    <div class="address-form__row">
      <div class="address-form__caption">Address*</div>
      <div class="address-form__group">
        <Field
          type="text"
          name="address"
          class="address-form__input input"
          placeholder="Address"
        />
        <ErrorMessage name="address" class="error-message" />
      </div>
    </div>
    <div class="address-form__row">
      <div class="address-form__caption">Zip/Post code*</div>
      <div class="address-form__group">
        <Field
          type="text"
          name="zip"
          class="address-form__input input"
          placeholder="Zip/Post code"
        />
        <ErrorMessage name="zip" class="error-message" />
      </div>
    </div>
    <div class="address-form__row">
      <div class="address-form__caption">Telephone*</div>
      <div class="address-form__group">
        <Field
          type="text"
          name="telephone"
          class="address-form__input input"
          placeholder="Telephone"
        />
        <ErrorMessage name="telephone" class="error-message" />
      </div>
    </div>
    <div class="address-form__row">
      <div class="address-form__caption"></div>
      <hera-button
        class="address-form__button primary"
        :type="'submit'"
        text="Save Address"
      />
    </div>
  </Form>
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import HeraButton from "@/components/UI/Button.vue";

export default {
  name: "HeraAddressForm",
  components: {
    Form,
    Field,
    ErrorMessage,
    HeraButton,
  },
};
</script>

<style lang="scss" scoped>
.address-form {
  @apply flex flex-col gap-4;
  // .address-form__row

  &__row {
    @apply flex items-center gap-2.5 max-lg:flex-col max-lg:items-start;
  }

  // .address-form__caption

  &__caption {
    @apply mr-2.5 w-full max-w-[120px] text-right font-medium max-lg:mr-0 max-lg:min-w-0 max-lg:text-left;
  }

  // .address-form__group

  &__group {
    @apply w-full;
  }

  // .address-form__input

  &__input {
  }

  // .address-form__button

  &__button {
    @apply w-full max-w-[220px] max-lg:max-w-none;
  }
}
</style>
