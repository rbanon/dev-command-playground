// git
const git: Record<string, string> = {
  'git-01': 'Initializes a new repository in the current directory',
  'git-02': 'Clones a remote repository locally',
  'git-03': 'Shows the working tree status and staging area',
  'git-04': 'Adds all changes to the staging area',
  'git-05': 'Creates a commit with the given message',
  'git-06': 'Pushes local commits to the remote repository',
  'git-07': 'Downloads and merges the latest changes from remote',
  'git-08': 'Creates a new branch and switches to it',
  'git-09': 'Lists all local branches',
  'git-10': 'Merges the given branch into the current branch',
  'git-11': 'Shows the commit history in compact format',
  'git-12': 'Shows unstaged changes',
  'git-13': 'Temporarily saves uncommitted changes',
  'git-14': 'Discards all local uncommitted changes (irreversible)',
  'git-15': 'Replays commits onto another base, rewriting history',
  'git-16': 'Applies a specific commit to the current branch',
  'git-17': 'Creates a tag on the current commit',
  'git-18': 'Downloads changes from remote without merging them into the current branch',
  'git-19': 'Switches branch (modern alternative to git checkout)',
  'git-20': 'Shows the configured remote repositories with their URLs',
  'git-21': 'Creates a commit that undoes another commit (safe for shared history)',
  'git-22': 'Lists all stashed changes with their index and message',
  'git-23': 'Sets a global Git configuration value (e.g. user name or email)',
  'git-24': 'Removes untracked files and directories from the working tree',
}

// github cli
const github: Record<string, string> = {
  'gh-01': 'Authenticates the GitHub CLI with your account',
  'gh-02': 'Clones a GitHub repository using the CLI',
  'gh-03': 'Creates a new GitHub repository from the terminal',
  'gh-04': 'Lists the open issues of the current repository',
  'gh-05': 'Creates a new issue in the current repository',
  'gh-06': 'Lists open pull requests in the repository',
  'gh-07': 'Creates a pull request from the current branch',
  'gh-08': 'Checks out a pull request locally by its number',
  'gh-09': 'Merges a pull request from the terminal',
  'gh-10': 'Creates a new GitHub release with notes and optional assets',
  'gh-11': 'Lists the GitHub Actions workflows in the repository',
  'gh-12': 'Manually triggers a GitHub Actions workflow',
  'gh-13': 'Lists recent GitHub Actions runs',
  'gh-14': 'Shows the details and logs of an Actions run',
}

// bash
const bash: Record<string, string> = {
  'bash-01': 'Lists files with details, including hidden ones',
  'bash-02': 'Changes to the given directory',
  'bash-03': 'Creates a directory and all required intermediate ones',
  'bash-04': 'Recursively copies a directory',
  'bash-05': 'Moves or renames a file or directory',
  'bash-06': 'Removes a directory and all its contents without confirmation',
  'bash-07': 'Recursively searches for text across all files',
  'bash-08': 'Finds files by name or pattern',
  'bash-09': 'Shows the full contents of a file',
  'bash-10': 'Adds execute permission to a file',
  'bash-11': 'Pipes the output of one command as input to another',
  'bash-12': 'Defines an environment variable for the current session',
  'bash-13': 'Makes an HTTP request and formats the JSON response',
  'bash-14': 'Searches for a running process by name',
  'bash-15': 'Force-terminates a process by its PID',
  'bash-16': 'Lists the contents of the current directory',
  'bash-17': 'Prints the absolute path of the current working directory',
  'bash-18': 'Removes a file',
  'bash-19': 'Creates an empty file or updates its timestamp',
  'bash-20': 'Displays a file with interactive scrolling',
  'bash-21': 'Follows a file in real time as new content is added (ideal for logs)',
  'bash-22': 'Opens a secure SSH session with a remote server',
  'bash-23': 'Securely copies files between machines over SSH',
  'bash-24': 'Changes the owner and group of a file or directory',
  'bash-25': 'Checks network connectivity with a host',
  'bash-26': 'Downloads a file from a URL',
  'bash-27': 'Sends a POST request with a JSON body to the given endpoint',
  'bash-28': 'Lists listening ports and the processes using them',
}

