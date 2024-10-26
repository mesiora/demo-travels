<template>
  <NuxtLayout>
    <NuxtLoadingIndicator />
    <NuxtPage />
    <MouseTrail2 />
  </NuxtLayout>
</template>

<style lang="postcss">
html {
  @apply bg-[#f0f2f3] font-sans font-normal antialiased;
}

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

a,
.link {
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
      @apply left-0 top-full bg-gray-100;
    }

    &:hover {
      &::before {
        @apply w-full;
      }
    }

    &.active {
      &::before {
        @apply visible w-full bg-sorbus-700;
      }
    }
  }
}

.page {
  section:last-child {
    @apply pb-60 md:pb-36;
  }
}
</style>
