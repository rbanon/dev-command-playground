<template>
  <header class="header">
    <div class="header__inner">
      <div class="header__brand">
        <h1 class="header__title">Dev Command <span class="header__accent">Playbook</span></h1>
        <p class="header__subtitle">{{ t('header.subtitle') }}</p>
      </div>

      <div class="header__controls">
        <div class="header__lang">
          <button :class="['lang-btn', { active: locale === 'es' }]" @click="setLocale('es')">ES</button>
          <span class="lang-sep">|</span>
          <button :class="['lang-btn', { active: locale === 'en' }]" @click="setLocale('en')">EN</button>
        </div>

        <button class="theme-btn" @click="toggleTheme" :title="t(`theme.${theme}`)">
          <Sun v-if="theme === 'dark'" :size="18" />
          <Moon v-else :size="18" />
        </button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { Sun, Moon } from 'lucide-vue-next'
import { useI18n } from 'vue-i18n'
import { useTheme } from '@/composables/useTheme'

const { t, locale } = useI18n()
const { theme, toggleTheme } = useTheme()

function setLocale(lang: 'en' | 'es') {
  locale.value = lang
  localStorage.setItem('locale', lang)
}
</script>

<style lang="scss" scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: var(--bg-secondary);
  border-bottom: 1px solid var(--border-color);
  backdrop-filter: blur(8px);
  flex-shrink: 0;

  &__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 52px;
    padding: 0 1.25rem;
  }

  &__brand {
    display: flex;
    flex-direction: column;
    gap: 1px;
  }

  &__title {
    font-family: var(--font-display);
    font-size: 1.1rem;
    font-weight: 600;
    color: var(--text-primary);
    letter-spacing: -0.01em;
    line-height: 1.2;
  }

  &__accent {
    color: var(--accent);
  }

  &__subtitle {
    font-size: var(--text-xs);
    color: var(--text-secondary);
    line-height: 1.2;
  }

  &__controls {
    display: flex;
    align-items: center;
    gap: 1.25rem;
  }

  &__lang {
    display: flex;
    align-items: center;
    gap: 0.2rem;
  }
}

.lang-sep {
  color: var(--border-color-2);
  font-size: var(--text-xs);
  user-select: none;
}

.lang-btn {
  background: none;
  border: none;
  color: var(--text-secondary);
  font-family: var(--font-body);
  font-size: 0.8rem;
  font-weight: 500;
  cursor: pointer;
  padding: 0.2rem 0.35rem;
  border-radius: var(--radius-sm);
  transition: color var(--transition);

  &.active {
    color: var(--accent);
    font-weight: 600;
  }

  &:hover:not(.active) {
    color: var(--text-primary);
  }
}

.theme-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: var(--radius-md);
  border: 1px solid var(--border-color);
  color: var(--text-secondary);
  transition: border-color var(--transition), color var(--transition);

  &:hover {
    border-color: var(--accent);
    color: var(--accent);
  }
}
</style>
