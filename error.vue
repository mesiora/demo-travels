<template>
  <div>
    <h2>{{ props.error?.statusCode }}</h2>
    <button @click="handleError">Clear errors</button>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  error: {
    statusCode: number;
    statusMessage: string;
    message?: string;
    stack?: string;
    data?: any;
  };
}>();

const handleError = () => clearError({ redirect: "/" });
</script>
