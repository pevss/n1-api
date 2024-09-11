const express = require("express");
const router = express.Router();

const { API_URL } = require("../config");
const { getJSON } = require("../helpers");
const history = require("../database/history");

router.get("/:food", async (req, res) => {
	try {
		const { food } = req.params;

		const autoincrementId = history.at(-1)?.id + 1 || 1;

		const response = await getJSON(`${API_URL}?query=${food}`);
		const { carbohydrates_total_g: carbohydrates = null } =
			response.data?.at(-1) || {};

		if (!carbohydrates) {
			res.status(404).send({
				message:
					"Não foi possível encontrar um alimento com esse nome. Tente novamente :)",
			});

			return;
		}

		const data = {
			id: autoincrementId,
			food,
			carbohydrates,
		};

		history.push(data);

		res.status(200).send({
			status: `Novo registro de id ${autoincrementId} criado com sucesso`,
			data,
		});
	} catch (err) {
		res.status(400).send({
			message: err.message,
			error: err.stack,
		});
	}
});

module.exports = router;
