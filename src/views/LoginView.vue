<template>
  <div class="login">
    <div class="login__wrapper">
      <h3 class="login__title">Sign in to your account</h3>
      <Form
        class="login__form login-form"
        @submit="onSubmitLogin"
        :validation-schema="validationSchema"
      >
        <div class="login-form__group">
          <Field
            type="text"
            name="username"
            class="login-form__input input"
            placeholder="Username or email"
          />
          <ErrorMessage name="username" class="error-message" />
        </div>
        <div class="login-form__group">
          <Field
            type="password"
            name="password"
            class="login-form__input input"
            placeholder="Password"
          />
          <ErrorMessage name="password" class="error-message" />
        </div>
        <div class="login-form__group">
          <VueRecaptcha
            :sitekey="siteKey"
            :load-recaptcha-script="true"
            @verify="handleSuccess"
            @error="handleError"
          />
        </div>
        <hera-button
          class="login-form__button primary"
          :type="'submit'"
          text="Sign In"
        />
      </Form>
      <div class="login__additional">
        Don’t have an account yet?
        <router-link class="font-semibold text-primary" :to="{ name: 'signUp' }"
          >Sign up</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { Form, Field, ErrorMessage } from "vee-validate";
import { VueRecaptcha } from "vue-recaptcha";
import HeraButton from "@/components/UI/Button.vue";

export default {
  name: "LoginView",
  components: {
    Form,
    Field,
    ErrorMessage,
    VueRecaptcha,
    HeraButton,
  },
  data() {
    return {
      validationSchema: {
        username: "required|min:3|max:50",
        password: "required|min:8|max:128",
      },
      siteKey: "yourSiteAPIKey",
    };
  },
  methods: {
    ...mapActions({
      login: "auth/login",
    }),
    onSubmitLogin(values) {
      this.login(values).then(() => {
        this.$router.push({ name: "myAccount" });
      });
    },
    handleError() {
      // Do some validation
    },
    handleSuccess() {
      // Do some validation
    },
  },
};
</script>

<style lang="scss" scoped>
.login {
  // .login__wrapper

  &__wrapper {
  }

  // .login__title

  &__title {
    @apply mb-7 text-center text-2xl font-semibold;
  }

  // .login__form

  &__form {
  }

  // .login__additional

  &__additional {
    @apply mt-4;
  }
}
.login-form {
  // .login-form__group

  &__group {
    @apply mb-2.5 last:mb-0;
  }

  // .login-form__input

  &__input {
  }

  // .login-form__button

  &__button {
    @apply mt-2.5 w-full;
  }
}
</style>
