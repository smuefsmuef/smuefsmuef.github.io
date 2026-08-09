export const categoryMeta = {
  pm: {
    label: 'PM & Leadership',
    icon: 'fa6-solid:users-gear',
    badgeClass: 'badge-pm',
  },
  dev: {
    label: 'Development',
    icon: 'fa6-solid:code',
    badgeClass: 'badge-dev',
  },
  design: {
    label: 'Design & UX',
    icon: 'fa6-solid:palette',
    badgeClass: 'badge-design',
  },
  writing: {
    label: 'Writing',
    icon: 'fa6-solid:pen-nib',
    badgeClass: 'badge-writing',
  },
} as const

export type ExperienceCategory = keyof typeof categoryMeta
