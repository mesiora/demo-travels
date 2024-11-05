<template>
  <!-- Main modal -->
  <div
    class="fixed inset-0 z-50 flex h-screen items-center justify-center bg-black bg-opacity-50"
  >
    <div
      class="relative w-full max-w-md rounded-lg bg-white p-4 shadow-lg dark:bg-gray-700"
    >
      <div class="flex justify-end p-2">
        <button
          class="ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-white"
          @click="closePopup"
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
      <form
        class="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8"
        @submit.prevent="submitLogin"
      >
        <h3 class="text-xl font-medium text-gray-900 dark:text-white">
          Sign in to our platform
        </h3>
        <div>
          <label
            for="email"
            class="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
            >Email</label
          >
          <input
            id="email"
            v-model="email"
            type="email"
            class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-blue-500 focus:ring-blue-500 sm:text-sm dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"
            placeholder="name@company.com"
            required
          />
        </div>
        <div>
          <label
            for="password"
            class="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
            >Password</label
          >
          <input
            id="password"
            v-model="password"
            type="password"
            placeholder="••••••••"
            class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-blue-500 focus:ring-blue-500 sm:text-sm dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"
            required
          />
        </div>
        <div class="flex justify-between">
          <label
            class="flex items-center text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            <input
              v-model="rememberMe"
              type="checkbox"
              class="h-4 w-4 rounded border border-gray-300 bg-gray-50 dark:border-gray-500 dark:bg-gray-600"
            />
            <span class="ml-2">Remember me</span>
          </label>
          <a
            href="#"
            class="text-sm text-blue-700 hover:underline dark:text-blue-500"
            >Lost Password?</a
          >
        </div>
        <button
          type="submit"
          class="bg-primary-500 hover:bg-primary-600 w-full rounded-lg px-5 py-2.5 text-center text-sm font-medium text-white transition duration-300 ease-in-out focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Login to your account
        </button>
        <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
          Not registered?
          <a href="#" class="text-blue-700 hover:underline dark:text-blue-500"
            >Create account</a
          >
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const show = ref(true) // Control popup visibility
const email = ref('')
const password = ref('')
const emit = defineEmits(['close'])

const closePopup = () => {
  show.value = false
  emit('close')
}

const submitLogin = () => {
  // Handle login logic
  console.log('Email:', email.value)
  console.log('Password:', password.value)

  closePopup()
}
</script>

<style scoped>
.input-style {
  border-width: 2px;
  border-style: solid;
  border-color: #4caf50; /* Main green color */
  border-radius: 0.375rem;
  background-color: #f9f9f9;
  outline: none;
  padding: 0.5rem;
  width: 100%;
}
</style>
