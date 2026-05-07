export { technologies } from './technologies'

import { gitCommands }     from './commands/git'
import { githubCommands }  from './commands/github'
import { bashCommands }    from './commands/bash'
import { dockerCommands }  from './commands/docker'
import { kubectlCommands } from './commands/kubectl'
import { nodejsCommands }  from './commands/nodejs'
import { npmCommands }     from './commands/npm'
import { yarnCommands }    from './commands/yarn'
import { pnpmCommands }    from './commands/pnpm'
import { sqlCommands }     from './commands/sql'
import { vueCommands }     from './commands/vue'
import { angularCommands } from './commands/angular'
import { claudeCommands }  from './commands/claude'
import type { Command } from '@/types/command'

export const commands: Command[] = [
  ...gitCommands,
  ...githubCommands,
  ...bashCommands,
  ...dockerCommands,
  ...kubectlCommands,
  ...nodejsCommands,
  ...npmCommands,
  ...yarnCommands,
  ...pnpmCommands,
  ...sqlCommands,
  ...vueCommands,
  ...angularCommands,
  ...claudeCommands,
]
