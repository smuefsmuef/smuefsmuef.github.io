<script setup lang="ts">
const { social } = useAppConfig()
</script>

<template>
  <div class="flex flex-wrap gap-x-8 gap-y-3">
    <a
      :href="social.linkedin"
      aria-label="LinkedIn profile"
      title="LinkedIn profile"
      target="_blank"
      class="underline-fade text-base font-medium text-[var(--color-ink-muted)] transition hover:text-brand-teal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-teal"
    >
      LinkedIn
    </a>
    <a
      :href="social.github"
      aria-label="GitHub profile"
      title="GitHub profile"
      target="_blank"
      class="underline-fade text-base font-medium text-[var(--color-ink-muted)] transition hover:text-brand-teal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-teal"
    >
      GitHub
    </a>
    <a
      :href="social.instagram"
      aria-label="Instagram profile"
      title="Instagram profile"
      target="_blank"
      class="underline-fade text-base font-medium text-[var(--color-ink-muted)] transition hover:text-brand-teal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-teal"
    >
      Instagram
    </a>
    <a
      :href="social.email"
      aria-label="Send an email"
      title="Send an email"
      target="_blank"
      class="underline-fade text-base font-medium text-[var(--color-ink-muted)] transition hover:text-brand-teal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-teal"
    >
      Email
    </a>
  </div>
</template>
