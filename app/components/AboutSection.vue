<script setup lang="ts">
const { data: aboutItems } = await useAsyncData('about', () => queryCollection('about').order('id', 'ASC').all())
</script>

<template>
  <section id="about" class="bg-white py-16">
    <div class="mx-auto grid max-w-6xl gap-10 px-6 sm:grid-cols-2 sm:px-10 lg:grid-cols-4">
      <AboutCard v-for="item in aboutItems" :key="item.id" :item="item" />
    </div>
  </section>
</template>
