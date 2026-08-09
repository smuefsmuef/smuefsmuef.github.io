<script setup lang="ts">
const { social } = useAppConfig()
</script>

<template>
  <div class="bg-[var(--color-surface)] py-12">
    <div class="mx-auto flex max-w-6xl justify-center gap-8 px-6 sm:px-10">
      <a
        :href="social.github"
        aria-label="GitHub profile"
        title="GitHub profile"
        target="_blank"
        class="text-brand-teal transition hover:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-teal"
      >
        <Icon name="fa6-brands:github" class="h-8 w-8" />
      </a>
      <a
        :href="social.instagram"
        aria-label="Instagram profile"
        title="Instagram profile"
        target="_blank"
        class="text-brand-teal transition hover:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-teal"
      >
        <Icon name="fa6-brands:instagram" class="h-8 w-8" />
      </a>
      <a
        :href="social.email"
        aria-label="Send an email"
        title="Send an email"
        target="_blank"
        class="text-brand-teal transition hover:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-teal"
      >
        <Icon name="fa6-solid:envelope" class="h-8 w-8" />
      </a>
    </div>
  </div>
</template>