// docker
const docker: Record<string, string> = {
  'dkr-01': 'Lists running containers',
  'dkr-02': 'Lists all containers, including stopped ones',
  'dkr-03': 'Creates and starts a container from an image',
  'dkr-04': 'Builds an image from the Dockerfile in the current directory',
  'dkr-05': 'Gracefully stops a running container',
  'dkr-06': 'Follows the logs of a container in real time',
  'dkr-07': 'Opens an interactive terminal inside the container',
  'dkr-08': 'Starts all services defined in compose.yml in the background',
  'dkr-09': 'Stops and removes the compose containers and networks',
  'dkr-10': 'Lists locally available images',
  'dkr-11': 'Removes a stopped container',
  'dkr-12': 'Removes all unused containers, images, and networks',
  'dkr-13': 'Downloads an image from Docker Hub or another registry',
  'dkr-14': 'Shows the logs of a container',
  'dkr-15': 'Starts a previously stopped container',
  'dkr-16': 'Removes a local image',
  'dkr-17': 'Runs a container mapping a host port to the container port',
  'dkr-18': 'Shows logs from compose services',
  'dkr-19': 'Lists the status of compose services',
  'dkr-20': 'Lists all Docker volumes on the system',
  'dkr-21': 'Shows detailed low-level information about a container or image',
}

// kubectl
const kubectl: Record<string, string> = {
  'k8s-01': 'Lists all pods in the current namespace',
  'k8s-02': 'Lists deployments in the current namespace',
  'k8s-03': 'Lists services and their exposed endpoints',
  'k8s-04': 'Lists all namespaces in the cluster',
  'k8s-05': 'Shows detailed information about a pod, including events',
  'k8s-06': 'Shows the logs of a pod',
  'k8s-07': "Follows a pod's logs in real time",
  'k8s-08': 'Opens an interactive shell inside a running pod',
  'k8s-09': 'Applies or updates resources defined in a YAML file',
  'k8s-10': 'Deletes resources defined in a YAML file',
  'k8s-11': 'Deletes a pod (Kubernetes recreates it if it has a controller)',
  'k8s-12': 'Lists all contexts (clusters) configured in kubeconfig',
  'k8s-13': 'Switches to the given context (cluster)',
  'k8s-14': 'Forwards a local port to a pod port for debugging',
  'k8s-15': 'Watches the rollout status of a deployment until it completes',
  'k8s-16': 'Scales a deployment to the desired number of replicas',
}

// nodejs
const nodejs: Record<string, string> = {
  'node-01': 'Runs a JavaScript file with Node.js',
  'node-02': 'Shows the installed Node.js version',
  'node-03': 'Starts Node.js in debug mode to connect with Chrome DevTools',
  'node-04': 'Auto-restarts the process when file changes are detected',
  'node-05': 'Runs an npm package without installing it globally',
  'node-06': 'Creates a new Vite project (Vue, React, Svelte, and more)',
  'node-07': 'Scaffolds a React project with Create React App',
  'node-08': 'Runs ESLint on all project files',
}

// npm
const npm: Record<string, string> = {
  'npm-01': 'Installs all dependencies defined in package.json',
  'npm-02': 'Installs a package as a production dependency',
  'npm-03': 'Installs a package as a devDependency',
  'npm-04': 'Runs a script defined in package.json',
  'npm-05': 'Removes a package from the project and package.json',
  'npm-06': 'Lists packages that have newer versions available',
  'npm-07': 'Updates all packages within the package.json version ranges',
  'npm-08': 'Scans the project for known vulnerabilities',
  'npm-09': 'Automatically fixes vulnerabilities that have a fix available',
  'npm-10': 'Runs a package without installing it globally',
  'npm-11': 'Shows the installed dependency tree',
  'npm-12': 'Creates a new package.json interactively',
  'npm-13': 'Creates a package.json with defaults, no questions asked',
  'npm-14': 'Runs the test script defined in package.json',
  'npm-15': 'Clears the npm cache to fix installation issues',
  'npm-16': 'Shows the active npm configuration',
}

// yarn
const yarn: Record<string, string> = {
  'yarn-01': 'Creates a new package.json interactively',
  'yarn-02': 'Installs all dependencies from package.json',
  'yarn-03': 'Adds a package as a production dependency',
  'yarn-04': 'Adds a package as a devDependency',
  'yarn-05': 'Removes a package from the project and package.json',
  'yarn-06': 'Updates packages to the latest allowed versions',
  'yarn-07': 'Runs a script defined in package.json',
  'yarn-08': 'Runs the test script from package.json',
  'yarn-09': 'Clears the local Yarn cache',
}

