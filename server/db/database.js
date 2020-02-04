const fs = require("fs");
const path = require("path");

const userPath = path.resolve(__dirname, "users.json");
const statisticPath = path.resolve(__dirname, "users_statistic.json");
const users = () => JSON.parse(fs.readFileSync(userPath, "utf-8"));
const statistic = () => JSON.parse(fs.readFileSync(statisticPath, "utf-8"));

module.exports = { users, statistic };
