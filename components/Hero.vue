<template>
  <section class="relative p-4 xl:p-7">
    <div id="hero">
      <div id="hero-image-container">
        <img
          :src="Hero"
          class="hero-image absolute h-full w-full overflow-hidden rounded-3xl object-cover"
          alt="Japan"
        />
      </div>

      <UContainer
        class="relative z-20 flex h-full w-full items-center justify-center"
      >
        <div class="text-center text-white">
          <h2
            class="subtitle1 font-prompt text-[30px] font-light tracking-wide sm:text-[40px] md:text-[44px]"
          >
            {{ $t('helping-others') }}
          </h2>
          <h1
            class="main-title font-prompt text-[46px] font-medium tracking-wide sm:text-[64px] md:text-[80px]"
          >
            {{ $t('live-travel') }}
          </h1>
          <h2 class="subtitle-2 sm:text-xl">
            {{ $t('exploring-new-places') }}
          </h2>
        </div>

        <FormBooking class="form-booking" bottom-hang />
      </UContainer>
    </div>
  </section>
</template>

<script lang="ts" setup>
import Hero from '~/assets/images/hero.webp'
const { $gsap } = useNuxtApp()

// Initialize animations
onMounted(() => {
  // $gsap.registerPlugin($ScrollTrigger)

  // Create a timeline
  const tl = $gsap.timeline({
    defaults: {
      ease: 'power3.out',
    },
  })

  // tl.from('#hero-image-container', {
  //   duration: 1,
  //   opacity: 0,
  // })
  tl.from('.nav-menu', {
    duration: 0.6,
    opacity: 0,
  })
  tl.from(
    '.subtitle1',
    {
      duration: 0.6,
      y: 10,
      opacity: 0,
    },
    '-=0.5',
  )
  tl.from(
    '.main-title',
    {
      duration: 0.6,
      y: 10,
      opacity: 0,
    },
    '-=0.5',
  )
  tl.from(
    '.subtitle-2, .form-booking',
    {
      duration: 0.6,
      y: 10,
      opacity: 0,
    },
    '-=0.5',
  )

  // Parallax effect for the hero image
  // $gsap.to('.hero-image', {
  //   yPercent: 30,
  //   ease: 'none',
  //   scrollTrigger: {
  //     trigger: '#hero-image-container',
  //     start: 'top top',
  //     end: 'bottom top',
  //     scrub: true,
  //     invalidateOnRefresh: true,
  //   },
  // })
})
</script>

<style lang="postcss">
#hero {
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
    z-index: 10;
  }

  #hero-image-container {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
    border-radius: 20px;
    z-index: 1;
  }
}
</style>