// pnpm
const pnpm: Record<string, string> = {
  'pnpm-01': 'Creates a new package.json with defaults',
  'pnpm-02': 'Installs all dependencies from package.json',
  'pnpm-03': 'Adds a package as a production dependency',
  'pnpm-04': 'Adds a package as a devDependency',
  'pnpm-05': 'Removes a package from the project and package.json',
  'pnpm-06': 'Updates packages within the package.json version ranges',
  'pnpm-07': 'Runs a script defined in package.json',
  'pnpm-08': 'Runs the test script from package.json',
  'pnpm-09': 'Removes unreferenced packages from the global pnpm store',
}

// sql
const sql: Record<string, string> = {
  'sql-01': 'Retrieves all rows and columns from a table',
  'sql-02': 'Filters rows that meet a condition',
  'sql-03': 'Inserts a new row into a table',
  'sql-04': 'Updates rows that meet the condition',
  'sql-05': 'Deletes rows that meet the condition (without WHERE, deletes everything!)',
  'sql-06': 'Joins two tables on a related column, returning only matching rows',
  'sql-07': 'Groups results and filters on the groups',
  'sql-08': 'Creates an index to speed up frequent queries',
  'sql-09': 'Shows the actual execution plan of a query for optimization',
  'sql-10': 'Adds a new column to an existing table',
  'sql-11': 'Empties an entire table quickly (irreversible without a transaction)',
  'sql-12': 'Creates a new table with the defined columns and constraints',
  'sql-13': 'Permanently drops a table and all its data',
  'sql-14': 'Removes a column from an existing table',
  'sql-15': 'Joins two tables returning all rows from the left even with no match',
  'sql-16': 'Sorts results in ascending or descending order',
  'sql-17': 'Limits the number of rows returned by a query',
  'sql-18': 'Aggregation functions to calculate totals, averages, and extremes',
  'sql-19': 'Opens the PostgreSQL interactive client',
  'sql-20': 'Lists all tables in the current schema (psql)',
  'sql-21': 'Describes the structure of a table in psql (columns, types, indexes)',
  'sql-22': 'Connects to the MySQL interactive client',
  'sql-23': 'Lists tables in the active database (MySQL)',
}

// vue
const vue: Record<string, string> = {
  'vue-01': 'Official scaffolding for a Vue 3 project with Vite',
  'vue-02': 'Declares component props with TypeScript types',
  'vue-03': 'Declares the events a component can emit',
  'vue-04': 'Creates a reactive reference for a primitive value',
  'vue-05': 'Creates a derived value that recomputes automatically',
  'vue-06': 'Watches a reactive value and runs a callback when it changes',
  'vue-07': 'Two-way binding between an input and a reactive variable',
  'vue-08': 'Renders a list of elements from an array',
  'vue-09': 'Runs code when the component is mounted to the DOM',
  'vue-10': 'Dependency injection between components without prop drilling',
  'vue-11': 'Accesses the router and current route inside a composable',
  'vue-12': 'Creates a Vite project with support for Vue, React, Svelte, and more',
  'vue-13': 'Creates a Vue project with Vue CLI (classic alternative to Vite)',
  'vue-14': 'Installs and configures a Vue CLI plugin in the project',
}

// angular
const angular: Record<string, string> = {
  'ng-01': 'Creates a new Angular workspace with initial configuration',
  'ng-02': 'Generates a component with its module, template, and styles',
  'ng-03': 'Generates an injectable service',
  'ng-04': 'Starts the development server with hot reload',
  'ng-05': 'Compiles the application for production',
  'ng-06': 'Runs unit tests with Karma/Jest',
  'ng-07': 'Installs and auto-configures an Angular library',
  'ng-08': 'Updates Angular and its dependencies safely',
  'ng-09': 'Signals for declaring inputs and outputs in standalone components',
  'ng-10': 'Signals API for reactive state in Angular 17+',
  'ng-11': 'Runs the linter on the project code',
}

