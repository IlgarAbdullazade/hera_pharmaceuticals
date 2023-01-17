<template>
  <Form class="settings-form">
    <div class="settings-form__header -mt-7 rounded-t-2xl">
      <div class="settings-form__title">Change your email</div>
    </div>
    <div class="settings-form__row">
      <div class="settings-form__caption">Actual email*</div>
      <div class="settings-form__group">
        <Field
          type="email"
          name="email"
          class="settings-form__input input"
          placeholder="Actual email"
          disabled
          value="dpavloviche@gmail.com"
        />
        <ErrorMessage name="email" class="error-message" />
      </div>
    </div>
    <div class="settings-form__row">
      <div class="settings-form__caption">New email*</div>
      <div class="settings-form__group">
        <Field
          type="email"
          name="newEmail"
          class="settings-form__input input"
          placeholder="New email"
        />
        <ErrorMessage name="newEmail" class="error-message" />
      </div>
    </div>
    <div class="settings-form__row">
      <div class="settings-form__caption"></div>
      <hera-button
        class="settings-form__button primary"
        :type="'submit'"
        text="Update email"
      />
    </div>
  </Form>
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import HeraButton from "@/components/UI/Button.vue";

export default {
  name: "HeraChangeEmailForm",
  components: {
    Form,
    Field,
    ErrorMessage,
    HeraButton,
  },
};
</script>

<style lang="scss" scoped></style>
