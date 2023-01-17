<template>
  <div class="labtest-item">
    <div class="labtest-item__wrapper">
      <div class="labtest-item__image labtest-item-ibg-cover">
        <img src="@/assets/img/mock/trenbolone.png" alt="Trenbolone" />
      </div>
      <div class="labtest-item__info">
        <h3 class="labtest-item__title">
          NOVO NORDISK NORDITROPIN SIMPLEXX 5MG (15IU) - SOMATROPINE - 191 AMINO
          ACID
        </h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeraLabTestItem",
};
</script>

<style lang="scss" scoped>
.labtest-item {
  @apply rounded-3xl bg-white p-2;
  // .labtest-item__wrapper

  &__wrapper {
    @apply flex items-center gap-5 rounded-3xl bg-bgPrimary p-3;
  }

  // .labtest-item__image

  &__image {
    @apply aspect-square w-20 shrink-0 overflow-hidden rounded-3xl;
  }

  // .labtest-item__info

  &__info {
  }

  // .labtest-item__title

  &__title {
    @apply text-lg font-medium max-lg:text-sm;
  }
}
</style>
