const { Pool } = require('pg');

const pool = new Pool({
  max: 10,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
});

module.exports = pool;
