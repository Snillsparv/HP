import pg from 'pg';
import minnesordSeed from './minnesord-seed.json';

const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.DATABASE_URL?.includes('railway') ? { rejectUnauthorized: false } : undefined,
});

// Create tables on startup
await pool.query(`
  CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password_hash TEXT,
    google_id TEXT UNIQUE,
    avatar_color TEXT DEFAULT '#2563eb',
    created_at TIMESTAMPTZ DEFAULT NOW()
  );

  CREATE TABLE IF NOT EXISTS sessions (
    token TEXT PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    expires_at TIMESTAMPTZ NOT NULL
  );

  CREATE TABLE IF NOT EXISTS threads (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    category TEXT NOT NULL,
    title TEXT NOT NULL,
    body TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
  );

  CREATE TABLE IF NOT EXISTS replies (
    id SERIAL PRIMARY KEY,
    thread_id INTEGER NOT NULL REFERENCES threads(id) ON DELETE CASCADE,
    user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    body TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
  );

  CREATE TABLE IF NOT EXISTS test_results (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    test_id TEXT NOT NULL,
    score INTEGER NOT NULL,
    total INTEGER NOT NULL,
    answers JSONB NOT NULL,
    time_seconds INTEGER,
    created_at TIMESTAMPTZ DEFAULT NOW()
  );
`);

// Migrations for existing databases
await pool.query(`
  ALTER TABLE users ADD COLUMN IF NOT EXISTS avatar_color TEXT DEFAULT '#2563eb';
`);
await pool.query(`
  ALTER TABLE users ADD COLUMN IF NOT EXISTS train_step INTEGER DEFAULT 1;
`);
// Gästkonton: skapas osynligt när någon börjar ordträna utan att logga in,
// och uppgraderas till riktiga konton vid registrering.
await pool.query(`
  ALTER TABLE users ADD COLUMN IF NOT EXISTS is_guest BOOLEAN NOT NULL DEFAULT FALSE;
`);
await pool.query(`
  ALTER TABLE users ADD COLUMN IF NOT EXISTS learn_new_per INTEGER DEFAULT 10;
  ALTER TABLE users ADD COLUMN IF NOT EXISTS learn_review_per INTEGER DEFAULT 100;
`);
await pool.query(`
  CREATE TABLE IF NOT EXISTS contact_messages (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
  );
`);
await pool.query(`
  CREATE TABLE IF NOT EXISTS mnemonic_words (
    id SERIAL PRIMARY KEY,
    word TEXT NOT NULL,
    definition TEXT NOT NULL DEFAULT '',
    mnemonic TEXT NOT NULL DEFAULT '',
    extra JSONB,
    position INTEGER NOT NULL DEFAULT 0,
    status TEXT NOT NULL DEFAULT 'unreviewed',
    note TEXT NOT NULL DEFAULT '',
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
  );
  ALTER TABLE mnemonic_words DROP CONSTRAINT IF EXISTS mnemonic_words_word_key;
  CREATE UNIQUE INDEX IF NOT EXISTS mnemonic_words_word_lower_idx ON mnemonic_words (lower(word));
  ALTER TABLE mnemonic_words ADD COLUMN IF NOT EXISTS example TEXT NOT NULL DEFAULT '';
  ALTER TABLE mnemonic_words ADD COLUMN IF NOT EXISTS etymology TEXT NOT NULL DEFAULT '';
  ALTER TABLE mnemonic_words ADD COLUMN IF NOT EXISTS image TEXT NOT NULL DEFAULT '';
  ALTER TABLE mnemonic_words ADD COLUMN IF NOT EXISTS related JSONB;
  ALTER TABLE mnemonic_words ADD COLUMN IF NOT EXISTS traps JSONB;

  -- Inspelat uttal per ord, ett aktuellt tagningsljud per ord. Ljudet ligger
  -- som bytea: filsystemet på Railway är flyktigt men databasen består.
  CREATE TABLE IF NOT EXISTS word_pron (
    word_id INTEGER PRIMARY KEY REFERENCES mnemonic_words(id) ON DELETE CASCADE,
    mime TEXT NOT NULL,
    data BYTEA NOT NULL,
    dur_ms INTEGER NOT NULL DEFAULT 0,
    updated_at TIMESTAMPTZ DEFAULT NOW()
  );
`);
// Gäster nås bara via sin sessionskaka. När sista sessionen gått ut är
// kontot oåtkomligt och kan städas bort tillsammans med sina framsteg.
await pool.query(`
  DELETE FROM users u WHERE u.is_guest
    AND u.created_at < NOW() - INTERVAL '60 days'
    AND NOT EXISTS (SELECT 1 FROM sessions s WHERE s.user_id = u.id AND s.expires_at > NOW());
`);

