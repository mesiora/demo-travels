<template>
  <section class="relative p-4 xl:p-7">
    <div id="hero" class="rounded-3xl">
      <UContainer
        class="relative flex h-full w-full items-center justify-center"
      >
        <div class="text-center text-white">
          <h2
            class="font-prompt text-[30px] font-light tracking-wide sm:text-[40px] md:text-[44px]"
          >
            Helping Others
          </h2>
          <h1
            class="font-prompt text-[46px] font-medium tracking-wide sm:text-[64px] md:text-[80px]"
          >
            LIVE & TRAVEL
          </h1>
          <h3 class="sm:text-xl">
            Exploring new places is a great way to relax and clear your mind.
          </h3>
        </div>

        <FormBooking bottom-hang />
      </UContainer>
    </div>
  </section>
</template>

<script lang="ts" setup></script>

<style lang="postcss">
#hero {
  background-image: url('~/assets/images/hero.webp');
  background-size: cover;
  background-position: center center;
  height: 75vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media (min-width: 376px) {
    height: 65vh;
    @apply landscape:h-[40rem];
  }

  @screen md {
    height: 70vh;
    @apply landscape:h-[40rem];
  }

  @screen lg {
    height: 80vh;
  }

  @screen xl {
    height: calc(100vh - 80px);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7);
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.7) 0%,
      rgba(0, 0, 0, 0) 100%
    );
    border-radius: 20px;
    z-index: 0;
  }
}
</style>
