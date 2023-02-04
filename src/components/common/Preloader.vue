<template>
  <div class="preloader">
    <div class="preloader__wrapper">
      <div class="preloader__spinner">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          style="
            margin: auto;
            background: none;
            display: block;
            shape-rendering: auto;
          "
          width="80px"
          height="80px"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid"
        >
          <path
            d="M10 50A40 40 0 0 0 90 50A40 42 0 0 1 10 50"
            fill="#5669ff"
            stroke="none"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              dur="1s"
              repeatCount="indefinite"
              keyTimes="0;1"
              values="0 50 51;360 50 51"
            ></animateTransform>
          </path>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeraPreloader",
};
</script>

<style lang="scss" scoped>
.preloader {
  @apply fixed top-0 left-0 z-50 h-screen w-full overflow-hidden bg-bgPrimary;
  // .preloader__wrapper

  &__wrapper {
    @apply flex h-full w-full flex-col items-center justify-center;
  }

  // .preloader__spinner

  &__spinner {
  }
}
</style>