// En rad per dag användaren tränat ord. Grunden för streak-räknaren.
await pool.query(`
  CREATE TABLE IF NOT EXISTS learn_activity (
    user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    day DATE NOT NULL,
    PRIMARY KEY (user_id, day)
  );
`);
// Inlärningsframsteg per användare och ord (Leitner-baserad repetition).
await pool.query(`
  CREATE TABLE IF NOT EXISTS word_progress (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    word_id INTEGER NOT NULL REFERENCES mnemonic_words(id) ON DELETE CASCADE,
    box INTEGER NOT NULL DEFAULT 1,
    due_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    reps INTEGER NOT NULL DEFAULT 0,
    lapses INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE (user_id, word_id)
  );
  CREATE INDEX IF NOT EXISTS word_progress_due_idx ON word_progress (user_id, due_at);
`);

type RelatedWord = { word: string; gloss: string };
type Related = { root: string; words: RelatedWord[] };
type MinnesordSeed = { word: string; definition: string; mnemonic: string; status?: string; note?: string; example?: string; etymology?: string; image?: string; related?: Related; traps?: string[] };

// Engångsmigreringar, guardas via app_flags så de bara körs en gång per databas
// (och därför inte rör framtida ändringar som görs via granskningsverktyget).
await pool.query(`CREATE TABLE IF NOT EXISTS app_flags (key TEXT PRIMARY KEY, created_at TIMESTAMPTZ DEFAULT NOW());`);
{
  const claim = await pool.query(
    `INSERT INTO app_flags (key) VALUES ('clear_needs_work_v1') ON CONFLICT (key) DO NOTHING RETURNING key`
  );
  if (claim.rowCount && claim.rowCount > 0) {
    await pool.query(`UPDATE mnemonic_words SET status = 'unreviewed', updated_at = NOW() WHERE status = 'needs_work'`);
  }
}
{
  const claim = await pool.query(
    `INSERT INTO app_flags (key) VALUES ('review_default_100') ON CONFLICT (key) DO NOTHING RETURNING key`
  );
  if (claim.rowCount && claim.rowCount > 0) {
    // Höj det tidigare standardtaket (60) till 100 för befintliga konton.
    await pool.query(`UPDATE users SET learn_review_per = 100 WHERE learn_review_per = 60`);
  }
}

// Fyll ordlistan från src/lib/minnesord-seed.json första gången (tom tabell).
// Efterföljande uppdateringar görs via importen på /admin/minnesord, som
// bevarar granskningsstatus och kommentarer.
const { rows: [mnemonicCount] } = await pool.query('SELECT COUNT(*)::int AS count FROM mnemonic_words');
if (mnemonicCount.count === 0) {
  const seed = minnesordSeed as MinnesordSeed[];
  await pool.query(
    `INSERT INTO mnemonic_words (word, definition, mnemonic, position, status, note, example, etymology, image, related, traps)
     SELECT * FROM unnest($1::text[], $2::text[], $3::text[], $4::int[], $5::text[], $6::text[], $7::text[], $8::text[], $9::text[], $10::jsonb[], $11::jsonb[])
     ON CONFLICT (lower(word)) DO NOTHING`,
    [
      seed.map(w => w.word),
      seed.map(w => w.definition),
      seed.map(w => w.mnemonic),
      seed.map((_, i) => i),
      seed.map(w => w.status || 'unreviewed'),
      seed.map(w => w.note || ''),
      seed.map(w => w.example || ''),
      seed.map(w => w.etymology || ''),
      seed.map(w => w.image || ''),
      seed.map(w => (w.related && w.related.words && w.related.words.length ? JSON.stringify(w.related) : null)),
      seed.map(w => (w.traps && w.traps.length ? JSON.stringify(w.traps) : null)),
    ]
  );
  console.log(`Seedade ${seed.length} minnesord`);
}

