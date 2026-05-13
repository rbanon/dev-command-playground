-- ─────────────────────────────────────────────
-- Seed: tecnologías y comandos de ejemplo
-- ─────────────────────────────────────────────

INSERT INTO technologies (slug, name, short_description, icon, sort_order) VALUES
  ('git',     'Git',     'Control de versiones distribuido',  '🌿', 10),
  ('bash',    'Bash',    'Shell de Unix para scripting',      '🐚', 20),
  ('docker',  'Docker',  'Contenedores y orquestación',       '🐳', 30),
  ('npm',     'npm',     'Gestor de paquetes de Node.js',     '📦', 40),
  ('sql',     'SQL',     'Consultas y gestión de bases de datos', '🗃️', 50),
  ('vue',     'Vue',     'Framework progresivo de JavaScript', '💚', 60),
  ('angular', 'Angular', 'Framework de Google para SPA',      '🔴', 70),
  ('claude',  'Claude',  'API y CLI de Claude / Anthropic',   '🤖', 80);

-- ─── Git commands ───────────────────────────
WITH tech AS (SELECT id FROM technologies WHERE slug = 'git')
INSERT INTO commands (technology_id, command, description, example, category, use_case, difficulty_level, risk_level, is_featured, sort_order)
SELECT tech.id, c.command, c.description, c.example, c.category, c.use_case, c.difficulty_level::text, c.risk_level::text, c.is_featured, c.sort_order
FROM tech, (VALUES
  ('git init',               'Inicializa un repositorio Git en el directorio actual', 'git init mi-proyecto', 'configuración', 'inicializar',    'beginner',     'safe',    true,  10),
  ('git clone <url>',        'Clona un repositorio remoto',                           'git clone https://github.com/user/repo.git', 'configuración', 'clonar', 'beginner', 'safe', true, 20),
  ('git status',             'Muestra el estado del árbol de trabajo',                'git status',           'inspección',   'consultar estado','beginner',    'safe',    true,  30),
  ('git add .',              'Añade todos los cambios al área de staging',            'git add .',            'staging',      'preparar commit', 'beginner',    'safe',    false, 40),
  ('git commit -m "<msg>"',  'Crea un commit con el mensaje dado',                   'git commit -m "feat: add login"', 'commits', 'guardar cambios', 'beginner', 'safe', true, 50),
  ('git push',               'Sube commits al repositorio remoto',                   'git push origin main', 'remoto',       'sincronizar',     'beginner',    'safe',    false, 60),
  ('git pull',               'Descarga y fusiona cambios del remoto',                'git pull origin main', 'remoto',       'sincronizar',     'beginner',    'safe',    false, 70),
  ('git branch <nombre>',    'Crea una nueva rama',                                  'git branch feature/login', 'ramas',   'ramas',           'beginner',    'safe',    false, 80),
  ('git checkout -b <rama>', 'Crea y cambia a una nueva rama',                       'git checkout -b feature/login', 'ramas', 'ramas',        'beginner',    'safe',    true,  90),
  ('git merge <rama>',       'Fusiona la rama indicada en la rama actual',           'git merge feature/login', 'ramas',   'fusionar',        'intermediate', 'warning', false, 100),
  ('git rebase <rama>',      'Reaplica commits sobre otra rama',                     'git rebase main',      'ramas',        'reescribir historial', 'advanced', 'warning', false, 110),
  ('git log --oneline',      'Muestra el historial de commits compacto',             'git log --oneline -10', 'inspección', 'consultar estado', 'beginner',   'safe',    true,  120),
  ('git diff',               'Muestra diferencias no preparadas',                    'git diff src/',        'inspección',   'depurar',         'beginner',    'safe',    false, 130),
  ('git stash',              'Guarda temporalmente los cambios sin commit',          'git stash push -m "wip"', 'stash',   'guardar temporal', 'intermediate', 'safe',   false, 140),
  ('git reset --hard HEAD',  'Descarta todos los cambios locales sin confirmar',     'git reset --hard HEAD', 'deshacer', 'deshacer',        'intermediate', 'danger',  false, 150),
  ('git cherry-pick <hash>', 'Aplica un commit concreto en la rama actual',          'git cherry-pick a1b2c3d', 'commits', 'aplicar cambio',  'advanced',    'warning', false, 160)
) AS c(command, description, example, category, use_case, difficulty_level, risk_level, is_featured, sort_order);

