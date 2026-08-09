export type ThemePreference = 'light' | 'dark'

export function useTheme() {
  const theme = useState<ThemePreference | null>('theme', () => null)

  function readCurrent(): ThemePreference {
    if (typeof document === 'undefined') return 'light'
    const explicit = document.documentElement.getAttribute('data-theme')
    if (explicit === 'light' || explicit === 'dark') return explicit
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }

  function apply(value: ThemePreference) {
    theme.value = value
    document.documentElement.setAttribute('data-theme', value)
    localStorage.setItem('theme', value)
  }

  function toggle() {
    if (typeof document === 'undefined') return
    apply(readCurrent() === 'dark' ? 'light' : 'dark')
  }

  onMounted(() => {
    theme.value = readCurrent()
  })

  return { theme, toggle }
}
