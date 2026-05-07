<template>
  <div class="setup">
    <div class="setup__card">
      <div class="setup__icon">⚙️</div>
      <h2 class="setup__title">Configura Supabase</h2>
      <p class="setup__desc">
        La app necesita las variables de entorno para conectar con tu base de datos.
      </p>

      <div class="setup__steps">
        <div class="setup__step">
          <span class="setup__step-num">1</span>
          <div>
            <p class="setup__step-title">Crea el archivo <code>.env.local</code> en la raíz del proyecto</p>
          </div>
        </div>
        <div class="setup__step">
          <span class="setup__step-num">2</span>
          <div>
            <p class="setup__step-title">Añade tus credenciales de Supabase</p>
            <pre class="setup__code">VITE_SUPABASE_URL=https://tu-proyecto.supabase.co
VITE_SUPABASE_ANON_KEY=tu-clave-anon</pre>
          </div>
        </div>
        <div class="setup__step">
          <span class="setup__step-num">3</span>
          <div>
            <p class="setup__step-title">Ejecuta el esquema SQL en Supabase</p>
            <p class="setup__step-sub">Abre <code>supabase/schema.sql</code> en el SQL Editor de tu proyecto y ejecútalo. Luego haz lo mismo con <code>supabase/seed.sql</code> para tener datos de ejemplo.</p>
          </div>
        </div>
        <div class="setup__step">
          <span class="setup__step-num">4</span>
          <div>
            <p class="setup__step-title">Reinicia el servidor de desarrollo</p>
            <pre class="setup__code">npm run dev</pre>
          </div>
        </div>
      </div>

      <a
        href="https://supabase.com/dashboard"
        target="_blank"
        rel="noopener noreferrer"
        class="setup__link"
      >
        Ir a Supabase Dashboard →
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.setup {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;

  &__card {
    background: var(--bg-secondary);
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    padding: 2rem 2.25rem;
    max-width: 520px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }

  &__icon {
    font-size: 2rem;
    line-height: 1;
  }

  &__title {
    font-size: var(--text-xl);
    font-weight: 600;
    color: var(--text-primary);
  }

  &__desc {
    font-size: var(--text-sm);
    color: var(--text-secondary);
    line-height: 1.5;
  }

  &__steps {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  &__step {
    display: flex;
    gap: 0.875rem;
    align-items: flex-start;

    &-num {
      flex-shrink: 0;
      width: 22px;
      height: 22px;
      border-radius: var(--radius-full);
      background: var(--accent-subtle);
      color: var(--accent);
      font-size: var(--text-xs);
      font-weight: 600;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 1px;
    }

    &-title {
      font-size: var(--text-sm);
      color: var(--text-primary);
      font-weight: 500;

      code {
        font-family: var(--font-mono);
        font-size: 0.8rem;
        color: var(--accent);
        background: var(--accent-subtle);
        padding: 0.1rem 0.35rem;
        border-radius: var(--radius-sm);
      }
    }

    &-sub {
      font-size: var(--text-sm);
      color: var(--text-muted);
      margin-top: 0.25rem;
      line-height: 1.5;

      code {
        font-family: var(--font-mono);
        font-size: 0.78rem;
        color: var(--text-secondary);
        background: var(--bg-tertiary);
        padding: 0.1rem 0.3rem;
        border-radius: var(--radius-sm);
      }
    }
  }

  &__code {
    font-family: var(--font-mono);
    font-size: 0.78rem;
    color: var(--text-primary);
    background: var(--bg-tertiary);
    border: 1px solid var(--border);
    border-radius: var(--radius-md);
    padding: 0.625rem 0.875rem;
    margin-top: 0.5rem;
    white-space: pre;
    overflow-x: auto;
    line-height: 1.7;
  }

  &__link {
    display: inline-flex;
    align-self: flex-start;
    font-size: var(--text-sm);
    color: var(--accent);
    font-weight: 500;
    transition: color var(--transition);

    &:hover { color: var(--accent-hover); }
  }
}
</style>
