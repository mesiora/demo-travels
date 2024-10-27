<template>
  <form
    id="form-subscribe"
    class="z-50 mx-0 w-full rounded-2xl bg-white px-7 py-12 sm:mx-10 sm:w-[calc(100%-5rem)] lg:px-8 lg:py-16 2xl:mx-0 2xl:w-full"
    :class="{
      'top-hang absolute bottom-full left-0 translate-y-4': topHang,
    }"
  >
    <div
      class="flex flex-col items-center justify-start gap-4 lg:flex-row xl:gap-6"
    >
      <div class="hidden lg:block lg:w-2/12">
        <span
          class="block h-24 w-24 border border-dashed border-gray-300"
        ></span>
      </div>
      <div class="lg:w-10/12">
        <div class="flex flex-col gap-6 text-black md:flex-row">
          <div class="flex flex-col justify-between">
            <h4 class="text-3xl font-bold leading-tight lg:text-4xl">
              {{ $t('subscribe-newsletter') }}
            </h4>
          </div>
          <div class="flex-1">
            <h5 class="text-xl font-semibold text-gray-600">
              {{ $t('the-travel') }}
            </h5>
            <p class="text-gray-600">
              {{ $t('the-travel-subtitle') }}
            </p>
            <div class="mt-3 flex gap-4">
              <UInput
                type="email"
                :placeholder="$t('enter-your-email')"
                class="flex-1"
                size="md"
              />
              <UButton size="md" color="black">{{ $t('subscribe') }}</UButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script lang="ts" setup>
defineProps({
  topHang: Boolean,
})
</script>

<style lang="postcss"></style>
