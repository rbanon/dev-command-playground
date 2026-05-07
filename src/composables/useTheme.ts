import { ref, onMounted, watch } from 'vue'

type Theme = 'dark' | 'light'

const theme = ref<Theme>('dark')

function applyTheme(t: Theme) {
  if (t === 'light') {
    document.documentElement.classList.add('theme-light')
  } else {
    document.documentElement.classList.remove('theme-light')
  }
}

export function useTheme() {
  onMounted(() => {
    const saved = localStorage.getItem('theme') as Theme | null
    if (saved) {
      theme.value = saved
    } else {
      theme.value = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
      window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) {
          theme.value = e.matches ? 'light' : 'dark'
        }
      })
    }
    applyTheme(theme.value)
  })

  watch(theme, (t) => {
    applyTheme(t)
    localStorage.setItem('theme', t)
  })

  function toggleTheme() {
    theme.value = theme.value === 'dark' ? 'light' : 'dark'
  }

  return { theme, toggleTheme }
}
