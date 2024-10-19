<template>
  <form
    id="form-subscribe"
    class="z-50 mx-10 w-full rounded-2xl bg-white px-8 py-16 xl:mx-0"
    :class="{
      'top-hang absolute bottom-full left-0 translate-y-4': topHang,
    }"
  >
    <div class="grid grid-cols-12 items-center gap-6">
      <div class="col-span-3">
        <span
          class="block h-24 w-24 border border-dashed border-gray-300"
        ></span>
      </div>
      <div class="col-span-9">
        <div class="flex gap-6 text-black">
          <div class="flex flex-col justify-between">
            <h4 class="text-4xl font-bold leading-tight">
              Subscribe <br />
              Newsletter
            </h4>
          </div>
          <div class="flex-1">
            <h5 class="text-xl font-semibold text-gray-600">The Travel</h5>
            <p class="text-gray-600">
              Get inspired! Receive our travel discounts, Tip behind the scene
              stories.
            </p>
            <div class="mt-2 flex gap-4">
              <UInput
                type="email"
                placeholder="Enter your email"
                class="flex-1"
                size="md"
              />
              <UButton size="md" color="black">Subscribe</UButton>
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
