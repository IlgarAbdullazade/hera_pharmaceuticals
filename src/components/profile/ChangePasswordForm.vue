<template>
  <Form
    @submit="onSubmitForm"
    :validation-schema="validationSchema"
    class="settings-form"
  >
    <div class="settings-form__header">
      <div class="settings-form__title">Change your password</div>
    </div>
    <div class="settings-form__row">
      <div class="settings-form__caption">Old password*</div>
      <div class="settings-form__group">
        <Field
          type="text"
          name="old_password"
          class="settings-form__input input"
          placeholder="Old password"
        />
        <ErrorMessage name="old_password" class="error-message" />
      </div>
    </div>
    <div class="settings-form__row">
      <div class="settings-form__caption">New password*</div>
      <div class="settings-form__group">
        <Field
          type="text"
          name="password"
          class="settings-form__input input"
          placeholder="New password"
        />
        <ErrorMessage name="password" class="error-message" />
      </div>
    </div>
    <div class="settings-form__row">
      <div class="settings-form__caption">Confirmation password</div>
      <div class="settings-form__group">
        <Field
          type="text"
          name="confirm_password"
          class="settings-form__input input"
          placeholder="Confirmation password"
        />
        <ErrorMessage name="confirm_password" class="error-message" />
      </div>
    </div>
    <div class="settings-form__row">
      <div class="settings-form__caption"></div>
      <hera-button
        class="settings-form__button primary"
        type="submit"
        text="Update password"
      />
    </div>
  </Form>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
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
  data() {
    return {
      validationSchema: {
        old_password: "required|min:8|max:128",
        password: "required|min:8|max:128|not_same:@old_password",
        confirm_password: "required|confirmed:@password",
      },
    };
  },
  computed: {
    ...mapGetters({
      currentUser: "auth/currentUser",
    }),
  },
  methods: {
    ...mapActions({
      changePassword: "auth/changePassword",
    }),
    onSubmitForm(params) {
      this.changePassword(params);
    },
  },
};
</script>

<style lang="scss" scoped></style>
