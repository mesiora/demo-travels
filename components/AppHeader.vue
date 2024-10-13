<template>
  <header class="fixed left-0 top-0 z-10 w-full text-sm">
    <UContainer class="container">
      <nav class="grid grid-cols-7 gap-4 p-7 text-white xl:px-0">
        <div class="col-span-3 flex items-center gap-8">
          <NuxtLink to="/" class="flex items-center gap-1">
            <svg-flag class="text-base" />
            Package
          </NuxtLink>
          <NuxtLink to="/" class="flex items-center gap-1">
            <svg-airplane class="text-base" />
            Find Flight
          </NuxtLink>
          <NuxtLink to="/" class="flex items-center gap-1">
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
          <svg-logo class="mx-auto !mb-0 text-[110px]" />
        </NuxtLink>

        <div class="col-span-3 flex items-center justify-end gap-8">
          <ColorMode />

          <LanguageSwitcher />

          <NuxtLink to="/" class="flex items-center gap-1"> Login </NuxtLink>

          <UButton
            variant="solid"
            class="font-semibold"
            color="white"
            size="lg"
          >
            Sign up
          </UButton>
        </div>
      </nav>
    </UContainer>
  </header>
</template>

<script lang="ts" setup>
const localeRoute = useLocaleRoute()
</script>
