const axios = require("axios");
const { API_URL, API_KEY } = require("./config");

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

module.exports = { getJSON }
