require("dotenv").config();

const express = require("express");

const app = express();

app.listen(process.env.PORT, () => {
	console.log(`Listening for API Calls on Port ${process.env.PORT}`);
});

app.get("/", (req, res) => {
	res.send("Hello world");
});