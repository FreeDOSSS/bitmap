const express = require("express");
const cors = require("cors");
const logger = require("morgan");

// Колекции
const connectDB = require("./db/connectDB")();
const USERS = require("./db/model/users.model");
const STATISTIC = require("./db/model/statistic.model");
const port = process.env.PORT || 3030;
const app = express();
app.use(cors("*"));
app.use(logger("dev"));

app.listen(port, () => console.log("Сервер запущен, порт: ", port));
