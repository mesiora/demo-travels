<template>
  <section class="relative p-7">
    <div id="hero" class="rounded-3xl">
      <UContainer
        class="relative flex h-full w-full items-center justify-center"
      >
        <div class="text-center text-white">
          <h2 class="font-prompt text-[45px] font-light tracking-wide">
            Helping Others
          </h2>
          <h1 class="font-prompt text-[80px] font-medium tracking-wide">
            LIVE & TRAVEL
          </h1>
          <h3 class="text-xl">
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
  height: calc(100vh - 80px);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

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

@screen md {
  #hero {
    height: 75vh;
  }
}

@screen lg {
  #hero {
    height: 70vh;
  }
}
</style>
