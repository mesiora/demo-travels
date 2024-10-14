<template>
  <header class="fixed left-0 top-0 z-[100] w-full text-sm">
    <UContainer class="container">
      <nav class="grid grid-cols-7 gap-4 p-7 text-white xl:px-0">
        <div class="col-span-3 flex items-center gap-8">
          <NuxtLink
            to="#form-booking"
            class="flex items-center gap-1"
            @click="scrollToForm(0)"
          >
            <svg-flag class="text-base" />
            Package
          </NuxtLink>
          <NuxtLink
            to="#form-booking"
            class="flex items-center gap-1"
            @click="scrollToForm(1)"
          >
            <svg-airplane class="text-base" />
            Find Flight
          </NuxtLink>
          <NuxtLink
            to="#form-booking"
            class="flex items-center gap-1"
            @click="scrollToForm(2)"
          >
            <svg-bed class="text-base" />
            Find Hotel
          </NuxtLink>
        </div>

        <NuxtLink
          :to="
            localeRoute({
              name: 'index',
            })
          "
          aria-label="Home"
          class="col-span-1 text-center"
        >
          <svg-logo class="logo mx-auto !mb-0 text-[110px]" />
        </NuxtLink>

        <div class="col-span-3 flex items-center justify-end gap-8">
          <!-- <ColorMode /> -->

          <LanguageSwitcher />

          <NuxtLink to="/" class="flex items-center gap-1"> Login </NuxtLink>

          <UButton
            variant="solid"
            class="font-semibold transition-colors hover:bg-sorbus-500 hover:text-white"
            color="white"
            size="lg"
          >
            Sign Up
          </UButton>
        </div>
      </nav>
    </UContainer>
  </header>
</template>

<script lang="ts" setup>
const localeRoute = useLocaleRoute()
const router = useRouter()

function setHeaderOverlay() {
  const header = document.querySelector('header')
  if (header) {
    if (window.scrollY > 0) {
      header.classList.add('overlay')
    } else {
      header.classList.remove('overlay')
    }
  }
}

onMounted(() => {
  nextTick(() => {
    setHeaderOverlay()
    window.addEventListener('scroll', setHeaderOverlay)
  })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', setHeaderOverlay)
})

function scrollToForm(index: number) {
  const formBooking = document.getElementById('form-booking')
  if (formBooking) {
    window.scrollTo({
      top: formBooking.offsetTop - 150,
      behavior: 'smooth',
    })
    router.replace({ query: { form: index } })
  }
}
</script>

<style lang="postcss">
header {
  &,
  nav,
  nav .logo {
    @apply transition-all duration-300;
  }

  &.overlay {
    @apply bg-black/30 duration-100;
    backdrop-filter: blur(10px);

    nav {
      @apply py-0;

      .logo {
        @apply !h-20;
      }
    }
  }
}
</style>
