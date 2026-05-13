-- ─────────────────────────────────────────────
-- Dev Command Playbook — Schema + RLS
-- ─────────────────────────────────────────────

CREATE TABLE technologies (
  id               uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug             text UNIQUE NOT NULL,
  name             text NOT NULL,
  short_description text NOT NULL DEFAULT '',
  icon             text,
  sort_order       integer NOT NULL DEFAULT 0,
  is_visible       boolean NOT NULL DEFAULT true
);

CREATE TABLE commands (
  id               uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  technology_id    uuid NOT NULL REFERENCES technologies(id) ON DELETE CASCADE,
  command          text NOT NULL,
  description      text NOT NULL,
  example          text,
  category         text NOT NULL DEFAULT '',
  use_case         text NOT NULL DEFAULT '',
  difficulty_level text CHECK (difficulty_level IN ('beginner','intermediate','advanced')),
  risk_level       text CHECK (risk_level IN ('safe','warning','danger')),
  is_featured      boolean NOT NULL DEFAULT false,
  sort_order       integer NOT NULL DEFAULT 0,
  created_at       timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX commands_technology_id_idx ON commands(technology_id);
CREATE INDEX commands_is_featured_idx ON commands(is_featured) WHERE is_featured = true;

-- ─── RLS ────────────────────────────────────
ALTER TABLE technologies ENABLE ROW LEVEL SECURITY;
ALTER TABLE commands     ENABLE ROW LEVEL SECURITY;

CREATE POLICY "anon puede leer tecnologías visibles"
  ON technologies FOR SELECT TO anon
  USING (is_visible = true);

CREATE POLICY "anon puede leer comandos"
  ON commands FOR SELECT TO anon
  USING (true);
