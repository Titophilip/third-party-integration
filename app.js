const bodyparser = require("body-parser");
const dotenv = require("dotenv");
const express = require("express");
dotenv.config();
const app = express();

const { PORT } = process.env

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}.`)
})