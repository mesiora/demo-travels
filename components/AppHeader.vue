<template>
  <nav class="fixed top-0 left-0 bg-white z-50 h-20 w-full">
    <div class="container flex items-center h-full justify-between">
      <NuxtLink :to="localePath({ name: 'index' })">
        <img src="~/assets/images/logo-no-background.svg" alt="Logo" />
      </NuxtLink>

      <a
        href="https://github.com/medusiora/nuxt-starter-template"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>
    </div>
  </nav>
</template>

<script setup lang="ts">
const localePath = useLocalePath();
</script>

<style scoped></style>
