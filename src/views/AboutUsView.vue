<template>
  <div class="page__about about">
    <div class="about__container">
      <div class="about__wrapper">
        <section class="about__section about-first-section">
          <div class="about-first-section__wrapper">
            <div class="about-first-section__content">
              <h3 class="about-first-section__title about__title">Our story</h3>
              <p class="about-first-section__text about__text">
                Hera pharmaceuticals was made by bodybuilders for bodybuilders.
                During the years of being in this sport it was a hell for us to
                find high quality products. Sources didn’t test their gear and
                if we tested it our selves it came out as under dosed most of
                the times. After receiving winstrol instead of anavar we decided
                enough is enough and decided to start brewing for ourselves.
                After years of working for a few other sources and supplying
                locals we decided that we have enough experience and expertise
                to launch our own baby – Hera pharmaceuticals.
              </p>
            </div>
            <div
              class="about-first-section__image about-first-section-ibg-cover"
            >
              <img src="@/assets/img/bodybuilder.png" alt="Hera" />
            </div>
          </div>
        </section>
        <section class="about__section about-second-section">
          <div class="about-second-section__wrapper">
            <div class="about-second-section__content">
              <h3 class="about-second-section__title about__title">
                Our Product
              </h3>
              <p class="about-second-section__text about__text">
                We have the most clean and most based product you motherfuckers
                can find out there. We just add this and that and its tamam you
                become a monster gg. You are the biggest guy on the block right
                now, chick going crazy, guys want to be you, your father is
                starting to feel unsecure standing next to you. And this all
                because of our secret ingredient. Lachmajun.
              </p>
            </div>
            <div
              class="about-second-section__image about-second-section-ibg-contain"
            >
              <img src="@/assets/img/about/about_medicine.png" alt="Medicine" />
            </div>
          </div>
        </section>
        <section class="about__section about-third-section">
          <div class="about-third-section__wrapper">
            <div class="about-third-section__content">
              <h3 class="about-third-section__title about__title">
                Our Laboratory
              </h3>
              <p class="about-third-section__text about__text">
                We use the latest and the most sterile equipment. We follow
                strict procedures to keep our environment sterile and our
                products clean and consistent. We have the following equipment:
                We use the latest and the most sterile equipment. We follow
                strict procedures to keep our environment sterile and our
                products clean and consistent. We have the following equipment:
                We use the latest and the most sterile equipment.
              </p>
            </div>
            <div
              class="about-third-section__image about-third-section-ibg-contain"
            >
              <img src="@/assets/img/about/about_lab.png" alt="Lab" />
            </div>
          </div>
        </section>
        <section class="about__section about-fourth-section">
          <div class="about-fourth-section__wrapper">
            <div class="about-fourth-section__content">
              <h3 class="about-fourth-section__title about__title">
                Our Laboratory
              </h3>
              <p class="about-fourth-section__text about__text">
                We use the latest and the most sterile equipment. We follow
                strict procedures to keep our environment sterile and our
                products clean and consistent. We have the following equipment:
                We use the latest and the most sterile equipment. We follow
                strict procedures to keep our environment sterile and our
                products clean and consistent. We have the following equipment:
                We use the latest and the most sterile equipment.
              </p>
            </div>
            <div
              class="about-fourth-section__image about-fourth-section-ibg-contain"
            >
              <img src="@/assets/img/about/about_docs.png" alt="Docs" />
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutUsView",
};
</script>

<style lang="scss" scoped>
.about {
  // .about__container

  &__container {
  }

  // .about__wrapper

  &__wrapper {
    @apply flex flex-col gap-24;
  }

  // .about__section

  &__section {
  }

  // .about__title

  &__title {
    @apply mb-2.5 text-base font-medium;
  }

  // .about__text

  &__text {
    @apply text-textSecondary;
  }
}

.about-first-section {
  // .about-first-section__wrapper

  &__wrapper {
    @apply flex items-center max-lg:flex-col;
  }

  // .about-first-section__content

  &__content {
    @apply -mr-[304px] min-h-[200px] rounded-3xl bg-white p-7 pr-[324px] max-lg:mr-0 max-lg:pr-7 max-lg:pb-48;
  }

  // .about-first-section__title

  &__title {
  }

  // .about-first-section__text

  &__text {
  }

  // .about-first-section__image

  &__image {
    @apply aspect-square w-full max-w-[304px] flex-shrink-0 overflow-hidden rounded-full border-2	outline outline-1 outline-textSecondary max-lg:-mt-[152px];
  }
}

.about-second-section {
  // .about-second-section__wrapper

  &__wrapper {
    @apply relative flex min-h-[200px] items-center overflow-hidden rounded-3xl bg-primary max-lg:flex-col-reverse;
    @apply after:absolute after:left-0 after:z-0 after:h-full after:w-full after:bg-[url('@/assets/img/about/about_bg_1.png')] after:bg-cover after:bg-[center_40rem] after:content-[''] max-lg:after:bg-left-bottom;
  }

  // .about-second-section__content

  &__content {
    @apply relative z-20 p-7 pl-[324px] text-right max-lg:pl-7 max-lg:pb-60 max-lg:text-left;
  }

  // .about-second-section__title

  &__title {
    @apply text-white;
  }

  // .about-second-section__text

  &__text {
    @apply text-white;
  }

  // .about-second-section__image

  &__image {
    @apply absolute z-10 h-[600px] w-[524px] -translate-x-1/4 translate-y-28 max-lg:translate-x-10 max-lg:translate-y-1/2;
  }
}

.about-third-section {
  // .about-third-section__wrapper

  &__wrapper {
    @apply relative flex min-h-[200px] items-center overflow-hidden rounded-3xl bg-white max-lg:flex-col;
  }

  // .about-third-section__content

  &__content {
    @apply p-7 pr-[324px] max-lg:pr-7 max-lg:pb-48;
  }

  // .about-third-section__title

  &__title {
  }

  // .about-third-section__text

  &__text {
  }

  // .about-third-section__image

  &__image {
    @apply absolute right-0 bottom-0 h-[200px] w-[435px];
  }
}

.about-fourth-section {
  // .about-fourth-section__wrapper

  &__wrapper {
    @apply relative flex min-h-[200px] items-center overflow-hidden rounded-3xl bg-primary max-lg:flex-col-reverse;
    @apply after:absolute after:left-0 after:h-full after:w-full after:bg-[url('@/assets/img/about/about_bg_2.png')] after:bg-cover after:bg-center after:content-[''] max-lg:after:bg-left-bottom;
  }

  // .about-fourth-section__content

  &__content {
    @apply p-7 pl-[324px] text-right max-lg:pl-7 max-lg:pb-60 max-lg:text-left;
  }

  // .about-fourth-section__title

  &__title {
    @apply text-white;
  }

  // .about-fourth-section__text

  &__text {
    @apply text-white;
  }

  // .about-fourth-section__image

  &__image {
    @apply absolute left-0 -top-3 h-[226px] w-[300px] max-lg:bottom-0 max-lg:left-1/2 max-lg:top-auto max-lg:-translate-x-1/2;
  }
}
</style>
