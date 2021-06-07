const bodyparser = require("body-parser");
const dotenv = require("dotenv");
const express = require("express");
dotenv.config();

const app = express();
app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());

const { PORT } = process.env;

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}.`);
});

app.post("/profile", async(req, res) => {
    const { name, email, subject, message } = req.body
    try {
        if (!name && !email && !subject && !message ) {
            return res.json({ message: "Incomplete data." })
        }
    } catch (error) {
        console.log(error)
    }
})