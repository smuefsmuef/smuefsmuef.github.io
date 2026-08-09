<script setup lang="ts">
const { data: certifications } = await useAsyncData('certifications', () => queryCollection('certifications').order('id', 'ASC').all())
const { skills } = useAppConfig()
</script>

<template>
  <div class="grid gap-10 sm:grid-cols-2">
    <div>
      <p class="eyebrow mb-4">Certifications</p>
      <ul class="space-y-3">
        <li
          v-for="cert in certifications"
          :key="cert.id"
          class="flex items-baseline justify-between gap-4 border-b border-dashed border-[var(--color-line)] pb-3 last:border-none"
        >
          <div>
            <p class="text-sm font-semibold text-[var(--color-ink)]">{{ cert.title }}</p>
            <p class="text-xs text-[var(--color-ink-muted)]">{{ cert.issuer }}</p>
          </div>
          <span class="whitespace-nowrap font-mono text-xs text-[var(--color-ink-muted)]">{{ cert.date }}</span>
        </li>
      </ul>
    </div>

    <div>
      <p class="eyebrow mb-4">Skills &amp; Topics</p>
      <div class="flex flex-wrap gap-2">
        <span
          v-for="skill in skills"
          :key="skill"
          class="rounded-full bg-[var(--color-tag)] px-3 py-1 text-xs font-medium text-[var(--color-tag-ink)]"
        >
          {{ skill }}
        </span>
      </div>
    </div>
  </div>
</template>
