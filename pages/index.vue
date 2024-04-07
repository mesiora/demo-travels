<template>
  <div
    class="container py-20 text-center max-w-2xl h-[calc(100vh-144px)] flex justify-center flex-col"
  >
    <h1 class="text-5xl font-bold sm:text-7xl tracking-tight">
      Nuxt 3 Simple Starter
    </h1>

    <p class="mt-6 text-lg tracking-tight">
      {{ $t("quote") }}
    </p>

    <div class="text-center my-8">
      <NuxtLink :to="localePath({ name: 'posts' })">
        <button
          type="button"
          class="text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
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
