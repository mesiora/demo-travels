<template>
  <nav class="fixed left-0 top-0 z-50 h-20 w-full bg-white">
    <div class="container flex h-full items-center">
      <NuxtLink :to="localePath({ name: 'index' })">
        <img src="~/assets/images/logo-no-background.svg" alt="Logo" />
      </NuxtLink>

      <div class="ml-auto flex items-center gap-4">
        <LanguageSwitcher />

        <a
          href="https://github.com/medusiora/nuxt-starter-template"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
const localePath = useLocalePath();
</script>
