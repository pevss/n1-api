const express = require("express");
const app = express();
const cors = require("cors");

const port = 3333;

const carbohydrates = require("./routes/carbohydrates");

app.use(cors());
app.use(express.json());

app.use("/carbohydrates", carbohydrates);

app.listen(port, () => console.log(`The server is running on the port ${port}`));
