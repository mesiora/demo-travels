<template>
  <div class="divide-x uppercase">
    <NuxtLink
      v-for="locale in locales"
      :key="locale.code"
      :to="switchLocalePath(locale.code)"
      class="px-2"
      :title="locale.code"
    >
      {{ locale.code }}
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
const { locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()
</script>
