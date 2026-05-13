export { technologies } from './technologies'

import { gitCommands }        from './commands/git'
import { githubCommands }     from './commands/github'
import { bashCommands }       from './commands/bash'
import { curlCommands }       from './commands/curl'
import { makeCommands }       from './commands/make'
import { pythonCommands }     from './commands/python'
import { goCommands }         from './commands/go'
import { dockerCommands }     from './commands/docker'
import { terraformCommands }  from './commands/terraform'
import { kubectlCommands }    from './commands/kubectl'
import { nodejsCommands }     from './commands/nodejs'
import { typescriptCommands } from './commands/typescript'
import { npmCommands }        from './commands/npm'
import { yarnCommands }       from './commands/yarn'
import { pnpmCommands }       from './commands/pnpm'
import { bunCommands }        from './commands/bun'
import { sqlCommands }        from './commands/sql'
import { prismaCommands }     from './commands/prisma'
import { viteCommands }       from './commands/vite'
import { vueCommands }        from './commands/vue'
import { nextjsCommands }     from './commands/nextjs'
import { angularCommands }    from './commands/angular'
import { claudeCommands }     from './commands/claude'
import type { Command } from '@/types/command'

export const commands: Command[] = [
  ...gitCommands,
  ...githubCommands,
  ...bashCommands,
  ...curlCommands,
  ...makeCommands,
  ...pythonCommands,
  ...goCommands,
  ...dockerCommands,
  ...terraformCommands,
  ...kubectlCommands,
  ...nodejsCommands,
  ...typescriptCommands,
  ...npmCommands,
  ...yarnCommands,
  ...pnpmCommands,
  ...bunCommands,
  ...sqlCommands,
  ...prismaCommands,
  ...viteCommands,
  ...vueCommands,
  ...nextjsCommands,
  ...angularCommands,
  ...claudeCommands,
]
