<template>
  <div class="mouse-trail" ref="trail">
    <div class="mouse-trail-inner"></div>
  </div>
</template>

<script lang="ts" setup>
interface Position {
  x: number
  y: number
}

interface TrailConfig {
  normalSize: number
  hoverSize: number
  speed: number
  initialDelay: number
}

// Configuration
const config: TrailConfig = {
  normalSize: 70,
  hoverSize: 20,
  speed: 0.07,
  initialDelay: 0.5,
}

// Refs and state
const { $gsap } = useNuxtApp()
const trail = ref<HTMLElement | null>(null)
const isHovering = ref(false)
const isVisible = ref(false)
const mousePosition = reactive<Position>({ x: 0, y: 0 })
const trailPosition = reactive<Position>({ x: 0, y: 0 })

// Mouse movement handler with debounce
const updateMousePosition = (e: MouseEvent) => {
  mousePosition.x = e.x
  mousePosition.y = e.y
  checkCursor(e)
}

// Cursor style checker
const checkCursor = (e: MouseEvent) => {
  if (!trail.value) return

  const element = document.elementFromPoint(e.clientX, e.clientY)
  if (!element) return

  const computedStyle = window.getComputedStyle(element)
  const isPointer = computedStyle.cursor === 'pointer'
  const isClickable =
    element.tagName === 'BUTTON' ||
    element.tagName === 'A' ||
    element.hasAttribute('role') ||
    isPointer

  if (isClickable !== isHovering.value) {
    isHovering.value = isClickable
    animateTrailSize(isClickable)
  }
}

// Trail size animation
const animateTrailSize = (isHover: boolean) => {
  if (!trail.value) return

  const size = isHover ? config.hoverSize : config.normalSize
  $gsap.to(trail.value, {
    width: `${size}px`,
    height: `${size}px`,
    duration: 0.3,
    ease: 'power2.out',
  })
}

// Initialize trail animation
const initTrailAnimation = () => {
  if (!trail.value) return

  // Set initial position
  $gsap.set(trail.value, {
    xPercent: -50,
    yPercent: -50,
    scale: 0,
    autoAlpha: 0,
  })

  // Fade in animation
  $gsap.to(trail.value, {
    scale: 1,
    autoAlpha: 1,
    duration: 0.6,
    delay: config.initialDelay,
    ease: 'power2.out',
  })

  // Create animation ticker
  $gsap.ticker.add(() => {
    const dt = 1.0 - Math.pow(1.0 - config.speed, $gsap.ticker.deltaRatio())
    trailPosition.x += (mousePosition.x - trailPosition.x) * dt
    trailPosition.y += (mousePosition.y - trailPosition.y) * dt

    if (trail.value) {
      $gsap.set(trail.value, {
        x: trailPosition.x,
        y: trailPosition.y,
      })
    }
  })
}

// Cleanup function
const cleanup = () => {
  $gsap.ticker.remove(initTrailAnimation)
  window.removeEventListener('mousemove', updateMousePosition)
}

// Lifecycle hooks
onMounted(() => {
  nextTick(() => {
    // Initialize mouse position
    trailPosition.x = window.innerWidth / 2
    trailPosition.y = window.innerHeight / 2
    mousePosition.x = trailPosition.x
    mousePosition.y = trailPosition.y

    // Add event listeners
    window.addEventListener('mousemove', updateMousePosition, { passive: true })

    // Initialize animation
    initTrailAnimation()
  })
})

onUnmounted(() => {
  cleanup()
})

// Handle visibility changes
const visibility = useDocumentVisibility()

watch(visibility, (value) => {
  if (value === 'hidden') {
    cleanup()
  } else {
    initTrailAnimation()
    window.addEventListener('mousemove', updateMousePosition, { passive: true })
  }
})
</script>

<style scoped>
.mouse-trail {
  width: v-bind('`${config.normalSize}px`');
  height: v-bind('`${config.normalSize}px`');
  position: fixed;
  top: 0;
  left: 0;
  border-radius: 50%;
  pointer-events: none;
  z-index: 1000;
  mix-blend-mode: difference;
  will-change: transform, width, height;
}

.mouse-trail-inner {
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.8);
  border-radius: inherit;
  transform: scale(0.9);
  transition: transform 0.2s ease-out;
}

.mouse-trail:hover .mouse-trail-inner {
  transform: scale(1);
}

@media (prefers-reduced-motion: reduce) {
  .mouse-trail {
    display: none;
  }
}
</style>
