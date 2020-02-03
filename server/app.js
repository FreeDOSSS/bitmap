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

// console.log("TCL: USERS.count()", USERS.count());
app.get("/users", (req, res) => {
  const limit = 0;
  USERS.find()
    .limit(limit)
    .exec((err, user) => {
      res.status(200).json(user);
    });
});

app.listen(port, () => console.log("Сервер запущен, порт: ", port));