// claude
const claude: Record<string, string> = {
  'cld-01': 'Opens the interactive Claude Code session in the terminal',
  'cld-02': 'Sends a direct prompt without entering interactive mode',
  'cld-03': 'Print mode: returns the response non-interactively (useful in scripts)',
  'cld-04': 'Generates a CLAUDE.md with the current project context',
  'cld-05': 'Clears the context of the current conversation',
  'cld-06': 'Compacts the conversation history to free up context',
  'cld-07': 'Runs a shell command directly from Claude Code',
  'cld-08': 'Launches a code review of the current repository state',
  'cld-09': 'Specifies the Claude model to use in the session',
  'cld-10': 'Shows the approximate token cost of the current session',
}

// python
const python: Record<string, string> = {
  'python-01': 'Runs a Python script',
  'python-02': 'Creates a virtual environment in the .venv folder',
  'python-03': 'Activates the virtual environment (Linux/macOS)',
  'python-04': 'Installs a package from PyPI',
  'python-05': 'Installs all project dependencies',
  'python-06': 'Exports installed dependencies to requirements.txt',
  'python-07': 'Lists all packages installed in the current environment',
  'python-08': 'Uninstalls a package from the current environment',
  'python-09': 'Runs all tests with pytest',
  'python-10': 'Runs Python code directly on the command line',
  'python-11': 'Shows detailed information about an installed package',
  'python-12': 'Shows the installed Python version',
}

// typescript
const typescript: Record<string, string> = {
  'ts-01': 'Generates a tsconfig.json file with commented options',
  'ts-02': 'Compiles the project according to tsconfig.json options',
  'ts-03': 'Compiles in watch mode, recompiling on every change',
  'ts-04': 'Type-checks without generating output files',
  'ts-05': 'Compiles a specific TypeScript file',
  'ts-06': 'Specifies the output directory for compiled files',
  'ts-07': 'Compiles targeting a specific ECMAScript version',
  'ts-08': 'Shows the effective configuration applied by tsconfig.json',
  'ts-09': 'Runs TypeScript directly without a compilation step',
  'ts-10': 'Enables the full set of strict type-checking options',
  'ts-11': 'Shows the installed TypeScript version',
}

// bun
const bun: Record<string, string> = {
  'bun-01': 'Initializes a new project, generating package.json and tsconfig.json',
  'bun-02': 'Installs project dependencies (much faster than npm)',
  'bun-03': 'Adds a package as a project dependency',
  'bun-04': 'Removes a package from the dependencies',
  'bun-05': 'Runs a script defined in package.json',
  'bun-06': 'Runs a TypeScript or JavaScript file directly',
  'bun-07': 'Bundles the application for production',
  'bun-08': 'Runs the project test suite',
  'bun-09': 'Runs a package without installing it (equivalent to npx)',
  'bun-10': 'Updates all dependencies to their latest versions',
  'bun-11': 'Shows the installed Bun version',
}

// nextjs
const nextjs: Record<string, string> = {
  'next-01': 'Creates a new Next.js project with guided configuration',
  'next-02': 'Starts the development server with hot reload on port 3000',
  'next-03': 'Builds the optimized production application',
  'next-04': 'Starts the production server (requires next build first)',
  'next-05': 'Runs ESLint on the Next.js project code',
  'next-06': 'Shows environment information useful for reporting bugs',
  'next-07': 'Disables Next.js usage data collection',
  'next-08': 'Starts the dev server using the Turbopack compiler (faster)',
  'next-09': 'Generates a visual bundle analysis for the production build',
  'next-10': 'Builds and starts the production server in one step',
}

// vite
const vite: Record<string, string> = {
  'vite-01': 'Creates a new Vite project with framework and variant selection',
  'vite-02': 'Starts the development server with instant HMR',
  'vite-03': 'Generates the optimized production bundle in dist/',
  'vite-04': 'Previews the production build locally before deploying',
  'vite-05': 'Starts the dev server on a custom port',
  'vite-06': 'Exposes the dev server on the local network (access from other devices)',
  'vite-07': 'Starts in a custom environment mode (loads the matching .env.<mode>)',
  'vite-08': 'Generates the production bundle with source maps for debugging',
  'vite-09': 'Manually pre-bundles dependencies, updating the cache',
  'vite-10': 'Prevents clearing the terminal when restarting the dev server',
}

