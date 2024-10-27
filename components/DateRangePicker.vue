<template>
  <UPopover :popper="{ placement: 'bottom-start' }">
    <UButton v-bind="$attrs" aria-label="Select date range">
      {{ format(selected.start, 'd MMM, yyy') }} -
      {{ format(selected.end, 'd MMM, yyy') }}
    </UButton>

    <template #panel="{ close }">
      <div class="flex items-center divide-gray-200 sm:divide-x">
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
                ? 'bg-gray-100'
                : 'hover:bg-gray-50',
            ]"
            truncate
            aria-label="Select date"
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

const { t } = useI18n()

const ranges = [
  { label: t('next-2-days'), duration: { days: 2 } },
  { label: t('next-7-days'), duration: { days: 7 } },
  { label: t('next-14-days'), duration: { days: 14 } },
  { label: t('next-30-days'), duration: { days: 30 } },
  { label: t('next-3-months'), duration: { months: 3 } },
  { label: t('next-6-months'), duration: { months: 6 } },
  { label: t('next-year'), duration: { years: 1 } },
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
