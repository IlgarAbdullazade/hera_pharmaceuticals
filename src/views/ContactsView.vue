<template>
  <div class="page__contacts contacts">
    <div class="contacts__container">
      <div class="contacts__wrapper">
        <div class="contacts__content contacts-content">
          <div class="contacts-content__body">
            <h3 class="contacts-content__title">Send Us a Message</h3>
            <hera-contacts-form class="contacts-content__form" />
          </div>
          <hera-contacts-footer class="contacts-content__footer" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import HeraContactsForm from "@/components/contacts/ContactsForm.vue";
import HeraContactsFooter from "@/components/contacts/ContactsFooter.vue";

export default {
  name: "ContactUsView",
  components: {
    HeraContactsForm,
    HeraContactsFooter,
  },
};
</script>

<style lang="scss" scoped>
.contacts {
  // .contacts__container

  &__container {
  }

  // .contacts__wrapper

  &__wrapper {
  }

  // .contacts__content

  &__content {
  }
}
.contacts-content {
  @apply rounded-3xl bg-white p-7;
  // .contacts-content__body

  &__body {
    @apply mb-10;
  }

  // .contacts-content__title

  &__title {
    @apply mb-7 text-2xl font-semibold;
  }

  // .contacts-content__form

  &__form {
  }

  // .contacts-content__footer

  &__footer {
  }
}
</style>
