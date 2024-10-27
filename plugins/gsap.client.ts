import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default defineNuxtPlugin((nuxtApp) => {
  // Register ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger)

  // Default animation settings
  const defaultSettings = {
    y: 20,
    opacity: 0,
    duration: 1,
    ease: 'power2.out',
  }

  // Function to setup animations
  const setupScrollAnimations = () => {
    // Get all elements with the .gsap-fade-in class
    const elements = document.querySelectorAll('.gsap-fade-in')

    elements.forEach((element) => {
      // Set initial state
      gsap.set(element, {
        y: defaultSettings.y,
        opacity: defaultSettings.opacity,
      })

      // Create ScrollTrigger animation
      gsap.to(element, {
        y: 0,
        opacity: 1,
        duration: defaultSettings.duration,
        ease: defaultSettings.ease,
        scrollTrigger: {
          trigger: element,
          start: 'top 80%', // Trigger when element is 80% from the top of viewport
          // end: 'top 20%',
          toggleActions: 'play reverse play reverse', // play on enter, reverse on leave
          markers: import.meta.dev, // Show markers only in development
        },
      })
    })
  }

  // Setup on page ready
  if (import.meta.client) {
    nuxtApp.hook('app:mounted', () => {
      setupScrollAnimations()
    })

    // Rerun setup when route changes (for SPA navigation)
    nuxtApp.hook('page:finish', () => {
      setupScrollAnimations()
    })
  }
})