// prisma
const prisma: Record<string, string> = {
  'prisma-01': 'Initializes Prisma: creates schema.prisma and .env with the DB URL',
  'prisma-02': 'Generates the typed Prisma client from the current schema',
  'prisma-03': 'Creates and applies a new migration in development',
  'prisma-04': 'Applies all pending migrations in production non-interactively',
  'prisma-05': 'Opens the visual database explorer in the browser',
  'prisma-06': 'Syncs the schema with the DB without creating migration files (ideal for prototyping)',
  'prisma-07': 'Introspects the existing DB and automatically updates the schema',
  'prisma-08': 'Runs the seed script defined in package.json to populate the DB',
  'prisma-09': 'Validates the syntax and consistency of schema.prisma',
  'prisma-10': 'Drops the DB, recreates it, and re-applies all migrations (destructive)',
  'prisma-11': 'Shows the status of applied and pending migrations',
}

// terraform
const terraform: Record<string, string> = {
  'tf-01': 'Initializes the working directory and downloads required providers',
  'tf-02': 'Shows the change plan that will be applied without executing it',
  'tf-03': 'Applies the infrastructure changes described in .tf files',
  'tf-04': 'Destroys all infrastructure resources managed by Terraform',
  'tf-05': 'Validates the syntax and consistency of configuration files',
  'tf-06': 'Formats .tf files to the canonical Terraform style',
  'tf-07': 'Shows the values of outputs defined in the configuration',
  'tf-08': 'Lists all resources recorded in the state file',
  'tf-09': 'Imports an existing cloud resource into the Terraform state',
  'tf-10': 'Lists all available workspaces in the current environment',
  'tf-11': 'Shows the current infrastructure state in human-readable format',
}

// curl
const curl: Record<string, string> = {
  'curl-01': 'Makes a basic GET request and prints the response to the terminal',
  'curl-02': 'Sends a POST request with data in the body',
  'curl-03': 'Adds a custom HTTP header to the request',
  'curl-04': 'Downloads the content of a URL and saves it to a local file',
  'curl-05': 'Follows HTTP redirects automatically to the final URL',
  'curl-06': 'Makes a HEAD request and shows only the response headers',
  'curl-07': 'Verbose mode: shows the full request and response with headers',
  'curl-08': 'Silent mode: hides progress and shows only the response body',
  'curl-09': 'Basic HTTP authentication sending credentials in the header',
  'curl-10': 'Sets a maximum timeout in seconds for the request',
  'curl-11': 'Sends a DELETE request with an authorization token',
}

// make
const make: Record<string, string> = {
  'make-01': 'Runs the default target in the Makefile (usually "all" or the first one)',
  'make-02': 'Runs a specific target defined in the Makefile',
  'make-03': 'Simulates execution showing commands without running them (dry-run)',
  'make-04': 'Removes files generated in previous builds (standard convention)',
  'make-05': 'Installs the program on the system (standard convention)',
  'make-06': 'Runs up to N targets in parallel to reduce build time',
  'make-07': 'Uses a Makefile with a custom name or path',
  'make-08': 'Runs make in a subdirectory without cd-ing first',
  'make-09': 'Passes environment variables to the Makefile, overriding defined ones',
  'make-10': 'Shows Makefile help listing available targets (if implemented)',
}

// go
const go: Record<string, string> = {
  'go-01': 'Compiles and runs a Go program in one step',
  'go-02': 'Compiles all packages in the module and their dependencies',
  'go-03': 'Runs all project tests recursively',
  'go-04': 'Initializes a new Go module and generates the go.mod file',
  'go-05': 'Adds missing dependencies and removes unused ones from go.mod',
  'go-06': 'Downloads and adds a dependency to the current module',
  'go-07': 'Formats Go code according to the official style recursively',
  'go-08': 'Analyzes code for common errors and suspicious constructs',
  'go-09': 'Compiles and installs a binary to $GOPATH/bin',
  'go-10': 'Shows the documentation of a package or specific symbol',
  'go-11': 'Removes the build cache to force a clean compilation',
}

export default {
  ...git, ...github, ...bash, ...docker, ...kubectl,
  ...nodejs, ...npm, ...yarn, ...pnpm, ...sql,
  ...vue, ...angular, ...claude, ...python, ...typescript,
  ...bun, ...nextjs, ...vite, ...prisma, ...terraform,
  ...curl, ...make, ...go,
}
