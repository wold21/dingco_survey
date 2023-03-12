const Pool = require("pg").Pool;

const pool = new Pool({
    user: "tazo",
    host: "127.0.0.1",
    database: "dingco",
    password: "178432",
    port: 5432,
});

module.exports = pool;
