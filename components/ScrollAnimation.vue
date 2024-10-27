<template>
  <div ref="elementRef" class="gsap-fade-in">
    <slot></slot>
  </div>
</template>

<script setup>
const { $gsap } = useNuxtApp()

const elementRef = ref(null)
let observer = null
let animation = null

// Props for customization
const props = defineProps({
  duration: {
    type: Number,
    default: 1,
  },
  y: {
    type: Number,
    default: 30,
  },
  opacity: {
    type: Number,
    default: 0,
  },
})

// Create GSAP animation
const createAnimation = () => {
  if (!elementRef.value) return

  // Initial state
  $gsap.set(elementRef.value, {
    y: props.y,
    opacity: props.opacity,
  })

  // Create animation timeline
  animation = $gsap.timeline({ paused: true }).to(elementRef.value, {
    y: 0,
    opacity: 1,
    duration: props.duration,
    ease: 'power2.out',
  })
}

// Handle intersection observer callbacks
const handleIntersect = (entries) => {
  entries.forEach((entry) => {
    if (!animation) return

    if (entry.isIntersecting) {
      // Play forward when element enters viewport
      animation.play()
    } else {
      // Reverse when element leaves viewport
      animation.reverse()
    }
  })
}

// Setup intersection observer
onMounted(() => {
  if (!elementRef.value) return

  createAnimation()

  observer = new IntersectionObserver(handleIntersect, {
    threshold: 0.2, // Trigger when 20% of element is visible
    rootMargin: '0px',
  })

  observer.observe(elementRef.value)
})

// Cleanup
onUnmounted(() => {
  if (observer) {
    observer.disconnect()
  }
  if (animation) {
    animation.kill()
  }
})
</script>

<style scoped>
.gsap-fade-in {
  will-change: transform, opacity;
}
</style>
