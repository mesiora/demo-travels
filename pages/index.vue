<template>
  <div>
    <Hero />

    <section class="py-7">
      <UContainer class="container">
        <h3 class="text-2xl font-bold tracking-wide">Popular Destinations</h3>
        <p>
          Most popular destinations around the world, from historical places to
          natural wonders.
        </p>
      </UContainer>

      <div class="swiper-free-mode-container my-10">
        <Swiper
          :modules="[SwiperFreeMode]"
          :slides-per-view="3"
          :space-between="30"
          :free-mode="true"
        >
          <SwiperSlide
            v-for="(slide, index) in popularDestinations"
            :key="index"
            :class="{
              'swiper-slide-0': index === 0,
            }"
          >
            <div
              class="group relative aspect-square overflow-hidden rounded-3xl"
            >
              <img
                :src="slide.image"
                class="h-full w-full object-cover"
                alt="Popular Destination"
              />
              <div
                class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50"
              >
                <div
                  class="w-full rounded-lg p-5 text-center text-white opacity-0 transition-all duration-300 group-hover:bg-opacity-80 group-hover:opacity-100"
                >
                  <h4 class="text-lg font-bold">{{ slide.title }}</h4>
                  <p>{{ slide.description }}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <!-- Empty slice to make a space for last item -->
          </SwiperSlide>
        </Swiper>
      </div>
    </section>

    <section class="py-7">
      <UContainer class="container">
        <h3 class="text-2xl font-bold tracking-wide">Special Offer</h3>
        <p>Check out our special offer and discounts</p>
      </UContainer>
    </section>
    <section class="py-7">
      <UContainer class="container">
        <h3 class="text-2xl font-bold tracking-wide">Destination Gallery</h3>
        <p>Our photo gallery on trip</p>
      </UContainer>
    </section>
  </div>
</template>

<script setup lang="ts">
import IPD1 from '~/assets/images/pd-1.png'
import IPD2 from '~/assets/images/pd-2.png'
import IPD3 from '~/assets/images/pd-3.png'

const popularDestinations = [
  {
    title: 'Shizuoka',
    description: 'Shizuoka, Japan',
    image: IPD1,
    lat: 48.8566,
    lng: 2.3522,
  },
  {
    title: 'Osaka',
    description: 'Osaka, Japan',
    image: IPD2,
    lat: 40.7128,
    lng: -74.006,
  },
  {
    title: 'Hong Kong',
    description: 'Hong Kong',
    image: IPD3,
    lat: 35.6895,
    lng: 139.6917,
  },
]

onMounted(() => {
  nextTick(() => {
    setSwiperWidth()
    window.addEventListener('resize', setSwiperWidth)
  })
})

onUnmounted(() => {
  window.removeEventListener('resize', setSwiperWidth)
})

function setSwiperWidth() {
  const container = document.querySelector('.container') as HTMLElement
  const body = document.querySelector('body') as HTMLElement

  if (!container || !body) return

  const clPadding = parseInt(
    window.getComputedStyle(container).paddingLeft.replace('px', ''),
  )

  const offset = (body.offsetWidth - container.offsetWidth) / 2 + clPadding

  const swiperFirstItems = document.querySelectorAll(
    '.swiper-free-mode-container .swiper-slide-0',
  ) as NodeListOf<HTMLElement>
  swiperFirstItems.forEach((swiper) => {
    swiper.style.marginLeft = `${offset}px`
  })
}
</script>

<style lang="postcss"></style>
