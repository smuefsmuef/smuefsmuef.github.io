<script setup lang="ts">
defineProps<{
  item: {
    icon: string
    title: string
    text: string
  }
}>()
</script>

<template>
  <div class="text-center">
    <Icon :name="`fa6-solid:${item.icon}`" class="h-10 w-10 text-brand-teal" />
    <h3 class="mt-4 text-lg font-semibold text-brand-teal">{{ item.title }}</h3>
    <p class="mt-2 text-sm text-gray-600">{{ item.text }}</p>
  </div>
</template>
