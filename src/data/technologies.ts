import type { Technology } from '@/types/technology'

export const technologies: Technology[] = [
  { id: 'git',     slug: 'git',     name: 'Git',        short_description: 'Control de versiones distribuido',                        icon: '🌿', sort_order: 10, is_visible: true },
  { id: 'github',  slug: 'github',  name: 'GitHub CLI', short_description: 'CLI oficial para repos, PRs, issues y workflows',          icon: '🐙', sort_order: 15, is_visible: true },
  { id: 'bash',    slug: 'bash',    name: 'Bash',       short_description: 'Shell de Unix para scripting y automatización',            icon: '🐚', sort_order: 20, is_visible: true },
  { id: 'docker',  slug: 'docker',  name: 'Docker',     short_description: 'Contenedores y orquestación de servicios',                 icon: '🐳', sort_order: 30, is_visible: true },
  { id: 'kubectl', slug: 'kubectl', name: 'kubectl',    short_description: 'CLI para gestionar clústeres de Kubernetes',               icon: '☸️', sort_order: 35, is_visible: true },
  { id: 'nodejs',  slug: 'nodejs',  name: 'Node.js',    short_description: 'Entorno de ejecución de JavaScript del lado del servidor', icon: '🟢', sort_order: 38, is_visible: true },
  { id: 'npm',     slug: 'npm',     name: 'npm',        short_description: 'Gestor de paquetes de Node.js',                            icon: '📦', sort_order: 40, is_visible: true },
  { id: 'yarn',    slug: 'yarn',    name: 'Yarn',       short_description: 'Gestor de paquetes rápido y fiable para Node.js',          icon: '🧶', sort_order: 44, is_visible: true },
  { id: 'pnpm',    slug: 'pnpm',    name: 'pnpm',       short_description: 'Gestor de paquetes eficiente con almacén centralizado',    icon: '⚡', sort_order: 47, is_visible: true },
  { id: 'sql',     slug: 'sql',     name: 'SQL',        short_description: 'Consultas y gestión de bases de datos',                    icon: '🗃️', sort_order: 50, is_visible: true },
  { id: 'vue',     slug: 'vue',     name: 'Vue',        short_description: 'Framework progresivo de JavaScript',                       icon: '💚', sort_order: 60, is_visible: true },
  { id: 'angular', slug: 'angular', name: 'Angular',    short_description: 'Framework de Google para SPAs robustas',                   icon: '🔴', sort_order: 70, is_visible: true },
  { id: 'claude',  slug: 'claude',  name: 'Claude',     short_description: 'API y CLI de Claude / Anthropic',                          icon: '🤖', sort_order: 80, is_visible: true },
]
