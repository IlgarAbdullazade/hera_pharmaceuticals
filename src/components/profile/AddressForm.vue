<template>
  <Form
    v-if="userAddress"
    @submit="onSubmitForm"
    :validation-schema="validationSchema"
    class="address-form"
  >
    <div class="address-form__row">
      <div class="address-form__caption">Your name*</div>
      <div class="address-form__group">
        <Field
          type="text"
          :value="userAddress?.first_name"
          name="first_name"
          class="address-form__input input"
          placeholder="First Name"
        />
        <ErrorMessage name="first_name" class="error-message" />
      </div>
      <div class="address-form__group">
        <Field
          type="text"
          :value="userAddress?.last_name"
          name="last_name"
          class="address-form__input input"
          placeholder="Last Name"
        />
        <ErrorMessage name="last_name" class="error-message" />
      </div>
    </div>
    <div class="address-form__row">
      <div class="address-form__caption">State/Province*</div>
      <div class="address-form__group">
        <Field
          type="text"
          name="state"
          :value="userAddress?.state"
          class="address-form__input input"
          placeholder="State/Province"
        />
        <ErrorMessage name="state" class="error-message" />
      </div>
    </div>
    <div class="address-form__row">
      <div class="address-form__caption">Town/City*</div>
      <div class="address-form__group">
        <Field
          type="text"
          name="city"
          :value="userAddress?.city"
          class="address-form__input input"
          placeholder="Town/City"
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
          :value="userAddress?.address"
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
          name="zip_code"
          :value="userAddress?.zip_code"
          class="address-form__input input"
          placeholder="Zip/Post code"
        />
        <ErrorMessage name="zip_code" class="error-message" />
      </div>
    </div>
    <div class="address-form__row">
      <div class="address-form__caption">Phone Number*</div>
      <div class="address-form__group">
        <Field
          type="text"
          :value="userAddress?.phone_number"
          v-mask="`+1 (###) ###-##-##`"
          name="phone_number"
          class="address-form__input input"
          placeholder="Phone Number"
        />
        <ErrorMessage name="phone_number" class="error-message" />
      </div>
    </div>
    <div class="address-form__row">
      <div class="address-form__caption"></div>
      <hera-button
        class="address-form__button primary"
        type="submit"
        text="Save Address"
      />
    </div>
  </Form>
</template>
<script>
import { mapState, mapActions, mapGetters } from "vuex";
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
      },
    };
  },
  computed: {
    ...mapState({
      isLoading: (state) => state.auth.isLoading,
      error: (state) => state.auth.error,
    }),
    ...mapGetters({
      userAddress: "auth/userAddress",
    }),
  },
  methods: {
    ...mapActions({
      changeAddress: "auth/changeAddress",
      getAddress: "auth/getAddress",
    }),
    onSubmitForm(params) {
      this.changeAddress(params);
    },
  },
  mounted() {
    this.getAddress();
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
