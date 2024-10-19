<template>
  <UInputMenu
    v-model="selected"
    :search="search"
    :loading="loading"
    placeholder="Search for a location in Japan..."
    option-attribute="display_name"
    trailing
    by="osm_id"
    v-bind="$attrs"
    aria-label="Search for a location in Japan"
    name="location"
  >
    <template #empty> Type something to search... </template>
  </UInputMenu>
</template>

<script setup lang="ts">
const loading = ref(false)
const selected = ref()

async function search(q: string) {
  if (!q) return [] // Return empty if query is empty

  loading.value = true

  try {
    const response: any = await $fetch(
      `https://nominatim.openstreetmap.org/search`,
      {
        params: {
          q: `${q}, Japan`, // Append 'Japan' to the query
          format: 'json',
          limit: 10, // Limit number of results
        },
      },
    )

    // Map response to the expected structure
    return response.map((location: any) => ({
      osm_id: location.osm_id, // May not be available for all results
      display_name: location.display_name,
    }))
  } catch (error) {
    console.error('Error fetching data:', error)
    return []
  } finally {
    loading.value = false
  }
}
</script>
