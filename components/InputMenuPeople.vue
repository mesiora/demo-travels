<template>
  <UInputMenu
    v-model="selected"
    :options="people"
    value-attribute="value"
    option-attribute="label"
    v-bind="$attrs"
    aria-label="Select number of people"
    name="people"
  />
</template>

<script setup lang="ts">
const { t } = useI18n()
const people = new Array(100).fill(0).map((_, i) => ({
  value: i + 1,
  label: `${i + 1} ${t('people')}`,
}))

const selected = ref(people[0].value)
</script>
