const { Router } = require("express");
const pool = require("../database");
const router = Router();

router.get("/", async (req, res) => {
    try {
        const allMembers = await pool.query("select * from init_survey");
        res.json(allMembers.rows);
    } catch (err) {
        throw err;
    }
});

module.exports = router;
