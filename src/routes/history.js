const express = require("express");
const router = express.Router();

const { deleteFrom } = require("../helpers");

const history = require("../database/history");

router.get("/", (_, res) => {
	res.status(200).send({
		data: history,
	});
});

router.delete("/:id", (req, res) => {
	try {
		const { id } = req.params;

		const { food: deletedFood } = deleteFrom(history, id);

		res.status(200).send({
			message: `Item "${deletedFood}" de ID ${id} deletado com sucesso.`,
			data: history,
		});
	} catch (err) {
		res.status(400).send({
			message: err.message,
			error: err.stack,
		});
	}
});

module.exports = router;
