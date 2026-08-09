<script setup lang="ts">
const { data: aboutItems } = await useAsyncData('about', () => queryCollection('about').order('id', 'ASC').all())
</script>

<template>
  <div class="grid gap-10 sm:grid-cols-3">
    <AboutCard v-for="item in aboutItems" :key="item.id" :item="item" />
  </div>
</template>
