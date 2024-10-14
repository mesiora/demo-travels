<template>
  <form
    id="form-booking"
    class="z-50 mx-10 w-full rounded-2xl bg-white p-8 shadow-lg shadow-slate-100 xl:mx-0"
    :class="{
      'bottom-hang absolute top-full -translate-y-1/2': bottomHang,
    }"
  >
    <ui class="flex list-none divide-x divide-gray-200 font-semibold leading-8">
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

    <div class="mt-6 grid grid-cols-3 gap-6">
      <InputMenuLocation size="lg" />

      <DateRangePicker size="lg" block color="white" class="" />

      <div class="flex gap-6">
        <InputMenuPeople size="lg" class="flex-1" />

        <UButton class="font-semibold" size="lg"> SEARCH </UButton>
      </div>
    </div>
  </form>
</template>

<script lang="ts" setup>
defineProps({
  bottomHang: Boolean,
})

const route = useRoute()

const activeTab = ref(0)

watch(
  () => route.query.form,
  (newValue) => {
    if (newValue) {
      activeTab.value = Number(newValue)
    }
  },
)
</script>

<style lang="postcss">
section:has(#form-booking.bottom-hang) {
  + section {
    @apply pt-40;
  }
}
</style>
