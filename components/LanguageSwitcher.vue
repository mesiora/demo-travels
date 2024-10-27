<template>
  <div class="divide-x uppercase">
    <NuxtLink
      v-for="locale in i18n.availableLocales"
      :key="locale"
      :to="switchLocalePath(locale)"
      class="px-2"
      :title="locale"
    >
      {{ locale }}
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
const i18n = useI18n()
const switchLocalePath = useSwitchLocalePath()
</script>
