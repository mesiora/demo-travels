<template>
  <div>
    <Hero />

    <section class="overflow-hidden py-7">
      <UContainer class="container">
        <h3 class="mb-3 text-3xl font-bold tracking-wide">
          Popular Destinations
        </h3>
        <p class="text-gray-500">
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
            class="cursor-pointer"
            :class="{
              'swiper-slide-0': index === 0,
            }"
          >
            <div
              class="relative aspect-square h-[29vw] overflow-hidden rounded-3xl"
            >
              <img
                :src="slide.image"
                class="absolute h-full w-full object-cover"
                alt="Popular Destination"
              />
              <div
                class="card-gradient absolute inset-0 flex items-end justify-center"
              >
                <div class="w-full p-5 text-white">
                  <h4 class="mb-3 text-2xl font-medium">
                    {{ slide.title }}
                  </h4>
                  <div class="flex items-center gap-3 text-xl">
                    <svg-marker />
                    <p>{{ slide.location }}</p>
                  </div>
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
        <h3 class="mb-3 text-3xl font-bold tracking-wide">Special Offer</h3>
        <p class="text-gray-500">Check out our special offer and discounts</p>
      </UContainer>

      <div class="swiper-free-mode-container my-10">
        <Swiper
          :modules="[SwiperFreeMode]"
          :slides-per-view="4"
          :space-between="30"
          :free-mode="true"
        >
          <SwiperSlide
            v-for="(slide, index) in specialOffer"
            :key="index"
            class="cursor-pointer"
            :class="{
              'swiper-slide-0': index === 0,
            }"
          >
            <div class="relative overflow-hidden rounded-3xl">
              <div class="relative aspect-square h-[16vw]">
                <img
                  :src="slide.image"
                  class="absolute h-full w-full object-cover"
                  alt="Special Offer"
                />
              </div>
              <div class="bg-white p-5">
                <div class="flex items-center gap-3 text-gray-500">
                  <svg-marker />
                  <p>{{ slide.location }}</p>
                </div>
                <h4 class="mb-3 line-clamp-1 text-2xl font-medium">
                  {{ slide.title }}
                </h4>
                <div class="flex items-center gap-3 text-gray-500">
                  <div class="flex items-center gap-1 text-amber-400">
                    <svg-star v-for="star in slide.star" :key="star" />
                  </div>
                  <p class="text-xs">{{ slide.review }} Reviews</p>
                </div>
                <div class="my-6 line-clamp-4">
                  <p>{{ slide.description }}</p>
                </div>
                <div class="flex justify-between gap-3">
                  <div class="flex items-center gap-3">
                    <svg-clock class="text-white" />
                    <p>{{ slide.duration }} Day(s)</p>
                  </div>
                  <div class="text-right">
                    <p class="text-sm text-gray-500 line-through">
                      {{ price(slide.price) }}
                    </p>
                    <p class="text-2xl font-medium text-sorbus-600">
                      {{ price(slide.discountPrice) }}
                    </p>
                  </div>
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
        <h3 class="mb-3 text-3xl font-bold tracking-wide">
          Destination Gallery
        </h3>
        <p class="text-gray-500">Our photo gallery on trip</p>
      </UContainer>

      <div class="my-10">
        <Swiper
          :modules="[SwiperFreeMode]"
          :slides-per-view="3"
          :centered-slides="true"
          :initial-slide="1"
          :loop="true"
          class="dg-swiper"
        >
          <SwiperSlide
            v-for="(slide, index) in destinationGallery"
            :key="index"
            class="cursor-pointer"
          >
            <div class="relative aspect-square h-[16vw] overflow-hidden">
              <img
                :src="slide"
                class="absolute h-full w-full object-cover"
                alt="Popular Destination"
              />
            </div>
          </SwiperSlide>

          <SwiperNavigation />
        </Swiper>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import IPD1 from '~/assets/images/pd-1.png'
import IPD2 from '~/assets/images/pd-2.png'
import IPD3 from '~/assets/images/pd-3.png'
import ISO1 from '~/assets/images/so-1.png'
import ISO2 from '~/assets/images/so-2.png'
import ISO3 from '~/assets/images/so-3.png'
import IDG1 from '~/assets/images/dg-1.png'
import IDG2 from '~/assets/images/dg-2.png'
import IDG3 from '~/assets/images/dg-3.png'

const popularDestinations = [
  {
    location: 'Shizuoka, Japan',
    title: 'Shizuoka',
    image: IPD1,
  },
  {
    location: 'Osaka, Japan',
    title: 'Osaka',
    image: IPD2,
  },
  {
    location: 'Hong Kong',
    title: 'Hong Kong',
    image: IPD3,
  },
]

const specialOffer = [
  {
    location: 'Athens, Greece',
    title: 'Athens 4 Nights 5 Days',
    star: 5,
    review: 260,
    description:
      '5 nights and 4 days in 5 star hotel, breakfast and lunch included. Very popular during the renaissance. Passage and going through the cites of the world in classical literature.',
    image: ISO1,
    price: 31000.66,
    discountPrice: 29177.09,
    duration: 5,
  },
  {
    location: 'Rome, Italy',
    title: 'Rome 4 Nights 5 Days',
    star: 5,
    review: 100,
    description:
      '5 nights and 4 days in 5 star hotel, breakfast and lunch included. Very popular during the renaissance. Passage and going through the cites of the world in classical literature.',
    image: ISO2,
    price: 29177.09,
    discountPrice: 27353.52,
    duration: 5,
  },
  {
    location: 'Lisbon, Portugal',
    title: 'Lisbon 4 Nights 5 Days',
    star: 5,
    review: 150,
    description:
      '5 nights and 4 days in 5 star hotel, breakfast and lunch included. Very popular during the renaissance. Passage and going through the cites of the world in classical literature.',
    image: ISO3,
    price: 23341.67,
    discountPrice: 18235.68,
    duration: 5,
  },
  {
    location: 'Shizuoka, Japan',
    title: 'Shizuoka 4 Nights 5 Days',
    star: 5,
    review: 600,
    description:
      '5 nights and 4 days in 5 star hotel, breakfast and lunch included. Very popular during the renaissance. Passage and going through the cites of the world in classical literature.',
    image: IPD1,
    price: 60000.66,
    discountPrice: 45177.09,
    duration: 7,
  },
]

const destinationGallery = [
  IDG1,
  IDG3,
  IDG2,
  IPD1,
  IPD2,
  IPD3,
  ISO1,
  ISO2,
  ISO3,
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

  ;(swiperFirstItems || []).forEach((swiper) => {
    swiper.style.marginLeft = `${offset}px`
  })
}

function price(price: number) {
  return price.toLocaleString('en-US', {
    style: 'currency',
    currency: 'THB',
  })
}
</script>

<style lang="postcss">
.card-gradient {
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.4) 73.46%
  );
}

.dg-swiper {
  .swiper-slide {
    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0);
      transition: background 0.3s;
    }

    &:not(.swiper-slide-active) {
      &:after {
        background: rgba(0, 0, 0, 0.5);
      }
    }
  }
}
</style>
