const express = require("express");
const cors = require("cors");
// const logger = require("morgan");

const port = process.env.PORT || 3030;

const { users, statistic } = require("./db/database");
const app = express();
app.use(cors("*"));
// app.use(logger("dev"));
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
  const element = statistic().filter(
    el =>
      el.user_id === id &&
      new Date(el.date) >= new Date(datain) &&
      new Date(el.date) <= new Date(dataout)
  );
  const temp = [];

  dataRange(datain, dataout).forEach(el => {
    if (
      !element.some(
        a =>
          new Date(a.date).getDate() === el.getDate() &&
          new Date(a.date).getMonth() === el.getMonth() &&
          new Date(a.date).getFullYear() === el.getFullYear()
      )
    ) {
      temp.push({
        user_id: id,
        date: `${el.getFullYear()}-${el.getMonth() + 1}-${el.getDate()}`,
        page_views: 0,
        clicks: 0
      });
    }
  });

  return [...element, ...temp];
}

function dataRange(datain, dataout) {
  const data = new Date(datain);
  const arr = [data];
  for (
    let i = new Date(datain);
    i < new Date(dataout);
    i = new Date(i.setDate(i.getDate() + 1))
  ) {
    arr.push(i);
  }
  return arr;
}

app.get("/users", (req, res) => {
  const { page, limit } = req.query;
  res.status(200).json({
    users: [...selectItems(users(), Number(page), Number(limit))],
    allPage: Math.ceil(users().length / Number(limit))
  });
});

app.get("/users/:id", (req, res) => {
  const { id } = req.params;
  const { datain, dataout } = req.query;
  res.status(200).json({
    user: users().find(el => el.id === Number(id)),
    stats: selectUsersStats(Number(id), datain, dataout).sort(
      (a, b) => new Date(a.date) - new Date(b.date)
    )
  });
});

app.listen(port, () => console.log("Сервер запущен, порт: ", port));
