<template>
  <div class="register">
    <div class="register__wrapper">
      <h3 class="register__title">Create an account</h3>
      <Form
        class="register__form register-form"
        @submit="onSubmitRegister"
        :validation-schema="validationSchema"
      >
        <div class="register-form__group">
          <Field
            type="text"
            name="name"
            class="register-form__input input"
            placeholder="Name"
          />
          <ErrorMessage name="name" class="error-message" />
        </div>
        <div class="register-form__group">
          <Field
            type="email"
            name="email"
            class="register-form__input input"
            placeholder="Email"
          />
          <ErrorMessage name="email" class="error-message" />
        </div>
        <div class="register-form__group">
          <Field
            type="password"
            name="password"
            class="register-form__input input"
            placeholder="Password"
          />
          <ErrorMessage name="password" class="error-message" />
        </div>
        <div class="register-form__group">
          <Field
            type="password"
            name="confirm_password"
            class="register-form__input input"
            placeholder="Confirm password"
          />
          <ErrorMessage name="confirm_password" class="error-message" />
        </div>
        <div class="register-form__group">
          <div class="register-form__checkbox check-radio">
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
                I accept the
                <router-link :to="{ name: 'terms' }" class="text-primary">
                  terms and conditions</router-link
                >
              </label>
            </Field>
          </div>
        </div>
        <hera-button
          :disabled="isLoading"
          class="register-form__button primary"
          type="submit"
          text="Sign Up"
        />
      </Form>
      <div class="register__additional">
        Already have an account?
        <router-link
          class="font-semibold text-primary"
          :to="{ name: 'signIn' }"
        >
          Login here</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { Form, Field, ErrorMessage } from "vee-validate";
import HeraButton from "@/components/UI/Button.vue";
import { useToast } from "vue-toastification";

export default {
  name: "RegisterView",
  components: {
    Form,
    Field,
    ErrorMessage,
    HeraButton,
  },
  data() {
    return {
      validationSchema: {
        name: "required|min:3|max:50",
        email: "required|max:254|email",
        password: "required|min:8|max:128",
        confirm_password: "required|confirmed:@password",
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
    ...mapState({
      isLoading: (state) => state.auth.isLoading,
      error: (state) => state.auth.error,
    }),
  },
  methods: {
    ...mapActions({
      register: "auth/register",
    }),
    onSubmitRegister(credentials) {
      this.register(credentials).then(() => {
        this.$router.push({ name: "myAccount" });
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.register {
  // .register__wrapper

  &__wrapper {
  }

  // .register__title

  &__title {
    @apply mb-7 text-center text-2xl font-semibold;
  }

  // .register__form

  &__form {
  }

  // .register__additional

  &__additional {
    @apply mt-4;
  }
}
.register-form {
  // .register-form__group

  &__group {
    @apply mb-2.5 last:mb-0;
  }

  // .register-form__input

  &__input {
  }

  // .register-form__button

  &__button {
    @apply mt-2.5 w-full;
  }
}
</style>
