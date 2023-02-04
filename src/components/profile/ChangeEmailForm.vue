<template>
  <Form
    @submit="onSubmitForm"
    :validation-schema="validationSchema"
    class="settings-form"
  >
    <div class="settings-form__header -mt-7 rounded-t-2xl">
      <div class="settings-form__title">Change your email</div>
    </div>
    <div class="settings-form__row">
      <div class="settings-form__caption">New email*</div>
      <div class="settings-form__group">
        <Field
          type="email"
          name="email"
          class="settings-form__input input"
          placeholder="New email"
        />
        <ErrorMessage name="email" class="error-message" />
      </div>
    </div>
    <div class="settings-form__row">
      <div class="settings-form__caption">Code*</div>
      <div class="settings-form__group">
        <div class="settings-form__group--code">
          <Field
            type="email"
            name="code"
            class="settings-form__input input !bg-transparent"
            placeholder="Code"
          />
          <button type="button" :disabled="counting" @click="onChangeEmail">
            {{ counting ? `Send (${timerCount})` : `Send code` }}
          </button>
        </div>

        <ErrorMessage name="code" class="error-message" />
      </div>
    </div>
    <div class="settings-form__row">
      <div class="settings-form__caption"></div>
      <hera-button
        class="settings-form__button primary"
        type="submit"
        text="Update email"
      />
    </div>
  </Form>
</template>

<script>
import { mapActions } from "vuex";
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
  data() {
    return {
      validationSchema: {
        email: "required|email",
        code: "required",
      },
      timerCount: 60,
      counting: false,
    };
  },
  methods: {
    ...mapActions({
      changeEmail: "auth/changeEmail",
      confirmEmailChange: "auth/confirmEmailChange",
    }),
    onChangeEmail() {
      this.changeEmail().then(() => this.startCountdown());
    },
    onSubmitForm(params) {
      this.confirmEmailChange(params);
    },
    countDownTimer() {
      if (this.timerCount > 0 && this.counting) {
        setTimeout(() => {
          this.timerCount -= 1;
          this.countDownTimer();
        }, 1000);
      } else {
        this.onCountdownEnd();
      }
    },
    startCountdown() {
      this.counting = true;
      this.countDownTimer();
    },
    onCountdownEnd() {
      this.counting = false;
      this.timerCount = 60;
    },
  },
};
</script>

<style lang="scss" scoped></style>
