const express = require("express");
const cors = require("cors");
const logger = require("morgan");

const port = process.env.PORT || 3030;

const { users, statistic } = require("./db/database");
const app = express();
app.use(cors("*"));
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

function selectItems(base, page, limit) {
  const arrItems = [];
  for (let i = (page - 1) * limit; i < (page - 1) * limit + limit; i += 1) {
    if (!base[i]) break;
    base[i].page_views = statistic()
      .filter(el => el.user_id === base[i].id)
      .reduce((acc, el) => (acc += el.page_views), 0);
    base[i].total_clicks = statistic()
      .filter(el => el.user_id === base[i].id)
      .reduce((acc, el) => (acc += el.clicks), 0);
    arrItems.push(base[i]);
  }
  return arrItems;
}

function selectUsersStats(id, datain, dataout) {
  return statistic().filter(
    el =>
      el.user_id === id &&
      new Date(el.date) >= datain &&
      new Date(el.date) <= dataout
  );
}

const Daterange = (datain, dataout) => {
  const data = new Date(datain);
  const arr = [data];

  // arr.push(data);

  for (let i = datain; i < dataout; i = new Date(i.setDate(i.getDate() + 1))) {
    arr.push(i);
    // console.log(datain);
  }
  return arr;
};

console.log(
  "TCL: Daterange -> Daterange",
  Daterange(new Date("2019-10-02"), new Date("2019-10-10"))
);

app.get("/users", (req, res) => {
  const { page, limit } = req.query;
  console.log(page, limit);
  res.status(200).json({
    users: [...selectItems(users(), Number(page), Number(limit))],
    allPage: Math.ceil(users().length / Number(limit))
  });
});

app.get("/users/:id", (req, res) => {
  const { id } = req.params;
  const { datain, dataout } = req.query;

  res
    .status(200)
    .json(selectUsersStats(Number(id), new Date(datain), new Date(dataout)));
});

app.listen(port, () => console.log("Сервер запущен, порт: ", port));