-- ─── npm commands ───────────────────────────
WITH tech AS (SELECT id FROM technologies WHERE slug = 'npm')
INSERT INTO commands (technology_id, command, description, example, category, use_case, difficulty_level, risk_level, is_featured, sort_order)
SELECT tech.id, c.command, c.description, c.example, c.category, c.use_case, c.difficulty_level::text, c.risk_level::text, c.is_featured, c.sort_order
FROM tech, (VALUES
  ('npm install',             'Instala todas las dependencias del package.json',        'npm install',                    'dependencias', 'instalar',       'beginner',     'safe',    true,  10),
  ('npm install <pkg>',       'Instala un paquete como dependencia',                    'npm install axios',              'dependencias', 'instalar',       'beginner',     'safe',    true,  20),
  ('npm install -D <pkg>',    'Instala un paquete como devDependency',                  'npm install -D vite',            'dependencias', 'instalar',       'beginner',     'safe',    false, 30),
  ('npm run <script>',        'Ejecuta un script definido en package.json',             'npm run dev',                    'scripts',      'ejecutar',       'beginner',     'safe',    true,  40),
  ('npm run build',           'Genera la build de producción',                          'npm run build',                  'scripts',      'compilar',       'beginner',     'safe',    false, 50),
  ('npm uninstall <pkg>',     'Elimina un paquete del proyecto',                        'npm uninstall lodash',           'dependencias', 'desinstalar',    'beginner',     'safe',    false, 60),
  ('npm update',              'Actualiza todos los paquetes dentro de sus rangos',      'npm update',                     'dependencias', 'actualizar',     'intermediate', 'warning', false, 70),
  ('npm outdated',            'Lista los paquetes desactualizados',                     'npm outdated',                   'inspección',   'consultar estado','beginner',    'safe',    false, 80),
  ('npm audit',               'Analiza vulnerabilidades de seguridad',                  'npm audit',                      'seguridad',    'depurar',        'beginner',     'safe',    false, 90),
  ('npm audit fix',           'Corrige vulnerabilidades automáticamente',               'npm audit fix',                  'seguridad',    'depurar',        'intermediate', 'warning', false, 100)
) AS c(command, description, example, category, use_case, difficulty_level, risk_level, is_featured, sort_order);

-- ─── Docker commands ────────────────────────
WITH tech AS (SELECT id FROM technologies WHERE slug = 'docker')
INSERT INTO commands (technology_id, command, description, example, category, use_case, difficulty_level, risk_level, is_featured, sort_order)
SELECT tech.id, c.command, c.description, c.example, c.category, c.use_case, c.difficulty_level::text, c.risk_level::text, c.is_featured, c.sort_order
FROM tech, (VALUES
  ('docker ps',                   'Lista contenedores en ejecución',                       'docker ps',                              'contenedores', 'consultar estado', 'beginner',     'safe',    true,  10),
  ('docker ps -a',                'Lista todos los contenedores (incluidos parados)',       'docker ps -a',                           'contenedores', 'consultar estado', 'beginner',     'safe',    false, 20),
  ('docker run <imagen>',         'Crea y arranca un contenedor de una imagen',            'docker run -p 3000:3000 node:20',         'contenedores', 'ejecutar',         'beginner',     'safe',    true,  30),
  ('docker build -t <nombre> .', 'Construye una imagen a partir del Dockerfile',          'docker build -t mi-app:latest .',         'imágenes',     'compilar',         'intermediate', 'safe',    true,  40),
  ('docker stop <id>',            'Detiene un contenedor en ejecución',                    'docker stop abc123',                     'contenedores', 'detener',          'beginner',     'safe',    false, 50),
  ('docker rm <id>',              'Elimina un contenedor parado',                          'docker rm abc123',                       'contenedores', 'limpiar',          'beginner',     'warning', false, 60),
  ('docker rmi <imagen>',         'Elimina una imagen local',                              'docker rmi mi-app:latest',               'imágenes',     'limpiar',          'beginner',     'warning', false, 70),
  ('docker logs <id>',            'Muestra los logs de un contenedor',                     'docker logs -f abc123',                  'depuración',   'depurar',          'beginner',     'safe',    true,  80),
  ('docker exec -it <id> bash',   'Abre una terminal dentro del contenedor',               'docker exec -it abc123 bash',            'depuración',   'depurar',          'intermediate', 'safe',    false, 90),
  ('docker compose up -d',        'Arranca los servicios definidos en compose en modo daemon','docker compose up -d',                'compose',      'ejecutar',         'intermediate', 'safe',    true,  100),
  ('docker system prune',         'Elimina contenedores, imágenes y redes no usadas',      'docker system prune -af',                'mantenimiento','limpiar',          'intermediate', 'danger',  false, 110)
) AS c(command, description, example, category, use_case, difficulty_level, risk_level, is_featured, sort_order);

