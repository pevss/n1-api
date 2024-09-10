const express = require("express");
const router = express.Router();

const history = require("../database/history");

router.get("/", (_, res) => {
    res.status(200).send({
        data: history,
    });
});

module.exports = router;
