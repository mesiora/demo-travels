<template>
  <UPopover :popper="{ placement: 'bottom-start' }">
    <UButton
      icon="i-heroicons-calendar-days-20-solid"
      :label="format(date, 'd MMM, yyy')"
    />

    <template #panel="{ close }">
      <VDatePicker v-model="date" is-required @close="close" />
    </template>
  </UPopover>
</template>

<script setup lang="ts">
import { format } from 'date-fns'

const date = ref(new Date())
</script>
