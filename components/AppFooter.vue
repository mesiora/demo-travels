<template>
  <footer class="relative bg-black p-7 py-16 text-xs text-white">
    <UContainer class="container relative">
      <Subscribe top-hang />
      <!-- <FormBooking bottom-hang /> -->
      <div
        class="flex flex-col items-center justify-between gap-4 pt-14 md:flex-row"
      >
        <div class="order-3 md:order-1">
          © 2021
          <NuxtLink to="https://github.com/medusiora" target="_blank">
            Medusiora
          </NuxtLink>
        </div>
        <div class="order-2 md:order-3">
          <UButton
            color="white"
            size="xs"
            variant="link"
            icon="i-simple-icons-facebook"
          />
          <UButton
            color="white"
            size="xs"
            variant="link"
            icon="i-simple-icons-instagram"
          />
          <UButton
            color="white"
            size="xs"
            variant="link"
            icon="i-simple-icons-x"
          />
          <UButton
            color="white"
            size="xs"
            variant="link"
            icon="i-simple-icons-mailboxdotorg"
          />
        </div>
        <div
          class="order-2 flex flex-col items-center gap-3 sm:flex-row md:order-2 md:gap-5"
        >
          <NuxtLink to="/"> Cookies Policy </NuxtLink>
          <NuxtLink to="/"> Terms </NuxtLink>
          <NuxtLink to="/"> Privacy Policy </NuxtLink>
        </div>
      </div>
    </UContainer>
  </footer>
</template>

<style lang="postcss"></style>
