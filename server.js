const app = require("./app");
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config({ path: ".env" });

const DB =
	"mongodb://abhinav:pass1234@ac-wetuaxb-shard-00-00.hjcegsc.mongodb.net:27017,ac-wetuaxb-shard-00-01.hjcegsc.mongodb.net:27017,ac-wetuaxb-shard-00-02.hjcegsc.mongodb.net:27017/blog-base?ssl=true&replicaSet=atlas-7vl3r0-shard-0&authSource=admin&retryWrites=true&w=majority";

mongoose
	.connect(DB, {
		useNewUrlParser: true,
		useUnifiedTopology: true
	})
	.then(() => {
		console.log("DB connected successfully");
	})
	.catch((err) => {
		console.log(err);
	});
// mongoose.set('strictQuery', true)
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
	console.log("Server connected succesfully!!");
});
