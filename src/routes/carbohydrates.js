const express = require("express");
const router = express.Router();

const { API_URL } = require("../config");
const { getJSON } = require("../helpers");
const history = require("../database/history");

router.get("/:food", async (req, res) => {
    try {
        const { food } = req.params;

        const response = await getJSON(`${API_URL}?query=${food}`);

        const { carbohydrates_total_g: carbohydrates } = response.data.at(-1);

        if (!carbohydrates) {
            res.status(404).send({
                message: "Não foi possível encontrar um alimento com esse nome. Tente novamente :)"
            });
        };

        const data = {
            food,
            carbohydrates
        };

        history.push(data);

        res.status(200).send({
            status: "success",
            data,
        });
    } catch (err) {
        res.status(400).send({
            message: "Não foi possível recuperar seus dados.",
            error: err ?? null,
            errorMessage: err.message ?? null,
        });
    };
});

module.exports = router;
