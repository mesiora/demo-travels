<template>
  <div class="mouse-trail" ref="trail"></div>
</template>

<script lang="ts" setup>
const { $gsap } = useNuxtApp()
const trail = ref<HTMLElement | null>(null)
const isHovering = ref(false)

onMounted(() => {
  nextTick(() => {
    // Disable if touch device
    if ('ontouchstart' in window) return

    // Mouse Cursor Animation
    $gsap.set('.mouse-trail', {
      xPercent: -50,
      yPercent: -50,
    })

    const ball = trail.value
    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
    const mouse = { x: pos.x, y: pos.y }
    const speed = 0.07

    const xSet = $gsap.quickSetter(ball, 'x', 'px')
    const ySet = $gsap.quickSetter(ball, 'y', 'px')

    // Check for cursor:pointer elements
    const checkCursor = (e: MouseEvent) => {
      const element = document.elementFromPoint(e.clientX, e.clientY)
      if (element) {
        const computedStyle = window.getComputedStyle(element)
        const isPointer = computedStyle.cursor === 'pointer'

        if (isPointer && !isHovering.value) {
          isHovering.value = true
          $gsap.to(ball, {
            width: '20px',
            height: '20px',
            duration: 0.3,
            ease: 'power2.out',
          })
        } else if (!isPointer && isHovering.value) {
          isHovering.value = false
          $gsap.to(ball, {
            width: '70px',
            height: '70px',
            duration: 0.3,
            ease: 'power2.out',
          })
        }
      }
    }

    window.addEventListener('mousemove', (e) => {
      mouse.x = e.x
      mouse.y = e.y
      checkCursor(e)
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
  will-change: transform, width, height;
}
</style>
