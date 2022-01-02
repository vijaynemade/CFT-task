const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/user");

const app = express();

app.use(bodyParser.urlencoded({extended : false}));

app.use(bodyParser.json());

app.use("/users", userRoutes)

mongoose.connect("mongodb+srv://vijay:vijay123@cluster0.lkklg.mongodb.net/TDE?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true })
.then(result => {
	app.listen(3000);
	console.log("DB connect")
})