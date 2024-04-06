<template>
  <main class="relative mt-20">
    <AppHeader />
    <div class="relative min-h-[calc(100vh-144px)]">
      <slot></slot>
    </div>
    <AppFooter />
  </main>
</template>

<script setup lang="ts"></script>
