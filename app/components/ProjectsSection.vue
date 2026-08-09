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

function toggleCategory(category: 'dev' | 'design') {
  activeCategory.value = activeCategory.value === category ? null : category
}
</script>

<template>
  <div>
    <div role="group" aria-label="Filter projects by category" class="mb-8 flex flex-wrap gap-2">
      <button
        v-for="group in groups"
        :key="group.key"
        type="button"
        :aria-pressed="activeCategory === group.key"
        class="inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-teal"
        :class="
          activeCategory === group.key
            ? 'border-brand-teal bg-brand-teal text-white'
            : 'border-gray-300 text-gray-700 hover:border-brand-teal hover:text-brand-teal'
        "
        @click="toggleCategory(group.key)"
      >
        <Icon :name="group.meta.icon" class="h-3.5 w-3.5" />
        {{ group.meta.label }}
      </button>
    </div>

    <div v-for="group in groups" v-show="!activeCategory || activeCategory === group.key" :key="group.key" class="mb-12 last:mb-0">
      <h2 class="mb-6 text-xl font-semibold text-brand-teal">{{ group.meta.label }}</h2>
      <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <ProjectCard v-for="project in group.items" :key="project.id" :project="project" />
      </div>
    </div>
  </div>
</template>
