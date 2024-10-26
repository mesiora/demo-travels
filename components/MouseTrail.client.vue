<template>
  <div class="mouse-trail"></div>
</template>

<script lang="ts" setup>
const { $gsap } = useNuxtApp()
onMounted(() => {
  nextTick(() => {
    // Mouse Cursor Animation
    $gsap.set('.mouse-trail', { xPercent: -50, yPercent: -50 })

    const ball = document.querySelector('.mouse-trail')
    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
    const mouse = { x: pos.x, y: pos.y }
    const speed = 0.07

    const xSet = $gsap.quickSetter(ball, 'x', 'px')
    const ySet = $gsap.quickSetter(ball, 'y', 'px')

    window.addEventListener('mousemove', (e) => {
      mouse.x = e.x
      mouse.y = e.y
    })
    $gsap.ticker.add(() => {
      const dt = 1.0 - Math.pow(1.0 - speed, $gsap.ticker.deltaRatio())
      pos.x += (mouse.x - pos.x) * dt
      pos.y += (mouse.y - pos.y) * dt
      xSet(pos.x)
      ySet(pos.y)
    })
  })
})
</script>

<style>
.mouse-trail {
  width: 70px;
  height: 70px;
  position: fixed;
  top: 0;
  left: 0;
  border-radius: 50%;
  pointer-events: none;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.1);
  backdrop-filter: grayscale(1);
}
</style>
