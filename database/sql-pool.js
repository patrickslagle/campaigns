const { Pool } = require('pg');

const pool = new Pool({
  max: 10,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
  connectionString: 'postgres://nyuzgibb:dgptSbjP7otVsSfbIdD-g3bp06z0VJIo@baasu.db.elephantsql.com:5432/nyuzgibb',
});

module.exports = pool;
