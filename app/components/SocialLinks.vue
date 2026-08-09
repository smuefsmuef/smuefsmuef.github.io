<script setup lang="ts">
const { social } = useAppConfig()

const links = [
  { label: 'LinkedIn', href: social.linkedin },
  { label: 'GitHub', href: social.github },
  { label: 'Email', href: social.email },
  { label: 'Instagram', href: social.instagram },
]
</script>

<template>
  <ul class="flex flex-col gap-1">
    <li v-for="link in links" :key="link.label">
      <a
        :href="link.href"
        :aria-label="link.label"
        :title="link.label"
        target="_blank"
        class="group -mx-2 flex items-center gap-4 rounded-lg px-2 py-2.5 text-base font-medium text-[var(--color-ink-muted)] transition hover:bg-[var(--color-brand-teal)]/[0.06] hover:text-brand-teal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-teal"
      >
        {{ link.label }}
        <span class="min-w-6 flex-1 border-b border-dashed border-[var(--color-line)] transition group-hover:border-[var(--color-line-strong)]" />
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true" class="h-4 w-4 flex-shrink-0 text-[var(--color-ink-muted)] transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand-teal">
          <path d="M7 17 17 7M9 7h8v8" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </a>
    </li>
  </ul>
</template>
