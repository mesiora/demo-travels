<template>
  <NuxtLayout>
    <NuxtLoadingIndicator />
    <NuxtPage />
  </NuxtLayout>
</template>

<style lang="postcss">
.custom-scrollbar {
  ::-webkit-scrollbar {
    width: 7px;
    height: 7px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  ::-webkit-scrollbar-thumb {
    background: #555;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #222;
  }
}

a {
  text-decoration: none !important;
  @apply relative;

  &::before {
    content: '';
    height: 2px;
    left: 10%;
    @apply invisible absolute top-1/2 z-10 w-0 bg-white transition-all duration-300;
  }

  &:hover {
    &::before {
      width: 95%;
      visibility: visible;
      @apply visible shadow shadow-white;
    }
  }

  &.primary {
    &::before {
      height: 3px;
      left: 0;
      @apply left-0 top-full bg-gray-100 dark:bg-gray-800 dark:shadow-none;
    }

    &:hover {
      &::before {
        @apply w-full;
      }
    }

    &.active {
      &::before {
        @apply bg-sorbus-600 visible w-full;
      }
    }
  }
}
</style>
