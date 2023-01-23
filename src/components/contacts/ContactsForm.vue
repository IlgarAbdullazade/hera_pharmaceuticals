<template>
  <Form class="contacts-form">
    <div class="contacts-form__group contacts-form__group--name">
      <Field
        type="text"
        name="name"
        class="contacts-form__input input"
        placeholder="Name"
      />
      <ErrorMessage name="name" class="error-message" />
    </div>
    <div class="contacts-form__group contacts-form__group--email">
      <Field
        type="email"
        name="email"
        class="contacts-form__input input"
        placeholder="Email"
      />
      <ErrorMessage name="email" class="error-message" />
    </div>
    <div class="contacts-form__group contacts-form__group--textarea">
      <Field v-slot="{ field }" name="message">
        <textarea
          v-bind="field"
          class="contacts-form__textarea input"
          name="comment"
          rows="3"
          placeholder="Comment or Message"
        ></textarea>
      </Field>

      <ErrorMessage name="comment" class="error-message" />
    </div>
    <hera-button
      class="contacts-form__button primary"
      :type="'submit'"
      text="Submit"
    >
      <template v-slot:iconBefore>
        <Icon class="mr-2 text-base" icon="mdi:email" />
      </template>
    </hera-button>
  </Form>
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import { Icon } from "@iconify/vue";
import HeraButton from "@/components/UI/Button.vue";

export default {
  name: "HeraContactsForm",
  components: {
    Form,
    Field,
    ErrorMessage,
    Icon,
    HeraButton,
  },
};
</script>

<style lang="scss" scoped>
.contacts-form {
  @apply grid grid-flow-row grid-cols-3 gap-4 rounded-[30px] bg-white max-lg:grid-cols-1;
  grid-template-areas:
    "name email button"
    "textarea textarea textarea";

  @media not all and (min-width: 1024px) {
    grid-template-areas:
      "name"
      "email"
      "textarea"
      "button";
  }
  // .contacts-form__group

  &__group {
    &--name {
      grid-area: name;
    }
    &--email {
      grid-area: email;
    }
    &--textarea {
      grid-area: textarea;
    }
  }

  // .contacts-form__input

  &__input {
  }

  // .contacts-form__textarea

  &__textarea {
    @apply rounded-2xl;
  }

  // .contacts-form__button

  &__button {
    @apply w-full;
    grid-area: button;
  }
}
</style>
