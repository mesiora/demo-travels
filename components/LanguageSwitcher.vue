<template>
  <div class="divide-x text-xs uppercase">
    <NuxtLink
      v-for="locale in locales"
      :key="locale.code"
      :to="switchLocalePath(locale.code)"
      class="px-1"
    >
      {{ locale.code }}
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
const { locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()
</script>
