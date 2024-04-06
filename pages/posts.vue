<template>
  <div class="container py-20">
    <h1 class="text-5xl font-bold sm:text-7xl tracking-tight">Resources</h1>

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
      class="my-8 p-4 text-[#050708] bg-[#f0f0f0] rounded-lg w-full text-sm whitespace-pre"
    >
      <div v-if="pending">Loading ...</div>

      <code v-else class="overflow-x-auto max-h-[50vh] block">
        {{ collection }}
      </code>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: "Demo",
  description: "Nuxt 3 frontend template for third-party API integrations",
});

const postStore = usePostStore();
const filters = ref({
  orSearch_search: undefined,
  page: 1,
  itemsPerPage: 10,
});

const {
  data: collection,
  pending,
  error,
} = await useLazyAsyncData(
  "api.posts",
  () => postStore.collection(filters.value),
  {
    watch: [filters],
  },
);

watch(error, (e) => {
  // TODO: Handle error or display a toast
  if (!e) return;

  console.error(e);
  alert(e.message);
});
</script>

<style lang="scss" scoped></style>