-- ─── Bash commands ───────────────────────────
WITH tech AS (SELECT id FROM technologies WHERE slug = 'bash')
INSERT INTO commands (technology_id, command, description, example, category, use_case, difficulty_level, risk_level, is_featured, sort_order)
SELECT tech.id, c.command, c.description, c.example, c.category, c.use_case, c.difficulty_level::text, c.risk_level::text, c.is_featured, c.sort_order
FROM tech, (VALUES
  ('ls -la',               'Lista archivos con detalles incluyendo ocultos',             'ls -la ~/projects',           'archivos',     'listar',          'beginner',     'safe',    true,  10),
  ('cd <ruta>',            'Cambia al directorio indicado',                              'cd ~/projects/mi-app',        'navegación',   'navegar',         'beginner',     'safe',    false, 20),
  ('mkdir -p <ruta>',      'Crea directorios y los intermedios necesarios',             'mkdir -p src/components/ui',  'archivos',     'crear',           'beginner',     'safe',    false, 30),
  ('cp -r <src> <dest>',   'Copia un directorio recursivamente',                        'cp -r dist/ backup/',         'archivos',     'copiar',          'beginner',     'safe',    false, 40),
  ('mv <src> <dest>',      'Mueve o renombra un archivo o directorio',                  'mv old-name.ts new-name.ts',  'archivos',     'mover',           'beginner',     'safe',    false, 50),
  ('rm -rf <ruta>',        'Elimina directorio y su contenido sin confirmación',         'rm -rf node_modules/',        'archivos',     'eliminar',        'beginner',     'danger',  true,  60),
  ('grep -r "<pattern>" .','Busca texto recursivamente en archivos del directorio',      'grep -r "TODO" src/',         'búsqueda',     'buscar',          'intermediate', 'safe',    true,  70),
  ('find . -name "<glob>"','Busca archivos por nombre',                                  'find . -name "*.vue"',        'búsqueda',     'buscar',          'intermediate', 'safe',    false, 80),
  ('chmod +x <archivo>',   'Da permisos de ejecución a un archivo',                     'chmod +x deploy.sh',          'permisos',     'configurar',      'intermediate', 'warning', false, 90),
  ('cat <archivo>',        'Muestra el contenido de un archivo',                         'cat .env.example',            'inspección',   'consultar estado','beginner',     'safe',    false, 100),
  ('| grep <pattern>',     'Pipe para filtrar la salida del comando anterior',           'docker ps | grep running',    'pipes',        'filtrar',         'intermediate', 'safe',    true,  110),
  ('> archivo',            'Redirige la salida a un archivo (sobreescribe)',             'ls -la > output.txt',         'redirección',  'guardar salida',  'intermediate', 'warning', false, 120)
) AS c(command, description, example, category, use_case, difficulty_level, risk_level, is_featured, sort_order);
