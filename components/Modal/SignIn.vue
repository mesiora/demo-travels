<template>
  <UModal v-model="isModalVisible">
    <div class="flex justify-end p-2">
      <button
        class="ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900"
        @click="isModalVisible = false"
      >
        <svg
          class="h-5 w-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
    </div>
    <form class="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
      <h3 class="text-3xl font-bold text-gray-900">Sign In</h3>
      <div>
        <label for="email" class="mb-2 block text-sm font-medium text-gray-900"
          >Email</label
        >
        <input
          id="email"
          v-model="state.email"
          type="email"
          class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
          placeholder="name@company.com"
          required
        />
      </div>
      <div>
        <label
          for="password"
          class="mb-2 block text-sm font-medium text-gray-900"
          >Password</label
        >
        <input
          id="password"
          v-model="state.password"
          type="password"
          placeholder="••••••••"
          class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
          required
        />
      </div>
      <div class="flex justify-between">
        <label class="flex items-center text-sm font-medium text-gray-900">
          <input
            type="checkbox"
            class="h-4 w-4 rounded border border-gray-300 bg-gray-50"
          />
          <span class="ml-2">Remember me</span>
        </label>
        <a href="#" class="text-sm text-blue-700 hover:underline"
          >Lost Password?</a
        >
      </div>
      <button
        type="submit"
        class="bg-primary-500 hover:bg-primary-600 w-full rounded-lg px-5 py-2.5 text-center text-sm font-medium text-white transition duration-300 ease-in-out focus:ring-4 focus:ring-blue-300"
      >
        Sign In
      </button>
      <div class="text-sm font-medium text-gray-500">
        Not registered?
        <a
          href="#"
          class="text-blue-700 hover:underline"
          @click="switchModal('signUp')"
          >Create account</a
        >
      </div>
    </form>
  </UModal>
</template>

<script setup lang="ts">
const props = defineProps<{
  visible: boolean
}>()

const emit = defineEmits<{
  (e: 'update:visible', value: boolean): void
  (e: 'switchModal', value: string): void
}>()

const isModalVisible = useVModel(props, 'visible', emit)

const state = reactive({
  email: undefined,
  password: undefined,
})

const switchModal = (value: string) => {
  emit('switchModal', value)
}
</script>
