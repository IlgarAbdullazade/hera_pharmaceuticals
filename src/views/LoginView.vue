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
            type="email"
            name="email"
            class="login-form__input input"
            placeholder="Email"
          />
          <ErrorMessage name="email" class="error-message" />
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
        <hera-button
          :disabled="isLoading"
          class="login-form__button primary"
          type="submit"
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
import { mapState, mapActions } from "vuex";
import { Form, Field, ErrorMessage } from "vee-validate";
import HeraButton from "@/components/UI/Button.vue";

export default {
  name: "LoginView",
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
        password: "required|min:8|max:128",
      },
      siteKey: "yourSiteAPIKey",
    };
  },
  computed: {
    ...mapState({
      isLoading: (state) => state.auth.isLoading,
      error: (state) => state.auth.error,
    }),
  },
  methods: {
    ...mapActions({
      login: "auth/login",
      getCart: "cart/getCart",
    }),
    onSubmitLogin(credentials) {
      this.login(credentials).then(() => {
        this.getCart();
        this.$router.push({ name: "myAccount" });
      });
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
