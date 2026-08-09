export const categoryMeta = {
  pm: {
    label: 'PM & Leadership',
    icon: 'fa6-solid:users-gear',
    badgeClass: 'bg-amber-100 text-amber-800',
  },
  dev: {
    label: 'Development',
    icon: 'fa6-solid:code',
    badgeClass: 'bg-teal-100 text-teal-900',
  },
  design: {
    label: 'Design & UX',
    icon: 'fa6-solid:palette',
    badgeClass: 'bg-purple-100 text-purple-800',
  },
} as const

export type ExperienceCategory = keyof typeof categoryMeta
