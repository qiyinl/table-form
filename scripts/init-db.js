const { Pool } = require('pg');

async function initDB() {
  if (!process.env.DATABASE_URL) {
    console.warn('⚠️ No DATABASE_URL found in environment variables. Skipping database table initialization.');
    return;
  }

  const isLocal = process.env.DATABASE_URL.includes('localhost') || process.env.DATABASE_URL.includes('127.0.0.1');

  const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ...(isLocal ? {} : { ssl: { rejectUnauthorized: false } }),
  });

  const client = await pool.connect();

  try {
    console.log('Connecting to PostgreSQL database...');
    
    // Create the table to replicate the structure of data.json
    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS records (
        "id" VARCHAR(255) PRIMARY KEY,
        "Nombre" VARCHAR(255) NOT NULL,
        "Estudio" VARCHAR(255) NOT NULL,
        "Edad" INTEGER NOT NULL,
        "Actividades" JSONB NOT NULL
      );
    `;

    await client.query(createTableQuery);
    console.log('✅ Table "records" verified or created successfully in PostgreSQL.');
  } catch (err) {
    console.error('❌ Error initializing database:', err);
    process.exit(1);
  } finally {
    client.release();
    await pool.end();
  }
}

initDB();
