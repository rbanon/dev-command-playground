import { useI18n } from 'vue-i18n'
import type { Command } from '@/types/command'

export function useCommandDescription() {
  const { locale, t, te } = useI18n()
  return (cmd: Command): string =>
    te(`commands.${cmd.id}`, locale.value) ? t(`commands.${cmd.id}`) : cmd.description
}
