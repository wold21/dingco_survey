const { Client } = require("pg");
const client = new Client({
    user: "tazo",
    host: "127.0.0.1",
    database: "dingco",
    password: "178432",
    port: 5432,
});
client.connect();
client.query("select * from init_survey", (err, res) => {
    console.log(err, res);
    client.end();
});
