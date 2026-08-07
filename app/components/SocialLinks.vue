<script setup lang="ts">
const { social } = useAppConfig()
</script>

<template>
  <section id="downloads" class="bg-white py-12">
    <div class="mx-auto flex max-w-6xl justify-center gap-8 px-6 sm:px-10">
      <a :href="social.github" title="GitHub of Petra" target="_blank" class="text-brand-teal transition hover:opacity-70">
        <Icon name="fa6-brands:github" class="h-8 w-8" />
      </a>
      <a :href="social.instagram" title="Instagram Petra" target="_blank" class="text-brand-teal transition hover:opacity-70">
        <Icon name="fa6-brands:instagram" class="h-8 w-8" />
      </a>
      <a :href="social.email" title="Write me" target="_blank" class="text-brand-teal transition hover:opacity-70">
        <Icon name="fa6-solid:envelope" class="h-8 w-8" />
      </a>
    </div>
  </section>
</template>
