<template>
  <div
    class="container flex h-[calc(100vh-144px)] max-w-2xl flex-col justify-center py-20 text-center"
  >
    <h1 class="text-5xl font-bold tracking-tight sm:text-7xl">
      Nuxt 3 Simple Starter
    </h1>

    <p class="mt-6 text-lg tracking-tight">
      {{ $t("quote") }}
    </p>

    <div class="my-8 text-center">
      <NuxtLink :to="localePath({ name: 'posts' })">
        <button
          type="button"
          class="rounded-lg bg-[#050708] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[#050708]/90 focus:outline-none focus:ring-4 focus:ring-[#050708]/50"
        >
          {{ $t("get-started") }}
        </button>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
const localePath = useLocalePath();
</script>
