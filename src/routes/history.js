const express = require("express");
const router = express.Router();

const history = require("../database/history");

router.get("/", (_, res) => {
    res.status(200).send({
        data: history,
    });
});

router.delete('/:id', (req, res) => {
    try {
        const { id } = res.params;
    
        const itemToBeDeleted = history.find(item => item.id === id);
        const indexToBeDeleted = history.findIndex(item => item.id === id);

        if (!itemToBeDeleted) {
            res.status(404).send({
                message: `Registro de ID ${id} não encontrado.`,
            });

            return;
        };

        history.splice(indexToBeDeleted, 1);

        res.status(200).send({
            message: `Item de ID ${id} deletado com sucesso.`,
            data: history
        });
    } catch (err) {
       throw err; 
    }
});

module.exports = router;
