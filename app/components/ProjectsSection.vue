<script setup lang="ts">
import { categoryMeta } from '~/utils/categoryMeta'

const { data: projects } = await useAsyncData('projects', () => queryCollection('projects').order('id', 'ASC').all())

const activeCategory = ref<'dev' | 'design' | null>(null)

const groups = computed(() => {
  const all = projects.value ?? []
  return (['dev', 'design'] as const)
    .map((key) => ({ key, meta: categoryMeta[key], items: all.filter((p) => p.category === key) }))
    .filter((group) => group.items.length > 0)
})

function setCategory(category: 'dev' | 'design' | null) {
  activeCategory.value = category
}
</script>

<template>
  <div>
    <div role="group" aria-label="Filter projects by category" class="mb-10 flex items-center gap-2.5 text-sm text-[var(--color-ink-muted)]">
      <button type="button" class="underline-fade py-1" :aria-pressed="activeCategory === null" @click="setCategory(null)">All</button>
      <template v-for="(group, index) in groups" :key="group.key">
        <span class="text-[var(--color-line-strong)]">·</span>
        <button type="button" class="underline-fade py-1" :aria-pressed="activeCategory === group.key" @click="setCategory(group.key)">
          {{ group.meta.label }}
        </button>
      </template>
    </div>

    <section
      v-for="group in groups"
      v-show="!activeCategory || activeCategory === group.key"
      :key="group.key"
      class="relative mb-14 py-2 last:mb-0"
    >
      <SectionGlow :corner="group.key === 'dev' ? 'tr' : 'bl'" />
      <PetroglyphMotif :variant="group.key === 'dev' ? 'rings' : 'chevron'" />
      <PetroglyphMotif :variant="group.key === 'dev' ? 'ladder' : 'river'" />
      <PetroglyphMotif :variant="group.key === 'dev' ? 'dots-c' : 'dots-b'" />
      <PetroglyphMotif :variant="group.key === 'dev' ? 'spiral-b' : 'dots-d'" />

      <div class="relative z-10 mb-5 flex items-baseline gap-3.5">
        <p class="eyebrow whitespace-nowrap">{{ group.meta.label }}</p>
        <span class="rule-dashed" />
        <span class="whitespace-nowrap font-mono text-xs text-[var(--color-ink-muted)]">{{ String(group.items.length).padStart(2, '0') }}</span>
      </div>

      <ul class="relative z-10 flex flex-col gap-1.5">
        <ProjectRow v-for="project in group.items" :key="project.id" :project="project" />
      </ul>
    </section>
  </div>
</template>
