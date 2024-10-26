<template>
  <div class="relative my-3 flex gap-3 pl-[62%] text-3xl text-sorbus-700">
    <span
      :class="{
        'cursor-not-allowed opacity-50': isBeginning,
        'cursor-pointer': !isBeginning,
      }"
      @click="goPrev"
    >
      <svg-arrow-left />
    </span>
    <span
      :class="{
        'cursor-not-allowed opacity-50': isEnd,
        'cursor-pointer': !isEnd,
      }"
      @click="goNext"
    >
      <svg-arrow-right />
    </span>
  </div>
</template>

<script setup lang="ts">
const swiper = useSwiper()
const isBeginning = ref(false)
const isEnd = ref(false)

const goPrev = () => {
  swiper.value.slidePrev()
}

const goNext = () => {
  swiper.value.slideNext()
}

watch(
  () => swiper.value.activeIndex,
  (newIndex) => {
    isBeginning.value = newIndex === 0
    isEnd.value = swiper.value.isEnd
  },
  {
    immediate: true,
  },
)

watch(
  () => swiper.value.isEnd,
  (newIsEnd) => {
    isEnd.value = newIsEnd
  },
  {
    immediate: true,
  },
)

// function updateSwiper() {
//   swiper.value.update()
// }

// // on window resize, update the swiper
// onMounted(() => {
//   nextTick(() => {
//     window.addEventListener('resize', updateSwiper)
//   })
// })

// onUnmounted(() => {
//   window.removeEventListener('resize', updateSwiper)
// })
</script>
