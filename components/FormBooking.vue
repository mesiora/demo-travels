<template>
  <form
    id="form-booking"
    class="z-50 mx-10 w-[calc(100%-5rem)] rounded-2xl bg-white p-8 shadow-lg shadow-slate-100 xl:mx-0 xl:w-full"
    :class="{
      'bottom-hang absolute left-0 top-full -translate-y-1/2': bottomHang,
    }"
  >
    <nav
      class="flex list-none divide-x divide-gray-200 font-semibold leading-8"
    >
      <div>
        <NuxtLink
          to="javascript:void(0)"
          class="primary ml-0 mr-3 flex items-center gap-1 sm:mr-4"
          :class="{ active: activeTab === 0 }"
          @click="activeTab = 0"
        >
          <svg-flag class="text-base" />
          Package
        </NuxtLink>
      </div>
      <div>
        <NuxtLink
          to="javascript:void(0)"
          class="primary mx-3 flex items-center gap-1 sm:mx-4"
          :class="{ active: activeTab === 1 }"
          @click="activeTab = 1"
        >
          <svg-airplane class="text-base" />
          Flights
        </NuxtLink>
      </div>
      <div>
        <NuxtLink
          to="javascript:void(0)"
          class="primary mx-3 flex items-center gap-1 sm:mx-4"
          :class="{ active: activeTab === 2 }"
          @click="activeTab = 2"
        >
          <svg-bed class="text-base" />
          Hotel
        </NuxtLink>
      </div>
    </nav>

    <div class="mt-6 grid grid-cols-2 gap-6 lg:grid-cols-3">
      <InputMenuLocation size="lg" class="col-span-2 lg:col-span-1" />

      <DateRangePicker
        size="lg"
        block
        color="white"
        class="col-span-2 md:col-span-1"
      />

      <div class="col-span-2 flex flex-col gap-6 sm:flex-row md:col-span-1">
        <InputMenuPeople size="lg" class="flex-1" />

        <UButton class="justify-center font-semibold" size="lg">
          SEARCH
        </UButton>
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
