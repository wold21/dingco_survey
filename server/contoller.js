const pool = require("../database");
const getMembers = async (req, res) => {
    await pool.query("select * from init_survey", (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

module.exports = {
    getMembers,
};
