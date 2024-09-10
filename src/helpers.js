const axios = require("axios");
const { API_KEY } = require("./config");

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
    };
};

const deleteFrom = function (collection, id) {
    try {
        const idToBeDeleted = collection.findIndex(item => item.id === id);

        if (!idToBeDeleted) throw new Error (`Não foi possível encontrar nenhum registro com o id de ${id} dentro de ${collection}.`);

        collection.splice(1, idToBeDeleted);
    } catch (err) {
        throw err;
    };
};

module.exports = { getJSON, deleteFrom }
