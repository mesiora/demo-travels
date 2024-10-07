<template>
  <UPopover :popper="{ placement: 'bottom-start' }">
    <UButton v-bind="$attrs">
      {{ format(selected.start, 'd MMM, yyy') }} -
      {{ format(selected.end, 'd MMM, yyy') }}
    </UButton>

    <template #panel="{ close }">
      <div
        class="flex items-center divide-gray-200 sm:divide-x dark:divide-gray-800"
      >
        <div class="hidden flex-col py-4 sm:flex">
          <UButton
            v-for="(range, index) in ranges"
            :key="index"
            :label="range.label"
            color="gray"
            variant="ghost"
            class="rounded-none px-6"
            :class="[
              isRangeSelected(range.duration)
                ? 'bg-gray-100 dark:bg-gray-800'
                : 'hover:bg-gray-50 dark:hover:bg-gray-800/50',
            ]"
            truncate
            @click="selectRange(range.duration)"
          />
        </div>

        <VDatePicker v-model="selected" @close="close" />
      </div>
    </template>
  </UPopover>
</template>

<script setup lang="ts">
import { add, format, isSameDay, type Duration } from 'date-fns'

const ranges = [
  { label: 'Next 2 days', duration: { days: 7 } },
  { label: 'Next 7 days', duration: { days: 7 } },
  { label: 'Next 14 days', duration: { days: 14 } },
  { label: 'Next 30 days', duration: { days: 30 } },
  { label: 'Next 3 months', duration: { months: 3 } },
  { label: 'Next 6 months', duration: { months: 6 } },
  { label: 'Next year', duration: { years: 1 } },
]
const selected = ref({
  start: add(new Date(), { days: 1 }),
  end: add(new Date(), { days: 2 }),
})

function isRangeSelected(duration: Duration) {
  return (
    isSameDay(selected.value.start, add(new Date(), { days: 1 })) &&
    isSameDay(selected.value.start, add(new Date(), duration))
  )
}

function selectRange(duration: Duration) {
  selected.value = {
    start: add(new Date(), { days: 1 }),
    end: add(new Date(), duration),
  }
}
</script>
