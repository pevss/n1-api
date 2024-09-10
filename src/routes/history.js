const express = require("express");
const router = express.Router();

const { deleteFrom } = require("../helpers");

const history = require("../database/history");

router.get("/", (_, res) => {
    res.status(200).send({
        data: history,
    });
});

router.delete('/:id', (req, res) => {
    try {
        const { id } = res.params;

        deleteFrom(history, id);

        res.status(200).send({
            message: `Item de ID ${id} deletado com sucesso.`,
            data: history
        });
    } catch (err) {
       throw err; 
    }
});

module.exports = router;
