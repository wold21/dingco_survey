const { Client } = require("pg");

async function connect() {
    const client = new Client({
        user: "tazo",
        host: "127.0.0.1",
        database: "dingco",
        password: "178432",
        port: 5432,
    });
    await client.connect();
    return client;
}

module.exports = connect;
