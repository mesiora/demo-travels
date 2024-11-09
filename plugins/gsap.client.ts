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

  const killScrollAnimations = () => {
    ScrollTrigger.getAll().forEach((trigger) => {
      trigger.kill()
    })
  }

  // Function to setup animations
  const setupScrollAnimations = () => {
    // Kill all existing ScrollTrigger animations
    killScrollAnimations()

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
          start: 'top 80%',
          // end: 'top 20%',
          toggleActions: 'play reverse play reverse',
          markers: import.meta.dev,
        },
      })
    })
  }

  if (import.meta.client) {
    nuxtApp.hook('page:finish', () => {
      // Wait for the elements to be created
      setTimeout(() => {
        const urlParams = new URLSearchParams(window.location.search)
        if (urlParams.has('disable-scroll-animation')) {
          return
        }

        setupScrollAnimations()
      }, 100)
    })
  }
})
