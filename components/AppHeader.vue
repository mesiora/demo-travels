<template>
  <header class="fixed left-0 top-0 z-[100] w-screen text-sm">
    <UContainer class="container">
      <nav class="grid grid-cols-7 gap-4 px-4 py-7 text-white sm:px-7 xl:px-0">
        <div class="col-span-3 hidden items-center gap-8 lg:flex">
          <NuxtLink
            to="#form-booking"
            class="flex items-center gap-1"
            @click="scrollToForm(0)"
          >
            <svg-flag class="text-base" />
            {{ $t('package') }}
          </NuxtLink>
          <NuxtLink
            to="#form-booking"
            class="flex items-center gap-1"
            @click="scrollToForm(1)"
          >
            <svg-airplane class="text-base" />
            {{ $t('flights') }}
          </NuxtLink>
          <NuxtLink
            to="#form-booking"
            class="flex items-center gap-1"
            @click="scrollToForm(2)"
          >
            <svg-bed class="text-base" />
            {{ $t('hotel') }}
          </NuxtLink>
        </div>

        <NuxtLink
          :to="
            localeRoute({
              name: 'index',
            })
          "
          aria-label="Home"
          class="text-center lg:col-span-1"
        >
          <svg-logo-sm
            class="logo mx-auto !mb-0 block text-[110px] sm:hidden"
          />
          <svg-logo class="logo mx-auto !mb-0 hidden text-[110px] sm:block" />
        </NuxtLink>

        <div
          class="col-span-6 flex items-center justify-end gap-2 sm:gap-8 lg:col-span-3"
        >
          <!-- <ColorMode /> -->

          <LanguageSwitcher />

          <NuxtLink to="/" class="hidden items-center gap-1 sm:inline-block">
            {{ $t('login') }}
          </NuxtLink>

          <UButton
            variant="solid"
            class="hidden font-semibold sm:inline-block"
            color="white"
            size="lg"
          >
            {{ $t('sign-up') }}
          </UButton>

          <!-- Tools for small screen -->
          <UDropdown
            class="inline-block sm:hidden"
            :items="menus"
            :ui="{ item: { disabled: 'cursor-text select-text' } }"
            :popper="{ placement: 'bottom-start' }"
          >
            <UButton
              color="white"
              variant="link"
              icon="i-heroicons-bars-3-bottom-left-16-solid"
            />

            <template #account="{ item }">
              <div class="text-left">
                <p class="font-semibold text-black">{{ item.label }}</p>
                <p class="text-xs text-gray-400 dark:text-gray-500">
                  {{ $t('how-can-we-help-you-today') }}
                </p>
              </div>
            </template>

            <template #item="{ item }">
              <span class="truncate">{{ item.label }}</span>

              <UIcon
                :name="item.icon"
                class="ms-auto h-4 w-4 flex-shrink-0 text-gray-400 dark:text-gray-500"
              />
            </template>
          </UDropdown>
        </div>
      </nav>
    </UContainer>
  </header>
</template>

<script lang="ts" setup>
const localeRoute = useLocaleRoute()
const router = useRouter()
const { t } = useI18n()
const menus = [
  [
    {
      label: 'MY SITE',
      slot: 'account',
      disabled: true,
    },
  ],
  [
    {
      label: t('login'),
      icon: 'i-heroicons-arrow-left-on-rectangle',
    },
    {
      label: t('sign-up'),
      icon: 'i-heroicons-rectangle-group',
    },
  ],
]

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
