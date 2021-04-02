const express = require("express");
const app = express();
require('dotenv').config()
// const request = require("request");
// const bodyParser = require("body-parser");

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
 res.send(`Hello World, ${process.env.PORT}`).status(200)
});

app.listen(process.env.PORT, () => console.log(`App is running on port ${process.env.PORT||3000}`));
