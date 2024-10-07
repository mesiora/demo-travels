<template>
  <div
    class="mb-14 grid grid-cols-12 items-center gap-6 rounded-[20px] bg-white px-14 py-12 text-black"
  >
    <div class="col-span-3"></div>
    <div class="col-span-9">
      <div class="flex gap-6">
        <div class="flex flex-col justify-between">
          <h4 class="text-4xl font-bold">Subscribe</h4>
          <h4 class="text-4xl font-bold">Newsletter</h4>
        </div>
        <div class="flex-1">
          <h6 class="text-xl font-semibold text-gray-500">The Travel</h6>
          <p class="text-gray-500">
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
</template>

<script lang="ts" setup></script>
