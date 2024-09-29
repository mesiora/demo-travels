<template>
  <UContainer>
    <nav class="flex items-center justify-between gap-4 py-8">
      <NuxtLink
        :to="
          localeRoute({
            name: 'index',
          })
        "
        aria-label="Home"
      >
        <Logo class="text-5xl" />
      </NuxtLink>

      <LanguageSwitcher class="ml-auto" />

      <ColorMode />
    </nav>
  </UContainer>
</template>

<script lang="ts" setup>
const localeRoute = useLocaleRoute()
</script>
