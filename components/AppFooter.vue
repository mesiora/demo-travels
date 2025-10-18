<template>
  <footer class="relative bg-black p-7 py-16 text-xs text-white">
    <UContainer class="container relative">
      <Subscribe top-hang class="gsap-fade-in" />
      <!-- <FormBooking bottom-hang /> -->
      <div
        class="flex flex-col items-center justify-between gap-4 pt-14 md:flex-row"
      >
        <a
          href="https://www.forwwward.solutions"
          target="_blank"
          rel="noopener noreferrer"
          class="order-3 md:order-1"
        >
          <div class="flex items-center gap-1">
            <span class="sr-only">forwwward.solutions</span>
            <UAvatar
              src="https://www.forwwward.solutions/apple-icon-60x60.png"
              alt="Avatar"
            />
            <span
              class="bg-black px-2 text-white dark:bg-white dark:text-black"
            >
              forwwward.solutions
            </span>
          </div>
        </a>

        <div class="order-2 md:order-3">
          <UButton
            color="white"
            size="xs"
            variant="link"
            icon="i-simple-icons-facebook"
            aria-label="Facebook"
          />
          <UButton
            color="white"
            size="xs"
            variant="link"
            icon="i-simple-icons-instagram"
            aria-label="Instagram"
          />
          <UButton
            color="white"
            size="xs"
            variant="link"
            icon="i-simple-icons-x"
            aria-label="Twitter"
          />
          <UButton
            color="white"
            size="xs"
            variant="link"
            icon="i-simple-icons-mailboxdotorg"
            aria-label="Email"
          />
        </div>
        <div
          class="order-2 flex flex-col items-center gap-3 sm:flex-row md:order-2 md:gap-5"
        >
          <NuxtLink to="/"> {{ $t('cookies-policy') }} </NuxtLink>
          <NuxtLink to="/"> {{ $t('terms') }} </NuxtLink>
          <NuxtLink to="/"> {{ $t('privacy-policy') }} </NuxtLink>
        </div>
      </div>
    </UContainer>
  </footer>
</template>
