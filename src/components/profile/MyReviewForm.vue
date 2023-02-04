<template>
  <div class="review-modal">
    <div class="review-modal__wrapper">
      <h3 class="review-modal__title">
        {{ this.review ? `Edit the review` : `Create a review` }}
      </h3>
      <Form
        class="review-modal__form review-modal-form"
        @submit="onSubmitReview"
        :validation-schema="validationSchema"
        :initial-values="formValues"
      >
        <div class="review-modal-form__group">
          <Field
            type="text"
            name="name"
            class="review-modal-form__input input"
            placeholder="Name"
          />
          <ErrorMessage name="name" class="error-message" />
        </div>
        <div class="review-modal-form__group">
          <Field v-slot="{ field }" name="text">
            <textarea
              v-bind="field"
              class="review-modal-form__textarea input"
              name="text"
              rows="8"
              placeholder="Feedback"
            ></textarea>
          </Field>

          <ErrorMessage name="text" class="error-message" />
        </div>
        <div class="review-modal-form__group">
          <hera-button
            class="review-modal-form__button _outline"
            @click="formValues.image = null"
            :text="
              formValues.image
                ? `Remove the picture`
                : selectedImageName
                ? selectedImageName
                : `Add a picture`
            "
          >
            <template v-slot:iconBefore>
              <Icon class="mr-1 text-base" icon="material-symbols:image" />
            </template>

            <template v-slot:content v-if="!formValues.image">
              <Field name="image">
                <label
                  for="upload-image"
                  class="absolute left-0 top-0 h-full w-full cursor-pointer"
                >
                  <input
                    id="upload-image"
                    type="file"
                    name="image"
                    @change="onFileChange"
                    accept="image/png, image/jpeg"
                    class="hidden"
                  />
                </label>
              </Field>
            </template>
          </hera-button>
        </div>
        <hera-button
          class="review-modal-form__button primary"
          type="submit"
          text="Submit review"
        />
      </Form>
    </div>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";
import { Form, Field, ErrorMessage } from "vee-validate";
import HeraButton from "@/components/UI/Button.vue";

export default {
  name: "LoginView",
  components: {
    Icon,
    Form,
    Field,
    ErrorMessage,
    HeraButton,
  },
  props: {
    review: {
      type: Object,
      required: false,
    },
  },
  data() {
    return {
      validationSchema: {
        name: "required|min:3|max:50",
        text: "required|min:8|max:1000",
      },
      formValues: {
        name: this.review ? this.review.title : null,
        text: this.review ? this.review.text : null,
        image: this.review ? this.review.image : null,
      },
      selectedImage: null,
      selectedImageName: null,
    };
  },
  methods: {
    onSubmitReview(values) {
      const formData = new FormData();
      formData.append("image", this.selectedImage);
      console.log(formData);
    },
    onFileChange(e) {
      const file = e.target.files[0];
      this.selectedImageName = file.name;
      const reader = new FileReader();
      reader.readAsArrayBuffer(file);
      reader.onload = () => {
        this.selectedImage = new Uint8Array(reader.result);
      };
      //this.url = URL.createObjectURL(file);
    },
  },
};
</script>

<style lang="scss" scoped>
.review-modal {
  @apply max-lg: mt-40 mt-28;
  // .review-modal__wrapper

  &__wrapper {
    @apply mx-auto w-full max-w-lg rounded-2xl bg-white p-7;
  }

  // .review-modal__title

  &__title {
    @apply mb-7 text-center text-2xl font-semibold;
  }

  // .review-modal__form

  &__form {
  }
}

.review-modal-form {
  // .review-modal-form__group

  &__group {
    @apply last: mb-2.5 mb-0;
  }

  // .review-modal-form__input

  &__input {
  }

  // .review-modal-form__textarea

  &__textarea {
    @apply rounded-2xl;
  }

  // .review-modal-form__button

  &__button {
    @apply relative mt-2.5 w-full;
  }
}
</style>
