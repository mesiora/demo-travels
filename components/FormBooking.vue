<template>
  <form
    id="form-booking"
    class="z-50 mx-2 w-[calc(100%-1rem)] rounded-2xl bg-white p-7 shadow-lg shadow-slate-100 sm:mx-10 sm:w-[calc(100%-5rem)] xl:p-8 2xl:mx-0 2xl:w-full"
    :class="{
      'bottom-hang absolute left-0 top-full -translate-y-20 sm:-translate-y-1/2':
        bottomHang,
    }"
  >
    <ul class="flex list-none divide-x divide-gray-200 font-semibold leading-8">
      <li>
        <div
          class="link primary ml-0 mr-3 flex items-center gap-1 text-sm sm:mr-4 sm:text-base"
          :class="{ active: activeTab === 0 }"
          @click="activeTab = 0"
        >
          <svg-flag class="text-sm sm:text-base" />
          Package
        </div>
      </li>
      <li>
        <div
          class="link primary mx-3 flex items-center gap-1 text-sm sm:mx-4 sm:text-base"
          :class="{ active: activeTab === 1 }"
          @click="activeTab = 1"
        >
          <svg-airplane class="text-sm sm:text-base" />
          Flights
        </div>
      </li>
      <li>
        <div
          class="link primary mx-3 flex items-center gap-1 text-sm sm:mx-4 sm:text-base"
          :class="{ active: activeTab === 2 }"
          @click="activeTab = 2"
        >
          <svg-bed class="text-sm sm:text-base" />
          Hotel
        </div>
      </li>
    </ul>

    <div class="mt-6 grid grid-cols-2 gap-3 lg:grid-cols-3 xl:gap-6">
      <InputMenuLocation
        :size="btnSize"
        class="col-span-2 lg:col-span-1"
        id="location"
        name="location"
      />

      <DateRangePicker
        :size="btnSize"
        block
        color="white"
        class="col-span-2 md:col-span-1"
        id="date"
        name="date"
      />

      <div
        class="col-span-2 flex flex-col gap-3 sm:flex-row md:col-span-1 xl:gap-6"
      >
        <InputMenuPeople
          :size="btnSize"
          class="flex-1"
          id="people"
          name="people"
        />

        <UButton
          class="justify-center font-semibold"
          :size="btnSize"
          aria-label="Search"
        >
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

const { width: wWidth } = useWindowSize()

const btnSize = computed(() => (wWidth.value < 640 ? 'md' : 'lg'))

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
    @apply pt-[18rem] sm:pt-40;
  }
}
</style>
