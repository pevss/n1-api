const axios = require("axios");
const { API_KEY } = require("./config");

/**
 * @param {string} URL API url
 * @returns {object} The response object returned from the request
 * @throws Will throw an error if the request fails
 */
const getJSON = async function (url) {
	try {
		const data = await axios.get(url, {
			headers: {
				"X-Api-Key": API_KEY,
			},
		});

		return data;
	} catch (err) {
		throw err;
	}
};

/**
 * @param {object[]} Collection Array of objects, where every object has an "id" property
 * @param {number} ID The ID of the item to be deleted
 * @returns {object} A copy of the deleted object
 * @throws Will throw an error if the item could not be found inside the collection
 */
const deleteFrom = function (collection, id) {
	try {
		const idToBeDeleted = collection.findIndex((item) => item.id === +id);
		const deletedItem = { ...collection[idToBeDeleted] };

		if (idToBeDeleted === -1) {
			throw new Error(
				`Não foi possível encontrar nenhum registro com o id de ${id}.`
			);
		}

		collection.splice(idToBeDeleted, 1);

		return deletedItem;
	} catch (err) {
		throw err;
	}
};

module.exports = { getJSON, deleteFrom };
