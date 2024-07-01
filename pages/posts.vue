<template>
  <div class="container py-20">
    <h1 class="text-5xl font-bold tracking-tight sm:text-7xl">Resources</h1>

    <sub>
      API powered by
      <a
        href="https://jsonplaceholder.typicode.com/"
        target="_blank"
        rel="noopener noreferrer"
        >{JSON} Placeholder</a
      >
    </sub>

    <section
      class="my-8 w-full whitespace-pre rounded-lg bg-[#f0f0f0] p-4 text-sm text-[#050708]"
    >
      <div v-if="pending">Loading ...</div>

      <code v-else class="block max-h-[50vh] overflow-x-auto">
        {{ collection }}
      </code>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Demo',
})

const postStore = usePostStore()
const filters = ref({
  orSearch_search: undefined,
  page: 1,
  itemsPerPage: 10,
})

const {
  data: collection,
  pending,
  error,
} = await useLazyAsyncData(
  'api.posts',
  () => postStore.collection(filters.value),
  {
    watch: [filters],
  },
)

watch(error, (e) => {
  // TODO: Handle error or display a toast
  if (!e) return
  alert(e.message)
})
</script>
