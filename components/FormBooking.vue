<template>
  <form
    id="form-booking"
    class="mx-10 w-full rounded-2xl bg-white p-8 shadow-lg shadow-slate-100 xl:mx-0 dark:bg-gray-900 dark:text-white dark:shadow-none"
    :class="{
      'bottom-hang absolute top-full -translate-y-1/2': bottomHang,
    }"
  >
    <ui
      class="flex list-none divide-x divide-gray-200 font-semibold leading-8 dark:divide-gray-800"
    >
      <li>
        <NuxtLink
          to="javascript:void(0)"
          class="primary mx-4 flex items-center gap-1"
          :class="{ active: activeTab === 0 }"
          @click="activeTab = 0"
        >
          <svg-flag class="text-base" />
          Package
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          to="javascript:void(0)"
          class="primary mx-4 flex items-center gap-1"
          :class="{ active: activeTab === 1 }"
          @click="activeTab = 1"
        >
          <svg-airplane class="text-base" />
          Flights
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          to="javascript:void(0)"
          class="primary mx-4 flex items-center gap-1"
          :class="{ active: activeTab === 2 }"
          @click="activeTab = 2"
        >
          <svg-bed class="text-base" />
          Hotel
        </NuxtLink>
      </li>
    </ui>
  </form>
</template>

<script lang="ts" setup>
defineProps({
  bottomHang: Boolean,
})

const activeTab = ref(0)
</script>

<style lang="postcss">
section:has(#form-booking.bottom-hang) {
  + section {
    @apply pt-40;
  }
}
</style>
