<template>
  <div class="container py-20">
    {{ collection }}
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
  pending: loading,
  error,
  refresh,
} = await useLazyAsyncData(
  "/api/posts",
  () => postStore.collection(filters.value),
  {
    watch: [filters],
  },
);
</script>

<style lang="scss" scoped></style>
