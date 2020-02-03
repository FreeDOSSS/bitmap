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

app.get("/users", (req, res) => {
  USERS.find()
    .limit(16)
    .exec((err, user) => res.status(200).json(user));
});

app.listen(port, () => console.log("Сервер запущен, порт: ", port));
