<script setup lang="ts">
import { categoryMeta } from '~/utils/categoryMeta'

const { data: projects } = await useAsyncData('projects', () => queryCollection('projects').order('id', 'ASC').all())

const activeCategory = ref<'dev' | 'design' | 'pm' | null>(null)

const availableCategories = computed(() => {
  const all = projects.value ?? []
  return (['dev', 'design', 'pm'] as const)
    .filter((key) => all.some((p) => p.category === key))
    .map((key) => ({ key, meta: categoryMeta[key] }))
})

const filteredProjects = computed(() => {
  const all = projects.value ?? []
  return activeCategory.value ? all.filter((p) => p.category === activeCategory.value) : all
})

function setCategory(category: 'dev' | 'design' | 'pm' | null) {
  activeCategory.value = category
}
</script>

<template>
  <div>
    <div role="group" aria-label="Filter projects by category" class="mb-10 flex flex-wrap items-center gap-2.5 text-sm text-[var(--color-ink-muted)]">
      <button type="button" class="underline-fade py-1" :aria-pressed="activeCategory === null" @click="setCategory(null)">All</button>
      <template v-for="category in availableCategories" :key="category.key">
        <span class="text-[var(--color-line-strong)]">·</span>
        <button type="button" class="underline-fade py-1" :aria-pressed="activeCategory === category.key" @click="setCategory(category.key)">
          {{ category.meta.label }}
        </button>
      </template>
    </div>

    <section class="relative py-2">
      <SectionGlow corner="tr" />
      <PetroglyphMotif variant="rings" />
      <PetroglyphMotif variant="ladder" />
      <PetroglyphMotif variant="dots-c" />
      <PetroglyphMotif variant="spiral-b" />

      <div class="relative z-10 mb-5 flex items-baseline gap-3.5">
        <p class="eyebrow whitespace-nowrap">Projects</p>
        <span class="rule-dashed" />
        <span class="whitespace-nowrap font-mono text-xs text-[var(--color-ink-muted)]">{{ String(filteredProjects.length).padStart(2, '0') }}</span>
      </div>

      <ul class="relative z-10 flex flex-col gap-1.5">
        <ProjectRow v-for="project in filteredProjects" :key="project.id" :project="project" />
      </ul>
    </section>
  </div>
</template>