// Komplettera befintliga rader med exempelmeningar och etymologier från
// seed-filen. Fyller bara tomma fält, skriver aldrig över befintligt innehåll.
const enrich = (minnesordSeed as MinnesordSeed[]).filter(w => w.example || w.etymology || w.image);
if (enrich.length) {
  await pool.query(
    `UPDATE mnemonic_words m SET
       example = CASE WHEN m.example = '' AND s.example <> '' THEN s.example ELSE m.example END,
       etymology = CASE WHEN m.etymology = '' AND s.etymology <> '' THEN s.etymology ELSE m.etymology END,
       image = CASE WHEN m.image = '' AND s.image <> '' THEN s.image ELSE m.image END,
       updated_at = NOW()
     FROM unnest($1::text[], $2::text[], $3::text[], $4::text[]) AS s(word, example, etymology, image)
     WHERE lower(m.word) = lower(s.word)
       AND ((m.example = '' AND s.example <> '') OR (m.etymology = '' AND s.etymology <> '') OR (m.image = '' AND s.image <> ''))`,
    [enrich.map(w => w.word), enrich.map(w => w.example || ''), enrich.map(w => w.etymology || ''), enrich.map(w => w.image || '')]
  );
}

// Seed-filen är den kanoniska källan för minnesregler och definitioner. Synka
// befintliga rader mot seed vid uppstart, men bara där texten faktiskt skiljer
// sig (idempotent). Granskningsstatus, kommentarer och position rörs inte.
const canonical = minnesordSeed as MinnesordSeed[];
if (canonical.length) {
  await pool.query(
    `UPDATE mnemonic_words m SET
       mnemonic = s.mnemonic,
       definition = s.definition,
       related = s.related,
       traps = s.traps,
       updated_at = NOW()
     FROM unnest($1::text[], $2::text[], $3::text[], $4::jsonb[], $5::jsonb[]) AS s(word, mnemonic, definition, related, traps)
     WHERE lower(m.word) = lower(s.word)
       AND (m.mnemonic <> s.mnemonic OR m.definition <> s.definition
            OR m.related IS DISTINCT FROM s.related
            OR m.traps IS DISTINCT FROM s.traps)`,
    [
      canonical.map(w => w.word),
      canonical.map(w => w.mnemonic),
      canonical.map(w => w.definition),
      canonical.map(w => (w.related && w.related.words && w.related.words.length ? JSON.stringify(w.related) : null)),
      canonical.map(w => (w.traps && w.traps.length ? JSON.stringify(w.traps) : null)),
    ]
  );
  // Ordningen sätts en gång från seed och ägs därefter av granskningsverktyget,
  // så att manuell omflyttning inte skrivs över vid omstart.
  const claimOrder = await pool.query(
    `INSERT INTO app_flags (key) VALUES ('seed_order_v1') ON CONFLICT (key) DO NOTHING RETURNING key`
  );
  if (claimOrder.rowCount && claimOrder.rowCount > 0) {
    await pool.query(
      `UPDATE mnemonic_words m SET position = s.position, updated_at = NOW()
       FROM unnest($1::text[], $2::int[]) AS s(word, position)
       WHERE lower(m.word) = lower(s.word) AND m.position <> s.position`,
      [canonical.map(w => w.word), canonical.map((_, i) => i)]
    );
  }
}

export default pool;
