<template>
  <Form class="settings-form">
    <div class="settings-form__header">
      <div class="settings-form__title">Change your password</div>
    </div>
    <div class="settings-form__row">
      <div class="settings-form__caption">Old password*</div>
      <div class="settings-form__group">
        <Field
          type="text"
          name="oldPassword"
          class="settings-form__input input"
          placeholder="Old password"
        />
        <ErrorMessage name="oldPassword" class="error-message" />
      </div>
    </div>
    <div class="settings-form__row">
      <div class="settings-form__caption">New password*</div>
      <div class="settings-form__group">
        <Field
          type="text"
          name="newPassword"
          class="settings-form__input input"
          placeholder="New password"
        />
        <ErrorMessage name="oldPassword" class="error-message" />
      </div>
    </div>
    <div class="settings-form__row">
      <div class="settings-form__caption">Confirmation password</div>
      <div class="settings-form__group">
        <Field
          type="text"
          name="confirmationPassword"
          class="settings-form__input input"
          placeholder="Confirmation password"
        />
        <ErrorMessage name="oldPassword" class="error-message" />
      </div>
    </div>
    <div class="settings-form__row">
      <div class="settings-form__caption"></div>
      <hera-button
        class="settings-form__button primary"
        :type="'submit'"
        text="Update password"
      />
    </div>
  </Form>
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import HeraButton from "@/components/UI/Button.vue";

export default {
  name: "HeraChangePasswordForm",
  components: {
    Form,
    Field,
    ErrorMessage,
    HeraButton,
  },
};
</script>

<style lang="scss" scoped></style>
