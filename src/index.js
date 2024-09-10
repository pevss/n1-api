const express = require("express");
const app = express();
const cors = require("cors");

const port = 3333;

const carbohydrates = require("./routes/carbohydrates");
const history = require("./routes/history");

app.use(cors());
app.use(express.json());

app.use("/carbohydrates", carbohydrates);
app.use("/history", history);

app.listen(port, () => console.log(`The server is running on the port ${port}`));
